class Persona{
    //definir propiedades
    nombre = "";
    apellido = "";
    edad = 0;

    comida = "";
//definimos el método constructor
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
    }

    set setComidaFavorita( comida ){
        this.comida = comida

    }

    get getComidaFavorita(){
        return `La comida favorita de ${this. nombre} es${this.comida}`
    }
    //metodos normales
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }

}

const andres = new Persona("Andres, Hidalgo, 27");
//console.log(`Hola soy ${this.nombre}tengo`); 
console.log(andres);

console.log

const camilo = new Persona ("Camilo", "Garcia", "27");
camilo.setComidaFavorita = "Mariscos"
console.log(camilo)
console.log ()