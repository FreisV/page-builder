import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, getProject, updateProject } from "../../store/reducers/requestReducer/actions/projectActions";

const UpdateProject = () => {
  const name = useRef();
  const isOpen = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.requset);

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const project = await dispatch(getProject(params.id));
        name.current.value = project.name;
        isOpen.current.checked = project.isOpen;
      } catch (e) {
        console.error(e);
      }
    };
    getProjectData();
  }, [dispatch, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(updateProject(params.id, name.current.value, isOpen.current.checked));
      console.log(res);
      navigate("/projects");
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await dispatch(deleteProject(params.id));
      navigate("/projects");
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
    }
  }, [error])

  useEffect(() => {
    if (errorMessage !== "") {
      setErrorMessageActive(true);
    }
  }, [errorMessage])

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <h2 className={styles.title}>Настройки проекта</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            ref={name}
            type="text"
            placeholder="Название"
          />
          <label className={styles.label}>
            <input className={styles.checkbox} ref={isOpen} type="checkbox" />{" "}
            Доступен к просмотру ?
          </label>
          <Button type="submit">Сохранить</Button>
        </form>
        <Button isRed={true} onClick={handleDelete}>Удалить проект</Button>
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

export default UpdateProject;
