import React from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

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
      <FontAwesomeIcon icon={faEllipsis} />
      </button>
    </Link>
  );
};

export default ProjectLink;
