import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("profile"));
