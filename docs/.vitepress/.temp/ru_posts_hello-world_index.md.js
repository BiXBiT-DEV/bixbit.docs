import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Привет, мир","description":"","frontmatter":{"title":"Привет, мир"},"headers":[],"relativePath":"ru/posts/hello-world/index.md","filePath":"ru/posts/hello-world/index.md"}');
const _sfc_main = { name: "ru/posts/hello-world/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="привет-мир" tabindex="-1">Привет, мир <a class="header-anchor" href="#привет-мир" aria-label="Permalink to “Привет, мир”">​</a></h1><p>Первая страница публикации.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ru/posts/hello-world/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
