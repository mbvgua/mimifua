FROM node:24-alpine

# default workdir
WORKDIR /usr/src/app

EXPOSE 4200

# copy these early for layer caches
COPY package* .

# install needed deps
RUN npm i -g typescript
RUN npm i -g @angular/cli
RUN npm i

# copy the source code later. cache retained incase of changes
COPY . .

# server the app allowing acess from outside container
CMD ["ng","serve","--host","0.0.0.0"]
