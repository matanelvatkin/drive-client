import { Provider } from "react-redux";
import Layout from "./Layout";
import store from "./redux/reducer";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
