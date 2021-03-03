import schools from './schools.json'

const getData = () => {
  let all_footballClubs = [];
  let id = 1;
    schools.forEach(element => {
        element["id"] = id
        all_footballClubs.push(element)
        id++
        
    });
  return all_footballClubs
};

export { getData };
