FROM node:16-alpine3.11

LABEL maintainer="chris@adadev.org"

RUN mkdir /app

WORKDIR /app

# Add entire student fork (overwrites previously added files)
ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

# for Testing
# ADD . .

ADD ./test.sh .

RUN yarn install --frozen-lockfile
RUN chmod +x test.sh
