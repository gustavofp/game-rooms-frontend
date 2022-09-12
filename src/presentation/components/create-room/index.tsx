import React, { MouseEventHandler, useContext, useState } from "react";
import { useRecoilValue } from "recoil";
import { createRoomVisibleState } from "main/atoms";
import { ROOMS_STATUS } from "config/constants";
import { Room } from "domain/models/room";
import Button from "../button";
import SectionTitle from "../section-title";
import styles from "./styles.module.scss";

const CreateRoom: React.FC = () => {
  const createRoomVisible = useRecoilValue<Boolean>(createRoomVisibleState);
  const [name, setName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(5);

  const submitForm: MouseEventHandler<Element> = (event) => {
    // console.log(event);
    event.preventDefault();
    const room: Room = {
      name,
      max_players: maxPlayers,
      players: [],
    };
    // createRoomUseCase && createRoomUseCase.execute(room);
  };

  return (
    createRoomVisible && (
      <div className={styles["createRoom"]}>
        <SectionTitle title="Create Room" />
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Room Name"
          />

          <input
            type="number"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(Number(e.target.value))}
            placeholder="Max players"
          />

          <Button type="submit" name="Submit" onClick={submitForm} />
        </form>
      </div>
    )
  );
};

export default CreateRoom;
