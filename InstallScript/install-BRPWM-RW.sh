#!/bin/bash

# =============================================================================
# DARKNESS SHARK SOLUTIONS - Auto-Installer v1.1   (Linux Mint Edition)
# =============================================================================

# Colores para la terminal
greenColour="\e[0;32m\e[1m"
endColour="\033[0m"
redColour="\e[0;31m\e[1m"
blueColour="\e[0;34m\e[1m"
yellowColour="\e[0;33m\e[1m"
purpleColour="\e[0;35m\e[1m"
cyanColour="\e[0;36m\e[1m"
grayColour="\e[0;37m\e[1m"

function banner(){
    clear
    echo -e "${cyanColour}"
    echo -e "===================================================================================================="
    echo -e "====================================================================++=============================="
    echo -e "================================================================+*#%%+=============================="
    echo -e "============================================================+*####%%*==============================="
    echo -e "========================================================+*#######%%#================================"
    echo -e "=====================================================+*########%%%%+================================"
    echo -e "==================================================+*#########%%%%%#================================="
    echo -e "===============================================+*##########%%%%%%%+================================="
    echo -e "=============================================+*****#######%%%%%%%*=================================="
    echo -e "==========================================+*******######%%%%%%%%%==================================="
    echo -e "========================================+*********####%%%%%%%%%%*==================================="
    echo -e "======================================+***********###%%%%%%%%%%%+==================================="
    echo -e "====================================+********#***##%%%%%%%%%%%%%===================================="
    echo -e "==================================+**********####%%%%%%%%%%%%%%#===================================="
    echo -e "================================*############%%%%%%%%%%%%%%%%%%%+==================================="
    echo -e "===============================*############%%%%%%%%%%%%%%%%%%%%%#=================================="
    echo -e "=============================*###############%%%%%%%%%%%%%%%%%%%%%%================================="
    echo -e "============================*###############%%%%%%%%%%%%%%%%%%%%%%%+================================"
    echo -e "==========================#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+=============================="
    echo -e "=========================#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#=============================="
    echo -e "========================*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*==========================="
    echo -e "=======================+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*+======================="
    echo -e "======================+*#####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#**++==++*****+++====================="
    echo -e "=======================+++*###%%%%%%%%%%%%###**+++==++*####*++==+******++==========================="
    echo -e "==============================++++++++++++++++++=+++***###*++=======++++============================"
    echo -e "======================================++++***********+++============================================"
    echo -e "===================================================================================================="
    echo -e "${blueColour}"
    echo -e "   DARKNESS SHARK SOLUTIONS - [ Cybersecurity & Infrastructure ]"
    echo -e "${cyanColour}====================================================================================================${endColour}"
    echo -e "    ${purpleColour}Auto-Installer - By RDMW & Gandalf${endColour}"
    echo -e "${cyanColour}====================================================================================================${endColour}"
}

# 1. Instalación de Paquetes Esenciales 
function installDependencies(){
    banner
    echo -e "\n${yellowColour}[*] Instalando Herramientas de Sistema...${endColour}"
    sudo add-apt-repository -y ppa:daniruiz/papeirus
    sudo apt update
    sudo apt install -y git zsh
# MODIFICACIÓN: Instalación con bypass por si falla i3lock-color (evita que el script se detenga)
    sudo apt install -y bspwm sxhkd polybar picom rofi feh kitty zsh lsd bat fzf zoxide neovim \
    build-essential wget curl unzip flameshot arandr dunst imagemagick xclip bc || \
    sudo apt install -y i3lock

# INTENTO SEPARADO: i3lock-color con su propio repo. Si falla, no detiene el script.
    sudo add-apt-repository -y ppa:daniruiz/papeirus
    sudo apt update
    sudo apt install -y i3lock-color || sudo apt install -y i3lock

    # Fix para bat en Mint
    mkdir -p ~/.local/bin
    ln -sf /usr/bin/batcat ~/.local/bin/bat
    echo -e "\n${greenColour}[+] Paquetes Base Instalados Correctamente.${endColour}"
}

2. Configuración de Tipografías (Añadí un check de descarga)
function installFonts(){
    echo -e "\n${yellowColour}[*] Instalando Iosevka y Hack Nerd Fonts...${endColour}"
    mkdir -p ~/.local/share/fonts

    # Descarga de Iosevka (Añadí -c para reanudar si falla y más reintentos)
    echo -e "${blueColour}[>] Descargando Iosevka...${endColour}"
    wget -c -q --show-progress https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/Iosevka.zip -P /tmp/
    
    # MODIFICACIÓN: Solo descomprimir si el archivo existe y es válido
    if [ -f /tmp/Iosevka.zip ]; then
        unzip -qo /tmp/Iosevka.zip -d ~/.local/share/fonts/
    fi

    # Descarga de Hack
    echo -e "${blueColour}[>] Descargando Hack...${endColour}"
    wget -c -q --show-progress https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/Hack.zip -P /tmp/
    unzip -qo /tmp/Hack.zip -d ~/.local/share/fonts/

    rm -f /tmp/Iosevka.zip /tmp/Hack.zip
    fc-cache -fv > /dev/null
    echo -e "${greenColour}[+] Tipografías Instaladas Correctamente.${endColour}"
}

# 3. Desplegando las Configuraciones de Darkness (GitHub)
function deployConfig(){
    echo -e "\n${yellowColour}[*] Desplegando Archivos de Configuración desde GitHub...${endColour}"
    
    REPO_URL="https://github.com/Sh4rk27/dotfiles.git"
    
    # MODIFICACIÓN: Aseguramos que la carpeta temporal esté limpia antes de empezar
    rm -rf ~/Downloads/darkness_tmp
    mkdir -p ~/Downloads/darkness_tmp
    
    echo -e "${blueColour}[>] Clonando Repositorio Sh4rk27...${endColour}"
    git clone $REPO_URL ~/Downloads/darkness_tmp
    
    echo -e "${blueColour}[>] Mapeando Archivos en ~/.config...${endColour}"
    mkdir -p ~/.config
    # MODIFICACIÓN: Usamos flag -a para asegurar que se copien archivos ocultos y permisos
    cp -rv ~/Downloads/darkness_tmp/* ~/.config/

    echo -e "\n${yellowColour}[*] 4. Restaurando Binarios y Permisos...${endColour}"
    # Mover binarios a /usr/local/bin
    sudo cp ~/.config/bin/* /usr/local/bin/
    sudo chmod +x /usr/local/bin/*

    # Permisos de Ejecución
    echo -e "${blueColour}[>] Asignando Permisos de Ejecución...${endColour}"
    chmod +x ~/.config/bspwm/bspwmrc
    chmod +x ~/.config/sxhkd/sxhkdrc
    [ -d ~/.config/bin ] && chmod +x ~/.config/bin/*.sh
    [ -d ~/.config/polybar ] && chmod +x ~/.config/polybar/*.sh

    # Configuración de Fondo de Pantalla
    if [ -f ~/.config/wallpapers/darkness_wallpaper.jpg ]; then
        echo -e "${blueColour}[>] Aplicando fondo de pantalla...${endColour}"
        feh --bg-fill ~/.config/wallpapers/darkness_wallpaper.jpg
    fi

    echo -e "\n${greenColour}[+] Configuraciones Desplegadas con Éxito.${endColour}"
}

# 4. Función para configurar ZSH
function setupZsh(){
    echo -e "\n${yellowColour}[*] Configurando entorno ZSH y Oh My Zsh...${endColour}"
    if [ ! -d ~/.oh-my-zsh ]; then
        sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
    fi

    # Plugins: Autosuggestions y Syntax Highlighting
    # AGREGADO: Borrar si ya existen para evitar errores de git clone en re-instalaciones
    rm -rf ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
    rm -rf ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
    
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

    # Cambiar shell a ZSH
    sudo chsh -s $(which zsh) $USER
    echo -e "${greenColour}[+] ZSH configurado.${endColour}"
}

# 5. Configuración de Neovim (NvChad)
function setupNvim(){
    echo -e "\n${yellowColour}[*] Instalando base de NvChad para Neovim...${endColour}"
    
    # Limpiamos si existe una config previa para evitar conflictos
    rm -rf ~/.config/nvim
    rm -rf ~/.local/share/nvim
    
    # Clonamos NvChad
    git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1
    
    # Re-inyectamos tus archivos personalizados desde la carpeta temporal de la descarga
    echo -e "${blueColour}[>] Inyectando tu configuración personalizada...${endColour}"
    if [ -d ~/Downloads/darkness_tmp/nvim ]; then
        cp -rv ~/Downloads/darkness_tmp/nvim/* ~/.config/nvim/
    fi
    
    # MODIFICACIÓN: Limpiamos la carpeta temporal AL FINAL de todo el proceso
    rm -rf ~/Downloads/darkness_tmp
    
    echo -e "${greenColour}[+] Neovim (NvChad) configurado correctamente.${endColour}"
}

# --- LÓGICA DE EJECUCIÓN ---
banner
echo -n -e "${yellowColour}[?] ¿Deseas iniciar la instalación total de Darkness Shark Solutions? (y/n): ${endColour}"
read answer

if [ "$answer" == "y" ]; then
    installDependencies
    installFonts
    deployConfig
    setupZsh
    setupNvim
    echo -e "\n${greenColour}[+] ¡SISTEMA RECONSTRUIDO CON ÉXITO! Reinicia la Sesión.${endColour}"
else
    echo -e "\n${redColour}[!] Proceso Detenido por el Usuario.${endColour}"
fi
