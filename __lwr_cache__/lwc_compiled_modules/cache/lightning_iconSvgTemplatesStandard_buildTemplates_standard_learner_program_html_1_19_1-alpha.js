import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./learner_program.css";

import _implicitScopedStylesheets from "./learner_program.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36.78 25.28c2.9 1.59 5.81 5.42 6.97 8.32.23.65.93 1.12 1.74 1.22.81.19 1.51.19 2.32.19 1.28 0 2.32 0 3.37-.37 3.02-.84 5.57-1.87 7.78-3.65 3.6-2.9 4.88-7.01 3.48-10.47-4.3-1.03-9.41-.09-13.01 2.8-1.05.84-1.86 1.78-2.56 2.8-1.86-2.34-4.07-4.39-6.62-5.7-1.74-.84-3.95-.37-4.99 1.03-.7 1.4 0 2.99 1.51 3.83zm36.38 43.81c-2.41-.94-2.73-1.87-2.73-2.91.04-.53.19-1.04.44-1.51s.6-.87 1.03-1.19c.73-.65 1.3-1.46 1.68-2.36.38-.9.56-1.87.52-2.84 0-3.95-2.41-7.28-6.61-7.28s-6.61 3.33-6.61 7.28c-.01.97.18 1.93.55 2.83.38.89.94 1.7 1.65 2.37.42.32.77.73 1.03 1.19.25.47.4.98.44 1.51 0 1.04-.31 1.97-2.73 3.01-3.46 1.56-6.72 3.43-6.82 6.55 0 2.08 1.57 4.26 3.57 4.26h18.05c1.99 0 3.57-2.18 3.36-4.26-.1-3.12-3.36-5.2-6.82-6.65zM67.45 41.1c-6.11-3.49-9.27-1.94-12.75-.24-2.17 1.06-4.47 2.19-7.7 2.19s-5.53-1.13-7.7-2.19c-3.48-1.7-6.63-3.25-12.75.24-9.65 5.57-6.85 23.54-2.99 30.29 3.47 5.96 11.74 12.11 24.57 6.25.29-.12.66-.17 1.01-.14-.1-.58-.15-1.16-.15-1.76v-.2c.13-3.87 2.29-6.58 4.3-8.26 1.07-.89 2.25-1.63 3.4-2.26a12.867 12.867 0 01-1.83-6.78c0-3.14.97-6.39 3.16-8.97 2.29-2.69 5.63-4.27 9.45-4.27 1.55 0 3.02.26 4.37.75-1.03-1.93-2.46-3.55-4.41-4.65z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4001r90q463";
freezeTemplate(tmpl);
