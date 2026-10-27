---
title: Configuración básica de un minero ASIC
seoTitle: "Configuración básica de un minero ASIC: dirección IP y pools | BiXBiT Docs"
description: Conecte un Antminer o Whatsminer, averigüe su IP con WhatsMinerTool
  o IP Reporter y luego configure pools y workers en BTC Tools, WhatsMinerTool o la
  interfaz web
order: 0
---
# Configuración básica de un minero ASIC

## Hardware necesario

- Red eléctrica, cableado e interruptores automáticos (dispositivos de protección) que correspondan a las especificaciones del dispositivo.
- Un router con acceso a internet.
- Un ordenador conectado a este router.
- Un cable Ethernet ("par trenzado"/"latiguillo") para conectar el minero ASIC a este router.
- En algunos casos, puede ser necesaria una tarjeta microSD. Se recomienda utilizar tarjetas SD con una capacidad de 8 GB a 16 GB inclusive. Para los dispositivos cuyas placas de control solo disponen de un puerto MicroUSB, se necesitará además un adaptador y un lector de tarjetas.

::: info
El dispositivo no dispone de módulo de comunicación inalámbrica y requiere un cable Ethernet que lo conecte al router/switch/módem de la red. Importante: su ordenador debe estar en la misma red local que el minero ASIC.
:::

## Software necesario

### Para dispositivos Whatsminer:

- **WhatsMinerTool.** Puede descargar la última versión de WhatsMinerTool desde: [WhatsMinerTool](https://www.whatsminer.com/src/views/firmware-download.html#Tool). El uso de versiones obsoletas puede provocar que la instalación del firmware no se complete correctamente.
- **Firmware BiXBiT** correspondiente a su dispositivo [Whatsminer](https://bixbit.tech/ru/firmwares#firmware-whatsminer).
- Cualquier navegador de Internet.

### Para dispositivos Antminer:

- **BTC Tools.** Puede descargar la última versión de BTC Tools desde: [https://btc-tools.org/](https://btc-tools.org/)
- **Firmware BiXBiT** correspondiente a su dispositivo [Antminer](https://bixbit.tech/ru/firmwares#firmware-antminer).
- **IPReporter.exe**. Para los casos en que no conozca la dirección IP del dispositivo: [IP Reporter.zip](https://assets-product.bitmain.com.cn/shop-product-s3/firmware/IP%20Reporter.zip)
- Cualquier navegador de Internet.

## Conexión del dispositivo

Antes de encenderlo, asegúrese de que su red eléctrica, el cableado y los interruptores automáticos correspondan al consumo de energía del dispositivo.

::: warning
El dispositivo no tiene botón de encendido. El dispositivo empieza a funcionar inmediatamente al conectarse a la red eléctrica y, por lo general, se produce un breve pico de corriente ("spike"). Se recomienda encarecidamente no conectar el dispositivo enchufándolo directamente a una toma con tensión, para evitar daños en los conectores de alimentación, la clavija y la toma. Si es posible, dote a cada dispositivo de un interruptor automático propio y encienda el dispositivo mediante este.
:::

- Conecte el cable de alimentación al dispositivo. Asegúrese de que la conexión sea firme.
- Conecte un extremo del cable Ethernet al puerto correspondiente del dispositivo y el otro extremo a un puerto libre del router/switch/módem.
- Inserte la clavija del cable de alimentación en la toma y suministre energía al dispositivo activando el interruptor automático.
- Asegúrese de que los ventiladores del dispositivo empiecen a girar y de que los indicadores LED se enciendan. Además, al cabo de unos segundos, los indicadores del puerto Ethernet deberían encenderse y parpadear.

::: info
Si los ventiladores no arrancan y los LED no se encienden, compruebe la alimentación del dispositivo.
Si el dispositivo se enciende, pero los indicadores Ethernet no funcionan, asegúrese de que el router/switch esté encendido y de que el cable de red funcione y esté correctamente conectado.
:::

## Determinación de la dirección IP del minero ASIC en la red

### Para dispositivos Whatsminer:

- Ejecute la utilidad **WhatsMinerTool**.
- Haga clic en el botón **[ IP Monitor ]** ①.
- En la ventana "**Detect and Bind IP**" que se abre, haga clic en el botón **[ Start ]** ②.

  ![WhatsMinerTool 9.2.1: botón IP Monitor](/images/image-13.png)
- En el panel de control del dispositivo, mantenga pulsado el botón **IP found** hasta que los LED verde y rojo parpadeen juntos varias veces.

  ![Panel de la placa de control de Whatsminer: el botón IP Found resaltado junto al puerto ETH y los LED de estado](/images/image-14.png)
- En la ventana Detect and Bind IP debería aparecer una línea con su minero. Fíjese en la columna **Source IP** (por ejemplo, 192.168.10.142) y recuerde esta dirección.

  ![Ventana Detect and Bind IP de WhatsMinerTool: la columna Source IP con la dirección IP del minero detectado](/images/image-15.png)
- Cierre esta ventana y confirme el cierre (haga clic en **[OK]** en la ventana emergente).

Ahora debe añadir el rango de escaneo de red para la utilidad **WhatsMinerTool**:

![WhatsMinerTool Miner IP Management](/images/image-16.png)

- Haga clic en **[Miner IP]** para abrir la ventana **Miner IP Management** ①.
Si ya hay entradas en esta ventana, puede eliminarlas, modificarlas o simplemente añadir otras nuevas.

**Añadamos una nueva:**

- En el campo **Start IP** ②, introduzca la **dirección IP** obtenida anteriormente, cambiando el último número por "**1**" (por ejemplo, 192.168.10.1).
- En el campo **End IP** ③, introduzca la **dirección IP** obtenida, cambiando el último número por "**255**" (por ejemplo, 192.168.10.255).
- Haga clic en el botón **[ Add ]** ④.
- El rango introducido aparecerá en la lista ⑤. Marque la casilla del rango que desea escanear y haga clic en **[OK]** ⑥.

**Ahora puede iniciar el escaneo de la red:**

- En la ventana principal de la utilidad, haga clic en **[ Start ]** ①.

  ![Ventana principal de WhatsMinerTool: el botón Start (1) que inicia el escaneo de la red en busca de dispositivos Whatsminer](/images/image-17.png)

El botón cambiará su nombre a "**Monitoring**", se iniciará el escaneo y, al cabo de un tiempo, los dispositivos encontrados se mostrarán en la lista.

![WhatsMinerTool en modo Monitoring: mineros Whatsminer encontrados con columnas de IP, estado Running, modelo, hashrate y potencia](/images/image-18.png)

### Para dispositivos Antminer:

Para empezar, debe determinar la **dirección IP** del minero ASIC asignada por el router/módem. Para ello:

1. Vaya al enlace ​[BITMAIN Shop](https://service.bitmain.com/support/download), en las dos listas desplegables seleccione **Others** ① e **IP-reporter** ②. A continuación, descargue el archivo [IP Reporter.zip](https://assets-product.bitmain.com.cn/shop-product-s3/firmware/IP%20Reporter.zip) haciendo clic en el botón **Download** ③.
  ![Página Firmware List de Bitmain](/images/image-19.png)
2. Ejecute la utilidad **IPReporter.exe**.
  ![Ventana de Bitmain IP Reporter](/images/image-20.png)
3. Haga clic en el botón **[Start]** ①.
4. En el panel de control, mantenga pulsado el botón **IP Report** hasta que emita un pitido (unos 5 segundos).
  ![Placa de control de Antminer S19: botón IP Report, puerto Ethernet, botón Reset, LED rojo Fault y LED verde Normal señalados](/images/image-21.png)
5. La dirección IP se mostrará en su pantalla.
  ![Cuadro de diálogo Confirmation de IP Reporter con la dirección IP del Antminer](/images/ip-reporter-1.png)
6. Introduzca la dirección IP obtenida en la barra de direcciones de su navegador.
7. Inicie sesión en la interfaz web del dispositivo con las credenciales predeterminadas: root/root.

::: info
Puede cambiar la dirección IP del dispositivo o elegir otro método de asignación de IP (de DHCP a estática o viceversa). Para ello:

1. Vaya a la sección **[IP Setting]**.
2. En el campo Protocol, seleccione el método de asignación de la dirección IP.
3. Si selecciona **Static**, introduzca la dirección IP, la máscara de subred, la puerta de enlace y el servidor DNS.
4. Haga clic en **[Save]**.

:::

## Configuración de pools y workers

- Las direcciones de los pools y el nombre del worker se obtienen del propio pool; el tipo de moneda puede ser cualquiera que admita su pool basada en el algoritmo SHA-256. La contraseña y el sufijo son opcionales.
- Para evitar tiempos de inactividad del equipo, no se recomienda especificar tres direcciones de pool idénticas. En caso de pérdida de conexión, el dispositivo intentará cambiar a la misma dirección no disponible, lo que no resolverá el problema. Se recomienda especificar tres direcciones de pool diferentes. Se permite utilizar direcciones de distintos pools, no solo de uno; esto aumenta la fiabilidad de la conexión y reduce el riesgo de inactividad.
- Los pools de la configuración del dispositivo se procesan en el orden en que se especifican: del primero al último. Si falla la conexión con el primer pool, el dispositivo pasa automáticamente al siguiente de la lista. Este proceso continúa hasta que se establece correctamente una conexión o se agotan todos los pools disponibles.
- Si, después de cambiar los pools, el dispositivo no se conecta al nuevo pool y sigue funcionando con el anterior, reinicie (Reboot) el dispositivo.

### Para dispositivos Whatsminer:

#### Configuración mediante WhatsminerTool:

- En la ventana de **WhatsMinerTool**, después de escanear la red y detectar el dispositivo, haga clic en el botón **[Pools]** ①.
- Introduzca la dirección del pool, el nombre del worker, el sufijo, la contraseña y el tipo de moneda en los campos correspondientes ②. Puede configurar uno o varios pools según sea necesario.
- Seleccione las direcciones IP de los dispositivos en los que desea aplicar la configuración de pools introducida. Puede seleccionar varios dispositivos ③.
- Haga clic en **[Start Upgrade]** ④.
- Cuando aparezca el cuadro de diálogo, haga clic en **[OK]** para completar la configuración.

  ![Formulario Pools de WhatsMinerTool: campos de pool, worker, sufijo y contraseña](/images/image-23.png)
- Para ocultar el formulario de configuración de pools, vuelva a hacer clic en el botón **[ Pools ]** ①.

::: info

- Haga clic en **[Fixed Pools Input]** para guardar la dirección del pool que ha introducido. Así, al configurar este mismo pool para otros dispositivos, no tendrá que volver a introducirla; estará disponible en la lista desplegable.
- Haga clic en **[Set Pool Only]** para cambiar solo el pool sin modificar la configuración del worker, el formato del sufijo, la contraseña, el tipo de moneda y otros parámetros.
- El uso de sufijos resulta especialmente útil con un gran número de dispositivos: permiten hacer un seguimiento de la rentabilidad de cada worker individual en el pool de minería, ya sea un único dispositivo o un grupo de dispositivos. Opciones de configuración del sufijo:
  - **No-suffix**: sin sufijo. Conveniente si tiene un único dispositivo.
  - **Custom suffix**: sufijo definido por el usuario. Añade al worker un sufijo introducido por el usuario en el campo correspondiente.
  - **IP-suffix**: añade automáticamente la dirección IP del dispositivo al nombre del worker. El número de octetos (partes de la dirección IP) que se añaden automáticamente al worker se configura en la sección Setting, en el campo IP Suffix Count.
  - **Custom with IP**: una combinación de las opciones IP-suffix y Custom suffix.
  :::

#### Configuración mediante la interfaz WEB del dispositivo:

Este método es adecuado para dispositivos con firmware de fábrica y con firmware BiXBiT.

- Abra la **dirección IP del minero** en su navegador (por ejemplo, [https://192.168.88.96](https://192.168.88.96)) e introduzca el **usuario** / la **contraseña** configurados en el dispositivo (por defecto, **admin** / **admin**).
- Vaya a la sección ① **Configuration** > **Miner Configuration**, pestaña **Pool**.
- Para configurar el pool, en el menú desplegable de **Pool 1** ②, seleccione **--custom--**.
En lugar del menú desplegable aparecerá un campo de entrada.
- Rellene el campo que acaba de aparecer, así como **Pool1 worker** y **Pool1 password** ③.

  ![Interfaz web de Whatsminer: menú CGMiner Configuration](/images/image-24.png)
- Si es necesario, configure **Pool 2** y **Pool 3** de la misma manera.
- Haga clic en **[ Save & Apply ]** para guardar la configuración.

::: info
Después de cambiar los pools, debe **reiniciar** el minero.
:::

### Para dispositivos Antminer:

#### Configuración mediante BTC Tools:

1. Descargue la última versión de BTC Tools: [https://btc-tools.org/](https://btc-tools.org/). Tras descargar el archivo comprimido, extraiga su contenido en una carpeta aparte. Inicie BTC Tools haciendo doble clic en **“BTCTools-vx.x.x.exe”**.
  ![BTC Tools v1.3.4: lista IP Ranges](/images/image-25.png)
2. En la sección **IP Ranges**, establezca el rango de direcciones IP para el escaneo que incluya la dirección IP de su dispositivo. Para ello, haga clic en el botón **[+]**, que abrirá la ventana de diálogo **IP Range Editor**. Establezca las direcciones IP inicial y final y, a continuación, haga clic en el botón **[OK]**.
  ![IP Range Editor de BTC Tools: rango 192.168.1.1–192.168.1.255](/images/image-26.png)
3. Después de configurar, guardar y seleccionar el rango de IP mediante la función **IP Ranges**, haga clic en **[Scan]** o **[Monitor]** para iniciar el escaneo:
  - **[Scan]**: inicia un escaneo de los rangos seleccionados (instantánea **única** del rango).
  - **[Monitor]**: escanea **de forma continua** los rangos de IP seleccionados con el **Monitor Interval** especificado.
4. Espere a que se detecte su dispositivo y a que finalice el escaneo de la red. A continuación, podrá proceder a configurar los pools. Introduzca los datos necesarios en los campos correspondientes:
  ![BTC Tools después del escaneo](/images/image-28.png)
  - **Pool 1/2/3**: dirección del pool/stratum.
  - **SubAccount**: worker.
  - **PWD**: contraseña (opcional).
  - **Worker Suffix**: opciones de configuración del sufijo:
    - **[IP]**: añade automáticamente la dirección IP del dispositivo al nombre del worker. El número de octetos que se añaden automáticamente se configura en los ajustes de BTC Tools.
    - **[No Change]**: la configuración del sufijo no se modificará (por defecto).
    - **[Empty]**: sin sufijo.

#### Configuración mediante la interfaz WEB del dispositivo con firmware de fábrica:

1. Haga clic en **[Settings]** en la parte izquierda de la interfaz web.
  ![Página Settings del firmware de fábrica del Antminer S21 Pro](/images/image-29.png)
2. Introduzca los datos del pool de minería en los campos correspondientes: **Mining Address**: dirección del pool/stratum, **Miner Name**: worker, **Password**: contraseña (opcional).
3. Haga clic en **[Save]** para aplicar la configuración.

#### Configuración mediante la interfaz WEB del dispositivo con firmware BiXBiT:

![Firmware BiXBiT para Antminer](/images/image-30.png)

1. Haga clic en **[Settings]** en la parte izquierda de la interfaz web.
2. En la pestaña de ajustes **[Setup]**, en la sección **POOLS**, introduzca los datos del pool de minería en los campos correspondientes: **MINING ADDRESS**: dirección del pool/stratum, **MINING USER**: worker, **PASSWORDS**: contraseña (opcional).
3. Haga clic en **[Save]** para aplicar la configuración.

