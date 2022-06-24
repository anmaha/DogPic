import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DogPic from "./DogPic";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      <div style={{ margin: 20 }}>
        <Router>
          <NavBar />
        </Router>
        <DogPic />
      </div>
    </>
  );
};

export default App;
