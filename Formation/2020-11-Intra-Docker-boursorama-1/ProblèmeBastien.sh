docker run --name debian1 -d -it debian bash
docker exec debian1 ls -la /var/log/
docker rm -f debian1

mkdir $PWD/logs_debian

docker run --name debian2 -v $PWD/logs_debian2:/var/log -d -it debian bash
docker exec debian2 ls -la /var/log/

echo "FROM debian:latest" > Dockerfile

echo "VOLUME ["/var/log/"]" >> Dockerfile

docker build -t bjoly-test-volume .

docker rm -f debian3

docker run --name debian3 -it -d  bjoly-test-volume bash

docker exec debian3 ls -la /var/log/

docker rm -f debian4

mkdir $PWD/logs_debian4

docker run --name debian4 -it -d -v $PWD/logs_debian4:/var/log/  bjoly-test-volume bash

docker exec debian4 ls -la /var/log/

docker exec debian4 touch /var/log/tototest.log

docker exec debian4 ls -la /var/log

ls $PWD/logs_debian4



