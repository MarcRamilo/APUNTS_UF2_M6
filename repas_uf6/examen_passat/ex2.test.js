const {
  sumIngressos,
  sumDespeses,
  estatFinancer,
  superavit,
  superavitAlert,
  afegirDespesa,
  eliminarDespesa,
} = require('./Ex2');

describe('sumIngressos', () => {
  test('should return the sum of all ingresos', () => {
    const institutCirvianum = {
      NIF: '12345678A',
      adreça: 'Carrer Autista March, s/n, 08570 Torelló',
      secretaria: 'Teresa Secretaria',
      ingressos: {
        subvencions: 75000,
        matricules: 10000,
        altres: 8000,
      },
    };

    const result = sumIngressos(institutCirvianum);

    expect(result).toBe(93000);
  });
});

describe('sumDespeses', () => {
  test('should return the sum of all despeses', () => {
    const despesesFixes = {
      salaris: 45000,
      serveis: 22000,
      materialDidactic: 10000,
    };

    const despesesVariables = [
      { concepte: 'materialOficina', quantitat: 2000 },
      { concepte: 'materialNeteja', quantitat: 1000 },
      { concepte: 'materialInformatic', quantitat: 3000 },
      { concepte: 'activitatsExtraescolars', quantitat: 5000 },
    ];

    const result = sumDespeses(despesesFixes, despesesVariables);

    expect(result).toBe(88000);
  });
});

describe('estatFinancer', () => {
  test('should return the difference between IngressosTotals and despesesTotals', () => {
    const IngressosTotals = 93000;
    const despesesTotals = 83000;

    const result = estatFinancer(IngressosTotals, despesesTotals);

    expect(result).toBe(10000);
  });
});

describe('superavit', () => {
  test('should return the correct message for positive balançGlobal', () => {
    const balançGlobal = 10000;

    const result = superavit(balançGlobal);

    expect(result).toBe(
      "L'Institut Cirvianum amb NIF 12345678A té un superàvit de 10000€"
    );
  });

  test('should return the correct message for negative balançGlobal', () => {
    const balançGlobal = -10000;

    const result = superavit(balançGlobal);

    expect(result).toBe(
      "L'Institut Cirvianum amb NIF 12345678A té un dèficit de -10000€"
    );
  });
});

describe('superavitAlert', () => {
  test('should call the alert function with the correct message', () => {
    const balançGlobal = 10000;

    global.alert = jest.fn();

    superavitAlert(balançGlobal);

    expect(global.alert).toHaveBeenCalledWith(
      "L'Institut Cirvianum amb NIF 12345678A té un superàvit de 10000.00€"
    );
  });
});

describe('afegirDespesa', () => {
  test('should add a new despesa to despesesVariables', () => {
    const concepte = 'nouConcepte';
    const quantitat = 5000;

    const result = afegirDespesa(concepte, quantitat);

    expect(result).toContainEqual({ concepte: 'nouConcepte', quantitat: 5000 });
  });

  test('should add a random despesa to despesesVariables if concepte is not provided', () => {
    const concepte = 'nouConcepteRandom';
    const result2 = afegirDespesa(concepte);
    //console.log(result);

    expect(result2).toHaveLength(5);
    expect(result2[4]).toHaveProperty('concepte');
    expect(result2[4]).toHaveProperty('quantitat');
  });
});

describe('eliminarDespesa', () => {
  test('should remove the despesa with the given concepte from despesesVariables', () => {
    const concepte = 'materialOficina';

    const result = eliminarDespesa(concepte);

    expect(result).not.toContainEqual({
      concepte: 'materialOficina',
      quantitat: 2000,
    });
  });
});
