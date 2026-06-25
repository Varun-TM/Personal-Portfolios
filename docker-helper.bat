@echo off
REM Docker Helper Script for Varun Portfolio (Windows)
REM Simplifies common Docker operations

setlocal enabledelayedexpansion

REM Colors (using ANSI escape sequences)
set "RESET=[0m"
set "RED=[0;31m"
set "GREEN=[0;32m"
set "YELLOW=[1;33m"
set "BLUE=[0;34m"

REM Print header
echo.
echo %BLUE%════════════════════════════════════════%RESET%
echo %BLUE%   Varun Portfolio Docker Helper%RESET%
echo %BLUE%════════════════════════════════════════%RESET%
echo.

if "%1"=="" goto help
if "%1"=="help" goto help
if "%1"=="--help" goto help
if "%1"=="-h" goto help

if "%1"=="dev-up" goto dev-up
if "%1"=="prod-up" goto prod-up
if "%1"=="logs" goto logs
if "%1"=="prod-logs" goto prod-logs
if "%1"=="rebuild" goto rebuild
if "%1"=="prod-rebuild" goto prod-rebuild
if "%1"=="status" goto status
if "%1"=="prod-status" goto prod-status
if "%1"=="stats" goto stats
if "%1"=="health" goto health
if "%1"=="build" goto build
if "%1"=="build-nocache" goto build-nocache
if "%1"=="rmi" goto rmi
if "%1"=="clean" goto clean
if "%1"=="prod-clean" goto prod-clean
if "%1"=="down" goto down
if "%1"=="prod-down" goto prod-down
if "%1"=="shell" goto shell

echo %RED%Unknown command: %1%RESET%
echo.
goto help

:dev-up
echo %BLUE%Starting development environment...%RESET%
docker-compose up -d
echo %GREEN%Development environment started!%RESET%
echo %BLUE%Access at: http://localhost:3000%RESET%
docker-compose ps
goto end

:prod-up
echo %BLUE%Starting production environment...%RESET%
if not exist "ssl" mkdir ssl
if not exist "ssl\cert.pem" (
    echo %YELLOW%SSL certificates not found!%RESET%
    echo %BLUE%Generating self-signed certificates...%RESET%
    openssl req -x509 -newkey rsa:4096 -keyout ssl\key.pem -out ssl\cert.pem -days 365 -nodes -subj "/CN=localhost"
    echo %GREEN%Self-signed certificates generated!%RESET%
)
docker-compose -f docker-compose.prod.yml up -d
echo %GREEN%Production environment started!%RESET%
echo %BLUE%Access at: https://localhost%RESET%
docker-compose -f docker-compose.prod.yml ps
goto end

:logs
echo %BLUE%Viewing development logs...%RESET%
docker-compose logs -f
goto end

:prod-logs
echo %BLUE%Viewing production logs...%RESET%
docker-compose -f docker-compose.prod.yml logs -f
goto end

:rebuild
echo %BLUE%Rebuilding containers...%RESET%
docker-compose up --build -d
echo %GREEN%Containers rebuilt!%RESET%
goto end

:prod-rebuild
echo %BLUE%Rebuilding production containers...%RESET%
docker-compose -f docker-compose.prod.yml up --build -d
echo %GREEN%Production containers rebuilt!%RESET%
goto end

:status
echo %BLUE%Development status:%RESET%
docker-compose ps
goto end

:prod-status
echo %BLUE%Production status:%RESET%
docker-compose -f docker-compose.prod.yml ps
goto end

:stats
echo %BLUE%Docker container statistics:%RESET%
docker stats
goto end

:health
echo %BLUE%Checking health status...%RESET%
docker-compose exec portfolio wget --spider http://localhost:3000 2>&1
if !errorlevel! equ 0 (
    echo %GREEN%Application is healthy!%RESET%
) else (
    echo %RED%Application health check failed!%RESET%
)
goto end

:build
echo %BLUE%Building Docker image...%RESET%
docker build -t varun-portfolio:latest .
echo %GREEN%Docker image built successfully!%RESET%
goto end

:build-nocache
echo %BLUE%Building Docker image (no cache)...%RESET%
docker build --no-cache -t varun-portfolio:latest .
echo %GREEN%Docker image built successfully!%RESET%
goto end

:rmi
echo %BLUE%Removing Docker images...%RESET%
docker rmi varun-portfolio:latest
echo %GREEN%Docker images removed!%RESET%
goto end

:clean
echo %YELLOW%This will remove all containers and volumes!%RESET%
set /p confirm="Are you sure? (y/n): "
if /i "%confirm%"=="y" (
    docker-compose down -v
    echo %GREEN%Cleaned up!%RESET%
) else (
    echo Cancelled.
)
goto end

:prod-clean
echo %YELLOW%This will remove all production containers and volumes!%RESET%
set /p confirm="Are you sure? (y/n): "
if /i "%confirm%"=="y" (
    docker-compose -f docker-compose.prod.yml down -v
    echo %GREEN%Cleaned up production!%RESET%
) else (
    echo Cancelled.
)
goto end

:down
echo %BLUE%Stopping development containers...%RESET%
docker-compose down
echo %GREEN%Containers stopped!%RESET%
goto end

:prod-down
echo %BLUE%Stopping production containers...%RESET%
docker-compose -f docker-compose.prod.yml down
echo %GREEN%Production containers stopped!%RESET%
goto end

:shell
echo %BLUE%Accessing portfolio container shell...%RESET%
docker-compose exec portfolio /bin/sh
goto end

:help
echo Available commands:
echo.
echo %YELLOW%Development:%RESET%
echo   docker-helper.bat dev-up        Start development environment
echo   docker-helper.bat logs          View development logs
echo   docker-helper.bat rebuild       Rebuild after code changes
echo   docker-helper.bat status        View container status
echo   docker-helper.bat health        Check application health
echo   docker-helper.bat down          Stop development environment
echo.
echo %YELLOW%Production:%RESET%
echo   docker-helper.bat prod-up       Start production environment
echo   docker-helper.bat prod-logs     View production logs
echo   docker-helper.bat prod-rebuild  Rebuild production
echo   docker-helper.bat prod-status   View production status
echo   docker-helper.bat prod-down     Stop production environment
echo   docker-helper.bat prod-clean    Remove production containers
echo.
echo %YELLOW%Images ^& Cleanup:%RESET%
echo   docker-helper.bat build         Build Docker image
echo   docker-helper.bat build-nocache Build without cache
echo   docker-helper.bat rmi           Remove Docker images
echo   docker-helper.bat clean         Remove all containers ^& volumes
echo   docker-helper.bat stats         View container statistics
echo.
echo %YELLOW%Other:%RESET%
echo   docker-helper.bat help          Show this help message
echo.

:end
endlocal
