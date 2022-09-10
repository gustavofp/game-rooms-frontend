import React, { useEffect, Context, createContext } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Navbar from "../../components/navbar";
import RoomsList from "../../components/rooms-list";
import { Room } from "../../models/room";
import { GetRoomsListUseCase } from "../../use-cases/interfaces/get-rooms-list";
import { UpdateRoomsFeedUseCase } from "../../use-cases/interfaces/update-rooms-feed";
import styles from "./styles.module.scss";
import { createRoomVisibleState, roomsListState } from "../../atoms";
import RoomDetails from "../../components/room-details";
import CreateRoom from "../../components/create-room";
import { CreateRoomUseCase } from "../../use-cases/interfaces/create-room";
// import { RoomsContext } from "./context";
import MainTemplate from "../../templates/main";

type Props = {
  getRoomsList: GetRoomsListUseCase;
  updateRoomsFeed: UpdateRoomsFeedUseCase;
  createRoomUseCase: CreateRoomUseCase;
};

const Rooms: React.FC<Props> = ({
  getRoomsList,
  updateRoomsFeed,
  createRoomUseCase,
}: Props) => {
  const [roomsList, setRoomsList] = useRecoilState<Room[]>(roomsListState);

  useEffect(() => {
    getRoomsList.execute().then((roomList) => setRoomsList(roomList.rooms));
  }, []);

  // const roomsContext: RoomsContext = {
  //   createRoomUseCase,
  // };

  return (
    <MainTemplate>
      <section className={styles["rooms"]}>
        <div className={styles["rooms__wrapper"]}>
          <RoomsList />
        </div>
        <div className={styles["rooms__wrapper"]}>
          <RoomDetails />
          <CreateRoom />
        </div>
      </section>
    </MainTemplate>
  );
};

export default Rooms;
