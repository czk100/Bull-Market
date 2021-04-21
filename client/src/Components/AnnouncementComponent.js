import React, { useState, useEffect } from "react";
import "./AnnouncementComponent.css";
const axios = require("axios");

const AnnouncementComponent = (props) => {
  function timeDate(date){
    var i = date.search("T");
    if(i == -1){
      return date;
    }
    return date.substring(0, i);
  }

  const [data, setData] = useState([]);
  const deleteAnnouncement = () => {
    var toDelete = { data: { name: props.parentData.name } };
    console.log(toDelete);
    axios
      .delete("http://localhost:5000/api/announcements", toDelete)
      .then(function (response) {
        console.log(response);
      });
  };

  const editAnnouncement = () => {
    var toEdit = {
      oldName: props.parentData.name,
      newData: data,
    };
    console.log(toEdit);
    axios
      .put("http://localhost:5000/api/announcements", toEdit)
      .then(function (response) {
        console.log(response);
      });
  };

  useEffect(() => {
    console.log(props);
    setData(props.parentData);
  }, [props]);

  const handleTitleChange = (e) => {
    var newData = {
      name: e.target.value,
      content: data.content,
    };
    setData(newData);
  };

  const handleContentChange = (e) => {
    var newData = {
      name: data.name,
      content: e.target.value,
    };
    setData(newData);
  };

  return (
    <div className="Announcement-Component">
      <div class="card">
        <div class="card-header justify-content-between">
          <code class="timestamp">{props.parentData.date}</code>
          <div class="btn-group">
            <button id="del" class="btn" onClick={deleteAnnouncement}>
              Delete
            </button>
            <button id="ed" class="btn" onClick={editAnnouncement}>
              Edit
            </button>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.parentData.name}</h5>
          <p class="card-text">{props.parentData.content}</p>
          <div class="textArea">
            <input
              type="text"
              name="details name"
              placeholder="Title"
              class="form-control"
              value={data.name}
              onChange={(e) => handleTitleChange(e)}
            />
            <input
              type="text"
              name="details content"
              placeholder="Content"
              class="form-control"
              value={data.content}
              onChange={(e) => handleContentChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementComponent;
