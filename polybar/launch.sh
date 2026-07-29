#!/usr/bin/env sh

# Terminar instancias en ejecución
killall -q polybar
 while pgrep -u $UID -x polybar >/dev/null; do sleep 0.2; done
# while pgrep -x polybar >/dev/null; do sleep 1; done
# while pgrep -x polybar >/dev/null; do sleep 0.5; done

# Rutas de configuración
CFG="$HOME/.config/polybar/current.ini"
WSP="$HOME/.config/polybar/workspace.ini"

# Lanzar las 3 barras (left, right, primary) independientemente para cada monitor conectado
if command -v xrandr >/dev/null 2>&1; then
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
    MONITOR=$m polybar left -c "$CFG" >/dev/null 2>&1 &
    MONITOR=$m polybar right -c "$CFG" >/dev/null 2>&1 &
    MONITOR=$m polybar primary -c "$WSP" >/dev/null 2>&1 &
  done
else
  polybar left -c "$CFG" &
  polybar right -c "$CFG" &
  polybar primary -c "$WSP" &
fi
