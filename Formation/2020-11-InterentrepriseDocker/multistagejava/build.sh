mvn test
mvn package

docker build -t my_multistage_java:$1 .