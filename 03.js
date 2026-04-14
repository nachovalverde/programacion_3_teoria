let usuario = prompt("Ingrese su usuario: ")
let password = prompt("Ingrese la contraseña: ")

if (usuario === "admin") {
    if (password === "1234") {
        console.log("Acceso concedido");
    }
} else {
    console.log("Acceso denegado");
}