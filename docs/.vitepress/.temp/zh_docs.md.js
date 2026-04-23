import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"文档","description":"","frontmatter":{"title":"文档"},"headers":[],"relativePath":"zh/docs.md","filePath":"zh/docs.md"}');
const _sfc_main = { name: "zh/docs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to “文档”">​</a></h1><p>文档索引页。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/docs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const docs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  docs as default
};
