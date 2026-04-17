import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Connecting a device","description":"","frontmatter":{"title":"Connecting a device"},"headers":[],"relativePath":"en/whatsminer-firmware/connecting-a-device.md","filePath":"en/whatsminer-firmware/connecting-a-device.md"}');
const _sfc_main = { name: "en/whatsminer-firmware/connecting-a-device.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="doc-kicker">Whatsminer Firmware</h3><h1 id="connecting-a-device" tabindex="-1">Connecting a device <a class="header-anchor" href="#connecting-a-device" aria-label="Permalink to “Connecting a device”">​</a></h1><p>Before powering on, make sure that your electrical supply, wiring, and circuit breakers are rated for the device&#39;s power consumption.</p><div class="warning custom-block"><p class="custom-block-title custom-block-title-default">WARNING</p><p>The device does not have a power on/off button. It starts operating immediately when connected to the power supply, and a brief power surge typically occurs at that moment. <strong>It is strongly not recommended to connect the device by plugging the power cord into a live (energized) outlet, as this may damage the power connectors, plug, or socket.</strong> Whenever possible, provide each device with a dedicated circuit breaker and power it on using that breaker.</p></div><ul><li>Insert the power cable into the device and ensure the connection is secure.</li><li>Connect one end of the Ethernet cable to the appropriate port on the device and the other end to an available port on a router, switch, or modem.</li><li>Insert the power plug into the wall outlet and supply power to the device by switching on the circuit breaker.</li><li>Verify that the device&#39;s fans start operating and that the LED indicators illuminate. After a few seconds, the indicators in the Ethernet port should also light up and blink.</li><li>If the fans do not start and the LEDs do not illuminate, check the device&#39;s power supply.</li><li>If the device powers on but the Ethernet indicators do not operate, make sure that the router/switch is powered on and that the network cable is functional and properly connected.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/whatsminer-firmware/connecting-a-device.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const connectingADevice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  connectingADevice as default
};
