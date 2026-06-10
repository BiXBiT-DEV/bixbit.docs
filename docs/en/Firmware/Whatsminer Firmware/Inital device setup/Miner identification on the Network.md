---
title: Miner Identification on the Network
---
## Determination the IP address of the ASIC miner

- Run the **WhatsMinerTool** utility
- Click the **[IP Monitor]** button ①
- In the opened **“Detect and Bind IP”** window, click the **[Start]** button ②  
![Detect And Bind IP](</images/MINER IDENTIFICATION ON THE NETWORK/detect-and-bind-ip.png>)
- On the device panel, press the **[IP found]** button and hold it until the green and red LEDs blink together several times.  
![IP Found ASIC Button](</images/MINER IDENTIFICATION ON THE NETWORK/ip-found-asic-button.png>)
- At this point, a line corresponding to your miner should appear in the **"Detect and Bind IP"** window. Pay attention to the **Source IP** column (for example, 192.168.10.142) — this is the address you need to note  
![IP Found ASIC Button](</images/MINER IDENTIFICATION ON THE NETWORK/detect-and-bind-ip-source-ip.png>)
- Close this window and confirm closing it by clicking **[OK**] in the pop-up dialog.

## Adding a network scanning range in the WhatsMinerTool utility

- Click **[Miner IP]** button ① to open the **Miner IP Management** window .  
If there are already any entries in this window, you can delete them, modify them, or simply add new ones.
- Add a new entry:
  1. In the **Start IP** field ②, enter the previously obtained IP address, changing the last digit to “**1**” (192.168.10.1).
  2. In the **End IP** field ③, enter the obtained IP address, changing the last digit to “**255**” (192.168.10.255).
  3. Click the **[Add]** button ④
  4. The entered range will appear in the list ⑤. Check the checkbox for the range you want to scan and click **[OK]** button ⑥

## Run a network scan

- In the main window of the utility, click [Start] button ①  
![Detect And Bind IP](</images/MINER IDENTIFICATION ON THE NETWORK/start-scanning.png>)  
The button name will change to **“Monitoring”**, the scan will begin, and after a short time the detected devices will appear in the list.  
![Detect And Bind IP](</images/MINER IDENTIFICATION ON THE NETWORK/wmt-device-list.png>)

