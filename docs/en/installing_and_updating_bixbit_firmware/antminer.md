---
title: Antminer
---
# Installing and Updating BiXBiT Firmware on Antminer Devices

The downloaded firmware archive contains the file **installer_tool.exe** – this program is used to install the BiXBiT firmware. Before running the file, you must first extract the firmware archive. This can be done using the standard Windows tools (for Windows 11) or any third-party archiver, such as WinRAR.

## List of Compatible Models

| Device Model          | Supported Board Models |
| --------------------- | ---------------------- |
| Antminer BHB42XXX     |                        |
| Antminer H6HB70701    |                        |
| Antminer HHB68XXX     |                        |
| Antminer L11          |                        |
| Antminer L7           |                        |
| Antminer L9           |                        |
| Antminer S19          |                        |
| Antminer S19 Hydro    |                        |
| Antminer S19 Pro      |                        |
| Antminer S19 Pro Hyd. |                        |
| Antminer S19 Pro+ Hyd.|                        |
| Antminer S19 Pro-A    |                        |
| Antminer S19 XP       |                        |
| Antminer S19 XP+      |                        |
| Antminer S19 XP+ Hyd. |                        |
| Antminer S19 XP+ Hydro|                        |
| Antminer S19a         |                        |
| Antminer S19a Pro     |                        |
| Antminer S19e XP Hyd. |                        |
| Antminer S19i         |                        |
| Antminer S19j         |                        |
| Antminer S19j Pro     |                        |
| Antminer S19j Pro+    |                        |
| Antminer S19j XP      |                        |
| Antminer S19j+        |                        |
| Antminer S19k Pro     |                        |
| Antminer S21          |                        |
| Antminer S21 Hyd.     |                        |
| Antminer S21 Hydro    |                        |
| Antminer S21 Pro      |                        |
| Antminer S21 XP       |                        |
| Antminer S21 XP Hyd.  |                        |
| Antminer S21 XP Imm.  |                        |
| Antminer S21+         |                        |
| Antminer S21+ Hyd.    |                        |
| Antminer S21+ Hydro   |                        |
| Antminer S21e Hyd.    |                        |
| Antminer S21e XP Hyd. |                        |
| Antminer S21Imm       |                        |
| Antminer S21XPImm     |                        |
| Antminer T19          |                        |
| Antminer T21          |                        |

## Running and Initial Configuration of the Installer

1. Open the folder where the archive was extracted and run the **installer_tool.exe** file.
2. In the **Firmware File Selection** window that appears, you can:
   - Enter your **partner ID** in the **Firmware File** field and click the **Check Available FW versions** button. You will then be able to select one of the available firmware versions and download it by clicking the **Download** button – the firmware downloaded this way will be used for installation.
   - Click the **Cancel** button – the installer will then use the files that were originally in the same archive with it (local files).
   ![image1.png](/images/image1.png)
3. The main program window will then open:
   ![image.png](/images/image-8.png)
4. Click the **IP List** button to set the network scan range for finding the devices you want to flash.
5. In the **Info** window that appears:
   - If you click **Yes**, the starting and ending IP addresses of the subnet you are connected to will be automatically added to the installer's range list. This can be useful if the computer from which the devices will be flashed is on the same subnet as the devices being flashed.
   - If you click **No**, an empty **Miner IP Management** window will open, where you will need to manually enter the data for the network scan.
6. To manually add a network scan range, follow these steps:
   - **Start IP**. Set the starting IP address of the scan range.
   - **End IP**. Set the ending IP address of the scan range. If you only need to add a single IP address instead of a range, this field can be left blank.
   - **HTTP User**. Specify the username for the miner's web interface.
   - **HTTP Pass**. Specify the password for the miner's web interface.
   - **Comment**. Set a name for this range (optional).
   - Then click the **Add** button to add the specified range.

::: info
When adding multiple ranges, be careful that the IP addresses in them do not overlap, as the program will not allow saving a new range in that case.
:::

7. Select the required ranges using the checkboxes and click **OK**.
   ![image.png](/images/image-10.png)
8. After that, in the main program window, click the **Scan** button and wait for the network scan to complete.

## Installing BiXBiT Firmware on Devices

1. Use the checkboxes to select the devices you want to flash.
2. In the **Installation Settings** block, you can additionally specify the following options before flashing:
   ![image.png](/images/image-11.png)
   - **Parallel Installs** – specify the number of devices to flash simultaneously (from 1 to 10).
   - The **Force install on new firmware version** checkbox allows you to install an older version of BiXBiT firmware compared to the one already installed on the device.
   - The **Force install to unknown device models** checkbox allows you to try installing the firmware even if the device model was not correctly identified.
   - When you click the **Firmware Install Options** button, a field will appear for entering the **AMS key (AMS API key)** – if you enter it, the devices will appear in AMS almost immediately after the firmware installation, and you will not need to set the API key additionally.
   ![image8.png](/images/image8.png)
3. Click the **Install** button. If the device is flashed successfully, a message with the content **“Done. Code: Success: OK!”** or **“Done. Code: CV: Installed”** will appear in the Progress field. After that, you can close the program.
   ![image.png](/images/image-12.png)

::: warning
Important: after installing the firmware on devices with CVtek boards, it is recommended to use the “CV Monitoring” button – this will automatically restore the BiXBiT firmware on such devices after they are rebooted:

1. Select the devices with CVtek boards using the checkboxes.
2. Click the “CV Monitoring” button.
3. The installer must remain constantly running and be on the same network as the devices.

After performing these steps, the installer will periodically check whether the firmware is installed on devices with CVtek boards and restore it if necessary.
:::