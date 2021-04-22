import React, { useState, useEffect } from "react";
import { Form, TextArea } from "semantic-ui-react";
import "./AnnouncementComponent.css";
const axios = require("axios");

const AnnouncementComponent = (props) => {
  // function timeDate(date) {
  //   var i = date.search("T");
  //   if (i == -1) {
  //     return date;
  //   }
  //   return date.substring(0, i);
  // }

  const [data, setData] = useState([]);
  const deleteAnnouncement = () => {
    var toDelete = { data: { name: props.parentData.name } };
    console.log(toDelete);
    axios
      .delete(process.env.REACT_APP_SERVER_LOCATION + "/api/announcements", toDelete)
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
      .put(process.env.REACT_APP_SERVER_LOCATION + "/api/announcements", toEdit)
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

  function hideForGuest() {
    var i = 0;
    if (!props.isAdmin) {
      if (document.getElementsByClassName("deled").length > 0) {
        for (
          i = 0;
          i < document.getElementsByClassName("deled").length;
          i++
        ) {
          document.getElementsByClassName("deled")[i].style.display = "none";
        }
      }
      if (document.getElementsByClassName("textArea").length > 0) {
        for (
          i = 0;
          i < document.getElementsByClassName("textArea").length;
          i++
        ) {
          document.getElementsByClassName("textArea")[i].style.display = "none";
        }
      }
    }
  }
  return (
    <div className="Announcement-Component">
      <div class="card">
        <div class="card-header justify-content-between">
          <code class="timestamp">{props.parentData.date}</code>
          <div class="btn-group">
            <button id="del" class="btn deled" onClick={deleteAnnouncement}>
              Delete
            </button>
            <button id="ed" class="btn deled" onClick={editAnnouncement}>
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
        {hideForGuest()}
      </div>
    </div>
  );
};

export default AnnouncementComponent;
