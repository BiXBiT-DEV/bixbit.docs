---
title: Configuración de DNS
seoTitle: Configurar DNS para AMS en Antminer y Whatsminer | BiXBiT Docs
description: "Solucione problemas de conexión con AMS configurando un servidor DNS
  personalizado en Antminer y Whatsminer con firmware BiXBiT: IP estática
  obligatoria, campo DNS y formato de entrada."
order: 0
---
# Configuración de DNS en caso de problemas de conexión con AMS

## Antminer

La dirección del servidor DNS solo puede especificarse en el dispositivo cuando el protocolo está configurado como **[Static](/functionality_of_the_bixbit_firmware/antminer/antminer_ip_settings.html)**.

En el campo DNS Server, debe especificar primero la dirección **95.163.222.17**. Opcionalmente, puede añadir otra dirección de servidor DNS separada por una coma, por ejemplo, **8.8.8.8**.

Ejemplo de entrada: "95.163.222.17, 8.8.8.8"

## Whatsminer

La dirección del servidor DNS solo puede especificarse en el dispositivo cuando el protocolo está configurado como **[Static Address](/functionality_of_the_bixbit_firmware/whatsminer/whatsminer_configuration.html#network-settings)**.

En el campo Use Custom DNS Servers, debe especificar primero la dirección **95.163.222.17**. Opcionalmente, puede añadir otra dirección de servidor DNS, por ejemplo, **8.8.8.8**.