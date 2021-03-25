import React, { useState, useEffect } from "react";
const axios = require("axios");

function TextLoader() {
  const [data, setData] = useState([]);
  const TextLoad = () => {
    //we need to use a fetch here
    axios
      .get("http://localhost:5000/api/editTexts")
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
        setData(temp);
      });
  };

  useEffect(() => {
    TextLoad();
  }, []);

  return (
    <div className="TextLoader">
      {data && data.length > 0 && data.map((item) => <p>{item.about}</p>)}
      <div>{data.content}</div>
    </div>
  );
}

export default TextLoader;
