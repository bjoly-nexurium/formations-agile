docker build -t dev .

docker ps

docker exec -it CONTAINER ID sh

docker run -p 80:80 -v $PWD:/var/www/html dev

Se rendre sur localhost:80


docker push eu.gcr.io/formation-docker-intra/php:gautier
