

export default class SwapiService {

  _apiBase = 'https://swapi.co/api'; // выносим "корень" урла;

  async getPlanet(id) {
    const urlAdressPlanets = `${this._apiBase}/planets/${id}`; // формируем урл, куда потом постучимся;
    const res = await fetch(urlAdressPlanets); // стучимся по url;
    const body = await res.json(); // формируем нужное из result;

    return body; // возвращаем нужное и отформатированное;
  }

  async getAllPeople() {
    const urlAdressPeople = `${this._apiBase}/people/`;  // формируем урл, куда потом постучимся;
    const res = await fetch(urlAdressPeople);  // стучимся по url;
    const body = await res.json();  // формируем нужное из result;

    return body.results;  // возвращаем нужное и отформатированное;
  }

  async getOnePerson(id) {
    const res = await fetch(`${this._apiBase}/people/${id}`);
    const body = await res.json();

    return body;
  }

  async getAllPlanets() {
    const urlAdressPlanets = `${this._apiBase}/planets/`;
    const res = await fetch(urlAdressPlanets);
    const body = await res.json();

    return body.results;
  }

  async getAllStarships() {
    const urlAdressStarships = `${this._apiBase}/starships/`;
    const res = await fetch(urlAdressStarships);
    const body = await res.json();
    
    return body.results;
  }
}

