import "./App.css";
import "./Announcements.css";
import React from "react";
import AnnouncementLoader from "./Loaders/AnnouncementLoader.js";
import AnnouncementAdder from "./Adders/AnnouncementAdder.js";

function Announcements() {
  return (
    <div class="announcements-container">
      <h1>Announcements</h1>
      <div className="announcementTextEditable">
        <AnnouncementLoader />
        <AnnouncementAdder />
      </div>
    </div>
    
    );
}

export default Announcements;
