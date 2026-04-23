import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Autor 1","description":"","frontmatter":{"title":"Autor 1"},"headers":[],"relativePath":"es/authors/author-1/index.md","filePath":"es/authors/author-1/index.md"}');
const _sfc_main = { name: "es/authors/author-1/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="autor-1" tabindex="-1">Autor 1 <a class="header-anchor" href="#autor-1" aria-label="Permalink to “Autor 1”">​</a></h1><p>Pagina del perfil del autor.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/authors/author-1/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
