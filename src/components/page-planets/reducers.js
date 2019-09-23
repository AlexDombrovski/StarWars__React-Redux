
const initialState = {
  allPlanets: [],
  planetData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_PLANETS' :
      return {
        ...state,
        allPlanets: action.payload,
      };

    case 'SHOW_PLANET_CARD' :
      return {
        ...state,
        planetData: action.payload,
      };
      
      default:
        return state;
  }
};

export default reducer;