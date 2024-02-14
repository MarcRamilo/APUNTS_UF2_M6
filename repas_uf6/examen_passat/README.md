[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/YXhigBwG)
# Check Point 1 - DAW MP6 2023/2024

## UF1 (50% Nota final) i UF2 (25% Nota final) - Fonaments de JS, funcions i arrays.

## Aquests percentatges són en relació a la nota final d'examens/proves (60% de la nota final del mòdul)

## :warning: **ATENCIÓ!** No creeïs cap arxiu nou i treballa als arxius ja creats amb els noms ex1.html, ex1.js i ex2.js sota la carpeta /src i fes un commit sovint! Llegeix i segueix les instruccions :warning:

### Notes generals IMPORTANTS

- Es valorarà que el codi sigui net, ordenat i òptim d'acord amb el que s'ha vist a classe. No és suficient que el codi funcioni per obtenir la nota màxima:
  - 0p: Codi no funciona o no s'ha implementat la funció.
  - 1/3p: Codi NO-funcional però net, ordenat i òptim fins a un cert punt ("errada tonta").
  - 2/3p: Codi funcional però no és net, ordenat i òptim.
  - 1p: Codi funcional i net, ordenat i òptim.
- Es valorarà que el codi estigui comentat.
- Utilitzeu noms significatius per a les variables i funcions per millorar la llegibilitat del codi.

### :fire: Exercici 1 - Endevina la Data (2punts)

Quin desastre! Teníem un joc acabat però no sé que hem fet que em perdut el codi font i ens ha quedat ben poc. El joc consistia en el següent:

- L'usuari ha d'endevinar un any de naixement aleatori entre 1980 i 2024.
- Si no sabeu com generar el número aleatori, al menys poseu vosaltres un any hardcodejat.
- L'usuari introdueix l'any amb un prompt.
- L'usuari té 5 oportunitats per endevinar l'any correcte.
- Si l'usuari encerta, es mostra un missatge d'encert (alert)
- Si l'usuari introdueix un any més petit, es mostra un missatge indicant que l'any és més petit.
- Si l'usuari introdueix un any més gran, es mostra un missatge indicant que l'any és més gran.
- Si l'usuari esgota les oportunitats sense encertar, es mostra un missatge indicant que ha perdut.
- Si l'usuari encerta abans d'esgotar les oportunitats, es mostra un missatge indicant que ha guanyat.

Ens ha quedat només això del codi:

```javascript
const anyNaixement = () => {

    return any;
};

const any = anyNaixement();

const endevinarAny = () => {
  let endevina;
  let intents = 0;
  while () {

  }
  alert('Has esgotat les teves oportunitats!');
};

endevinarAny();
```

Ens ajudes a acabar el joc?

### :weight_lifting_man: Exercici 2 - Finances Cirvianum (4punts)

En aquest exercici, heu de desenvolupar un sistema de gestió de finances per a l'Institut Cirvianum. Les dades proporcionades són fictícies, però estan orientades al context d'un institut. Les funcions a implementar són de diversa complexitat i estan dissenyades per ser resoltes de manera incremental, és a dir, en l'ordre en què apareixen a l'enunciat.

**IMPORTANT LLEGIR!!!**

- Abans de res executa un `npm install` per instal·lar les dependències necessàries. Aquest projecte té la llibreria de 'jest' per si vols fer proves unitàries.
  FES SERVIR EL NOM DE LES FUNCIONS QUE ES DEMANEN.
- Declara totes les variables i funcions en aquest mateix arxiu i tindràs accés en tot moment (variables globals).
- Per provar les funcions pots fer servir la consola del navegador o node.js amb `node src/Ex.js`.
- És aconsellable desenvolupar les funcins en ordre, ja que les funcions posteriors podrien dependre de les anteriors i es valorarà que ho feu d'aquesta manera.
- Podeu fer servir i es valora l'ús d'objectes i mètodes predefinits del llenguatge per facilitar algunes operacions (mètodes de `Math`, `Object`, `String`, etc...).
- En parèntesi trobaràs els quantitats que faré servir per provar les funcions. No has d'implementar els testos, pots anar provant els teus resultats a la consola del navegador.

1. **Ingressos de l'Institut:** (1p)

   - Declareu un objecte `institutCirvianum` que contingui el `NIF` ("12345678A"), `adreça` ("Carrer Autista March, s/n, 08570 Torelló") i `secretaria` ("Teresa Secretaria") així com els ingressos de l'institut. Els ingressos han de formar part de `institutCirvianum` en un objecte anomenat `ingressos` que ha de tenir propietats com `subvencions` (75000), `matricules` (10000) i `altres` (8000).

2. **Despeses Fixes de l'Institut:** (0,5p)

   - Declareu un objecte `despesesFixes` que contingui les despeses fixes de l'institut. Aquest objecte ha de tenir les propietats: `salaris` (45000), `serveis` (22000) i `materialDidactic` (10000).

3. **Despeses Variables de l'Institut:** (0,5p)

   - Declareu un array `despesesVariables` que contingui diverses despeses variables de l'institut. Cada despesa ha de tenir un `concepte` i una `quantitat`. Les despeses que ha de contenir són: `materialOficina` (2000), `materialNeteja` (1000), `materialInformatic` (3000) i `activitatsExtraescolars` (5000).

4. **Funció per Calcular Ingressos Totals:** (1p)

   - Implementeu una funció `sumIngressos` que, donat l'objecte `institutCirvianum`, retorni la suma total dels ingressos. Pots guardar el resultat en una variable global anomenada `ingressosTotals`.

5. **Funció per Calcular Despeses Totals:** (1,5p)

   - Implementeu una funció `sumDespeses` que, donat els objectes `despesesFixes` i `despesesVariables`, retorni la suma total de les despeses (fixes i variables) de l'institut. Pots guardar el resultat en una variable global anomenada `despesesTotals`.

6. **Funció per Calcular Estat Financer:** (1p)

   - Implementeu una funció `estatFinancer` que, donats els `ingressosTotals` i les `despesesTotals`, retorni l'estat financer de l'institut (ingressos - despeses) amb una precisió de 2 decimals. Assegura't de retornar el resultat en format de número. Guarda el resultat en una variable global anomenada `balançGlobal`.

7. **Funció per Informar de si hi ha Superàvit o Dèficit:** (1p)

   - Implementeu una funció `superavit`, que donat un balanç (el retornat per la funció superàvit en el teu cas), mostri: "L'Institut Cirvianum amb NIF 12345678A té un superàvit de 1000€". Si no hi ha superàvit, el missatge ha de ser: "L'Institut Cirvianum amb NIF 12345678A té un dèficit de 1000€". NIF, superàvit/dèficit i quantitat han de ser variables i generar-se dinàmicament.

8. **Funció per mostrar una alerta per pantalla amb l'estat financer:** (0,5p)

   - Feu una nova funció anomenada `superavitAlert` i copiant el codi de l'anterior, de manera que es mostri el missatge a través d'una alerta per pantalla amb les xifres en dos decimals. Per exemple, si l'estat financer és de 1000.123456789, l'alerta ha de mostrar "L'Institut Cirvianum amb NIF 12345678A té un superàvit de 1000.12€".

9. **Funció per Afegir Despesa Variable:** (1,5p)

   - Implementeu una funció `afegirDespesa` que permeti afegir una nova despesa variable a l'array `despesesVariables`. Aquesta funció ha de rebre els paràmetres necessaris (concepte i quantitat). Si no rep la quantitat la genera aleatòriament entre 1000 i 5000. Ha de retornar l'array `despesesVariables` amb la nova despesa afegida.

10. **Funció per Eliminar Despesa Variable:** (1,5p)
    - Implementeu una funció que permeti eliminar una despesa variable de l'array `despesesVariables`. Aquesta funció ha de rebre el concepte de la despesa a eliminar.
