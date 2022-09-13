import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SectionTitle from "../section-title";
import {
  roomsListState,
  selectedRoomState,
  createRoomVisibleState,
} from "main/atoms";
import styles from "./styles.module.scss";
import { RoomModel } from "domain/models/room";
import Button from "../button";
import { ROOMS_STATUS } from "config/constants";

const RoomsList: React.FC = () => {
  const roomsList = useRecoilValue(roomsListState);
  const setSelectedRoom = useSetRecoilState<RoomModel | null>(
    selectedRoomState
  );
  const setCreateRoomVisible = useSetRecoilState<Boolean>(
    createRoomVisibleState
  );

  const renderTitle = (title: string) => <th>{title}</th>;

  const renderTitles = (columns: string[]) =>
    columns.map((column) => renderTitle(column));

  const renderTableHeaders = (columns: string[]) => (
    <tr key={"header"} className={styles["table__headerRow"]}>
      {renderTitles(columns)}
    </tr>
  );

  const selectRoom = (room: RoomModel) => {
    setCreateRoomVisible(false);
    setSelectedRoom(room);
  };

  const renderDataRow = (room: RoomModel) => (
    <tr
      className={styles["table__row"]}
      key={room.id}
      onClick={() => selectRoom(room)}
    >
      <td>{room.name}</td>
      <td>
        {room.players?.length}/{room.max_players}
      </td>
      <td>{room.status}</td>
    </tr>
  );

  const renderData = (list: RoomModel[]) => list.map(renderDataRow);

  const renderEmptyDataMessage = (message: string) => (
    <tr className={styles["table__row"]}>
      <td colSpan={3} className={styles["item__cell--empty"]}>
        {message}
      </td>
    </tr>
  );

  const columns = ["Room Name", "Players", "Status"];

  const createRoom = () => {
    setSelectedRoom(null);
    setCreateRoomVisible(true);
  };

  return (
    <>
      <section className={styles["roomsList"]}>
        <div className={styles["roomsList__info"]}>
          <div className={styles["roomsList__wrapper"]}>
            <SectionTitle title="Available Rooms" />
          </div>
          <div className={styles["roomsList__wrapper--right"]}>
            <Button name="Create Room" onClick={createRoom} />
          </div>
        </div>
        <div className={styles["roomsList__table"]}>
          <table className={styles["table"]}>
            <thead>{renderTableHeaders(columns)}</thead>
            <tbody>
              {roomsList.length > 0
                ? renderData(roomsList)
                : renderEmptyDataMessage("Rooms not found :(")}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default RoomsList;
