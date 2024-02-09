"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/idb-keyval";
exports.ids = ["vendor-chunks/idb-keyval"];
exports.modules = {

/***/ "(ssr)/./node_modules/idb-keyval/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/idb-keyval/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clear: () => (/* binding */ clear),\n/* harmony export */   createStore: () => (/* binding */ createStore),\n/* harmony export */   del: () => (/* binding */ del),\n/* harmony export */   delMany: () => (/* binding */ delMany),\n/* harmony export */   entries: () => (/* binding */ entries),\n/* harmony export */   get: () => (/* binding */ get),\n/* harmony export */   getMany: () => (/* binding */ getMany),\n/* harmony export */   keys: () => (/* binding */ keys),\n/* harmony export */   promisifyRequest: () => (/* binding */ promisifyRequest),\n/* harmony export */   set: () => (/* binding */ set),\n/* harmony export */   setMany: () => (/* binding */ setMany),\n/* harmony export */   update: () => (/* binding */ update),\n/* harmony export */   values: () => (/* binding */ values)\n/* harmony export */ });\nfunction promisifyRequest(request) {\n    return new Promise((resolve, reject)=>{\n        // @ts-ignore - file size hacks\n        request.oncomplete = request.onsuccess = ()=>resolve(request.result);\n        // @ts-ignore - file size hacks\n        request.onabort = request.onerror = ()=>reject(request.error);\n    });\n}\nfunction createStore(dbName, storeName) {\n    const request = indexedDB.open(dbName);\n    request.onupgradeneeded = ()=>request.result.createObjectStore(storeName);\n    const dbp = promisifyRequest(request);\n    return (txMode, callback)=>dbp.then((db)=>callback(db.transaction(storeName, txMode).objectStore(storeName)));\n}\nlet defaultGetStoreFunc;\nfunction defaultGetStore() {\n    if (!defaultGetStoreFunc) {\n        defaultGetStoreFunc = createStore(\"keyval-store\", \"keyval\");\n    }\n    return defaultGetStoreFunc;\n}\n/**\n * Get a value by its key.\n *\n * @param key\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function get(key, customStore = defaultGetStore()) {\n    return customStore(\"readonly\", (store)=>promisifyRequest(store.get(key)));\n}\n/**\n * Set a value with a key.\n *\n * @param key\n * @param value\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function set(key, value, customStore = defaultGetStore()) {\n    return customStore(\"readwrite\", (store)=>{\n        store.put(value, key);\n        return promisifyRequest(store.transaction);\n    });\n}\n/**\n * Set multiple values at once. This is faster than calling set() multiple times.\n * It's also atomic – if one of the pairs can't be added, none will be added.\n *\n * @param entries Array of entries, where each entry is an array of `[key, value]`.\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function setMany(entries, customStore = defaultGetStore()) {\n    return customStore(\"readwrite\", (store)=>{\n        entries.forEach((entry)=>store.put(entry[1], entry[0]));\n        return promisifyRequest(store.transaction);\n    });\n}\n/**\n * Get multiple values by their keys\n *\n * @param keys\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function getMany(keys, customStore = defaultGetStore()) {\n    return customStore(\"readonly\", (store)=>Promise.all(keys.map((key)=>promisifyRequest(store.get(key)))));\n}\n/**\n * Update a value. This lets you see the old value and update it as an atomic operation.\n *\n * @param key\n * @param updater A callback that takes the old value and returns a new value.\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function update(key, updater, customStore = defaultGetStore()) {\n    return customStore(\"readwrite\", (store)=>// Need to create the promise manually.\n        // If I try to chain promises, the transaction closes in browsers\n        // that use a promise polyfill (IE10/11).\n        new Promise((resolve, reject)=>{\n            store.get(key).onsuccess = function() {\n                try {\n                    store.put(updater(this.result), key);\n                    resolve(promisifyRequest(store.transaction));\n                } catch (err) {\n                    reject(err);\n                }\n            };\n        }));\n}\n/**\n * Delete a particular key from the store.\n *\n * @param key\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function del(key, customStore = defaultGetStore()) {\n    return customStore(\"readwrite\", (store)=>{\n        store.delete(key);\n        return promisifyRequest(store.transaction);\n    });\n}\n/**\n * Delete multiple keys at once.\n *\n * @param keys List of keys to delete.\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function delMany(keys, customStore = defaultGetStore()) {\n    return customStore(\"readwrite\", (store)=>{\n        keys.forEach((key)=>store.delete(key));\n        return promisifyRequest(store.transaction);\n    });\n}\n/**\n * Clear all values in the store.\n *\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function clear(customStore = defaultGetStore()) {\n    return customStore(\"readwrite\", (store)=>{\n        store.clear();\n        return promisifyRequest(store.transaction);\n    });\n}\nfunction eachCursor(store, callback) {\n    store.openCursor().onsuccess = function() {\n        if (!this.result) return;\n        callback(this.result);\n        this.result.continue();\n    };\n    return promisifyRequest(store.transaction);\n}\n/**\n * Get all keys in the store.\n *\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function keys(customStore = defaultGetStore()) {\n    return customStore(\"readonly\", (store)=>{\n        // Fast path for modern browsers\n        if (store.getAllKeys) {\n            return promisifyRequest(store.getAllKeys());\n        }\n        const items = [];\n        return eachCursor(store, (cursor)=>items.push(cursor.key)).then(()=>items);\n    });\n}\n/**\n * Get all values in the store.\n *\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function values(customStore = defaultGetStore()) {\n    return customStore(\"readonly\", (store)=>{\n        // Fast path for modern browsers\n        if (store.getAll) {\n            return promisifyRequest(store.getAll());\n        }\n        const items = [];\n        return eachCursor(store, (cursor)=>items.push(cursor.value)).then(()=>items);\n    });\n}\n/**\n * Get all entries in the store. Each entry is an array of `[key, value]`.\n *\n * @param customStore Method to get a custom store. Use with caution (see the docs).\n */ function entries(customStore = defaultGetStore()) {\n    return customStore(\"readonly\", (store)=>{\n        // Fast path for modern browsers\n        // (although, hopefully we'll get a simpler path some day)\n        if (store.getAll && store.getAllKeys) {\n            return Promise.all([\n                promisifyRequest(store.getAllKeys()),\n                promisifyRequest(store.getAll())\n            ]).then(([keys, values])=>keys.map((key, i)=>[\n                        key,\n                        values[i]\n                    ]));\n        }\n        const items = [];\n        return customStore(\"readonly\", (store)=>eachCursor(store, (cursor)=>items.push([\n                    cursor.key,\n                    cursor.value\n                ])).then(()=>items));\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaWRiLWtleXZhbC9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxpQkFBaUJDLE9BQU87SUFDN0IsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQ3pCLCtCQUErQjtRQUMvQkgsUUFBUUksVUFBVSxHQUFHSixRQUFRSyxTQUFTLEdBQUcsSUFBTUgsUUFBUUYsUUFBUU0sTUFBTTtRQUNyRSwrQkFBK0I7UUFDL0JOLFFBQVFPLE9BQU8sR0FBR1AsUUFBUVEsT0FBTyxHQUFHLElBQU1MLE9BQU9ILFFBQVFTLEtBQUs7SUFDbEU7QUFDSjtBQUNBLFNBQVNDLFlBQVlDLE1BQU0sRUFBRUMsU0FBUztJQUNsQyxNQUFNWixVQUFVYSxVQUFVQyxJQUFJLENBQUNIO0lBQy9CWCxRQUFRZSxlQUFlLEdBQUcsSUFBTWYsUUFBUU0sTUFBTSxDQUFDVSxpQkFBaUIsQ0FBQ0o7SUFDakUsTUFBTUssTUFBTWxCLGlCQUFpQkM7SUFDN0IsT0FBTyxDQUFDa0IsUUFBUUMsV0FBYUYsSUFBSUcsSUFBSSxDQUFDLENBQUNDLEtBQU9GLFNBQVNFLEdBQUdDLFdBQVcsQ0FBQ1YsV0FBV00sUUFBUUssV0FBVyxDQUFDWDtBQUN6RztBQUNBLElBQUlZO0FBQ0osU0FBU0M7SUFDTCxJQUFJLENBQUNELHFCQUFxQjtRQUN0QkEsc0JBQXNCZCxZQUFZLGdCQUFnQjtJQUN0RDtJQUNBLE9BQU9jO0FBQ1g7QUFDQTs7Ozs7Q0FLQyxHQUNELFNBQVNFLElBQUlDLEdBQUcsRUFBRUMsY0FBY0gsaUJBQWlCO0lBQzdDLE9BQU9HLFlBQVksWUFBWSxDQUFDQyxRQUFVOUIsaUJBQWlCOEIsTUFBTUgsR0FBRyxDQUFDQztBQUN6RTtBQUNBOzs7Ozs7Q0FNQyxHQUNELFNBQVNHLElBQUlILEdBQUcsRUFBRUksS0FBSyxFQUFFSCxjQUFjSCxpQkFBaUI7SUFDcEQsT0FBT0csWUFBWSxhQUFhLENBQUNDO1FBQzdCQSxN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T0FBTzNCLGNBQWNILGlCQUFpQjtJQUMzQyxPQUFPRyxZQUFZLFlBQVksQ0FBQ0M7UUFDNUIsZ0NBQWdDO1FBQ2hDLElBQUlBLE1BQU0yQixNQUFNLEVBQUU7WUFDZCxPQUFPekQsaUJBQWlCOEIsTUFBTTJCLE1BQU07UUFDeEM7UUFDQSxNQUFNSixRQUFRLEVBQUU7UUFDaEIsT0FBT0osV0FBV25CLE9BQU8sQ0FBQ3dCLFNBQVdELE1BQU1FLElBQUksQ0FBQ0QsT0FBT3RCLEtBQUssR0FBR1gsSUFBSSxDQUFDLElBQU1nQztJQUM5RTtBQUNKO0FBQ0E7Ozs7Q0FJQyxHQUNELFNBQVNsQixRQUFRTixjQUFjSCxpQkFBaUI7SUFDNUMsT0FBT0csWUFBWSxZQUFZLENBQUNDO1FBQzVCLGdDQUFnQztRQUNoQywwREFBMEQ7UUFDMUQsSUFBSUEsTUFBTTJCLE1BQU0sSUFBSTNCLE1BQU1zQixVQUFVLEVBQUU7WUFDbEMsT0FBT2xELFFBQVFzQyxHQUFHLENBQUM7Z0JBQ2Z4QyxpQkFBaUI4QixNQUFNc0IsVUFBVTtnQkFDakNwRCxpQkFBaUI4QixNQUFNMkIsTUFBTTthQUNoQyxFQUFFcEMsSUFBSSxDQUFDLENBQUMsQ0FBQ2tCLE1BQU1pQixPQUFPLEdBQUtqQixLQUFLRSxHQUFHLENBQUMsQ0FBQ2IsS0FBSzhCLElBQU07d0JBQUM5Qjt3QkFBSzRCLE1BQU0sQ0FBQ0UsRUFBRTtxQkFBQztRQUNyRTtRQUNBLE1BQU1MLFFBQVEsRUFBRTtRQUNoQixPQUFPeEIsWUFBWSxZQUFZLENBQUNDLFFBQVVtQixXQUFXbkIsT0FBTyxDQUFDd0IsU0FBV0QsTUFBTUUsSUFBSSxDQUFDO29CQUFDRCxPQUFPMUIsR0FBRztvQkFBRTBCLE9BQU90QixLQUFLO2lCQUFDLEdBQUdYLElBQUksQ0FBQyxJQUFNZ0M7SUFDL0g7QUFDSjtBQUV5SCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9pZGIta2V5dmFsL2Rpc3QvaW5kZXguanM/ZjQyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlIC0gZmlsZSBzaXplIGhhY2tzXG4gICAgICAgIHJlcXVlc3Qub25jb21wbGV0ZSA9IHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBmaWxlIHNpemUgaGFja3NcbiAgICAgICAgcmVxdWVzdC5vbmFib3J0ID0gcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlU3RvcmUoZGJOYW1lLCBzdG9yZU5hbWUpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lKTtcbiAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHJlcXVlc3QucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgY29uc3QgZGJwID0gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KTtcbiAgICByZXR1cm4gKHR4TW9kZSwgY2FsbGJhY2spID0+IGRicC50aGVuKChkYikgPT4gY2FsbGJhY2soZGIudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCB0eE1vZGUpLm9iamVjdFN0b3JlKHN0b3JlTmFtZSkpKTtcbn1cbmxldCBkZWZhdWx0R2V0U3RvcmVGdW5jO1xuZnVuY3Rpb24gZGVmYXVsdEdldFN0b3JlKCkge1xuICAgIGlmICghZGVmYXVsdEdldFN0b3JlRnVuYykge1xuICAgICAgICBkZWZhdWx0R2V0U3RvcmVGdW5jID0gY3JlYXRlU3RvcmUoJ2tleXZhbC1zdG9yZScsICdrZXl2YWwnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRHZXRTdG9yZUZ1bmM7XG59XG4vKipcbiAqIEdldCBhIHZhbHVlIGJ5IGl0cyBrZXkuXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGdldChrZXksIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWRvbmx5JywgKHN0b3JlKSA9PiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldChrZXkpKSk7XG59XG4vKipcbiAqIFNldCBhIHZhbHVlIHdpdGggYSBrZXkuXG4gKlxuICogQHBhcmFtIGtleVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8qKlxuICogU2V0IG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlLiBUaGlzIGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgc2V0KCkgbXVsdGlwbGUgdGltZXMuXG4gKiBJdCdzIGFsc28gYXRvbWljIOKAkyBpZiBvbmUgb2YgdGhlIHBhaXJzIGNhbid0IGJlIGFkZGVkLCBub25lIHdpbGwgYmUgYWRkZWQuXG4gKlxuICogQHBhcmFtIGVudHJpZXMgQXJyYXkgb2YgZW50cmllcywgd2hlcmUgZWFjaCBlbnRyeSBpcyBhbiBhcnJheSBvZiBgW2tleSwgdmFsdWVdYC5cbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBzZXRNYW55KGVudHJpZXMsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiBzdG9yZS5wdXQoZW50cnlbMV0sIGVudHJ5WzBdKSk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8qKlxuICogR2V0IG11bHRpcGxlIHZhbHVlcyBieSB0aGVpciBrZXlzXG4gKlxuICogQHBhcmFtIGtleXNcbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBnZXRNYW55KGtleXMsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWRvbmx5JywgKHN0b3JlKSA9PiBQcm9taXNlLmFsbChrZXlzLm1hcCgoa2V5KSA9PiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldChrZXkpKSkpKTtcbn1cbi8qKlxuICogVXBkYXRlIGEgdmFsdWUuIFRoaXMgbGV0cyB5b3Ugc2VlIHRoZSBvbGQgdmFsdWUgYW5kIHVwZGF0ZSBpdCBhcyBhbiBhdG9taWMgb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSB1cGRhdGVyIEEgY2FsbGJhY2sgdGhhdCB0YWtlcyB0aGUgb2xkIHZhbHVlIGFuZCByZXR1cm5zIGEgbmV3IHZhbHVlLlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZShrZXksIHVwZGF0ZXIsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4gXG4gICAgLy8gTmVlZCB0byBjcmVhdGUgdGhlIHByb21pc2UgbWFudWFsbHkuXG4gICAgLy8gSWYgSSB0cnkgdG8gY2hhaW4gcHJvbWlzZXMsIHRoZSB0cmFuc2FjdGlvbiBjbG9zZXMgaW4gYnJvd3NlcnNcbiAgICAvLyB0aGF0IHVzZSBhIHByb21pc2UgcG9seWZpbGwgKElFMTAvMTEpLlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc3RvcmUuZ2V0KGtleSkub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXQodXBkYXRlcih0aGlzLnJlc3VsdCksIGtleSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLnRyYW5zYWN0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSkpO1xufVxuLyoqXG4gKiBEZWxldGUgYSBwYXJ0aWN1bGFyIGtleSBmcm9tIHRoZSBzdG9yZS5cbiAqXG4gKiBAcGFyYW0ga2V5XG4gKiBAcGFyYW0gY3VzdG9tU3RvcmUgTWV0aG9kIHRvIGdldCBhIGN1c3RvbSBzdG9yZS4gVXNlIHdpdGggY2F1dGlvbiAoc2VlIHRoZSBkb2NzKS5cbiAqL1xuZnVuY3Rpb24gZGVsKGtleSwgY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZHdyaXRlJywgKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS50cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG4vKipcbiAqIERlbGV0ZSBtdWx0aXBsZSBrZXlzIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIGtleXMgTGlzdCBvZiBrZXlzIHRvIGRlbGV0ZS5cbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBkZWxNYW55KGtleXMsIGN1c3RvbVN0b3JlID0gZGVmYXVsdEdldFN0b3JlKCkpIHtcbiAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWR3cml0ZScsIChzdG9yZSkgPT4ge1xuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4gc3RvcmUuZGVsZXRlKGtleSkpO1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS50cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG4vKipcbiAqIENsZWFyIGFsbCB2YWx1ZXMgaW4gdGhlIHN0b3JlLlxuICpcbiAqIEBwYXJhbSBjdXN0b21TdG9yZSBNZXRob2QgdG8gZ2V0IGEgY3VzdG9tIHN0b3JlLiBVc2Ugd2l0aCBjYXV0aW9uIChzZWUgdGhlIGRvY3MpLlxuICovXG5mdW5jdGlvbiBjbGVhcihjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkd3JpdGUnLCAoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUudHJhbnNhY3Rpb24pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZWFjaEN1cnNvcihzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBzdG9yZS5vcGVuQ3Vyc29yKCkub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYWxsYmFjayh0aGlzLnJlc3VsdCk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbnRpbnVlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS50cmFuc2FjdGlvbik7XG59XG4vKipcbiAqIEdldCBhbGwga2V5cyBpbiB0aGUgc3RvcmUuXG4gKlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGtleXMoY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IHtcbiAgICAgICAgLy8gRmFzdCBwYXRoIGZvciBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaWYgKHN0b3JlLmdldEFsbEtleXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHN0b3JlLmdldEFsbEtleXMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVhY2hDdXJzb3Ioc3RvcmUsIChjdXJzb3IpID0+IGl0ZW1zLnB1c2goY3Vyc29yLmtleSkpLnRoZW4oKCkgPT4gaXRlbXMpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBHZXQgYWxsIHZhbHVlcyBpbiB0aGUgc3RvcmUuXG4gKlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIHZhbHVlcyhjdXN0b21TdG9yZSA9IGRlZmF1bHRHZXRTdG9yZSgpKSB7XG4gICAgcmV0dXJuIGN1c3RvbVN0b3JlKCdyZWFkb25seScsIChzdG9yZSkgPT4ge1xuICAgICAgICAvLyBGYXN0IHBhdGggZm9yIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpZiAoc3RvcmUuZ2V0QWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS5nZXRBbGwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVhY2hDdXJzb3Ioc3RvcmUsIChjdXJzb3IpID0+IGl0ZW1zLnB1c2goY3Vyc29yLnZhbHVlKSkudGhlbigoKSA9PiBpdGVtcyk7XG4gICAgfSk7XG59XG4vKipcbiAqIEdldCBhbGwgZW50cmllcyBpbiB0aGUgc3RvcmUuIEVhY2ggZW50cnkgaXMgYW4gYXJyYXkgb2YgYFtrZXksIHZhbHVlXWAuXG4gKlxuICogQHBhcmFtIGN1c3RvbVN0b3JlIE1ldGhvZCB0byBnZXQgYSBjdXN0b20gc3RvcmUuIFVzZSB3aXRoIGNhdXRpb24gKHNlZSB0aGUgZG9jcykuXG4gKi9cbmZ1bmN0aW9uIGVudHJpZXMoY3VzdG9tU3RvcmUgPSBkZWZhdWx0R2V0U3RvcmUoKSkge1xuICAgIHJldHVybiBjdXN0b21TdG9yZSgncmVhZG9ubHknLCAoc3RvcmUpID0+IHtcbiAgICAgICAgLy8gRmFzdCBwYXRoIGZvciBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgLy8gKGFsdGhvdWdoLCBob3BlZnVsbHkgd2UnbGwgZ2V0IGEgc2ltcGxlciBwYXRoIHNvbWUgZGF5KVxuICAgICAgICBpZiAoc3RvcmUuZ2V0QWxsICYmIHN0b3JlLmdldEFsbEtleXMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgcHJvbWlzaWZ5UmVxdWVzdChzdG9yZS5nZXRBbGxLZXlzKCkpLFxuICAgICAgICAgICAgICAgIHByb21pc2lmeVJlcXVlc3Qoc3RvcmUuZ2V0QWxsKCkpLFxuICAgICAgICAgICAgXSkudGhlbigoW2tleXMsIHZhbHVlc10pID0+IGtleXMubWFwKChrZXksIGkpID0+IFtrZXksIHZhbHVlc1tpXV0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICByZXR1cm4gY3VzdG9tU3RvcmUoJ3JlYWRvbmx5JywgKHN0b3JlKSA9PiBlYWNoQ3Vyc29yKHN0b3JlLCAoY3Vyc29yKSA9PiBpdGVtcy5wdXNoKFtjdXJzb3Iua2V5LCBjdXJzb3IudmFsdWVdKSkudGhlbigoKSA9PiBpdGVtcykpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBjbGVhciwgY3JlYXRlU3RvcmUsIGRlbCwgZGVsTWFueSwgZW50cmllcywgZ2V0LCBnZXRNYW55LCBrZXlzLCBwcm9taXNpZnlSZXF1ZXN0LCBzZXQsIHNldE1hbnksIHVwZGF0ZSwgdmFsdWVzIH07XG4iXSwibmFtZXMiOlsicHJvbWlzaWZ5UmVxdWVzdCIsInJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uY29tcGxldGUiLCJvbnN1Y2Nlc3MiLCJyZXN1bHQiLCJvbmFib3J0Iiwib25lcnJvciIsImVycm9yIiwiY3JlYXRlU3RvcmUiLCJkYk5hbWUiLCJzdG9yZU5hbWUiLCJpbmRleGVkREIiLCJvcGVuIiwib251cGdyYWRlbmVlZGVkIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJkYnAiLCJ0eE1vZGUiLCJjYWxsYmFjayIsInRoZW4iLCJkYiIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJkZWZhdWx0R2V0U3RvcmVGdW5jIiwiZGVmYXVsdEdldFN0b3JlIiwiZ2V0Iiwia2V5IiwiY3VzdG9tU3RvcmUiLCJzdG9yZSIsInNldCIsInZhbHVlIiwicHV0Iiwic2V0TWFueSIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJnZXRNYW55Iiwia2V5cyIsImFsbCIsIm1hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJlcnIiLCJkZWwiLCJkZWxldGUiLCJkZWxNYW55IiwiY2xlYXIiLCJlYWNoQ3Vyc29yIiwib3BlbkN1cnNvciIsImNvbnRpbnVlIiwiZ2V0QWxsS2V5cyIsIml0ZW1zIiwiY3Vyc29yIiwicHVzaCIsInZhbHVlcyIsImdldEFsbCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/idb-keyval/dist/index.js\n");

/***/ })

};
;