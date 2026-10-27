---
title: Grabación de una imagen de firmware en una tarjeta SD
seoTitle: Grabar firmware de Whatsminer en SD (PhoenixCard) | BiXBiT Docs
description: "Grabe un archivo .img de firmware de Whatsminer en una tarjeta SD con PhoenixCard:
  seleccione la unidad, elija la imagen, mantenga el modo Product, haga clic en Burn y compruebe el
  resultado de la grabación."
order: 0
---
# Grabación de una imagen en la tarjeta SD

## Antminer

La información sobre la grabación de la imagen de firmware para ASIC Antminer se encuentra en la sección: **Instalación y reversión del firmware de fábrica**

## Whatsminer

- **Paso 1.** Ejecute el programa **"PhoenixCard"** (la carpeta con el programa "PhoenixCard" **se encuentra en el archivo comprimido del firmware**).

  ![Carpeta PhoenixCard_V427 del archivo comprimido del firmware con PhoenixCard.exe resaltado](/images/image-109.png)
- **Paso 2.** En la ventana principal, seleccione la unidad cuya letra corresponde a su tarjeta SD.

  ![PhoenixCard V4.2.7: la tarjeta SD (unidad K, 7679M) seleccionada en Dev List](/images/image-110.png)
- **Paso 3.** Haga clic en el botón **[Image]**: aparecerá un cuadro de diálogo de selección de archivos.

  ![PhoenixCard V4.2.7: botón Image que abre el cuadro de diálogo de selección del archivo de firmware](/images/image-111.png)
- **Paso 4.** Busque y seleccione el archivo con la extensión ".img" en la carpeta donde extrajo el contenido del archivo comprimido del firmware.

  ![Cuadro de diálogo de archivos: seleccione Whatsminer-ALL-Models_1.6.0.2_h616-after20231213.img y haga clic en Open](/images/image-112.png)

::: info
La selección del archivo depende de la versión de firmware que tenga previsto grabar en la tarjeta SD. Puede ser el firmware original de fábrica o una versión personalizada, por ejemplo, la nuestra de BiXBiT o la de otro desarrollador. En cualquier caso, para grabar el firmware en la tarjeta SD, debe seleccionar un archivo con la extensión ".img". Preste atención: los archivos con la extensión ".bin" están destinados exclusivamente a la instalación mediante el programa WhatsMinerTool y no son adecuados para cargarse a través de una tarjeta SD.
:::

- **Paso 5.** Asegúrese de que esté seleccionado el parámetro Product. Haga clic en el botón **[Burn]**.

  ![PhoenixCard V4.2.7: Work Type Product seleccionado, el botón Burn graba la imagen en la tarjeta SD](/images/image-113.png)

A continuación, comenzará el proceso de grabación de la tarjeta SD.  

Si, una vez finalizado el proceso, la barra de estado de la tarjeta SD se ilumina en verde por un momento, el firmware se ha grabado correctamente.

Además, el éxito del proceso de grabación de la imagen de firmware se confirma con las líneas:  
`[IMG File]Burn Success`  
`[DATA File]Burn Success`  
`Magic Complete`  
`Burn End…`

::: warning
Tras completar la grabación de la imagen de firmware en la tarjeta SD, es posible que se active automáticamente la función "Reproducción automática para unidades extraíbles" y que el sistema intente abrir la tarjeta de memoria. Dado que los datos grabados se encuentran en una partición oculta, Windows podría identificar incorrectamente la tarjeta como dañada y ofrecer formatearla. Puede aparecer una advertencia similar si intenta abrir la tarjeta manualmente a través del Explorador de archivos.  
Importante: no confirme el formateo. Simplemente cierre la ventana haciendo clic en el botón [Cancel] o en la [X] de la esquina superior derecha.
:::

En el Explorador de archivos de Windows, la tarjeta de memoria aparecerá vacía. Sin embargo, los datos de la imagen de firmware para instalarla en el ASIC están presentes en la tarjeta SD y se encuentran en un área no asignada de la tabla de particiones.

::: warning
Si la operación falla, deberá formatear de nuevo la tarjeta SD (un fallo se indica mediante una barra de estado roja de la tarjeta SD o si el proceso tarda más de unos minutos).
:::

