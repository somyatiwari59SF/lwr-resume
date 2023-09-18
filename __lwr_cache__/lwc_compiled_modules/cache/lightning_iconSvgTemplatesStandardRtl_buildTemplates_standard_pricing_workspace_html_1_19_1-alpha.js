import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pricing_workspace.css";

import _implicitScopedStylesheets from "./pricing_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36.6 20.5a2.05 2.05 0 012.1 2.1V24a2.05 2.05 0 01-2.1 2.1h-6.3a4.19 4.19 0 00-4.2 4v39.6a4.19 4.19 0 004 4.2h39.6a4.19 4.19 0 004.2-4v-6.5a2.05 2.05 0 012.1-2.1h1.4a2.05 2.05 0 012.1 2.1v7.7a8.39 8.39 0 01-8.4 8.4H28.9a8.39 8.39 0 01-8.4-8.4V28.9a8.39 8.39 0 018.4-8.4z" fill-rule="evenodd"${3}/><path d="M54.6 24l10.4.2a4.31 4.31 0 012.2.9l4.1 4.1 4.1 4.1a2.94 2.94 0 01.9 2.2l.2 10.4a3.17 3.17 0 01-.9 2.3L58.5 65.3a3.14 3.14 0 01-4.4 0l-9.4-9.4-9.4-9.4a3.14 3.14 0 010-4.4L52.4 25a2.57 2.57 0 012.2-1zm-5.8 16.6l-1.7 1.7a.78.78 0 000 1.1l10 10a.78.78 0 001.1 0l1.7-1.7a.78.78 0 000-1.1l-10-10a.78.78 0 00-1.1 0zm4.7-4.7l-1.7 1.7a.78.78 0 000 1.1l10 10a.78.78 0 001.1 0l1.7-1.7a.78.78 0 000-1.1l-10-10a.78.78 0 00-1.1 0zm16.1-5a3.11 3.11 0 100 4.4 3.14 3.14 0 000-4.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-390k7a4o1a8";
freezeTemplate(tmpl);
