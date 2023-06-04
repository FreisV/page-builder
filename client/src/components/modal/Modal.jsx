import React, { useEffect } from "react";
import styles from "./styles.module.css";

const Modal = ({ active, setActive, children }) => {
  useEffect(() => {
    if (active) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [active]);

  return (
    <div
      className={active ? `${styles.window} ${styles.active}` : styles.window}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
