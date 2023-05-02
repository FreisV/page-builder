import React from "react";
import styles from "./styles.module.css";

const Input = ({ forwardedRef, ...otherProps }) => {
  return <input className={styles.input} ref={forwardedRef} {...otherProps} />;
};

export default Input;
