# Docker Getting Started Guide

Complete guide to deploy your Varun TM portfolio using Docker and Docker Compose.

---

## 📋 What's Included

Your portfolio now has complete Docker support:

```
✅ Dockerfile              - Multi-stage optimized build (~200MB)
✅ docker-compose.yml      - Development environment
✅ docker-compose.prod.yml - Production environment
✅ nginx.conf              - Development reverse proxy
✅ nginx.prod.conf         - Production reverse proxy with SSL
✅ .dockerignore          - Build optimization
✅ docker-helper.sh       - Linux/Mac helper script
✅ docker-helper.bat      - Windows helper script
✅ .env.docker            - Development env vars
✅ .env.docker.prod       - Production env vars
✅ GitHub Actions CI/CD   - Automated builds
✅ DOCKER.md              - Full documentation
✅ DOCKER-COMMANDS.md     - Command reference
```

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Docker

**Windows/Mac:**
- Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Install and launch

**Linux:**
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### Step 2: Clone Repository

```bash
git clone https://github.com/Varun-TM/Personal-Portfolios.git
cd Personal-Portfolios
```

### Step 3: Start Container

**Linux/Mac:**
```bash
chmod +x docker-helper.sh
./docker-helper.sh dev-up
```

**Windows:**
```bash
docker-helper.bat dev-up
```

**Or with Docker Compose directly:**
```bash
docker-compose up -d
```

**Access at:** http://localhost:3000 🎉

---

## 📱 Helper Scripts

Your portfolio includes easy-to-use helper scripts!

### Linux/Mac (`docker-helper.sh`)

```bash
# Development
./docker-helper.sh dev-up        # Start development
./docker-helper.sh logs          # View logs
./docker-helper.sh rebuild       # Rebuild after changes
./docker-helper.sh status        # Check status
./docker-helper.sh shell         # Access container
./docker-helper.sh health        # Health check
./docker-helper.sh down          # Stop

# Production
./docker-helper.sh prod-up       # Start production
./docker-helper.sh prod-logs     # Production logs
./docker-helper.sh prod-rebuild  # Rebuild production
./docker-helper.sh prod-down     # Stop production
./docker-helper.sh prod-clean    # Clean up production

# Other
./docker-helper.sh build         # Build image
./docker-helper.sh stats         # Resource usage
./docker-helper.sh help          # Show all commands
```

### Windows (`docker-helper.bat`)

```batch
REM Same commands as Linux/Mac
docker-helper.bat dev-up
docker-helper.bat logs
docker-helper.bat prod-up
docker-helper.bat help
```

---

## 🐳 Docker Compose Commands

### Development

```bash
# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Rebuild after changes
docker-compose up --build -d

# Stop
docker-compose down
```

### Production

```bash
# Start with production config
docker-compose -f docker-compose.prod.yml up -d

# View production logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop production
docker-compose -f docker-compose.prod.yml down
```

---

## 🏗️ Architecture

### Development Setup

```
┌─────────────────────────────────┐
│     Your Browser (port 3000)    │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│    Nginx Reverse Proxy          │
│    (Port 80 / 3000)             │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│  Next.js Application Container  │
│  (Port 3000)                    │
└─────────────────────────────────┘
```

### Production Setup

```
┌─────────────────────────────────┐
│  Your Domain (HTTPS)            │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│ Nginx with SSL/TLS & Caching    │
│ (Ports 80, 443)                 │
│ - SSL Certificate Termination   │
│ - Static File Caching           │
│ - Security Headers              │
│ - Rate Limiting                 │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│  Next.js Application Container  │
│  (Port 3000)                    │
│ - Health Checks                 │
│ - Auto-restart                  │
│ - Resource Limits               │
└─────────────────────────────────┘
```

---

## 🎯 Common Workflows

### Development Workflow

```bash
# 1. Start containers
docker-compose up -d

# 2. Make code changes (containers auto-reload)
# Edit files in your editor

# 3. Check logs if needed
docker-compose logs -f

# 4. Rebuild if dependencies changed
docker-compose up --build -d

# 5. Stop when done
docker-compose down
```

### Production Deployment

```bash
# 1. Prepare environment
cp .env.docker.prod .env.production

# 2. Update domain in .env.production
# NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# 3. Generate SSL certificates
mkdir -p ssl
openssl req -x509 -newkey rsa:4096 \
  -keyout ssl/key.pem \
  -out ssl/cert.pem \
  -days 365 -nodes

# 4. Start production
docker-compose -f docker-compose.prod.yml up -d

# 5. Check status
docker-compose -f docker-compose.prod.yml ps

# 6. View logs
docker-compose -f docker-compose.prod.yml logs -f
```

### CI/CD with GitHub Actions

The `.github/workflows/docker-build-push.yml` automatically:

1. Builds Docker image on push to main
2. Pushes to GitHub Container Registry (ghcr.io)
3. Scans for vulnerabilities
4. Creates image tags for versions

**Push to trigger:**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 📦 Image Optimization

### Image Details

- **Base:** Alpine Linux (~5MB)
- **Runtime:** Node.js 18 Alpine
- **Build Stage:** Full build environment
- **Final Size:** ~200MB (production optimized)
- **Layers:** Minimal layer count
- **Speed:** ~2-3 minutes to build

### Multi-Stage Build Process

```dockerfile
Stage 1: Builder
  ├── Install dependencies
  ├── Copy source code
  ├── Run build
  └── Optimize bundle

Stage 2: Runtime
  ├── Copy built files only
  ├── Install production deps only
  ├── Create non-root user
  └── Setup health checks
```

---

## 🔐 Security Features

✅ **Non-root user** - Runs as 'nextjs' user  
✅ **Read-only filesystem** - Optional read-only mode  
✅ **Health checks** - Automatic container monitoring  
✅ **Security headers** - CSP, X-Frame-Options, etc.  
✅ **SSL/TLS** - Full HTTPS support  
✅ **Rate limiting** - DDoS protection  
✅ **Minimal base image** - Reduced attack surface  
✅ **No secrets in image** - Environment variables only  

---

## 🚢 Deploy to Cloud

### AWS ECS

```bash
# Create ECR repo
aws ecr create-repository --repository-name varun-portfolio

# Build and push
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin \
  <ACCOUNT>.dkr.ecr.us-east-1.amazonaws.com

docker build -t varun-portfolio .
docker tag varun-portfolio:latest \
  <ACCOUNT>.dkr.ecr.us-east-1.amazonaws.com/varun-portfolio:latest
docker push \
  <ACCOUNT>.dkr.ecr.us-east-1.amazonaws.com/varun-portfolio:latest
```

### Google Cloud Run

```bash
# Build and push to GCR
gcloud builds submit --tag gcr.io/PROJECT_ID/varun-portfolio

# Deploy
gcloud run deploy varun-portfolio \
  --image gcr.io/PROJECT_ID/varun-portfolio \
  --platform managed \
  --region us-central1 \
  --port 3000
```

### Azure Container Instances

```bash
# Push to ACR
az acr build --registry myregistry \
  --image varun-portfolio:latest .

# Deploy
az container create \
  --resource-group mygroup \
  --name varun-portfolio \
  --image myregistry.azurecr.io/varun-portfolio:latest \
  --ports 3000 \
  --cpu 1 --memory 0.5
```

### Docker Hub

```bash
# Login
docker login

# Push
docker tag varun-portfolio:latest username/varun-portfolio:latest
docker push username/varun-portfolio:latest
```

---

## 📊 Monitoring & Logs

### View Logs

```bash
# Development
docker-compose logs -f portfolio

# Production
docker-compose -f docker-compose.prod.yml logs -f portfolio

# Nginx access logs
docker-compose exec nginx tail -f /var/log/nginx/access.log

# Last 50 lines
docker-compose logs --tail 50 portfolio

# With timestamps
docker-compose logs --timestamps portfolio
```

### Resource Monitoring

```bash
# Real-time stats
docker stats

# Specific container
docker stats portfolio

# Check resource limits
docker inspect portfolio | grep -A 10 Memory
```

### Health Check

```bash
# Check if healthy
docker-compose exec portfolio wget -q --spider http://localhost:3000

# View health status
docker ps --format "{{.Names}} {{.Status}}"
```

---

## 🐛 Troubleshooting

### Container Won't Start

```bash
# Check logs
docker-compose logs portfolio

# Try rebuilding
docker-compose up --build -d

# Remove and start fresh
docker-compose down -v
docker-compose up -d
```

### Port Already in Use

```bash
# Use different port
docker run -p 8000:3000 varun-portfolio:latest

# Or stop conflicting container
docker stop <container_name>
```

### Out of Disk Space

```bash
# Clean everything
docker system prune -a --volumes

# Check disk usage
docker system df
```

### Nginx Connection Refused

```bash
# Check services running
docker-compose ps

# Restart services
docker-compose restart

# Check portfolio logs
docker-compose logs portfolio
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `DOCKER.md` | Comprehensive Docker guide |
| `DOCKER-COMMANDS.md` | Command reference |
| `DOCKER-GETTING-STARTED.md` | This file |
| `Dockerfile` | Image definition |
| `docker-compose.yml` | Development orchestration |
| `docker-compose.prod.yml` | Production orchestration |
| `nginx.conf` | Development proxy config |
| `nginx.prod.conf` | Production proxy with SSL |
| `.env.docker` | Development environment |
| `.env.docker.prod` | Production environment |

---

## ✅ Verification Checklist

After starting containers:

- [ ] Access http://localhost:3000 in browser
- [ ] Portfolio loads without errors
- [ ] Animations run smoothly
- [ ] Links work correctly
- [ ] Form submission works (console feedback)
- [ ] View `docker-compose logs` - no errors
- [ ] Run health check: `./docker-helper.sh health`

---

## 🚀 Next Steps

### Development
1. ✅ Run locally: `docker-compose up -d`
2. ✅ Make changes to code
3. ✅ Containers auto-reload
4. ✅ Stop when done: `docker-compose down`

### Production
1. ✅ Set up SSL certificates
2. ✅ Update environment variables
3. ✅ Run: `docker-compose -f docker-compose.prod.yml up -d`
4. ✅ Monitor: `docker-compose logs -f`

### Cloud Deployment
1. ✅ Choose cloud provider (AWS, Google Cloud, Azure)
2. ✅ Push image to registry
3. ✅ Deploy container
4. ✅ Configure domain/SSL
5. ✅ Monitor and scale

---

## 📞 Support

**Documentation:**
- Full guide: See `DOCKER.md`
- Commands: See `DOCKER-COMMANDS.md`
- Deployment: See `DEPLOYMENT.md`

**Quick Help:**
```bash
./docker-helper.sh help
docker-compose --help
docker --help
```

---

## 🎯 Summary

Your Varun TM portfolio is now:

✅ **Containerized** - Ready to run anywhere  
✅ **Production-optimized** - Multi-stage build  
✅ **SSL-ready** - HTTPS support included  
✅ **Cloud-native** - Deploy to any platform  
✅ **Fully documented** - Guides and scripts  
✅ **CI/CD enabled** - GitHub Actions included  
✅ **Secure** - Best practices implemented  

**Start developing:** `docker-compose up -d`

**Deploy to production:** `docker-compose -f docker-compose.prod.yml up -d`

---

**Your portfolio is Docker-ready! 🐳🚀**
