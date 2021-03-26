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

  const showHide = () => {
    
  };

  const handleNameChange = (e) => {
    console.log("handleNameChange");
    var newData = {
      name : e.target.value,
      content : data.content
    };
    setData(newData);
  };
  const handleContentChange = (e) => {
    console.log("handleContentChange");
    var newData = {
      name : data.name,
      content : e.target.value
    };
    setData(newData);
  };

  return (
    <div className="Announcement-Adder">
      <input type="submit" value="Add new thing" onClick={showHide} />
      <div>
        <form>
          <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleNameChange} />
          <input type="text" name="details" placeholder="Details" value={data.content} onChange={handleContentChange} />
          <button type="button" onClick={AnnouncementPost}>Add new Announcement</button>
        </form>
      </div>
    </div>
  );
}

export default AnnouncementAdder;
