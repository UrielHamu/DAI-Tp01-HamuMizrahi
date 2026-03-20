import { getCountryByAbbreviation } from 'currency-map-country';
    import { getCurrencyAbbreviation } from 'currency-map-country';

function obtenerMoneda(codigoPais){

    let moneda = null;
    if(getCurrencyAbbreviation(getCountryByAbbreviation(codigoPais))!=null){
        moneda=getCurrencyAbbreviation(getCountryByAbbreviation(codigoPais));
    }
    return moneda;
}

let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);