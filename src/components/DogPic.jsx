import axios from "axios";
import React, { useEffect, useState } from "react";

const DogPic = () => {
  const [pic, setPic] = useState([]);

  const helperFunction = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
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
        <button onClick={handleClick}>New dog picture</button>
        <h1>Process.env.PUBLIC_URL: {process.env.NODE_ENV}</h1>
      </div>
    </>
  );
};

export default DogPic;
