import React, { useState } from "react";
import styles from "./style.module.css";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import NewDocuments from "../NewDocuments";
import Input from "../Input";
import { useSelector } from "react-redux";

export default function Heder() {
  const [openOptionPlus,setOpenOptionPlus] = useState(false)
  const [searchOpen,setSearchOpen] = useState(false)
  const userRedux = useSelector(state=>state.user)
  const onclickOptionPlus = () => {
    if(searchOpen) (setSearchOpen(!searchOpen))
    setOpenOptionPlus(!openOptionPlus)
  };
  const onclickSearchOpen = () => {
    if(openOptionPlus) setOpenOptionPlus(!openOptionPlus)
    setSearchOpen(!searchOpen)
  };
  return (
    <div className={styles.heder}>
      <div>
        <span>My</span>drive
      </div>
      <div>{userRedux.fullName}</div>
      <div className={styles.menu}>
        <AiOutlinePlus
          className={`${styles.default_button} ${
            openOptionPlus ? styles.open_button : ""
          }`}
          onClick={onclickOptionPlus}
        />
        <AiOutlineSearch
          className={`${styles.default_button} ${
            searchOpen ? styles.open_button : ""
          }`}
          onClick={onclickSearchOpen}
        ></AiOutlineSearch>
        {openOptionPlus && <NewDocuments />}
        {searchOpen && <Input className={styles.menu_input}/>}
      </div>
    </div>
  );
}
