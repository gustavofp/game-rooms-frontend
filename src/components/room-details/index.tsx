import React, { InputHTMLAttributes } from "react";
import { useRecoilValue } from "recoil";
import { selectedRoomState } from "../../atoms";
import { Player } from "../../models/player";
import SectionTitle from "../section-title";
// import styles from "./styles.module.scss";

const renderPlayerList = (players: Player[]) =>
  players.map(({ name }: Player) => <li>{name}</li>);

const RoomDetails: React.FC = () => {
  const selectedRoom = useRecoilValue(selectedRoomState);
  return (
    selectedRoom && (
      <>
        <SectionTitle title="Room details" />
        <h3>{selectedRoom?.name}</h3>
        <SectionTitle title="Players" />
        <ul>{renderPlayerList(selectedRoom.players)}</ul>
      </>
    )
  );
};

export default RoomDetails;
