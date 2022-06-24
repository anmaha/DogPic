import axios from "axios";
import React, { useEffect, useState } from "react";

const CatPic = () => {
  const [pic, setPic] = useState([]);

  const helperFunction = async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search");
    const data = response.data;
    setPic(data);
  };

  useEffect(() => {
    helperFunction();
  }, []);

  const handleClick = () => {
    helperFunction();
  };

  return (
    <>
      <div>
        
        <img src={pic.message}></img>
        <button onClick={handleClick}>New cat picture</button>
      </div>
    </>
  );
};

export default CatPic;
