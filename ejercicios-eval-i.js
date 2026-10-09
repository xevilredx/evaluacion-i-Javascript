//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------NOTA IMPORTANTE: Para ejecutar cualquiera de los ejercicios, primero comentar todos los demás o te aparecerá medio millon de prompts :v-----------------
//-------------------------------O los puedes copiar a un js a parte y probarlos individualmente----------------------------------------------------------------------
console.log("-----------------------Ejercicio 1--------------------------")
// let examenes = [];  /* No se si me debo inventar las notas y setearlas en el array, o si debo pedirlas al usuario asi que mejor las pongo para ingresar */
// for(let i=0; i<4; i++){ /* culpo al enunciado del ejercicio por no ser lo suficientemente específico :v */
//     examenes[i] = Number(prompt(`Ingrese la nota del examen ${i+1}`))
// }
// /* Sabemos que son exactamente 4 examenes asi que no hay necesidad de crear un for para hacer la sumatoria, simplemente creare una variable constante y hare el cálculo */
// const promedio = (examenes[0] + examenes[1] + examenes[2] + examenes[3])/4
// console.log("El promedio de los 4 examenes es: " + promedio)

console.log("-----------------------Ejercicio 2--------------------------")
// let base = Number(prompt("Ingrese la longitud de la base del rectángulo: ")) /* a de un rectangulo: base x altura */
// let altura = Number(prompt("Ingrese la longitud de la altura del rectángulo: "))
// console.log(`El área de el rectángulo es: ${base*altura}`)

console.log("-----------------------Ejercicio 3--------------------------") /* Bruh, esto fue un copy-paste del ejercicio anterior :v */
// let base = Number(prompt("Ingrese la longitud de la base del triángulo: ")) /* a de un triangulo: (base x altura) / 2 */
// let altura = Number(prompt("Ingrese la longitud de la altura del triángulo: "))
// console.log(`El área de el triángulo es: ${(base*altura)/2}`)

console.log("-----------------------Ejercicio 4--------------------------") /* esto tambien es un copy-paste del ejercio anterior :v */
// let radio = Number(prompt("Ingrese el radio de la circunferencia ")) /* a de una circunferencia: π x radio² */

// console.log(`El área de la circunferencia es: ${3.14*(radio ** 2)}`)  /*  NOTA: Se puede elevar al cuadrado usando [Número] ** 2   */

console.log("-----------------------Ejercicio 5--------------------------") /* Esta sí es una modificación más compleja del ejercicio 1 */
// let numeros = [];
// let longitud = Number(prompt("Ingrese el número de elementos del arreglo: "));
// let promedio = 0;

// for(let i=0; i < longitud; i++){
//     numeros[i] = Number(prompt(`Ingrese el número ${i+1}`))
//     promedio += numeros[i]; //Tambien se puede representar de esta forma: promedio = promedio + numeros;
//     // console.log(promedio)
// }
// promedio = promedio/longitud

// console.log("El promedio de los números del arreglo es: " + promedio);

console.log("-----------------------Ejercicio 6--------------------------")
// let numeros = [];
// let longitud = Number(prompt("Ingrese el número de elementos del arreglo: "));
// let suma = 0;

// for(let i=0; i < longitud; i++){
//     numeros[i] = Number(prompt(`Ingrese el número ${i+1}`))
//     if(numeros[i] % 2 == 0){
//         suma += numeros[i]; //Tambien se puede representar de esta forma: suma = suma + numeros;
//         // console.log(suma)
//     }
// }

// console.log("El promedio de los números del arreglo es: " + suma);

console.log("-----------------------Ejercicio 7--------------------------") /* al fin algo que no me requiere poner prompts */
// const library = [
// {
// author: 'Bill Gates',
// title: 'The Road Ahead',
// Status: true
// },
// {
// author: 'Steve Jobs',
// title: 'Walter Isaacson',
// Status: true
// },
// {
// author: 'Suzanne Collins',
// title: 'Mockingjay: The Final Book of The Hunger Games',
// Status: false,
// }
// ];

// let mensaje = "Los libros habilitados son: ";

// for(let i=0; i < library.length; i++){
//     if(library[i].Status == true){
//         mensaje += library[i].title + " - " + library[i].author + " | ";
//         //console.log(mensaje);
//     }
// }
//     console.log(mensaje);

//console.log("-----------------------Ejercicio 8--------------------------") /* El profesor dejó instrucciones en el video (Revisarlo) */
//console.log("-----------------------Ejercicio 9--------------------------") /* El profesor dejó instrucciones en el video (Revisarlo) */
console.log("-----------------------Ejercicio 10--------------------------")
// let numero1 = Number(prompt("Ingrese la calificacion"))
// // let numero2 = Number(prompt("Ingrese la segunda calificacion"))

// if(0 < numero1 && numero1 <= 10){
//     //console.log("ta bien")
//     if(numero1 < 6){
//         console.log("Reprobado")
//     }else if(numero1 <= 8){
//         console.log("Regular")
//     }else if(numero1 <= 9){
//         console.log("Bien!")
//     }else{
//         console.log("Excelente!!!")
//     }

// }else{    console.log("El número no está entre 1 y 10! >:C")}

console.log("-----------------------Ejercicio 11--------------------------")
// let numero1 = Number(prompt("Ingrese el primer número (del 1 al 50)"))
// let numero2 = Number(prompt("Ingrese el segundo número (del 1 al 50)"))

// for(let i=1; i <= 50; i++){
//     if(i == numero1 || i == numero2){
//         console.log("Lotería!")
//     }else{
//         console.log(i)
//     }
// }

console.log("-----------------------Ejercicio 12--------------------------") /* Podría haberlo hecho de la forma clasica, poniendolo todo en un if else, pero me gusta que se vea simple, reciclando la comprobación del 3 y el 5 individuales */
// let numero;

// for(let i=1; i <= 100; i++){
//     numero = "";
//     if(i % 3 == 0){
//         numero = numero + "Fizz"
//     }
//     if(i % 5 == 0){
//         numero = numero + "Buzz"
//     }
//     if(numero == ""){
//         numero = numero + i;
//     }

//     console.log(numero)
// }

console.log("-----------------------Ejercicio 13--------------------------")
// let nombre = prompt("Ingrese el nombre del empleado")
// let anos = Number(prompt("Ingrese los años que el empleado lleva trabajando en la empresa"))    /* Suena gracioso, pero por sea caso no pondré 'ñ', no está en el alfabeto en inglés y aunque remotamente posible, podría bugear algo :v */
// let bono;

// if(anos <= 1){  /* Podría haber hecho algo más fancy con un for(){if()} pero si la empresa decidiera dejar de escalar el bono proporcionalmente a los años eso mandaría toda mi lógica al tacho :'v     En este caso como esta usando if else() puedo modificarlos individualmente */
//     bono = 100
// }else if(anos <= 2){
//     bono = 200
// }else if(anos <= 3){
//     bono = 300
// }else if(anos <= 4){
//     bono = 400
// }else if(anos <= 5){
//     bono = 500
// }else{
//     bono = 1000
// }

//     // //---SOLUCION ALTERNATIVA, PERO MÁS LIMITADA A CAMBIOS
//     // bono = 100
//     // for(let i=1; i<=5; i++){
//     //     if(anos==i){
//     //         bono = bono*i;
//     //     }
//     // }
//     // if(anos>5){
//     //     bono = 1000
//     // }
//     // //-----------------------------------------------------

// console.log(`El empleado ${nombre} recibirá un bono de $${bono}`)

console.log("-----------------------Ejercicio 14--------------------------")
// let años = 6            //Esto es en caso alguien quiera especificar cuantos años que ha pasado, pero como no lo piden no me molestare en hacer un prompt
// let salario = 1500      // o variar el salario
// let incremento = 0.1;   // o variar el incremento (en decimales)
// for(let i=1; i <= años; i++){       //NOTA IMPORTANTE: Según el internet, siempre se debe declarar el i en el for(), te deja ejecutarlo si no lo declaras, pero dicen que podrían pasar bugs (Preguntar al profe en clase)
//         console.log(salario)
//     salario = salario * (1 + incremento)
//         console.log(incremento)
//     console.log(`EL salario en el año ${i} es: $${salario.toFixed(2)}`) // INTERESANTE: Parece que por el funcionamiento del lenguaje en la computadora, 1500*1.1 no da un número exacto, esta vez si tuve que usar ayuda de la IA, me dio esta funcion: .toFixed(2) para los 2 decimales
// }

console.log("-----------------------Ejercicio 14--------------------------")
// let palabras = ["manzana", "banana", "cereza", "uva", "fresa"];
// let palabra_mas_larga = ""

// for(let i=0; i<palabras.length; i++){
//     //console.log(`for: letras en palabra selec${palabras[i].length}`)

//     if(palabra_mas_larga.length < palabras[i].length){
//         palabra_mas_larga = palabras[i];
//             //console.log(`letras: ${palabras[i].length}`)
//             //console.log(palabra_mas_larga)
//     }
// }
//     console.log(`La palabra más larga: ${palabra_mas_larga}`)

console.log("-----------------------Ejercicio 15--------------------------")    // Este sí me hizo pensar más rato
// let cartas = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1, 9, 10, 10];

// for(let i=0; i<cartas.length; i++){
//     let repetido  = false;
//     let iteraciones_numero = 0;
//     for(let j=0; j <= cartas.length; j++){
//         if(cartas[i] == cartas[j]){
//             iteraciones_numero++
//             //console.log("numero: "+cartas[i] + "Iteraciones: "+iteraciones_numero)
//         }
//     }
//     if(iteraciones_numero==1){
//             console.log("Numero unico: "+cartas[i])
//     }
// }

//console.log("-----------------------Ejercicio 16--------------------------")
console.log("-----------------------Ejercicio 19--------------------------")    // Me salteo a este porque es uno que ya resolví arriba  y está ezz :v
let numeros = [];
let index = 0;

do{
    numeros[index] = Number(prompt(`Ingrese el número ${index+1} (Ingresa 0 para detener)`))
    index++
}while(numeros[index-1] != 0)
numeros[index-1]= null    //Esto es para quitar el ultimo digito porque siempre será 0 (-1 porque el ultimo while le sumó index++ ya que el codigo se ejecuta antes) :v
console.log("El conjunto de numeros es: " + numeros)