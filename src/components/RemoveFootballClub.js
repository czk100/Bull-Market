import React, { useState, useEffect } from "react";
import { deleteFootballClub } from "../Functions/AppFunctions";

const RemoveFootballClub = (props) => {
  const remove = () => {
    const id = props.delFootballClub["id"]
    props.filteredClubs.length === 0
      ? props.setData(deleteFootballClub(id, props.data))
      : props.setFilteredClubs(
          deleteFootballClub(id, props.filteredClubs)
        ) ||
        props.setData(deleteFootballClub(id, props.data));

    if (props.viewFootballClub["id"] === id) {
      props.setViewFootballClub({
        visible: false,
        id: null,
      });
    }
    props.setDelFootballClub({
      visible: false,
      id: null,
    });
  };
  const cancel = () => {
    props.setDelFootballClub({
      visible: false,
      id: null,
    });
  };

  return (
    <div style={{ marginTop: "25px" }} class="ui floating  message">
      <div class="header">Delete Football Club</div>
      <p>Are you sure you want to delete this football Club?</p>
      <button onClick={remove} class="ui button red ">
        Yes
      </button>
      <button onClick={cancel} class="ui button green">
        No
      </button>
    </div>
  );
};

export default RemoveFootballClub;
