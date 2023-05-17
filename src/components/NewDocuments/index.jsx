import React, { useRef, useState } from "react";
import { MdDocumentScanner } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import styles from "./style.module.css";
import Input from "../Input";
import apiCalls from "../../functions/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addDirectoryToPath,updateChildren, updateID,  } from "../../features/document/documentSlice";

export default function NewDocuments() {
  const uploadRef = useRef();
  const newDirectoryName = useRef();
  const [directoryOpen, setDirectoryOpen] = useState(false);
  const directory = useSelector((state) => state.document);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onclickDirectoryOpen = () => {
    setDirectoryOpen(!directoryOpen);
  };
  const onEnterNewDirectoryName = async (e) => {
    if (e.key === "Enter" && newDirectoryName.current.value !== "") {

      const newDirectory = await apiCalls("put", "document/adddirectory", {
        id: directory.currentDirectory.id,
        arrayPath: [user.email, ...directory.path.map((path) => path[0])],
        directoryName:newDirectoryName.current.value
      });
      dispatch(addDirectoryToPath({id:newDirectory._id,name:newDirectory.name}))
      dispatch(updateID(newDirectory._id))
      dispatch(updateChildren(newDirectory.children))
      e.target.value = ""
    }
  };
  const onUploadFile = async (e) => {
    const formData = new FormData();
    for (let i of e.target.files) {
      formData.append("files", i);
    }
    formData.append("arrayPath", [
      user.email,
      ...directory.path.map((path) => path[0]),
    ]);
    formData.append("id", directory.currentDirectory.id);
    const upload = await apiCalls("put", "document/addfile", formData);
    dispatch(updateChildren(upload.children));
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
      <Input
        type={"file"}
        ref={uploadRef}
        style={{ display: "none" }}
        onChange={onUploadFile}
      />
    </div>
  );
}
