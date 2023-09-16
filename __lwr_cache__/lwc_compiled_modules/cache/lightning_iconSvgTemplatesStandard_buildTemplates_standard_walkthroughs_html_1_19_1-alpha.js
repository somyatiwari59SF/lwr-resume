import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./walkthroughs.css";

import _implicitScopedStylesheets from "./walkthroughs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M35.5 23.99c0-1.69 1.18-2.99 2.72-2.99h38.07c1.54 0 2.72 1.3 2.72 2.99v30.44c0 1.69-1.18 2.99-2.72 2.99h-4.53V31.56c0-1.69-1.18-2.99-2.72-2.99H35.5v-4.58z" fill-rule="evenodd"${3}/><path d="M23.72 36.13c-1.54 0-2.72 1.3-2.72 2.99v30.44c0 1.69 1.18 2.99 2.72 2.99h13.15l3.26 5.17c.91 1.39 2.53 1.69 3.81.7.18-.2.37-.4.54-.6l3.81-5.28h13.5c1.54 0 2.72-1.3 2.72-2.99V39.11c0-1.69-1.18-2.99-2.72-2.99H23.72z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2cn2ff6dktp";
freezeTemplate(tmpl);
