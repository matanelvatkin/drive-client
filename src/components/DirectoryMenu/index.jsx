import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import apiCalls from '../../functions/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { updateChildren } from '../../features/document/documentSlice';

export default function DirectoryMenu({directoryId}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const currentDirectory = useSelector(state=>state.document.currentDirectory)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch()
  const handleClose = () => {
    setAnchorEl(null);
  };
  const clickDelete=async()=>{
    const res = await apiCalls('put',"document/delete",{id:currentDirectory.id,childrenId:directoryId})
    dispatch(updateChildren(res))
}
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div onClick={(event) => {
      event.preventDefault();
    }}>
      <Button color={"inherit"} onClick={handleClick}>
      <MoreVertIcon fontSize='small'/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography><button onClick={clickDelete}>delete</button></Typography>
      </Popover>
    </div>
  );
}