import React from "react";
import DogPic from "./DogPic";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      <div style={{ margin: 20 }}>
        <NavBar />
        <DogPic />
      </div>
    </>
  );
};

export default App;
