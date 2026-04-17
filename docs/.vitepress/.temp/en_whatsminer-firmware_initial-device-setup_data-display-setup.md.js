import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Data display setup","description":"","frontmatter":{"title":"Data display setup"},"headers":[],"relativePath":"en/whatsminer-firmware/initial-device-setup/data-display-setup.md","filePath":"en/whatsminer-firmware/initial-device-setup/data-display-setup.md"}');
const _sfc_main = { name: "en/whatsminer-firmware/initial-device-setup/data-display-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="data-display-setup" tabindex="-1">Data display setup <a class="header-anchor" href="#data-display-setup" aria-label="Permalink to “Data display setup”">​</a></h1><p>This page is a starter placeholder.</p><h2 id="display-options" tabindex="-1">Display options <a class="header-anchor" href="#display-options" aria-label="Permalink to “Display options”">​</a></h2><p>Choose which metrics should be visible by default.</p><h2 id="layout-preferences" tabindex="-1">Layout preferences <a class="header-anchor" href="#layout-preferences" aria-label="Permalink to “Layout preferences”">​</a></h2><p>Set table/card layout and ordering preferences.</p><h2 id="save-and-review" tabindex="-1">Save and review <a class="header-anchor" href="#save-and-review" aria-label="Permalink to “Save and review”">​</a></h2><p>Apply settings and confirm values on the dashboard.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/whatsminer-firmware/initial-device-setup/data-display-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataDisplaySetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataDisplaySetup as default
};
