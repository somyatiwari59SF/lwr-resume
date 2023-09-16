import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktopHeader.css";

import _implicitScopedStylesheets from "./desktopHeader.scoped.css?scoped=true";

import _lightningIcon from "lightning/icon";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span${3}>Developer</span>`;
const $fragment2 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="call"${2}>Call</button>`;
const $fragment3 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="linkedin"${2}>LinkedIn</button>`;
const $fragment4 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="twitter"${2}>Twitter</button>`;
const $fragment5 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="trailhead"${2}>Trailblazer Profile</button>`;
const $fragment6 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="print"${2}>Print</button>`;
const $fragment7 = parseFragment`<li class="slds-page-header__detail-block${0}"${2}><div class="slds-text-title slds-truncate${0}" title="Field 1"${2}>Address</div><div class="slds-truncate${0}" title="Description that demonstrates truncation with a long text field."${2}>34, Ghisaji Patel Nagar, Indore, M.P. 452008</div></li>`;
const $fragment8 = parseFragment`<li class="slds-page-header__detail-block${0}"${2}><div class="slds-text-title slds-truncate${0}" title="Field 2 (3)"${2}>Total Experiance</div><div class="slds-truncate${0}" title="Multiple Values"${2}>4.5+ Years</div></li>`;
const $fragment9 = parseFragment`<div class="slds-text-title slds-truncate${0}" title="Field 3"${2}>LinkedIn</div>`;
const $fragment10 = parseFragment`<li class="slds-page-header__detail-block${0}"${2}><div class="slds-text-title slds-truncate${0}" title="Field 4"${2}>Current Position</div><div class="slds-truncate${0}" title="Description (2-line truncation—must use JS to truncate)."${2}>Technical Consultant at Salesforce, India Pvt. Ltd.</div></li>`;
const stc0 = {
  classMap: {
    "slds-page-header": true,
    "slds-page-header_record-home": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-page-header__row": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-page-header__col-title": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-media": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-opportunity": true
  },
  key: 5
};
const stc6 = {
  classMap: {
    "my-icon": true
  },
  props: {
    "iconName": "utility:user",
    "alternativeText": "Education",
    "title": "Image"
  },
  key: 6
};
const stc7 = {
  classMap: {
    "slds-media__body": true
  },
  key: 7
};
const stc8 = {
  classMap: {
    "slds-page-header__name": true
  },
  key: 8
};
const stc9 = {
  classMap: {
    "slds-page-header__name-title": true
  },
  key: 9
};
const stc10 = {
  key: 10
};
const stc11 = {
  "slds-page-header__title": true,
  "slds-truncate": true
};
const stc12 = {
  classMap: {
    "slds-page-header__col-actions": true
  },
  key: 14
};
const stc13 = {
  classMap: {
    "slds-page-header__controls": true
  },
  key: 15
};
const stc14 = {
  classMap: {
    "slds-page-header__control": true
  },
  key: 16
};
const stc15 = {
  classMap: {
    "slds-button-group-list": true
  },
  key: 17
};
const stc16 = {
  key: 18
};
const stc17 = {
  key: 21
};
const stc18 = {
  key: 24
};
const stc19 = {
  key: 27
};
const stc20 = {
  key: 30
};
const stc21 = {
  classMap: {
    "slds-page-header__row": true,
    "slds-page-header__row_gutters": true
  },
  key: 33
};
const stc22 = {
  classMap: {
    "slds-page-header__col-details": true
  },
  key: 34
};
const stc23 = {
  classMap: {
    "slds-page-header__detail-row": true
  },
  key: 35
};
const stc24 = {
  classMap: {
    "slds-page-header__detail-block": true
  },
  key: 40
};
const stc25 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Hyperlink"
  },
  key: 43
};
const stc26 = {
  attrs: {
    "href": "#"
  },
  key: 44
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text, b: api_bind} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("span", stc5, [api_custom_element("lightning-icon", _lightningIcon, stc6)])]), api_element("div", stc7, [api_element("div", stc8, [api_element("div", stc9, [api_element("h1", stc10, [api_static_fragment($fragment1(), 12), api_element("span", {
    classMap: stc11,
    attrs: {
      "title": $cmp.candidateInfo.name
    },
    key: 13
  }, [api_text(api_dynamic_text($cmp.candidateInfo.name))])])])])])])]), api_element("div", stc12, [api_element("div", stc13, [api_element("div", stc14, [api_element("ul", stc15, [api_element("li", stc16, [api_static_fragment($fragment2(), 20, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc17, [api_static_fragment($fragment3(), 23, {
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc18, [api_static_fragment($fragment4(), 26, {
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc19, [api_static_fragment($fragment5(), 29, {
    on: {
      "click": _m7 || ($ctx._m7 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc20, [api_static_fragment($fragment6(), 32, {
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.handleClick))
    }
  })])])])])])]), api_element("div", stc21, [api_element("div", stc22, [api_element("ul", stc23, [api_static_fragment($fragment7(), 37), api_static_fragment($fragment8(), 39), api_element("li", stc24, [api_static_fragment($fragment9(), 42), api_element("div", stc25, [api_element("a", stc26, [api_text("@somyatiwari59")])])]), api_static_fragment($fragment10(), 46)])])])])];
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
tmpl.stylesheetToken = "lwc-2i88e54533k";
freezeTemplate(tmpl);
