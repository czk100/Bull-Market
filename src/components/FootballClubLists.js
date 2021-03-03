import React from "react";

/**
 *
 * @param {*} props
 *
 * In this component, you would complete the editFootballClub function
 * If you need help, check out how the deleteFootballClub function was implemented
 */

const FootballClubLists = (props) => {

  const deleteFootballClub = (id) => {
    props.setDelFootballClub({
      visible : true,
      id : id,
    });
  };

  const editFootballClub = (id) => {
    props.setEditFootballClub({
      visible : true, 
      id : id,
    })
  };

  const viewFootballClubData = (id) => {
    props.setViewFootballClub({
      visible: true,
      id: id,
    });
  };

  //console.log(props.data)

  const buildingList =
    props.filteredClubs.length === 0
      ? props.data.map((footballClub) => {
          return (
            <tr
              key={footballClub.id}
            >
              <td onClick={() => viewFootballClubData(footballClub.id)} data-label="School">{footballClub.school} </td>
              <td onClick={() => viewFootballClubData(footballClub.id)} data-label="Mascot"> {footballClub.mascot} </td>
              <td onClick={() => editFootballClub(footballClub.id)}>
                <i class="edit icon"></i>
              </td>
              <td onClick={() => deleteFootballClub(footballClub.id)}>
                <i class="trash alternate icon"></i>
              </td>
            </tr>
          );
        })
      : props.filteredClubs.map((footballClub) => {
          return (
            <tr
              key={footballClub.id}
            >
              <td onClick={() => viewFootballClubData(footballClub.id)} data-label="School">{footballClub.school} </td>
              <td onClick={() => viewFootballClubData(footballClub.id)} data-label="Mascot"> {footballClub.mascot} </td>
              <td onClick={() => editFootballClub(footballClub.id)}>
                <i class="edit icon"></i>
              </td>
              <td onClick={() => deleteFootballClub(footballClub.id)}>
                <i class="trash alternate icon"></i>
              </td>
            </tr>
          );
        });

  return <tbody>{buildingList}</tbody>;
};
export default FootballClubLists;
