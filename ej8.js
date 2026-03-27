import axios from "axios";
const APIKEY = "9638f283"; // YA PUSE MI APIKEY
const OMDBSearchByPage = async (searchText, page = 1) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};
// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};
// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};