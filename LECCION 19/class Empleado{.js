class Empleado{

    constructor(nombre, sueldo){
        this._nombre= nombre;
        this._sueldo= sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}
class Gerente extends Empleado{

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento= departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if( tipo instanceof Gerente){
        console.log('es un tipo gerente');
    }
    else if( tipo instanceof Empleado){
        console.log('es un tipo empleado');
    }
    
    else if( tipo instanceof Object){
        console.log('es un tipo objeto');
    }
}

let empleado1 = new Empleado('nordin', '2400');
let gerente1 = new Gerente('miki', '2400', 'sistemas');

determinarTipo(gerente1);
determinarTipo(empleado1);