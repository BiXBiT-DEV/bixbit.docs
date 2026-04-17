import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Поиск майнера в сети","description":"","frontmatter":{"title":"Поиск майнера в сети"},"headers":[],"relativePath":"whatsminer-firmware/initial-device-setup/network-identification.md","filePath":"ru/whatsminer-firmware/initial-device-setup/network-identification.md"}');
const _sfc_main = { name: "whatsminer-firmware/initial-device-setup/network-identification.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="поиск-маинера-в-сети" tabindex="-1">Поиск майнера в сети <a class="header-anchor" href="#поиск-маинера-в-сети" aria-label="Permalink to “Поиск майнера в сети”">​</a></h1><p>Черновик страницы.</p><h2 id="сканирование-сети" tabindex="-1">Сканирование сети <a class="header-anchor" href="#сканирование-сети" aria-label="Permalink to “Сканирование сети”">​</a></h2><p>Обнаружьте устройства в локальном сегменте.</p><h2 id="сопоставление-устроиства" tabindex="-1">Сопоставление устройства <a class="header-anchor" href="#сопоставление-устроиства" aria-label="Permalink to “Сопоставление устройства”">​</a></h2><p>Определите нужный майнер по IP или имени хоста.</p><h2 id="проверка-доступа" tabindex="-1">Проверка доступа <a class="header-anchor" href="#проверка-доступа" aria-label="Permalink to “Проверка доступа”">​</a></h2><p>Откройте веб-интерфейс устройства и убедитесь в связи.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ru/whatsminer-firmware/initial-device-setup/network-identification.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const networkIdentification = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  networkIdentification as default
};
