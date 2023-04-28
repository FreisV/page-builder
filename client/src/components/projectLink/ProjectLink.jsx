import React from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";

const ProjectLink = ({ project }) => {
  const navigate = useNavigate();

  const openProjectSettings = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/project/settings/${project.id}`)
  }

  return (
    <Link className={styles.link} to={`/project/${project.id}`} >
      {project.name}
      <button className={styles.settings} onClick={openProjectSettings}>
        <i class="fa-solid fa-ellipsis"></i>
      </button>
    </Link>
  );
};

export default ProjectLink;
