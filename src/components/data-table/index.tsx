import React, { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ColumnConfig {
  key: string;
  title: string;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  columns: ColumnConfig[];
  dataList: object[];
}

const renderTitle = ({ title }: ColumnConfig) => <th>{title}</th>;

const renderTitles = (columns: ColumnConfig[]) =>
  columns.map((column) => renderTitle(column));

const renderTableHeaders = (columns: ColumnConfig[]) => (
  <tr key={"header"} className={styles["table__headerRow"]}>
    {renderTitles(columns)}
  </tr>
);

const renderData = (list: object[]) => <tr></tr>;

const renderEmptyDataMessage = (
  message: string,
  { length }: ColumnConfig[]
) => (
  <tr className={styles["table__row"]}>
    <td colSpan={length} className={styles["item__cell--empty"]}>
      {message}
    </td>
  </tr>
);

const RoomsListTable: React.FC<Props> = ({ title, columns, dataList }) => {
  return (
    <>
      <table className={styles["table"]}>
        <thead>{renderTableHeaders(columns)}</thead>
        <tbody>
          {dataList.length > 0
            ? renderData(dataList)
            : renderEmptyDataMessage("Rooms not found :(", columns)}
        </tbody>
      </table>
    </>
  );
};

export default RoomsListTable;
