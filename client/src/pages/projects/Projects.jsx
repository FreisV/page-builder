import React from 'react'
import styles from "./styles.module.css";
import Header from '../../components/header/Header';
import { useSelector } from 'react-redux';
import CreateProjectButton from '../../components/createProjectButton/CreateProjectButton';


const Projects = () => {
  const {accessToken, user} = useSelector(state => state.auth);

  return (
    <>
      <Header/>
      <main className={styles.wrapper}>
        <CreateProjectButton/>
      </main>
    </>
  )
}

export default Projects