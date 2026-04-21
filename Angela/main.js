// definicion de variables-------------------------------------------------------------------------------------

//variables numericas
/*let numero = 100; //int(entero)
let numero2 = 100.5 //float
*/

//variables alfanumericas
/*let letra='a'; //(char) (unico caracter)
let cadena = "hola"; //String (cadena de caracteres)
*/

//otras variables
/*let verdadero = true; //boolean -- true of false
let falso = false;
*/

//operadores matematicos (+ - * /)
/*let x = 10 + 10;
let y = 100;
let z = 1000;
let suma = x + y;
let resta = x - y;
let multi = x * y;
let divi = x / y;
*/

//operadores logicos (<, <=, ==, !=, >, >=)
//operacion logica (if)

//let valor = promp("Ingrese un valor");//promp: ventana emergencia
//conversion de datos --- parse
//let valorConvertido = parseInt(valor);
/*let valor = parseInt(promp("Ingrese un valor: "))
console.log("Valor ingresado: "+ valor);
if(valor < 0){
    console.log("Negativo")
}else if(valor > 0){
    console.log("Positivo")
}else{
    console.log("0")
}
*/

//tablas de verdad
//& = and, || = or, != = negacion, == = igual
//vv = v
//vf = f
//fv = f
//ff = f


//ingresar 3 valores del 1 al 7
//obtener promedio
//agregar un valor de asistencia de 0 a 100
// alumno aprueba si su promedio es >= 4 y su asistencia es >=60%
/*
let nota = parseInt(prompt("Ingrese un valor: "))

for(let i = 1; i <= 4; i++){

    let sumaNotas = nota;
    let candidadNotas = i;

    let promedio = sumaNotas / cantidadNotas; 
    let asistencia;

}

if(promedio >= 4 && promedio >= 60){
    console.log("Aprobado");
}else if(valor > 0){
    console.log("Reprobado");
};
*/


// ingrese 3 valores correspondientes a cada lado de un triangulo
// determinar qué tipo de triangulo forman por el valor de sus lados
// isosceles: un lado diferente y dos iguales
// escaleno: todos diferentes
// equilatero: todos iguales




    let lado1 = parseInt(prompt("Ingrese valor del lado 1: "));
    let lado2 = parseInt(prompt("Ingrese valor del lado 2: "));
    let lado3 = parseInt(prompt("Ingrese valor del lado 3: "));

    if(lado1 && lado2 && lado3 == 3){
        if(lado1 == lado2 && lado2 == lado3){
            console.log("equilatero");
        }else if(lado1 == lado2 && lado2 != lado3){
            console.log("isosceles");
        }else if(lado1 != lado2 && lado2 != lado3){
            console.log("escaleno");
        }
        let trinagulo= lado1 + lado2 + lado3;  
    }else{
        console.log("no es un trinagulo")
    }

console.log("El triangulo es:" + triangulo ) 

