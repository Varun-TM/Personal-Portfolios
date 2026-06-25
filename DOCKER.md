# Docker Deployment Guide

Deploy your Varun TM portfolio using Docker and Docker Compose.

## 📋 Prerequisites

- Docker installed ([docker.com](https://www.docker.com/products/docker-desktop))
- Docker Compose installed (comes with Docker Desktop)
- Git (for cloning repository)

### Verify Installation

```bash
docker --version
docker-compose --version
```

---

## 🚀 Quick Start (Development)

### 1. Clone Repository

```bash
git clone https://github.com/Varun-TM/Personal-Portfolios.git
cd Personal-Portfolios
```

### 2. Build Docker Image

```bash
docker build -t varun-portfolio:latest .
```

Or with Docker Compose (builds automatically):

```bash
docker-compose up -d
```

### 3. Access Application

- **URL:** http://localhost:3000
- **Nginx:** http://localhost (port 80)

### 4. View Logs

```bash
docker-compose logs -f portfolio
```

### 5. Stop Containers

```bash
docker-compose down
```

---

## 📦 Docker Architecture

### Components

1. **Next.js Application** (port 3000)
   - Multi-stage build for optimization
   - Production-ready server
   - Health checks enabled

2. **Nginx Reverse Proxy** (port 80 / 443)
   - Load balancing
   - Caching
   - SSL/TLS termination (production)
   - Security headers

### Docker Compose Services

```yaml
portfolio       # Next.js application
  ↓
nginx          # Reverse proxy & SSL
  ↓
User (port 80/443)
```

---

## 🛠️ Development Setup

### Using docker-compose.yml (Development)

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Environment Variables (Development)

File: `.env.docker`

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_NAME=Varun TM
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Rebuild After Code Changes

```bash
docker-compose up --build -d
```

---

## 🏢 Production Deployment

### Using docker-compose.prod.yml (Production)

```bash
# Start production services
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop services
docker-compose -f docker-compose.prod.yml down
```

### Environment Variables (Production)

File: `.env.docker.prod`

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_NAME=Varun TM
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### SSL/TLS Certificate Setup

1. **Create SSL directory:**
```bash
mkdir -p ssl
```

2. **Generate self-signed certificate (for testing):**
```bash
openssl req -x509 -newkey rsa:4096 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes
```

3. **For production, use Let's Encrypt:**
```bash
# Using Certbot
certbot certonly --standalone -d yourdomain.com
cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem ssl/cert.pem
cp /etc/letsencrypt/live/yourdomain.com/privkey.pem ssl/key.pem
```

---

## 📊 Docker Commands

### Image Management

```bash
# Build image
docker build -t varun-portfolio:latest .

# Build with specific tag
docker build -t varun-portfolio:v1.0.0 .

# List images
docker images

# Remove image
docker rmi varun-portfolio:latest

# Push to Docker Hub
docker tag varun-portfolio:latest username/varun-portfolio:latest
docker push username/varun-portfolio:latest
```

### Container Management

```bash
# Start container
docker run -p 3000:3000 varun-portfolio:latest

# Start in background
docker run -d -p 3000:3000 --name portfolio varun-portfolio:latest

# View running containers
docker ps

# View all containers
docker ps -a

# View logs
docker logs portfolio
docker logs -f portfolio

# Stop container
docker stop portfolio

# Start container
docker start portfolio

# Remove container
docker rm portfolio

# Execute command in container
docker exec -it portfolio npm run build
```

### Docker Compose Commands

```bash
# Start services
docker-compose up -d

# Start and build images
docker-compose up --build -d

# View logs
docker-compose logs
docker-compose logs -f portfolio

# View processes
docker-compose ps

# Stop services
docker-compose stop

# Start services
docker-compose start

# Restart services
docker-compose restart

# Remove services (keeps volumes)
docker-compose down

# Remove everything (including volumes)
docker-compose down -v

# View resource usage
docker stats
```

---

## 🔍 Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
docker run -p 8000:3000 varun-portfolio:latest
```

### Build Fails

```bash
# Clear build cache
docker build --no-cache -t varun-portfolio:latest .

# Check Docker logs
docker logs <container_id>
```

### Container Exits Immediately

```bash
# Check exit code
docker logs <container_id>

# Run with interactive terminal
docker run -it varun-portfolio:latest /bin/sh
```

### Nginx Connection Refused

```bash
# Verify portfolio service is running
docker-compose ps

# Check portfolio logs
docker-compose logs portfolio

# Restart services
docker-compose restart
```

### Permissions Denied

```bash
# Use sudo (Linux)
sudo docker-compose up -d

# Or add user to docker group (Linux)
sudo usermod -aG docker $USER
newgrp docker
```

---

## 📈 Performance Optimization

### Image Size

Current: ~200MB (production optimized)

Optimization techniques used:
- ✅ Multi-stage build
- ✅ Alpine Linux base
- ✅ Production dependencies only
- ✅ Minimal layer count

### Container Performance

```bash
# Limit CPU and memory
docker run -d \
  -p 3000:3000 \
  --cpus="1" \
  --memory="512m" \
  varun-portfolio:latest
```

### Docker Compose Resource Limits

```yaml
services:
  portfolio:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

---

## 🔐 Security Best Practices

### Implemented

✅ Non-root user (nextjs)  
✅ Health checks  
✅ Minimal base image  
✅ Production dependencies only  
✅ Security headers in Nginx  
✅ SSL/TLS support  
✅ Rate limiting  
✅ Input validation  

### Additional Measures

```bash
# Scan image for vulnerabilities
docker scan varun-portfolio:latest

# Use Docker security scanning
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image varun-portfolio:latest
```

---

## 📝 Environment Variables

### Development (.env.docker)

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_NAME=Varun TM
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production (.env.docker.prod)

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_NAME=Varun TM
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_OPTIONS=--max-old-space-size=512
LOG_LEVEL=info
```

---

## 🚢 Deployment to Cloud

### AWS ECS

```bash
# Create ECR repository
aws ecr create-repository --repository-name varun-portfolio

# Build and push
docker build -t varun-portfolio:latest .
docker tag varun-portfolio:latest <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/varun-portfolio:latest
docker push <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/varun-portfolio:latest
```

### Google Cloud Run

```bash
# Build and push to GCR
gcloud builds submit --tag gcr.io/PROJECT_ID/varun-portfolio

# Deploy
gcloud run deploy varun-portfolio \
  --image gcr.io/PROJECT_ID/varun-portfolio \
  --platform managed \
  --region us-central1
```

### Azure Container Instances

```bash
# Push to ACR
az acr build --registry <registry-name> --image varun-portfolio:latest .

# Deploy
az container create \
  --resource-group <group> \
  --name varun-portfolio \
  --image <registry-name>.azurecr.io/varun-portfolio:latest \
  --cpu 1 \
  --memory 0.5 \
  --port 3000
```

### Docker Hub

```bash
# Login
docker login

# Tag and push
docker tag varun-portfolio:latest username/varun-portfolio:latest
docker push username/varun-portfolio:latest
```

---

## 📊 Monitoring

### View Container Stats

```bash
docker stats
docker stats portfolio
```

### Health Check Status

```bash
docker ps --format "{{.Names}} - {{.Status}}"
```

### View Nginx Access Logs

```bash
docker-compose exec nginx tail -f /var/log/nginx/access.log
```

---

## 🔄 Continuous Integration

### GitHub Actions Example

```yaml
name: Docker Build and Push

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: docker/build-push-action@v2
        with:
          push: true
          tags: username/varun-portfolio:latest
```

---

## 📚 Useful Resources

- [Docker Documentation](https://docs.docker.com)
- [Docker Compose](https://docs.docker.com/compose)
- [Next.js Docker](https://nextjs.org/docs/deployment/docker)
- [Nginx Documentation](https://nginx.org/en/docs)
- [Docker Security](https://docs.docker.com/engine/security)

---

## ✅ Quick Reference

| Task | Command |
|------|---------|
| Build image | `docker build -t varun-portfolio:latest .` |
| Start dev | `docker-compose up -d` |
| View logs | `docker-compose logs -f` |
| Stop services | `docker-compose down` |
| Production start | `docker-compose -f docker-compose.prod.yml up -d` |
| Rebuild | `docker-compose up --build -d` |
| Remove everything | `docker-compose down -v` |

---

**Your portfolio is containerized and production-ready! 🐳**
