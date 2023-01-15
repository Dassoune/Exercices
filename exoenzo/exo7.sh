#!/bin/bash

#Exo7
#Ecrire un script qui prend en entrée un nombre entier et renvoie la somme des chiffres de ce nombre.

read -p "Entrez un nombre entier :" input

somme=0
array=()
chiffre=$(echo $input | grep -o "[123456789]")
array+=($chiffre)

for i in ${array[@]}
do
	let somme+=$i
done
echo $somme

#Termine
