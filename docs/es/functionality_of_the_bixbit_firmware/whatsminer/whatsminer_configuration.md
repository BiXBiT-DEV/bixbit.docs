---
title: Sección Configuration
seoTitle: "Firmware de Whatsminer: sección Configuration | BiXBiT Docs"
description: "Configuration de Whatsminer en el firmware BiXBiT: red, pools,
  perfiles de overclock, Profile Switcher, Hotel Fee, control de la PSU, placas, límites
  de temperatura y proxy."
order: 0
---
# Sección Configuration

## Interfaces

En esta sección puede consultar las estadísticas de red y cambiar la configuración de red del dispositivo.

### Estadísticas

![Resumen de Interfaces de Whatsminer: estado de LAN (eth0) con tiempo de actividad, dirección MAC, tráfico RX/TX, IPv4 y el botón Edit](/images/fda74569-4e91-440d-b193-8303e932648a.png)

- **Uptime** — tiempo de actividad de la conexión actual con el router.
- **MAC-Address** — dirección MAC del dispositivo.
- **RX** — cantidad de datos recibidos de la red (entre paréntesis se muestra el número de paquetes).
- **TX** — cantidad de datos transmitidos a la red (entre paréntesis se muestra el número de paquetes).
- **IPv4** — dirección IP del dispositivo en la red local.

### Configuración de red {#network-settings}

Para configurar una dirección estática, realice los siguientes pasos en orden:

- Haga clic en el botón **Edit** junto a la interfaz LAN.
- En la página que se abre, seleccione **Static Address** en el campo **Protocol**.
- Haga clic en el botón **Switch Protocol**.

A continuación, debe indicar los parámetros de la **dirección IP** estática en los campos:

![Interfaces - LAN de Whatsminer: protocolo de dirección estática con dirección IPv4, máscara de red, puerta de enlace, broadcast y DNS personalizados](/images/7612826c-c6c6-429b-9a32-0b25f224eeba.png)

- **IPv4 address** — dirección IP de su minero ASIC en la red local.
- **IPv4 netmask** — máscara de subred en la que debe encontrarse la dirección IP indicada anteriormente.
- **IPv4 gateway** — dirección IP de la puerta de enlace. Normalmente es la primera dirección IP del rango.
- **IPv4 broadcast** — dirección IP de broadcast. Normalmente es la última dirección IP del rango.
- **Use custom DNS servers** — direcciones IP de los servidores DNS.

## Miner Configuration

Esta subsección contiene todos los ajustes de minería del dispositivo.

### Pestaña Pool

En esta pestaña puede indicar los datos de conexión a los pools. Se admiten hasta 3 pools.

![Pestaña Pool de Whatsminer en el firmware BiXBiT: Coin Type BTC, direcciones de Pool 1–3, workers y contraseñas, Save & Apply](/images/image-57.png)

- **Coin Type** — cualquiera admitida por su pool basada en el algoritmo SHA-256.
- **Pool 1/2/3** — dirección del pool. Para indicar su propio pool, seleccione la opción --custom-- e introduzca la dirección del pool en el mismo campo.
- **Pool 1/2/3 worker** — nombre del worker para este pool.
- **Pool 1/2/3 password** — contraseña del worker en este pool (opcional, según el pool).

### Pestaña Overclock {#overclock-tab}

Esta pestaña contiene diversas opciones destinadas al overclocking del dispositivo.

![Pestaña Overclock de Whatsminer: Liquid Cooling, Additional PSU, velocidad y modo del ventilador, perfil actual, Advanced Options](/images/image-58.png)

#### Liquid Cooling

Esta casilla está diseñada para **cambiar el dispositivo al modo de refrigeración por inmersión**.
Cuando se activa esta casilla, el software deja de comprobar los ventiladores del dispositivo. Normalmente se utiliza junto con **[Disable Power Fan]**.

::: info

- Cuando se activa este modo (en Miner Status → Summary), el parámetro Fan Speed cambia a Liquid Cooling.
- Si activa este modo y deja los ventiladores en el dispositivo, estos girarán, pero el dispositivo no podrá controlar su velocidad.
- Esta función también puede utilizarse para refrigerar el dispositivo con ventiladores no originales.
:::

#### Additional PSU

Este modo está destinado a conectar una **PSU (fuente de alimentación) adicional** al dispositivo.



&nbsp;

#### Startup Cooling Fan Speed %

Este parámetro sirve para establecer la velocidad de los ventiladores (en porcentaje) desde el momento en que finaliza la purga (velocidad de los ventiladores al 100 %) hasta el momento en que el dispositivo comienza a funcionar. Determina la velocidad a la que el dispositivo empieza a refrigerarse. ++No desactiva la purga inicial del dispositivo, por lo que seguirá siendo ruidoso al arrancar.++

#### Fan Mode

Esta función sirve para cambiar el modo de funcionamiento de los ventiladores. Tiene dos estados:

- **[Auto]** — la velocidad de los ventiladores se determinará automáticamente.
- **[Manual]** — la velocidad máxima de los ventiladores estará limitada por el parámetro **[Manual Fan Speed]**.

#### Manual Fan Speed %

Si se establece el modo de refrigeración manual, **este valor actúa como limitador de la potencia máxima de los ventiladores del dispositivo**.

Si el dispositivo empieza a sobrecalentarse mientras funciona en este modo, saldrá del control manual de los ventiladores y comenzará a gestionarlos automáticamente.

#### Current Profile

Selección del perfil de overclocking del dispositivo. El perfil contiene información sobre la frecuencia de los chips, el voltaje, las temperaturas objetivo y los límites de consumo de energía para iniciar el **Autotune**, el proceso de selección de las frecuencias y voltajes óptimos según los parámetros objetivo y las condiciones de funcionamiento del dispositivo.

#### Lower Profile if Autotune Failed

Cuando se activa esta opción, si el dispositivo no consigue completar el **Autotune** en el perfil seleccionado, bajará automáticamente el perfil e iniciará el proceso de **Autotune** en él.

#### Advanced Options

Menú de ajustes de overclocking manual para usuarios experimentados. En la mayoría de los casos, se recomienda utilizar los perfiles de overclocking generados.

::: info
Los valores mostrados en los campos de esta sección dependen del perfil generado seleccionado y se actualizan automáticamente al cambiarlo. Si modifica estos valores manualmente, tendrán prioridad sobre los parámetros del perfil seleccionado anteriormente. Por ello, para evitar aplicar accidentalmente datos introducidos manualmente al hacer overclocking del dispositivo, se recomienda volver a seleccionar el perfil de overclocking deseado y desmarcar la casilla **Advanced options**.
:::

- **Target Frequency:** frecuencia media objetivo de los chips de las placas a la que el minero aspirará durante el autotune.
- **Target Voltage:** voltaje objetivo aplicado a las placas al que el minero aspira durante el autotune.
- **Minimum Voltage:** voltaje mínimo que el minero aplicará a las placas durante el autotune.
- **Maximum Voltage:** voltaje máximo que el minero aplicará a las placas durante el autotune.
- **Target Board Temp:** no se recomienda modificarlo. Temperatura de las placas a la que el minero aspira durante el autotune y el funcionamiento. Si no es posible mantener la temperatura en el valor indicado, el minero permitirá una desviación hasta el máximo posible (85), tras lo cual reducirá la frecuencia de funcionamiento de los chips y, en consecuencia, el hashrate.
- **Chip Ok Percent:** no se recomienda modificarlo.
- **PSU Power Limit:** consumo de energía en vatios al que aspirará el minero. Puede superar el valor indicado durante el funcionamiento, pero no más que PSU Power Max. El valor recomendado es 100-200 W inferior a PSU Power Max, pero **no superior a 3800-3900 W**.
- **PSU Power Max:** consumo de energía máximo admisible. Si se supera este valor, el minero generará un error. El valor recomendado no debe superar la potencia nominal de la fuente de alimentación del minero. Normalmente es de 3900-4000 W.
- **PSU Power Rate:** no se recomienda modificarlo.

En las columnas de la derecha puede ver indicaciones para el perfil seleccionado en forma de: **Default** — valor por defecto, **Min** — valor mínimo posible y **Max** — valor máximo posible para el campo.

Durante el proceso de overclocking es necesario supervisar la temperatura de los chips (no debe confundirse con la temperatura de las placas, que se muestra en la interfaz web en la columna **ChipTemp**).

Esta temperatura puede verse en la columna **ChipTemp** de la utilidad **WhatsMinerTool**:

![Columna ChipTemp de WhatsMinerTool: 116.0_72.1_93.8 es la temperatura máxima, mínima y media de los chips](/images/image-59.png)

En los ajustes de la utilidad, primero debe establecer el parámetro **List Column Display Mode** en "**Complete Mode**"; de lo contrario, la columna **ChipTemp** no se mostrará.

Interpretación del valor de la cadena "**116.0_72.1_93.8**": temperatura **máxima** (116.0), **mínima** (72.1) y **media** (93.8) de los chips del minero.

::: warning
El límite de temperatura de funcionamiento admisible de los chips establecido por el fabricante varía según el modelo de minero. Si se supera, el minero reduce la frecuencia de los chips. **Aunque la temperatura se considere aceptable, no se recomienda utilizar el minero en estas condiciones para evitar averías**.
:::

::: info
El error **Restart As Hashrate Error** se produce en los dispositivos de la serie M2X y se soluciona introduciendo en **Minimum Voltage** el valor indicado entre paréntesis en ese mismo error en System.log (expect vol:…).
En estos casos, también es necesario aumentar **Target** y **Maximum Voltage** en **50** y **100** respecto a **Minimum**, respectivamente.
:::

#### Generate Profiles/Stop profiles generation/Regenerate Profiles

Este botón tiene 3 estados:

- **Generate Profiles** — este botón se muestra por defecto. Al hacer clic en él, **se inicia el proceso de generación de perfiles**; la lista de perfiles y el perfil activo pueden verse en el campo **[Current profile]**.
- **Regenerate Profiles** — este botón se muestra si el proceso de generación de perfiles se completó correctamente. Al hacer clic en él, **el proceso de generación de perfiles comienza de nuevo**.
- **Stop profiles generation** — este botón se muestra si el proceso de generación de perfiles no ha finalizado. Al hacer clic en él, **el proceso de generación de perfiles se detiene**.

#### Delete Autotune Results

Elimina los resultados del autotune. (Este botón puede no aparecer si el dispositivo nunca ha completado un ajuste).

### Pestaña Profile Switcher

**Profile Switcher** es una función para cambiar automáticamente de perfil al alcanzarse determinadas temperaturas de los chips. Para utilizar esta función, indique los valores con los que el perfil se cambiará, ya sea hacia arriba o hacia abajo. En **Maximum Profile** se indica el perfil máximo por encima del cual el dispositivo no subirá el perfil de overclocking. Cada vez que se cambie el perfil, el dispositivo se reiniciará y ejecutará el Autotune en el nuevo perfil.

![Pestaña Profile Switcher de Whatsminer: activación, perfil máximo, umbrales de temperatura máxima de chip para bajar/subir el perfil, Ignore PWM](/images/image-61.png)

- **Enable Profile Switcher** — casilla para activar/desactivar la opción Profile Switcher.
- **Maximum Profile** — perfil máximo al que puede cambiar el dispositivo.
- **Lower Profile if Max Chip Temp Above** — temperatura para bajar el perfil. Cuando **uno de los chips** alcanza esta temperatura, el dispositivo bajará al perfil anterior.
- **Raise Profile if Max Chip Temp Below** — temperatura para subir el perfil. Cuando **los chips más calientes** se enfrían hasta esta temperatura, el dispositivo **subirá al perfil** siguiente.
- **Ignore PWM** — ignorar las RPM de los ventiladores. Si las condiciones de temperatura son adecuadas para subir el perfil, el dispositivo lo hará incluso con velocidades altas de los ventiladores.

### Pestaña Hotel Fee

Esta función permite indicar un pool y un porcentaje para deducciones adicionales. Cuando está activada, el porcentaje indicado del hashrate se destinará a la dirección indicada en esta pestaña.

![Pestaña Hotel Fee de Whatsminer: Enabled, URL del pool con stratum+tcp y puerto, usuario, contraseña y Fee establecido en 45](/images/skrinshot-sdelannyj-2026-08-12-v-124016.png)

Ejemplo: en la captura de pantalla anterior, la función está activada, los datos de conexión al pool están configurados y el porcentaje de deducción es del 45 %. Esto significa que el hashrate del dispositivo se repartirá entre dos pools de la siguiente manera: el 45 % irá al pool de Hotel Fee y el 55 % (100 % - 45 %) irá a los pools principales indicados en la pestaña **Configuration - Miner Configuration - Pool**.

- Enabled — activa/desactiva la función.
- URL — dirección del pool, indicada junto con el esquema (en este caso "stratum+tcp://") y el puerto (en este caso "443").
- User — nombre del worker en el pool.
- Password — contraseña del worker (opcional).
- Fee — porcentaje de deducción a este pool. Puede ser del 0.1 % al 50 %.

### Pestaña PSU Control

En esta pestaña puede flashear el firmware de la PSU y desactivar las comprobaciones del ventilador de la PSU para la refrigeración por inmersión.

![Pestaña PSU Control de Whatsminer: información del firmware de la PSU, botones Upgrade PSU Firmware y Enable/Disable Power Fan para inmersión](/images/image-62.png)

Puede encontrar más información [aquí](https://bixbit-dev.github.io/bixbit.docs/ru/Additional%20instructions/Preparation%20for%20immersion%20cooling.html#%D0%BE%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8-%D0%B2%D0%B5%D0%BD%D1%82%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%BE%D0%B2-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0-%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F).

### Pestaña Boards

En esta pestaña puede desactivar las ranuras de las placas de hash del dispositivo. Muestra el número de ranuras, el motivo de su desactivación, si lo hay, así como las opciones de desactivación automática de las placas en caso de errores.

![Pestaña Boards de Whatsminer: ranuras 0–2 activadas, Auto Disable Slots on Errors, ajustes de reinicios de recuperación, Limit Boards Power](/images/skrinshot-sdelannyj-2026-08-12-v-130037.png)

- **Auto Disable Slots on Errors** — sirve para desactivar automáticamente las placas. Si una placa no consigue arrancar tras superar el límite de intentos de arranque (el dispositivo se reinicia el número de veces establecido en **Max Number of Recovery Reboots**; si la placa no arranca, se desactiva).
- **Recovery Reboot Counter** — contador del número de reinicios del dispositivo relacionados con errores de las placas.
- **Max Number of Recovery Reboots** — número de reinicios del dispositivo relacionados con errores de las placas tras el cual la placa problemática se desactivará por software.
- **Limit Boards Power** — desactiva el uso de la potencia de las placas desactivadas/que no funcionan.

### Pestaña Env Temp Limits

Esta función se utiliza para gestionar el funcionamiento del dispositivo en función de la temperatura ambiente.

![Pestaña Env Temp Limits de Whatsminer: Mining Resume Env Temp 35 y Mining Suspend Env Temp 45 con valores por defecto, mínimo y máximo](/images/skrinshot-sdelannyj-2026-08-12-v-132845.png)

- **Mining Resume Env Temp** — este campo indica la temperatura ambiente a la que el dispositivo saldrá del modo "**Suspended: High Env. Temp**".
- **Mining Suspend Env Temp** — este campo indica la temperatura ambiente a la que el dispositivo entra en el modo Suspended. El estado mostrará entonces "**Suspended: High Env. Temp**".

### Pestaña Cool Temp

El ajuste **Cool Temp** determina hasta qué temperatura se enfriarán las placas durante el arranque del minero. Todas las temperaturas se expresan en grados Celsius. El valor concreto depende del modo seleccionado en el campo Cool Temp Mode.

![Pestaña Cool Temp de Whatsminer: lista desplegable Cool Temp Mode con las opciones Default, Env Temp y Manual](/images/image-65.png)

- **Default** — utiliza el valor de temperatura por defecto (similar al firmware de fábrica).
- **Manual** — el valor de temperatura se establece manualmente.
- **Env Temp** — utiliza el valor de temperatura del sensor de temperatura ambiente.

### Pestaña Proxy

Esta función permite utilizar un servidor proxy intermedio a través del cual se enrutará el tráfico de minería.

![Pestaña Proxy de Whatsminer en el firmware BiXBiT: tipo SOCKS5, host con puerto, campos de usuario y contraseña](/images/skrinshot-sdelannyj-2026-08-12-v-133852.png)

- Type — selecciona el tipo de servidor proxy. Actualmente solo se admite SOCKS5.
- Host — dirección y puerto del servidor proxy.
- User — nombre de usuario para la autorización en el servidor proxy.
- Password — contraseña para la autorización en el servidor proxy.

