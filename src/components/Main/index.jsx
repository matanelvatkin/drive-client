import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentLocalPath from "../CurrentLocalPath";
import styles from "./style.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import FolderIcon from "@mui/icons-material/Folder";
import { openDirectory } from "../../features/document/documentSlice";
export default function Main() {
  // const currentDirectoryData = useSelector(
  //   (state) => state.document.currentDirectory.data
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(openDirectory());
  // }, []);
  // const handelOpenDirectory = (name,type) => {
  //   console.log(name,type);
  //   if (type === "directory") {
  //     dispatch(openDirectory(name));
  //   }
  // };
  return (
    <div className={styles.main}>
      {/* <CurrentLocalPath />
      <main>
        {currentDirectoryData.map((doc) => {
          return (
            <div key={doc.name} onDoubleClick={()=>handelOpenDirectory(doc.name,doc.type)}>
              {doc.type === "file" ? (
                <DescriptionIcon fontSize="large" />
              ) : (
                <FolderIcon fontSize="large" />
              )}
              <span>{doc.name}</span>
            </div>
          );
        })}
      </main> */}
    </div>
  );
}
