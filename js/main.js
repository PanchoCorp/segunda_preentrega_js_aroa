alert("Bienvenido al centro de gestión de turnos");

function pedirNombre() {
    let nombre = prompt("Ingrese su nombre/s");
    while (nombre == "") {
        nombre = prompt("Ingrese nombre nuevamente");
    }

    return nombre
};

function pedirApellido() {
    let apellido = prompt("Ingrese su apellido/s");
    while (apellido == "") {
        apellido = prompt("Ingrese apellido nuevamente");
    }

    return apellido
};

function pedirDni() {
    let dni = prompt("Ingrese su DNI");
    while (dni == "") {
        dni = prompt("Ingrese DNI nuevamente");
    }

    return dni
};

function pedirCelular() {
    let celular = parseFloat(prompt("Ingrese su número de celular"));
    while (celular == "") {
        celular = prompt("Ingrese su número de celular nuevamente");
    }

    return celular
};

let nombreUsuario = pedirNombre();
let apellidoUsuario = pedirApellido();
let dniUsuario = pedirDni();
let celularUsuario = pedirCelular();

// ETAPA DE ELECCION DE ESPECIALIDAD

class Especialidades {
    constructor(id, servicio) {
        this.id = id
        this.servicio = servicio
    }
};

const listaEspecialidadesUno = new Especialidades(0, "Médico Clínico");
const listaEspecialidadesDos = new Especialidades(1, "Oftalmología");
const listaEspecialidadesTres = new Especialidades(2, "Traumatología");
const listaEspecialidadesCuatro = new Especialidades(3, "Otorrinolaringología");
const listaEspecialidadesCinco = new Especialidades(4, "Ginecología");
const listaEspecialidadesSeis = new Especialidades(5, "Endocrinología");
const listaEspecialidadesSiete = new Especialidades(6, "Hematología");
const listaEspecialidadesOcho = new Especialidades(7, "Dermatología");

const especialidades = [listaEspecialidadesUno, listaEspecialidadesDos, listaEspecialidadesTres,
    listaEspecialidadesCuatro, listaEspecialidadesCinco, listaEspecialidadesSeis,
    listaEspecialidadesSiete, listaEspecialidadesOcho]; //Array especialidades

alert("Elija el número de especialidad deseada");

let mensaje = "";

especialidades.forEach(valor => {
    mensaje += (valor.id + ":" + " " + valor.servicio + "\n")
});

let valorUsuario = 8;

while (valorUsuario >= 8) {
    valorUsuario = prompt(mensaje);
};

// ETAPA DE ELECCION DE DOCTOR DE LA ESPECIALIDAD

class Doctores {
    constructor(id, nombre, apellido, especialidad) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.especialidad = especialidad
    }
};

const doctorUno = new Doctores(0, "Claudia Alejandra", "Perez Raggio", "Médico Clínico");
const doctorDos = new Doctores(1, "Ana María Jesús", "Moya", "Médico Clínico");
const doctorTres = new Doctores(2, "Dolores", "Lezica", "Oftalmología");
const doctorCuatro = new Doctores(3, "María Silvina", "Bordeu", "Oftalmología");
const doctorCinco = new Doctores(4, "Guillermo Osvaldo", "Bove", "Traumatología");
const doctorSeis = new Doctores(5, "Adrian", "Elorza", "Traumatología");
const doctorSiete = new Doctores(6, "Lucila", "Cordero", "Otorrinolaringología");
const doctorOcho = new Doctores(7, "Luciana", "Ghezzi", "Otorrinolaringología");
const doctorNueve = new Doctores(8, "Natalia Andrea", "Zabalet", "Ginecología");
const doctorDiez = new Doctores(9, "Viviana Alejandra", "Gollan", "Endocrinología");
const doctorOnce = new Doctores(10, "Andrea", "Cocca", "Hematología");
const doctorDoce = new Doctores(11, "María Aurelia", "Mazzeo", "Hematología");
const doctorTrece = new Doctores(12, "Fernanda", "Di Pietro", "Dermatología");
const doctorCatorce = new Doctores(13, "Karina Alejandra", "Cejas", "Dermatología");
const doctorQuince = new Doctores(14, "Cecilia Ayelen", "Lefevre", "Nutrición");

const cartilla = [doctorUno, doctorDos, doctorTres, doctorCuatro,
    doctorCinco, doctorSeis, doctorSiete, doctorOcho,
    doctorNueve, doctorDiez, doctorOnce, doctorDoce,
    doctorTrece, doctorCatorce, doctorQuince]; //Array cartilla

// FILTROS NECESARIOS PARA LA APLICACION

const algo = especialidades.filter(valor => valor.id == parseFloat(valorUsuario)); //Filtro Array especialidades
console.log(algo);
alert("Usted eligio la especialidad: " + algo[0].servicio)

const some = cartilla.filter(valor => valor.especialidad == algo[0].servicio); //Filtro Array cartilla
console.log(some);

let doctores = "";
some.forEach(valor => {
    doctores += (valor.id + ":" + " " + valor.nombre + " " + valor.apellido + "\n")
});
let valorDoctorElegido = parseFloat(prompt("Elija el número de doctor requerido: \n" + doctores));

const alme = cartilla.filter(valor => valor.id == parseFloat(valorDoctorElegido)); //Filtro doctor elegido
console.log(alme);
alert("Usted eligio al doctor o doctora: " + alme[0].nombre + " " + alme[0].apellido)

// ETAPA FINAL USUARIO

alert("Paciente: " + nombreUsuario + " " + apellidoUsuario + " " + "Número DNI: " + dniUsuario);
alert(" Se le enviaran los datos del turno asignado al: " + celularUsuario);
alert("hasta luego".toUpperCase());


























