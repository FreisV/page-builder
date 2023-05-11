import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import BlockList from "../../components/blockList/BlockList";
import { useSelector } from "react-redux";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import DownloadService from "../../services/DownloadService";

const Project = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const params = useParams();

  const { isFetching, error } = useSelector((state) => state.blocks);

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
