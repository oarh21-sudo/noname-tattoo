# noname-tattoo — Desarrollo local (Windows)

Instrucciones rápidas para levantar el servidor de desarrollo en Windows (PowerShell).
## Requisitos
- Node.js (recomiendo la versión LTS, v18+). Descárgalo en https://nodejs.org/
- npm (viene con Node.js)
## Pasos (PowerShell)
```powershell
# 1) Abre PowerShell
Set-Location 'C:\Users\Yessica\Desktop\noname-tattoo-main\noname-tattoo-main'
# 2) Verifica versiones
node -v
npm -v
# 3) Instala dependencias
npm install

# 4) Arranca el servidor (mira la URL que muestre Astro)
npm run dev:host
# (alternativa si no quieres usar el script nuevo):
# npm run dev -- --host
### Qué hace `dev:host`
- Hemos añadido el script `dev:host` que ejecuta `astro dev --host` y fuerza que el servidor escuche en todas las interfaces (0.0.0.0). Esto ayuda si tu navegador o entorno no puede conectar a `localhost` por interfaz.
## Diagnóstico rápido si ves `ERR_CONNECTION_REFUSED` en el navegador
1. Copia la salida de la consola donde ejecutaste `npm run dev:host` y verifica si Astro muestra `Local:` o `Network:` con un puerto (por ejemplo, `http://localhost:3000`).
2. Si el servidor parece arrancar pero el navegador niega la conexión, en otra PowerShell ejecuta (sustituye el puerto si es distinto):
```powershell
netstat -a -n -o | findstr :3000
Test-NetConnection -ComputerName localhost -Port 3000
3. Si `Test-NetConnection` da `False`, puede haber firewall o el servidor no arrancó. Puedes permitir temporalmente el puerto así (PowerShell como Administrador):
```powershell
New-NetFirewallRule -DisplayName "AllowDev3000" -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow
Si algo falla, pega aquí la salida completa de:
- `npm install` (si hay errores)
- `npm run dev:host` (salida completa)
- `netstat -a -n -o | findstr :<PUERTO>`
- `Test-NetConnection -ComputerName localhost -Port <PUERTO>`
## Notas
- Este repositorio usa Astro y el script `dev` por defecto. El cambio `dev:host` fue añadido para facilitar la conexión local.
- Si no tienes Node instalado y prefieres instrucciones para instalar `nvm-windows` para gestionar versiones, dímelo y te doy pasos.

---
Hecho por tu asistente de desarrollo — ejecuta `.
un-dev.ps1` para automatizar los pasos en Windows.
# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
