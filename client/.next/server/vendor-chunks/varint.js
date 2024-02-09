"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/varint";
exports.ids = ["vendor-chunks/varint"];
exports.modules = {

/***/ "(ssr)/./node_modules/varint/decode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/decode.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nmodule.exports = read;\nvar MSB = 0x80, REST = 0x7F;\nfunction read(buf, offset) {\n    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;\n    do {\n        if (counter >= l || shift > 49) {\n            read.bytes = 0;\n            throw new RangeError(\"Could not decode varint\");\n        }\n        b = buf[counter++];\n        res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);\n        shift += 7;\n    }while (b >= MSB);\n    read.bytes = counter - offset;\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2RlY29kZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTSxNQUNOQyxPQUFPO0FBRVgsU0FBU0YsS0FBS0csR0FBRyxFQUFFQyxNQUFNO0lBQ3ZCLElBQUlDLE1BQVMsR0FDVEQsU0FBU0EsVUFBVSxHQUNuQkUsUUFBUyxHQUNUQyxVQUFVSCxRQUNWSSxHQUNBQyxJQUFJTixJQUFJTyxNQUFNO0lBRWxCLEdBQUc7UUFDRCxJQUFJSCxXQUFXRSxLQUFLSCxRQUFRLElBQUk7WUFDOUJOLEtBQUtXLEtBQUssR0FBRztZQUNiLE1BQU0sSUFBSUMsV0FBVztRQUN2QjtRQUNBSixJQUFJTCxHQUFHLENBQUNJLFVBQVU7UUFDbEJGLE9BQU9DLFFBQVEsS0FDWCxDQUFDRSxJQUFJTixJQUFHLEtBQU1JLFFBQ2QsQ0FBQ0UsSUFBSU4sSUFBRyxJQUFLVyxLQUFLQyxHQUFHLENBQUMsR0FBR1I7UUFDN0JBLFNBQVM7SUFDWCxRQUFTRSxLQUFLUCxLQUFJO0lBRWxCRCxLQUFLVyxLQUFLLEdBQUdKLFVBQVVIO0lBRXZCLE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvdmFyaW50L2RlY29kZS5qcz9mYzBiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVhZFxuXG52YXIgTVNCID0gMHg4MFxuICAsIFJFU1QgPSAweDdGXG5cbmZ1bmN0aW9uIHJlYWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIHJlcyAgICA9IDBcbiAgICAsIG9mZnNldCA9IG9mZnNldCB8fCAwXG4gICAgLCBzaGlmdCAgPSAwXG4gICAgLCBjb3VudGVyID0gb2Zmc2V0XG4gICAgLCBiXG4gICAgLCBsID0gYnVmLmxlbmd0aFxuXG4gIGRvIHtcbiAgICBpZiAoY291bnRlciA+PSBsIHx8IHNoaWZ0ID4gNDkpIHtcbiAgICAgIHJlYWQuYnl0ZXMgPSAwXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ291bGQgbm90IGRlY29kZSB2YXJpbnQnKVxuICAgIH1cbiAgICBiID0gYnVmW2NvdW50ZXIrK11cbiAgICByZXMgKz0gc2hpZnQgPCAyOFxuICAgICAgPyAoYiAmIFJFU1QpIDw8IHNoaWZ0XG4gICAgICA6IChiICYgUkVTVCkgKiBNYXRoLnBvdygyLCBzaGlmdClcbiAgICBzaGlmdCArPSA3XG4gIH0gd2hpbGUgKGIgPj0gTVNCKVxuXG4gIHJlYWQuYnl0ZXMgPSBjb3VudGVyIC0gb2Zmc2V0XG5cbiAgcmV0dXJuIHJlc1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkIiwiTVNCIiwiUkVTVCIsImJ1ZiIsIm9mZnNldCIsInJlcyIsInNoaWZ0IiwiY291bnRlciIsImIiLCJsIiwibGVuZ3RoIiwiYnl0ZXMiLCJSYW5nZUVycm9yIiwiTWF0aCIsInBvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/decode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/encode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/encode.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nmodule.exports = encode;\nvar MSB = 0x80, REST = 0x7F, MSBALL = ~REST, INT = Math.pow(2, 31);\nfunction encode(num, out, offset) {\n    if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {\n        encode.bytes = 0;\n        throw new RangeError(\"Could not encode varint\");\n    }\n    out = out || [];\n    offset = offset || 0;\n    var oldOffset = offset;\n    while(num >= INT){\n        out[offset++] = num & 0xFF | MSB;\n        num /= 128;\n    }\n    while(num & MSBALL){\n        out[offset++] = num & 0xFF | MSB;\n        num >>>= 7;\n    }\n    out[offset] = num | 0;\n    encode.bytes = offset - oldOffset + 1;\n    return out;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2VuY29kZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTSxNQUNOQyxPQUFPLE1BQ1BDLFNBQVMsQ0FBQ0QsTUFDVkUsTUFBTUMsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFFdEIsU0FBU04sT0FBT08sR0FBRyxFQUFFQyxHQUFHLEVBQUVDLE1BQU07SUFDOUIsSUFBSUMsT0FBT0MsZ0JBQWdCLElBQUlKLE1BQU1HLE9BQU9DLGdCQUFnQixFQUFFO1FBQzVEWCxPQUFPWSxLQUFLLEdBQUc7UUFDZixNQUFNLElBQUlDLFdBQVc7SUFDdkI7SUFDQUwsTUFBTUEsT0FBTyxFQUFFO0lBQ2ZDLFNBQVNBLFVBQVU7SUFDbkIsSUFBSUssWUFBWUw7SUFFaEIsTUFBTUYsT0FBT0gsSUFBSztRQUNoQkksR0FBRyxDQUFDQyxTQUFTLEdBQUcsTUFBTyxPQUFRUjtRQUMvQk0sT0FBTztJQUNUO0lBQ0EsTUFBTUEsTUFBTUosT0FBUTtRQUNsQkssR0FBRyxDQUFDQyxTQUFTLEdBQUcsTUFBTyxPQUFRUjtRQUMvQk0sU0FBUztJQUNYO0lBQ0FDLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHRixNQUFNO0lBRXBCUCxPQUFPWSxLQUFLLEdBQUdILFNBQVNLLFlBQVk7SUFFcEMsT0FBT047QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy92YXJpbnQvZW5jb2RlLmpzP2M5NWUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBlbmNvZGVcblxudmFyIE1TQiA9IDB4ODBcbiAgLCBSRVNUID0gMHg3RlxuICAsIE1TQkFMTCA9IH5SRVNUXG4gICwgSU5UID0gTWF0aC5wb3coMiwgMzEpXG5cbmZ1bmN0aW9uIGVuY29kZShudW0sIG91dCwgb2Zmc2V0KSB7XG4gIGlmIChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAmJiBudW0gPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xuICAgIGVuY29kZS5ieXRlcyA9IDBcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ291bGQgbm90IGVuY29kZSB2YXJpbnQnKVxuICB9XG4gIG91dCA9IG91dCB8fCBbXVxuICBvZmZzZXQgPSBvZmZzZXQgfHwgMFxuICB2YXIgb2xkT2Zmc2V0ID0gb2Zmc2V0XG5cbiAgd2hpbGUobnVtID49IElOVCkge1xuICAgIG91dFtvZmZzZXQrK10gPSAobnVtICYgMHhGRikgfCBNU0JcbiAgICBudW0gLz0gMTI4XG4gIH1cbiAgd2hpbGUobnVtICYgTVNCQUxMKSB7XG4gICAgb3V0W29mZnNldCsrXSA9IChudW0gJiAweEZGKSB8IE1TQlxuICAgIG51bSA+Pj49IDdcbiAgfVxuICBvdXRbb2Zmc2V0XSA9IG51bSB8IDBcbiAgXG4gIGVuY29kZS5ieXRlcyA9IG9mZnNldCAtIG9sZE9mZnNldCArIDFcbiAgXG4gIHJldHVybiBvdXRcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW5jb2RlIiwiTVNCIiwiUkVTVCIsIk1TQkFMTCIsIklOVCIsIk1hdGgiLCJwb3ciLCJudW0iLCJvdXQiLCJvZmZzZXQiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiYnl0ZXMiLCJSYW5nZUVycm9yIiwib2xkT2Zmc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/encode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/index.js":
/*!**************************************!*\
  !*** ./node_modules/varint/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = {\n    encode: __webpack_require__(/*! ./encode.js */ \"(ssr)/./node_modules/varint/encode.js\"),\n    decode: __webpack_require__(/*! ./decode.js */ \"(ssr)/./node_modules/varint/decode.js\"),\n    encodingLength: __webpack_require__(/*! ./length.js */ \"(ssr)/./node_modules/varint/length.js\")\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHO0lBQ2JDLFFBQVFDLG1CQUFPQSxDQUFDO0lBQ2hCQyxRQUFRRCxtQkFBT0EsQ0FBQztJQUNoQkUsZ0JBQWdCRixtQkFBT0EsQ0FBQztBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy92YXJpbnQvaW5kZXguanM/YjZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBlbmNvZGU6IHJlcXVpcmUoJy4vZW5jb2RlLmpzJylcbiAgLCBkZWNvZGU6IHJlcXVpcmUoJy4vZGVjb2RlLmpzJylcbiAgLCBlbmNvZGluZ0xlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGguanMnKVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbmNvZGUiLCJyZXF1aXJlIiwiZGVjb2RlIiwiZW5jb2RpbmdMZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/varint/length.js":
/*!***************************************!*\
  !*** ./node_modules/varint/length.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nvar N1 = Math.pow(2, 7);\nvar N2 = Math.pow(2, 14);\nvar N3 = Math.pow(2, 21);\nvar N4 = Math.pow(2, 28);\nvar N5 = Math.pow(2, 35);\nvar N6 = Math.pow(2, 42);\nvar N7 = Math.pow(2, 49);\nvar N8 = Math.pow(2, 56);\nvar N9 = Math.pow(2, 63);\nmodule.exports = function(value) {\n    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFyaW50L2xlbmd0aC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSUEsS0FBS0MsS0FBS0MsR0FBRyxDQUFDLEdBQUk7QUFDdEIsSUFBSUMsS0FBS0YsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSUUsS0FBS0gsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSUcsS0FBS0osS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSUksS0FBS0wsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSUssS0FBS04sS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSU0sS0FBS1AsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSU8sS0FBS1IsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFDckIsSUFBSVEsS0FBS1QsS0FBS0MsR0FBRyxDQUFDLEdBQUc7QUFFckJTLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxLQUFLO0lBQzlCLE9BQ0VBLFFBQVFiLEtBQUssSUFDYmEsUUFBUVYsS0FBSyxJQUNiVSxRQUFRVCxLQUFLLElBQ2JTLFFBQVFSLEtBQUssSUFDYlEsUUFBUVAsS0FBSyxJQUNiTyxRQUFRTixLQUFLLElBQ2JNLFFBQVFMLEtBQUssSUFDYkssUUFBUUosS0FBSyxJQUNiSSxRQUFRSCxLQUFLLElBQ0E7QUFFakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvdmFyaW50L2xlbmd0aC5qcz9mMGRiIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIE4xID0gTWF0aC5wb3coMiwgIDcpXG52YXIgTjIgPSBNYXRoLnBvdygyLCAxNClcbnZhciBOMyA9IE1hdGgucG93KDIsIDIxKVxudmFyIE40ID0gTWF0aC5wb3coMiwgMjgpXG52YXIgTjUgPSBNYXRoLnBvdygyLCAzNSlcbnZhciBONiA9IE1hdGgucG93KDIsIDQyKVxudmFyIE43ID0gTWF0aC5wb3coMiwgNDkpXG52YXIgTjggPSBNYXRoLnBvdygyLCA1NilcbnZhciBOOSA9IE1hdGgucG93KDIsIDYzKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIDwgTjEgPyAxXG4gIDogdmFsdWUgPCBOMiA/IDJcbiAgOiB2YWx1ZSA8IE4zID8gM1xuICA6IHZhbHVlIDwgTjQgPyA0XG4gIDogdmFsdWUgPCBONSA/IDVcbiAgOiB2YWx1ZSA8IE42ID8gNlxuICA6IHZhbHVlIDwgTjcgPyA3XG4gIDogdmFsdWUgPCBOOCA/IDhcbiAgOiB2YWx1ZSA8IE45ID8gOVxuICA6ICAgICAgICAgICAgICAxMFxuICApXG59XG4iXSwibmFtZXMiOlsiTjEiLCJNYXRoIiwicG93IiwiTjIiLCJOMyIsIk40IiwiTjUiLCJONiIsIk43IiwiTjgiLCJOOSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/varint/length.js\n");

/***/ })

};
;