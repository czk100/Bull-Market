import React, { useState, useEffect } from "react";
import "./ExecComponent.css";
const axios = require("axios");

const ExecComponent = (props) => {
  const [data, setData] = useState([]);

  const deleteExec = () => {
    var toDelete = { data: { name: props.parentData.name } };
    console.log(toDelete);
    axios
      .delete("http://localhost:5000/api/execBoard", toDelete)
      .then(function (response) {
        console.log(response);
      });
    window.location.reload();
  };

  const editExec = () => {
    var toEdit = {
      oldName: props.parentData.name,
      newData: data,
    };
    console.log(toEdit);
    axios
      .put("http://localhost:5000/api/execBoard", toEdit)
      .then(function (response) {
        console.log(response);
      });
    window.location.reload();
  };

  useEffect(() => {
    var newData = {
      show: false,
      d: props.parentData
    };
    console.log(props);
    setData(newData);
  }, []);

  const handlePositionChange = (e) => {
    var newData = {
      position: e.target.value,
      name: data.name,
      email: data.email,
      linkedIn: data.linkedIn,
    };
    setData(newData);
  };

  const handleNameChange = (e) => {
    var newData = {
      position: data.position,
      name: e.target.value,
      email: data.email,
      linkedIn: data.linkedIn,
    };
    setData(newData);
  };

  const handleEmailChange = (e) => {
    var newData = {
      position: data.position,
      name: data.name,
      email: e.target.value,
      linkedIn: data.linkedIn,
    };
    setData(newData);
  };

  const handleLinkedInChange = (e) => {
    var newData = {
      position: data.position,
      name:  data.name,
      email: data.email,
      linkedIn: e.target.value,
    };
    setData(newData);
  };

  return (
    <div className="Exec-Component">
      <div class="card">

        <div class="card-header justify-content-between">
          <code class="timestamp"></code>
          <div class="btn-group">
            <button id="del" class="btn" onClick={deleteExec}>
              Delete
            </button>
            <button id="ed" class="btn" onClick={editExec}>
              Edit
            </button>
          </div>
        </div>

        <div class="card-body">
          <h5 class="card-title">{props.parentData.position}</h5>
          <p class="card-text">{props.parentData.name}</p>
          <p class="card-text">{props.parentData.email}</p>
          <p class="card-text">{props.parentData.linkedIn}</p>
            <div class="textArea">
                <input
                type="text"
                name="details name"
                placeholder="Position Name"
                class="form-control"
                value={data.position}
                onChange={(e) => handlePositionChange(e)}
                />
                <input
                type="text"
                name="details content"
                placeholder="Officer Name"
                class="form-control"
                value={data.name}
                onChange={(e) => handleNameChange(e)}
                />
                <input
                type="text"
                name="details content"
                placeholder="Email"
                class="form-control"
                value={data.email}
                onChange={(e) => handleEmailChange(e)}
                />
                <input
                type="text"
                name="details content"
                placeholder="LinkedIn"
                class="form-control"
                value={data.linkedIn}
                onChange={(e) => handleLinkedInChange(e)}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExecComponent;
