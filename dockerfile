# ---- Build Stage ----
    FROM node:18-alpine AS build

    WORKDIR /app
    
    # Install build tools for native dependencies
    RUN apk add --no-cache python3 make g++
    
    # Install dependencies
    COPY package.json package-lock.json ./
    RUN npm ci
    
    # Copy all source files
    COPY . .
    
    # Build the Astro site
    RUN npm run build
    
    # ---- Production Stage ----
    FROM node:18-alpine AS prod
    
    WORKDIR /app
    
    # Copy only necessary files from build stage
    COPY --from=build /app/package.json ./
    COPY --from=build /app/node_modules ./node_modules
    COPY --from=build /app/dist ./dist
    
    # Expose the port Astro preview uses
    EXPOSE 4321
    
    # Start the site
    CMD ["npm", "run", "preview"]