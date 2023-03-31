miFuncion1();
miFuncion2();

function miFuncion1(){
    console.log('funcion1');
}

function miFuncion2(){
    console.log('funcion2');
}

//Funcion callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 8, imprimir);

//Llamadas asincronicas con el uso setTimeout
function miFuncionCallback(){
    console.log('saludos asincronico despues de 3 seg');
}

setTimeout(miFuncionCallback, 3000);//despues de 3seg(3000 mls).

setTimeout(function(){console.log('saludos asincronicos 2')}, 5000);

setTimeout( () => console.log('saludo asincronico 3'), 7000);

//ACCEDIENDO AL TIEMPO CON setInterval

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

//setInterval(reloj, 1000);