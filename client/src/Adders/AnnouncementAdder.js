import React, { useState, useEffect } from "react";
import { Form, TextArea } from "semantic-ui-react";
import "./AnnouncementAdder.css";
const axios = require("axios");

const AnnouncementAdder = (props) => {
  const [data, setData] = useState([]);
  const AnnouncementPost = () => {
    // var newAnnouncement = {
    //   name
    // }
    console.log(data);
    axios
      .post("http://localhost:5000/api/announcements", data)
      .then(function (response) {
        console.log(response);
      });
  };

  const showHide = () => {};

  const handleNameChange = (e) => {
    console.log("handleNameChange");
    var newData = {
      name: e.target.value,
      content: data.content,
    };
    setData(newData);
  };
  const handleContentChange = (e) => {
    console.log("handleContentChange");
    var newData = {
      name: data.name,
      content: e.target.value,
    };
    setData(newData);
  };
  //guest view
  window.onload = function () {
    if (!props.isAdmin) {
      document.getElementsByClassName("input-group")[0].style.display = "none";
      document.getElementsByClassName("content-group")[0].style.display =
        "none";
    }
  };
  function hideForGuest() {}
  return (
    <div className="Announcement-Adder">
      <div class="input-group">
        <input
          type="text"
          name="name"
          placeholder="Title"
          class="form-control"
          value={data.name}
          onChange={handleNameChange}
        />
        <div class="input-group-append">
          <button class="btn" onClick={AnnouncementPost}>
            Add new Announcement
          </button>
        </div>
      </div>
      <div class="content-group">
        <Form>
          <TextArea
            placeholder="Content"
            name="details"
            onChange={handleContentChange}
            value={data.content}
            class="form-control"
          />
        </Form>
      </div>
      <div>{hideForGuest()}</div>
    </div>
  );
};
export default AnnouncementAdder;
