import {memo} from "react";
import Input from "../Input/Input";
import cls from "./Table.module.css";

type Data = {
  id: string | number;
  [key: string]: string | number;
};

interface ColumnDef {
  field: keyof Data;
  headerName?: string;
  isFilterable?: boolean;
  onFilterChanged?: (value: string) => void;
}

interface ITableProps {
  data: Data[];
  columnDefs: ColumnDef[];
  filters?: Record<keyof Data, string>;
}

const Table = ({data, columnDefs}: ITableProps): JSX.Element => {
  return (
    <div className={cls.tableContainer}>
      <table className={cls.table}>
        <thead>
          <tr>
            {columnDefs.map((col) => (
              <th key={col.field} className={cls.th}>
                {col?.headerName || col.field}
                {col?.isFilterable && <Input onChange={col?.onFilterChanged} />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
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

export default Table;
