import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_queue.css";

import _implicitScopedStylesheets from "./work_queue.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47.9 71.8h-26c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h25.9c1.1 0 2 .9 2 2v4c.1 1-.7 1.9-1.8 2h-.1zM47.9 36h-26c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h25.9c1.1 0 2 .9 2 2v4c.1 1-.7 1.9-1.8 2h-.1zM61.4 66.6c.7.7 1.9.7 2.6 0l15.3-15.2c.8-.7.8-1.9.2-2.6l-.2-.2L64 33.3c-.7-.8-1.9-.8-2.6-.2l-.2.2-2.8 2.8c-.8.7-.8 1.9-.2 2.6l.2.2 4.8 4.8c.5.5.5 1.4 0 1.9-.2.2-.6.4-.9.4H22.1c-1.1 0-2.1.9-2.1 2v4c.1 1.1 1 1.9 2.1 2h40.4c.7 0 1.3.6 1.3 1.3 0 .3-.1.7-.4.9L58.6 61c-.8.7-.8 1.9-.2 2.6l.2.2 2.8 2.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5b2liegfjab";
freezeTemplate(tmpl);
