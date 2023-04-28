import React from "react";
import styles from "./styles.module.css";

const Button = ({ type, children, isRed }) => {
  return (
    <button
      className={isRed ? `${styles.button} ${styles.red}` : styles.button}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
