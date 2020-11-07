import './App.css';
import Countries from "./comps/Countries.js";
import React, {useState} from 'react';
import Details from "./comps/Details.js"
 
function App() {
  let cname="global";
  let newName="";

  const load=(aname)=>{
    cname=aname;
  }
  
  return (
  <div >
    <header>Covid19 Tracker</header>
    <input type="text" placeholder="search for a country here" onChange={(e)=>newName=e.target.value}></input>
    <button onClick={load(newName)}>Go</button>
    <div>OR</div>
    <Countries/>
    <div>
      <span>Show data of </span>
      <fieldset>
        <input type="radio" name="dateSelector" checked></input>
        Current date

        <input type="radio" name="dateSelector"></input>
        Select a range
      </fieldset>
      <div>
        from
        <input type='date'></input>
        to 
        <input type="date"></input>
      </div>
      <div>
        <Details country={cname}/>
      </div>
    </div>
  </div>
    
  );
}

export default App;
