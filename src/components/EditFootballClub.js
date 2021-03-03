import React, { useState, useEffect } from "react";
import {editFootballClubData, getFootballClub} from '../Functions/AppFunctions'

/**
 *
 * @param {*} props
 * In this component, you would design the ui that will enable a
 * user to edit and update an existing football club
 * import your EditFootball function and pass necessary arguments and return
 * a new data to be displayed on the frontend
 * Be creative with your ui design so users will not have a hard time interacting with your app
 */
const EditFootballClub = (props) => {
  const [isFootballClub, setIsFootballClub] = useState(false)
  const [school, setSchool] = useState(null);
  const [mascot, setMascot] = useState(null);
  const [conference, setConference] = useState(null);
  const [color, setColor] = useState(null);
  const [search, setSearch] = useState(null);

  if(!isFootballClub){
    const footballClub = getFootballClub(props.editFootballClub["id"], props.data)[0]
    setSchool(footballClub.school)
    setMascot(footballClub.mascot)
    setConference(footballClub.conference)
    setColor(footballClub.color)
    setSearch(footballClub.search ? footballClub.search.toString() : "")
    setIsFootballClub(true)

  }

  const submit = () => {
    const id = props.editFootballClub["id"]
    const _new_football_club = {
      school: school,
      mascot: mascot,
      color: color,
      conference: conference,
      search: search.split(","),
      id: id,
    };
    props.setData(editFootballClubData(_new_football_club, props.data));
    props.setFilteredClubs(editFootballClubData(_new_football_club, props.filteredClubs))
    props.setEditFootballClub({
      visible : false,
      id : null,
    });
  };

  return (
    <div>
       <div class="ui card fluid">
        <div class="content">
          <a class="header">Edit Football Club</a>
          <div class="ui divider"></div>
          <div class="description">
            <form class="ui form small fluid">
              <div class="field">
                <label>School</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="School"
                ></input>
              </div>
              <div class="field">
                <label>Mascot</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  value={mascot}
                  placeholder="Mascot"
                  onChange={(e) => setMascot(e.target.value)}
                ></input>
              </div>
              <div class="field">
                <label>Color</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Color"
                ></input>
              </div>
              <div class="field">
                <label>Conference</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
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

              <button class="ui button green" onClick={submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditFootballClub;
