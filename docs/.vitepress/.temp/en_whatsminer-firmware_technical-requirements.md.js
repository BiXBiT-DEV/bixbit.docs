import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Technical requirements","description":"","frontmatter":{"title":"Technical requirements"},"headers":[],"relativePath":"en/whatsminer-firmware/technical-requirements.md","filePath":"en/whatsminer-firmware/technical-requirements.md"}');
const _sfc_main = { name: "en/whatsminer-firmware/technical-requirements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="technical-requirements" tabindex="-1">Technical requirements <a class="header-anchor" href="#technical-requirements" aria-label="Permalink to “Technical requirements”">​</a></h1><p>This page is a starter placeholder.</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to “Introduction”">​</a></h2><p>Describe the required hardware and software baseline.</p><h2 id="main-requirements" tabindex="-1">Main requirements <a class="header-anchor" href="#main-requirements" aria-label="Permalink to “Main requirements”">​</a></h2><p>List the mandatory technical parameters and limits.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to “Notes”">​</a></h2><p>Add additional constraints and recommendations.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/whatsminer-firmware/technical-requirements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const technicalRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  technicalRequirements as default
};
