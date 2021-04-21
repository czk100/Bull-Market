import React, { useState, useEffect } from "react";
import UploadComponent from "../Components/UploadComponent.js";
import "./UploadLoader.css";
const axios = require("axios");

const UploadLoader = (props) => {
  const [data, setData] = useState([]);
  const UploadLoad = () => {
    //we need to use a fetch here
    axios
      .get(process.env.REACT_APP_SERVER_LOCATION + "/api/uploadNames")
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
    UploadLoad();
  }, []);

  return (
    <div className="Upload">
      <div>
        {data.map(function (d) {
          return <UploadComponent parentData={d} isAdmin={props.isAdmin}/>;
        })}
      </div>
    </div>
  );
}

export default UploadLoader;
