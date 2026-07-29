# ------------------------------------------------------------------------------
# 1. INSTANT PROMPT (Debe ir al principio absoluto)
# ------------------------------------------------------------------------------
# Forzar silencio de advertencias (Movido aquí arriba para máxima seguridad)
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet

if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Forzar silencio de advertencias
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet

# ------------------------------------------------------------------------------
# 2. ENTORNO Y PATH (Priorizando fzf 0.71.0)
# ------------------------------------------------------------------------------
export _JAVA_AWT_WM_NONREPARENTING=1
export PATH="$HOME/.fzf/bin:$HOME/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# ------------------------------------------------------------------------------
# 3. CONFIGURACIÓN DE LA SHELL
# ------------------------------------------------------------------------------
setopt histignorealldups sharehistory
bindkey -e
HISTSIZE=1000
SAVEHIST=1000
HISTFILE=~/.zsh_history

# Inicializar sistemas de completado
autoload -Uz compinit promptinit
compinit -i
promptinit

# Configuración de colores y completado
eval "$(dircolors -b)"
zstyle ':completion:*' auto-description 'specify: %d'
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' format 'Completing %d'
zstyle ':completion:*' group-name ''
zstyle ':completion:*' menu select=2
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'
zstyle ':completion:*' verbose true

# ------------------------------------------------------------------------------
# 4. CARGA DE FZF (Desde la instalación limpia en Home)
# ------------------------------------------------------------------------------
if [[ -f ~/.fzf.zsh ]]; then
  # Evitamos que el script de fzf lance el error 'unknown option'
  # si detecta el binario antiguo por accidente.
  source ~/.fzf.zsh
fi

# ------------------------------------------------------------------------------
# 5. TEMA Y PLUGINS MANUALES
# ------------------------------------------------------------------------------
source /home/darkness/powerlevel10k/powerlevel10k.zsh-theme
[[ -f ~/.p10k.zsh ]] && source ~/.p10k.zsh

# Plugins instalados en el sistema
[[ -f /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]] && source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
[[ -f /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh ]] && source /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh
[[ -f /usr/share/zsh-sudo/sudo.plugin.zsh ]] && source /usr/share/zsh-sudo/sudo.plugin.zsh

# ------------------------------------------------------------------------------
# 6. ALIASES
# ------------------------------------------------------------------------------
alias ll='lsd -lh --group-dirs=first'
alias la='lsd -a --group-dirs=first'
alias l='lsd --group-dirs=first'
alias lla='lsd -lha --group-dirs=first'
alias ls='lsd --group-dirs=first'
alias cat='bat'
alias catn='/usr/bin/cat'
alias nvim='XDG_CONFIG_HOME=/root/.config nvim'
alias fixwm='pkill -USR1 -x sxhkd && bspc wm -r && ~/.config/polybar/launch.sh'
alias limpiar_ram='sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches && dunstify -u low "Memoria RAM" "Caché liberada correctamente" -i processor'

# ------------------------------------------------------------------------------
# 7. FUNCIONES (mkt, extractPorts, man, fzf-lovely, rmk)
# ------------------------------------------------------------------------------
mkt() { 
    mkdir -p nmap content exploits scripts 
}

extractPorts() {
  ports="$(cat $1 | grep -oP '\d{1,5}/open' | awk '{print $1}' FS='/' | xargs | tr ' ' ',')"
  ip_address="$(cat $1 | grep -oP '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}' | sort -u | head -n 1)"
  echo -e "\n[*] Extracting information...\n"
  echo -e "\t[*] IP Address: $ip_address"
  echo -e "\t[*] Open ports: $ports\n"
  echo $ports | tr -d '\n' | xclip -sel clip
  echo -e "[*] Ports copied to clipboard\n"
}

man() {
  env LESS_TERMCAP_mb=$'\e[01;31m' LESS_TERMCAP_md=$'\e[01;31m' \
  LESS_TERMCAP_me=$'\e[0m' LESS_TERMCAP_se=$'\e[0m' \
  LESS_TERMCAP_so=$'\e[01;44;33m' LESS_TERMCAP_ue=$'\e[0m' \
  LESS_TERMCAP_us=$'\e[01;32m' man "$@"
}

fzf-lovely() {
  local preview_cmd='[[ $(file --mime {}) =~ binary ]] && echo {} is a binary file || (bat --style=numbers --color=always {} || cat {}) 2> /dev/null | head -500'
  if [ "$1" = "h" ]; then
    fzf -m --reverse --preview-window down:20 --preview "$preview_cmd"
  else
    fzf -m --preview "$preview_cmd"
  fi
}

rmk() { scrub -p dod $1; shred -zun 10 -v $1; }

# Alias para gestión de resolución y monitores
alias res='~/.config/bin/set_res.sh'
alias moff='~/.config/bin/disconnect_monitor.sh'
alias mon='autorandr --change'
# Forzar a zsh que utilice  zoxide para fzf
eval "$(zoxide init zsh)"
# Función inteligente para Ranger (reemplaza al alias anterior)
r() {
    temp_file="$(mktemp -t "ranger_cd.XXXXXXXXXX")"
    ranger --choosedir="$temp_file" -- "${@:-$PWD}"
    if [ -f "$temp_file" ] && [ "$(cat -- "$temp_file")" != "$PWD" ]; then
        cd -- "$(cat -- "$temp_file")"
    fi
    rm -f -- "$temp_file"
}


# Lanzar Inteligencia Artificial Ollama
# alias pensar="ollama run deepseek-r1:14b"

# Lanzar Inteligencia Artificial Ollama
# alias pensar="ollama run deepseek-r1:14b"

# --- MÓDULO GANDALF: IA LOCAL CON CONTROL DE RAM ---
# Limpia el alias de la memoria activa si existía previamente para evitar errores de parseo
unalias gandalf 2>/dev/null

gandalf() {
    # 1. Lanza el modelo normalmente usando tus argumentos
    ollama run gandalf "$@"

    # 2. En cuanto sales del modelo, descarga TODO de la RAM de inmediato a través de su API
    curl -s -X POST http://localhost:11434/api/generate -d '{"model": "gandalf", "keep_alive": 0}' > /dev/null

    # 3. Limpia los residuos de caché en silencio
    sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches > /dev/null

    # 4. Te notifica visualmente que la RAM regresó a su estado normal
    dunstify -u low "Gandalf" "Modelo descargado y memoria RAM liberada al 100%" -i processor
}

alias voz="python3 ~/gandalf_voz.py"

# Función para lanzar la voz de Gandalf
gandalf_voz_widget() {
    python3 ~/gandalf_voz.py
    zle reset-prompt
}

# Lanzar Ranger, Explorador para terminal con Ctrl + Shift + f
bindkey -s '^F' 'ranger\n'


# Crear el widget para ZSH
zle -N gandalf_voz_widget

# Vincular a Ctrl + V (el código ^V se obtiene presionando Ctrl+V en nano o escribiéndolo así)
bindkey '^V' gandalf_voz_widget


# --- Configuración de Colores Profesional ---

# 1. Comandos: Probaremos con el 112 (es un verde olivo con mucha más luz)
# Si lo sientes muy claro, puedes cambiar el 112 por 106.
ZSH_HIGHLIGHT_STYLES[command]='fg=112,bold'
ZSH_HIGHLIGHT_STYLES[alias]='fg=112,bold'
ZSH_HIGHLIGHT_STYLES[builtin]='fg=112,bold'
ZSH_HIGHLIGHT_STYLES[function]='fg=112,bold'

# 2. RUTAS: El color cian que señalaste en image_76d9bc.png
# Usamos 'fg=6' sin negrita para que sea el tono exacto de la flecha
ZSH_HIGHLIGHT_STYLES[path]='fg=6'
ZSH_HIGHLIGHT_STYLES[path_prefix]='fg=6'

# 3. Autosuggestion: Blanco puro (para que sea visible)
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=15'

# 4. Errores y Comentarios
ZSH_HIGHLIGHT_STYLES[unknown-token]='fg=1,bold'
ZSH_HIGHLIGHT_STYLES[comment]='fg=244'

# ------------------------------------------------------------------------------
# 8. FINALIZAR (Debe ir al final absoluto)
# ------------------------------------------------------------------------------
(( ! ${+functions[p10k-instant-prompt-finalize]} )) || p10k-instant-prompt-finalize
export GEMINI_API_KEY="tu_api_key_aquí"
export GEMINI_API_KEY="AIzaSyAbaGLixADdkx7OPjNtp6rdYD7j7BJDUd0"










# Función definitiva y nativa para Gemini en Zsh (Fija en Español + Glow)
gemini() {
    if [[ -z "$GEMINI_API_KEY" ]]; then
        echo "Error: La variable \$GEMINI_API_KEY no está definida."
        return 1
    fi

    local USER_PROMPT="$1"

    # Concatenamos la instrucción de idioma directo en el prompt para asegurar que Google lo procese sin romper el esquema JSON
    local FINAL_PROMPT="${USER_PROMPT}. RESPOND IN SPANISH, clear and concise using markdown."

    # Construimos el JSON plano de forma segura con jq
    local JSON_PAYLOAD=$(jq -n --arg prompt "$FINAL_PROMPT" '{"contents": [{"parts": [{"text": $prompt}]}]}')

    # Enviamos la petición y mandamos la salida limpia a glow
    curl -s -X POST "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}" \
      -H "Content-Type: application/json" \
      -d "$JSON_PAYLOAD" | jq -r '.candidates[0].content.parts[0].text // .error.message' | glow -s dark
}
# Extractor Interactivo de Archivos con FZF
7zip() {
  local file
  # Busca archivos comprimidos y muestra su contenido en el panel de preview usando 'als' de atool
  file=$(find . -maxdepth 2 -type f \( -name "*.tar.gz" -o -name "*.tgz" -o -name "*.zip" -o -name "*.7z" -o -name "*.rar" -o -name "*.tar.xz" \) | \
         fzf --preview 'als {}' --preview-window=right:60%:wrap)
         
  if [[ -n "$file" ]]; then
    echo "Extrayendo: $file..."
    aunpack "$file"
  else
    echo "No se seleccionó ningún archivo."
  fi
}
