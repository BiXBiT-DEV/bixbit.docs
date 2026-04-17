import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Первоначальная настройка устройства","description":"","frontmatter":{"title":"Первоначальная настройка устройства"},"headers":[],"relativePath":"whatsminer-firmware/initial-device-setup/index.md","filePath":"ru/whatsminer-firmware/initial-device-setup/index.md"}');
const _sfc_main = { name: "whatsminer-firmware/initial-device-setup/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="первоначальная-настроика-устроиства" tabindex="-1">Первоначальная настройка устройства <a class="header-anchor" href="#первоначальная-настроика-устроиства" aria-label="Permalink to “Первоначальная настройка устройства”">​</a></h1><p>Черновик страницы.</p><h2 id="первыи-запуск" tabindex="-1">Первый запуск <a class="header-anchor" href="#первыи-запуск" aria-label="Permalink to “Первый запуск”">​</a></h2><p>Включите устройство и дождитесь инициализации.</p><h2 id="базовая-конфигурация" tabindex="-1">Базовая конфигурация <a class="header-anchor" href="#базовая-конфигурация" aria-label="Permalink to “Базовая конфигурация”">​</a></h2><p>Задайте обязательные параметры до промышленной эксплуатации.</p><h2 id="проверка" tabindex="-1">Проверка <a class="header-anchor" href="#проверка" aria-label="Permalink to “Проверка”">​</a></h2><p>Подтвердите значения и сохраните конфигурацию.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ru/whatsminer-firmware/initial-device-setup/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
