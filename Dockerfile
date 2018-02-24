FROM nyanpass/php5.5:fpm-alpine
# RUN apk add --no-cache node
# ADD pomf/ /code
WORKDIR /code
RUN yarn

CMD sh
