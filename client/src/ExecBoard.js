import "./App.css";
import "./ExecBoard.css";
import React from "react";
import ExecLoader from "./Loaders/ExecLoader";
import ExecAdder from "./Adders/ExecAdder";

const ExecBoard = (props) => {
  return (
    <div className="exec-container">
      <h1 class="display-3">Executive Board</h1>
      <div className="execTextEditable">
        <div className="messageFormat">
          <ExecLoader isAdmin={props.isAdmin} />
        </div>
        <div className="execFormat">
          {props.isAdmin && <ExecAdder />}
        </div>
      </div>
    </div>
  );
}

export default ExecBoard;
