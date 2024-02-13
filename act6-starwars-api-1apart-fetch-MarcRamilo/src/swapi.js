const BASE_URL = "https://swapi.info/api/";

export async function getMovieCount() {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  return data.count;
}
export async function listMovies() {
  try {
    const res = await fetch(`${BASE_URL}films/`);
    const data = await res.json();
    const movies = data.map((movie) => ({
      name: movie.title,
      diretor: movie.director,
      release: movie.release_date,
      episodeID: movie.episode_id,
    }));
    return movies;
  } catch (e) {
    console.error("Error", e);
  }
}
export async function listMoviesSorted() {
  try {
    const res = await fetch(`${BASE_URL}films/`);
    const data = await res.json();
    const moviesSorted = data.sort((a, b) => a.title.localeCompare(b.title));
    // const moviesSortedByNumberAscending = data.sort((a,b) => a.episode_id-b.episode_id);
    // const moviesSortedByNumberDescending = data.sort((a,b) => b.episode_id-a.episode_id);
    return moviesSorted;
  } catch (e) {
    console.error("Error", e);
  }
}

export async function listEvenMoviesSorted() {
  try {
    const res = await fetch(`${BASE_URL}films/`);
    const data = await res.json();
    const moviesEven = data.filter((movie) => movie.episode_id % 2 === 0);
    const moviesSortedEven = moviesEven.sort(
      (a, b) => a.episode_id - b.episode_id
    );
    return moviesSortedEven;
  } catch (e) {
    console.error("Error", e);
  }
}

export async function getMovieInfo(id) {
  try {
    const res = await fetch(`${BASE_URL}films/`);
    const data = await res.json();
    const movieFilter = data.filter((movie) => movie.episode_id === id);
    const movieMaped = movieFilter.map((movie) => ({
      charecets: movie.characters,
      episodeID: movie.episode_id,
      name: movie.title,
    }));
    return movieMaped;
  } catch (e) {
    console.error("Error", e);
  }
}
export async function getCharacterName(URL) {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const name = data.name;
    return name;
  } catch (e) {
    console.error("Error", e);
  }
}
export async function getMovieCharacters(id) {
  try {
    const res = await fetch(`${BASE_URL}/films`);
    const data = await res.json();
    const charetersById = data.filter((c) => c.episode_id === id);
    const URLChareters = charetersById.map((c) => c.characters).flat();
    const characterToName = await Promise.allSettled(
      URLChareters.map((url) => getCharacterName(url))
    );
    const namesFiltered = characterToName.filter(
      (name) => name.status === "fulfilled"
    );

    const arrayFinal = charetersById.map((movie) => ({
      name: movie.title,
      episodeID: movie.episode_id,
      characters: namesFiltered.map((resultat) => resultat.value),
    }));
    return arrayFinal;
  } catch (e) {
    console.error("Error", e);
  }
}
export async function getCharacterHomeworld(URL) {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const homeworldRes = await fetch(data.homeworld);
    const homeworldData = await homeworldRes.json();
    return homeworldData.name;
  } catch (e) {
    console.error("Error", e);
  }
}
export async function getMovieCharactersAndHomeworlds(id) {
  try {
    const res = await fetch(`${BASE_URL}/films`);
    const data = await res.json();
    const filtredChareters = data.filter((ep_id) => ep_id.episode_id === id);
    const URLChareters = filtredChareters.flatMap((c) => c.characters);
    const arrayCharacters = await Promise.allSettled(
      URLChareters.map((url) => getCharacterName(url))
    );
    const arrayHomewordl = await Promise.allSettled(
      URLChareters.map((url) => getCharacterHomeworld(url))
    );
    const arrayChareter = data.map((c) => ({
      episode_id: c.episode_id,
      name: c.title,
      characters: arrayCharacters.map((d, index) => ({
        name: d.value,
        homeworld: arrayHomewordl[index].value,
      })),
    }));
    return arrayChareter;
  } catch (e) {
    console.error("Error", e);
  }
}

export async function createMovie(id) {}
async function getCharacters(charactersList) {}

class Movie {
  async getHomeworlds() {}

  async getHomeworldsReverse() {}
}

// export async function getMovieCount() {
//   const res = await fetch('https://swapi.dev/api/films/');
//   const data = await res.json();
//   return data.count;
// }

// Una bona opció si teniu ja prou apresa la lògica, és fer una funció genèrica per fer les requests a la API

// export async function getSwapiData(path) {
//   const res = await fetch(`${BASE_URL}${path}`);
//   const data = await res.json();
//   return data;
// }

// export async function getMovieCount() {
//   const data = await getSwapiData('films/');
//   return data.count;
// }

// A vegades veureu també la lògica amb response.ok:
// export async function getSwapiData(path) {
//   const res = await fetch(`${BASE_URL}${path}`);
//   if (res.ok) {
//     const data = await res.json();
//     return data;
//   }
//   throw new Error('Something went wrong');
// }

// Aneu afegint les functions a exportar aquí
const swapi = {
  getMovieCount,
  listMovies,
  listMoviesSorted,
  listEvenMoviesSorted,
  getMovieInfo,
  getCharacterName,
  getMovieCharacters,
  getMovieCharactersAndHomeworlds,
  createMovie,
};

export default swapi;
