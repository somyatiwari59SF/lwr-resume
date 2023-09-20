import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./project.css";

import _implicitScopedStylesheets from "./project.scoped.css?scoped=true";

import _lightningBadge from "lightning/badge";
import _lightningCard from "lightning/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header${0}"${2}><div class="slds-page-header__row${0}"${2}><div class="slds-page-header__col-title${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><div class="slds-page-header__name${0}"${2}><div class="slds-page-header__name-title${0}"${2}><h1${3}><span class="slds-page-header__title slds-truncate${0}" title="Rohde Corp - 80,000 Widgets"${2}>Projects</span></h1></div></div><p class="slds-page-header__name-meta${0}"${2}>20+ Projects Worked Upon</p></div></div></div></div></div>`;
const $fragment2 = parseFragment`<b${3}>Objective/Scope:</b>`;
const $fragment3 = parseFragment`<hr${3}>`;
const $fragment4 = parseFragment`<b${3}>Responsibilities:</b>`;
const $fragment5 = parseFragment`<div class="slds-page-header${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><h1 class="slds-page-header__title slds-truncate${0}" title="Projects"${2}>Projects</h1><p class="slds-page-header__name-meta${0}"${2}>20+ Projects Worked Upon</p></div></div></div>`;
const $fragment6 = parseFragment`<strong${3}>Technologies:</strong>`;
const $fragment7 = parseFragment`<strong${3}>Difficulties:</strong>`;
const $fragment8 = parseFragment`<strong${3}>Major Functionalities:</strong>`;
const $fragment9 = parseFragment`<strong${3}>Technologies:</strong>`;
const $fragment10 = parseFragment`<strong${3}>Clouds:</strong>`;
const $fragment11 = parseFragment`<strong${3}>Objective:</strong>`;
const $fragment12 = parseFragment`<strong${3}>Team Size:</strong>`;
const $fragment13 = parseFragment`<strong${3}>Role on the Team:</strong>`;
const $fragment14 = parseFragment`<strong${3}>Major thing learned on the project:</strong>`;
const $fragment15 = parseFragment`<strong${3}>Responsibilities:</strong>`;
const stc0 = {
  classMap: {
    "project-section": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical": true
  },
  key: 3
};
const stc2 = {
  "experiance-card": true,
  "slds-m-top_medium": true,
  "slds-p-top_xx-small": true
};
const stc3 = {
  classMap: {
    "slds-p-horizontal_small": true
  },
  key: 5
};
const stc4 = {
  key: 6
};
const stc5 = {
  key: 13
};
const stc6 = {
  attrs: {
    "slot": "footer"
  },
  key: 15
};
const stc7 = {
  "slds-badge_inverse": true
};
const stc8 = {
  "slds-p-around_medium": true
};
const stc9 = {
  key: 20
};
const stc10 = {
  attrs: {
    "slot": "title"
  },
  key: 21
};
const stc11 = {
  attrs: {
    "slot": "footer"
  },
  key: 22
};
const stc12 = {
  "slds-badge": true,
  "slds-theme_brand": true,
  "slds-m-right_x-small": true
};
const stc13 = {
  classMap: {
    "slds-p-around_medium": true
  },
  key: 26
};
const stc14 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 27
};
const stc15 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-4": true
  },
  key: 28
};
const stc16 = {
  key: 31
};
const stc17 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-4": true
  },
  key: 33
};
const stc18 = {
  key: 36
};
const stc19 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-4": true
  },
  key: 38
};
const stc20 = {
  key: 41
};
const stc21 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-4": true
  },
  key: 43
};
const stc22 = {
  key: 46
};
const stc23 = {
  classMap: {
    "slds-m-top_medium": true
  },
  key: 48
};
const stc24 = {
  key: 51
};
const stc25 = {
  key: 54
};
const stc26 = {
  key: 57
};
const stc27 = {
  classMap: {
    "slds-m-top_medium": true
  },
  key: 60
};
const stc28 = {
  key: 63
};
const stc29 = {
  "slds-list_dotted": true
};
const stc30 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, c: api_custom_element, f: api_flatten} = $api;
  return api_flatten([$cmp.printFormat ? api_element("section", stc0, [api_static_fragment($fragment1(), 2), api_element("div", stc1, api_iterator($cmp.projects, function (proj) {
    return proj.printPermit ? api_custom_element("lightning-card", _lightningCard, {
      classMap: stc2,
      props: {
        "title": proj.title
      },
      key: api_key(4, proj.title)
    }, [api_element("div", stc3, [api_element("div", stc4, [api_static_fragment($fragment2(), 8), api_text(" " + api_dynamic_text(proj.objective)), api_static_fragment($fragment3(), 10), api_static_fragment($fragment4(), 12), api_element("ul", stc5, api_iterator(proj.responsibilities, function (resp) {
      return api_element("li", {
        key: api_key(14, resp)
      }, [api_text(api_dynamic_text(resp))]);
    }))])]), api_element("p", stc6, api_iterator(proj.clouds, function (cloud) {
      return api_custom_element("lightning-badge", _lightningBadge, {
        classMap: stc7,
        props: {
          "label": cloud
        },
        key: api_key(16, cloud)
      });
    }))]) : null;
  }))]) : null, $cmp.webFormat ? api_flatten([api_static_fragment($fragment5(), 18), api_iterator($cmp.projects, function (proj) {
    return api_element("div", {
      classMap: stc8,
      key: api_key(19, proj.title)
    }, [api_custom_element("lightning-card", _lightningCard, stc9, [api_element("h2", stc10, [api_text(api_dynamic_text(proj.title))]), api_element("div", stc11, api_flatten([api_static_fragment($fragment6(), 24), api_iterator(proj.technologies, function (tech) {
      return api_element("span", {
        classMap: stc12,
        key: api_key(25, tech)
      }, [api_text(api_dynamic_text(tech))]);
    })])), api_element("div", stc13, [api_element("div", stc14, [api_element("div", stc15, [api_static_fragment($fragment7(), 30), api_element("ul", stc16, api_iterator(proj.difficulties, function (difficulty) {
      return api_element("li", {
        key: api_key(32, difficulty)
      }, [api_text(api_dynamic_text(difficulty))]);
    }))]), api_element("div", stc17, [api_static_fragment($fragment8(), 35), api_element("ul", stc18, api_iterator(proj.majorFunctionalities, function (functionality) {
      return api_element("li", {
        key: api_key(37, functionality)
      }, [api_text(api_dynamic_text(functionality))]);
    }))]), api_element("div", stc19, [api_static_fragment($fragment9(), 40), api_element("ul", stc20, api_iterator(proj.technologies, function (technology) {
      return api_element("li", {
        key: api_key(42, technology)
      }, [api_text(api_dynamic_text(technology))]);
    }))]), api_element("div", stc21, [api_static_fragment($fragment10(), 45), api_element("ul", stc22, api_iterator(proj.clouds, function (cloud) {
      return api_element("li", {
        key: api_key(47, cloud)
      }, [api_text(api_dynamic_text(cloud))]);
    }))])]), api_element("p", stc23, [api_static_fragment($fragment11(), 50), api_text(" " + api_dynamic_text(proj.objective))]), api_element("p", stc24, [api_static_fragment($fragment12(), 53), api_text(" " + api_dynamic_text(proj.teamSize))]), api_element("p", stc25, [api_static_fragment($fragment13(), 56), api_text(" " + api_dynamic_text(proj.role))]), api_element("p", stc26, [api_static_fragment($fragment14(), 59), api_text(" " + api_dynamic_text(proj.learnings))]), api_element("div", stc27, [api_static_fragment($fragment15(), 62), api_element("ul", stc28, api_iterator(proj.responsibilities, function (resp) {
      return api_element("li", {
        classMap: stc29,
        key: api_key(64, resp)
      }, [api_text(api_dynamic_text(resp))]);
    }))])])])]);
  })]) : stc30]);
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
tmpl.stylesheetToken = "lwc-6i70ho9r7pp";
freezeTemplate(tmpl);
