
# persister l'état dans la db


Dans l'exemple précédent, on démarre le tout, mais les conteneurs docker sont éphémères, on perd toutes nos données de la
db à chaque redémarrage du PC.


(on va utiliser un mapping de dossier)


docker-compose.yml 
    
    version: '3'
    services:
    db:
    image: mysql:latest
    restart: always
    container_name: myphpapp-db
    environment:
    MYSQL_ROOT_PASSWORD: somepass
    MYSQL_DATABASE: somedatabase
    dbclient:
    image: mysql:latest
    depends_on:
    - db
    command: mysql -uroot -psomepass -hdb

...
...


observons .... les variables d'environnement, et la commande mysql...


_depends_on_ 
 
 ça fait quoi à votre avis ?

...


...


...


...


...


...
 
 ça attend que le service "db" soit up pour démarrer
 

$ docker-compose up -d


(démarre les deux conteneurs en mode détaché)


$ docker-compose ps

...

db est running, mais pas dbclient

docker-compose run --rm dbclient


il se passera quoi ?


...


...


...


...


...


...


on se co à “db” on ouvre un shell 

lancez la requete

    USE somedatabase;
    SHOW TABLES;


_on observe que c'est vide!_ 


    CREATE TABLE mytable (id INT);
    SHOW TABLES;


(elle sert pas à grand chose cette table)

    exit;
    
    
...
    
    $ docker-compose stop

...

    $ docker-compose rm

...

    $docker-compose up -d



on se relogin...

    $ docker-compose run --rm dbclient

...

    USE somedatabase;
    SHOW TABLES;
    --empty again :'(
    exit;

$ docker-compose stop

$ docker-compose rm

## créons un volume, et partageons le avec notre conteneur

$ mkdir data

On rajoute le volume au docker compose : 

docker-compose.yml 

    version: '3'
    services:
    db:
    image: mysql:latest
    restart: always
    container_name: myphpapp-db
    environment:
    MYSQL_ROOT_PASSWORD: somepass
    MYSQL_DATABASE: somedatabase
    volumes:
    - ./data:/var/lib/mysql
    dbclient:
    image: mysql:latest
    depends_on:
    - db
    command: mysql -uroot -psomepass -hdb

$ docker-compose db -d up

...

(regardez dansle dosser data, il se passe des trucs)


on entre dans le container. on relance les commandes sql plus haut :

$ docker-compose run --rm dbclient

    USE somedatabase;
    SHOW TABLES;
    CREATE TABLE mytable (id INT);
    SHOW TABLES;
    exit;


$ docker-compose stop

$ docker-compose rm

$ docker-compose up -d db

$ docker-compose run --rm dbclient

    USE somedatabase;
    SHOW TABLES;
    
...


C'est bien mais pas top


...


...


...


...


...


...



Peut être qu'on devrait pas trop essayer d'écrire sur la machine de l'hôte pour les data, c'est pas la meilleure solution

