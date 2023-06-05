const {
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
} = require("../data/funciones");
//igualdad
test("sumar 1 + 2 es igual a 3", () => {
  expect(sumar(1, 2)).toBe(3);
});

test("restar 5 - 3 es igual a 2", () => {
  expect(restar(5, 3)).toEqual(2);
});
//numericos
test("multiplicar 2 * 5 es menor a 11", () => {
  expect(multiplicar(2, 5)).toBeLessThan(11);
});

test("multiplicar 2 * 5 es menor igual a 10", () => {
  expect(multiplicar(2, 5)).toBeLessThanOrEqual(10);
});

test("dividir 10 / 2 es mayor igual a 5", () => {
  expect(dividir(10, 2)).toBeGreaterThanOrEqual(5);
});

test("dividir 10 / 2 es mayor a 4", () => {
  expect(dividir(10, 2)).toBeGreaterThan(4);
});
//Boolean, Nulos y Undefined
test("si 5 es mayor que 2  ", () => {
  expect(5 > 2).toBeTruthy();
});

test("si 1 no es mayor que 2", () => {
  expect(1 > 2).toBeFalsy();
});

test("si isUndefined es undefined", () => {
  expect(undefined).toBeUndefined();
});

test("si null es null", () => {
  expect(null).toBeNull();
});
// Arrays y contenido y strings
test(" si lunes esta en dias", () => {
  expect(dias).toContain("Lunes");
});

test("verificar la longitud del array", () => {
  expect(provincias).toHaveLength(9);
});

test("si el valor esperado es igual a la longitud del string", () => {
  expect("hola").toHaveLength(4);
});

//**/
/* test("Obtener Tarea", async () => {
  expect(await funcionObtenerTarea(2)).toEqual([
    {
      id: 2,
      titulo: "pasear al perro",
      prioridad_id: 2,
      usuario_id: 2,
      completado: true,
    },
  ]);
}); */
