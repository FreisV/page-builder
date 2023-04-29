import React from "react";
import styles from "./styles.module.css";

const Button = ({ type, children, isRed, ...otherProps}) => {
  return (
    <button
      className={isRed ? `${styles.button} ${styles.red}` : styles.button}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
