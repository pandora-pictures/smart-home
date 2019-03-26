#!bin/bash

git add *

input="junk"
inputArray=()

while [ "$input" != "" ] 
do 
   read -p "Enter the commit name for push to origin master: " input
   inputArray+=("$input")
done

git commit -m input
git push origin develop
