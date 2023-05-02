import React from "react";
import styles from "./styles.module.css";

const Checkbox = ({ forwardedRef, desc, ...otherProps }) => {
  return (
    <label className={styles.label}>
      <input className={styles.checkbox} ref={forwardedRef} type="checkbox" />{" "}
      {desc}
    </label>
  );
};

export default Checkbox;
