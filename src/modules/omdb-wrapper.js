/* Módulo  OMDBWrapper*/

import axios from "axios";


const APIKEY = "9638f283";

const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : []
    };

    const requestString = `http://www.omdbapi.com/?apikey=9638f283&page=${page}&s=${searchText}`;
    const response = await axios.get(requestString);
    returnObject.respuesta=response.response;
    returnObject.cantidadTotal = response.totalResults;
    returnObject.datos=response.search;
    return returnObject;
};


const OMDBSearchComplete = async (searchText) => {
  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : []
    };
    let pagina=1;
    do{
        const requestString = `http://www.omdbapi.com/?apikey=9638f283&page=${page}&s=${searchText}`;
        const response = await axios.get(requestString);
        returnObject.respuesta=response.response;
        returnObject.cantidadTotal = response.totalResults;
        returnObject.datos+=response.search;
        pagina++;
    }while(returnObject.respuesta==true)

  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
      respuesta     : false,
      cantidadTotal : 0,
      datos         : {}
    };
  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;
};

// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};