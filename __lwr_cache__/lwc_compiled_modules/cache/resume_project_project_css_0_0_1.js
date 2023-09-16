function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".project-section" + shadowSelector + " {margin: 2rem 0;}.experiance-card" + shadowSelector + " {page-break-inside: avoid;}.experience-list" + shadowSelector + " {list-style: none;padding: 0;}.experience-item" + shadowSelector + " {margin-bottom: 1.5rem;}.experience-item" + shadowSelector + " h3" + shadowSelector + " {margin: 0.5rem 0;}.experience-item" + shadowSelector + " p" + shadowSelector + " {margin: 0;}li" + shadowSelector + " {margin-left: 10px;margin-right: 1px;list-style: square;}.slds-card" + shadowSelector + " {margin: 10px !important;padding: 10px !important;}hr" + shadowSelector + " {margin: 5px 0px;}.project-header" + shadowSelector + " {background-color: #f3f4f6;padding: 2rem;text-align: center;}.filter-container" + shadowSelector + " {margin-top: 1rem;}.project-timeline" + shadowSelector + " {display: flex;overflow-x: auto;padding: 1rem 0;white-space: nowrap;}.milestone" + shadowSelector + " {display: inline-block;margin-right: 20px;padding: 10px 20px;background-color: #e0e0e0;cursor: pointer;border-radius: 20px;}.project-card" + shadowSelector + " {background-color: #ffffff;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);margin: 2rem 0;padding: 2rem;border-radius: 10px;}.tech-tag" + shadowSelector + " {display: inline-block;margin-right: 5px;padding: 5px 10px;background-color: #0099cc;color: white;border-radius: 5px;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];