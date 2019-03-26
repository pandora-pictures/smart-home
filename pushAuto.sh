#!bin/bash

git add *

read -p "Enter the commit name : "  username
echo "Welcome $username!"

git commit -m input
git push origin develop
