import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tile_card_list.css";

import _implicitScopedStylesheets from "./tile_card_list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M14.5 4h-9C4.7 4 4 4.7 4 5.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM30.5 4h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM46.5 4h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM14.5 28h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM30.5 28h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM46.5 28h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-6olvrqe7au1";
freezeTemplate(tmpl);
