import axios from "axios";

let respuesta = await Test();
console.log('respuesta', respuesta);

const Test = async () => {
  // Esto solo busca ‘cars’
  const requestString = `http://www.omdbapi.com/?apikey=9638f283&s=cars`;
     const apiResponse = await axios.get(requestString);
  return apiResponse.data;

};