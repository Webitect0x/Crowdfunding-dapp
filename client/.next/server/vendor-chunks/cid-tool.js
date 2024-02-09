"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cid-tool";
exports.ids = ["vendor-chunks/cid-tool"];
exports.modules = {

/***/ "(ssr)/./node_modules/cid-tool/node_modules/uint8arrays/to-string.js":
/*!*********************************************************************!*\
  !*** ./node_modules/cid-tool/node_modules/uint8arrays/to-string.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst bases = __webpack_require__(/*! ./util/bases */ \"(ssr)/./node_modules/cid-tool/node_modules/uint8arrays/util/bases.js\");\n/**\n * @typedef {import('./util/bases').SupportedEncodings} SupportedEncodings\n */ /**\n * Turns a `Uint8Array` into a string.\n *\n * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.\n *\n * Also `ascii` which is similar to node's 'binary' encoding.\n *\n * @param {Uint8Array} array - The array to turn into a string\n * @param {SupportedEncodings} [encoding=utf8] - The encoding to use\n * @returns {string}\n */ function toString(array, encoding = \"utf8\") {\n    const base = bases[encoding];\n    if (!base) {\n        throw new Error(`Unsupported encoding \"${encoding}\"`);\n    }\n    // strip multibase prefix\n    return base.encoder.encode(array).substring(1);\n}\nmodule.exports = toString;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL3RvLXN0cmluZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFFBQVFDLG1CQUFPQSxDQUFDO0FBRXRCOztDQUVDLEdBRUQ7Ozs7Ozs7Ozs7Q0FVQyxHQUNELFNBQVNDLFNBQVVDLEtBQUssRUFBRUMsV0FBVyxNQUFNO0lBQ3pDLE1BQU1DLE9BQU9MLEtBQUssQ0FBQ0ksU0FBUztJQUU1QixJQUFJLENBQUNDLE1BQU07UUFDVCxNQUFNLElBQUlDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRUYsU0FBUyxDQUFDLENBQUM7SUFDdEQ7SUFFQSx5QkFBeUI7SUFDekIsT0FBT0MsS0FBS0UsT0FBTyxDQUFDQyxNQUFNLENBQUNMLE9BQU9NLFNBQVMsQ0FBQztBQUM5QztBQUVBQyxPQUFPQyxPQUFPLEdBQUdUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2NpZC10b29sL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy90by1zdHJpbmcuanM/NmE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgYmFzZXMgPSByZXF1aXJlKCcuL3V0aWwvYmFzZXMnKVxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdXRpbC9iYXNlcycpLlN1cHBvcnRlZEVuY29kaW5nc30gU3VwcG9ydGVkRW5jb2RpbmdzXG4gKi9cblxuLyoqXG4gKiBUdXJucyBhIGBVaW50OEFycmF5YCBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIFN1cHBvcnRzIGB1dGY4YCwgYHV0Zi04YCBhbmQgYW55IGVuY29kaW5nIHN1cHBvcnRlZCBieSB0aGUgbXVsdGliYXNlIG1vZHVsZS5cbiAqXG4gKiBBbHNvIGBhc2NpaWAgd2hpY2ggaXMgc2ltaWxhciB0byBub2RlJ3MgJ2JpbmFyeScgZW5jb2RpbmcuXG4gKlxuICogQHBhcmFtIHtVaW50OEFycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byB0dXJuIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7U3VwcG9ydGVkRW5jb2RpbmdzfSBbZW5jb2Rpbmc9dXRmOF0gLSBUaGUgZW5jb2RpbmcgdG8gdXNlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1N0cmluZyAoYXJyYXksIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlc1tlbmNvZGluZ11cblxuICBpZiAoIWJhc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGVuY29kaW5nIFwiJHtlbmNvZGluZ31cImApXG4gIH1cblxuICAvLyBzdHJpcCBtdWx0aWJhc2UgcHJlZml4XG4gIHJldHVybiBiYXNlLmVuY29kZXIuZW5jb2RlKGFycmF5KS5zdWJzdHJpbmcoMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZ1xuIl0sIm5hbWVzIjpbImJhc2VzIiwicmVxdWlyZSIsInRvU3RyaW5nIiwiYXJyYXkiLCJlbmNvZGluZyIsImJhc2UiLCJFcnJvciIsImVuY29kZXIiLCJlbmNvZGUiLCJzdWJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/node_modules/uint8arrays/to-string.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/cid-tool/node_modules/uint8arrays/util/bases.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cid-tool/node_modules/uint8arrays/util/bases.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { bases } = __webpack_require__(/*! multiformats/basics */ \"(ssr)/./node_modules/multiformats/cjs/src/basics.js\");\n/**\n * @typedef {import('multiformats/bases/interface').MultibaseCodec<any>} MultibaseCodec\n */ /**\n * @param {string} name\n * @param {string} prefix\n * @param {(buf: Uint8Array) => string} encode\n * @param {(str: string) => Uint8Array} decode\n * @returns {MultibaseCodec}\n */ function createCodec(name, prefix, encode, decode) {\n    return {\n        name,\n        prefix,\n        encoder: {\n            name,\n            prefix,\n            encode\n        },\n        decoder: {\n            decode\n        }\n    };\n}\nconst string = createCodec(\"utf8\", \"u\", (buf)=>{\n    const decoder = new TextDecoder(\"utf8\");\n    return \"u\" + decoder.decode(buf);\n}, (str)=>{\n    const encoder = new TextEncoder();\n    return encoder.encode(str.substring(1));\n});\nconst ascii = createCodec(\"ascii\", \"a\", (buf)=>{\n    let string = \"a\";\n    for(let i = 0; i < buf.length; i++){\n        string += String.fromCharCode(buf[i]);\n    }\n    return string;\n}, (str)=>{\n    str = str.substring(1);\n    const buf = new Uint8Array(str.length);\n    for(let i = 0; i < str.length; i++){\n        buf[i] = str.charCodeAt(i);\n    }\n    return buf;\n});\n/**\n * @typedef {'utf8' | 'utf-8' | 'hex' | 'latin1' | 'ascii' | 'binary' | keyof bases } SupportedEncodings\n */ /**\n * @type {Record<SupportedEncodings, MultibaseCodec>}\n */ const BASES = {\n    \"utf8\": string,\n    \"utf-8\": string,\n    \"hex\": bases.base16,\n    \"latin1\": ascii,\n    \"ascii\": ascii,\n    \"binary\": ascii,\n    ...bases\n};\nmodule.exports = BASES;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL3V0aWwvYmFzZXMuanMiLCJtYXBwaW5ncyI6IkFBQUU7QUFFRixNQUFNLEVBQUVBLEtBQUssRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQztBQUUxQjs7Q0FFQyxHQUVEOzs7Ozs7Q0FNQyxHQUNELFNBQVNDLFlBQWFDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE1BQU07SUFDaEQsT0FBTztRQUNMSDtRQUNBQztRQUNBRyxTQUFTO1lBQ1BKO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFDQUcsU0FBUztZQUNQRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLE1BQU1HLFNBQVNQLFlBQVksUUFBUSxLQUFLLENBQUNRO0lBQ3ZDLE1BQU1GLFVBQVUsSUFBSUcsWUFBWTtJQUNoQyxPQUFPLE1BQU1ILFFBQVFGLE1BQU0sQ0FBQ0k7QUFDOUIsR0FBRyxDQUFDRTtJQUNGLE1BQU1MLFVBQVUsSUFBSU07SUFDcEIsT0FBT04sUUFBUUYsTUFBTSxDQUFDTyxJQUFJRSxTQUFTLENBQUM7QUFDdEM7QUFFQSxNQUFNQyxRQUFRYixZQUFZLFNBQVMsS0FBSyxDQUFDUTtJQUN2QyxJQUFJRCxTQUFTO0lBRWIsSUFBSyxJQUFJTyxJQUFJLEdBQUdBLElBQUlOLElBQUlPLE1BQU0sRUFBRUQsSUFBSztRQUNuQ1AsVUFBVVMsT0FBT0MsWUFBWSxDQUFDVCxHQUFHLENBQUNNLEVBQUU7SUFDdEM7SUFDQSxPQUFPUDtBQUNULEdBQUcsQ0FBQ0c7SUFDRkEsTUFBTUEsSUFBSUUsU0FBUyxDQUFDO0lBQ3BCLE1BQU1KLE1BQU0sSUFBSVUsV0FBV1IsSUFBSUssTUFBTTtJQUVyQyxJQUFLLElBQUlELElBQUksR0FBR0EsSUFBSUosSUFBSUssTUFBTSxFQUFFRCxJQUFLO1FBQ25DTixHQUFHLENBQUNNLEVBQUUsR0FBR0osSUFBSVMsVUFBVSxDQUFDTDtJQUMxQjtJQUVBLE9BQU9OO0FBQ1Q7QUFFQTs7Q0FFQyxHQUVEOztDQUVDLEdBQ0QsTUFBTVksUUFBUTtJQUNaLFFBQVFiO0lBQ1IsU0FBU0E7SUFDVCxPQUFPVCxNQUFNdUIsTUFBTTtJQUNuQixVQUFVUjtJQUNWLFNBQVNBO0lBQ1QsVUFBVUE7SUFFVixHQUFHZixLQUFLO0FBQ1Y7QUFFQXdCLE9BQU9DLE9BQU8sR0FBR0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL3V0aWwvYmFzZXMuanM/ZTg3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIgICd1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGJhc2VzIH0gPSByZXF1aXJlKCdtdWx0aWZvcm1hdHMvYmFzaWNzJylcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtdWx0aWZvcm1hdHMvYmFzZXMvaW50ZXJmYWNlJykuTXVsdGliYXNlQ29kZWM8YW55Pn0gTXVsdGliYXNlQ29kZWNcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKiBAcGFyYW0geyhidWY6IFVpbnQ4QXJyYXkpID0+IHN0cmluZ30gZW5jb2RlXG4gKiBAcGFyYW0geyhzdHI6IHN0cmluZykgPT4gVWludDhBcnJheX0gZGVjb2RlXG4gKiBAcmV0dXJucyB7TXVsdGliYXNlQ29kZWN9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvZGVjIChuYW1lLCBwcmVmaXgsIGVuY29kZSwgZGVjb2RlKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBwcmVmaXgsXG4gICAgZW5jb2Rlcjoge1xuICAgICAgbmFtZSxcbiAgICAgIHByZWZpeCxcbiAgICAgIGVuY29kZVxuICAgIH0sXG4gICAgZGVjb2Rlcjoge1xuICAgICAgZGVjb2RlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHN0cmluZyA9IGNyZWF0ZUNvZGVjKCd1dGY4JywgJ3UnLCAoYnVmKSA9PiB7XG4gIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0ZjgnKVxuICByZXR1cm4gJ3UnICsgZGVjb2Rlci5kZWNvZGUoYnVmKVxufSwgKHN0cikgPT4ge1xuICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcbiAgcmV0dXJuIGVuY29kZXIuZW5jb2RlKHN0ci5zdWJzdHJpbmcoMSkpXG59KVxuXG5jb25zdCBhc2NpaSA9IGNyZWF0ZUNvZGVjKCdhc2NpaScsICdhJywgKGJ1ZikgPT4ge1xuICBsZXQgc3RyaW5nID0gJ2EnXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHN0cmluZ1xufSwgKHN0cikgPT4ge1xuICBzdHIgPSBzdHIuc3Vic3RyaW5nKDEpXG4gIGNvbnN0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KHN0ci5sZW5ndGgpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBidWZbaV0gPSBzdHIuY2hhckNvZGVBdChpKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufSlcblxuLyoqXG4gKiBAdHlwZWRlZiB7J3V0ZjgnIHwgJ3V0Zi04JyB8ICdoZXgnIHwgJ2xhdGluMScgfCAnYXNjaWknIHwgJ2JpbmFyeScgfCBrZXlvZiBiYXNlcyB9IFN1cHBvcnRlZEVuY29kaW5nc1xuICovXG5cbi8qKlxuICogQHR5cGUge1JlY29yZDxTdXBwb3J0ZWRFbmNvZGluZ3MsIE11bHRpYmFzZUNvZGVjPn1cbiAqL1xuY29uc3QgQkFTRVMgPSB7XG4gICd1dGY4Jzogc3RyaW5nLFxuICAndXRmLTgnOiBzdHJpbmcsXG4gICdoZXgnOiBiYXNlcy5iYXNlMTYsXG4gICdsYXRpbjEnOiBhc2NpaSxcbiAgJ2FzY2lpJzogYXNjaWksXG4gICdiaW5hcnknOiBhc2NpaSxcblxuICAuLi5iYXNlc1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJBU0VTXG4iXSwibmFtZXMiOlsiYmFzZXMiLCJyZXF1aXJlIiwiY3JlYXRlQ29kZWMiLCJuYW1lIiwicHJlZml4IiwiZW5jb2RlIiwiZGVjb2RlIiwiZW5jb2RlciIsImRlY29kZXIiLCJzdHJpbmciLCJidWYiLCJUZXh0RGVjb2RlciIsInN0ciIsIlRleHRFbmNvZGVyIiwic3Vic3RyaW5nIiwiYXNjaWkiLCJpIiwibGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJCQVNFUyIsImJhc2UxNiIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/node_modules/uint8arrays/util/bases.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/cid-tool/src/core/base32.js":
/*!**************************************************!*\
  !*** ./node_modules/cid-tool/src/core/base32.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst CID = __webpack_require__(/*! cids */ \"(ssr)/./node_modules/cids/src/index.js\");\n// @ts-ignore no types\nconst explain = __webpack_require__(/*! explain-error */ \"(ssr)/./node_modules/explain-error/index.js\");\n/**\n * @param {CID | string | Uint8Array} cid\n */ module.exports = function base32(cid) {\n    try {\n        cid = new CID(cid);\n    } catch (err) {\n        throw explain(err, `invalid cid: ${cid}`);\n    }\n    if (cid.version !== 1) {\n        cid = cid.toV1();\n    }\n    return cid.toBaseEncodedString(\"base32\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvYmFzZTMyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsTUFBTUMsbUJBQU9BLENBQUM7QUFDcEIsc0JBQXNCO0FBQ3RCLE1BQU1DLFVBQVVELG1CQUFPQSxDQUFDO0FBRXhCOztDQUVDLEdBQ0RFLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxPQUFRQyxHQUFHO0lBQ25DLElBQUk7UUFDRkEsTUFBTSxJQUFJTixJQUFJTTtJQUNoQixFQUFFLE9BQU9DLEtBQUs7UUFDWixNQUFNTCxRQUFRSyxLQUFLLENBQUMsYUFBYSxFQUFFRCxJQUFJLENBQUM7SUFDMUM7SUFFQSxJQUFJQSxJQUFJRSxPQUFPLEtBQUssR0FBRztRQUNyQkYsTUFBTUEsSUFBSUcsSUFBSTtJQUNoQjtJQUVBLE9BQU9ILElBQUlJLG1CQUFtQixDQUFDO0FBQ2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2Jhc2UzMi5qcz83NzllIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBDSUQgPSByZXF1aXJlKCdjaWRzJylcbi8vIEB0cy1pZ25vcmUgbm8gdHlwZXNcbmNvbnN0IGV4cGxhaW4gPSByZXF1aXJlKCdleHBsYWluLWVycm9yJylcblxuLyoqXG4gKiBAcGFyYW0ge0NJRCB8IHN0cmluZyB8IFVpbnQ4QXJyYXl9IGNpZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2UzMiAoY2lkKSB7XG4gIHRyeSB7XG4gICAgY2lkID0gbmV3IENJRChjaWQpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IGV4cGxhaW4oZXJyLCBgaW52YWxpZCBjaWQ6ICR7Y2lkfWApXG4gIH1cblxuICBpZiAoY2lkLnZlcnNpb24gIT09IDEpIHtcbiAgICBjaWQgPSBjaWQudG9WMSgpXG4gIH1cblxuICByZXR1cm4gY2lkLnRvQmFzZUVuY29kZWRTdHJpbmcoJ2Jhc2UzMicpXG59XG4iXSwibmFtZXMiOlsiQ0lEIiwicmVxdWlyZSIsImV4cGxhaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYmFzZTMyIiwiY2lkIiwiZXJyIiwidmVyc2lvbiIsInRvVjEiLCJ0b0Jhc2VFbmNvZGVkU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/src/core/base32.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/cid-tool/src/core/bases.js":
/*!*************************************************!*\
  !*** ./node_modules/cid-tool/src/core/bases.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst multibase = __webpack_require__(/*! multibase */ \"(ssr)/./node_modules/multibase/src/index.js\");\nmodule.exports = function bases() {\n    const output = [];\n    for (const base of Object.values(multibase.names)){\n        output.push({\n            name: base.name,\n            code: base.code\n        });\n    }\n    return output;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvYmFzZXMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxNQUFNQSxZQUFZQyxtQkFBT0EsQ0FBQztBQUUxQkMsT0FBT0MsT0FBTyxHQUFHLFNBQVNDO0lBQ3hCLE1BQU1DLFNBQVMsRUFBRTtJQUVqQixLQUFLLE1BQU1DLFFBQVFDLE9BQU9DLE1BQU0sQ0FBQ1IsVUFBVVMsS0FBSyxFQUFHO1FBQ2pESixPQUFPSyxJQUFJLENBQUM7WUFBRUMsTUFBTUwsS0FBS0ssSUFBSTtZQUFFQyxNQUFNTixLQUFLTSxJQUFJO1FBQUM7SUFDakQ7SUFFQSxPQUFPUDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2Jhc2VzLmpzP2M5MWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IG11bHRpYmFzZSA9IHJlcXVpcmUoJ211bHRpYmFzZScpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZXMgKCkge1xuICBjb25zdCBvdXRwdXQgPSBbXVxuXG4gIGZvciAoY29uc3QgYmFzZSBvZiBPYmplY3QudmFsdWVzKG11bHRpYmFzZS5uYW1lcykpIHtcbiAgICBvdXRwdXQucHVzaCh7IG5hbWU6IGJhc2UubmFtZSwgY29kZTogYmFzZS5jb2RlIH0pXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG4iXSwibmFtZXMiOlsibXVsdGliYXNlIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJiYXNlcyIsIm91dHB1dCIsImJhc2UiLCJPYmplY3QiLCJ2YWx1ZXMiLCJuYW1lcyIsInB1c2giLCJuYW1lIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/src/core/bases.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/cid-tool/src/core/codecs.js":
/*!**************************************************!*\
  !*** ./node_modules/cid-tool/src/core/codecs.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst CID = __webpack_require__(/*! cids */ \"(ssr)/./node_modules/cids/src/index.js\");\nmodule.exports = function codecs() {\n    const output = [];\n    for (const [key, value] of Object.entries(CID.codecs)){\n        output.push({\n            name: key,\n            code: value\n        });\n    }\n    return output;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvY29kZWNzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsTUFBTUMsbUJBQU9BLENBQUM7QUFFcEJDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQztJQUN4QixNQUFNQyxTQUFTLEVBQUU7SUFFakIsS0FBSyxNQUFNLENBQUNDLEtBQUtDLE1BQU0sSUFBSUMsT0FBT0MsT0FBTyxDQUFDVCxJQUFJSSxNQUFNLEVBQUc7UUFDckRDLE9BQU9LLElBQUksQ0FBQztZQUFFQyxNQUFNTDtZQUFLTSxNQUFNTDtRQUFNO0lBQ3ZDO0lBRUEsT0FBT0Y7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9jaWQtdG9vbC9zcmMvY29yZS9jb2RlY3MuanM/YWVmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgQ0lEID0gcmVxdWlyZSgnY2lkcycpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29kZWNzICgpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW11cblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhDSUQuY29kZWNzKSkge1xuICAgIG91dHB1dC5wdXNoKHsgbmFtZToga2V5LCBjb2RlOiB2YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuIl0sIm5hbWVzIjpbIkNJRCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29kZWNzIiwib3V0cHV0Iiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwicHVzaCIsIm5hbWUiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/src/core/codecs.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/cid-tool/src/core/format.js":
/*!**************************************************!*\
  !*** ./node_modules/cid-tool/src/core/format.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst CID = __webpack_require__(/*! cids */ \"(ssr)/./node_modules/cids/src/index.js\");\nconst bases = __webpack_require__(/*! ./bases */ \"(ssr)/./node_modules/cid-tool/src/core/bases.js\");\nconst codecs = __webpack_require__(/*! ./codecs */ \"(ssr)/./node_modules/cid-tool/src/core/codecs.js\");\n// @ts-ignore no types\nconst explain = __webpack_require__(/*! explain-error */ \"(ssr)/./node_modules/explain-error/index.js\");\nconst multibase = __webpack_require__(/*! multibase */ \"(ssr)/./node_modules/multibase/src/index.js\");\nconst multihash = __webpack_require__(/*! multihashes */ \"(ssr)/./node_modules/multihashes/src/index.js\");\nconst uint8ArrayToString = __webpack_require__(/*! uint8arrays/to-string */ \"(ssr)/./node_modules/cid-tool/node_modules/uint8arrays/to-string.js\");\n/**\n * @typedef {import('multibase').BaseName} BaseName\n * @typedef {import('multibase').BaseNameOrCode} BaseNameOrCode\n */ /**\n * @param {CID | string | Uint8Array} cid\n * @param {import('./types').FormatOptions} options\n */ module.exports = function format(cid, options) {\n    options = options || {};\n    let formatStr = options.format || \"%s\";\n    if (formatStr === \"prefix\") {\n        formatStr = \"%P\";\n    }\n    if (!isString(formatStr) || formatStr.indexOf(\"%\") === -1) {\n        throw new Error(`invalid format string: ${formatStr}`);\n    }\n    const originalCid = cid;\n    try {\n        cid = new CID(cid);\n    } catch (err) {\n        throw explain(err, `invalid cid: ${cid}`);\n    }\n    if (options.cidVersion != null && cid.version !== options.cidVersion) {\n        if (options.cidVersion === 0) {\n            cid = cid.toV0();\n        } else if (options.cidVersion === 1) {\n            cid = cid.toV1();\n        } else {\n            throw new Error(`invalid cid version: ${options.cidVersion}`);\n        }\n    }\n    /**\n   * @type {BaseName}\n   */ let base = \"base58btc\";\n    if (options.base) {\n        // Validate passed base name/code\n        base = findBase(options.base).name;\n    } else if (isString(originalCid)) {\n        // Use base of input CID if string\n        base = multibase.isEncoded(originalCid) || base;\n    }\n    return formatStr.replace(/%([a-zA-Z%])/g, replacer(cid, base));\n};\n/**\n * @param {*} obj\n * @returns {obj is String}\n */ function isString(obj) {\n    return Object.prototype.toString.call(obj) === \"[object String]\";\n}\n/**\n * @param {CID} cid\n * @param {BaseName} base\n * @returns {(match: any, specifier: string) => string}\n */ function replacer(cid, base) {\n    /**\n   * @param {*} match\n   * @param {string} specifier\n   */ const replace = (match, specifier)=>{\n        switch(specifier){\n            case \"%\":\n                return \"%\";\n            case \"b\":\n                return base;\n            case \"B\":\n                return findBase(base).code;\n            case \"v\":\n                return `cidv${cid.version}`;\n            case \"V\":\n                return cid.version.toString();\n            case \"c\":\n                return cid.codec;\n            case \"C\":\n                return findCodec(cid).toString();\n            case \"h\":\n                return multihash.decode(cid.multihash).name;\n            case \"H\":\n                return multihash.decode(cid.multihash).code.toString();\n            case \"L\":\n                return multihash.decode(cid.multihash).length.toString();\n            case \"m\":\n                return uint8ArrayToString(multibase.encode(base, cid.multihash));\n            case \"M\":\n                return uint8ArrayToString(cid.multihash, base);\n            case \"d\":\n                return uint8ArrayToString(multibase.encode(base, multihash.decode(cid.multihash).digest));\n            case \"D\":\n                return uint8ArrayToString(multihash.decode(cid.multihash).digest, base);\n            case \"s\":\n                return cid.toString(base);\n            case \"S\":\n                return cid.version === 1 ? cid.toString(base).slice(1) : uint8ArrayToString(cid.bytes, base);\n            case \"P\":\n                return prefix(cid);\n            default:\n                throw new Error(`unrecognized specifier in format string: ${specifier}`);\n        }\n    };\n    return replace;\n}\n/**\n * @param {BaseNameOrCode} nameOrCode\n */ function findBase(nameOrCode) {\n    const baseNameCode = bases().find((b)=>b.code === nameOrCode || b.name === nameOrCode);\n    if (!baseNameCode) {\n        throw new Error(`invalid multibase: ${nameOrCode}`);\n    }\n    return baseNameCode;\n}\n/**\n * @param {CID} cid\n */ function findCodec(cid) {\n    const codec = codecs().find((c)=>c.name === cid.codec);\n    if (!codec) {\n        throw new Error(`invalid codec: ${cid.codec}`);\n    }\n    return codec.code;\n}\n/**\n * @param {CID} cid\n */ function prefix(cid) {\n    const { name, length } = multihash.decode(cid.multihash);\n    return `cidv${cid.version}-${cid.codec}-${name}-${length}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvZm9ybWF0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsTUFBTUMsbUJBQU9BLENBQUM7QUFDcEIsTUFBTUMsUUFBUUQsbUJBQU9BLENBQUM7QUFDdEIsTUFBTUUsU0FBU0YsbUJBQU9BLENBQUM7QUFDdkIsc0JBQXNCO0FBQ3RCLE1BQU1HLFVBQVVILG1CQUFPQSxDQUFDO0FBQ3hCLE1BQU1JLFlBQVlKLG1CQUFPQSxDQUFDO0FBQzFCLE1BQU1LLFlBQVlMLG1CQUFPQSxDQUFDO0FBQzFCLE1BQU1NLHFCQUFxQk4sbUJBQU9BLENBQUM7QUFFbkM7OztDQUdDLEdBRUQ7OztDQUdDLEdBQ0RPLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxPQUFRQyxHQUFHLEVBQUVDLE9BQU87SUFDNUNBLFVBQVVBLFdBQVcsQ0FBQztJQUV0QixJQUFJQyxZQUFZRCxRQUFRRixNQUFNLElBQUk7SUFFbEMsSUFBSUcsY0FBYyxVQUFVO1FBQzFCQSxZQUFZO0lBQ2Q7SUFFQSxJQUFJLENBQUNDLFNBQVNELGNBQWNBLFVBQVVFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRztRQUN6RCxNQUFNLElBQUlDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRUgsVUFBVSxDQUFDO0lBQ3ZEO0lBRUEsTUFBTUksY0FBY047SUFFcEIsSUFBSTtRQUNGQSxNQUFNLElBQUlYLElBQUlXO0lBQ2hCLEVBQUUsT0FBT08sS0FBSztRQUNaLE1BQU1kLFFBQVFjLEtBQUssQ0FBQyxhQUFhLEVBQUVQLElBQUksQ0FBQztJQUMxQztJQUVBLElBQUlDLFFBQVFPLFVBQVUsSUFBSSxRQUFRUixJQUFJUyxPQUFPLEtBQUtSLFFBQVFPLFVBQVUsRUFBRTtRQUNwRSxJQUFJUCxRQUFRTyxVQUFVLEtBQUssR0FBRztZQUM1QlIsTUFBTUEsSUFBSVUsSUFBSTtRQUNoQixPQUFPLElBQUlULFFBQVFPLFVBQVUsS0FBSyxHQUFHO1lBQ25DUixNQUFNQSxJ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LE9BQU9DO0FBQ1Q7QUFFQTs7Q0FFQyxHQUNELFNBQVNULFVBQVczQixHQUFHO0lBQ3JCLE1BQU0wQixRQUFRbEMsU0FBUzZDLElBQUksQ0FBQ0UsQ0FBQUEsSUFBS0EsRUFBRXpCLElBQUksS0FBS2QsSUFBSTBCLEtBQUs7SUFFckQsSUFBSSxDQUFDQSxPQUFPO1FBQ1YsTUFBTSxJQUFJckIsTUFBTSxDQUFDLGVBQWUsRUFBRUwsSUFBSTBCLEtBQUssQ0FBQyxDQUFDO0lBQy9DO0lBRUEsT0FBT0EsTUFBTUQsSUFBSTtBQUNuQjtBQUVBOztDQUVDLEdBQ0QsU0FBU1MsT0FBUWxDLEdBQUc7SUFDbEIsTUFBTSxFQUFFYyxJQUFJLEVBQUVlLE1BQU0sRUFBRSxHQUFHbEMsVUFBVWlDLE1BQU0sQ0FBQzVCLElBQUlMLFNBQVM7SUFDdkQsT0FBTyxDQUFDLElBQUksRUFBRUssSUFBSVMsT0FBTyxDQUFDLENBQUMsRUFBRVQsSUFBSTBCLEtBQUssQ0FBQyxDQUFDLEVBQUVaLEtBQUssQ0FBQyxFQUFFZSxPQUFPLENBQUM7QUFDNUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvZm9ybWF0LmpzPzFhYTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IENJRCA9IHJlcXVpcmUoJ2NpZHMnKVxuY29uc3QgYmFzZXMgPSByZXF1aXJlKCcuL2Jhc2VzJylcbmNvbnN0IGNvZGVjcyA9IHJlcXVpcmUoJy4vY29kZWNzJylcbi8vIEB0cy1pZ25vcmUgbm8gdHlwZXNcbmNvbnN0IGV4cGxhaW4gPSByZXF1aXJlKCdleHBsYWluLWVycm9yJylcbmNvbnN0IG11bHRpYmFzZSA9IHJlcXVpcmUoJ211bHRpYmFzZScpXG5jb25zdCBtdWx0aWhhc2ggPSByZXF1aXJlKCdtdWx0aWhhc2hlcycpXG5jb25zdCB1aW50OEFycmF5VG9TdHJpbmcgPSByZXF1aXJlKCd1aW50OGFycmF5cy90by1zdHJpbmcnKVxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ211bHRpYmFzZScpLkJhc2VOYW1lfSBCYXNlTmFtZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbXVsdGliYXNlJykuQmFzZU5hbWVPckNvZGV9IEJhc2VOYW1lT3JDb2RlXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0NJRCB8IHN0cmluZyB8IFVpbnQ4QXJyYXl9IGNpZFxuICogQHBhcmFtIHtpbXBvcnQoJy4vdHlwZXMnKS5Gb3JtYXRPcHRpb25zfSBvcHRpb25zXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9ybWF0IChjaWQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBsZXQgZm9ybWF0U3RyID0gb3B0aW9ucy5mb3JtYXQgfHwgJyVzJ1xuXG4gIGlmIChmb3JtYXRTdHIgPT09ICdwcmVmaXgnKSB7XG4gICAgZm9ybWF0U3RyID0gJyVQJ1xuICB9XG5cbiAgaWYgKCFpc1N0cmluZyhmb3JtYXRTdHIpIHx8IGZvcm1hdFN0ci5pbmRleE9mKCclJykgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGZvcm1hdCBzdHJpbmc6ICR7Zm9ybWF0U3RyfWApXG4gIH1cblxuICBjb25zdCBvcmlnaW5hbENpZCA9IGNpZFxuXG4gIHRyeSB7XG4gICAgY2lkID0gbmV3IENJRChjaWQpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IGV4cGxhaW4oZXJyLCBgaW52YWxpZCBjaWQ6ICR7Y2lkfWApXG4gIH1cblxuICBpZiAob3B0aW9ucy5jaWRWZXJzaW9uICE9IG51bGwgJiYgY2lkLnZlcnNpb24gIT09IG9wdGlvbnMuY2lkVmVyc2lvbikge1xuICAgIGlmIChvcHRpb25zLmNpZFZlcnNpb24gPT09IDApIHtcbiAgICAgIGNpZCA9IGNpZC50b1YwKClcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuY2lkVmVyc2lvbiA9PT0gMSkge1xuICAgICAgY2lkID0gY2lkLnRvVjEoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgY2lkIHZlcnNpb246ICR7b3B0aW9ucy5jaWRWZXJzaW9ufWApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCYXNlTmFtZX1cbiAgICovXG4gIGxldCBiYXNlID0gJ2Jhc2U1OGJ0YydcblxuICBpZiAob3B0aW9ucy5iYXNlKSB7XG4gICAgLy8gVmFsaWRhdGUgcGFzc2VkIGJhc2UgbmFtZS9jb2RlXG4gICAgYmFzZSA9IGZpbmRCYXNlKG9wdGlvbnMuYmFzZSkubmFtZVxuICB9IGVsc2UgaWYgKGlzU3RyaW5nKG9yaWdpbmFsQ2lkKSkge1xuICAgIC8vIFVzZSBiYXNlIG9mIGlucHV0IENJRCBpZiBzdHJpbmdcbiAgICBiYXNlID0gbXVsdGliYXNlLmlzRW5jb2RlZChvcmlnaW5hbENpZCkgfHwgYmFzZVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFN0ci5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgcmVwbGFjZXIoY2lkLCBiYXNlKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge29iaiBpcyBTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q0lEfSBjaWRcbiAqIEBwYXJhbSB7QmFzZU5hbWV9IGJhc2VcbiAqIEByZXR1cm5zIHsobWF0Y2g6IGFueSwgc3BlY2lmaWVyOiBzdHJpbmcpID0+IHN0cmluZ31cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZXIgKGNpZCwgYmFzZSkge1xuICAvKipcbiAgICogQHBhcmFtIHsqfSBtYXRjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3BlY2lmaWVyXG4gICAqL1xuICBjb25zdCByZXBsYWNlID0gKG1hdGNoLCBzcGVjaWZpZXIpID0+IHtcbiAgICBzd2l0Y2ggKHNwZWNpZmllcikge1xuICAgICAgY2FzZSAnJSc6XG4gICAgICAgIHJldHVybiAnJSdcbiAgICAgIGNhc2UgJ2InOiAvLyBiYXNlIG5hbWVcbiAgICAgICAgcmV0dXJuIGJhc2VcbiAgICAgIGNhc2UgJ0InOiAvLyBiYXNlIGNvZGVcbiAgICAgICAgcmV0dXJuIGZpbmRCYXNlKGJhc2UpLmNvZGVcbiAgICAgIGNhc2UgJ3YnOiAvLyB2ZXJzaW9uIHN0cmluZ1xuICAgICAgICByZXR1cm4gYGNpZHYke2NpZC52ZXJzaW9ufWBcbiAgICAgIGNhc2UgJ1YnOiAvLyB2ZXJzaW9uIG51bVxuICAgICAgICByZXR1cm4gY2lkLnZlcnNpb24udG9TdHJpbmcoKVxuICAgICAgY2FzZSAnYyc6IC8vIGNvZGVjIG5hbWVcbiAgICAgICAgcmV0dXJuIGNpZC5jb2RlY1xuICAgICAgY2FzZSAnQyc6IC8vIGNvZGVjIGNvZGVcbiAgICAgICAgcmV0dXJuIGZpbmRDb2RlYyhjaWQpLnRvU3RyaW5nKClcbiAgICAgIGNhc2UgJ2gnOiAvLyBoYXNoIGZ1biBuYW1lXG4gICAgICAgIHJldHVybiBtdWx0aWhhc2guZGVjb2RlKGNpZC5tdWx0aWhhc2gpLm5hbWVcbiAgICAgIGNhc2UgJ0gnOiAvLyBoYXNoIGZ1biBjb2RlXG4gICAgICAgIHJldHVybiBtdWx0aWhhc2guZGVjb2RlKGNpZC5tdWx0aWhhc2gpLmNvZGUudG9TdHJpbmcoKVxuICAgICAgY2FzZSAnTCc6IC8vIGhhc2ggbGVuZ3RoXG4gICAgICAgIHJldHVybiBtdWx0aWhhc2guZGVjb2RlKGNpZC5tdWx0aWhhc2gpLmxlbmd0aC50b1N0cmluZygpXG4gICAgICBjYXNlICdtJzogLy8gbXVsdGloYXNoIGVuY29kZWQgaW4gYmFzZSAlYlxuICAgICAgICByZXR1cm4gdWludDhBcnJheVRvU3RyaW5nKG11bHRpYmFzZS5lbmNvZGUoYmFzZSwgY2lkLm11bHRpaGFzaCkpXG4gICAgICBjYXNlICdNJzogLy8gbXVsdGloYXNoIGVuY29kZWQgaW4gYmFzZSAlYiB3aXRob3V0IGJhc2UgcHJlZml4XG4gICAgICAgIHJldHVybiB1aW50OEFycmF5VG9TdHJpbmcoY2lkLm11bHRpaGFzaCwgYmFzZSlcbiAgICAgIGNhc2UgJ2QnOiAvLyBoYXNoIGRpZ2VzdCBlbmNvZGVkIGluIGJhc2UgJWJcbiAgICAgICAgcmV0dXJuIHVpbnQ4QXJyYXlUb1N0cmluZyhtdWx0aWJhc2UuZW5jb2RlKGJhc2UsIG11bHRpaGFzaC5kZWNvZGUoY2lkLm11bHRpaGFzaCkuZGlnZXN0KSlcbiAgICAgIGNhc2UgJ0QnOiAvLyBoYXNoIGRpZ2VzdCBlbmNvZGVkIGluIGJhc2UgJWIgd2l0aG91dCBiYXNlIHByZWZpeFxuICAgICAgICByZXR1cm4gdWludDhBcnJheVRvU3RyaW5nKG11bHRpaGFzaC5kZWNvZGUoY2lkLm11bHRpaGFzaCkuZGlnZXN0LCBiYXNlKVxuICAgICAgY2FzZSAncyc6IC8vIGNpZCBzdHJpbmcgZW5jb2RlZCBpbiBiYXNlICViXG4gICAgICAgIHJldHVybiBjaWQudG9TdHJpbmcoYmFzZSlcbiAgICAgIGNhc2UgJ1MnOiAvLyBjaWQgc3RyaW5nIHdpdGhvdXQgYmFzZSBwcmVmaXhcbiAgICAgICAgcmV0dXJuIGNpZC52ZXJzaW9uID09PSAxXG4gICAgICAgICAgPyBjaWQudG9TdHJpbmcoYmFzZSkuc2xpY2UoMSlcbiAgICAgICAgICA6IHVpbnQ4QXJyYXlUb1N0cmluZyhjaWQuYnl0ZXMsIGJhc2UpXG4gICAgICBjYXNlICdQJzogLy8gcHJlZml4XG4gICAgICAgIHJldHVybiBwcmVmaXgoY2lkKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVucmVjb2duaXplZCBzcGVjaWZpZXIgaW4gZm9ybWF0IHN0cmluZzogJHtzcGVjaWZpZXJ9YClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVwbGFjZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QmFzZU5hbWVPckNvZGV9IG5hbWVPckNvZGVcbiAqL1xuZnVuY3Rpb24gZmluZEJhc2UgKG5hbWVPckNvZGUpIHtcbiAgY29uc3QgYmFzZU5hbWVDb2RlID0gYmFzZXMoKS5maW5kKGIgPT4gKGIuY29kZSA9PT0gbmFtZU9yQ29kZSkgfHwgYi5uYW1lID09PSBuYW1lT3JDb2RlKVxuXG4gIGlmICghYmFzZU5hbWVDb2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIG11bHRpYmFzZTogJHtuYW1lT3JDb2RlfWApXG4gIH1cblxuICByZXR1cm4gYmFzZU5hbWVDb2RlXG59XG5cbi8qKlxuICogQHBhcmFtIHtDSUR9IGNpZFxuICovXG5mdW5jdGlvbiBmaW5kQ29kZWMgKGNpZCkge1xuICBjb25zdCBjb2RlYyA9IGNvZGVjcygpLmZpbmQoYyA9PiBjLm5hbWUgPT09IGNpZC5jb2RlYylcblxuICBpZiAoIWNvZGVjKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGNvZGVjOiAke2NpZC5jb2RlY31gKVxuICB9XG5cbiAgcmV0dXJuIGNvZGVjLmNvZGVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NJRH0gY2lkXG4gKi9cbmZ1bmN0aW9uIHByZWZpeCAoY2lkKSB7XG4gIGNvbnN0IHsgbmFtZSwgbGVuZ3RoIH0gPSBtdWx0aWhhc2guZGVjb2RlKGNpZC5tdWx0aWhhc2gpXG4gIHJldHVybiBgY2lkdiR7Y2lkLnZlcnNpb259LSR7Y2lkLmNvZGVjfS0ke25hbWV9LSR7bGVuZ3RofWBcbn1cbiJdLCJuYW1lcyI6WyJDSUQiLCJyZXF1aXJlIiwiYmFzZXMiLCJjb2RlY3MiLCJleHBsYWluIiwibXVsdGliYXNlIiwibXVsdGloYXNoIiwidWludDhBcnJheVRvU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvcm1hdCIsImNpZCIsIm9wdGlvbnMiLCJmb3JtYXRTdHIiLCJpc1N0cmluZyIsImluZGV4T2YiLCJFcnJvciIsIm9yaWdpbmFsQ2lkIiwiZXJyIiwiY2lkVmVyc2lvbiIsInZlcnNpb24iLCJ0b1YwIiwidG9WMSIsImJhc2UiLCJmaW5kQmFzZSIsIm5hbWUiLCJpc0VuY29kZWQiLCJyZXBsYWNlIiwicmVwbGFjZXIiLCJvYmoiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtYXRjaCIsInNwZWNpZmllciIsImNvZGUiLCJjb2RlYyIsImZpbmRDb2RlYyIsImRlY29kZSIsImxlbmd0aCIsImVuY29kZSIsImRpZ2VzdCIsInNsaWNlIiwiYnl0ZXMiLCJwcmVmaXgiLCJuYW1lT3JDb2RlIiwiYmFzZU5hbWVDb2RlIiwiZmluZCIsImIiLCJjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/src/core/format.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/cid-tool/src/core/hashes.js":
/*!**************************************************!*\
  !*** ./node_modules/cid-tool/src/core/hashes.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst multihash = __webpack_require__(/*! multihashes */ \"(ssr)/./node_modules/multihashes/src/index.js\");\n// TODO: list only safe hashes https://github.com/ipfs/go-verifcid\nmodule.exports = function hashes() {\n    const output = [];\n    for (const [name, code] of Object.entries(multihash.names)){\n        output.push({\n            name,\n            code\n        });\n    }\n    return output;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvaGFzaGVzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsWUFBWUMsbUJBQU9BLENBQUM7QUFFMUIsa0VBQWtFO0FBQ2xFQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0M7SUFDeEIsTUFBTUMsU0FBUyxFQUFFO0lBRWpCLEtBQUssTUFBTSxDQUFDQyxNQUFNQyxLQUFLLElBQUlDLE9BQU9DLE9BQU8sQ0FBQ1QsVUFBVVUsS0FBSyxFQUFHO1FBQzFETCxPQUFPTSxJQUFJLENBQUM7WUFBRUw7WUFBTUM7UUFBSztJQUMzQjtJQUVBLE9BQU9GO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvaGFzaGVzLmpzPzUxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IG11bHRpaGFzaCA9IHJlcXVpcmUoJ211bHRpaGFzaGVzJylcblxuLy8gVE9ETzogbGlzdCBvbmx5IHNhZmUgaGFzaGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9pcGZzL2dvLXZlcmlmY2lkXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc2hlcyAoKSB7XG4gIGNvbnN0IG91dHB1dCA9IFtdXG5cbiAgZm9yIChjb25zdCBbbmFtZSwgY29kZV0gb2YgT2JqZWN0LmVudHJpZXMobXVsdGloYXNoLm5hbWVzKSkge1xuICAgIG91dHB1dC5wdXNoKHsgbmFtZSwgY29kZSB9KVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuIl0sIm5hbWVzIjpbIm11bHRpaGFzaCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaGFzaGVzIiwib3V0cHV0IiwibmFtZSIsImNvZGUiLCJPYmplY3QiLCJlbnRyaWVzIiwibmFtZXMiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/src/core/hashes.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/cid-tool/src/core/index.js":
/*!*************************************************!*\
  !*** ./node_modules/cid-tool/src/core/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.base32 = __webpack_require__(/*! ./base32 */ \"(ssr)/./node_modules/cid-tool/src/core/base32.js\");\nexports.bases = __webpack_require__(/*! ./bases */ \"(ssr)/./node_modules/cid-tool/src/core/bases.js\");\nexports.codecs = __webpack_require__(/*! ./codecs */ \"(ssr)/./node_modules/cid-tool/src/core/codecs.js\");\nexports.format = __webpack_require__(/*! ./format */ \"(ssr)/./node_modules/cid-tool/src/core/format.js\");\nexports.hashes = __webpack_require__(/*! ./hashes */ \"(ssr)/./node_modules/cid-tool/src/core/hashes.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsd0dBQXlCO0FBQ3pCQSxxR0FBd0I7QUFDeEJBLHdHQUF5QjtBQUN6QkEsd0dBQXlCO0FBQ3pCQSx3R0FBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvaW5kZXguanM/NGVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5iYXNlMzIgPSByZXF1aXJlKCcuL2Jhc2UzMicpXG5leHBvcnRzLmJhc2VzID0gcmVxdWlyZSgnLi9iYXNlcycpXG5leHBvcnRzLmNvZGVjcyA9IHJlcXVpcmUoJy4vY29kZWNzJylcbmV4cG9ydHMuZm9ybWF0ID0gcmVxdWlyZSgnLi9mb3JtYXQnKVxuZXhwb3J0cy5oYXNoZXMgPSByZXF1aXJlKCcuL2hhc2hlcycpXG4iXSwibmFtZXMiOlsiZXhwb3J0cyIsImJhc2UzMiIsInJlcXVpcmUiLCJiYXNlcyIsImNvZGVjcyIsImZvcm1hdCIsImhhc2hlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/src/core/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/cid-tool/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/cid-tool/src/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/**\n * @typedef {import('./core/types').FormatOptions} FormatOptions\n */ module.exports = __webpack_require__(/*! ./core */ \"(ssr)/./node_modules/cid-tool/src/core/index.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUE7O0NBRUMsR0FFREEscUdBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9pbmRleC5qcz8yNGJhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS90eXBlcycpLkZvcm1hdE9wdGlvbnN9IEZvcm1hdE9wdGlvbnNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29yZScpXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cid-tool/src/index.js\n");

/***/ })

};
;