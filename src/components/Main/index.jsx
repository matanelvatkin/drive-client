import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentLocalPath from "../CurrentLocalPath";
import styles from "./style.module.css";
import FolderIcon from "@mui/icons-material/Folder";
import { openDirectory } from "../../features/document/documentSlice";
import DirectoryMenu from "../DirectoryMenu";
export default function Main() {
  const [path, setPath] = useState("");
  const directory = useSelector((state) => state.document);
  const userEmail = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const handelOpenDirectory = (directory, e) => {
    if (directory.type === "directory") {
      dispatch(openDirectory(directory));
    } else {
      e.target?.children[1]?.click();
    }
  };
  useEffect(() => {
    setPath(`${userEmail}/${directory.path.map((path) => path[0]).join("/")}`);
  }, [directory.path]);
  
  return (
    <div className={styles.main}>
      <CurrentLocalPath />
      {directory.currentDirectory.data &&
      directory.currentDirectory.data.length > 0 ? (
        <main>
          <div className={styles.directories_container}>
            {directory.currentDirectory.data
              .filter((directory) => directory.type === "directory")
              .map((directory) => {
                return (
                  <div
                    className={styles.directory_container}
                    key={directory._id}
                    onDoubleClick={(e) => handelOpenDirectory(directory, e)}
                  >
                    <FolderIcon fontSize="large" />
                    <span>{directory.name}</span>
                    <DirectoryMenu directoryId={directory._id}/>
                  </div>
                );
              })}
          </div>
          <div className={styles.files_container}>
            {directory.currentDirectory.data
              .filter((directory) => directory.type === "file")
              .map((directory) => {
                return (
                  <div
                    key={directory._id}
                    onDoubleClick={(e) => handelOpenDirectory(directory, e)}
                    className={styles.file_container}
                  >
                    <a
                      download
                      href={`http://localhost:5556/uploads/${path}/${directory.name}`}
                      target="_blank"
                      className={styles.file_link}
                    >
                    <div className={styles.file_name}>{directory.name}</div>
                      <embed
                        src={`http://localhost:5556/uploads/${path}/${directory.name}`}
                        alt={directory.name}
                        className={styles.file}
                      />
                    </a>
                  </div>
                      
                );
              })}
          </div>
        </main>
      ) : null}
    </div>
  );
}
