import React from "react";
import Navbar from "../../components/navbar";
import RoomsList from "../../components/rooms-list";
import styles from "./styles.module.scss";

const Rooms: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className={styles["rooms"]}>
        <div className={styles["rooms__wrapper"]}>
          <RoomsList title="Available rooms" />
        </div>
        <div className={styles["rooms__wrapper"]}>opa</div>
      </section>
    </>
  );
};

export default Rooms;
