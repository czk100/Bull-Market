import React, { useState, useEffect } from "react";
import FaqComponent from "../Components/FaqComponent.js";
import "./FaqLoader.css";
const axios = require("axios");

const FaqLoader = (props) => {
  const [data, setData] = useState([]);
  const FaqLoad = () => {
    //we need to use a fetch here
    axios
      .get(process.env.REACT_APP_SERVER_LOCATION + "/api/questions")
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    FaqLoad();
  }, []);

  return (
    <div className="FAQ">
      <div>
        {data.map(function (d) {
          return <FaqComponent parentData={d} isAdmin={props.isAdmin} />;
        })}
      </div>
    </div>
  );
}

export default FaqLoader;
