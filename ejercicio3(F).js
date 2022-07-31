let calcPerimetro = (lado1,lado2) => 2*(lado1 + lado2); 

let lado1 = parseInt(prompt('Ingrese un lado del rectangulo')) ;
let lado2 =  parseInt(prompt('Ingrese el otro lado del rectangulo'));

document.write('El perimetro del rectangulo es '+calcPerimetro(lado1,lado2));