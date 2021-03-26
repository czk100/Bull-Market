import React, { useState, useEffect } from "react";
import AnnouncementComponent from "../Components/AnnouncementComponent.js";
const axios = require("axios");

function AnnouncementLoader() {
  const [data, setData] = useState([]);
  const AnnouncementLoad = () => {
    //we need to use a fetch here
    axios
      .get("http://localhost:5000/api/announcements")
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    AnnouncementLoad();
  }, []);

  return (
    <div className="Announcement">
      <div>
        {data.map(function (d) {
          return <AnnouncementComponent parentData={d} />;
        })}
      </div>
    </div>
  );
}

export default AnnouncementLoader;
