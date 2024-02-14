// Desenvolupa aqui les funcions demanades

// Exercici 2
//Variables requerides:
//----------Exericici 1---------------------
const institutCirivanum = {
  NIF: "12345678A",
  adreça: "Carrer Autista March, s/n, 08570 Torelló",
  secretaria: "Teresa Secretaria",
  ingressos: {
    subvencions: 75000,
    matricules: 10000,
    altres: 8000,
  },
};
//----------Exericici 2---------------------

const despesesFixes = {
  salaris: 45000,
  serveis: 22000,
  materialDidactic: 10000,
};
//----------Exericici 3---------------------

const despeseVariable = [
  { concepte: "materialOficina", quantitat: 2000 },
  { concepte: "materialNeteja", quantitat: 1000 },
  { concepte: "materialInformatic", quantitat: 3000 },
  { concepte: "activitatsExtraescolars", quantitat: 5000 },
];

let balançGlobal = 0;

//----------Exericici 4---------------------

function sumIngressos(institutCirivanum) {
  let IngressosTotals = 0;
  const ingresos = Object.values(institutCirivanum.ingressos); // Treiem els valors de ingresos
  console.log(ingresos);
  for (let i = 0; i < ingresos.length; i++) { //Iterem per l'array i retornem el total
    IngressosTotals += ingresos[i];
  }
  return IngressosTotals;
}
//----------Exericici 5---------------------

function sumDespeses(despesesFixes, despesesVariables) {
  let despesesTotals = 0;
  const depsesesFixesValors = Object.values(despesesFixes);// Treiem els valors de despeses

  for (let i = 0; i < depsesesFixesValors.length; i++) { //Iterem sobre cadascun i sumem al total
    despesesTotals += depsesesFixesValors[i];
  }
  for (let i = 0; i < despeseVariable.length; i++) {//Iterem sobre cadascun i sumem al total
    despesesTotals += despeseVariable[i].quantitat;
  }
  return despesesTotals;
}
//----------Exericici 6---------------------

function estatFinancer(ingressosTotals, despesesTotals) {
  const ingresos = sumIngressos(institutCirivanum);
  const despeses = sumIngressos(despesesFixes, despesesVariables);
  balançGlobal = ingresos - despeses;
  Number.parseFloat(balançGlobal).toFixed(2); //Tallem al decimal
  return balançGlobal;
}
//----------Exericici 7---------------------

function superavit(balançGlobal) {
    let variableDeficit;
  if (balançGlobal < 0) { 
     variableDeficit = "dèficit";
  } else {
     variableDeficit = "superàvit";
  }
  return `L'Institut Cirvianum amb NIF 12345678A té un ${variableDeficit} de ${balançGlobal}€`; //Si el balanç es positiu retornem frase amb els valors
}
//----------Exericici 8---------------------
function superavitAlert(balançGlobal) {
  Number.parseFloat(balançGlobal).toFixed(2);
  if (balançGlobal < 0) {
    let variableDeficit = "dèficit";
  } else {
    let variableDeficit = "superàvit";
  }
  return alert(`L'Institut Cirvianum amb NIF 12345678A té un ${variableDeficit} de ${balançGlobal}€`);
}

//----------Exericici 9---------------------
function afegirDespesa(concepte, quantitat) {
  if (!concepte) {
    const any = Math.random() * (1000 - 5000) + 1000;
  }
  return despeseVariable.push({ 'concepte': concepte, 'quantitat': quantitat }); 
}
//----------Exericici 10---------------------

function eliminarDespesa(concepte) {
    const elementAEliminar = {};
  for (let i = 0; i < despeseVariable.length; i++) {
    if (concepte === despeseVariable.concepte) {
       elementAEliminar = despeseVariable[i];
    }
  }
  return delete despeseVariable[elementAEliminar];
  
}

module.exports = {
  sumIngressos,
  sumDespeses,
  estatFinancer,
  superavit,
  afegirDespesa,
  eliminarDespesa,
};
