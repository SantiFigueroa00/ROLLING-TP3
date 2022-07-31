let parImpar = (numero) =>{
        if((numero%2)==0){
            document.write('El numero ingresado es par');
        }else{
            document.write('El numero ingresado es impar');
        }
}

parImpar(prompt('Ingrese un numero para verificar si es par o impar'));