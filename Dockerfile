# Base image (Node.js for build)
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app files and build the React app
COPY . .
RUN npm run build

# Base image for serving (Nginx)
FROM nginx:latest

# Remove default Nginx configuration
RUN rm -rf /etc/nginx/conf.d

# Copy custom Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy build files to Nginx public folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]