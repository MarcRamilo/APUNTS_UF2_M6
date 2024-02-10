// Suposem que tenim tres variables per guardar els nom, el cognom i el "nickname" d'un usuari.
//Ara bé, no estem segurs que tinguem tota aquesta informació.
//Només sabem que com a mínim en tenim una d'aquestes i que volem mostrar a alerta seguint la següent
//prioritat: nom --> cognom --> nickName --> 'anònim' Escriu el codi que ens ho soluciona fent ús de "??".
// expresión_condicional ? expresion1 : expresion2;
// let nom = null;
// let cognom = null;
// let nickName = null;

// let resultat = nom ?? cognom ?? nickName ?? 'anònim'; //Parsing error: Unexpected token ?eslint
// alert(resultat);
// correcio
let nom = null;
let cognom = null;
let nickName = null;



let resultat = nom !== null ? nom : cognom !== null ? cognom : nickName !== null ? nickName : 'anònim';
alert(resultat);
alert(resultat);


