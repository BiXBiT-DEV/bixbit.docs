import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Прошивка Antminer","description":"","frontmatter":{"title":"Прошивка Antminer"},"headers":[],"relativePath":"antminer-firmware/index.md","filePath":"ru/antminer-firmware/index.md"}');
const _sfc_main = { name: "antminer-firmware/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="прошивка-antminer" tabindex="-1">Прошивка Antminer <a class="header-anchor" href="#прошивка-antminer" aria-label="Permalink to “Прошивка Antminer”">​</a></h1><p>Черновик страницы.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ru/antminer-firmware/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
