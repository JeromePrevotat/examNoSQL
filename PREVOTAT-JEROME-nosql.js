//Insertion (2 points)
/*Insérez deux nouveaux sets Lego intitulé "Lego Creator 3-in-1" et "Faucon Millenium"  avec les informations suivantes :
Lego Creator 3-in-1 :
    Année de sortie : 2020
    Nombre de pièces : 564
    Prix : 59.99 €
    Evaluations : Uniquement l'utilisateur "Charlie" avec une note de 4.
Faucon Millenium :
    Année de sortie : 2019
    Nombre de pièces : 1050
    Prix : 89.99 €
    Thème : Star Wars
    Evaluations : Utilisateurs "David" (note 5) et "Eve" (note 3).*/

db.lego.insertMany([
    {
        "nom":"Lego Creator 3-in-1",
        "Année de sortie" : 2020,
        "Nombre de pièces" : 564,
        "Prix" : 59.99,
        "evaluations":[{"utilisateur":"Charlie", "note":4}]
    },
    {
        "nom":"Faucon Millenium",
        "annee_sortie" : 2019,
        "nombre_de_pieces" : 1050,
        "prix" : 89.99,
        "theme":"Star Wars",
        "evaluations":[
            {"utilisateur":"David", "note":5},
            {"utilisateur":"Eve", "note":3}
        ]
    }
]);
    
//2. Modification (4 points)
//a. Mettez à jour le prix du set "Lego Creator 3-in-1" à 49.99 €.
db.lego.updateOne(
    {
        "name": "Lego Creator 3-in-1"
    },
    {
        $set: {"prix": 49.99}
    }
 );

//b. Ajoutez une évaluation de l'utilisateur "Frank" avec une note de 4 pour le set "Millennium Falcon".
db.lego.updateOne(
    {
        "nom":"Faucon Millenium"
    },
    {
        $push:{
            "evaluations":
                        {
                            "utilisateur":"Frank",
                            "note":4
                        }
        }
    }
);

//3. Recherche (2pts par question)
//Listez tous les sets Lego ayant pour thème "Star Wars", triés par année de sortie en ordre décroissant.


//Listez les sets Lego qui ont un prix supérieur à 100€, triés par nombre de pièces décroissant.


//Lister les 3 sets Lego qui ont le plus de figurines, afficher uniquement leur nom et le nombre de figurines.


//Trouvez les sets Lego avec une ou plusieurs évaluations supérieures ou égales à 4.


//Trouvez les sets Lego ayant le thème "Technic" ou "Creator" et dont le nombre de pièces est inférieur à 2000.


//Trouvez tous les sets Lego avec le thème "Harry Potter" publiés entre 2000 et 2010.


//Trouvez les gros sets Lego les plus populaires, c’est-à-dire ceux dont la moyenne des évaluations est supérieure ou égale à 4 et dont le nombre de pièces est supérieur à 1000.


//Trouvez les sets Lego qui ont uniquement des évaluations de 5/5.


//4. Suppression (4 points)
//a. Supprimez l'évaluation de l'utilisateur "Bob" pour le set "Faucon Millenium" de 2019.


//b. Supprimez tous les sets Lego dont le nombre de pièces est inférieur à 1000.