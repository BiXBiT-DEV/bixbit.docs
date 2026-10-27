---
title: Whatsminer
seoTitle: Instalar y actualizar el firmware de Whatsminer | BiXBiT Docs
order: 0
---
# Instalación y actualización del firmware BiXBiT en dispositivos Whatsminer

Antes de elegir un método de flasheo, compruebe el modelo de la placa de control instalada. Puede hacerlo con **WhatsminerTool**:

![image.png](/images/image-127.png)

o consultarlo en la pestaña Status -> Overview de la interfaz web del ASIC:

![image.png](/images/image-128.png)

## Si su dispositivo tiene una placa de control H3, H6 o H6os

Ejecute **WhatsMinerTool** y establezca un rango de escaneo que incluya la dirección IP del dispositivo en el que se instalará el firmware. Inicie el escaneo y asegúrese de que el dispositivo aparece en la lista.

![image.png](/images/image-2.png)

- **Paso 1:** Haga clic en **[Upgrade]** ①.
- **Paso 2:** Haga clic en **[Select File]** ②.
- **Paso 3:** En la ventana emergente, seleccione el archivo **"Whatsminer-ALL-Models_X.X.X.X.bin"** ③ del archivo comprimido que descargó y extrajo previamente (**X.X.X.X** es la versión del firmware).
- **Paso 4:** Confirme la selección del archivo haciendo clic en **[Open]** ④.
- **Paso 5:** Marque la casilla situada a la izquierda de la dirección IP del dispositivo ⑤ cuyo firmware desea actualizar. Puede seleccionar varios dispositivos, ++si tienen instaladas placas de control H3, H6 o H6os++.
- **Paso 6:** Haga clic en el botón **[Start Upgrade]** ⑥ para iniciar el proceso de actualización. En el cuadro de diálogo que aparece, haga clic en **[OK]**.

::: info
El estado **Success** en la columna **Status** del dispositivo que se está actualizando indica que el proceso de instalación ha finalizado correctamente. A continuación, el dispositivo se reiniciará automáticamente.
:::

## Si su dispositivo tiene una placa de control H616

### Instalación del firmware BiXBiT sobre una versión de firmware de fábrica

#### **Etapa 1. Grabación de la imagen del firmware en una tarjeta SD:**

- **Paso 1:** Prepare la **tarjeta SD:** se recomienda utilizar tarjetas SD con una capacidad de 2 GB a 16 GB inclusive. Formatee completamente la tarjeta SD mediante Administración de discos (haga clic con el botón derecho en el botón Inicio, seleccione Administración de discos; formato del sistema de archivos: FAT32).
- **Paso 2:** Con el programa **"PhoenixCard"** ++(la carpeta con el programa "PhoenixCard" se encuentra en el archivo comprimido del firmware)++, grabe en la tarjeta SD la imagen **"Whatsminer-ALL-Models_X.X.X.X_h616-after20231213.img"** del archivo comprimido del firmware descargado (**X.X.X.X** es la versión del firmware).

#### **Etapa 2. Flasheo del minero ASIC mediante la tarjeta SD:**

- **Paso 1.** Antes de insertar la tarjeta SD, desconecte el cable de alimentación y espere a que los indicadores dejen de parpadear por completo.
- **Paso 2.** Inserte la tarjeta SD y vuelva a conectar el cable de alimentación.
- **Paso 3.** Una vez finalizado el proceso de flasheo, solo quedará encendido el indicador verde. Espere unos segundos y vuelva a desconectar el cable de alimentación.
- **Paso 4.** Asegúrese de que los indicadores se hayan apagado por completo y retire la tarjeta SD.
- **Paso 5.** Vuelva a conectar la alimentación.

### Actualización del firmware BiXBiT sobre la versión 1.7.X.X y anteriores

En el archivo comprimido del firmware hay un archivo llamado **"Whatsminer-ALL-Models_CustomCleanupBefore1.8_h616.bin"**. Este archivo debe utilizarse ++**ÚNICAMENTE**++ para actualizar versiones anteriores ++**(hasta la 1.7.x.x inclusive)**++ del firmware BiXBiT a la versión actual y ++**ÚNICAMENTE para placas de control H616**++.

Ejecute **WhatsMinerTool** y establezca un rango de escaneo que incluya la dirección IP del dispositivo en el que se instalará el firmware. Inicie el escaneo y asegúrese de que el dispositivo aparece en la lista.

#### **Etapa 1. Instalación de la versión intermedia del firmware:**

![image.png](/images/image-3.png)

- Paso 1: Haga clic en **[Upgrade]** ①.
- Paso 2: Haga clic en **[Select File]** ②.
- Paso 3: En la ventana emergente, seleccione el archivo **"bixbit_before_1.8.bin"** ③ del archivo comprimido que descargó y extrajo previamente.
- Paso 4: Confirme la selección del archivo haciendo clic en **[Open]** ④.
- Paso 5: Marque la casilla situada a la izquierda de la dirección IP del dispositivo ⑤ cuyo firmware desea actualizar. Puede seleccionar varios dispositivos si tienen instalado un ++**firmware BiXBiT obsoleto**++.
- Paso 6: Haga clic en el botón **[Start Upgrade]** ⑥ para iniciar el proceso de actualización. En el cuadro de diálogo que aparece, haga clic en **[OK]**.

::: info
El estado **Success** en la columna **Status** del dispositivo que se está actualizando indica que el proceso de instalación ha finalizado correctamente. A continuación, el dispositivo se reiniciará automáticamente. Tras instalar correctamente el archivo intermedio, la versión del firmware se mostrará con el sufijo **"CustomNeedUpgrade"**.

![image.png](/images/image-5.png)
:::

#### **Etapa 2. Instalación de la versión principal del firmware:**

![image.png](/images/image-4.png)

- **Paso 1:** Haga clic en **[Upgrade]** ①.
- **Paso 2:** Haga clic en **[Select File]** ②.
- **Paso 3:** En la ventana emergente, seleccione el archivo **"Whatsminer-ALL-Models_X.X.X.X.bin"** ③ del archivo comprimido que descargó y extrajo previamente (**X.X.X.X** es la versión del firmware).
- **Paso 4:** Confirme la selección del archivo haciendo clic en **[Open]** ④.
- **Paso 5:** Marque la casilla situada a la izquierda de la dirección IP del dispositivo ⑤ cuyo firmware desea actualizar. Puede seleccionar varios dispositivos si tenían instalada la versión intermedia del firmware.
- **Paso 6:** Haga clic en el botón **[Start Upgrade]** ⑥ para iniciar el proceso de actualización. En el cuadro de diálogo que aparece, haga clic en **[OK]**.

::: info
El estado **Success** en la columna **Status** del dispositivo que se está actualizando indica que el proceso de instalación ha finalizado correctamente. A continuación, el dispositivo se reiniciará automáticamente. Tras instalar correctamente el archivo principal, la versión del firmware se mostrará ++**sin el sufijo "CustomNeedUpgrade"**++.
:::

### Actualización del firmware BiXBiT sobre la versión 1.8.0.X

Ejecute **WhatsMinerTool** y establezca un rango de escaneo que incluya la dirección IP del dispositivo en el que se instalará el firmware. Inicie el escaneo y asegúrese de que el dispositivo aparece en la lista.

![image.png](/images/image-6.png)

- **Paso 1:** Haga clic en **[Upgrade]** ①.
- **Paso 2:** Haga clic en **[Select File]** ②.
- **Paso 3:** En la ventana emergente, seleccione el archivo **"Whatsminer-ALL-Models_X.X.X.X.bin"** ③ del archivo comprimido que descargó y extrajo previamente (**X.X.X.X** es la versión del firmware).
- **Paso 4:** Confirme la selección del archivo haciendo clic en **[Open]** ④.
- **Paso 5:** Marque la casilla situada a la izquierda de la dirección IP del dispositivo ⑤ cuyo firmware desea actualizar. Puede seleccionar varios dispositivos si tenían instalada la versión intermedia del firmware.
- **Paso 6:** Haga clic en el botón **[Start Upgrade]** ⑥ para iniciar el proceso de actualización. En el cuadro de diálogo que aparece, haga clic en **[OK]**.

::: info
El estado **Success** en la columna **Status** del dispositivo que se está actualizando indica que el proceso de instalación ha finalizado correctamente. A continuación, el dispositivo se reiniciará automáticamente.
:::