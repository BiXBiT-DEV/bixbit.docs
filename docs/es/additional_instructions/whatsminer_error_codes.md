---
title: Códigos de error de ASIC Whatsminer
seoTitle: "Códigos de error de Whatsminer: lista y soluciones | BiXBiT Docs"
description: "Códigos de error de Whatsminer del 110 al 8410 con causas y soluciones: ventiladores,
  fuente de alimentación, sensores de temperatura, EEPROM, hashboards, placa de control, pools
  y caudal de agua."
order: 0
---
# Códigos de error de ASIC Whatsminer. Lista de errores y soluciones


|  |  |  |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Código | Error | Descripción y método de solución |
| **110** | Fanin detect speed error | Los ventiladores no originales o reacondicionados pueden no alcanzar la velocidad correcta o estar defectuosos desde el principio. Se recomienda sustituirlos por originales para eliminar posibles problemas. Revise el ventilador en busca de suciedad. Asegúrese de que nada obstruya el flujo de aire. Revise el conector del ventilador y asegúrese de que esté conectado correctamente. Pruebe el ventilador en otro ASIC. Sustituya el ventilador. Sustituya la PSU (fuente de alimentación). |
| **111** | Fanout detect speed error |  |
| **120** | Fanin speed error（Deviation 2000+） |  |
| **121** | Fanout speed error（Deviation 2000+） |  |
| **130** | Fanin speed error（Deviation 3000+） |  |
| **131** | Fanout speed error（Deviation 3000+） |  |
| **140** | Fan speed is too high | Debido a la alta temperatura, el ASIC intenta refrigerarse aumentando la velocidad de los ventiladores. Limpie el ASIC de cualquier tipo de suciedad. Preste atención a la temperatura del flujo de aire entrante. Sustituya los ventiladores por originales. |
| **200** | Power probing error, no power found | Compruebe el cable de conexión de red del ASIC. Flashee el ASIC con la tarjeta SD y después con WhatsMinerTool. Sustituya la PSU. |
| **201** | Power supply and configuration file mismatch |  |
| **202** | Power output voltage error | Compruebe la tensión de la red eléctrica. Reinicie el ASIC. Pruebe a cambiar de toma/fase. Sustituya la PSU. |
| **203** | Power protecting | Compruebe la temperatura del flujo entrante. Limpie el ASIC de cualquier tipo de suciedad. Sustituya la interfaz térmica. Refrigere el entorno. |
| **204** | Power current protecting |  |
| **205** | Power current error | Limpie de suciedad las hashboards, la placa de control y el adaptador de las placas, y vuelva a montarlo todo. |
| **206** | Power input voltage is low | Este error indica subtensión en la red eléctrica; compruebe la tensión de entrada. Pruebe a cambiar de toma/fase. |
| **207** | Power input current protecting | Compruebe la tensión de entrada de la red; la PSU necesita 220~240 voltios para funcionar de forma estable. Pruebe a cambiar de toma/fase. |
| **210** | Power error status | Compruebe el estado de error de la PSU. |
| **213** | Power input voltage and current do not match the power | Sustituya la PSU. |
| **216** | Power remained unchanged for a long time |  |
| **217** | Power set enable error |  |
| **218** | Power input voltage is lower than 230V for high power mode | El ASIC necesita 230 voltios para funcionar en modo high, y la red eléctrica suministra menos de 230 voltios. |
| **233** | Power output over temperature protection | Compruebe la temperatura ambiente. Apague el ASIC durante unos 10 minutos y vuelva a intentarlo. Refrigere el entorno. |
| **234** |  |  |
| **235** |  |  |
| **236** | Overcurrent Protection of Power Output | Compruebe el apriete de los tornillos del bus de distribución de tensión. Compruebe la temperatura ambiente. Apague el ASIC durante 10 minutos y vuelva a intentarlo. Refrigere el entorno. |
| **237** |  |  |
| **238** |  |  |
| **239** | Overvoltage Protection of Power Output | La protección de la PSU la apagó debido a una tensión alta. Compruebe la tensión de la red eléctrica. Apague el ASIC durante 10 minutos y vuelva a intentarlo. Refrigere el entorno. |
| **240** | Low Voltage Protection for Power Output | La protección de la PSU la apagó debido a una tensión baja. Compruebe la tensión de la red eléctrica. Apague el ASIC durante 10 minutos y vuelva a intentarlo. Pruebe a cambiar de toma/fase. Este error puede deberse a: 1) Carga excesiva en la red/fase 2) El estabilizador de tensión (si lo hay) está fallando 3) Hay un estabilizador de tensión de relé que, por su diseño, provoca una caída de tensión durante un breve periodo de tiempo, pero ese tiempo es suficiente para que la PSU active la protección |
| **241** | Power output current imbalance | Sustituya la PSU. |
| **243** | Over-temperature Protection for Power Input | Compruebe la temperatura ambiente. Apague el ASIC durante 10 minutos y vuelva a intentarlo. Refrigere el entorno. |
| **244** |  |  |
| **245** |  |  |
| **246** | Overcurrent Protection for Power Input |  |
| **247** |  |  |
| **248** | Overvoltage Protection for Power Input | Compruebe la tensión de la red eléctrica. La PSU necesita una tensión estable de 220~230 voltios para un rendimiento óptimo. Pruebe a cambiar de toma/fase. |
| **249** |  |  |
| **250** | Undervoltage Protection for Power Input |  |
| **251** |  |  |
| **253** | Power Fan Error | Revise el ventilador de la PSU. Sustituya el ventilador de la PSU. Sustituya la PSU. |
| **254** |  |  |
| **255** | Protection of over power output | Compruebe la temperatura ambiente. Apague el ASIC durante unos 10 minutos y vuelva a intentarlo. Refrigere el entorno. |
| **256** |  |  |
| **257** | Input over current protection of power supply primary side | Desconecte el ASIC de la red eléctrica durante 5 minutos. Sustituya la PSU. |
| **263** | Power communication warning | Compruebe el apriete de los tornillos del bus de distribución de tensión. Compruebe la línea de conexión de la PSU con la placa de control. Sustituya la PSU. |
| **264** | Power communication error |  |
| **267** | Power watchdog protection | Póngase en contacto con un técnico o envíe la PSU a un servicio de reparación. |
| **268** | Power output over-current protection | Compruebe la temperatura ambiente. Compruebe el apriete de los tornillos del bus de distribución de tensión. Compruebe las conexiones en busca de cortocircuitos. Refrigere el entorno |
| **269** | Power input over-current protection | Compruebe la tensión de la red eléctrica. La PSU necesita una tensión estable de 220~230 voltios para un rendimiento óptimo. Pruebe a cambiar de toma/fase. |
| **270** | Power input over-voltage protection | La PSU activó la protección de tensión. Compruebe la tensión de la red eléctrica. Apague el ASIC durante 10 minutos y vuelva a intentarlo. Pruebe a cambiar de toma/fase. Sustituya la PSU. |
| **271** | Power input under-voltage protection | Compruebe la tensión de la red eléctrica. La PSU necesita una tensión estable de 220~230 voltios para un rendimiento óptimo. Pruebe a cambiar de toma/fase. |
| **272** | Warning of excessive power output of power supply | Compruebe la temperatura ambiente. Compruebe el apriete de los tornillos del bus de distribución de tensión. Refrigere el entorno. |
| **273** | Power input power too high warning |  |
| **274** | Power fan warning | Revise el ventilador de la PSU (compruebe si algo impide su giro). Sustituya el ventilador de la PSU. |
| **275** | Power over temperature warning | La PSU activó la protección de temperatura. Compruebe la temperatura ambiente. Apague el ASIC durante unos 10 minutos y vuelva a intentarlo. Refrigere el entorno. |
| **300** | SM0 temperature sensor detection error | Compruebe la conexión del cable entre el adaptador de la placa y la placa de control. Intercambie dos placas; si el error "sigue" a la placa, esta requiere reparación. |
| **301** | SM1 temperature sensor detection error |  |
| **302** | SM2 temperature sensor detection error |  |
| **320** | SM0 temperature reading error |  |
| **321** | SM1 temperature reading error |  |
| **322** | SM2 temperature reading error |  |
| **329** | Control board temperature sensor communication error | Compruebe la conexión del cable entre la PSU y la placa de control. Sustituya la placa de control. Sustituya la PSU. |
| **350** | SM0 temperature protecting | La alta temperatura hace que las placas activen la protección. Compruebe la temperatura ambiente. Refrigere el entorno. Sustituya la interfaz térmica de las placas. |
| **351** | SM1 temperature protecting |  |
| **352** | SM2 temperature protecting |  |
| **360** | The temperature of the hashboard is overheating |  |
|  |  |  |
| **410** | SM0 detect eeprom error | Flashee el ASIC con la tarjeta SD y después con WhatsMinerTool. Revise el adaptador de la placa y su cable. Compruebe el apriete de los tornillos del bus de distribución de tensión. Pruebe a sustituir la placa de control. Pruebe a sustituir la PSU. |
| **411** | SM1 detect eeprom error |  |
| **412** | SM2 detect eeprom error |  |
| **420** | SM0 parser eeprom error | Flashee el ASIC con la tarjeta SD y después con WhatsMinerTool. |
| **421** | SM1 parser eeprom error |  |
| **422** | SM2 parser eeprom error |  |
| **430** | SM0 chip bin type error |  |
| **431** | SM1 chip bin type error |  |
| **432** | SM2 chip bin type error |  |
| **440** | SM0 eeprom chip num X error |  |
| **441** | SM1 eeprom chip num X error |  |
| **442** | SM2 eeprom chip num X error |  |
| **450** | SM0 eeprom xfer error | Revise el cable del adaptador de las placas a la placa de control. Flashee el ASIC con la tarjeta SD y después con WhatsMinerTool. |
| **451** | SM1 eeprom xfer error |  |
| **452** | SM2 eeprom xfer error |  |
|  |  |  |
| **510** | SM0 miner type error | La versión de la hashboard no es compatible con este ASIC. Sustituya la hashboard por una compatible. |
| **511** | SM1 miner type error |  |
| **512** | SM2 miner type error |  |
| **520** | SM0 bin type error |  |
| **521** | SM1 bin type error |  |
| **522** | SM2 bin type error |  |
| **530** | SM0 not found | Compruebe el apriete de los tornillos del bus de distribución de tensión. Compruebe la conexión del cable del adaptador de las placas a la placa de control. Pruebe a sustituir la placa de control por una nueva; si el error desaparece, la placa de control requiere reparación. Intercambie dos placas; si el error "sigue" a la placa, esta requiere reparación. |
| **531** | SM1 not found |  |
| **532** | SM2 not found |  |
| **540** | SM0 reading chip id error | Compruebe el apriete de los tornillos del bus de distribución de tensión. Compruebe la conexión del cable del adaptador de las placas a la placa de control. Intercambie dos placas; si el error "sigue" a la placa, esta requiere reparación. |
| **541** | SM1 reading chip id error |  |
| **542** | SM2 reading chip id error |  |
| **550** | SM0 have bad chips | Intercambie dos placas; si el error "sigue" a la placa, esta requiere reparación. |
| **551** | SM1 have bad chips |  |
| **552** | SM2 have bad chips |  |
| **560** | SM0 loss balance | Compruebe el apriete de los tornillos del bus de distribución de tensión. Compruebe la conexión del cable del adaptador de las placas a la placa de control. Compruebe los parámetros de overclocking. Compruebe la tensión de la red eléctrica. Intercambie dos placas; si el error "sigue" a la placa, esta requiere reparación. |
| **561** | SM1 loss balance |  |
| **562** | SM2 loss balance |  |
|  |  |  |
| **600** | Environment temperature is high | Con este error, el ASIC puede seguir funcionando, pero seleccionará frecuencias más bajas durante el ajuste y puede reducir las frecuencias durante el funcionamiento. Este error puede aparecer con refrigeración por inmersión debido a la ubicación del sensor de temperatura. Compruebe la temperatura ambiente. Refrigere el entorno. |
| **610** | If the ambient temperature is too high in high performance mode, return to normal mode | El error se produce en el perfil High cuando la temperatura ambiente supera los 30 grados. El ASIC vuelve automáticamente al perfil Normal. Compruebe la temperatura ambiente. Refrigere el entorno. |
|  |  |  |
| **701** | Control board no support chip | Flashee el ASIC con la tarjeta SD y después con WhatsMinerTool. Compruebe el apriete de los tornillos del bus de distribución de tensión. Pruebe a sustituir la placa de control. |
| **710** | Control board rebooted as exception |  |
| **712** |  |  |
|  |  |  |
| **800** | Cgminer checksum error | Flashee el ASIC con la tarjeta SD y después con WhatsMinerTool. |
| **801** | System-monitor checksum error |  |
| **802** | Remote-daemon checksum error |  |
|  |  |  |
| **2000** | No pool information configured | Compruebe la configuración del pool. |
| **2010** | All pools are disabled | Es normal que este error aparezca al arrancar el ASIC. Compruebe la conexión a internet. Compruebe la configuración del pool. Pruebe a cambiar de pool. Pruebe a cambiar de proveedor de internet (aunque otros dispositivos funcionen correctamente). |
| **2020** | Pool0 connect failed |  |
| **2021** | Pool1 connect failed |  |
| **2022** | Pool2 connect failed |  |
| **2030** | High rejection rate of pool |  |
| **2040** | The pool does not support the ASICboost mode | Pruebe a cambiar de pool; el pool no admite la tecnología ASICboost. |
| **2310** | Hash rate is too low | Compruebe la tensión de la red eléctrica; debe ser estable y de 220~240 voltios. Compruebe la conexión a internet en busca de desconexiones / pérdidas. Compruebe la temperatura ambiente, así como la temperatura de las placas y los chips. |
| **2320** |  |  |
| **2340** | The loss of hash rate is too high |  |
| **2350** |  |  |
|  |  |  |
| **5110** | SM0 Frequency Up Timeout | Reinicie el minero. |
| **5111** | SM1 Frequency Up Timeout |  |
| **5112** | SM2 Frequency Up Timeout |  |
| **5070** | SM0 water velocity is abnormal | Compruebe el caudal (velocidad) del líquido. |
| **5071** | SM1 water velocity is abnormal |  |
| **5072** | SM2 water velocity is abnormal |  |
|  |  |  |
| **8410** | Software version error (M2x miner with M3x firmware, or M3x with M2x firmware). | Descargue la versión correcta del firmware. Flashee el ASIC con la tarjeta SD y después con WhatsMinerTool. |
| **100001** | /antiv/signature Illegal | Flashee el ASIC con la tarjeta SD y después con WhatsMinerTool. |
| **100002** | /antiv/dig/initd.dig Illegal |  |
| **100003** | /antiv/dig/pf_partial.dig Illegal |  |



|  |  |  |
| ---------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Código | Error | Método de solución |
| **0x0001** | Input voltage is too low,need improvement | Compruebe la tensión de entrada de la red; la PSU necesita 220~240 voltios para funcionar de forma estable. Pruebe a cambiar de toma/fase. |
| **0x0002** | Temperature sampling over temperature protection of power radiator | Apague el equipo durante 15 minutos. Después, enciéndalo; si el error persiste, la PSU debe repararse. |
| **0x0004** | Temperature sampling over temperature protection of power radiator |  |
| **0x0008** | Over temperature protection of environmental temperature sampling in power supply |  |
| **0x0010** | Primary side over current |  |
| **0x0020** | Output undervoltage | Tensión de salida baja. Compruebe la tensión de la red eléctrica. Sustituya la PSU. |
| **0x0040** | Output over current (continuous load 320A for more than 2S) | Compruebe el apriete de los tornillos del bus de distribución de tensión. |
| **0x0080** | Primary side over current | Apague el equipo durante 15 minutos. Después, enciéndalo; si el error persiste, la PSU debe repararse. |
| **0x0100** | Single circuit overcurrent (protection point 120a) | La PSU debe repararse. |
| **0x0200** |  |  |
| **0x0400** |  |  |
| **0x0800** | Fan failure | Sustituya el ventilador de la PSU. |
| **0x1000** | Output over current (continuous load of 310A for more than 5min) | Compruebe la PSU en busca de cortocircuitos. Envíe la PSU a un servicio de reparación. |
| **0x2000** | Output over current (continuous load 295A for more than 10min) |  |


