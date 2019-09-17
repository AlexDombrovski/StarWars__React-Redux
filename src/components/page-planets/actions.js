import SwapiService from '../../services';


const swapiService = new SwapiService();

const getAllPlanets = async () => {
  const res = await swapiService.getAllPlanets();
  return {
    type: 'GET_ALL_PLANETS',
    payload: res
  }
};

export { getAllPlanets };