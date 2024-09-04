import {memo, useMemo} from "react";
import Input, {AppInputProps} from "../Input/Input";
import cls from "./Table.module.css";
import {useSelectedFilters} from "../../hooks/useSelectedFilters";

type Data = {
  id: string | number;
  [key: string]: string | number;
};

type BaseColumnDef = {
  field: keyof Data;
  headerName?: string;
};

type ColumnDefWithoutFilter = BaseColumnDef & {isFilterable?: false};

type ColumnDefWithFilter = BaseColumnDef & {
  isFilterable: true;
  onFilterChanged: (value: string) => void;
  inputProps?: Omit<AppInputProps, "onChange">;
};

export type ColumnDef = ColumnDefWithoutFilter | ColumnDefWithFilter;

interface ITableProps {
  data: Data[];
  columnDefs: ColumnDef[];
}

const getFilterValue = (field: ColumnDef["field"], filters = {}) =>
  field && field in filters ? filters[field as keyof typeof filters] : "";

const Table = ({data, columnDefs}: ITableProps): JSX.Element => {
  const filters = useSelectedFilters();

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      columnDefs.every(({field}) => {
        const filterValue = getFilterValue(field, filters);
        if (!filterValue) return true;
        const itemValue = item[field];
        return itemValue
          .toString()
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      }),
    );
  }, [data, columnDefs, filters]);

  return (
    <div className={cls.tableContainer}>
      <table className={cls.table}>
        <thead>
          <tr>
            {columnDefs.map((col) => (
              <th key={col.field} className={cls.th}>
                {col?.headerName || col.field}
                {col?.isFilterable && (
                  <Input
                    value={getFilterValue(col?.field, filters)}
                    onChange={col?.onFilterChanged}
                    {...col?.inputProps}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id} className={cls.trHover}>
              {columnDefs.map((col) => (
                <td key={col.field} className={cls.td}>
                  {user[col.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
