import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Miner identification on the network","description":"","frontmatter":{"title":"Miner identification on the network"},"headers":[],"relativePath":"en/whatsminer-firmware/initial-device-setup/network-identification.md","filePath":"en/whatsminer-firmware/initial-device-setup/network-identification.md"}');
const _sfc_main = { name: "en/whatsminer-firmware/initial-device-setup/network-identification.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="miner-identification-on-the-network" tabindex="-1">Miner identification on the network <a class="header-anchor" href="#miner-identification-on-the-network" aria-label="Permalink to “Miner identification on the network”">​</a></h1><p>This page is a starter placeholder.</p><h2 id="scan-network" tabindex="-1">Scan network <a class="header-anchor" href="#scan-network" aria-label="Permalink to “Scan network”">​</a></h2><p>Detect available devices in your local segment.</p><h2 id="match-device" tabindex="-1">Match device <a class="header-anchor" href="#match-device" aria-label="Permalink to “Match device”">​</a></h2><p>Identify the correct miner by IP or hostname.</p><h2 id="confirm-access" tabindex="-1">Confirm access <a class="header-anchor" href="#confirm-access" aria-label="Permalink to “Confirm access”">​</a></h2><p>Open the device interface and verify connectivity.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/whatsminer-firmware/initial-device-setup/network-identification.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const networkIdentification = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  networkIdentification as default
};
