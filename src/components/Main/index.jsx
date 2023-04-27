import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentLocalPath from "../CurrentLocalPath";
import styles from "./style.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import FolderIcon from "@mui/icons-material/Folder";
import { openDirectory } from "../../features/document/documentSlice";
export default function Main() {
  const directory = useSelector(
    (state) => state.document
  );
  const dispatch = useDispatch();
  const handelOpenDirectory = (directory) => {
    if (directory.type === "directory") {
      dispatch(openDirectory(directory));
    }
  };
  return (<div className={styles.main}>
      <CurrentLocalPath />
    {directory.currentDirectory.data&&directory.currentDirectory.data.length>0?<main>
        {directory.currentDirectory.data.map((directory) => {
          return (
            <div key={directory._id} onDoubleClick={()=>handelOpenDirectory(directory)}>
              {directory.type === "file" ? (
                <DescriptionIcon fontSize="large" />
              ) : (
                <FolderIcon fontSize="large" />
              )}
              <span>{directory.name}</span>
            </div>
          );
        })}
      </main>
      :null}
    </div>
  );
}
