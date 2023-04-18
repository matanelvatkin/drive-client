import React from "react";
import { MdDocumentScanner } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import styles from "./style.module.css";

export default function NewDocuments() {
  return (
    <div className={styles.menu_button}>
      <div className={styles.add_button}>
        <MdDocumentScanner/>
        upload
      </div>
      <div className={styles.add_button} >
        <GoFileDirectory />
        directory
      </div>
    </div>
  );
}
