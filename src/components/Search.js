import React from "react";
import {getFilteredClubs} from "../Functions/AppFunctions"

const Search = (props) => {

  const getFilterText = (event) =>{
  //You will need the onChange value for the input tag to capture the search bar value
    props.setFilteredClubs(getFilteredClubs(event.target.value, props.data))
  }
  

  return (
    <div>
      <div  style={{ marginTop: "1rem" }} class="ui search fluid">
        <div class="ui icon input">
          <input
            onChange={getFilterText}
            class="prompt"
            type="text"
            placeholder="Type to filter..."
          ></input>
          <i class="search icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Search;
