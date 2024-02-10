const { animals, employee, hours, prices, employees } = require('./data');

function entryCalculator(entrants) {
  if (!entrants || entrants === undefined || entrants.length === 0) {
    return 0;
  }
  const entriesArray = Object.entries(entrants);
  // let total = 0;
  return (entrants = entriesArray.reduce(
    (total, [tipusEntrada, nombreEntrades]) => {
      const preuTotalEntrada = prices[tipusEntrada] * nombreEntrades;
      return total + preuTotalEntrada;
    },
    0
  ));
}

//   entrants = entrants.reduce((acc, curr) => {
//     if (curr == 'Adult') {
//       return acc + prices.Adult;
//     } else if (curr == 'Senior') {
//       return acc + prices.Senior;
//     } else if (curr == 'Child') {
//       return acc + prices.Child;
//     }
//   }, 0);
//   return entrants;
// }

//   //  prices: { Adult: 49.99, Senior: 24.99, Child: 20.99 }
//   //var entrants = { Adult: 2, Child: 3, Senior: 1 };
//   //var actual = zoo.entryCalculator(entrants);
//   // assert.equal(actual, 187.94);
//   entrants = entrants.map((i) => {
//     if (i == 'Adult') {
//       return 49.99;
//     } else if (i == 'Senior') {
//       return 24.99;
//     } else if (i == 'Child') {
//       return 20.99;
//     }
// });
//   return entrants;
// }

function schedule(dayName) {
  // var expected = {
  //   Monday: 'CLOSED',
  // };
  function convertHour(hour) {
    return hour > 12 ? `${hour - 12}pm` : `${hour}am`;
  }
  if (!dayName) {
    const days = Object.keys(hours);
    return days.reduce((total, actual) => {
      const openHour = convertHour(hours[actual].open);
      const closeHour = convertHour(hours[actual].close);
      if (openHour === '0am' && closeHour === '0am') {
        total[actual] = 'CLOSED';
        return total;
      }
      total[actual] = `Open from ${openHour} until ${closeHour}`;
      return total;
    }, {});
  } else {
    const openHour = convertHour(hours[dayName].open);
    const closeHour = convertHour(hours[dayName].close);
    if (openHour === '0am' && closeHour === '0am') {
      return {
        [dayName]: 'CLOSED',
      };
    }
    return {
      [dayName]: `Open from ${openHour} until ${closeHour}`,
    };
  }
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((total, actual) => {
      total[actual.name] = actual.residents.length; // total[actual.name] es el nom de l'animal i actual.residents.length es el nombre de residents de l'animal. posem igual perque es un objecte i no un array
      return total;
    }, {});
  } else {
    const animal = animals.find((animal) => animal.name === species); //find fa que retorni el primer element que compleixi la condició
    return animal.residents.length; // retorna el nombre de residents de l'animal
  }
  // const animalsCount = animals.reduce((accum,{name,residents}) => {
  //   accum[name] = residents.length;
  //   return accum;
  // }, {});
  // return !species ? animalsCount : animalsCount[species];
}

function animalMap({ includeNames, sex: genere } = {}) {
  const initialValue = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  return animals.reduce((accum, { name: especie, location, residents }) => {
    //Filtrem els residents en funció del sexe si tenim el paràmetre amb un filter
    const residentFilter = genere
      ? residents.filter((resident) => resident.sex === genere)
      : residents;
    console.log(residentFilter);
    //Filtrem els residents en funció del sexe si tenim el paràmetre amb un filter
    const llistaNoms = includeNames
      ? { [especie]: residentFilter.map((resident) => resident.name) }
      : especie;
    //Si includeNames és true, retornem un objecte amb el nom de l'animal i un array amb els noms dels residents si no, retornem només el nom de l'animal.

    accum[location] = [...accum[location], llistaNoms];
    return accum;
  }, initialValue);
  // if (!options) {
  //   return animals.reduce((total, actual) => {
  //     if (!total[actual.location]) {
  //       total[actual.location] = [];
  //     }
  //     total[actual.location].push(actual.name); // aqui es fa un push del nom de l'animal a l'array de la location
  //     return total;
  //   }, {});
  // } else if (options.includeNames) {
  //   return animals.reduce((total, actual) => {
  //     if (!total[actual.location]) {
  //       total[actual.location] = []; // aqui es crea la key amb el nom de la location i es crea un array buit per cada location
  //     }
  //     const animal = actual.name;
  //     const animalObj = {}; // es crea un objecte buit per cada animal
  //     animalObj[animal] = []; // aqui es crea la key amb el nom de l'animal i es crea un array buit per cada animal
  //     if (options.includeNames) {
  //       const names = actual.residents.map((resident) => resident.name);
  //       animalObj[animal] = names;
  //     }
  //     total[actual.location].push(animalObj);
  //     return total;
  //   }, {});
  // }
}

function animalPopularity(rating) {
  const filteredAnimals = animals.reduce((accum, { name, popularity }) => {
    if (!accum[popularity]) {
      //si no existeix la key popularity, la crea i li assigna un array buit
      accum[popularity] = [];
    }
    accum[popularity].push(name); //afegeix el nom de l'animal a l'array de la key popularity
    return accum; //retorna l'objecte amb la key popularity i l'array amb els noms dels animals
  }, {});
  return rating ? filteredAnimals[rating] : filteredAnimals; //si rating es true, retorna l'array de la key popularity, si no, retorna l'objecte amb la key popularity i l'array amb els noms dels animals.
}

function animalsByIds(ids) {
  if (!ids) {
    return [];
  } else if (ids.length === 1) {
    return animals.filter((animal) => ids.includes(animal.id));
  } else if (ids.length > 1) {
    return animals.filter((animal) => ids.includes(animal.id));
  }
  //switch (typeof ids){
  // case 'undefined': return;
  // case 'string': retrun [animals.find((animal) => animal.id === ids)];;
  // case 'object': return animals.filter((animal) => ids.includes(animal.id));
  //}
}

function animalByName(animalName) {
  // if (animalName === undefined) {
  //   return {};
  // } else {
  //   return animals.find(({ residents }) => {
  //     residents.find(({ name }) => name === animalName);
  //   });
  // }

  const getAnimal = () => {
    const { name, residents } = animals.find(({ residents }) => {
      return residents.find(({ name }) => name === animalName);
    });
    const resident = residents.find(({ name }) => name === animalName);
    return { ...resident, species: name };
  };

  return animalName ? getAnimal() : {};

}

function employeesByIds(ids) {
  if (!ids) {
    return [];
  } else if (ids.length === 1) {
    return employees.filter((employee) => ids.includes(employee.id));
  } else if (ids.length > 1) {
    return employees.filter((employee) => ids.includes(employee.id));
  }
}
  // const funcByType ={
  //   undefined: () => [],
  //   string: (id) => [employees.find((employee) => employee.id === id)],
  //   object: (ids) => employees.filter((employee) => ids.includes(employee.id)),
  // };
  // return funcByType[typeof ids](ids);
  // }


function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } else {
    return employees.find((empleat) =>empleat.firstName === employeeName || empleat.lastName === employeeName);
  }
}
function managersForEmployee(idOrName) {
  const employee = employees.find( // troba l'empleat que compleixi la condició
    (empleat) =>
      empleat.id === idOrName ||
      empleat.firstName === idOrName ||
      empleat.lastName === idOrName
  );

  const managerIds = employee.managers;
  const managers = employees
    .filter((emp) => managerIds.includes(emp.id)) //filter fa que retorni un array amb els managers de l'empleat
    .map((emp) => `${emp.firstName} ${emp.lastName}`); //map fa que retorni un array amb els noms dels managers de l'empleat

  return { //retorna un objecte amb les keys id, firstName, lastName, managers i responsibleFor
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    managers: managers,
    responsibleFor: employee.responsibleFor,
  };
}

function employeeCoverage(idOrName) {
  const employee = employees.find(
    (empleat) =>
      empleat.id === idOrName ||
      empleat.firstName === idOrName ||
      empleat.lastName === idOrName
  );

  if (!employee) {
    return animals.reduce((total, actual) => {
      total[actual.name] = actual.residents.map((resident) => resident.name);
      return total;
    }, {});
  }

  const animalsIds = employee.responsibleFor;
  const animalsNames = animals
    .filter((animal) => animalsIds.includes(animal.id))
    .map((animal) => animal.name);

  return {
    [`${employee.firstName} ${employee.lastName}`]: animalsNames,
  };
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage,
};
