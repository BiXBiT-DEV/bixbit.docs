---
title: SD Card Formatting
---
# SD Card Formatting

This guide will help you properly format your SD card to the FAT32 file system using built-in Windows tools. This is necessary for correctly writing the firmware image.

## Before you start

- Connect the SD card to your computer and ensure it is detected by the system.
- Back up all important data — formatting will erase all contents.
- If you are using a microSD adapter, make sure the write-protection switch is unlocked.
  ![image.png](/images/image-114.png)

### Step 1: Opening "Disk Management"

- Right-click on the Start button (Windows logo).
- Select "Disk Management".
  ![image.png](/images/image-115.png)

### Step 2: Deleting Existing Partitions/Volumes

Locate your SD card in the list of disks (typically labeled as "Removable").

![image.png](/images/image-116.png)

If the card has any existing partitions:

- Right-click on each allocated partition/volume.
- Select **"Delete Volume..."**.
  ![image.png](/images/image-117.png)
- Confirm the volume deletion.
  ![image.png](/images/image-118.png)
- If the SD card has multiple volumes, repeat for all volumes until the entire card space shows the status "Unallocated".
  ![image.png](/images/image-119.png)

### Step 3: Creating a New Partition/Volume

- Right-click on the unallocated space of the SD card.
- Select **"New Simple Volume..."**.
  ![image.png](/images/image-120.png)
- In the volume wizard that opens:
  1. Click **"Next >"** on each step.
    ![image.png](/images/image-121.png)
  2. Specify the maximum volume size.
    ![image.png](/images/image-122.png)
  3. Assign a drive letter (e.g., F).
    ![image.png](/images/image-123.png)
  4. Select the **FAT32** file system and enable **"Perform a quick format**".
    ![image.png](/images/image-124.png)
  5. Click "Finish" to complete.
    ![image.png](/images/image-125.png)

### Result

After formatting is complete, the SD card should appear as a single partition with the FAT32 file system and have the status **"Healthy (Basic Data Partition)"**.

The disk should look like this:

![image.png](/images/image-126.png)

SD card formatting is complete.