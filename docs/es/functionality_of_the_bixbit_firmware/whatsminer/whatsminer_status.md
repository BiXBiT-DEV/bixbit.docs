---
title: Sección Status
seoTitle: "Firmware de Whatsminer: sección Status | BiXBiT Docs"
description: "Status de Whatsminer en el firmware BiXBiT: resumen del minero, placas de hash,
  pools, errores y eventos, API, registros del sistema y del minero, procesos, memoria y
  resumen de la red."
order: 0
---
# Sección Status

## Subsección Miner Status

Esta subsección contiene información actual sobre el funcionamiento del dispositivo. Aquí también están disponibles:

![Miner Status de Whatsminer: Mining, con los botones Restart Miner, Download Logs y Toggle Led](/images/image-54.png)

- Botón **Restart Miner** — reinicia el proceso de minería sin reiniciar el propio dispositivo.
- Botón **Download Logs** — descarga los registros del dispositivo (similar a la función **Export log** de **Whatsminer Tool**).
- Botón **Toggle Led** — enciende los LED de la placa de control del dispositivo. Resulta útil para localizar un dispositivo concreto en una granja.

### Summary

![Summary de Whatsminer: tiempo transcurrido, THSav, shares aceptados/rechazados, Liquid Cooling, voltaje, potencia, modo de energía, temperatura de la PSU](/images/skrinshot-sdelannyj-2026-08-10-v-151135.png)

### Devices

![Tabla Devices de Whatsminer: frecuencia y hashrate THSav, THS1m, THS15m de las placas de hash SM0–SM2 y el total](/images/skrinshot-sdelannyj-2026-08-10-v-151227.png)

![Detalles de Devices de Whatsminer: UpfreqCompleted, EffectiveChips, temperatura de la placa y de los chips (mín-media-máx) de SM0–SM2](/images/skrinshot-sdelannyj-2026-08-10-v-151407.png)

### Pools

![Tabla Pools de Whatsminer: URL, indicador de activo, usuario, estado Alive/Dead, dificultad, shares aceptados, rechazados y obsoletos](/images/skrinshot-sdelannyj-2026-08-10-v-151454.png)

### Errors

![Tabla Errors de Whatsminer: errores de velocidad del ventilador 110, 111, 130, 131 y 2010 todos los pools desactivados, con marcas de tiempo](/images/image-56.png)

### Events

![Tabla Events de Whatsminer: E013 cambio de contraseña del pool, acción Pools Change, recuento, última hora, origen btminer](/images/skrinshot-sdelannyj-2026-08-10-v-152120.png)

## Subsecciones Miner API Log, System Log, Miner Log, Processes

Estas subsecciones contienen registros de distintos tipos. Aquí puede consultarlos sin descargarlos:

- **Miner API Log** — registro con información detallada sobre cada placa y sus chips.
- **System Log** — registro actual del sistema del dispositivo, que describe los principales eventos del firmware del dispositivo.
- **Miner Log** — permite consultar el historial de cambios de pool (Pools Change Log) y las métricas de rendimiento del dispositivo por intervalos de tiempo (Miner State Log).
- **Processes** — permite supervisar los procesos que se ejecutan en el dispositivo y sus parámetros, así como la carga actual de la CPU y el uso de memoria de cada proceso.

## Subsección Overview

### System

![Overview de Whatsminer, System: modelo M31S+_V80, información del hardware H616, versión del firmware y versión personalizada, kernel, tiempo de actividad, carga](/images/skrinshot-sdelannyj-2026-08-10-v-153254.png)

### Memory

![Overview de Whatsminer, Memory: RAM total disponible, libre y en búfer en kB con porcentaje de uso](/images/skrinshot-sdelannyj-2026-08-10-v-153313.png)

### Network

![Overview de Whatsminer, Network: estado de WAN IPv4 mediante DHCP con dirección, máscara de red, puerta de enlace, DNS y conexiones activas](/images/skrinshot-sdelannyj-2026-08-10-v-153341.png)

