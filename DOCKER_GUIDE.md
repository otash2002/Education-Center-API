# 🐳 Docker Setup Guide for Education Center API

## Prerequisites
- Docker installed: https://www.docker.com/products/docker-desktop
- Docker Compose (usually comes with Docker Desktop)

## Quick Start

### 1️⃣ Clone & Setup
```bash
cd c:\Users\user\education-center-api
```

### 2️⃣ Create Environment File
```bash
# Copy the template
copy .env.docker .env

# Edit .env and change these values:
# DB_PASSWORD=your_secure_password
# JWT_SECRET=your_super_secret_key
```

### 3️⃣ Start the Containers
```bash
docker-compose up -d
```

This will:
- ✅ Build the Docker image for the API
- ✅ Start PostgreSQL database container
- ✅ Start the NestJS API container
- ✅ Run migrations automatically
- ✅ Expose API on port 3000

### 4️⃣ Verify It's Running
```bash
# Check containers
docker-compose ps

# View logs
docker-compose logs -f api

# Test the API
curl http://localhost:3000/api
```

### 5️⃣ Access Services

| Service | URL |
|---------|-----|
| API Swagger Docs | http://localhost:3000/api/docs |
| PostgreSQL | localhost:5432 |

---

## Common Docker Commands

### View Logs
```bash
# View all logs
docker-compose logs

# View only API logs
docker-compose logs -f api

# View only database logs
docker-compose logs -f postgres
```

### Stop Containers
```bash
# Stop but keep data
docker-compose stop

# Stop and remove (keeps database volume)
docker-compose down

# Stop and remove everything including database
docker-compose down -v
```

### Restart
```bash
# Restart all services
docker-compose restart

# Restart only API
docker-compose restart api

# Restart only database
docker-compose restart postgres
```

### Execute Commands
```bash
# Run shell in API container
docker-compose exec api sh

# Run shell in database container
docker-compose exec postgres psql -U education_user -d education_center

# View current environment
docker-compose exec api printenv | grep DATABASE
```

### Build & Run (without cache)
```bash
# Rebuild image (after code changes)
docker-compose build --no-cache

# Then start
docker-compose up -d
```

---

## Database Management

### Access PostgreSQL Console
```bash
docker-compose exec postgres psql -U education_user -d education_center
```

**Useful SQL Commands:**
```sql
-- List all tables
\dt

-- View users
SELECT * FROM staffs;

-- View students
SELECT * FROM students;

-- Count records
SELECT COUNT(*) FROM staffs;

-- Exit
\q
```

### Backup Database
```bash
docker-compose exec postgres pg_dump -U education_user education_center > backup.sql
```

### Restore Database
```bash
docker-compose exec -T postgres psql -U education_user education_center < backup.sql
```

---

## Development vs Production

### Development (Current)
```bash
docker-compose up -d
# Volumes allow live code reloading
# Database persists in docker volume
```

### Production Setup (Recommended Changes)
For production, create `docker-compose.prod.yml`:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - education_network
    restart: always

  api:
    image: education-center-api:latest
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://${DB_USER}:${DB_PASSWORD}@postgres:5432/${DB_NAME}
      JWT_SECRET: ${JWT_SECRET}
    ports:
      - "3000:3000"
    depends_on:
      - postgres
    networks:
      - education_network
    restart: always

volumes:
  postgres_data:

networks:
  education_network:
```

**Run production:**
```bash
docker-compose -f docker-compose.prod.yml up -d
```

---

## Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Database Connection Failed
```bash
# Check if postgres is healthy
docker-compose ps

# View postgres logs
docker-compose logs postgres

# Restart database
docker-compose restart postgres
```

### API Won't Start
```bash
# Check logs
docker-compose logs api

# Rebuild
docker-compose build --no-cache api
docker-compose up api
```

### Reset Everything
```bash
# Remove all containers and volumes
docker-compose down -v

# Rebuild and start fresh
docker-compose build --no-cache
docker-compose up -d
```

---

## Environment Variables (.env)

```env
# Database
DB_USER=education_user              # PostgreSQL username
DB_PASSWORD=secure_password         # Change this!
DB_NAME=education_center            # Database name

# Application
NODE_ENV=production                 # development or production
JWT_SECRET=super_secret_key_here    # Change this!
JWT_EXPIRATION=7d                   # Token expiration time

# Generated automatically:
# DATABASE_URL=postgresql://user:pass@postgres:5432/db_name
```

---

## Performance Tips

1. **Use Named Volumes**: Data persists between restarts
2. **Health Checks**: Containers wait for dependencies
3. **Multi-stage Build**: Smaller final image size
4. **Alpine Images**: Smaller base images

---

## File Structure

```
education-center-api/
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Development setup
├── .dockerignore           # Files to ignore in Docker
├── .env.docker            # Environment template
├── src/
├── prisma/
└── package.json
```

---

## Testing After Docker Start

### Register Staff (SUPERADMIN)
```bash
curl -X POST http://localhost:3000/api/auth/staff/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Super",
    "lastName": "Admin",
    "username": "superadmin",
    "password": "password123",
    "confirmPassword": "password123",
    "role": "SUPERADMIN",
    "position": "Administrator"
  }'
```

### View Swagger Documentation
Open: http://localhost:3000/api/docs

---

## Next Steps

1. ✅ Setup Docker Compose
2. ✅ Configure `.env` file with secure values
3. ✅ Run `docker-compose up -d`
4. ✅ Test API at http://localhost:3000/api/docs
5. ✅ Deploy to cloud (AWS, DigitalOcean, Heroku, etc.)

## Cloud Deployment Options

- **AWS ECS/ECR**: Container orchestration
- **DigitalOcean App Platform**: Simple Docker deployment
- **Heroku**: Container registry support
- **Railway.app**: Easy Node.js deployment
- **Render**: Free tier available

Happy containerizing! 🐳
