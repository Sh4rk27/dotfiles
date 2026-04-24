#!/bin/bash

INTERFACE="wlp0s20f3"

# Extracción de IP
IP_ADDRESS=$(/usr/sbin/ifconfig $INTERFACE 2>/dev/null | grep "inet " | awk '{print $2}')

if [ -z "$IP_ADDRESS" ]; then
    # DESCONECTADO: Icono y Texto en NARANJA (#FF9F33)
    echo -e "%{F#FF9F33}  %{F#FF9F33}Disconnected"
else
    # CONECTADO: Icono en Cian (#00acc1) y Texto en Blanco (#FFFFFF)
    echo -e "%{F#00acc1}  %{F#FFFFFF}$IP_ADDRESS"
fi
