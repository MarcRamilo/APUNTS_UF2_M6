// Desenvolupa aqui les funcions demanades

// Exercici 1
const anyNaixement = () => {
    //Generem un numero random entre el minim i el maxim numero i retornem l'any
    const maxNumber = 1980;
    const minNumber = 2024;
    const any = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    return any;
};

const any = anyNaixement();

const endevinarAny = () => {
  let endevina =false;
  let intents = 5;
  //Fem un while que mentres l'usuari no endivini el numero o els intents siguin menors als numero de intents que s'executi el codi
  while (!endevina == true || intents !=0 ) {
    let anyIntroduit = prompt("Introdueix un any: ");
    //Comparem si l'any introduit és més petit al any generat
    if (anyIntroduit > any) {
        missatge = `L'any Introduit és MÉS GRAN que l'any Random de la màquina INTENTS:${intents}`;
        intents --;
    //Comparem si l'any introduit és més gran al generat
    } else if (anyIntroduit < any){
        missatge = `L'any Introduit és MÉS PETIT que l'any Random de la màquina INTENTS:${intents}`;
        intents --;
    // Comprovem si l'any introduit és igual al any generat i diem que ha guanyat
    }else if(anyIntroduit === any) {
        endevina = true;
        missatge = `Has encertat l'any! HAS GUANYAT!! INTENTS:${intents} `
        
    } else{ //Tornem a demanar que introudeixi l'any si no es cumpleixen les condicions
        let anyIntroduit = prompt("Introdueix un any: ");
    }
    alert(missatge); //Mostrem els missatges
  }

  alert('Has esgotat les teves oportunitats!');
};

endevinarAny();
