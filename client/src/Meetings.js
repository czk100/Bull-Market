import "./App.css";
import "./Meetings.css";
import React from "react";
import Uploader from "./Uploads/Uploader";

function Meetings() {
  return (
    <div className="meetings-container">
      <h1 class="display-3">Meetings</h1>
      <div class="calendar-container">
        <h2 class="display-5">Calendar</h2>
      </div>
      <Uploader />
    </div>
  );
}

export default Meetings;
