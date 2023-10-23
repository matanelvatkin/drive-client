import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { login } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import styles from "./style.module.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.my_storage.length > 0) navigate("../home");
  }, [user]);
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };
  return (
    <div className={styles.login_continuer}>
      <form className={styles.form_continuer} onSubmit={handelSubmit}>
        <Input
          className={styles.login_input}
          type="email"
          placeholder="email"
          name="email"
          ref={emailRef}
        />
        <Input
          className={styles.login_input}
          type="password"
          placeholder="password"
          name="password"
          ref={passwordRef}
        />
        <div className={styles.button_continuer}>
          <button 
          className={styles.login_button}
          type="submit">login</button>
          <button
          className={styles.login_button}
          onClick={() => {
              navigate("./register");
            }}
          >
            register
          </button>
        </div>
      </form>
    </div>
  );
}
