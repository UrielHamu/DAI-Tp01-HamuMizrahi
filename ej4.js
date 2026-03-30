import fs from 'fs';

const ARCHIVO_ENTRADA = "src/archivo-entrada.txt";
const ARCHIVO_SALIDA = "src/archivo-salida.txt";
console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){
    try {
        let contenido = fs.readFileSync(origen, "utf8"); 
        fs.writeFileSync(destino, contenido); 
        console.log(contenido);
    } catch(error) {
        console.log("Error al copiar el archivo:", error);
    }
}
