LEs étapes pour lancer un projet NodeJs

1/ On crée un dossier qui sera la racine de notre projet
2/ On l'ouvre dans VsCode
3/ On lance le terminal et on commence avec npm init afin d'initialiser un projet NJS
4/ On installe les package dont nous auront besoin(trouvable sur npmjs.com) avec la commande npm install "nom du package"
4a/ Ici on installe express afin d'envoyer des requetes et recevoir des réponses et visualiser les reulstats dans le terminal grace à un serveur qu'elle lance et ou elle écoute le port qu'on lui donne(ici 3000)
4b/ On installe fs afin d'écrire et de lire dans nos fichiers
4c/ On installe nodemon afin de relancer automatiquement le serveur(express) dans le terminal à chaque save
5/ On peux éventuellement installer des packages avec --save-dev après leur nom afin de les instller que dans la partie dev, ce qui évite de surcharger notre site
6/ On crée un fichier data.json a la racine de notre dossier afin d'y stocker nos données et de pouvoir les utiliser
7/ On crée un fichier app.js(ou le nom qu'on lui a donné a l'initialisation de notre projet) qui contiendra notre code
8/ Si on a installé nodemon, on peux utiliser un script "start" dans notre package.json afin que notre terminal affiche a chaque save le progress ou les eventuelles erreurs
