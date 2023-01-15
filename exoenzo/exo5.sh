#!/bin/bash

#Exo5
#Ecrire un script qui prend en entrée un nombre entier et renvoie true si c'est un nombre premier, false sinon.

read -p "Entrer un nombre" input

i=2

while [ ! $(( $input % i )) -eq 0 -a $input -gt 1 ]
do
	i=$(( i+1 ))
done

if [ ! $i -eq $input ]; then
	echo "false"
elif [ $input -eq 1 ]; then
	echo "false"
else
	echo "true"
fi
