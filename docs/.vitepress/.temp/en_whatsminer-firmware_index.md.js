import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Whatsminer Firmware","description":"","frontmatter":{"title":"Whatsminer Firmware"},"headers":[],"relativePath":"en/whatsminer-firmware/index.md","filePath":"en/whatsminer-firmware/index.md"}');
const _sfc_main = { name: "en/whatsminer-firmware/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="whatsminer-firmware" tabindex="-1">Whatsminer Firmware <a class="header-anchor" href="#whatsminer-firmware" aria-label="Permalink to “Whatsminer Firmware”">​</a></h1><p>This page is a starter placeholder for the section overview.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/whatsminer-firmware/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
