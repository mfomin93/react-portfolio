import React from "react";
import {
  HashRouter as Router
} from "react-router-dom";
import NavMain from "./components/NavMain";

function App() {
  return (
    <div>
      <Router>
        <NavMain />
      </Router>
    </div>
    
  );
}

export default App;