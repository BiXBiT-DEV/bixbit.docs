---
title: Preparación de un minero ASIC para refrigeración por inmersión
seoTitle: Preparar Whatsminer para refrigeración por inmersión | BiXBiT Docs
description: "Prepare un Whatsminer para refrigeración por inmersión con firmware BiXBiT:
  retire los ventiladores, active Liquid Cooling, desactive la verificación de ventiladores de la PSU o flashee la PSU
  con AirToLiquid."
order: 0
---
# Preparación para la refrigeración por inmersión

## ASIC Whatsminer

### Preparación del dispositivo para la inmersión

- Flashee su dispositivo con el firmware BiXBiT correspondiente al modelo de su dispositivo.
- Desconecte y retire los ventiladores principales del dispositivo ①,②.
- Abra la cubierta de la fuente de alimentación y retire su ventilador ③.

  ![Whatsminer preparado para inmersión: aberturas de los ventiladores delantero y trasero con los ventiladores retirados](/images/image-39.png)
- Limpie la carcasa y las placas del dispositivo de polvo y suciedad.
- Sumerja el dispositivo en el fluido de inmersión.

### Desactivación de la verificación de los ventiladores principales en el dispositivo

Para desactivar la verificación de ventiladores en el propio dispositivo, vaya a **Configuration** > **Miner Configuration** en la interfaz web y seleccione la pestaña **Overclock**.

- Active la casilla **[Liquid Cooling] ①**.
- Guarde y aplique la configuración haciendo clic en **[Save & Apply] ②**.

  ![Firmware BiXBiT en Whatsminer, pestaña Overclock: active la casilla Liquid Cooling](/images/image-40.png)

### Desactivación de la verificación de los ventiladores de la fuente de alimentación

#### Desactivación de la verificación de ventiladores de la PSU (fuente de alimentación) para dispositivos de las series M3X, M5X, M6X y M7X


| Serie del dispositivo | Métodos para desactivar los ventiladores de la fuente de alimentación |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| **M3X, M5X, M6X** | Use la función Disable Power Fan |
| **M2X** (**M3X, M5X, M6X** si Disable Power Fan falla) | Actualice el firmware de la PSU automáticamente mediante la función **Upgrade PSU Firmware**<br>Actualice el firmware de la PSU automática o manualmente con la utilidad **Air To Liquid Tool**<br>Use un **emulador de ventilador** (conector ficticio) |


::: warning
La desactivación de la verificación de los ventiladores de la fuente de alimentación se realiza exclusivamente para la refrigeración por inmersión.
:::

- Abra la interfaz web del dispositivo.
- Vaya a **Configuration > Miner Configuration**.
- Seleccione la pestaña **PSU Firmware**.
- Para desactivar la verificación del ventilador de la PSU, haga clic en el botón **[Disable Power Fan]**.

  ![Pestaña PSU Control del firmware BiXBiT en Whatsminer (PSU P732A): el botón Disable Power Fan desactiva la verificación del ventilador de la PSU](/images/image-41.png)

::: warning
El dispositivo debería reiniciarse automáticamente. Si no lo hace, realice un **Reboot** del dispositivo.
:::

#### Desactivación de la verificación de ventiladores de la PSU para mineros de la serie M2X

::: warning
La fuente de alimentación del minero se flashea exclusivamente para la refrigeración por inmersión y para desactivar la verificación del ventilador de la PSU. El proceso de flasheo de la PSU es irreversible, y la fuente de alimentación solo puede devolverse al modo "aire" a través de un centro de servicio.
:::

::: warning
Este método se recomienda solo para dispositivos de la serie M2X, ya que la función Disable Power Fan no funciona en esta serie.
Para dispositivos más recientes, se recomienda usar la función Disable Power Fan. Flashee la PSU solo si se producen errores al aplicarla.
:::

##### Opción 1: Actualización automática del firmware de la PSU a través de la interfaz web del dispositivo

Abra la interfaz web del dispositivo.

- Vaya a **Configuration > CGMiner Configuration**.
- Seleccione la pestaña **PSU Control**.
- Para actualizar automáticamente el firmware de la PSU, haga clic en el botón **[Upgrade PSU Firmware]**.

  ![Firmware BiXBiT en un Whatsminer M2x, pestaña PSU Control (PSU P21D): botón Upgrade PSU Firmware para el modo de inmersión](/images/image-42.png)

##### Opción 2: Actualización del firmware de la PSU con la utilidad Air To Liquid Tool

- Vaya a [BiXBiT](https://bixbit.tech).
- En el encabezado de la página, seleccione la sección "Firmware" y, en la subsección "WhatsPower Firmware", haga clic en el modelo de fuente de alimentación correspondiente a su minero.

  ![Menú Firmware del sitio web de BiXBiT con la lista de firmware de PSU WhatsPower: p222b, p222c, p221c, p21D, p21](/images/image-43.png)
- Comenzará la descarga del archivo comprimido. Una vez finalizada la descarga, extraiga del archivo comprimido el archivo interno con la extensión **.bin**.

Proceso de flasheo de la PSU:

- **Paso 1.** Ejecute **AirToLiquidTool** y haga clic en el botón **[Setting]**.

  ![Barra de herramientas de AirToLiquid 1.5.7 con el botón Setting resaltado](/images/image-44.png)
- **Paso 2.** En el ajuste **Fw Upgrade manual/auto**, seleccione **Manual**. (Si no hay un archivo disponible para su modelo de PSU, use el modo **auto**).

  ![Setting Dialog de AirToLiquid: Fw Upgrade manual/auto configurado en Manual](/images/image-45.png)
- **Paso 3.** Haga clic en **[Miner IP]**. En el cuadro de diálogo que aparece, añada un rango de escaneo que incluya la dirección IP del dispositivo cuya PSU tiene previsto flashear. Seleccione el rango de escaneo añadido y haga clic en **[OK]**.

  ![Miner IP Management de AirToLiquid: rango de escaneo 192.168.10.1-192.168.10.255 (comentario Farm1) añadido y seleccionado](/images/image-46.png)
- **Paso 4.** Inicie el escaneo haciendo clic en el botón **[Start]**.
- **Paso 5.** Realice las siguientes acciones en orden:

  ![AirToLiquid: UpgradePower, Select File, elegir whatspower-p21-rm-fan-err.bin, marcar el minero M21S, Start Upgrade](/images/image-47.png)
  - ① Haga clic en **[UpgradePower]**.
  - ② En el menú que aparece, haga clic en **[Select File]** (si Fw Upgrade está configurado en auto, no es necesario seleccionar un archivo).
  - ③ Seleccione el archivo de firmware de la PSU descargado y haga clic en **[Open]**.
  - ④ Marque la **casilla del dispositivo** cuya PSU tiene previsto flashear.
  - ⑤ Haga clic en el botón **[StartUpgrade]**.
- **Paso 6.** Confirme el inicio del proceso de flasheo en el cuadro de diálogo que aparece haciendo clic en [OK].

  ![Confirmación de AirToLiquid para actualizar el firmware de la fuente de alimentación seleccionada, con la advertencia de que se anulará la garantía](/images/image-50.png)

Durante el proceso de flasheo de la PSU, la columna **Status** mostrará la etapa actual: **Transfering**, **Upgrading**.

![Lista de dispositivos de AirToLiquid: M21S_V22 en 192.168.10.57 muestra el estado Upgrading mientras se flashea la PSU](/images/image-52.png)

Si el proceso de flasheo de la PSU finaliza correctamente, la columna **Status** mostrará **Success**.

![Lista de dispositivos de AirToLiquid: M21S_V22 en 192.168.10.57 muestra el estado Success tras el flasheo de la PSU](/images/image-53.png)

::: info
Si no es posible flashear la PSU ni desactivar la función de verificación de presencia del ventilador en las etapas anteriores, debe instalar un emulador de ventilador (conector ficticio) en el conector correspondiente a dicho ventilador.
:::