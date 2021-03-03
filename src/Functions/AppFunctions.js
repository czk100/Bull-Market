/**
 * Write all your functions here and export them to use in each respective component
 * An example is done below for filtering football clubs
 * The functions written below [getFilteredClubs and deleteFootballClub] are to aid you in completing
 * - AddFootballClub function
 * - EditFootballClub function
 * and lastly,
 * - ViewFootball function
 */

const getFilteredClubs = (filterText, data) => {
  //
  /**
   * Here, you will need to search football clubs either by school name or by tags
   * the search word should be an index of either the school name or tag
   * if possible, you can optimize this function as much as you can
   */
  let results = [];
  results = data.filter((footballClub) => {
    return (
      filterText.length > 0 &&
      footballClub.school
        .toLowerCase()
        .indexOf(filterText.toLowerCase().trim()) !== -1
    );
  });
  //(footballClub.search.indexOf(filterText) !== -1)
  /**
   * if search by school name return 0, search by tags
   */
  if (results.length === 0) {
    data.filter((footballClub) => {
      footballClub.search.filter((tags) => {
        if (tags.indexOf(filterText) !== -1) {
          results.push(footballClub);
        }
      });
    });
    //remove duplicates
    const unique = new Set(results);
    //change it back to an array and return it
    results = [...unique];
    return results;
  }
  return results;
};

const deleteFootballClub = (id, data) => {
  return data.filter((footballClub) => {
    return footballClub.id !== id;
  });
};

const getFootballClub = (id, data) => {
  return data.filter((footballClub) => {
    return footballClub.id === id;
  });
}

const addFootballClubData = (footballClub, data) => {
  const _data_ = data
  _data_.push(footballClub);
   return _data_
};

const editFootballClubData = (footballClub, data) => {
  let _data_ = []
  data.forEach(element => {
    if(element.id === footballClub.id){
      element = footballClub
    }
    _data_.push(element)
    
  });
   return _data_
};

export {
  getFilteredClubs,
  deleteFootballClub,
  addFootballClubData,
  editFootballClubData,
  getFootballClub,
};
