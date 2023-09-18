import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_crew_member.css";

import _implicitScopedStylesheets from "./service_crew_member.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M77.3 45.5h-5.5v-6.3c0-8.3-4.7-15.5-11.5-19.2v10.9c0 5.6-4.6 10.2-10.2 10.2s-10.2-4.6-10.2-10.2v-11c-7 3.6-11.8 10.9-11.8 19.4v6.3h-5.5c-1.5 0-2.8 1.2-2.8 2.8v.5c0 1.5 1.2 2.8 2.8 2.8h54.6c1.5 0 2.8-1.2 2.8-2.8v-.5c.1-1.6-1.2-2.9-2.7-2.9z"${3}/><path d="M50.1 35.1c2.3 0 4.2-1.9 4.2-4.2V17.8c-1.4-.3-2.8-.4-4.3-.4-1.4 0-2.7.1-4 .4v13.1c0 2.3 1.8 4.2 4.1 4.2z"${3}/></g><path d="M50 82.6c-12.7 0-23-11.3-23-25.1h6c0 10.5 7.6 19.1 17 19.1S67 68 67 57.5h6c0 13.8-10.3 25.1-23 25.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3drlf27rjao";
freezeTemplate(tmpl);
