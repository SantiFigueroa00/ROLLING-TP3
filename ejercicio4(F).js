let tablaDeMultip = (numero) => {
document.write(`<table>
<thead>
    <tr>
        <th>Resultado</th>
        <th>Frecuencia</th>
    </tr>
</thead>
<tbody>`);

  for (let i = 1; i <= 10; i++) {
    document.write(`<tr>`);
    let contador = numero*i;
    document.write(`<td>${i}</td><td>${contador}</td>`);
    document.write(`</tr>`);
  }
  document.write(`</tbody></table>`);
};

tablaDeMultip(parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicacion")));
