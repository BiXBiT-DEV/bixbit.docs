---
title: Overclocking de mineros ASIC y funciones relacionadas
seoTitle: "Overclocking de Whatsminer: configuración manual | BiXBiT Docs"
description: "Cómo hacer overclocking de un Whatsminer con firmware BiXBiT: lógica de autotune,
  PSU Power Limit, Target Voltage y Frequency, fórmulas de referencia y un ejemplo
  práctico con M32."
order: 0
---
# Overclocking de mineros ASIC y otras funciones relacionadas

Para hacer overclocking del minero, debe instalar el firmware **BiXBiT**. Puede consultar la descripción del proceso de flasheo en la sección correspondiente del manual.

## ASIC Whatsminer

Los principales ajustes de overclocking del dispositivo se encuentran en la sección [Overclock](/functionality_of_the_bixbit_firmware/whatsminer/whatsminer_configuration.html#overclock-tab).

En general, para el overclocking de un minero ASIC, recomendamos utilizar los perfiles generados, ya que el propio dispositivo selecciona los ajustes más óptimos durante la generación del perfil. No obstante, si lo desea, puede establecer los ajustes de overclocking manualmente. A continuación se describen las recomendaciones básicas para el overclocking manual.

### Estrategia general de overclocking

Durante el autotune, que dura entre 15 minutos y dos horas (según las condiciones y los parámetros), el minero tiene en cuenta los parámetros establecidos en la sección Overclocking.

Los parámetros de overclocking prioritarios para el minero son, por orden de importancia: **PSU Power Limit** (límite de potencia), **Target Voltage** (voltaje objetivo), **Target Freq** (frecuencia objetivo). Las temperaturas de los chips también son un factor importante para el autotune.

En otras palabras, en función de la potencia disponible y de las temperaturas, el minero establece el voltaje adecuado y, a su vez, la frecuencia adecuada para ese voltaje. Puede haber casos en los que, con el mismo voltaje, el minero establezca frecuencias diferentes.

Sin embargo, cuando la capacidad disponible de la PSU (fuente de alimentación) (**PSU Power Limit**) supera (o, por el contrario, no cubre) los requisitos del voltaje y la frecuencia establecidos por el usuario, el minero puede desviarse considerablemente de los voltajes y frecuencias establecidos, ya sea por encima o por debajo. Si la discrepancia es demasiado grande, pueden producirse errores durante el autotune (por ejemplo, “*Slot0 Lost Balance*”).

Al mismo tiempo, durante el funcionamiento, el minero puede superar el propio valor de **PSU Power Limit**, pero por regla general **no en más de ~50-100 W**.

### Recomendaciones para el overclocking manual

- Establezca **PSU Power Max** en el límite máximo de potencia de la PSU, sin superar 3900-4000W.
- Establezca **PSU Power Limit** en un nivel de potencia “seguro” disponible para un funcionamiento prolongado, pero sin superar **3800-3900W**. Se desaconseja encarecidamente superar el límite de fábrica.
- La diferencia entre **PSU Power Max** y **PSU Power Limit** debe ser de al menos **200 W**.
- Establezca valores aproximados para **Target Frequency** y **Target Voltage**. Utilice los valores de fábrica como referencia.
- Establezca **Minimum Voltage** y **Maximum Voltage** dentro de un margen de -50 y +50 respecto al **Target Voltage** deseado.

Durante el autotune, el minero seleccionará el modo de funcionamiento óptimo.

También puede establecer el mismo voltaje objetivo, mínimo y máximo (por ejemplo, **1430** / **1430** / **1430**). En este caso, el minero no ajustará el voltaje y el tiempo de autotune se reducirá. No obstante, se recomienda “dar libertad” al minero.

Durante el overclocking, puede utilizar las siguientes fórmulas de referencia:

- **Target Frequency** = **F_Target_Normal** * ( **Percent** + 100) / 100
- **PSU Power Limit** = **P_Limit_Normal** * ( **Percent** + 100) / 100
- **Target Voltage** = **V_Target_Normal**  * ( **Percent / 5.0** + 100) / 100

**F_Target_Normal**, **P_Limit_Normal**, **V_Target_Normal:** valores base (originales o “de fábrica”) de frecuencia objetivo, potencia y voltaje. **Percent:** porcentaje de overclocking.

**EJEMPLO DE OVERCLOCKING DE UN WHATSMINER M32 AL 4,3%**

Valores base (de fábrica) de este minero:
**F_Target_Normal** = **853**, **P_Limit_Normal** = **3600**, **V_Target_Normal** = **1380**
Por lo tanto:

- **Target Frequency** = **853** * ( **4,3** + 100) / 100 ~= **890**
- **PSU Power Limit** = **3600** * ( **4,3** + 100) / 100 ~= **3755**
- **Target Voltage** = **1380**  * ( **4,3 / 5.0** + 100) / 100 ~= **1392**
- **Minimum Voltage** = **1392** **- 50** ~= **1340**
- **Maximum Voltage** = **1392** **+ 50** ~= **1440**
- **PSU Power Max** = **3755 + 100** ~= **3850**

  ![Opciones avanzadas de Whatsminer con los valores del ejemplo M32: Target Frequency 890, Target Voltage 1392, PSU Power Limit 3755](/images/image-74.png)

