class Ninja {
    constructor(nombre, salud = 0, velocidad =3, fuerza= 3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName(){
        console.log('El nombre del ninja es '+ this.nombre )
    }

    showStats(){
        console.log(this.nombre + ', Salud: ' + this.salud + ', Velocidad: ' + this.velocidad + ', Fuerza: ' + this.fuerza ) 
    }
    drinkSake (){
        this.salud += 10 ;
        console.log( 'la salud es: ' + this.salud)
    }
    
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(nombre){
        super(nombre, 200 , 10, 10);
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }


}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
