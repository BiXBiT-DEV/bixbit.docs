---
title: "Whatsminer Error Codes: List and Fixes | BiXBiT Docs "
description: "Whatsminer error codes 110 to 8410 with causes and fixes: fans,
  power supply, temperature sensors, EEPROM, hashboards, control board, pools
  and water flow."
order: 0
---
# Error codes for Whatsminer ASIC. List of errors and solutions


|  |  |  |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code | Error | Description and fixing method |
| **110** | Fanin detect speed error | Non-original or refurbished fans may not produce the correct speed or may be faulty initially. It is recommended to replace them with original ones to eliminate possible problems. Inspect fan for debris. Ensure nothing is blocking the airflow. Inspect the fan connector and ensure it is connected correctly. Test the fan on another ASIC. Replace the fan. Replace the power supply. |
| **111** | Fanout detect speed error |  |
| **120** | Fanin speed error（Deviation 2000+） |  |
| **121** | Fanout speed error（Deviation 2000+） |  |
| **130** | Fanin speed error（Deviation 3000+） |  |
| **131** | Fanout speed error（Deviation 3000+） |  |
| **140** | Fan speed is too high | Due to the high temperature, the ASIC is trying to cool itself by increasing the fan speed. Clean the ASIC from various types of dirt. Pay attention to the temperatures of the incoming airflow. Replace the fans with original ones. |
| **200** | Power probing error, no power found | Test the network connection cable of the ASIC. Flash the ASIC with the SD card and then with WhatsMinerTool. Replace the power supply. |
| **201** | Power supply and configuration file mismatch |  |
| **202** | Power output voltage error | Check the mains voltage. Restart the ASIC. Try changing the outlet/phase. Replace the power supply. |
| **203** | Power protecting | Check the temperature of the incoming flow. Clean the ASIC from various types of dirt. Replace the thermal interface. Make the environment cooler. |
| **204** | Power current protecting |  |
| **205** | Power current error | Clean the hash boards, control board and the boards' adapter from dirt and put everything back together. |
| **206** | Power input voltage is low | This error indicates undervoltage in the mains, check the incoming voltage. Try changing the outlet/phase. |
| **207** | Power input current protecting | Check the mains input voltage, the power supply needs 220~240 volts to operate stably. Try changing the outlet/phase. |
| **210** | Power error status | Check the error status of the power supply. |
| **213** | Power input voltage and current do not match the power | Replace the power supply. |
| **216** | Power remained unchanged for a long time |  |
| **217** | Power set enable error |  |
| **218** | Power input voltage is lower than 230V for high power mode | The ASIC needs 230 volts to operate in high mode, the mains is less than 230 volts. |
| **233** | Power output over temperature protection | Check the ambient temperature. Turn off the ASIC for about 10 minutes, then try again. Make the environment cooler. |
| **234** |  |  |
| **235** |  |  |
| **236** | Overcurrent Protection of Power Output | Check the tightness of the screws on the voltage distribution bus. Check the ambient temperature. Turn off the ASIC for 10 minutes, then try again. Make the environment cooler. |
| **237** |  |  |
| **238** |  |  |
| **239** | Overvoltage Protection of Power Output | The power supply protection turned it off due to high voltage. Check the mains voltage. Turn off the ASIC for 10 minutes, then try again. Make the environment cooler. |
| **240** | Low Voltage Protection for Power Output | The power supply protection turned it off due to low voltage. Check the mains voltage. Turn off the ASIC for 10 minutes, then try again. Try changing the outlet/phase. This error can be caused by: 1) Excessive load on the mains/phase 2) The voltage regulator (if there is one) is failing 3) There is a relay voltage regulator, because of its design the voltage drops for a short period of time, but this time is enough for the power supply to trigger the protection |
| **241** | Power output current imbalance | Replace the power supply. |
| **243** | Over-temperature Protection for Power Input | Check the ambient temperature. Turn off the ASIC for 10 minutes, then try again. Make the environment cooler. |
| **244** |  |  |
| **245** |  |  |
| **246** | Overcurrent Protection for Power Input |  |
| **247** |  |  |
| **248** | Overvoltage Protection for Power Input | Check the mains voltage. The power supply needs 220~230 volts of stable voltage for optimum performance. Try changing the outlet/phase. |
| **249** |  |  |
| **250** | Undervoltage Protection for Power Input |  |
| **251** |  |  |
| **253** | Power Fan Error | Inspect the power supply fan. Replace the power supply fan. Replace the power supply. |
| **254** |  |  |
| **255** | Protection of over power output | Check the ambient temperature. Turn off the ASIC for about 10 minutes, then try again. Make the environment cooler. |
| **256** |  |  |
| **257** | Input over current protection of power supply primary side | Unplug the ASIC from the mains for 5 minutes. Replace the power supply. |
| **263** | Power communication warning | Check the tightness of the screws on the voltage distribution bus. Check the power supply connection line to the control board. Replace the power supply. |
| **264** | Power communication error |  |
| **267** | Power watchdog protection | Contact a technician or send the power supply unit to a repair service. |
| **268** | Power output over-current protection | Check the ambient temperature. Check the tightness of the screws on the voltage distribution bus. Check connections for short circuits. Make the environment cooler |
| **269** | Power input over-current protection | Check the mains voltage. The power supply needs 220~230 volts of stable voltage for optimum performance. Try changing the outlet/phase. |
| **270** | Power input over-voltage protection | The power supply triggered the voltage protection. Check the mains voltage. Turn off the ASIC for 10 minutes, then try again. Try changing the socket/phase. Replace the power supply. |
| **271** | Power input under-voltage protection | Check the mains voltage. The power supply needs 220~230 volts of stable voltage for optimum performance. Try changing the outlet/phase. |
| **272** | Warning of excessive power output of power supply | Check the ambient temperature. Check the tightness of the screws on the voltage distribution bus. Make the environment cooler. |
| **273** | Power input power too high warning |  |
| **274** | Power fan warning | Check the power supply fan (see if there is anything blocking its rotation). Replace the fan of the power supply. |
| **275** | Power over temperature warning | The power supply triggered the temperature protection. Check the ambient temperature. Turn off the ASIC for about 10 minutes, then try again. Make the environment cooler. |
| **300** | SM0 temperature sensor detection error | Check the cable connection between the board's adapter and the control board. Swap two boards, if the error "follows" the board, then the board requires servicing. |
| **301** | SM1 temperature sensor detection error |  |
| **302** | SM2 temperature sensor detection error |  |
| **320** | SM0 temperature reading error |  |
| **321** | SM1 temperature reading error |  |
| **322** | SM2 temperature reading error |  |
| **329** | Control board temperature sensor communication error | Check the cable connection between the power supply and the control board. Replace the control board. Replace the power supply. |
| **350** | SM0 temperature protecting | The high temperature causes the boards to trigger protection. Check the ambient temperature. Make the environment cooler. Replace the thermal interface of the boards. |
| **351** | SM1 temperature protecting |  |
| **352** | SM2 temperature protecting |  |
| **360** | The temperature of the hashboard is overheating |  |
|  |  |  |
| **410** | SM0 detect eeprom error | Flash the ASIC with SD card, then with WhatsMinerTool. Check the board's adapter and its cable. Check the tightness of the screws on the voltage distribution bus. Try replacing the control board. Try replacing the power supply. |
| **411** | SM1 detect eeprom error |  |
| **412** | SM2 detect eeprom error |  |
| **420** | SM0 parser eeprom error | Flash the ASIC with SD card, then with WhatsMinerTool. |
| **421** | SM1 parser eeprom error |  |
| **422** | SM2 parser eeprom error |  |
| **430** | SM0 chip bin type error |  |
| **431** | SM1 chip bin type error |  |
| **432** | SM2 chip bin type error |  |
| **440** | SM0 eeprom chip num X error |  |
| **441** | SM1 eeprom chip num X error |  |
| **442** | SM2 eeprom chip num X error |  |
| **450** | SM0 eeprom xfer error | Check the boards' adapter cable to the control board. Flash the ASIC with SD card, then with WhatsMinerTool. |
| **451** | SM1 eeprom xfer error |  |
| **452** | SM2 eeprom xfer error |  |
|  |  |  |
| **510** | SM0 miner type error | The version of the hashboard is not compatible with this ASIC. Replace the hashboard with a compatible one. |
| **511** | SM1 miner type error |  |
| **512** | SM2 miner type error |  |
| **520** | SM0 bin type error |  |
| **521** | SM1 bin type error |  |
| **522** | SM2 bin type error |  |
| **530** | SM0 not found | Check the tightness of the screws on the voltage distribution bus. Check the connection of the boards' adapter cable to the control board. Try to replace the control board with a new one, if the error goes away, the control board requires servicing. Swap two boards, if the error "follows" the board, then the board requires servicing. |
| **531** | SM1 not found |  |
| **532** | SM2 not found |  |
| **540** | SM0 reading chip id error | Check the tightness of the screws on the voltage distribution bus. Check the connection of the boards' adapter cable to the control board. Swap two boards, if the error "follows" the board, then the board requires servicing. |
| **541** | SM1 reading chip id error |  |
| **542** | SM2 reading chip id error |  |
| **550** | SM0 have bad chips | Swap two boards, if the error "follows" the board, then the board requires servicing. |
| **551** | SM1 have bad chips |  |
| **552** | SM2 have bad chips |  |
| **560** | SM0 loss balance | Check the tightness of the screws on the voltage distribution bus. Check the connection of the boards' adapter cable to the control board. Check overclocking parameters. Check mains voltage. Swap two boards, if the error "follows" the board, then the board requires servicing. |
| **561** | SM1 loss balance |  |
| **562** | SM2 loss balance |  |
|  |  |  |
| **600** | Environment temperature is high | In case of this error the ASIC may continue to work, but it will pick lower frequencies when tuning and may drop the frequencies during operation. This error may appear during immersion cooling due to the location of the temperature sensor. Check the ambient temperature. Make the environment cooler. |
| **610** | If the ambient temperature is too high in high performance mode, return to normal mode | The error occurs in High profile when the ambient temperature exceeds 30 degrees. The ASIC automatically returns to the Normal profile. Check the ambient temperature. Make the environment cooler. |
|  |  |  |
| **701** | Control board no support chip | Flash the ASIC with SD card, then with WhatsMinerTool. Check the tightness of the screws on the voltage distribution bus. Try replacing the control board. |
| **710** | Control board rebooted as exception |  |
| **712** |  |  |
|  |  |  |
| **800** | Cgminer checksum error | Flash the ASIC with SD card, then with WhatsMinerTool. |
| **801** | System-monitor checksum error |  |
| **802** | Remote-daemon checksum error |  |
|  |  |  |
| **2000** | No pool information configured | Check the pool settings. |
| **2010** | All pools are disabled | It is normal for this error to occur when starting the ASIC. Check the internet. Check the pool settings. Try changing the pool. Try changing your internet service provider (even if other devices are working fine). |
| **2020** | Pool0 connect failed |  |
| **2021** | Pool1 connect failed |  |
| **2022** | Pool2 connect failed |  |
| **2030** | High rejection rate of pool |  |
| **2040** | The pool does not support the ASICboost mode | Try changing the pool, ASICboost technology is not supported by the pool. |
| **2310** | Hash rate is too low | Check the mains voltage, it must be stable and 220~240 volts. Test the internet connection for disconnections / losses. Check the ambient temperature, as well as temperature of boards and chips. |
| **2320** |  |  |
| **2340** | The loss of hash rate is too high |  |
| **2350** |  |  |
|  |  |  |
| **5110** | SM0 Frequency Up Timeout | Reboot the miner. |
| **5111** | SM1 Frequency Up Timeout |  |
| **5112** | SM2 Frequency Up Timeout |  |
| **5070** | SM0 water velocity is abnormal | Check the liquid flow rate (speed). |
| **5071** | SM1 water velocity is abnormal |  |
| **5072** | SM2 water velocity is abnormal |  |
|  |  |  |
| **8410** | Software version error (M2x miner with M3x firmware, or M3x with M2x firmware). | Download the correct firmware version. Flash the ASIC with SD card, then with WhatsMinerTool. |
| **100001** | /antiv/signature Illegal | Flash the ASIC with SD card, then with WhatsMinerTool. |
| **100002** | /antiv/dig/initd.dig Illegal |  |
| **100003** | /antiv/dig/pf_partial.dig Illegal |  |



|  |  |  |
| ---------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Code | Error | Fixing method |
| **0x0001** | Input voltage is too low,need improvement | Check the mains input voltage, the power supply needs 220~240 volts for stable operation. Try changing the outlet/phase. |
| **0x0002** | Temperature sampling over temperature protection of power radiator | Power off for 15 minutes. Then turn it on, if the error persists, the power supply must be repaired. |
| **0x0004** | Temperature sampling over temperature protection of power radiator |  |
| **0x0008** | Over temperature protection of environmental temperature sampling in power supply |  |
| **0x0010** | Primary side over current |  |
| **0x0020** | Output undervoltage | Low output voltage. Check mains voltage. Replace the power supply. |
| **0x0040** | Output over current (continuous load 320A for more than 2S) | Check the tightness of the screws on the voltage distribution bus. |
| **0x0080** | Primary side over current | Power off for 15 minutes. Then turn it on, if the error persists, the power supply must be repaired. |
| **0x0100** | Single circuit overcurrent (protection point 120a) | The power supply must be repaired. |
| **0x0200** |  |  |
| **0x0400** |  |  |
| **0x0800** | Fan failure | Replace the fan of the power supply. |
| **0x1000** | Output over current (continuous load of 310A for more than 5min) | Check the power supply for short circuits. Send the power supply unit to a repair service. |
| **0x2000** | Output over current (continuous load 295A for more than 10min) |  |


