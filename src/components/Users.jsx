import React, { useEffect, useState } from "react";

import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API call using axios
    // const helperFunction = async () => {
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/users"
    //   );
    //   const data = response.data;
    //   setUsers(data);
    // };
    // helperFunction();

    // API call using fetch for simple calls
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const usersList = users.map((element) => {
    return (
      <>
        <div></div>
        <div class="ui card" key={element.id}>
          <div class="image">
            <i className="user icon large middle"></i>
            {/* <img src="/images/avatar2/large/kristy.png"></img> */}
          </div>
          <div class="content">
            <a class="header">{element.name}</a>
            <div class="meta">
              <span class="date">Company: {element.company.name}</span>
            </div>
            <div class="description">{element.company.catchPhrase}</div>
          </div>
          <div class="extra content">
            <a>
              <i class="envelope icon"></i>
              Email: {element.email}
            </a>
          </div>
        </div>
      </>
    );
  });
  return <>{usersList}</>;
};

export default Users;
