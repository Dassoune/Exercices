/*  ICi nos constantes afin d'appeler nos api's*/

const express = require("express");
const fs = require("fs");
const app = express();

/*  Ici on affiche la réponse "Hello Wolrd" lorqu'on interroge la racine de notre local host*/
app.get("/", (requete, response) => {
  response.send("Hello World");
});
/*  Ici on récupère le nom et prénom dans la requete et on les affiches en majuscules en réponse */
app.get("/name/:name/surname/:surname", (requete, response) => {
  response.send(
    `Bonjour ${requete.params.name.toUpperCase()} ${requete.params.surname.toUpperCase()}`
  );
});
/*  Ici on récupère les data présentes dans le fichier data.json, on les affiches si cela fonctionne sinon on réponds par l'erreur 500 avec le message indiqué*/
app.get("/data", (request, response) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      response.status(500).json({
        message: "Une erreur lors de la lecture des données",
      });
    } else {
      response.status(200).json(JSON.parse(data));
    }
  });
});

/*  ICi on consolLog afin de vérifier que notre app tourne bien sur le port 3k */
app.listen(3000, () => {
  console.log("L'app tourne sur le port 3000");
});
