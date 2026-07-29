#!/bin/zsh

# Iconos (puedes cambiarlos si usas Nerd Fonts)
ICON_ON=""
ICON_OFF=""

#if ! bluetoothctl show | grep -q "Powered: yes"; then
#    echo "%{F#666}$ICON_OFF%{F-} off"
#else
    # Busca si hay dispositivos con 'Connected: yes'
#    paired_devices=$(bluetoothctl devices Paired | cut -d ' ' -f 2)
#    connected=0
    
#    for dev in ${(f)paired_devices}; do
#        if bluetoothctl info $dev | grep -q "Connected: yes"; then
#            connected=$((connected + 1))
#        fi
#    done

# 1. Verificar si el Bluetooth está encendido de forma ultra rápida
if ! bluetoothctl show | grep -q "Powered: yes"; then
    echo "%{F#666}$ICON_OFF%{F-} off"
else
    # 2. Contar dispositivos conectados usando una sola consulta simplificada al bus
    # Filtramos directamente las propiedades activas en el sistema sin iterar en bucles
    connected=$(bluetoothctl devices | cut -d ' ' -f 2 | xargs -I {} bluetoothctl info {} 2>/dev/null | grep -c "Connected: yes")

    if [ "$connected" -gt 0 ]; then
        echo "%{F#2196F3}$ICON_ON%{F-} $connected"
    else
        echo "%{F#ffffff}$ICON_ON%{F-} on"
    fi
fi
