#!/bin/bash

#Exo2
#Ecrire un script qui prend en entrée une chaîne de caractères et renvoie le nombre de voyelles dans la chaîne.
read -p "Entrer un mot :" valeur
result=$(echo $valeur | grep -o -i "[aeiouy]" | wc -l);
echo "Il y a $result voyelles "

#TERMINE
