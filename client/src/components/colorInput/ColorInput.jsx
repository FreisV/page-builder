import React from "react";
import styles from "./styles.module.css";

const ColorInput = ({ forwardedRef, desc, ...otherProps }) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} ref={forwardedRef} type="color" />
      {desc}
    </label>
  );
};

export default ColorInput;
