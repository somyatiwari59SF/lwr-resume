import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./no_code_model.css";

import _implicitScopedStylesheets from "./no_code_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M59.09 35.32a9.51 9.51 0 01-6.08 6.33 9.722 9.722 0 01-3.01.48c-1.05 0-2.07-.17-3.01-.48l-9.34 14.37c-1.12-1.11-2.46-2-3.97-2.59l9.34-14.37a9.407 9.407 0 01-2.48-6.39 9.47 9.47 0 0118.94 0c0 .93-.13 1.82-.38 2.67h-.01zM58.16 40.86c-1.12 1.11-2.46 2-3.97 2.59l9.34 14.37a9.46 9.46 0 00-1.75 2.72c-.18.42-.32.86-.44 1.31-.19.76-.3 1.55-.3 2.36s.1 1.61.3 2.36c.73 2.81 2.7 5.11 5.3 6.27.06.03.12.05.19.08 1.13.47 2.37.75 3.69.75a9.47 9.47 0 000-18.94c-1.05 0-2.07.17-3.01.48l-9.34-14.37v.02zM36.46 57.82c.18.19.34.39.51.61.78 1 1.35 2.16 1.68 3.42h20.54c-.16.77-.24 1.56-.24 2.36s.08 1.61.24 2.36H38.65a9.47 9.47 0 11-9.17-11.84c1.05 0 2.07.17 3.01.48 1.54.52 2.9 1.41 3.97 2.59l.02.02z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5efm545pj9o";
freezeTemplate(tmpl);
