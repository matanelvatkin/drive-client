import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import {  getUser, user } from "./features/user/userSlice";
import { addDirectoryToPath, openDirectory, updateID } from "./features/document/documentSlice";

function App() {
  var userRedux = useSelector((state) =>state.user);
  var document = useSelector((state) =>state.document);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    if(!userRedux.email && localStorage.getItem('token')) {
      dispatch(getUser());
    }
    if(userRedux.my_storage._id) {
      console.log(userRedux.my_storage);
      dispatch(updateID(userRedux.my_storage._id))
      dispatch(openDirectory(userRedux.my_storage))
      navigate('../home')
    }
  },[userRedux.email,userRedux.fullName])
  return (
    <Routes>
      <Route path="/*" element={userRedux.fullName? <Layout /> : <LoginPage />} />
    </Routes>
  );
}

export default App;
