import React from "react";
import styles from "./styles.module.css";
import Link from "../../components/link/Link";
import Button from "../../components/button/Button";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <form className={styles.form}>
          <p className={styles.logo}>Builder</p>
          <input
            type="text"
            minLength="3"
            maxLength="32"
            className={styles.input}
            placeholder="Имя пользователя"
            required
          />
          <input
            type="password"
            minLength="6"
            maxLength="32"
            className={styles.input}
            placeholder="Пароль"
            required
          />
          <div className={styles.row}>
            <Link to={"/registration"}>
              <span>Зарегистрироваться</span>
            </Link>
            <Button type="submit">Вход</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
