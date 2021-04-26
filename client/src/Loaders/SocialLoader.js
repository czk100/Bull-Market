import React, { useState, useEffect } from "react";
const axios = require("axios");

function SocialLoader() {
  const [data, setData] = useState([]);
  const SocialLoad = () => {
    //we need to use a fetch here
    axios
      .get("http://localhost:5000/api/socials")
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
    SocialLoad();
  }, []);

  return <div className="Social"></div>;
}

export default SocialLoader;
