# 1. Build Stage
FROM node:24-alpine AS builder

WORKDIR /src

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the code and build
COPY . .
RUN npm run build

# 2. Run Stage
FROM node:24-alpine AS runner

WORKDIR /app

# Copy the output from the builder stage
# Nuxt 3 outputs the standalone server to .output
COPY --from=builder /src/.output ./.output

# Optional: Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# Start the server using the nitro entry point
CMD ["node", ".output/server/index.mjs"]