import React, { useState, useEffect } from "react";
import "./UploadComponent.css";
const axios = require("axios");

const UploadComponent = (props) => {

  const [data, setData] = useState([]);
  const deleteUpload = () => {
    var toDelete = { data: { name: props.parentData.name } };
    console.log(toDelete);
    axios
      .delete(process.env.REACT_APP_SERVER_LOCATION + "/api/uploads", toDelete)
      .then(function (response) {
        console.log(response);
      });
    axios
      .delete(process.env.REACT_APP_SERVER_LOCATION + "/api/uploadNames", {data: {name: props.parentData.name}})
      .then(function (response) {
        console.log(response);
      });
  };

  function _arrayBufferToBase64( buffer ) {
    var newString = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      newString += String.fromCharCode(bytes[ i ] );
    }
    return newString;
}

  // , responseType: 'blob'
  function downloadFunction() {
    axios.get(process.env.REACT_APP_SERVER_LOCATION + "/api/uploads", {data: {name: props.parentData.name}})
    .then(function (response) {
      data.name = 'placeholder';
      return response.data;
    })
    .then(function (myJson) {
      console.log(myJson);
      console.log(new Blob([myJson.content.data]));
      var newString = _arrayBufferToBase64(myJson.content.data);
      console.log(newString);
      const url = window.URL.createObjectURL(new Blob([newString]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', props.parentData.name);
      document.body.appendChild(link);
      link.click();
      // console.log(myJson);
      // fileDownload(myJson.content.data, myJson.name)
    });
  }


  useEffect(() => {
    console.log(props);
    var dateReadable = props.parentData;
    setData(dateReadable);
  }, [props]);

  return (
    <div className="Upload-Component">
      <div class="card">
        { props.isAdmin && <div class="card-header justify-content-between">
          <code class="timestamp">{props.parentData.date}</code>
          <div class="btn-group">
            <button id="del" class="btn" onClick={downloadFunction}>
              Download
            </button>
            <button id="del" class="btn" onClick={deleteUpload}>
              Delete
            </button>
          </div>
        </div> }
        <div class="card-body">
          <h5 class="card-title">{props.parentData.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default UploadComponent;
