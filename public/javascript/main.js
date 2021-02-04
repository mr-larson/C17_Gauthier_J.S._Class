// Les Classes
//-----------------------------
//Présentation
/* 
class Ingredients {
    constructor (nom, poids, prix, couleur){
        this.nom = nom;
        this.poids = poids;
        this.prix = prix;
        this.couleur = couleur;
        this.acheter = (personne) => {
            if (personne == null) {
                console.log (`Quelqu'un m'a acheté`)
            } else {
                console.log (`${personne} m'a acheté`)
            }
        }
    }
}

let tomate = new Ingredients ("Tomate", 0.5, 0.7, "Aldi", "Rouge")
tomate.acheter ("Elias")
console.log(`Le ${tomate.nom} coute ${tomate.prix} €`)
 */
//-------------------------------
// EXO 1.1
/* 
class Coding{
    constructor (age, nom, ville){
        this.age = age
        this.nom = nom
        this.ville = ville
    }
}
let gauthier = new Coding (35, "Gauthier", "Waterloo")
let cem = new Coding (22, "Cem", "forest")
 */
//--------------------------------
// 1.2
/* 
class Coding{
    constructor (age, nom, ville){
        this.age = age
        this.nom = nom
        this.ville = ville
        this.sePresenter = (x) =>{
            console.log (`Bonjour je m'appelle ${x} !`)
        }
    }
}
let Gauthier = new Coding (35, "Gauthier", "Waterloo")
let Cem = new Coding (22, "Cem", "forest")

Gauthier.sePresenter (Gauthier.nom) 
 */
//--------------------------------
// EXO 2.1
/* 
class Lieux{
    constructor (nom, contenu, ingredients){
        this.nom = nom
        this.contenu = contenu
        this.ingredients = ingredients
    }
}
let maison = new Lieux ("Maison", [])
let epicerie = new Lieux ("Epicerie", [], [])
let cuisine = new Lieux ("Cuisine", [], [])

class Ingredients{
    constructor (nom, etat, prix){
        this.nom = nom
        this.etat = etat
        this.prix = prix
    }
}
let poivron = new Ingredients ("poivron", "entier", 1)
let oignon = new Ingredients ("oignon", "entier", 2)
let oeuf = new Ingredients ("oeuf", "entier", 4)
let epice = new Ingredients ("epice", "moulu", 3.25)
let paprika = new Ingredients ("paprika", "moulu", 1.5)
let fromage = new Ingredients ("fromage", "coupé", 1.6)

class Personne{
    constructor (nom, lieu, argent, panier){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.panier = panier
        this.se_deplacer = (lieu) => {
            this.lieu = lieu.nom
            console.log(`${this.nom}se deplace dans ${lieu.nom}`);
            
        }
        this.payer = (article) => {
            this.argent -= article.prix
            this.panier.push(article)
        }
        this.couper = (x, y) => {
            if (article.etat == "entier"){
                article.etat = "coupé"
            }
        }

    }

}
let maxime = new Personne ("maxime", "néant", 100, [])

Personne.se_deplacer (Lieux)
Personne.payer (Ingredients)
Personne.couper (Ingredients)
 */
//----------------------------
//EXO 3.1
/* 
class Objet{
    constructor (nom, prix){
        this.nom = nom
        this.prix = prix
    }
}
let Marteau = new Objet ("Marteau", 5)
let Clous = new Objet ("Clous", 1)
let Boite = [Marteau, Clous]

class Personnage {
    constructor (nom, sac, argent){
        this.nom = nom
        this.sac = sac
        this.argent = argent
        this.prendre = (objet) => {

        }
        this.acheter = (vendeur, objet) => {

        }
    }
}
let MahadBG = new Personnage ("MahadBG", [Marteau], 100)
let Gauthier = new Personnage ("Gauthier", [Clous], 50)
 */
//-----------------------------