#!/bin/bash

#Exo1
#Ecrire un script qui prend en entrée un nombre entier et affiche tous les nombres de 1 à ce nombre.

read -p "Ecrire un nombre entier: " input
for (( i=1; i<$input; i++ ))
do
echo -n  "$i "
done

#TERMINE
