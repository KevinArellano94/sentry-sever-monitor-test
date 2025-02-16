# Use the official Deno image
FROM denoland/deno:alpine-1.40.3

# Set the working directory inside the container
WORKDIR /app

# Copy the project files
COPY . .

# Set necessary environment variables
ENV SENTRY_DSN=${sentry_dsn}

# Cache dependencies for faster builds
RUN deno cache main.ts

# Expose any required ports (if needed)
# EXPOSE 8000

# Run the Deno application
CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-hrtime", "--allow-sys", "main.ts"]
