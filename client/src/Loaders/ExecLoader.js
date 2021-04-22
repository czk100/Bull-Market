import React, { useState, useEffect } from "react";
import ExecComponent from "../Components/ExecComponent.js";
import "./ExecLoader.css";
const axios = require("axios");

const ExecLoader = (props) => {
  const [data, setData] = useState([]);
  const ExecLoad = () => {
    //we need to use a fetch here
    axios
      .get(process.env.REACT_APP_SERVER_LOCATION + "/api/execBoard")
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
          return <ExecComponent parentData={d} isAdmin={props.isAdmin}/>;
        })}
      </div>
    </div>
  );
}

export default ExecLoader;
