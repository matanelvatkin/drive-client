import { Breadcrumbs, Link, Typography, TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { getBackDirectory, pathNavigation } from "../../features/document/documentSlice";
import { useSelector, useDispatch } from "react-redux";

const CurrentLocalPath = () => {
  const path = useSelector((state) => state.document.path);
  const dispatch = useDispatch();
  const HandelClick = (e, index,directory) => {
    e.preventDefault();
    console.log(index,directory);
    dispatch(getBackDirectory({index,directory}));
  };
  return (
    <>
      {path.length>0&&<Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        {path.slice(0, path.length - 1).map((directory, i) => (
          <Link
            key={directory[0]}
            underline="hover"
            color="inherit"
            href="#"
            onClick={(e) => HandelClick(e, i,directory)}
          >
            {directory[0]}
          </Link>
        ))}
        <Typography color="text.primary">
          {path[path.length - 1][0]}
        </Typography>
      </Breadcrumbs>}
    </>
  );
};

export default CurrentLocalPath;
