# utilisation des docker network dans docker-compose

Exercice d'un cas typique de docker compose avec un docker network



il y a deux niveaux de service réseau docker : 

niveau 1: définition d'un réseau network
niveau 2 : à quel réseau se connecte mon service


    version: "3.7"
    services:
        app1:
        image: httpd:latest
        container_name: app1
        ports:
            - 8080:80
        networks:
            - app1_net
    networks:
        app1_net:
        
ça va créer un network qui s'appelle app2_net sans préciser la config; on va dire à mon service d'utiliser 
cette config

$ docker-compose up


$ curl http://localhost:8080/

on observe quoi ?


$ docker inspect app1



