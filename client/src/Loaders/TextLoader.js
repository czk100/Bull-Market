import React, { useState, useEffect } from "react";
const axios = require("axios");

function TextLoader() {
  const [data, setData] = useState([]);
  const TextLoad = () => {
    //we need to use a fetch here
    axios
      .get(process.env.REACT_APP_SERVER_LOCATION + "/api/editTexts")
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .then(function (myJson) {
        console.log(myJson);
        var temp;
        for (var i = 0; i < myJson.length; i++) {
          if (myJson[i].name === "name3") {
            temp = myJson[i];
          }
        }
        if(!temp)  {
          temp = {content: "Missing connection to database"};
        }
        setData(temp);
      });
  };

  useEffect(() => {
    TextLoad();
  }, []);

  return (
    <div className="TextLoader">
      <div>{data.content}</div>
    </div>
  );
}

export default TextLoader;
