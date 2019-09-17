
const initialState = {
  allPlanets: [],
  planetData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_PLANETS' :
      return {
        allPlanets: action.payload
      };
      default:
        return state;
  }
};

export default reducer;