Lecture d'un fichier docker compose

The docker-compose.yml File
Explained Line by Line for Composer Beginners

Dockerfile:

    FROM php:7.2-apache
    COPY index.php /var/www/html

index.php file

    <?php
    echo "hello world \n\n";

Avec en plus un fichier docker-compose.yml file 

    version: '3'
    services:
        phpapp:
            ports:
                - "8080:80"
            build:
                context: ./
                dockerfile: Dockerfile
Et dans le terminal : 
>   docker-compose up

##### analysons ce qui se passe : 

$docker images
-->  “folder-name”_”service-name” based on the Dockerfile
 **tp1_phpapp**

$docker ps
**tp1_phpapp_3**

    curl http://localhost:8080

si on édite le fichier, il ne se passe rien

Est-ce que vous savez pourquoi ? 

$ ctrl-c•

(Stop le conteneur)

$docker-compose up

    curl  http://localhost:8080 
_hello world_

$ docker-compose up --build

(à votre avis ça fait quoi ?)

    Curl http://localhost:8080 container “hello docker”

$docker-compose rm

