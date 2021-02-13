import React from 'react';
import './App.css';
import NavbarApp from './Components/NavbarApp/NavbarApp';
import UserList from './Components/UserList/UserList';
import user from "././Assets/user.svg"



function App() {

  return ( 
  
  <div className="App">
      <NavbarApp />
         <div>
          <img className="backgroundph" src={user} style={{width:'250px'}}/>
         </div>
      <UserList />

    </div>
  );
}

export default App;
