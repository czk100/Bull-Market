import React, { useState } from "react";
import "./ExecAdder.css";
const axios = require("axios");

function ExecAdder() {
  const [data, setData] = useState([]);
  const ExecPost = (e) => {
    e.preventDefault();
      var newData = {
        position: data.position,
        name: data.name,
        email: data.email,
        linkedIn: data.linkedIn,
      };
      console.log(newData)
      setData(newData)
      axios
        .post(process.env.REACT_APP_SERVER_LOCATION + "api/execBoard", data)
        .then(function (response) {
          console.log(response);
        });
      window.location.reload();
  };

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

  const toggleAdd = () => {
    var x = document.getElementById("Add Area");
    var y = document.getElementById("but");

    if (x.style.display === ""){
      x.style.display = "none";
    }

    if (y.style.display === ""){
        y.style.display = "block";
      }

    /////////////
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none"
    } 

    else {
      x.style.display = "none";
      y.style.display = "block"
    }
  };

  return (
    <div className="Exec-Adder">

        <div id="but" class="container-fluid">
        <button type="add" class="btnC" onClick={toggleAdd}>
            +
        </button>
        </div>

        <div id="Add Area" class="add-container">
            <table class= "table table-borderless">
                <td>
                <button type="close" class="btnC" onClick={toggleAdd}>
                    x
                </button>
                </td>

                

                <td>
                <div id="addCard" class="card">
                    <div class="card-header justify-content-left">
                        New Officer:
                    </div>
                    <div class="card-body">
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
              <button id= "Submit" class="btn" onClick={ExecPost}>
                  Submit
              </button>
              </td>
            </table>
      </div>
    </div>
  );
}

export default ExecAdder;
