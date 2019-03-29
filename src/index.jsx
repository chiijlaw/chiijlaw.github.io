const React = require("react");
const ReactDOM = require("react-dom");
const NavBar = require("./components/NavBar.jsx");

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("profile"));
