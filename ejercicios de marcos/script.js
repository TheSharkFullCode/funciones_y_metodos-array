
// function showname() {
//     let firtsname = "Oscar";
//     document.getElementById("texto").value = firtsname;
//   }

function showname(){
    let firtsname = "Oscar Rodriguez";
    document.getElementById("texto"). value = firtsname;
}
function deleText(){
    document.getElementById("texto").value = "";
    
}

    const miArray = [1, 2, 3, 4, 5];
    let suma = 0;

    for (let i = 0; i < miArray.length; i++) {
  suma += miArray[i];
    }

    console.log(`La suma de los elementos del array es ${suma}.`);


//     ¡Por supuesto! Aquí te dejo algunos ejercicios sencillos para que puedas practicar aplicando un bucle 
// for
//  a un array:

// Crea un array de números y calcula su suma utilizando un bucle 
// for
// .
const numeros = [1, 2, 3, 4, 5];
 suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

console.log(`La suma de los números del array es ${suma}.`);
// Crea un array de cadenas de texto y muestra su longitud utilizando un bucle 
// for
// .
const cadenas = ["Hola", "Mundo", "JavaScript"];
let longitud = 0;

for (let i = 0; i < cadenas.length; i++) {
  longitud += cadenas[i].length;
}

console.log(`La longitud total de las cadenas del array es ${longitud} caracteres.`);

// Crea un array de objetos que representen personas y calcula la edad promedio de todas las personas utilizando un bucle 
// for
// .

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
  ];
  let edadPromedio = 0;
  let cantidadPersonas = 0;
  
  for (let i = 0; i < personas.length; i++) {
    edadPromedio += personas[i].edad;
    cantidadPersonas++;
  }
  
  edadPromedio /= cantidadPersonas;
  
  console.log(`La edad promedio de las personas es ${edadPromedio}.`);
// Crea un array de números y muestra solo los números pares utilizando un bucle 
// for
// .
const numeros5 = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros5[i]);
  }
}
// Crea un array de objetos que representen productos y muestra solo los productos que tengan un precio mayor que 100 utilizando un bucle 
// for
// .
const productos = [
    { nombre: "Producto 1", precio: 50 }]



// web storm frece inteligence sense

// Espero que estos ejercicios te sean útiles para practicar aplicando un bucle 
// for
//  a un array en JavaScript. Si tienes alguna otra pregunta, no dudes en preguntar.