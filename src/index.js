import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import LevelOne from "./LevelOne";
import "./style.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import demoApp from "./reducers/index.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = createStore(demoApp);

const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <LevelOne />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
