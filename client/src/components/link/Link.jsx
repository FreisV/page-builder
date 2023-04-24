import React from "react";
import { Link as LinkDOM } from "react-router-dom";
import styles from "./styles.module.css";

const Link = ({ to, children, ...otherProps }) => {
  return (
    <LinkDOM className={styles.link} to={to} {...otherProps}>
      {children}
    </LinkDOM>
  );
};

export default Link;
