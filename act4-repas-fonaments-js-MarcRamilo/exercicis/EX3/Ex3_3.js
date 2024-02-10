// Exercici 3.3: A vegades hi ha comportaments que no son del tot "lògics". Fes un cop d'ull als següents exemples, prova'ls i intenta extreure'n conclusions del funcionament de JS:
let a, b, c, d;

//Sempre mana el String
a = '5' + 5; //55 (String)
b = 5 + '5'; //55 (String)
c = '5' - 5; //0 (Number)
d = '5' * '5'; //25 (Number)

a = '15' > 5; //true (Boolean)
b = 5 > '15'; //false (Boolean)
c = '15' > '5'; //false (Boolean) //compara el primer caràcter de cada string
d = '5' > '15'; //true (Boolean)  //compara el primer caràcter de cada string