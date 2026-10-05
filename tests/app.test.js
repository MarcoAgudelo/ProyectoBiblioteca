const {
    puedePrestar,
    calcularFechaDevolucion,
    libroDisponible,
    validarPrestamo
} = require("../src/app");

test("permite prestar si el usuario tiene menos de 3 libros", () => {
    expect(puedePrestar(2)).toBe(true);
});

test("rechaza el prestamo si el usuario ya tiene 3 libros", () => {
    expect(puedePrestar(3)).toBe(false);
});

test("calcula la devolucion exactamente 7 dias despues", () => {
    const fecha = calcularFechaDevolucion("2026-10-04");
    expect(fecha.toISOString().split("T")[0]).toBe("2026-10-11");
});

test("identifica correctamente un libro disponible", () => {
    expect(libroDisponible("Disponible")).toBe(true);
});

test("rechaza un libro que ya figura como prestado", () => {
    expect(libroDisponible("Prestado")).toBe(false);
});

test("autoriza un prestamo que cumple todas las reglas", () => {
    expect(validarPrestamo(2, "Disponible")).toBe(true);
});

test("rechaza el prestamo cuando el usuario alcanzo el limite", () => {
    expect(validarPrestamo(3, "Disponible")).toBe(false);
});

test("rechaza el prestamo cuando el libro ya esta prestado", () => {
    expect(validarPrestamo(1, "Prestado")).toBe(false);
});