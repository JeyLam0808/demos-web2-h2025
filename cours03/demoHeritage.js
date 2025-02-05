class animal {
    cons(nom){
        this.nom = nom;
    }

    faireDuBruit(){
        console.log("Un bruit d'animal");
    }

    decrire(){
        return `Cet animal s'apelle ${this.nom}`;
    }
}

//Définiton d'une classe enfant qui hérite de Animal
class Chien extends Animal{
    constructor(nom,race){
        super(nom); // Apelle le constructeur de la classse parent
        this.race = race;
    }

    faireDuBruit(){//Cette méthode a été REDÉFINIE (overridden)
        console.log("Wouf,Wouf");
    }

    decrire(){
        return super.decrire() + `C'est un chien de race ${this.race}`; //utiliser l'héritage dans la redéfinition de
    }
}

//Utilisation des classes
const unAnimal = new Animal("Popcorn")
const monChien = new Chien("Rex","Labrador")
console.log(monChien.nom);
console.log(monChien.race);
unAnimal.faireDuBruit()
monChien.faireDuBruit()
console.log(monChien.decrire());
console.log(unAnimal.decrire);


