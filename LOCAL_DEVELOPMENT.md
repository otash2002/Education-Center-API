# 🏃 Local Development (No Docker Container for API)

## Setup: Run Only Database in Docker, API Locally

This approach runs **PostgreSQL in Docker** but the **NestJS API on your machine** (better for development).

---

## 🚀 Quick Start

### Step 1: Start Only PostgreSQL Container
```bash
docker-compose -f docker-compose.local.yml up -d
```

This starts:
- ✅ PostgreSQL database on `localhost:5432`
- ✅ No API container (you'll run it locally)

### Step 2: Update .env File
```bash
# Copy template
copy .env.docker .env

# Or edit directly - these are the defaults:
DB_USER=education_user
DB_PASSWORD=education_password
DB_NAME=education_center
NODE_ENV=development
JWT_SECRET=your-secret-key-here
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Run Database Migrations
```bash
npx prisma migrate dev
```

### Step 5: Start the API Locally
```bash
npm run start:dev
```

This starts the **NestJS development server** with hot-reload on `http://localhost:3000`

---

## ✅ Verify Everything Works

### Check PostgreSQL is Running
```bash
# Connect to database
docker-compose -f docker-compose.local.yml exec postgres psql -U education_user -d education_center

# In psql, run:
\dt              # List all tables
SELECT COUNT(*) FROM staffs;  # Check staffs table
\q              # Exit
```

### Check API is Running
```bash
curl http://localhost:3000/api
# or
curl -X GET http://localhost:3000/api/docs
```

### Open in Browser
- **API**: http://localhost:3000/api
- **Swagger Docs**: http://localhost:3000/api/docs

---

## 📋 All Available Commands

### Database Commands
```bash
# Start only database (local dev)
docker-compose -f docker-compose.local.yml up -d

# Stop database
docker-compose -f docker-compose.local.yml stop

# View database logs
docker-compose -f docker-compose.local.yml logs -f postgres

# Remove database
docker-compose -f docker-compose.local.yml down -v

# Access database console
docker-compose -f docker-compose.local.yml exec postgres psql -U education_user -d education_center
```

### API Commands (Local Machine)
```bash
# Install dependencies
npm install

# Run migrations
npx prisma migrate dev

# Start dev server (hot-reload)
npm run start:dev

# Start production server
npm run start:prod

# Build for production
npm run build

# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Lint code
npm run lint
```

### Prisma ORM Commands
```bash
# Open database studio (visual editor)
npx prisma studio

# Create new migration
npx prisma migrate dev --name migration_name

# Run migrations
npx prisma migrate deploy

# Reset database (WARNING: deletes all data!)
npx prisma migrate reset

# Generate Prisma client
npx prisma generate
```

---

## 🔄 Development Workflow

```
┌────────────────────────────────────────┐
│  PostgreSQL Container (Docker)         │
│  localhost:5432                        │
└────────────────────────────────────────┘
           ↑
           │ TCP Connection
           ↓
┌────────────────────────────────────────┐
│  NestJS API (Local Machine)            │
│  http://localhost:3000                 │
│  - Hot reload enabled                  │
│  - Direct console access               │
│  - Easy debugging                      │
└────────────────────────────────────────┘
```

---

## 🎯 Why This Approach?

| Aspect | Full Docker | Local Dev (Recommended) |
|--------|-------------|----------------------|
| **Setup Time** | Slower | ⚡ Faster |
| **Code Changes** | Rebuild needed | Hot-reload |
| **Debugging** | Docker logs | Console output |
| **Database Access** | docker-compose exec | Direct connection |
| **Development Speed** | Slower | ⚡ Faster |
| **Production Parity** | Exact match | Slight difference |

---

## 🛠️ Troubleshooting

### Port 5432 Already in Use
```bash
# Windows
netstat -ano | findstr :5432
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5432 | xargs kill -9
```

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Database Connection Error
```bash
# Check if database is running
docker-compose -f docker-compose.local.yml ps

# View logs
docker-compose -f docker-compose.local.yml logs postgres

# Restart database
docker-compose -f docker-compose.local.yml restart postgres
```

### Can't Connect to PostgreSQL
```bash
# Verify DATABASE_URL in .env
cat .env | grep DATABASE_URL

# Should be:
DATABASE_URL=postgresql://education_user:education_password@localhost:5432/education_center

# Test connection
psql postgresql://education_user:education_password@localhost:5432/education_center
```

### API Won't Start
```bash
# Check Node version (need 18+)
node --version

# Clear node_modules
rm -r node_modules package-lock.json
npm install

# Try again
npm run start:dev
```

---

## 📊 VS Code Debug Setup

Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug NestJS",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/dist/main.js",
      "preLaunchTask": "npm: start:dev",
      "console": "integratedTerminal"
    }
  ]
}
```

---

## 🚀 Going Full Docker Later

When ready for full containerization:

```bash
# Stop local database
docker-compose -f docker-compose.local.yml down

# Start full stack (both API + Database in Docker)
docker-compose up -d
```

---

## 📝 Environment Variables

```env
# Database (PostgreSQL running in Docker)
DATABASE_URL=postgresql://education_user:education_password@localhost:5432/education_center

# Node Environment
NODE_ENV=development

# JWT
JWT_SECRET=your-development-secret-key
JWT_EXPIRATION=7d
```

---

## ✨ This Setup is Perfect For:

✅ **Local Development** - Fast iterations  
✅ **Testing** - Quick test runs  
✅ **Debugging** - Direct console access  
✅ **Learning** - See exactly what's happening  
✅ **Rapid Development** - No build times  

Switch to full Docker later for **production deployment**! 🚀

---

## 🔗 Quick Reference

```bash
# Everything in one terminal window:

# Terminal 1: Start Database
docker-compose -f docker-compose.local.yml up

# Terminal 2: Start API
npm run start:dev

# Terminal 3: Run Prisma Studio (optional)
npx prisma studio

# Now test in browser:
# http://localhost:3000/api/docs
```

Happy coding! 💻
