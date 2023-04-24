import style from "./style.module.css";
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
    <div>
      <form onSubmit={handelSubmit}>
        <Input type="text" placeholder="full name" name='fullName' ref={fullNameRef}/>
        <Input type="email" placeholder="email" name='email' ref={emailRef} />
        <Input type="password" placeholder="password" name='password' ref={passwordRef} />
        <button type="submit">register</button>
      </form>
    </div>
  );
}
