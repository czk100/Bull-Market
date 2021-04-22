import React, { useState, useEffect } from "react";
import FaqComponent from "../Components/FaqComponent.js";
import "./FaqLoader.css";
const axios = require("axios");

function FaqLoader() {
  const [data, setData] = useState([]);
  const FaqLoad = () => {
    //we need to use a fetch here
    axios
      .get("http://localhost:5000/api/questions")
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
          return <FaqComponent parentData={d} isAdmin={true} />;
        })}
      </div>
    </div>
  );
}

export default FaqLoader;
