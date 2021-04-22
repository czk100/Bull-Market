import "./App.css";
import "./Announcements.css";
import React from "react";
import AnnouncementLoader from "./Loaders/AnnouncementLoader.js";
import AnnouncementAdder from "./Adders/AnnouncementAdder.js";

const Announcements = (props) => {

  
  console.log(props.isAdmin);
  console.log(process.env.REACT_APP_SERVER_LOCATION);

  return (
    <div class="announcements-container">
      <h1 class="display-3">Announcements</h1>
      <div className="announcementTextEditable">
        <div className="adderFormat">
          <AnnouncementAdder isAdmin={props.isAdmin} />
        </div>
        <div className="messageFormat">
          <AnnouncementLoader isAdmin={props.isAdmin}/>
        </div>
      </div>
      {console.log(document.getElementsByClassName("input-group"))}
      {console.log(document.getElementsByClassName("input-group")[0])}
    </div>
  );
}

export default Announcements;
