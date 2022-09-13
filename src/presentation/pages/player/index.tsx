import React, {
  useEffect,
  Context,
  createContext,
  useState,
  MouseEventHandler,
  useContext,
} from "react";
import styles from "./styles.module.scss";
import MainTemplate from "presentation/templates/main";
import SectionTitle from "presentation/components/section-title";
import Button from "presentation/components/button";
import { setPlayer } from "main/atoms";
import { useSetRecoilState } from "recoil";
import { PlayerModel } from "domain/models/player";
import { useNavigate } from "react-router-dom";

type Props = {};

const Player: React.FC<Props> = ({}: Props) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const submitForm: MouseEventHandler<Element> = (event) => {
    event.preventDefault();
    console.log("setou");

    setPlayerState({
      name,
    });

    navigate("/rooms");
  };

  const setPlayerState = useSetRecoilState<PlayerModel>(setPlayer);

  return (
    <MainTemplate>
      <section className={styles["player"]}>
        <div className={styles["player__wrapper"]}>
          <SectionTitle title="Create your player!" />
          <form>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Player Name"
            />

            <Button type="submit" name="Submit" onClick={submitForm} />
          </form>
        </div>
      </section>
    </MainTemplate>
  );
};

export default Player;
