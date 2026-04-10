FROM node:24-alpine AS build-stage

WORKDIR /usr/src/app

EXPOSE 4200

COPY package* .

RUN npm i -g typescript && \
    npm i -g @angular/cli && \
    npm i && \
    adduser -D appuser . && \
    chown appuser .

COPY . .
USER appuser

CMD ["ng","serve","--host","0.0.0.0"]

FROM nginx:1.19-alpine
COPY --from=build-stage /usr/src/app/src /usr/share/nginx/html
