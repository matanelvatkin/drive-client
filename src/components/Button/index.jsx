import React from "react";
import styles from "./style.module.css";

export default function Button({
  text = "",
  Icon = <></>,
  style = {},
  className = "",
  onClick = () => {},
}) {
  console.log(Icon);
  return (
    <div className={`${styles.default_button} ${className}`}>
      <Icon onClick={onClick}/>
      {text!==""&&<input
      type="button"
      value={text}
      style={style}
      onClick={onClick}
    />}
    </div>
  );
}
