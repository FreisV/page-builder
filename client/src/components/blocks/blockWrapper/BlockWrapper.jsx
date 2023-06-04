import React from "react";
import styles from "./styles.module.css";
import { API_URL } from "../../../http";

const BlockWrapper = ({ blockStyles, children }) => {
  return (
    <div
      className={styles.block}
      style={{
        backgroundColor: blockStyles?.backgroundColor,
        backgroundImage: `url(${API_URL}/images/${blockStyles?.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: blockStyles?.minHeight,
        paddingTop: blockStyles?.paddingTop,
        paddingBottom: blockStyles?.paddingBottom,
      }}
    >
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default BlockWrapper;
