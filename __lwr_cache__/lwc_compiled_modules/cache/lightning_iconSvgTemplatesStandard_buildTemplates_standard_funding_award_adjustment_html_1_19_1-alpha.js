import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./funding_award_adjustment.css";

import _implicitScopedStylesheets from "./funding_award_adjustment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.5 51.33v18.92c0 .47.31.78.78.78.16 0 .31 0 .39-.08 3.76-2.09 11.44-7.73 11.44-8.06 0-2.28.65-3.9.98-4.88.33-.98 1.18-2.28 1.63-2.93.44-.65.98-1.3 1.63-1.95s1.95-1.63 1.95-1.63V41.33c0-.47-.31-.78-.78-.78-.16 0-.31 0-.39.08l-16.84 9.38c-.47.23-.78.78-.78 1.32zm-1.57-5.27l16.92-9.38c.39-.23.47-.7.23-1.09l-.23-.23c-3.76-2.09-15.28-8.61-15.28-8.61a4.95 4.95 0 00-4.86 0s-11.52 6.43-15.28 8.61c-.39.23-.47.7-.24 1.09.08.08.16.16.24.23l16.92 9.38c.47.23 1.1.23 1.57 0zm-3.92 3.95l-16.84-9.38c-.39-.23-.86-.08-1.1.31-.08.08-.08.23-.08.39v16.9c0 1.71.94 3.26 2.43 4.11 0 0 11.44 6.43 15.2 8.53.39.23.86.08 1.1-.31.08-.16.08-.31.08-.39V51.33c0-.54-.31-1.09-.78-1.32z"${3}/><path d="M80 62.82c0 6.11-4.95 11.06-11.06 11.06s-11.06-4.95-11.06-11.06 4.95-11.06 11.06-11.06S80 56.71 80 62.82zm-4.35-7.04h-4.19c-.27 0-.35.27-.14.51l1.33 1.47-2.44 2.69c-.14.15-.14.39 0 .57l1 1.11c.14.15.35.15.51 0l2.46-2.72 1.33 1.47c.22.24.46.15.46-.15v-4.6c0-.18-.16-.33-.32-.33zm-8.77 14.07h-4.54c-.21 0-.44-.26-.44-.47v-4.52c0-.29.29-.38.56-.15l1.47 1.44 2.65-2.64c.18-.15.41-.15.56 0l1.09 1.09c.15.15.15.41 0 .56l-2.65 2.67 1.44 1.47c.24.23.15.56-.15.56z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3694g8jvvjc";
freezeTemplate(tmpl);
