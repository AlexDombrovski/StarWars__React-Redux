import SwapiService from '../../services/swapi-service';


const swapiService = new SwapiService();

const getAllPlanets = () => {
  return async (dispatch) => {
    const res = await swapiService.getAllPlanets();
    dispatch({type: 'GET_ALL_PLANETS', payload: res });
  }
};

const showPlanetCard = (data) => {
  return async (dispatch) => {
    dispatch({type: 'SHOW_PLANET_CARD', payload: data });
  }
};

export { getAllPlanets, showPlanetCard };