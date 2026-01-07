# 🐳 Docker Configuration - Complete Setup

## Files Created

✅ **Dockerfile** - Multi-stage build for optimized images
✅ **docker-compose.yml** - Orchestrates API + PostgreSQL
✅ **docker-compose.prod.yml** - Production setup
✅ **.dockerignore** - Excludes unnecessary files
✅ **.env.docker** - Environment template
✅ **DOCKER_GUIDE.md** - Complete Docker documentation
✅ **docker-quick-start.bat** - Windows quick start menu
✅ **docker-quick-start.sh** - Mac/Linux quick start menu

---

## 🚀 Quick Start (3 Steps)

### Step 1: Copy Environment File
```bash
copy .env.docker .env
```

### Step 2: Update .env (Optional but Recommended)
```
DB_PASSWORD=change_to_secure_password
JWT_SECRET=change_to_secure_key
```

### Step 3: Start Docker
**Windows:**
```bash
docker-quick-start.bat
# Select option 1
```

**Mac/Linux:**
```bash
chmod +x docker-quick-start.sh
./docker-quick-start.sh
# Select option 1
```

**Or direct command:**
```bash
docker-compose up -d
```

---

## ✅ What Happens

When you run `docker-compose up -d`:

1. ✅ Builds Docker image for NestJS API
2. ✅ Starts PostgreSQL database container
3. ✅ Starts NestJS API container
4. ✅ Runs database migrations automatically
5. ✅ Exposes API on `http://localhost:3000`
6. ✅ Exposes Swagger docs on `http://localhost:3000/api/docs`
7. ✅ Database accessible at `localhost:5432`

---

## 🎯 Access Your Services

| Service | URL | Credentials |
|---------|-----|-------------|
| **API** | http://localhost:3000/api | N/A |
| **Swagger Docs** | http://localhost:3000/api/docs | N/A |
| **PostgreSQL** | localhost:5432 | User: education_user<br>Pass: education_password |

---

## 📊 Docker Architecture

```
┌─────────────────────────────────────┐
│      Docker Network (Bridge)        │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────────────────────────┐  │
│  │   NestJS API Container       │  │
│  │   Port: 3000:3000            │  │
│  │   Image: node:22-alpine      │  │
│  │   Volume: ./src (dev)        │  │
│  │   Health: Active             │  │
│  └──────────────────────────────┘  │
│            ↓ (tcp)                  │
│  ┌──────────────────────────────┐  │
│  │   PostgreSQL Container       │  │
│  │   Port: 5432:5432            │  │
│  │   Image: postgres:16-alpine  │  │
│  │   Volume: postgres_data      │  │
│  │   Health: Healthy            │  │
│  └──────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

---

## 🔄 Common Commands

### Start Services
```bash
docker-compose up -d
```

### View Status
```bash
docker-compose ps
```

### View Logs
```bash
docker-compose logs -f          # All services
docker-compose logs -f api      # Only API
docker-compose logs -f postgres # Only Database
```

### Stop Services
```bash
docker-compose stop             # Keep data
docker-compose down             # Remove containers
docker-compose down -v          # Remove everything including data
```

### Restart
```bash
docker-compose restart          # All services
docker-compose restart api      # Only API
```

### Rebuild
```bash
docker-compose build --no-cache
docker-compose up -d
```

### Access Database
```bash
docker-compose exec postgres psql -U education_user -d education_center
```

### Execute Commands in Container
```bash
docker-compose exec api npm test
docker-compose exec api npm run build
```

---

## 🛡️ Security Best Practices

### ⚠️ Before Production:

1. **Change JWT_SECRET**
   ```env
   JWT_SECRET=your-very-long-random-string-here-at-least-32-chars
   ```

2. **Change DB_PASSWORD**
   ```env
   DB_PASSWORD=SecurePasswordWithNumbers123!@#
   ```

3. **Use Environment-specific configs**
   - `docker-compose.yml` for development
   - `docker-compose.prod.yml` for production

4. **Enable HTTPS/SSL**
   ```yaml
   # Add nginx reverse proxy container
   nginx:
     image: nginx:alpine
     ports:
       - "443:443"
     volumes:
       - ./ssl:/etc/nginx/ssl
   ```

5. **Set resource limits**
   ```yaml
   api:
     deploy:
       resources:
         limits:
           cpus: '1'
           memory: 512M
   ```

6. **Use secrets management**
   - AWS Secrets Manager
   - HashiCorp Vault
   - Docker Secrets

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Database Connection Error
```bash
docker-compose logs postgres
docker-compose restart postgres
```

### API Won't Start
```bash
docker-compose logs api
docker-compose build --no-cache api
docker-compose up api
```

### Reset Everything
```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

### Check Container Health
```bash
docker-compose ps
docker inspect education_api
docker inspect education_db
```

---

## 📈 Performance Optimization

### Development
```yaml
# docker-compose.yml
volumes:
  - ./src:/app/src  # Hot reload
```

### Production
```yaml
# docker-compose.prod.yml
# Remove volume mounts
# Add health checks
# Set restart policies
```

---

## 🚀 Deployment Options

### Option 1: AWS ECS
```bash
# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com
docker tag education-api:latest <account>.dkr.ecr.us-east-1.amazonaws.com/education-api:latest
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/education-api:latest
```

### Option 2: DigitalOcean App Platform
```bash
# Deploy directly from GitHub + Docker
# Push to DOCR (DigitalOcean Container Registry)
```

### Option 3: Heroku
```bash
# Login and push
heroku login
heroku container:push web --app education-center-api
heroku container:release web --app education-center-api
```

### Option 4: Railway.app
```bash
# Connect GitHub repo and Railway automatically deploys!
```

---

## 📝 Environment Variables

### Required
```env
DATABASE_URL=postgresql://user:password@host:5432/db
JWT_SECRET=your-secret-key
```

### Optional
```env
NODE_ENV=production              # development|production
JWT_EXPIRATION=7d                # Token expiration
DB_USER=education_user           # PostgreSQL user
DB_PASSWORD=education_password   # PostgreSQL password
DB_NAME=education_center         # Database name
```

---

## ✨ Features Included

✅ Multi-stage build (optimized image size)
✅ Alpine Linux base (lightweight)
✅ Health checks (automatic restarts)
✅ Volume persistence (data survives container restart)
✅ Environment variables (easy configuration)
✅ Docker Compose (simple orchestration)
✅ Network isolation (safe communication)
✅ Automatic migrations (schema up-to-date)
✅ Development hot-reload (live code changes)
✅ Production-ready configuration

---

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)
- [Node.js Docker Image](https://hub.docker.com/_/node)
- [NestJS Deployment](https://docs.nestjs.com/deployment)

---

## 🎓 Docker Learning Path

1. ✅ Basic docker-compose setup ← **You are here**
2. Multi-container networking
3. Volume management
4. Docker networking & DNS
5. Image optimization
6. Production deployment
7. Docker security best practices
8. Kubernetes (Helm charts)

---

## 💡 Next Steps

1. ✅ Run `docker-compose up -d`
2. ✅ Test at http://localhost:3000/api/docs
3. ✅ Register a user and test API
4. ✅ Update `.env` with secure values
5. ✅ Deploy to cloud using DOCKER_GUIDE.md

**You're ready to containerize and deploy!** 🎉
