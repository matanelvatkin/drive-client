import React from "react";
import styles from "./style.module.css";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openOption, searchOpenReducer } from "../../redux/reducer";
import NewDocuments from "../NewDocuments";
import Input from "../Input";

export default function Heder() {
  const dispatch = useDispatch();
  const openOptionPlus = useSelector((state) => state.document);
  const searchOpen = useSelector((state) => state.searchOpen);
  const onclickOptionPlus = () => {
    if(searchOpen) dispatch(searchOpenReducer());
    dispatch(openOption());
  };
  const onclickSearchOpen = () => {
    if(openOptionPlus) dispatch(openOption());
    dispatch(searchOpenReducer());
  };
  return (
    <div className={styles.heder}>
      <div>
        <span>My</span>drive
      </div>
      <div>USERNAME</div>
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
