const BASE_URL = "https://swapi.info/api/";

export async function getMovieCount() {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  return data.count;
}
export async function listMovies() {
  return fetch(`${BASE_URL}films/`)
    .then((res) => res.json())
    .then((json) => {
      let movies = json.map((movie) => ({
        name: movie.title,
        director: movie.director,
        release: movie.release_date,
        episodeID: movie.episode_id,
      }));
      return movies;
    });
}
export async function listMoviesSorted() {
  try {
    const response = await fetch(`${BASE_URL}films/`);
    const movies = await response.json();
    const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    return sortedMovies;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
// export async function listMoviesSorted() {
//   try {
//     const response = await fetch(`${BASE_URL}films/`);
//     const movies = await response.json();
//     const sortedMovies = movies.sort(function (a, b) {
//       if (a.title < b.title) {
//         return -1;
//       }
//       if (a.title > b.title) {
//         return 1;
//       }
//       return 0;
//     });
//     return sortedMovies;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// }
//Film ordenats per episodeID de forma ascendent.

export async function listEvenMoviesSorted() {
  try {
    const response = await fetch(`${BASE_URL}films/`);
    const movies = await response.json();
    //filter even episodeid %2
    const evenMovies = movies.filter((movie) => movie.episode_id % 2 === 0);
    //sort episodeid
    const sortedEvenMovies = evenMovies.sort(
      (a, b) => a.episode_id - b.episode_id
    );
    return sortedEvenMovies;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

export async function getMovieInfo(id) {
  try {
    const response = await fetch(`${BASE_URL}films/`);
    const movies = await response.json();
    const moviesMap = movies.map((movie) => ({
      characters: movie.characters,
      episodeID: movie.episode_id,
      name: movie.title,
    }));
    const charactersByIdFinalFiltered = moviesMap.filter(
      (movie) => movie.episodeID === id
    );
    return charactersByIdFinalFiltered;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export async function getCharacterName(URL) {
  try {
    const response = await fetch(`${URL}`);
    const movies = await response.json();
    const name = movies.name;
    // console.log(name);
    return name;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export async function getMovieCharacters(id) {
  try {
    const response = await fetch(`${BASE_URL}films/`);
    const movies = await response.json();
    const charactersById = movies.map((movie) => ({
      characters: movie.characters,
    }));
    const charactersURL = charactersById.flatMap((c) => c.characters); //FlatMap serveix per unir arrays
    const names = await Promise.allSettled(
      //AllSettled perque no es bloquegi si hi ha un error
      charactersURL.map((url) => getCharacterName(url))
    );
    //Comprovem que allsttled ha retornat un array de promeses i gesitonem els errors
    const namesFiltered = names.filter((name) => name.status === "fulfilled");

    const charactersByIdFinal = movies.map((movie) => ({
      name: movie.title,
      episodeID: movie.episode_id,
      characters: namesFiltered,
    }));
    const charactersByIdFinalFiltered = charactersByIdFinal.filter(
      (movie) => movie.episodeID === id
    );
    return charactersByIdFinalFiltered;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export async function getCharacterHomeworldURL(URL) {
  try {
    const response = await fetch(`${URL}`);
    const movies = await response.json();
    const name = movies.homeworld;
    const nameHomeworld = getCharacterHomeworldName(name);
    return nameHomeworld;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export async function getCharacterHomeworldName(URL) {
  try {
    const response = await fetch(`${URL}`);
    const movies = await response.json();
    const name = movies.name;
    return name;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export async function getMovieCharactersAndHomeworlds(id) {
  try {
    const response = await fetch(`${BASE_URL}films/`);
    const movies = await response.json();
    // console.log("movies", movies);
    const charactersById = movies.map((movie) => ({
      characters: movie.characters,
    }));
    const charactersURL = charactersById.flatMap((c) => c.characters);
    const names = await Promise.all(
      charactersURL.map((url) => getCharacterName(url))
    );
    const homeworlds = await Promise.all(
      charactersURL.map((url) => getCharacterHomeworldURL(url))
    );

    const charactersByIdFinal = movies.map((movie, index) => ({
      name: movie.title,
      episodeID: movie.episode_id,
      characters: names.map((name, nameIndex) => ({
        name: name,
        homeworld: homeworlds[nameIndex],
      })),
    }));
    //filter characters by movie id
    const charactersByIdFinalFiltered = charactersByIdFinal.filter(
      (movie) => movie.episodeID === id
    );
    return charactersByIdFinalFiltered;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
export async function createMovie(id) {
  try {
    const movieData = await getMovieInfo(id);
    const movie = movieData[0]; // getMovieInfo retorna un array amb un sol element
    const name = movie.name;
    const characters = await getCharacters(movie.characters);
    return new Movie(name, characters);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
async function getCharacters(charactersList) {
  try {
    const characters = await Promise.all(
      charactersList.map(async (url) => {
        const response = await fetch(url);
        const character = await response.json();
        return character.name;
      })
    );

    return characters;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

class Movie {
  constructor(name, characters) {
    this.name = name;
    this.characters = characters;
  }

  async getHomeworlds() {
    try {
      const homeworlds = await Promise.all(
        this.characters.map(async (url) => {
          const response = await fetch(url);
          const character = await response.json();
          const homeworldResponse = await fetch(character.homeworld);
          const homeworld = await homeworldResponse.json();
          return homeworld.name;
        })
      );
      console.log(homeworlds);
      return homeworlds;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getHomeworldsReverse() {
    try {
      const homeworlds = await this.getHomeworlds();
      // console.log(homeworlds.sort().reverse());
      return homeworlds.sort().reverse();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
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
