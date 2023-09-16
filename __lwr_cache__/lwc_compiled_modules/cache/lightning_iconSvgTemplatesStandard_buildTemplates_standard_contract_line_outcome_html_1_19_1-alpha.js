import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_outcome.css";

import _implicitScopedStylesheets from "./contract_line_outcome.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.31 41.54h-14.8c-3.49 0-6.34-2.85-6.34-6.34V20.4c0-1.16-.95-2.11-2.11-2.11H29.92c-3.49 0-6.34 2.85-6.34 6.34v50.74c0 3.49 2.85 6.34 6.34 6.34h22.62c-2.75-3.49-4.4-7.89-4.4-12.68H44.4c-1.16 0-2.11-.95-2.11-2.11v-2.11c0-1.16.95-2.11 2.11-2.11h4.73c.75-2.32 1.91-4.46 3.38-6.34H44.4c-1.16 0-2.11-.95-2.11-2.11v-2.11c0-1.16.95-2.11 2.11-2.11h16.51c2.39-.97 5-1.51 7.74-1.51s5.37.54 7.77 1.52v-6.35c0-1.16-.95-2.11-2.11-2.11zM33.72 69.13c-1.8 0-3.28-1.48-3.28-3.28s1.48-3.28 3.28-3.28S37 64.05 37 65.85s-1.48 3.28-3.28 3.28zm-3.28-15.96c0 1.8 1.48 3.28 3.28 3.28S37 55.08 37 53.17c0-1.8-1.48-3.28-3.28-3.28s-3.28 1.48-3.28 3.28zm8.46-13.53l-4.65 2.43c-.32.21-.74-.11-.63-.42l.85-5.18c0-.11 0-.32-.11-.42l-3.81-3.7c-.11-.21.11-.63.42-.74l5.18-.74c.11 0 .32-.11.32-.21l2.33-4.76c.21-.32.63-.32.85 0l2.33 4.76c.11.11.21.21.32.21l5.18.74c.32.11.53.53.21.74l-3.81 3.7c-.11.11-.11.21-.11.42l.85 5.18c.11.32-.32.63-.63.42l-4.65-2.43c-.11-.11-.32-.11-.42 0zm36.04-4.44h-11.2c-2.33 0-4.23-1.9-4.23-4.23v-11.2c0-.85.63-1.48 1.48-1.48.42 0 .74.11 1.06.42L76 32.66c.32.32.42.63.42 1.06 0 .85-.63 1.48-1.48 1.48zm8.63 33.81c0 8.24-6.68 14.92-14.92 14.92s-14.92-6.68-14.92-14.92 6.68-14.92 14.92-14.92 14.92 6.68 14.92 14.92zm-12.8-8.25s-.02-.04-.04-.05c-.01 0-.03-.02-.04-.04a.65.65 0 00-1.03.09l-1.12 1.18-.04.05c-.29.32-.29.86.04 1.13l2.89 3.18c.08.09.17.23.17.41 0 .32-.21.59-.54.59H60.1c-.41 0-.74.36-.79.82v1.72c.04.45.37.82.79.91h11c.12 0 .21.05.29.14.25.18.29.59.08.82l-2.89 3.18-.04.05c-.29.32-.29.86.04 1.13l1.08 1.23.04.05c.29.32.79.32 1.03-.05l6.99-7.67.04-.05c.29-.32.29-.86-.04-1.13l-6.95-7.67z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6voo093akcg";
freezeTemplate(tmpl);
