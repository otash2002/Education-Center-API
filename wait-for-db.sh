#!/bin/sh
set -e

echo "Waiting for database at postgres:5432..."
timeout=30
while [ $timeout -gt 0 ]; do
  if node -e "require('net').createConnection({host: 'postgres', port: 5432}, () => process.exit(0))" > /dev/null 2>&1; then
    echo "Database is up!"
    break
  fi
  echo "Database is unavailable - sleeping..."
  timeout=$((timeout - 1))
  sleep 1
done

echo "Starting application..."
exec "$@"
