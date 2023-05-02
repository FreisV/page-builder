import React from "react";
import styles from "./styles.module.css";

const Textarea = ({ forwardedRef, ...otherProps }) => {
  return (
    <textarea className={styles.textarea} ref={forwardedRef} {...otherProps} />
  );
};

export default Textarea;
