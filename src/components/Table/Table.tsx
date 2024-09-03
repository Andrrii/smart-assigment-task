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

const Table = ({data, columnDefs}: ITableProps): JSX.Element => {
  const filters = useSelectedFilters();

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      columnDefs.every((col) => {
        let filterValue = "";
        if (Object.hasOwn(filters, col.field)) {
          // @ts-expect-error col.field is expected to exist in filters after checking Object.hasOwn
          filterValue = filters?.[col.field];
        }
        if (!filterValue) return true;
        const itemValue = item[col.field];
        return itemValue
          .toString()
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      }),
    );
  }, [data, filters, columnDefs]);

  return (
    <div className={cls.tableContainer}>
      <table className={cls.table}>
        <thead>
          <tr>
            {columnDefs.map((col) => (
              <th key={col.field} className={cls.th}>
                {col?.headerName || col.field}
                {col?.isFilterable && (
                  <Input onChange={col?.onFilterChanged} {...col?.inputProps} />
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
