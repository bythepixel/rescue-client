FROM node:10.11.0-jessie

RUN apt-get update -y \
  && apt-get install -y \
  && rm -rf /var/lib/apt/lists/*

COPY . /srv/rescue-client
WORKDIR /srv/rescue-client

# RUN npm install
# RUN node_modules/nuxt/bin/nuxt build
# RUN node_modules/nuxt/bin/nuxt start

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
