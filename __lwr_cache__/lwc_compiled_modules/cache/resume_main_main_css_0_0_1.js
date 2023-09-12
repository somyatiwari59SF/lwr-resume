function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "body" + shadowSelector + " {font-family: Arial, sans-serif;background-color: #eee;display: flex;justify-content: center;align-items: center;min-height: 100vh;margin: 0;}.a4-paper" + shadowSelector + " {overflow-y: auto;background: white;padding: 20px;box-sizing: border-box;margin: 0 auto;}@media print {body" + shadowSelector + " {background-color: white;height: auto;padding: 0;margin: 20mm;}.a4-paper" + shadowSelector + " {page-break-after: always;margin-bottom: 10mm;max-height: none;overflow: visible;}.a4-paper:last-child" + shadowSelector + " {page-break-after: avoid;}}.print-format" + shadowSelector + " {width: 250mm;}.web-format" + shadowSelector + " {width: auto;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];