FROM node:15.3.0-alpine3.10

LABEL maintainer="chris@adadev.org"

RUN apk add --no-cache bash

RUN mkdir /app

WORKDIR /app

# Add entire student fork (overwrites previously added files)
ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

# for Testing
# ADD . .

RUN npm install
RUN chmod +x test.sh
