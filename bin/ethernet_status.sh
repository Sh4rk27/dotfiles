#!/bin/sh

# Extraemos la IP de la interfaz. Si no hay IP, la variable quedará vacía.
# Usamos 'ip addr' que es más fiable que ifconfig.
IP_ADDR=$(/usr/bin/ip addr show enp0s31f6 2>/dev/null | grep "inet " | awk '{print $2}' | cut -d/ -f1)

# Verificamos si la variable IP_ADDR tiene contenido
if [ -n "$IP_ADDR" ]; then
    # CONECTADO: Icono en Cian (%{F#00acc1}), Texto en Blanco (%{F#FFFFFF})
    # IMPORTANTE: Usamos %{T7} para forzar la Hack Nerd Font que configuramos antes
    echo "%{F#00acc1}%{T7}󰈀 %{T-}%{F#FFFFFF}%{T5}$IP_ADDR%{T-}%{u-}"
else
    # DESCONECTADO: Icono y Texto en Rojo (%{F#e53935})
    echo "%{F#FF9F33}%{T7}󰈀%{T-}  Disconnected"
fi
