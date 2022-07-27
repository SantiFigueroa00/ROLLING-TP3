let ciudades = [];
let i = 0;

do{
    ciudades[i] = prompt('Ingrese una ciudad');
    i++;
}while(confirm('¿Desea ingresar mas ciudades?'));

document.write(`Longitud del arreglo: ${ciudades.length}<br>`);
document.write(`Primer item del arreglo: ${ciudades[0]} <br>`);
document.write(`Tercer item del arreglo: ${ciudades[2]} <br>`);
document.write(`Ultimo item del arreglo: ${ciudades[ciudades.length-1]} <br>`);
document.write(`Segundo item del arreglo: ${ciudades[1]} <br>`);
ciudades[1] = 'Barcelona';
document.write(`Segundo item modificado del arreglo: ${ciudades[1]} <br>`);
