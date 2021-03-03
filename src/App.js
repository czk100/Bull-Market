import React, { useState } from "react";
import Search from "./components/Search";
import ViewFootballClub from "./components/ViewFootballClub";
import FootballClubLists from "./components/FootballClubLists";
import AddFootballClub from "./components/AddFootballClub";
import RemoveFootballClub from "./components/RemoveFootballClub";
import EditFootballClub from "./components/EditFootballClub";
import { getData } from "./data/data.js";

function App() {
  const [data, setData] = useState(getData());
  const [filteredClubs, setFilteredClubs] = useState([]);
  const [delFootballClub, setDelFootballClub] = useState({
    visible: false,
    id: null,
  });
  const [editFootballClub, setEditFootballClub] = useState({
    visible: false,
    id: null,
  });
  const [viewFootballClub, setViewFootballClub] = useState({
    visible: false,
    id: 0,
  });
  const [addFootballClub, setAddFootballClub] = useState(false);

  //console.log(data)

  return (
    <div className="App">
      <div className="bg">
        <div
          style={{ paddingTop: "5%", paddingBottom: "10%" }}
          class="ui container"
        >
          <h1 style={{ color: "white", marginLeft: "25px" }}>
            Welcome To Football Club App
          </h1>
          <Search data={data} setFilteredClubs={setFilteredClubs} />

          <main style={{ marginTop: "50px" }} className="main">
            <div class="ui two column grid">
              <div class="row">
                <div
                  style={{ width: "55%" }}
                  class="table-responsive"
                  className="tableWrapper"
                >
                  <table class="ui stackable single line fixed striped selectable table padded ">
                    <thead>
                      <tr>
                        <th>School</th>
                        <th>Mascot</th>
                        <th class="four wide" colspan="2">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <FootballClubLists
                      data={data}
                      filteredClubs={filteredClubs}
                      setDelFootballClub={setDelFootballClub}
                      setEditFootballClub={setEditFootballClub}
                      setViewFootballClub={setViewFootballClub}
                    />
                    <tfoot>
                      <tr>
                        <th>
                          {filteredClubs !== null && filteredClubs.length !== 0
                            ? "Search results: " + filteredClubs.length
                            : data.length}{" "}
                          School(s)
                        </th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div
                  style={{
                    width: "35%",
                    marginLeft: "50px",
                    marginTop: "-20px",
                  }}
                  class="six wide column"
                >
                  <div>
                    {delFootballClub["visible"] && (
                      <RemoveFootballClub
                        data={data}
                        setData={setData}
                        delFootballClub={delFootballClub}
                        setDelFootballClub={setDelFootballClub}
                        setFilteredClubs={setFilteredClubs}
                        filteredClubs={filteredClubs}
                        setViewFootballClub={setViewFootballClub}
                        viewFootballClub={viewFootballClub}
                      />
                    )}
                  </div>
                  {!delFootballClub['visible'] && <div style={{marginTop: "25px", height: "116px" }}></div>}

                  <div style={{ marginTop: "10px" }}>
                    <ViewFootballClub
                      data={data}
                      viewFootballClub={viewFootballClub}
                      setViewFootballClub={setViewFootballClub}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => setAddFootballClub(true)}
                style={{ marginBottom: "5px" }}
                class="ui button yellow"
              >
                Add Football Club
              </button>
              <div class="row">
                <div style={{ marginLeft: "-12px" }} class="column">
                  {addFootballClub && (
                    <AddFootballClub
                      setData={setData}
                      data={data}
                      setAddFootballClub={setAddFootballClub}
                    />
                  )}
                </div>
                <div class="column">
                  {editFootballClub["visible"] && (
                    <EditFootballClub
                      data={data}
                      setData={setData}
                      filteredClubs={filteredClubs}
                      setFilteredClubs={setFilteredClubs}
                      setEditFootballClub={setEditFootballClub}
                      editFootballClub={editFootballClub}

                    />
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
