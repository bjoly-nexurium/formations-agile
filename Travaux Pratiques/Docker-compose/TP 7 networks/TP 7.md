# Les network !!


$docker network ls


on nettoie ce qu'on a fait avant

$docker network prune

...

$docker network ls

on a :

* un host
* un bridge
* un null


$ docker run --rm --name my-webserver -d httpd


...

$ docker inspect my-webserver

$ curl 172.17.0.3

... rien du tout...

$ docker run --rm tomw1808/mycurl my-webserver
 
...

ça marche pas du tout

...


$ docker run --rm tomw1808/mycurl 172.17.0.3

    <html><body><h1>It works!</h1></body></html>


$ docker network ls

y a rien...




...


...


...


...


...


...


## ETAPE 2

$ docker stop my-webserver

$ docker network create simple-network

... un crée un nouveau pont (bridge) docker


$ docker run --rm -d --name my-webserver --network simple-network httpd


$ docker run --rm --network simple-network appropriate/curl my-webserver

__ça fait un curl vers my-webserver, et ça marche__

$ docker inspect my-webserver

docker run --rm tomw1808/mycurl 172.17.0.3

ça marche pas...   et c'est normal

$ docker stop my-webserver

$ docker network prune

###Pour en savoir plus : 

https://docs.docker.com/compose/networking/

    version: "3"
    services:
      web:
        build: .
        ports:
          - "8000:8000"
      db:
        image: postgres
        ports:
          - "8001:5432"
    
    
