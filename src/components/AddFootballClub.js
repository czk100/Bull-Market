import React, { useState, useEffect } from "react";
import { addFootballClubData } from "../Functions/AppFunctions";

/**
 *
 * @param {*} props
 * In this component, you would design the ui to enable a user add a new football club to this app
 * import your AddFootball function and pass necessary arguments and return a new data to be displayed on the frontend
 * Be creative in your designing so users will not have a hard time interacting with your app
 */

const AddFootballClub = (props) => {
  const [school, setSchool] = useState(null);
  const [mascot, setMascot] = useState(null);
  const [conference, setConference] = useState(null);
  const [color, setColor] = useState(null);
  const [search, setSearch] = useState(null);

  const submit = () => {
    const required = school && mascot && conference && color;
    if (required) {
      const id =
        props.data.length > 0 ? props.data[props.data.length - 1].id + 1 : 1;
      let _new_football_club = {};
      if (!search) {
        _new_football_club = {
          school: school,
          mascot: mascot,
          color: color,
          conference: conference,
          id: id,
        };
      } else {
        _new_football_club = {
          school: school,
          mascot: mascot,
          color: color,
          conference: conference,
          search: search.split(","),
          id: id,
        };
      }
      props.setData(addFootballClubData(_new_football_club, props.data));
      props.setAddFootballClub(false);
    }
  };

  return (
    <div>
      <div class="ui card fluid">
        <div class="content">
          <a class="header">Add Football Club</a>
          <div class="ui divider"></div>
          <div class="description">
            <form class="ui form small fluid">
              <div class="required field">
                <label>School</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  value={school}
                  required
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="School"
                ></input>
              </div>
              <div class="required field">
                <label>Mascot</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  required
                  value={mascot}
                  placeholder="Mascot"
                  onChange={(e) => setMascot(e.target.value)}
                ></input>
              </div>
              <div class="required field">
                <label>Color</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  required
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Color"
                ></input>
              </div>
              <div class="required field">
                <label>Conference</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  required
                  value={conference}
                  onChange={(e) => setConference(e.target.value)}
                  placeholder="Conference"
                ></input>
              </div>
              <div class="field">
                <label>Search Tags</label>
                <textarea
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  rows="2"
                ></textarea>
              </div>

              <button class="ui button green" type="submit" onClick={submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddFootballClub;
