import React, { useRef } from "react";
import styles from "./styles.module.css";
import Link from "../../components/link/Link";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducers/authReducer/actions";

const Login = () => {
  const username = useRef();
  const password = useRef();

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username.current.value, password.current.value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.logo}>Builder</p>
          <input
            ref={username}
            type="text"
            minLength="3"
            maxLength="32"
            className={styles.input}
            placeholder="Имя пользователя"
            required
          />
          <input
            ref={password}
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
