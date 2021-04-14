import React, { useState, useEffect } from "react";
const axios = require("axios");

function AnnouncementAdder() {
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
    </div>
  );
}

export default AnnouncementAdder;
