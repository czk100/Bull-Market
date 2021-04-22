import "./App.css";
import "./Meetings.css";
import React from "react";
import Uploader from "./Uploads/Uploader";
import UploadLoader from "./Loaders/UploadLoader";

const Meetings = (props) => {
// const { google } = require("googleapis");
// const { OAuth2 } = google.auth;
// const oAuth2Client = new OAuth2(
//   [REMOVED FOR SECURITY],
// );
// oAuth2Client.setCredentials({
//   refresh_token:
//     [REMOVED FOR SECURITY],
// });
// const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
// // May need to change this to use the server data for date:
// const eventStartTime = new Date();
// eventStartTime.setDate(eventStartTime.getDay());
// const eventEndTime = new Date();
// eventEndTime.setDate(eventEndTime.getDay());
// eventEndTime.setMinutes(eventEndTime.getMinutes() + 60);
// //event
// //location may not be needed
// const event = {
//   summary: "Meeting",
//   location: "1384 Union Road Bryan, Hall 100, Gainesville, FL 32611",
//   description: "Weekly Club Meeting",
//   start: {
//     dateTime: eventStartTime,
//     timeZone: "America/New_York",
//   },
//   end: {
//     dateTime: eventEndTime,
//     timeZone: "America/New_York",
//   },
//   colorId: 1,
// };
  return (
    <div className="meetings-container">
      <h1 class="display-3">Meetings</h1>
      <div class="calendar-container">
        <h2 class="display-5">Calendar</h2>
        <iframe
          title="calendar-google"
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dWZsb3JpZGFzaWNAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679"
          styles="border:solid 1px #777"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      {props.isAdmin && <Uploader />}
      <UploadLoader isAdmin = {props.isAdmin}/>
    </div>
  );
}

export default Meetings;
