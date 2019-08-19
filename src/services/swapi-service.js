export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getPlanet(id) {
    const urlAdressPlanets = `${this._apiBase}/planets/${id}`; // формируем урл, куда потом постучимся
    const res = await fetch(urlAdressPlanets); // стучимся по url
    const body = await res.json(); // формируем нужное из result

    return body; // возвращаем нужное и отформатированное
  }

  async getAllPeople(number) {
    const urlAdressPeople = `${this._apiBase}/people/${number}`;
    const res = await fetch(urlAdressPeople);
    const body = await res.json();

    return body;
  }


//   async getResource(url) {
//     const res = await fetch(`${this._apiBase}${url}`);

//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}` +
//         `, received ${res.status}`)
//     }
//     return await res.json();
//   }

//   async getAllPeople() {
//     const res = await this.getResource(`/people/`);
//     return res.results;
//   }

//   getPerson(id) {
//     return this.getResource(`/people/${id}/`);
//   }

//   async getAllPlanets() {
//     const res = await this.getResource(`/planets/`);
//     return res.results;
//   }

//   getPlanet(id) {
//     return this.getResource(`/planets/${id}/`);
//   }

//   async getAllStarships() {
//     const res = await this.getResource(`/starships/`);
//     return res.results;
//   }

//   getStarship(id) {
//     return this.getResource(`/starships/${id}/`);
//   }
}

/*{const getResourse = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
  };

getResourse('https://swapi.co/api/people/1')
    .then((body) => {
        console.log(body);
    });}*/