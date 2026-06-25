# Docker Commands Reference

Quick reference for common Docker and Docker Compose commands.

## 🚀 Quick Start

```bash
# Development
./docker-helper.sh dev-up      # Start dev environment
./docker-helper.sh logs        # View logs
./docker-helper.sh rebuild     # Rebuild after changes
./docker-helper.sh down        # Stop

# Production
./docker-helper.sh prod-up     # Start production
./docker-helper.sh prod-down   # Stop production
```

## 🐳 Docker Image Commands

### Build

```bash
# Build image with default tag
docker build -t varun-portfolio:latest .

# Build with custom tag
docker build -t varun-portfolio:v1.0.0 .

# Build with labels
docker build -t varun-portfolio:latest \
  --label version="1.0.0" \
  --label description="Varun TM Portfolio" .

# Build with build arguments
docker build -t varun-portfolio:latest \
  --build-arg NODE_ENV=production .

# Build without cache
docker build --no-cache -t varun-portfolio:latest .
```

### List & Inspect

```bash
# List all images
docker images

# List images with specific name
docker images varun-portfolio

# List images with formatting
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

# Show image history
docker history varun-portfolio:latest

# Inspect image details
docker inspect varun-portfolio:latest

# Get image size
docker images --format "{{.Repository}}:{{.Tag}} {{.Size}}" varun-portfolio
```

### Push & Pull

```bash
# Login to Docker Hub
docker login

# Tag image for push
docker tag varun-portfolio:latest username/varun-portfolio:latest

# Push image
docker push username/varun-portfolio:latest

# Pull image
docker pull username/varun-portfolio:latest

# Login to GitHub Container Registry
docker login ghcr.io -u USERNAME -p TOKEN

# Push to ghcr.io
docker tag varun-portfolio:latest ghcr.io/username/varun-portfolio:latest
docker push ghcr.io/username/varun-portfolio:latest
```

### Remove & Clean

```bash
# Remove image
docker rmi varun-portfolio:latest

# Remove image by ID
docker rmi <image_id>

# Remove multiple images
docker rmi image1 image2 image3

# Remove all images
docker rmi $(docker images -q)

# Remove unused images
docker image prune

# Remove all unused images and layers
docker image prune -a
```

---

## 🏗️ Docker Container Commands

### Run

```bash
# Run container in foreground
docker run varun-portfolio:latest

# Run container in background
docker run -d varun-portfolio:latest

# Run with custom name
docker run -d --name portfolio varun-portfolio:latest

# Run with port mapping
docker run -d -p 3000:3000 varun-portfolio:latest

# Run with port mapping (host:container)
docker run -d -p 8000:3000 varun-portfolio:latest

# Run with environment variables
docker run -d -e NODE_ENV=production varun-portfolio:latest

# Run with multiple environment variables
docker run -d \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  varun-portfolio:latest

# Run with environment file
docker run -d --env-file .env.docker varun-portfolio:latest

# Run with volume mount
docker run -d -v /app/data:/data varun-portfolio:latest

# Run with read-only filesystem
docker run -d --read-only varun-portfolio:latest

# Run with resource limits
docker run -d \
  --cpus="1" \
  --memory="512m" \
  varun-portfolio:latest

# Run interactively
docker run -it varun-portfolio:latest /bin/sh
```

### List & Inspect

```bash
# List running containers
docker ps

# List all containers
docker ps -a

# List with custom format
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Get container ID by name
docker ps -q -f name=portfolio

# Inspect container
docker inspect portfolio

# Show container logs
docker logs portfolio

# Follow container logs
docker logs -f portfolio

# Show last 50 lines
docker logs --tail 50 portfolio

# Show logs since time
docker logs --since 2024-01-01 portfolio

# Show container processes
docker top portfolio

# Show container resource usage
docker stats portfolio

# Get container IP address
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' portfolio
```

### Execute & Interact

```bash
# Execute command
docker exec portfolio npm run build

# Execute interactively
docker exec -it portfolio /bin/bash

# Execute with user
docker exec -u root portfolio apt-get update

# Access shell
docker exec -it portfolio /bin/sh

# Run with environment
docker exec -e VAR=value portfolio npm start
```

### Stop & Remove

```bash
# Stop container
docker stop portfolio

# Stop container with timeout
docker stop --time=10 portfolio

# Kill container (force stop)
docker kill portfolio

# Start container
docker start portfolio

# Restart container
docker restart portfolio

# Remove container
docker rm portfolio

# Remove running container (force)
docker rm -f portfolio

# Remove all stopped containers
docker container prune

# Stop and remove all containers
docker rm -f $(docker ps -aq)
```

### Copy & Transfer

```bash
# Copy file from host to container
docker cp file.txt portfolio:/app/

# Copy file from container to host
docker cp portfolio:/app/file.txt ./

# Copy directory
docker cp portfolio:/app/public ./public
```

---

## 🎯 Docker Compose Commands

### Basic Operations

```bash
# Start services (foreground)
docker-compose up

# Start services (background)
docker-compose up -d

# Start and build images
docker-compose up --build -d

# Start specific service
docker-compose up -d portfolio

# Stop services
docker-compose stop

# Start services
docker-compose start

# Restart services
docker-compose restart

# Down services (stop and remove)
docker-compose down

# Down with volumes (remove data)
docker-compose down -v

# Down with images (remove images too)
docker-compose down --rmi all
```

### Logs & Monitoring

```bash
# View logs
docker-compose logs

# Follow logs
docker-compose logs -f

# View specific service logs
docker-compose logs portfolio

# Follow specific service logs
docker-compose logs -f portfolio

# View last lines
docker-compose logs --tail 50

# View logs with timestamps
docker-compose logs --timestamps

# List running services
docker-compose ps

# Show service images
docker-compose images

# View resource usage
docker stats

# Show container processes
docker-compose top
```

### Execution

```bash
# Execute command
docker-compose exec portfolio npm run build

# Execute interactively
docker-compose exec -it portfolio /bin/bash

# Execute with new container
docker-compose run portfolio npm run build

# Execute without starting dependencies
docker-compose run --no-deps portfolio npm run build
```

### Rebuilding

```bash
# Rebuild images
docker-compose build

# Rebuild specific service
docker-compose build portfolio

# Rebuild without cache
docker-compose build --no-cache

# Rebuild and restart
docker-compose up --build -d
```

### Using Different Compose Files

```bash
# Use production file
docker-compose -f docker-compose.prod.yml up -d

# Use multiple files
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Use different config file
docker-compose -f custom-compose.yml up -d
```

### Advanced Options

```bash
# Set project name
docker-compose -p myproject up -d

# Show configuration (resolved)
docker-compose config

# Validate configuration
docker-compose config --quiet

# Pull images
docker-compose pull

# Push images
docker-compose push

# Scale services
docker-compose up -d --scale portfolio=3

# Dry run
docker-compose --dry-run up
```

---

## 🔍 Troubleshooting Commands

### Debugging

```bash
# View full container logs
docker logs --all portfolio

# Follow logs with timestamps
docker logs -f --timestamps portfolio

# Get container last lines
docker logs --tail 100 portfolio

# Inspect container network
docker network inspect bridge

# Check port bindings
docker port portfolio

# View system events
docker events

# Get Docker system info
docker system info

# Check Docker daemon status
docker ps  # If works, daemon is running

# View container processes
docker top portfolio

# Monitor real-time stats
docker stats portfolio
```

### Cleanup & Recovery

```bash
# Remove dangling images
docker image prune -f

# Remove dangling volumes
docker volume prune -f

# Remove stopped containers
docker container prune -f

# Remove unused networks
docker network prune -f

# Full cleanup (careful!)
docker system prune -a --volumes

# Get disk usage
docker system df

# Check resource limits
docker inspect portfolio | grep -A 5 Memory
```

### Network Debugging

```bash
# List networks
docker network ls

# Inspect network
docker network inspect bridge

# Connect container to network
docker network connect bridge portfolio

# Disconnect container from network
docker network disconnect bridge portfolio

# Test network connectivity
docker exec portfolio ping google.com

# Check DNS resolution
docker exec portfolio nslookup nginx

# View network interface
docker exec portfolio ip addr
```

---

## 📊 Performance & Optimization

```bash
# Check image layers
docker inspect -f '{{json .RootFS.Layers}}' varun-portfolio:latest

# View build cache
docker builder du

# Prune build cache
docker builder prune

# Monitor docker daemon
docker events

# Limit container resources
docker update --cpus="0.5" portfolio

# View memory usage
docker stats --no-stream

# Check disk usage
docker system df

# Limit log size
docker run -d \
  --log-driver json-file \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  varun-portfolio:latest
```

---

## 🔐 Security Commands

```bash
# Scan image for vulnerabilities
docker scan varun-portfolio:latest

# View image security options
docker inspect -f '{{json .SecurityOpt}}' portfolio

# Run with read-only filesystem
docker run --read-only varun-portfolio:latest

# Run without privileges
docker run --cap-drop=ALL varun-portfolio:latest

# Check user in image
docker run varun-portfolio:latest id

# View image content
docker run -it varun-portfolio:latest /bin/sh

# Get image digest
docker inspect varun-portfolio:latest | grep RepoDigests
```

---

## 📋 Useful Aliases

Add to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
# Docker aliases
alias d='docker'
alias dc='docker-compose'
alias dps='docker ps'
alias dpsa='docker ps -a'
alias dlog='docker logs -f'
alias dexec='docker exec -it'
alias dstats='docker stats'

# Docker cleanup
alias dclean='docker system prune -a --volumes -f'
alias dclean-safe='docker system prune -f'

# Docker Compose aliases
alias dcup='docker-compose up -d'
alias dcdn='docker-compose down'
alias dclog='docker-compose logs -f'
```

---

## 🆘 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port already in use | `docker run -p 8000:3000` (use different port) |
| Container exits immediately | `docker logs container-name` (check logs) |
| Permission denied | `sudo` or add user to docker group |
| Out of disk space | `docker system prune -a` |
| Container can't reach internet | Check network settings, DNS |
| Slow performance | Increase Docker resources, check limits |
| Image not found | `docker pull image-name` or `docker build` |
| Can't connect to daemon | Restart Docker: `sudo systemctl restart docker` |

---

## 📚 Official References

- [Docker Documentation](https://docs.docker.com)
- [Docker Compose Documentation](https://docs.docker.com/compose)
- [Docker CLI Reference](https://docs.docker.com/engine/reference/commandline/cli)
- [Docker Compose CLI Reference](https://docs.docker.com/compose/reference)

---

**Use `docker [COMMAND] --help` for detailed help on any command!**
