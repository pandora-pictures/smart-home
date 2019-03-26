#!bin/bash

git add *
read -p "Enter the commit name : "  username
git commit -m $username
git push origin develop
