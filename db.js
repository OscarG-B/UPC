const locales  = require('./data/locales.json');
const localesVacio  = require('./data/locales-vacio.json');
const alumno = require('./data/Alumno.json');
const alumnoVacio = require('./data/Alumno-SinData.json');
const alumnoError = require('./data/Alumno-Incorrecto.json');
const avanceNotas = require('./data/AvanceNotas-Data.json');
const avanceVacio = require('./data/AvanceNotas-inData.json');
const cliente = require('./data/Cliente-Data.json');
const clienteVacio = require('./data/Cliente-SinData.json');
const cursoSeccionDocente = require('./data/CurSecDoc-Data.json');
const cursoSeccionDocenteVacio = require('./data/CurSecDoc-SinData.json');
const detMatriculas = require('./data/DevMatriculas-Data.json');
const detMatriculasVacio = require('./data/DevMatriculas-SinData.json');
const documentoFiscal = require('./data/DocumentoFiscal-Data.json');
const documentoFiscalVacio = require('./data/DocumentoFiscal-SinData.json');
const documentoMora = require('./data/DocumentoMora-Data.json');
const documentoMoraVacio = require('./data/DocumentosMora-SinData.json');
const horario = require('./data/Horario-Data.json');
const horarioVacio = require('./data/Horario-SinData.json');
const incidenteTickest = require('./data/IncidenteTicket.json');

const persona = require('./data/persona-Data.json');
const personaVacio = require('./data/persona-SinData.json');

const tramite = require('./data/Tramite-Data.json');
const tramites = require('./data/Tramites-Data.json');

const inacistencia = require('./data/Inacistencias-Data.json');
const inacistenciaVacio = require('./data/Inacistencia-SinData.json');


module.exports = function() {
return {
  locales: locales,
  localesVacio: localesVacio,
  alumno : alumno,
  alumnoVacio: alumnoVacio,
  alumnoError: alumnoError,
  avanceNotas : avanceNotas,
  avanceVacio:avanceVacio,
  cliente:cliente,
  clienteVacio :clienteVacio,
  cursoSeccionDocente:cursoSeccionDocente,
  cursoSeccionDocenteVacio:cursoSeccionDocenteVacio,
  detMatriculas: detMatriculas,
  detMatriculasVacio :detMatriculasVacio,
  documentoFiscal:documentoFiscal,
  documentoFiscalVacio:documentoFiscalVacio,
  documentoMora : documentoMora,
  documentoMoraVacio : documentoMoraVacio,
  horario: horario,
  horarioVacio : horarioVacio,
  incidenteTickest: incidenteTickest,
  persona : persona,
  personaVacio : personaVacio,
  tramite :tramite,
  tramites:tramites,
  inacistencia: inacistencia,
  inacistenciaVacio:inacistenciaVacio
 }
}