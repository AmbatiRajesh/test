import React, { useEffect, useState } from "react";
import axios from "axios";

import Lform from "./components/Lform";
import Lists from "./components/Lists";

function App() {
  // using axios for get the data from api
  //users List shown when only Form validation true
  const [user, setUser]=useState([]);
  const [login, setLogin]=useState();
  async function fetching(){
    const response= await axios.get("http://universities.hipolabs.com/search?country=sri+lanka")
    console.log(response.data);
    setUser(response.data);
  }
  useEffect(()=>{
    fetching();
  },[])

  const loginValid=(valid)=>{
  setLogin(valid);
  }
  // using true false statements for login
  // I tried with protected Routes But I Have Some Important Work Of My Company Thats Why I simply used true false statements
  //If i Have A More Time I  Definetly Implemented Perfectly
  return (
    <div>
    {!login && <Lform loginValid={loginValid}></Lform>}
    {login &&<Lists datas={user}></Lists>}
    </div>
  );
}

export default App;
