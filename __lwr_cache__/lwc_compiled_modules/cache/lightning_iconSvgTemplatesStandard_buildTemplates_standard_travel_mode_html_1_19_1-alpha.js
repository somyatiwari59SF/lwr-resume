import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./travel_mode.css";

import _implicitScopedStylesheets from "./travel_mode.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<path d="M20 20h60v60H20z" fill-rule="evenodd"${3}/>`;
const $fragment2 = parseSVGFragment`<g mask="url(#sma)"${3}><path d="M53.77 72.12C54 59.88 62.25 50 72.49 50a22.49 22.49 0 01-18.66 22.12M27.49 50C37.75 50 46 59.88 46.16 72.12A22.5 22.5 0 0127.49 50M50 27.51a22.44 22.44 0 0121.12 15H28.88a22.44 22.44 0 0121.12-15M50 20a30 30 0 1030 30 30 30 0 00-30-30" fill-rule="evenodd"${3}/></g>`;
const stc0 = {
  key: 1,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, st: api_static_fragment, h: api_element} = $api;
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
  }, [api_element("g", stc0, [api_element("mask", {
    attrs: {
      "id": api_scoped_id("sma"),
      "height": "60",
      "maskUnits": "userSpaceOnUse",
      "width": "60",
      "x": "20",
      "y": "20"
    },
    key: 2,
    svg: true
  }, [api_static_fragment($fragment1(), 4)]), api_static_fragment($fragment2(), 6)])])];
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
tmpl.stylesheetToken = "lwc-2pks3867s2";
freezeTemplate(tmpl);
