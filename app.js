// 1 Crear una funcion que reciba un numero por parametro e indique en consola si el numero es par o impar

function numeroParOImpar(numero) {
  if (numero % 2 == 0) {
    console.log(numero + " Es Par ");
  } else {
    console.log(" El numero " + numero + " Es Impar ");
  }
  
}

numeroParOImpar(4);

// 2 Crear una funcion que reciba dos numeros por parametro e indique en consola que numero es mayor, y si ninguno lo es, indicar por consola que son iguales

function numeroMayorOMenor(PrimerNumero, SegundoNumero) {
  if (PrimerNumero === SegundoNumero) {
    console.log(" Los numeros son iguales ");
  } else if (PrimerNumero > SegundoNumero) {
    console.log(" El primer numero es Mayor osea " + PrimerNumero);
  } else if (PrimerNumero < SegundoNumero) {
    console.log(" El segundo numero es mayor osea " + SegundoNumero);
  }
}

numeroMayorOMenor(10, 5);

// 3 Crear una funcion que reciba un numero por parametro en indique en consola si ese numero es multiplo de 5

function esMultiplo(numero) {
  if (numero % 5 == 0) {
    console.log("El numero es multiplo de 5");
  } else {
    console.log("El numero no es multiplo de 5");
  }
}

esMultiplo(10);

// 4 Crear una funcion que reciba un numero por parametro e imprima por consola todos los numeros desde el 0 hasta llegar a ese numero

function numerosDesdeElCero(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

numerosDesdeElCero(9);

// 5 Crear una funcion que reciba una palabra y un numero por parametro e imprima por consola esa palabra la cantidad correspondiente al numero indicado

function numeroIndicado(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra)  
  }
}

numeroIndicado("hola", 5)

// 6 Crear una funcion que reciba un array por parametro e imprima por consola todos los valores de ese array

function valoresDelArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(" Los numeros del array son ", arr[i]);
  }
}

valoresDelArray([1, 4, 6, 9, 7, 3]);

// 7 Crear una funcion que reciba un array con 10 numeros e imprima por consola todos los valores de ese array

function imprimirArray(arr) {
  console.log(arr);
}

imprimirArray([1, 3, 2, 4, 6, 5, 8, 7, 9])

// 8 Crea una funcion que reciba un array de numeros y un numero por parametro e imprima por consola cada numero del array multiplicado por el numero pasado por parametro

function recibeNumero(arr, numero) {
  for (let i = 0; i < arr.length; i++) {
   console.log(arr[i] * numero);
  }
}

recibeNumero([4, 6, 8], 2);