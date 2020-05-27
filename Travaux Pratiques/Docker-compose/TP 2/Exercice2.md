# Monter un volume pour des updates instantanées

1. on supprime le Dockerfile et on garde que  “index.php” et “docker-compose.yml” 

The docker-compose.yml file looks like this:

    version: '3'
    services:
        phpapp:
            image: php:7.2-apache
        ports:
            - "8080:80"
        volumes:
            - "./:/var/www/html"

_index.php_

    <?php
    echo "hello world \n\n";


Ensuite ....

$ docker-compose up


Il va lire le docker compose.yml
Il va démarrer apache avec php7
Il va monter un volume entre le hôte "./" et le conteneur "var/www/html"
Il va remaper le port

$Curl http://localhost:8080
 

Changez le fichier index.php

F5

$ curl http://localhost:8080

$ docker-compose rm
