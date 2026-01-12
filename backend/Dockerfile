FROM ubuntu:latest AS build

# Instalar dependências e Maven
RUN apt-get update && \
    apt-get install -y openjdk-21-jdk maven

# Criar diretório de trabalho
WORKDIR /app

# Copiar arquivos do projeto
COPY . .

# Compilar o projeto (sem testes, se quiser mais rápido)
RUN mvn clean install -DskipTests

# Imagem final com JDK 21
FROM openjdk:21-jdk-slim

WORKDIR /app
EXPOSE 8080

# Copiar o .jar gerado da etapa de build
COPY --from=build /app/target/*.jar app.jar


# Executar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]