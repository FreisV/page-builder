import React from "react";
import styles from "./styles.module.css";

const Button = ({ type, children }) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
