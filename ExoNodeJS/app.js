/*  ICi nos constantes afin d'appeler nos modules*/

const express = require("express");
const fs = require("fs");
const app = express();

/*  Ici on affiche la réponse "Hello Wolrd" lorqu'on suit la route racine*/
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
  /* ICi on récupère les données dans le fichier data.json */
  fs.readFile("data.json", (err, data) => {
    /* ICi on lit les données dans le fichier data.json */
    if (err) {
      /* Si nous avons une erreur */
      response.status(500).json({
        /* On réponds avec le code erreur 500 qui va délivrer le message suivant*/

        message: "Une erreur lors de la lecture des données",
      });
    } else {
      /* Sinon on réponds avec le code 200 qui va délivrer les data */

      response.status(200).json(JSON.parse(data)); /* Ici on convertit notre string JSON en objet JS afin de pouvoir utiliser nos data */
    }
  });
});

/*  ICi on consolLog afin de vérifier que notre app tourne bien sur le port 3k */
app.listen(3000, () => {
  console.log("L'app tourne sur le port 3000");
});
