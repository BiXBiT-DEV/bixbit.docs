---
title: Раздел Status
seoTitle: "Прошивка Whatsminer: раздел Status | BiXBiT Docs"
description: "Раздел Status прошивки BiXBiT для Whatsminer: сводка, хешплаты,
  пулы, ошибки и события, логи Miner API, System и Miner, процессы, память и
  сеть устройства."
order: 0
---
# Раздел Status

## Подраздел Miner status

В данном подразделе собрана текущая информация о работе устройства. Так же, здесь доступны:

![Whatsminer, Miner Status: Mining и кнопки Restart Miner, Download Logs и Toggle Led](/images/image-54.png)

- Кнопка **Restart Miner** - перезапуск процесса майнинга без перезагрузки самого устройства
- Кнопка **Download Logs** - скачать логи с устройства (аналог функции **Export log** в **Whatsminer Tool**)
- Кнопка **Toggle Led** - включить светодиоды на контрольной плате устройства. Полезно при поиске конкретного устройства на ферме

### Summary

![Whatsminer, Summary: время работы, THSav, принятые и отклонённые шары, Liquid Cooling, напряжение, мощность, температура БП](/images/skrinshot-sdelannyj-2026-08-10-v-151135.png)

### Devices

![Whatsminer, таблица Devices: частота и хешрейт THSav, THS1m, THS15m по хешплатам SM0–SM2 и итог](/images/skrinshot-sdelannyj-2026-08-10-v-151227.png)

![Whatsminer, Devices: UpfreqCompleted, EffectiveChips, температура платы и чипов (min-avg-max) для SM0–SM2](/images/skrinshot-sdelannyj-2026-08-10-v-151407.png)

### Pools

![Whatsminer, таблица Pools: URL, активность, воркер, статус Alive/Dead, сложность, принятые, отклонённые и stale-шары](/images/skrinshot-sdelannyj-2026-08-10-v-151454.png)

### Errors

![Whatsminer, таблица Errors: ошибки вентиляторов 110, 111, 130, 131 и 2010 (все пулы отключены) с временем](/images/image-56.png)

### Events

![Whatsminer, таблица Events: E013 смена пароля пула, действие Pools Change, счётчик, время, источник btminer](/images/skrinshot-sdelannyj-2026-08-10-v-152120.png)

## Подразделы Miner API Log, System Log, Miner Log, Processes

В данных подразделах собраны логи различного характера. Здесь их можно просмотреть без скачивания:

- **Miner API Log** - лог с детальной информацией по каждой плате и чипам на них
- **System Log** - текущий системный лог устройства, в котором описаны основные события прошивки устройства
- **Miner Log** - позволяет посмотреть историю изменения пулов (Pools Change Log) и показатели работы устройства по временным отрезкам (Miner State Log)
- **Processes** - позволяет отследить запущенные на устройстве процессы и их параметры, а так же текущую нагрузку на CPU и память для каждого процесса

## Подраздел Overview

### System

![Whatsminer, Overview, System: модель M31S+_V80, плата H616, версии прошивки и BiXBiT, ядро, аптайм и нагрузка](/images/skrinshot-sdelannyj-2026-08-10-v-153254.png)

### Memory

![Whatsminer, Overview, Memory: доступная, свободная и буферизованная память в kB с процентом](/images/skrinshot-sdelannyj-2026-08-10-v-153313.png)

### Network

![Whatsminer, Overview, Network: статус IPv4 WAN по DHCP — адрес, маска, шлюз, DNS и активные соединения](/images/skrinshot-sdelannyj-2026-08-10-v-153341.png)

