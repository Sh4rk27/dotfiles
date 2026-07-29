#!/usr/bin/env bash

INTERNAL="eDP-1"

# Obtener lista de todos los monitores conectados
CONNECTED_MONITORS=($(xrandr --query | grep " connected" | cut -d" " -f1))
EXTERNAL_MONITORS=($(xrandr --query | grep " connected" | grep -v "$INTERNAL" | cut -d" " -f1))

# 1. MODO PANTALLA ÚNICA (Solo Laptop)
if [ ${#CONNECTED_MONITORS[@]} -eq 1 ]; then
    xrandr --auto
    xrandr --output "$INTERNAL" --mode 1920x1200 --primary

    # Asignar todos los escritorios a la laptop
    bspc monitor "$INTERNAL" -d 1 2 3 4 5 6 7 8 9 10 I II III IV V VI VII VIII IX X
    
    feh --no-fehbg --bg-fill '/home/darkness/Desktop/darkness/Images/Wallpaper.png' &
    ~/.config/polybar/launch.sh &
    exit 0
fi

# 2. MODO MULTIMONITOR (2 o más pantallas)
# eDP-1 siempre es el primario a la derecha
XRANDR_CMD="xrandr --output $INTERNAL --mode 1920x1200 --primary"

# Conectar monitores externos dinámicamente a la izquierda
LAST_REF="$INTERNAL"
for mon in "${EXTERNAL_MONITORS[@]}"; do
    XRANDR_CMD="$XRANDR_CMD --output $mon --mode 1920x1080 --left-of $LAST_REF"
    LAST_REF="$mon"
done

# Aplicar posiciones con xrandr
eval "$XRANDR_CMD"

# 3. ASIGNACIÓN DINÁMICA DE ESCRITORIOS EN BSPWM
DESK_BANKS=("1 2 3 4 5 6 7 8 9 10" "I II III IV V VI VII VIII IX X" "A B C D E F G H I J")

idx=0
for mon in "${EXTERNAL_MONITORS[@]}"; do
    bank="${DESK_BANKS[$idx]}"
    if [ -n "$bank" ]; then
        bspc monitor "$mon" -d $bank
    else
        bspc monitor "$mon" -d "M${idx}-1" "M${idx}-2" "M${idx}-3" "M${idx}-4"
    fi
    ((idx++))
done

# El monitor de la laptop recibe los numéricos romanos
bspc monitor "$INTERNAL" -d ${DESK_BANKS[1]}

# 4. WALLPAPER Y POLYBAR
WALLPAPERS=()
for mon in "${CONNECTED_MONITORS[@]}"; do
    WALLPAPERS+=('/home/darkness/Desktop/darkness/Images/Wallpaper.png')
done
feh --no-fehbg --bg-fill "${WALLPAPERS[@]}" &

# Ejecutar tu launch.sh nativo que abre las 3 barras (left, right, primary)
~/.config/polybar/launch.sh &
