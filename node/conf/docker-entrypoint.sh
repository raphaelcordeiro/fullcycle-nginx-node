#!/bin/sh
set -e  # Faz o script parar se algum comando falhar

echo "Aguardando MySQL..."
dockerize -wait tcp://mysql:3306 -timeout 20s

echo "MySQL está pronto! Iniciando aplicação..."
exec "$@"  # Executa o comando CMD do Dockerfile (neste caso, "node index.js")