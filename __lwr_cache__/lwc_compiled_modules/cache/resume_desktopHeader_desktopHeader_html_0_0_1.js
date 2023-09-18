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
const $fragment11 = parseFragment`<span${3}>Developer</span>`;
const $fragment12 = parseFragment`<button class="slds-button slds-button_neutral slds-m-right_small slds-m-bottom_small${0}" data-button="call"${2}>Call</button>`;
const $fragment13 = parseFragment`<button class="slds-button slds-button_neutral slds-m-right_small slds-m-bottom_small${0}" data-button="linkedin"${2}>LinkedIn</button>`;
const $fragment14 = parseFragment`<button class="slds-button slds-button_neutral slds-m-bottom_small${0}" data-button="print"${2}>Print</button>`;
const $fragment15 = parseFragment`<div class="slds-text-heading_small slds-p-bottom_small${0}"${2}>Details</div>`;
const $fragment16 = parseFragment`<li${3}><strong${3}>Total Experience:</strong> 4.5+ Years</li>`;
const $fragment17 = parseFragment`<strong${3}>LinkedIn:</strong>`;
const $fragment18 = parseFragment`<li${3}><strong${3}>Current Position:</strong> Technical Consultant at Salesforce, India Pvt. Ltd.</li>`;
const stc0 = {
  classMap: {
    "slds-page-header": true,
    "slds-page-header_record-home": true
  },
  key: 1
};
const stc1 = {
  classMap: {
    "slds-page-header__row": true
  },
  key: 2
};
const stc2 = {
  classMap: {
    "slds-page-header__col-title": true
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
    "slds-page-header__name": true
  },
  key: 9
};
const stc9 = {
  classMap: {
    "slds-page-header__name-title": true
  },
  key: 10
};
const stc10 = {
  key: 11
};
const stc11 = {
  "slds-page-header__title": true,
  "slds-truncate": true
};
const stc12 = {
  classMap: {
    "slds-page-header__col-actions": true
  },
  key: 15
};
const stc13 = {
  classMap: {
    "slds-page-header__controls": true
  },
  key: 16
};
const stc14 = {
  classMap: {
    "slds-page-header__control": true
  },
  key: 17
};
const stc15 = {
  classMap: {
    "slds-button-group-list": true
  },
  key: 18
};
const stc16 = {
  key: 19
};
const stc17 = {
  key: 22
};
const stc18 = {
  key: 25
};
const stc19 = {
  key: 28
};
const stc20 = {
  key: 31
};
const stc21 = {
  classMap: {
    "slds-page-header__row": true,
    "slds-page-header__row_gutters": true
  },
  key: 34
};
const stc22 = {
  classMap: {
    "slds-page-header__col-details": true
  },
  key: 35
};
const stc23 = {
  classMap: {
    "slds-page-header__detail-row": true
  },
  key: 36
};
const stc24 = {
  classMap: {
    "slds-page-header__detail-block": true
  },
  key: 41
};
const stc25 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Hyperlink"
  },
  key: 44
};
const stc26 = {
  attrs: {
    "href": "#"
  },
  key: 45
};
const stc27 = {
  classMap: {
    "slds-page-header": true,
    "slds-page-header_record-home": true
  },
  key: 48
};
const stc28 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 49
};
const stc29 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-p-around_medium": true
  },
  key: 50
};
const stc30 = {
  classMap: {
    "slds-media": true
  },
  key: 51
};
const stc31 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 52
};
const stc32 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-opportunity": true
  },
  key: 53
};
const stc33 = {
  classMap: {
    "my-icon": true
  },
  props: {
    "iconName": "utility:user",
    "alternativeText": "Education",
    "title": "Image"
  },
  key: 54
};
const stc34 = {
  classMap: {
    "slds-media__body": true
  },
  key: 55
};
const stc35 = {
  classMap: {
    "slds-text-heading_medium": true,
    "slds-p-top_small": true
  },
  key: 56
};
const stc36 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-p-around_medium": true
  },
  key: 60
};
const stc37 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-p-around_medium": true
  },
  key: 67
};
const stc38 = {
  classMap: {
    "slds-list_vertical": true,
    "slds-list_vertical-space": true
  },
  key: 70
};
const stc39 = {
  key: 73
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
  return [$cmp.isMobile ? api_fragment(0, [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("span", stc5, [api_custom_element("lightning-icon", _lightningIcon, stc6)])]), api_element("div", stc7, [api_element("div", stc8, [api_element("div", stc9, [api_element("h1", stc10, [api_static_fragment($fragment1(), 13), api_element("span", {
    classMap: stc11,
    attrs: {
      "title": $cmp.candidateInfo.name
    },
    key: 14
  }, [api_text(api_dynamic_text($cmp.candidateInfo.name))])])])])])])]), api_element("div", stc12, [api_element("div", stc13, [api_element("div", stc14, [api_element("ul", stc15, [api_element("li", stc16, [api_static_fragment($fragment2(), 21, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc17, [api_static_fragment($fragment3(), 24, {
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc18, [api_static_fragment($fragment4(), 27, {
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc19, [api_static_fragment($fragment5(), 30, {
    on: {
      "click": _m7 || ($ctx._m7 = api_bind($cmp.handleClick))
    }
  })]), api_element("li", stc20, [api_static_fragment($fragment6(), 33, {
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.handleClick))
    }
  })])])])])])]), api_element("div", stc21, [api_element("div", stc22, [api_element("ul", stc23, [api_static_fragment($fragment7(), 38), api_static_fragment($fragment8(), 40), api_element("li", stc24, [api_static_fragment($fragment9(), 43), api_element("div", stc25, [api_element("a", stc26, [api_text("@somyatiwari59")])])]), api_static_fragment($fragment10(), 47)])])])])], 0) : api_fragment(0, [api_element("div", stc27, [api_element("div", stc28, [api_element("div", stc29, [api_element("div", stc30, [api_element("div", stc31, [api_element("span", stc32, [api_custom_element("lightning-icon", _lightningIcon, stc33)])]), api_element("div", stc34, [api_element("h1", stc35, [api_static_fragment($fragment11(), 58), api_element("span", {
    classMap: stc11,
    attrs: {
      "title": $cmp.candidateInfo.name
    },
    key: 59
  }, [api_text(api_dynamic_text($cmp.candidateInfo.name))])])])])]), api_element("div", stc36, [api_static_fragment($fragment12(), 62, {
    on: {
      "click": _m11 || ($ctx._m11 = api_bind($cmp.handleClick))
    }
  }), api_static_fragment($fragment13(), 64, {
    on: {
      "click": _m13 || ($ctx._m13 = api_bind($cmp.handleClick))
    }
  }), api_static_fragment($fragment14(), 66, {
    on: {
      "click": _m15 || ($ctx._m15 = api_bind($cmp.handleClick))
    }
  })]), api_element("div", stc37, [api_static_fragment($fragment15(), 69), api_element("ul", stc38, [api_static_fragment($fragment16(), 72), api_element("li", stc39, [api_static_fragment($fragment17(), 75), api_element("a", stc40, [api_text("@somyatiwari59")])]), api_static_fragment($fragment18(), 78)])])])])], 0)];
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
