// ### Exercici 1: Gestió d'assistents a una conferència

// Imagina que estàs organitzant una conferència i tens una llista d'assistents amb informació sobre els seus noms i l'empresa a la qual pertanyen. Ara bé, com que hem agafat la informació de bases de dades diferents, la llista conté duplicats. Crea una funció que, donada aquesta llista, utilitzi un `Set` per eliminar els duplicats i retorni una llista d'assistents únics.

// ```javascript
// const attendeesList = [
//     { name: 'Alice', company: 'TechCo' },
//     { name: 'Bob', company: 'DataCorp' },
//     { name: 'Alice', company: 'TechCo' },
//     { name: 'Charlie', company: 'SoftSys' }
//     { name: 'Bob', company: 'DataCorp' }
// ];

// const uniqueAttendees = removeDuplicates(attendeesList); //canviem en nom de les variables per no confondre'ns
// console.log(uniqueAttendees);