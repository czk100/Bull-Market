import React, { useState, useEffect } from "react";
const axios = require("axios");

const AnnouncementComponent = (props) => {
  const [data, setData] = useState([]);
  const deleteAnnouncement = () => {
    console.log(data);
    axios
      .delete("http://localhost:5000/api/announcements", data)
      .then(function (response) {
        console.log(response);
      });
  };

    useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="Announcement-Component">
      <div>
        {props.parentData.name}
      </div>
      <div>
        {props.parentData.content}
      </div>
      {/* <input type="submit" value="Delete" onClick={deleteAnnouncement} /> */}
    </div>
  );
}

export default AnnouncementComponent;


//     render() {
//     <div className="Announcement-Component">
//         test
//         {this.props.name}
//       <div>
//         {/* {data.name} */}
//       </div>
//       <div>
//         {/* {data.content} */}
//       </div>
//       {/* <input type="submit" value="Delete" onClick={showHide} /> */}
//     </div>
//     };
// }