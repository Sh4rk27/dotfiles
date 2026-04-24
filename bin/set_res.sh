#!/bin/bash
# Script para cambiar resolución rápidamente
# Sustituye 'eDP-1' por el nombre de tu monitor principal (visto en xrandr)

PS3='Selecciona la resolución: '
options=("1920x1080" "1600x900" "1366x768" "Auto" "Salir")

select opt in "${options[@]}"
do
    case $opt in
        "1920x1080")
            xrandr --output eDP-1 --mode 1920x1080
            break
            ;;
        "1600x900")
            xrandr --output eDP-1 --mode 1600x900
            break
            ;;
        "Auto")
            xrandr --output eDP-1 --auto
            break
            ;;
        "Salir")
            break
            ;;
        *) echo "Opción inválida $REPLY";;
    esac
done
