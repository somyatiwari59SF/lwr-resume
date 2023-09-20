import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktopHeader.css";

import _implicitScopedStylesheets from "./desktopHeader.scoped.css?scoped=true";

import _lightningIcon from "lightning/icon";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span${3}>Developer</span>`;
const $fragment2 = parseFragment`<button class="slds-button slds-button_neutral slds-m-right_small slds-m-bottom_small${0}" data-button="call"${2}>Call</button>`;
const $fragment3 = parseFragment`<button class="slds-button slds-button_neutral slds-m-right_small slds-m-bottom_small${0}" data-button="linkedin"${2}>LinkedIn</button>`;
const $fragment4 = parseFragment`<button class="slds-button slds-button_neutral slds-m-bottom_small${0}" data-button="print"${2}>Print</button>`;
const $fragment5 = parseFragment`<div class="slds-text-heading_small slds-p-bottom_small${0}"${2}>Details</div>`;
const $fragment6 = parseFragment`<li${3}><strong${3}>Total Experience:</strong> 4.5+ Years</li>`;
const $fragment7 = parseFragment`<strong${3}>LinkedIn:</strong>`;
const $fragment8 = parseFragment`<li${3}><strong${3}>Current Position:</strong> Technical Consultant at Salesforce, India Pvt. Ltd.</li>`;
const $fragment9 = parseFragment`<span${3}>Developer</span>`;
const $fragment10 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="call"${2}>Call</button>`;
const $fragment11 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="linkedin"${2}>LinkedIn</button>`;
const $fragment12 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="twitter"${2}>Twitter</button>`;
const $fragment13 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="trailhead"${2}>Trailblazer Profile</button>`;
const $fragment14 = parseFragment`<button class="slds-button slds-button_neutral${0}" data-button="print"${2}>Print</button>`;
const $fragment15 = parseFragment`<li class="slds-page-header__detail-block${0}"${2}><div class="slds-text-title slds-truncate${0}" title="Field 1"${2}>Address</div><div class="slds-truncate${0}" title="Description that demonstrates truncation with a long text field."${2}>34, Ghisaji Patel Nagar, Indore, M.P. 452008</div></li>`;
const $fragment16 = parseFragment`<li class="slds-page-header__detail-block${0}"${2}><div class="slds-text-title slds-truncate${0}" title="Field 2 (3)"${2}>Total Experiance</div><div class="slds-truncate${0}" title="Multiple Values"${2}>4.5+ Years</div></li>`;
const $fragment17 = parseFragment`<div class="slds-text-title slds-truncate${0}" title="Field 3"${2}>LinkedIn</div>`;
const $fragment18 = parseFragment`<li class="slds-page-header__detail-block${0}"${2}><div class="slds-text-title slds-truncate${0}" title="Field 4"${2}>Current Position</div><div class="slds-truncate${0}" title="Description (2-line truncation—must use JS to truncate)."${2}>Technical Consultant at Salesforce, India Pvt. Ltd.</div></li>`;
const stc0 = {
  classMap: {
    "slds-page-header": true,
    "slds-page-header_record-home": true
  },
  key: 1
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 2
};
const stc2 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-p-around_medium": true
  },
  key: 3
};
const stc3 = {
  classMap: {
    "slds-media": true
  },
  key: 4
};
const stc4 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 5
};
const stc5 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-opportunity": true
  },
  key: 6
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
  key: 7
};
const stc7 = {
  classMap: {
    "slds-media__body": true
  },
  key: 8
};
const stc8 = {
  classMap: {
    "slds-text-heading_medium": true,
    "slds-p-top_small": true
  },
  key: 9
};
const stc9 = {
  "slds-page-header__title": true,
  "slds-truncate": true
};
const stc10 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-p-around_medium": true
  },
  key: 13
};
const stc11 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-p-around_medium": true
  },
  key: 20
};
const stc12 = {
  classMap: {
    "slds-list_vertical": true,
    "slds-list_vertical-space": true
  },
  key: 23
};
const stc13 = {
  key: 26
};
const stc14 = {
  attrs: {
    "href": "#"
  },
  key: 29
};
const stc15 = {
  classMap: {
    "slds-page-header": true,
    "slds-page-header_record-home": true
  },
  key: 32
};
const stc16 = {
  classMap: {
    "slds-page-header__row": true
  },
  key: 33
};
const stc17 = {
  classMap: {
    "slds-page-header__col-title": true
  },
  key: 34
};
const stc18 = {
  classMap: {
    "slds-media": true
  },
  key: 35
};
const stc19 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 36
};
const stc20 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-opportunity": true
  },
  key: 37
};
const stc21 = {
  classMap: {
    "my-icon": true
  },
  props: {
    "iconName": "utility:user",
    "alternativeText": "Education",
    "title": "Image"
  },
  key: 38
};
const stc22 = {
  classMap: {
    "slds-media__body": true
  },
  key: 39
};
const stc23 = {
  classMap: {
    "slds-page-header__name": true
  },
  key: 40
};
const stc24 = {
  classMap: {
    "slds-page-header__name-title": true
  },
  key: 41
};
const stc25 = {
  key: 42
};
const stc26 = {
  classMap: {
    "slds-page-header__col-actions": true
  },
  key: 46
};
const stc27 = {
  classMap: {
    "slds-page-header__controls": true
  },
  key: 47
};
const stc28 = {
  classMap: {
    "slds-page-header__control": true
  },
  key: 48
};
const stc29 = {
  classMap: {
    "slds-button-group-list": true
  },
  key: 49
};
const stc30 = {
  key: 50
};
const stc31 = {
  key: 53
};
const stc32 = {
  key: 56
};
const stc33 = {
  key: 59
};
const stc34 = {
  key: 62
};
const stc35 = {
  classMap: {
    "slds-page-header__row": true,
    "slds-page-header__row_gutters": true
  },
  key: 65
};
const stc36 = {
  classMap: {
    "slds-page-header__col-details": true
  },
  key: 66
};
const stc37 = {
  classMap: {
    "slds-page-header__detail-row": true
  },
  key: 67
};
const stc38 = {
  classMap: {
    "slds-page-header__detail-block": true
  },
  key: 72
};
const stc39 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Hyperlink"
  },
  key: 75
};
const stc40 = {
  attrs: {
    "href": "#"
  },
  key: 76
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text, b: api_bind, fr: api_fragment} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15} = $ctx;
  return [$cmp.isMobile ? api_fragment(0, [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("span", stc5, [api_custom_element("lightning-icon", _lightningIcon, stc6)])]), api_element("div", stc7, [api_element("h1", stc8, [api_static_fragment($fragment1(), 11), api_element("span", {
    classMap: stc9,
    attrs: {
      "title": $cmp.candidateInfo.name
    },
    key: 12
  }, [api_text(api_dynamic_text($cmp.candidateInfo.name))])])])])]), api_element("div", stc10, [api_static_fragment($fragment2(), 15, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleClick))
    }
  }), api_static_fragment($fragment3(), 17, {
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
    }
  }), api_static_fragment($fragment4(), 19, {
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleClick))
    }
  })]), api_element("div", stc11, [api_static_fragment($fragment5(), 22), api_element("ul", stc12, [api_static_fragment($fragment6(), 25), api_element("li", stc13, [api_static_fragment($fragment7(), 28), api_element("a", stc14, [api_text("@somyatiwari59")])]), api_static_fragment($fragment8(), 31)])])])])], 0) : api_fragment(0, [api_element("div", stc15, [api_element("div", stc16, [api_element("div", stc17, [api_element("div", stc18, [api_element("div", stc19, [api_element("span", stc20, [api_custom_element("lightning-icon", _lightningIcon, stc21)])]), api_element("div", stc22, [api_element("div", stc23, [api_element("div", stc24, [api_element("h1", stc25, [api_static_fragment($fragment9(), 44), api_element("span", {
    classMap: stc9,
    attrs: {
      "title": $cmp.candidateInfo.name
    },
    key: 45
  }, [api_text(api_dynamic_text($cmp.candidateInfo.name))])])])])])])]), api_element("div", stc26, [api_element("div", stc27, [api_element("div", stc28, [api_element("ul", stc29, [api_element("li", stc30, [api_static_fragment($fragment10(), 52, {
    on: {
      "click": _m7 || ($ctx._m7 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc31, [api_static_fragment($fragment11(), 55, {
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc32, [api_static_fragment($fragment12(), 58, {
    on: {
      "click": _m11 || ($ctx._m11 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc33, [api_static_fragment($fragment13(), 61, {
    on: {
      "click": _m13 || ($ctx._m13 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc34, [api_static_fragment($fragment14(), 64, {
    on: {
      "click": _m15 || ($ctx._m15 = api_bind($cmp.handleClick))
    }
  })])])])])])]), api_element("div", stc35, [api_element("div", stc36, [api_element("ul", stc37, [api_static_fragment($fragment15(), 69), api_static_fragment($fragment16(), 71), api_element("li", stc38, [api_static_fragment($fragment17(), 74), api_element("div", stc39, [api_element("a", stc40, [api_text("@somyatiwari59")])])]), api_static_fragment($fragment18(), 78)])])])])], 0)];
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
