import React, { InputHTMLAttributes } from "react";
import DataTable from "../data-table";
import SectionTitle from "../section-title";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const RoomsList: React.FC<Props> = ({}) => {
  const columnsConfig = [
    {
      key: "name",
      title: "Room Name",
    },
    {
      key: "players",
      title: "Players",
    },
    {
      key: "status",
      title: "Status",
    },
  ];
  return (
    <>
      <section className="roomsList">
        <SectionTitle title="Available Rooms" />
        <DataTable columns={columnsConfig} dataList={[]} />
      </section>
    </>
  );
};

export default RoomsList;
