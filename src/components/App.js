
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
          <button className="btn"  onClick={()=>setData(responce.data.data)}>Get User List</button>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li>First Name</li>
            <li>Last Name</li>
            <li>Email</li>
            <li>Avatar</li>
          </ul>
        </nav>
        <table className="mainList"> {
      data ?
        data.map(ele=>(
          <tr>
            <td>{ele.first_name}</td>
            <td>{ele.last_name}</td>
            <td>{ele.email}</td>
            <td><img src={ele.avatar}></img></td>
          
            
            </tr>
            
            ) ):<h1>No data found to Display</h1>

     }</table>
    </div>
  )
}

export default App
