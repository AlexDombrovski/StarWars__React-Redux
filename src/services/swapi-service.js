

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
}

