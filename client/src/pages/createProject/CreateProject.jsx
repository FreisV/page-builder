import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import { createProject } from "../../store/reducers/requestReducer/actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Checkbox from "../../components/checkbox/Checkbox";

const CreateProject = () => {
  const name = useRef();
  const isOpen = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.requset);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = await dispatch(
      createProject(name.current.value, isOpen.current.checked)
    );
    if (project) {
      navigate("/projects");
    }
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (errorMessage !== "") {
      setErrorMessageActive(true);
    }
  }, [errorMessage]);

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <h2 className={styles.title}>Создать новый проект</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input forwardedRef={name} placeholder="Название" />
          <Checkbox forwardedRef={isOpen} desc="Доступен к просмотру ?" />
          <Button type="submit">Создать</Button>
        </form>
      </main>

      <ErrorMessage
        active={errorMessageActive}
        setActive={setErrorMessageActive}
      >
        {errorMessage}
      </ErrorMessage>
    </>
  );
};

export default CreateProject;
