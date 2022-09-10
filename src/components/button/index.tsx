import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styles from "./styles.module.scss";

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler<Element>;
  name: string;
}

const Button: React.FC<Params> = ({ name, onClick }: Params) => {
  return (
    <button className={styles["btn"]} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
