FROM nginx:1.27.4-alpine3.21

LABEL authors="Raphael Cordeiro"

WORKDIR /

# Define o caminho da configuração do Nginx
ENV NGINX_CONFIG_FOLDER=/etc/nginx
ENV NGINX_CONF_FILE=nginx.conf

ENV DOCKERIZE_VERSION v0.9.2

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

# Remove o arquivo de configuração padrão do Nginx se ele existir
RUN set -eaux && \
    if [ -f "${NGINX_CONFIG_FOLDER}/conf.d/default.conf" ]; then \
        rm ${NGINX_CONFIG_FOLDER}/conf.d/default.conf; \
    fi;

# Copia o arquivo de configuração personalizado para o Nginx
COPY conf/${NGINX_CONF_FILE} ${NGINX_CONFIG_FOLDER}/nginx.conf

# Comando para iniciar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]