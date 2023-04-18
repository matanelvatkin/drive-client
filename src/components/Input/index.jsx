import React from "react";
import styles from "./style.module.css";

export default function Input({
  placeholder = "",
  type = "text",
  style = {},
  className = "",
  onChange = () => {},
  onKeyDown = () => {},
}) {
  return <input type={type} onKeyDown={onKeyDown} onChange={onChange} placeholder={placeholder} className={className} />;
}
