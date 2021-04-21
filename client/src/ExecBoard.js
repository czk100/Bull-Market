import "./App.css";
import "./ExecBoard.css";
import React from "react";
import Uploader from "./Uploads/Uploader";

function ExecBoard() {
  return (
    <div className="execboard-container">
      <h1 class="display-3">Executive Board</h1>
      <Uploader />
    </div>
  );
}

export default ExecBoard;
