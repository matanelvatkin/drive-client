import React, { forwardRef } from "react";
import styles from "./style.module.css";

const Input= forwardRef(({
  type = "text",
  ...props
},ref)=>(<input {...props} type={type} ref={ref}/>))

export default Input