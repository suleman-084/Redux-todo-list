import "./App.css";
import { Provider } from "react-redux";
import store from "./slice/store";
import InputComponent from "./Components/InputComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputComponent />
      </div>
    </Provider>
  );
}

export default App;
