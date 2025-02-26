# 1. Node.js 환경에서 React 앱 빌드
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . . 

# ✅ Vite 프로젝트의 경우 `dist/` 폴더가 생성됨
RUN npm run build

# 2. Nginx를 사용하여 정적 파일 제공
FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# ✅ Vite 프로젝트는 `dist/` 폴더를 Nginx에 복사
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80