#!/bin/bash

#Exo6
#Ecrire un script qui prend en entrée un nombre entier et renvoie le nombre de chiffres de ce nombre.

read -p "Entrez un nombre entier" input
result=$(echo $input | grep -o "[0123456789]" | wc -l)
echo $result
