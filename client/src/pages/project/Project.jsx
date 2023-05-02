import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import BlockList from "../../components/blockList/BlockList";
import { useSelector } from "react-redux";

const Project = () => {
  const { isFetching, error } = useSelector((state) => state.blocks);

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <BlockList />
      </main>
    </>
  );
};

export default Project;
