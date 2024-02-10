// Exercici 4: Filtratge de dades amb Set i Map
// Tens la següent llista de tasques amb la categoria i el temps estimat per completar-les.
//Crea una funció que, donada aquesta llista, utilitzi un Map per organitzar les tasques per categoria
//i un Set per emmagatzemar les categories úniques.

function categorizeTasks(tasks) {
  const uniqueCategories = new Set();
  const categorizedTasks = new Map();
  tasks.forEach((task) => {
    uniqueCategories.add(task.category);
    if (categorizedTasks.has(task.category)) { // aixo fa que si hi ha una categoria repetida a la llista, no la torni a afegir. Ex: Desenvolupament: [Crear API REST, Implementar funcionalitats del client]
      categorizedTasks.set(task.category, [...categorizedTasks.get(task.category),task,task.time]); // aixo fa que  si hi ha una categoria repetida a la llista, afegeixi la tasca a la categoria repetida. Ex: Desenvolupament: [Crear API REST, Implementar funcionalitats del client]
    } else {
      categorizedTasks.set(task.category, [task]);// aixo fa que si no hi ha una categoria repetida a la llista, afegeixi la tasca a la categoria. Ex: Desenvolupament: [Crear API REST]
    }
  });
  return { uniqueCategories, categorizedTasks };
}

const tasksList = [
  { category: 'Desenvolupament', name: 'Crear API REST', time: 120 },
  { category: 'Disseny', name: 'Disenyar interfície d_usuari', time: 60 },
  {
    category: 'Desenvolupament',
    name: 'Implementar funcionalitats del client',
    time: 180,
  },
  { category: 'Testos', name: 'Provar el sistema', time: 90 },
];

const result = categorizeTasks(tasksList);
console.log('Categories úniques:', result.uniqueCategories);
console.log('Tasques categoritzades:', result.categorizedTasks);
