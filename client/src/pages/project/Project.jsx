import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import BlockList from "../../components/blockList/BlockList";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import DownloadService from "../../services/DownloadService";
import { cleanError } from "../../store/reducers/blocksReducer/actions";

const Project = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const params = useParams();

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.blocks);

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
    }
    dispatch(cleanError());
  }, [error]);

  useEffect(() => {
    if (errorMessage !== "") {
      setErrorMessageActive(true);
    }
  }, [dispatch, errorMessage]);

  useEffect(() => {
    if (!errorMessageActive) {
      setErrorMessage("");
    }
  }, [dispatch, errorMessageActive]);

  const download = async (e) => {
    e.preventDefault();
    await DownloadService.download(params.id);
  };

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <BlockList />
        <div className={styles.button}>
          <Button onClick={download}>Скачать</Button>
        </div>
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

export default Project;
