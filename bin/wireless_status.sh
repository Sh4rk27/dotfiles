#!/bin/bash

INTERFACE="wlp0s20f3"

# Extracción de IP
IP_ADDRESS=$(/usr/sbin/ifconfig $INTERFACE 2>/dev/null | grep "inet " | awk '{print $2}')

if [ -z "$IP_ADDRESS" ]; then
    # DESCONECTADO: Icono y Texto en NARANJA  (#FF9F33) con Acción de Clic
    echo -e "%{A1:nm-connection-editor &:}%{F#FF9F33} %{F#FF9F33}Disconnected%{A}"
else
    # CONECTADO: Icono en Cian  (#00acc1) y Texto en Blanco  (#FFFFFF) con Acción de Clic
    echo -e "%{A1:nm-connection-editor &:}%{F#00acc1} %{F#FFFFFF}%{T5}$IP_ADDRESS%{T-}%{A}"
fi
