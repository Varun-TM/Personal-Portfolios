#!/bin/bash

# Docker Helper Script for Varun Portfolio
# Simplifies common Docker operations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Print header
print_header() {
    echo -e "${BLUE}════════════════════════════════════════${NC}"
    echo -e "${BLUE}   Varun Portfolio Docker Helper${NC}"
    echo -e "${BLUE}════════════════════════════════════════${NC}"
    echo ""
}

# Print success message
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# Print error message
print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Print warning message
print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Print info message
print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# Build Docker image
build() {
    print_header
    print_info "Building Docker image..."
    docker build -t varun-portfolio:latest .
    print_success "Docker image built successfully!"
}

# Build with no cache
build_nocache() {
    print_header
    print_info "Building Docker image (no cache)..."
    docker build --no-cache -t varun-portfolio:latest .
    print_success "Docker image built successfully!"
}

# Start development environment
dev_up() {
    print_header
    print_info "Starting development environment..."
    docker-compose up -d
    print_success "Development environment started!"
    print_info "Access at: http://localhost:3000"
    docker-compose ps
}

# Start production environment
prod_up() {
    print_header
    print_info "Starting production environment..."

    # Check for SSL certificates
    if [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
        print_warning "SSL certificates not found!"
        print_info "Generating self-signed certificates..."
        mkdir -p ssl
        openssl req -x509 -newkey rsa:4096 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes -subj "/CN=localhost"
        print_success "Self-signed certificates generated!"
    fi

    docker-compose -f docker-compose.prod.yml up -d
    print_success "Production environment started!"
    print_info "Access at: https://localhost"
    docker-compose -f docker-compose.prod.yml ps
}

# Stop environment
down() {
    print_header
    print_info "Stopping containers..."
    docker-compose down
    print_success "Containers stopped!"
}

# Stop production environment
prod_down() {
    print_header
    print_info "Stopping production containers..."
    docker-compose -f docker-compose.prod.yml down
    print_success "Production containers stopped!"
}

# View logs
logs() {
    print_header
    docker-compose logs -f "$@"
}

# View production logs
prod_logs() {
    print_header
    docker-compose -f docker-compose.prod.yml logs -f "$@"
}

# Rebuild after code changes
rebuild() {
    print_header
    print_info "Rebuilding containers..."
    docker-compose up --build -d
    print_success "Containers rebuilt!"
}

# Rebuild production
prod_rebuild() {
    print_header
    print_info "Rebuilding production containers..."
    docker-compose -f docker-compose.prod.yml up --build -d
    print_success "Production containers rebuilt!"
}

# View container status
status() {
    print_header
    docker-compose ps
}

# View production status
prod_status() {
    print_header
    docker-compose -f docker-compose.prod.yml ps
}

# View container statistics
stats() {
    print_header
    docker stats
}

# Clean up (remove containers and images)
clean() {
    print_header
    print_warning "This will remove all containers and volumes!"
    read -p "Are you sure? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker-compose down -v
        print_success "Cleaned up!"
    else
        print_info "Cancelled."
    fi
}

# Clean production
prod_clean() {
    print_header
    print_warning "This will remove all production containers and volumes!"
    read -p "Are you sure? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker-compose -f docker-compose.prod.yml down -v
        print_success "Cleaned up production!"
    else
        print_info "Cancelled."
    fi
}

# Remove images
rmi() {
    print_header
    print_info "Removing Docker images..."
    docker rmi varun-portfolio:latest
    print_success "Docker images removed!"
}

# Shell access
shell() {
    print_header
    print_info "Accessing portfolio container shell..."
    docker-compose exec portfolio /bin/sh
}

# Execute command
exec() {
    print_header
    docker-compose exec portfolio "$@"
}

# Check health
health() {
    print_header
    print_info "Checking health status..."
    echo ""
    docker-compose exec portfolio wget --spider http://localhost:3000 2>&1 && print_success "Application is healthy!" || print_error "Application health check failed!"
}

# View all available commands
help() {
    print_header
    echo "Available commands:"
    echo ""
    echo -e "${YELLOW}Development:${NC}"
    echo "  ./docker-helper.sh dev-up        Start development environment"
    echo "  ./docker-helper.sh logs          View development logs"
    echo "  ./docker-helper.sh rebuild       Rebuild after code changes"
    echo "  ./docker-helper.sh status        View container status"
    echo "  ./docker-helper.sh shell         Access container shell"
    echo "  ./docker-helper.sh health        Check application health"
    echo "  ./docker-helper.sh down          Stop development environment"
    echo ""
    echo -e "${YELLOW}Production:${NC}"
    echo "  ./docker-helper.sh prod-up       Start production environment"
    echo "  ./docker-helper.sh prod-logs     View production logs"
    echo "  ./docker-helper.sh prod-rebuild  Rebuild production"
    echo "  ./docker-helper.sh prod-status   View production status"
    echo "  ./docker-helper.sh prod-down     Stop production environment"
    echo "  ./docker-helper.sh prod-clean    Remove production containers"
    echo ""
    echo -e "${YELLOW}Images & Cleanup:${NC}"
    echo "  ./docker-helper.sh build         Build Docker image"
    echo "  ./docker-helper.sh build-nocache Build without cache"
    echo "  ./docker-helper.sh rmi           Remove Docker images"
    echo "  ./docker-helper.sh clean         Remove all containers & volumes"
    echo "  ./docker-helper.sh stats         View container statistics"
    echo ""
    echo -e "${YELLOW}Other:${NC}"
    echo "  ./docker-helper.sh exec <cmd>    Execute command in container"
    echo "  ./docker-helper.sh help          Show this help message"
    echo ""
}

# Main command handler
case "${1:-help}" in
    dev-up)
        dev_up
        ;;
    prod-up)
        prod_up
        ;;
    logs)
        logs "${@:2}"
        ;;
    prod-logs)
        prod_logs "${@:2}"
        ;;
    rebuild)
        rebuild
        ;;
    prod-rebuild)
        prod_rebuild
        ;;
    status)
        status
        ;;
    prod-status)
        prod_status
        ;;
    stats)
        stats
        ;;
    health)
        health
        ;;
    build)
        build
        ;;
    build-nocache)
        build_nocache
        ;;
    rmi)
        rmi
        ;;
    clean)
        clean
        ;;
    prod-clean)
        prod_clean
        ;;
    down)
        down
        ;;
    prod-down)
        prod_down
        ;;
    shell)
        shell
        ;;
    exec)
        exec "${@:2}"
        ;;
    help|--help|-h)
        help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        help
        exit 1
        ;;
esac
