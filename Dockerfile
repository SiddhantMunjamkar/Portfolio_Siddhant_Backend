#Build Stage
FROM node:20-alpine AS builder


#Working Directory
WORKDIR /app

#copy package files
COPY package*.json ./
COPY tsconfig.json ./

#Install dependencies
RUN npm ci

#Copy source code
COPY src ./src

#Build TypeScript
RUN npm run build || npx tsc -b

#Production Stage
FROM node:20-alpine

#Working Directory
WORKDIR /app

#Copy package files
COPY package*.json ./

#Install dependencies
RUN npm ci --only=production

#Copy build files
COPY --from=builder /app/dist ./dist


#Expose port
EXPOSE 4000

#Default command (server) -
CMD ["node", "dist/server.js"]