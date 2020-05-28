#Construire votre propre image docker avec une config custom


Maintenant vous savez : 
Utiliser un dockerfile pour générer une image
monter un volume à l'intérieur d'un conteneur

Plus grand chose pour pouvoir construire un env de dév de rêve....

Changeons la configuration fournie dans l'image Php apache 7.2

mettez à jour le fichier docker-compose.yml :

    version: '3'
    services:
        phpapp:
            build:
                context: ./
                dockerfile: Dockerfile
            image: phpapp:123
            ports:
                - "8080:80"
            volumes:
                - "./:/var/www/html"
            container_name: my-php-app

Nouveau Dockerfile

    FROM php:7.2-apache

index.php:

    <?php
    phpinfo();


Après on va dans le terminal et :

$ docker-compose up


...


Observons....

* Le nom de l'image est “phpapp:123”, mais plus <nom_de_dossier>_<nom_de_service>
* Le volume est encore monté
* Il transfère le port 80
* le nom du conteneur est: “my-php-app”

$ curl  http://localhost:8080 

# ok ça marche, mais sans mysql, une app php ne sert à rien

On peut toujours utiliser :  “docker exec -it my-php-app /bin/bash” puis 

    $ apt-get install etc... 
    

Plusieurs solutions... 

...
...
...

Ctrl-c

on Stop the container
    docker-compose rm

Rajouter des infos dans le Dockerfile :

    FROM php:7.2-apache
    RUN apt-get -y update \
    && apt-get install -y libicu-dev \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl
    RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

docker-compose up --build

...
...
...

On rebuild nos conteneurs

...

ça blablabla

...

on ouvre Apache

    curl http://localhost:8080 

chercher “mysqli” and “intl”


Stop

    docker-compose rm
