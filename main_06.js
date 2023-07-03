// // alert("Hello Worrld")
// Ejercicio 1
// Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift() y luego usa pop() y shift() una vez. A constinuación muestra por consola la longitud del array.

let myArr = [];
console.log(myArr);
//(pus)añade uno o mas elementos al final del array y devuelve la nueva longitud del array.
let newArr = myArr.push("valencia","madrid");
console.log(myArr);

//(unshift)añade uno o mas elementos al comienzo de array.
let mySecondArr = myArr.unshift("Toledo","Asturias");
console.log(myArr);
console.log(`---pop elimina el ultimo elementos del array y los devuelve---`);

//(pop)elemina el ultimo elemento del array y devuelve dicho elemento.
let remove = myArr.pop();
console.log(remove );

console.log(myArr);
console.log(`--Shift elimina el primer elemento del array y lo devuelve-->---->`);
//(shift)elimina el primer elemento de un array y devuelve dicho elemento.
let add = myArr.shift("Aragon"); 
console.log(add);
//he construido 4 elemtos y he eliminado dos.
console.log(myArr);
console.log(`--(1.2)-----------Esto mola---------------------->`)
console.log(`--(1.2)-----------Esto mola---------------------->`)

// Crea el siguiente array: const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]. A continuación, muestra por consola los nombres ["María, Isidro"] usando slice(). Luego, sustituye "Elizondo" por "Parma" usando splice().
// Une los elementos del array anterior (names) en un (string de nombres) separados por espacios.

const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"];
console.log(names);
// (Slice)
console.log(names.slice(1,3));
console.log(`-------------------------------------------------------`);

// (splice)
names.splice(3,4,'parma');
console.log(names);
console.log(`------------esta cambiando elizando por parma---------------`);
console.log(`--------------------------------------------------`);

console.log(names.join(' '));
console.log(`------------------------------------------------------`);

// Crea la variable const sentence = "El perro de San Roque no tiene rabo". A continuación, conviértela en un array de palabras, y luego en otro de letras.
const sentence = "El perro de San Roque no tiene rabo";
console.log(sentence);
const word  = sentence.split(' ');
//este método acepta como parametro un patron y convierte un (string) =>. en un array.
console.log(word);

//este convierte el string en un array de letras:
const letter = sentence.split('');
console.log(letter);

console.log(`---[Ejercicio 2.0.0 ]--------Esto mola-------------------------------------`);

// Ejercicio 2
// Crea el array months con valor: ["January", "February", "Marj", "April", "Mei"].

// Hay dos meses mal escritos: March y May. Modifica el array usando [] para solucionarlo.
// Crea la variable newMonths y asígnale el siguiente array:["June", "July", "August", "September"]. 


let months = ["January", "February", "Marj", "April", "Mei"];
months[2] = "Marz";
months[4] = "May";
console.log(months);
let newMonths = ["Jun","July","August","September"];
console.log(newMonths);

// A continuación, crea una variable llamada totalMonths que sea la concatenación de months y newNonths.

let totalMonths = months.concat(newMonths);
console.log(totalMonths);
console.log(`---------------------------------------`);

// Añade los siguientes 3 meses ("October", "November", "December") al final del array anterior (totalMonths) usando push().

let addArraynew = totalMonths.push("october","November","Dicember");
console.log(totalMonths);


console.log(`---[Ejercicio 3.0]---------Esto mola--------------------------------------`);


// Ejercicio 3
// Crea 3 variables (num1, num2 y num3), que contendrán números, pero no les des valor todavía. Vamos a trabajar con el array totalMonths del ejercicio anterior:

// Si el primer número es mayor que el segundo, elimine el último elemento del array.
// O bien, si el segundo número es mayor que el tercero, pero menor que 10, elimine el primer elemento del array.

// O bien, si el segundo número es mayor que el tercero o que el primero, añada el string "October" al final del array.

let num1= 9;
let num2 = 7;
let num3 = 5;
totalMonths; 
// let delet;

    if (num1 > num2){
        let removes = totalMonths.pop();

    }
    let num01= 4;
    let num02 = 7;
    let num03 = 5;
    
    console.log(totalMonths);

    console.log(`------------si el segundo es mayor---------------------------`);  
    if ((num02 > num03)|| (num02 < 10)){
        let deletes = totalMonths.shift();

    }
    console.log(totalMonths);
     
    console.log(`-------esta condicion- se cumple-------------------------`); 

    if(num2 > num3 && num2 > num1){
       let  addStrings = totalMonths.push("october")

    }else{
        // alert("bad lucky!");
        console.log("bad luck!");
    }

    // Si nada de lo anterior es verdadero, imprime por consola "Bad luck!".
    // Ahora dale los siguientes valores a num1, num2 y num3, y comprueba los resultados:
    console.log(`---ejercicio 4.0-----------------------------------------------`);

    let findArray = ['Monday','Tuesday','wesnesday','Thursday','Friday','Saturday'];
    console.log(findArray.indexOf('wesnesday'));

   console.log(findArray.slice(0,3));
   console.log("oh no!");
   findArray.push("october");
   console.log(findArray);

    console.log(findArray.length);

    //El metodo reverse()invierte el orden de los elementos de un array.
    console.log(findArray.reverse());
console.log(`-------------------------------------------------`);
    //.lenght nos ayuda a saber la "longitud" del array. es decir el numero de elementos que contiene.
    // let longituud = findArray.length;
    // console.log(longituud);

    let mysArrays = [1,2,3,"prueba4","prueba5","prueba6"];
    console.log(mysArrays.reverse());

// Ejercicio numero 5
    // Escribe un script que le dé la vuelta a cualquier array. Usa primero el método de array apropiado para ello, y después inténtalo sin usar ningún método, sólo con un bucle for.

    cadena =["madrid","hola","Valencia","pava"];
    console.log(cadena.reverse());
    console.log(cadena);


    //hay una funcion que se llama dar Veulta, cuando yo llamo a mi funcion dentro del bucle for, me manda el resultado del array pero in reverse, asi solo tendria que cambiar o asignar el mismo nombre de mi funcion para que cuando la invoque me muestre in reverse cualquier array con mi bucle for.

    let cad =[32,45,23,19]

    function darVuelta(cad){
        return cad.reverse();
    }
    //llamo a mi funcion + mi array con sus valores invertidos. in Reverse();
    console.log(darVuelta(cad));

   
    for(let i=0; i<= 5; i++){
        darVuelta;
    }
    console.log(cad);

//    Ejercicio 06: Escribe un array vacio llamado number;
// Crea un bucle for que llene el array con los números de 0 al 10 (incluido).
// Crea un bucle for que sume los números de numbersy guarde el resultado en la variable results.
// Crea dos arrays vacíos: evens y odds. A continuación crea un único bucle for que itere sobre el array numbers y, si el número es par, lo añada a evens, y si es impar a odds.
numbers = [];
let Savenumbers ="";
for(let i=0; i<11; i++){
     numbers +=[i]
    console.log(i);
}
console.log(numbers.split(''));
// result ="";

// Ejercicio 7
// Dados estos dos arrays:
const fruits = ["pera", "banana", "mandarina", "frambuesa"];
const colors = ["verde", "amarilla", "naranja", "roja"];

// Crea un programa que muestr por consola cada fruta con su color siguiendo el siguiente modelo:

// "La pera es verde"
// "La banana es amarilla"
// etc.

// Ejercicio 8
// Dado el siguiente array bidimensional:

const array = [["David", "Fernández"], ["Ana", "García"], ["Manuel", "Herrera"]];

// Escribe un programa que, usando bucles for, devuelva un array unidimensional con el nombre y apellidos de cada persona en un único string:
["David Fernández", "Ana García", "Manuel Herrera"]

// Ejercicio 9
// Calcula la media del siguiente array, y redonde su resultado a la baja:
const grades = [5, 7, 7, 4, 8, 5, 3, 9];

// let suma = grades.reduce()

let result ="";

    function sumapar(numer04, numer05){
        result = [numer04 * numer05]
        return result;
    }
     sumapar(9,8);
    console.log(result);



