#!/bin/bash

#Exo3
#Ecrire un script qui prend en entrée un tableau d'entiers et renvoie le plus grand élément du tableau.

chiffres=()
read -p "Saisir plusieurs nombres séparés par un espace : " -a chiffres

max=$chiffres
min=$chiffres

for element in ${chiffres[@]}; do

  if [ $element -lt $min ]; then
                min=$element
        fi


  if [ $element -gt $max ]; then
    max=$element
  fi

done
echo "Plus grand nombre: " $max
#TERMINE
