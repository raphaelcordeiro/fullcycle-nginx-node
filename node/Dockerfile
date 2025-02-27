FROM node:23-alpine3.20

LABEL authors="Raphael Cordeiro"

WORKDIR /app/

COPY app/ /app/

#Instalando dependencias
RUN npm install express --save && \
    npm install mysql2 --save

# Definindo na variável de ambiente a versão do dockerize a ser utilizada
ENV DOCKERIZE_VERSION v0.9.2

# Instalando Dockerize para dependencia de containers
RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

# Criando diretório para entrypoints
RUN mkdir -p /docker-entrypoint.d
COPY /conf/docker-entrypoint.sh /docker-entrypoint.d/docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.d/docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["node", "index.js"]