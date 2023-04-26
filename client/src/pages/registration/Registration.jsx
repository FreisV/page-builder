import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Link from "../../components/link/Link";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../store/reducers/authReducer/actions";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const Registration = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordRepeat = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageActive, setErrorMessageActive] = useState(false);

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      setErrorMessage(error?.response.data.message);
    }
  }, [error]);

  useEffect(() => {
    if (errorMessage !== "") {
      setErrorMessageActive(true);
    }
  }, [errorMessage]);

  const checkPasswordMatch = (e) => {
    if (password.current.value !== passwordRepeat.current.value) {
      setErrorMessage("Пароли не совпадают");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkPasswordMatch()) {
      return;
    }

    dispatch(
      registration(
        username.current.value,
        email.current.value,
        password.current.value
      )
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.register}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.logo}>Builder</p>
          <input
            ref={username}
            type="text"
            minLength="3"
            maxLength="32"
            className={styles.input}
            placeholder="Имя"
            required
          />
          <input
            ref={email}
            type="email"
            maxLength="50"
            className={styles.input}
            placeholder="Email"
            required
          />
          <input
            ref={password}
            minLength="6"
            maxLength="32"
            type="password"
            className={styles.input}
            placeholder="Пароль"
            required
          />
          <input
            ref={passwordRepeat}
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

      <ErrorMessage
        active={errorMessageActive}
        setActive={setErrorMessageActive}
      >
        {errorMessage}
      </ErrorMessage>
    </div>
  );
};

export default Registration;
