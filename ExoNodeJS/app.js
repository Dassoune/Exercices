/*  ICi nos constantes afin d'appeler nos modules*/

const express = require("express"); //on declare une constante qui contiendras l'export du module express
const fs = require("fs"); //on declare une constante qui contiendras l'export du module fs
const app = express(); //on declare une constante qui lance une fonction express() qui crée une application express
const bodyParser = require("body-parser"); // On declare une constnten qui contiendras l'export du module bodyParser
app.use(bodyParser.json()); // JE vais dire a express d'utiliser bodyparser pour lire le contnu du body en json

/*  C'est une route par défaut qui renvoie une chaine de caractères*/
// GET "/"
//exemple : http://localhost:3000/

app.get("/", (requete, response) => {
  // On utilise la reponse du middleware express pour envoyer sur le port quand cette reponse est trigger la chaine de caractères
  response.send("Hello World");
});
/*  C'est une route qui permet d'afficher une chaine de caractères en prenant 2 paramètres (:name, :surname) */
// Get "/name/:name/surname/:surname"
//exemple : http://localhost:3000/name/Julien/surname/Louis

app.get("/name/:name/surname/:surname", (requete, response) => {
  // On utilise la reponse du middleware express pour envoyer sur le port quand cette reponse est trigger la chaine de caractères avec les paramètres mis en majuscules
  response.send(
    `Bonjour ${requete.params.name.toUpperCase()} ${requete.params.surname.toUpperCase()}`
  );
});
/*  C'est une route qui permet d'afficher les données contenues dans le fichier data.json en json dans la requete*/
// Get "/data"
//exemple : http://localhost:3000/data
app.get("/data", (request, response) => {
  // On va utiliser la methode qui vient du module "fs" pour lire et retourner le contenu du fichier en chaine de caractères
  fs.readFile("data.json", (err, data) => {
    //si dans el callback l'erreur n'est pas null
    if (err) {
      //je renvoie une reponse avec un statut 500 (erreur serveur) et un corps de requetes contenant le message et l'erreur
      response.status(500).json({
        /* On réponds avec le code erreur 500 qui va délivrer le message suivant*/

        message: "Une erreur lors de la lecture des données",
      });
    } else {
      // je renvoie une reponsse au statut 200 et je renvoie en json la chaine de caractères transformée en json

      response.status(200).json(JSON.parse(data));
    }
  });
});
// on export la constante app pour la rendre utilisable dans d'autres parties
module.exports = app;

/*  On demande a express d'exposer tout son contenue enregistré sur le port 3000 du serveur qui accueil l'app*/
app.listen(3000, () => {
  // on lancera une chaine de caractere en terminal pour avoir un retour pour etre sur que tout fonctionne
  console.log("L'app tourne sur le port 3000");
});

// C'est une route qui me permet de recuperer une data par son id
// exemple : http://localhost:3000/data/1
app.get("/data/:id", (request, response) => {
  // JE vais utiliser la methode readfile du module fs pour pouvoir recuperer l'entiereté du fichier
  fs.readFile("data.json", (err, data) => {
    // Je mets une condition si il y a une erreur dans le callback
    if (err) {
      // JE renvoie une reponse avec un statut 500 avec un message et l'erreur
      response.status(500).json({
        message: "Une erreur lors de la lecture des données",
        error: err,
      });
    } else {
      // JE parse la chaine de caracteres en json pour le transformer en objet json manipulable
      const jsonData = JSON.parse(data);
      // JE vais chercher dans ce fichier si l'id correspondant en parametre existe dans le contenu
      const dataById = jsonData.data.find(
        (obj) => obj.id === parseInt(request.params.id)
      );
      // Si je trouve un objet avec cet id
      if (dataById) {
        // JE renvoi une reponse avec un statut 200 et l'objet
        response.status(200).json(dataById);
      } else {
        // sinon je renvoi une reponse avec un staut 404(notfound) avec un message d'erreur
        response.status(404).json({
          message: "Aucun objet trouvé avec cet id",
        });
      }
    }
  });
});


// C'est une route qui me permet d'insérer de la données dans mon fichier data.json
// Ex: http://localhost:3000/data
app.post("/data", (request, response) => {
  // lire le contenu du fichier
  fs.readFile("data.json", (err, data) => {
    // si une erreur sur la lecture du fichier
    if (err) {
      response.status(500).json({
        message: "Une erreur est survenue lors de la lecture des données",
      });
    } else {
      // stocker les données existante
      const existingData = JSON.parse(data);
      // rajouter ma donnée à moi
      existingData.data.push(request.body);
      // je vais reécrire le fichier avec les nouvelles données
      fs.writeFile("data.json", JSON.stringify(existingData), (writeErr) => {
        // si il ya une erreur au moment de l'écriture
        if (writeErr) {
          response.status(500).json({
            message: "Une erreur est survenue lors de l'écriture des données",
          });
        } else {
          response.status(200).json({
            message: "Les données ont été ajouter avec succès",
          });
        }
      });
    }
  });
});
