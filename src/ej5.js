let miUrl = null;
let miObjeto = null;
miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo') ;
miObjeto = parsearUrl(miUrl);
console.log("OBJETO", miObjeto);
function parsearUrl(laURL){
console.log("Host: ",laURL.host);
console.log("Pathname:",laURL.pathname);
console.log("Parametros:",laURL.search);
}