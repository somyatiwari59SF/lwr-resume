function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".project-section" + shadowSelector + " {margin: 2rem 0;}.experiance-card" + shadowSelector + " {page-break-inside: avoid;}.experience-list" + shadowSelector + " {list-style: none;padding: 0;}.experience-item" + shadowSelector + " {margin-bottom: 1.5rem;}.experience-item" + shadowSelector + " h3" + shadowSelector + " {margin: 0.5rem 0;}.experience-item" + shadowSelector + " p" + shadowSelector + " {margin: 0;}li" + shadowSelector + " {margin-left: 10px;margin-right: 1px;list-style: square;}.slds-card" + shadowSelector + " {margin: 10px !important;padding: 10px !important;}hr" + shadowSelector + " {margin: 5px 0px;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];