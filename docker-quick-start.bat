@echo off
REM Education Center API - Docker Quick Start Script
REM Windows batch file

echo.
echo 🐳 Education Center API - Docker Setup
echo =====================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not installed! Please install Docker Desktop.
    echo 📥 Download: https://www.docker.com/products/docker-desktop
    exit /b 1
)

echo ✅ Docker detected

REM Check if .env exists
if not exist .env (
    echo.
    echo ⚠️  .env file not found. Creating from template...
    copy .env.docker .env
    echo ✅ Created .env file
    echo 📝 Please update .env with your values (DB_PASSWORD, JWT_SECRET)
)

REM Menu
echo.
echo What would you like to do?
echo.
echo 1. Start containers (docker-compose up -d)
echo 2. Stop containers (docker-compose stop)
echo 3. View logs (docker-compose logs -f)
echo 4. Restart containers (docker-compose restart)
echo 5. Rebuild and start (docker-compose build --no-cache ^&^& docker-compose up -d)
echo 6. Delete everything (docker-compose down -v)
echo 7. Open API docs (http://localhost:3000/api/docs)
echo 8. Database console (psql)
echo 9. Exit
echo.

set /p choice="Enter your choice (1-9): "

if "%choice%"=="1" (
    echo Starting containers...
    docker-compose up -d
    echo.
    echo ✅ Containers started!
    echo 📚 API Docs: http://localhost:3000/api/docs
    timeout /t 3
) else if "%choice%"=="2" (
    echo Stopping containers...
    docker-compose stop
    echo ✅ Containers stopped!
) else if "%choice%"=="3" (
    echo Showing logs (Press Ctrl+C to exit)...
    docker-compose logs -f
) else if "%choice%"=="4" (
    echo Restarting containers...
    docker-compose restart
    echo ✅ Containers restarted!
) else if "%choice%"=="5" (
    echo Rebuilding and starting...
    docker-compose build --no-cache
    docker-compose up -d
    echo ✅ Done!
    echo 📚 API Docs: http://localhost:3000/api/docs
) else if "%choice%"=="6" (
    echo WARNING: This will delete all containers and database data!
    set /p confirm="Are you sure? (yes/no): "
    if /i "%confirm%"=="yes" (
        docker-compose down -v
        echo ✅ Everything deleted!
    ) else (
        echo Cancelled.
    )
) else if "%choice%"=="7" (
    start http://localhost:3000/api/docs
    echo Opening API docs...
) else if "%choice%"=="8" (
    docker-compose exec postgres psql -U education_user -d education_center
) else if "%choice%"=="9" (
    echo Goodbye!
    exit /b 0
) else (
    echo Invalid choice!
)

echo.
pause
