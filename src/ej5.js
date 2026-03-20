let miUrl = null;
miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo') ;
parsearUrl(miUrl);
function parsearUrl(laURL){
console.log("Host: ",laURL.host);
console.log("Pathname:",laURL.pathname);
console.log("Parametros:",laURL.search);
}