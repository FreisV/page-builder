import React from "react";
import styles from "./styles.module.css";
import Link from "../../components/link/Link";
import Button from "../../components/button/Button";

const Registration = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.register}>
        <form className={styles.form}>
          <p className={styles.logo}>Builder</p>
          <input
            type="text"
            minLength="3"
            maxLength="32"
            className={styles.input}
            placeholder="Имя"
            required
          />
          <input
            type="email"
            maxLength="50"
            className={styles.input}
            placeholder="Email"
            required
          />
          <input
            minLength="6"
            maxLength="32"
            type="password"
            className={styles.input}
            placeholder="Пароль"
            required
          />
          <input
            minLength="6"
            maxLength="32"
            type="password"
            className={styles.input}
            placeholder="Повторите пароль"
            required
          />
          <div className={styles.row}>
            <Link to={"/login"}>
              <span>Уже есть аккаунт?</span>
            </Link>
            <Button type="submit">Регистрация</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
