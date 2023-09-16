import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_list.css";

import _implicitScopedStylesheets from "./lead_list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.1 62.3H77c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H37.1c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM25 70.3h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c.1 1-.7 1.9-1.8 2H25zM25 52.4h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c.1 1-.7 1.9-1.8 2H25zM25 34.5h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c.1 1-.7 1.9-1.8 2H25zM37.1 44.4h35.1c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H37.1c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM37.1 26.6H77c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H37.1c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4d784u9n4hg";
freezeTemplate(tmpl);
