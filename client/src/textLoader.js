import React, { useState, useEffect } from "react";

function TextLoader() {
  const [data, setData] = useState([]);
  const TextLoad = () => {
    //we need to use a fetch here
    fetch("./TestData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        myJson.body.replaceAll("\n", <br />);
        setData(myJson);
      });
  };

  useEffect(() => {
    TextLoad();
  }, []);

  return (
    <div className="TextLoader">
      {data && data.length > 0 && data.map((item) => <p>{item.about}</p>)}
      <div>{data.body}</div>
    </div>
  );
}

export default TextLoader;
