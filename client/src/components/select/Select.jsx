import React from "react";
import styles from "./styles.module.css";

const Select = ({ forwardedRef, desc, values, ...otherProps }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{desc}:</label>
      <select className={styles.select} ref={forwardedRef}>
        {values.map((value) => (
          <option value={value.value} key={value.value}>
            {value.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
