---
title: Sección Settings
seoTitle: "Configuración del firmware de Antminer: autotune y pools | BiXBiT Docs"
description: "Settings de Antminer en el firmware BiXBiT: modo de funcionamiento,
  límites de ventiladores y temperatura, pools, autotune y explicación de las
  pestañas Profile Switcher, Proxy y Hotel Fee"
order: 0
---
# Sección Settings

## Pestaña Setup

En esta pestaña puede realizar una configuración detallada del firmware en función del estado actual del dispositivo. Además, debajo de la subsección Setup se encuentra la sección Pools, donde puede configurar los pools de minería.

![Settings de Antminer, pestaña Setup en el firmware BiXBiT: 18 opciones, desde Mode y Liquid cooling hasta ventiladores, límites de temperatura y chips defectuosos](/images/image-35.png)

1. **Mode** — selección del modo de funcionamiento del dispositivo. Normal — funcionamiento normal del dispositivo; Sleep — modo de suspensión.
2. **Liquid Cooling** — función que desactiva la comprobación de los ventiladores para la posterior inmersión del dispositivo en un baño de inmersión o el uso de un sistema de refrigeración personalizado.
3. **Work without chip temp sensors** — esta función desactiva la lectura de temperaturas de los sensores situados en los chips. Las temperaturas de los sensores que no están situados en los chips se siguen leyendo. Este modo es bastante peligroso, ya que las temperaturas de los chips son las más altas del dispositivo y el sistema de refrigeración se basa en la temperatura máxima del dispositivo. Sin las temperaturas de los chips, la temperatura del dispositivo quedará "subestimada". Además, los chips son los que más rápido se calientan. Ignorar las temperaturas de los sensores de los chips significa que el dispositivo reaccionará más lentamente al calentamiento, lo que podría provocar daños en el dispositivo.
4. **Work with dead temp sensors** — esta función permite que el dispositivo funcione aunque tenga sensores de temperatura dañados. El dispositivo ignorará cualquier número de sensores de temperatura dañados mientras quede un sensor operativo en la parte delantera de la placa y otro en la parte trasera de la placa.
5. **Max delay on starting mining** — función que establece el retraso máximo antes del inicio de la minería. El proceso de minería se iniciará en un intervalo de 0 al valor establecido en este campo. Esta función es útil para minimizar la carga máxima de la red al arrancar los dispositivos (por ejemplo, tras un corte de energía en toda la granja a la vez).
6. **Lower profile if autotune fail** — función que baja el perfil si el autotune iniciado por Profile Switcher finaliza sin éxito. Si la opción está desactivada, se bloqueará el cambio de perfil hacia arriba por parte de Profile Switcher hasta que se reinicie el proceso de minería.
7. **Adjust board voltage based on hashrate** — función que ajusta automáticamente el voltaje si el hashrate cae por debajo del obtenido durante el autotune.
8. **Adjust chip frequency based on temperature** — función que reduce automáticamente la frecuencia de los chips cuando las temperaturas se acercan a los valores máximos.
9. **Minimum number of working fans** — número mínimo de ventiladores que deben detectarse para que el dispositivo siga funcionando.
10. **Minimum number of working hashboards** — número mínimo de hashboards necesarias para que el dispositivo funcione. Si una hashboard se apaga durante el funcionamiento del dispositivo y el número total de hashboards operativas cae por debajo de este valor, el dispositivo se reiniciará.
11. **Startup cooling fan speed** — velocidad máxima de los ventiladores al arrancar el dispositivo.
12. **Fan mode** — modo de funcionamiento de los ventiladores:
  - **Auto** — ajuste automático de la velocidad en función de la temperatura del dispositivo.
    - **Manual** — ajuste manual del porcentaje de velocidad de los ventiladores.
13. **Fan speed in manual mode** — porcentaje de la velocidad máxima de los ventiladores en **Fan mode: Manual**.
14. **Target chip temp in fan auto mode** — en **Fan mode: Auto**, el dispositivo intentará mantener la temperatura establecida ajustando la velocidad de los ventiladores.
15. **Stop mining if hashrate below ideal** — detiene el dispositivo si el hashrate cae por debajo del ideal en el porcentaje especificado.
16. **Stop mining if chip temp above** — detiene la minería si la temperatura supera el valor especificado.
17. **Max mining restarts in an hour before emergency mode** — cambia el dispositivo al modo **Emergency** si el dispositivo reinicia la minería el número de veces especificado en una hora. Esta función no tiene en cuenta los reinicios iniciados manualmente por el usuario.
18. **Max bad chips** — permite que el dispositivo siga funcionando con un porcentaje especificado de chips defectuosos. Esta función no es segura, ya que el funcionamiento de hashboards con chips que no funcionan puede ser inestable y provocar más daños.

### Configuración del pool:

![Bloque POOLS en la pestaña Setup de Antminer: campos Mining Address, Mining User y Passwords del pool](/images/image-36.png)

1. Haga clic en **[Settings]** en la parte izquierda de la interfaz web.
2. En la pestaña de configuración **[Setup]**, en la sección **POOLS**, introduzca los datos del pool de minería en los campos correspondientes: **MINING ADDRESS** — dirección del pool/stratum, **MINING USER** — worker, **PASSWORDS** — contraseña (opcional).
3. Haga clic en **[Save]** para aplicar la configuración.

## Pestaña Autotune

![Pestaña Autotune de BiXBiT en Antminer: perfil, periodo de repetición, opciones avanzadas, Freq MHz, voltajes, botones de regenerar y eliminar](/images/setting-autotune-marked.png)

1. **Autotune profile** — perfil de arranque y perfil para el que se realizará el autotune, si es necesario. Se utiliza para el overclocking o el undervolting del dispositivo.
2. **Autotune repeat period, minutes** — establece con qué frecuencia, en minutos, se inicia el autotune tras la finalización del último autotune correcto.
3. **Advanced options** — activa o desactiva la configuración avanzada del autotune.
4. **Don’t use saved Autotune results** — permite ignorar los resultados guardados del último autotune. Esto significa que el autotune empezará desde cero cada vez, en lugar de utilizar los resultados guardados anteriormente.
5. **Freq, MHz** — frecuencia inicial de los chips para el perfil especificado. Desde el inicio del autotune, esta frecuencia se asignará a todos los chips. En función del progreso del autotune, puede aumentarse o reducirse.
6. **Startup voltage, mV** — voltaje inicial aplicado a la placa. En función del progreso del autotune, puede aumentarse o reducirse.
7. **Max voltage, mV** — voltaje máximo que puede aplicarse a la placa. Si el autotune del dispositivo requiere un valor de voltaje superior, el autotune finalizará con un error.
8. **Generate\Regenerate Profiles; Stop Profile Generation** — permite iniciar/reiniciar la generación de perfiles del dispositivo o detener el proceso actual de generación de perfiles.
9. **Delete autotune results** — elimina los resultados guardados del autotune.
10. **Fast Autotune** — función que acelera varias veces el autotune inicial. Al utilizar esta función, el dispositivo no mina en el pool durante el autotune (es decir, el hashrate durante el autotune será cero). Esta función no está disponible para todos los dispositivos.

## Pestaña Profile Switcher

La función **Profile Switcher** permite cambiar el perfil de overclocking en función de los cambios de temperatura del dispositivo.

![Pestaña Profile Switcher de Antminer: activar el switcher, perfil máximo, temperaturas de chip para bajar y subir el perfil (°C), Ignore PWM](/images/setting-profile-switcher-marked.png)

1. **Enable switcher** — activa la función **Profile Switcher**.
2. **Maximum profile** — perfil máximo al que es posible cambiar.
3. **Lower profile if chip temp above** — baja el perfil si la temperatura de los chips supera el valor especificado.
4. **Rise profile if temp below** — sube el perfil si la temperatura de los chips está por debajo del valor especificado.
5. **Ignore PWM** — activar esta opción permite subir el perfil aunque la velocidad de los ventiladores sea superior al 90% de la máxima. Si la opción está desactivada, el perfil no se subirá en esas condiciones.

## Pestaña Proxy

Esta función permite utilizar un servidor proxy intermedio a través del cual se enrutará el tráfico de minería.

![Pestaña Proxy de Antminer en el firmware BiXBiT: tipo de proxy SOCKS5, host con puerto, campos de usuario y contraseña](/images/setting-proxy-marked.png)

1. Proxy type — selecciona el tipo de servidor proxy.
2. Host — dirección y puerto del servidor proxy.
3. User — nombre de usuario para la autorización en el servidor proxy.
4. Password — contraseña para la autorización en el servidor proxy.

## Pestaña Hotel Fee

Esta función permite especificar un pool y un porcentaje para deducciones adicionales. Cuando la función está activada, el porcentaje de hashrate especificado se dirigirá a la dirección indicada en esta pestaña.

Ejemplo: en la captura de pantalla siguiente, la función está activada, se han establecido los datos de conexión al pool y el porcentaje de deducción es del 25%. Esto significa que el hashrate del dispositivo se repartirá entre dos pools de la siguiente manera: el 25% irá al pool de Hotel Fee y el 75% (100% - 25%) irá a los pools principales especificados en la pestaña Setup-Pools.

![Pestaña Hotel Fee de Antminer en el firmware BiXBiT:](/images/setting-hotelfee-marked.png)

1. Enabled — activa la función.
2. Pool address — dirección del pool para las deducciones.
3. Pool user — nombre del worker en este pool para las deducciones.
4. Password — contraseña del worker (opcional).
5. Percent — porcentaje de deducción.
