import { Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { setPath } from '../../features/document/documentSlice';
import { useSelector, useDispatch } from 'react-redux'

const CurrentLocalPath = () => {

    const path = useSelector((state) => state.document.path)
    const dispatsh = useDispatch();

    const HandelClick = (index) => {
        dispatsh(setPath(index));
    }

    return (
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon/>}>

            {path.slice(0, path.length - 1).map((directory, i) => 
                <Link key={directory} underline="hover" color="inherit" href="#" onClick={e => HandelClick(i)}>
                    {directory} 
                </Link>)
            }
            <Typography color="text.primary">{path[path.length - 1]}</Typography>
        </Breadcrumbs>
    )
}

export default CurrentLocalPath
