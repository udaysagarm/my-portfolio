# Base Stage
FROM node:20-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Development Stage
FROM base as development
COPY . .
CMD ["sh", "-c", "npm run build:css & npm start"]

# Builder Stage
FROM base as builder
COPY . .
RUN npx tailwindcss -i ./src/input.css -o ./src/output.css --minify
RUN npm run build

# Production Stage
FROM nginx:alpine as production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
