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
            console.log(`${this.nom}se deplace dans ${lieu.nom}`)
            
        }
        this.payer = (article) => {
            this.argent -= article.prix
            this.panier.push(article)
        }
        this.couper = (article) => {
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
        this.prendre = () => {
            this.sac.push (boite.shift())
            
        }
        this.acheter = (vendeur, Objet) => {
            this.argent = this.argent-Objet.prix
            this.sac.push(vendeur.sac.shift())
        }
    }
}
let MahadBG = new Personnage ("MahadBG", [], 100)
let Antoine = new Personnage ("Antoine", [], 50)

MahadBG.prendre (Boite)

console.log (MahadBG.sac)
 */
//-----------------------------
// EXO 3.1.2
/* 
class Objet {
    constructor(nom,prix){
        this.nom=nom
        this.prix=+prix
    }

}

let couteau = new Objet ("couteau",358)

let telephone = new Objet ("telephone", 750)

let boite = [couteau,telephone]

class Perosnne {
    constructor(nom,sac,argent){
        this.nom =nom
        this.sac=sac
        this.argent =+argent


        this.prendre=() =>{
            this.sac.push(boite.shift()) 
        }
        this.acheter=(vendeur,objet) =>{
            this.argent= this.argent-objet.prix
            this.sac.push(vendeur.sac.shift())
        }
    }

}

let arthur = new Perosnne ("arthur",[],1000)

let paul = new Perosnne ("paul",[],1000)

paul.prendre(boite);

arthur.acheter(paul,paul.sac[0])

console.log(arthur);
 */
//-----------------------------
// EXO 3.1.3

// class Objet{
//     constructor(nom,prix){
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// let couteau = new Objet("Couteau", 8);
// let moulin = new Objet("moulin", 10);

// let tableau = [couteau,moulin];

// class Personnage{
//     constructor(nom,sac,argent){
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//         this.prendre = (objet) =>{
//             this.sac.push(objet.shift());
//         },
//         this.acheter = (vendeur,objet) =>{
//             this.sac.push(vendeur.sac.splice(vendeur.sac.indexOf(objet),1).join());
//         }
//     }
// }

// let mahad = new Personnage("Mahad",[],100);
// let yasmina = new Personnage("Yasmina",[],60);

// yasmina.prendre(tableau);
// mahad.prendre(tableau);

// mahad.acheter(yasmina,couteau);

// console.log(mahad.sac);


//------------------------------
// EXO 4.1
class Lieu {
    constructor (nom, personnes = []) {
        this.nom = nom
        this.personnes = personnes

    }
}
class Personne{
    constructor (nom, prenom, argent,){
        this.nom = nom
        this.prenom = prenom
        this.argent = argent
        this.seDeplacer = () => {
            
        }
    }
}
class Bus{
    constructor (personnes = [], caisse){
        this.personnes = personnes
        this.caisses = caisse
        this.embarquer = () => {

        }
    }
}

let molengeek = new Lieu ("MolenGeek")
let snack = new Lieu ("Snack")
let maison = new Lieu ("Maison")
let personne = new Personne ("Mcklay", "john",100)