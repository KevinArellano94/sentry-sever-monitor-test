FROM denoland/deno:2.1.10

# Set working directory
WORKDIR /app

# Copy the project files
COPY . .

# Set environment variable
ENV SENTRY_DSN=${sentry_dsn}

# Cache dependencies
RUN deno cache main.ts

# Run the application
CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-hrtime", "--allow-sys", "main.ts"]
