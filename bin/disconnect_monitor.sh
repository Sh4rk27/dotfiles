#!/bin/bash

# 1. Identificar monitores (Ajusta los nombres según 'xrandr -q')
INTERNAL="eDP-1"
EXTERNAL="HDMI-1"

# 2. Mover todos los desktops del monitor externo al interno
for desktop in $(bspc query -D -m $EXTERNAL); do
    bspc desktop $desktop -m $INTERNAL
done

# 3. Apagar el monitor externo y reajustar el principal
xrandr --output $EXTERNAL --off --output $INTERNAL --auto
autorandr laptop_solo --load

# 4. Opcional: Reiniciar polybar para que se ajuste al monitor único
~/.config/polybar/launch.sh
