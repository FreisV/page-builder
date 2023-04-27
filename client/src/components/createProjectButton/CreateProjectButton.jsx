import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const CreateProjectButton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/createProject");
  }
  return (
    <button className={styles.wrapper} onClick={handleClick}>
      Создать новый проект
    </button>
  );
};

export default CreateProjectButton;
