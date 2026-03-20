import { URL } from 'url';

let miUrl = null;
miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');

console.log(parsearUrl(miUrl));

function parsearUrl(laURL){
    try{
        console.log("Host: ",laURL.host);
        console.log("Pathname:",laURL.pathname);
        console.log("Parametros:",laURL.search);
}catch(error){
    console.error(error)
}  
}