/*
Auteur  : Maxime Faucher
Date    : 29 janvier 2025
Sujet   : Démos sur les classes JavaScript (fichiers externes)

Références utiles
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

*/

// Importer la classe Personne
//Si on a un export default, on utilise
//import Personne from "./Personne";

import{Personne} from "./Personne";

// Création d'objets avec la classe Personne
const personne1 = new Personne("Maxime", 44);
const personne2 = new Personne("Étienne", 28);
const personne3 = new Personne();
const personne4 = new Personne("Alice", 22);
const personne5 = new Personne("Zoé", 31);
const personne6 = new Personne("Bob", 57);

// EXERCICE
// a) Mettre les objets Personne dans un tableau
const personnes = [personne1,personne2, personne3, personne4, personne5, personne6];

// b) Boucle for... of sur le tableau pour appeler .afficherDetails() de chacun des objets
for(const personne of personnes){
    personne.afficherDetails()
}

// c) Trier les personnes du tableau par ordre alphabétique inverse de nom
// Pour ne pas affecter le tableaux original, on fait une copie
const copiePersonnes = personnes.map( (element) => element ) // pour dipliquer
copiePersonnes.sort((element1, element2) => element1.nom.localCompare(element2.nom));
console.log(copiePersonnes);
