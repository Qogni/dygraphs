FROM node

RUN apt-get update -y

RUN apt-get install -y \
    jq jsdoc-toolkit mksh pax python3

WORKDIR /build
