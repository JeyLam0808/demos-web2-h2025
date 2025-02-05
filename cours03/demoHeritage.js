class animal {
    cons(nom="N/D"){
        this.nom = nom;
    }

    faireDuBruit(){
        console.log("Un bruit d'animal");
    }

    decrire(){
        return `Cet animal s'apelle ${this.nom}`;
    }
}

