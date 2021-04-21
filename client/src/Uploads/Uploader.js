import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./Uploader.css";
const axios = require("axios");

function Uploader(props) {
  //adder component
  const [data, setData] = useState([]);
  const UploadPost = () => {
    console.log(data);
    axios
      .post(process.env.REACT_APP_SERVER_LOCATION + "/api/uploads", data)
      .then(function (response) {
        console.log(response);
      });
    
    axios
      .post(process.env.REACT_APP_SERVER_LOCATION + "/api/uploadNames", {name : data.name})
      .then(function (response) {
        console.log(response);
      });
  };

  // const handleContentChange = (e) => {
  //   console.log("handleContentChange");
  //   console.log(e);
  //   var newData = {
  //     name: e.target.value,
  //     content: files,
  //   };
  //   setData(newData);
  // };
  function handleContentChange(files) {
    console.log("handleContentChange");
    console.log(files[0].name);
    console.log(files[0]);
    const reader = new FileReader();
    reader.onabort = () => console.log("File reading was aborted.");
    reader.onerror = () => console.log("File reading has failed (error)");
    reader.onload = () => {
      const binaryStr = reader.result;
      console.log(binaryStr);
      var newData = {
        name: files[0].name,
        content: binaryStr,
      };
      setData(newData);
    };
    reader.readAsBinaryString(files[0]);

    // setData(files);
  }

  return (
    <div>
      <form action="/profile" method="post" enctype="multipart/form-data">
        <Dropzone onDrop={(files) => handleContentChange(files)}>
          {({ getRootProps, getInputProps }) => (
            <div className="container">
              <div
                {...getRootProps({
                  className: "dropzone",
                })}
              >
                <input {...getInputProps()} />
                <p>Drag and drop here, or click to select file</p>
              </div>
            </div>
          )}
        </Dropzone>
      </form>
      <button class="btn" onClick={UploadPost}>
        Submit
      </button>
    </div>
  );
}
export default Uploader;
