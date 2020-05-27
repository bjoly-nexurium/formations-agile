# Datapersistence dans des volumes nommés :


$ docker volume create --name my-vol


...

on crée un volume docker nommé “my-vol”

$ docker volume ls

...

...

on trouve my-vol

Maintenant faut l'utiliser


docker-compose.yml

    version: '3.7'
    services:
        db:
            image: mysql:latest
            restart: always
            container_name: myphpapp-db
            environment:
                MYSQL_ROOT_PASSWORD: somepass
                MYSQL_DATABASE: somedatabase
            volumes:
                - my-vol:/var/lib/mysql
    volumes:
        my-vol:
            name: my-vol


$ docker-compose up -d

...

on up le db-container


$ docker run -v my-vol:/mydata --rm -it ubuntu /bin/bash

...

...


ça démarre un conteneur ubuntu

avec  my-vol monté dedans /mydata à l'intérieur du container

$ ls /mydata

...


on va y voir les données de la DB


$ctrl c


## comment on partage un volume entre deux conteneurs


$ docker volume create --name Datastore1


$ docker run -v Datastore1:/mydatastore --rm -it ubuntu /bin/bash


$ echo “hello datastore1” > /mydatastore/hello.txt


__on ouvre un deuxieme terminal!__

docker run -v Datastore1:/mydatastore1 --rm -it ubuntu /bin/bash


$ls /mydatastore/


$ echo “\n\nhello datastore 2” >> /mydatastore/hello.txt


__on revient dans le premier terminal__

$ cat /mydatastore/hello.txt

on peut tout quitter