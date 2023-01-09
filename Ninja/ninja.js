
class Ninja {
    constructor(nombre, salud=0, velocidad =3, fuerza= 3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName(){
        console.log('El nombre del ninja es '+ this.nombre )
    }

    showStats(){
        console.log('La fuerza es: ' + this.fuerza  + ' , La Velocidad es: ' + this.velocidad + ' , La Salud es: ' + this.salud ) 
    }
    drinkSake (){
        this.salud += 10 ;
        console.log( 'la salud es: ' + this.salud)
    }
    
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
