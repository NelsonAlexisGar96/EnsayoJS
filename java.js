/*para  declarar una variable en JS se utilizan Var and Let.
Luego veremos mas su contexto, pero a simple rasgos implica que podamos utilizarlas
con total libertad en otras operaciones..
*/ 
var miPrimeraVraiable = 5 // = Se declara
miPrimeraVraiable+= 5 //Concatanemos operaciones, por lo que es 10
miPrimeraVraiable*=5 // lo mismo, solo que es ya 50. La variable va guardando datos
console.log(miPrimeraVraiable);

///////Arreglos

//Los arreglos son listas! pero ordenadas//

var miArreglo = [ true, 45, "Camila"] //Lista Ordenada
console.log(miArreglo[2]);/*Accedo al arreglo con su posicion= 45*/


/*No obstante, puedo mutar un arreglo*/
miArreglo.push("Mundo");/*--> (4) [true, 45, 'Camila', 'Mundo']*/
console.log(miArreglo)

//Strings como arreglos de Caracteres

console.log("Este es un string".charAt(1));// accedo a un caracter= s

console.log("Este es un string".substring(0,4));//accedo a un pedazo mas grande: este

//-->Buscar que significa ambito global y ambito en el que se definió

console.log(miPrimeraVraiable++);//50
console.log(miPrimeraVraiable++);//51
console.log(miPrimeraVraiable++);//52
console.log(miPrimeraVraiable--);//53

/*¿Que es un objeto en javaScript?
-->Segun la documentacion puede ser un diccionario
 en otro lenguaje. Es decir:Llave y valor*/

var miObjeto = {miLlave : "Nelson", miOtraLlave : 5};

console.log(miObjeto["miOtraLlave"])// 5
console.log(miObjeto.miLlave)// "Nelson"


/*De lo anterior deducimos que se puede acceder al valor del arreglo mediante
estas dos sintaxis: el punto o los corchetes.*/

///////////////////////////////////
// 3. Lógica y estructura de control

var contador = 1;
if (contador == 3){
    console.log("evaluar si contador es igual a 3") 
} else if (contador == 4){
    console.log("evaluar si contador es igual a 4") 
} else {
    console.log("evaluar si contador no es igual a 3 ni a 4")
}
 
//De lo anterior la respuesta es la ultima = "evaluar si contador no es igual a 3 ni a 4"
 
for (var i = 0; i < 10; i++){
    // correrá 10 veces
} 

console.log(i)//--> La variable i ahora vale 10

// la estructura switch usa === para sus comparaciones
// usa 'break' para terminar cada caso 
// o los casos después del caso correcto serán ejecutados también. 
 var calificacion = 'A';
switch (calificacion) {
  case 'A':
    console.log("Excelente trabajo");
    break;
  case 'B':
    console.log("Buen trabajo");
    break;
  case 'C':
    console.log("Puedes hacerlo mejor");
    break;
  default:
    console.log("Muy mal");
    break;
}
// De lo anterior la respuesta es "Excelente trabajo"

///////////////////////////////////
// 4. Funciones, ámbitos y closures

/* Una funcion sencilla suelen ser parametros y retornar. 
Parametros  y retornar, nada mas*/

function miFuncion(miArgumento){
    return miArgumento.toUpperCase();
}
console.log(miFuncion("clase"))//-->Esta funcion me devuelve mayusculas.



/*De la misma manera, cuando no usamos retorno, podemos darle variables*/
function decirHolaCadaCincoSegundos(nombre){
    var texto = "¡Hola, " + nombre + "!";
    /*Las funciones internas son puestas en el ámbito local por defecto
     como si fueran declaradas con 'var'*/
    function interna(){
        alert(texto);
    }
    setTimeout(interna, 5000);
    // setTimeout es asíncrono, así que la función decirHolaCadaCincoSegundos 
    // terminará inmediatamente, y setTimeout llamará a interna() a los cinco segundos
    // Como interna está "cerrada dentro de" decirHolaCadaCindoSegundos, interna todavía tiene
    // acceso a la variable 'texto' cuando es llamada.
}
decirHolaCadaCincoSegundos("Adam"); // mostrará una alerta con "¡Hola, Adam!" en 5s




///////////////////////////////////
// 5. Más sobre objetos; constructores y prototipos

// Los objetos pueden contener funciones.
var miObjeto2 = {
    miFuncion: function(){
        return "¡Hola Mundo!";
    }
};
console.log(miObjeto2.miFuncion()); // = "¡Hola Mundo!"


/*Una función puede ser asignada al objeto
 y ganar acceso a él gracias a esto,
 incluso si no estaba dentro del objeto cuando este se definió*/

var miObjeto3 = {
    miString: "¡Hola Mundo!",
    miFuncion: function(){
        return this.miString;
    }
};

var miOtraFuncion = function(){
    return this.miString.toUpperCase();
}
miObjeto3.miOtraFuncion = miOtraFuncion;
console.log(miObjeto3.miOtraFuncion()); // = "¡HOLA MUNDO!"


// Podemos especificar el contexto en el que una función será llamada con los comandos
// 'call' o 'apply'.

var otraFuncion = function(otroString){
    return this.miString + otroString;
}

console.log(otraFuncion.call(miObjeto3, " y hola Nel"));
/*--> Esta es el comando call

Es de rescatar que, dichos comandos, terminan siendo temporales
por lo que si queremos que se quede tendremos que usar
bind*/

 var funcionUnida= otraFuncion.bind(miObjeto3);
 console.log(funcionUnida(" y hola Saturno!"));









