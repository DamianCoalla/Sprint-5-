const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const provincias = [
  "Álava",
  "Badajoz",
  "Cáceres",
  "Girona",
  "Huelva",
  "Jaén",
  "La Rioja",
  "Madrid",
  "Navarra",
];
const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

// Para trabajar con boleanos
const isNull = () => null;
const isFalse = () => false;
const isTrue = () => true;
const isUndefined = () => undefined;

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  isNull,
  isFalse,
  isTrue,
  isUndefined,
  provincias,
  dias,
};
