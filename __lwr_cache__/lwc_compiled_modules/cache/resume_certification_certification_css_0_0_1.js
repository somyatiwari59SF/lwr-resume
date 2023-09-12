function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".certification-section" + shadowSelector + " {margin: 2rem 0;}hr" + shadowSelector + " {margin: 2px 0px;}.cert-section" + shadowSelector + " {page-break-inside: avoid;}@media print {.cert-details" + shadowSelector + " {display: none;}}.flex-wrapper" + shadowSelector + " {display: flex;justify-content: center;flex-wrap: wrap;}.grid-container" + shadowSelector + " {display: grid;grid-template-columns: repeat(5, 1fr);gap: 20px;width: auto;margin: 0 auto;}.nested-card" + shadowSelector + " {box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);border: 1px solid #e3e4e6;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];