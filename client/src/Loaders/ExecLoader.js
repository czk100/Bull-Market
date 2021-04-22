import React, { useState, useEffect } from "react";
import ExecComponent from "../Components/ExecComponent.js";
import "./ExecLoader.css";
const axios = require("axios");

function ExecLoader() {
  const [data, setData] = useState([]);
  const ExecLoad = () => {
    //we need to use a fetch here
    axios
      .get("http://localhost:5000/api/execBoard")
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
    ExecLoad();
  }, []);

  return (
    <div className="Exec">
      <div>
        {data.map(function (d) {
          return <ExecComponent parentData={d} />;
        })}
      </div>
    </div>
  );
}

export default ExecLoader;
