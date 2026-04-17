import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Initial device setup","description":"","frontmatter":{"title":"Initial device setup"},"headers":[],"relativePath":"en/whatsminer-firmware/initial-device-setup/index.md","filePath":"en/whatsminer-firmware/initial-device-setup/index.md"}');
const _sfc_main = { name: "en/whatsminer-firmware/initial-device-setup/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="initial-device-setup" tabindex="-1">Initial device setup <a class="header-anchor" href="#initial-device-setup" aria-label="Permalink to “Initial device setup”">​</a></h1><p>This page is a starter placeholder.</p><h2 id="first-launch" tabindex="-1">First launch <a class="header-anchor" href="#first-launch" aria-label="Permalink to “First launch”">​</a></h2><p>Power on the device and wait for initialization.</p><h2 id="basic-configuration" tabindex="-1">Basic configuration <a class="header-anchor" href="#basic-configuration" aria-label="Permalink to “Basic configuration”">​</a></h2><p>Set required options before production use.</p><h2 id="validation" tabindex="-1">Validation <a class="header-anchor" href="#validation" aria-label="Permalink to “Validation”">​</a></h2><p>Confirm setup values and save the configuration.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/whatsminer-firmware/initial-device-setup/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
