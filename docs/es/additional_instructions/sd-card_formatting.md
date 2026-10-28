---
title: Formateo completo de la tarjeta SD antes de instalar el firmware
seoTitle: Formatear una tarjeta SD en FAT32 para firmware ASIC | BiXBiT Docs
description: "Formatee completamente una tarjeta SD en FAT32 con Administración de discos de Windows antes
  de grabar el firmware ASIC: elimine los volúmenes antiguos, cree un nuevo volumen simple y
  compruebe el resultado."
order: 0
---
# Formateo de la tarjeta SD

Esta guía le ayudará a formatear correctamente su tarjeta SD con el sistema de archivos FAT32 mediante las herramientas integradas de Windows. Esto es necesario para grabar correctamente la imagen de firmware.

## Antes de comenzar

- Conecte la tarjeta SD a su computadora y asegúrese de que el sistema la detecte.
- Haga una copia de seguridad de todos los datos importantes: el formateo borrará todo el contenido.
- Si utiliza un adaptador microSD, asegúrese de que el interruptor de protección contra escritura esté desbloqueado.

  ![Adaptador microSD con el interruptor de protección contra escritura Lock marcado: asegúrese de que esté desbloqueado antes de formatear](/images/image-114.png)

### Paso 1: Abrir "Disk Management"

- Haga clic con el botón derecho en el botón Inicio (logotipo de Windows).
- Seleccione "Disk Management".

  ![Menú contextual del botón Inicio de Windows 11 con Disk Management resaltado](/images/image-115.png)

### Paso 2: Eliminar las particiones/volúmenes existentes

Localice su tarjeta SD en la lista de discos (normalmente etiquetada como "Removable").

![Disk Management: la tarjeta SD aparece como Disk 1, Removable, 7.50 GB, con particiones existentes](/images/image-116.png)

Si la tarjeta tiene particiones existentes:

- Haga clic con el botón derecho en cada partición/volumen asignado.
- Seleccione **"Delete Volume..."**.

  ![Disk Management: haga clic con el botón derecho en una partición de la tarjeta SD y elija Delete Volume...](/images/image-117.png)
- Confirme la eliminación del volumen.

  ![Advertencia de eliminación del volumen simple indicando que se borrarán todos sus datos, botón Yes](/images/image-118.png)
- Si la tarjeta SD tiene varios volúmenes, repita el procedimiento con todos ellos hasta que todo el espacio de la tarjeta muestre el estado "Unallocated".

  ![Disk Management: los 7.50 GB de la tarjeta SD (Disk 1) aparecen ahora como Unallocated](/images/image-119.png)

### Paso 3: Crear una nueva partición/volumen

- Haga clic con el botón derecho en el espacio no asignado de la tarjeta SD.
- Seleccione **"New Simple Volume..."**.

  ![Disk Management: haga clic con el botón derecho en el espacio no asignado de la tarjeta SD y elija New Simple Volume](/images/image-120.png)
- En el asistente de volumen que se abre:
  1. Haga clic en **"Next >"** en cada paso.
  
    ![New Simple Volume Wizard: haga clic en Next > para continuar](/images/image-121.png)
  2. Especifique el tamaño máximo del volumen.
    ![Pantalla de bienvenida de New Simple Volume Wizard](/images/image-122.png)
  3. Asigne una letra de unidad (por ejemplo, F).
    ![New Simple Volume Wizard: asignar la letra de unidad F](/images/image-123.png)
  4. Seleccione el sistema de archivos **FAT32** y active **"Perform a quick format"**.
    ![New Simple Volume Wizard, Format Partition: FAT32, tamaño de unidad de asignación predeterminado, Perform a quick format marcado](/images/image-124.png)
  5. Haga clic en "Finish" para finalizar.
    ![Completing the New Simple Volume Wizard: Disk 1, 7678 MB, unidad F:, FAT32, formato rápido, Finish](/images/image-125.png)

### Resultado

Una vez completado el formateo, la tarjeta SD debería aparecer como una única partición con el sistema de archivos FAT32 y con el estado **"Healthy (Basic Data Partition)"**.

El disco debería verse así:

![Resultado en Disk Management: la tarjeta SD (F:) es una única partición FAT32 de 7.50 GB, Healthy (Basic Data Partition)](/images/image-126.png)

El formateo de la tarjeta SD ha finalizado.