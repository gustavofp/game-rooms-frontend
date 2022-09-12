import React, { useEffect, Context, createContext } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Navbar from "presentation/components/navbar";
import RoomsList from "presentation/components/rooms-list";
import { Room } from "domain/models/room";
import { GetRoomsListUseCase } from "domain/use-cases/get-rooms-list";
import { UpdateRoomsFeedUseCase } from "domain/use-cases/update-rooms-feed";
import styles from "./styles.module.scss";
import { createRoomVisibleState, roomsListState } from "main/atoms";
import RoomDetails from "presentation/components/room-details";
import CreateRoom from "presentation/components/create-room";
import { CreateRoomUseCase } from "domain/use-cases/create-room";
// import { RoomsContext } from "./context";
import MainTemplate from "presentation/templates/main";

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
