// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/peerjs/dist/peerjs.min.js":[function(require,module,exports) {
var define;
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"4EgB":[function(require,module,exports) {
var e={};e.useBlobBuilder=function(){try{return new Blob([]),!1}catch(e){return!0}}(),e.useArrayBufferView=!e.useBlobBuilder&&function(){try{return 0===new Blob([new Uint8Array([])]).size}catch(e){return!0}}(),module.exports.binaryFeatures=e;var r=module.exports.BlobBuilder;function t(){this._pieces=[],this._parts=[]}"undefined"!=typeof window&&(r=module.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder),t.prototype.append=function(e){"number"==typeof e?this._pieces.push(e):(this.flush(),this._parts.push(e))},t.prototype.flush=function(){if(this._pieces.length>0){var r=new Uint8Array(this._pieces);e.useArrayBufferView||(r=r.buffer),this._parts.push(r),this._pieces=[]}},t.prototype.getBuffer=function(){if(this.flush(),e.useBlobBuilder){for(var t=new r,i=0,u=this._parts.length;i<u;i++)t.append(this._parts[i]);return t.getBlob()}return new Blob(this._parts)},module.exports.BufferBuilder=t;
},{}],"kdPp":[function(require,module,exports) {
var t=require("./bufferbuilder").BufferBuilder,e=require("./bufferbuilder").binaryFeatures,i={unpack:function(t){return new r(t).unpack()},pack:function(t){var e=new n;return e.pack(t),e.getBuffer()}};function r(t){this.index=0,this.dataBuffer=t,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}function n(){this.bufferBuilder=new t}function u(t){var e=t.charCodeAt(0);return e<=2047?"00":e<=65535?"000":e<=2097151?"0000":e<=67108863?"00000":"000000"}function a(t){return t.length>600?new Blob([t]).size:t.replace(/[^\u0000-\u007F]/g,u).length}module.exports=i,r.prototype.unpack=function(){var t,e=this.unpack_uint8();if(e<128)return e;if((224^e)<32)return(224^e)-32;if((t=160^e)<=15)return this.unpack_raw(t);if((t=176^e)<=15)return this.unpack_string(t);if((t=144^e)<=15)return this.unpack_array(t);if((t=128^e)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:case 213:case 214:case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}},r.prototype.unpack_uint8=function(){var t=255&this.dataView[this.index];return this.index++,t},r.prototype.unpack_uint16=function(){var t=this.read(2),e=256*(255&t[0])+(255&t[1]);return this.index+=2,e},r.prototype.unpack_uint32=function(){var t=this.read(4),e=256*(256*(256*t[0]+t[1])+t[2])+t[3];return this.index+=4,e},r.prototype.unpack_uint64=function(){var t=this.read(8),e=256*(256*(256*(256*(256*(256*(256*t[0]+t[1])+t[2])+t[3])+t[4])+t[5])+t[6])+t[7];return this.index+=8,e},r.prototype.unpack_int8=function(){var t=this.unpack_uint8();return t<128?t:t-256},r.prototype.unpack_int16=function(){var t=this.unpack_uint16();return t<32768?t:t-65536},r.prototype.unpack_int32=function(){var t=this.unpack_uint32();return t<Math.pow(2,31)?t:t-Math.pow(2,32)},r.prototype.unpack_int64=function(){var t=this.unpack_uint64();return t<Math.pow(2,63)?t:t-Math.pow(2,64)},r.prototype.unpack_raw=function(t){if(this.length<this.index+t)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+t+" "+this.length);var e=this.dataBuffer.slice(this.index,this.index+t);return this.index+=t,e},r.prototype.unpack_string=function(t){for(var e,i,r=this.read(t),n=0,u="";n<t;)(e=r[n])<128?(u+=String.fromCharCode(e),n++):(192^e)<32?(i=(192^e)<<6|63&r[n+1],u+=String.fromCharCode(i),n+=2):(i=(15&e)<<12|(63&r[n+1])<<6|63&r[n+2],u+=String.fromCharCode(i),n+=3);return this.index+=t,u},r.prototype.unpack_array=function(t){for(var e=new Array(t),i=0;i<t;i++)e[i]=this.unpack();return e},r.prototype.unpack_map=function(t){for(var e={},i=0;i<t;i++){var r=this.unpack(),n=this.unpack();e[r]=n}return e},r.prototype.unpack_float=function(){var t=this.unpack_uint32(),e=(t>>23&255)-127;return(0===t>>31?1:-1)*(8388607&t|8388608)*Math.pow(2,e-23)},r.prototype.unpack_double=function(){var t=this.unpack_uint32(),e=this.unpack_uint32(),i=(t>>20&2047)-1023;return(0===t>>31?1:-1)*((1048575&t|1048576)*Math.pow(2,i-20)+e*Math.pow(2,i-52))},r.prototype.read=function(t){var e=this.index;if(e+t<=this.length)return this.dataView.subarray(e,e+t);throw new Error("BinaryPackFailure: read index out of range")},n.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()},n.prototype.pack=function(t){var i=typeof t;if("string"===i)this.pack_string(t);else if("number"===i)Math.floor(t)===t?this.pack_integer(t):this.pack_double(t);else if("boolean"===i)!0===t?this.bufferBuilder.append(195):!1===t&&this.bufferBuilder.append(194);else if("undefined"===i)this.bufferBuilder.append(192);else{if("object"!==i)throw new Error('Type "'+i+'" not yet supported');if(null===t)this.bufferBuilder.append(192);else{var r=t.constructor;if(r==Array)this.pack_array(t);else if(r==Blob||r==File||t instanceof Blob||t instanceof File)this.pack_bin(t);else if(r==ArrayBuffer)e.useArrayBufferView?this.pack_bin(new Uint8Array(t)):this.pack_bin(t);else if("BYTES_PER_ELEMENT"in t)e.useArrayBufferView?this.pack_bin(new Uint8Array(t.buffer)):this.pack_bin(t.buffer);else if(r==Object||r.toString().startsWith("class"))this.pack_object(t);else if(r==Date)this.pack_string(t.toString());else{if("function"!=typeof t.toBinaryPack)throw new Error('Type "'+r.toString()+'" not yet supported');this.bufferBuilder.append(t.toBinaryPack())}}}this.bufferBuilder.flush()},n.prototype.pack_bin=function(t){var e=t.length||t.byteLength||t.size;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this.bufferBuilder.append(218),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_string=function(t){var e=a(t);if(e<=15)this.pack_uint8(176+e);else if(e<=65535)this.bufferBuilder.append(216),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_array=function(t){var e=t.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this.bufferBuilder.append(220),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(e)}for(var i=0;i<e;i++)this.pack(t[i])},n.prototype.pack_integer=function(t){if(t>=-32&&t<=127)this.bufferBuilder.append(255&t);else if(t>=0&&t<=255)this.bufferBuilder.append(204),this.pack_uint8(t);else if(t>=-128&&t<=127)this.bufferBuilder.append(208),this.pack_int8(t);else if(t>=0&&t<=65535)this.bufferBuilder.append(205),this.pack_uint16(t);else if(t>=-32768&&t<=32767)this.bufferBuilder.append(209),this.pack_int16(t);else if(t>=0&&t<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(t);else if(t>=-2147483648&&t<=2147483647)this.bufferBuilder.append(210),this.pack_int32(t);else if(t>=-0x8000000000000000&&t<=0x8000000000000000)this.bufferBuilder.append(211),this.pack_int64(t);else{if(!(t>=0&&t<=0x10000000000000000))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(t)}},n.prototype.pack_double=function(t){var e=0;t<0&&(e=1,t=-t);var i=Math.floor(Math.log(t)/Math.LN2),r=t/Math.pow(2,i)-1,n=Math.floor(r*Math.pow(2,52)),u=Math.pow(2,32),a=e<<31|i+1023<<20|n/u&1048575,p=n%u;this.bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(p)},n.prototype.pack_object=function(t){var e=Object.keys(t).length;if(e<=15)this.pack_uint8(128+e);else if(e<=65535)this.bufferBuilder.append(222),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(e)}for(var i in t)t.hasOwnProperty(i)&&(this.pack(i),this.pack(t[i]))},n.prototype.pack_uint8=function(t){this.bufferBuilder.append(t)},n.prototype.pack_uint16=function(t){this.bufferBuilder.append(t>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_uint32=function(t){var e=4294967295&t;this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e)},n.prototype.pack_uint64=function(t){var e=t/Math.pow(2,32),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)},n.prototype.pack_int8=function(t){this.bufferBuilder.append(255&t)},n.prototype.pack_int16=function(t){this.bufferBuilder.append((65280&t)>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int32=function(t){this.bufferBuilder.append(t>>>24&255),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int64=function(t){var e=Math.floor(t/Math.pow(2,32)),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)};
},{"./bufferbuilder":"4EgB"}],"iSxC":[function(require,module,exports) {
"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractVersion=o,exports.wrapPeerConnectionEvent=i,exports.disableLog=s,exports.disableWarnings=a,exports.log=u,exports.deprecated=c,exports.detectBrowser=p,exports.compactObject=d,exports.walkStats=l,exports.filterStats=b;var n=!0,r=!0;function o(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n],10)}function i(e,t,n){if(e.RTCPeerConnection){var r=e.RTCPeerConnection.prototype,o=r.addEventListener;r.addEventListener=function(e,r){if(e!==t)return o.apply(this,arguments);var i=function(e){var t=n(e);t&&r(t)};return this._eventMap=this._eventMap||{},this._eventMap[r]=i,o.apply(this,[e,i])};var i=r.removeEventListener;r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[n])return i.apply(this,arguments);var r=this._eventMap[n];return delete this._eventMap[n],i.apply(this,[e,r])},Object.defineProperty(r,"on"+t,{get:function(){return this["_on"+t]},set:function(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}}function s(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(n=e,e?"adapter.js logging disabled":"adapter.js logging enabled")}function a(e){return"boolean"!=typeof e?new Error("Argument type: "+t(e)+". Please use a boolean."):(r=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))}function u(){if("object"===("undefined"==typeof window?"undefined":t(window))){if(n)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}}function c(e,t){r&&console.warn(e+" is deprecated, please use "+t+" instead.")}function p(e){var{navigator:t}=e,n={browser:null,version:null};if(void 0===e||!e.navigator)return n.browser="Not a browser.",n;if(t.mozGetUserMedia)n.browser="firefox",n.version=o(t.userAgent,/Firefox\/(\d+)\./,1);else if(t.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection&&!e.RTCIceGatherer)n.browser="chrome",n.version=o(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.mediaDevices&&t.userAgent.match(/Edge\/(\d+).(\d+)$/))n.browser="edge",n.version=o(t.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!e.RTCPeerConnection||!t.userAgent.match(/AppleWebKit\/(\d+)\./))return n.browser="Not a supported browser.",n;n.browser="safari",n.version=o(t.userAgent,/AppleWebKit\/(\d+)\./,1),n.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return n}function f(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(t){return f(t)?Object.keys(t).reduce(function(n,r){var o=f(t[r]),i=o?d(t[r]):t[r],s=o&&!Object.keys(i).length;return void 0===i||s?n:Object.assign(n,e({},r,i))},{}):t}function l(e,t,n){t&&!n.has(t.id)&&(n.set(t.id,t),Object.keys(t).forEach(function(r){r.endsWith("Id")?l(e,e.get(t[r]),n):r.endsWith("Ids")&&t[r].forEach(function(t){l(e,e.get(t),n)})}))}function b(e,t,n){var r=n?"outbound-rtp":"inbound-rtp",o=new Map;if(null===t)return o;var i=[];return e.forEach(function(e){"track"===e.type&&e.trackIdentifier===t.id&&i.push(e)}),i.forEach(function(t){e.forEach(function(n){n.type===r&&n.trackId===t.id&&l(e,n,o)})}),o}
},{}],"s6SN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=i;var e=r(require("../utils.js"));function r(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};t.get||t.set?Object.defineProperty(r,o,t):r[o]=e[o]}return r.default=e,r}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var t=e.log;function i(r){var i=r&&r.navigator;if(i.mediaDevices){var n=e.detectBrowser(r),a=function(e){if("object"!==o(e)||e.mandatory||e.optional)return e;var r={};return Object.keys(e).forEach(function(t){if("require"!==t&&"advanced"!==t&&"mediaSource"!==t){var i="object"===o(e[t])?e[t]:{ideal:e[t]};void 0!==i.exact&&"number"==typeof i.exact&&(i.min=i.max=i.exact);var n=function(e,r){return e?e+r.charAt(0).toUpperCase()+r.slice(1):"deviceId"===r?"sourceId":r};if(void 0!==i.ideal){r.optional=r.optional||[];var a={};"number"==typeof i.ideal?(a[n("min",t)]=i.ideal,r.optional.push(a),(a={})[n("max",t)]=i.ideal,r.optional.push(a)):(a[n("",t)]=i.ideal,r.optional.push(a))}void 0!==i.exact&&"number"!=typeof i.exact?(r.mandatory=r.mandatory||{},r.mandatory[n("",t)]=i.exact):["min","max"].forEach(function(e){void 0!==i[e]&&(r.mandatory=r.mandatory||{},r.mandatory[n(e,t)]=i[e])})}}),e.advanced&&(r.optional=(r.optional||[]).concat(e.advanced)),r},d=function(e,r){if(n.version>=61)return r(e);if((e=JSON.parse(JSON.stringify(e)))&&"object"===o(e.audio)){var d=function(e,r,o){r in e&&!(o in e)&&(e[o]=e[r],delete e[r])};d((e=JSON.parse(JSON.stringify(e))).audio,"autoGainControl","googAutoGainControl"),d(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=a(e.audio)}if(e&&"object"===o(e.video)){var c=e.video.facingMode;c=c&&("object"===o(c)?c:{ideal:c});var s,u=n.version<66;if(c&&("user"===c.exact||"environment"===c.exact||"user"===c.ideal||"environment"===c.ideal)&&(!i.mediaDevices.getSupportedConstraints||!i.mediaDevices.getSupportedConstraints().facingMode||u))if(delete e.video.facingMode,"environment"===c.exact||"environment"===c.ideal?s=["back","rear"]:"user"!==c.exact&&"user"!==c.ideal||(s=["front"]),s)return i.mediaDevices.enumerateDevices().then(function(o){var i=(o=o.filter(function(e){return"videoinput"===e.kind})).find(function(e){return s.some(function(r){return e.label.toLowerCase().includes(r)})});return!i&&o.length&&s.includes("back")&&(i=o[o.length-1]),i&&(e.video.deviceId=c.exact?{exact:i.deviceId}:{ideal:i.deviceId}),e.video=a(e.video),t("chrome: "+JSON.stringify(e)),r(e)});e.video=a(e.video)}return t("chrome: "+JSON.stringify(e)),r(e)},c=function(e){return n.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}};if(i.getUserMedia=function(e,r,o){d(e,function(e){i.webkitGetUserMedia(e,r,function(e){o&&o(c(e))})})}.bind(i),i.mediaDevices.getUserMedia){var s=i.mediaDevices.getUserMedia.bind(i.mediaDevices);i.mediaDevices.getUserMedia=function(e){return d(e,function(e){return s(e).then(function(r){if(e.audio&&!r.getAudioTracks().length||e.video&&!r.getVideoTracks().length)throw r.getTracks().forEach(function(e){e.stop()}),new DOMException("","NotFoundError");return r},function(e){return Promise.reject(c(e))})})}}}}
},{"../utils.js":"iSxC"}],"VHa8":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&("function"==typeof i?e.navigator.mediaDevices.getDisplayMedia=function(a){return i(a).then(function(i){var t=a.video&&a.video.width,o=a.video&&a.video.height,d=a.video&&a.video.frameRate;return a.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:i,maxFrameRate:d||3}},t&&(a.video.mandatory.maxWidth=t),o&&(a.video.mandatory.maxHeight=o),e.navigator.mediaDevices.getUserMedia(a)})}:console.error("shimGetDisplayMedia: getSourceId argument is not a function"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"uI5X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimMediaStream=s,exports.shimOnTrack=a,exports.shimGetSendersWithDtmf=c,exports.shimGetStats=p,exports.shimSenderReceiverGetStats=d,exports.shimAddTrackRemoveTrackWithNative=h,exports.shimAddTrackRemoveTrack=m,exports.shimPeerConnection=f,exports.fixNegotiationNeeded=u,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=n(require("../utils.js")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){e.MediaStream=e.MediaStream||e.webkitMediaStream}function a(t){if("object"!==o(t)||!t.RTCPeerConnection||"ontrack"in t.RTCPeerConnection.prototype)e.wrapPeerConnectionEvent(t,"track",function(e){return e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e});else{Object.defineProperty(t.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0});var r=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._ontrackpoly||(this._ontrackpoly=function(r){r.stream.addEventListener("addtrack",function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.track.id}):{track:n.track};var o=new Event("track");o.track=n.track,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)}),r.stream.getTracks().forEach(function(n){var i;i=t.RTCPeerConnection.prototype.getReceivers?e.getReceivers().find(function(e){return e.track&&e.track.id===n.id}):{track:n};var o=new Event("track");o.track=n,o.receiver=i,o.transceiver={receiver:i},o.streams=[r.stream],e.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),r.apply(this,arguments)}}}function c(e){if("object"===o(e)&&e.RTCPeerConnection&&!("getSenders"in e.RTCPeerConnection.prototype)&&"createDTMFSender"in e.RTCPeerConnection.prototype){var t=function(e,t){return{track:t,get dtmf(){return void 0===this._dtmf&&("audio"===t.kind?this._dtmf=e.createDTMFSender(t):this._dtmf=null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};var r=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,n){var i=r.apply(this,arguments);return i||(i=t(this,e),this._senders.push(i)),i};var n=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){n.apply(this,arguments);var t=this._senders.indexOf(e);-1!==t&&this._senders.splice(t,1)}}var i=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._senders=this._senders||[],i.apply(this,[e]),e.getTracks().forEach(function(e){r._senders.push(t(r,e))})};var s=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._senders=this._senders||[],s.apply(this,[e]),e.getTracks().forEach(function(e){var r=t._senders.find(function(t){return t.track===e});r&&t._senders.splice(t._senders.indexOf(r),1)})}}else if("object"===o(e)&&e.RTCPeerConnection&&"getSenders"in e.RTCPeerConnection.prototype&&"createDTMFSender"in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)){var a=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=a.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function p(e){if(e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){var e=this,[r,n,i]=arguments;if(arguments.length>0&&"function"==typeof r)return t.apply(this,arguments);if(0===t.length&&(0===arguments.length||"function"!=typeof r))return t.apply(this,[]);var o=function(e){var t={};return e.result().forEach(function(e){var r={id:e.id,timestamp:e.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type};e.names().forEach(function(t){r[t]=e.stat(t)}),t[r.id]=r}),t},s=function(e){return new Map(Object.keys(e).map(function(t){return[t,e[t]]}))};if(arguments.length>=2){return t.apply(this,[function(e){n(s(o(e)))},r])}return new Promise(function(r,n){t.apply(e,[function(e){r(s(o(e)))},n])}).then(n,i)}}}function d(t){if("object"===o(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&t.RTCRtpReceiver){if(!("getStats"in t.RTCRtpSender.prototype)){var r=t.RTCPeerConnection.prototype.getSenders;r&&(t.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t});var n=t.RTCPeerConnection.prototype.addTrack;n&&(t.RTCPeerConnection.prototype.addTrack=function(){var e=n.apply(this,arguments);return e._pc=this,e}),t.RTCRtpSender.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!0)})}}if(!("getStats"in t.RTCRtpReceiver.prototype)){var i=t.RTCPeerConnection.prototype.getReceivers;i&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=i.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){var t=this;return this._pc.getStats().then(function(r){return e.filterStats(r,t.track,!1)})}}if("getStats"in t.RTCRtpSender.prototype&&"getStats"in t.RTCRtpReceiver.prototype){var s=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof t.MediaStreamTrack){var e,r,n,i=arguments[0];return this.getSenders().forEach(function(t){t.track===i&&(e?n=!0:e=t)}),this.getReceivers().forEach(function(e){return e.track===i&&(r?n=!0:r=e),e.track===i}),n||e&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):e?e.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return s.apply(this,arguments)}}}}function h(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(function(t){return e._shimmedLocalStreams[t][0]})};var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,r){if(!r)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};var n=t.apply(this,arguments);return this._shimmedLocalStreams[r.id]?-1===this._shimmedLocalStreams[r.id].indexOf(n)&&this._shimmedLocalStreams[r.id].push(n):this._shimmedLocalStreams[r.id]=[r,n],n};var r=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){var t=this;this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach(function(e){if(t.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")});var n=this.getSenders();r.apply(this,arguments);var i=this.getSenders().filter(function(e){return-1===n.indexOf(e)});this._shimmedLocalStreams[e.id]=[e].concat(i)};var n=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],n.apply(this,arguments)};var i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){var t=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach(function(r){var n=t._shimmedLocalStreams[r].indexOf(e);-1!==n&&t._shimmedLocalStreams[r].splice(n,1),1===t._shimmedLocalStreams[r].length&&delete t._shimmedLocalStreams[r]}),i.apply(this,arguments)}}function m(t){if(t.RTCPeerConnection){var r=e.detectBrowser(t);if(t.RTCPeerConnection.prototype.addTrack&&r.version>=65)return h(t);var n=t.RTCPeerConnection.prototype.getLocalStreams;t.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this,t=n.apply(this);return this._reverseStreams=this._reverseStreams||{},t.map(function(t){return e._reverseStreams[t.id]})};var o=t.RTCPeerConnection.prototype.addStream;t.RTCPeerConnection.prototype.addStream=function(e){var r=this;if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},e.getTracks().forEach(function(e){if(r.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[e.id]){var n=new t.MediaStream(e.getTracks());this._streams[e.id]=n,this._reverseStreams[n.id]=e,e=n}o.apply(this,[e])};var s=t.RTCPeerConnection.prototype.removeStream;t.RTCPeerConnection.prototype.removeStream=function(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},t.RTCPeerConnection.prototype.addTrack=function(e,r){var n=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");var i=[].slice.call(arguments,1);if(1!==i.length||!i[0].getTracks().find(function(t){return t===e}))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(function(t){return t.track===e}))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};var o=this._streams[r.id];if(o)o.addTrack(e),Promise.resolve().then(function(){n.dispatchEvent(new Event("negotiationneeded"))});else{var s=new t.MediaStream([e]);this._streams[r.id]=s,this._reverseStreams[s.id]=r,this.addStream(s)}return this.getSenders().find(function(t){return t.track===e})},["createOffer","createAnswer"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=i({},e,function(){var e=this,t=arguments;return arguments.length&&"function"==typeof arguments[0]?r.apply(this,[function(r){var n=p(e,r);t[0].apply(null,[n])},function(e){t[1]&&t[1].apply(null,e)},arguments[2]]):r.apply(this,arguments).then(function(t){return p(e,t)})});t.RTCPeerConnection.prototype[e]=n[e]});var a=t.RTCPeerConnection.prototype.setLocalDescription;t.RTCPeerConnection.prototype.setLocalDescription=function(){return arguments.length&&arguments[0].type?(arguments[0]=(e=this,t=arguments[0],r=t.sdp,Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(n.id,"g"),i.id)}),new RTCSessionDescription({type:t.type,sdp:r})),a.apply(this,arguments)):a.apply(this,arguments);var e,t,r};var c=Object.getOwnPropertyDescriptor(t.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(t.RTCPeerConnection.prototype,"localDescription",{get:function(){var e=c.get.apply(this);return""===e.type?e:p(this,e)}}),t.RTCPeerConnection.prototype.removeTrack=function(e){var t,r=this;if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!e._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(e._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{},Object.keys(this._streams).forEach(function(n){r._streams[n].getTracks().find(function(t){return e.track===t})&&(t=r._streams[n])}),t&&(1===t.getTracks().length?this.removeStream(this._reverseStreams[t.id]):t.removeTrack(e.track),this.dispatchEvent(new Event("negotiationneeded")))}}function p(e,t){var r=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(function(t){var n=e._reverseStreams[t],i=e._streams[n.id];r=r.replace(new RegExp(i.id,"g"),n.id)}),new RTCSessionDescription({type:t.type,sdp:r})}}function f(t){var r=e.detectBrowser(t);if(!t.RTCPeerConnection&&t.webkitRTCPeerConnection&&(t.RTCPeerConnection=t.webkitRTCPeerConnection),t.RTCPeerConnection){r.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=i({},e,function(){return arguments[0]=new("addIceCandidate"===e?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});t.RTCPeerConnection.prototype[e]=n[e]});var n=t.RTCPeerConnection.prototype.addIceCandidate;t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?r.version<78&&arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}}function u(t){e.wrapPeerConnectionEvent(t,"negotiationneeded",function(e){if("stable"===e.target.signalingState)return e})}
},{"../utils.js":"iSxC","./getusermedia":"s6SN","./getdisplaymedia":"VHa8"}],"6NZ1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.filterIceServers=t;var r=e(require("../utils"));function e(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(r,t):{};u.get||u.set?Object.defineProperty(e,t,u):e[t]=r[t]}return e.default=r,e}function t(e,t){var u=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var t=e.urls||e.url;e.url&&!e.urls&&r.deprecated("RTCIceServer.url","RTCIceServer.urls");var n="string"==typeof t;return n&&(t=[t]),t=t.filter(function(r){if(0===r.indexOf("stun:"))return!1;var e=r.startsWith("turn")&&!r.startsWith("turn:[")&&r.includes("transport=udp");return e&&!u?(u=!0,!0):e&&!u}),delete e.url,e.urls=n?t[0]:t,!!t.length}})}
},{"../utils":"iSxC"}],"YHvh":[function(require,module,exports) {
"use strict";var r={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}};r.localCName=r.generateIdentifier(),r.splitLines=function(r){return r.trim().split("\n").map(function(r){return r.trim()})},r.splitSections=function(r){return r.split("\nm=").map(function(r,e){return(e>0?"m="+r:r).trim()+"\r\n"})},r.getDescription=function(e){var t=r.splitSections(e);return t&&t[0]},r.getMediaSections=function(e){var t=r.splitSections(e);return t.shift(),t},r.matchPrefix=function(e,t){return r.splitLines(e).filter(function(r){return 0===r.indexOf(t)})},r.parseCandidate=function(r){for(var e,t={foundation:(e=0===r.indexOf("a=candidate:")?r.substring(12).split(" "):r.substring(10).split(" "))[0],component:parseInt(e[1],10),protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]},n=8;n<e.length;n+=2)switch(e[n]){case"raddr":t.relatedAddress=e[n+1];break;case"rport":t.relatedPort=parseInt(e[n+1],10);break;case"tcptype":t.tcpType=e[n+1];break;case"ufrag":t.ufrag=e[n+1],t.usernameFragment=e[n+1];break;default:t[e[n]]=e[n+1]}return t},r.writeCandidate=function(r){var e=[];e.push(r.foundation),e.push(r.component),e.push(r.protocol.toUpperCase()),e.push(r.priority),e.push(r.address||r.ip),e.push(r.port);var t=r.type;return e.push("typ"),e.push(t),"host"!==t&&r.relatedAddress&&r.relatedPort&&(e.push("raddr"),e.push(r.relatedAddress),e.push("rport"),e.push(r.relatedPort)),r.tcpType&&"tcp"===r.protocol.toLowerCase()&&(e.push("tcptype"),e.push(r.tcpType)),(r.usernameFragment||r.ufrag)&&(e.push("ufrag"),e.push(r.usernameFragment||r.ufrag)),"candidate:"+e.join(" ")},r.parseIceOptions=function(r){return r.substr(14).split(" ")},r.parseRtpMap=function(r){var e=r.substr(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=3===e.length?parseInt(e[2],10):1,t.numChannels=t.channels,t},r.writeRtpMap=function(r){var e=r.payloadType;void 0!==r.preferredPayloadType&&(e=r.preferredPayloadType);var t=r.channels||r.numChannels||1;return"a=rtpmap:"+e+" "+r.name+"/"+r.clockRate+(1!==t?"/"+t:"")+"\r\n"},r.parseExtmap=function(r){var e=r.substr(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1]}},r.writeExtmap=function(r){return"a=extmap:"+(r.id||r.preferredId)+(r.direction&&"sendrecv"!==r.direction?"/"+r.direction:"")+" "+r.uri+"\r\n"},r.parseFmtp=function(r){for(var e,t={},n=r.substr(r.indexOf(" ")+1).split(";"),a=0;a<n.length;a++)t[(e=n[a].trim().split("="))[0].trim()]=e[1];return t},r.writeFmtp=function(r){var e="",t=r.payloadType;if(void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.parameters&&Object.keys(r.parameters).length){var n=[];Object.keys(r.parameters).forEach(function(e){r.parameters[e]?n.push(e+"="+r.parameters[e]):n.push(e)}),e+="a=fmtp:"+t+" "+n.join(";")+"\r\n"}return e},r.parseRtcpFb=function(r){var e=r.substr(r.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}},r.writeRtcpFb=function(r){var e="",t=r.payloadType;return void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.rtcpFeedback&&r.rtcpFeedback.length&&r.rtcpFeedback.forEach(function(r){e+="a=rtcp-fb:"+t+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+"\r\n"}),e},r.parseSsrcMedia=function(r){var e=r.indexOf(" "),t={ssrc:parseInt(r.substr(7,e-7),10)},n=r.indexOf(":",e);return n>-1?(t.attribute=r.substr(e+1,n-e-1),t.value=r.substr(n+1)):t.attribute=r.substr(e+1),t},r.parseSsrcGroup=function(r){var e=r.substr(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(function(r){return parseInt(r,10)})}},r.getMid=function(e){var t=r.matchPrefix(e,"a=mid:")[0];if(t)return t.substr(6)},r.parseFingerprint=function(r){var e=r.substr(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1]}},r.getDtlsParameters=function(e,t){return{role:"auto",fingerprints:r.matchPrefix(e+t,"a=fingerprint:").map(r.parseFingerprint)}},r.writeDtlsParameters=function(r,e){var t="a=setup:"+e+"\r\n";return r.fingerprints.forEach(function(r){t+="a=fingerprint:"+r.algorithm+" "+r.value+"\r\n"}),t},r.getIceParameters=function(e,t){var n=r.splitLines(e);return{usernameFragment:(n=n.concat(r.splitLines(t))).filter(function(r){return 0===r.indexOf("a=ice-ufrag:")})[0].substr(12),password:n.filter(function(r){return 0===r.indexOf("a=ice-pwd:")})[0].substr(10)}},r.writeIceParameters=function(r){return"a=ice-ufrag:"+r.usernameFragment+"\r\na=ice-pwd:"+r.password+"\r\n"},r.parseRtpParameters=function(e){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=r.splitLines(e)[0].split(" "),a=3;a<n.length;a++){var s=n[a],i=r.matchPrefix(e,"a=rtpmap:"+s+" ")[0];if(i){var p=r.parseRtpMap(i),c=r.matchPrefix(e,"a=fmtp:"+s+" ");switch(p.parameters=c.length?r.parseFmtp(c[0]):{},p.rtcpFeedback=r.matchPrefix(e,"a=rtcp-fb:"+s+" ").map(r.parseRtcpFb),t.codecs.push(p),p.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(p.name.toUpperCase())}}}return r.matchPrefix(e,"a=extmap:").forEach(function(e){t.headerExtensions.push(r.parseExtmap(e))}),t},r.writeRtpDescription=function(e,t){var n="";n+="m="+e+" ",n+=t.codecs.length>0?"9":"0",n+=" UDP/TLS/RTP/SAVPF ",n+=t.codecs.map(function(r){return void 0!==r.preferredPayloadType?r.preferredPayloadType:r.payloadType}).join(" ")+"\r\n",n+="c=IN IP4 0.0.0.0\r\n",n+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach(function(e){n+=r.writeRtpMap(e),n+=r.writeFmtp(e),n+=r.writeRtcpFb(e)});var a=0;return t.codecs.forEach(function(r){r.maxptime>a&&(a=r.maxptime)}),a>0&&(n+="a=maxptime:"+a+"\r\n"),n+="a=rtcp-mux\r\n",t.headerExtensions&&t.headerExtensions.forEach(function(e){n+=r.writeExtmap(e)}),n},r.parseRtpEncodingParameters=function(e){var t,n=[],a=r.parseRtpParameters(e),s=-1!==a.fecMechanisms.indexOf("RED"),i=-1!==a.fecMechanisms.indexOf("ULPFEC"),p=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute}),c=p.length>0&&p[0].ssrc,o=r.matchPrefix(e,"a=ssrc-group:FID").map(function(r){return r.substr(17).split(" ").map(function(r){return parseInt(r,10)})});o.length>0&&o[0].length>1&&o[0][0]===c&&(t=o[0][1]),a.codecs.forEach(function(r){if("RTX"===r.name.toUpperCase()&&r.parameters.apt){var e={ssrc:c,codecPayloadType:parseInt(r.parameters.apt,10)};c&&t&&(e.rtx={ssrc:t}),n.push(e),s&&((e=JSON.parse(JSON.stringify(e))).fec={ssrc:c,mechanism:i?"red+ulpfec":"red"},n.push(e))}}),0===n.length&&c&&n.push({ssrc:c});var u=r.matchPrefix(e,"b=");return u.length&&(u=0===u[0].indexOf("b=TIAS:")?parseInt(u[0].substr(7),10):0===u[0].indexOf("b=AS:")?1e3*parseInt(u[0].substr(5),10)*.95-16e3:void 0,n.forEach(function(r){r.maxBitrate=u})),n},r.parseRtcpParameters=function(e){var t={},n=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"cname"===r.attribute})[0];n&&(t.cname=n.value,t.ssrc=n.ssrc);var a=r.matchPrefix(e,"a=rtcp-rsize");t.reducedSize=a.length>0,t.compound=0===a.length;var s=r.matchPrefix(e,"a=rtcp-mux");return t.mux=s.length>0,t},r.parseMsid=function(e){var t,n=r.matchPrefix(e,"a=msid:");if(1===n.length)return{stream:(t=n[0].substr(7).split(" "))[0],track:t[1]};var a=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(r){return"msid"===r.attribute});return a.length>0?{stream:(t=a[0].value.split(" "))[0],track:t[1]}:void 0},r.parseSctpDescription=function(e){var t,n=r.parseMLine(e),a=r.matchPrefix(e,"a=max-message-size:");a.length>0&&(t=parseInt(a[0].substr(19),10)),isNaN(t)&&(t=65536);var s=r.matchPrefix(e,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substr(12),10),protocol:n.fmt,maxMessageSize:t};if(r.matchPrefix(e,"a=sctpmap:").length>0){var i=r.matchPrefix(e,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(i[0],10),protocol:i[1],maxMessageSize:t}}},r.writeSctpDescription=function(r,e){var t=[];return t="DTLS/SCTP"!==r.protocol?["m="+r.kind+" 9 "+r.protocol+" "+e.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+e.port+"\r\n"]:["m="+r.kind+" 9 "+r.protocol+" "+e.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+e.port+" "+e.protocol+" 65535\r\n"],void 0!==e.maxMessageSize&&t.push("a=max-message-size:"+e.maxMessageSize+"\r\n"),t.join("")},r.generateSessionId=function(){return Math.random().toString().substr(2,21)},r.writeSessionBoilerplate=function(e,t,n){var a=void 0!==t?t:2;return"v=0\r\no="+(n||"thisisadapterortc")+" "+(e||r.generateSessionId())+" "+a+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},r.writeMediaSection=function(e,t,n,a){var s=r.writeRtpDescription(e.kind,t);if(s+=r.writeIceParameters(e.iceGatherer.getLocalParameters()),s+=r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":"active"),s+="a=mid:"+e.mid+"\r\n",e.direction?s+="a="+e.direction+"\r\n":e.rtpSender&&e.rtpReceiver?s+="a=sendrecv\r\n":e.rtpSender?s+="a=sendonly\r\n":e.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",e.rtpSender){var i="msid:"+a.id+" "+e.rtpSender.track.id+"\r\n";s+="a="+i,s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+i,e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+i,s+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+r.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+r.localCName+"\r\n"),s},r.getDirection=function(e,t){for(var n=r.splitLines(e),a=0;a<n.length;a++)switch(n[a]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[a].substr(2)}return t?r.getDirection(t):"sendrecv"},r.getKind=function(e){return r.splitLines(e)[0].split(" ")[0].substr(2)},r.isRejected=function(r){return"0"===r.split(" ",2)[1]},r.parseMLine=function(e){var t=r.splitLines(e)[0].substr(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}},r.parseOLine=function(e){var t=r.matchPrefix(e,"o=")[0].substr(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},r.isValidSDP=function(e){if("string"!=typeof e||0===e.length)return!1;for(var t=r.splitLines(e),n=0;n<t.length;n++)if(t[n].length<2||"="!==t[n].charAt(1))return!1;return!0},"object"==typeof module&&(module.exports=r);
},{}],"NJ2u":[function(require,module,exports) {
"use strict";var e=require("sdp");function t(e){return{inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type}function r(t,r,n,a,i){var s=e.writeRtpDescription(t.kind,r);if(s+=e.writeIceParameters(t.iceGatherer.getLocalParameters()),s+=e.writeDtlsParameters(t.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":i||"active"),s+="a=mid:"+t.mid+"\r\n",t.rtpSender&&t.rtpReceiver?s+="a=sendrecv\r\n":t.rtpSender?s+="a=sendonly\r\n":t.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",t.rtpSender){var o=t.rtpSender._initialTrackId||t.rtpSender.track.id;t.rtpSender._initialTrackId=o;var c="msid:"+(a?a.id:"-")+" "+o+"\r\n";s+="a="+c,s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" "+c,t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" "+c,s+="a=ssrc-group:FID "+t.sendEncodingParameters[0].ssrc+" "+t.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" cname:"+e.localCName+"\r\n",t.rtpSender&&t.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" cname:"+e.localCName+"\r\n"),s}function n(e,t){var r=!1;return(e=JSON.parse(JSON.stringify(e))).filter(function(e){if(e&&(e.urls||e.url)){var n=e.urls||e.url;e.url&&!e.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var a="string"==typeof n;return a&&(n=[n]),n=n.filter(function(e){return 0===e.indexOf("turn:")&&-1!==e.indexOf("transport=udp")&&-1===e.indexOf("turn:[")&&!r?(r=!0,!0):0===e.indexOf("stun:")&&t>=14393&&-1===e.indexOf("?transport=udp")}),delete e.url,e.urls=a?n[0]:n,!!n.length}})}function a(e,t){var r={codecs:[],headerExtensions:[],fecMechanisms:[]},n=function(e,t){e=parseInt(e,10);for(var r=0;r<t.length;r++)if(t[r].payloadType===e||t[r].preferredPayloadType===e)return t[r]},a=function(e,t,r,a){var i=n(e.parameters.apt,r),s=n(t.parameters.apt,a);return i&&s&&i.name.toLowerCase()===s.name.toLowerCase()};return e.codecs.forEach(function(n){for(var i=0;i<t.codecs.length;i++){var s=t.codecs[i];if(n.name.toLowerCase()===s.name.toLowerCase()&&n.clockRate===s.clockRate){if("rtx"===n.name.toLowerCase()&&n.parameters&&s.parameters.apt&&!a(n,s,e.codecs,t.codecs))continue;(s=JSON.parse(JSON.stringify(s))).numChannels=Math.min(n.numChannels,s.numChannels),r.codecs.push(s),s.rtcpFeedback=s.rtcpFeedback.filter(function(e){for(var t=0;t<n.rtcpFeedback.length;t++)if(n.rtcpFeedback[t].type===e.type&&n.rtcpFeedback[t].parameter===e.parameter)return!0;return!1});break}}}),e.headerExtensions.forEach(function(e){for(var n=0;n<t.headerExtensions.length;n++){var a=t.headerExtensions[n];if(e.uri===a.uri){r.headerExtensions.push(a);break}}}),r}function i(e,t,r){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[t][e].indexOf(r)}function s(e,t){var r=e.getRemoteCandidates().find(function(e){return t.foundation===e.foundation&&t.ip===e.ip&&t.port===e.port&&t.priority===e.priority&&t.protocol===e.protocol&&t.type===e.type});return r||e.addRemoteCandidate(t),!r}function o(e,t){var r=new Error(t);return r.name=e,r.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[e],r}module.exports=function(c,d){function p(e,t){t.addTrack(e),t.dispatchEvent(new c.MediaStreamTrackEvent("addtrack",{track:e}))}function l(e,t,r,n){var a=new Event("track");a.track=t,a.receiver=r,a.transceiver={receiver:r},a.streams=n,c.setTimeout(function(){e._dispatchEvent("track",a)})}var f=function(t){var r=this,a=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){r[e]=a[e].bind(a)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",t=JSON.parse(JSON.stringify(t||{})),this.usingBundle="max-bundle"===t.bundlePolicy,"negotiate"===t.rtcpMuxPolicy)throw o("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(t.rtcpMuxPolicy||(t.rtcpMuxPolicy="require"),t.iceTransportPolicy){case"all":case"relay":break;default:t.iceTransportPolicy="all"}switch(t.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:t.bundlePolicy="balanced"}if(t.iceServers=n(t.iceServers||[],d),this._iceGatherers=[],t.iceCandidatePoolSize)for(var i=t.iceCandidatePoolSize;i>0;i--)this._iceGatherers.push(new c.RTCIceGatherer({iceServers:t.iceServers,gatherPolicy:t.iceTransportPolicy}));else t.iceCandidatePoolSize=0;this._config=t,this.transceivers=[],this._sdpSessionId=e.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(f.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(f.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),f.prototype.onicecandidate=null,f.prototype.onaddstream=null,f.prototype.ontrack=null,f.prototype.onremovestream=null,f.prototype.onsignalingstatechange=null,f.prototype.oniceconnectionstatechange=null,f.prototype.onconnectionstatechange=null,f.prototype.onicegatheringstatechange=null,f.prototype.onnegotiationneeded=null,f.prototype.ondatachannel=null,f.prototype._dispatchEvent=function(e,t){this._isClosed||(this.dispatchEvent(t),"function"==typeof this["on"+e]&&this["on"+e](t))},f.prototype._emitGatheringStateChange=function(){var e=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",e)},f.prototype.getConfiguration=function(){return this._config},f.prototype.getLocalStreams=function(){return this.localStreams},f.prototype.getRemoteStreams=function(){return this.remoteStreams},f.prototype._createTransceiver=function(e,t){var r=this.transceivers.length>0,n={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:e,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&r)n.iceTransport=this.transceivers[0].iceTransport,n.dtlsTransport=this.transceivers[0].dtlsTransport;else{var a=this._createIceAndDtlsTransports();n.iceTransport=a.iceTransport,n.dtlsTransport=a.dtlsTransport}return t||this.transceivers.push(n),n},f.prototype.addTrack=function(e,t){if(this._isClosed)throw o("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var r;if(this.transceivers.find(function(t){return t.track===e}))throw o("InvalidAccessError","Track already exists.");for(var n=0;n<this.transceivers.length;n++)this.transceivers[n].track||this.transceivers[n].kind!==e.kind||(r=this.transceivers[n]);return r||(r=this._createTransceiver(e.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(t)&&this.localStreams.push(t),r.track=e,r.stream=t,r.rtpSender=new c.RTCRtpSender(e,r.dtlsTransport),r.rtpSender},f.prototype.addStream=function(e){var t=this;if(d>=15025)e.getTracks().forEach(function(r){t.addTrack(r,e)});else{var r=e.clone();e.getTracks().forEach(function(e,t){var n=r.getTracks()[t];e.addEventListener("enabled",function(e){n.enabled=e.enabled})}),r.getTracks().forEach(function(e){t.addTrack(e,r)})}},f.prototype.removeTrack=function(e){if(this._isClosed)throw o("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(e instanceof c.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var t=this.transceivers.find(function(t){return t.rtpSender===e});if(!t)throw o("InvalidAccessError","Sender was not created by this connection.");var r=t.stream;t.rtpSender.stop(),t.rtpSender=null,t.track=null,t.stream=null,-1===this.transceivers.map(function(e){return e.stream}).indexOf(r)&&this.localStreams.indexOf(r)>-1&&this.localStreams.splice(this.localStreams.indexOf(r),1),this._maybeFireNegotiationNeeded()},f.prototype.removeStream=function(e){var t=this;e.getTracks().forEach(function(e){var r=t.getSenders().find(function(t){return t.track===e});r&&t.removeTrack(r)})},f.prototype.getSenders=function(){return this.transceivers.filter(function(e){return!!e.rtpSender}).map(function(e){return e.rtpSender})},f.prototype.getReceivers=function(){return this.transceivers.filter(function(e){return!!e.rtpReceiver}).map(function(e){return e.rtpReceiver})},f.prototype._createIceGatherer=function(e,t){var r=this;if(t&&e>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var n=new c.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(n,"state",{value:"new",writable:!0}),this.transceivers[e].bufferedCandidateEvents=[],this.transceivers[e].bufferCandidates=function(t){var a=!t.candidate||0===Object.keys(t.candidate).length;n.state=a?"completed":"gathering",null!==r.transceivers[e].bufferedCandidateEvents&&r.transceivers[e].bufferedCandidateEvents.push(t)},n.addEventListener("localcandidate",this.transceivers[e].bufferCandidates),n},f.prototype._gather=function(t,r){var n=this,a=this.transceivers[r].iceGatherer;if(!a.onlocalcandidate){var i=this.transceivers[r].bufferedCandidateEvents;this.transceivers[r].bufferedCandidateEvents=null,a.removeEventListener("localcandidate",this.transceivers[r].bufferCandidates),a.onlocalcandidate=function(i){if(!(n.usingBundle&&r>0)){var s=new Event("icecandidate");s.candidate={sdpMid:t,sdpMLineIndex:r};var o=i.candidate,c=!o||0===Object.keys(o).length;if(c)"new"!==a.state&&"gathering"!==a.state||(a.state="completed");else{"new"===a.state&&(a.state="gathering"),o.component=1,o.ufrag=a.getLocalParameters().usernameFragment;var d=e.writeCandidate(o);s.candidate=Object.assign(s.candidate,e.parseCandidate(d)),s.candidate.candidate=d,s.candidate.toJSON=function(){return{candidate:s.candidate.candidate,sdpMid:s.candidate.sdpMid,sdpMLineIndex:s.candidate.sdpMLineIndex,usernameFragment:s.candidate.usernameFragment}}}var p=e.getMediaSections(n._localDescription.sdp);p[s.candidate.sdpMLineIndex]+=c?"a=end-of-candidates\r\n":"a="+s.candidate.candidate+"\r\n",n._localDescription.sdp=e.getDescription(n._localDescription.sdp)+p.join("");var l=n.transceivers.every(function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state});"gathering"!==n.iceGatheringState&&(n.iceGatheringState="gathering",n._emitGatheringStateChange()),c||n._dispatchEvent("icecandidate",s),l&&(n._dispatchEvent("icecandidate",new Event("icecandidate")),n.iceGatheringState="complete",n._emitGatheringStateChange())}},c.setTimeout(function(){i.forEach(function(e){a.onlocalcandidate(e)})},0)}},f.prototype._createIceAndDtlsTransports=function(){var e=this,t=new c.RTCIceTransport(null);t.onicestatechange=function(){e._updateIceConnectionState(),e._updateConnectionState()};var r=new c.RTCDtlsTransport(t);return r.ondtlsstatechange=function(){e._updateConnectionState()},r.onerror=function(){Object.defineProperty(r,"state",{value:"failed",writable:!0}),e._updateConnectionState()},{iceTransport:t,dtlsTransport:r}},f.prototype._disposeIceAndDtlsTransports=function(e){var t=this.transceivers[e].iceGatherer;t&&(delete t.onlocalcandidate,delete this.transceivers[e].iceGatherer);var r=this.transceivers[e].iceTransport;r&&(delete r.onicestatechange,delete this.transceivers[e].iceTransport);var n=this.transceivers[e].dtlsTransport;n&&(delete n.ondtlsstatechange,delete n.onerror,delete this.transceivers[e].dtlsTransport)},f.prototype._transceive=function(t,r,n){var i=a(t.localCapabilities,t.remoteCapabilities);r&&t.rtpSender&&(i.encodings=t.sendEncodingParameters,i.rtcp={cname:e.localCName,compound:t.rtcpParameters.compound},t.recvEncodingParameters.length&&(i.rtcp.ssrc=t.recvEncodingParameters[0].ssrc),t.rtpSender.send(i)),n&&t.rtpReceiver&&i.codecs.length>0&&("video"===t.kind&&t.recvEncodingParameters&&d<15019&&t.recvEncodingParameters.forEach(function(e){delete e.rtx}),t.recvEncodingParameters.length?i.encodings=t.recvEncodingParameters:i.encodings=[{}],i.rtcp={compound:t.rtcpParameters.compound},t.rtcpParameters.cname&&(i.rtcp.cname=t.rtcpParameters.cname),t.sendEncodingParameters.length&&(i.rtcp.ssrc=t.sendEncodingParameters[0].ssrc),t.rtpReceiver.receive(i))},f.prototype.setLocalDescription=function(t){var r,n,s=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setLocalDescription",t.type,s.signalingState)||s._isClosed)return Promise.reject(o("InvalidStateError","Can not set local "+t.type+" in state "+s.signalingState));if("offer"===t.type)r=e.splitSections(t.sdp),n=r.shift(),r.forEach(function(t,r){var n=e.parseRtpParameters(t);s.transceivers[r].localCapabilities=n}),s.transceivers.forEach(function(e,t){s._gather(e.mid,t)});else if("answer"===t.type){r=e.splitSections(s._remoteDescription.sdp),n=r.shift();var c=e.matchPrefix(n,"a=ice-lite").length>0;r.forEach(function(t,r){var i=s.transceivers[r],o=i.iceGatherer,d=i.iceTransport,p=i.dtlsTransport,l=i.localCapabilities,f=i.remoteCapabilities;if(!(e.isRejected(t)&&0===e.matchPrefix(t,"a=bundle-only").length)&&!i.rejected){var u=e.getIceParameters(t,n),v=e.getDtlsParameters(t,n);c&&(v.role="server"),s.usingBundle&&0!==r||(s._gather(i.mid,r),"new"===d.state&&d.start(o,u,c?"controlling":"controlled"),"new"===p.state&&p.start(v));var h=a(l,f);s._transceive(i,h.codecs.length>0,!1)}})}return s._localDescription={type:t.type,sdp:t.sdp},"offer"===t.type?s._updateSignalingState("have-local-offer"):s._updateSignalingState("stable"),Promise.resolve()},f.prototype.setRemoteDescription=function(t){var r=this;if(-1===["offer","answer"].indexOf(t.type))return Promise.reject(o("TypeError",'Unsupported type "'+t.type+'"'));if(!i("setRemoteDescription",t.type,r.signalingState)||r._isClosed)return Promise.reject(o("InvalidStateError","Can not set remote "+t.type+" in state "+r.signalingState));var n={};r.remoteStreams.forEach(function(e){n[e.id]=e});var f=[],u=e.splitSections(t.sdp),v=u.shift(),h=e.matchPrefix(v,"a=ice-lite").length>0,m=e.matchPrefix(v,"a=group:BUNDLE ").length>0;r.usingBundle=m;var g=e.matchPrefix(v,"a=ice-options:")[0];return r.canTrickleIceCandidates=!!g&&g.substr(14).split(" ").indexOf("trickle")>=0,u.forEach(function(i,o){var l=e.splitLines(i),u=e.getKind(i),g=e.isRejected(i)&&0===e.matchPrefix(i,"a=bundle-only").length,y=l[0].substr(2).split(" ")[2],S=e.getDirection(i,v),T=e.parseMsid(i),E=e.getMid(i)||e.generateIdentifier();if(g||"application"===u&&("DTLS/SCTP"===y||"UDP/DTLS/SCTP"===y))r.transceivers[o]={mid:E,kind:u,protocol:y,rejected:!0};else{var C,P,w,R,_,k,b,x,D;!g&&r.transceivers[o]&&r.transceivers[o].rejected&&(r.transceivers[o]=r._createTransceiver(u,!0));var I,L,M=e.parseRtpParameters(i);g||(I=e.getIceParameters(i,v),(L=e.getDtlsParameters(i,v)).role="client"),b=e.parseRtpEncodingParameters(i);var O=e.parseRtcpParameters(i),G=e.matchPrefix(i,"a=end-of-candidates",v).length>0,j=e.matchPrefix(i,"a=candidate:").map(function(t){return e.parseCandidate(t)}).filter(function(e){return 1===e.component});if(("offer"===t.type||"answer"===t.type)&&!g&&m&&o>0&&r.transceivers[o]&&(r._disposeIceAndDtlsTransports(o),r.transceivers[o].iceGatherer=r.transceivers[0].iceGatherer,r.transceivers[o].iceTransport=r.transceivers[0].iceTransport,r.transceivers[o].dtlsTransport=r.transceivers[0].dtlsTransport,r.transceivers[o].rtpSender&&r.transceivers[o].rtpSender.setTransport(r.transceivers[0].dtlsTransport),r.transceivers[o].rtpReceiver&&r.transceivers[o].rtpReceiver.setTransport(r.transceivers[0].dtlsTransport)),"offer"!==t.type||g){if("answer"===t.type&&!g){P=(C=r.transceivers[o]).iceGatherer,w=C.iceTransport,R=C.dtlsTransport,_=C.rtpReceiver,k=C.sendEncodingParameters,x=C.localCapabilities,r.transceivers[o].recvEncodingParameters=b,r.transceivers[o].remoteCapabilities=M,r.transceivers[o].rtcpParameters=O,j.length&&"new"===w.state&&(!h&&!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):w.setRemoteCandidates(j)),m&&0!==o||("new"===w.state&&w.start(P,I,"controlling"),"new"===R.state&&R.start(L)),!a(C.localCapabilities,C.remoteCapabilities).codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&C.sendEncodingParameters[0].rtx&&delete C.sendEncodingParameters[0].rtx,r._transceive(C,"sendrecv"===S||"recvonly"===S,"sendrecv"===S||"sendonly"===S),!_||"sendrecv"!==S&&"sendonly"!==S?delete C.rtpReceiver:(D=_.track,T?(n[T.stream]||(n[T.stream]=new c.MediaStream),p(D,n[T.stream]),f.push([D,_,n[T.stream]])):(n.default||(n.default=new c.MediaStream),p(D,n.default),f.push([D,_,n.default])))}}else{(C=r.transceivers[o]||r._createTransceiver(u)).mid=E,C.iceGatherer||(C.iceGatherer=r._createIceGatherer(o,m)),j.length&&"new"===C.iceTransport.state&&(!G||m&&0!==o?j.forEach(function(e){s(C.iceTransport,e)}):C.iceTransport.setRemoteCandidates(j)),x=c.RTCRtpReceiver.getCapabilities(u),d<15019&&(x.codecs=x.codecs.filter(function(e){return"rtx"!==e.name})),k=C.sendEncodingParameters||[{ssrc:1001*(2*o+2)}];var N,A=!1;if("sendrecv"===S||"sendonly"===S){if(A=!C.rtpReceiver,_=C.rtpReceiver||new c.RTCRtpReceiver(C.dtlsTransport,u),A)D=_.track,T&&"-"===T.stream||(T?(n[T.stream]||(n[T.stream]=new c.MediaStream,Object.defineProperty(n[T.stream],"id",{get:function(){return T.stream}})),Object.defineProperty(D,"id",{get:function(){return T.track}}),N=n[T.stream]):(n.default||(n.default=new c.MediaStream),N=n.default)),N&&(p(D,N),C.associatedRemoteMediaStreams.push(N)),f.push([D,_,N])}else C.rtpReceiver&&C.rtpReceiver.track&&(C.associatedRemoteMediaStreams.forEach(function(e){var t,r,n=e.getTracks().find(function(e){return e.id===C.rtpReceiver.track.id});n&&(t=n,(r=e).removeTrack(t),r.dispatchEvent(new c.MediaStreamTrackEvent("removetrack",{track:t})))}),C.associatedRemoteMediaStreams=[]);C.localCapabilities=x,C.remoteCapabilities=M,C.rtpReceiver=_,C.rtcpParameters=O,C.sendEncodingParameters=k,C.recvEncodingParameters=b,r._transceive(r.transceivers[o],!1,A)}}}),void 0===r._dtlsRole&&(r._dtlsRole="offer"===t.type?"active":"passive"),r._remoteDescription={type:t.type,sdp:t.sdp},"offer"===t.type?r._updateSignalingState("have-remote-offer"):r._updateSignalingState("stable"),Object.keys(n).forEach(function(e){var t=n[e];if(t.getTracks().length){if(-1===r.remoteStreams.indexOf(t)){r.remoteStreams.push(t);var a=new Event("addstream");a.stream=t,c.setTimeout(function(){r._dispatchEvent("addstream",a)})}f.forEach(function(e){var n=e[0],a=e[1];t.id===e[2].id&&l(r,n,a,[t])})}}),f.forEach(function(e){e[2]||l(r,e[0],e[1],[])}),c.setTimeout(function(){r&&r.transceivers&&r.transceivers.forEach(function(e){e.iceTransport&&"new"===e.iceTransport.state&&e.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),e.iceTransport.addRemoteCandidate({}))})},4e3),Promise.resolve()},f.prototype.close=function(){this.transceivers.forEach(function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},f.prototype._updateSignalingState=function(e){this.signalingState=e;var t=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",t)},f.prototype._maybeFireNegotiationNeeded=function(){var e=this;"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,c.setTimeout(function(){if(e.needNegotiation){e.needNegotiation=!1;var t=new Event("negotiationneeded");e._dispatchEvent("negotiationneeded",t)}},0))},f.prototype._updateIceConnectionState=function(){var e,t={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&!e.rejected&&t[e.iceTransport.state]++}),e="new",t.failed>0?e="failed":t.checking>0?e="checking":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0?e="connected":t.completed>0&&(e="completed"),e!==this.iceConnectionState){this.iceConnectionState=e;var r=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",r)}},f.prototype._updateConnectionState=function(){var e,t={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(e){e.iceTransport&&e.dtlsTransport&&!e.rejected&&(t[e.iceTransport.state]++,t[e.dtlsTransport.state]++)}),t.connected+=t.completed,e="new",t.failed>0?e="failed":t.connecting>0?e="connecting":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0&&(e="connected"),e!==this.connectionState){this.connectionState=e;var r=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",r)}},f.prototype.createOffer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createOffer after close"));var n=t.transceivers.filter(function(e){return"audio"===e.kind}).length,a=t.transceivers.filter(function(e){return"video"===e.kind}).length,i=arguments[0];if(i){if(i.mandatory||i.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==i.offerToReceiveAudio&&(n=!0===i.offerToReceiveAudio?1:!1===i.offerToReceiveAudio?0:i.offerToReceiveAudio),void 0!==i.offerToReceiveVideo&&(a=!0===i.offerToReceiveVideo?1:!1===i.offerToReceiveVideo?0:i.offerToReceiveVideo)}for(t.transceivers.forEach(function(e){"audio"===e.kind?--n<0&&(e.wantReceive=!1):"video"===e.kind&&--a<0&&(e.wantReceive=!1)});n>0||a>0;)n>0&&(t._createTransceiver("audio"),n--),a>0&&(t._createTransceiver("video"),a--);var s=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.transceivers.forEach(function(r,n){var a=r.track,i=r.kind,s=r.mid||e.generateIdentifier();r.mid=s,r.iceGatherer||(r.iceGatherer=t._createIceGatherer(n,t.usingBundle));var o=c.RTCRtpSender.getCapabilities(i);d<15019&&(o.codecs=o.codecs.filter(function(e){return"rtx"!==e.name})),o.codecs.forEach(function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1"),r.remoteCapabilities&&r.remoteCapabilities.codecs&&r.remoteCapabilities.codecs.forEach(function(t){e.name.toLowerCase()===t.name.toLowerCase()&&e.clockRate===t.clockRate&&(e.preferredPayloadType=t.payloadType)})}),o.headerExtensions.forEach(function(e){(r.remoteCapabilities&&r.remoteCapabilities.headerExtensions||[]).forEach(function(t){e.uri===t.uri&&(e.id=t.id)})});var p=r.sendEncodingParameters||[{ssrc:1001*(2*n+1)}];a&&d>=15019&&"video"===i&&!p[0].rtx&&(p[0].rtx={ssrc:p[0].ssrc+1}),r.wantReceive&&(r.rtpReceiver=new c.RTCRtpReceiver(r.dtlsTransport,i)),r.localCapabilities=o,r.sendEncodingParameters=p}),"max-compat"!==t._config.bundlePolicy&&(s+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),s+="a=ice-options:trickle\r\n",t.transceivers.forEach(function(n,a){s+=r(n,n.localCapabilities,"offer",n.stream,t._dtlsRole),s+="a=rtcp-rsize\r\n",!n.iceGatherer||"new"===t.iceGatheringState||0!==a&&t.usingBundle||(n.iceGatherer.getLocalCandidates().forEach(function(t){t.component=1,s+="a="+e.writeCandidate(t)+"\r\n"}),"completed"===n.iceGatherer.state&&(s+="a=end-of-candidates\r\n"))});var p=new c.RTCSessionDescription({type:"offer",sdp:s});return Promise.resolve(p)},f.prototype.createAnswer=function(){var t=this;if(t._isClosed)return Promise.reject(o("InvalidStateError","Can not call createAnswer after close"));if("have-remote-offer"!==t.signalingState&&"have-local-pranswer"!==t.signalingState)return Promise.reject(o("InvalidStateError","Can not call createAnswer in signalingState "+t.signalingState));var n=e.writeSessionBoilerplate(t._sdpSessionId,t._sdpSessionVersion++);t.usingBundle&&(n+="a=group:BUNDLE "+t.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),n+="a=ice-options:trickle\r\n";var i=e.getMediaSections(t._remoteDescription.sdp).length;t.transceivers.forEach(function(e,s){if(!(s+1>i)){if(e.rejected)return"application"===e.kind?"DTLS/SCTP"===e.protocol?n+="m=application 0 DTLS/SCTP 5000\r\n":n+="m=application 0 "+e.protocol+" webrtc-datachannel\r\n":"audio"===e.kind?n+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===e.kind&&(n+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(n+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+e.mid+"\r\n");var o;if(e.stream)"audio"===e.kind?o=e.stream.getAudioTracks()[0]:"video"===e.kind&&(o=e.stream.getVideoTracks()[0]),o&&d>=15019&&"video"===e.kind&&!e.sendEncodingParameters[0].rtx&&(e.sendEncodingParameters[0].rtx={ssrc:e.sendEncodingParameters[0].ssrc+1});var c=a(e.localCapabilities,e.remoteCapabilities);!c.codecs.filter(function(e){return"rtx"===e.name.toLowerCase()}).length&&e.sendEncodingParameters[0].rtx&&delete e.sendEncodingParameters[0].rtx,n+=r(e,c,"answer",e.stream,t._dtlsRole),e.rtcpParameters&&e.rtcpParameters.reducedSize&&(n+="a=rtcp-rsize\r\n")}});var s=new c.RTCSessionDescription({type:"answer",sdp:n});return Promise.resolve(s)},f.prototype.addIceCandidate=function(t){var r,n=this;return t&&void 0===t.sdpMLineIndex&&!t.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(a,i){if(!n._remoteDescription)return i(o("InvalidStateError","Can not add ICE candidate without a remote description"));if(t&&""!==t.candidate){var c=t.sdpMLineIndex;if(t.sdpMid)for(var d=0;d<n.transceivers.length;d++)if(n.transceivers[d].mid===t.sdpMid){c=d;break}var p=n.transceivers[c];if(!p)return i(o("OperationError","Can not add ICE candidate"));if(p.rejected)return a();var l=Object.keys(t.candidate).length>0?e.parseCandidate(t.candidate):{};if("tcp"===l.protocol&&(0===l.port||9===l.port))return a();if(l.component&&1!==l.component)return a();if((0===c||c>0&&p.iceTransport!==n.transceivers[0].iceTransport)&&!s(p.iceTransport,l))return i(o("OperationError","Can not add ICE candidate"));var f=t.candidate.trim();0===f.indexOf("a=")&&(f=f.substr(2)),(r=e.getMediaSections(n._remoteDescription.sdp))[c]+="a="+(l.type?f:"end-of-candidates")+"\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join("")}else for(var u=0;u<n.transceivers.length&&(n.transceivers[u].rejected||(n.transceivers[u].iceTransport.addRemoteCandidate({}),(r=e.getMediaSections(n._remoteDescription.sdp))[u]+="a=end-of-candidates\r\n",n._remoteDescription.sdp=e.getDescription(n._remoteDescription.sdp)+r.join(""),!n.usingBundle));u++);a()})},f.prototype.getStats=function(e){if(e&&e instanceof c.MediaStreamTrack){var t=null;if(this.transceivers.forEach(function(r){r.rtpSender&&r.rtpSender.track===e?t=r.rtpSender:r.rtpReceiver&&r.rtpReceiver.track===e&&(t=r.rtpReceiver)}),!t)throw o("InvalidAccessError","Invalid selector.");return t.getStats()}var r=[];return this.transceivers.forEach(function(e){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(t){e[t]&&r.push(e[t].getStats())})}),Promise.all(r).then(function(e){var t=new Map;return e.forEach(function(e){e.forEach(function(e){t.set(e.id,e)})}),t})};["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach(function(e){var r=c[e];if(r&&r.prototype&&r.prototype.getStats){var n=r.prototype.getStats;r.prototype.getStats=function(){return n.apply(this).then(function(e){var r=new Map;return Object.keys(e).forEach(function(n){e[n].type=t(e[n]),r.set(n,e[n])}),r})}}});var u=["createOffer","createAnswer"];return u.forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[0]||"function"==typeof e[1]?t.apply(this,[arguments[2]]).then(function(t){"function"==typeof e[0]&&e[0].apply(null,[t])},function(t){"function"==typeof e[1]&&e[1].apply(null,[t])}):t.apply(this,arguments)}}),(u=["setLocalDescription","setRemoteDescription","addIceCandidate"]).forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]||"function"==typeof e[2]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)},function(t){"function"==typeof e[2]&&e[2].apply(null,[t])}):t.apply(this,arguments)}}),["getStats"].forEach(function(e){var t=f.prototype[e];f.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]?t.apply(this,arguments).then(function(){"function"==typeof e[1]&&e[1].apply(null)}):t.apply(this,arguments)}}),f};
},{"sdp":"YHvh"}],"YdKx":[function(require,module,exports) {
"use strict";function e(e){var r=e&&e.navigator,t=r.mediaDevices.getUserMedia.bind(r.mediaDevices);r.mediaDevices.getUserMedia=function(e){return t(e).catch(function(e){return Promise.reject(function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}}(e))})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=e;
},{}],"5P3b":[function(require,module,exports) {
"use strict";function e(e){"getDisplayMedia"in e.navigator&&e.navigator.mediaDevices&&(e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||(e.navigator.mediaDevices.getDisplayMedia=e.navigator.getDisplayMedia.bind(e.navigator)))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"XRic":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimPeerConnection=c,exports.shimReplaceTrack=p,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return n.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return i.shimGetDisplayMedia}});var e=s(require("../utils")),r=require("./filtericeservers"),t=o(require("rtcpeerconnection-shim")),n=require("./getusermedia"),i=require("./getdisplaymedia");function o(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};n.get||n.set?Object.defineProperty(r,t,n):r[t]=e[t]}return r.default=e,r}function c(n){var i=e.detectBrowser(n);if(n.RTCIceGatherer&&(n.RTCIceCandidate||(n.RTCIceCandidate=function(e){return e}),n.RTCSessionDescription||(n.RTCSessionDescription=function(e){return e}),i.version<15025)){var o=Object.getOwnPropertyDescriptor(n.MediaStreamTrack.prototype,"enabled");Object.defineProperty(n.MediaStreamTrack.prototype,"enabled",{set:function(e){o.set.call(this,e);var r=new Event("enabled");r.enabled=e,this.dispatchEvent(r)}})}!n.RTCRtpSender||"dtmf"in n.RTCRtpSender.prototype||Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=new n.RTCDtmfSender(this):"video"===this.track.kind&&(this._dtmf=null)),this._dtmf}}),n.RTCDtmfSender&&!n.RTCDTMFSender&&(n.RTCDTMFSender=n.RTCDtmfSender);var s=(0,t.default)(n,i.version);n.RTCPeerConnection=function(t){return t&&t.iceServers&&(t.iceServers=(0,r.filterIceServers)(t.iceServers,i.version),e.log("ICE servers after filtering:",t.iceServers)),new s(t)},n.RTCPeerConnection.prototype=s.prototype}function p(e){!e.RTCRtpSender||"replaceTrack"in e.RTCRtpSender.prototype||(e.RTCRtpSender.prototype.replaceTrack=e.RTCRtpSender.prototype.setTrack)}
},{"../utils":"iSxC","./filtericeservers":"6NZ1","rtcpeerconnection-shim":"NJ2u","./getusermedia":"YdKx","./getdisplaymedia":"5P3b"}],"/GzS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetUserMedia=r;var e=t(require("../utils"));function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){var r=e.detectBrowser(t),i=t&&t.navigator,n=t&&t.MediaStreamTrack;if(i.getUserMedia=function(t,o,r){e.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),i.mediaDevices.getUserMedia(t).then(o,r)},!(r.version>55&&"autoGainControl"in i.mediaDevices.getSupportedConstraints())){var s=function(e,t,o){t in e&&!(o in e)&&(e[o]=e[t],delete e[t])},a=i.mediaDevices.getUserMedia.bind(i.mediaDevices);if(i.mediaDevices.getUserMedia=function(e){return"object"===o(e)&&"object"===o(e.audio)&&(e=JSON.parse(JSON.stringify(e)),s(e.audio,"autoGainControl","mozAutoGainControl"),s(e.audio,"noiseSuppression","mozNoiseSuppression")),a(e)},n&&n.prototype.getSettings){var p=n.prototype.getSettings;n.prototype.getSettings=function(){var e=p.apply(this,arguments);return s(e,"mozAutoGainControl","autoGainControl"),s(e,"mozNoiseSuppression","noiseSuppression"),e}}if(n&&n.prototype.applyConstraints){var u=n.prototype.applyConstraints;n.prototype.applyConstraints=function(e){return"audio"===this.kind&&"object"===o(e)&&(e=JSON.parse(JSON.stringify(e)),s(e,"autoGainControl","mozAutoGainControl"),s(e,"noiseSuppression","mozNoiseSuppression")),u.apply(this,[e])}}}}
},{"../utils":"iSxC"}],"UuGU":[function(require,module,exports) {
"use strict";function e(e,i){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&(e.navigator.mediaDevices.getDisplayMedia=function(a){if(!a||!a.video){var t=new DOMException("getDisplayMedia without video constraints is undefined");return t.name="NotFoundError",t.code=8,Promise.reject(t)}return!0===a.video?a.video={mediaSource:i}:a.video.mediaSource=i,e.navigator.mediaDevices.getUserMedia(a)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimGetDisplayMedia=e;
},{}],"Fzdr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimOnTrack=a,exports.shimPeerConnection=c,exports.shimSenderGetStats=s,exports.shimReceiverGetStats=p,exports.shimRemoveStream=u,exports.shimRTCDataChannel=C,exports.shimAddTransceiver=f,exports.shimCreateOffer=d,exports.shimCreateAnswer=y,Object.defineProperty(exports,"shimGetUserMedia",{enumerable:!0,get:function(){return t.shimGetUserMedia}}),Object.defineProperty(exports,"shimGetDisplayMedia",{enumerable:!0,get:function(){return r.shimGetDisplayMedia}});var e=n(require("../utils")),t=require("./getusermedia"),r=require("./getdisplaymedia");function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){"object"===i(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function c(t){var r=e.detectBrowser(t);if("object"===i(t)&&(t.RTCPeerConnection||t.mozRTCPeerConnection)){if(!t.RTCPeerConnection&&t.mozRTCPeerConnection&&(t.RTCPeerConnection=t.mozRTCPeerConnection),r.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var r=t.RTCPeerConnection.prototype[e],n=o({},e,function(){return arguments[0]=new("addIceCandidate"===e?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)});t.RTCPeerConnection.prototype[e]=n[e]}),r.version<68){var n=t.RTCPeerConnection.prototype.addIceCandidate;t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}var a={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},c=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){var[e,t,n]=arguments;return c.apply(this,[e||null]).then(function(e){if(r.version<53&&!t)try{e.forEach(function(e){e.type=a[e.type]||e.type})}catch(n){if("TypeError"!==n.name)throw n;e.forEach(function(t,r){e.set(r,Object.assign({},t,{type:a[t.type]||t.type}))})}return e}).then(t,n)}}}function s(e){if("object"===i(e)&&e.RTCPeerConnection&&e.RTCRtpSender&&!(e.RTCRtpSender&&"getStats"in e.RTCRtpSender.prototype)){var t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,r=t.apply(this,[]);return r.forEach(function(t){return t._pc=e}),r});var r=e.RTCPeerConnection.prototype.addTrack;r&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=r.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}}function p(t){if("object"===i(t)&&t.RTCPeerConnection&&t.RTCRtpSender&&!(t.RTCRtpSender&&"getStats"in t.RTCRtpReceiver.prototype)){var r=t.RTCPeerConnection.prototype.getReceivers;r&&(t.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=r.apply(this,[]);return t.forEach(function(t){return t._pc=e}),t}),e.wrapPeerConnectionEvent(t,"track",function(e){return e.receiver._pc=e.srcElement,e}),t.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}}function u(t){!t.RTCPeerConnection||"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(t){var r=this;e.deprecated("removeStream","removeTrack"),this.getSenders().forEach(function(e){e.track&&t.getTracks().includes(e.track)&&r.removeTrack(e)})})}function C(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)}function f(e){if("object"===i(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.addTransceiver;t&&(e.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];var e=arguments[1],r=e&&"sendEncodings"in e;r&&e.sendEncodings.forEach(function(e){if("rid"in e){if(!/^[a-z0-9]{0,16}$/i.test(e.rid))throw new TypeError("Invalid RID value provided.")}if("scaleResolutionDownBy"in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in e&&!(parseFloat(e.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});var n=t.apply(this,arguments);if(r){var{sender:o}=n,i=o.getParameters();"encodings"in i||(i.encodings=e.sendEncodings,this.setParametersPromises.push(o.setParameters(i).catch(function(){})))}return n})}}function d(e){if("object"===i(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(){var e=this,r=arguments;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(e,r)}).finally(function(){e.setParametersPromises=[]}):t.apply(this,arguments)}}}function y(e){if("object"===i(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createAnswer;e.RTCPeerConnection.prototype.createAnswer=function(){var e=this,r=arguments;return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(function(){return t.apply(e,r)}).finally(function(){e.setParametersPromises=[]}):t.apply(this,arguments)}}}
},{"../utils":"iSxC","./getusermedia":"/GzS","./getdisplaymedia":"UuGU"}],"t1lL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimLocalStreamsAPI=o,exports.shimRemoteStreamsAPI=i,exports.shimCallbacksAPI=n,exports.shimGetUserMedia=s,exports.shimConstraints=a,exports.shimRTCIceServerUrls=c,exports.shimTrackEventTransceiver=d,exports.shimCreateOfferLegacy=p;var e=t(require("../utils"));function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){if("object"===r(e)&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){var r=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach(function(o){return t.call(r,o,e)}),e.getVideoTracks().forEach(function(o){return t.call(r,o,e)})},e.RTCPeerConnection.prototype.addTrack=function(e){var r=arguments[1];return r&&(this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]),t.apply(this,arguments)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._localStreams||(this._localStreams=[]);var r=this._localStreams.indexOf(e);if(-1!==r){this._localStreams.splice(r,1);var o=e.getTracks();this.getSenders().forEach(function(e){o.includes(e.track)&&t.removeTrack(e)})}})}}function i(e){if("object"===r(e)&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(e){var t=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=function(e){e.streams.forEach(function(e){if(t._remoteStreams||(t._remoteStreams=[]),!t._remoteStreams.includes(e)){t._remoteStreams.push(e);var r=new Event("addstream");r.stream=e,t.dispatchEvent(r)}})})}});var t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach(function(t){if(e._remoteStreams||(e._remoteStreams=[]),!(e._remoteStreams.indexOf(t)>=0)){e._remoteStreams.push(t);var r=new Event("addstream");r.stream=t,e.dispatchEvent(r)}})}),t.apply(e,arguments)}}}function n(e){if("object"===r(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype,o=t.createOffer,i=t.createAnswer,n=t.setLocalDescription,s=t.setRemoteDescription,a=t.addIceCandidate;t.createOffer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],i=o.apply(this,[r]);return t?(i.then(e,t),Promise.resolve()):i},t.createAnswer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],o=i.apply(this,[r]);return t?(o.then(e,t),Promise.resolve()):o};var c=function(e,t,r){var o=n.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o};t.setLocalDescription=c,c=function(e,t,r){var o=s.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.setRemoteDescription=c,c=function(e,t,r){var o=a.apply(this,[e]);return r?(o.then(t,r),Promise.resolve()):o},t.addIceCandidate=c}}function s(e){var t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){var r=t.mediaDevices,o=r.getUserMedia.bind(r);t.mediaDevices.getUserMedia=function(e){return o(a(e))}}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,r,o){t.mediaDevices.getUserMedia(e).then(r,o)}.bind(t))}function a(t){return t&&void 0!==t.video?Object.assign({},t,{video:e.compactObject(t.video)}):t}function c(t){var r=t.RTCPeerConnection;t.RTCPeerConnection=function(t,o){if(t&&t.iceServers){for(var i=[],n=0;n<t.iceServers.length;n++){var s=t.iceServers[n];!s.hasOwnProperty("urls")&&s.hasOwnProperty("url")?(e.deprecated("RTCIceServer.url","RTCIceServer.urls"),(s=JSON.parse(JSON.stringify(s))).urls=s.url,delete s.url,i.push(s)):i.push(t.iceServers[n])}t.iceServers=i}return new r(t,o)},t.RTCPeerConnection.prototype=r.prototype,"generateCertificate"in t.RTCPeerConnection&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get:function(){return r.generateCertificate}})}function d(e){"object"===r(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function p(e){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){if(e){void 0!==e.offerToReceiveAudio&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);var r=this.getTransceivers().find(function(e){return"audio"===e.receiver.track.kind});!1===e.offerToReceiveAudio&&r?"sendrecv"===r.direction?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":"recvonly"===r.direction&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):!0!==e.offerToReceiveAudio||r||this.addTransceiver("audio"),void 0!==e.offerToReceiveVideo&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);var o=this.getTransceivers().find(function(e){return"video"===e.receiver.track.kind});!1===e.offerToReceiveVideo&&o?"sendrecv"===o.direction?o.setDirection?o.setDirection("sendonly"):o.direction="sendonly":"recvonly"===o.direction&&(o.setDirection?o.setDirection("inactive"):o.direction="inactive"):!0!==e.offerToReceiveVideo||o||this.addTransceiver("video")}return t.apply(this,arguments)}}
},{"../utils":"iSxC"}],"GOQK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shimRTCIceCandidate=i,exports.shimMaxMessageSize=a,exports.shimSendThrowTypeError=c,exports.shimConnectionState=s,exports.removeAllowExtmapMixed=p;var e=o(require("sdp")),t=n(require("./utils"));function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(n){if(n.RTCIceCandidate&&!(n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)){var o=n.RTCIceCandidate;n.RTCIceCandidate=function(t){if("object"===r(t)&&t.candidate&&0===t.candidate.indexOf("a=")&&((t=JSON.parse(JSON.stringify(t))).candidate=t.candidate.substr(2)),t.candidate&&t.candidate.length){var n=new o(t),i=e.default.parseCandidate(t.candidate),a=Object.assign(n,i);return a.toJSON=function(){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,usernameFragment:a.usernameFragment}},a}return new o(t)},n.RTCIceCandidate.prototype=o.prototype,t.wrapPeerConnectionEvent(n,"icecandidate",function(e){return e.candidate&&Object.defineProperty(e,"candidate",{value:new n.RTCIceCandidate(e.candidate),writable:"false"}),e})}}function a(n){if(n.RTCPeerConnection){var o=t.detectBrowser(n);"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp}});var r=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,"chrome"===o.browser&&o.version>=76){var{sdpSemantics:t}=this.getConfiguration();"plan-b"===t&&Object.defineProperty(this,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp},enumerable:!0,configurable:!0})}if(function(t){if(!t||!t.sdp)return!1;var n=e.default.splitSections(t.sdp);return n.shift(),n.some(function(t){var n=e.default.parseMLine(t);return n&&"application"===n.kind&&-1!==n.protocol.indexOf("SCTP")})}(arguments[0])){var n,i=function(e){var t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(null===t||t.length<2)return-1;var n=parseInt(t[1],10);return n!=n?-1:n}(arguments[0]),a=(p=i,d=65536,"firefox"===o.browser&&(d=o.version<57?-1===p?16384:2147483637:o.version<60?57===o.version?65535:65536:2147483637),d),c=function(t,n){var r=65536;"firefox"===o.browser&&57===o.version&&(r=65535);var i=e.default.matchPrefix(t.sdp,"a=max-message-size:");return i.length>0?r=parseInt(i[0].substr(19),10):"firefox"===o.browser&&-1!==n&&(r=2147483637),r}(arguments[0],i);n=0===a&&0===c?Number.POSITIVE_INFINITY:0===a||0===c?Math.max(a,c):Math.min(a,c);var s={};Object.defineProperty(s,"maxMessageSize",{get:function(){return n}}),this._sctp=s}var p,d;return r.apply(this,arguments)}}}function c(e){if(e.RTCPeerConnection&&"createDataChannel"in e.RTCPeerConnection.prototype){var n=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function(){var e=n.apply(this,arguments);return o(e,this),e},t.wrapPeerConnectionEvent(e,"datachannel",function(e){return o(e.channel,e.target),e})}function o(e,t){var n=e.send;e.send=function(){var o=arguments[0],r=o.length||o.size||o.byteLength;if("open"===e.readyState&&t.sctp&&r>t.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+t.sctp.maxMessageSize+" bytes)");return n.apply(e,arguments)}}}function s(e){if(e.RTCPeerConnection&&!("connectionState"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get:function(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get:function(){return this._onconnectionstatechange||null},set:function(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(function(e){var n=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=function(e){var t=e.target;if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState;var n=new Event("connectionstatechange",e);t.dispatchEvent(n)}return e},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}}function p(e){if(e.RTCPeerConnection){var n=t.detectBrowser(e);if(!("chrome"===n.browser&&n.version>=71)){var o=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(e){return e&&e.sdp&&-1!==e.sdp.indexOf("\na=extmap-allow-mixed")&&(e.sdp=e.sdp.split("\n").filter(function(e){return"a=extmap-allow-mixed"!==e.trim()}).join("\n")),o.apply(this,arguments)}}}}
},{"sdp":"YHvh","./utils":"iSxC"}],"KtlG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.adapterFactory=h;var e=m(require("./utils")),i=m(require("./chrome/chrome_shim")),r=m(require("./edge/edge_shim")),s=m(require("./firefox/firefox_shim")),a=m(require("./safari/safari_shim")),t=m(require("./common_shim"));function m(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};s.get||s.set?Object.defineProperty(i,r,s):i[r]=e[r]}return i.default=e,i}function h(){var{window:m}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0},o=e.log,n=e.detectBrowser(m),d={browserDetails:n,commonShim:t,extractVersion:e.extractVersion,disableLog:e.disableLog,disableWarnings:e.disableWarnings};switch(n.browser){case"chrome":if(!i||!i.shimPeerConnection||!h.shimChrome)return o("Chrome shim is not included in this adapter release."),d;o("adapter.js shimming chrome."),d.browserShim=i,i.shimGetUserMedia(m),i.shimMediaStream(m),i.shimPeerConnection(m),i.shimOnTrack(m),i.shimAddTrackRemoveTrack(m),i.shimGetSendersWithDtmf(m),i.shimGetStats(m),i.shimSenderReceiverGetStats(m),i.fixNegotiationNeeded(m),t.shimRTCIceCandidate(m),t.shimConnectionState(m),t.shimMaxMessageSize(m),t.shimSendThrowTypeError(m),t.removeAllowExtmapMixed(m);break;case"firefox":if(!s||!s.shimPeerConnection||!h.shimFirefox)return o("Firefox shim is not included in this adapter release."),d;o("adapter.js shimming firefox."),d.browserShim=s,s.shimGetUserMedia(m),s.shimPeerConnection(m),s.shimOnTrack(m),s.shimRemoveStream(m),s.shimSenderGetStats(m),s.shimReceiverGetStats(m),s.shimRTCDataChannel(m),s.shimAddTransceiver(m),s.shimCreateOffer(m),s.shimCreateAnswer(m),t.shimRTCIceCandidate(m),t.shimConnectionState(m),t.shimMaxMessageSize(m),t.shimSendThrowTypeError(m);break;case"edge":if(!r||!r.shimPeerConnection||!h.shimEdge)return o("MS edge shim is not included in this adapter release."),d;o("adapter.js shimming edge."),d.browserShim=r,r.shimGetUserMedia(m),r.shimGetDisplayMedia(m),r.shimPeerConnection(m),r.shimReplaceTrack(m),t.shimMaxMessageSize(m),t.shimSendThrowTypeError(m);break;case"safari":if(!a||!h.shimSafari)return o("Safari shim is not included in this adapter release."),d;o("adapter.js shimming safari."),d.browserShim=a,a.shimRTCIceServerUrls(m),a.shimCreateOfferLegacy(m),a.shimCallbacksAPI(m),a.shimLocalStreamsAPI(m),a.shimRemoteStreamsAPI(m),a.shimTrackEventTransceiver(m),a.shimGetUserMedia(m),t.shimRTCIceCandidate(m),t.shimMaxMessageSize(m),t.shimSendThrowTypeError(m),t.removeAllowExtmapMixed(m);break;default:o("Unsupported browser!")}return d}
},{"./utils":"iSxC","./chrome/chrome_shim":"uI5X","./edge/edge_shim":"XRic","./firefox/firefox_shim":"Fzdr","./safari/safari_shim":"t1lL","./common_shim":"GOQK"}],"tI1X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./adapter_factory.js"),r=(0,e.adapterFactory)({window:window}),t=r;exports.default=t;
},{"./adapter_factory.js":"KtlG"}],"sXtV":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("webrtc-adapter"));exports.webRTCAdapter=t.default;
},{"webrtc-adapter":"tI1X"}],"I+31":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./adapter");exports.Supports=new(function(){function e(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}return e.prototype.isWebRTCSupported=function(){return"undefined"!=typeof RTCPeerConnection},e.prototype.isBrowserSupported=function(){var r=this.getBrowser(),e=this.getVersion();return!!this.supportedBrowsers.includes(r)&&("chrome"===r?e>=this.minChromeVersion:"firefox"===r?e>=this.minFirefoxVersion:"safari"===r&&(!this.isIOS&&e>=this.minSafariVersion))},e.prototype.getBrowser=function(){return r.webRTCAdapter.browserDetails.browser},e.prototype.getVersion=function(){return r.webRTCAdapter.browserDetails.version||0},e.prototype.isUnifiedPlanSupported=function(){var e,i=this.getBrowser(),t=r.webRTCAdapter.browserDetails.version||0;if("chrome"===i&&t<72)return!1;if("firefox"===i&&t>=59)return!0;if(!(window.RTCRtpTransceiver&&"currentDirection"in RTCRtpTransceiver.prototype))return!1;var o=!1;try{(e=new RTCPeerConnection).addTransceiver("audio"),o=!0}catch(n){}finally{e&&e.close()}return o},e.prototype.toString=function(){return"Supports: \n    browser:"+this.getBrowser()+" \n    version:"+this.getVersion()+" \n    isIOS:"+this.isIOS+" \n    isWebRTCSupported:"+this.isWebRTCSupported()+" \n    isBrowserSupported:"+this.isBrowserSupported()+" \n    isUnifiedPlanSupported:"+this.isUnifiedPlanSupported()},e}());
},{"./adapter":"sXtV"}],"BHXf":[function(require,module,exports) {
"use strict";var r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(null!=r)for(var e in r)Object.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t.default=r,t};Object.defineProperty(exports,"__esModule",{value:!0});var t=r(require("peerjs-js-binarypack")),e=require("./supports"),o={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};exports.util=new(function(){function r(){this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=o,this.browser=e.Supports.getBrowser(),this.browserVersion=e.Supports.getVersion(),this.supports=function(){var r,t={browser:e.Supports.isBrowserSupported(),webRTC:e.Supports.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;try{r=new RTCPeerConnection(o),t.audioVideo=!0;var n=void 0;try{n=r.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!n.ordered;try{n.binaryType="blob",t.binaryBlob=!e.Supports.isIOS}catch(a){}}catch(a){}finally{n&&n.close()}}catch(a){}finally{r&&r.close()}return t}(),this.pack=t.pack,this.unpack=t.unpack,this._dataCount=1}return r.prototype.noop=function(){},r.prototype.validateId=function(r){return!r||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(r)},r.prototype.chunk=function(r){for(var t=[],e=r.size,o=Math.ceil(e/exports.util.chunkedMTU),n=0,a=0;a<e;){var i=Math.min(e,a+exports.util.chunkedMTU),s=r.slice(a,i),u={__peerData:this._dataCount,n:n,data:s,total:o};t.push(u),a=i,n++}return this._dataCount++,t},r.prototype.blobToArrayBuffer=function(r,t){var e=new FileReader;return e.onload=function(r){r.target&&t(r.target.result)},e.readAsArrayBuffer(r),e},r.prototype.binaryStringToArrayBuffer=function(r){for(var t=new Uint8Array(r.length),e=0;e<r.length;e++)t[e]=255&r.charCodeAt(e);return t.buffer},r.prototype.randomToken=function(){return Math.random().toString(36).substr(2)},r.prototype.isSecure=function(){return"https:"===location.protocol},r}());
},{"peerjs-js-binarypack":"kdPp","./supports":"I+31"}],"2JJl":[function(require,module,exports) {
"use strict";var e=Object.prototype.hasOwnProperty,t="~";function n(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,n,o,s,i){if("function"!=typeof o)throw new TypeError("The listener must be a function");var c=new r(o,s||e,i),f=t?t+n:n;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function i(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(t=!1)),i.prototype.eventNames=function(){var n,r,o=[];if(0===this._eventsCount)return o;for(r in n=this._events)e.call(n,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(n)):o},i.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,i=new Array(s);o<s;o++)i[o]=r[o].fn;return i},i.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},i.prototype.emit=function(e,n,r,o,s,i){var c=t?t+e:e;if(!this._events[c])return!1;var f,u,a=this._events[c],l=arguments.length;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,n),!0;case 3:return a.fn.call(a.context,n,r),!0;case 4:return a.fn.call(a.context,n,r,o),!0;case 5:return a.fn.call(a.context,n,r,o,s),!0;case 6:return a.fn.call(a.context,n,r,o,s,i),!0}for(u=1,f=new Array(l-1);u<l;u++)f[u-1]=arguments[u];a.fn.apply(a.context,f)}else{var v,h=a.length;for(u=0;u<h;u++)switch(a[u].once&&this.removeListener(e,a[u].fn,void 0,!0),l){case 1:a[u].fn.call(a[u].context);break;case 2:a[u].fn.call(a[u].context,n);break;case 3:a[u].fn.call(a[u].context,n,r);break;case 4:a[u].fn.call(a[u].context,n,r,o);break;default:if(!f)for(v=1,f=new Array(l-1);v<l;v++)f[v-1]=arguments[v];a[u].fn.apply(a[u].context,f)}}return!0},i.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},i.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},i.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return s(this,i),this;var c=this._events[i];if(c.fn)c.fn!==n||o&&!c.once||r&&c.context!==r||s(this,i);else{for(var f=0,u=[],a=c.length;f<a;f++)(c[f].fn!==n||o&&!c[f].once||r&&c[f].context!==r)&&u.push(c[f]);u.length?this._events[i]=1===u.length?u[0]:u:s(this,i)}return this},i.prototype.removeAllListeners=function(e){var r;return e?(r=t?t+e:e,this._events[r]&&s(this,r)):(this._events=new n,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=t,i.EventEmitter=i,"undefined"!=typeof module&&(module.exports=i);
},{}],"8WOs":[function(require,module,exports) {
"use strict";var r=this&&this.__read||function(r,e){var o="function"==typeof Symbol&&r[Symbol.iterator];if(!o)return r;var t,n,l=o.call(r),i=[];try{for(;(void 0===e||e-- >0)&&!(t=l.next()).done;)i.push(t.value)}catch(s){n={error:s}}finally{try{t&&!t.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return i},e=this&&this.__spread||function(){for(var e=[],o=0;o<arguments.length;o++)e=e.concat(r(arguments[o]));return e};Object.defineProperty(exports,"__esModule",{value:!0});var o,t="PeerJS: ";!function(r){r[r.Disabled=0]="Disabled",r[r.Errors=1]="Errors",r[r.Warnings=2]="Warnings",r[r.All=3]="All"}(o=exports.LogLevel||(exports.LogLevel={}));var n=function(){function r(){this._logLevel=o.Disabled}return Object.defineProperty(r.prototype,"logLevel",{get:function(){return this._logLevel},set:function(r){this._logLevel=r},enumerable:!0,configurable:!0}),r.prototype.log=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.All&&this._print.apply(this,e([o.All],r))},r.prototype.warn=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.Warnings&&this._print.apply(this,e([o.Warnings],r))},r.prototype.error=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this._logLevel>=o.Errors&&this._print.apply(this,e([o.Errors],r))},r.prototype.setLogFunction=function(r){this._print=r},r.prototype._print=function(r){for(var n=[],l=1;l<arguments.length;l++)n[l-1]=arguments[l];var i=e([t],n);for(var s in i)i[s]instanceof Error&&(i[s]="("+i[s].name+") "+i[s].message);r>=o.All?console.log.apply(console,e(i)):r>=o.Warnings?console.warn.apply(console,e(["WARNING"],i)):r>=o.Errors&&console.error.apply(console,e(["ERROR"],i))},r}();exports.default=new n;
},{}],"9ZRY":[function(require,module,exports) {
"use strict";var e,r,n,o,t,a,i;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.Open="open",e.Stream="stream",e.Data="data",e.Close="close",e.Error="error",e.IceStateChanged="iceStateChanged"}(e=exports.ConnectionEventType||(exports.ConnectionEventType={})),function(e){e.Data="data",e.Media="media"}(r=exports.ConnectionType||(exports.ConnectionType={})),function(e){e.Open="open",e.Close="close",e.Connection="connection",e.Call="call",e.Disconnected="disconnected",e.Error="error"}(n=exports.PeerEventType||(exports.PeerEventType={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(o=exports.PeerErrorType||(exports.PeerErrorType={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json"}(t=exports.SerializationType||(exports.SerializationType={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(a=exports.SocketEventType||(exports.SocketEventType={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE"}(i=exports.ServerMessageType||(exports.ServerMessageType={}));
},{}],"wJlv":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function s(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(s.prototype=r.prototype,new s)}}(),t=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var s,n,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(s=o.next()).done;)i.push(s.value)}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i},r=this&&this.__spread||function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(t(arguments[r]));return e},s=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],s=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("eventemitter3"),i=n(require("./logger")),a=require("./enums"),c=function(t){function n(e,r,s,n,o,i){void 0===i&&(i=5e3);var a=t.call(this)||this;a.pingInterval=i,a._disconnected=!1,a._messagesQueue=[];var c=e?"wss://":"ws://";return a._wsUrl=c+r+":"+s+n+"peerjs?key="+o,a}return e(n,t),n.prototype.start=function(e,t){this._id=e,this._wsUrl+="&id="+e+"&token="+t,this._startWebSocket()},n.prototype._startWebSocket=function(){var e=this;this._socket||(this._socket=new WebSocket(this._wsUrl),this._socket.onmessage=function(t){var r;try{r=JSON.parse(t.data),i.default.log("Server message received:",r)}catch(s){return void i.default.log("Invalid server message",t.data)}e.emit(a.SocketEventType.Message,r)},this._socket.onclose=function(t){i.default.log("Socket closed.",t),e._disconnected=!0,clearTimeout(e._wsPingTimer),e.emit(a.SocketEventType.Disconnected)},this._socket.onopen=function(){e._disconnected||(e._sendQueuedMessages(),i.default.log("Socket open"),e._scheduleHeartbeat())})},n.prototype._scheduleHeartbeat=function(){var e=this;this._wsPingTimer=setTimeout(function(){e._sendHeartbeat()},this.pingInterval)},n.prototype._sendHeartbeat=function(){if(this._wsOpen()){var e=JSON.stringify({type:a.ServerMessageType.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}else i.default.log("Cannot send heartbeat, because socket closed")},n.prototype._wsOpen=function(){return!!this._socket&&1===this._socket.readyState},n.prototype._sendQueuedMessages=function(){var e,t,n=r(this._messagesQueue);this._messagesQueue=[];try{for(var o=s(n),i=o.next();!i.done;i=o.next()){var a=i.value;this.send(a)}}catch(c){e={error:c}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}},n.prototype.send=function(e){if(!this._disconnected)if(this._id)if(e.type){if(this._wsOpen()){var t=JSON.stringify(e);this._socket.send(t)}}else this.emit(a.SocketEventType.Error,"Invalid message");else this._messagesQueue.push(e)},n.prototype.close=function(){!this._disconnected&&this._socket&&(this._socket.close(),this._disconnected=!0,clearTimeout(this._wsPingTimer))},n}(o.EventEmitter);exports.Socket=c;
},{"eventemitter3":"2JJl","./logger":"8WOs","./enums":"9ZRY"}],"HCdX":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))(function(i,r){function c(e){try{s(o.next(e))}catch(n){r(n)}}function a(e){try{s(o.throw(e))}catch(n){r(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(c,a)}s((o=o.apply(e,n||[])).next())})},t=this&&this.__generator||function(e,n){var t,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=n.call(e,c)}catch(a){r=[6,a],o=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),r=o(require("./logger")),c=require("./enums"),a=function(){function o(e){this.connection=e}return o.prototype.startConnection=function(e){var n=this._startPeerConnection();if(this.connection.peerConnection=n,this.connection.type===c.ConnectionType.Media&&e._stream&&this._addTracksToConnection(e._stream,n),e.originator){if(this.connection.type===c.ConnectionType.Data){var t=this.connection,o={ordered:!!e.reliable},i=n.createDataChannel(t.label,o);t.initialize(i)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)},o.prototype._startPeerConnection=function(){r.default.log("Creating RTCPeerConnection.");var e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e},o.prototype._setupListeners=function(e){var n=this,t=this.connection.peer,o=this.connection.connectionId,a=this.connection.type,s=this.connection.provider;r.default.log("Listening for ICE candidates."),e.onicecandidate=function(e){e.candidate&&e.candidate.candidate&&(r.default.log("Received ICE candidates for "+t+":",e.candidate),s.socket.send({type:c.ServerMessageType.Candidate,payload:{candidate:e.candidate,type:a,connectionId:o},dst:t}))},e.oniceconnectionstatechange=function(){switch(e.iceConnectionState){case"failed":r.default.log("iceConnectionState is failed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Negotiation of connection to "+t+" failed.")),n.connection.close();break;case"closed":r.default.log("iceConnectionState is closed, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Connection to "+t+" closed.")),n.connection.close();break;case"disconnected":r.default.log("iceConnectionState is disconnected, closing connections to "+t),n.connection.emit(c.ConnectionEventType.Error,new Error("Connection to "+t+" disconnected.")),n.connection.close();break;case"completed":e.onicecandidate=i.util.noop}n.connection.emit(c.ConnectionEventType.IceStateChanged,e.iceConnectionState)},r.default.log("Listening for data channel"),e.ondatachannel=function(e){r.default.log("Received data channel");var n=e.channel;s.getConnection(t,o).initialize(n)},r.default.log("Listening for remote stream"),e.ontrack=function(e){r.default.log("Received remote stream");var i=e.streams[0],a=s.getConnection(t,o);if(a.type===c.ConnectionType.Media){var d=a;n._addStreamToMediaConnection(i,d)}}},o.prototype.cleanup=function(){r.default.log("Cleaning up PeerConnection to "+this.connection.peer);var e=this.connection.peerConnection;if(e){this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=function(){};var n="closed"!==e.signalingState,t=!1;if(this.connection.type===c.ConnectionType.Data){var o=this.connection.dataChannel;o&&(t=!!o.readyState&&"closed"!==o.readyState)}(n||t)&&e.close()}},o.prototype._makeOffer=function(){return n(this,void 0,Promise,function(){var n,o,a,s,d,l,u;return t(this,function(t){switch(t.label){case 0:n=this.connection.peerConnection,o=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,n.createOffer(this.connection.options.constraints)];case 2:a=t.sent(),r.default.log("Created offer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(a.sdp=this.connection.options.sdpTransform(a.sdp)||a.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,n.setLocalDescription(a)];case 4:return t.sent(),r.default.log("Set localDescription:",a,"for:"+this.connection.peer),s={sdp:a,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata,browser:i.util.browser},this.connection.type===c.ConnectionType.Data&&(d=this.connection,s=e(e({},s),{label:d.label,reliable:d.reliable,serialization:d.serialization})),o.socket.send({type:c.ServerMessageType.Offer,payload:s,dst:this.connection.peer}),[3,6];case 5:return"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=(l=t.sent())&&(o.emitError(c.PeerErrorType.WebRTC,l),r.default.log("Failed to setLocalDescription, ",l)),[3,6];case 6:return[3,8];case 7:return u=t.sent(),o.emitError(c.PeerErrorType.WebRTC,u),r.default.log("Failed to createOffer, ",u),[3,8];case 8:return[2]}})})},o.prototype._makeAnswer=function(){return n(this,void 0,Promise,function(){var e,n,o,a,s;return t(this,function(t){switch(t.label){case 0:e=this.connection.peerConnection,n=this.connection.provider,t.label=1;case 1:return t.trys.push([1,7,,8]),[4,e.createAnswer()];case 2:o=t.sent(),r.default.log("Created answer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(o.sdp=this.connection.options.sdpTransform(o.sdp)||o.sdp),t.label=3;case 3:return t.trys.push([3,5,,6]),[4,e.setLocalDescription(o)];case 4:return t.sent(),r.default.log("Set localDescription:",o,"for:"+this.connection.peer),n.socket.send({type:c.ServerMessageType.Answer,payload:{sdp:o,type:this.connection.type,connectionId:this.connection.connectionId,browser:i.util.browser},dst:this.connection.peer}),[3,6];case 5:return a=t.sent(),n.emitError(c.PeerErrorType.WebRTC,a),r.default.log("Failed to setLocalDescription, ",a),[3,6];case 6:return[3,8];case 7:return s=t.sent(),n.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to create answer, ",s),[3,8];case 8:return[2]}})})},o.prototype.handleSDP=function(e,o){return n(this,void 0,Promise,function(){var n,i,a,s;return t(this,function(t){switch(t.label){case 0:o=new RTCSessionDescription(o),n=this.connection.peerConnection,i=this.connection.provider,r.default.log("Setting remote description",o),a=this,t.label=1;case 1:return t.trys.push([1,5,,6]),[4,n.setRemoteDescription(o)];case 2:return t.sent(),r.default.log("Set remoteDescription:"+e+" for:"+this.connection.peer),"OFFER"!==e?[3,4]:[4,a._makeAnswer()];case 3:t.sent(),t.label=4;case 4:return[3,6];case 5:return s=t.sent(),i.emitError(c.PeerErrorType.WebRTC,s),r.default.log("Failed to setRemoteDescription, ",s),[3,6];case 6:return[2]}})})},o.prototype.handleCandidate=function(e){return n(this,void 0,Promise,function(){var n,o,i,a,s,d;return t(this,function(t){switch(t.label){case 0:r.default.log("handleCandidate:",e),n=e.candidate,o=e.sdpMLineIndex,i=e.sdpMid,a=this.connection.peerConnection,s=this.connection.provider,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,a.addIceCandidate(new RTCIceCandidate({sdpMid:i,sdpMLineIndex:o,candidate:n}))];case 2:return t.sent(),r.default.log("Added ICE candidate for:"+this.connection.peer),[3,4];case 3:return d=t.sent(),s.emitError(c.PeerErrorType.WebRTC,d),r.default.log("Failed to handleCandidate, ",d),[3,4];case 4:return[2]}})})},o.prototype._addTracksToConnection=function(e,n){if(r.default.log("add tracks from stream "+e.id+" to peer connection"),!n.addTrack)return r.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(function(t){n.addTrack(t,e)})},o.prototype._addStreamToMediaConnection=function(e,n){r.default.log("add stream "+e.id+" to media connection "+n.connectionId),n.addStream(e)},o}();exports.Negotiator=a;
},{"./util":"BHXf","./logger":"8WOs","./enums":"9ZRY"}],"tQFK":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("eventemitter3"),r=function(e){function r(t,r,n){var o=e.call(this)||this;return o.peer=t,o.provider=r,o.options=n,o._open=!1,o.metadata=n.metadata,o}return t(r,e),Object.defineProperty(r.prototype,"open",{get:function(){return this._open},enumerable:!0,configurable:!0}),r}(e.EventEmitter);exports.BaseConnection=r;
},{"eventemitter3":"2JJl"}],"dbHP":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],r=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./util"),i=r(require("./logger")),a=require("./negotiator"),s=require("./enums"),l=require("./baseconnection"),c=function(r){function l(e,t,o){var i=r.call(this,e,t,o)||this;return i._localStream=i.options._stream,i.connectionId=i.options.connectionId||l.ID_PREFIX+n.util.randomToken(),i._negotiator=new a.Negotiator(i),i._localStream&&i._negotiator.startConnection({_stream:i._localStream,originator:!0}),i}return e(l,r),Object.defineProperty(l.prototype,"type",{get:function(){return s.ConnectionType.Media},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"localStream",{get:function(){return this._localStream},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"remoteStream",{get:function(){return this._remoteStream},enumerable:!0,configurable:!0}),l.prototype.addStream=function(e){i.default.log("Receiving stream",e),this._remoteStream=e,r.prototype.emit.call(this,s.ConnectionEventType.Stream,e)},l.prototype.handleMessage=function(e){var t=e.type,o=e.payload;switch(e.type){case s.ServerMessageType.Answer:this._negotiator.handleSDP(t,o.sdp),this._open=!0;break;case s.ServerMessageType.Candidate:this._negotiator.handleCandidate(o.candidate);break;default:i.default.warn("Unrecognized message type:"+t+" from peer:"+this.peer)}},l.prototype.answer=function(e,r){var n,a;if(void 0===r&&(r={}),this._localStream)i.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");else{this._localStream=e,r&&r.sdpTransform&&(this.options.sdpTransform=r.sdpTransform),this._negotiator.startConnection(t(t({},this.options._payload),{_stream:e}));var s=this.provider._getMessages(this.connectionId);try{for(var l=o(s),c=l.next();!c.done;c=l.next()){var p=c.value;this.handleMessage(p)}}catch(u){n={error:u}}finally{try{c&&!c.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}this._open=!0}},l.prototype.close=function(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,r.prototype.emit.call(this,s.ConnectionEventType.Close))},l.ID_PREFIX="mc_",l}(l.BaseConnection);exports.MediaConnection=c;
},{"./util":"BHXf","./logger":"8WOs","./negotiator":"HCdX","./enums":"9ZRY","./baseconnection":"tQFK"}],"GGp6":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("eventemitter3"),o=t(require("./logger")),n=function(t){function r(){var e=t.call(this)||this;return e.fileReader=new FileReader,e._queue=[],e._processing=!1,e.fileReader.onload=function(t){e._processing=!1,t.target&&e.emit("done",t.target.result),e.doNextTask()},e.fileReader.onerror=function(t){o.default.error("EncodingQueue error:",t),e._processing=!1,e.destroy(),e.emit("error",t)},e}return e(r,t),Object.defineProperty(r.prototype,"queue",{get:function(){return this._queue},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"size",{get:function(){return this.queue.length},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"processing",{get:function(){return this._processing},enumerable:!0,configurable:!0}),r.prototype.enque=function(e){this.queue.push(e),this.processing||this.doNextTask()},r.prototype.destroy=function(){this.fileReader.abort(),this._queue=[]},r.prototype.doNextTask=function(){0!==this.size&&(this.processing||(this._processing=!0,this.fileReader.readAsArrayBuffer(this.queue.shift())))},r}(r.EventEmitter);exports.EncodingQueue=n;
},{"eventemitter3":"2JJl","./logger":"8WOs"}],"GBTQ":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),t=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./util"),o=n(require("./logger")),r=require("./negotiator"),a=require("./enums"),s=require("./baseconnection"),u=require("./encodingQueue"),l=function(n){function s(e,t,l){var f=n.call(this,e,t,l)||this;return f._buffer=[],f._bufferSize=0,f._buffering=!1,f._chunkedData={},f._encodingQueue=new u.EncodingQueue,f.connectionId=f.options.connectionId||s.ID_PREFIX+i.util.randomToken(),f.label=f.options.label||f.connectionId,f.serialization=f.options.serialization||a.SerializationType.Binary,f.reliable=!!f.options.reliable,f.options._payload&&(f._peerBrowser=f.options._payload.browser),f._encodingQueue.on("done",function(e){f._bufferedSend(e)}),f._encodingQueue.on("error",function(){o.default.error("DC#"+f.connectionId+": Error occured in encoding from blob to arraybuffer, close DC"),f.close()}),f._negotiator=new r.Negotiator(f),f._negotiator.startConnection(f.options._payload||{originator:!0}),f}return e(s,n),Object.defineProperty(s.prototype,"type",{get:function(){return a.ConnectionType.Data},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"dataChannel",{get:function(){return this._dc},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"bufferSize",{get:function(){return this._bufferSize},enumerable:!0,configurable:!0}),s.prototype.initialize=function(e){this._dc=e,this._configureDataChannel()},s.prototype._configureDataChannel=function(){var e=this;i.util.supports.binaryBlob&&!i.util.supports.reliable||(this.dataChannel.binaryType="arraybuffer"),this.dataChannel.onopen=function(){o.default.log("DC#"+e.connectionId+" dc connection success"),e._open=!0,e.emit(a.ConnectionEventType.Open)},this.dataChannel.onmessage=function(t){o.default.log("DC#"+e.connectionId+" dc onmessage:",t.data),e._handleDataMessage(t)},this.dataChannel.onclose=function(){o.default.log("DC#"+e.connectionId+" dc closed for:",e.peer),e.close()}},s.prototype._handleDataMessage=function(e){var t=this,o=e.data,r=o.constructor,s=o;if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){if(r===Blob)return void i.util.blobToArrayBuffer(o,function(e){var n=i.util.unpack(e);t.emit(a.ConnectionEventType.Data,n)});if(r===ArrayBuffer)s=i.util.unpack(o);else if(r===String){var u=i.util.binaryStringToArrayBuffer(o);s=i.util.unpack(u)}}else this.serialization===a.SerializationType.JSON&&(s=JSON.parse(o));s.__peerData?this._handleChunk(s):n.prototype.emit.call(this,a.ConnectionEventType.Data,s)},s.prototype._handleChunk=function(e){var t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=e.data,n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];var i=new Blob(n.data);this._handleDataMessage({data:i})}},s.prototype.close=function(){this._buffer=[],this._bufferSize=0,this._chunkedData={},this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc=null),this._encodingQueue&&(this._encodingQueue.destroy(),this._encodingQueue.removeAllListeners(),this._encodingQueue=null),this.open&&(this._open=!1,n.prototype.emit.call(this,a.ConnectionEventType.Close))},s.prototype.send=function(e,t){if(this.open)if(this.serialization===a.SerializationType.JSON)this._bufferedSend(JSON.stringify(e));else if(this.serialization===a.SerializationType.Binary||this.serialization===a.SerializationType.BinaryUTF8){var o=i.util.pack(e);if(!t&&o.size>i.util.chunkedMTU)return void this._sendChunks(o);i.util.supports.binaryBlob?this._bufferedSend(o):this._encodingQueue.enque(o)}else this._bufferedSend(e);else n.prototype.emit.call(this,a.ConnectionEventType.Error,new Error("Connection is not open. You should listen for the `open` event before sending messages."))},s.prototype._bufferedSend=function(e){!this._buffering&&this._trySend(e)||(this._buffer.push(e),this._bufferSize=this._buffer.length)},s.prototype._trySend=function(e){var t=this;if(!this.open)return!1;if(this.dataChannel.bufferedAmount>s.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(function(){t._buffering=!1,t._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(n){return o.default.error("DC#:"+this.connectionId+" Error when sending:",n),this._buffering=!0,this.close(),!1}return!0},s.prototype._tryBuffer=function(){if(this.open&&0!==this._buffer.length){var e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}},s.prototype._sendChunks=function(e){var n,r,a=i.util.chunk(e);o.default.log("DC#"+this.connectionId+" Try to send "+a.length+" chunks...");try{for(var s=t(a),u=s.next();!u.done;u=s.next()){var l=u.value;this.send(l,!0)}}catch(f){n={error:f}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},s.prototype.handleMessage=function(e){var t=e.payload;switch(e.type){case a.ServerMessageType.Answer:this._peerBrowser=t.browser,this._negotiator.handleSDP(e.type,t.sdp);break;case a.ServerMessageType.Candidate:this._negotiator.handleCandidate(t.candidate);break;default:o.default.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}},s.ID_PREFIX="dc_",s.MAX_BUFFERED_AMOUNT=8388608,s}(s.BaseConnection);exports.DataConnection=l;
},{"./util":"BHXf","./logger":"8WOs","./negotiator":"HCdX","./enums":"9ZRY","./baseconnection":"tQFK","./encodingQueue":"GGp6"}],"in7L":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,s){function i(t){try{a(o.next(t))}catch(e){s(e)}}function u(t){try{a(o.throw(t))}catch(e){s(e)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(i,u)}a((o=o.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(u){s=[6,u],o=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("./util"),n=r(require("./logger")),s=function(){function r(t){this._options=t}return r.prototype._buildUrl=function(t){var e=(this._options.secure?"https://":"http://")+this._options.host+":"+this._options.port+this._options.path+this._options.key+"/"+t;return e+="?ts="+(new Date).getTime()+Math.random()},r.prototype.retrieveId=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("id"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status)throw new Error("Error. Status:"+r.status);return[2,r.text()];case 3:throw s=e.sent(),n.default.error("Error retrieving ID",s),i="","/"===this._options.path&&this._options.host!==o.util.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i);case 4:return[2]}})})},r.prototype.listAllPeers=function(){return t(this,void 0,Promise,function(){var t,r,s,i;return e(this,function(e){switch(e.label){case 0:t=this._buildUrl("peers"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(t)];case 2:if(200!==(r=e.sent()).status){if(401===r.status)throw s="",s=this._options.host===o.util.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+s);throw new Error("Error. Status:"+r.status)}return[2,r.json()];case 3:throw i=e.sent(),n.default.error("Error retrieving list peers",i),new Error("Could not get list peers from the server."+i);case 4:return[2]}})})},r}();exports.API=s;
},{"./util":"BHXf","./logger":"8WOs"}],"Hxpd":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return s},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("eventemitter3"),s=require("./util"),a=r(require("./logger")),c=require("./socket"),l=require("./mediaconnection"),d=require("./dataconnection"),u=require("./enums"),p=require("./api"),h=function(){return function(){}}(),f=function(r){function i(e,n){var o,c=r.call(this)||this;return c._destroyed=!1,c._disconnected=!1,c._open=!1,c._connections=new Map,c._lostMessages=new Map,e&&e.constructor==Object?n=e:e&&(o=e.toString()),n=t({debug:0,host:s.util.CLOUD_HOST,port:s.util.CLOUD_PORT,path:"/",key:i.DEFAULT_KEY,token:s.util.randomToken(),config:s.util.defaultConfig},n),c._options=n,"/"===c._options.host&&(c._options.host=window.location.hostname),c._options.path&&("/"!==c._options.path[0]&&(c._options.path="/"+c._options.path),"/"!==c._options.path[c._options.path.length-1]&&(c._options.path+="/")),void 0===c._options.secure&&c._options.host!==s.util.CLOUD_HOST?c._options.secure=s.util.isSecure():c._options.host==s.util.CLOUD_HOST&&(c._options.secure=!0),c._options.logFunction&&a.default.setLogFunction(c._options.logFunction),a.default.logLevel=c._options.debug||0,s.util.supports.audioVideo||s.util.supports.data?o&&!s.util.validateId(o)?(c._delayedAbort(u.PeerErrorType.InvalidID,'ID "'+o+'" is invalid'),c):(c._api=new p.API(n),c._initializeServerConnection(),o?c._initialize(o):c._api.retrieveId().then(function(e){return c._initialize(e)}).catch(function(e){return c._abort(u.PeerErrorType.ServerError,e)}),c):(c._delayedAbort(u.PeerErrorType.BrowserIncompatible,"The current browser does not support WebRTC"),c)}return e(i,r),Object.defineProperty(i.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"open",{get:function(){return this._open},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"socket",{get:function(){return this._socket},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"connections",{get:function(){var e,t,r=Object.create(null);try{for(var i=n(this._connections),s=i.next();!s.done;s=i.next()){var a=o(s.value,2),c=a[0],l=a[1];r[c]=l}}catch(d){e={error:d}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return r},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"disconnected",{get:function(){return this._disconnected},enumerable:!0,configurable:!0}),i.prototype._initializeServerConnection=function(){var e=this;this._socket=new c.Socket(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval),this.socket.on(u.SocketEventType.Message,function(t){e._handleMessage(t)}),this.socket.on(u.SocketEventType.Error,function(t){e._abort(u.PeerErrorType.SocketError,t)}),this.socket.on(u.SocketEventType.Disconnected,function(){e.disconnected||(e.emitError(u.PeerErrorType.Network,"Lost connection to server."),e.disconnect())}),this.socket.on(u.SocketEventType.Close,function(){e.disconnected||e._abort(u.PeerErrorType.SocketClosed,"Underlying socket is already closed.")})},i.prototype._initialize=function(e){this._id=e,this.socket.start(this.id,this._options.token)},i.prototype._handleMessage=function(e){var t,o,r=e.type,i=e.payload,s=e.src;switch(r){case u.ServerMessageType.Open:this.emit(u.PeerEventType.Open,this.id),this._open=!0;break;case u.ServerMessageType.Error:this._abort(u.PeerErrorType.ServerError,i.msg);break;case u.ServerMessageType.IdTaken:this._abort(u.PeerErrorType.UnavailableID,'ID "'+this.id+'" is taken');break;case u.ServerMessageType.InvalidKey:this._abort(u.PeerErrorType.InvalidKey,'API KEY "'+this._options.key+'" is invalid');break;case u.ServerMessageType.Leave:a.default.log("Received leave message from",s),this._cleanupPeer(s),this._connections.delete(s);break;case u.ServerMessageType.Expire:this.emitError(u.PeerErrorType.PeerUnavailable,"Could not connect to peer "+s);break;case u.ServerMessageType.Offer:var c=i.connectionId;if((_=this.getConnection(s,c))&&(_.close(),a.default.warn("Offer received for existing Connection ID:",c)),i.type===u.ConnectionType.Media)_=new l.MediaConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata}),this._addConnection(s,_),this.emit(u.PeerEventType.Call,_);else{if(i.type!==u.ConnectionType.Data)return void a.default.warn("Received malformed connection type:",i.type);_=new d.DataConnection(s,this,{connectionId:c,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable}),this._addConnection(s,_),this.emit(u.PeerEventType.Connection,_)}var p=this._getMessages(c);try{for(var h=n(p),f=h.next();!f.done;f=h.next()){var y=f.value;_.handleMessage(y)}}catch(v){t={error:v}}finally{try{f&&!f.done&&(o=h.return)&&o.call(h)}finally{if(t)throw t.error}}break;default:if(!i)return void a.default.warn("You received a malformed message from "+s+" of type "+r);var _;c=i.connectionId;(_=this.getConnection(s,c))&&_.peerConnection?_.handleMessage(e):c?this._storeMessage(c,e):a.default.warn("You received an unrecognized message:",e)}},i.prototype._storeMessage=function(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)},i.prototype._getMessages=function(e){var t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]},i.prototype.connect=function(e,t){if(void 0===t&&(t={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError(u.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");var n=new d.DataConnection(e,this,t);return this._addConnection(e,n),n},i.prototype.call=function(e,t,n){if(void 0===n&&(n={}),this.disconnected)return a.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError(u.PeerErrorType.Disconnected,"Cannot connect to new Peer after disconnecting from server.");if(t){n._stream=t;var o=new l.MediaConnection(e,this,n);return this._addConnection(e,o),o}a.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.")},i.prototype._addConnection=function(e,t){a.default.log("add connection "+t.type+":"+t.connectionId+"\n       to peerId:"+e),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)},i.prototype._removeConnection=function(e){var t=this._connections.get(e.peer);if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)},i.prototype.getConnection=function(e,t){var o,r,i=this._connections.get(e);if(!i)return null;try{for(var s=n(i),a=s.next();!a.done;a=s.next()){var c=a.value;if(c.connectionId===t)return c}}catch(l){o={error:l}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}return null},i.prototype._delayedAbort=function(e,t){var n=this;setTimeout(function(){n._abort(e,t)},0)},i.prototype._abort=function(e,t){a.default.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()},i.prototype.emitError=function(e,t){a.default.error("Error:",t),"string"==typeof t&&(t=new Error(t)),t.type=e,this.emit(u.PeerEventType.Error,t)},i.prototype.destroy=function(){this.destroyed||(this._cleanup(),this.disconnect(),this._destroyed=!0)},i.prototype._cleanup=function(){var e,t;try{for(var o=n(this._connections.keys()),r=o.next();!r.done;r=o.next()){var i=r.value;this._cleanupPeer(i),this._connections.delete(i)}}catch(s){e={error:s}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}this.emit(u.PeerEventType.Close)},i.prototype._cleanupPeer=function(e){var t,o,r=this._connections.get(e);if(r)try{for(var i=n(r),s=i.next();!s.done;s=i.next()){s.value.close()}}catch(a){t={error:a}}finally{try{s&&!s.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}},i.prototype.disconnect=function(){var e=this;setTimeout(function(){e.disconnected||(e._disconnected=!0,e._open=!1,e.socket&&e.socket.close(),e.emit(u.PeerEventType.Disconnected,e.id),e._lastServerId=e.id,e._id=null)},0)},i.prototype.reconnect=function(){if(this.disconnected&&!this.destroyed)a.default.log("Attempting reconnection to server with ID "+this._lastServerId),this._disconnected=!1,this._initializeServerConnection(),this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error("Peer "+this.id+" cannot reconnect because it is not disconnected from the server!");a.default.error("In a hurry? We're still trying to make the initial connection!")}},i.prototype.listAllPeers=function(e){var t=this;void 0===e&&(e=function(e){}),this._api.listAllPeers().then(function(t){return e(t)}).catch(function(e){return t._abort(u.PeerErrorType.ServerError,e)})},i.DEFAULT_KEY="peerjs",i}(i.EventEmitter);exports.Peer=f;
},{"eventemitter3":"2JJl","./util":"BHXf","./logger":"8WOs","./socket":"wJlv","./mediaconnection":"dbHP","./dataconnection":"GBTQ","./enums":"9ZRY","./api":"in7L"}],"iTK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./util"),r=require("./peer");exports.peerjs={Peer:r.Peer,util:e.util},exports.default=r.Peer,window.peerjs=exports.peerjs,window.Peer=r.Peer;
},{"./util":"BHXf","./peer":"Hxpd"}]},{},["iTK6"], null)

},{}],"node_modules/immediate/lib/browser.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

},{}],"node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],"node_modules/uuid/v1.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/rng":"node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"node_modules/uuid/lib/bytesToUuid.js"}],"node_modules/uuid/v4.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"node_modules/uuid/lib/bytesToUuid.js"}],"node_modules/uuid/index.js":[function(require,module,exports) {
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":"node_modules/uuid/v1.js","./v4":"node_modules/uuid/v4.js"}],"node_modules/spark-md5/spark-md5.js":[function(require,module,exports) {
var define;
(function (factory) {
    if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals (with support for web workers)
        var glob;

        try {
            glob = window;
        } catch (e) {
            glob = self;
        }

        glob.SparkMD5 = factory();
    }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b  = (b << 21 | b >>> 11) + c | 0;

        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));

},{}],"node_modules/vuvuzela/index.js":[function(require,module,exports) {
'use strict';

/**
 * Stringify/parse functions that don't operate
 * recursively, so they avoid call stack exceeded
 * errors.
 */
exports.stringify = function stringify(input) {
  var queue = [];
  queue.push({obj: input});

  var res = '';
  var next, obj, prefix, val, i, arrayPrefix, keys, k, key, value, objPrefix;
  while ((next = queue.pop())) {
    obj = next.obj;
    prefix = next.prefix || '';
    val = next.val || '';
    res += prefix;
    if (val) {
      res += val;
    } else if (typeof obj !== 'object') {
      res += typeof obj === 'undefined' ? null : JSON.stringify(obj);
    } else if (obj === null) {
      res += 'null';
    } else if (Array.isArray(obj)) {
      queue.push({val: ']'});
      for (i = obj.length - 1; i >= 0; i--) {
        arrayPrefix = i === 0 ? '' : ',';
        queue.push({obj: obj[i], prefix: arrayPrefix});
      }
      queue.push({val: '['});
    } else { // object
      keys = [];
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      queue.push({val: '}'});
      for (i = keys.length - 1; i >= 0; i--) {
        key = keys[i];
        value = obj[key];
        objPrefix = (i > 0 ? ',' : '');
        objPrefix += JSON.stringify(key) + ':';
        queue.push({obj: value, prefix: objPrefix});
      }
      queue.push({val: '{'});
    }
  }
  return res;
};

// Convenience function for the parse function.
// This pop function is basically copied from
// pouchCollate.parseIndexableString
function pop(obj, stack, metaStack) {
  var lastMetaElement = metaStack[metaStack.length - 1];
  if (obj === lastMetaElement.element) {
    // popping a meta-element, e.g. an object whose value is another object
    metaStack.pop();
    lastMetaElement = metaStack[metaStack.length - 1];
  }
  var element = lastMetaElement.element;
  var lastElementIndex = lastMetaElement.index;
  if (Array.isArray(element)) {
    element.push(obj);
  } else if (lastElementIndex === stack.length - 2) { // obj with key+value
    var key = stack.pop();
    element[key] = obj;
  } else {
    stack.push(obj); // obj with key only
  }
}

exports.parse = function (str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects
  var i = 0;
  var collationIndex,parsedNum,numChar;
  var parsedString,lastCh,numConsecutiveSlashes,ch;
  var arrayElement, objElement;
  while (true) {
    collationIndex = str[i++];
    if (collationIndex === '}' ||
        collationIndex === ']' ||
        typeof collationIndex === 'undefined') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack.pop(), stack, metaStack);
        continue;
      }
    }
    switch (collationIndex) {
      case ' ':
      case '\t':
      case '\n':
      case ':':
      case ',':
        break;
      case 'n':
        i += 3; // 'ull'
        pop(null, stack, metaStack);
        break;
      case 't':
        i += 3; // 'rue'
        pop(true, stack, metaStack);
        break;
      case 'f':
        i += 4; // 'alse'
        pop(false, stack, metaStack);
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
        parsedNum = '';
        i--;
        while (true) {
          numChar = str[i++];
          if (/[\d\.\-e\+]/.test(numChar)) {
            parsedNum += numChar;
          } else {
            i--;
            break;
          }
        }
        pop(parseFloat(parsedNum), stack, metaStack);
        break;
      case '"':
        parsedString = '';
        lastCh = void 0;
        numConsecutiveSlashes = 0;
        while (true) {
          ch = str[i++];
          if (ch !== '"' || (lastCh === '\\' &&
              numConsecutiveSlashes % 2 === 1)) {
            parsedString += ch;
            lastCh = ch;
            if (lastCh === '\\') {
              numConsecutiveSlashes++;
            } else {
              numConsecutiveSlashes = 0;
            }
          } else {
            break;
          }
        }
        pop(JSON.parse('"' + parsedString + '"'), stack, metaStack);
        break;
      case '[':
        arrayElement = { element: [], index: stack.length };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;
      case '{':
        objElement = { element: {}, index: stack.length };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;
      default:
        throw new Error(
          'unexpectedly reached end of input: ' + collationIndex);
    }
  }
};

},{}],"node_modules/argsarray/index.js":[function(require,module,exports) {
'use strict';

module.exports = argsArray;

function argsArray(fun) {
  return function () {
    var len = arguments.length;
    if (len) {
      var args = [];
      var i = -1;
      while (++i < len) {
        args[i] = arguments[i];
      }
      return fun.call(this, args);
    } else {
      return fun.call(this, []);
    }
  };
}
},{}],"node_modules/pouchdb/node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = $getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];

  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);

  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/pouchdb/lib/index-browser.es.js":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immediate = _interopRequireDefault(require("immediate"));

var _uuid = _interopRequireDefault(require("uuid"));

var _sparkMd = _interopRequireDefault(require("spark-md5"));

var _vuvuzela = _interopRequireDefault(require("vuvuzela"));

var _argsarray = _interopRequireDefault(require("argsarray"));

var _inherits = _interopRequireDefault(require("inherits"));

var _events = require("events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mangle(key) {
  return '$' + key;
}

function unmangle(key) {
  return key.substring(1);
}

function Map$1() {
  this._store = {};
}

Map$1.prototype.get = function (key) {
  var mangled = mangle(key);
  return this._store[mangled];
};

Map$1.prototype.set = function (key, value) {
  var mangled = mangle(key);
  this._store[mangled] = value;
  return true;
};

Map$1.prototype.has = function (key) {
  var mangled = mangle(key);
  return mangled in this._store;
};

Map$1.prototype.delete = function (key) {
  var mangled = mangle(key);
  var res = mangled in this._store;
  delete this._store[mangled];
  return res;
};

Map$1.prototype.forEach = function (cb) {
  var keys = Object.keys(this._store);

  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var value = this._store[key];
    key = unmangle(key);
    cb(value, key);
  }
};

Object.defineProperty(Map$1.prototype, 'size', {
  get: function () {
    return Object.keys(this._store).length;
  }
});

function Set$1(array) {
  this._store = new Map$1(); // init with an array

  if (array && Array.isArray(array)) {
    for (var i = 0, len = array.length; i < len; i++) {
      this.add(array[i]);
    }
  }
}

Set$1.prototype.add = function (key) {
  return this._store.set(key, true);
};

Set$1.prototype.has = function (key) {
  return this._store.has(key);
};

Set$1.prototype.forEach = function (cb) {
  this._store.forEach(function (value, key) {
    cb(key);
  });
};

Object.defineProperty(Set$1.prototype, 'size', {
  get: function () {
    return this._store.size;
  }
});
/* global Map,Set,Symbol */
// Based on https://kangax.github.io/compat-table/es6/ we can sniff out
// incomplete Map/Set implementations which would otherwise cause our tests to fail.
// Notably they fail in IE11 and iOS 8.4, which this prevents.

function supportsMapAndSet() {
  if (typeof Symbol === 'undefined' || typeof Map === 'undefined' || typeof Set === 'undefined') {
    return false;
  }

  var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
  return prop && 'get' in prop && Map[Symbol.species] === Map;
} // based on https://github.com/montagejs/collections


var ExportedSet;
var ExportedMap;
{
  if (supportsMapAndSet()) {
    // prefer built-in Map/Set
    ExportedSet = Set;
    ExportedMap = Map;
  } else {
    // fall back to our polyfill
    ExportedSet = Set$1;
    ExportedMap = Map$1;
  }
}

function isBinaryObject(object) {
  return typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer || typeof Blob !== 'undefined' && object instanceof Blob;
}

function cloneArrayBuffer(buff) {
  if (typeof buff.slice === 'function') {
    return buff.slice(0);
  } // IE10-11 slice() polyfill


  var target = new ArrayBuffer(buff.byteLength);
  var targetArray = new Uint8Array(target);
  var sourceArray = new Uint8Array(buff);
  targetArray.set(sourceArray);
  return target;
}

function cloneBinaryObject(object) {
  if (object instanceof ArrayBuffer) {
    return cloneArrayBuffer(object);
  }

  var size = object.size;
  var type = object.type; // Blob

  if (typeof object.slice === 'function') {
    return object.slice(0, size, type);
  } // PhantomJS slice() replacement


  return object.webkitSlice(0, size, type);
} // most of this is borrowed from lodash.isPlainObject:
// https://github.com/fis-components/lodash.isplainobject/
// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js


var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);

function isPlainObject(value) {
  var proto = Object.getPrototypeOf(value);
  /* istanbul ignore if */

  if (proto === null) {
    // not sure when this happens, but I guess it can
    return true;
  }

  var Ctor = proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function clone(object) {
  var newObject;
  var i;
  var len;

  if (!object || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    newObject = [];

    for (i = 0, len = object.length; i < len; i++) {
      newObject[i] = clone(object[i]);
    }

    return newObject;
  } // special case: to avoid inconsistencies between IndexedDB
  // and other backends, we automatically stringify Dates


  if (object instanceof Date) {
    return object.toISOString();
  }

  if (isBinaryObject(object)) {
    return cloneBinaryObject(object);
  }

  if (!isPlainObject(object)) {
    return object; // don't clone objects like Workers
  }

  newObject = {};

  for (i in object) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      var value = clone(object[i]);

      if (typeof value !== 'undefined') {
        newObject[i] = value;
      }
    }
  }

  return newObject;
}

function once(fun) {
  var called = false;
  return (0, _argsarray.default)(function (args) {
    /* istanbul ignore if */
    if (called) {
      // this is a smoke test and should never actually happen
      throw new Error('once called more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
}

function toPromise(func) {
  //create the function we will be returning
  return (0, _argsarray.default)(function (args) {
    // Clone arguments
    args = clone(args);
    var self = this; // if the last argument is a function, assume its a callback

    var usedCB = typeof args[args.length - 1] === 'function' ? args.pop() : false;
    var promise = new Promise(function (fulfill, reject) {
      var resp;

      try {
        var callback = once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        }); // create a callback for this invocation
        // apply the function in the orig context

        args.push(callback);
        resp = func.apply(self, args);

        if (resp && typeof resp.then === 'function') {
          fulfill(resp);
        }
      } catch (e) {
        reject(e);
      }
    }); // if there is a callback, call it back

    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }

    return promise;
  });
}

function logApiCall(self, name, args) {
  /* istanbul ignore if */
  if (self.constructor.listeners('debug').length) {
    var logArgs = ['api', self.name, name];

    for (var i = 0; i < args.length - 1; i++) {
      logArgs.push(args[i]);
    }

    self.constructor.emit('debug', logArgs); // override the callback itself to log the response

    var origCallback = args[args.length - 1];

    args[args.length - 1] = function (err, res) {
      var responseArgs = ['api', self.name, name];
      responseArgs = responseArgs.concat(err ? ['error', err] : ['success', res]);
      self.constructor.emit('debug', responseArgs);
      origCallback(err, res);
    };
  }
}

function adapterFun(name, callback) {
  return toPromise((0, _argsarray.default)(function (args) {
    if (this._closed) {
      return Promise.reject(new Error('database is closed'));
    }

    if (this._destroyed) {
      return Promise.reject(new Error('database is destroyed'));
    }

    var self = this;
    logApiCall(self, name, args);

    if (!this.taskqueue.isReady) {
      return new Promise(function (fulfill, reject) {
        self.taskqueue.addTask(function (failed) {
          if (failed) {
            reject(failed);
          } else {
            fulfill(self[name].apply(self, args));
          }
        });
      });
    }

    return callback.apply(this, args);
  }));
} // like underscore/lodash _.pick()


function pick(obj, arr) {
  var res = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];

    if (prop in obj) {
      res[prop] = obj[prop];
    }
  }

  return res;
} // Most browsers throttle concurrent requests at 6, so it's silly
// to shim _bulk_get by trying to launch potentially hundreds of requests
// and then letting the majority time out. We can handle this ourselves.


var MAX_NUM_CONCURRENT_REQUESTS = 6;

function identityFunction(x) {
  return x;
}

function formatResultForOpenRevsGet(result) {
  return [{
    ok: result
  }];
} // shim for P/CouchDB adapters that don't directly implement _bulk_get


function bulkGet(db, opts, callback) {
  var requests = opts.docs; // consolidate into one request per doc if possible

  var requestsById = new ExportedMap();
  requests.forEach(function (request) {
    if (requestsById.has(request.id)) {
      requestsById.get(request.id).push(request);
    } else {
      requestsById.set(request.id, [request]);
    }
  });
  var numDocs = requestsById.size;
  var numDone = 0;
  var perDocResults = new Array(numDocs);

  function collapseResultsAndFinish() {
    var results = [];
    perDocResults.forEach(function (res) {
      res.docs.forEach(function (info) {
        results.push({
          id: res.id,
          docs: [info]
        });
      });
    });
    callback(null, {
      results: results
    });
  }

  function checkDone() {
    if (++numDone === numDocs) {
      collapseResultsAndFinish();
    }
  }

  function gotResult(docIndex, id, docs) {
    perDocResults[docIndex] = {
      id: id,
      docs: docs
    };
    checkDone();
  }

  var allRequests = [];
  requestsById.forEach(function (value, key) {
    allRequests.push(key);
  });
  var i = 0;

  function nextBatch() {
    if (i >= allRequests.length) {
      return;
    }

    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
    var batch = allRequests.slice(i, upTo);
    processBatch(batch, i);
    i += batch.length;
  }

  function processBatch(batch, offset) {
    batch.forEach(function (docId, j) {
      var docIdx = offset + j;
      var docRequests = requestsById.get(docId); // just use the first request as the "template"
      // TODO: The _bulk_get API allows for more subtle use cases than this,
      // but for now it is unlikely that there will be a mix of different
      // "atts_since" or "attachments" in the same request, since it's just
      // replicate.js that is using this for the moment.
      // Also, atts_since is aspirational, since we don't support it yet.

      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
      docOpts.open_revs = docRequests.map(function (request) {
        // rev is optional, open_revs disallowed
        return request.rev;
      }); // remove falsey / undefined revisions

      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);
      var formatResult = identityFunction;

      if (docOpts.open_revs.length === 0) {
        delete docOpts.open_revs; // when fetching only the "winning" leaf,
        // transform the result so it looks like an open_revs
        // request

        formatResult = formatResultForOpenRevsGet;
      } // globally-supplied options


      ['revs', 'attachments', 'binary', 'ajax', 'latest'].forEach(function (param) {
        if (param in opts) {
          docOpts[param] = opts[param];
        }
      });
      db.get(docId, docOpts, function (err, res) {
        var result;
        /* istanbul ignore if */

        if (err) {
          result = [{
            error: err
          }];
        } else {
          result = formatResult(res);
        }

        gotResult(docIdx, docId, result);
        nextBatch();
      });
    });
  }

  nextBatch();
}

var hasLocal;

try {
  localStorage.setItem('_pouch_check_localstorage', 1);
  hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
} catch (e) {
  hasLocal = false;
}

function hasLocalStorage() {
  return hasLocal;
} // Custom nextTick() shim for browsers. In node, this will just be process.nextTick(). We


(0, _inherits.default)(Changes, _events.EventEmitter);
/* istanbul ignore next */

function attachBrowserEvents(self) {
  if (hasLocalStorage()) {
    addEventListener("storage", function (e) {
      self.emit(e.key);
    });
  }
}

function Changes() {
  _events.EventEmitter.call(this);

  this._listeners = {};
  attachBrowserEvents(this);
}

Changes.prototype.addListener = function (dbName, id, db, opts) {
  /* istanbul ignore if */
  if (this._listeners[id]) {
    return;
  }

  var self = this;
  var inprogress = false;

  function eventFunction() {
    /* istanbul ignore if */
    if (!self._listeners[id]) {
      return;
    }

    if (inprogress) {
      inprogress = 'waiting';
      return;
    }

    inprogress = true;
    var changesOpts = pick(opts, ['style', 'include_docs', 'attachments', 'conflicts', 'filter', 'doc_ids', 'view', 'since', 'query_params', 'binary', 'return_docs']);
    /* istanbul ignore next */

    function onError() {
      inprogress = false;
    }

    db.changes(changesOpts).on('change', function (c) {
      if (c.seq > opts.since && !opts.cancelled) {
        opts.since = c.seq;
        opts.onChange(c);
      }
    }).on('complete', function () {
      if (inprogress === 'waiting') {
        (0, _immediate.default)(eventFunction);
      }

      inprogress = false;
    }).on('error', onError);
  }

  this._listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  /* istanbul ignore if */
  if (!(id in this._listeners)) {
    return;
  }

  _events.EventEmitter.prototype.removeListener.call(this, dbName, this._listeners[id]);

  delete this._listeners[id];
};
/* istanbul ignore next */


Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (hasLocalStorage()) {
    localStorage[dbName] = localStorage[dbName] === "a" ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

function guardedConsole(method) {
  /* istanbul ignore else */
  if (typeof console !== 'undefined' && typeof console[method] === 'function') {
    var args = Array.prototype.slice.call(arguments, 1);
    console[method].apply(console, args);
  }
}

function randomNumber(min, max) {
  var maxTimeout = 600000; // Hard-coded default of 10 minutes

  min = parseInt(min, 10) || 0;
  max = parseInt(max, 10);

  if (max !== max || max <= min) {
    max = (min || 1) << 1; //doubling
  } else {
    max = max + 1;
  } // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout


  if (max > maxTimeout) {
    min = maxTimeout >> 1; // divide by two

    max = maxTimeout;
  }

  var ratio = Math.random();
  var range = max - min;
  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
}

function defaultBackOff(min) {
  var max = 0;

  if (!min) {
    max = 2000;
  }

  return randomNumber(min, max);
} // designed to give info to browser users, who are disturbed
// when they see http errors in the console


function explainError(status, str) {
  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
}

var assign;
{
  if (typeof Object.assign === 'function') {
    assign = Object.assign;
  } else {
    // lite Object.assign polyfill based on
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    assign = function (target) {
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    };
  }
}
var $inject_Object_assign = assign;
(0, _inherits.default)(PouchError, Error);

function PouchError(status, error, reason) {
  Error.call(this, reason);
  this.status = status;
  this.name = error;
  this.message = reason;
  this.error = true;
}

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message,
    reason: this.reason
  });
};

var UNAUTHORIZED = new PouchError(401, 'unauthorized', "Name or password is incorrect.");
var MISSING_BULK_DOCS = new PouchError(400, 'bad_request', "Missing JSON list of 'docs'");
var MISSING_DOC = new PouchError(404, 'not_found', 'missing');
var REV_CONFLICT = new PouchError(409, 'conflict', 'Document update conflict');
var INVALID_ID = new PouchError(400, 'bad_request', '_id field must contain a string');
var MISSING_ID = new PouchError(412, 'missing_id', '_id is required for puts');
var RESERVED_ID = new PouchError(400, 'bad_request', 'Only reserved document ids may start with underscore.');
var NOT_OPEN = new PouchError(412, 'precondition_failed', 'Database not open');
var UNKNOWN_ERROR = new PouchError(500, 'unknown_error', 'Database encountered an unknown error');
var BAD_ARG = new PouchError(500, 'badarg', 'Some query argument is invalid');
var INVALID_REQUEST = new PouchError(400, 'invalid_request', 'Request was invalid');
var QUERY_PARSE_ERROR = new PouchError(400, 'query_parse_error', 'Some query parameter is invalid');
var DOC_VALIDATION = new PouchError(500, 'doc_validation', 'Bad special document member');
var BAD_REQUEST = new PouchError(400, 'bad_request', 'Something wrong with the request');
var NOT_AN_OBJECT = new PouchError(400, 'bad_request', 'Document must be a JSON object');
var DB_MISSING = new PouchError(404, 'not_found', 'Database not found');
var IDB_ERROR = new PouchError(500, 'indexed_db_went_bad', 'unknown');
var WSQ_ERROR = new PouchError(500, 'web_sql_went_bad', 'unknown');
var LDB_ERROR = new PouchError(500, 'levelDB_went_went_bad', 'unknown');
var FORBIDDEN = new PouchError(403, 'forbidden', 'Forbidden by design doc validate_doc_update function');
var INVALID_REV = new PouchError(400, 'bad_request', 'Invalid rev format');
var FILE_EXISTS = new PouchError(412, 'file_exists', 'The database could not be created, the file already exists.');
var MISSING_STUB = new PouchError(412, 'missing_stub', 'A pre-existing attachment stub wasn\'t found');
var INVALID_URL = new PouchError(413, 'invalid_url', 'Provided URL is invalid');

function createError(error, reason) {
  function CustomPouchError(reason) {
    // inherit error properties from our parent error manually
    // so as to allow proper JSON parsing.

    /* jshint ignore:start */
    for (var p in error) {
      if (typeof error[p] !== 'function') {
        this[p] = error[p];
      }
    }
    /* jshint ignore:end */


    if (reason !== undefined) {
      this.reason = reason;
    }
  }

  CustomPouchError.prototype = PouchError.prototype;
  return new CustomPouchError(reason);
}

function generateErrorFromResponse(err) {
  if (typeof err !== 'object') {
    var data = err;
    err = UNKNOWN_ERROR;
    err.data = data;
  }

  if ('error' in err && err.error === 'conflict') {
    err.name = 'conflict';
    err.status = 409;
  }

  if (!('name' in err)) {
    err.name = err.error || 'unknown';
  }

  if (!('status' in err)) {
    err.status = 500;
  }

  if (!('message' in err)) {
    err.message = err.message || err.reason;
  }

  return err;
}

function tryFilter(filter, doc, req) {
  try {
    return !filter(doc, req);
  } catch (err) {
    var msg = 'Filter function threw: ' + err.toString();
    return createError(BAD_REQUEST, msg);
  }
}

function filterChange(opts) {
  var req = {};
  var hasFilter = opts.filter && typeof opts.filter === 'function';
  req.query = opts.query_params;
  return function filter(change) {
    if (!change.doc) {
      // CSG sends events on the changes feed that don't have documents,
      // this hack makes a whole lot of existing code robust.
      change.doc = {};
    }

    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);

    if (typeof filterReturn === 'object') {
      return filterReturn;
    }

    if (filterReturn) {
      return false;
    }

    if (!opts.include_docs) {
      delete change.doc;
    } else if (!opts.attachments) {
      for (var att in change.doc._attachments) {
        /* istanbul ignore else */
        if (change.doc._attachments.hasOwnProperty(att)) {
          change.doc._attachments[att].stub = true;
        }
      }
    }

    return true;
  };
}

function flatten(arrs) {
  var res = [];

  for (var i = 0, len = arrs.length; i < len; i++) {
    res = res.concat(arrs[i]);
  }

  return res;
} // shim for Function.prototype.name,
// Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or
//     '_local'
//   - any other string value is a valid id
// Returns the specific error object for each case


function invalidIdError(id) {
  var err;

  if (!id) {
    err = createError(MISSING_ID);
  } else if (typeof id !== 'string') {
    err = createError(INVALID_ID);
  } else if (/^_/.test(id) && !/^_(design|local)/.test(id)) {
    err = createError(RESERVED_ID);
  }

  if (err) {
    throw err;
  }
} // Checks if a PouchDB object is "remote" or not. This is


function isRemote(db) {
  if (typeof db._remote === 'boolean') {
    return db._remote;
  }
  /* istanbul ignore next */


  if (typeof db.type === 'function') {
    guardedConsole('warn', 'db.type() is deprecated and will be removed in ' + 'a future version of PouchDB');
    return db.type() === 'http';
  }
  /* istanbul ignore next */


  return false;
}

function listenerCount(ee, type) {
  return 'listenerCount' in ee ? ee.listenerCount(type) : _events.EventEmitter.listenerCount(ee, type);
}

function parseDesignDocFunctionName(s) {
  if (!s) {
    return null;
  }

  var parts = s.split('/');

  if (parts.length === 2) {
    return parts;
  }

  if (parts.length === 1) {
    return [s, s];
  }

  return null;
}

function normalizeDesignDocFunctionName(s) {
  var normalized = parseDesignDocFunctionName(s);
  return normalized ? normalized.join('/') : null;
} // originally parseUri 1.2.2, now patched by us
// (c) Steven Levithan <stevenlevithan.com>
// MIT License


var keys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var qName = "queryKey";
var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g; // use the "loose" parser

/* eslint maxlen: 0, no-useless-escape: 0 */

var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUri(str) {
  var m = parser.exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    var key = keys[i];
    var value = m[i] || "";
    var encoded = ['user', 'password'].indexOf(key) !== -1;
    uri[key] = encoded ? decodeURIComponent(value) : value;
  }

  uri[qName] = {};
  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
    if ($1) {
      uri[qName][$1] = $2;
    }
  });
  return uri;
} // Based on https://github.com/alexdavid/scope-eval v0.0.3
// (source: https://unpkg.com/scope-eval@0.0.3/scope_eval.js)
// This is basically just a wrapper around new Function()


function scopeEval(source, scope) {
  var keys = [];
  var values = [];

  for (var key in scope) {
    if (scope.hasOwnProperty(key)) {
      keys.push(key);
      values.push(scope[key]);
    }
  }

  keys.push(source);
  return Function.apply(null, keys).apply(null, values);
} // this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all


function upsert(db, docId, diffFun) {
  return new Promise(function (fulfill, reject) {
    db.get(docId, function (err, doc) {
      if (err) {
        /* istanbul ignore next */
        if (err.status !== 404) {
          return reject(err);
        }

        doc = {};
      } // the user might change the _rev, so save it for posterity


      var docRev = doc._rev;
      var newDoc = diffFun(doc);

      if (!newDoc) {
        // if the diffFun returns falsy, we short-circuit as
        // an optimization
        return fulfill({
          updated: false,
          rev: docRev
        });
      } // users aren't allowed to modify these values,
      // so reset them here


      newDoc._id = docId;
      newDoc._rev = docRev;
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc).then(function (res) {
    return {
      updated: true,
      rev: res.rev
    };
  }, function (err) {
    /* istanbul ignore next */
    if (err.status !== 409) {
      throw err;
    }

    return upsert(db, doc._id, diffFun);
  });
}

var thisAtob = function (str) {
  return atob(str);
};

var thisBtoa = function (str) {
  return btoa(str);
}; // Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor (e.g.
// old QtWebKit versions, Android < 4.4).


function createBlob(parts, properties) {
  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
  parts = parts || [];
  properties = properties || {};

  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }

    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
    var builder = new Builder();

    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }

    return builder.getBlob(properties.type);
  }
} // From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)


function binaryStringToArrayBuffer(bin) {
  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);

  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }

  return buf;
}

function binStringToBluffer(binString, type) {
  return createBlob([binaryStringToArrayBuffer(binString)], {
    type: type
  });
}

function b64ToBluffer(b64, type) {
  return binStringToBluffer(thisAtob(b64), type);
} //Can't find original post, but this is close
//http://stackoverflow.com/questions/6965107/ (continues on next line)
//converting-between-strings-and-arraybuffers


function arrayBufferToBinaryString(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;

  for (var i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return binary;
} // shim for browsers that don't support it


function readAsBinaryString(blob, callback) {
  var reader = new FileReader();
  var hasBinaryString = typeof reader.readAsBinaryString === 'function';

  reader.onloadend = function (e) {
    var result = e.target.result || '';

    if (hasBinaryString) {
      return callback(result);
    }

    callback(arrayBufferToBinaryString(result));
  };

  if (hasBinaryString) {
    reader.readAsBinaryString(blob);
  } else {
    reader.readAsArrayBuffer(blob);
  }
}

function blobToBinaryString(blobOrBuffer, callback) {
  readAsBinaryString(blobOrBuffer, function (bin) {
    callback(bin);
  });
}

function blobToBase64(blobOrBuffer, callback) {
  blobToBinaryString(blobOrBuffer, function (base64) {
    callback(thisBtoa(base64));
  });
} // simplified API. universal browser support is assumed


function readAsArrayBuffer(blob, callback) {
  var reader = new FileReader();

  reader.onloadend = function (e) {
    var result = e.target.result || new ArrayBuffer(0);
    callback(result);
  };

  reader.readAsArrayBuffer(blob);
} // this is not used in the browser


var setImmediateShim = global.setImmediate || global.setTimeout;
var MD5_CHUNK_SIZE = 32768;

function rawToBase64(raw) {
  return thisBtoa(raw);
}

function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  }

  return blob.slice(start, end);
}

function appendBlob(buffer, blob, start, end, callback) {
  if (start > 0 || end < blob.size) {
    // only slice blob if we really need to
    blob = sliceBlob(blob, start, end);
  }

  readAsArrayBuffer(blob, function (arrayBuffer) {
    buffer.append(arrayBuffer);
    callback();
  });
}

function appendString(buffer, string, start, end, callback) {
  if (start > 0 || end < string.length) {
    // only create a substring if we really need to
    string = string.substring(start, end);
  }

  buffer.appendBinary(string);
  callback();
}

function binaryMd5(data, callback) {
  var inputIsString = typeof data === 'string';
  var len = inputIsString ? data.length : data.size;
  var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
  var chunks = Math.ceil(len / chunkSize);
  var currentChunk = 0;
  var buffer = inputIsString ? new _sparkMd.default() : new _sparkMd.default.ArrayBuffer();
  var append = inputIsString ? appendString : appendBlob;

  function next() {
    setImmediateShim(loadNextChunk);
  }

  function done() {
    var raw = buffer.end(true);
    var base64 = rawToBase64(raw);
    callback(base64);
    buffer.destroy();
  }

  function loadNextChunk() {
    var start = currentChunk * chunkSize;
    var end = start + chunkSize;
    currentChunk++;

    if (currentChunk < chunks) {
      append(buffer, data, start, end, next);
    } else {
      append(buffer, data, start, end, done);
    }
  }

  loadNextChunk();
}

function stringMd5(string) {
  return _sparkMd.default.hash(string);
}

function rev(doc, deterministic_revs) {
  var clonedDoc = clone(doc);

  if (!deterministic_revs) {
    return _uuid.default.v4().replace(/-/g, '').toLowerCase();
  }

  delete clonedDoc._rev_tree;
  return stringMd5(JSON.stringify(clonedDoc));
}

var uuid = _uuid.default.v4; // We fetch all leafs of the revision tree, and sort them based on tree length
// and whether they were deleted, undeleted documents with the longest revision
// tree (most edits) win
// The final sort algorithm is slightly documented in a sidebar here:
// http://guide.couchdb.org/draft/conflicts.html

function winningRev(metadata) {
  var winningId;
  var winningPos;
  var winningDeleted;
  var toVisit = metadata.rev_tree.slice();
  var node;

  while (node = toVisit.pop()) {
    var tree = node.ids;
    var branches = tree[2];
    var pos = node.pos;

    if (branches.length) {
      // non-leaf
      for (var i = 0, len = branches.length; i < len; i++) {
        toVisit.push({
          pos: pos + 1,
          ids: branches[i]
        });
      }

      continue;
    }

    var deleted = !!tree[1].deleted;
    var id = tree[0]; // sort by deleted, then pos, then id

    if (!winningId || (winningDeleted !== deleted ? winningDeleted : winningPos !== pos ? winningPos < pos : winningId < id)) {
      winningId = id;
      winningPos = pos;
      winningDeleted = deleted;
    }
  }

  return winningPos + '-' + winningId;
} // Pretty much all below can be combined into a higher order function to
// traverse revisions
// The return value from the callback will be passed as context to all
// children of that node


function traverseRevTree(revs, callback) {
  var toVisit = revs.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var branches = tree[2];
    var newCtx = callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[i],
        ctx: newCtx
      });
    }
  }
}

function sortByPos(a, b) {
  return a.pos - b.pos;
}

function collectLeaves(revs) {
  var leaves = [];
  traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
    if (isLeaf) {
      leaves.push({
        rev: pos + "-" + id,
        pos: pos,
        opts: opts
      });
    }
  });
  leaves.sort(sortByPos).reverse();

  for (var i = 0, len = leaves.length; i < len; i++) {
    delete leaves[i].pos;
  }

  return leaves;
} // returns revs of all conflicts that is leaves such that
// 1. are not deleted and
// 2. are different than winning revision


function collectConflicts(metadata) {
  var win = winningRev(metadata);
  var leaves = collectLeaves(metadata.rev_tree);
  var conflicts = [];

  for (var i = 0, len = leaves.length; i < len; i++) {
    var leaf = leaves[i];

    if (leaf.rev !== win && !leaf.opts.deleted) {
      conflicts.push(leaf.rev);
    }
  }

  return conflicts;
} // compact a tree by marking its non-leafs as missing,
// and return a list of revs to delete


function compactTree(metadata) {
  var revs = [];
  traverseRevTree(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
    if (opts.status === 'available' && !isLeaf) {
      revs.push(pos + '-' + revHash);
      opts.status = 'missing';
    }
  });
  return revs;
} // build up a list of all the paths to the leafs in this revision tree


function rootToLeaf(revs) {
  var paths = [];
  var toVisit = revs.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;
    var history = node.history ? node.history.slice() : [];
    history.push({
      id: id,
      opts: opts
    });

    if (isLeaf) {
      paths.push({
        pos: pos + 1 - history.length,
        ids: history
      });
    }

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[i],
        history: history
      });
    }
  }

  return paths.reverse();
} // for a better overview of what this is doing, read:


function sortByPos$1(a, b) {
  return a.pos - b.pos;
} // classic binary search


function binarySearch(arr, item, comparator) {
  var low = 0;
  var high = arr.length;
  var mid;

  while (low < high) {
    mid = low + high >>> 1;

    if (comparator(arr[mid], item) < 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
} // assuming the arr is sorted, insert the item in the proper place


function insertSorted(arr, item, comparator) {
  var idx = binarySearch(arr, item, comparator);
  arr.splice(idx, 0, item);
} // Turn a path as a flat array into a tree with a single branch.
// If any should be stemmed from the beginning of the array, that's passed
// in as the second argument


function pathToTree(path, numStemmed) {
  var root;
  var leaf;

  for (var i = numStemmed, len = path.length; i < len; i++) {
    var node = path[i];
    var currentLeaf = [node.id, node.opts, []];

    if (leaf) {
      leaf[2].push(currentLeaf);
      leaf = currentLeaf;
    } else {
      root = leaf = currentLeaf;
    }
  }

  return root;
} // compare the IDs of two trees


function compareTree(a, b) {
  return a[0] < b[0] ? -1 : 1;
} // Merge two trees together
// The roots of tree1 and tree2 must be the same revision


function mergeTree(in_tree1, in_tree2) {
  var queue = [{
    tree1: in_tree1,
    tree2: in_tree2
  }];
  var conflicts = false;

  while (queue.length > 0) {
    var item = queue.pop();
    var tree1 = item.tree1;
    var tree2 = item.tree2;

    if (tree1[1].status || tree2[1].status) {
      tree1[1].status = tree1[1].status === 'available' || tree2[1].status === 'available' ? 'available' : 'missing';
    }

    for (var i = 0; i < tree2[2].length; i++) {
      if (!tree1[2][0]) {
        conflicts = 'new_leaf';
        tree1[2][0] = tree2[2][i];
        continue;
      }

      var merged = false;

      for (var j = 0; j < tree1[2].length; j++) {
        if (tree1[2][j][0] === tree2[2][i][0]) {
          queue.push({
            tree1: tree1[2][j],
            tree2: tree2[2][i]
          });
          merged = true;
        }
      }

      if (!merged) {
        conflicts = 'new_branch';
        insertSorted(tree1[2], tree2[2][i], compareTree);
      }
    }
  }

  return {
    conflicts: conflicts,
    tree: in_tree1
  };
}

function doMerge(tree, path, dontExpand) {
  var restree = [];
  var conflicts = false;
  var merged = false;
  var res;

  if (!tree.length) {
    return {
      tree: [path],
      conflicts: 'new_leaf'
    };
  }

  for (var i = 0, len = tree.length; i < len; i++) {
    var branch = tree[i];

    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
      // Paths start at the same position and have the same root, so they need
      // merged
      res = mergeTree(branch.ids, path.ids);
      restree.push({
        pos: branch.pos,
        ids: res.tree
      });
      conflicts = conflicts || res.conflicts;
      merged = true;
    } else if (dontExpand !== true) {
      // The paths start at a different position, take the earliest path and
      // traverse up until it as at the same point from root as the path we
      // want to merge.  If the keys match we return the longer path with the
      // other merged After stemming we dont want to expand the trees
      var t1 = branch.pos < path.pos ? branch : path;
      var t2 = branch.pos < path.pos ? path : branch;
      var diff = t2.pos - t1.pos;
      var candidateParents = [];
      var trees = [];
      trees.push({
        ids: t1.ids,
        diff: diff,
        parent: null,
        parentIdx: null
      });

      while (trees.length > 0) {
        var item = trees.pop();

        if (item.diff === 0) {
          if (item.ids[0] === t2.ids[0]) {
            candidateParents.push(item);
          }

          continue;
        }

        var elements = item.ids[2];

        for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
          trees.push({
            ids: elements[j],
            diff: item.diff - 1,
            parent: item.ids,
            parentIdx: j
          });
        }
      }

      var el = candidateParents[0];

      if (!el) {
        restree.push(branch);
      } else {
        res = mergeTree(el.ids, t2.ids);
        el.parent[2][el.parentIdx] = res.tree;
        restree.push({
          pos: t1.pos,
          ids: t1.ids
        });
        conflicts = conflicts || res.conflicts;
        merged = true;
      }
    } else {
      restree.push(branch);
    }
  } // We didnt find


  if (!merged) {
    restree.push(path);
  }

  restree.sort(sortByPos$1);
  return {
    tree: restree,
    conflicts: conflicts || 'internal_node'
  };
} // To ensure we dont grow the revision tree infinitely, we stem old revisions


function stem(tree, depth) {
  // First we break out the tree into a complete list of root to leaf paths
  var paths = rootToLeaf(tree);
  var stemmedRevs;
  var result;

  for (var i = 0, len = paths.length; i < len; i++) {
    // Then for each path, we cut off the start of the path based on the
    // `depth` to stem to, and generate a new set of flat trees
    var path = paths[i];
    var stemmed = path.ids;
    var node;

    if (stemmed.length > depth) {
      // only do the stemming work if we actually need to stem
      if (!stemmedRevs) {
        stemmedRevs = {}; // avoid allocating this object unnecessarily
      }

      var numStemmed = stemmed.length - depth;
      node = {
        pos: path.pos + numStemmed,
        ids: pathToTree(stemmed, numStemmed)
      };

      for (var s = 0; s < numStemmed; s++) {
        var rev = path.pos + s + '-' + stemmed[s].id;
        stemmedRevs[rev] = true;
      }
    } else {
      // no need to actually stem
      node = {
        pos: path.pos,
        ids: pathToTree(stemmed, 0)
      };
    } // Then we remerge all those flat trees together, ensuring that we dont
    // connect trees that would go beyond the depth limit


    if (result) {
      result = doMerge(result, node, true).tree;
    } else {
      result = [node];
    }
  } // this is memory-heavy per Chrome profiler, avoid unless we actually stemmed


  if (stemmedRevs) {
    traverseRevTree(result, function (isLeaf, pos, revHash) {
      // some revisions may have been removed in a branch but not in another
      delete stemmedRevs[pos + '-' + revHash];
    });
  }

  return {
    tree: result,
    revs: stemmedRevs ? Object.keys(stemmedRevs) : []
  };
}

function merge(tree, path, depth) {
  var newTree = doMerge(tree, path);
  var stemmed = stem(newTree.tree, depth);
  return {
    tree: stemmed.tree,
    stemmedRevs: stemmed.revs,
    conflicts: newTree.conflicts
  };
} // return true if a rev exists in the rev tree, false otherwise


function revExists(revs, rev) {
  var toVisit = revs.slice();
  var splitRev = rev.split('-');
  var targetPos = parseInt(splitRev[0], 10);
  var targetId = splitRev[1];
  var node;

  while (node = toVisit.pop()) {
    if (node.pos === targetPos && node.ids[0] === targetId) {
      return true;
    }

    var branches = node.ids[2];

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: node.pos + 1,
        ids: branches[i]
      });
    }
  }

  return false;
}

function getTrees(node) {
  return node.ids;
} // check if a specific revision of a doc has been deleted
//  - metadata: the metadata object from the doc store
//  - rev: (optional) the revision to check. defaults to winning revision


function isDeleted(metadata, rev) {
  if (!rev) {
    rev = winningRev(metadata);
  }

  var id = rev.substring(rev.indexOf('-') + 1);
  var toVisit = metadata.rev_tree.map(getTrees);
  var tree;

  while (tree = toVisit.pop()) {
    if (tree[0] === id) {
      return !!tree[1].deleted;
    }

    toVisit = toVisit.concat(tree[2]);
  }
}

function isLocalId(id) {
  return /^_local/.test(id);
} // returns the current leaf node for a given revision


function latest(rev, metadata) {
  var toVisit = metadata.rev_tree.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;
    var history = node.history ? node.history.slice() : [];
    history.push({
      id: id,
      pos: pos,
      opts: opts
    });

    if (isLeaf) {
      for (var i = 0, len = history.length; i < len; i++) {
        var historyNode = history[i];
        var historyRev = historyNode.pos + '-' + historyNode.id;

        if (historyRev === rev) {
          // return the rev of this leaf
          return pos + '-' + id;
        }
      }
    }

    for (var j = 0, l = branches.length; j < l; j++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[j],
        history: history
      });
    }
  }
  /* istanbul ignore next */


  throw new Error('Unable to resolve latest revision for id ' + metadata.id + ', rev ' + rev);
}

(0, _inherits.default)(Changes$1, _events.EventEmitter);

function tryCatchInChangeListener(self, change, pending, lastSeq) {
  // isolate try/catches to avoid V8 deoptimizations
  try {
    self.emit('change', change, pending, lastSeq);
  } catch (e) {
    guardedConsole('error', 'Error in .on("change", function):', e);
  }
}

function Changes$1(db, opts, callback) {
  _events.EventEmitter.call(this);

  var self = this;
  this.db = db;
  opts = opts ? clone(opts) : {};
  var complete = opts.complete = once(function (err, resp) {
    if (err) {
      if (listenerCount(self, 'error') > 0) {
        self.emit('error', err);
      }
    } else {
      self.emit('complete', resp);
    }

    self.removeAllListeners();
    db.removeListener('destroyed', onDestroy);
  });

  if (callback) {
    self.on('complete', function (resp) {
      callback(null, resp);
    });
    self.on('error', callback);
  }

  function onDestroy() {
    self.cancel();
  }

  db.once('destroyed', onDestroy);

  opts.onChange = function (change, pending, lastSeq) {
    /* istanbul ignore if */
    if (self.isCancelled) {
      return;
    }

    tryCatchInChangeListener(self, change, pending, lastSeq);
  };

  var promise = new Promise(function (fulfill, reject) {
    opts.complete = function (err, res) {
      if (err) {
        reject(err);
      } else {
        fulfill(res);
      }
    };
  });
  self.once('cancel', function () {
    db.removeListener('destroyed', onDestroy);
    opts.complete(null, {
      status: 'cancelled'
    });
  });
  this.then = promise.then.bind(promise);
  this['catch'] = promise['catch'].bind(promise);
  this.then(function (result) {
    complete(null, result);
  }, complete);

  if (!db.taskqueue.isReady) {
    db.taskqueue.addTask(function (failed) {
      if (failed) {
        opts.complete(failed);
      } else if (self.isCancelled) {
        self.emit('cancel');
      } else {
        self.validateChanges(opts);
      }
    });
  } else {
    self.validateChanges(opts);
  }
}

Changes$1.prototype.cancel = function () {
  this.isCancelled = true;

  if (this.db.taskqueue.isReady) {
    this.emit('cancel');
  }
};

function processChange(doc, metadata, opts) {
  var changeList = [{
    rev: doc._rev
  }];

  if (opts.style === 'all_docs') {
    changeList = collectLeaves(metadata.rev_tree).map(function (x) {
      return {
        rev: x.rev
      };
    });
  }

  var change = {
    id: metadata.id,
    changes: changeList,
    doc: doc
  };

  if (isDeleted(metadata, doc._rev)) {
    change.deleted = true;
  }

  if (opts.conflicts) {
    change.doc._conflicts = collectConflicts(metadata);

    if (!change.doc._conflicts.length) {
      delete change.doc._conflicts;
    }
  }

  return change;
}

Changes$1.prototype.validateChanges = function (opts) {
  var callback = opts.complete;
  var self = this;
  /* istanbul ignore else */

  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.validate(opts, function (err) {
      if (err) {
        return callback(err);
      }

      self.doChanges(opts);
    });
  } else {
    self.doChanges(opts);
  }
};

Changes$1.prototype.doChanges = function (opts) {
  var self = this;
  var callback = opts.complete;
  opts = clone(opts);

  if ('live' in opts && !('continuous' in opts)) {
    opts.continuous = opts.live;
  }

  opts.processChange = processChange;

  if (opts.since === 'latest') {
    opts.since = 'now';
  }

  if (!opts.since) {
    opts.since = 0;
  }

  if (opts.since === 'now') {
    this.db.info().then(function (info) {
      /* istanbul ignore if */
      if (self.isCancelled) {
        callback(null, {
          status: 'cancelled'
        });
        return;
      }

      opts.since = info.update_seq;
      self.doChanges(opts);
    }, callback);
    return;
  }
  /* istanbul ignore else */


  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.normalize(opts);

    if (PouchDB._changesFilterPlugin.shouldFilter(this, opts)) {
      return PouchDB._changesFilterPlugin.filter(this, opts);
    }
  } else {
    ['doc_ids', 'filter', 'selector', 'view'].forEach(function (key) {
      if (key in opts) {
        guardedConsole('warn', 'The "' + key + '" option was passed in to changes/replicate, ' + 'but pouchdb-changes-filter plugin is not installed, so it ' + 'was ignored. Please install the plugin to enable filtering.');
      }
    });
  }

  if (!('descending' in opts)) {
    opts.descending = false;
  } // 0 and 1 should return 1 document


  opts.limit = opts.limit === 0 ? 1 : opts.limit;
  opts.complete = callback;

  var newPromise = this.db._changes(opts);
  /* istanbul ignore else */


  if (newPromise && typeof newPromise.cancel === 'function') {
    var cancel = self.cancel;
    self.cancel = (0, _argsarray.default)(function (args) {
      newPromise.cancel();
      cancel.apply(this, args);
    });
  }
};
/*
 * A generic pouch adapter
 */


function compare(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Wrapper for functions that call the bulkdocs api with a single doc,
// if the first result is an error, return an error


function yankError(callback, docId) {
  return function (err, results) {
    if (err || results[0] && results[0].error) {
      err = err || results[0];
      err.docId = docId;
      callback(err);
    } else {
      callback(null, results.length ? results[0] : results);
    }
  };
} // clean docs given to us by the user


function cleanDocs(docs) {
  for (var i = 0; i < docs.length; i++) {
    var doc = docs[i];

    if (doc._deleted) {
      delete doc._attachments; // ignore atts for deleted docs
    } else if (doc._attachments) {
      // filter out extraneous keys from _attachments
      var atts = Object.keys(doc._attachments);

      for (var j = 0; j < atts.length; j++) {
        var att = atts[j];
        doc._attachments[att] = pick(doc._attachments[att], ['data', 'digest', 'content_type', 'length', 'revpos', 'stub']);
      }
    }
  }
} // compare two docs, first by _id then by _rev


function compareByIdThenRev(a, b) {
  var idCompare = compare(a._id, b._id);

  if (idCompare !== 0) {
    return idCompare;
  }

  var aStart = a._revisions ? a._revisions.start : 0;
  var bStart = b._revisions ? b._revisions.start : 0;
  return compare(aStart, bStart);
} // for every node in a revision tree computes its distance from the closest
// leaf


function computeHeight(revs) {
  var height = {};
  var edges = [];
  traverseRevTree(revs, function (isLeaf, pos, id, prnt) {
    var rev$$1 = pos + "-" + id;

    if (isLeaf) {
      height[rev$$1] = 0;
    }

    if (prnt !== undefined) {
      edges.push({
        from: prnt,
        to: rev$$1
      });
    }

    return rev$$1;
  });
  edges.reverse();
  edges.forEach(function (edge) {
    if (height[edge.from] === undefined) {
      height[edge.from] = 1 + height[edge.to];
    } else {
      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
  });
  return height;
}

function allDocsKeysParse(opts) {
  var keys = 'limit' in opts ? opts.keys.slice(opts.skip, opts.limit + opts.skip) : opts.skip > 0 ? opts.keys.slice(opts.skip) : opts.keys;
  opts.keys = keys;
  opts.skip = 0;
  delete opts.limit;

  if (opts.descending) {
    keys.reverse();
    opts.descending = false;
  }
} // all compaction is done in a queue, to avoid attaching
// too many listeners at once


function doNextCompaction(self) {
  var task = self._compactionQueue[0];
  var opts = task.opts;
  var callback = task.callback;
  self.get('_local/compaction').catch(function () {
    return false;
  }).then(function (doc) {
    if (doc && doc.last_seq) {
      opts.last_seq = doc.last_seq;
    }

    self._compact(opts, function (err, res) {
      /* istanbul ignore if */
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }

      (0, _immediate.default)(function () {
        self._compactionQueue.shift();

        if (self._compactionQueue.length) {
          doNextCompaction(self);
        }
      });
    });
  });
}

function attachmentNameError(name) {
  if (name.charAt(0) === '_') {
    return name + ' is not a valid attachment name, attachment ' + 'names cannot start with \'_\'';
  }

  return false;
}

(0, _inherits.default)(AbstractPouchDB, _events.EventEmitter);

function AbstractPouchDB() {
  _events.EventEmitter.call(this); // re-bind prototyped methods


  for (var p in AbstractPouchDB.prototype) {
    if (typeof this[p] === 'function') {
      this[p] = this[p].bind(this);
    }
  }
}

AbstractPouchDB.prototype.post = adapterFun('post', function (doc, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (typeof doc !== 'object' || Array.isArray(doc)) {
    return callback(createError(NOT_AN_OBJECT));
  }

  this.bulkDocs({
    docs: [doc]
  }, opts, yankError(callback, doc._id));
});
AbstractPouchDB.prototype.put = adapterFun('put', function (doc, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (typeof doc !== 'object' || Array.isArray(doc)) {
    return cb(createError(NOT_AN_OBJECT));
  }

  invalidIdError(doc._id);

  if (isLocalId(doc._id) && typeof this._putLocal === 'function') {
    if (doc._deleted) {
      return this._removeLocal(doc, cb);
    } else {
      return this._putLocal(doc, cb);
    }
  }

  var self = this;

  if (opts.force && doc._rev) {
    transformForceOptionToNewEditsOption();
    putDoc(function (err) {
      var result = err ? null : {
        ok: true,
        id: doc._id,
        rev: doc._rev
      };
      cb(err, result);
    });
  } else {
    putDoc(cb);
  }

  function transformForceOptionToNewEditsOption() {
    var parts = doc._rev.split('-');

    var oldRevId = parts[1];
    var oldRevNum = parseInt(parts[0], 10);
    var newRevNum = oldRevNum + 1;
    var newRevId = rev();
    doc._revisions = {
      start: newRevNum,
      ids: [newRevId, oldRevId]
    };
    doc._rev = newRevNum + '-' + newRevId;
    opts.new_edits = false;
  }

  function putDoc(next) {
    if (typeof self._put === 'function' && opts.new_edits !== false) {
      self._put(doc, opts, next);
    } else {
      self.bulkDocs({
        docs: [doc]
      }, opts, yankError(next, doc._id));
    }
  }
});
AbstractPouchDB.prototype.putAttachment = adapterFun('putAttachment', function (docId, attachmentId, rev$$1, blob, type) {
  var api = this;

  if (typeof type === 'function') {
    type = blob;
    blob = rev$$1;
    rev$$1 = null;
  } // Lets fix in https://github.com/pouchdb/pouchdb/issues/3267

  /* istanbul ignore if */


  if (typeof type === 'undefined') {
    type = blob;
    blob = rev$$1;
    rev$$1 = null;
  }

  if (!type) {
    guardedConsole('warn', 'Attachment', attachmentId, 'on document', docId, 'is missing content_type');
  }

  function createAttachment(doc) {
    var prevrevpos = '_rev' in doc ? parseInt(doc._rev, 10) : 0;
    doc._attachments = doc._attachments || {};
    doc._attachments[attachmentId] = {
      content_type: type,
      data: blob,
      revpos: ++prevrevpos
    };
    return api.put(doc);
  }

  return api.get(docId).then(function (doc) {
    if (doc._rev !== rev$$1) {
      throw createError(REV_CONFLICT);
    }

    return createAttachment(doc);
  }, function (err) {
    // create new doc

    /* istanbul ignore else */
    if (err.reason === MISSING_DOC.message) {
      return createAttachment({
        _id: docId
      });
    } else {
      throw err;
    }
  });
});
AbstractPouchDB.prototype.removeAttachment = adapterFun('removeAttachment', function (docId, attachmentId, rev$$1, callback) {
  var self = this;
  self.get(docId, function (err, obj) {
    /* istanbul ignore if */
    if (err) {
      callback(err);
      return;
    }

    if (obj._rev !== rev$$1) {
      callback(createError(REV_CONFLICT));
      return;
    }
    /* istanbul ignore if */


    if (!obj._attachments) {
      return callback();
    }

    delete obj._attachments[attachmentId];

    if (Object.keys(obj._attachments).length === 0) {
      delete obj._attachments;
    }

    self.put(obj, callback);
  });
});
AbstractPouchDB.prototype.remove = adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
  var doc;

  if (typeof optsOrRev === 'string') {
    // id, rev, opts, callback style
    doc = {
      _id: docOrId,
      _rev: optsOrRev
    };

    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
  } else {
    // doc, opts, callback style
    doc = docOrId;

    if (typeof optsOrRev === 'function') {
      callback = optsOrRev;
      opts = {};
    } else {
      callback = opts;
      opts = optsOrRev;
    }
  }

  opts = opts || {};
  opts.was_delete = true;
  var newDoc = {
    _id: doc._id,
    _rev: doc._rev || opts.rev
  };
  newDoc._deleted = true;

  if (isLocalId(newDoc._id) && typeof this._removeLocal === 'function') {
    return this._removeLocal(doc, callback);
  }

  this.bulkDocs({
    docs: [newDoc]
  }, opts, yankError(callback, newDoc._id));
});
AbstractPouchDB.prototype.revsDiff = adapterFun('revsDiff', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var ids = Object.keys(req);

  if (!ids.length) {
    return callback(null, {});
  }

  var count = 0;
  var missing = new ExportedMap();

  function addToMissing(id, revId) {
    if (!missing.has(id)) {
      missing.set(id, {
        missing: []
      });
    }

    missing.get(id).missing.push(revId);
  }

  function processDoc(id, rev_tree) {
    // Is this fast enough? Maybe we should switch to a set simulated by a map
    var missingForId = req[id].slice(0);
    traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev$$1 = pos + '-' + revHash;
      var idx = missingForId.indexOf(rev$$1);

      if (idx === -1) {
        return;
      }

      missingForId.splice(idx, 1);
      /* istanbul ignore if */

      if (opts.status !== 'available') {
        addToMissing(id, rev$$1);
      }
    }); // Traversing the tree is synchronous, so now `missingForId` contains
    // revisions that were not found in the tree

    missingForId.forEach(function (rev$$1) {
      addToMissing(id, rev$$1);
    });
  }

  ids.map(function (id) {
    this._getRevisionTree(id, function (err, rev_tree) {
      if (err && err.status === 404 && err.message === 'missing') {
        missing.set(id, {
          missing: req[id]
        });
      } else if (err) {
        /* istanbul ignore next */
        return callback(err);
      } else {
        processDoc(id, rev_tree);
      }

      if (++count === ids.length) {
        // convert LazyMap to object
        var missingObj = {};
        missing.forEach(function (value, key) {
          missingObj[key] = value;
        });
        return callback(null, missingObj);
      }
    });
  }, this);
}); // _bulk_get API for faster replication, as described in
// https://github.com/apache/couchdb-chttpd/pull/33
// At the "abstract" level, it will just run multiple get()s in
// parallel, because this isn't much of a performance cost
// for local databases (except the cost of multiple transactions, which is
// small). The http adapter overrides this in order
// to do a more efficient single HTTP request.

AbstractPouchDB.prototype.bulkGet = adapterFun('bulkGet', function (opts, callback) {
  bulkGet(this, opts, callback);
}); // compact one document and fire callback
// by compacting we mean removing all revisions which
// are further from the leaf in revision tree than max_height

AbstractPouchDB.prototype.compactDocument = adapterFun('compactDocument', function (docId, maxHeight, callback) {
  var self = this;

  this._getRevisionTree(docId, function (err, revTree) {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    var height = computeHeight(revTree);
    var candidates = [];
    var revs = [];
    Object.keys(height).forEach(function (rev$$1) {
      if (height[rev$$1] > maxHeight) {
        candidates.push(rev$$1);
      }
    });
    traverseRevTree(revTree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev$$1 = pos + '-' + revHash;

      if (opts.status === 'available' && candidates.indexOf(rev$$1) !== -1) {
        revs.push(rev$$1);
      }
    });

    self._doCompaction(docId, revs, callback);
  });
}); // compact the whole database using single document
// compaction

AbstractPouchDB.prototype.compact = adapterFun('compact', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  opts = opts || {};
  self._compactionQueue = self._compactionQueue || [];

  self._compactionQueue.push({
    opts: opts,
    callback: callback
  });

  if (self._compactionQueue.length === 1) {
    doNextCompaction(self);
  }
});

AbstractPouchDB.prototype._compact = function (opts, callback) {
  var self = this;
  var changesOpts = {
    return_docs: false,
    last_seq: opts.last_seq || 0
  };
  var promises = [];

  function onChange(row) {
    promises.push(self.compactDocument(row.id, 0));
  }

  function onComplete(resp) {
    var lastSeq = resp.last_seq;
    Promise.all(promises).then(function () {
      return upsert(self, '_local/compaction', function deltaFunc(doc) {
        if (!doc.last_seq || doc.last_seq < lastSeq) {
          doc.last_seq = lastSeq;
          return doc;
        }

        return false; // somebody else got here first, don't update
      });
    }).then(function () {
      callback(null, {
        ok: true
      });
    }).catch(callback);
  }

  self.changes(changesOpts).on('change', onChange).on('complete', onComplete).on('error', callback);
};
/* Begin api wrappers. Specific functionality to storage belongs in the
   _[method] */


AbstractPouchDB.prototype.get = adapterFun('get', function (id, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (typeof id !== 'string') {
    return cb(createError(INVALID_ID));
  }

  if (isLocalId(id) && typeof this._getLocal === 'function') {
    return this._getLocal(id, cb);
  }

  var leaves = [],
      self = this;

  function finishOpenRevs() {
    var result = [];
    var count = leaves.length;
    /* istanbul ignore if */

    if (!count) {
      return cb(null, result);
    } // order with open_revs is unspecified


    leaves.forEach(function (leaf) {
      self.get(id, {
        rev: leaf,
        revs: opts.revs,
        latest: opts.latest,
        attachments: opts.attachments,
        binary: opts.binary
      }, function (err, doc) {
        if (!err) {
          // using latest=true can produce duplicates
          var existing;

          for (var i = 0, l = result.length; i < l; i++) {
            if (result[i].ok && result[i].ok._rev === doc._rev) {
              existing = true;
              break;
            }
          }

          if (!existing) {
            result.push({
              ok: doc
            });
          }
        } else {
          result.push({
            missing: leaf
          });
        }

        count--;

        if (!count) {
          cb(null, result);
        }
      });
    });
  }

  if (opts.open_revs) {
    if (opts.open_revs === "all") {
      this._getRevisionTree(id, function (err, rev_tree) {
        /* istanbul ignore if */
        if (err) {
          return cb(err);
        }

        leaves = collectLeaves(rev_tree).map(function (leaf) {
          return leaf.rev;
        });
        finishOpenRevs();
      });
    } else {
      if (Array.isArray(opts.open_revs)) {
        leaves = opts.open_revs;

        for (var i = 0; i < leaves.length; i++) {
          var l = leaves[i]; // looks like it's the only thing couchdb checks

          if (!(typeof l === "string" && /^\d+-/.test(l))) {
            return cb(createError(INVALID_REV));
          }
        }

        finishOpenRevs();
      } else {
        return cb(createError(UNKNOWN_ERROR, 'function_clause'));
      }
    }

    return; // open_revs does not like other options
  }

  return this._get(id, opts, function (err, result) {
    if (err) {
      err.docId = id;
      return cb(err);
    }

    var doc = result.doc;
    var metadata = result.metadata;
    var ctx = result.ctx;

    if (opts.conflicts) {
      var conflicts = collectConflicts(metadata);

      if (conflicts.length) {
        doc._conflicts = conflicts;
      }
    }

    if (isDeleted(metadata, doc._rev)) {
      doc._deleted = true;
    }

    if (opts.revs || opts.revs_info) {
      var splittedRev = doc._rev.split('-');

      var revNo = parseInt(splittedRev[0], 10);
      var revHash = splittedRev[1];
      var paths = rootToLeaf(metadata.rev_tree);
      var path = null;

      for (var i = 0; i < paths.length; i++) {
        var currentPath = paths[i];
        var hashIndex = currentPath.ids.map(function (x) {
          return x.id;
        }).indexOf(revHash);
        var hashFoundAtRevPos = hashIndex === revNo - 1;

        if (hashFoundAtRevPos || !path && hashIndex !== -1) {
          path = currentPath;
        }
      }
      /* istanbul ignore if */


      if (!path) {
        err = new Error('invalid rev tree');
        err.docId = id;
        return cb(err);
      }

      var indexOfRev = path.ids.map(function (x) {
        return x.id;
      }).indexOf(doc._rev.split('-')[1]) + 1;
      var howMany = path.ids.length - indexOfRev;
      path.ids.splice(indexOfRev, howMany);
      path.ids.reverse();

      if (opts.revs) {
        doc._revisions = {
          start: path.pos + path.ids.length - 1,
          ids: path.ids.map(function (rev$$1) {
            return rev$$1.id;
          })
        };
      }

      if (opts.revs_info) {
        var pos = path.pos + path.ids.length;
        doc._revs_info = path.ids.map(function (rev$$1) {
          pos--;
          return {
            rev: pos + '-' + rev$$1.id,
            status: rev$$1.opts.status
          };
        });
      }
    }

    if (opts.attachments && doc._attachments) {
      var attachments = doc._attachments;
      var count = Object.keys(attachments).length;

      if (count === 0) {
        return cb(null, doc);
      }

      Object.keys(attachments).forEach(function (key) {
        this._getAttachment(doc._id, key, attachments[key], {
          // Previously the revision handling was done in adapter.js
          // getAttachment, however since idb-next doesnt we need to
          // pass the rev through
          rev: doc._rev,
          binary: opts.binary,
          ctx: ctx
        }, function (err, data) {
          var att = doc._attachments[key];
          att.data = data;
          delete att.stub;
          delete att.length;

          if (! --count) {
            cb(null, doc);
          }
        });
      }, self);
    } else {
      if (doc._attachments) {
        for (var key in doc._attachments) {
          /* istanbul ignore else */
          if (doc._attachments.hasOwnProperty(key)) {
            doc._attachments[key].stub = true;
          }
        }
      }

      cb(null, doc);
    }
  });
}); // TODO: I dont like this, it forces an extra read for every
// attachment read and enforces a confusing api between
// adapter.js and the adapter implementation

AbstractPouchDB.prototype.getAttachment = adapterFun('getAttachment', function (docId, attachmentId, opts, callback) {
  var self = this;

  if (opts instanceof Function) {
    callback = opts;
    opts = {};
  }

  this._get(docId, opts, function (err, res) {
    if (err) {
      return callback(err);
    }

    if (res.doc._attachments && res.doc._attachments[attachmentId]) {
      opts.ctx = res.ctx;
      opts.binary = true;

      self._getAttachment(docId, attachmentId, res.doc._attachments[attachmentId], opts, callback);
    } else {
      return callback(createError(MISSING_DOC));
    }
  });
});
AbstractPouchDB.prototype.allDocs = adapterFun('allDocs', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts.skip = typeof opts.skip !== 'undefined' ? opts.skip : 0;

  if (opts.start_key) {
    opts.startkey = opts.start_key;
  }

  if (opts.end_key) {
    opts.endkey = opts.end_key;
  }

  if ('keys' in opts) {
    if (!Array.isArray(opts.keys)) {
      return callback(new TypeError('options.keys must be an array'));
    }

    var incompatibleOpt = ['startkey', 'endkey', 'key'].filter(function (incompatibleOpt) {
      return incompatibleOpt in opts;
    })[0];

    if (incompatibleOpt) {
      callback(createError(QUERY_PARSE_ERROR, 'Query parameter `' + incompatibleOpt + '` is not compatible with multi-get'));
      return;
    }

    if (!isRemote(this)) {
      allDocsKeysParse(opts);

      if (opts.keys.length === 0) {
        return this._allDocs({
          limit: 0
        }, callback);
      }
    }
  }

  return this._allDocs(opts, callback);
});

AbstractPouchDB.prototype.changes = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {}; // By default set return_docs to false if the caller has opts.live = true,
  // this will prevent us from collecting the set of changes indefinitely
  // resulting in growing memory

  opts.return_docs = 'return_docs' in opts ? opts.return_docs : !opts.live;
  return new Changes$1(this, opts, callback);
};

AbstractPouchDB.prototype.close = adapterFun('close', function (callback) {
  this._closed = true;
  this.emit('closed');
  return this._close(callback);
});
AbstractPouchDB.prototype.info = adapterFun('info', function (callback) {
  var self = this;

  this._info(function (err, info) {
    if (err) {
      return callback(err);
    } // assume we know better than the adapter, unless it informs us


    info.db_name = info.db_name || self.name;
    info.auto_compaction = !!(self.auto_compaction && !isRemote(self));
    info.adapter = self.adapter;
    callback(null, info);
  });
});
AbstractPouchDB.prototype.id = adapterFun('id', function (callback) {
  return this._id(callback);
});
/* istanbul ignore next */

AbstractPouchDB.prototype.type = function () {
  return typeof this._type === 'function' ? this._type() : this.adapter;
};

AbstractPouchDB.prototype.bulkDocs = adapterFun('bulkDocs', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {};

  if (Array.isArray(req)) {
    req = {
      docs: req
    };
  }

  if (!req || !req.docs || !Array.isArray(req.docs)) {
    return callback(createError(MISSING_BULK_DOCS));
  }

  for (var i = 0; i < req.docs.length; ++i) {
    if (typeof req.docs[i] !== 'object' || Array.isArray(req.docs[i])) {
      return callback(createError(NOT_AN_OBJECT));
    }
  }

  var attachmentError;
  req.docs.forEach(function (doc) {
    if (doc._attachments) {
      Object.keys(doc._attachments).forEach(function (name) {
        attachmentError = attachmentError || attachmentNameError(name);

        if (!doc._attachments[name].content_type) {
          guardedConsole('warn', 'Attachment', name, 'on document', doc._id, 'is missing content_type');
        }
      });
    }
  });

  if (attachmentError) {
    return callback(createError(BAD_REQUEST, attachmentError));
  }

  if (!('new_edits' in opts)) {
    if ('new_edits' in req) {
      opts.new_edits = req.new_edits;
    } else {
      opts.new_edits = true;
    }
  }

  var adapter = this;

  if (!opts.new_edits && !isRemote(adapter)) {
    // ensure revisions of the same doc are sorted, so that
    // the local adapter processes them correctly (#2935)
    req.docs.sort(compareByIdThenRev);
  }

  cleanDocs(req.docs); // in the case of conflicts, we want to return the _ids to the user
  // however, the underlying adapter may destroy the docs array, so
  // create a copy here

  var ids = req.docs.map(function (doc) {
    return doc._id;
  });
  return this._bulkDocs(req, opts, function (err, res) {
    if (err) {
      return callback(err);
    }

    if (!opts.new_edits) {
      // this is what couch does when new_edits is false
      res = res.filter(function (x) {
        return x.error;
      });
    } // add ids for error/conflict responses (not required for CouchDB)


    if (!isRemote(adapter)) {
      for (var i = 0, l = res.length; i < l; i++) {
        res[i].id = res[i].id || ids[i];
      }
    }

    callback(null, res);
  });
});
AbstractPouchDB.prototype.registerDependentDatabase = adapterFun('registerDependentDatabase', function (dependentDb, callback) {
  var depDB = new this.constructor(dependentDb, this.__opts);

  function diffFun(doc) {
    doc.dependentDbs = doc.dependentDbs || {};

    if (doc.dependentDbs[dependentDb]) {
      return false; // no update required
    }

    doc.dependentDbs[dependentDb] = true;
    return doc;
  }

  upsert(this, '_local/_pouch_dependentDbs', diffFun).then(function () {
    callback(null, {
      db: depDB
    });
  }).catch(callback);
});
AbstractPouchDB.prototype.destroy = adapterFun('destroy', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  var usePrefix = 'use_prefix' in self ? self.use_prefix : true;

  function destroyDb() {
    // call destroy method of the particular adaptor
    self._destroy(opts, function (err, resp) {
      if (err) {
        return callback(err);
      }

      self._destroyed = true;
      self.emit('destroyed');
      callback(null, resp || {
        'ok': true
      });
    });
  }

  if (isRemote(self)) {
    // no need to check for dependent DBs if it's a remote DB
    return destroyDb();
  }

  self.get('_local/_pouch_dependentDbs', function (err, localDoc) {
    if (err) {
      /* istanbul ignore if */
      if (err.status !== 404) {
        return callback(err);
      } else {
        // no dependencies
        return destroyDb();
      }
    }

    var dependentDbs = localDoc.dependentDbs;
    var PouchDB = self.constructor;
    var deletedMap = Object.keys(dependentDbs).map(function (name) {
      // use_prefix is only false in the browser

      /* istanbul ignore next */
      var trueName = usePrefix ? name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
      return new PouchDB(trueName, self.__opts).destroy();
    });
    Promise.all(deletedMap).then(destroyDb, callback);
  });
});

function TaskQueue() {
  this.isReady = false;
  this.failed = false;
  this.queue = [];
}

TaskQueue.prototype.execute = function () {
  var fun;

  if (this.failed) {
    while (fun = this.queue.shift()) {
      fun(this.failed);
    }
  } else {
    while (fun = this.queue.shift()) {
      fun();
    }
  }
};

TaskQueue.prototype.fail = function (err) {
  this.failed = err;
  this.execute();
};

TaskQueue.prototype.ready = function (db) {
  this.isReady = true;
  this.db = db;
  this.execute();
};

TaskQueue.prototype.addTask = function (fun) {
  this.queue.push(fun);

  if (this.failed) {
    this.execute();
  }
};

function parseAdapter(name, opts) {
  var match = name.match(/([a-z-]*):\/\/(.*)/);

  if (match) {
    // the http adapter expects the fully qualified name
    return {
      name: /https?/.test(match[1]) ? match[1] + '://' + match[2] : match[2],
      adapter: match[1]
    };
  }

  var adapters = PouchDB.adapters;
  var preferredAdapters = PouchDB.preferredAdapters;
  var prefix = PouchDB.prefix;
  var adapterName = opts.adapter;

  if (!adapterName) {
    // automatically determine adapter
    for (var i = 0; i < preferredAdapters.length; ++i) {
      adapterName = preferredAdapters[i]; // check for browsers that have been upgraded from websql-only to websql+idb

      /* istanbul ignore if */

      if (adapterName === 'idb' && 'websql' in adapters && hasLocalStorage() && localStorage['_pouch__websqldb_' + prefix + name]) {
        // log it, because this can be confusing during development
        guardedConsole('log', 'PouchDB is downgrading "' + name + '" to WebSQL to' + ' avoid data loss, because it was already opened with WebSQL.');
        continue; // keep using websql to avoid user data loss
      }

      break;
    }
  }

  var adapter = adapters[adapterName]; // if adapter is invalid, then an error will be thrown later

  var usePrefix = adapter && 'use_prefix' in adapter ? adapter.use_prefix : true;
  return {
    name: usePrefix ? prefix + name : name,
    adapter: adapterName
  };
} // OK, so here's the deal. Consider this code:
//     var db1 = new PouchDB('foo');
//     var db2 = new PouchDB('foo');
//     db1.destroy();
// ^ these two both need to emit 'destroyed' events,
// as well as the PouchDB constructor itself.
// So we have one db object (whichever one got destroy() called on it)
// responsible for emitting the initial event, which then gets emitted
// by the constructor, which then broadcasts it to any other dbs
// that may have been created with the same name.


function prepareForDestruction(self) {
  function onDestroyed(from_constructor) {
    self.removeListener('closed', onClosed);

    if (!from_constructor) {
      self.constructor.emit('destroyed', self.name);
    }
  }

  function onClosed() {
    self.removeListener('destroyed', onDestroyed);
    self.constructor.emit('unref', self);
  }

  self.once('destroyed', onDestroyed);
  self.once('closed', onClosed);
  self.constructor.emit('ref', self);
}

(0, _inherits.default)(PouchDB, AbstractPouchDB);

function PouchDB(name, opts) {
  // In Node our test suite only tests this for PouchAlt unfortunately

  /* istanbul ignore if */
  if (!(this instanceof PouchDB)) {
    return new PouchDB(name, opts);
  }

  var self = this;
  opts = opts || {};

  if (name && typeof name === 'object') {
    opts = name;
    name = opts.name;
    delete opts.name;
  }

  if (opts.deterministic_revs === undefined) {
    opts.deterministic_revs = true;
  }

  this.__opts = opts = clone(opts);
  self.auto_compaction = opts.auto_compaction;
  self.prefix = PouchDB.prefix;

  if (typeof name !== 'string') {
    throw new Error('Missing/invalid DB name');
  }

  var prefixedName = (opts.prefix || '') + name;
  var backend = parseAdapter(prefixedName, opts);
  opts.name = backend.name;
  opts.adapter = opts.adapter || backend.adapter;
  self.name = name;
  self._adapter = opts.adapter;
  PouchDB.emit('debug', ['adapter', 'Picked adapter: ', opts.adapter]);

  if (!PouchDB.adapters[opts.adapter] || !PouchDB.adapters[opts.adapter].valid()) {
    throw new Error('Invalid Adapter: ' + opts.adapter);
  }

  AbstractPouchDB.call(self);
  self.taskqueue = new TaskQueue();
  self.adapter = opts.adapter;
  PouchDB.adapters[opts.adapter].call(self, opts, function (err) {
    if (err) {
      return self.taskqueue.fail(err);
    }

    prepareForDestruction(self);
    self.emit('created', self);
    PouchDB.emit('created', self.name);
    self.taskqueue.ready(self);
  });
} // AbortController was introduced quite a while after fetch and
// isnt required for PouchDB to function so polyfill if needed


var a = typeof AbortController !== 'undefined' ? AbortController : function () {
  return {
    abort: function () {}
  };
};
var f$1 = fetch;
var h = Headers;
PouchDB.adapters = {};
PouchDB.preferredAdapters = [];
PouchDB.prefix = '_pouch_';
var eventEmitter = new _events.EventEmitter();

function setUpEventEmitter(Pouch) {
  Object.keys(_events.EventEmitter.prototype).forEach(function (key) {
    if (typeof _events.EventEmitter.prototype[key] === 'function') {
      Pouch[key] = eventEmitter[key].bind(eventEmitter);
    }
  }); // these are created in constructor.js, and allow us to notify each DB with
  // the same name that it was destroyed, via the constructor object

  var destructListeners = Pouch._destructionListeners = new ExportedMap();
  Pouch.on('ref', function onConstructorRef(db) {
    if (!destructListeners.has(db.name)) {
      destructListeners.set(db.name, []);
    }

    destructListeners.get(db.name).push(db);
  });
  Pouch.on('unref', function onConstructorUnref(db) {
    if (!destructListeners.has(db.name)) {
      return;
    }

    var dbList = destructListeners.get(db.name);
    var pos = dbList.indexOf(db);

    if (pos < 0) {
      /* istanbul ignore next */
      return;
    }

    dbList.splice(pos, 1);

    if (dbList.length > 1) {
      /* istanbul ignore next */
      destructListeners.set(db.name, dbList);
    } else {
      destructListeners.delete(db.name);
    }
  });
  Pouch.on('destroyed', function onConstructorDestroyed(name) {
    if (!destructListeners.has(name)) {
      return;
    }

    var dbList = destructListeners.get(name);
    destructListeners.delete(name);
    dbList.forEach(function (db) {
      db.emit('destroyed', true);
    });
  });
}

setUpEventEmitter(PouchDB);

PouchDB.adapter = function (id, obj, addToPreferredAdapters) {
  /* istanbul ignore else */
  if (obj.valid()) {
    PouchDB.adapters[id] = obj;

    if (addToPreferredAdapters) {
      PouchDB.preferredAdapters.push(id);
    }
  }
};

PouchDB.plugin = function (obj) {
  if (typeof obj === 'function') {
    // function style for plugins
    obj(PouchDB);
  } else if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
    throw new Error('Invalid plugin: got "' + obj + '", expected an object or a function');
  } else {
    Object.keys(obj).forEach(function (id) {
      // object style for plugins
      PouchDB.prototype[id] = obj[id];
    });
  }

  if (this.__defaults) {
    PouchDB.__defaults = $inject_Object_assign({}, this.__defaults);
  }

  return PouchDB;
};

PouchDB.defaults = function (defaultOpts) {
  function PouchAlt(name, opts) {
    if (!(this instanceof PouchAlt)) {
      return new PouchAlt(name, opts);
    }

    opts = opts || {};

    if (name && typeof name === 'object') {
      opts = name;
      name = opts.name;
      delete opts.name;
    }

    opts = $inject_Object_assign({}, PouchAlt.__defaults, opts);
    PouchDB.call(this, name, opts);
  }

  (0, _inherits.default)(PouchAlt, PouchDB);
  PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
  Object.keys(PouchDB).forEach(function (key) {
    if (!(key in PouchAlt)) {
      PouchAlt[key] = PouchDB[key];
    }
  }); // make default options transitive
  // https://github.com/pouchdb/pouchdb/issues/5922

  PouchAlt.__defaults = $inject_Object_assign({}, this.__defaults, defaultOpts);
  return PouchAlt;
};

PouchDB.fetch = function (url, opts) {
  return f$1(url, opts);
}; // managed automatically by set-version.js


var version = "7.1.1"; // this would just be "return doc[field]", but fields
// can be "deep" due to dot notation

function getFieldFromDoc(doc, parsedField) {
  var value = doc;

  for (var i = 0, len = parsedField.length; i < len; i++) {
    var key = parsedField[i];
    value = value[key];

    if (!value) {
      break;
    }
  }

  return value;
}

function compare$1(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Converts a string in dot notation to an array of its components, with backslash escaping


function parseField(fieldName) {
  // fields may be deep (e.g. "foo.bar.baz"), so parse
  var fields = [];
  var current = '';

  for (var i = 0, len = fieldName.length; i < len; i++) {
    var ch = fieldName[i];

    if (ch === '.') {
      if (i > 0 && fieldName[i - 1] === '\\') {
        // escaped delimiter
        current = current.substring(0, current.length - 1) + '.';
      } else {
        // not escaped, so delimiter
        fields.push(current);
        current = '';
      }
    } else {
      // normal character
      current += ch;
    }
  }

  fields.push(current);
  return fields;
}

var combinationFields = ['$or', '$nor', '$not'];

function isCombinationalField(field) {
  return combinationFields.indexOf(field) > -1;
}

function getKey(obj) {
  return Object.keys(obj)[0];
}

function getValue(obj) {
  return obj[getKey(obj)];
} // flatten an array of selectors joined by an $and operator


function mergeAndedSelectors(selectors) {
  // sort to ensure that e.g. if the user specified
  // $and: [{$gt: 'a'}, {$gt: 'b'}], then it's collapsed into
  // just {$gt: 'b'}
  var res = {};
  selectors.forEach(function (selector) {
    Object.keys(selector).forEach(function (field) {
      var matcher = selector[field];

      if (typeof matcher !== 'object') {
        matcher = {
          $eq: matcher
        };
      }

      if (isCombinationalField(field)) {
        if (matcher instanceof Array) {
          res[field] = matcher.map(function (m) {
            return mergeAndedSelectors([m]);
          });
        } else {
          res[field] = mergeAndedSelectors([matcher]);
        }
      } else {
        var fieldMatchers = res[field] = res[field] || {};
        Object.keys(matcher).forEach(function (operator) {
          var value = matcher[operator];

          if (operator === '$gt' || operator === '$gte') {
            return mergeGtGte(operator, value, fieldMatchers);
          } else if (operator === '$lt' || operator === '$lte') {
            return mergeLtLte(operator, value, fieldMatchers);
          } else if (operator === '$ne') {
            return mergeNe(value, fieldMatchers);
          } else if (operator === '$eq') {
            return mergeEq(value, fieldMatchers);
          }

          fieldMatchers[operator] = value;
        });
      }
    });
  });
  return res;
} // collapse logically equivalent gt/gte values


function mergeGtGte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$gte !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gte) {
        // more specificity
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value >= fieldMatchers.$gte) {
        // more specificity
        delete fieldMatchers.$gte;
        fieldMatchers.$gt = value;
      }
    }
  } else if (typeof fieldMatchers.$gt !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gt) {
        // more specificity
        delete fieldMatchers.$gt;
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value > fieldMatchers.$gt) {
        // more specificity
        fieldMatchers.$gt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // collapse logically equivalent lt/lte values


function mergeLtLte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$lte !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lte) {
        // more specificity
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value <= fieldMatchers.$lte) {
        // more specificity
        delete fieldMatchers.$lte;
        fieldMatchers.$lt = value;
      }
    }
  } else if (typeof fieldMatchers.$lt !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lt) {
        // more specificity
        delete fieldMatchers.$lt;
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value < fieldMatchers.$lt) {
        // more specificity
        fieldMatchers.$lt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // combine $ne values into one array


function mergeNe(value, fieldMatchers) {
  if ('$ne' in fieldMatchers) {
    // there are many things this could "not" be
    fieldMatchers.$ne.push(value);
  } else {
    // doesn't exist yet
    fieldMatchers.$ne = [value];
  }
} // add $eq into the mix


function mergeEq(value, fieldMatchers) {
  // these all have less specificity than the $eq
  // TODO: check for user errors here
  delete fieldMatchers.$gt;
  delete fieldMatchers.$gte;
  delete fieldMatchers.$lt;
  delete fieldMatchers.$lte;
  delete fieldMatchers.$ne;
  fieldMatchers.$eq = value;
} //#7458: execute function mergeAndedSelectors on nested $and


function mergeAndedSelectorsNested(obj) {
  for (var prop in obj) {
    if (Array.isArray(obj)) {
      for (var i in obj) {
        if (obj[i]['$and']) {
          obj[i] = mergeAndedSelectors(obj[i]['$and']);
        }
      }
    }

    var value = obj[prop];

    if (typeof value === 'object') {
      mergeAndedSelectorsNested(value); // <- recursive call
    }
  }

  return obj;
} //#7458: determine id $and is present in selector (at any level)


function isAndInSelector(obj, isAnd) {
  for (var prop in obj) {
    if (prop === '$and') {
      isAnd = true;
    }

    var value = obj[prop];

    if (typeof value === 'object') {
      isAnd = isAndInSelector(value, isAnd); // <- recursive call
    }
  }

  return isAnd;
} //
// normalize the selector
//


function massageSelector(input) {
  var result = clone(input);
  var wasAnded = false; //#7458: if $and is present in selector (at any level) merge nested $and

  if (isAndInSelector(result, false)) {
    result = mergeAndedSelectorsNested(result);

    if ('$and' in result) {
      result = mergeAndedSelectors(result['$and']);
    }

    wasAnded = true;
  }

  ['$or', '$nor'].forEach(function (orOrNor) {
    if (orOrNor in result) {
      // message each individual selector
      // e.g. {foo: 'bar'} becomes {foo: {$eq: 'bar'}}
      result[orOrNor].forEach(function (subSelector) {
        var fields = Object.keys(subSelector);

        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          var matcher = subSelector[field];

          if (typeof matcher !== 'object' || matcher === null) {
            subSelector[field] = {
              $eq: matcher
            };
          }
        }
      });
    }
  });

  if ('$not' in result) {
    //This feels a little like forcing, but it will work for now,
    //I would like to come back to this and make the merging of selectors a little more generic
    result['$not'] = mergeAndedSelectors([result['$not']]);
  }

  var fields = Object.keys(result);

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    var matcher = result[field];

    if (typeof matcher !== 'object' || matcher === null) {
      matcher = {
        $eq: matcher
      };
    } else if ('$ne' in matcher && !wasAnded) {
      // I put these in an array, since there may be more than one
      // but in the "mergeAnded" operation, I already take care of that
      matcher.$ne = [matcher.$ne];
    }

    result[field] = matcher;
  }

  return result;
}

function pad(str, padWith, upToLength) {
  var padding = '';
  var targetLength = upToLength - str.length;
  /* istanbul ignore next */

  while (padding.length < targetLength) {
    padding += padWith;
  }

  return padding;
}

function padLeft(str, padWith, upToLength) {
  var padding = pad(str, padWith, upToLength);
  return padding + str;
}

var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE

var MAGNITUDE_DIGITS = 3; // ditto

var SEP = ''; // set to '_' for easier debugging 

function collate(a, b) {
  if (a === b) {
    return 0;
  }

  a = normalizeKey(a);
  b = normalizeKey(b);
  var ai = collationIndex(a);
  var bi = collationIndex(b);

  if (ai - bi !== 0) {
    return ai - bi;
  }

  switch (typeof a) {
    case 'number':
      return a - b;

    case 'boolean':
      return a < b ? -1 : 1;

    case 'string':
      return stringCollate(a, b);
  }

  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
} // couch considers null/NaN/Infinity/-Infinity === undefined,
// for the purposes of mapreduce indexes. also, dates get stringified.


function normalizeKey(key) {
  switch (typeof key) {
    case 'undefined':
      return null;

    case 'number':
      if (key === Infinity || key === -Infinity || isNaN(key)) {
        return null;
      }

      return key;

    case 'object':
      var origKey = key;

      if (Array.isArray(key)) {
        var len = key.length;
        key = new Array(len);

        for (var i = 0; i < len; i++) {
          key[i] = normalizeKey(origKey[i]);
        }
        /* istanbul ignore next */

      } else if (key instanceof Date) {
        return key.toJSON();
      } else if (key !== null) {
        // generic object
        key = {};

        for (var k in origKey) {
          if (origKey.hasOwnProperty(k)) {
            var val = origKey[k];

            if (typeof val !== 'undefined') {
              key[k] = normalizeKey(val);
            }
          }
        }
      }

  }

  return key;
}

function indexify(key) {
  if (key !== null) {
    switch (typeof key) {
      case 'boolean':
        return key ? 1 : 0;

      case 'number':
        return numToIndexableString(key);

      case 'string':
        // We've to be sure that key does not contain \u0000
        // Do order-preserving replacements:
        // 0 -> 1, 1
        // 1 -> 1, 2
        // 2 -> 2, 2

        /* eslint-disable no-control-regex */
        return key.replace(/\u0002/g, '\u0002\u0002').replace(/\u0001/g, '\u0001\u0002').replace(/\u0000/g, '\u0001\u0001');

      /* eslint-enable no-control-regex */

      case 'object':
        var isArray = Array.isArray(key);
        var arr = isArray ? key : Object.keys(key);
        var i = -1;
        var len = arr.length;
        var result = '';

        if (isArray) {
          while (++i < len) {
            result += toIndexableString(arr[i]);
          }
        } else {
          while (++i < len) {
            var objKey = arr[i];
            result += toIndexableString(objKey) + toIndexableString(key[objKey]);
          }
        }

        return result;
    }
  }

  return '';
} // convert the given key to a string that would be appropriate
// for lexical sorting, e.g. within a database, where the
// sorting is the same given by the collate() function.


function toIndexableString(key) {
  var zero = '\u0000';
  key = normalizeKey(key);
  return collationIndex(key) + SEP + indexify(key) + zero;
}

function parseNumber(str, i) {
  var originalIdx = i;
  var num;
  var zero = str[i] === '1';

  if (zero) {
    num = 0;
    i++;
  } else {
    var neg = str[i] === '0';
    i++;
    var numAsString = '';
    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
    /* istanbul ignore next */

    if (neg) {
      magnitude = -magnitude;
    }

    i += MAGNITUDE_DIGITS;

    while (true) {
      var ch = str[i];

      if (ch === '\u0000') {
        break;
      } else {
        numAsString += ch;
      }

      i++;
    }

    numAsString = numAsString.split('.');

    if (numAsString.length === 1) {
      num = parseInt(numAsString, 10);
    } else {
      /* istanbul ignore next */
      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
    }
    /* istanbul ignore next */


    if (neg) {
      num = num - 10;
    }
    /* istanbul ignore next */


    if (magnitude !== 0) {
      // parseFloat is more reliable than pow due to rounding errors
      // e.g. Number.MAX_VALUE would return Infinity if we did
      // num * Math.pow(10, magnitude);
      num = parseFloat(num + 'e' + magnitude);
    }
  }

  return {
    num: num,
    length: i - originalIdx
  };
} // move up the stack while parsing
// this function moved outside of parseIndexableString for performance


function pop(stack, metaStack) {
  var obj = stack.pop();

  if (metaStack.length) {
    var lastMetaElement = metaStack[metaStack.length - 1];

    if (obj === lastMetaElement.element) {
      // popping a meta-element, e.g. an object whose value is another object
      metaStack.pop();
      lastMetaElement = metaStack[metaStack.length - 1];
    }

    var element = lastMetaElement.element;
    var lastElementIndex = lastMetaElement.index;

    if (Array.isArray(element)) {
      element.push(obj);
    } else if (lastElementIndex === stack.length - 2) {
      // obj with key+value
      var key = stack.pop();
      element[key] = obj;
    } else {
      stack.push(obj); // obj with key only
    }
  }
}

function parseIndexableString(str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects

  var i = 0;
  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

  while (true) {
    var collationIndex = str[i++];

    if (collationIndex === '\u0000') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack, metaStack);
        continue;
      }
    }

    switch (collationIndex) {
      case '1':
        stack.push(null);
        break;

      case '2':
        stack.push(str[i] === '1');
        i++;
        break;

      case '3':
        var parsedNum = parseNumber(str, i);
        stack.push(parsedNum.num);
        i += parsedNum.length;
        break;

      case '4':
        var parsedStr = '';
        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

        while (true) {
          var ch = str[i];

          if (ch === '\u0000') {
            break;
          }

          parsedStr += ch;
          i++;
        } // perform the reverse of the order-preserving replacement
        // algorithm (see above)

        /* eslint-disable no-control-regex */


        parsedStr = parsedStr.replace(/\u0001\u0001/g, '\u0000').replace(/\u0001\u0002/g, '\u0001').replace(/\u0002\u0002/g, '\u0002');
        /* eslint-enable no-control-regex */

        stack.push(parsedStr);
        break;

      case '5':
        var arrayElement = {
          element: [],
          index: stack.length
        };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;

      case '6':
        var objElement = {
          element: {},
          index: stack.length
        };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;

      /* istanbul ignore next */

      default:
        throw new Error('bad collationIndex or unexpectedly reached end of input: ' + collationIndex);
    }
  }
}

function arrayCollate(a, b) {
  var len = Math.min(a.length, b.length);

  for (var i = 0; i < len; i++) {
    var sort = collate(a[i], b[i]);

    if (sort !== 0) {
      return sort;
    }
  }

  return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
}

function stringCollate(a, b) {
  // See: https://github.com/daleharvey/pouchdb/issues/40
  // This is incompatible with the CouchDB implementation, but its the
  // best we can do for now
  return a === b ? 0 : a > b ? 1 : -1;
}

function objectCollate(a, b) {
  var ak = Object.keys(a),
      bk = Object.keys(b);
  var len = Math.min(ak.length, bk.length);

  for (var i = 0; i < len; i++) {
    // First sort the keys
    var sort = collate(ak[i], bk[i]);

    if (sort !== 0) {
      return sort;
    } // if the keys are equal sort the values


    sort = collate(a[ak[i]], b[bk[i]]);

    if (sort !== 0) {
      return sort;
    }
  }

  return ak.length === bk.length ? 0 : ak.length > bk.length ? 1 : -1;
} // The collation is defined by erlangs ordered terms
// the atoms null, true, false come first, then numbers, strings,
// arrays, then objects
// null/undefined/NaN/Infinity/-Infinity are all considered null


function collationIndex(x) {
  var id = ['boolean', 'number', 'string', 'object'];
  var idx = id.indexOf(typeof x); //false if -1 otherwise true, but fast!!!!1

  if (~idx) {
    if (x === null) {
      return 1;
    }

    if (Array.isArray(x)) {
      return 5;
    }

    return idx < 3 ? idx + 2 : idx + 3;
  }
  /* istanbul ignore next */


  if (Array.isArray(x)) {
    return 5;
  }
} // conversion:
// x yyy zz...zz
// x = 0 for negative, 1 for 0, 2 for positive
// y = exponent (for negative numbers negated) moved so that it's >= 0
// z = mantisse


function numToIndexableString(num) {
  if (num === 0) {
    return '1';
  } // convert number to exponential format for easier and
  // more succinct string sorting


  var expFormat = num.toExponential().split(/e\+?/);
  var magnitude = parseInt(expFormat[1], 10);
  var neg = num < 0;
  var result = neg ? '0' : '2'; // first sort by magnitude
  // it's easier if all magnitudes are positive

  var magForComparison = (neg ? -magnitude : magnitude) - MIN_MAGNITUDE;
  var magString = padLeft(magForComparison.toString(), '0', MAGNITUDE_DIGITS);
  result += SEP + magString; // then sort by the factor

  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)

  /* istanbul ignore next */

  if (neg) {
    // for negative reverse ordering
    factor = 10 - factor;
  }

  var factorStr = factor.toFixed(20); // strip zeros from the end

  factorStr = factorStr.replace(/\.?0+$/, '');
  result += SEP + factorStr;
  return result;
} // create a comparator based on the sort object


function createFieldSorter(sort) {
  function getFieldValuesAsArray(doc) {
    return sort.map(function (sorting) {
      var fieldName = getKey(sorting);
      var parsedField = parseField(fieldName);
      var docFieldValue = getFieldFromDoc(doc, parsedField);
      return docFieldValue;
    });
  }

  return function (aRow, bRow) {
    var aFieldValues = getFieldValuesAsArray(aRow.doc);
    var bFieldValues = getFieldValuesAsArray(bRow.doc);
    var collation = collate(aFieldValues, bFieldValues);

    if (collation !== 0) {
      return collation;
    } // this is what mango seems to do


    return compare$1(aRow.doc._id, bRow.doc._id);
  };
}

function filterInMemoryFields(rows, requestDef, inMemoryFields) {
  rows = rows.filter(function (row) {
    return rowFilter(row.doc, requestDef.selector, inMemoryFields);
  });

  if (requestDef.sort) {
    // in-memory sort
    var fieldSorter = createFieldSorter(requestDef.sort);
    rows = rows.sort(fieldSorter);

    if (typeof requestDef.sort[0] !== 'string' && getValue(requestDef.sort[0]) === 'desc') {
      rows = rows.reverse();
    }
  }

  if ('limit' in requestDef || 'skip' in requestDef) {
    // have to do the limit in-memory
    var skip = requestDef.skip || 0;
    var limit = ('limit' in requestDef ? requestDef.limit : rows.length) + skip;
    rows = rows.slice(skip, limit);
  }

  return rows;
}

function rowFilter(doc, selector, inMemoryFields) {
  return inMemoryFields.every(function (field) {
    var matcher = selector[field];
    var parsedField = parseField(field);
    var docFieldValue = getFieldFromDoc(doc, parsedField);

    if (isCombinationalField(field)) {
      return matchCominationalSelector(field, matcher, doc);
    }

    return matchSelector(matcher, doc, parsedField, docFieldValue);
  });
}

function matchSelector(matcher, doc, parsedField, docFieldValue) {
  if (!matcher) {
    // no filtering necessary; this field is just needed for sorting
    return true;
  } // is matcher an object, if so continue recursion


  if (typeof matcher === 'object') {
    return Object.keys(matcher).every(function (userOperator) {
      var userValue = matcher[userOperator];
      return match(userOperator, doc, userValue, parsedField, docFieldValue);
    });
  } // no more depth, No need to recurse further


  return matcher === docFieldValue;
}

function matchCominationalSelector(field, matcher, doc) {
  if (field === '$or') {
    return matcher.some(function (orMatchers) {
      return rowFilter(doc, orMatchers, Object.keys(orMatchers));
    });
  }

  if (field === '$not') {
    return !rowFilter(doc, matcher, Object.keys(matcher));
  } //`$nor`


  return !matcher.find(function (orMatchers) {
    return rowFilter(doc, orMatchers, Object.keys(orMatchers));
  });
}

function match(userOperator, doc, userValue, parsedField, docFieldValue) {
  if (!matchers[userOperator]) {
    throw new Error('unknown operator "' + userOperator + '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, ' + '$nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');
  }

  return matchers[userOperator](doc, userValue, parsedField, docFieldValue);
}

function fieldExists(docFieldValue) {
  return typeof docFieldValue !== 'undefined' && docFieldValue !== null;
}

function fieldIsNotUndefined(docFieldValue) {
  return typeof docFieldValue !== 'undefined';
}

function modField(docFieldValue, userValue) {
  var divisor = userValue[0];
  var mod = userValue[1];

  if (divisor === 0) {
    throw new Error('Bad divisor, cannot divide by zero');
  }

  if (parseInt(divisor, 10) !== divisor) {
    throw new Error('Divisor is not an integer');
  }

  if (parseInt(mod, 10) !== mod) {
    throw new Error('Modulus is not an integer');
  }

  if (parseInt(docFieldValue, 10) !== docFieldValue) {
    return false;
  }

  return docFieldValue % divisor === mod;
}

function arrayContainsValue(docFieldValue, userValue) {
  return userValue.some(function (val) {
    if (docFieldValue instanceof Array) {
      return docFieldValue.indexOf(val) > -1;
    }

    return docFieldValue === val;
  });
}

function arrayContainsAllValues(docFieldValue, userValue) {
  return userValue.every(function (val) {
    return docFieldValue.indexOf(val) > -1;
  });
}

function arraySize(docFieldValue, userValue) {
  return docFieldValue.length === userValue;
}

function regexMatch(docFieldValue, userValue) {
  var re = new RegExp(userValue);
  return re.test(docFieldValue);
}

function typeMatch(docFieldValue, userValue) {
  switch (userValue) {
    case 'null':
      return docFieldValue === null;

    case 'boolean':
      return typeof docFieldValue === 'boolean';

    case 'number':
      return typeof docFieldValue === 'number';

    case 'string':
      return typeof docFieldValue === 'string';

    case 'array':
      return docFieldValue instanceof Array;

    case 'object':
      return {}.toString.call(docFieldValue) === '[object Object]';
  }

  throw new Error(userValue + ' not supported as a type.' + 'Please use one of object, string, array, number, boolean or null.');
}

var matchers = {
  '$elemMatch': function (doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }

    if (docFieldValue.length === 0) {
      return false;
    }

    if (typeof docFieldValue[0] === 'object') {
      return docFieldValue.some(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.some(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$allMatch': function (doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }
    /* istanbul ignore next */


    if (docFieldValue.length === 0) {
      return false;
    }

    if (typeof docFieldValue[0] === 'object') {
      return docFieldValue.every(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.every(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$eq': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) === 0;
  },
  '$gte': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) >= 0;
  },
  '$gt': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) > 0;
  },
  '$lte': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) <= 0;
  },
  '$lt': function (doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) < 0;
  },
  '$exists': function (doc, userValue, parsedField, docFieldValue) {
    //a field that is null is still considered to exist
    if (userValue) {
      return fieldIsNotUndefined(docFieldValue);
    }

    return !fieldIsNotUndefined(docFieldValue);
  },
  '$mod': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && modField(docFieldValue, userValue);
  },
  '$ne': function (doc, userValue, parsedField, docFieldValue) {
    return userValue.every(function (neValue) {
      return collate(docFieldValue, neValue) !== 0;
    });
  },
  '$in': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arrayContainsValue(docFieldValue, userValue);
  },
  '$nin': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && !arrayContainsValue(docFieldValue, userValue);
  },
  '$size': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arraySize(docFieldValue, userValue);
  },
  '$all': function (doc, userValue, parsedField, docFieldValue) {
    return Array.isArray(docFieldValue) && arrayContainsAllValues(docFieldValue, userValue);
  },
  '$regex': function (doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && regexMatch(docFieldValue, userValue);
  },
  '$type': function (doc, userValue, parsedField, docFieldValue) {
    return typeMatch(docFieldValue, userValue);
  }
}; // return true if the given doc matches the supplied selector

function matchesSelector(doc, selector) {
  /* istanbul ignore if */
  if (typeof selector !== 'object') {
    // match the CouchDB error message
    throw new Error('Selector error: expected a JSON object');
  }

  selector = massageSelector(selector);
  var row = {
    'doc': doc
  };
  var rowsMatched = filterInMemoryFields([row], {
    'selector': selector
  }, Object.keys(selector));
  return rowsMatched && rowsMatched.length === 1;
}

function evalFilter(input) {
  return scopeEval('"use strict";\nreturn ' + input + ';', {});
}

function evalView(input) {
  var code = ['return function(doc) {', '  "use strict";', '  var emitted = false;', '  var emit = function (a, b) {', '    emitted = true;', '  };', '  var view = ' + input + ';', '  view(doc);', '  if (emitted) {', '    return true;', '  }', '};'].join('\n');
  return scopeEval(code, {});
}

function validate(opts, callback) {
  if (opts.selector) {
    if (opts.filter && opts.filter !== '_selector') {
      var filterName = typeof opts.filter === 'string' ? opts.filter : 'function';
      return callback(new Error('selector invalid for filter "' + filterName + '"'));
    }
  }

  callback();
}

function normalize(opts) {
  if (opts.view && !opts.filter) {
    opts.filter = '_view';
  }

  if (opts.selector && !opts.filter) {
    opts.filter = '_selector';
  }

  if (opts.filter && typeof opts.filter === 'string') {
    if (opts.filter === '_view') {
      opts.view = normalizeDesignDocFunctionName(opts.view);
    } else {
      opts.filter = normalizeDesignDocFunctionName(opts.filter);
    }
  }
}

function shouldFilter(changesHandler, opts) {
  return opts.filter && typeof opts.filter === 'string' && !opts.doc_ids && !isRemote(changesHandler.db);
}

function filter(changesHandler, opts) {
  var callback = opts.complete;

  if (opts.filter === '_view') {
    if (!opts.view || typeof opts.view !== 'string') {
      var err = createError(BAD_REQUEST, '`view` filter parameter not found or invalid.');
      return callback(err);
    } // fetch a view from a design doc, make it behave like a filter


    var viewName = parseDesignDocFunctionName(opts.view);
    changesHandler.db.get('_design/' + viewName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {
          status: 'cancelled'
        });
      }
      /* istanbul ignore next */


      if (err) {
        return callback(generateErrorFromResponse(err));
      }

      var mapFun = ddoc && ddoc.views && ddoc.views[viewName[1]] && ddoc.views[viewName[1]].map;

      if (!mapFun) {
        return callback(createError(MISSING_DOC, ddoc.views ? 'missing json key: ' + viewName[1] : 'missing json key: views'));
      }

      opts.filter = evalView(mapFun);
      changesHandler.doChanges(opts);
    });
  } else if (opts.selector) {
    opts.filter = function (doc) {
      return matchesSelector(doc, opts.selector);
    };

    changesHandler.doChanges(opts);
  } else {
    // fetch a filter from a design doc
    var filterName = parseDesignDocFunctionName(opts.filter);
    changesHandler.db.get('_design/' + filterName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {
          status: 'cancelled'
        });
      }
      /* istanbul ignore next */


      if (err) {
        return callback(generateErrorFromResponse(err));
      }

      var filterFun = ddoc && ddoc.filters && ddoc.filters[filterName[1]];

      if (!filterFun) {
        return callback(createError(MISSING_DOC, ddoc && ddoc.filters ? 'missing json key: ' + filterName[1] : 'missing json key: filters'));
      }

      opts.filter = evalFilter(filterFun);
      changesHandler.doChanges(opts);
    });
  }
}

function applyChangesFilterPlugin(PouchDB) {
  PouchDB._changesFilterPlugin = {
    validate: validate,
    normalize: normalize,
    shouldFilter: shouldFilter,
    filter: filter
  };
} // TODO: remove from pouchdb-core (breaking)


PouchDB.plugin(applyChangesFilterPlugin);
PouchDB.version = version;

function toObject(array) {
  return array.reduce(function (obj, item) {
    obj[item] = true;
    return obj;
  }, {});
} // List of top level reserved words for doc


var reservedWords = toObject(['_id', '_rev', '_attachments', '_deleted', '_revisions', '_revs_info', '_conflicts', '_deleted_conflicts', '_local_seq', '_rev_tree', //replication documents
'_replication_id', '_replication_state', '_replication_state_time', '_replication_state_reason', '_replication_stats', // Specific to Couchbase Sync Gateway
'_removed']); // List of reserved words that should end up the document

var dataWords = toObject(['_attachments', //replication documents
'_replication_id', '_replication_state', '_replication_state_time', '_replication_state_reason', '_replication_stats']);

function parseRevisionInfo(rev$$1) {
  if (!/^\d+-./.test(rev$$1)) {
    return createError(INVALID_REV);
  }

  var idx = rev$$1.indexOf('-');
  var left = rev$$1.substring(0, idx);
  var right = rev$$1.substring(idx + 1);
  return {
    prefix: parseInt(left, 10),
    id: right
  };
}

function makeRevTreeFromRevisions(revisions, opts) {
  var pos = revisions.start - revisions.ids.length + 1;
  var revisionIds = revisions.ids;
  var ids = [revisionIds[0], opts, []];

  for (var i = 1, len = revisionIds.length; i < len; i++) {
    ids = [revisionIds[i], {
      status: 'missing'
    }, [ids]];
  }

  return [{
    pos: pos,
    ids: ids
  }];
} // Preprocess documents, parse their revisions, assign an id and a
// revision for new writes that are missing them, etc


function parseDoc(doc, newEdits, dbOpts) {
  if (!dbOpts) {
    dbOpts = {
      deterministic_revs: true
    };
  }

  var nRevNum;
  var newRevId;
  var revInfo;
  var opts = {
    status: 'available'
  };

  if (doc._deleted) {
    opts.deleted = true;
  }

  if (newEdits) {
    if (!doc._id) {
      doc._id = uuid();
    }

    newRevId = rev(doc, dbOpts.deterministic_revs);

    if (doc._rev) {
      revInfo = parseRevisionInfo(doc._rev);

      if (revInfo.error) {
        return revInfo;
      }

      doc._rev_tree = [{
        pos: revInfo.prefix,
        ids: [revInfo.id, {
          status: 'missing'
        }, [[newRevId, opts, []]]]
      }];
      nRevNum = revInfo.prefix + 1;
    } else {
      doc._rev_tree = [{
        pos: 1,
        ids: [newRevId, opts, []]
      }];
      nRevNum = 1;
    }
  } else {
    if (doc._revisions) {
      doc._rev_tree = makeRevTreeFromRevisions(doc._revisions, opts);
      nRevNum = doc._revisions.start;
      newRevId = doc._revisions.ids[0];
    }

    if (!doc._rev_tree) {
      revInfo = parseRevisionInfo(doc._rev);

      if (revInfo.error) {
        return revInfo;
      }

      nRevNum = revInfo.prefix;
      newRevId = revInfo.id;
      doc._rev_tree = [{
        pos: nRevNum,
        ids: [newRevId, opts, []]
      }];
    }
  }

  invalidIdError(doc._id);
  doc._rev = nRevNum + '-' + newRevId;
  var result = {
    metadata: {},
    data: {}
  };

  for (var key in doc) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(doc, key)) {
      var specialKey = key[0] === '_';

      if (specialKey && !reservedWords[key]) {
        var error = createError(DOC_VALIDATION, key);
        error.message = DOC_VALIDATION.message + ': ' + key;
        throw error;
      } else if (specialKey && !dataWords[key]) {
        result.metadata[key.slice(1)] = doc[key];
      } else {
        result.data[key] = doc[key];
      }
    }
  }

  return result;
}

function parseBase64(data) {
  try {
    return thisAtob(data);
  } catch (e) {
    var err = createError(BAD_ARG, 'Attachment is not a valid base64 string');
    return {
      error: err
    };
  }
}

function preprocessString(att, blobType, callback) {
  var asBinary = parseBase64(att.data);

  if (asBinary.error) {
    return callback(asBinary.error);
  }

  att.length = asBinary.length;

  if (blobType === 'blob') {
    att.data = binStringToBluffer(asBinary, att.content_type);
  } else if (blobType === 'base64') {
    att.data = thisBtoa(asBinary);
  } else {
    // binary
    att.data = asBinary;
  }

  binaryMd5(asBinary, function (result) {
    att.digest = 'md5-' + result;
    callback();
  });
}

function preprocessBlob(att, blobType, callback) {
  binaryMd5(att.data, function (md5) {
    att.digest = 'md5-' + md5; // size is for blobs (browser), length is for buffers (node)

    att.length = att.data.size || att.data.length || 0;

    if (blobType === 'binary') {
      blobToBinaryString(att.data, function (binString) {
        att.data = binString;
        callback();
      });
    } else if (blobType === 'base64') {
      blobToBase64(att.data, function (b64) {
        att.data = b64;
        callback();
      });
    } else {
      callback();
    }
  });
}

function preprocessAttachment(att, blobType, callback) {
  if (att.stub) {
    return callback();
  }

  if (typeof att.data === 'string') {
    // input is a base64 string
    preprocessString(att, blobType, callback);
  } else {
    // input is a blob
    preprocessBlob(att, blobType, callback);
  }
}

function preprocessAttachments(docInfos, blobType, callback) {
  if (!docInfos.length) {
    return callback();
  }

  var docv = 0;
  var overallErr;
  docInfos.forEach(function (docInfo) {
    var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
    var recv = 0;

    if (!attachments.length) {
      return done();
    }

    function processedAttachment(err) {
      overallErr = err;
      recv++;

      if (recv === attachments.length) {
        done();
      }
    }

    for (var key in docInfo.data._attachments) {
      if (docInfo.data._attachments.hasOwnProperty(key)) {
        preprocessAttachment(docInfo.data._attachments[key], blobType, processedAttachment);
      }
    }
  });

  function done() {
    docv++;

    if (docInfos.length === docv) {
      if (overallErr) {
        callback(overallErr);
      } else {
        callback();
      }
    }
  }
}

function updateDoc(revLimit, prev, docInfo, results, i, cb, writeDoc, newEdits) {
  if (revExists(prev.rev_tree, docInfo.metadata.rev) && !newEdits) {
    results[i] = docInfo;
    return cb();
  } // sometimes this is pre-calculated. historically not always


  var previousWinningRev = prev.winningRev || winningRev(prev);
  var previouslyDeleted = 'deleted' in prev ? prev.deleted : isDeleted(prev, previousWinningRev);
  var deleted = 'deleted' in docInfo.metadata ? docInfo.metadata.deleted : isDeleted(docInfo.metadata);
  var isRoot = /^1-/.test(docInfo.metadata.rev);

  if (previouslyDeleted && !deleted && newEdits && isRoot) {
    var newDoc = docInfo.data;
    newDoc._rev = previousWinningRev;
    newDoc._id = docInfo.metadata.id;
    docInfo = parseDoc(newDoc, newEdits);
  }

  var merged = merge(prev.rev_tree, docInfo.metadata.rev_tree[0], revLimit);
  var inConflict = newEdits && (previouslyDeleted && deleted && merged.conflicts !== 'new_leaf' || !previouslyDeleted && merged.conflicts !== 'new_leaf' || previouslyDeleted && !deleted && merged.conflicts === 'new_branch');

  if (inConflict) {
    var err = createError(REV_CONFLICT);
    results[i] = err;
    return cb();
  }

  var newRev = docInfo.metadata.rev;
  docInfo.metadata.rev_tree = merged.tree;
  docInfo.stemmedRevs = merged.stemmedRevs || [];
  /* istanbul ignore else */

  if (prev.rev_map) {
    docInfo.metadata.rev_map = prev.rev_map; // used only by leveldb
  } // recalculate


  var winningRev$$1 = winningRev(docInfo.metadata);
  var winningRevIsDeleted = isDeleted(docInfo.metadata, winningRev$$1); // calculate the total number of documents that were added/removed,
  // from the perspective of total_rows/doc_count

  var delta = previouslyDeleted === winningRevIsDeleted ? 0 : previouslyDeleted < winningRevIsDeleted ? -1 : 1;
  var newRevIsDeleted;

  if (newRev === winningRev$$1) {
    // if the new rev is the same as the winning rev, we can reuse that value
    newRevIsDeleted = winningRevIsDeleted;
  } else {
    // if they're not the same, then we need to recalculate
    newRevIsDeleted = isDeleted(docInfo.metadata, newRev);
  }

  writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted, true, delta, i, cb);
}

function rootIsMissing(docInfo) {
  return docInfo.metadata.rev_tree[0].ids[1].status === 'missing';
}

function processDocs(revLimit, docInfos, api, fetchedDocs, tx, results, writeDoc, opts, overallCallback) {
  // Default to 1000 locally
  revLimit = revLimit || 1000;

  function insertDoc(docInfo, resultsIdx, callback) {
    // Cant insert new deleted documents
    var winningRev$$1 = winningRev(docInfo.metadata);
    var deleted = isDeleted(docInfo.metadata, winningRev$$1);

    if ('was_delete' in opts && deleted) {
      results[resultsIdx] = createError(MISSING_DOC, 'deleted');
      return callback();
    } // 4712 - detect whether a new document was inserted with a _rev


    var inConflict = newEdits && rootIsMissing(docInfo);

    if (inConflict) {
      var err = createError(REV_CONFLICT);
      results[resultsIdx] = err;
      return callback();
    }

    var delta = deleted ? 0 : 1;
    writeDoc(docInfo, winningRev$$1, deleted, deleted, false, delta, resultsIdx, callback);
  }

  var newEdits = opts.new_edits;
  var idsToDocs = new ExportedMap();
  var docsDone = 0;
  var docsToDo = docInfos.length;

  function checkAllDocsDone() {
    if (++docsDone === docsToDo && overallCallback) {
      overallCallback();
    }
  }

  docInfos.forEach(function (currentDoc, resultsIdx) {
    if (currentDoc._id && isLocalId(currentDoc._id)) {
      var fun = currentDoc._deleted ? '_removeLocal' : '_putLocal';
      api[fun](currentDoc, {
        ctx: tx
      }, function (err, res) {
        results[resultsIdx] = err || res;
        checkAllDocsDone();
      });
      return;
    }

    var id = currentDoc.metadata.id;

    if (idsToDocs.has(id)) {
      docsToDo--; // duplicate

      idsToDocs.get(id).push([currentDoc, resultsIdx]);
    } else {
      idsToDocs.set(id, [[currentDoc, resultsIdx]]);
    }
  }); // in the case of new_edits, the user can provide multiple docs
  // with the same id. these need to be processed sequentially

  idsToDocs.forEach(function (docs, id) {
    var numDone = 0;

    function docWritten() {
      if (++numDone < docs.length) {
        nextDoc();
      } else {
        checkAllDocsDone();
      }
    }

    function nextDoc() {
      var value = docs[numDone];
      var currentDoc = value[0];
      var resultsIdx = value[1];

      if (fetchedDocs.has(id)) {
        updateDoc(revLimit, fetchedDocs.get(id), currentDoc, results, resultsIdx, docWritten, writeDoc, newEdits);
      } else {
        // Ensure stemming applies to new writes as well
        var merged = merge([], currentDoc.metadata.rev_tree[0], revLimit);
        currentDoc.metadata.rev_tree = merged.tree;
        currentDoc.stemmedRevs = merged.stemmedRevs || [];
        insertDoc(currentDoc, resultsIdx, docWritten);
      }
    }

    nextDoc();
  });
} // IndexedDB requires a versioned database structure, so we use the
// version here to manage migrations.


var ADAPTER_VERSION = 5; // The object stores created for each database
// DOC_STORE stores the document meta data, its revision history and state
// Keyed by document id

var DOC_STORE = 'document-store'; // BY_SEQ_STORE stores a particular version of a document, keyed by its
// sequence id

var BY_SEQ_STORE = 'by-sequence'; // Where we store attachments

var ATTACH_STORE = 'attach-store'; // Where we store many-to-many relations
// between attachment digests and seqs

var ATTACH_AND_SEQ_STORE = 'attach-seq-store'; // Where we store database-wide meta data in a single record
// keyed by id: META_STORE

var META_STORE = 'meta-store'; // Where we store local documents

var LOCAL_STORE = 'local-store'; // Where we detect blob support

var DETECT_BLOB_SUPPORT_STORE = 'detect-blob-support';

function safeJsonParse(str) {
  // This try/catch guards against stack overflow errors.
  // JSON.parse() is faster than vuvuzela.parse() but vuvuzela
  // cannot overflow.
  try {
    return JSON.parse(str);
  } catch (e) {
    /* istanbul ignore next */
    return _vuvuzela.default.parse(str);
  }
}

function safeJsonStringify(json) {
  try {
    return JSON.stringify(json);
  } catch (e) {
    /* istanbul ignore next */
    return _vuvuzela.default.stringify(json);
  }
}

function idbError(callback) {
  return function (evt) {
    var message = 'unknown_error';

    if (evt.target && evt.target.error) {
      message = evt.target.error.name || evt.target.error.message;
    }

    callback(createError(IDB_ERROR, message, evt.type));
  };
} // Unfortunately, the metadata has to be stringified
// when it is put into the database, because otherwise
// IndexedDB can throw errors for deeply-nested objects.
// Originally we just used JSON.parse/JSON.stringify; now
// we use this custom vuvuzela library that avoids recursion.
// If we could do it all over again, we'd probably use a
// format for the revision trees other than JSON.


function encodeMetadata(metadata, winningRev, deleted) {
  return {
    data: safeJsonStringify(metadata),
    winningRev: winningRev,
    deletedOrLocal: deleted ? '1' : '0',
    seq: metadata.seq,
    // highest seq for this doc
    id: metadata.id
  };
}

function decodeMetadata(storedObject) {
  if (!storedObject) {
    return null;
  }

  var metadata = safeJsonParse(storedObject.data);
  metadata.winningRev = storedObject.winningRev;
  metadata.deleted = storedObject.deletedOrLocal === '1';
  metadata.seq = storedObject.seq;
  return metadata;
} // read the doc back out from the database. we don't store the
// _id or _rev because we already have _doc_id_rev.


function decodeDoc(doc) {
  if (!doc) {
    return doc;
  }

  var idx = doc._doc_id_rev.lastIndexOf(':');

  doc._id = doc._doc_id_rev.substring(0, idx - 1);
  doc._rev = doc._doc_id_rev.substring(idx + 1);
  delete doc._doc_id_rev;
  return doc;
} // Read a blob from the database, encoding as necessary
// and translating from base64 if the IDB doesn't support
// native Blobs


function readBlobData(body, type, asBlob, callback) {
  if (asBlob) {
    if (!body) {
      callback(createBlob([''], {
        type: type
      }));
    } else if (typeof body !== 'string') {
      // we have blob support
      callback(body);
    } else {
      // no blob support
      callback(b64ToBluffer(body, type));
    }
  } else {
    // as base64 string
    if (!body) {
      callback('');
    } else if (typeof body !== 'string') {
      // we have blob support
      readAsBinaryString(body, function (binary) {
        callback(thisBtoa(binary));
      });
    } else {
      // no blob support
      callback(body);
    }
  }
}

function fetchAttachmentsIfNecessary(doc, opts, txn, cb) {
  var attachments = Object.keys(doc._attachments || {});

  if (!attachments.length) {
    return cb && cb();
  }

  var numDone = 0;

  function checkDone() {
    if (++numDone === attachments.length && cb) {
      cb();
    }
  }

  function fetchAttachment(doc, att) {
    var attObj = doc._attachments[att];
    var digest = attObj.digest;
    var req = txn.objectStore(ATTACH_STORE).get(digest);

    req.onsuccess = function (e) {
      attObj.body = e.target.result.body;
      checkDone();
    };
  }

  attachments.forEach(function (att) {
    if (opts.attachments && opts.include_docs) {
      fetchAttachment(doc, att);
    } else {
      doc._attachments[att].stub = true;
      checkDone();
    }
  });
} // IDB-specific postprocessing necessary because
// we don't know whether we stored a true Blob or
// a base64-encoded string, and if it's a Blob it
// needs to be read outside of the transaction context


function postProcessAttachments(results, asBlob) {
  return Promise.all(results.map(function (row) {
    if (row.doc && row.doc._attachments) {
      var attNames = Object.keys(row.doc._attachments);
      return Promise.all(attNames.map(function (att) {
        var attObj = row.doc._attachments[att];

        if (!('body' in attObj)) {
          // already processed
          return;
        }

        var body = attObj.body;
        var type = attObj.content_type;
        return new Promise(function (resolve) {
          readBlobData(body, type, asBlob, function (data) {
            row.doc._attachments[att] = $inject_Object_assign(pick(attObj, ['digest', 'content_type']), {
              data: data
            });
            resolve();
          });
        });
      }));
    }
  }));
}

function compactRevs(revs, docId, txn) {
  var possiblyOrphanedDigests = [];
  var seqStore = txn.objectStore(BY_SEQ_STORE);
  var attStore = txn.objectStore(ATTACH_STORE);
  var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
  var count = revs.length;

  function checkDone() {
    count--;

    if (!count) {
      // done processing all revs
      deleteOrphanedAttachments();
    }
  }

  function deleteOrphanedAttachments() {
    if (!possiblyOrphanedDigests.length) {
      return;
    }

    possiblyOrphanedDigests.forEach(function (digest) {
      var countReq = attAndSeqStore.index('digestSeq').count(IDBKeyRange.bound(digest + '::', digest + '::\uffff', false, false));

      countReq.onsuccess = function (e) {
        var count = e.target.result;

        if (!count) {
          // orphaned
          attStore.delete(digest);
        }
      };
    });
  }

  revs.forEach(function (rev$$1) {
    var index = seqStore.index('_doc_id_rev');
    var key = docId + "::" + rev$$1;

    index.getKey(key).onsuccess = function (e) {
      var seq = e.target.result;

      if (typeof seq !== 'number') {
        return checkDone();
      }

      seqStore.delete(seq);
      var cursor = attAndSeqStore.index('seq').openCursor(IDBKeyRange.only(seq));

      cursor.onsuccess = function (event) {
        var cursor = event.target.result;

        if (cursor) {
          var digest = cursor.value.digestSeq.split('::')[0];
          possiblyOrphanedDigests.push(digest);
          attAndSeqStore.delete(cursor.primaryKey);
          cursor.continue();
        } else {
          // done
          checkDone();
        }
      };
    };
  });
}

function openTransactionSafely(idb, stores, mode) {
  try {
    return {
      txn: idb.transaction(stores, mode)
    };
  } catch (err) {
    return {
      error: err
    };
  }
}

var changesHandler = new Changes();

function idbBulkDocs(dbOpts, req, opts, api, idb, callback) {
  var docInfos = req.docs;
  var txn;
  var docStore;
  var bySeqStore;
  var attachStore;
  var attachAndSeqStore;
  var metaStore;
  var docInfoError;
  var metaDoc;

  for (var i = 0, len = docInfos.length; i < len; i++) {
    var doc = docInfos[i];

    if (doc._id && isLocalId(doc._id)) {
      continue;
    }

    doc = docInfos[i] = parseDoc(doc, opts.new_edits, dbOpts);

    if (doc.error && !docInfoError) {
      docInfoError = doc;
    }
  }

  if (docInfoError) {
    return callback(docInfoError);
  }

  var allDocsProcessed = false;
  var docCountDelta = 0;
  var results = new Array(docInfos.length);
  var fetchedDocs = new ExportedMap();
  var preconditionErrored = false;
  var blobType = api._meta.blobSupport ? 'blob' : 'base64';
  preprocessAttachments(docInfos, blobType, function (err) {
    if (err) {
      return callback(err);
    }

    startTransaction();
  });

  function startTransaction() {
    var stores = [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE, LOCAL_STORE, ATTACH_AND_SEQ_STORE, META_STORE];
    var txnResult = openTransactionSafely(idb, stores, 'readwrite');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    txn = txnResult.txn;
    txn.onabort = idbError(callback);
    txn.ontimeout = idbError(callback);
    txn.oncomplete = complete;
    docStore = txn.objectStore(DOC_STORE);
    bySeqStore = txn.objectStore(BY_SEQ_STORE);
    attachStore = txn.objectStore(ATTACH_STORE);
    attachAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
    metaStore = txn.objectStore(META_STORE);

    metaStore.get(META_STORE).onsuccess = function (e) {
      metaDoc = e.target.result;
      updateDocCountIfReady();
    };

    verifyAttachments(function (err) {
      if (err) {
        preconditionErrored = true;
        return callback(err);
      }

      fetchExistingDocs();
    });
  }

  function onAllDocsProcessed() {
    allDocsProcessed = true;
    updateDocCountIfReady();
  }

  function idbProcessDocs() {
    processDocs(dbOpts.revs_limit, docInfos, api, fetchedDocs, txn, results, writeDoc, opts, onAllDocsProcessed);
  }

  function updateDocCountIfReady() {
    if (!metaDoc || !allDocsProcessed) {
      return;
    } // caching the docCount saves a lot of time in allDocs() and
    // info(), which is why we go to all the trouble of doing this


    metaDoc.docCount += docCountDelta;
    metaStore.put(metaDoc);
  }

  function fetchExistingDocs() {
    if (!docInfos.length) {
      return;
    }

    var numFetched = 0;

    function checkDone() {
      if (++numFetched === docInfos.length) {
        idbProcessDocs();
      }
    }

    function readMetadata(event) {
      var metadata = decodeMetadata(event.target.result);

      if (metadata) {
        fetchedDocs.set(metadata.id, metadata);
      }

      checkDone();
    }

    for (var i = 0, len = docInfos.length; i < len; i++) {
      var docInfo = docInfos[i];

      if (docInfo._id && isLocalId(docInfo._id)) {
        checkDone(); // skip local docs

        continue;
      }

      var req = docStore.get(docInfo.metadata.id);
      req.onsuccess = readMetadata;
    }
  }

  function complete() {
    if (preconditionErrored) {
      return;
    }

    changesHandler.notify(api._meta.name);
    callback(null, results);
  }

  function verifyAttachment(digest, callback) {
    var req = attachStore.get(digest);

    req.onsuccess = function (e) {
      if (!e.target.result) {
        var err = createError(MISSING_STUB, 'unknown stub attachment with digest ' + digest);
        err.status = 412;
        callback(err);
      } else {
        callback();
      }
    };
  }

  function verifyAttachments(finish) {
    var digests = [];
    docInfos.forEach(function (docInfo) {
      if (docInfo.data && docInfo.data._attachments) {
        Object.keys(docInfo.data._attachments).forEach(function (filename) {
          var att = docInfo.data._attachments[filename];

          if (att.stub) {
            digests.push(att.digest);
          }
        });
      }
    });

    if (!digests.length) {
      return finish();
    }

    var numDone = 0;
    var err;

    function checkDone() {
      if (++numDone === digests.length) {
        finish(err);
      }
    }

    digests.forEach(function (digest) {
      verifyAttachment(digest, function (attErr) {
        if (attErr && !err) {
          err = attErr;
        }

        checkDone();
      });
    });
  }

  function writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted, isUpdate, delta, resultsIdx, callback) {
    docInfo.metadata.winningRev = winningRev$$1;
    docInfo.metadata.deleted = winningRevIsDeleted;
    var doc = docInfo.data;
    doc._id = docInfo.metadata.id;
    doc._rev = docInfo.metadata.rev;

    if (newRevIsDeleted) {
      doc._deleted = true;
    }

    var hasAttachments = doc._attachments && Object.keys(doc._attachments).length;

    if (hasAttachments) {
      return writeAttachments(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
    }

    docCountDelta += delta;
    updateDocCountIfReady();
    finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
  }

  function finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback) {
    var doc = docInfo.data;
    var metadata = docInfo.metadata;
    doc._doc_id_rev = metadata.id + '::' + metadata.rev;
    delete doc._id;
    delete doc._rev;

    function afterPutDoc(e) {
      var revsToDelete = docInfo.stemmedRevs || [];

      if (isUpdate && api.auto_compaction) {
        revsToDelete = revsToDelete.concat(compactTree(docInfo.metadata));
      }

      if (revsToDelete && revsToDelete.length) {
        compactRevs(revsToDelete, docInfo.metadata.id, txn);
      }

      metadata.seq = e.target.result; // Current _rev is calculated from _rev_tree on read
      // delete metadata.rev;

      var metadataToStore = encodeMetadata(metadata, winningRev$$1, winningRevIsDeleted);
      var metaDataReq = docStore.put(metadataToStore);
      metaDataReq.onsuccess = afterPutMetadata;
    }

    function afterPutDocError(e) {
      // ConstraintError, need to update, not put (see #1638 for details)
      e.preventDefault(); // avoid transaction abort

      e.stopPropagation(); // avoid transaction onerror

      var index = bySeqStore.index('_doc_id_rev');
      var getKeyReq = index.getKey(doc._doc_id_rev);

      getKeyReq.onsuccess = function (e) {
        var putReq = bySeqStore.put(doc, e.target.result);
        putReq.onsuccess = afterPutDoc;
      };
    }

    function afterPutMetadata() {
      results[resultsIdx] = {
        ok: true,
        id: metadata.id,
        rev: metadata.rev
      };
      fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
      insertAttachmentMappings(docInfo, metadata.seq, callback);
    }

    var putReq = bySeqStore.put(doc);
    putReq.onsuccess = afterPutDoc;
    putReq.onerror = afterPutDocError;
  }

  function writeAttachments(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback) {
    var doc = docInfo.data;
    var numDone = 0;
    var attachments = Object.keys(doc._attachments);

    function collectResults() {
      if (numDone === attachments.length) {
        finishDoc(docInfo, winningRev$$1, winningRevIsDeleted, isUpdate, resultsIdx, callback);
      }
    }

    function attachmentSaved() {
      numDone++;
      collectResults();
    }

    attachments.forEach(function (key) {
      var att = docInfo.data._attachments[key];

      if (!att.stub) {
        var data = att.data;
        delete att.data;
        att.revpos = parseInt(winningRev$$1, 10);
        var digest = att.digest;
        saveAttachment(digest, data, attachmentSaved);
      } else {
        numDone++;
        collectResults();
      }
    });
  } // map seqs to attachment digests, which
  // we will need later during compaction


  function insertAttachmentMappings(docInfo, seq, callback) {
    var attsAdded = 0;
    var attsToAdd = Object.keys(docInfo.data._attachments || {});

    if (!attsToAdd.length) {
      return callback();
    }

    function checkDone() {
      if (++attsAdded === attsToAdd.length) {
        callback();
      }
    }

    function add(att) {
      var digest = docInfo.data._attachments[att].digest;
      var req = attachAndSeqStore.put({
        seq: seq,
        digestSeq: digest + '::' + seq
      });
      req.onsuccess = checkDone;

      req.onerror = function (e) {
        // this callback is for a constaint error, which we ignore
        // because this docid/rev has already been associated with
        // the digest (e.g. when new_edits == false)
        e.preventDefault(); // avoid transaction abort

        e.stopPropagation(); // avoid transaction onerror

        checkDone();
      };
    }

    for (var i = 0; i < attsToAdd.length; i++) {
      add(attsToAdd[i]); // do in parallel
    }
  }

  function saveAttachment(digest, data, callback) {
    var getKeyReq = attachStore.count(digest);

    getKeyReq.onsuccess = function (e) {
      var count = e.target.result;

      if (count) {
        return callback(); // already exists
      }

      var newAtt = {
        digest: digest,
        body: data
      };
      var putReq = attachStore.put(newAtt);
      putReq.onsuccess = callback;
    };
  }
} // Abstraction over IDBCursor and getAll()/getAllKeys() that allows us to batch our operations
// while falling back to a normal IDBCursor operation on browsers that don't support getAll() or
// getAllKeys(). This allows for a much faster implementation than just straight-up cursors, because
// we're not processing each document one-at-a-time.


function runBatchedCursor(objectStore, keyRange, descending, batchSize, onBatch) {
  if (batchSize === -1) {
    batchSize = 1000;
  } // Bail out of getAll()/getAllKeys() in the following cases:
  // 1) either method is unsupported - we need both
  // 2) batchSize is 1 (might as well use IDBCursor)
  // 3) descending – no real way to do this via getAll()/getAllKeys()


  var useGetAll = typeof objectStore.getAll === 'function' && typeof objectStore.getAllKeys === 'function' && batchSize > 1 && !descending;
  var keysBatch;
  var valuesBatch;
  var pseudoCursor;

  function onGetAll(e) {
    valuesBatch = e.target.result;

    if (keysBatch) {
      onBatch(keysBatch, valuesBatch, pseudoCursor);
    }
  }

  function onGetAllKeys(e) {
    keysBatch = e.target.result;

    if (valuesBatch) {
      onBatch(keysBatch, valuesBatch, pseudoCursor);
    }
  }

  function continuePseudoCursor() {
    if (!keysBatch.length) {
      // no more results
      return onBatch();
    } // fetch next batch, exclusive start


    var lastKey = keysBatch[keysBatch.length - 1];
    var newKeyRange;

    if (keyRange && keyRange.upper) {
      try {
        newKeyRange = IDBKeyRange.bound(lastKey, keyRange.upper, true, keyRange.upperOpen);
      } catch (e) {
        if (e.name === "DataError" && e.code === 0) {
          return onBatch(); // we're done, startkey and endkey are equal
        }
      }
    } else {
      newKeyRange = IDBKeyRange.lowerBound(lastKey, true);
    }

    keyRange = newKeyRange;
    keysBatch = null;
    valuesBatch = null;
    objectStore.getAll(keyRange, batchSize).onsuccess = onGetAll;
    objectStore.getAllKeys(keyRange, batchSize).onsuccess = onGetAllKeys;
  }

  function onCursor(e) {
    var cursor = e.target.result;

    if (!cursor) {
      // done
      return onBatch();
    } // regular IDBCursor acts like a batch where batch size is always 1


    onBatch([cursor.key], [cursor.value], cursor);
  }

  if (useGetAll) {
    pseudoCursor = {
      "continue": continuePseudoCursor
    };
    objectStore.getAll(keyRange, batchSize).onsuccess = onGetAll;
    objectStore.getAllKeys(keyRange, batchSize).onsuccess = onGetAllKeys;
  } else if (descending) {
    objectStore.openCursor(keyRange, 'prev').onsuccess = onCursor;
  } else {
    objectStore.openCursor(keyRange).onsuccess = onCursor;
  }
} // simple shim for objectStore.getAll(), falling back to IDBCursor


function getAll(objectStore, keyRange, onSuccess) {
  if (typeof objectStore.getAll === 'function') {
    // use native getAll
    objectStore.getAll(keyRange).onsuccess = onSuccess;
    return;
  } // fall back to cursors


  var values = [];

  function onCursor(e) {
    var cursor = e.target.result;

    if (cursor) {
      values.push(cursor.value);
      cursor.continue();
    } else {
      onSuccess({
        target: {
          result: values
        }
      });
    }
  }

  objectStore.openCursor(keyRange).onsuccess = onCursor;
}

function allDocsKeys(keys, docStore, onBatch) {
  // It's not guaranted to be returned in right order  
  var valuesBatch = new Array(keys.length);
  var count = 0;
  keys.forEach(function (key, index) {
    docStore.get(key).onsuccess = function (event) {
      if (event.target.result) {
        valuesBatch[index] = event.target.result;
      } else {
        valuesBatch[index] = {
          key: key,
          error: 'not_found'
        };
      }

      count++;

      if (count === keys.length) {
        onBatch(keys, valuesBatch, {});
      }
    };
  });
}

function createKeyRange(start, end, inclusiveEnd, key, descending) {
  try {
    if (start && end) {
      if (descending) {
        return IDBKeyRange.bound(end, start, !inclusiveEnd, false);
      } else {
        return IDBKeyRange.bound(start, end, false, !inclusiveEnd);
      }
    } else if (start) {
      if (descending) {
        return IDBKeyRange.upperBound(start);
      } else {
        return IDBKeyRange.lowerBound(start);
      }
    } else if (end) {
      if (descending) {
        return IDBKeyRange.lowerBound(end, !inclusiveEnd);
      } else {
        return IDBKeyRange.upperBound(end, !inclusiveEnd);
      }
    } else if (key) {
      return IDBKeyRange.only(key);
    }
  } catch (e) {
    return {
      error: e
    };
  }

  return null;
}

function idbAllDocs(opts, idb, callback) {
  var start = 'startkey' in opts ? opts.startkey : false;
  var end = 'endkey' in opts ? opts.endkey : false;
  var key = 'key' in opts ? opts.key : false;
  var keys = 'keys' in opts ? opts.keys : false;
  var skip = opts.skip || 0;
  var limit = typeof opts.limit === 'number' ? opts.limit : -1;
  var inclusiveEnd = opts.inclusive_end !== false;
  var keyRange;
  var keyRangeError;

  if (!keys) {
    keyRange = createKeyRange(start, end, inclusiveEnd, key, opts.descending);
    keyRangeError = keyRange && keyRange.error;

    if (keyRangeError && !(keyRangeError.name === "DataError" && keyRangeError.code === 0)) {
      // DataError with error code 0 indicates start is less than end, so
      // can just do an empty query. Else need to throw
      return callback(createError(IDB_ERROR, keyRangeError.name, keyRangeError.message));
    }
  }

  var stores = [DOC_STORE, BY_SEQ_STORE, META_STORE];

  if (opts.attachments) {
    stores.push(ATTACH_STORE);
  }

  var txnResult = openTransactionSafely(idb, stores, 'readonly');

  if (txnResult.error) {
    return callback(txnResult.error);
  }

  var txn = txnResult.txn;
  txn.oncomplete = onTxnComplete;
  txn.onabort = idbError(callback);
  var docStore = txn.objectStore(DOC_STORE);
  var seqStore = txn.objectStore(BY_SEQ_STORE);
  var metaStore = txn.objectStore(META_STORE);
  var docIdRevIndex = seqStore.index('_doc_id_rev');
  var results = [];
  var docCount;
  var updateSeq;

  metaStore.get(META_STORE).onsuccess = function (e) {
    docCount = e.target.result.docCount;
  };
  /* istanbul ignore if */


  if (opts.update_seq) {
    getMaxUpdateSeq(seqStore, function (e) {
      if (e.target.result && e.target.result.length > 0) {
        updateSeq = e.target.result[0];
      }
    });
  }

  function getMaxUpdateSeq(objectStore, onSuccess) {
    function onCursor(e) {
      var cursor = e.target.result;
      var maxKey = undefined;

      if (cursor && cursor.key) {
        maxKey = cursor.key;
      }

      return onSuccess({
        target: {
          result: [maxKey]
        }
      });
    }

    objectStore.openCursor(null, 'prev').onsuccess = onCursor;
  } // if the user specifies include_docs=true, then we don't
  // want to block the main cursor while we're fetching the doc


  function fetchDocAsynchronously(metadata, row, winningRev$$1) {
    var key = metadata.id + "::" + winningRev$$1;

    docIdRevIndex.get(key).onsuccess = function onGetDoc(e) {
      row.doc = decodeDoc(e.target.result) || {};

      if (opts.conflicts) {
        var conflicts = collectConflicts(metadata);

        if (conflicts.length) {
          row.doc._conflicts = conflicts;
        }
      }

      fetchAttachmentsIfNecessary(row.doc, opts, txn);
    };
  }

  function allDocsInner(winningRev$$1, metadata) {
    var row = {
      id: metadata.id,
      key: metadata.id,
      value: {
        rev: winningRev$$1
      }
    };
    var deleted = metadata.deleted;

    if (deleted) {
      if (keys) {
        results.push(row); // deleted docs are okay with "keys" requests

        row.value.deleted = true;
        row.doc = null;
      }
    } else if (skip-- <= 0) {
      results.push(row);

      if (opts.include_docs) {
        fetchDocAsynchronously(metadata, row, winningRev$$1);
      }
    }
  }

  function processBatch(batchValues) {
    for (var i = 0, len = batchValues.length; i < len; i++) {
      if (results.length === limit) {
        break;
      }

      var batchValue = batchValues[i];

      if (batchValue.error && keys) {
        // key was not found with "keys" requests
        results.push(batchValue);
        continue;
      }

      var metadata = decodeMetadata(batchValue);
      var winningRev$$1 = metadata.winningRev;
      allDocsInner(winningRev$$1, metadata);
    }
  }

  function onBatch(batchKeys, batchValues, cursor) {
    if (!cursor) {
      return;
    }

    processBatch(batchValues);

    if (results.length < limit) {
      cursor.continue();
    }
  }

  function onGetAll(e) {
    var values = e.target.result;

    if (opts.descending) {
      values = values.reverse();
    }

    processBatch(values);
  }

  function onResultsReady() {
    var returnVal = {
      total_rows: docCount,
      offset: opts.skip,
      rows: results
    };
    /* istanbul ignore if */

    if (opts.update_seq && updateSeq !== undefined) {
      returnVal.update_seq = updateSeq;
    }

    callback(null, returnVal);
  }

  function onTxnComplete() {
    if (opts.attachments) {
      postProcessAttachments(results, opts.binary).then(onResultsReady);
    } else {
      onResultsReady();
    }
  } // don't bother doing any requests if start > end or limit === 0


  if (keyRangeError || limit === 0) {
    return;
  }

  if (keys) {
    return allDocsKeys(opts.keys, docStore, onBatch);
  }

  if (limit === -1) {
    // just fetch everything
    return getAll(docStore, keyRange, onGetAll);
  } // else do a cursor
  // choose a batch size based on the skip, since we'll need to skip that many


  runBatchedCursor(docStore, keyRange, opts.descending, limit + skip, onBatch);
} //
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//


function checkBlobSupport(txn) {
  return new Promise(function (resolve) {
    var blob$$1 = createBlob(['']);
    var req = txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob$$1, 'key');

    req.onsuccess = function () {
      var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
      var matchedEdge = navigator.userAgent.match(/Edge\//); // MS Edge pretends to be Chrome 42:
      // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx

      resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
    };

    req.onerror = txn.onabort = function (e) {
      // If the transaction aborts now its due to not being able to
      // write to the database, likely due to the disk being full
      e.preventDefault();
      e.stopPropagation();
      resolve(false);
    };
  }).catch(function () {
    return false; // error, so assume unsupported
  });
}

function countDocs(txn, cb) {
  var index = txn.objectStore(DOC_STORE).index('deletedOrLocal');

  index.count(IDBKeyRange.only('0')).onsuccess = function (e) {
    cb(e.target.result);
  };
} // This task queue ensures that IDB open calls are done in their own tick


var running = false;
var queue = [];

function tryCode(fun, err, res, PouchDB) {
  try {
    fun(err, res);
  } catch (err) {
    // Shouldn't happen, but in some odd cases
    // IndexedDB implementations might throw a sync
    // error, in which case this will at least log it.
    PouchDB.emit('error', err);
  }
}

function applyNext() {
  if (running || !queue.length) {
    return;
  }

  running = true;
  queue.shift()();
}

function enqueueTask(action, callback, PouchDB) {
  queue.push(function runAction() {
    action(function runCallback(err, res) {
      tryCode(callback, err, res, PouchDB);
      running = false;
      (0, _immediate.default)(function runNext() {
        applyNext(PouchDB);
      });
    });
  });
  applyNext();
}

function changes(opts, api, dbName, idb) {
  opts = clone(opts);

  if (opts.continuous) {
    var id = dbName + ':' + uuid();
    changesHandler.addListener(dbName, id, api, opts);
    changesHandler.notify(dbName);
    return {
      cancel: function () {
        changesHandler.removeListener(dbName, id);
      }
    };
  }

  var docIds = opts.doc_ids && new ExportedSet(opts.doc_ids);
  opts.since = opts.since || 0;
  var lastSeq = opts.since;
  var limit = 'limit' in opts ? opts.limit : -1;

  if (limit === 0) {
    limit = 1; // per CouchDB _changes spec
  }

  var results = [];
  var numResults = 0;
  var filter = filterChange(opts);
  var docIdsToMetadata = new ExportedMap();
  var txn;
  var bySeqStore;
  var docStore;
  var docIdRevIndex;

  function onBatch(batchKeys, batchValues, cursor) {
    if (!cursor || !batchKeys.length) {
      // done
      return;
    }

    var winningDocs = new Array(batchKeys.length);
    var metadatas = new Array(batchKeys.length);

    function processMetadataAndWinningDoc(metadata, winningDoc) {
      var change = opts.processChange(winningDoc, metadata, opts);
      lastSeq = change.seq = metadata.seq;
      var filtered = filter(change);

      if (typeof filtered === 'object') {
        // anything but true/false indicates error
        return Promise.reject(filtered);
      }

      if (!filtered) {
        return Promise.resolve();
      }

      numResults++;

      if (opts.return_docs) {
        results.push(change);
      } // process the attachment immediately
      // for the benefit of live listeners


      if (opts.attachments && opts.include_docs) {
        return new Promise(function (resolve) {
          fetchAttachmentsIfNecessary(winningDoc, opts, txn, function () {
            postProcessAttachments([change], opts.binary).then(function () {
              resolve(change);
            });
          });
        });
      } else {
        return Promise.resolve(change);
      }
    }

    function onBatchDone() {
      var promises = [];

      for (var i = 0, len = winningDocs.length; i < len; i++) {
        if (numResults === limit) {
          break;
        }

        var winningDoc = winningDocs[i];

        if (!winningDoc) {
          continue;
        }

        var metadata = metadatas[i];
        promises.push(processMetadataAndWinningDoc(metadata, winningDoc));
      }

      Promise.all(promises).then(function (changes) {
        for (var i = 0, len = changes.length; i < len; i++) {
          if (changes[i]) {
            opts.onChange(changes[i]);
          }
        }
      }).catch(opts.complete);

      if (numResults !== limit) {
        cursor.continue();
      }
    } // Fetch all metadatas/winningdocs from this batch in parallel, then process
    // them all only once all data has been collected. This is done in parallel
    // because it's faster than doing it one-at-a-time.


    var numDone = 0;
    batchValues.forEach(function (value, i) {
      var doc = decodeDoc(value);
      var seq = batchKeys[i];
      fetchWinningDocAndMetadata(doc, seq, function (metadata, winningDoc) {
        metadatas[i] = metadata;
        winningDocs[i] = winningDoc;

        if (++numDone === batchKeys.length) {
          onBatchDone();
        }
      });
    });
  }

  function onGetMetadata(doc, seq, metadata, cb) {
    if (metadata.seq !== seq) {
      // some other seq is later
      return cb();
    }

    if (metadata.winningRev === doc._rev) {
      // this is the winning doc
      return cb(metadata, doc);
    } // fetch winning doc in separate request


    var docIdRev = doc._id + '::' + metadata.winningRev;
    var req = docIdRevIndex.get(docIdRev);

    req.onsuccess = function (e) {
      cb(metadata, decodeDoc(e.target.result));
    };
  }

  function fetchWinningDocAndMetadata(doc, seq, cb) {
    if (docIds && !docIds.has(doc._id)) {
      return cb();
    }

    var metadata = docIdsToMetadata.get(doc._id);

    if (metadata) {
      // cached
      return onGetMetadata(doc, seq, metadata, cb);
    } // metadata not cached, have to go fetch it


    docStore.get(doc._id).onsuccess = function (e) {
      metadata = decodeMetadata(e.target.result);
      docIdsToMetadata.set(doc._id, metadata);
      onGetMetadata(doc, seq, metadata, cb);
    };
  }

  function finish() {
    opts.complete(null, {
      results: results,
      last_seq: lastSeq
    });
  }

  function onTxnComplete() {
    if (!opts.continuous && opts.attachments) {
      // cannot guarantee that postProcessing was already done,
      // so do it again
      postProcessAttachments(results).then(finish);
    } else {
      finish();
    }
  }

  var objectStores = [DOC_STORE, BY_SEQ_STORE];

  if (opts.attachments) {
    objectStores.push(ATTACH_STORE);
  }

  var txnResult = openTransactionSafely(idb, objectStores, 'readonly');

  if (txnResult.error) {
    return opts.complete(txnResult.error);
  }

  txn = txnResult.txn;
  txn.onabort = idbError(opts.complete);
  txn.oncomplete = onTxnComplete;
  bySeqStore = txn.objectStore(BY_SEQ_STORE);
  docStore = txn.objectStore(DOC_STORE);
  docIdRevIndex = bySeqStore.index('_doc_id_rev');
  var keyRange = opts.since && !opts.descending ? IDBKeyRange.lowerBound(opts.since, true) : null;
  runBatchedCursor(bySeqStore, keyRange, opts.descending, limit, onBatch);
}

var cachedDBs = new ExportedMap();
var blobSupportPromise;
var openReqList = new ExportedMap();

function IdbPouch(opts, callback) {
  var api = this;
  enqueueTask(function (thisCallback) {
    init(api, opts, thisCallback);
  }, callback, api.constructor);
}

function init(api, opts, callback) {
  var dbName = opts.name;
  var idb = null;
  api._meta = null; // called when creating a fresh new database

  function createSchema(db) {
    var docStore = db.createObjectStore(DOC_STORE, {
      keyPath: 'id'
    });
    db.createObjectStore(BY_SEQ_STORE, {
      autoIncrement: true
    }).createIndex('_doc_id_rev', '_doc_id_rev', {
      unique: true
    });
    db.createObjectStore(ATTACH_STORE, {
      keyPath: 'digest'
    });
    db.createObjectStore(META_STORE, {
      keyPath: 'id',
      autoIncrement: false
    });
    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE); // added in v2

    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {
      unique: false
    }); // added in v3

    db.createObjectStore(LOCAL_STORE, {
      keyPath: '_id'
    }); // added in v4

    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE, {
      autoIncrement: true
    });
    attAndSeqStore.createIndex('seq', 'seq');
    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {
      unique: true
    });
  } // migration to version 2
  // unfortunately "deletedOrLocal" is a misnomer now that we no longer
  // store local docs in the main doc-store, but whaddyagonnado


  function addDeletedOrLocalIndex(txn, callback) {
    var docStore = txn.objectStore(DOC_STORE);
    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {
      unique: false
    });

    docStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        var metadata = cursor.value;
        var deleted = isDeleted(metadata);
        metadata.deletedOrLocal = deleted ? "1" : "0";
        docStore.put(metadata);
        cursor.continue();
      } else {
        callback();
      }
    };
  } // migration to version 3 (part 1)


  function createLocalStoreSchema(db) {
    db.createObjectStore(LOCAL_STORE, {
      keyPath: '_id'
    }).createIndex('_doc_id_rev', '_doc_id_rev', {
      unique: true
    });
  } // migration to version 3 (part 2)


  function migrateLocalStore(txn, cb) {
    var localStore = txn.objectStore(LOCAL_STORE);
    var docStore = txn.objectStore(DOC_STORE);
    var seqStore = txn.objectStore(BY_SEQ_STORE);
    var cursor = docStore.openCursor();

    cursor.onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        var metadata = cursor.value;
        var docId = metadata.id;
        var local = isLocalId(docId);
        var rev$$1 = winningRev(metadata);

        if (local) {
          var docIdRev = docId + "::" + rev$$1; // remove all seq entries
          // associated with this docId

          var start = docId + "::";
          var end = docId + "::~";
          var index = seqStore.index('_doc_id_rev');
          var range = IDBKeyRange.bound(start, end, false, false);
          var seqCursor = index.openCursor(range);

          seqCursor.onsuccess = function (e) {
            seqCursor = e.target.result;

            if (!seqCursor) {
              // done
              docStore.delete(cursor.primaryKey);
              cursor.continue();
            } else {
              var data = seqCursor.value;

              if (data._doc_id_rev === docIdRev) {
                localStore.put(data);
              }

              seqStore.delete(seqCursor.primaryKey);
              seqCursor.continue();
            }
          };
        } else {
          cursor.continue();
        }
      } else if (cb) {
        cb();
      }
    };
  } // migration to version 4 (part 1)


  function addAttachAndSeqStore(db) {
    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE, {
      autoIncrement: true
    });
    attAndSeqStore.createIndex('seq', 'seq');
    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {
      unique: true
    });
  } // migration to version 4 (part 2)


  function migrateAttsAndSeqs(txn, callback) {
    var seqStore = txn.objectStore(BY_SEQ_STORE);
    var attStore = txn.objectStore(ATTACH_STORE);
    var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE); // need to actually populate the table. this is the expensive part,
    // so as an optimization, check first that this database even
    // contains attachments

    var req = attStore.count();

    req.onsuccess = function (e) {
      var count = e.target.result;

      if (!count) {
        return callback(); // done
      }

      seqStore.openCursor().onsuccess = function (e) {
        var cursor = e.target.result;

        if (!cursor) {
          return callback(); // done
        }

        var doc = cursor.value;
        var seq = cursor.primaryKey;
        var atts = Object.keys(doc._attachments || {});
        var digestMap = {};

        for (var j = 0; j < atts.length; j++) {
          var att = doc._attachments[atts[j]];
          digestMap[att.digest] = true; // uniq digests, just in case
        }

        var digests = Object.keys(digestMap);

        for (j = 0; j < digests.length; j++) {
          var digest = digests[j];
          attAndSeqStore.put({
            seq: seq,
            digestSeq: digest + '::' + seq
          });
        }

        cursor.continue();
      };
    };
  } // migration to version 5
  // Instead of relying on on-the-fly migration of metadata,
  // this brings the doc-store to its modern form:
  // - metadata.winningrev
  // - metadata.seq
  // - stringify the metadata when storing it


  function migrateMetadata(txn) {
    function decodeMetadataCompat(storedObject) {
      if (!storedObject.data) {
        // old format, when we didn't store it stringified
        storedObject.deleted = storedObject.deletedOrLocal === '1';
        return storedObject;
      }

      return decodeMetadata(storedObject);
    } // ensure that every metadata has a winningRev and seq,
    // which was previously created on-the-fly but better to migrate


    var bySeqStore = txn.objectStore(BY_SEQ_STORE);
    var docStore = txn.objectStore(DOC_STORE);
    var cursor = docStore.openCursor();

    cursor.onsuccess = function (e) {
      var cursor = e.target.result;

      if (!cursor) {
        return; // done
      }

      var metadata = decodeMetadataCompat(cursor.value);
      metadata.winningRev = metadata.winningRev || winningRev(metadata);

      function fetchMetadataSeq() {
        // metadata.seq was added post-3.2.0, so if it's missing,
        // we need to fetch it manually
        var start = metadata.id + '::';
        var end = metadata.id + '::\uffff';
        var req = bySeqStore.index('_doc_id_rev').openCursor(IDBKeyRange.bound(start, end));
        var metadataSeq = 0;

        req.onsuccess = function (e) {
          var cursor = e.target.result;

          if (!cursor) {
            metadata.seq = metadataSeq;
            return onGetMetadataSeq();
          }

          var seq = cursor.primaryKey;

          if (seq > metadataSeq) {
            metadataSeq = seq;
          }

          cursor.continue();
        };
      }

      function onGetMetadataSeq() {
        var metadataToStore = encodeMetadata(metadata, metadata.winningRev, metadata.deleted);
        var req = docStore.put(metadataToStore);

        req.onsuccess = function () {
          cursor.continue();
        };
      }

      if (metadata.seq) {
        return onGetMetadataSeq();
      }

      fetchMetadataSeq();
    };
  }

  api._remote = false;

  api.type = function () {
    return 'idb';
  };

  api._id = toPromise(function (callback) {
    callback(null, api._meta.instanceId);
  });

  api._bulkDocs = function idb_bulkDocs(req, reqOpts, callback) {
    idbBulkDocs(opts, req, reqOpts, api, idb, callback);
  }; // First we look up the metadata in the ids database, then we fetch the
  // current revision(s) from the by sequence store


  api._get = function idb_get(id, opts, callback) {
    var doc;
    var metadata;
    var err;
    var txn = opts.ctx;

    if (!txn) {
      var txnResult = openTransactionSafely(idb, [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');

      if (txnResult.error) {
        return callback(txnResult.error);
      }

      txn = txnResult.txn;
    }

    function finish() {
      callback(err, {
        doc: doc,
        metadata: metadata,
        ctx: txn
      });
    }

    txn.objectStore(DOC_STORE).get(id).onsuccess = function (e) {
      metadata = decodeMetadata(e.target.result); // we can determine the result here if:
      // 1. there is no such document
      // 2. the document is deleted and we don't ask about specific rev
      // When we ask with opts.rev we expect the answer to be either
      // doc (possibly with _deleted=true) or missing error

      if (!metadata) {
        err = createError(MISSING_DOC, 'missing');
        return finish();
      }

      var rev$$1;

      if (!opts.rev) {
        rev$$1 = metadata.winningRev;
        var deleted = isDeleted(metadata);

        if (deleted) {
          err = createError(MISSING_DOC, "deleted");
          return finish();
        }
      } else {
        rev$$1 = opts.latest ? latest(opts.rev, metadata) : opts.rev;
      }

      var objectStore = txn.objectStore(BY_SEQ_STORE);
      var key = metadata.id + '::' + rev$$1;

      objectStore.index('_doc_id_rev').get(key).onsuccess = function (e) {
        doc = e.target.result;

        if (doc) {
          doc = decodeDoc(doc);
        }

        if (!doc) {
          err = createError(MISSING_DOC, 'missing');
          return finish();
        }

        finish();
      };
    };
  };

  api._getAttachment = function (docId, attachId, attachment, opts, callback) {
    var txn;

    if (opts.ctx) {
      txn = opts.ctx;
    } else {
      var txnResult = openTransactionSafely(idb, [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');

      if (txnResult.error) {
        return callback(txnResult.error);
      }

      txn = txnResult.txn;
    }

    var digest = attachment.digest;
    var type = attachment.content_type;

    txn.objectStore(ATTACH_STORE).get(digest).onsuccess = function (e) {
      var body = e.target.result.body;
      readBlobData(body, type, opts.binary, function (blobData) {
        callback(null, blobData);
      });
    };
  };

  api._info = function idb_info(callback) {
    var updateSeq;
    var docCount;
    var txnResult = openTransactionSafely(idb, [META_STORE, BY_SEQ_STORE], 'readonly');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    var txn = txnResult.txn;

    txn.objectStore(META_STORE).get(META_STORE).onsuccess = function (e) {
      docCount = e.target.result.docCount;
    };

    txn.objectStore(BY_SEQ_STORE).openCursor(null, 'prev').onsuccess = function (e) {
      var cursor = e.target.result;
      updateSeq = cursor ? cursor.key : 0;
    };

    txn.oncomplete = function () {
      callback(null, {
        doc_count: docCount,
        update_seq: updateSeq,
        // for debugging
        idb_attachment_format: api._meta.blobSupport ? 'binary' : 'base64'
      });
    };
  };

  api._allDocs = function idb_allDocs(opts, callback) {
    idbAllDocs(opts, idb, callback);
  };

  api._changes = function idbChanges(opts) {
    return changes(opts, api, dbName, idb);
  };

  api._close = function (callback) {
    // https://developer.mozilla.org/en-US/docs/IndexedDB/IDBDatabase#close
    // "Returns immediately and closes the connection in a separate thread..."
    idb.close();
    cachedDBs.delete(dbName);
    callback();
  };

  api._getRevisionTree = function (docId, callback) {
    var txnResult = openTransactionSafely(idb, [DOC_STORE], 'readonly');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    var txn = txnResult.txn;
    var req = txn.objectStore(DOC_STORE).get(docId);

    req.onsuccess = function (event) {
      var doc = decodeMetadata(event.target.result);

      if (!doc) {
        callback(createError(MISSING_DOC));
      } else {
        callback(null, doc.rev_tree);
      }
    };
  }; // This function removes revisions of document docId
  // which are listed in revs and sets this document
  // revision to to rev_tree


  api._doCompaction = function (docId, revs, callback) {
    var stores = [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE, ATTACH_AND_SEQ_STORE];
    var txnResult = openTransactionSafely(idb, stores, 'readwrite');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    var txn = txnResult.txn;
    var docStore = txn.objectStore(DOC_STORE);

    docStore.get(docId).onsuccess = function (event) {
      var metadata = decodeMetadata(event.target.result);
      traverseRevTree(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
        var rev$$1 = pos + '-' + revHash;

        if (revs.indexOf(rev$$1) !== -1) {
          opts.status = 'missing';
        }
      });
      compactRevs(revs, docId, txn);
      var winningRev$$1 = metadata.winningRev;
      var deleted = metadata.deleted;
      txn.objectStore(DOC_STORE).put(encodeMetadata(metadata, winningRev$$1, deleted));
    };

    txn.onabort = idbError(callback);

    txn.oncomplete = function () {
      callback();
    };
  };

  api._getLocal = function (id, callback) {
    var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readonly');

    if (txnResult.error) {
      return callback(txnResult.error);
    }

    var tx = txnResult.txn;
    var req = tx.objectStore(LOCAL_STORE).get(id);
    req.onerror = idbError(callback);

    req.onsuccess = function (e) {
      var doc = e.target.result;

      if (!doc) {
        callback(createError(MISSING_DOC));
      } else {
        delete doc['_doc_id_rev']; // for backwards compat

        callback(null, doc);
      }
    };
  };

  api._putLocal = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    delete doc._revisions; // ignore this, trust the rev

    var oldRev = doc._rev;
    var id = doc._id;

    if (!oldRev) {
      doc._rev = '0-1';
    } else {
      doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
    }

    var tx = opts.ctx;
    var ret;

    if (!tx) {
      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');

      if (txnResult.error) {
        return callback(txnResult.error);
      }

      tx = txnResult.txn;
      tx.onerror = idbError(callback);

      tx.oncomplete = function () {
        if (ret) {
          callback(null, ret);
        }
      };
    }

    var oStore = tx.objectStore(LOCAL_STORE);
    var req;

    if (oldRev) {
      req = oStore.get(id);

      req.onsuccess = function (e) {
        var oldDoc = e.target.result;

        if (!oldDoc || oldDoc._rev !== oldRev) {
          callback(createError(REV_CONFLICT));
        } else {
          // update
          var req = oStore.put(doc);

          req.onsuccess = function () {
            ret = {
              ok: true,
              id: doc._id,
              rev: doc._rev
            };

            if (opts.ctx) {
              // return immediately
              callback(null, ret);
            }
          };
        }
      };
    } else {
      // new doc
      req = oStore.add(doc);

      req.onerror = function (e) {
        // constraint error, already exists
        callback(createError(REV_CONFLICT));
        e.preventDefault(); // avoid transaction abort

        e.stopPropagation(); // avoid transaction onerror
      };

      req.onsuccess = function () {
        ret = {
          ok: true,
          id: doc._id,
          rev: doc._rev
        };

        if (opts.ctx) {
          // return immediately
          callback(null, ret);
        }
      };
    }
  };

  api._removeLocal = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    var tx = opts.ctx;

    if (!tx) {
      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');

      if (txnResult.error) {
        return callback(txnResult.error);
      }

      tx = txnResult.txn;

      tx.oncomplete = function () {
        if (ret) {
          callback(null, ret);
        }
      };
    }

    var ret;
    var id = doc._id;
    var oStore = tx.objectStore(LOCAL_STORE);
    var req = oStore.get(id);
    req.onerror = idbError(callback);

    req.onsuccess = function (e) {
      var oldDoc = e.target.result;

      if (!oldDoc || oldDoc._rev !== doc._rev) {
        callback(createError(MISSING_DOC));
      } else {
        oStore.delete(id);
        ret = {
          ok: true,
          id: id,
          rev: '0-0'
        };

        if (opts.ctx) {
          // return immediately
          callback(null, ret);
        }
      }
    };
  };

  api._destroy = function (opts, callback) {
    changesHandler.removeAllListeners(dbName); //Close open request for "dbName" database to fix ie delay.

    var openReq = openReqList.get(dbName);

    if (openReq && openReq.result) {
      openReq.result.close();
      cachedDBs.delete(dbName);
    }

    var req = indexedDB.deleteDatabase(dbName);

    req.onsuccess = function () {
      //Remove open request from the list.
      openReqList.delete(dbName);

      if (hasLocalStorage() && dbName in localStorage) {
        delete localStorage[dbName];
      }

      callback(null, {
        'ok': true
      });
    };

    req.onerror = idbError(callback);
  };

  var cached = cachedDBs.get(dbName);

  if (cached) {
    idb = cached.idb;
    api._meta = cached.global;
    return (0, _immediate.default)(function () {
      callback(null, api);
    });
  }

  var req = indexedDB.open(dbName, ADAPTER_VERSION);
  openReqList.set(dbName, req);

  req.onupgradeneeded = function (e) {
    var db = e.target.result;

    if (e.oldVersion < 1) {
      return createSchema(db); // new db, initial schema
    } // do migrations


    var txn = e.currentTarget.transaction; // these migrations have to be done in this function, before
    // control is returned to the event loop, because IndexedDB

    if (e.oldVersion < 3) {
      createLocalStoreSchema(db); // v2 -> v3
    }

    if (e.oldVersion < 4) {
      addAttachAndSeqStore(db); // v3 -> v4
    }

    var migrations = [addDeletedOrLocalIndex, // v1 -> v2
    migrateLocalStore, // v2 -> v3
    migrateAttsAndSeqs, // v3 -> v4
    migrateMetadata // v4 -> v5
    ];
    var i = e.oldVersion;

    function next() {
      var migration = migrations[i - 1];
      i++;

      if (migration) {
        migration(txn, next);
      }
    }

    next();
  };

  req.onsuccess = function (e) {
    idb = e.target.result;

    idb.onversionchange = function () {
      idb.close();
      cachedDBs.delete(dbName);
    };

    idb.onabort = function (e) {
      guardedConsole('error', 'Database has a global failure', e.target.error);
      idb.close();
      cachedDBs.delete(dbName);
    }; // Do a few setup operations (in parallel as much as possible):
    // 1. Fetch meta doc
    // 2. Check blob support
    // 3. Calculate docCount
    // 4. Generate an instanceId if necessary
    // 5. Store docCount and instanceId on meta doc


    var txn = idb.transaction([META_STORE, DETECT_BLOB_SUPPORT_STORE, DOC_STORE], 'readwrite');
    var storedMetaDoc = false;
    var metaDoc;
    var docCount;
    var blobSupport;
    var instanceId;

    function completeSetup() {
      if (typeof blobSupport === 'undefined' || !storedMetaDoc) {
        return;
      }

      api._meta = {
        name: dbName,
        instanceId: instanceId,
        blobSupport: blobSupport
      };
      cachedDBs.set(dbName, {
        idb: idb,
        global: api._meta
      });
      callback(null, api);
    }

    function storeMetaDocIfReady() {
      if (typeof docCount === 'undefined' || typeof metaDoc === 'undefined') {
        return;
      }

      var instanceKey = dbName + '_id';

      if (instanceKey in metaDoc) {
        instanceId = metaDoc[instanceKey];
      } else {
        metaDoc[instanceKey] = instanceId = uuid();
      }

      metaDoc.docCount = docCount;
      txn.objectStore(META_STORE).put(metaDoc);
    } //
    // fetch or generate the instanceId
    //


    txn.objectStore(META_STORE).get(META_STORE).onsuccess = function (e) {
      metaDoc = e.target.result || {
        id: META_STORE
      };
      storeMetaDocIfReady();
    }; //
    // countDocs
    //


    countDocs(txn, function (count) {
      docCount = count;
      storeMetaDocIfReady();
    }); //
    // check blob support
    //

    if (!blobSupportPromise) {
      // make sure blob support is only checked once
      blobSupportPromise = checkBlobSupport(txn);
    }

    blobSupportPromise.then(function (val) {
      blobSupport = val;
      completeSetup();
    }); // only when the metadata put transaction has completed,
    // consider the setup done

    txn.oncomplete = function () {
      storedMetaDoc = true;
      completeSetup();
    };

    txn.onabort = idbError(callback);
  };

  req.onerror = function () {
    var msg = 'Failed to open indexedDB, are you in private browsing mode?';
    guardedConsole('error', msg);
    callback(createError(IDB_ERROR, msg));
  };
}

IdbPouch.valid = function () {
  // Following #7085 buggy idb versions (typically Safari < 10.1) are
  // considered valid.
  // On Firefox SecurityError is thrown while referencing indexedDB if cookies
  // are not allowed. `typeof indexedDB` also triggers the error.
  try {
    // some outdated implementations of IDB that appear on Samsung
    // and HTC Android devices <4.4 are missing IDBKeyRange
    return typeof indexedDB !== 'undefined' && typeof IDBKeyRange !== 'undefined';
  } catch (e) {
    return false;
  }
};

function IDBPouch(PouchDB) {
  PouchDB.adapter('idb', IdbPouch, true);
} // dead simple promise pool, inspired by https://github.com/timdp/es6-promise-pool
// but much smaller in code size. limits the number of concurrent promises that are executed


function pool(promiseFactories, limit) {
  return new Promise(function (resolve, reject) {
    var running = 0;
    var current = 0;
    var done = 0;
    var len = promiseFactories.length;
    var err;

    function runNext() {
      running++;
      promiseFactories[current++]().then(onSuccess, onError);
    }

    function doNext() {
      if (++done === len) {
        /* istanbul ignore if */
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      } else {
        runNextBatch();
      }
    }

    function onSuccess() {
      running--;
      doNext();
    }
    /* istanbul ignore next */


    function onError(thisErr) {
      running--;
      err = err || thisErr;
      doNext();
    }

    function runNextBatch() {
      while (running < limit && current < len) {
        runNext();
      }
    }

    runNextBatch();
  });
}

var CHANGES_BATCH_SIZE = 25;
var MAX_SIMULTANEOUS_REVS = 50;
var CHANGES_TIMEOUT_BUFFER = 5000;
var DEFAULT_HEARTBEAT = 10000;
var supportsBulkGetMap = {};

function readAttachmentsAsBlobOrBuffer(row) {
  var doc = row.doc || row.ok;
  var atts = doc && doc._attachments;

  if (!atts) {
    return;
  }

  Object.keys(atts).forEach(function (filename) {
    var att = atts[filename];
    att.data = b64ToBluffer(att.data, att.content_type);
  });
}

function encodeDocId(id) {
  if (/^_design/.test(id)) {
    return '_design/' + encodeURIComponent(id.slice(8));
  }

  if (/^_local/.test(id)) {
    return '_local/' + encodeURIComponent(id.slice(7));
  }

  return encodeURIComponent(id);
}

function preprocessAttachments$1(doc) {
  if (!doc._attachments || !Object.keys(doc._attachments)) {
    return Promise.resolve();
  }

  return Promise.all(Object.keys(doc._attachments).map(function (key) {
    var attachment = doc._attachments[key];

    if (attachment.data && typeof attachment.data !== 'string') {
      return new Promise(function (resolve) {
        blobToBase64(attachment.data, resolve);
      }).then(function (b64) {
        attachment.data = b64;
      });
    }
  }));
}

function hasUrlPrefix(opts) {
  if (!opts.prefix) {
    return false;
  }

  var protocol = parseUri(opts.prefix).protocol;
  return protocol === 'http' || protocol === 'https';
} // Get all the information you possibly can about the URI given by name and
// return it as a suitable object.


function getHost(name, opts) {
  // encode db name if opts.prefix is a url (#5574)
  if (hasUrlPrefix(opts)) {
    var dbName = opts.name.substr(opts.prefix.length); // Ensure prefix has a trailing slash

    var prefix = opts.prefix.replace(/\/?$/, '/');
    name = prefix + encodeURIComponent(dbName);
  }

  var uri = parseUri(name);

  if (uri.user || uri.password) {
    uri.auth = {
      username: uri.user,
      password: uri.password
    };
  } // Split the path part of the URI into parts using '/' as the delimiter
  // after removing any leading '/' and any trailing '/'


  var parts = uri.path.replace(/(^\/|\/$)/g, '').split('/');
  uri.db = parts.pop(); // Prevent double encoding of URI component

  if (uri.db.indexOf('%') === -1) {
    uri.db = encodeURIComponent(uri.db);
  }

  uri.path = parts.join('/');
  return uri;
} // Generate a URL with the host data given by opts and the given path


function genDBUrl(opts, path) {
  return genUrl(opts, opts.db + '/' + path);
} // Generate a URL with the host data given by opts and the given path


function genUrl(opts, path) {
  // If the host already has a path, then we need to have a path delimiter
  // Otherwise, the path delimiter is the empty string
  var pathDel = !opts.path ? '' : '/'; // If the host already has a path, then we need to have a path delimiter
  // Otherwise, the path delimiter is the empty string

  return opts.protocol + '://' + opts.host + (opts.port ? ':' + opts.port : '') + '/' + opts.path + pathDel + path;
}

function paramsToStr(params) {
  return '?' + Object.keys(params).map(function (k) {
    return k + '=' + encodeURIComponent(params[k]);
  }).join('&');
}

function shouldCacheBust(opts) {
  var ua = typeof navigator !== 'undefined' && navigator.userAgent ? navigator.userAgent.toLowerCase() : '';
  var isIE = ua.indexOf('msie') !== -1;
  var isTrident = ua.indexOf('trident') !== -1;
  var isEdge = ua.indexOf('edge') !== -1;
  var isGET = !('method' in opts) || opts.method === 'GET';
  return (isIE || isTrident || isEdge) && isGET;
} // Implements the PouchDB API for dealing with CouchDB instances over HTTP


function HttpPouch(opts, callback) {
  // The functions that will be publicly available for HttpPouch
  var api = this;
  var host = getHost(opts.name, opts);
  var dbUrl = genDBUrl(host, '');
  opts = clone(opts);

  var ourFetch = function (url, options) {
    options = options || {};
    options.headers = options.headers || new h();
    options.credentials = 'include';

    if (opts.auth || host.auth) {
      var nAuth = opts.auth || host.auth;
      var str = nAuth.username + ':' + nAuth.password;
      var token = thisBtoa(unescape(encodeURIComponent(str)));
      options.headers.set('Authorization', 'Basic ' + token);
    }

    var headers = opts.headers || {};
    Object.keys(headers).forEach(function (key) {
      options.headers.append(key, headers[key]);
    });
    /* istanbul ignore if */

    if (shouldCacheBust(options)) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + '_nonce=' + Date.now();
    }

    var fetchFun = opts.fetch || f$1;
    return fetchFun(url, options);
  };

  function adapterFun$$1(name, fun) {
    return adapterFun(name, (0, _argsarray.default)(function (args) {
      setup().then(function () {
        return fun.apply(this, args);
      }).catch(function (e) {
        var callback = args.pop();
        callback(e);
      });
    })).bind(api);
  }

  function fetchJSON(url, options, callback) {
    var result = {};
    options = options || {};
    options.headers = options.headers || new h();

    if (!options.headers.get('Content-Type')) {
      options.headers.set('Content-Type', 'application/json');
    }

    if (!options.headers.get('Accept')) {
      options.headers.set('Accept', 'application/json');
    }

    return ourFetch(url, options).then(function (response) {
      result.ok = response.ok;
      result.status = response.status;
      return response.json();
    }).then(function (json) {
      result.data = json;

      if (!result.ok) {
        result.data.status = result.status;
        var err = generateErrorFromResponse(result.data);

        if (callback) {
          return callback(err);
        } else {
          throw err;
        }
      }

      if (Array.isArray(result.data)) {
        result.data = result.data.map(function (v) {
          if (v.error || v.missing) {
            return generateErrorFromResponse(v);
          } else {
            return v;
          }
        });
      }

      if (callback) {
        callback(null, result.data);
      } else {
        return result;
      }
    });
  }

  var setupPromise;

  function setup() {
    if (opts.skip_setup) {
      return Promise.resolve();
    } // If there is a setup in process or previous successful setup
    // done then we will use that
    // If previous setups have been rejected we will try again


    if (setupPromise) {
      return setupPromise;
    }

    setupPromise = fetchJSON(dbUrl).catch(function (err) {
      if (err && err.status && err.status === 404) {
        // Doesnt exist, create it
        explainError(404, 'PouchDB is just detecting if the remote exists.');
        return fetchJSON(dbUrl, {
          method: 'PUT'
        });
      } else {
        return Promise.reject(err);
      }
    }).catch(function (err) {
      // If we try to create a database that already exists, skipped in
      // istanbul since its catching a race condition.

      /* istanbul ignore if */
      if (err && err.status && err.status === 412) {
        return true;
      }

      return Promise.reject(err);
    });
    setupPromise.catch(function () {
      setupPromise = null;
    });
    return setupPromise;
  }

  (0, _immediate.default)(function () {
    callback(null, api);
  });
  api._remote = true;
  /* istanbul ignore next */

  api.type = function () {
    return 'http';
  };

  api.id = adapterFun$$1('id', function (callback) {
    ourFetch(genUrl(host, '')).then(function (response) {
      return response.json();
    }).catch(function () {
      return {};
    }).then(function (result) {
      // Bad response or missing `uuid` should not prevent ID generation.
      var uuid$$1 = result && result.uuid ? result.uuid + host.db : genDBUrl(host, '');
      callback(null, uuid$$1);
    });
  }); // Sends a POST request to the host calling the couchdb _compact function
  //    version: The version of CouchDB it is running

  api.compact = adapterFun$$1('compact', function (opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = clone(opts);
    fetchJSON(genDBUrl(host, '_compact'), {
      method: 'POST'
    }).then(function () {
      function ping() {
        api.info(function (err, res) {
          // CouchDB may send a "compact_running:true" if it's
          // already compacting. PouchDB Server doesn't.

          /* istanbul ignore else */
          if (res && !res.compact_running) {
            callback(null, {
              ok: true
            });
          } else {
            setTimeout(ping, opts.interval || 200);
          }
        });
      } // Ping the http if it's finished compaction


      ping();
    });
  });
  api.bulkGet = adapterFun('bulkGet', function (opts, callback) {
    var self = this;

    function doBulkGet(cb) {
      var params = {};

      if (opts.revs) {
        params.revs = true;
      }

      if (opts.attachments) {
        /* istanbul ignore next */
        params.attachments = true;
      }

      if (opts.latest) {
        params.latest = true;
      }

      fetchJSON(genDBUrl(host, '_bulk_get' + paramsToStr(params)), {
        method: 'POST',
        body: JSON.stringify({
          docs: opts.docs
        })
      }).then(function (result) {
        if (opts.attachments && opts.binary) {
          result.data.results.forEach(function (res) {
            res.docs.forEach(readAttachmentsAsBlobOrBuffer);
          });
        }

        cb(null, result.data);
      }).catch(cb);
    }
    /* istanbul ignore next */


    function doBulkGetShim() {
      // avoid "url too long error" by splitting up into multiple requests
      var batchSize = MAX_SIMULTANEOUS_REVS;
      var numBatches = Math.ceil(opts.docs.length / batchSize);
      var numDone = 0;
      var results = new Array(numBatches);

      function onResult(batchNum) {
        return function (err, res) {
          // err is impossible because shim returns a list of errs in that case
          results[batchNum] = res.results;

          if (++numDone === numBatches) {
            callback(null, {
              results: flatten(results)
            });
          }
        };
      }

      for (var i = 0; i < numBatches; i++) {
        var subOpts = pick(opts, ['revs', 'attachments', 'binary', 'latest']);
        subOpts.docs = opts.docs.slice(i * batchSize, Math.min(opts.docs.length, (i + 1) * batchSize));
        bulkGet(self, subOpts, onResult(i));
      }
    } // mark the whole database as either supporting or not supporting _bulk_get


    var dbUrl = genUrl(host, '');
    var supportsBulkGet = supportsBulkGetMap[dbUrl];
    /* istanbul ignore next */

    if (typeof supportsBulkGet !== 'boolean') {
      // check if this database supports _bulk_get
      doBulkGet(function (err, res) {
        if (err) {
          supportsBulkGetMap[dbUrl] = false;
          explainError(err.status, 'PouchDB is just detecting if the remote ' + 'supports the _bulk_get API.');
          doBulkGetShim();
        } else {
          supportsBulkGetMap[dbUrl] = true;
          callback(null, res);
        }
      });
    } else if (supportsBulkGet) {
      doBulkGet(callback);
    } else {
      doBulkGetShim();
    }
  }); // Calls GET on the host, which gets back a JSON string containing
  //    couchdb: A welcome string
  //    version: The version of CouchDB it is running

  api._info = function (callback) {
    setup().then(function () {
      return ourFetch(genDBUrl(host, ''));
    }).then(function (response) {
      return response.json();
    }).then(function (info) {
      info.host = genDBUrl(host, '');
      callback(null, info);
    }).catch(callback);
  };

  api.fetch = function (path, options) {
    return setup().then(function () {
      var url = path.substring(0, 1) === '/' ? genUrl(host, path.substring(1)) : genDBUrl(host, path);
      return ourFetch(url, options);
    });
  }; // Get the document with the given id from the database given by host.
  // The id could be solely the _id in the database, or it may be a
  // _design/ID or _local/ID path


  api.get = adapterFun$$1('get', function (id, opts, callback) {
    // If no options were given, set the callback to the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = clone(opts); // List of parameters to add to the GET request

    var params = {};

    if (opts.revs) {
      params.revs = true;
    }

    if (opts.revs_info) {
      params.revs_info = true;
    }

    if (opts.latest) {
      params.latest = true;
    }

    if (opts.open_revs) {
      if (opts.open_revs !== "all") {
        opts.open_revs = JSON.stringify(opts.open_revs);
      }

      params.open_revs = opts.open_revs;
    }

    if (opts.rev) {
      params.rev = opts.rev;
    }

    if (opts.conflicts) {
      params.conflicts = opts.conflicts;
    }
    /* istanbul ignore if */


    if (opts.update_seq) {
      params.update_seq = opts.update_seq;
    }

    id = encodeDocId(id);

    function fetchAttachments(doc) {
      var atts = doc._attachments;
      var filenames = atts && Object.keys(atts);

      if (!atts || !filenames.length) {
        return;
      } // we fetch these manually in separate XHRs, because
      // Sync Gateway would normally send it back as multipart/mixed,
      // which we cannot parse. Also, this is more efficient than
      // receiving attachments as base64-encoded strings.


      function fetchData(filename) {
        var att = atts[filename];

        var path = encodeDocId(doc._id) + '/' + encodeAttachmentId(filename) + '?rev=' + doc._rev;

        return ourFetch(genDBUrl(host, path)).then(function (response) {
          if (typeof process !== 'undefined' && !true) {
            return response.buffer();
          } else {
            /* istanbul ignore next */
            return response.blob();
          }
        }).then(function (blob) {
          if (opts.binary) {
            // TODO: Can we remove this?
            if (typeof process !== 'undefined' && !true) {
              blob.type = att.content_type;
            }

            return blob;
          }

          return new Promise(function (resolve) {
            blobToBase64(blob, resolve);
          });
        }).then(function (data) {
          delete att.stub;
          delete att.length;
          att.data = data;
        });
      }

      var promiseFactories = filenames.map(function (filename) {
        return function () {
          return fetchData(filename);
        };
      }); // This limits the number of parallel xhr requests to 5 any time
      // to avoid issues with maximum browser request limits

      return pool(promiseFactories, 5);
    }

    function fetchAllAttachments(docOrDocs) {
      if (Array.isArray(docOrDocs)) {
        return Promise.all(docOrDocs.map(function (doc) {
          if (doc.ok) {
            return fetchAttachments(doc.ok);
          }
        }));
      }

      return fetchAttachments(docOrDocs);
    }

    var url = genDBUrl(host, id + paramsToStr(params));
    fetchJSON(url).then(function (res) {
      return Promise.resolve().then(function () {
        if (opts.attachments) {
          return fetchAllAttachments(res.data);
        }
      }).then(function () {
        callback(null, res.data);
      });
    }).catch(function (e) {
      e.docId = id;
      callback(e);
    });
  }); // Delete the document given by doc from the database given by host.

  api.remove = adapterFun$$1('remove', function (docOrId, optsOrRev, opts, cb) {
    var doc;

    if (typeof optsOrRev === 'string') {
      // id, rev, opts, callback style
      doc = {
        _id: docOrId,
        _rev: optsOrRev
      };

      if (typeof opts === 'function') {
        cb = opts;
        opts = {};
      }
    } else {
      // doc, opts, callback style
      doc = docOrId;

      if (typeof optsOrRev === 'function') {
        cb = optsOrRev;
        opts = {};
      } else {
        cb = opts;
        opts = optsOrRev;
      }
    }

    var rev$$1 = doc._rev || opts.rev;
    var url = genDBUrl(host, encodeDocId(doc._id)) + '?rev=' + rev$$1;
    fetchJSON(url, {
      method: 'DELETE'
    }, cb).catch(cb);
  });

  function encodeAttachmentId(attachmentId) {
    return attachmentId.split("/").map(encodeURIComponent).join("/");
  } // Get the attachment


  api.getAttachment = adapterFun$$1('getAttachment', function (docId, attachmentId, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    var params = opts.rev ? '?rev=' + opts.rev : '';
    var url = genDBUrl(host, encodeDocId(docId)) + '/' + encodeAttachmentId(attachmentId) + params;
    var contentType;
    ourFetch(url, {
      method: 'GET'
    }).then(function (response) {
      contentType = response.headers.get('content-type');

      if (!response.ok) {
        throw response;
      } else {
        if (typeof process !== 'undefined' && !true) {
          return response.buffer();
        } else {
          /* istanbul ignore next */
          return response.blob();
        }
      }
    }).then(function (blob) {
      // TODO: also remove
      if (typeof process !== 'undefined' && !true) {
        blob.type = contentType;
      }

      callback(null, blob);
    }).catch(function (err) {
      callback(err);
    });
  }); // Remove the attachment given by the id and rev

  api.removeAttachment = adapterFun$$1('removeAttachment', function (docId, attachmentId, rev$$1, callback) {
    var url = genDBUrl(host, encodeDocId(docId) + '/' + encodeAttachmentId(attachmentId)) + '?rev=' + rev$$1;
    fetchJSON(url, {
      method: 'DELETE'
    }, callback).catch(callback);
  }); // Add the attachment given by blob and its contentType property
  // to the document with the given id, the revision given by rev, and
  // add it to the database given by host.

  api.putAttachment = adapterFun$$1('putAttachment', function (docId, attachmentId, rev$$1, blob, type, callback) {
    if (typeof type === 'function') {
      callback = type;
      type = blob;
      blob = rev$$1;
      rev$$1 = null;
    }

    var id = encodeDocId(docId) + '/' + encodeAttachmentId(attachmentId);
    var url = genDBUrl(host, id);

    if (rev$$1) {
      url += '?rev=' + rev$$1;
    }

    if (typeof blob === 'string') {
      // input is assumed to be a base64 string
      var binary;

      try {
        binary = thisAtob(blob);
      } catch (err) {
        return callback(createError(BAD_ARG, 'Attachment is not a valid base64 string'));
      }

      blob = binary ? binStringToBluffer(binary, type) : '';
    } // Add the attachment


    fetchJSON(url, {
      headers: new h({
        'Content-Type': type
      }),
      method: 'PUT',
      body: blob
    }, callback).catch(callback);
  }); // Update/create multiple documents given by req in the database
  // given by host.

  api._bulkDocs = function (req, opts, callback) {
    // If new_edits=false then it prevents the database from creating
    // new revision numbers for the documents. Instead it just uses
    // the old ones. This is used in database replication.
    req.new_edits = opts.new_edits;
    setup().then(function () {
      return Promise.all(req.docs.map(preprocessAttachments$1));
    }).then(function () {
      // Update/create the documents
      return fetchJSON(genDBUrl(host, '_bulk_docs'), {
        method: 'POST',
        body: JSON.stringify(req)
      }, callback);
    }).catch(callback);
  }; // Update/create document


  api._put = function (doc, opts, callback) {
    setup().then(function () {
      return preprocessAttachments$1(doc);
    }).then(function () {
      return fetchJSON(genDBUrl(host, encodeDocId(doc._id)), {
        method: 'PUT',
        body: JSON.stringify(doc)
      });
    }).then(function (result) {
      callback(null, result.data);
    }).catch(function (err) {
      err.docId = doc && doc._id;
      callback(err);
    });
  }; // Get a listing of the documents in the database given
  // by host and ordered by increasing id.


  api.allDocs = adapterFun$$1('allDocs', function (opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = clone(opts); // List of parameters to add to the GET request

    var params = {};
    var body;
    var method = 'GET';

    if (opts.conflicts) {
      params.conflicts = true;
    }
    /* istanbul ignore if */


    if (opts.update_seq) {
      params.update_seq = true;
    }

    if (opts.descending) {
      params.descending = true;
    }

    if (opts.include_docs) {
      params.include_docs = true;
    } // added in CouchDB 1.6.0


    if (opts.attachments) {
      params.attachments = true;
    }

    if (opts.key) {
      params.key = JSON.stringify(opts.key);
    }

    if (opts.start_key) {
      opts.startkey = opts.start_key;
    }

    if (opts.startkey) {
      params.startkey = JSON.stringify(opts.startkey);
    }

    if (opts.end_key) {
      opts.endkey = opts.end_key;
    }

    if (opts.endkey) {
      params.endkey = JSON.stringify(opts.endkey);
    }

    if (typeof opts.inclusive_end !== 'undefined') {
      params.inclusive_end = !!opts.inclusive_end;
    }

    if (typeof opts.limit !== 'undefined') {
      params.limit = opts.limit;
    }

    if (typeof opts.skip !== 'undefined') {
      params.skip = opts.skip;
    }

    var paramStr = paramsToStr(params);

    if (typeof opts.keys !== 'undefined') {
      method = 'POST';
      body = {
        keys: opts.keys
      };
    }

    fetchJSON(genDBUrl(host, '_all_docs' + paramStr), {
      method: method,
      body: JSON.stringify(body)
    }).then(function (result) {
      if (opts.include_docs && opts.attachments && opts.binary) {
        result.data.rows.forEach(readAttachmentsAsBlobOrBuffer);
      }

      callback(null, result.data);
    }).catch(callback);
  }); // Get a list of changes made to documents in the database given by host.
  // TODO According to the README, there should be two other methods here,
  // api.changes.addListener and api.changes.removeListener.

  api._changes = function (opts) {
    // We internally page the results of a changes request, this means
    // if there is a large set of changes to be returned we can start
    // processing them quicker instead of waiting on the entire
    // set of changes to return and attempting to process them at once
    var batchSize = 'batch_size' in opts ? opts.batch_size : CHANGES_BATCH_SIZE;
    opts = clone(opts);

    if (opts.continuous && !('heartbeat' in opts)) {
      opts.heartbeat = DEFAULT_HEARTBEAT;
    }

    var requestTimeout = 'timeout' in opts ? opts.timeout : 30 * 1000; // ensure CHANGES_TIMEOUT_BUFFER applies

    if ('timeout' in opts && opts.timeout && requestTimeout - opts.timeout < CHANGES_TIMEOUT_BUFFER) {
      requestTimeout = opts.timeout + CHANGES_TIMEOUT_BUFFER;
    }
    /* istanbul ignore if */


    if ('heartbeat' in opts && opts.heartbeat && requestTimeout - opts.heartbeat < CHANGES_TIMEOUT_BUFFER) {
      requestTimeout = opts.heartbeat + CHANGES_TIMEOUT_BUFFER;
    }

    var params = {};

    if ('timeout' in opts && opts.timeout) {
      params.timeout = opts.timeout;
    }

    var limit = typeof opts.limit !== 'undefined' ? opts.limit : false;
    var leftToFetch = limit;

    if (opts.style) {
      params.style = opts.style;
    }

    if (opts.include_docs || opts.filter && typeof opts.filter === 'function') {
      params.include_docs = true;
    }

    if (opts.attachments) {
      params.attachments = true;
    }

    if (opts.continuous) {
      params.feed = 'longpoll';
    }

    if (opts.seq_interval) {
      params.seq_interval = opts.seq_interval;
    }

    if (opts.conflicts) {
      params.conflicts = true;
    }

    if (opts.descending) {
      params.descending = true;
    }
    /* istanbul ignore if */


    if (opts.update_seq) {
      params.update_seq = true;
    }

    if ('heartbeat' in opts) {
      // If the heartbeat value is false, it disables the default heartbeat
      if (opts.heartbeat) {
        params.heartbeat = opts.heartbeat;
      }
    }

    if (opts.filter && typeof opts.filter === 'string') {
      params.filter = opts.filter;
    }

    if (opts.view && typeof opts.view === 'string') {
      params.filter = '_view';
      params.view = opts.view;
    } // If opts.query_params exists, pass it through to the changes request.
    // These parameters may be used by the filter on the source database.


    if (opts.query_params && typeof opts.query_params === 'object') {
      for (var param_name in opts.query_params) {
        /* istanbul ignore else */
        if (opts.query_params.hasOwnProperty(param_name)) {
          params[param_name] = opts.query_params[param_name];
        }
      }
    }

    var method = 'GET';
    var body;

    if (opts.doc_ids) {
      // set this automagically for the user; it's annoying that couchdb
      // requires both a "filter" and a "doc_ids" param.
      params.filter = '_doc_ids';
      method = 'POST';
      body = {
        doc_ids: opts.doc_ids
      };
    }
    /* istanbul ignore next */
    else if (opts.selector) {
        // set this automagically for the user, similar to above
        params.filter = '_selector';
        method = 'POST';
        body = {
          selector: opts.selector
        };
      }

    var controller = new a();
    var lastFetchedSeq; // Get all the changes starting wtih the one immediately after the
    // sequence number given by since.

    var fetchData = function (since, callback) {
      if (opts.aborted) {
        return;
      }

      params.since = since; // "since" can be any kind of json object in Cloudant/CouchDB 2.x

      /* istanbul ignore next */

      if (typeof params.since === "object") {
        params.since = JSON.stringify(params.since);
      }

      if (opts.descending) {
        if (limit) {
          params.limit = leftToFetch;
        }
      } else {
        params.limit = !limit || leftToFetch > batchSize ? batchSize : leftToFetch;
      } // Set the options for the ajax call


      var url = genDBUrl(host, '_changes' + paramsToStr(params));
      var fetchOpts = {
        signal: controller.signal,
        method: method,
        body: JSON.stringify(body)
      };
      lastFetchedSeq = since;
      /* istanbul ignore if */

      if (opts.aborted) {
        return;
      } // Get the changes


      setup().then(function () {
        return fetchJSON(url, fetchOpts, callback);
      }).catch(callback);
    }; // If opts.since exists, get all the changes from the sequence
    // number given by opts.since. Otherwise, get all the changes
    // from the sequence number 0.


    var results = {
      results: []
    };

    var fetched = function (err, res) {
      if (opts.aborted) {
        return;
      }

      var raw_results_length = 0; // If the result of the ajax call (res) contains changes (res.results)

      if (res && res.results) {
        raw_results_length = res.results.length;
        results.last_seq = res.last_seq;
        var pending = null;
        var lastSeq = null; // Attach 'pending' property if server supports it (CouchDB 2.0+)

        /* istanbul ignore if */

        if (typeof res.pending === 'number') {
          pending = res.pending;
        }

        if (typeof results.last_seq === 'string' || typeof results.last_seq === 'number') {
          lastSeq = results.last_seq;
        } // For each change


        var req = {};
        req.query = opts.query_params;
        res.results = res.results.filter(function (c) {
          leftToFetch--;
          var ret = filterChange(opts)(c);

          if (ret) {
            if (opts.include_docs && opts.attachments && opts.binary) {
              readAttachmentsAsBlobOrBuffer(c);
            }

            if (opts.return_docs) {
              results.results.push(c);
            }

            opts.onChange(c, pending, lastSeq);
          }

          return ret;
        });
      } else if (err) {
        // In case of an error, stop listening for changes and call
        // opts.complete
        opts.aborted = true;
        opts.complete(err);
        return;
      } // The changes feed may have timed out with no results
      // if so reuse last update sequence


      if (res && res.last_seq) {
        lastFetchedSeq = res.last_seq;
      }

      var finished = limit && leftToFetch <= 0 || res && raw_results_length < batchSize || opts.descending;

      if (opts.continuous && !(limit && leftToFetch <= 0) || !finished) {
        // Queue a call to fetch again with the newest sequence number
        (0, _immediate.default)(function () {
          fetchData(lastFetchedSeq, fetched);
        });
      } else {
        // We're done, call the callback
        opts.complete(null, results);
      }
    };

    fetchData(opts.since || 0, fetched); // Return a method to cancel this method from processing any more

    return {
      cancel: function () {
        opts.aborted = true;
        controller.abort();
      }
    };
  }; // Given a set of document/revision IDs (given by req), tets the subset of
  // those that do NOT correspond to revisions stored in the database.
  // See http://wiki.apache.org/couchdb/HttpPostRevsDiff


  api.revsDiff = adapterFun$$1('revsDiff', function (req, opts, callback) {
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    } // Get the missing document/revision IDs


    fetchJSON(genDBUrl(host, '_revs_diff'), {
      method: 'POST',
      body: JSON.stringify(req)
    }, callback).catch(callback);
  });

  api._close = function (callback) {
    callback();
  };

  api._destroy = function (options, callback) {
    fetchJSON(genDBUrl(host, ''), {
      method: 'DELETE'
    }).then(function (json) {
      callback(null, json);
    }).catch(function (err) {
      /* istanbul ignore if */
      if (err.status === 404) {
        callback(null, {
          ok: true
        });
      } else {
        callback(err);
      }
    });
  };
} // HttpPouch is a valid adapter.


HttpPouch.valid = function () {
  return true;
};

function HttpPouch$1(PouchDB) {
  PouchDB.adapter('http', HttpPouch, false);
  PouchDB.adapter('https', HttpPouch, false);
}

function QueryParseError(message) {
  this.status = 400;
  this.name = 'query_parse_error';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, QueryParseError);
  } catch (e) {}
}

(0, _inherits.default)(QueryParseError, Error);

function NotFoundError(message) {
  this.status = 404;
  this.name = 'not_found';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, NotFoundError);
  } catch (e) {}
}

(0, _inherits.default)(NotFoundError, Error);

function BuiltInError(message) {
  this.status = 500;
  this.name = 'invalid_value';
  this.message = message;
  this.error = true;

  try {
    Error.captureStackTrace(this, BuiltInError);
  } catch (e) {}
}

(0, _inherits.default)(BuiltInError, Error);

function promisedCallback(promise, callback) {
  if (callback) {
    promise.then(function (res) {
      (0, _immediate.default)(function () {
        callback(null, res);
      });
    }, function (reason) {
      (0, _immediate.default)(function () {
        callback(reason);
      });
    });
  }

  return promise;
}

function callbackify(fun) {
  return (0, _argsarray.default)(function (args) {
    var cb = args.pop();
    var promise = fun.apply(this, args);

    if (typeof cb === 'function') {
      promisedCallback(promise, cb);
    }

    return promise;
  });
} // Promise finally util similar to Q.finally


function fin(promise, finalPromiseFactory) {
  return promise.then(function (res) {
    return finalPromiseFactory().then(function () {
      return res;
    });
  }, function (reason) {
    return finalPromiseFactory().then(function () {
      throw reason;
    });
  });
}

function sequentialize(queue, promiseFactory) {
  return function () {
    var args = arguments;
    var that = this;
    return queue.add(function () {
      return promiseFactory.apply(that, args);
    });
  };
} // uniq an array of strings, order not guaranteed
// similar to underscore/lodash _.uniq


function uniq(arr) {
  var theSet = new ExportedSet(arr);
  var result = new Array(theSet.size);
  var index = -1;
  theSet.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

function mapToKeysArray(map) {
  var result = new Array(map.size);
  var index = -1;
  map.forEach(function (value, key) {
    result[++index] = key;
  });
  return result;
}

function createBuiltInError(name) {
  var message = 'builtin ' + name + ' function requires map values to be numbers' + ' or number arrays';
  return new BuiltInError(message);
}

function sum(values) {
  var result = 0;

  for (var i = 0, len = values.length; i < len; i++) {
    var num = values[i];

    if (typeof num !== 'number') {
      if (Array.isArray(num)) {
        // lists of numbers are also allowed, sum them separately
        result = typeof result === 'number' ? [result] : result;

        for (var j = 0, jLen = num.length; j < jLen; j++) {
          var jNum = num[j];

          if (typeof jNum !== 'number') {
            throw createBuiltInError('_sum');
          } else if (typeof result[j] === 'undefined') {
            result.push(jNum);
          } else {
            result[j] += jNum;
          }
        }
      } else {
        // not array/number
        throw createBuiltInError('_sum');
      }
    } else if (typeof result === 'number') {
      result += num;
    } else {
      // add number to array
      result[0] += num;
    }
  }

  return result;
}

var log = guardedConsole.bind(null, 'log');
var isArray = Array.isArray;
var toJSON = JSON.parse;

function evalFunctionWithEval(func, emit) {
  return scopeEval("return (" + func.replace(/;\s*$/, "") + ");", {
    emit: emit,
    sum: sum,
    log: log,
    isArray: isArray,
    toJSON: toJSON
  });
}
/*
 * Simple task queue to sequentialize actions. Assumes
 * callbacks will eventually fire (once).
 */


function TaskQueue$1() {
  this.promise = new Promise(function (fulfill) {
    fulfill();
  });
}

TaskQueue$1.prototype.add = function (promiseFactory) {
  this.promise = this.promise.catch(function () {// just recover
  }).then(function () {
    return promiseFactory();
  });
  return this.promise;
};

TaskQueue$1.prototype.finish = function () {
  return this.promise;
};

function stringify(input) {
  if (!input) {
    return 'undefined'; // backwards compat for empty reduce
  } // for backwards compat with mapreduce, functions/strings are stringified
  // as-is. everything else is JSON-stringified.


  switch (typeof input) {
    case 'function':
      // e.g. a mapreduce map
      return input.toString();

    case 'string':
      // e.g. a mapreduce built-in _reduce function
      return input.toString();

    default:
      // e.g. a JSON object in the case of mango queries
      return JSON.stringify(input);
  }
}
/* create a string signature for a view so we can cache it and uniq it */


function createViewSignature(mapFun, reduceFun) {
  // the "undefined" part is for backwards compatibility
  return stringify(mapFun) + stringify(reduceFun) + 'undefined';
}

function createView(sourceDB, viewName, mapFun, reduceFun, temporary, localDocName) {
  var viewSignature = createViewSignature(mapFun, reduceFun);
  var cachedViews;

  if (!temporary) {
    // cache this to ensure we don't try to update the same view twice
    cachedViews = sourceDB._cachedViews = sourceDB._cachedViews || {};

    if (cachedViews[viewSignature]) {
      return cachedViews[viewSignature];
    }
  }

  var promiseForView = sourceDB.info().then(function (info) {
    var depDbName = info.db_name + '-mrview-' + (temporary ? 'temp' : stringMd5(viewSignature)); // save the view name in the source db so it can be cleaned up if necessary
    // (e.g. when the _design doc is deleted, remove all associated view data)

    function diffFunction(doc) {
      doc.views = doc.views || {};
      var fullViewName = viewName;

      if (fullViewName.indexOf('/') === -1) {
        fullViewName = viewName + '/' + viewName;
      }

      var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
      /* istanbul ignore if */

      if (depDbs[depDbName]) {
        return; // no update necessary
      }

      depDbs[depDbName] = true;
      return doc;
    }

    return upsert(sourceDB, '_local/' + localDocName, diffFunction).then(function () {
      return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
        var db = res.db;
        db.auto_compaction = true;
        var view = {
          name: depDbName,
          db: db,
          sourceDB: sourceDB,
          adapter: sourceDB.adapter,
          mapFun: mapFun,
          reduceFun: reduceFun
        };
        return view.db.get('_local/lastSeq').catch(function (err) {
          /* istanbul ignore if */
          if (err.status !== 404) {
            throw err;
          }
        }).then(function (lastSeqDoc) {
          view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;

          if (cachedViews) {
            view.db.once('destroyed', function () {
              delete cachedViews[viewSignature];
            });
          }

          return view;
        });
      });
    });
  });

  if (cachedViews) {
    cachedViews[viewSignature] = promiseForView;
  }

  return promiseForView;
}

var persistentQueues = {};
var tempViewQueue = new TaskQueue$1();
var CHANGES_BATCH_SIZE$1 = 50;

function parseViewName(name) {
  // can be either 'ddocname/viewname' or just 'viewname'
  // (where the ddoc name is the same)
  return name.indexOf('/') === -1 ? [name, name] : name.split('/');
}

function isGenOne(changes) {
  // only return true if the current change is 1-
  // and there are no other leafs
  return changes.length === 1 && /^1-/.test(changes[0].rev);
}

function emitError(db, e) {
  try {
    db.emit('error', e);
  } catch (err) {
    guardedConsole('error', 'The user\'s map/reduce function threw an uncaught error.\n' + 'You can debug this error by doing:\n' + 'myDatabase.on(\'error\', function (err) { debugger; });\n' + 'Please double-check your map/reduce function.');
    guardedConsole('error', e);
  }
}
/**
 * Returns an "abstract" mapreduce object of the form:
 *
 *   {
 *     query: queryFun,
 *     viewCleanup: viewCleanupFun
 *   }
 *
 * Arguments are:
 *
 * localDoc: string
 *   This is for the local doc that gets saved in order to track the
 *   "dependent" DBs and clean them up for viewCleanup. It should be
 *   unique, so that indexer plugins don't collide with each other.
 * mapper: function (mapFunDef, emit)
 *   Returns a map function based on the mapFunDef, which in the case of
 *   normal map/reduce is just the de-stringified function, but may be
 *   something else, such as an object in the case of pouchdb-find.
 * reducer: function (reduceFunDef)
 *   Ditto, but for reducing. Modules don't have to support reducing
 *   (e.g. pouchdb-find).
 * ddocValidator: function (ddoc, viewName)
 *   Throws an error if the ddoc or viewName is not valid.
 *   This could be a way to communicate to the user that the configuration for the
 *   indexer is invalid.
 */


function createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator) {
  function tryMap(db, fun, doc) {
    // emit an event if there was an error thrown by a map function.
    // putting try/catches in a single function also avoids deoptimizations.
    try {
      fun(doc);
    } catch (e) {
      emitError(db, e);
    }
  }

  function tryReduce(db, fun, keys, values, rereduce) {
    // same as above, but returning the result or an error. there are two separate
    // functions to avoid extra memory allocations since the tryCode() case is used
    // for custom map functions (common) vs this function, which is only used for
    // custom reduce functions (rare)
    try {
      return {
        output: fun(keys, values, rereduce)
      };
    } catch (e) {
      emitError(db, e);
      return {
        error: e
      };
    }
  }

  function sortByKeyThenValue(x, y) {
    var keyCompare = collate(x.key, y.key);
    return keyCompare !== 0 ? keyCompare : collate(x.value, y.value);
  }

  function sliceResults(results, limit, skip) {
    skip = skip || 0;

    if (typeof limit === 'number') {
      return results.slice(skip, limit + skip);
    } else if (skip > 0) {
      return results.slice(skip);
    }

    return results;
  }

  function rowToDocId(row) {
    var val = row.value; // Users can explicitly specify a joined doc _id, or it
    // defaults to the doc _id that emitted the key/value.

    var docId = val && typeof val === 'object' && val._id || row.id;
    return docId;
  }

  function readAttachmentsAsBlobOrBuffer(res) {
    res.rows.forEach(function (row) {
      var atts = row.doc && row.doc._attachments;

      if (!atts) {
        return;
      }

      Object.keys(atts).forEach(function (filename) {
        var att = atts[filename];
        atts[filename].data = b64ToBluffer(att.data, att.content_type);
      });
    });
  }

  function postprocessAttachments(opts) {
    return function (res) {
      if (opts.include_docs && opts.attachments && opts.binary) {
        readAttachmentsAsBlobOrBuffer(res);
      }

      return res;
    };
  }

  function addHttpParam(paramName, opts, params, asJson) {
    // add an http param from opts to params, optionally json-encoded
    var val = opts[paramName];

    if (typeof val !== 'undefined') {
      if (asJson) {
        val = encodeURIComponent(JSON.stringify(val));
      }

      params.push(paramName + '=' + val);
    }
  }

  function coerceInteger(integerCandidate) {
    if (typeof integerCandidate !== 'undefined') {
      var asNumber = Number(integerCandidate); // prevents e.g. '1foo' or '1.1' being coerced to 1

      if (!isNaN(asNumber) && asNumber === parseInt(integerCandidate, 10)) {
        return asNumber;
      } else {
        return integerCandidate;
      }
    }
  }

  function coerceOptions(opts) {
    opts.group_level = coerceInteger(opts.group_level);
    opts.limit = coerceInteger(opts.limit);
    opts.skip = coerceInteger(opts.skip);
    return opts;
  }

  function checkPositiveInteger(number) {
    if (number) {
      if (typeof number !== 'number') {
        return new QueryParseError('Invalid value for integer: "' + number + '"');
      }

      if (number < 0) {
        return new QueryParseError('Invalid value for positive integer: ' + '"' + number + '"');
      }
    }
  }

  function checkQueryParseError(options, fun) {
    var startkeyName = options.descending ? 'endkey' : 'startkey';
    var endkeyName = options.descending ? 'startkey' : 'endkey';

    if (typeof options[startkeyName] !== 'undefined' && typeof options[endkeyName] !== 'undefined' && collate(options[startkeyName], options[endkeyName]) > 0) {
      throw new QueryParseError('No rows can match your key range, ' + 'reverse your start_key and end_key or set {descending : true}');
    } else if (fun.reduce && options.reduce !== false) {
      if (options.include_docs) {
        throw new QueryParseError('{include_docs:true} is invalid for reduce');
      } else if (options.keys && options.keys.length > 1 && !options.group && !options.group_level) {
        throw new QueryParseError('Multi-key fetches for reduce views must use ' + '{group: true}');
      }
    }

    ['group_level', 'limit', 'skip'].forEach(function (optionName) {
      var error = checkPositiveInteger(options[optionName]);

      if (error) {
        throw error;
      }
    });
  }

  function httpQuery(db, fun, opts) {
    // List of parameters to add to the PUT request
    var params = [];
    var body;
    var method = 'GET';
    var ok, status; // If opts.reduce exists and is defined, then add it to the list
    // of parameters.
    // If reduce=false then the results are that of only the map function
    // not the final result of map and reduce.

    addHttpParam('reduce', opts, params);
    addHttpParam('include_docs', opts, params);
    addHttpParam('attachments', opts, params);
    addHttpParam('limit', opts, params);
    addHttpParam('descending', opts, params);
    addHttpParam('group', opts, params);
    addHttpParam('group_level', opts, params);
    addHttpParam('skip', opts, params);
    addHttpParam('stale', opts, params);
    addHttpParam('conflicts', opts, params);
    addHttpParam('startkey', opts, params, true);
    addHttpParam('start_key', opts, params, true);
    addHttpParam('endkey', opts, params, true);
    addHttpParam('end_key', opts, params, true);
    addHttpParam('inclusive_end', opts, params);
    addHttpParam('key', opts, params, true);
    addHttpParam('update_seq', opts, params); // Format the list of parameters into a valid URI query string

    params = params.join('&');
    params = params === '' ? '' : '?' + params; // If keys are supplied, issue a POST to circumvent GET query string limits
    // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options

    if (typeof opts.keys !== 'undefined') {
      var MAX_URL_LENGTH = 2000; // according to http://stackoverflow.com/a/417184/680742,
      // the de facto URL length limit is 2000 characters

      var keysAsString = 'keys=' + encodeURIComponent(JSON.stringify(opts.keys));

      if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
        // If the keys are short enough, do a GET. we do this to work around
        // Safari not understanding 304s on POSTs (see pouchdb/pouchdb#1239)
        params += (params[0] === '?' ? '&' : '?') + keysAsString;
      } else {
        method = 'POST';

        if (typeof fun === 'string') {
          body = {
            keys: opts.keys
          };
        } else {
          // fun is {map : mapfun}, so append to this
          fun.keys = opts.keys;
        }
      }
    } // We are referencing a query defined in the design doc


    if (typeof fun === 'string') {
      var parts = parseViewName(fun);
      return db.fetch('_design/' + parts[0] + '/_view/' + parts[1] + params, {
        headers: new h({
          'Content-Type': 'application/json'
        }),
        method: method,
        body: JSON.stringify(body)
      }).then(function (response) {
        ok = response.ok;
        status = response.status;
        return response.json();
      }).then(function (result) {
        if (!ok) {
          result.status = status;
          throw generateErrorFromResponse(result);
        } // fail the entire request if the result contains an error


        result.rows.forEach(function (row) {
          /* istanbul ignore if */
          if (row.value && row.value.error && row.value.error === "builtin_reduce_error") {
            throw new Error(row.reason);
          }
        });
        return result;
      }).then(postprocessAttachments(opts));
    } // We are using a temporary view, terrible for performance, good for testing


    body = body || {};
    Object.keys(fun).forEach(function (key) {
      if (Array.isArray(fun[key])) {
        body[key] = fun[key];
      } else {
        body[key] = fun[key].toString();
      }
    });
    return db.fetch('_temp_view' + params, {
      headers: new h({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(body)
    }).then(function (response) {
      ok = response.ok;
      status = response.status;
      return response.json();
    }).then(function (result) {
      if (!ok) {
        result.status = status;
        throw generateErrorFromResponse(result);
      }

      return result;
    }).then(postprocessAttachments(opts));
  } // custom adapters can define their own api._query
  // and override the default behavior

  /* istanbul ignore next */


  function customQuery(db, fun, opts) {
    return new Promise(function (resolve, reject) {
      db._query(fun, opts, function (err, res) {
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
    });
  } // custom adapters can define their own api._viewCleanup
  // and override the default behavior

  /* istanbul ignore next */


  function customViewCleanup(db) {
    return new Promise(function (resolve, reject) {
      db._viewCleanup(function (err, res) {
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
    });
  }

  function defaultsTo(value) {
    return function (reason) {
      /* istanbul ignore else */
      if (reason.status === 404) {
        return value;
      } else {
        throw reason;
      }
    };
  } // returns a promise for a list of docs to update, based on the input docId.
  // the order doesn't matter, because post-3.2.0, bulkDocs
  // is an atomic operation in all three adapters.


  function getDocsToPersist(docId, view, docIdsToChangesAndEmits) {
    var metaDocId = '_local/doc_' + docId;
    var defaultMetaDoc = {
      _id: metaDocId,
      keys: []
    };
    var docData = docIdsToChangesAndEmits.get(docId);
    var indexableKeysToKeyValues = docData[0];
    var changes = docData[1];

    function getMetaDoc() {
      if (isGenOne(changes)) {
        // generation 1, so we can safely assume initial state
        // for performance reasons (avoids unnecessary GETs)
        return Promise.resolve(defaultMetaDoc);
      }

      return view.db.get(metaDocId).catch(defaultsTo(defaultMetaDoc));
    }

    function getKeyValueDocs(metaDoc) {
      if (!metaDoc.keys.length) {
        // no keys, no need for a lookup
        return Promise.resolve({
          rows: []
        });
      }

      return view.db.allDocs({
        keys: metaDoc.keys,
        include_docs: true
      });
    }

    function processKeyValueDocs(metaDoc, kvDocsRes) {
      var kvDocs = [];
      var oldKeys = new ExportedSet();

      for (var i = 0, len = kvDocsRes.rows.length; i < len; i++) {
        var row = kvDocsRes.rows[i];
        var doc = row.doc;

        if (!doc) {
          // deleted
          continue;
        }

        kvDocs.push(doc);
        oldKeys.add(doc._id);
        doc._deleted = !indexableKeysToKeyValues.has(doc._id);

        if (!doc._deleted) {
          var keyValue = indexableKeysToKeyValues.get(doc._id);

          if ('value' in keyValue) {
            doc.value = keyValue.value;
          }
        }
      }

      var newKeys = mapToKeysArray(indexableKeysToKeyValues);
      newKeys.forEach(function (key) {
        if (!oldKeys.has(key)) {
          // new doc
          var kvDoc = {
            _id: key
          };
          var keyValue = indexableKeysToKeyValues.get(key);

          if ('value' in keyValue) {
            kvDoc.value = keyValue.value;
          }

          kvDocs.push(kvDoc);
        }
      });
      metaDoc.keys = uniq(newKeys.concat(metaDoc.keys));
      kvDocs.push(metaDoc);
      return kvDocs;
    }

    return getMetaDoc().then(function (metaDoc) {
      return getKeyValueDocs(metaDoc).then(function (kvDocsRes) {
        return processKeyValueDocs(metaDoc, kvDocsRes);
      });
    });
  } // updates all emitted key/value docs and metaDocs in the mrview database
  // for the given batch of documents from the source database


  function saveKeyValues(view, docIdsToChangesAndEmits, seq) {
    var seqDocId = '_local/lastSeq';
    return view.db.get(seqDocId).catch(defaultsTo({
      _id: seqDocId,
      seq: 0
    })).then(function (lastSeqDoc) {
      var docIds = mapToKeysArray(docIdsToChangesAndEmits);
      return Promise.all(docIds.map(function (docId) {
        return getDocsToPersist(docId, view, docIdsToChangesAndEmits);
      })).then(function (listOfDocsToPersist) {
        var docsToPersist = flatten(listOfDocsToPersist);
        lastSeqDoc.seq = seq;
        docsToPersist.push(lastSeqDoc); // write all docs in a single operation, update the seq once

        return view.db.bulkDocs({
          docs: docsToPersist
        });
      });
    });
  }

  function getQueue(view) {
    var viewName = typeof view === 'string' ? view : view.name;
    var queue = persistentQueues[viewName];

    if (!queue) {
      queue = persistentQueues[viewName] = new TaskQueue$1();
    }

    return queue;
  }

  function updateView(view) {
    return sequentialize(getQueue(view), function () {
      return updateViewInQueue(view);
    })();
  }

  function updateViewInQueue(view) {
    // bind the emit function once
    var mapResults;
    var doc;

    function emit(key, value) {
      var output = {
        id: doc._id,
        key: normalizeKey(key)
      }; // Don't explicitly store the value unless it's defined and non-null.
      // This saves on storage space, because often people don't use it.

      if (typeof value !== 'undefined' && value !== null) {
        output.value = normalizeKey(value);
      }

      mapResults.push(output);
    }

    var mapFun = mapper(view.mapFun, emit);
    var currentSeq = view.seq || 0;

    function processChange(docIdsToChangesAndEmits, seq) {
      return function () {
        return saveKeyValues(view, docIdsToChangesAndEmits, seq);
      };
    }

    var queue = new TaskQueue$1();

    function processNextBatch() {
      return view.sourceDB.changes({
        return_docs: true,
        conflicts: true,
        include_docs: true,
        style: 'all_docs',
        since: currentSeq,
        limit: CHANGES_BATCH_SIZE$1
      }).then(processBatch);
    }

    function processBatch(response) {
      var results = response.results;

      if (!results.length) {
        return;
      }

      var docIdsToChangesAndEmits = createDocIdsToChangesAndEmits(results);
      queue.add(processChange(docIdsToChangesAndEmits, currentSeq));

      if (results.length < CHANGES_BATCH_SIZE$1) {
        return;
      }

      return processNextBatch();
    }

    function createDocIdsToChangesAndEmits(results) {
      var docIdsToChangesAndEmits = new ExportedMap();

      for (var i = 0, len = results.length; i < len; i++) {
        var change = results[i];

        if (change.doc._id[0] !== '_') {
          mapResults = [];
          doc = change.doc;

          if (!doc._deleted) {
            tryMap(view.sourceDB, mapFun, doc);
          }

          mapResults.sort(sortByKeyThenValue);
          var indexableKeysToKeyValues = createIndexableKeysToKeyValues(mapResults);
          docIdsToChangesAndEmits.set(change.doc._id, [indexableKeysToKeyValues, change.changes]);
        }

        currentSeq = change.seq;
      }

      return docIdsToChangesAndEmits;
    }

    function createIndexableKeysToKeyValues(mapResults) {
      var indexableKeysToKeyValues = new ExportedMap();
      var lastKey;

      for (var i = 0, len = mapResults.length; i < len; i++) {
        var emittedKeyValue = mapResults[i];
        var complexKey = [emittedKeyValue.key, emittedKeyValue.id];

        if (i > 0 && collate(emittedKeyValue.key, lastKey) === 0) {
          complexKey.push(i); // dup key+id, so make it unique
        }

        indexableKeysToKeyValues.set(toIndexableString(complexKey), emittedKeyValue);
        lastKey = emittedKeyValue.key;
      }

      return indexableKeysToKeyValues;
    }

    return processNextBatch().then(function () {
      return queue.finish();
    }).then(function () {
      view.seq = currentSeq;
    });
  }

  function reduceView(view, results, options) {
    if (options.group_level === 0) {
      delete options.group_level;
    }

    var shouldGroup = options.group || options.group_level;
    var reduceFun = reducer(view.reduceFun);
    var groups = [];
    var lvl = isNaN(options.group_level) ? Number.POSITIVE_INFINITY : options.group_level;
    results.forEach(function (e) {
      var last = groups[groups.length - 1];
      var groupKey = shouldGroup ? e.key : null; // only set group_level for array keys

      if (shouldGroup && Array.isArray(groupKey)) {
        groupKey = groupKey.slice(0, lvl);
      }

      if (last && collate(last.groupKey, groupKey) === 0) {
        last.keys.push([e.key, e.id]);
        last.values.push(e.value);
        return;
      }

      groups.push({
        keys: [[e.key, e.id]],
        values: [e.value],
        groupKey: groupKey
      });
    });
    results = [];

    for (var i = 0, len = groups.length; i < len; i++) {
      var e = groups[i];
      var reduceTry = tryReduce(view.sourceDB, reduceFun, e.keys, e.values, false);

      if (reduceTry.error && reduceTry.error instanceof BuiltInError) {
        // CouchDB returns an error if a built-in errors out
        throw reduceTry.error;
      }

      results.push({
        // CouchDB just sets the value to null if a non-built-in errors out
        value: reduceTry.error ? null : reduceTry.output,
        key: e.groupKey
      });
    } // no total_rows/offset when reducing


    return {
      rows: sliceResults(results, options.limit, options.skip)
    };
  }

  function queryView(view, opts) {
    return sequentialize(getQueue(view), function () {
      return queryViewInQueue(view, opts);
    })();
  }

  function queryViewInQueue(view, opts) {
    var totalRows;
    var shouldReduce = view.reduceFun && opts.reduce !== false;
    var skip = opts.skip || 0;

    if (typeof opts.keys !== 'undefined' && !opts.keys.length) {
      // equivalent query
      opts.limit = 0;
      delete opts.keys;
    }

    function fetchFromView(viewOpts) {
      viewOpts.include_docs = true;
      return view.db.allDocs(viewOpts).then(function (res) {
        totalRows = res.total_rows;
        return res.rows.map(function (result) {
          // implicit migration - in older versions of PouchDB,
          // we explicitly stored the doc as {id: ..., key: ..., value: ...}
          // this is tested in a migration test

          /* istanbul ignore next */
          if ('value' in result.doc && typeof result.doc.value === 'object' && result.doc.value !== null) {
            var keys = Object.keys(result.doc.value).sort(); // this detection method is not perfect, but it's unlikely the user
            // emitted a value which was an object with these 3 exact keys

            var expectedKeys = ['id', 'key', 'value'];

            if (!(keys < expectedKeys || keys > expectedKeys)) {
              return result.doc.value;
            }
          }

          var parsedKeyAndDocId = parseIndexableString(result.doc._id);
          return {
            key: parsedKeyAndDocId[0],
            id: parsedKeyAndDocId[1],
            value: 'value' in result.doc ? result.doc.value : null
          };
        });
      });
    }

    function onMapResultsReady(rows) {
      var finalResults;

      if (shouldReduce) {
        finalResults = reduceView(view, rows, opts);
      } else {
        finalResults = {
          total_rows: totalRows,
          offset: skip,
          rows: rows
        };
      }
      /* istanbul ignore if */


      if (opts.update_seq) {
        finalResults.update_seq = view.seq;
      }

      if (opts.include_docs) {
        var docIds = uniq(rows.map(rowToDocId));
        return view.sourceDB.allDocs({
          keys: docIds,
          include_docs: true,
          conflicts: opts.conflicts,
          attachments: opts.attachments,
          binary: opts.binary
        }).then(function (allDocsRes) {
          var docIdsToDocs = new ExportedMap();
          allDocsRes.rows.forEach(function (row) {
            docIdsToDocs.set(row.id, row.doc);
          });
          rows.forEach(function (row) {
            var docId = rowToDocId(row);
            var doc = docIdsToDocs.get(docId);

            if (doc) {
              row.doc = doc;
            }
          });
          return finalResults;
        });
      } else {
        return finalResults;
      }
    }

    if (typeof opts.keys !== 'undefined') {
      var keys = opts.keys;
      var fetchPromises = keys.map(function (key) {
        var viewOpts = {
          startkey: toIndexableString([key]),
          endkey: toIndexableString([key, {}])
        };
        /* istanbul ignore if */

        if (opts.update_seq) {
          viewOpts.update_seq = true;
        }

        return fetchFromView(viewOpts);
      });
      return Promise.all(fetchPromises).then(flatten).then(onMapResultsReady);
    } else {
      // normal query, no 'keys'
      var viewOpts = {
        descending: opts.descending
      };
      /* istanbul ignore if */

      if (opts.update_seq) {
        viewOpts.update_seq = true;
      }

      var startkey;
      var endkey;

      if ('start_key' in opts) {
        startkey = opts.start_key;
      }

      if ('startkey' in opts) {
        startkey = opts.startkey;
      }

      if ('end_key' in opts) {
        endkey = opts.end_key;
      }

      if ('endkey' in opts) {
        endkey = opts.endkey;
      }

      if (typeof startkey !== 'undefined') {
        viewOpts.startkey = opts.descending ? toIndexableString([startkey, {}]) : toIndexableString([startkey]);
      }

      if (typeof endkey !== 'undefined') {
        var inclusiveEnd = opts.inclusive_end !== false;

        if (opts.descending) {
          inclusiveEnd = !inclusiveEnd;
        }

        viewOpts.endkey = toIndexableString(inclusiveEnd ? [endkey, {}] : [endkey]);
      }

      if (typeof opts.key !== 'undefined') {
        var keyStart = toIndexableString([opts.key]);
        var keyEnd = toIndexableString([opts.key, {}]);

        if (viewOpts.descending) {
          viewOpts.endkey = keyStart;
          viewOpts.startkey = keyEnd;
        } else {
          viewOpts.startkey = keyStart;
          viewOpts.endkey = keyEnd;
        }
      }

      if (!shouldReduce) {
        if (typeof opts.limit === 'number') {
          viewOpts.limit = opts.limit;
        }

        viewOpts.skip = skip;
      }

      return fetchFromView(viewOpts).then(onMapResultsReady);
    }
  }

  function httpViewCleanup(db) {
    return db.fetch('_view_cleanup', {
      headers: new h({
        'Content-Type': 'application/json'
      }),
      method: 'POST'
    }).then(function (response) {
      return response.json();
    });
  }

  function localViewCleanup(db) {
    return db.get('_local/' + localDocName).then(function (metaDoc) {
      var docsToViews = new ExportedMap();
      Object.keys(metaDoc.views).forEach(function (fullViewName) {
        var parts = parseViewName(fullViewName);
        var designDocName = '_design/' + parts[0];
        var viewName = parts[1];
        var views = docsToViews.get(designDocName);

        if (!views) {
          views = new ExportedSet();
          docsToViews.set(designDocName, views);
        }

        views.add(viewName);
      });
      var opts = {
        keys: mapToKeysArray(docsToViews),
        include_docs: true
      };
      return db.allDocs(opts).then(function (res) {
        var viewsToStatus = {};
        res.rows.forEach(function (row) {
          var ddocName = row.key.substring(8); // cuts off '_design/'

          docsToViews.get(row.key).forEach(function (viewName) {
            var fullViewName = ddocName + '/' + viewName;
            /* istanbul ignore if */

            if (!metaDoc.views[fullViewName]) {
              // new format, without slashes, to support PouchDB 2.2.0
              // migration test in pouchdb's browser.migration.js verifies this
              fullViewName = viewName;
            }

            var viewDBNames = Object.keys(metaDoc.views[fullViewName]); // design doc deleted, or view function nonexistent

            var statusIsGood = row.doc && row.doc.views && row.doc.views[viewName];
            viewDBNames.forEach(function (viewDBName) {
              viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
            });
          });
        });
        var dbsToDelete = Object.keys(viewsToStatus).filter(function (viewDBName) {
          return !viewsToStatus[viewDBName];
        });
        var destroyPromises = dbsToDelete.map(function (viewDBName) {
          return sequentialize(getQueue(viewDBName), function () {
            return new db.constructor(viewDBName, db.__opts).destroy();
          })();
        });
        return Promise.all(destroyPromises).then(function () {
          return {
            ok: true
          };
        });
      });
    }, defaultsTo({
      ok: true
    }));
  }

  function queryPromised(db, fun, opts) {
    /* istanbul ignore next */
    if (typeof db._query === 'function') {
      return customQuery(db, fun, opts);
    }

    if (isRemote(db)) {
      return httpQuery(db, fun, opts);
    }

    if (typeof fun !== 'string') {
      // temp_view
      checkQueryParseError(opts, fun);
      tempViewQueue.add(function () {
        var createViewPromise = createView(
        /* sourceDB */
        db,
        /* viewName */
        'temp_view/temp_view',
        /* mapFun */
        fun.map,
        /* reduceFun */
        fun.reduce,
        /* temporary */
        true,
        /* localDocName */
        localDocName);
        return createViewPromise.then(function (view) {
          return fin(updateView(view).then(function () {
            return queryView(view, opts);
          }), function () {
            return view.db.destroy();
          });
        });
      });
      return tempViewQueue.finish();
    } else {
      // persistent view
      var fullViewName = fun;
      var parts = parseViewName(fullViewName);
      var designDocName = parts[0];
      var viewName = parts[1];
      return db.get('_design/' + designDocName).then(function (doc) {
        var fun = doc.views && doc.views[viewName];

        if (!fun) {
          // basic validator; it's assumed that every subclass would want this
          throw new NotFoundError('ddoc ' + doc._id + ' has no view named ' + viewName);
        }

        ddocValidator(doc, viewName);
        checkQueryParseError(opts, fun);
        var createViewPromise = createView(
        /* sourceDB */
        db,
        /* viewName */
        fullViewName,
        /* mapFun */
        fun.map,
        /* reduceFun */
        fun.reduce,
        /* temporary */
        false,
        /* localDocName */
        localDocName);
        return createViewPromise.then(function (view) {
          if (opts.stale === 'ok' || opts.stale === 'update_after') {
            if (opts.stale === 'update_after') {
              (0, _immediate.default)(function () {
                updateView(view);
              });
            }

            return queryView(view, opts);
          } else {
            // stale not ok
            return updateView(view).then(function () {
              return queryView(view, opts);
            });
          }
        });
      });
    }
  }

  function abstractQuery(fun, opts, callback) {
    var db = this;

    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    opts = opts ? coerceOptions(opts) : {};

    if (typeof fun === 'function') {
      fun = {
        map: fun
      };
    }

    var promise = Promise.resolve().then(function () {
      return queryPromised(db, fun, opts);
    });
    promisedCallback(promise, callback);
    return promise;
  }

  var abstractViewCleanup = callbackify(function () {
    var db = this;
    /* istanbul ignore next */

    if (typeof db._viewCleanup === 'function') {
      return customViewCleanup(db);
    }

    if (isRemote(db)) {
      return httpViewCleanup(db);
    }

    return localViewCleanup(db);
  });
  return {
    query: abstractQuery,
    viewCleanup: abstractViewCleanup
  };
}

var builtInReduce = {
  _sum: function (keys, values) {
    return sum(values);
  },
  _count: function (keys, values) {
    return values.length;
  },
  _stats: function (keys, values) {
    // no need to implement rereduce=true, because Pouch
    // will never call it
    function sumsqr(values) {
      var _sumsqr = 0;

      for (var i = 0, len = values.length; i < len; i++) {
        var num = values[i];
        _sumsqr += num * num;
      }

      return _sumsqr;
    }

    return {
      sum: sum(values),
      min: Math.min.apply(null, values),
      max: Math.max.apply(null, values),
      count: values.length,
      sumsqr: sumsqr(values)
    };
  }
};

function getBuiltIn(reduceFunString) {
  if (/^_sum/.test(reduceFunString)) {
    return builtInReduce._sum;
  } else if (/^_count/.test(reduceFunString)) {
    return builtInReduce._count;
  } else if (/^_stats/.test(reduceFunString)) {
    return builtInReduce._stats;
  } else if (/^_/.test(reduceFunString)) {
    throw new Error(reduceFunString + ' is not a supported reduce function.');
  }
}

function mapper(mapFun, emit) {
  // for temp_views one can use emit(doc, emit), see #38
  if (typeof mapFun === "function" && mapFun.length === 2) {
    var origMap = mapFun;
    return function (doc) {
      return origMap(doc, emit);
    };
  } else {
    return evalFunctionWithEval(mapFun.toString(), emit);
  }
}

function reducer(reduceFun) {
  var reduceFunString = reduceFun.toString();
  var builtIn = getBuiltIn(reduceFunString);

  if (builtIn) {
    return builtIn;
  } else {
    return evalFunctionWithEval(reduceFunString);
  }
}

function ddocValidator(ddoc, viewName) {
  var fun = ddoc.views && ddoc.views[viewName];

  if (typeof fun.map !== 'string') {
    throw new NotFoundError('ddoc ' + ddoc._id + ' has no string view named ' + viewName + ', instead found object of type: ' + typeof fun.map);
  }
}

var localDocName = 'mrviews';
var abstract = createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator);

function query(fun, opts, callback) {
  return abstract.query.call(this, fun, opts, callback);
}

function viewCleanup(callback) {
  return abstract.viewCleanup.call(this, callback);
}

var mapreduce = {
  query: query,
  viewCleanup: viewCleanup
};

function isGenOne$1(rev$$1) {
  return /^1-/.test(rev$$1);
}

function fileHasChanged(localDoc, remoteDoc, filename) {
  return !localDoc._attachments || !localDoc._attachments[filename] || localDoc._attachments[filename].digest !== remoteDoc._attachments[filename].digest;
}

function getDocAttachments(db, doc) {
  var filenames = Object.keys(doc._attachments);
  return Promise.all(filenames.map(function (filename) {
    return db.getAttachment(doc._id, filename, {
      rev: doc._rev
    });
  }));
}

function getDocAttachmentsFromTargetOrSource(target, src, doc) {
  var doCheckForLocalAttachments = isRemote(src) && !isRemote(target);
  var filenames = Object.keys(doc._attachments);

  if (!doCheckForLocalAttachments) {
    return getDocAttachments(src, doc);
  }

  return target.get(doc._id).then(function (localDoc) {
    return Promise.all(filenames.map(function (filename) {
      if (fileHasChanged(localDoc, doc, filename)) {
        return src.getAttachment(doc._id, filename);
      }

      return target.getAttachment(localDoc._id, filename);
    }));
  }).catch(function (error) {
    /* istanbul ignore if */
    if (error.status !== 404) {
      throw error;
    }

    return getDocAttachments(src, doc);
  });
}

function createBulkGetOpts(diffs) {
  var requests = [];
  Object.keys(diffs).forEach(function (id) {
    var missingRevs = diffs[id].missing;
    missingRevs.forEach(function (missingRev) {
      requests.push({
        id: id,
        rev: missingRev
      });
    });
  });
  return {
    docs: requests,
    revs: true,
    latest: true
  };
} //
// Fetch all the documents from the src as described in the "diffs",
// which is a mapping of docs IDs to revisions. If the state ever
// changes to "cancelled", then the returned promise will be rejected.
// Else it will be resolved with a list of fetched documents.
//


function getDocs(src, target, diffs, state) {
  diffs = clone(diffs); // we do not need to modify this

  var resultDocs = [],
      ok = true;

  function getAllDocs() {
    var bulkGetOpts = createBulkGetOpts(diffs);

    if (!bulkGetOpts.docs.length) {
      // optimization: skip empty requests
      return;
    }

    return src.bulkGet(bulkGetOpts).then(function (bulkGetResponse) {
      /* istanbul ignore if */
      if (state.cancelled) {
        throw new Error('cancelled');
      }

      return Promise.all(bulkGetResponse.results.map(function (bulkGetInfo) {
        return Promise.all(bulkGetInfo.docs.map(function (doc) {
          var remoteDoc = doc.ok;

          if (doc.error) {
            // when AUTO_COMPACTION is set, docs can be returned which look
            // like this: {"missing":"1-7c3ac256b693c462af8442f992b83696"}
            ok = false;
          }

          if (!remoteDoc || !remoteDoc._attachments) {
            return remoteDoc;
          }

          return getDocAttachmentsFromTargetOrSource(target, src, remoteDoc).then(function (attachments) {
            var filenames = Object.keys(remoteDoc._attachments);
            attachments.forEach(function (attachment, i) {
              var att = remoteDoc._attachments[filenames[i]];
              delete att.stub;
              delete att.length;
              att.data = attachment;
            });
            return remoteDoc;
          });
        }));
      })).then(function (results) {
        resultDocs = resultDocs.concat(flatten(results).filter(Boolean));
      });
    });
  }

  function hasAttachments(doc) {
    return doc._attachments && Object.keys(doc._attachments).length > 0;
  }

  function hasConflicts(doc) {
    return doc._conflicts && doc._conflicts.length > 0;
  }

  function fetchRevisionOneDocs(ids) {
    // Optimization: fetch gen-1 docs and attachments in
    // a single request using _all_docs
    return src.allDocs({
      keys: ids,
      include_docs: true,
      conflicts: true
    }).then(function (res) {
      if (state.cancelled) {
        throw new Error('cancelled');
      }

      res.rows.forEach(function (row) {
        if (row.deleted || !row.doc || !isGenOne$1(row.value.rev) || hasAttachments(row.doc) || hasConflicts(row.doc)) {
          // if any of these conditions apply, we need to fetch using get()
          return;
        } // strip _conflicts array to appease CSG (#5793)

        /* istanbul ignore if */


        if (row.doc._conflicts) {
          delete row.doc._conflicts;
        } // the doc we got back from allDocs() is sufficient


        resultDocs.push(row.doc);
        delete diffs[row.id];
      });
    });
  }

  function getRevisionOneDocs() {
    // filter out the generation 1 docs and get them
    // leaving the non-generation one docs to be got otherwise
    var ids = Object.keys(diffs).filter(function (id) {
      var missing = diffs[id].missing;
      return missing.length === 1 && isGenOne$1(missing[0]);
    });

    if (ids.length > 0) {
      return fetchRevisionOneDocs(ids);
    }
  }

  function returnResult() {
    return {
      ok: ok,
      docs: resultDocs
    };
  }

  return Promise.resolve().then(getRevisionOneDocs).then(getAllDocs).then(returnResult);
}

var CHECKPOINT_VERSION = 1;
var REPLICATOR = "pouchdb"; // This is an arbitrary number to limit the
// amount of replication history we save in the checkpoint.
// If we save too much, the checkpoing docs will become very big,
// if we save fewer, we'll run a greater risk of having to
// read all the changes from 0 when checkpoint PUTs fail
// CouchDB 2.0 has a more involved history pruning,
// but let's go for the simple version for now.

var CHECKPOINT_HISTORY_SIZE = 5;
var LOWEST_SEQ = 0;

function updateCheckpoint(db, id, checkpoint, session, returnValue) {
  return db.get(id).catch(function (err) {
    if (err.status === 404) {
      if (db.adapter === 'http' || db.adapter === 'https') {
        explainError(404, 'PouchDB is just checking if a remote checkpoint exists.');
      }

      return {
        session_id: session,
        _id: id,
        history: [],
        replicator: REPLICATOR,
        version: CHECKPOINT_VERSION
      };
    }

    throw err;
  }).then(function (doc) {
    if (returnValue.cancelled) {
      return;
    } // if the checkpoint has not changed, do not update


    if (doc.last_seq === checkpoint) {
      return;
    } // Filter out current entry for this replication


    doc.history = (doc.history || []).filter(function (item) {
      return item.session_id !== session;
    }); // Add the latest checkpoint to history

    doc.history.unshift({
      last_seq: checkpoint,
      session_id: session
    }); // Just take the last pieces in history, to
    // avoid really big checkpoint docs.
    // see comment on history size above

    doc.history = doc.history.slice(0, CHECKPOINT_HISTORY_SIZE);
    doc.version = CHECKPOINT_VERSION;
    doc.replicator = REPLICATOR;
    doc.session_id = session;
    doc.last_seq = checkpoint;
    return db.put(doc).catch(function (err) {
      if (err.status === 409) {
        // retry; someone is trying to write a checkpoint simultaneously
        return updateCheckpoint(db, id, checkpoint, session, returnValue);
      }

      throw err;
    });
  });
}

function Checkpointer(src, target, id, returnValue, opts) {
  this.src = src;
  this.target = target;
  this.id = id;
  this.returnValue = returnValue;
  this.opts = opts || {};
}

Checkpointer.prototype.writeCheckpoint = function (checkpoint, session) {
  var self = this;
  return this.updateTarget(checkpoint, session).then(function () {
    return self.updateSource(checkpoint, session);
  });
};

Checkpointer.prototype.updateTarget = function (checkpoint, session) {
  if (this.opts.writeTargetCheckpoint) {
    return updateCheckpoint(this.target, this.id, checkpoint, session, this.returnValue);
  } else {
    return Promise.resolve(true);
  }
};

Checkpointer.prototype.updateSource = function (checkpoint, session) {
  if (this.opts.writeSourceCheckpoint) {
    var self = this;
    return updateCheckpoint(this.src, this.id, checkpoint, session, this.returnValue).catch(function (err) {
      if (isForbiddenError(err)) {
        self.opts.writeSourceCheckpoint = false;
        return true;
      }

      throw err;
    });
  } else {
    return Promise.resolve(true);
  }
};

var comparisons = {
  "undefined": function (targetDoc, sourceDoc) {
    // This is the previous comparison function
    if (collate(targetDoc.last_seq, sourceDoc.last_seq) === 0) {
      return sourceDoc.last_seq;
    }
    /* istanbul ignore next */


    return 0;
  },
  "1": function (targetDoc, sourceDoc) {
    // This is the comparison function ported from CouchDB
    return compareReplicationLogs(sourceDoc, targetDoc).last_seq;
  }
};

Checkpointer.prototype.getCheckpoint = function () {
  var self = this;

  if (self.opts && self.opts.writeSourceCheckpoint && !self.opts.writeTargetCheckpoint) {
    return self.src.get(self.id).then(function (sourceDoc) {
      return sourceDoc.last_seq || LOWEST_SEQ;
    }).catch(function (err) {
      /* istanbul ignore if */
      if (err.status !== 404) {
        throw err;
      }

      return LOWEST_SEQ;
    });
  }

  return self.target.get(self.id).then(function (targetDoc) {
    if (self.opts && self.opts.writeTargetCheckpoint && !self.opts.writeSourceCheckpoint) {
      return targetDoc.last_seq || LOWEST_SEQ;
    }

    return self.src.get(self.id).then(function (sourceDoc) {
      // Since we can't migrate an old version doc to a new one
      // (no session id), we just go with the lowest seq in this case

      /* istanbul ignore if */
      if (targetDoc.version !== sourceDoc.version) {
        return LOWEST_SEQ;
      }

      var version;

      if (targetDoc.version) {
        version = targetDoc.version.toString();
      } else {
        version = "undefined";
      }

      if (version in comparisons) {
        return comparisons[version](targetDoc, sourceDoc);
      }
      /* istanbul ignore next */


      return LOWEST_SEQ;
    }, function (err) {
      if (err.status === 404 && targetDoc.last_seq) {
        return self.src.put({
          _id: self.id,
          last_seq: LOWEST_SEQ
        }).then(function () {
          return LOWEST_SEQ;
        }, function (err) {
          if (isForbiddenError(err)) {
            self.opts.writeSourceCheckpoint = false;
            return targetDoc.last_seq;
          }
          /* istanbul ignore next */


          return LOWEST_SEQ;
        });
      }

      throw err;
    });
  }).catch(function (err) {
    if (err.status !== 404) {
      throw err;
    }

    return LOWEST_SEQ;
  });
}; // This checkpoint comparison is ported from CouchDBs source
// they come from here:
// https://github.com/apache/couchdb-couch-replicator/blob/master/src/couch_replicator.erl#L863-L906


function compareReplicationLogs(srcDoc, tgtDoc) {
  if (srcDoc.session_id === tgtDoc.session_id) {
    return {
      last_seq: srcDoc.last_seq,
      history: srcDoc.history
    };
  }

  return compareReplicationHistory(srcDoc.history, tgtDoc.history);
}

function compareReplicationHistory(sourceHistory, targetHistory) {
  // the erlang loop via function arguments is not so easy to repeat in JS
  // therefore, doing this as recursion
  var S = sourceHistory[0];
  var sourceRest = sourceHistory.slice(1);
  var T = targetHistory[0];
  var targetRest = targetHistory.slice(1);

  if (!S || targetHistory.length === 0) {
    return {
      last_seq: LOWEST_SEQ,
      history: []
    };
  }

  var sourceId = S.session_id;
  /* istanbul ignore if */

  if (hasSessionId(sourceId, targetHistory)) {
    return {
      last_seq: S.last_seq,
      history: sourceHistory
    };
  }

  var targetId = T.session_id;

  if (hasSessionId(targetId, sourceRest)) {
    return {
      last_seq: T.last_seq,
      history: targetRest
    };
  }

  return compareReplicationHistory(sourceRest, targetRest);
}

function hasSessionId(sessionId, history) {
  var props = history[0];
  var rest = history.slice(1);

  if (!sessionId || history.length === 0) {
    return false;
  }

  if (sessionId === props.session_id) {
    return true;
  }

  return hasSessionId(sessionId, rest);
}

function isForbiddenError(err) {
  return typeof err.status === 'number' && Math.floor(err.status / 100) === 4;
}

var STARTING_BACK_OFF = 0;

function backOff(opts, returnValue, error, callback) {
  if (opts.retry === false) {
    returnValue.emit('error', error);
    returnValue.removeAllListeners();
    return;
  }
  /* istanbul ignore if */


  if (typeof opts.back_off_function !== 'function') {
    opts.back_off_function = defaultBackOff;
  }

  returnValue.emit('requestError', error);

  if (returnValue.state === 'active' || returnValue.state === 'pending') {
    returnValue.emit('paused', error);
    returnValue.state = 'stopped';

    var backOffSet = function backoffTimeSet() {
      opts.current_back_off = STARTING_BACK_OFF;
    };

    var removeBackOffSetter = function removeBackOffTimeSet() {
      returnValue.removeListener('active', backOffSet);
    };

    returnValue.once('paused', removeBackOffSetter);
    returnValue.once('active', backOffSet);
  }

  opts.current_back_off = opts.current_back_off || STARTING_BACK_OFF;
  opts.current_back_off = opts.back_off_function(opts.current_back_off);
  setTimeout(callback, opts.current_back_off);
}

function sortObjectPropertiesByKey(queryParams) {
  return Object.keys(queryParams).sort(collate).reduce(function (result, key) {
    result[key] = queryParams[key];
    return result;
  }, {});
} // Generate a unique id particular to this replication.
// Not guaranteed to align perfectly with CouchDB's rep ids.


function generateReplicationId(src, target, opts) {
  var docIds = opts.doc_ids ? opts.doc_ids.sort(collate) : '';
  var filterFun = opts.filter ? opts.filter.toString() : '';
  var queryParams = '';
  var filterViewName = '';
  var selector = ''; // possibility for checkpoints to be lost here as behaviour of
  // JSON.stringify is not stable (see #6226)

  /* istanbul ignore if */

  if (opts.selector) {
    selector = JSON.stringify(opts.selector);
  }

  if (opts.filter && opts.query_params) {
    queryParams = JSON.stringify(sortObjectPropertiesByKey(opts.query_params));
  }

  if (opts.filter && opts.filter === '_view') {
    filterViewName = opts.view.toString();
  }

  return Promise.all([src.id(), target.id()]).then(function (res) {
    var queryData = res[0] + res[1] + filterFun + filterViewName + queryParams + docIds + selector;
    return new Promise(function (resolve) {
      binaryMd5(queryData, resolve);
    });
  }).then(function (md5sum) {
    // can't use straight-up md5 alphabet, because
    // the char '/' is interpreted as being for attachments,
    // and + is also not url-safe
    md5sum = md5sum.replace(/\//g, '.').replace(/\+/g, '_');
    return '_local/' + md5sum;
  });
}

function replicate(src, target, opts, returnValue, result) {
  var batches = []; // list of batches to be processed

  var currentBatch; // the batch currently being processed

  var pendingBatch = {
    seq: 0,
    changes: [],
    docs: []
  }; // next batch, not yet ready to be processed

  var writingCheckpoint = false; // true while checkpoint is being written

  var changesCompleted = false; // true when all changes received

  var replicationCompleted = false; // true when replication has completed

  var last_seq = 0;
  var continuous = opts.continuous || opts.live || false;
  var batch_size = opts.batch_size || 100;
  var batches_limit = opts.batches_limit || 10;
  var changesPending = false; // true while src.changes is running

  var doc_ids = opts.doc_ids;
  var selector = opts.selector;
  var repId;
  var checkpointer;
  var changedDocs = []; // Like couchdb, every replication gets a unique session id

  var session = uuid();
  result = result || {
    ok: true,
    start_time: new Date().toISOString(),
    docs_read: 0,
    docs_written: 0,
    doc_write_failures: 0,
    errors: []
  };
  var changesOpts = {};
  returnValue.ready(src, target);

  function initCheckpointer() {
    if (checkpointer) {
      return Promise.resolve();
    }

    return generateReplicationId(src, target, opts).then(function (res) {
      repId = res;
      var checkpointOpts = {};

      if (opts.checkpoint === false) {
        checkpointOpts = {
          writeSourceCheckpoint: false,
          writeTargetCheckpoint: false
        };
      } else if (opts.checkpoint === 'source') {
        checkpointOpts = {
          writeSourceCheckpoint: true,
          writeTargetCheckpoint: false
        };
      } else if (opts.checkpoint === 'target') {
        checkpointOpts = {
          writeSourceCheckpoint: false,
          writeTargetCheckpoint: true
        };
      } else {
        checkpointOpts = {
          writeSourceCheckpoint: true,
          writeTargetCheckpoint: true
        };
      }

      checkpointer = new Checkpointer(src, target, repId, returnValue, checkpointOpts);
    });
  }

  function writeDocs() {
    changedDocs = [];

    if (currentBatch.docs.length === 0) {
      return;
    }

    var docs = currentBatch.docs;
    var bulkOpts = {
      timeout: opts.timeout
    };
    return target.bulkDocs({
      docs: docs,
      new_edits: false
    }, bulkOpts).then(function (res) {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      } // `res` doesn't include full documents (which live in `docs`), so we create a map of 
      // (id -> error), and check for errors while iterating over `docs`


      var errorsById = Object.create(null);
      res.forEach(function (res) {
        if (res.error) {
          errorsById[res.id] = res;
        }
      });
      var errorsNo = Object.keys(errorsById).length;
      result.doc_write_failures += errorsNo;
      result.docs_written += docs.length - errorsNo;
      docs.forEach(function (doc) {
        var error = errorsById[doc._id];

        if (error) {
          result.errors.push(error); // Normalize error name. i.e. 'Unauthorized' -> 'unauthorized' (eg Sync Gateway)

          var errorName = (error.name || '').toLowerCase();

          if (errorName === 'unauthorized' || errorName === 'forbidden') {
            returnValue.emit('denied', clone(error));
          } else {
            throw error;
          }
        } else {
          changedDocs.push(doc);
        }
      });
    }, function (err) {
      result.doc_write_failures += docs.length;
      throw err;
    });
  }

  function finishBatch() {
    if (currentBatch.error) {
      throw new Error('There was a problem getting docs.');
    }

    result.last_seq = last_seq = currentBatch.seq;
    var outResult = clone(result);

    if (changedDocs.length) {
      outResult.docs = changedDocs; // Attach 'pending' property if server supports it (CouchDB 2.0+)

      /* istanbul ignore if */

      if (typeof currentBatch.pending === 'number') {
        outResult.pending = currentBatch.pending;
        delete currentBatch.pending;
      }

      returnValue.emit('change', outResult);
    }

    writingCheckpoint = true;
    return checkpointer.writeCheckpoint(currentBatch.seq, session).then(function () {
      writingCheckpoint = false;
      /* istanbul ignore if */

      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      }

      currentBatch = undefined;
      getChanges();
    }).catch(function (err) {
      onCheckpointError(err);
      throw err;
    });
  }

  function getDiffs() {
    var diff = {};
    currentBatch.changes.forEach(function (change) {
      // Couchbase Sync Gateway emits these, but we can ignore them

      /* istanbul ignore if */
      if (change.id === "_user/") {
        return;
      }

      diff[change.id] = change.changes.map(function (x) {
        return x.rev;
      });
    });
    return target.revsDiff(diff).then(function (diffs) {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      } // currentBatch.diffs elements are deleted as the documents are written


      currentBatch.diffs = diffs;
    });
  }

  function getBatchDocs() {
    return getDocs(src, target, currentBatch.diffs, returnValue).then(function (got) {
      currentBatch.error = !got.ok;
      got.docs.forEach(function (doc) {
        delete currentBatch.diffs[doc._id];
        result.docs_read++;
        currentBatch.docs.push(doc);
      });
    });
  }

  function startNextBatch() {
    if (returnValue.cancelled || currentBatch) {
      return;
    }

    if (batches.length === 0) {
      processPendingBatch(true);
      return;
    }

    currentBatch = batches.shift();
    getDiffs().then(getBatchDocs).then(writeDocs).then(finishBatch).then(startNextBatch).catch(function (err) {
      abortReplication('batch processing terminated with error', err);
    });
  }

  function processPendingBatch(immediate$$1) {
    if (pendingBatch.changes.length === 0) {
      if (batches.length === 0 && !currentBatch) {
        if (continuous && changesOpts.live || changesCompleted) {
          returnValue.state = 'pending';
          returnValue.emit('paused');
        }

        if (changesCompleted) {
          completeReplication();
        }
      }

      return;
    }

    if (immediate$$1 || changesCompleted || pendingBatch.changes.length >= batch_size) {
      batches.push(pendingBatch);
      pendingBatch = {
        seq: 0,
        changes: [],
        docs: []
      };

      if (returnValue.state === 'pending' || returnValue.state === 'stopped') {
        returnValue.state = 'active';
        returnValue.emit('active');
      }

      startNextBatch();
    }
  }

  function abortReplication(reason, err) {
    if (replicationCompleted) {
      return;
    }

    if (!err.message) {
      err.message = reason;
    }

    result.ok = false;
    result.status = 'aborting';
    batches = [];
    pendingBatch = {
      seq: 0,
      changes: [],
      docs: []
    };
    completeReplication(err);
  }

  function completeReplication(fatalError) {
    if (replicationCompleted) {
      return;
    }
    /* istanbul ignore if */


    if (returnValue.cancelled) {
      result.status = 'cancelled';

      if (writingCheckpoint) {
        return;
      }
    }

    result.status = result.status || 'complete';
    result.end_time = new Date().toISOString();
    result.last_seq = last_seq;
    replicationCompleted = true;

    if (fatalError) {
      // need to extend the error because Firefox considers ".result" read-only
      fatalError = createError(fatalError);
      fatalError.result = result; // Normalize error name. i.e. 'Unauthorized' -> 'unauthorized' (eg Sync Gateway)

      var errorName = (fatalError.name || '').toLowerCase();

      if (errorName === 'unauthorized' || errorName === 'forbidden') {
        returnValue.emit('error', fatalError);
        returnValue.removeAllListeners();
      } else {
        backOff(opts, returnValue, fatalError, function () {
          replicate(src, target, opts, returnValue);
        });
      }
    } else {
      returnValue.emit('complete', result);
      returnValue.removeAllListeners();
    }
  }

  function onChange(change, pending, lastSeq) {
    /* istanbul ignore if */
    if (returnValue.cancelled) {
      return completeReplication();
    } // Attach 'pending' property if server supports it (CouchDB 2.0+)

    /* istanbul ignore if */


    if (typeof pending === 'number') {
      pendingBatch.pending = pending;
    }

    var filter = filterChange(opts)(change);

    if (!filter) {
      return;
    }

    pendingBatch.seq = change.seq || lastSeq;
    pendingBatch.changes.push(change);
    (0, _immediate.default)(function () {
      processPendingBatch(batches.length === 0 && changesOpts.live);
    });
  }

  function onChangesComplete(changes) {
    changesPending = false;
    /* istanbul ignore if */

    if (returnValue.cancelled) {
      return completeReplication();
    } // if no results were returned then we're done,
    // else fetch more


    if (changes.results.length > 0) {
      changesOpts.since = changes.results[changes.results.length - 1].seq;
      getChanges();
      processPendingBatch(true);
    } else {
      var complete = function () {
        if (continuous) {
          changesOpts.live = true;
          getChanges();
        } else {
          changesCompleted = true;
        }

        processPendingBatch(true);
      }; // update the checkpoint so we start from the right seq next time


      if (!currentBatch && changes.results.length === 0) {
        writingCheckpoint = true;
        checkpointer.writeCheckpoint(changes.last_seq, session).then(function () {
          writingCheckpoint = false;
          result.last_seq = last_seq = changes.last_seq;
          complete();
        }).catch(onCheckpointError);
      } else {
        complete();
      }
    }
  }

  function onChangesError(err) {
    changesPending = false;
    /* istanbul ignore if */

    if (returnValue.cancelled) {
      return completeReplication();
    }

    abortReplication('changes rejected', err);
  }

  function getChanges() {
    if (!(!changesPending && !changesCompleted && batches.length < batches_limit)) {
      return;
    }

    changesPending = true;

    function abortChanges() {
      changes.cancel();
    }

    function removeListener() {
      returnValue.removeListener('cancel', abortChanges);
    }

    if (returnValue._changes) {
      // remove old changes() and listeners
      returnValue.removeListener('cancel', returnValue._abortChanges);

      returnValue._changes.cancel();
    }

    returnValue.once('cancel', abortChanges);
    var changes = src.changes(changesOpts).on('change', onChange);
    changes.then(removeListener, removeListener);
    changes.then(onChangesComplete).catch(onChangesError);

    if (opts.retry) {
      // save for later so we can cancel if necessary
      returnValue._changes = changes;
      returnValue._abortChanges = abortChanges;
    }
  }

  function startChanges() {
    initCheckpointer().then(function () {
      /* istanbul ignore if */
      if (returnValue.cancelled) {
        completeReplication();
        return;
      }

      return checkpointer.getCheckpoint().then(function (checkpoint) {
        last_seq = checkpoint;
        changesOpts = {
          since: last_seq,
          limit: batch_size,
          batch_size: batch_size,
          style: 'all_docs',
          doc_ids: doc_ids,
          selector: selector,
          return_docs: true // required so we know when we're done

        };

        if (opts.filter) {
          if (typeof opts.filter !== 'string') {
            // required for the client-side filter in onChange
            changesOpts.include_docs = true;
          } else {
            // ddoc filter
            changesOpts.filter = opts.filter;
          }
        }

        if ('heartbeat' in opts) {
          changesOpts.heartbeat = opts.heartbeat;
        }

        if ('timeout' in opts) {
          changesOpts.timeout = opts.timeout;
        }

        if (opts.query_params) {
          changesOpts.query_params = opts.query_params;
        }

        if (opts.view) {
          changesOpts.view = opts.view;
        }

        getChanges();
      });
    }).catch(function (err) {
      abortReplication('getCheckpoint rejected with ', err);
    });
  }
  /* istanbul ignore next */


  function onCheckpointError(err) {
    writingCheckpoint = false;
    abortReplication('writeCheckpoint completed with error', err);
  }
  /* istanbul ignore if */


  if (returnValue.cancelled) {
    // cancelled immediately
    completeReplication();
    return;
  }

  if (!returnValue._addedListeners) {
    returnValue.once('cancel', completeReplication);

    if (typeof opts.complete === 'function') {
      returnValue.once('error', opts.complete);
      returnValue.once('complete', function (result) {
        opts.complete(null, result);
      });
    }

    returnValue._addedListeners = true;
  }

  if (typeof opts.since === 'undefined') {
    startChanges();
  } else {
    initCheckpointer().then(function () {
      writingCheckpoint = true;
      return checkpointer.writeCheckpoint(opts.since, session);
    }).then(function () {
      writingCheckpoint = false;
      /* istanbul ignore if */

      if (returnValue.cancelled) {
        completeReplication();
        return;
      }

      last_seq = opts.since;
      startChanges();
    }).catch(onCheckpointError);
  }
} // We create a basic promise so the caller can cancel the replication possibly
// before we have actually started listening to changes etc


(0, _inherits.default)(Replication, _events.EventEmitter);

function Replication() {
  _events.EventEmitter.call(this);

  this.cancelled = false;
  this.state = 'pending';
  var self = this;
  var promise = new Promise(function (fulfill, reject) {
    self.once('complete', fulfill);
    self.once('error', reject);
  });

  self.then = function (resolve, reject) {
    return promise.then(resolve, reject);
  };

  self.catch = function (reject) {
    return promise.catch(reject);
  }; // As we allow error handling via "error" event as well,
  // put a stub in here so that rejecting never throws UnhandledError.


  self.catch(function () {});
}

Replication.prototype.cancel = function () {
  this.cancelled = true;
  this.state = 'cancelled';
  this.emit('cancel');
};

Replication.prototype.ready = function (src, target) {
  var self = this;

  if (self._readyCalled) {
    return;
  }

  self._readyCalled = true;

  function onDestroy() {
    self.cancel();
  }

  src.once('destroyed', onDestroy);
  target.once('destroyed', onDestroy);

  function cleanup() {
    src.removeListener('destroyed', onDestroy);
    target.removeListener('destroyed', onDestroy);
  }

  self.once('complete', cleanup);
};

function toPouch(db, opts) {
  var PouchConstructor = opts.PouchConstructor;

  if (typeof db === 'string') {
    return new PouchConstructor(db, opts);
  } else {
    return db;
  }
}

function replicateWrapper(src, target, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (typeof opts === 'undefined') {
    opts = {};
  }

  if (opts.doc_ids && !Array.isArray(opts.doc_ids)) {
    throw createError(BAD_REQUEST, "`doc_ids` filter parameter is not a list.");
  }

  opts.complete = callback;
  opts = clone(opts);
  opts.continuous = opts.continuous || opts.live;
  opts.retry = 'retry' in opts ? opts.retry : false;
  /*jshint validthis:true */

  opts.PouchConstructor = opts.PouchConstructor || this;
  var replicateRet = new Replication(opts);
  var srcPouch = toPouch(src, opts);
  var targetPouch = toPouch(target, opts);
  replicate(srcPouch, targetPouch, opts, replicateRet);
  return replicateRet;
}

(0, _inherits.default)(Sync, _events.EventEmitter);

function sync(src, target, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (typeof opts === 'undefined') {
    opts = {};
  }

  opts = clone(opts);
  /*jshint validthis:true */

  opts.PouchConstructor = opts.PouchConstructor || this;
  src = toPouch(src, opts);
  target = toPouch(target, opts);
  return new Sync(src, target, opts, callback);
}

function Sync(src, target, opts, callback) {
  var self = this;
  this.canceled = false;
  var optsPush = opts.push ? $inject_Object_assign({}, opts, opts.push) : opts;
  var optsPull = opts.pull ? $inject_Object_assign({}, opts, opts.pull) : opts;
  this.push = replicateWrapper(src, target, optsPush);
  this.pull = replicateWrapper(target, src, optsPull);
  this.pushPaused = true;
  this.pullPaused = true;

  function pullChange(change) {
    self.emit('change', {
      direction: 'pull',
      change: change
    });
  }

  function pushChange(change) {
    self.emit('change', {
      direction: 'push',
      change: change
    });
  }

  function pushDenied(doc) {
    self.emit('denied', {
      direction: 'push',
      doc: doc
    });
  }

  function pullDenied(doc) {
    self.emit('denied', {
      direction: 'pull',
      doc: doc
    });
  }

  function pushPaused() {
    self.pushPaused = true;
    /* istanbul ignore if */

    if (self.pullPaused) {
      self.emit('paused');
    }
  }

  function pullPaused() {
    self.pullPaused = true;
    /* istanbul ignore if */

    if (self.pushPaused) {
      self.emit('paused');
    }
  }

  function pushActive() {
    self.pushPaused = false;
    /* istanbul ignore if */

    if (self.pullPaused) {
      self.emit('active', {
        direction: 'push'
      });
    }
  }

  function pullActive() {
    self.pullPaused = false;
    /* istanbul ignore if */

    if (self.pushPaused) {
      self.emit('active', {
        direction: 'pull'
      });
    }
  }

  var removed = {};

  function removeAll(type) {
    // type is 'push' or 'pull'
    return function (event, func) {
      var isChange = event === 'change' && (func === pullChange || func === pushChange);
      var isDenied = event === 'denied' && (func === pullDenied || func === pushDenied);
      var isPaused = event === 'paused' && (func === pullPaused || func === pushPaused);
      var isActive = event === 'active' && (func === pullActive || func === pushActive);

      if (isChange || isDenied || isPaused || isActive) {
        if (!(event in removed)) {
          removed[event] = {};
        }

        removed[event][type] = true;

        if (Object.keys(removed[event]).length === 2) {
          // both push and pull have asked to be removed
          self.removeAllListeners(event);
        }
      }
    };
  }

  if (opts.live) {
    this.push.on('complete', self.pull.cancel.bind(self.pull));
    this.pull.on('complete', self.push.cancel.bind(self.push));
  }

  function addOneListener(ee, event, listener) {
    if (ee.listeners(event).indexOf(listener) == -1) {
      ee.on(event, listener);
    }
  }

  this.on('newListener', function (event) {
    if (event === 'change') {
      addOneListener(self.pull, 'change', pullChange);
      addOneListener(self.push, 'change', pushChange);
    } else if (event === 'denied') {
      addOneListener(self.pull, 'denied', pullDenied);
      addOneListener(self.push, 'denied', pushDenied);
    } else if (event === 'active') {
      addOneListener(self.pull, 'active', pullActive);
      addOneListener(self.push, 'active', pushActive);
    } else if (event === 'paused') {
      addOneListener(self.pull, 'paused', pullPaused);
      addOneListener(self.push, 'paused', pushPaused);
    }
  });
  this.on('removeListener', function (event) {
    if (event === 'change') {
      self.pull.removeListener('change', pullChange);
      self.push.removeListener('change', pushChange);
    } else if (event === 'denied') {
      self.pull.removeListener('denied', pullDenied);
      self.push.removeListener('denied', pushDenied);
    } else if (event === 'active') {
      self.pull.removeListener('active', pullActive);
      self.push.removeListener('active', pushActive);
    } else if (event === 'paused') {
      self.pull.removeListener('paused', pullPaused);
      self.push.removeListener('paused', pushPaused);
    }
  });
  this.pull.on('removeListener', removeAll('pull'));
  this.push.on('removeListener', removeAll('push'));
  var promise = Promise.all([this.push, this.pull]).then(function (resp) {
    var out = {
      push: resp[0],
      pull: resp[1]
    };
    self.emit('complete', out);

    if (callback) {
      callback(null, out);
    }

    self.removeAllListeners();
    return out;
  }, function (err) {
    self.cancel();

    if (callback) {
      // if there's a callback, then the callback can receive
      // the error event
      callback(err);
    } else {
      // if there's no callback, then we're safe to emit an error
      // event, which would otherwise throw an unhandled error
      // due to 'error' being a special event in EventEmitters
      self.emit('error', err);
    }

    self.removeAllListeners();

    if (callback) {
      // no sense throwing if we're already emitting an 'error' event
      throw err;
    }
  });

  this.then = function (success, err) {
    return promise.then(success, err);
  };

  this.catch = function (err) {
    return promise.catch(err);
  };
}

Sync.prototype.cancel = function () {
  if (!this.canceled) {
    this.canceled = true;
    this.push.cancel();
    this.pull.cancel();
  }
};

function replication(PouchDB) {
  PouchDB.replicate = replicateWrapper;
  PouchDB.sync = sync;
  Object.defineProperty(PouchDB.prototype, 'replicate', {
    get: function () {
      var self = this;

      if (typeof this.replicateMethods === 'undefined') {
        this.replicateMethods = {
          from: function (other, opts, callback) {
            return self.constructor.replicate(other, self, opts, callback);
          },
          to: function (other, opts, callback) {
            return self.constructor.replicate(self, other, opts, callback);
          }
        };
      }

      return this.replicateMethods;
    }
  });

  PouchDB.prototype.sync = function (dbName, opts, callback) {
    return this.constructor.sync(this, dbName, opts, callback);
  };
}

PouchDB.plugin(IDBPouch).plugin(HttpPouch$1).plugin(mapreduce).plugin(replication); // Pull from src because pouchdb-node/pouchdb-browser themselves

var _default = PouchDB;
exports.default = _default;
},{"immediate":"node_modules/immediate/lib/browser.js","uuid":"node_modules/uuid/index.js","spark-md5":"node_modules/spark-md5/spark-md5.js","vuvuzela":"node_modules/vuvuzela/index.js","argsarray":"node_modules/argsarray/index.js","inherits":"node_modules/pouchdb/node_modules/inherits/inherits_browser.js","events":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/events/events.js","process":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js"}],"js/MasterStore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _peerjs = _interopRequireDefault(require("peerjs"));

var _pouchdb = _interopRequireDefault(require("pouchdb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var context = new AudioContext();
var merger = context.createChannelMerger();
var audioRecorder = new WebAudioRecorder(merger, {});
var pouch = new _pouchdb.default('pouchity pouch pouch'); //const dest = context.createMediaStreamDestination()
//merger.connect(dest)

merger.connect(context.destination);

audioRecorder.onComplete = function (recorder, blob) {
  console.log('uploading blob');
  fetch("https://example.com/upload.php", {
    method: "POST",
    body: blob
  }).then(console.log);
};

var AppStore = function AppStore(onPouchUpdate) {
  var _this = this;

  _classCallCheck(this, AppStore);

  this.numPeers = 0;
  this.couchData = {
    leftUser: {
      name: '?',
      ratingAudience: 0,
      ratingWatson: 0
    },
    rightUser: {
      name: '?',
      ratingAudience: 0,
      ratingWatson: 0
    },
    songName: '?',
    karaokeUrl: '?'
  };
  this.audioStream = new MediaStream();
  this.peer = new _peerjs.default('imdacaptainnow');

  this.onPouchUpdate = function () {};

  this.onPouchUpdate = onPouchUpdate;
  this.peer.on('connection', function (conn) {
    _this.numPeers++;

    if (_this.numPeers > 2) {
      alert('too many peers connected :(');
      return;
    } // wait for a call


    _this.peer.on('call', function (mediaConn) {
      mediaConn.answer();
      mediaConn.on('stream', function (stream) {
        var source = context.createMediaStreamSource(stream);
        var splitter = context.createChannelSplitter();
        source.connect(splitter);
        splitter.connect(merger, 0, _this.numPeers - 1);

        if (_this.numPeers == 2) {
          if (audioRecorder.isRecording()) {
            console.log('cancelled recording');
            audioRecorder.cancelRecording();
          }

          console.log('recording');
          audioRecorder.startRecording();
        }
      });
    });
  });
  this.peer.on('disconnected', function () {
    _this.numPeers--;
    console.log('cancelled recording');
    audioRecorder.cancelRecording();
  });
  pouch.get('game').then(function (doc) {
    _this.couchData = doc;
  });
  pouch.changes().on('change', function () {
    pouch.get('game').then(function (doc) {
      _this.couchData = doc;

      _this.onPouchUpdate();
    });
  });
  merger.connect(context.destination);
};

var store = new AppStore();
exports.store = store;
window.store = store;
},{"peerjs":"node_modules/peerjs/dist/peerjs.min.js","pouchdb":"node_modules/pouchdb/lib/index-browser.es.js"}],"js/masterIndex.js":[function(require,module,exports) {
"use strict";

var _MasterStore = require("./MasterStore");
},{"./MasterStore":"js/MasterStore.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55081" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/masterIndex.js"], null)
//# sourceMappingURL=/masterIndex.9fde829a.js.map