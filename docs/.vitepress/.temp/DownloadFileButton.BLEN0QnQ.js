import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { D as DownloadIcon } from "./HomeOutlineIcon.CNMiJIJe.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DownloadFileButton",
  __ssrInlineRender: true,
  props: {
    label: { default: "instruction file.pdf" },
    href: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        class: "download-file-button"
      }, _attrs))} data-v-7079ee99><span class="download-file-button__text" data-v-7079ee99>${ssrInterpolate(__props.label)}</span>`);
      _push(ssrRenderComponent(unref(DownloadIcon), { class: "download-file-button__icon" }, null, _parent));
      _push(`</a>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ui/DownloadFileButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DownloadFileButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7079ee99"]]);
export {
  DownloadFileButton as D
};
