//Estructura callback
function callback() {
  console.log("Callback");
}
function funcio(callback) {
  callback();
}

// Estructura de una promesa
const promesa = new Promise((resolve, reject) => {
  if (true) {
    resolve("Correcte");
  } else {
    reject("Incorrecte");
  }
});
promesa
  .then((resultat) => console.log(resultat))
  .catch((error) => console.log(error));

// Estructura de una promesa amb async/await
async function promesaAsync() {
  try {
    const resultat = await promesa;
    console.log(resultat);
  } catch (error) {
    console.log(error);
  }
}
promesaAsync();

// Estructura de una promesa amb fetch amb una funció async/await
async function fetchData() {
  const response = await fetch("https://api.github.com");
  const data = await response.json();
  console.log(data);
}
fetchData();

// Estructura de una promesa amb fetch amb una funció then/catch
fetch("https://api.github.com")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
