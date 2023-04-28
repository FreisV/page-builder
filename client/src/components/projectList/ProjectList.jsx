import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProjects } from "../../store/reducers/requestReducer/actions/projectActions";
import ProjectLink from "../projectLink/ProjectLink";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projects = await dispatch(getUserProjects());
        setProjects(projects);
      } catch (error) {
        console.error(error);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      {projects ? (
        projects.map((project) => (
          <ProjectLink project={project} key={project.id} />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectList;
