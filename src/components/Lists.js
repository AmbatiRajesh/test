import React from "react";
import './style.css';
const Lists=(props)=>{
    //user Lists are Displayed When Only Form Validation is true
 const id=Math.random().toString();
  const data=props.datas.slice(0,4).map((xr)=><li key={id} className="card">
 <ol>Code : {xr.alpha_two_code}</ol>
 <ol>Name : {xr.name}</ol>
 <ol>country : {xr.country}</ol>
 <ol>Web Page Link : {xr.web_pages}</ol>
 </li>)
    return(
        <div>
            <h3>{data}</h3>
        </div>
    )
};
export default Lists;