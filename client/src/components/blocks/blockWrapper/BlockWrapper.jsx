import React from "react";
import styles from "./styles.module.css";

const BlockWrapper = ({ blockStyles, children }) => {
  return (
    <div
      className={styles.block}
      style={{
        backgroundColor: blockStyles?.backgroundColor,
        paddingTop: blockStyles?.paddingTop,
        paddingBottom: blockStyles?.paddingBottom,
      }}
    >
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default BlockWrapper;
