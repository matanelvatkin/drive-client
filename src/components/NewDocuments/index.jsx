import React, { useRef, useState } from "react";
import { MdDocumentScanner } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import styles from "./style.module.css";
import Input from "../Input";

export default function NewDocuments() {
  const uploadRef = useRef();
  const newDirectoryName = useRef();
  const [directoryOpen, setDirectoryOpen] = useState(false);
  const onclickDirectoryOpen = () => {
    setDirectoryOpen(!directoryOpen);
  };
  const onEnterNewDirectoryName = (e) => {
    if (e.key === "Enter") console.log(newDirectoryName.current.value);
  };
  const onUploadFile = (e) => {
    console.log(e.target.files);
  };
  return (
    <div className={styles.menu_button}>
      <div
        className={styles.add_button}
        onClick={() => {
          uploadRef.current.click();
        }}
      >
        <MdDocumentScanner />
        upload
      </div>
      <div className={styles.add_button} onClick={onclickDirectoryOpen}>
        <GoFileDirectory className={styles.search_button} />
        directory
        {directoryOpen && (
          <Input
            ref={newDirectoryName}
            onKeyDown={onEnterNewDirectoryName}
            className={styles.add_search_input}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        )}
      </div>
      <Input type={"file"} ref={uploadRef} style={{ display: "none" }} onChange = {onUploadFile} />
    </div>
  );
}
