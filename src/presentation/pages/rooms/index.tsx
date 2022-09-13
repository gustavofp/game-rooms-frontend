import React, { useEffect, Context, createContext } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Navbar from "presentation/components/navbar";
import RoomsList from "presentation/components/rooms-list";
import { RoomModel } from "domain/models/room";
import { GetRoomsListUseCase } from "domain/use-cases/get-rooms-list";
import { UpdateRoomsFeedUseCase } from "domain/use-cases/update-rooms-feed";
import styles from "./styles.module.scss";
import { createRoomVisibleState, roomsListState, setPlayer } from "main/atoms";
import RoomDetails from "presentation/components/room-details";
import CreateRoom from "presentation/components/create-room";
import { CreateRoomUseCase } from "domain/use-cases/create-room";
// import { RoomsContext } from "./context";
import MainTemplate from "presentation/templates/main";
import { RoomsListModel } from "domain/models/rooms-list";
import { PlayerModel } from "domain/models/player";
import { useNavigate } from "react-router-dom";
import { JoinRoomUseCase } from "domain/use-cases/join-room";

type Props = {
  getRoomsList: GetRoomsListUseCase;
  updateRoomsFeed: UpdateRoomsFeedUseCase;
  createRoomUseCase: CreateRoomUseCase;
  joinRoomUseCase: JoinRoomUseCase;
};

const Rooms: React.FC<Props> = ({
  getRoomsList,
  updateRoomsFeed,
  createRoomUseCase,
  joinRoomUseCase,
}: Props) => {
  const setRoomsList = useSetRecoilState<RoomModel[]>(roomsListState);
  const player = useRecoilValue<PlayerModel>(setPlayer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!player.name) {
      navigate("/");
    }

    getRoomsList.execute().then((roomList) => setRoomsList(roomList.rooms));

    updateRoomsFeed.execute((rooms: RoomModel[]) => {
      setRoomsList(rooms);
    });
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
          <RoomDetails joinRoomUseCase={joinRoomUseCase} />
          <CreateRoom createRoomUseCase={createRoomUseCase} />
        </div>
      </section>
    </MainTemplate>
  );
};

export default Rooms;
