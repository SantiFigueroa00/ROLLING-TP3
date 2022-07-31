let meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

document.write('<h3>Mese del Año</h3>')
document.write(`<ol>`);
for(let i=0; i < meses.length; i++){
    document.write(`<li>${ meses[i] }</li>`);
}
document.write(`</ol>`);