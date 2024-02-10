// ### Exercici 1: Gestió d'assistents a una conferència

// Imagina que estàs organitzant una conferència i tens una llista d'assistents amb informació sobre els seus noms i l'empresa
//a la qual pertanyen. Ara bé, com que hem agafat la informació de bases de dades diferents, la llista conté duplicats.
//Crea una funció que, donada aquesta llista, utilitzi un `Set` per eliminar els duplicats i retorni una llista d'assistents únics.

// ```javascript
const attendeesList = [
  { name: 'Alice', company: 'TechCo' },
  { name: 'Bob', company: 'DataCorp' },
  { name: 'Alice', company: 'TechCo' },
  { name: 'Charlie', company: 'SoftSys' },
  { name: 'Bob', company: 'DataCorp' },
];
//Crea una funció que, donada aquesta llista, utilitzi un `Set` per eliminar els duplicats i retorni una llista d'assistents únics.

function removeDuplicates(arraySet) {
  // const uniceAttendees = arraySet.reduce((acc, current) => {
  //   const x = acc.find((item) => item.name === current.name);
  //   if (!x) {
  //     return (acc = [...acc, current]);
  //   } else {
  //     return acc;
  //   }
  // }, []);
  // return uniceAttendees;
  const uniceAttendees = arraySet.filter((item, index) => {
    return (
      arraySet.findIndex((item2) => {
        return item.name === item2.name;
      }) === index
    );
  });
  return uniceAttendees;
}
removeDuplicates(attendeesList);
