import React, { useState, useEffect } from "react";
import "./UploadComponent.css";
const axios = require("axios");

const UploadComponent = (props) => {

  const [data, setData] = useState([]);
  const deleteUpload = () => {
    var toDelete = { data: { name: props.parentData.name } };
    console.log(toDelete);
    axios
      .delete("http://localhost:5000/api/uploads", toDelete)
      .then(function (response) {
        console.log(response);
      });
    axios
      .delete("http://localhost:5000/api/uploadNames", {data: {name: props.parentData.name}})
      .then(function (response) {
        console.log(response);
      });
  };

  useEffect(() => {
    console.log(props);
    var dateReadable = props.parentData;
    setData(dateReadable);
  }, []);

  return (
    <div className="Upload-Component">
      <div class="card">
        <div class="card-header justify-content-between">
          <code class="timestamp">{props.parentData.date}</code>
          <div class="btn-group">
            <button id="del" class="btn" onClick={deleteUpload}>
              Delete
            </button>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.parentData.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default UploadComponent;
