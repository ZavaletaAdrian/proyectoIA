function tomaDeDatos(){
  var sintoma = document.createElement('label');
  sintoma.textContent = "Secreción";
  var valorSintoma = document.createElement('select');
  valorSintoma.setAttribute("name", "valor");
  var opcion1 = document.createElement('option');
  opcion1.innerHTML = "si duele";
  var opcion2 = document.createElement('option');
  opcion2.innerHTML = "maso duele";
  document.body.appendChild(sintoma);
  document.body.appendChild(valorSintoma);
  valorSintoma.appendChild(opcion1);
  valorSintoma.appendChild(opcion2);
}


const nombreEnfermedad = {
  nombre: "nombreEnfermedad",
  descripcion: "descripcionEnfermedad",
  recomendacion: "recomendacionEnfermedad",
  sintomas: [],
};

const arrayEnfermedades = [nombreEnfermedad];
const umbralBase = 0.0;

/**
 * It takes two arrays as parameters, one with the symptoms of the patient and the other with the
 * diseases to be diagnosed, and returns an object with the disease that best matches the symptoms of
 * the patient
 * @param data - an array of 15 integers, each one representing the number of symptoms the user has.
 * @param enfermedades - an array of numbers that represent the diseases that the user has selected.
 * @returns An object with a key of sinEnfermedad and a value of an object with a key of sinEnfermedad
 * and a value of an object with a key of nombre and a value of "No se ha detectado enfermedad" and a
 * key of descripcion and a value of "Si continuas presentando sintomas, consulta con tu
 */
const diagnostico = (data, enfermedades) => {
  let [auxiliar, result] = [[], []];
  let respuesta = {};

  for (i = 0; i < enfermedades.length; i++) {
    for (j = 0; j < 15; j++) {
      const posicion = parseInt(enfermedades[i]) - 1;
      auxiliar[j] = Math.min(data[j], arrayEnfermedades[posicion].sintomas[j]);
    }
    result[i] = auxiliar;
    auxiliar = [];
  }
  for (i = 0; i < enfermedades.length; i++) {
    result[i] = result[i].reduce((a, b) => a + b, 0);
  }
  let i = result.indexOf(Math.max.apply(Math, result));

  result[i] <= umbralBase
    ? (respuesta["sinEnfermedad"] = {
        nombre: "No se ha detectado enfermedad",
        descripcion:
          "Si continuas presentando sintomas, consulta con tu médico",
        recomendacion: "Sigue cuídando tu salud!",
      })
    : (respuesta["sinEnfermedad"] = {
        sinEnfermedad: arrayEnfermedades[enfermedades[i] - 1],
      });
  return respuesta;
};
