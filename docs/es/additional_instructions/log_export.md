---
title: Exportación de logs
seoTitle: Exportar logs de Antminer y Whatsminer | BiXBiT Docs
description: "Exporte los logs de Antminer y Whatsminer para diagnosticar problemas: descárguelos
  desde la interfaz web del firmware BiXBiT o use WhatsMinerTool Remote Ctrl
  > Export Log."
order: 0
---
# Exportación de logs

Si su dispositivo presenta fallos o errores, puede exportar sus logs para analizar el comportamiento del dispositivo y determinar las causas de dichos errores.

## Antminer

### A través de la interfaz web del dispositivo con firmware BiXBiT

- Vaya a la sección **Miner Log**.
- Abra la pestaña **Download**.
- **Seleccione las fechas** para las que desea descargar los logs.
- **Elija una carpeta** en su computadora para guardar los logs.

## Whatsminer

### Con WhatsminerTool

![WhatsMinerTool: minero marcado, Remote Ctrl abre el cuadro Remote Control Dialog con Export Log entre las opciones](/images/image-79.png)

- **Paso 1:** Seleccione la dirección IP del dispositivo cuyos logs de funcionamiento desea exportar. Puede seleccionar varios dispositivos.
- **Paso 2:** Vaya a **[Remote Ctrl]**.
- **Paso 3:** Seleccione **[Export Log]**.
- **Paso 4:** Confirme haciendo clic en **[OK]**.
- **Paso 5:** En el cuadro de diálogo que se abre, seleccione el directorio donde desea guardar los logs.
- **Paso 6:** Haga clic en **[OK]** para iniciar el proceso de exportación de logs.

  ![Cuadro de diálogo Browse for Folder: carpeta LOGS seleccionada como directorio de exportación de logs](/images/image-80.png)

Durante la exportación, el botón **[Remote Ctrl]** cambiará su nombre a **[Stop]**. Puede hacer clic en él si desea interrumpir el proceso de exportación de logs.

Al cabo de un tiempo, aparecerán uno o varios archivos con un nombre similar a "**192.168.88.79.20220628161335.tgz**" en la carpeta que seleccionó anteriormente.

### A través de la interfaz web del dispositivo con firmware BiXBiT

- Abra la interfaz web del dispositivo.
- Vaya a la sección **Status** -> **Miner Status**.
- Haga clic en el botón **Download Logs**.
- Espere a que finalice el proceso "**Preparing logs**" (de 20 segundos a 2 minutos).
- Seleccione una carpeta para guardar el archivo.

El archivo tendrá un nombre similar a "**M60_VK20_2026-08-14_18-18.tgz**".