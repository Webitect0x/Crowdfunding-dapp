"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/explain-error";
exports.ids = ["vendor-chunks/explain-error"];
exports.modules = {

/***/ "(ssr)/./node_modules/explain-error/index.js":
/*!*********************************************!*\
  !*** ./node_modules/explain-error/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nfunction getStack(err) {\n    if (err.stack && err.name && err.message) return err.stack.substring(err.name.length + 3 + err.message.length).split(\"\\n\");\n    else if (err.stack) return err.stack.split(\"\\n\");\n}\nfunction removePrefix(a, b) {\n    return a.filter(function(e) {\n        return !~b.indexOf(e);\n    });\n}\nvar explain = module.exports = function(err, message) {\n    if (!(err.stack && err.name && err.message)) {\n        console.error(new Error(\"stackless error\"));\n        return err;\n    }\n    var _err = new Error(message);\n    var stack = removePrefix(getStack(_err).slice(1), getStack(err)).join(\"\\n\");\n    _err.__proto__ = err;\n    _err.stack = _err.name + \": \" + _err.message + \"\\n\" + stack + \"\\n  \" + err.stack;\n    return _err;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXhwbGFpbi1lcnJvci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsU0FBU0EsU0FBU0MsR0FBRztJQUNuQixJQUFHQSxJQUFJQyxLQUFLLElBQUlELElBQUlFLElBQUksSUFBSUYsSUFBSUcsT0FBTyxFQUNyQyxPQUFPSCxJQUFJQyxLQUFLLENBQUNHLFNBQVMsQ0FBQ0osSUFBSUUsSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSUwsSUFBSUcsT0FBTyxDQUFDRSxNQUFNLEVBQ2hFQyxLQUFLLENBQUM7U0FDTixJQUFHTixJQUFJQyxLQUFLLEVBQ2YsT0FBT0QsSUFBSUMsS0FBSyxDQUFDSyxLQUFLLENBQUM7QUFDM0I7QUFFQSxTQUFTQyxhQUFjQyxDQUFDLEVBQUVDLENBQUM7SUFDekIsT0FBT0QsRUFBRUUsTUFBTSxDQUFDLFNBQVVDLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUNGLEVBQUVHLE9BQU8sQ0FBQ0Q7SUFDckI7QUFDRjtBQUVBLElBQUlFLFVBQVVDLE9BQU9DLE9BQU8sR0FBRyxTQUFVZixHQUFHLEVBQUVHLE9BQU87SUFDbkQsSUFBRyxDQUFFSCxDQUFBQSxJQUFJQyxLQUFLLElBQUlELElBQUlFLElBQUksSUFBSUYsSUFBSUcsT0FBTyxHQUFHO1FBQzFDYSxRQUFRQyxLQUFLLENBQUMsSUFBSUMsTUFBTTtRQUN4QixPQUFPbEI7SUFDVDtJQUVBLElBQUltQixPQUFPLElBQUlELE1BQU1mO0lBQ3JCLElBQUlGLFFBQVFNLGFBQWFSLFNBQVNvQixNQUFNQyxLQUFLLENBQUMsSUFBSXJCLFNBQVNDLE1BQU1xQixJQUFJLENBQUM7SUFFdEVGLEtBQUtHLFNBQVMsR0FBR3RCO0lBRWpCbUIsS0FBS2xCLEtBQUssR0FDUmtCLEtBQUtqQixJQUFJLEdBQUcsT0FBT2lCLEtBQUtoQixPQUFPLEdBQUcsT0FDbENGLFFBQVEsU0FBU0QsSUFBSUMsS0FBSztJQUU1QixPQUFPa0I7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9leHBsYWluLWVycm9yL2luZGV4LmpzPzZiZTQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBnZXRTdGFjayhlcnIpIHtcbiAgaWYoZXJyLnN0YWNrICYmIGVyci5uYW1lICYmIGVyci5tZXNzYWdlKVxuICAgIHJldHVybiBlcnIuc3RhY2suc3Vic3RyaW5nKGVyci5uYW1lLmxlbmd0aCArIDMgKyBlcnIubWVzc2FnZS5sZW5ndGgpXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gIGVsc2UgaWYoZXJyLnN0YWNrKVxuICAgIHJldHVybiBlcnIuc3RhY2suc3BsaXQoJ1xcbicpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByZWZpeCAoYSwgYikge1xuICByZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gIX5iLmluZGV4T2YoZSlcbiAgfSlcbn1cblxudmFyIGV4cGxhaW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlcnIsIG1lc3NhZ2UpIHtcbiAgaWYoIShlcnIuc3RhY2sgJiYgZXJyLm5hbWUgJiYgZXJyLm1lc3NhZ2UpKSB7XG4gICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoJ3N0YWNrbGVzcyBlcnJvcicpKVxuICAgIHJldHVybiBlcnJcbiAgfVxuXG4gIHZhciBfZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpXG4gIHZhciBzdGFjayA9IHJlbW92ZVByZWZpeChnZXRTdGFjayhfZXJyKS5zbGljZSgxKSwgZ2V0U3RhY2soZXJyKSkuam9pbignXFxuJylcblxuICBfZXJyLl9fcHJvdG9fXyA9IGVyclxuXG4gIF9lcnIuc3RhY2sgPVxuICAgIF9lcnIubmFtZSArICc6ICcgKyBfZXJyLm1lc3NhZ2UgKyAnXFxuJyArXG4gICAgc3RhY2sgKyAnXFxuICAnICsgZXJyLnN0YWNrXG5cbiAgcmV0dXJuIF9lcnJcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJnZXRTdGFjayIsImVyciIsInN0YWNrIiwibmFtZSIsIm1lc3NhZ2UiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzcGxpdCIsInJlbW92ZVByZWZpeCIsImEiLCJiIiwiZmlsdGVyIiwiZSIsImluZGV4T2YiLCJleHBsYWluIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiX2VyciIsInNsaWNlIiwiam9pbiIsIl9fcHJvdG9fXyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/explain-error/index.js\n");

/***/ })

};
;