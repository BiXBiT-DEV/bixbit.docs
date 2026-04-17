import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Технические требования","description":"","frontmatter":{"title":"Технические требования"},"headers":[],"relativePath":"whatsminer-firmware/technical-requirements.md","filePath":"ru/whatsminer-firmware/technical-requirements.md"}');
const _sfc_main = { name: "whatsminer-firmware/technical-requirements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="технические-требования" tabindex="-1">Технические требования <a class="header-anchor" href="#технические-требования" aria-label="Permalink to “Технические требования”">​</a></h1><p>Черновик страницы.</p><h2 id="введение" tabindex="-1">Введение <a class="header-anchor" href="#введение" aria-label="Permalink to “Введение”">​</a></h2><p>Опишите требуемое оборудование и программную базу.</p><h2 id="основные-требования" tabindex="-1">Основные требования <a class="header-anchor" href="#основные-требования" aria-label="Permalink to “Основные требования”">​</a></h2><p>Перечислите обязательные параметры и ограничения.</p><h2 id="примечания" tabindex="-1">Примечания <a class="header-anchor" href="#примечания" aria-label="Permalink to “Примечания”">​</a></h2><p>Дополнительные условия и рекомендации.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ru/whatsminer-firmware/technical-requirements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const technicalRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  technicalRequirements as default
};
