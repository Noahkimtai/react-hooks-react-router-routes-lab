import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {directors.map(director =>{
      return(<div key={director.name}>
        <p>{director.name}</p>
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>)
    })
    }
  </div>)
}

export default Directors;
