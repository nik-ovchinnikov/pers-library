FROM openjdk:11
WORKDIR /app
ENTRYPOINT ["./mvnw", "spring-boot:run"]