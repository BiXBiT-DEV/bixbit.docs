---
title: Instalación y reversión del firmware de fábrica
seoTitle: Reversión al firmware de fábrica de Antminer/Whatsminer | BiXBiT Docs
description: "Revierta Antminer o Whatsminer al firmware de fábrica antes de
  instalar BiXBiT: imagen para SD o USB según la placa de control, .bin con
  WhatsMinerTool o tarjeta SD con PhoenixCard."
order: 0
---
# Instalación y reversión del firmware de fábrica

## Antminer

En algunos casos, la instalación del firmware BiXBiT puede requerir revertir previamente el firmware de fábrica a una versión anterior.

::: warning  
Lo más probable es que las nuevas versiones del firmware de fábrica de 2025-2026 no puedan revertirse con el método descrito en esta instrucción.  
Para revertir las últimas versiones del firmware de fábrica en placas de control Amlogic, puede utilizar otro método de reversión: mediante USB-UART.  
:::

### Equipo y archivos necesarios para el flasheo:

- Unidad de almacenamiento (capacidad recomendada de hasta 16GB):
  - Para placas de control Xilinx (zynq 7007), Beagle Bone (BB) y CVitek (CV): tarjeta microSD.
  - Para placas de control Amlogic (AML): memoria USB-A, o una tarjeta microSD con un adaptador USB OTG desde la unidad hasta el puerto Micro-USB de la placa de control.
- Un PC u ordenador portátil con un puerto o adaptador para conectar la unidad de almacenamiento.
- Imagen del firmware (puede descargarse desde nuestro repositorio: [https://storage.bixbit.io/Antminer_s/SD/](https://storage.bixbit.io/Antminer_s/SD/)).

::: info  
Si el objetivo es instalar el firmware BiXBiT, no es necesario seleccionar una imagen del firmware de fábrica específica para el modelo de minero ASIC. El requisito principal es elegir una imagen que corresponda al modelo de la placa de control.  
Para los modelos de placa de control Amlogic o Xilinx, puede utilizar imágenes de firmware universales. Tras flashear la placa de control con estas imágenes universales, lo más probable es que el minero ASIC no mine con el firmware de fábrica instalado. Sin embargo, después podrá instalar el firmware BiXBiT sobre este firmware de fábrica; el modelo del dispositivo se detectará automáticamente y el dispositivo podrá minar.  
:::

### Preparación de la unidad de almacenamiento y carga de la imagen del firmware:

1. Conecte la unidad de almacenamiento a su ordenador o portátil y formatéela (con el sistema de archivos FAT32).
  ![Cuadro de diálogo Formatear de Windows para una unidad de 16 GB (F:): sistema de archivos FAT32, Formato rápido marcado, botón Iniciar](/images/image-37.png)
2. Copie el contenido del archivo comprimido del firmware descargado en la raíz de la unidad de almacenamiento.
  ![Archivos de universal_aml.zip copiados en la raíz de la unidad: aml_sdc_burn.ini, aml_sdc_burn.UBOOT.ENC, aml_upgrade_package_enc.img](/images/image-38.png)

### Instalación del firmware en el dispositivo:

1. Desconecte la alimentación del dispositivo y espere hasta que se apaguen los indicadores LED de la placa de control.
2. Conecte a la placa de control la unidad de almacenamiento con la imagen del firmware.
3. Encienda el dispositivo y espere a que finalice el proceso de flasheo (cuando la instalación haya terminado, el LED verde de la placa de control permanecerá encendido de forma fija).
4. Desconecte la alimentación del dispositivo y espere hasta que se apaguen los indicadores LED de la placa de control.
5. Retire del dispositivo la unidad de almacenamiento conectada previamente.
6. Encienda el dispositivo.

## Whatsminer

### Instalación del firmware de fábrica mediante WhatsMinerTool

#### Preparación

- **Paso 1.** Descargue el archivo de firmware desde el [sitio web oficial](https://www.whatsminer.com/src/views/firmware-download.html#Firmware/) (en la sección "Firmware", seleccione "M3x & M5x & M6x series" o "M2X series" según el modelo de su dispositivo y descargue el archivo de firmware **“.bin”** (por ejemplo, "Whatsminer-all-xxxxxxxx.xx.bin").
- **Paso 2.** Instale la versión más reciente de **WhatsMinerTool**. El uso de versiones antiguas del programa puede provocar que la instalación del firmware falle. Puede descargar la versión más reciente de WhatsMinerTool desde [este enlace](https://www.whatsminer.com/src/views/firmware-download.html#Tool "download WhatsminerTool").

![Sitio de soporte de Whatsminer, Firmwares Download: M3x & M5x & M6x series seleccionado, botón Download para el archivo de firmware .bin](/images/image-76.png)

#### Instalación del firmware

Ejecute **WhatsMinerTool** y establezca un rango de escaneo que incluya la dirección IP del dispositivo en el que se instalará el firmware. Inicie el escaneo y asegúrese de que el dispositivo aparece en la lista.

![WhatsMinerTool Upgrade: Select File, elegir Whatsminer-M3x-all-20250321.14.bin, Open, marcar el minero, Start Upgrade](/images/image-75.png)

- **Paso 1:** Haga clic en **[Upgrade]**.
- **Paso 2:** Haga clic en **[Select File]**.
- **Paso 3:** En la ventana emergente, seleccione el archivo **“.bin“** que descargó anteriormente (por ejemplo, "Whatsminer-all-20250915.16.bin").
- **Paso 4:** Confirme la selección del archivo haciendo clic en **[Open]**.
- **Paso 5:** Marque la casilla **situada a la izquierda de la dirección IP del dispositivo** cuyo firmware desea actualizar. Puede seleccionar varios dispositivos si tienen instalados los mismos modelos de placa de control.
- **Paso 6:** Haga clic en el botón **[Start Upgrade]** para iniciar el proceso de actualización. En el cuadro de diálogo que aparece, haga clic en **[OK]**. El estado **Success** en la columna **Status** del dispositivo que se está actualizando indica que el proceso de actualización ha finalizado correctamente. A continuación, el dispositivo se reiniciará automáticamente. Tras el reinicio, abra la interfaz web del dispositivo. Si la instalación se ha realizado correctamente, observará cambios en la interfaz web del dispositivo.

### Instalación del firmware de fábrica mediante tarjeta SD

**Preparación para la instalación**

- **Paso 1.** Vaya al [sitio web de Whatsminer](https://www.whatsminer.com/src/views/firmware-download.html#Firmware/); en la sección **"SD-card flashing program"**, seleccione el apartado correspondiente al modelo de placa de control instalado en su dispositivo y descargue el archivo comprimido del firmware. Extraiga su contenido en una carpeta independiente.

  ![Sitio de soporte de Whatsminer, Firmwares Download: SD-card flashing program por placa de control (H616, H6os, H6, H3), Download](/images/image-77.png)
- **Paso 2.** Prepare la **tarjeta SD**: se recomienda utilizar tarjetas SD con una capacidad de **2 GB a 16 GB** inclusive. **Formatee completamente la tarjeta SD** mediante Administración de discos (haga clic con el botón derecho en el botón Inicio, seleccione Administración de discos; formato del sistema de archivos predeterminado: **FAT32**).
- **Paso 3.** Con el programa **"PhoenixCard"** (la carpeta con el programa "PhoenixCard" se encuentra en el archivo comprimido del firmware), grabe en la **tarjeta SD** la imagen **“.img”** del firmware de fábrica descargado.

**Flasheo del ASIC con la versión de firmware de fábrica mediante la tarjeta SD**

1. **Paso 1.** Antes de insertar la tarjeta SD, desconecte el cable de alimentación y espere a que los indicadores dejen de parpadear por completo.
2. **Paso 2.** Inserte la tarjeta SD y vuelva a conectar el cable de alimentación.
3. **Paso 3.** Una vez finalizado el proceso de flasheo, solo quedará encendido el indicador verde. Espere unos segundos y vuelva a desconectar el cable de alimentación.
4. **Paso 4.** Asegúrese de que los indicadores se hayan apagado por completo y retire la tarjeta SD.
5. **Paso 5.** Vuelva a conectar la alimentación.

