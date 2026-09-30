---
title: Format an SD Card to FAT32 for ASIC Firmware | BiXBiT Docs
description: "Fully format an SD card to FAT32 in Windows Disk Management before
  writing ASIC firmware: delete old volumes, create a new simple volume and
  check the result."
order: 0
---
# SD Card Formatting

This guide will help you properly format your SD card to the FAT32 file system using built-in Windows tools. This is necessary for correctly writing the firmware image.

## Before you start

- Connect the SD card to your computer and ensure it is detected by the system.
- Back up all important data — formatting will erase all contents.
- If you are using a microSD adapter, make sure the write-protection switch is unlocked.

  ![microSD adapter with the Lock write-protection switch circled: make sure it is unlocked before formatting](/images/image-114.png)

### Step 1: Opening "Disk Management"

- Right-click on the Start button (Windows logo).
- Select "Disk Management".

  ![Windows 11 Start button right-click menu with Disk Management highlighted](/images/image-115.png)

### Step 2: Deleting Existing Partitions/Volumes

Locate your SD card in the list of disks (typically labeled as "Removable").

![Disk Management: the SD card shown as Disk 1, Removable, 7.50 GB, with existing partitions](/images/image-116.png)

If the card has any existing partitions:

- Right-click on each allocated partition/volume.
- Select **"Delete Volume..."**.

  ![Disk Management: right-click an SD card partition and choose Delete Volume...](/images/image-117.png)
- Confirm the volume deletion.

  ![Delete simple volume warning that all data on it will be erased, Yes button](/images/image-118.png)
- If the SD card has multiple volumes, repeat for all volumes until the entire card space shows the status "Unallocated".

  ![Disk Management: all 7.50 GB of the SD card (Disk 1) now shows as Unallocated](/images/image-119.png)

### Step 3: Creating a New Partition/Volume

- Right-click on the unallocated space of the SD card.
- Select **"New Simple Volume..."**.

  ![Disk Management: right-click the unallocated SD card space and choose New Simple Volume](/images/image-120.png)
- In the volume wizard that opens:
  1. Click **"Next >"** on each step.
  
    ![image.png](/images/image-121.png)
  2. Specify the maximum volume size.
    ![New Simple Volume Wizard welcome screen](/images/image-122.png)
  3. Assign a drive letter (e.g., F).
    ![New Simple Volume Wizard: assign drive letter F](/images/image-123.png)
  4. Select the **FAT32** file system and enable **"Perform a quick format**".
    ![New Simple Volume Wizard, Format Partition: FAT32, default allocation unit size, Perform a quick format checked](/images/image-124.png)
  5. Click "Finish" to complete.
    ![Completing the New Simple Volume Wizard: Disk 1, 7678 MB, drive F:, FAT32, quick format, Finish](/images/image-125.png)

### Result

After formatting is complete, the SD card should appear as a single partition with the FAT32 file system and have the status **"Healthy (Basic Data Partition)"**.

The disk should look like this:

![Disk Management result: SD card (F:) is a single 7.50 GB FAT32 partition, Healthy (Basic Data Partition)](/images/image-126.png)

SD card formatting is complete.