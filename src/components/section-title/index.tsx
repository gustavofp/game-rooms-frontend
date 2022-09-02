import React, { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <>
      <h2 className={styles["title"]}>{title}</h2>
    </>
  );
};

export default SectionTitle;
