import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./http.css";

import _implicitScopedStylesheets from "./http.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 2C12.8 2 2 12.8 2 26s10.8 24 24 24 24-10.8 24-24S39.2 2 26 2zm19.04 21.6h-6.32c-.24-5.68-1.52-10.64-3.44-14.4 5.28 2.96 8.96 8.24 9.76 14.4zM23.6 7.84V23.6h-5.52c.4-7.52 2.8-13.44 5.52-15.76zm0 20.56v15.76c-2.72-2.32-5.12-8.24-5.52-15.76h5.52zm4.8 15.76V28.4h5.52c-.4 7.52-2.8 13.44-5.52 15.76zm0-20.56V7.84c2.72 2.32 5.12 8.24 5.52 15.76H28.4zM16.72 9.2c-1.92 3.76-3.12 8.72-3.44 14.4H6.96c.8-6.16 4.48-11.44 9.76-14.4zM6.96 28.4h6.32c.24 5.68 1.52 10.64 3.44 14.4-5.28-2.96-8.96-8.24-9.76-14.4zm28.32 14.4c1.92-3.76 3.12-8.72 3.44-14.4h6.32c-.8 6.16-4.48 11.44-9.76 14.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61jim7l3eav";
freezeTemplate(tmpl);
