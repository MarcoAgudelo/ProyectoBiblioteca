function puedePrestar(cantidadPrestamos) {
    return cantidadPrestamos < 3;
}

function calcularFechaDevolucion(fechaPrestamo) {
    const fecha = new Date(fechaPrestamo);
    fecha.setDate(fecha.getDate() + 7);
    return fecha;
}

function libroDisponible(estado) {
    return estado !== "Prestado";
}

function validarPrestamo(cantidadPrestamos, estadoLibro) {
    if (!puedePrestar(cantidadPrestamos)) {
        return false;
    }

    if (!libroDisponible(estadoLibro)) {
        return false;
    }

    return true;
}

module.exports = {
    puedePrestar,
    calcularFechaDevolucion,
    libroDisponible,
    validarPrestamo
};