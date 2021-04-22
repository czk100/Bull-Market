import React, { useState, useEffect } from "react";
import "./ExecComponent.css";
const axios = require("axios");

const ExecComponent = (props) => {
  const [data, setData] = useState([]);

  const deleteExec = () => {
    var toDelete = { data: { name: props.parentData.name } };
    console.log(toDelete);
    axios
      .delete(process.env.REACT_APP_SERVER_LOCATION + "/api/execBoard", toDelete)
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
      .put(process.env.REACT_APP_SERVER_LOCATION + "/api/execBoard", toEdit)
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
  }, [props]);

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

  var elink = "mailto:" + props.parentData.email
  return (
    <div className="Exec-Component">
      <div class="card">

        <div class="card-header justify-content-right">
          <div class="container-fluid justify-content-center">
            <div class="Position-Title">{props.parentData.position + ": " + props.parentData.name}</div>
          </div>
            { props.isAdmin &&
              <button id="del" class="btnC" onClick={deleteExec}> X</button>}
              { props.isAdmin &&
            <button id="ed" class="ed" onClick={editExec}></button>}
        
        </div>

        <div class="card-body">
          <table class= "table table-borderless">
            <td>
              <div class="profile-pic justify-content-left">
              </div>
            </td>
            <td>
              <div class="profile-text">
               <h2 class="display-5">
                <a href= {elink}>
                    Email: {props.parentData.email}
                </a>
               </h2>
               <h2 class="display-5">
                <a href= {props.parentData.linkedIn}>
                    LinkedIn
                </a>
               </h2>
              </div>
            </td>
          </table>
            { props.isAdmin &&
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
            }
        </div>
      </div>
    </div>
  );
};

export default ExecComponent;
