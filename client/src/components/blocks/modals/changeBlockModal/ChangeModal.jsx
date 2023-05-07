import React from "react";
import Modal from "../../../modal/Modal";
import styles from "./styles.module.css";

const ChangeModal = ({ active, setActive, handleUpdate, children }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => setActive(false)}>
          Закрыть
        </button>
        <button
          className={`${styles.button} ${styles.save}`}
          onClick={handleUpdate}
        >
          Сохранить и закрыть
        </button>
      </div>
      <h2 className={styles.title}>Изменить блок</h2>
      <div className={styles.fields}>{children}</div>
    </Modal>
  );
};

export default ChangeModal;
