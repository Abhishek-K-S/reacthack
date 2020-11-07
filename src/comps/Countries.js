import count from "../assets/countries.json";
import React from 'react';
import Details from "./Details.js"

class Countries extends React.Component{
    render(){
        return(<select onChange={(e)=>load(e.target.value)}>
            {count.map((value, index)=>{
                return <option>{value.Country, key}</option>;
        })}
        </select>)
    }
}

function load(aname){
    return(<Details country={aname}/>)
  }
export default Countries;