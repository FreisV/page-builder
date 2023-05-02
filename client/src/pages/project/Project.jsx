import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import BlockList from "../../components/blockList/BlockList";
import { useSelector } from "react-redux";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const Project = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageActive, setErrorMessageActive] = useState(false);

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

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <BlockList />
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
