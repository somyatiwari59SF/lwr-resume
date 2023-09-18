import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_category_wallet_group.css";

import _implicitScopedStylesheets from "./crypto_category_wallet_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53.2 20.86a6.386 6.386 0 00-6.41 0L26.36 32.65a6.426 6.426 0 00-3.21 5.55v23.59c0 2.29 1.22 4.41 3.21 5.55l20.43 11.79a6.386 6.386 0 006.41 0l20.43-11.79a6.426 6.426 0 003.21-5.55V38.2c0-2.29-1.22-4.41-3.21-5.55L53.2 20.86zm-5.73 9.8c1.56-.9 3.48-.9 5.04 0l2.83 1.63c1.56.9 2.52 2.56 2.52 4.36v3.27c0 1.8-.96 3.46-2.52 4.36l-2.83 1.63c-1.56.9-3.48.9-5.04 0l-2.83-1.63a5.031 5.031 0 01-2.52-4.36v-3.27c0-1.8.96-3.46 2.52-4.36l2.83-1.63zm-7.59 10.71h-3.02c-2.78 0-5.04 2.26-5.04 5.04v14.58c0 2.78 2.26 5.04 5.04 5.04h26.26c2.78 0 5.04-2.26 5.04-5.04V54.2c0-2.34-1.61-4.37-3.89-4.91v-.13h-26.6c-1.08 0-1.95-.87-1.95-1.95s.87-1.95 1.95-1.95h4.25a5.034 5.034 0 01-2.03-3.89zm18.02 3.89h6.24a5.042 5.042 0 00-4.04-3.82 5.057 5.057 0 01-2.2 3.82z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1sb25jjaofv";
freezeTemplate(tmpl);
