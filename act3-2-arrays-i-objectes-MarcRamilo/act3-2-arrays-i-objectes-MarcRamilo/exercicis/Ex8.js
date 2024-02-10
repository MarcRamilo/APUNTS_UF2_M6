const persones = [
    { nom: 'Anna', edat: 25 },
    { nom: 'Pere', edat: 15 },
    { nom: 'Joan', edat: 40 },
    { nom: 'Maria', edat: 35 },
    { nom: 'Carles', edat: 41 },
    { nom: 'Laura', edat: 18 },
    { nom: 'Marc', edat: 33 },
    { nom: 'Júlia', edat: 22 },
  ];
  
  function edatMitjana(persones) {
    // Utilitza la funció `filter` per seleccionar només les persones amb edats entre 25 i 40 anys.
    const personesEntre25i40 = persones.filter(persona => persona.edat >= 25 && persona.edat <= 40);
  
    // Utilitza la funció `reduce` per sumar totes les edats d'aquestes persones.
    const sumaEdats = personesEntre25i40.reduce((total, persona) => total + persona.edat, 0);
  
    // Calcula l'edat mitjana dividint la suma de les edats pel nombre de persones.
    const edatMitjana = sumaEdats / personesEntre25i40.length;
  
    return edatMitjana;
  }
  
  // Exemple d'ús:
  const mitjana = edatMitjana(persones);
  console.log(`L'edat mitjana de les persones entre 25 i 40 anys és: ${mitjana}`);
  