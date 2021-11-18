const locales = require("./data/locales.json");
const localesVacio = require("./data/locales-vacio.json");
const alumno = require("./data/Alumno.json");
const alumnoVacio = require("./data/Alumno-SinData.json");
const alumnoError = require("./data/Alumno-Incorrecto.json");
const avanceNotas = require("./data/AvanceNotas-Data.json");
const avanceVacio = require("./data/AvanceNotas-inData.json");
const cliente = require("./data/Cliente-Data.json");
const clienteVacio = require("./data/Cliente-SinData.json");
const cursoSeccionDocente = require("./data/CurSecDoc-Data.json");
const cursoSeccionDocenteVacio = require("./data/CurSecDoc-SinData.json");
const detMatriculas = require("./data/DevMatriculas-Data.json");
const detMatriculasVacio = require("./data/DevMatriculas-SinData.json");
const documentoFiscal = require("./data/DocumentoFiscal-Data.json");
const documentoFiscalVacio = require("./data/DocumentoFiscal-SinData.json");
const documentoMora = require("./data/DocumentoMora-Data.json");
const documentoMoraVacio = require("./data/DocumentosMora-SinData.json");
const horario = require("./data/Horario-Data.json");
const horarioVacio = require("./data/Horario-SinData.json");
const incidenteTickest = require("./data/IncidenteTicket.json");

const persona = require("./data/persona-Data.json");
const personaVacio = require("./data/persona-SinData.json");

const tramite = require("./data/Tramite-Data.json");
const tramites = require("./data/Tramites-Data.json");

const inacistencia = require("./data/Inacistencias-Data.json");
const inacistenciaVacio = require("./data/Inacistencia-SinData.json");

const detMatriculasIncorrecto = require("./data/DevMatriculas-Data-Incorrecto.json");

const autenticarRecurso = require("./data/Autenticar-Recursos.json");
const autenticarRecursoVacio = require("./data/Autenticar-RecursosSinData.json");
const autenticarRecursoError = require("./data/Autenticar-RecursosError.json");

const recursosDisponiblesCampus = require("./data/Recursos-Disponibles-Campus.json");
const recursosDisponiblesComputadoras = require("./data/Recursos-Disponibles-Computadoras.json");
const recursosDisponiblesError = require("./data/Recursos-Disponibles-Error.json");
const recursosDisponiblesVacio = require("./data/Recursos-Disponibles-SinData.json");
const recursosDisponiblesToken = require("./data/Recursos-Disponibles-TokenVencido.json");

const reservaRecurso002 = require("./data/Reservar-Recurso-0002.json");
const reservaRecursoComputadora = require("./data/Reservar-Recurso-computador.json");
const reservaRecursoCubiculo = require("./data/Reservar-Recurso-cubiculo.json");
const reservaRecursoError = require("./data/Reservar-Recurso-Error.json");

const activarReserva = require("./data/Activar-Reserva.json");
const activarReservaErrorCodReserva = require("./data/Activar-Reserva-Error-codReserva.json");
const activarReservaErrorUsuAlumno = require("./data/Activar-Reserva-Error-usuAlumno.json");
const activarReservaError = require("./data/Activar-Reserva-Error.json");
const activarReservaNoDisponible = require("./data/Activar-Reserva-NoDisponible.json");

const reservaRealizadas = require("./data/ReservasRealizadas.json");
const reservaRealizadasVacio = require("./data/ReservasRealizadas-vacio.json");

const reservasEspacioDeportivo = require("./data/ReservasEspacioDeportivo.json");

const espaciosDeportivos = require("./data/EspaciosDeportivos.json");
const recursosDisponiblesED = require("./data/Recursos-Disponibles-ED.json");
const reservarEspaciosDeportivosCOD1 = require("./data/Reservar-espacios-deportivos-COD1.json");
const reservarEspaciosDeportivosToken = require("./data/Reservar-espacios-deportivos-token.json");
const reservarEspaciosDeportivos = require("./data/Reservar-espacios-deportivos.json");
const reservarEspaciosDeportivosVacio = require("./data/ReservasEspacioDeportivo-vacio.json");


const carreraProfesional = require("./data/CarreraProfesional.json");

const loadSurvey = require("./data/LoadSurvey.json");

const surveyAvaliable = require("./data/SurveyAvaliable.json");

const SurveyAvaliableVacio = require("./data/SurveyAvaliable-vacio.json");

const RecursosDisponiblesCubiculos = require("./data/Recursos-Disponibles-Cubiculos.json");



module.exports = function () {
  return {
    locales: locales,
    localesVacio: localesVacio,
    alumno: alumno,
    alumnoVacio: alumnoVacio,
    alumnoError: alumnoError,
    avanceNotas: avanceNotas,
    avanceVacio: avanceVacio,
    cliente: cliente,
    clienteVacio: clienteVacio,
    cursoSeccionDocente: cursoSeccionDocente,
    cursoSeccionDocenteVacio: cursoSeccionDocenteVacio,
    detMatriculas: detMatriculas,
    detMatriculasVacio: detMatriculasVacio,
    documentoFiscal: documentoFiscal,
    documentoFiscalVacio: documentoFiscalVacio,
    documentoMora: documentoMora,
    documentoMoraVacio: documentoMoraVacio,
    horario: horario,
    horarioVacio: horarioVacio,
    incidenteTickest: incidenteTickest,
    persona: persona,
    personaVacio: personaVacio,
    tramite: tramite,
    tramites: tramites,
    inacistencia: inacistencia,
    inacistenciaVacio: inacistenciaVacio,
    detMatriculasIncorrecto: detMatriculasIncorrecto,
    autenticarRecurso: autenticarRecurso,
    autenticarRecursoVacio: autenticarRecursoVacio,
    autenticarRecursoError: autenticarRecursoError,
    recursosDisponiblesCampus: recursosDisponiblesCampus,
    recursosDisponiblesComputadoras: recursosDisponiblesComputadoras,
    recursosDisponiblesError: recursosDisponiblesError,
    recursosDisponiblesVacio: recursosDisponiblesVacio,
    recursosDisponiblesToken: recursosDisponiblesToken,
    reservaRecurso002: reservaRecurso002,
    reservaRecursoComputadora: reservaRecursoComputadora,
    reservaRecursoCubiculo: reservaRecursoCubiculo,
    reservaRecursoError: reservaRecursoError,
    activarReserva: activarReserva,
    activarReservaErrorCodReserva: activarReservaErrorCodReserva,
    activarReservaErrorUsuAlumno: activarReservaErrorUsuAlumno,
    activarReservaError: activarReservaError,
    activarReservaNoDisponible: activarReservaNoDisponible,
    reservaRealizadas: reservaRealizadas,
    reservaRealizadasVacio: reservaRealizadasVacio,
    reservasEspacioDeportivo: reservasEspacioDeportivo,
    espaciosDeportivos: espaciosDeportivos,
    recursosDisponiblesED: recursosDisponiblesED,
    reservarEspaciosDeportivosCOD1: reservarEspaciosDeportivosCOD1,
    reservarEspaciosDeportivosToken: reservarEspaciosDeportivosToken,
    reservarEspaciosDeportivos: reservarEspaciosDeportivos,
    reservarEspaciosDeportivosVacio : reservarEspaciosDeportivosVacio,
    carreraProfesional: carreraProfesional,
    loadSurvey: loadSurvey,
    surveyAvaliable: surveyAvaliable,
    SurveyAvaliableVacio: SurveyAvaliableVacio,
    RecursosDisponiblesCubiculos : RecursosDisponiblesCubiculos,
  };
};
