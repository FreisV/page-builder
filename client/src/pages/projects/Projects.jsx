import React from 'react'
import styles from "./styles.module.css";
import Header from '../../components/header/Header';
import { useSelector } from 'react-redux';
import CreateProject from '../../components/createProject/CreateProject'


const Projects = () => {
  const {accessToken, user} = useSelector(state => state.auth);

  return (
    <>
      <Header/>
      <main className={styles.wrapper}>
        <CreateProject/>
      </main>
    </>
  )
}

export default Projects