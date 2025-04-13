import { AppRouter } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
