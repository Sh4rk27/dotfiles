#!/usr/bin/env sh

## Add this to your wm startup file.

# Terminate already running bar instances
killall -q polybar

## Wait until the processes have been shut down
while pgrep -x polybar >/dev/null; do sleep 1; done

# Definir la ruta del config
CFG="$HOME/.config/polybar/current.ini"
WSP="$HOME/.config/polybar/workspace.ini"

## Launch

# Detectamos los monitores conectados y lanzamos las barras en cada uno
if type "xrandr" > /dev/null 2>&1; then
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
    export MONITOR=$m
    
    ## Left bar
    polybar log -c "$CFG" > /dev/null 2>&1 &
    polybar secondary -c "$CFG" > /dev/null 2>&1 &
    polybar terciary -c "$CFG" > /dev/null 2>&1 &
    polybar quaternary -c "$CFG" > /dev/null 2>&1 &
    polybar memory_isla -c "$CFG" > /dev/null 2>&1 &

    ## Right bar
    polybar top -c "$CFG" > /dev/null 2>&1 &
    polybar top_right -c "$CFG" > /dev/null 2>&1 &
    polybar top1 -c "$CFG" > /dev/null 2>&1 &
    polybar bluetooth -c "$CFG" > /dev/null 2>&1 &
    polybar sound -c "$CFG" > /dev/null 2>&1 &

    # Lógica restrictiva: El Tray solo se renderiza en la laptop para no romper el HDMI
    if [ "$m" = "eDP-1" ] || [ "$m" = "eDP" ]; then
        polybar tray_isla -c "$CFG" > /dev/null 2>&1 &
    fi

    ## Center bar
    polybar primary -c "$WSP" > /dev/null 2>&1 &
  done
else
  ## Left bar
  polybar log -c ~/.config/polybar/current.ini > /dev/null 2>&1 &
  polybar secondary -c ~/.config/polybar/current.ini > /dev/null 2>&1 &
  polybar terciary -c ~/.config/polybar/current.ini > /dev/null 2>&1 &
  polybar quaternary -c ~/.config/polybar/current.ini > /dev/null 2>&1 &

  ## Right bar
  polybar top -c ~/.config/polybar/current.ini > /dev/null 2>&1 &
  polybar top_right -c ~/.config/polybar/current.ini > /dev/null 2>&1 &
  polybar top1 -c ~/.config/polybar/current.ini > /dev/null 2>&1 &
  polybar bluetooth -c ~/.config/polybar/current.ini > /dev/null 2>&1 &
  polybar sound -c ~/.config/polybar/current.ini > /dev/null 2>&1 &

  ## Center bar
  polybar primary -c ~/.config/polybar/workspace.ini > /dev/null 2>&1 &
fi


# Forzar el reinicio de los iconos del sistema en el Tray
killall -q nm-applet gxkb
nm-applet > /dev/null 2>&1 &
gxkb > /dev/null 2>&1 &
