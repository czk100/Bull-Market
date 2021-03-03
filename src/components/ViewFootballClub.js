import React from "react";
import { getFootballClub } from "../Functions/AppFunctions";
const ColorHelper = require('color-to-name');

/**
 *
 * @param {*} props
 *
 * In this component, you would design the ui that will enable a
 * user to view an existing football club
 * import your ViewFootball function and pass necessary arguments and return
 * a football club to be displayed on the frontend
 * Be creative with your ui design so users will not have a hard time interacting with your app
 */

const ViewFootballClub = (props) => {
  const getFootballClubData = () => {
    return getFootballClub(props.viewFootballClub["id"], props.data)[0];
  };

  const hex_to_color_name = (hex) =>{
    if(ColorHelper.isValidHexCode(hex)){
      const color = ColorHelper.findClosestColor(hex);
      return color.name
    }
    return null;
  }

  return (
    <div>
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <i style={{ color: "white" }}>
          Click on a school to view more information
        </i>
        {props.viewFootballClub['visible'] && getFootballClubData() && (
          <div class="ui card fluid">
            <div class="content">
              <a class="header">{getFootballClubData().school} Football Club</a>
              <div class="ui divider"></div>
              <div class="description">
                <p>School: {getFootballClubData().school}</p>
                <p>Mascot: {getFootballClubData().mascot}</p>
                <div style={{display:"flex"}}>
                <p style={{marginRight:"3px"}}>
                  Color: {hex_to_color_name(getFootballClubData().color)} /
                </p>
                <div style={{ backgroundColor: getFootballClubData().color, width: "140px" }}>{getFootballClubData().color}</div>
                </div>
                
                <p>Conference: {getFootballClubData().conference}</p>
                {getFootballClubData().search && (
                  <p>Search tags: {getFootballClubData().search.toString().replace(/,/gi, ', ')}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewFootballClub;
