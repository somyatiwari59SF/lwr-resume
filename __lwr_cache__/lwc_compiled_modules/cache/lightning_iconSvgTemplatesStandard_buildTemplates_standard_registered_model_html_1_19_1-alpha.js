import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./registered_model.css";

import _implicitScopedStylesheets from "./registered_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M63.5 41.7c-.14.16-.27.32-.42.47-.78.79-1.76 1.39-2.86 1.72-.6.18-1.23.27-1.9.27s-1.3-.1-1.9-.27l-7.48 12.46a8.315 8.315 0 00-2.86-1.72l7.48-12.46a6.674 6.674 0 01-1.92-4.68c0-3.68 2.98-6.66 6.66-6.66s6.66 2.98 6.66 6.66c0 1.58-.54 3.02-1.46 4.17l-.03.04h.02zm.46 1.94c-.82.75-1.78 1.34-2.86 1.72l7.48 12.46c-.61.62-1.1 1.36-1.43 2.18-.11.27-.2.54-.27.83-.14.54-.21 1.09-.21 1.66s.07 1.14.21 1.66c.74 2.87 3.35 5 6.46 5 3.68 0 6.66-2.98 6.66-6.66s-2.98-6.66-6.66-6.66c-.66 0-1.3.1-1.9.27l-7.48-12.46zM49.51 59.98c-.33-.82-.82-1.55-1.43-2.17a6.745 6.745 0 00-2.86-1.72c-.6-.18-1.23-.27-1.9-.27-3.68 0-6.66 2.98-6.66 6.66s2.98 6.66 6.66 6.66c3.1 0 5.72-2.13 6.46-5h15.38c-.11-.54-.17-1.1-.17-1.66s.06-1.13.17-1.66H49.78c-.07-.29-.17-.57-.28-.84zM32.46 38.64l8.94 8.94c.36.43.36 1.14 0 1.5l-9.01 8.94c-.43.43-1.07.43-1.5 0l-1.5-1.5c-.43-.43-.43-1.07 0-1.5l3.29-3.29c.43-.43.14-1.22-.5-1.22h-11.1c-.57 0-1.07-.5-1.07-1.07V47.3c0-.58.5-1.07 1.07-1.14h11.18c.64 0 .93-.78.5-1.22l-3.29-3.29c-.43-.43-.43-1.07 0-1.5l1.5-1.5c.43-.43 1.07-.43 1.5 0z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ckjfbrmrs7";
freezeTemplate(tmpl);
