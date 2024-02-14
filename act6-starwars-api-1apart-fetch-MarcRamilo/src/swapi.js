const BASE_URL = "https://swapi.info/api/";
//data, 
export async function getMovieCount() {
 try {
const res = await fetch (`${BASE_URL}films/`)
if (!res.ok){
  throw new Error('errrroror')
}
const data = await res.json();
return data.length;
  
 } catch (error) {
  console.error('Error', error)
 }
}
export async function listMovies() {
 try{
    const res = await fetch(`${BASE_URL}films/`);
    const data = await res.json();
    const movies = data.map((m)=>({
      name: m.title,
      director: m.director,
      release: m.release_date,
      episodeID: m.episode_id
    }))
    return movies;
 } catch (e){
   console.error(e);
 }
}
export async function listMoviesSorted() {
  try{
    const res = await fetch(`${BASE_URL}films/`);
    const data = await res.json()
    const sortedMovies = data.sort((a, b) => a.title.localeCompare(b.title));
    const movies = sortedMovies.map((m)=>({
      name: m.title,
      director: m.director,
      release: m.release_date,
      episodeID: m.episode_id
    }))
    // const sortedMovies = movies.sort(function (a, b) {
      //       if (a.title < b.title) {
      //         return -1;
      //       }
      //       if (a.title > b.title) {
      //         return 1;
      //       }
      //       return 0;
    
    return movies;
 } catch (e){
   console.error(e);
 }
}

export async function listEvenMoviesSorted() {
  const res = await fetch(`${BASE_URL}films/`);
  const data = await res.json()
  const moviesSorted = data.sort((a,b)=> a.episodeID - b.episodeID).reverse();
  const filterMovies = moviesSorted.filter((movie) => movie.episodeID % 2 == 0);
  return filterMovies
}

export async function getMovieInfo(id) {
  const res = await fetch(`${BASE_URL}films/`);
  const data = await res.json();
  const moviesFiltered = data.filter((movie)=> movie.episode_id == id);

  const moviesMap = moviesFiltered.map((ma)=> ({
    characters: ma.characters,
    episodeID: ma.episode_id,
    name: ma.title,
  }))
  return moviesMap;

}
export async function getCharacterName(URL) {
  try {
    const res = await fetch(URL);
    const character = await res.json();
    //'Luke Skywalker'
    return character.name;
  } catch (e){
    console.error(e);
  }
}
export async function getCharacterHomeworlds(URL) {
  try {
    const res = await fetch(URL);
    const character = await res.json();
    //'Luke Skywalker'
    const charectersFetch = await fetch (character.homeworld);
    const charectersPromised = await charectersFetch.json();
    return charectersPromised.name;
  } catch (e){
    console.error(e);
  }
}
export async function getMovieCharacters(id) {
  try {
    const res = await fetch(`${BASE_URL}films/${id}`);
    const movies = await res.json();
    const characters = await Promise.all(movies.characters.map(getCharacterName));
    const mapMovies  = {
      name: movies.title,
      episodeID: movies.episode_id,
      characters: characters
    };
    return mapMovies;
  } catch (e){
    console.error(e);
  }
}
// }
// {
//   "name": "A New Hope",
//   "episodeID": 4,
//   "characters": [
//     "Luke Skywalker",
//     "C-3PO",
//     "R2-D2",
//     "Darth Vader",
//     "Leia Organa",
//     "Owen Lars",
//     "Beru Whitesun lars",
//     "R5-D4",
//     "Biggs Darklighter",
//     "Obi-Wan Kenobi",
//     "Wilhuff Tarkin",
//     "Chewbacca",
//     "Han Solo",
//     "Greedo",
//     "Jabba Desilijic Tiure",
//     "Wedge Antilles",
//     "Jek Tono Porkins",
//     "Raymus Antilles"
//   ]
// }

export async function getMovieCharactersAndHomeworlds(id) {
  try {
    const response = await fetch(`${BASE_URL}films/`);
    const movies = await response.json();
    const charFinalById = movies.filter((movie) => movie.episode_id === id);
    const characters = charFinalById.map((movie) => ({ characters: movie.characters }));
    // const charactersURL = characters.flatMap((c) => c.characters) //Fem el flatMap perquè el map ens retorna un array de arrays i volem un array de strings
    const charactersURL = characters.map((c) => c.characters).reduce((acc, val) => acc.concat(val), []); // Fem el reduce perquè el map ens retorna un array de arrays i volem un array de strings
    const namesPromises = charactersURL.map((url) => getCharacterName(url));
    const homeworldsPromises = charactersURL.map((url) => getCharacterHomeworlds(url));
    const names = await Promise.all(namesPromises);
    const homeworlds = await Promise.all(homeworldsPromises);
    const characterDetails = names.map((name, index) => ({
      name: name,
      homeworld: homeworlds[index]
    }));
    const charFinal = charFinalById.map((movie) => ({
      name: movie.title,
      episodeID: movie.episode_id,
      characters: characterDetails
    }));
    return charFinal;
  } catch (e) {
    console.error(e);
  }
}
// export async function getMovieCharactersAndHomeworlds(id) {
//   try {
//     const response = await fetch(`${BASE_URL}films/`);
//     const movies = await response.json();
//     const moviesFiltered = movies.filter((m) => m.episode_id === id);
//     const characters = moviesFiltered.map((movie) => ({ characters: movie.characters }));
//     const charactersURL = characters.flatMap((c) => c.characters) //Fem el flatMap perquè el map ens retorna un array de arrays i volem un array de strings
//     const names = await Promise.all(charactersURL.map(getCharacterName));
//     const homeworld = await Promise.all(charactersURL.map(getCharacterHomeworlds));
//     const characterDetails = names.map((name,Index) => ({
//       name:name,
//       homeworld:homeworld[Index]
//     }))
//     const charFinal = moviesFiltered.map((movie)=> ({
//       name: movie.title,
//       episodeID: movie.episode_id,
//       characters: characterDetails
//     }))
//     return charFinal;
//   } catch (e) {
//     console.error(e);
//   }
// }

// export async function getMovieCharactersAndHomeworlds(id) {
//   try {
//     const res = await fetch(`${BASE_URL}films/${id}`);
//     const movie = await res.json();
    
//     const characterURLs = movie.characters;
    
//     const charactersPromises = characterURLs.map(async (url) => {
//       const characterRes = await fetch(url);
//       const character = await characterRes.json();
//       const homeworldRes = await fetch(character.homeworld);
//       const homeworld = await homeworldRes.json();

//       return {
//         name: character.name,
//         homeworld: homeworld.name,
//       };
//     });

//     const characters = await Promise.all(charactersPromises);

//     const mappedMovie = {
//       name: movie.title,
//       episodeID: movie.episode_id,
//       characters: characters,
//     };

//     return character;
//   } catch (e) {
//     console.error(e);
//     // Handle error appropriately
//     throw e;
//   }
// }


// // Promise all

// export async function getMovieCharactersAndHomeworlds(id) {
//   try {
//     const res = await fetch(`${BASE_URL}films/${id}`);
//     const movie = await res.json();
    
//     const characterURLs = movie.characters;
    
//     const characters = await Promise.all(
//       characterURLs.map(async (url) => {
//         const characterRes = await fetch(url);
//         const character = await characterRes.json();

//         const homeworldRes = await fetch(character.homeworld);
//         const homeworld = await homeworldRes.json();

//         return {
//           name: character.name,
//           homeworld: homeworld.name,
//         };
//       })
//     );

//     const mappedMovie = {
//       name: movie.title,
//       episodeID: movie.episode_id,
//       characters: characters,
//     };

//     return mappedMovie;
//   } catch (e) {
//     console.error(e);
//     // Handle error appropriately
//     throw e;
//   }
// }


///

export async function createMovie(id) {}


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
