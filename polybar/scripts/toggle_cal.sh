#!/bin/bash

# Si gsimplecal ya está corriendo, lo matamos de forma forzada
if pidof gsimplecal > /dev/null; then
    killall gsimplecal
else
    # Si no está corriendo, lo lanzamos forzando el tema oscuro
    GTK_THEME=Adwaita:dark gsimplecal &
fi
