import React, { useState, useEffect } from "react";
import AnnouncementComponent from "../Components/AnnouncementComponent.js";
import "./AnnouncementLoader.css";
const axios = require("axios");

const AnnouncementLoader = (props) => {
  const [data, setData] = useState([]);
  const AnnouncementLoad = () => {
    //we need to use a fetch here
    axios
      .get(process.env.REACT_APP_SERVER_LOCATION + "/api/announcements")
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
          return <AnnouncementComponent parentData={d} isAdmin={props.isAdmin} />;
        })}
      </div>
    </div>
  );
}

export default AnnouncementLoader;
