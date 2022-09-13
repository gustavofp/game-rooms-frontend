import React, { InputHTMLAttributes } from "react";
import { useRecoilValue } from "recoil";
import { selectedRoomState, setPlayer } from "main/atoms";
import { PlayerModel } from "domain/models/player";
import SectionTitle from "presentation/components/section-title";
import { ROOMS_STATUS } from "config/constants";
import Button from "../button";
import { JoinRoomUseCase } from "domain/use-cases/join-room";
// import styles from "./styles.module.scss";

const renderPlayerList = (players: PlayerModel[]) =>
  players.map(({ name }: PlayerModel) => <li>{name}</li>);

type Props = {
  joinRoomUseCase: JoinRoomUseCase;
};

const RoomDetails: React.FC<Props> = ({ joinRoomUseCase }: Props) => {
  const selectedRoom = useRecoilValue(selectedRoomState);
  const player = useRecoilValue(setPlayer);

  const joinRoom = async (roomId: string) => {
    console.log(roomId);
    await joinRoomUseCase.execute(roomId, player);
  };
  return (
    selectedRoom && (
      <>
        <SectionTitle title="Room details" />
        <h3>{selectedRoom?.name}</h3>
        <SectionTitle title="Players" />
        <ul>{renderPlayerList(selectedRoom.players)}</ul>
        {selectedRoom.status?.toUpperCase() === ROOMS_STATUS.WAITING && (
          <Button
            name="Join Room"
            onClick={(event) => selectedRoom.id && joinRoom(selectedRoom.id)}
          />
        )}
      </>
    )
  );
};

export default RoomDetails;
