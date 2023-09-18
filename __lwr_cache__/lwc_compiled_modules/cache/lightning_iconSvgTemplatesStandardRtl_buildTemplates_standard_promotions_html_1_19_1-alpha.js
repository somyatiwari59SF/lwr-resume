import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotions.css";

import _implicitScopedStylesheets from "./promotions.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M59.16 53.31a3.85 3.85 0 103.89 3.86 3.85 3.85 0 00-3.84-3.86h-.05zM40.79 39a3.85 3.85 0 103.85 3.86A3.85 3.85 0 0040.79 39z"${3}/><path d="M78.16 46.11l-3.23-3.86a7 7 0 01-1.62-4l-.36-5a6.34 6.34 0 00-5.8-5.9L62.84 27a9.17 9.17 0 01-5.19-2.2L54.38 22a6.37 6.37 0 00-8.28-.07l-3.55 3a8.1 8.1 0 01-4.69 1.9l-4.62.33a6.33 6.33 0 00-5.9 5.8L27 37.14a9.25 9.25 0 01-2.22 5.23L22 45.63a6.35 6.35 0 00-.07 8.27L25 57.56A7.75 7.75 0 0126.71 62l.34 4.76a6.34 6.34 0 005.8 5.9l4.32.38a9 9 0 015.17 2.2l3.28 2.84a6.39 6.39 0 008.28.07L57.67 75a7.33 7.33 0 014.19-1.69l4.9-.35a6.34 6.34 0 005.9-5.8l.36-4a10.15 10.15 0 012.43-5.73l2.64-3a6.35 6.35 0 00.07-8.32zm-44.52-3.24A7.16 7.16 0 1140.83 50a7.15 7.15 0 01-7.19-7.11zM44 64a.56.56 0 01-.43.28h-2.09A.56.56 0 0141 64a.51.51 0 010-.53L56 36a.61.61 0 01.44-.27h2.23a.55.55 0 01.26.73zm22.4-6.84A7.17 7.17 0 1159.22 50a7.17 7.17 0 017.13 7.19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4e43g09urdo";
freezeTemplate(tmpl);
