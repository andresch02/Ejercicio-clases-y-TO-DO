class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.energia = 100; 
    }

    alimentar(){
        this.energia +=20;
        if (this.energia>100) {
            this.energia=100            
        }
    }

    jugar(){
        if (this.energia <10) {
            console.log(`${this.nombre} no tiene suficiente energía para jugar.`)
        }else{
        this.energia -=10
        }
    }

    mostrarEnergia(){
        console.log(`Tu ${this.tipo} ${this.nombre} Tiene ${this.energia} de energía`)
    }
}
//crear instancias clase mascota
const perro = new Mascota("Max","Perro");
const gato = new Mascota("Fruna", "Gato");
//Acciones de la mascota
perro.alimentar();
perro.jugar();
gato.alimentar();
gato.jugar();
//Mostrar niveles de energía actualizados
perro.mostrarEnergia()
gato.mostrarEnergia()