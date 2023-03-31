function miFuncion(){
    console.log('saludos desde mi funcion');
}

//let miFuncionFlecha = () => {
//    console.log('saludos desde mi funcion flecha');
//}

//let miFuncionFlecha=()=>; console.log('saludos desde mi funcion flecha');

//const saludar = () =>{
//    return 'saludos desde mi funcion flecha';
//}

const saludar = () => 'saludos desde mi funcion flecha';
console.log(saludar());
const regresarObjeto = () => ({nombre: 'juan', apellido:'lopez'});
console.log(regresarObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('saludos con parametros');

const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
};
console.log(funcionConVariosParametros(3, 8));
