import React from "react";
import "./App.css";
import Counter from "./components/Counter";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>カウンター</h1>
      <Counter />
    </div>
  );
}

export default App;
