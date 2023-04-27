import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";

const CreateProject = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <h2 className={styles.title}>Создать новый проект</h2>
        <form className={styles.form} action="">
          <input className={styles.input} type="text" placeholder="Название" />
          <label className={styles.label}>
            <input className={styles.checkbox} type="checkbox" /> Доступен к
            просмотру ?
          </label>
          <Button type="submit">Создать</Button>
        </form>
      </main>
    </>
  );
};

export default CreateProject;
