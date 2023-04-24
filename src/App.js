import { useSelector } from "react-redux";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  const userRedux = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/*" element={userRedux.my_storage.length>0? <Layout /> : <LoginPage />} />
    </Routes>
  );
}

export default App;
