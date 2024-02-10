// 2. Fes un console-log de tots els paràmetres de l'array tret de "Oluwatobi" i "sofela".
const [firstName, lastName, ...otherInfo] = [
  'Oluwatobi',
  'Sofela',
  'CodeSweetly',
  'Web Developer',
  'Male',
];
console.log(otherInfo);
