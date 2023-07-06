import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { username } = useSelector((state) => state?.auth?.user);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to={"/projects"}>
          Builder
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to={"/help"}>
            <p>Помощь</p>
          </Link>
          <Link className={styles.navLink} to={"/profile"}>
            <p>{username}</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
