#!/bin/bash

# --- CONFIGURACIÓN DE COLORES ---
greenColour="\e[0;32m\033[1m"
yellowColour="\e[0;33m\033[1m"
blueColour="\e[0;34m\033[1m"
redColour="\e[0;31m\033[1m"
purpleColour="\e[0;35m\033[1m"
cyanColour="\e[0;36m\033[1m"
endColour="\033[0m\e[0m"

# --- BANNER PRINCIPAL ---
function banner(){
    clear
    echo -e "${cyanColour}"
    echo -e "  _____                _                                "
    echo -e " |  __ \              | |                               "
    echo -e " | |  | |  __ _  _ __ | | __ _ __    ___  ___  ___      "
    echo -e " | |  | | / _\` || '__|| |/ /| '_ \  / _ \/ __|/ __|     "
    echo -e " | |__| || (_| || |   |   < | | | ||  __/\__ \\\\__ \     "
    echo -e " |_____/  \__,_||_|   |_|\_\|_| |_| \___||___/|___/     "
    echo -e "  _____  _                 _                            "
    echo -e " / ____|| |               | |                           "
    echo -e "| (___  | |__    __ _  _ __ | | __                      "
    echo -e " \___ \ | '_ \  / _\` || '__|| |/ /                      "
    echo -e " ____) || | | || (_| || |   |   <                       "
    echo -e "|_____/ |_| |_| \__,_||_|   |_|\_\                      "
    echo -e "                                                        "
    echo -e "       S O L U T I O N S  -  B y  R D M W               "
    echo -e "${endColour}"
    echo -e "${purpleColour}[+] Assisting Sage: Gandalf${endColour}"
    echo -e "${blueColour}----------------------------------------------------${endColour}\n"
}

# --- FUNCIONES DE APOYO ---
function confirm_step(){
    echo -ne "${yellowColour}[?] Módulo: $1. ¿Deseas proceder? (y/n): ${endColour}"
    read -n 1 -r
    echo
    [[ $REPLY =~ ^[Yy]$ ]]
}

function progress_bar(){
    echo -e "${blueColour}[$1%] $2...${endColour}"
}

# --- 1. HERRAMIENTAS DE SISTEMA ---
function install_core(){
    local apps=(bspwm sxhkd polybar picom rofi feh kitty zsh lsd bat fzf zoxide neovim git xclip build-essential cmake libxcb-util0-dev libxcb-keysyms1-dev libxcb-randr0-dev libxcb-xinerama0-dev libxcb-shape0-dev libxcb-xkb-dev libxcb-icccm4-dev libxcb-image0-dev libxcb-composite0-dev libxcb-xrm-dev libxcb-cursor-dev libasound2-dev libpulse-dev libjsoncpp-dev libmpdclient-dev libcurl4-openssl-dev libiw-dev libnl-genl-3-dev)
    
    if confirm_step "Instalación de Aplicaciones Core"; then
        progress_bar "10" "Actualizando repositorios"
        sudo apt update > /dev/null 2>&1
        progress_bar "50" "Instalando paquetes mediante APT"
        sudo apt install -y "${apps[@]}" > /dev/null 2>&1
        progress_bar "100" "Paquetes base instalados correctamente"
    fi
}

# --- 2. SOLUCIÓN i3lock-color ---
function install_i3lock_color(){
    if confirm_step "i3lock-color (Compilación manual)"; then
        progress_bar "20" "Instalando dependencias necesarias"
        sudo apt install -y autoconf gcc make pkg-config libpam0g-dev libcairo2-dev libfontconfig1-dev libev-dev libx11-xcb-dev libxkbcommon-dev libxkbcommon-x11-dev libjpeg-dev > /dev/null 2>&1
        progress_bar "50" "Clonando i3lock-color"
        rm -rf /tmp/i3lock-color
        git clone https://github.com/Raymo111/i3lock-color.git /tmp/i3lock-color > /dev/null 2>&1
        progress_bar "80" "Compilando (esto puede tardar un momento)"
        cd /tmp/i3lock-color && chmod +x install-i3lock-color.sh
        ./install-i3lock-color.sh > /dev/null 2>&1
        progress_bar "100" "i3lock-color listo"
        cd - > /dev/null
    fi
}

# --- 3. CONFIGURACIONES (Dotfiles & Neovim) ---
function deploy_configs(){
    if confirm_step "Desplegar Archivos de Configuración"; then
        progress_bar "30" "Clonando Repositorio Sh4rk27"
        rm -rf /tmp/darkness_tmp
        git clone https://github.com/Sh4rk27/dotfiles.git /tmp/darkness_tmp > /dev/null 2>&1
        
        progress_bar "60" "Mapeando Archivos en ~/.config"
        mkdir -p ~/.config/nvim
        # Copia general de dotfiles
        cp -rv /tmp/darkness_tmp/* ~/.config/ > /dev/null 2>&1
        
        # CORRECCIÓN DE NEOVIM: Sincronizar con la ruta de tu Alias de Root
        sudo mkdir -p /root/.config/nvim
        sudo cp -rv /tmp/darkness_tmp/nvim/* /root/.config/nvim/ > /dev/null 2>&1
        
        progress_bar "80" "Asignando Permisos Críticos de Ejecución"
        # Permisos obligatorios para que el entorno pueda arrancar y responder
        chmod +x ~/.config/bin/* 2>/dev/null
        chmod +x ~/.config/bspwm/bspwmrc 2>/dev/null
        chmod +x ~/.config/polybar/launch.sh 2>/dev/null
        
        # ¡LA PIEZA FALTANTE!: Darle permisos a todos los scripts internos de tu Polybar
        chmod +x ~/.config/polybar/scripts/* 2>/dev/null
        
        progress_bar "100" "Configuraciones desplegadas con éxito"
    fi
}

# --- 4. ZSH & OH MY ZSH ---
function setup_zsh(){
    if confirm_step "Configurar entorno ZSH"; then
        progress_bar "40" "Clonando Oh My Zsh"
        rm -rf ~/.oh-my-zsh
        sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended > /dev/null 2>&1
        
        progress_bar "70" "Instalando Plugins (Autosuggestions & Syntax)"
        git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions > /dev/null 2>&1
        git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting > /dev/null 2>&1
        
        progress_bar "90" "Cambiando Shell (Requiere contraseña)"
        sudo chsh -s $(which zsh) $USER
        
        progress_bar "100" "ZSH configurado correctamente"
    fi
}

# --- FLUJO PRINCIPAL ---
banner
install_core
install_i3lock_color
deploy_configs
setup_zsh

echo -e "\n${greenColour}[+] ¡SISTEMA RECONSTRUIDO CON ÉXITO! Reinicia el Equipo para aplicar los cambios.${endColour}"
