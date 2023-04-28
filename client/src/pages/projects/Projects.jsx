import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import CreateProjectButton from "../../components/createProjectButton/CreateProjectButton";
import ProjectList from "../../components/projectList/ProjectList";

const Projects = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <ProjectList />
        <CreateProjectButton />
      </main>
    </>
  );
};

export default Projects;
