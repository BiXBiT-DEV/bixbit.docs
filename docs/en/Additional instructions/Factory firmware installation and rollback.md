---
title: Factory Firmware Installation and Rollback
---
# Factory Firmware Installation and Rollback

## Antminer

In some cases, installing BiXBiT firmware may require a preliminary rollback of the factory firmware version to an older version.

::: warning  
New factory firmware versions dated 2025-2026 most likely cannot be downgraded using the method described in this instruction.  
For rolling back the latest factory firmware versions on Amlogic control boards, you can use a different rollback method — via USB-UART.  
:::

### Required Equipment and Files for Flashing:

- Flash drive (recommended capacity up to 16GB):
  - For Xilinx (zynq 7007), Beagle Bone (BB), CVitek (CV) control boards — microSD card.
  - For Amlogic (AML) control boards — USB-A flash drive, or a microSD card with a USB OTG adapter from the flash drive to the control board's Micro-USB port.
- A PC or laptop with a port or adapter to connect the flash drive.
- Firmware image (can be downloaded from our repository: [https://storage.bixbit.io/Antminer_s/SD/](https://storage.bixbit.io/Antminer_s/SD/)).

::: info  
If the goal is to install BiXBiT firmware, it is not necessary to select a factory firmware image specifically for the ASIC miner model. The main requirement is to choose an image that matches the control board model.  
For Amlogic or Xilinx control board models, you can use universal firmware images. After flashing the control board with these universal images, the ASIC miner most likely will not mine on the installed factory firmware. However, you will then be able to install BiXBiT firmware on top of this factory firmware, where the device model will be detected automatically and the device will be able to mine.  
:::

### Preparing the Storage Device and Loading the Firmware Image:

1. Connect the flash drive to your computer or laptop and format it (using the FAT32 file system).
  ![image.png](/images/image-37.png)
2. Copy the contents of the downloaded firmware archive to the root of the flash drive.
  ![image.png](/images/image-38.png)

### Installing the Firmware on the Device:

1. Disconnect power from the device and wait until the LED indicators on the control board turn off.
2. Connect the storage device with the firmware image to the control board.
3. Power on the device and wait for the flashing process to complete (when the installation is finished, the green LED on the control board will remain steadily lit).
4. Disconnect power from the device and wait until the LED indicators on the control board turn off.
5. Remove the previously connected storage device from the device.
6. Power on the device.