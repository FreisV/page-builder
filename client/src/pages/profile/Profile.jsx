import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button"
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/authReducer/actions";

const Profile = () => {
  const dispatch = useDispatch();
  
  return (
    <>
    <Header />
      <main className={styles.wrapper}>
        <h2 className={styles.title}>Профиль</h2>
        <Button isRed={true} onClick={() => dispatch(logout())}>Выйти</Button>
      </main>
    </>
  )
}

export default Profile