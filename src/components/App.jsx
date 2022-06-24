import React from "react";
import DogPic from "./DogPic";
import NavBar from "./NavBar";
import CatPic from "./CatPic";

//import Users from "./Users";
const App = () => {
  return (
    <>
      <div style={{ margin: 20 }}>
        <NavBar />
        <DogPic />
        {/* <CatPic /> */}
        
      </div>
    </>
  );
};

export default App;
