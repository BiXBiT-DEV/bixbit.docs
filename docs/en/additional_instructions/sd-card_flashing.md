---
title: Write Whatsminer Firmware to SD (PhoenixCard) | BiXBiT Docs
description: "Write a Whatsminer firmware .img to an SD card with PhoenixCard:
  select the drive, pick the image, keep Product mode, click Burn and check the
  burn result."
order: 0
---
# Writing an image to the SD card

## Antminer

Information on writing the firmware image for Antminer ASIC can be found in the section: **Factory Firmware Installation and Rollback**

## Whatsminer

- **Step 1.** Run the **"PhoenixCard"** program (the folder with the "PhoenixCard" program **is located in the archive with the firmware**).

  ![PhoenixCard_V427 folder from the firmware archive with PhoenixCard.exe highlighted](/images/image-109.png)
- **Step 2.** In the main window, select the drive whose letter corresponds to your SD card.

  ![PhoenixCard V4.2.7: the SD card (drive K, 7679M) selected in the Dev List](/images/image-110.png)
- **Step 3.** Click on the **[Image]** button - a file selection dialog box will appear.

  ![PhoenixCard V4.2.7: Image button that opens the firmware file selection dialog](/images/image-111.png)
- **Step 4.** Find and select the file with the ".img" extension from the folder where you extracted the contents of the firmware archive.

  ![File dialog: select Whatsminer-ALL-Models_1.6.0.2_h616-after20231213.img, then click Open](/images/image-112.png)

::: info
The file selection depends on the firmware version you plan to write to the SD card. This can be either the original factory firmware or a custom version — for example, ours from BiXBiT or from another developer. In any case, to write the firmware to the SD card, you must select a file with the ".img" extension. Pay attention: Files with the ".bin" extension are intended solely for installation via the WhatsMinerTool program and are not suitable for loading via an SD card.
::: info

- **Step 5.** Make sure the Product parameter is selected. Click the **[Burn]** button.

  ![PhoenixCard V4.2.7: Work Type Product selected, Burn button writes the image to the SD card](/images/image-113.png)

Then, the process of flashing the SD card will begin.  

If, after the process is complete, the SD card status bar lights up green for a moment, the firmware has been written successfully.

Additionally, the success of the firmware image writing process is confirmed by the lines:  
`[IMG File]Burn Success`  
`[DATA File]Burn Success`  
`Magic Complete`  
`Burn End…`

::: warning
After completing the writing of the firmware image to the SD card, the "Autoplay for removable drives" function may automatically trigger, and the system may attempt to open the memory card. Since the written data resides in a hidden partition, Windows might incorrectly identify the card as corrupted and offer to format it. A similar warning may appear if you try to open the card manually via File Explorer.  
Important: Do not confirm the formatting. Simply close the window by clicking the [Cancel] button or the [X] in the top-right corner.
:::

In Windows File Explorer, the memory card will appear empty. However, the firmware image data for installing it on the ASIC is present on the SD card and resides in an unallocated area of the partition table.

::: warning
If the operation fails, you will need to format the SD card again (a failure is indicated by a red status bar for the SD card or if the process takes more than a few minutes).
:::

