import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Подключение устройства","description":"","frontmatter":{"title":"Подключение устройства"},"headers":[],"relativePath":"whatsminer-firmware/connecting-a-device.md","filePath":"ru/whatsminer-firmware/connecting-a-device.md"}');
const _sfc_main = { name: "whatsminer-firmware/connecting-a-device.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p class="doc-kicker">Прошивка Whatsminer</p><h1 id="подключение-устроиства" tabindex="-1">Подключение устройства <a class="header-anchor" href="#подключение-устроиства" aria-label="Permalink to “Подключение устройства”">​</a></h1><p>Перед включением убедитесь, что электросеть, проводка и автоматические выключатели рассчитаны на потребляемую устройством мощность.</p><div class="warning custom-block"><p class="custom-block-title custom-block-title-default">WARNING</p><p>На устройстве нет кнопки включения/выключения питания. Оно начинает работу сразу после подключения к сети, в этот момент обычно возникает кратковременный бросок тока. <strong>Крайне не рекомендуется подключать устройство, вставляя вилку в уже включённую розетку — это может повредить силовые разъёмы, вилку или розетку.</strong> По возможности выделите каждому устройству отдельный автомат и включайте питание через него.</p></div><ul><li>Вставьте силовой кабель в устройство и убедитесь, что соединение надёжное.</li><li>Подключите один конец сетевого кабеля к соответствующему порту на устройстве, другой — к свободному порту роутера, коммутатора или модема.</li><li>Вставьте вилку в розетку и подайте питание на устройство, включив автоматический выключатель.</li><li>Убедитесь, что вентиляторы запустились и загорелись индикаторы. Через несколько секунд должны загореться и начать мигать индикаторы на порту Ethernet.</li><li>Если вентиляторы не запускаются и индикаторы не горят, проверьте блок питания устройства.</li><li>Если устройство включается, но индикаторы Ethernet не работают, убедитесь, что роутер/коммутатор включён, а сетевой кабель исправен и подключён правильно.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ru/whatsminer-firmware/connecting-a-device.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const connectingADevice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  connectingADevice as default
};
