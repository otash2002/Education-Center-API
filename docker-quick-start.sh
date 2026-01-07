#!/bin/bash

# Education Center API - Docker Quick Start Script
# For Mac and Linux users

set -e

echo ""
echo "🐳 Education Center API - Docker Setup"
echo "====================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed! Please install Docker Desktop."
    echo "📥 Download: https://www.docker.com/products/docker-desktop"
    exit 1
fi

echo "✅ Docker detected"

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed!"
    exit 1
fi

echo "✅ Docker Compose detected"

# Check if .env exists
if [ ! -f .env ]; then
    echo ""
    echo "⚠️  .env file not found. Creating from template..."
    cp .env.docker .env
    echo "✅ Created .env file"
    echo "📝 Please update .env with your values (DB_PASSWORD, JWT_SECRET)"
fi

# Menu
echo ""
echo "What would you like to do?"
echo ""
echo "1. Start containers (docker-compose up -d)"
echo "2. Stop containers (docker-compose stop)"
echo "3. View logs (docker-compose logs -f)"
echo "4. Restart containers (docker-compose restart)"
echo "5. Rebuild and start (docker-compose build --no-cache && docker-compose up -d)"
echo "6. Delete everything (docker-compose down -v)"
echo "7. Open API docs (http://localhost:3000/api/docs)"
echo "8. Database console (psql)"
echo "9. Status (docker-compose ps)"
echo "10. Exit"
echo ""

read -p "Enter your choice (1-10): " choice

case $choice in
    1)
        echo "Starting containers..."
        docker-compose up -d
        echo ""
        echo "✅ Containers started!"
        echo "📚 API Docs: http://localhost:3000/api/docs"
        sleep 3
        ;;
    2)
        echo "Stopping containers..."
        docker-compose stop
        echo "✅ Containers stopped!"
        ;;
    3)
        echo "Showing logs (Press Ctrl+C to exit)..."
        docker-compose logs -f
        ;;
    4)
        echo "Restarting containers..."
        docker-compose restart
        echo "✅ Containers restarted!"
        ;;
    5)
        echo "Rebuilding and starting..."
        docker-compose build --no-cache
        docker-compose up -d
        echo "✅ Done!"
        echo "📚 API Docs: http://localhost:3000/api/docs"
        ;;
    6)
        echo "WARNING: This will delete all containers and database data!"
        read -p "Are you sure? (yes/no): " confirm
        if [ "$confirm" = "yes" ]; then
            docker-compose down -v
            echo "✅ Everything deleted!"
        else
            echo "Cancelled."
        fi
        ;;
    7)
        echo "Opening API docs..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            open http://localhost:3000/api/docs
        else
            xdg-open http://localhost:3000/api/docs
        fi
        ;;
    8)
        docker-compose exec postgres psql -U education_user -d education_center
        ;;
    9)
        docker-compose ps
        ;;
    10)
        echo "Goodbye!"
        exit 0
        ;;
    *)
        echo "Invalid choice!"
        ;;
esac

echo ""
read -p "Press Enter to continue..."
