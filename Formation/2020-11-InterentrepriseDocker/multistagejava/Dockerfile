FROM maven:3.6.3-jdk-11 AS build
WORKDIR /app
COPY pom.xml .
COPY src .

RUN ["mvn", "install"]

FROM openjdk
COPY --from=build /app/target/arti-1.0-SNAPSHOT.jar /app/java.jar
EXPOSE 8080
CMD ["java", "-jar", "/app/java.jar"]
