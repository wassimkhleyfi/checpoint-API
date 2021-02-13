import React, { useState, useEffect } from "react";
import axios from "axios";
import './UserList.css'

const UserList = () => {
  const [data, setData] = useState([]);
   useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(result);
      setData(result.data);
      console.log(result.data);
     };
     fetchData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <a className="username" href={user.username}>
              {user.username}
            </a>
            <a href={user.name}>{user.name}</a>
            <a href={user.email}>{user.email}</a>
            <a href={user.phone}>{user.phone}</a>

          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
