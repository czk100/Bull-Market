import React, { useState, useEffect } from "react";
import { Form, TextArea } from "semantic-ui-react";
import "./HomeComponent.css";
const axios = require("axios");

const HomeComponent = (props) => {
  const [data, setData] = useState([]);
  const editHome = () => {
    var toEdit = {
      oldName: props.parentData.name,
      newData: data,
    };
    console.log(toEdit);
    axios
      .put("http://localhost:5000/api/editTexts", toEdit)
      .then(function (response) {
        console.log(response);
      });
  };

  const handleContentChange = (e) => {
    console.log("handleContentChange");
    console.log(data.content);
    console.log(e.target.value);
    var newData = {
      name: data.name,
      content: e.target.value,
    };
    setData(newData);
  };

  //   function hideForGuest() {
  //     if (!props.isAdmin) {
  //       if (document.getElementsByClassName("deled").length > 0) {
  //         for (
  //           var i = 0;
  //           i < document.getElementsByClassName("deled").length;
  //           i++
  //         ) {
  //           document.getElementsByClassName("deled")[i].style.display = "none";
  //         }
  //       }
  //       if (document.getElementsByClassName("textArea").length > 0) {
  //         for (
  //           var i = 0;
  //           i < document.getElementsByClassName("textArea").length;
  //           i++
  //         ) {
  //           document.getElementsByClassName("textArea")[i].style.display = "none";
  //         }
  //       }
  //     }
  //   }
  return (
    <div className="Home-Component">
      <div class="card">
        <div class="card-header justify-content-between">
          <code class="timestamp">{props.parentData.date}</code>
          <div class="btn-group">
            <button id="ed" class="btn deled" onClick={editHome}>
              Edit
            </button>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.parentData.name}</h5>
          <p class="card-text">{props.parentData.content}</p>
          <div class="textArea">
            <Form>
              <TextArea
                placeholder="Content"
                onChange={(e) => handleContentChange(e)}
                value={data.content}
                class="form-control"
              />
            </Form>
          </div>
        </div>
        {/* {hideForGuest()} */}
      </div>
    </div>
  );
};

export default HomeComponent;
