#  Install base image 

FROM node:alpine

#   Setup working directory for the code files

WORKDIR /app

# setup Copy for package.json which runs only when there is change in dependency

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","start"]