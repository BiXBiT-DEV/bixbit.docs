import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Настройка отображения данных","description":"","frontmatter":{"title":"Настройка отображения данных"},"headers":[],"relativePath":"whatsminer-firmware/initial-device-setup/data-display-setup.md","filePath":"ru/whatsminer-firmware/initial-device-setup/data-display-setup.md"}');
const _sfc_main = { name: "whatsminer-firmware/initial-device-setup/data-display-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="настроика-отображения-данных" tabindex="-1">Настройка отображения данных <a class="header-anchor" href="#настроика-отображения-данных" aria-label="Permalink to “Настройка отображения данных”">​</a></h1><p>Черновик страницы.</p><h2 id="параметры-отображения" tabindex="-1">Параметры отображения <a class="header-anchor" href="#параметры-отображения" aria-label="Permalink to “Параметры отображения”">​</a></h2><p>Выберите метрики, видимые по умолчанию.</p><h2 id="макет" tabindex="-1">Макет <a class="header-anchor" href="#макет" aria-label="Permalink to “Макет”">​</a></h2><p>Настройте таблицу/карточки и порядок.</p><h2 id="сохранение" tabindex="-1">Сохранение <a class="header-anchor" href="#сохранение" aria-label="Permalink to “Сохранение”">​</a></h2><p>Примените настройки и проверьте значения на панели.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ru/whatsminer-firmware/initial-device-setup/data-display-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataDisplaySetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataDisplaySetup as default
};
