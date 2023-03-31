let miPromesa = new Promise((resolver, rechazar) =>{
    let expresion = true;
    if(expresion)
        resolver('se resolvió');
    else
        rechazar('se produjo un error');
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
/*miPromesa
.then(valor => console.log(valor))
.catch(error=>console.log(error));*/

let miPromesa2 = new Promise((resolver) => {
    //console.log('inici de promesa');
    setTimeout(() => resolver ('saludos con promesas y timeout'), 5000);
    //console.log('fin de promesa');
});

//miPromesa2.then(valor => console.log(valor));

//async se refiere a que va a devolver una promesa

async function miFuncionConPromesa(){
    return 'saludos desde promesas y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await

async function funcionConPromesaYAwait(){
    let miPromesa= new Promise(resolver => {
        resolver ('Promesa con await');
    });
    console.log( await miPromesa);
}

//funcionConPromesaYAwait();

//Promesas, asinc, await y setTimeout
async function funcionConPromesaAwaitTimeout(){
    console.log('inicio de funcion')
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver  ('promesa con await y timeout'), 4000);
    });
    console.log(await miPromesa);
    console.log('fin de la funcion');
}

funcionConPromesaAwaitTimeout();

