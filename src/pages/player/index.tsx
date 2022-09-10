import React, {
  useEffect,
  Context,
  createContext,
  useState,
  MouseEventHandler,
  useContext,
} from "react";
import styles from "./styles.module.scss";
import MainTemplate from "../../templates/main";
import SectionTitle from "../../components/section-title";
import Button from "../../components/button";
import { usePlayerContext } from "./context";

type Props = {};

const Rooms: React.FC<Props> = ({}: Props) => {
  const [name, setName] = useState("");
  const { state, setState } = usePlayerContext();

  const submitForm: MouseEventHandler<Element> = (event) => {
    event.preventDefault();
    console.log("setou");

    setState({ ...state, name });
  };
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

export default Rooms;
