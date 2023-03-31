class Persona{

    static contadorPersonas=0;//atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona=++Persona.contadorPersonas;
        } else {
            console.log('se ha superado el numero maximo de objetos');
        }
        
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido= apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this.nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }

} 

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento= departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ',' + this._departamento;
    }

}

let persona1= new Persona('miki', 'sarmi');
console.log(persona1.toString());
let empleado1= new Empleado('nordin', 'mhamed', 'sistemas');
console.log(empleado1.toString());
let persona2= new Persona('miki', 'lopez');
console.log(persona2.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ=10;
console.log(Persona.MAX_OBJ);

let persona3= new Persona('mariano', 'delgado');
console.log(persona3.toString());
let empleado2= new Empleado('chechu', 'mogambo');
console.log(empleado2.toString());
let empleado3= new Empleado('moshe', 'ñorda');
console.log(empleado3.tostring());