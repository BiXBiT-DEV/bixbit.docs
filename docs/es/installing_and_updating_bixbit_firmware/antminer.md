---
title: Antminer
seoTitle: Instalar y actualizar el firmware de Antminer | BiXBiT Docs
description: "Instale y actualice el firmware BiXBiT en Antminer S19, S21, T21 y
  L7 con installer_tool.exe: hashboards compatibles, problemas conocidos,
  escaneo de IP y flasheo masivo."
order: 0
---
# Instalación y actualización del firmware BiXBiT en dispositivos Antminer

El archivo comprimido del firmware descargado contiene el archivo **installer_tool.exe**: este programa se utiliza para instalar el firmware BiXBiT. Antes de ejecutar el archivo, primero debe extraer el archivo comprimido del firmware. Puede hacerlo con las herramientas estándar de Windows (en Windows 11) o con cualquier compresor de terceros, como WinRAR.

## Lista de modelos compatibles


| Modelo de Antminer | Modelo de hashboard |
| ----------------------------- | -------------------------------------------------------------------- |
| Antminer L11 | A3SL53801 |
| Antminer L7 | BSL39601 |
| Antminer L9 | BSL41601 |
| Antminer S19 | BHB42801, BHB42803, BHB42811, BHB42821, BHB42831, BHB42841, NBS1902 |
| Antminer S19 Hydro | HHB28601 |
| Antminer S19 Pro | BHB42641, BHB42651 |
| Antminer S19 Pro Hyd. | HHB42602 |
| Antminer S19 Pro-A | NBP1901 |
| Antminer S19 Pro+ Hyd. | HHB42601, HHB42631, HHB42701, HHB42711, TH401 |
| Antminer S19 XP | BHB56601, BHB56701, BHB56801, BHB56802, BHB56806 |
| Antminer S19 XP+ | BHB68707, BHB68709 |
| Antminer S19 XP+ Hyd. / Hydro | HHB68701, HHB68703, HHB68704 |
| Antminer S19a | BHB28611 |
| Antminer S19a Pro | BHB28501 |
| Antminer S19e XP Hyd. | H6HB56702 |
| Antminer S19i | NBS2003 |
| Antminer S19j | BHB42701 |
| Antminer S19j Pro | BHB42601, BHB42603, BHB42621, BHB42631 |
| Antminer S19j Pro+ | BHB42611, BHB42612 |
| Antminer S19j XP | BHB56804, BHB56807 |
| Antminer S19j+ | BHB42701 |
| Antminer S19k Pro | BHB56901, BHB56902, BHB56903, BHB56907, TS007 |
| Antminer S21 | BHB68601, BHB68603, BHB68606 |
| Antminer S21 Hyd. / Hydro | HHB68501, HHB68502, HHB68503, HHB68504, HHB68505, HHB68601, HHB68602 |
| Antminer S21 Imm. | IHB68601 |
| Antminer S21 Pro | A3HB70601, A3HB70602, A3HB70603 |
| Antminer S21 XP | A3HB70501, A3HB70502, A3HB70503 |
| Antminer S21 XP Hyd. | H6HB70501, H6HB70502, H6HB70601 |
| Antminer S21 XP Imm. / XPImm | M1HB70602 |
| Antminer S21+ | A3HB70701, A3HB70702, A3HB70703 |
| Antminer S21+ Hyd. / Hydro | H6HB70701, H6HB70702, H6HB70704 |
| Antminer S21e Hyd. | H6HB70801, H6HB70802 |
| Antminer S21e XP Hyd. | H6HB70602 |
| Antminer T19 | NBT1903 |
| Antminer T21 | BHB68701, BHB68703, BHB68705 |
| Antminer BHB42XXX | — |
| Antminer H6HB70701 | — |
| Antminer HHB68XXX | — |


### Problemas conocidos

- No se garantiza el funcionamiento del dispositivo S19 Pro+ Hyd. con hashboards HHB42701, HHB42711 y TH401, ya que no se han realizado pruebas en dispositivos con estos modelos de hashboard. Si observa un funcionamiento inestable en dispositivos con las placas mencionadas, póngase en contacto con el soporte técnico.
- No se garantiza el funcionamiento de los dispositivos Antminer S21+ Hydro, Antminer S21 XP Hyd. y Antminer S21e XP Hyd. con ajustes superiores a los de fábrica, ya que no se han realizado pruebas de estrés en estos dispositivos. Si observa un funcionamiento inestable, póngase en contacto con el soporte técnico.
- En los dispositivos con placas de control CV, la función Restore factory settings restablece el firmware a la versión de fábrica.
- No es posible la instalación en el dispositivo L11 con firmware FR-1.3(251211-L11&L11 Pro) o posterior.
- Cambiar el tipo de conexión de red del dispositivo de Static a DHCP provoca que el dispositivo se bloquee. Esto solo se puede resolver apagando y encendiendo el dispositivo (reinicio).

## Ejecución y configuración inicial del instalador

1. Abra la carpeta en la que se extrajo el archivo comprimido y ejecute el archivo **installer_tool.exe**.
2. En la ventana **Firmware File Selection** que aparece, puede:
  - Introducir su **partner ID** en el campo **Firmware File** y hacer clic en el botón **Check Available FW versions**. A continuación, podrá seleccionar una de las versiones de firmware disponibles y descargarla haciendo clic en el botón **Download**: el firmware descargado de esta forma se utilizará para la instalación.
  - Hacer clic en el botón **Cancel**: el instalador utilizará entonces los archivos que venían originalmente en el mismo archivo comprimido (archivos locales).
   
    ![Instalador de Antminer, Firmware File Selection: Check available FW versions, versión 0.9.9.3 en la lista, Download o Cancel](/images/image1.png)
3. A continuación, se abrirá la ventana principal del programa:
  ![Ventana principal de Antminer Firmware Installer con archivos locales: IP List, Scan, lista de dispositivos, Installation Settings, Install](/images/image-8.png)
4. Haga clic en el botón **IP List** para establecer el rango de escaneo de red con el que se buscarán los dispositivos que desea flashear.
5. En la ventana **Info** que aparece:
  - Si hace clic en **Yes**, las direcciones IP inicial y final de la subred a la que está conectado se añadirán automáticamente a la lista de rangos del instalador. Esto puede resultar útil si el equipo desde el que se flashearán los dispositivos se encuentra en la misma subred que dichos dispositivos.
  - Si hace clic en **No**, se abrirá una ventana **Miner IP Management** vacía, en la que deberá introducir manualmente los datos para el escaneo de red.
6. Para añadir manualmente un rango de escaneo de red, siga estos pasos:
  - **Start IP**. Establezca la dirección IP inicial del rango de escaneo.
  - **End IP**. Establezca la dirección IP final del rango de escaneo. Si solo necesita añadir una única dirección IP en lugar de un rango, puede dejar este campo vacío.
  - **HTTP User**. Indique el nombre de usuario de la interfaz web del minero.
  - **HTTP Pass**. Indique la contraseña de la interfaz web del minero.
  - **Comment**. Asigne un nombre a este rango (opcional).
  - A continuación, haga clic en el botón **Add** para añadir el rango indicado.

::: info
Al añadir varios rangos, asegúrese de que las direcciones IP que contienen no se solapen, ya que en ese caso el programa no permitirá guardar el nuevo rango.
:::

7. Seleccione los rangos necesarios mediante las casillas de verificación y haga clic en **OK**.
  ![Miner IP Management del instalador: rango 192.168.66.1-192.168.66.255, usuario HTTP root, puerto HTTP 80, puerto SSH 22, Ok](/images/image-10.png)
8. Después, en la ventana principal del programa, haga clic en el botón **Scan** y espere a que finalice el escaneo de red.

## Instalación del firmware BiXBiT en los dispositivos

1. Utilice las casillas de verificación para seleccionar los dispositivos que desea flashear.
2. En el bloque **Installation Settings**, puede especificar adicionalmente las siguientes opciones antes del flasheo:
  ![Installation Settings: Parallel installs (1-10) en 3, dos casillas Force install, botón Firmware Install Options](/images/image-11.png)
  - **Parallel Installs**: indique el número de dispositivos que se flashearán simultáneamente (de 1 a 10).
  - La casilla **Force install on new firmware version** permite instalar una versión del firmware BiXBiT anterior a la que ya está instalada en el dispositivo.
  - La casilla **Force install to unknown device models** permite intentar instalar el firmware aunque el modelo del dispositivo no se haya identificado correctamente.
  - Al hacer clic en el botón **Firmware Install Options**, aparecerá un campo para introducir la **AMS key (AMS API key)**: si la introduce, los dispositivos aparecerán en AMS casi inmediatamente después de la instalación del firmware y no será necesario configurar el API key por separado.
   
    ![Cuadro de diálogo Firmware Install Options con el campo AMS Key para añadir mineros a AMS durante la instalación](/images/image8.png)
3. Haga clic en el botón **Install**. Si el dispositivo se flashea correctamente, aparecerá en el campo Progress un mensaje con el texto **“Done. Code: Success: OK!”** o **“Done. Code: CV: Installed”**. Después, puede cerrar el programa.
  ![Antminer Firmware Installer: Antminer S19 XP (AMLogic) flasheado, Progress muestra Done. Code: Success: OK!](/images/image-12.png)

::: warning
Importante: después de instalar el firmware en dispositivos con placas CVtek, se recomienda utilizar el botón “CV Monitoring”; de este modo, el firmware BiXBiT se restaurará automáticamente en estos dispositivos después de reiniciarlos:

1. Seleccione los dispositivos con placas CVtek mediante las casillas de verificación.
2. Haga clic en el botón “CV Monitoring”.
3. El instalador debe permanecer en ejecución de forma continua y estar en la misma red que los dispositivos.

Tras realizar estos pasos, el instalador comprobará periódicamente si el firmware está instalado en los dispositivos con placas CVtek y lo restaurará si es necesario.
:::