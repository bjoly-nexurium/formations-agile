Quelques trucs qu'on a pas essayé : 


1. Runer en mode détaché pour ne pas avoir les logs directement dans le terminal

2. Avoir plusieurs conteneurs au même endroit (duh)

Let’s start by using this docker-compose.yml file:

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
    container_name: myphpapp-app

    db:
    image: mysql:5.7
    restart: always
    environment:
    MYSQL_ROOT_PASSWORD: my!!!root!!!pw
    container_name: myphpapp-db

_(en guise d'exercice, vous devez indenter le code yaml)_

On devrait avoir 2 services,
 *un service "phpapp" avec un conteneur myphp-app, avec une image phpapp avec le tag 123
* un service "db" avec un conteneur de l'image mysql 5.7, avec l'option restart:always. le conteneur redémarrera 
systématiquement quand l'application crashera. Le conteneur s'appellera “myphpapp-db”. 


Dockerfile

    FROM php:7.2-apache
    RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

index.php (niveau 2) 

_il se connecte à la base d2_


    <?php
    header("content-type: text");
    $host = "db"; //The hostname "db" from our docker-compose.yml file!!!
    $username = "root"; //We use the root user
    $pw = "my!!!root!!!pw"; //that's the password we set as environment variable
    $conn = new mysqli($host,$username,$pw);
    if ($conn->connect_errno > 0) {
    echo $db->connect_error;
    } else {
    echo "DB Connection successful\n\n";
    }
    

Let’s run !!!

    docker-compose up -d

...

...

$curt http://localhost:8080
 
est-ce qu'on voit “DB Connection successful”? 
 
**index.php (niveau 3)**


on va regarder quelless db sont dispos ?
    
    <?php
    header("content-type: text");
    $host = "db"; //The hostname "db" from our docker-compose.yml file
    $username = "root"; //We use the root user
    $pw = "my!!!root!!!pw"; //that's the password we set as environment variable
    $conn = new mysqli($host,$username,$pw);
    if ($conn->connect_errno > 0) {
    echo $db->connect_error;
    } else {
    echo "DB Connection successful\n\n";
    //we read out the content
    $result=mysqli_query($conn,"SHOW DATABASES;");
    while( $row = mysqli_fetch_row( $result ) ){
    echo $row[0]."\n";
    }
    }

$ curl http://localhost:8080
 
 on devrait voir les db “information_schema” “mysql” et  “performance_schema”.

### pour voir les logs : 

    docker logs myphpapp-app -f•

...

à chaque fois qu'on raffraichit internet, on devrait voir la requête

Ctrl-c

(pour arrêter de suivre les logs)

    docker-compose ps

...

    docker-compose down


    docker-compose rm
    
    
Quels problèmes on a pour en faire un vrai environnement de dév ?

...