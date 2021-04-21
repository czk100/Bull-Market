import React, { useState } from "react";
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
    }
  };
  function hideForGuest() {}
  return (
    <div className="Announcement-Adder">
      {/* <input type="submit" value="Add new thing" onClick={showHide} /> */}
      <div class="input-group">
        <input
          type="text"
          name="name"
          placeholder="Title"
          class="form-control"
          value={data.name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="details"
          placeholder="Content"
          class="form-control"
          value={data.content}
          onChange={handleContentChange}
        />
        <div class="input-group-append">
          <button class="btn" onClick={AnnouncementPost}>
            Add new Announcement
          </button>
        </div>
      </div>
      {hideForGuest()}
    </div>
  );
};
export default AnnouncementAdder;
