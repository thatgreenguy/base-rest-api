FROM node:8
MAINTAINER thatgreenguy

# Install nodemon
RUN npm install -g nodemon

# Provides cached layer for node_modules
ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["nodemon", "/src/index.js"]
