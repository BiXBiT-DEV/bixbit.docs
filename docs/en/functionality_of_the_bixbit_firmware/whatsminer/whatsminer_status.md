---
title: "Whatsminer Firmware: Status Section | BiXBiT Docs"
description: "Whatsminer Status in BiXBiT firmware: miner summary, hashboards,
  pools, errors and events, API, system and miner logs, processes, memory and
  network overview."
order: 0
---
# Status Section

## Miner Status Subsection

This subsection contains current information about the device's operation. The following are also available here:

![Whatsminer Miner Status: Mining, with the Restart Miner, Download Logs and Toggle Led buttons](/images/image-54.png)

- **Restart Miner** button — restarts the mining process without rebooting the device itself.
- **Download Logs** button — downloads logs from the device (similar to the **Export log** function in **Whatsminer Tool**).
- **Toggle Led** button — turns on the LEDs on the device's control board. Useful for locating a specific device in a farm.

### Summary

![Whatsminer Summary: elapsed time, THSav, accepted/rejected shares, Liquid Cooling, voltage, power, power mode, PSU temp](/images/skrinshot-sdelannyj-2026-08-10-v-151135.png)

### Devices

![Whatsminer Devices table: frequency and THSav, THS1m, THS15m hashrate for hashboards SM0–SM2 and the total](/images/skrinshot-sdelannyj-2026-08-10-v-151227.png)

![Whatsminer Devices details: UpfreqCompleted, EffectiveChips, board temperature and chip temps (min-avg-max) for SM0–SM2](/images/skrinshot-sdelannyj-2026-08-10-v-151407.png)

### Pools

![Whatsminer Pools table: URL, active flag, user, Alive/Dead status, difficulty, accepted, rejected and stale shares](/images/skrinshot-sdelannyj-2026-08-10-v-151454.png)

### Errors

![Whatsminer Errors table: fan speed errors 110, 111, 130, 131 and 2010 all pools disabled, with timestamps](/images/image-56.png)

### Events

![Whatsminer Events table: E013 pool password change, Pools Change action, count, last time, source btminer](/images/skrinshot-sdelannyj-2026-08-10-v-152120.png)

## Miner API Log, System Log, Miner Log, Processes Subsections

These subsections contain logs of various types. Here you can view them without downloading:

- **Miner API Log** — log with detailed information about each board and the chips on them.
- **System Log** — the current system log of the device, describing the main events of the device firmware.
- **Miner Log** — allows you to view the pool change history (Pools Change Log) and device performance metrics over time intervals (Miner State Log).
- **Processes** — allows you to monitor the processes running on the device and their parameters, as well as the current CPU load and memory usage for each process.

## Overview Subsection

### System

![Whatsminer Overview, System: model M31S+_V80, H616 hardware info, firmware and custom version, kernel, uptime, load](/images/skrinshot-sdelannyj-2026-08-10-v-153254.png)

### Memory

![Whatsminer Overview, Memory: total available, free and buffered RAM in kB with usage percentage](/images/skrinshot-sdelannyj-2026-08-10-v-153313.png)

### Network

![Whatsminer Overview, Network: IPv4 WAN status via DHCP with address, netmask, gateway, DNS and active connections](/images/skrinshot-sdelannyj-2026-08-10-v-153341.png)

