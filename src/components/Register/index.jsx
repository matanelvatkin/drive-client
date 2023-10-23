import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/user/userSlice";
import { useEffect, useRef } from "react";


export default function Register() {
    const fullNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(
        (state) => state.document.user
      );
    useEffect(()=>{
        if(user&&!user.isLoading&&user.email) navigate("./login")
    },[user])
    const handelSubmit = (e)=>{
        e.preventDefault();
        dispatch(register({fullName:fullNameRef.current.value, email:emailRef.current.value, password:passwordRef.current.value}))

    }
  return (
    <div className={styles.register_continuer}>
      <form onSubmit={handelSubmit} className={styles.form_continuer}>
        <Input className={styles.register_input} type="text" placeholder="full name" name='fullName' ref={fullNameRef}/>
        <Input className={styles.register_input} type="email" placeholder="email" name='email' ref={emailRef} />
        <Input className={styles.register_input} type="password" placeholder="password" name='password' ref={passwordRef} />
        <button className={styles.register_button} type="submit">register</button>
      </form>
    </div>
  );
}
