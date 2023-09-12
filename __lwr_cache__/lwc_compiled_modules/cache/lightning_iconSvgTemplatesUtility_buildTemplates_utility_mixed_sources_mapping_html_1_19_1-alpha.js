import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mixed_sources_mapping.css";

import _implicitScopedStylesheets from "./mixed_sources_mapping.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M13.08 9.73a5.43 5.43 0 01-4.9 3.1c-2.99 0-5.42-2.43-5.42-5.42s2.43-5.43 5.42-5.43a5.43 5.43 0 014.9 3.1h25.84a5.43 5.43 0 014.9-3.1c2.99 0 5.42 2.43 5.42 5.42s-2.43 5.42-5.42 5.42a5.43 5.43 0 01-4.9-3.1H13.08z"${3}/><path d="M46.51 20.86a6.15 6.15 0 00-3.46-1.06c-2.57 0-4.78 1.57-5.72 3.8-.24.01-.5.04-.77.07H13.08a5.43 5.43 0 00-4.9-3.1c-2.99 0-5.42 2.43-5.42 5.42s2.43 5.42 5.42 5.42a5.43 5.43 0 004.9-3.1h13.98c-1.58 1.71-2.52 3.69-3.31 5.34l-.15.3c-1.22 2.54-2.18 4.35-4.18 5.5-1.58.9-3.34 1.41-4.86 1.69a6.19 6.19 0 10-5.6 8.83c2.71 0 5.02-1.74 5.86-4.17 1.94-.31 4.51-.96 6.91-2.33 3.4-1.94 4.88-5.05 6.05-7.49l.02-.04c1.24-2.6 2.16-4.46 4.09-5.69 2.05-1.3 3.77-1.79 4.97-1.96h.43a6.19 6.19 0 009.61 2.51c.02-.02.05-.04.07-.06 1.38-1.14 2.25-2.86 2.25-4.78s-.91-3.7-2.32-4.84c-.13-.11-.27-.21-.41-.3v.04zm-3.45 8.4c-1.8 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25v6.5zM8.96 47.07c1.8 0 3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25-3.25 1.46-3.25 3.25 1.46 3.25 3.25 3.25z" fill-rule="evenodd"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-6nj0ejkq1rg";
freezeTemplate(tmpl);
