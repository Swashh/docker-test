FROM cypress/included:13.6.0

RUN node --version
RUN npm --version

WORKDIR /e2e

COPY package.json package-lock.json ./
COPY cypress /e2e/cypress
COPY cypress.config.js /e2e/cypress.config.js

RUN npm ci

RUN npx cypress verify

CMD ["npx", "cypress", "run"]


