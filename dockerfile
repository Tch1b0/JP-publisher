FROM caddy:latest

WORKDIR /app

COPY ./src ./src
COPY ./Caddyfile ./Caddyfile

CMD [ "caddy", "run" ]