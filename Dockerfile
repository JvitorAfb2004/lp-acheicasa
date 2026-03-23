# Etapa 1: Build
FROM node:20-alpine AS builder
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Execução (serve arquivos estáticos)
FROM node:20-alpine
WORKDIR /src
RUN npm install -g serve
COPY --from=builder /src/out ./out
EXPOSE 3027
CMD ["serve", "-s", "out", "-l", "3027"]
