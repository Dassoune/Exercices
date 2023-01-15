#!/bin/bash

#Exo4
#Ecrire un script qui prend en entrée deux chaînes de caractères et renvoie true si elles sont des anagrammes,false sinon.

read -p "Entrez deux mots séparés par un espace :" input1 input2

if [ ${#input1} != ${#input2} ]; then
 echo "FALSE Ce ne sont pas des anagrammes"
exit 0;
fi
VAR1=$(echo $input1 | grep -o -i "[a-z]" | sort -d )
VAR2=$(echo $input2 | grep -o -i "[a-z]" | sort -d )
if [ "$VAR1" = "$VAR2" ]; then
    echo "TRUE Ce sont des anagrammes"
else
    echo "FALSE Ce ne sont pas des anagrammes"
fi
#TERMINE
