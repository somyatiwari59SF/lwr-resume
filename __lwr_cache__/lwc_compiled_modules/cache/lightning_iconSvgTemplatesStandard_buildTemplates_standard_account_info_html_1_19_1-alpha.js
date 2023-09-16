import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./account_info.css";

import _implicitScopedStylesheets from "./account_info.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M63.94 55.88A12.06 12.06 0 1076 67.94a12.06 12.06 0 00-12.1-12.06zm-.1 5.49h.06a1.8 1.8 0 11-1.8 1.8 1.77 1.77 0 011.74-1.8zM66.9 74a.54.54 0 01-.56.54H61.5a.56.56 0 01-.6-.5v-1.27a.65.65 0 01.6-.66.56.56 0 00.6-.5v-2.44a.65.65 0 00-.6-.66.56.56 0 01-.6-.5v-1.24a.65.65 0 01.6-.66h3.6a.66.66 0 01.6.66v4.8a.54.54 0 00.56.54.66.66 0 01.6.66z"${3}/><path d="M63.55 51.55c1 0 2.78-.08 2.7-1.56-.07-1.15 0-6 0-8.08V22.39A2.39 2.39 0 0063.86 20H26.43A2.39 2.39 0 0024 22.35v49.74h22.13c1.38 0 1.73-1 1.65-2.43s-.61-7.82 3.73-12.85 11-5.26 12.04-5.26zM53.48 28.31a2.46 2.46 0 012.14-2.41h3.05a2.46 2.46 0 012.14 2.41v2.45a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44zm0 12a2.45 2.45 0 012.44-2.44h2.45a2.45 2.45 0 012.44 2.44v2.45a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44zM36.81 66.76a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44v-2.45a2.45 2.45 0 012.44-2.44h2.45a2.45 2.45 0 012.44 2.44zm0-12a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44v-2.45a2.45 2.45 0 012.44-2.44h2.45a2.45 2.45 0 012.44 2.44zm0-12a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44v-2.45a2.45 2.45 0 012.44-2.44h2.45a2.45 2.45 0 012.44 2.44zm0-12a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44v-2.45a2.46 2.46 0 012.14-2.41h3.05a2.46 2.46 0 012.14 2.41zm12 24a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44v-2.45a2.45 2.45 0 012.44-2.44h2.45a2.45 2.45 0 012.44 2.44zm0-12a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44v-2.45a2.45 2.45 0 012.44-2.44h2.45a2.45 2.45 0 012.44 2.44zm0-12a2.45 2.45 0 01-2.44 2.44h-2.45a2.45 2.45 0 01-2.44-2.44v-2.45a2.46 2.46 0 012.14-2.41h3.05a2.46 2.46 0 012.14 2.41z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2r5nn5o813i";
freezeTemplate(tmpl);
