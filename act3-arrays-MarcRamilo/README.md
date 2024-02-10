[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12643722&assignment_repo_type=AssignmentRepo)
# Arrays

En aquesta activitat aprendrem a utilitzar Arrays amb JS en profunditat i ja de pas, començarem a reconèixer Typescript. Abans de res però, anem a conèixer algunes eines més que ens poden venir bé en el nostre dia a dia com a desenvolupadors.

## :bulb: Eslint

Com pots veure, el projecte té la següent estructura:

```
Projecte
├── src
│   └── index.js
├── tests
│   └── index.test.js
├── .eslintrc.json
├── .prettierrc.json
├── jest.config.js
├── package.json
└── README.md
```

Alguns d'aquests arxius ja els reconeixes però anem a fer un petit recordatori:

- src/index.js: Aquest fitxer és el punt d'entrada de l'aplicació. Conté la lògica principal del projecte.
- tests/index.test.js: Aquest fitxer conté les proves per al fitxer index.js.
- .eslintrc.json: Aquest fitxer és el fitxer de configuració per a ESLint. Especifica les regles per a la verificació de codi.
- .prettierrc.json: Aquest fitxer és el fitxer de configuració per a Prettier. Especifica les regles per al format del codi.
- jest.config.js: Aquest fitxer és el fitxer de configuració per a Jest. Especifica la configuració per a l'execució de les proves.
- package.json: Aquest fitxer és el fitxer de configuració per a npm. Llista les dependències i scripts per al projecte.
- README.md: Aquest fitxer conté la documentació per al projecte.

**Eslint** és una eina que ajuda a **detectar errors i aplicar bones pràctiques** en el codi JavaScript. Això ajuda a mantenir la qualitat del codi i a evitar errors comuns (més info --> https://www.youtube.com/watch?v=QpDpRmlFfqI&ab_channel=midulive).

Si mires el fitxer de configuració (.eslintrc.json) veuràs que hi ha un seguit de regles que s'apliquen al codi. Aquestes regles són les que Eslint comprovarà quan executis la comanda "npm run lint" i et dirà si el teu codi compleix amb elles o no. En aquest arxiu, estem establint per exemple que volem:

- Que sempre hi hagi un punt i coma al final de cada línia de codi
- Utilitzar cometes simples en lloc de dobles.
- Que la indentació sigui de 2 espais
- Permetre l'ús de la funció "console.log" en el nostre codi.

Quan executis Eslint en el teu projecte, aquestes regles es comprovaran automàticament i et donaran una llista d'errors i advertències que hauràs de corregir perquè el teu codi compleixi amb les regles establertes.

Per **instal·lar Eslint** al teu projecte, primerament has d'instal·lar-lo com a dependència de desenvolupament a través de npm. Pots fer-ho executant la següent comanda en la terminal:

```bash
npm install eslint --save-dev
```

## 🚀 Arrays

Un cop tinguis el teu entorn, anem ara sí a començar a treballar amb Arrays. Fes un cop d'ull a la documentació de [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array) a mesura que vagin sorgint els reptes per a familiaritzar-te amb els mètodes que pots utilitzar amb aquest tipus de dades. També disposes de la documentació actualitzada a la nostra [Wiki](https://prosfp.github.io/DAW_MP06/UF2/UF2.1/UF2.1.4_Arrays/) amb un llistat dels principals característiques i mètodes que pots utilitzar amb aquest tipus de dades.

## :computer: Exercicis

**Usar mètodes natius d'array en JavaScript**

Utilitza els mètodes natius d'array com ara filter, some, map, reduce, etc., per completar els fitxers core.js que es proporcionen en el projecte.

Abans de continuar, assegura't de seguir aquests passos:

1. Un cop tinguis el projecte clonat al teu ordinador, executa la comanda `npm install` per instal·lar totes les dependències del projecte. Això instal·larà Jest, Eslint i Prettier (ja que s'ha definit en el fitxer package.json que són dependències de desenvolupament).

2. Per completar l'exercici, només cal que modifiquis els fitxers **core.js**; no cal que modifiquis els fitxers de proves core.test.js.

3. Pots anar executant cadascuna de les proves amb la comanda `npm test o amb els plguins de VSCode que ja hem vist.
