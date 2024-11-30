# 使用較小的基礎映像，如 'node:alpine'
FROM node:alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# 使用最小化的運行時環境
FROM node:alpine
WORKDIR /app
COPY --from=build-stage /app ./
EXPOSE 3000
CMD ["node", "index.js"]
