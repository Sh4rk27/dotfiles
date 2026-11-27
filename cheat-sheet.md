# 🛠️ GUÍA RÁPIDA DE CONFIGURACIONES Y ATAJOS DE SISTEMA

---

## 🔑 GESTOR DE CONTRASEÑAS (PASS)
* **`passf` / `passfzf`**: Buscador interactivo con `fzf` y copia automática al portapapeles.
* **`pass show`**: Muestra todo el árbol de contraseñas.
* **`pass show [Carpeta/Nombre]`**: Muestra los datos de una credencial específica.
* **`pass insert -m [Carpeta/Nombre]`**: Agrega una nueva contraseña de varias líneas.
* **Ubicación de la función**: `~/.zshrc`
* **Almacenamiento de claves**: `~/.password-store/`

---

## ⌨️ ATAJOS DE TECLADO (BSPWM & SXHKD)
* **Ubicación del archivo de configuración**: `~/.config/sxhkd/sxhkdrc`

### 🚀 Lanzadores y Terminales
* **`Super + Enter`**: Terminal principal (`gnome-terminal`).
* **`Super + U`**: Terminal Flotante / Scratchpad (`~/.local/bin/scratchpad.sh`).
* **`Super + D`**: Menú Rofi (Buscador de aplicaciones).
* **`Super + C`**: Historial del Portapapeles (Rofi + Greenclip).
* **`Super + R`**: Abrir explorador de archivos **Ranger** en terminal.
* **`Super + Shift + G`**: Lanzar Google Chrome.
* **`Super + Shift + B`**: Lanzar Brave Browser.
* **`Super + Shift + Z`**: Lanzar Zoom en segundo plano (sin bloquear terminal).

### 📐 Control y Gestión de Ventanas
* **`Super + W`**: Cerrar ventana actual de forma elegante.
* **`Super + Shift + W`**: Forzar cierre de ventana (`Kill`).
* **`Super + M`**: Alternar entre diseño Mosaico (Tiled) y Monóculo (Pantalla única).
* **`Super + T` / `Shift+T` / `S` / `F`**: Cambiar estado (Mosaico, Pseudo-mosaico, Flotante, Fullscreen).
* **`Super + G`**: Intercambiar ventana actual con la más grande del monitor.
* **`Super + Flechas`**: Mover el foco entre ventanas.
* **`Super + Shift + Flechas`**: Intercambiar posición de la ventana activa.
* **`Super + Ctrl + Flechas`**: Desplazar ventana flotante (20px).
* **`Alt + Super + Flechas`**: Redimensionar ventanas (`~/.config/bspwm/scripts/bspwm_resize`).

### 🖥️ Monitores y Escritorios
* **`Super + [1-0]`**: Cambiar al escritorio 1-10 en el monitor enfocado.
* **`Super + Shift + [1-0]`**: Mover ventana al escritorio 1-10.
* **`Super + Shift + M`**: Mover ventana al otro monitor (vMotion).
* **`Super + Alt + L`**: Alternar monitor secundario (Izquierda/Derecha) (`~/.config/bspwm/scripts/monitor_setup.sh toggle`).
* **`Super + Alt + M`**: Traer todas las ventanas de otros monitores al principal.

### ⚙️ Sistema y Servicios
* **`Super + Escape`**: Recargar atajos de `sxhkd`.
* **`Super + Alt + R`**: Reiniciar BSPWM y Polybar (`~/.config/polybar/launch.sh`).
* **`Super + Alt + Q`**: Cerrar sesión de BSPWM (Log out).
* **`Super + Ctrl + Alt + X`**: Bloquear pantalla (`betterlockscreen`).
* **`Ctrl + F`**: Captura de pantalla interactiva (`flameshot`).
* **`Shift + F5 / F6`**: Ajustar brillo del monitor (`brightnessctl`).
* **`Shift + F8`**: Alternar Modo Avión (WiFi On/Off).
* **`Super + Shift + F12`**: Encender / Apagar Bluetooth.

---

## 🐚 ALIASES Y FUNCIONES DE ZSH
* **Ubicación de la configuración**: `~/.zshrc`

### 📋 Comandos del Sistema & Utilidades
* **`fixwm`**: Reinicia atajos, gestor de ventanas y Polybar de un solo golpe.
* **`limpiar_ram`**: Libera la memoria caché de RAM de inmediato.
* **`cdir`**: Copia la ruta actual exacta (`pwd`) al portapapeles.
* **`ports`**: Muestra puertos en escucha en el sistema (`netstat` / `ss`).
* **`r`**: Función interactiva para Ranger que hace `cd` automático al salir de un directorio.
* **`extractPorts [archivo_nmap]`**: Extrae IPs y puertos abiertos de escaneos Nmap al portapapeles.
* **`7zip`**: Extractor e inspector interactivo de archivos comprimidos con `fzf`.
* **`gemini "[pregunta]"`**: Consulta directa a Gemini 2.5 Flash formateada con `glow`.
* **`gandalf`**: Ejecuta IA local Ollama liberando la RAM al 100% al finalizar.
* **`voz` / `Ctrl + V`**: Lanza el asistente por voz de Gandalf (`~/gandalf_voz.py`).

### 📁 Visualización de Archivos
* **`ls` / `l`**: Muestra archivos estructurados con `lsd`.
* **`ll` / `lla`**: Listado detallado de archivos y ocultos (`lsd -lha`).
* **`cat`**: Muestra contenido con sintaxis coloreada (`bat`).
* **`catn`**: Muestra contenido en texto plano estándar (`/usr/bin/cat`).

---

## 📂 RUTAS CLAVE Y ARCHIVOS DE CONFIGURACIÓN (`~/.config`)

* **Configuración de Neovim**: `/root/.config/nvim/init.lua` (o `init.vim`)
* **Configuración de Zsh**: `~/.zshrc`
* **Atajos de Teclado (SXHKD)**: `~/.config/sxhkd/sxhkdrc`
* **Gestor de Ventanas (BSPWM)**: `~/.config/bspwm/bspwmrc`
* **Barra de Estado (Polybar)**: `~/.config/polybar/launch.sh` y `~/.config/polybar/config.ini`
* **Notificaciones (Dunst)**: `~/.config/dunst/dunstrc`
* **Explorador Ranger**: `~/.config/ranger/rc.conf`
* **Respuesta de Pantalla/Monitores**: `~/.config/bin/set_res.sh` y `disconnect_monitor.sh`
* **Repositorio de Dotfiles**: `https://github.com/Sh4rk27/dotfiles`

---

## 🔄 RESPALDOS AUTOMÁTICOS (BACKUP)
* **Backup Mensual (Crontab)**: Sincroniza automáticamente la carpeta de dotfiles con GitHub el primer día de cada mes.
* **Ruta de Dotfiles**: `~/dotfiles` (o repositorio clonado en tu HOME).
* **Comando manual para sync**:
  ```bash
  cd ~/dotfiles && git add . && git commit -m "Update configs" && git push
