
import React from "react";
import './../styles/App.css';
import axios from "axios";
import 'regenerator-runtime/runtime';
import { useEffect,useState } from "react";

const App = () => {
const [data,setData]=useState([]);
let responce=[];

  useEffect(()=>{
  const fetchdata= async()=>{
       responce=await axios.get("https://reqres.in/api/users");
       console.log(responce.data.data);
       
  }
  fetchdata();
},[])


  return (
    <div>
        {/* Do not remove the main div */}
        <div>
          <h2>Blue Whales</h2>
          <button classname="btn" onClick={()=>setData(responce.data.data)}>Get User List</button>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li>First Name</li>
            <li>Last Name</li>
            <li>Email</li>
            <li>Avatar</li>
          </ul>
        </nav>
        <ul className="mainList"> {
      data && 
        data.map(ele=>(
          <li><div className="container"><ul className="list">
            <li>{ele.first_name}</li>
            <li>{ele.last_name}</li>
            <li>{ele.email}</li>
            <li><img src={ele.avatar}></img></li>
            </ul>
            </div>
            </li>
            
            ) )

     }</ul>
    </div>
  )
}

export default App
