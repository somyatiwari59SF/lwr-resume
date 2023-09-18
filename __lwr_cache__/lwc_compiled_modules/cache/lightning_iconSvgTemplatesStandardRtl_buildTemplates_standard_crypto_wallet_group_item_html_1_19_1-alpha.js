import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_wallet_group_item.css";

import _implicitScopedStylesheets from "./crypto_wallet_group_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.78 20.86a6.46 6.46 0 016.45 0l6.58 3.8c2 1.15 3.22 3.28 3.22 5.59v7.6c0 2.3-1.23 4.43-3.22 5.59l-6.58 3.8a6.46 6.46 0 01-6.45 0l-6.58-3.8c-2-1.15-3.22-3.28-3.22-5.59v-7.6c0-2.3 1.23-4.43 3.22-5.59l6.58-3.8zm-5.36 12.49c-.5.51-.5 1.33 0 1.84l5.42 5.51c.5.51 1.31.51 1.81 0l9.94-10.1c.5-.51.5-1.33 0-1.84l-1.36-1.38c-.5-.51-1.31-.51-1.81 0l-6.78 6.89c-.5.51-1.31.51-1.81 0l-2.26-2.3c-.5-.51-1.31-.51-1.81 0l-1.36 1.38z" fill-rule="evenodd"${3}/><path d="M33.24 39.16h-6.89c-3.56 0-6.45 2.89-6.45 6.45v27.95c0 3.56 2.89 6.45 6.45 6.45h47.29c3.56 0 6.45-2.89 6.45-6.45V58.51c0-3.56-2.89-6.45-6.45-6.45H29.58c-1.78 0-3.22-1.44-3.22-3.22s1.44-3.22 3.22-3.22h6.92l-.03-.02c-2-1.15-3.22-3.28-3.22-5.59v-.84zM63.2 45.61h10.45c0-3.56-2.89-6.45-6.45-6.45h-.44v.68c0 2.39-1.32 4.58-3.43 5.7l-.12.06z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-63spaqul2b5";
freezeTemplate(tmpl);
