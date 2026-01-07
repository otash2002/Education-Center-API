# Stage 1: Build
FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Kerakli fayllarni ko'chirish
COPY --from=builder /app/dist ./dist
COPY prisma ./prisma
COPY wait-for-db.sh ./wait-for-db.sh
RUN chmod +x ./wait-for-db.sh

# Port va Healthcheck
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Prisma generate, migrate va start - hammasi bitta CMD ichida
CMD ["./wait-for-db.sh", "sh", "-c", "npx prisma generate && npx prisma migrate deploy && node dist/main.js"]