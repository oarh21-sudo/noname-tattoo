# Run Dev - PowerShell helper for noname-tattoo
# Usage: Open PowerShell in this folder and run: .\run-dev.ps1

function ExitWith($code, $msg) {
    Write-Host $msg -ForegroundColor Red
    exit $code
}

Write-Host "Checking Node and npm..." -ForegroundColor Cyan
try {
    $node = (node -v) 2>$null
    $npm = (npm -v) 2>$null
} catch {
    ExitWith 1 "Node or npm not found. Please install Node.js LTS from https://nodejs.org/"
}

if (-not $node) { ExitWith 1 "node not found. Install Node.js LTS: https://nodejs.org/" }
if (-not $npm) { ExitWith 1 "npm not found. Install Node.js LTS: https://nodejs.org/" }

Write-Host "Node: $node" -ForegroundColor Green
Write-Host "npm:  $npm" -ForegroundColor Green

Write-Host "Installing dependencies (npm install)..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) { ExitWith $LASTEXITCODE "npm install falló. Revisa los errores arriba." }

Write-Host "Arrancando servidor de desarrollo (npm run dev:host) ..." -ForegroundColor Cyan
Write-Host "Presiona Ctrl+C en esta ventana para detener el servidor." -ForegroundColor Yellow

# Ejecuta el dev server (este proceso ocupará la terminal)
npm run dev:host

# Si el proceso sale, mostramos un mensaje
Write-Host "Proceso dev terminado." -ForegroundColor Magenta
