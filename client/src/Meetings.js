import "./App.css";
import "./Meetings.css";
import React from "react";
import Uploader from "./Uploads/Uploader";
import UploadLoader from "./Loaders/UploadLoader";

function Meetings() {
  return (
    <div className="meetings-container">
      <h1 class="display-3">Meetings</h1>
      <div class="calendar-container">
        <h2 class="display-5">Calendar</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dWZsb3JpZGFzaWNAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679"
          styles="border:solid 1px #777"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <Uploader />
      <UploadLoader />
    </div>
  );
}

export default Meetings;
