!function(){let e,t,n,r;var i,s,a,o,l,h,u,c,d,f,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},g={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m=new Uint8Array(16),y=[];for(let e=0;e<256;++e)y.push((e+256).toString(16).slice(1));var v=function(t,n,r){if(g.randomUUID&&!n&&!t)return g.randomUUID();let i=(t=t||{}).random||(t.rng||function(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(m)})();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){r=r||0;for(let e=0;e<16;++e)n[r+e]=i[e];return n}return function(e,t=0){return y[e[t+0]]+y[e[t+1]]+y[e[t+2]]+y[e[t+3]]+"-"+y[e[t+4]]+y[e[t+5]]+"-"+y[e[t+6]]+y[e[t+7]]+"-"+y[e[t+8]]+y[e[t+9]]+"-"+y[e[t+10]]+y[e[t+11]]+y[e[t+12]]+y[e[t+13]]+y[e[t+14]]+y[e[t+15]]}(i)},w={},E=w={};function _(){throw Error("setTimeout has not been defined")}function b(){throw Error("clearTimeout has not been defined")}function T(e){if(eW===setTimeout)return setTimeout(e,0);if((eW===_||!eW)&&setTimeout)return eW=setTimeout,setTimeout(e,0);try{return eW(e,0)}catch(t){try{return eW.call(null,e,0)}catch(t){return eW.call(this,e,0)}}}!function(){try{eW="function"==typeof setTimeout?setTimeout:_}catch(e){eW=_}try{eX="function"==typeof clearTimeout?clearTimeout:b}catch(e){eX=b}}();var I=[],S=!1,C=-1;function A(){S&&eY&&(S=!1,eY.length?I=eY.concat(I):C=-1,I.length&&D())}function D(){if(!S){var e=T(A);S=!0;for(var t=I.length;t;){for(eY=I,I=[];++C<t;)eY&&eY[C].run();C=-1,t=I.length}eY=null,S=!1,function(e){if(eX===clearTimeout)return clearTimeout(e);if((eX===b||!eX)&&clearTimeout)return eX=clearTimeout,clearTimeout(e);try{eX(e)}catch(t){try{return eX.call(null,e)}catch(t){return eX.call(this,e)}}}(e)}}function N(e,t){this.fun=e,this.array=t}function k(){}E.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];I.push(new N(e,t)),1!==I.length||S||T(D)},N.prototype.run=function(){this.fun.apply(null,this.array)},E.title="browser",E.browser=!0,E.env={},E.argv=[],E.version="",E.versions={},E.on=k,E.addListener=k,E.once=k,E.off=k,E.removeListener=k,E.removeAllListeners=k,E.emit=k,E.prependListener=k,E.prependOnceListener=k,E.listeners=function(e){return[]},E.binding=function(e){throw Error("process.binding is not supported")},E.cwd=function(){return"/"},E.chdir=function(e){throw Error("process.chdir is not supported")},E.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},x=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},L={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,h=i>>2,u=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),r.push(n[h],n[u],n[c],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(R(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):x(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,a=++t<e.length?n[e.charAt(t)]:64,o=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw new O;let l=i<<2|s>>4;if(r.push(l),64!==a){let e=s<<4&240|a>>2;if(r.push(e),64!==o){let e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class O extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let M=function(e){let t=R(e);return L.encodeByteArray(t,!0)},P=function(e){return M(e).replace(/\./g,"")},V=function(e){try{return L.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},F=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==p)return p;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,U=()=>{if(void 0===w||void 0===w.env)return;let e=void 0;if(e)return JSON.parse(e)},B=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&V(e[1]);return t&&JSON.parse(t)},j=()=>{try{return F()||U()||B()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},q=e=>{var t,n;return null===(n=null===(t=j())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},$=e=>{let t=q(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},z=()=>{var e;return null===(e=j())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function H(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Q extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(X,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Q(r,a,n)}}let X=/\{\$([^}]+)}/g;function Y(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],s=t[i];if(J(n)&&J(s)){if(!Y(n,s))return!1}else if(n!==s)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function J(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){return e&&e._delegate?e._delegate:e}class ee{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new K;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:et})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===et?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new en(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=[];(eQ=eJ||(eJ={}))[eQ.DEBUG=0]="DEBUG",eQ[eQ.VERBOSE=1]="VERBOSE",eQ[eQ.INFO=2]="INFO",eQ[eQ.WARN=3]="WARN",eQ[eQ.ERROR=4]="ERROR",eQ[eQ.SILENT=5]="SILENT";let es={debug:eJ.DEBUG,verbose:eJ.VERBOSE,info:eJ.INFO,warn:eJ.WARN,error:eJ.ERROR,silent:eJ.SILENT},ea=eJ.INFO,eo={[eJ.DEBUG]:"log",[eJ.VERBOSE]:"log",[eJ.INFO]:"info",[eJ.WARN]:"warn",[eJ.ERROR]:"error"},el=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=eo[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eh{constructor(e){this.name=e,this._logLevel=ea,this._logHandler=el,this._userLogHandler=null,ei.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in eJ))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?es[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,eJ.DEBUG,...e),this._logHandler(this,eJ.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,eJ.VERBOSE,...e),this._logHandler(this,eJ.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,eJ.INFO,...e),this._logHandler(this,eJ.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,eJ.WARN,...e),this._logHandler(this,eJ.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,eJ.ERROR,...e),this._logHandler(this,eJ.ERROR,...e)}}let eu=(e,t)=>t.some(t=>e instanceof t),ec=new WeakMap,ed=new WeakMap,ef=new WeakMap,ep=new WeakMap,eg=new WeakMap,em={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ed.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ef.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ey(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ey(e){var r;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ey(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&ec.set(t,e)}).catch(()=>{}),eg.set(t,e),t}(e);if(ep.has(e))return ep.get(e);let i="function"==typeof(r=e)?r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return r.apply(ev(this),e),ey(ec.get(this))}:function(...e){return ey(r.apply(ev(this),e))}:function(e,...t){let n=r.call(ev(this),e,...t);return ef.set(n,e.sort?e.sort():[e]),ey(n)}:(r instanceof IDBTransaction&&function(e){if(ed.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});ed.set(e,t)}(r),eu(r,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,em):r;return i!==e&&(ep.set(e,i),eg.set(i,e)),i}let ev=e=>eg.get(e),ew=["get","getKey","getAll","getAllKeys","count"],eE=["put","add","delete","clear"],e_=new Map;function eb(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(e_.get(t))return e_.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=eE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ew.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return e_.set(t,s),s}em={...r=em,get:(e,t,n)=>eb(e,t)||r.get(e,t,n),has:(e,t)=>!!eb(e,t)||r.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let eI="@firebase/app",eS="0.10.0",eC=new eh("@firebase/app"),eA="[DEFAULT]",eD={[eI]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eN=new Map,ek=new Map,eR=new Map;function ex(e,t){try{e.container.addComponent(t)}catch(n){eC.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function eL(e){let t=e.name;if(eR.has(t))return eC.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eR.set(t,e),eN.values()))ex(n,e);for(let t of ek.values())ex(t,e);return!0}let eO=new W("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eO.create("app-deleted",{appName:this._name})}}function eP(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:eA,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw eO.create("bad-app-name",{appName:String(i)});if(n||(n=z()),!n)throw eO.create("no-options");let s=eN.get(i);if(s){if(Y(n,s.options)&&Y(r,s.config))return s;throw eO.create("duplicate-app",{appName:i})}let a=new er(i);for(let e of eR.values())a.addComponent(e);let o=new eM(n,r,a);return eN.set(i,o),o}function eV(e,t,n){var r;let i=null!==(r=eD[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eC.warn(e.join(" "));return}eL(new ee(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let eF="firebase-heartbeat-store",eU=null;function eB(){return eU||(eU=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=ey(a);return r&&a.addEventListener("upgradeneeded",e=>{r(ey(a.result),e.oldVersion,e.newVersion,ey(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eF)}catch(e){console.warn(e)}}}).catch(e=>{throw eO.create("idb-open",{originalErrorMessage:e.message})})),eU}async function ej(e){try{let t=(await eB()).transaction(eF),n=await t.objectStore(eF).get(e$(e));return await t.done,n}catch(e){if(e instanceof Q)eC.warn(e.message);else{let t=eO.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eC.warn(t.message)}}}async function eq(e,t){try{let n=(await eB()).transaction(eF,"readwrite"),r=n.objectStore(eF);await r.put(t,e$(e)),await n.done}catch(e){if(e instanceof Q)eC.warn(e.message);else{let t=eO.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eC.warn(t.message)}}}function e$(e){return`${e.name}!${e.options.appId}`}class ez{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eG(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=eK();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=eK(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),eH(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),eH(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=P(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function eK(){return new Date().toISOString().substring(0,10)}class eG{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!H()&&new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await ej(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return eq(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return eq(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function eH(e){return P(JSON.stringify({version:2,heartbeats:e})).length}eL(new ee("platform-logger",e=>new eT(e),"PRIVATE")),eL(new ee("heartbeat",e=>new ez(e),"PRIVATE")),eV(eI,eS,""),eV(eI,eS,"esm2017"),eV("fire-js",""),eV("firebase","10.10.0","app");var eQ,eW,eX,eY,eJ,eZ,e0={},e1=e1||{},e2=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==p?p:"undefined"!=typeof self?self:{})||self;function e9(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function e4(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function e6(e,t,n){return e.call.apply(e.bind,arguments)}function e5(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function e3(e,t,n){return(e3=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e6:e5).apply(null,arguments)}function e7(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function e8(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function te(){this.s=this.s,this.o=this.o}te.prototype.s=!1,te.prototype.sa=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let tt=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function tn(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function tr(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(e9(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function ti(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ti.prototype.h=function(){this.defaultPrevented=!0};var ts=function(){if(!e2.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};e2.addEventListener("test",e,t),e2.removeEventListener("test",e,t)}catch(e){}return e}();function ta(e){return/^[\s\xa0]*$/.test(e)}function to(){var e=e2.navigator;return e&&(e=e.userAgent)?e:""}function tl(e){return -1!=to().indexOf(e)}function th(e){return th[" "](e),e}th[" "]=function(){};var tu=tl("Opera"),tc=tl("Trident")||tl("MSIE"),td=tl("Edge"),tf=td||tc,tp=tl("Gecko")&&!(-1!=to().toLowerCase().indexOf("webkit")&&!tl("Edge"))&&!(tl("Trident")||tl("MSIE"))&&!tl("Edge"),tg=-1!=to().toLowerCase().indexOf("webkit")&&!tl("Edge");function tm(){var e=e2.document;return e?e.documentMode:void 0}e:{var ty,tv="",tw=(ty=to(),tp?/rv:([^\);]+)(\)|;)/.exec(ty):td?/Edge\/([\d\.]+)/.exec(ty):tc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ty):tg?/WebKit\/(\S+)/.exec(ty):tu?/(?:Version)[ \/]?(\S+)/.exec(ty):void 0);if(tw&&(tv=tw?tw[1]:""),tc){var tE=tm();if(null!=tE&&tE>parseFloat(tv)){o=String(tE);break e}}o=tv}var t_=e2.document&&tc&&(tm()||parseInt(o,10))||void 0;function tb(e,t){if(ti.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(tp){e:{try{th(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tb.$.h.call(this)}}e8(tb,ti);var tT={2:"touch",3:"pen",4:"mouse"};tb.prototype.h=function(){tb.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tI="closure_listenable_"+(1e6*Math.random()|0),tS=0;function tC(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++tS,this.fa=this.ia=!1}function tA(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tD(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function tN(e){let t={};for(let n in e)t[n]=e[n];return t}let tk="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tR(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<tk.length;t++)n=tk[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function tx(e){this.src=e,this.g={},this.h=0}function tL(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=tt(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(tA(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function tO(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==r)return i}return -1}tx.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=tO(e,t,r,i);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new tC(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var tM="closure_lm_"+(1e6*Math.random()|0),tP={};function tV(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=e4(i)?!!i.capture:!!i,o=tj(e);if(o||(e[tM]=o=new tx(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return tB.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ts||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(tU(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tF(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[tI])tL(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(tU(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=tj(t))?(tL(n,e),0==n.h&&(n.src=null,t[tM]=null)):tA(e)}}}function tU(e){return e in tP?tP[e]:tP[e]="on"+e}function tB(e,t){if(e.fa)e=!0;else{t=new tb(t,this);var n=e.listener,r=e.la||e.src;e.ia&&tF(e),e=n.call(r,t)}return e}function tj(e){return(e=e[tM])instanceof tx?e:null}var tq="__closure_events_fn_"+(1e9*Math.random()>>>0);function t$(e){return"function"==typeof e?e:(e[tq]||(e[tq]=function(t){return e.handleEvent(t)}),e[tq])}function tz(){te.call(this),this.i=new tx(this),this.S=this,this.J=null}function tK(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new ti(t,e);else if(t instanceof ti)t.target=t.target||e;else{var i=t;tR(t=new ti(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=tG(a,r,!0,t)&&i}if(i=tG(a=t.g=e,r,!0,t)&&i,i=tG(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=tG(a=t.g=n[s],r,!1,t)&&i}function tG(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&tL(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}e8(tz,te),tz.prototype[tI]=!0,tz.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=e4(i)?!!i.capture:!!i,r=t$(r),t&&t[tI])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=tO(a=t.g[n],r,i,s))&&(tA(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=tj(t))&&(n=t.g[n.toString()],t=-1,n&&(t=tO(n,r,i,s)),(r=-1<t?n[t]:null)&&tF(r))}(this,e,t,n,r)},tz.prototype.N=function(){if(tz.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tA(n[r]);delete t.g[e],t.h--}}this.J=null},tz.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},tz.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var tH=e2.JSON.stringify,tQ=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new tW,e=>e.reset());class tW{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let tX,tY=!1,tJ=new class{constructor(){this.h=this.g=null}add(e,t){let n=tQ.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},tZ=()=>{let e=e2.Promise.resolve(void 0);tX=()=>{e.then(t0)}};var t0=()=>{let e;for(var t;e=null,tJ.g&&(e=tJ.g,tJ.g=tJ.g.next,tJ.g||(tJ.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){e2.setTimeout(()=>{throw e},0)}(e)}tQ.j(t),100>tQ.h&&(tQ.h++,t.next=tQ.g,tQ.g=t)}tY=!1};function t1(e,t){tz.call(this),this.h=e||1,this.g=t||e2,this.j=e3(this.qb,this),this.l=Date.now()}function t2(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function t9(e,t,n){if("function"==typeof e)n&&(e=e3(e,n));else if(e&&"function"==typeof e.handleEvent)e=e3(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:e2.setTimeout(e,t||0)}e8(t1,tz),(eZ=t1.prototype).ga=!1,eZ.T=null,eZ.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tK(this,"tick"),this.ga&&(t2(this),this.start()))}},eZ.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},eZ.N=function(){t1.$.N.call(this),t2(this),delete this.g};class t4 extends te{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=t9(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(e2.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function t6(e){te.call(this),this.h=e,this.g={}}e8(t6,te);var t5=[];function t3(e,t,n,r){Array.isArray(n)||(n&&(t5[0]=n.toString()),n=t5);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=t$(r),t&&t[tI]?t.P(n,r,e4(i)?!!i.capture:!!i,s):tV(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=t$(r),t&&t[tI]?t.O(n,r,e4(i)?!!i.capture:!!i,s):tV(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function t7(e){tD(e.g,function(e,t){this.g.hasOwnProperty(t)&&tF(e)},e),e.g={}}function t8(){this.g=!0}function ne(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return tH(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}t6.prototype.N=function(){t6.$.N.call(this),t7(this)},t6.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},t8.prototype.Ea=function(){this.g=!1},t8.prototype.info=function(){};var nt={},nn=null;function nr(){return nn=nn||new tz}function ni(e){ti.call(this,nt.Ta,e)}function ns(e){let t=nr();tK(t,new ni(t))}function na(e,t){ti.call(this,nt.STAT_EVENT,e),this.stat=t}function no(e){let t=nr();tK(t,new na(t,e))}function nl(e,t){ti.call(this,nt.Ua,e),this.size=t}function nh(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return e2.setTimeout(function(){e()},t)}nt.Ta="serverreachability",e8(ni,ti),nt.STAT_EVENT="statevent",e8(na,ti),nt.Ua="timingevent",e8(nl,ti);var nu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nd(){}function nf(e){return e.h||(e.h=e.i())}function np(){}nd.prototype.h=null;var ng={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nm(){ti.call(this,"d")}function ny(){ti.call(this,"c")}function nv(){}function nw(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new t6(this),this.P=n_,e=tf?125:void 0,this.V=new t1(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nE}function nE(){this.i=null,this.g="",this.h=!1}e8(nm,ti),e8(ny,ti),e8(nv,nd),nv.prototype.g=function(){return new XMLHttpRequest},nv.prototype.i=function(){return{}},h=new nv;var n_=45e3,nb={},nT={};function nI(e,t,n){e.L=1,e.A=nq(nV(t)),e.u=n,e.S=!0,nS(e,null)}function nS(e,t){e.G=Date.now(),nD(e),e.B=nV(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),n1(n.i,"t",r),e.o=0,n=e.l.J,e.h=new nE,e.g=rz(e.l,n?t:null,!e.u),0<e.O&&(e.M=new t4(e3(e.Pa,e,e.g),e.O)),t3(e.U,e.g,"readystatechange",e.nb),t=e.I?tN(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ns(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.v,e.B,e.m,e.W,e.u)}function nC(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function nA(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if((i=function(e,t){var n=e.o,r=t.indexOf("\n",n);return -1==r?nT:isNaN(n=Number(t.substring(n,r)))?nb:(r+=1)+n>t.length?nT:(t=t.slice(r,r+n),e.o=r+n,t)}(e,n))==nT){4==t&&(e.s=4,no(14),r=!1),ne(e.j,e.m,null,"[Incomplete Response]");break}else if(i==nb){e.s=4,no(15),ne(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ne(e.j,e.m,i,null),nL(e,i);nC(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,no(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),rP(t),t.M=!0,no(11))):(ne(e.j,e.m,n,"[Invalid Chunked Response]"),nx(e),nR(e))}function nD(e){e.Y=Date.now()+e.P,nN(e,e.P)}function nN(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=nh(e3(e.lb,e),t)}function nk(e){e.C&&(e2.clearTimeout(e.C),e.C=null)}function nR(e){0==e.l.H||e.J||rU(e.l,e)}function nx(e){nk(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,t2(e.V),t7(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function nL(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||n7(n.i,e))){if(!e.K&&n7(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)rF(n),rD(n);else break e}rM(n),no(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=nh(e3(n.ib,n),6e3));if(1>=n3(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else rj(n,11)}else if((e.K||n.g==e)&&rF(n),!ta(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let i=o[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(n8(s,s.h),s.h=null))}if(r.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,nj(r.I,r.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(r=n).wa=r$(r,r.J?r.pa:null,r.Y),e.K){re(r.i,e);var a=r.L;a&&e.setTimeout(a),e.C&&(nk(e),nD(e)),r.g=e}else rO(r);0<n.j.length&&rk(n)}else"stop"!=o[0]&&"close"!=o[0]||rj(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?rj(n,7):rA(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}ns(4)}catch(e){}}function nO(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(e9(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(e9(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(e9(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(eZ=nw.prototype).setTimeout=function(e){this.P=e},eZ.nb=function(e){e=e.target;let t=this.M;t&&3==r_(e)?t.l():this.Pa(e)},eZ.Pa=function(e){try{if(e==this.g)e:{let u=r_(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||tf||this.g&&(this.h.h||this.g.ja()||rb(this.g)))){this.J||4!=u||7==t||(8==t||0>=c?ns(3):ns(2)),nk(this);var n=this.g.da();this.ca=n;t:if(nC(this)){var r=rb(this.g);e="";var i=r.length,s=4==r_(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nx(this),nR(this);var a="";break t}this.h.i=new e2.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ta(o)){var h=o;break t}}h=null}if(n=h)ne(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nL(this,n);else{this.i=!1,this.s=3,no(12),nx(this),nR(this);break e}}this.S?(nA(this,u,a),tf&&this.i&&3==u&&(t3(this.U,this.V,"tick",this.mb),this.V.start())):(ne(this.j,this.m,a,null),nL(this,a)),4==u&&nx(this),this.i&&!this.J&&(4==u?rU(this.l,this):(this.i=!1,nD(this)))}else(function(e){let t={};e=(e.g&&2<=r_(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(ta(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,no(12)):(this.s=0,no(13)),nx(this),nR(this)}}}catch(e){}finally{}},eZ.mb=function(){if(this.g){var e=r_(this.g),t=this.g.ja();this.o<t.length&&(nk(this),nA(this,e,t),this.i&&4!=e&&nD(this))}},eZ.cancel=function(){this.J=!0,nx(this)},eZ.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(ns(),no(17)),nx(this),this.s=2,nR(this)):nN(this,this.Y-e)};var nM=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nP(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof nP){this.h=e.h,nF(this,e.j),this.s=e.s,this.g=e.g,nU(this,e.m),this.l=e.l;var t=e.i,n=new nY;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),nB(this,n),this.o=e.o}else e&&(t=String(e).match(nM))?(this.h=!1,nF(this,t[1]||"",!0),this.s=n$(t[2]||""),this.g=n$(t[3]||"",!0),nU(this,t[4]),this.l=n$(t[5]||"",!0),nB(this,t[6]||"",!0),this.o=n$(t[7]||"")):(this.h=!1,this.i=new nY(null,this.h))}function nV(e){return new nP(e)}function nF(e,t,n){e.j=n?n$(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nU(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function nB(e,t,n){var r,i;t instanceof nY?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(nJ(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(nZ(this,t),n1(this,n,e))},r)),r.j=i):(n||(t=nz(t,nW)),e.i=new nY(t,e.h))}function nj(e,t,n){e.i.set(t,n)}function nq(e){return nj(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function n$(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function nz(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,nK),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nK(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}nP.prototype.toString=function(){var e=[],t=this.j;t&&e.push(nz(t,nG,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(nz(t,nG,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(nz(n,"/"==n.charAt(0)?nQ:nH,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",nz(n,nX)),e.join("")};var nG=/[#\/\?@]/g,nH=/[#\?:]/g,nQ=/[#\?]/g,nW=/[#\?@]/g,nX=/#/g;function nY(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function nJ(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function nZ(e,t){nJ(e),t=n2(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function n0(e,t){return nJ(e),t=n2(e,t),e.g.has(t)}function n1(e,t,n){nZ(e,t),0<n.length&&(e.i=null,e.g.set(n2(e,t),tn(n)),e.h+=n.length)}function n2(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(eZ=nY.prototype).add=function(e,t){nJ(this),this.i=null,e=n2(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},eZ.forEach=function(e,t){nJ(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},eZ.ta=function(){nJ(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},eZ.Z=function(e){nJ(this);let t=[];if("string"==typeof e)n0(this,e)&&(t=t.concat(this.g.get(n2(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},eZ.set=function(e,t){return nJ(this),this.i=null,n0(this,e=n2(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},eZ.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},eZ.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};var n9=class{constructor(e,t){this.g=e,this.map=t}};function n4(e){this.l=e||n6,e=e2.PerformanceNavigationTiming?0<(e=e2.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(e2.g&&e2.g.Ka&&e2.g.Ka()&&e2.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var n6=10;function n5(e){return!!e.h||!!e.g&&e.g.size>=e.j}function n3(e){return e.h?1:e.g?e.g.size:0}function n7(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function n8(e,t){e.g?e.g.add(t):e.h=t}function re(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function rt(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return tn(e.i)}n4.prototype.cancel=function(){if(this.i=rt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var rn=class{stringify(e){return e2.JSON.stringify(e,void 0)}parse(e){return e2.JSON.parse(e,void 0)}};function rr(){this.g=new rn}function ri(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function rs(e){this.l=e.ec||null,this.j=e.ob||!1}function ra(e,t){tz.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ro,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}e8(rs,nd),rs.prototype.g=function(){return new ra(this.l,this.j)},rs.prototype.i=(i={},function(){return i}),e8(ra,tz);var ro=0;function rl(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function rh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ru(e)}function ru(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(eZ=ra.prototype).open=function(e,t){if(this.readyState!=ro)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ru(this)},eZ.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||e2).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},eZ.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,rh(this)),this.readyState=ro},eZ.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ru(this)),this.g&&(this.readyState=3,ru(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==e2.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rl(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},eZ.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?rh(this):ru(this),3==this.readyState&&rl(this)}},eZ.Za=function(e){this.g&&(this.response=this.responseText=e,rh(this))},eZ.Ya=function(e){this.g&&(this.response=e,rh(this))},eZ.ka=function(){this.g&&rh(this)},eZ.setRequestHeader=function(e,t){this.v.append(e,t)},eZ.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},eZ.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var rc=e2.JSON.parse;function rd(e){tz.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=rf,this.L=this.M=!1}e8(rd,tz);var rf="",rp=/^https?$/i,rg=["POST","PUT"];function rm(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ry(e),rw(e)}function ry(e){e.F||(e.F=!0,tK(e,"complete"),tK(e,"error"))}function rv(e){if(e.h&&void 0!==e1&&(!e.C[1]||4!=r_(e)||2!=e.da())){if(e.v&&4==r_(e))t9(e.La,0,e);else if(tK(e,"readystatechange"),4==r_(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===a){var i=String(e.I).match(nM)[1]||null;!i&&e2.self&&e2.self.location&&(i=e2.self.location.protocol.slice(0,-1)),n=!rp.test(i?i.toLowerCase():"")}t=n}if(t)tK(e,"complete"),tK(e,"success");else{e.m=6;try{var s=2<r_(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",ry(e)}}finally{rw(e)}}}}function rw(e,t){if(e.g){rE(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||tK(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function rE(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(e2.clearTimeout(e.A),e.A=null)}function r_(e){return e.g?e.g.readyState:0}function rb(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case rf:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function rT(e){let t="";return tD(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function rI(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rT(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):nj(e,t,n))}function rS(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rC(e){this.Ga=0,this.j=[],this.l=new t8,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rS("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rS("baseRetryDelayMs",5e3,e),this.hb=rS("retryDelaySeedMs",1e4,e),this.eb=rS("forwardChannelMaxRetries",2,e),this.xa=rS("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new n4(e&&e.concurrentRequestLimit),this.Ja=new rr,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function rA(e){if(rN(e),3==e.H){var t=e.W++,n=nV(e.I);if(nj(n,"SID",e.K),nj(n,"RID",t),nj(n,"TYPE","terminate"),rx(e,n),(t=new nw(e,e.l,t)).L=2,t.A=nq(nV(n)),n=!1,e2.navigator&&e2.navigator.sendBeacon)try{n=e2.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&e2.Image&&((new Image).src=t.A,n=!0),n||(t.g=rz(t.l,null),t.g.ha(t.A)),t.G=Date.now(),nD(t)}rq(e)}function rD(e){e.g&&(rP(e),e.g.cancel(),e.g=null)}function rN(e){rD(e),e.u&&(e2.clearTimeout(e.u),e.u=null),rF(e),e.i.cancel(),e.m&&("number"==typeof e.m&&e2.clearTimeout(e.m),e.m=null)}function rk(e){if(!n5(e.i)&&!e.m){e.m=!0;var t=e.Na;tX||tZ(),tY||(tX(),tY=!0),tJ.add(t,e),e.C=0}}function rR(e,t){var n;n=t?t.m:e.W++;let r=nV(e.I);nj(r,"SID",e.K),nj(r,"RID",n),nj(r,"AID",e.V),rx(e,r),e.o&&e.s&&rI(r,e.o,e.s),n=new nw(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=rL(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),n8(e.i,n),nI(n,r,t)}function rx(e,t){e.na&&tD(e.na,function(e,n){nj(t,n,e)}),e.h&&nO({},function(e,n){nj(t,n,e)})}function rL(e,t,n){n=Math.min(e.j.length,n);var r=e.h?e3(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g,o=i[a].map;if(0>(n-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{nO(e,function(e,n){let i=e;e4(e)&&(i=tH(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function rO(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;tX||tZ(),tY||(tX(),tY=!0),tJ.add(t,e),e.A=0}}function rM(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=nh(e3(e.Ma,e),rB(e,e.A)),e.A++,!0)}function rP(e){null!=e.B&&(e2.clearTimeout(e.B),e.B=null)}function rV(e){e.g=new nw(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=nV(e.wa);nj(t,"RID","rpc"),nj(t,"SID",e.K),nj(t,"AID",e.V),nj(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&nj(t,"TO",e.qa),nj(t,"TYPE","xmlhttp"),rx(e,t),e.o&&e.s&&rI(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=nq(nV(t)),n.u=null,n.S=!0,nS(n,e)}function rF(e){null!=e.v&&(e2.clearTimeout(e.v),e.v=null)}function rU(e,t){var n=null;if(e.g==t){rF(e),rP(e),e.g=null;var r=2}else{if(!n7(e.i,t))return;n=t.F,re(e.i,t),r=1}if(0!=e.H){if(t.i){if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i,s=e.C;tK(r=nr(),new nl(r,n)),rk(e)}else rO(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==r&&(i=t,!(n3(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=nh(e3(e.Na,e,i),rB(e,e.C)),e.C++,!0)))||2==r&&rM(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:rj(e,5);break;case 4:rj(e,10);break;case 3:rj(e,6);break;default:rj(e,2)}}}function rB(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function rj(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=e3(e.pb,e);n||(n=new nP("//www.google.com/images/cleardot.gif"),e2.location&&"http"==e2.location.protocol||nF(n,"https"),nq(n)),function(e,t){let n=new t8;if(e2.Image){let r=new Image;r.onload=e7(ri,n,r,"TestLoadImage: loaded",!0,t),r.onerror=e7(ri,n,r,"TestLoadImage: error",!1,t),r.onabort=e7(ri,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=e7(ri,n,r,"TestLoadImage: timeout",!1,t),e2.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else no(2);e.H=0,e.h&&e.h.za(t),rq(e),rN(e)}function rq(e){if(e.H=0,e.ma=[],e.h){let t=rt(e.i);(0!=t.length||0!=e.j.length)&&(tr(e.ma,t),tr(e.ma,e.j),e.i.i.length=0,tn(e.j),e.j.length=0),e.h.ya()}}function r$(e,t,n){var r=n instanceof nP?nV(n):new nP(n);if(""!=r.g)t&&(r.g=t+"."+r.g),nU(r,r.m);else{var i=e2.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new nP(null);r&&nF(s,r),t&&(s.g=t),i&&nU(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&nj(r,n,t),nj(r,"VER",e.ra),rx(e,r),r}function rz(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new rd(e.Ha&&!e.va?new rs({ob:n}):e.va)).Oa(e.J),t}function rK(){}function rG(){if(tc&&!(10<=Number(t_)))throw Error("Environmental error: no available transport.")}function rH(e,t){tz.call(this),this.g=new rC(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ta(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ta(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new rX(this)}function rQ(e){nm.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function rW(){ny.call(this),this.status=1}function rX(e){this.g=e}function rY(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function rJ(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function rZ(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(eZ=rd.prototype).Oa=function(e){this.M=e},eZ.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():h.g(),this.C=this.u?nf(this.u):nf(h),this.g.onreadystatechange=e3(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){rm(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[s,a]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=e2.FormData&&e instanceof e2.FormData,!(0<=tt(rg,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;rE(this),0<this.B&&((this.L=(s=this.g,tc&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=e3(this.ua,this)):this.A=t9(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){rm(this,e)}},eZ.ua=function(){void 0!==e1&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tK(this,"timeout"),this.abort(8))},eZ.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tK(this,"complete"),tK(this,"abort"),rw(this))},eZ.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rw(this,!0)),rd.$.N.call(this)},eZ.La=function(){this.s||(this.G||this.v||this.l?rv(this):this.kb())},eZ.kb=function(){rv(this)},eZ.isActive=function(){return!!this.g},eZ.da=function(){try{return 2<r_(this)?this.g.status:-1}catch(e){return -1}},eZ.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},eZ.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),rc(t)}},eZ.Ia=function(){return this.m},eZ.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(eZ=rC.prototype).ra=8,eZ.H=1,eZ.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new nw(this,this.l,e),s=this.s;if(this.U&&(s?tR(s=tN(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=rL(this,i,t),nj(n=nV(this.I),"RID",e),nj(n,"CVER",22),this.F&&nj(n,"X-HTTP-Session-Id",this.F),rx(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(rT(s)))+"&"+t:this.o&&rI(n,this.o,s)),n8(this.i,i),this.bb&&nj(n,"TYPE","init"),this.P?(nj(n,"$req",t),nj(n,"SID","null"),i.aa=!0,nI(i,n,null)):nI(i,n,t),this.H=2}}else 3==this.H&&(e?rR(this,e):0==this.j.length||n5(this.i)||rR(this))}},eZ.Ma=function(){if(this.u=null,rV(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=nh(e3(this.jb,this),e)}},eZ.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,no(10),rD(this),rV(this))},eZ.ib=function(){null!=this.v&&(this.v=null,rD(this),rM(this),no(19))},eZ.pb=function(e){e?(this.l.info("Successfully pinged google.com"),no(2)):(this.l.info("Failed to ping google.com"),no(1))},eZ.isActive=function(){return!!this.h&&this.h.isActive(this)},(eZ=rK.prototype).Ba=function(){},eZ.Aa=function(){},eZ.za=function(){},eZ.ya=function(){},eZ.isActive=function(){return!0},eZ.Va=function(){},rG.prototype.g=function(e,t){return new rH(e,t)},e8(rH,tz),rH.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;no(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=r$(e,null,e.Y),rk(e)},rH.prototype.close=function(){rA(this.g)},rH.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=tH(e),e=n);t.j.push(new n9(t.fb++,e)),3==t.H&&rk(t)},rH.prototype.N=function(){this.g.h=null,delete this.j,rA(this.g),delete this.g,rH.$.N.call(this)},e8(rQ,nm),e8(rW,ny),e8(rX,rK),rX.prototype.Ba=function(){tK(this.g,"a")},rX.prototype.Aa=function(e){tK(this.g,new rQ(e))},rX.prototype.za=function(e){tK(this.g,new rW)},rX.prototype.ya=function(){tK(this.g,"b")},e8(rY,function(){this.blockSize=-1}),rY.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},rY.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)rJ(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){rJ(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){rJ(this,r),i=0;break}}this.h=i,this.i+=t},rY.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var r0={};function r1(e){var t;return -128<=e&&128>e?(t=function(e){return new rZ([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(r0,e)?r0[e]:r0[e]=t(e)):new rZ([0|e],0>e?-1:0)}function r2(e){if(isNaN(e)||!isFinite(e))return r4;if(0>e)return r8(r2(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=r9;return new rZ(t,0)}var r9=4294967296,r4=r1(0),r6=r1(1),r5=r1(16777216);function r3(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function r7(e){return -1==e.h}function r8(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new rZ(n,~e.h).add(r6)}function ie(e,t){return e.add(r8(t))}function it(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ir(e,t){this.g=e,this.h=t}function ii(e,t){if(r3(t))throw Error("division by zero");if(r3(e))return new ir(r4,r4);if(r7(e))return t=ii(r8(e),t),new ir(r8(t.g),r8(t.h));if(r7(t))return t=ii(e,r8(t)),new ir(r8(t.g),t.h);if(30<e.g.length){if(r7(e)||r7(t))throw Error("slowDivide_ only works with positive integers.");for(var n=r6,r=t;0>=r.X(e);)n=is(n),r=is(r);var i=ia(n,1),s=ia(r,1);for(r=ia(r,2),n=ia(n,2);!r3(r);){var a=s.add(r);0>=a.X(e)&&(i=i.add(n),s=a),r=ia(r,1),n=ia(n,1)}return t=ie(e,i.R(t)),new ir(i,t)}for(i=r4;0<=e.X(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,r-48),a=(s=r2(n)).R(t);r7(a)||0<a.X(e);)n-=r,a=(s=r2(n)).R(t);r3(s)&&(s=r6),i=i.add(s),e=ie(e,a)}return new ir(i,e)}function is(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new rZ(n,e.h)}function ia(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new rZ(i,e.h)}(eZ=rZ.prototype).ea=function(){if(r7(this))return-r8(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:r9+r)*t,t*=r9}return e},eZ.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(r3(this))return"0";if(r7(this))return"-"+r8(this).toString(e);for(var t=r2(Math.pow(e,6)),n=this,r="";;){var i=ii(n,t).g,s=((0<(n=ie(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(r3(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},eZ.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},eZ.X=function(e){return r7(e=ie(this,e))?-1:r3(e)?0:1},eZ.abs=function(){return r7(this)?r8(this):this},eZ.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,s&=65535,a&=65535,n[i]=a<<16|s}return new rZ(n,-2147483648&n[n.length-1]?-1:0)},eZ.R=function(e){if(r3(this)||r3(e))return r4;if(r7(this))return r7(e)?r8(this).R(r8(e)):r8(r8(this).R(e));if(r7(e))return r8(this.R(r8(e)));if(0>this.X(r5)&&0>e.X(r5))return r2(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,a=65535&this.D(r),o=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=a*l,it(n,2*r+2*i),n[2*r+2*i+1]+=s*l,it(n,2*r+2*i+1),n[2*r+2*i+1]+=a*o,it(n,2*r+2*i+1),n[2*r+2*i+2]+=s*o,it(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new rZ(n,0)},eZ.gb=function(e){return ii(this,e).h},eZ.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new rZ(n,this.h&e.h)},eZ.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new rZ(n,this.h|e.h)},eZ.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new rZ(n,this.h^e.h)},rG.prototype.createWebChannel=rG.prototype.g,rH.prototype.send=rH.prototype.u,rH.prototype.open=rH.prototype.m,rH.prototype.close=rH.prototype.close,nu.NO_ERROR=0,nu.TIMEOUT=8,nu.HTTP_ERROR=6,nc.COMPLETE="complete",np.EventType=ng,ng.OPEN="a",ng.CLOSE="b",ng.ERROR="c",ng.MESSAGE="d",tz.prototype.listen=tz.prototype.O,rd.prototype.listenOnce=rd.prototype.P,rd.prototype.getLastError=rd.prototype.Sa,rd.prototype.getLastErrorCode=rd.prototype.Ia,rd.prototype.getStatus=rd.prototype.da,rd.prototype.getResponseJson=rd.prototype.Wa,rd.prototype.getResponseText=rd.prototype.ja,rd.prototype.send=rd.prototype.ha,rd.prototype.setWithCredentials=rd.prototype.Oa,rY.prototype.digest=rY.prototype.l,rY.prototype.reset=rY.prototype.reset,rY.prototype.update=rY.prototype.j,rZ.prototype.add=rZ.prototype.add,rZ.prototype.multiply=rZ.prototype.R,rZ.prototype.modulo=rZ.prototype.gb,rZ.prototype.compare=rZ.prototype.X,rZ.prototype.toNumber=rZ.prototype.ea,rZ.prototype.toString=rZ.prototype.toString,rZ.prototype.getBits=rZ.prototype.D,rZ.fromNumber=r2,rZ.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return r8(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=r2(Math.pow(n,8)),i=r4,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=r2(Math.pow(n,a)),i=i.R(a).add(r2(o))):i=(i=i.R(r)).add(r2(o))}return i};var io=e0.createWebChannelTransport=function(){return new rG},il=e0.getStatEventTarget=function(){return nr()},ih=e0.ErrorCode=nu,iu=e0.EventType=nc,ic=e0.Event=nt,id=e0.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};e0.FetchXmlHttpFactory=rs;var ip=e0.WebChannel=np,ig=e0.XhrIo=rd,im=e0.Md5=rY,iy=e0.Integer=rZ;let iv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}iw.UNAUTHENTICATED=new iw(null),iw.GOOGLE_CREDENTIALS=new iw("google-credentials-uid"),iw.FIRST_PARTY=new iw("first-party-uid"),iw.MOCK_USER=new iw("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iE="10.10.0",i_=new eh("@firebase/firestore");function ib(){return i_.logLevel}function iT(e,...t){if(i_.logLevel<=eJ.DEBUG){let n=t.map(iC);i_.debug(`Firestore (${iE}): ${e}`,...n)}}function iI(e,...t){if(i_.logLevel<=eJ.ERROR){let n=t.map(iC);i_.error(`Firestore (${iE}): ${e}`,...n)}}function iS(e,...t){if(i_.logLevel<=eJ.WARN){let n=t.map(iC);i_.warn(`Firestore (${iE}): ${e}`,...n)}}function iC(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(e="Unexpected state"){let t=`FIRESTORE (${iE}) INTERNAL ASSERTION FAILED: `+e;throw iI(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iD={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class iN extends Q{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ix{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(iw.UNAUTHENTICATED))}shutdown(){}}class iL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iO{constructor(e){this.t=e,this.currentUser=iw.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new ik;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ik,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{iT("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(iT("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ik)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(iT("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||iA(),new iR(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||iA(),new iw(e)}}class iM{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=iw.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class iP{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new iM(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(iw.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iF{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&iT("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,iT("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{iT("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):iT("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||iA(),this.R=e.token,new iV(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function iB(e,t){return e<t?-1:e>t?1:0}function ij(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new iN(iD.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new iN(iD.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return iq.fromMillis(Date.now())}static fromDate(e){return iq.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new iq(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?iB(this.nanoseconds,e.nanoseconds):iB(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e){this.timestamp=e}static fromTimestamp(e){return new i$(e)}static min(){return new i$(new iq(0,0))}static max(){return new i$(new iq(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(e,t,n){void 0===t?t=0:t>e.length&&iA(),void 0===n?n=e.length-t:n>e.length-t&&iA(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===iz.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof iz?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class iK extends iz{construct(e,t,n){return new iK(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new iN(iD.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new iK(t)}static emptyPath(){return new iK([])}}let iG=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class iH extends iz{construct(e,t,n){return new iH(e,t,n)}static isValidIdentifier(e){return iG.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),iH.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new iH(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new iN(iD.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new iN(iD.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new iN(iD.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new iN(iD.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new iH(t)}static emptyPath(){return new iH([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iQ{constructor(e){this.path=e}static fromPath(e){return new iQ(iK.fromString(e))}static fromName(e){return new iQ(iK.fromString(e).popFirst(5))}static empty(){return new iQ(iK.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===iK.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return iK.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new iQ(new iK(e.slice()))}}class iW{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new iW(i$.min(),iQ.empty(),-1)}static max(){return new iW(i$.max(),iQ.empty(),-1)}}class iX{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iY(e){if(e.code!==iD.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;iT("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&iA(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new iJ((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof iJ?t:iJ.resolve(t)}catch(e){return iJ.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):iJ.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):iJ.reject(t)}static resolve(e){return new iJ((t,n)=>{t(e)})}static reject(e){return new iJ((t,n)=>{n(e)})}static waitFor(e){return new iJ((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=iJ.resolve(!1);for(let n of e)t=t.next(e=>e?iJ.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new iJ((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new iJ((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ik,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new i2(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=i3(t.target.error);this.V.reject(new i2(e,n))}}static open(e,t,n,r){try{return new iZ(t,e.transaction(r,n))}catch(e){throw new i2(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(iT("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new i4(this.transaction.objectStore(e))}}class i0{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===i0.S(G())&&iI("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return iT("SimpleDb","Removing database:",e),i6(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!H())return!1;if(i0.C())return!0;let e=G(),t=i0.S(e),n=i0.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==w&&"YES"===(null===(e=w.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(iT("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new i2(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new iN(iD.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new iN(iD.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new i2(e,r))},r.onupgradeneeded=e=>{iT("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next(()=>{iT("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=iZ.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),iJ.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(iT("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class i1{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return i6(this.k.delete())}}class i2 extends iN{constructor(e,t){super(iD.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function i9(e){return"IndexedDbTransactionError"===e.name}class i4{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(iT("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(iT("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),i6(n)}add(e){return iT("SimpleDb","ADD",this.store.name,e,e),i6(this.store.add(e))}get(e){return i6(this.store.get(e)).next(t=>(void 0===t&&(t=null),iT("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return iT("SimpleDb","DELETE",this.store.name,e),i6(this.store.delete(e))}count(){return iT("SimpleDb","COUNT",this.store.name),i6(this.store.count())}W(e,t){let n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){let e=r.getAll(n.range);return new iJ((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.G(e,(e,n)=>{t.push(n)}).next(()=>t)}}j(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new iJ((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}H(e,t){iT("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.J=!1;let r=this.cursor(n);return this.G(r,(e,t,n)=>n.delete())}Y(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.G(r,t)}Z(e){let t=this.cursor({});return new iJ((n,r)=>{t.onerror=e=>{r(i3(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}G(e,t){let n=[];return new iJ((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new i1(i),a=t(i.primaryKey,i.value,s);if(a instanceof iJ){let e=a.catch(e=>(s.done(),iJ.reject(e)));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}}).next(()=>iJ.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function i6(e){return new iJ((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(i3(e.target.error))}})}let i5=!1;function i3(e){let t=i0.S(G());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new iN("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return i5||(i5=!0,setTimeout(()=>{throw e},0)),e}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i7{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function i8(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function st(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function sn(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}i7._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.comparator=e,this.root=t||ss.EMPTY}insert(e,t){return new sr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ss.BLACK,null,null))}remove(e){return new sr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ss.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new si(this.root,e,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new si(this.root,e,this.comparator,!0)}}class si{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ss{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ss.RED,this.left=null!=r?r:ss.EMPTY,this.right=null!=i?i:ss.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ss(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ss.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ss.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ss.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ss.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw iA();let e=this.left.check();if(e!==this.right.check())throw iA();return e+(this.isRed()?0:1)}}ss.EMPTY=null,ss.RED=!0,ss.BLACK=!1,ss.EMPTY=new class{constructor(){this.size=0}get key(){throw iA()}get value(){throw iA()}get color(){throw iA()}get left(){throw iA()}get right(){throw iA()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ss(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.comparator=e,this.data=new sr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new so(this.data.getIterator())}getIteratorFrom(e){return new so(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof sa)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new sa(this.comparator);return t.data=e,t}}class so{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.fields=e,e.sort(iH.comparator)}static empty(){return new sl([])}unionWith(e){let t=new sa(iH.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new sl(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ij(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.binaryString=e}static fromBase64String(e){return new su(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new sh("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new su(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return iB(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}su.EMPTY_BYTE_STRING=new su("");let sc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sd(e){if(e||iA(),"string"==typeof e){let t=0,n=sc.exec(e);if(n||iA(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:sf(e.seconds),nanos:sf(e.nanos)}}function sf(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function sp(e){return"string"==typeof e?su.fromBase64String(e):su.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function sm(e){let t=e.mapValue.fields.__previous_value__;return sg(t)?sm(t):t}function sy(e){let t=sd(e.mapValue.fields.__local_write_time__.timestampValue);return new iq(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class sw{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sw("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof sw&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sE={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function s_(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?sg(e)?4:sO(e)?9007199254740991:10:iA()}function sb(e,t){if(e===t)return!0;let n=s_(e);if(n!==s_(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return sy(e).isEqual(sy(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=sd(e.timestampValue),r=sd(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return sp(e.bytesValue).isEqual(sp(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return sf(e.geoPointValue.latitude)===sf(t.geoPointValue.latitude)&&sf(e.geoPointValue.longitude)===sf(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return sf(e.integerValue)===sf(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=sf(e.doubleValue),r=sf(t.doubleValue);return n===r?i8(n)===i8(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ij(e.arrayValue.values||[],t.arrayValue.values||[],sb);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(se(n)!==se(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!sb(n[e],r[e])))return!1;return!0}(e,t);default:return iA()}}function sT(e,t){return void 0!==(e.values||[]).find(e=>sb(e,t))}function sI(e,t){if(e===t)return 0;let n=s_(e),r=s_(t);if(n!==r)return iB(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return iB(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=sf(e.integerValue||e.doubleValue),r=sf(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return sS(e.timestampValue,t.timestampValue);case 4:return sS(sy(e),sy(t));case 5:return iB(e.stringValue,t.stringValue);case 6:return function(e,t){let n=sp(e),r=sp(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=iB(n[e],r[e]);if(0!==t)return t}return iB(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=iB(sf(e.latitude),sf(t.latitude));return 0!==n?n:iB(sf(e.longitude),sf(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=sI(n[e],r[e]);if(t)return t}return iB(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===sE.mapValue&&t===sE.mapValue)return 0;if(e===sE.mapValue)return 1;if(t===sE.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=iB(r[e],s[e]);if(0!==t)return t;let a=sI(n[r[e]],i[s[e]]);if(0!==a)return a}return iB(r.length,s.length)}(e.mapValue,t.mapValue);default:throw iA()}}function sS(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return iB(e,t);let n=sd(e),r=sd(t),i=iB(n.seconds,r.seconds);return 0!==i?i:iB(n.nanos,r.nanos)}function sC(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=sd(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?sp(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,iQ.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=sC(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${sC(e.fields[i])}`;return n+"}"}(e.mapValue):iA()}function sA(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function sD(e){return!!e&&"integerValue"in e}function sN(e){return!!e&&"arrayValue"in e}function sk(e){return!!e&&"nullValue"in e}function sR(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function sx(e){return!!e&&"mapValue"in e}function sL(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return st(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=sL(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=sL(e.arrayValue.values[n]);return t}return Object.assign({},e)}function sO(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.value=e}static empty(){return new sM({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!sx(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sL(t)}setAll(e){let t=iH.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=sL(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());sx(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sb(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];sx(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(st(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new sM(sL(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new sP(e,0,i$.min(),i$.min(),i$.min(),sM.empty(),0)}static newFoundDocument(e,t,n,r){return new sP(e,1,t,i$.min(),n,r,0)}static newNoDocument(e,t){return new sP(e,2,t,i$.min(),i$.min(),sM.empty(),0)}static newUnknownDocument(e,t){return new sP(e,3,t,i$.min(),i$.min(),sM.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(i$.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sM.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sM.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=i$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof sP&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sP(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,t){this.position=e,this.inclusive=t}}function sF(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?iQ.comparator(iQ.fromName(a.referenceValue),n.key):sI(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function sU(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!sb(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{}class sq extends sj{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new sG(e,t,n):"array-contains"===t?new sX(e,n):"in"===t?new sY(e,n):"not-in"===t?new sJ(e,n):"array-contains-any"===t?new sZ(e,n):new sq(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new sH(e,n):new sQ(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(sI(t,this.value)):null!==t&&s_(this.value)===s_(t)&&this.matchesComparison(sI(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return iA()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class s$ extends sj{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new s$(e,t)}matches(e){return sz(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function sz(e){return"and"===e.op}function sK(e){for(let t of e.filters)if(t instanceof s$)return!1;return!0}class sG extends sq{constructor(e,t,n){super(e,t,n),this.key=iQ.fromName(n.referenceValue)}matches(e){let t=iQ.comparator(e.key,this.key);return this.matchesComparison(t)}}class sH extends sq{constructor(e,t){super(e,"in",t),this.keys=sW("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sQ extends sq{constructor(e,t){super(e,"not-in",t),this.keys=sW("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sW(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>iQ.fromName(e.referenceValue))}class sX extends sq{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return sN(t)&&sT(t.arrayValue,this.value)}}class sY extends sq{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&sT(this.value.arrayValue,t)}}class sJ extends sq{constructor(e,t){super(e,"not-in",t)}matches(e){if(sT(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!sT(this.value.arrayValue,t)}}class sZ extends sq{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!sN(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>sT(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function s1(e,t=null,n=[],r=[],i=null,s=null,a=null){return new s0(e,t,n,r,i,s,a)}function s2(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof sq)return t.field.canonicalString()+t.op.toString()+sC(t.value);if(sK(t)&&sz(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>sC(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>sC(e)).join(",")),e.ce=t}return e.ce}function s9(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof sq?n instanceof sq&&t.op===n.op&&t.field.isEqual(n.field)&&sb(t.value,n.value):t instanceof s$?n instanceof s$&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void iA()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sU(e.startAt,t.startAt)&&sU(e.endAt,t.endAt)}function s4(e){return iQ.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function s5(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function s3(e){return null!==e.collectionGroup}function s7(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new sa(iH.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new sB(t,r))}),n.has(iH.keyField().canonicalString())||e.le.push(new sB(iH.keyField(),r))}return e.le}function s8(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return s1(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new sB(e.field,t)});let n=e.endAt?new sV(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new sV(e.startAt.position,e.startAt.inclusive):null;return s1(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,s7(e))),e.he}function ae(e,t){let n=e.filters.concat([t]);return new s6(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function at(e,t,n){return new s6(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function an(e,t){return s9(s8(e),s8(t))&&e.limitType===t.limitType}function ar(e){return`${s2(s8(e))}|lt:${e.limitType}`}function ai(e){var t;let n;return`Query(target=${n=(t=s8(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof sq?`${t.field.canonicalString()} ${t.op} ${sC(t.value)}`:t instanceof s$?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>sC(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>sC(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function as(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):iQ.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of s7(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=sF(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,s7(e),t))&&(!e.endAt||!!function(e,t,n){let r=sF(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,s7(e),t))}function aa(e){return(t,n)=>{let r=!1;for(let i of s7(e)){let e=function(e,t,n){let r=e.field.isKeyField()?iQ.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?sI(r,i):iA()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return iA()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){st(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return sn(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al=new sr(iQ.comparator),ah=new sr(iQ.comparator);function au(...e){let t=ah;for(let n of e)t=t.insert(n.key,n);return t}function ac(e){let t=ah;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ad(){return new ao(e=>e.toString(),(e,t)=>e.isEqual(t))}let af=new sr(iQ.comparator),ap=new sa(iQ.comparator);function ag(...e){let t=ap;for(let n of e)t=t.add(n);return t}let am=new sa(iB);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:i8(t)?"-0":t}}function av(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this._=void 0}}function aE(e,t){return e instanceof aC?sD(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class a_ extends aw{}class ab extends aw{constructor(e){super(),this.elements=e}}function aT(e,t){let n=aD(t);for(let t of e.elements)n.some(e=>sb(e,t))||n.push(t);return{arrayValue:{values:n}}}class aI extends aw{constructor(e){super(),this.elements=e}}function aS(e,t){let n=aD(t);for(let t of e.elements)n=n.filter(e=>!sb(e,t));return{arrayValue:{values:n}}}class aC extends aw{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function aA(e){return sf(e.integerValue||e.doubleValue)}function aD(e){return sN(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,t){this.field=e,this.transform=t}}class ak{constructor(e,t){this.version=e,this.transformResults=t}}class aR{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new aR}static exists(e){return new aR(void 0,e)}static updateTime(e){return new aR(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ax(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class aL{}function aO(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new aq(e.key,aR.none()):new aV(e.key,e.data,aR.none());{let n=e.data,r=sM.empty(),i=new sa(iH.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new aF(e.key,r,new sl(i.toArray()),aR.none())}}function aM(e,t,n,r){return e instanceof aV?function(e,t,n,r){if(!ax(e.precondition,t))return n;let i=e.value.clone(),s=aj(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof aF?function(e,t,n,r){if(!ax(e.precondition,t))return n;let i=aj(e.fieldTransforms,r,t),s=t.data;return(s.setAll(aU(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):ax(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function aP(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&ij(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ab&&r instanceof ab||n instanceof aI&&r instanceof aI?ij(n.elements,r.elements,sb):n instanceof aC&&r instanceof aC?sb(n.Ie,r.Ie):n instanceof a_&&r instanceof a_)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class aV extends aL{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class aF extends aL{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aU(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function aB(e,t,n){var r;let i=new Map;e.length===n.length||iA();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof ab?aT(o,l):o instanceof aI?aS(o,l):r))}return i}function aj(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof a_?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&sg(t)&&(t=sm(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof ab?aT(e,s):e instanceof aI?aS(e,s):function(e,t){let n=aE(e,t),r=aA(n)+aA(e.Ie);return sD(n)&&sD(e.Ie)?av(r):ay(e.serializer,r)}(e,s))}return r}class aq extends aL{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a$ extends aL{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof aV?function(e,t,n){let r=e.value.clone(),i=aB(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof aF?function(e,t,n){if(!ax(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=aB(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(aU(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=aM(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=aM(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ad();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=aO(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(i$.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ag())}isEqual(e){return this.batchId===e.batchId&&ij(this.mutations,e.mutations,(e,t)=>aP(e,t))&&ij(this.baseMutations,e.baseMutations,(e,t)=>aP(e,t))}}class aK{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||iA();let r=af,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new aK(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aG{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(e,t){this.count=e,this.unchangedNames=t}}function aQ(e){if(void 0===e)return iI("GRPC error has no .code"),iD.UNKNOWN;switch(e){case u.OK:return iD.OK;case u.CANCELLED:return iD.CANCELLED;case u.UNKNOWN:return iD.UNKNOWN;case u.DEADLINE_EXCEEDED:return iD.DEADLINE_EXCEEDED;case u.RESOURCE_EXHAUSTED:return iD.RESOURCE_EXHAUSTED;case u.INTERNAL:return iD.INTERNAL;case u.UNAVAILABLE:return iD.UNAVAILABLE;case u.UNAUTHENTICATED:return iD.UNAUTHENTICATED;case u.INVALID_ARGUMENT:return iD.INVALID_ARGUMENT;case u.NOT_FOUND:return iD.NOT_FOUND;case u.ALREADY_EXISTS:return iD.ALREADY_EXISTS;case u.PERMISSION_DENIED:return iD.PERMISSION_DENIED;case u.FAILED_PRECONDITION:return iD.FAILED_PRECONDITION;case u.ABORTED:return iD.ABORTED;case u.OUT_OF_RANGE:return iD.OUT_OF_RANGE;case u.UNIMPLEMENTED:return iD.UNIMPLEMENTED;case u.DATA_LOSS:return iD.DATA_LOSS;default:return iA()}}(c=u||(u={}))[c.OK=0]="OK",c[c.CANCELLED=1]="CANCELLED",c[c.UNKNOWN=2]="UNKNOWN",c[c.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",c[c.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",c[c.NOT_FOUND=5]="NOT_FOUND",c[c.ALREADY_EXISTS=6]="ALREADY_EXISTS",c[c.PERMISSION_DENIED=7]="PERMISSION_DENIED",c[c.UNAUTHENTICATED=16]="UNAUTHENTICATED",c[c.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",c[c.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",c[c.ABORTED=10]="ABORTED",c[c.OUT_OF_RANGE=11]="OUT_OF_RANGE",c[c.UNIMPLEMENTED=12]="UNIMPLEMENTED",c[c.INTERNAL=13]="INTERNAL",c[c.UNAVAILABLE=14]="UNAVAILABLE",c[c.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aW=new iy([4294967295,4294967295],0);function aX(e){let t=(new TextEncoder).encode(e),n=new im;return n.update(t),new Uint8Array(n.digest())}function aY(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new iy([n,r],0),new iy([i,s],0)]}class aJ{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new aZ(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new aZ(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new aZ(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=iy.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(iy.fromNumber(n)));return 1===r.compare(aW)&&(r=new iy([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=aY(aX(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ae(r))return!1}return!0}static create(e,t,n){let r=new aJ(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=aY(aX(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Re(r)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class aZ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,a1.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new a0(i$.min(),r,new sr(iB),al,ag())}}class a1{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new a1(n,t,ag(),ag(),ag())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class a9{constructor(e,t){this.targetId=e,this.fe=t}}class a4{constructor(e,t,n=su.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class a6{constructor(){this.ge=0,this.pe=a7(),this.ye=su.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ag(),t=ag(),n=ag();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:iA()}}),new a1(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=a7()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||iA()}Le(){this.Se=!0,this.we=!0}}class a5{constructor(e){this.Be=e,this.ke=new Map,this.qe=al,this.Qe=a3(),this.Ke=new sr(iB)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:iA()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){let i=r.target;if(s4(i)){if(0===n){let e=new iQ(i.path);this.We(t,e,sP.newNoDocument(e,i$.min()))}else 1===n||iA()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let r=e.fe.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=sp(i).toUint8Array()}catch(e){if(e instanceof sh)return iS("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new aJ(t,s,a)}catch(e){return iS(e instanceof aZ?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Be.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.ke.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&s4(i.target)){let t=new iQ(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,sP.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}});let n=ag();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let r=new a0(e,t,this.Ke,this.qe,n);return this.qe=al,this.Qe=a3(),this.Ke=new sr(iB),r}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new a6,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new sa(iB),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||iT("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new a6),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function a3(){return new sr(iQ.comparator)}function a7(){return new sr(iQ.comparator)}let a8={asc:"ASCENDING",desc:"DESCENDING"},oe={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ot={and:"AND",or:"OR"};class on{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function or(e,t){return e.useProto3Json||null==t?t:{value:t}}function oi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function os(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function oa(e){return e||iA(),i$.fromTimestamp(function(e){let t=sd(e);return new iq(t.seconds,t.nanos)}(e))}function oo(e,t){return ol(e,t).canonicalString()}function ol(e,t){let n=new iK(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function oh(e){let t=iK.fromString(e);return ov(t)||iA(),t}function ou(e,t){return oo(e.databaseId,t.path)}function oc(e,t){let n=oh(t);if(n.get(1)!==e.databaseId.projectId)throw new iN(iD.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new iN(iD.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new iQ(op(n))}function od(e,t){return oo(e.databaseId,t)}function of(e){return new iK(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function op(e){return e.length>4&&"documents"===e.get(4)||iA(),e.popFirst(5)}function og(e,t,n){return{name:ou(e,t),fields:n.value.mapValue.fields}}function om(e){return{fieldPath:e.canonicalString()}}function oy(e){return iH.fromServerFormat(e.fieldPath)}function ov(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,n,r,i=i$.min(),s=i$.min(),a=su.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new ow(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ow(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ow(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ow(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(sf(e.integerValue));else if("doubleValue"in e){let n=sf(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),i8(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(sp(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?sO(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):iA()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),iQ.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}o_.bt=new o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this._n=new oT}addToCollectionParentIndex(e,t){return this._n.add(t),iJ.resolve()}getCollectionParents(e,t){return iJ.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return iJ.resolve()}deleteFieldIndex(e,t){return iJ.resolve()}deleteAllFieldIndexes(e){return iJ.resolve()}createTargetIndexes(e,t){return iJ.resolve()}getDocumentsMatchingTarget(e,t){return iJ.resolve(null)}getIndexType(e,t){return iJ.resolve(0)}getFieldIndexes(e,t){return iJ.resolve([])}getNextCollectionGroupToUpdate(e){return iJ.resolve(null)}getMinOffset(e,t){return iJ.resolve(iW.min())}getMinOffsetFromCollectionGroup(e,t){return iJ.resolve(iW.min())}updateCollectionGroup(e,t,n){return iJ.resolve()}updateIndexEntries(e,t){return iJ.resolve()}}class oT{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new sa(iK.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new sa(iK.comparator)).toArray()}}new Uint8Array(0);class oI{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new oI(e,oI.DEFAULT_COLLECTION_PERCENTILE,oI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oI.DEFAULT_COLLECTION_PERCENTILE=10,oI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oI.DEFAULT=new oI(41943040,oI.DEFAULT_COLLECTION_PERCENTILE,oI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oI.DISABLED=new oI(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new oS(0)}static Ln(){return new oS(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.changes=new ao(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sP.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?iJ.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&aM(n.mutation,e,sl.empty(),iq.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ag()).next(()=>t))}getLocalViewOfDocuments(e,t,n=ag()){let r=ad();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=au();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=ad();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ag()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=al,s=ad(),a=ad();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof aF)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),aM(a.mutation,t,a.mutation.getFieldMask(),iq.now())):s.set(t.key,sl.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new oA(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ad(),r=new sr((e,t)=>e-t),i=ag();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||sl.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||ag()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,h=ad();l.forEach(e=>{if(!i.has(e)){let r=aO(t.get(e),n.get(e));null!==r&&h.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return iJ.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return iQ.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):s3(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):iJ.resolve(ad()),a=-1,o=i;return s.next(t=>iJ.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?iJ.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,ag())).next(e=>({batchId:a,changes:ac(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new iQ(t)).next(e=>{let t=au();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=au();return this.indexManager.getCollectionParents(e,i).next(a=>iJ.forEach(a,a=>{let o=new s6(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,sP.newInvalidDocument(r)))});let n=au();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&aM(s.mutation,r,sl.empty(),iq.now()),as(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return iJ.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:oa(t.createTime)}),iJ.resolve()}getNamedQuery(e,t){return iJ.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=oh(e);return 4===t.length?iK.emptyPath():op(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||iA();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=oy(e.unaryFilter.field);return sq.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=oy(e.unaryFilter.field);return sq.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=oy(e.unaryFilter.field);return sq.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=oy(e.unaryFilter.field);return sq.create(i,"!=",{nullValue:"NULL_VALUE"});default:return iA()}}(t):void 0!==t.fieldFilter?sq.create(oy(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return iA()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?s$.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return iA()}}(t.compositeFilter.op)):iA()}(e);return n instanceof s$&&sK(t=n)&&sz(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new sB(oy(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;i.limit&&(h=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let u=null;i.startAt&&(u=function(e){let t=!!e.before;return new sV(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new sV(e.values||[],t)}(i.endAt)),new s6(r,a,l,o,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?at(t,t.limit,"L"):t}(t.bundledQuery),readTime:oa(t.readTime)}),iJ.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.overlays=new sr(iQ.comparator),this.hr=new Map}getOverlay(e,t){return iJ.resolve(this.overlays.get(t))}getOverlays(e,t){let n=ad();return iJ.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),iJ.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),iJ.resolve()}getOverlaysForCollection(e,t,n){let r=ad(),i=t.length+1,s=new iQ(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return iJ.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new sr((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ad(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ad(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return iJ.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new aG(t,n));let i=this.hr.get(t);void 0===i&&(i=ag(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.Pr=new sa(ox.Ir),this.Tr=new sa(ox.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new ox(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new ox(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new iQ(new iK([])),n=new ox(t,e),r=new ox(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new iQ(new iK([])),n=new ox(t,e),r=new ox(t,e+1),i=ag();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new ox(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ox{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return iQ.comparator(e.key,t.key)||iB(e.pr,t.pr)}static Er(e,t){return iB(e.pr,t.pr)||iQ.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new sa(ox.Ir)}checkEmpty(e){return iJ.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new az(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.wr=this.wr.add(new ox(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return iJ.resolve(s)}lookupMutationBatch(e,t){return iJ.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),r=n<0?0:n;return iJ.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return iJ.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return iJ.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new ox(t,0),r=new ox(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],e=>{let t=this.Sr(e.pr);i.push(t)}),iJ.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new sa(iB);return t.forEach(e=>{let t=new ox(e,0),r=new ox(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],e=>{n=n.add(e.pr)})}),iJ.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;iQ.isDocumentKey(i)||(i=i.child(""));let s=new ox(new iQ(i),0),a=new sa(iB);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0)},s),iJ.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||iA(),this.mutationQueue.shift();let n=this.wr;return iJ.forEach(t.mutations,r=>{let i=new ox(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new ox(t,0),r=this.wr.firstAfterOrEqual(n);return iJ.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,iJ.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.vr=e,this.docs=new sr(iQ.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return iJ.resolve(n?n.document.mutableCopy():sP.newInvalidDocument(t))}getEntries(e,t){let n=al;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():sP.newInvalidDocument(e))}),iJ.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=al,s=t.path,a=new iQ(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=iQ.comparator(e.documentKey,t.documentKey))?n:iB(e.largestBatchId,t.largestBatchId)}(new iW(a.readTime,a.key,-1),n)||(r.has(a.key)||as(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return iJ.resolve(i)}getAllFromCollectionGroup(e,t,n,r){iA()}Fr(e,t){return iJ.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new oM(this)}getSize(e){return iJ.resolve(this.size)}}class oM extends oC{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)}),iJ.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.persistence=e,this.Mr=new ao(e=>s2(e),s9),this.lastRemoteSnapshotVersion=i$.min(),this.highestTargetId=0,this.Or=0,this.Nr=new oR,this.targetCount=0,this.Lr=oS.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),iJ.resolve()}getLastRemoteSnapshotVersion(e){return iJ.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return iJ.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),iJ.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),iJ.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new oS(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,iJ.resolve()}updateTargetData(e,t){return this.qn(t),iJ.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,iJ.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),iJ.waitFor(i).next(()=>r)}getTargetCount(e){return iJ.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return iJ.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),iJ.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),iJ.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),iJ.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return iJ.resolve(n)}containsKey(e,t){return iJ.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,t){this.Br={},this.overlays={},this.kr=new i7(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new oP(this),this.indexManager=new ob,this.remoteDocumentCache=new oO(e=>this.referenceDelegate.Kr(e)),this.serializer=new oE(t),this.$r=new oN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ok,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new oL(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){iT("MemoryPersistence","Starting transaction:",e);let r=new oF(this.kr.next());return this.referenceDelegate.Ur(),n(r).next(e=>this.referenceDelegate.Wr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gr(e,t){return iJ.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}class oF extends iX{constructor(e){super(),this.currentSequenceNumber=e}}class oU{constructor(e){this.persistence=e,this.zr=new oR,this.jr=null}static Hr(e){return new oU(e)}get Jr(){if(this.jr)return this.jr;throw iA()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),iJ.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),iJ.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),iJ.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return iJ.forEach(this.Jr,n=>{let r=iQ.fromPath(n);return this.Yr(e,r).next(e=>{e||t.removeEntry(r,i$.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return iJ.or([()=>iJ.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=ag(),r=ag();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new oB(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oq{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=!function(){var e;let t=null===(e=j())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(p.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:i0.v(G())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ji(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Hi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new oj;return this.Ji(e,t,n).next(r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)})}).next(()=>i.result)}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(ib()<=eJ.DEBUG&&iT("QueryEngine","SDK will not create cache indexes for query:",ai(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),iJ.resolve()):(ib()<=eJ.DEBUG&&iT("QueryEngine","Query:",ai(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(ib()<=eJ.DEBUG&&iT("QueryEngine","The SDK decides to create cache indexes for query:",ai(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,s8(t))):iJ.resolve())}ji(e,t){if(s5(t))return iJ.resolve(null);let n=s8(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=s8(t=at(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=ag(...r);return this.zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,at(t,null,"F")):this.es(e,s,t,n)}))})))}Hi(e,t,n,r){return s5(t)||r.isEqual(i$.min())?iJ.resolve(null):this.zi.getDocuments(e,n).next(i=>{let s=this.Zi(t,i);return this.Xi(t,s,n,r)?iJ.resolve(null):(ib()<=eJ.DEBUG&&iT("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ai(t)),this.es(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new iW(i$.fromTimestamp(1e9===r?new iq(n+1,0):new iq(n,r)),iQ.empty(),-1)}(r,0)).next(e=>e))})}Zi(e,t){let n=new sa(aa(e));return t.forEach((t,r)=>{as(e,r)&&(n=n.add(r))}),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return ib()<=eJ.DEBUG&&iT("QueryEngine","Using full collection scan to execute query:",ai(t)),this.zi.getDocumentsMatchingQuery(e,t,iW.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new sr(iB),this.rs=new ao(e=>s2(e),s9),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}async function oz(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=ag();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({us:e,removedBatchIds:i,addedBatchIds:s}))})})}function oK(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function oG(e,t,n){let r=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!i9(e))throw e;iT("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ns=e.ns.remove(t),e.rs.delete(r.target)}function oH(e,t,n){let r=i$.min(),i=ag();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.rs.get(n);return void 0!==r?iJ.resolve(e.ns.get(r)):e.Qr.getTargetData(t,n)})(e,s,s8(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?r:i$.min(),n?i:ag())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(r)||i$.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ss.set(r,s),{documents:n,hs:i}}))}class oQ{constructor(){this.activeTargetIds=am}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class oW{constructor(){this.no=new oQ,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new oQ,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oX{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(iT("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(iT("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oJ=null;function oZ(){return null===oJ?oJ=268435456+Math.round(2147483648*Math.random()):oJ++,"0x"+oJ.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o2="WebChannelConnection";class o9 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){let s=oZ(),a=this.bo(e,t.toUriEncodedString());iT("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(o,r,i),this.Co(e,a,o,n).then(t=>(iT("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw iS("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+iE}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=o0[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){let i=oZ();return new Promise((s,a)=>{let o=new ig;o.setWithCredentials(!0),o.listenOnce(iu.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case ih.NO_ERROR:let t=o.getResponseJson();iT(o2,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case ih.TIMEOUT:iT(o2,`RPC '${e}' ${i} timed out`),a(new iN(iD.DEADLINE_EXCEEDED,"Request time out"));break;case ih.HTTP_ERROR:let n=o.getStatus();if(iT(o2,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(iD).indexOf(t)>=0?t:iD.UNKNOWN}(t.status);a(new iN(e,t.message))}else a(new iN(iD.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new iN(iD.UNAVAILABLE,"Connection failed."));break;default:iA()}}finally{iT(o2,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);iT(o2,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Fo(e,t,n){let r=oZ(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=io(),a=il(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Do(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let h=i.join("");iT(o2,`Creating RPC '${e}' stream ${r}: ${h}`,o);let c=s.createWebChannel(h,o),d=!1,f=!1,p=new o1({lo:t=>{f?iT(o2,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(iT(o2,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),iT(o2,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},ho:()=>c.close()}),g=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(c,ip.EventType.OPEN,()=>{f||iT(o2,`RPC '${e}' stream ${r} transport opened.`)}),g(c,ip.EventType.CLOSE,()=>{f||(f=!0,iT(o2,`RPC '${e}' stream ${r} transport closed`),p.Vo())}),g(c,ip.EventType.ERROR,t=>{f||(f=!0,iS(o2,`RPC '${e}' stream ${r} transport errored:`,t),p.Vo(new iN(iD.UNAVAILABLE,"The operation could not be completed")))}),g(c,ip.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||iA();let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){iT(o2,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=u[e];if(void 0!==t)return aQ(t)}(t),i=s.message;void 0===n&&(n=iD.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.Vo(new iN(n,i)),c.close()}else iT(o2,`RPC '${e}' stream ${r} received:`,i),p.mo(i)}}),g(a,ic.STAT_EVENT,t=>{t.stat===id.PROXY?iT(o2,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===id.NOPROXY&&iT(o2,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.Ro()},0),p}}function o4(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o6(e){return new on(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);r>0&&iT("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e,t,n,r,i,s,a,o){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new o5(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===iD.RESOURCE_EXHAUSTED?(iI(t.toString()),iI("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===iD.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Wo===t&&this.o_(e,n)},t=>{e(()=>{let e=new iN(iD.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)})})}o_(e,t){let n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{n(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(e=>{n(()=>this.__(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return iT("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(iT("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class o7 extends o3{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:iA(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||iA(),su.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||iA(),su.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new a4(s,a,o,l&&new iN(void 0===l.code?iD.UNKNOWN:aQ(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=oc(e,r.document.name),s=oa(r.document.updateTime),a=r.document.createTime?oa(r.document.createTime):i$.min(),o=new sM({mapValue:{fields:r.document.fields}}),l=sP.newFoundDocument(i,s,a,o);n=new a2(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=oc(e,r.document),s=r.readTime?oa(r.readTime):i$.min(),a=sP.newNoDocument(i,s);n=new a2([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=oc(e,r.document);n=new a2([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return iA();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new aH(r,i);n=new a9(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return i$.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?i$.min():t.readTime?oa(t.readTime):i$.min()}(e);return this.listener.u_(t,n)}c_(e){let t={};t.database=of(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=s4(r)?{documents:{documents:[od(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=od(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof sq?function(e){if("=="===e.op){if(sR(e.value))return{unaryFilter:{field:om(e.field),op:"IS_NAN"}};if(sk(e.value))return{unaryFilter:{field:om(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(sR(e.value))return{unaryFilter:{field:om(e.field),op:"IS_NOT_NAN"}};if(sk(e.value))return{unaryFilter:{field:om(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:om(e.field),op:oe[e.op],value:e.value}}}(t):t instanceof s$?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:ot[t.op],filters:n}}}(t):iA()}(s$.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:om(e.field),direction:a8[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=or(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ut:s,parent:i}}(e,r).ut}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=os(e,t.resumeToken);let r=or(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(i$.min())>0){n.readTime=oi(e,t.snapshotVersion.toTimestamp());let r=or(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return iA()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){let t={};t.database=of(this.serializer),t.removeTarget=e,this.t_(t)}}class o8 extends o3{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||iA(),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||iA(),t.map(e=>{let t;return(t=e.updateTime?oa(e.updateTime):oa(n)).isEqual(i$.min())&&(t=oa(n)),new ak(t,e.transformResults||[])})):[]),i=oa(e.commitTime);return this.listener.T_(i,r)}return e.writeResults&&0!==e.writeResults.length&&iA(),this.h_=!0,this.listener.E_()}d_(){let e={};e.database=of(this.serializer),this.t_(e)}I_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof aV)r={update:og(e,t.key,t.value)};else if(t instanceof aq)r={delete:ou(e,t.key)};else if(t instanceof aF)r={update:og(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof a$))return iA();r={verify:ou(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof a_)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ab)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof aI)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof aC)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw iA()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:oi(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:iA()),r})(this.serializer,e))};this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new iN(iD.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,ol(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===iD.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new iN(iD.UNKNOWN,e.toString())})}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,ol(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===iD.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new iN(iD.UNKNOWN,e.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class lt{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(iI(t),this.g_=!1):iT("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(e=>{n.enqueueAndForget(async()=>{lc(this)&&(iT("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.v_.add(4),await li(e),e.x_.set("Unknown"),e.v_.delete(4),await lr(e)}(this))})}),this.x_=new lt(n,r)}}async function lr(e){if(lc(e))for(let t of e.F_)await t(!0)}async function li(e){for(let t of e.F_)await t(!1)}function ls(e,t){e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),lu(e)?lh(e):lC(e).Jo()&&lo(e,t))}function la(e,t){let n=lC(e);e.C_.delete(t),n.Jo()&&ll(e,t),0===e.C_.size&&(n.Jo()?n.Xo():lc(e)&&e.x_.set("Unknown"))}function lo(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(i$.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}lC(e).c_(t)}function ll(e,t){e.O_.Oe(t),lC(e).l_(t)}function lh(e){e.O_=new a5({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),lC(e).start(),e.x_.p_()}function lu(e){return lc(e)&&!lC(e).Ho()&&e.C_.size>0}function lc(e){return 0===e.v_.size}async function ld(e){e.C_.forEach((t,n)=>{lo(e,t)})}async function lf(e,t){e.O_=void 0,lu(e)?(e.x_.S_(t),lh(e)):e.x_.set("Unknown")}async function lp(e,t,n){if(e.x_.set("Online"),t instanceof a4&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){iT("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await lg(e,n)}else if(t instanceof a2?e.O_.$e(t):t instanceof a9?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(i$.min()))try{let t=await oK(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.O_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(su.EMPTY_BYTE_STRING,r.snapshotVersion)),ll(e,t);let i=new ow(r.target,t,n,r.sequenceNumber);lo(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){iT("RemoteStore","Failed to raise snapshot:",t),await lg(e,t)}}async function lg(e,t,n){if(!i9(t))throw t;e.v_.add(1),await li(e),e.x_.set("Offline"),n||(n=()=>oK(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{iT("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await lr(e)})}function lm(e,t){return t().catch(n=>lg(e,n,t))}async function ly(e){let t=lA(e),n=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;lc(e)&&e.D_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.D_.length&&t.Xo();break}n=r.batchId,function(e,t){e.D_.push(t);let n=lA(e);n.Jo()&&n.P_&&n.I_(t.mutations)}(e,r)}catch(t){await lg(e,t)}lv(e)&&lw(e)}function lv(e){return lc(e)&&!lA(e).Ho()&&e.D_.length>0}function lw(e){lA(e).start()}async function lE(e){lA(e).d_()}async function l_(e){let t=lA(e);for(let n of e.D_)t.I_(n.mutations)}async function lb(e,t,n){let r=e.D_.shift(),i=aK.from(r,t,n);await lm(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ly(e)}async function lT(e,t){t&&lA(e).P_&&await async function(e,t){var n;if(function(e){switch(e){default:return iA();case iD.CANCELLED:case iD.UNKNOWN:case iD.DEADLINE_EXCEEDED:case iD.RESOURCE_EXHAUSTED:case iD.INTERNAL:case iD.UNAVAILABLE:case iD.UNAUTHENTICATED:return!1;case iD.INVALID_ARGUMENT:case iD.NOT_FOUND:case iD.ALREADY_EXISTS:case iD.PERMISSION_DENIED:case iD.FAILED_PRECONDITION:case iD.ABORTED:case iD.OUT_OF_RANGE:case iD.UNIMPLEMENTED:case iD.DATA_LOSS:return!0}}(n=t.code)&&n!==iD.ABORTED){let n=e.D_.shift();lA(e).Zo(),await lm(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ly(e)}}(e,t),lv(e)&&lw(e)}async function lI(e,t){e.asyncQueue.verifyOperationInProgress(),iT("RemoteStore","RemoteStore received new credentials");let n=lc(e);e.v_.add(3),await li(e),n&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await lr(e)}async function lS(e,t){t?(e.v_.delete(2),await lr(e)):t||(e.v_.add(2),await li(e),e.x_.set("Unknown"))}function lC(e){var t,n,r;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,r={Po:ld.bind(null,e),To:lf.bind(null,e),u_:lp.bind(null,e)},t.R_(),new o7(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.N_.Zo(),lu(e)?lh(e):e.x_.set("Unknown")):(await e.N_.stop(),e.O_=void 0)})),e.N_}function lA(e){var t,n,r;return e.L_||(e.L_=(t=e.datastore,n=e.asyncQueue,r={Po:lE.bind(null,e),To:lT.bind(null,e),E_:l_.bind(null,e),T_:lb.bind(null,e)},t.R_(),new o8(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.L_.Zo(),await ly(e)):(await e.L_.stop(),e.D_.length>0&&(iT("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ik,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new lD(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new iN(iD.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lN(e,t){if(iI("AsyncQueue",`${t}: ${e}`),i9(e))return new iN(iD.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e){this.comparator=e?(t,n)=>e(t,n)||iQ.comparator(t.key,n.key):(e,t)=>iQ.comparator(e.key,t.key),this.keyedMap=au(),this.sortedSet=new sr(this.comparator)}static emptySet(e){return new lk(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lk)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new lk;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(){this.B_=new sr(iQ.comparator)}track(e){let t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):iA():this.B_=this.B_.insert(t,e)}k_(){let e=[];return this.B_.inorderTraversal((t,n)=>{e.push(n)}),e}}class lx{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new lx(e,t,lk.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&an(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class lO{constructor(){this.queries=new ao(e=>ar(e),an),this.onlineState="Unknown",this.W_=new Set}}async function lM(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.K_()&&t.U_()&&(n=2):(i=new lL,n=t.U_()?0:1);try{switch(n){case 0:i.q_=await e.onListen(r,!0);break;case 1:i.q_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=lN(n,`Initialization of query '${ai(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.Q_.push(t),t.G_(e.onlineState),i.q_&&t.z_(i.q_)&&lU(e)}async function lP(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.Q_.indexOf(t);e>=0&&(i.Q_.splice(e,1),0===i.Q_.length?r=t.U_()?0:1:!i.K_()&&t.U_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function lV(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Q_)e.z_(r)&&(n=!0);i.q_=r}}n&&lU(e)}function lF(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Q_)e.onError(n);e.queries.delete(t)}function lU(e){e.W_.forEach(e=>{e.next()})}(f=d||(d={})).j_="default",f.Cache="cache";class lB{constructor(e,t,n){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=n||{}}z_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new lx(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){return!(e.fromCache&&this.U_())||(!this.options.ta||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Z_(e){if(e.docChanges.length>0)return!0;let t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ea(e){e=lx.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==d.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(e){this.key=e}}class lq{constructor(e){this.key=e}}class l${constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ag(),this.mutatedKeys=ag(),this.ha=aa(e),this.Pa=new lk(this.ha)}get Ia(){return this.ua}Ta(e,t){let n=t?t.Ea:new lR,r=t?t.Pa:this.Pa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let h=r.get(e),u=as(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),f=!1;h&&u?h.data.isEqual(u.data)?c!==d&&(n.track({type:3,doc:u}),f=!0):this.da(h,u)||(n.track({type:2,doc:u}),f=!0,(o&&this.ha(u,o)>0||l&&0>this.ha(u,l))&&(a=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(o||l)&&(a=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Pa:s,Ea:n,Xi:a,mutatedKeys:i}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;let s=e.Ea.k_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return iA()}};return n(e)-n(t)})(e.type,t.type)||this.ha(e.doc,t.doc)),this.Aa(n),r=null!=r&&r;let a=t&&!r?this.Ra():[],o=0===this.la.size&&this.current&&!r?1:0,l=o!==this.ca;return(this.ca=o,0!==s.length||l)?{snapshot:new lx(this.query,e.Pa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new lR,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=e.current)}Ra(){if(!this.current)return[];let e=this.la;this.la=ag(),this.Pa.forEach(e=>{this.ma(e.key)&&(this.la=this.la.add(e.key))});let t=[];return e.forEach(e=>{this.la.has(e)||t.push(new lq(e))}),this.la.forEach(n=>{e.has(n)||t.push(new lj(n))}),t}fa(e){this.ua=e.hs,this.la=ag();let t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return lx.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,0===this.ca,this.hasCachedResults)}}class lz{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class lK{constructor(e){this.key=e,this.pa=!1}}class lG{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ya={},this.wa=new ao(e=>ar(e),an),this.Sa=new Map,this.ba=new Set,this.Da=new sr(iQ.comparator),this.Ca=new Map,this.va=new oR,this.Fa={},this.Ma=new Map,this.xa=oS.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return!0===this.Oa}}async function lH(e,t,n=!0){let r;let i=hi(e),s=i.wa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ga()):r=await lW(i,t,n,!0),r}async function lQ(e,t){let n=hi(e);await lW(n,t,!0,!1)}async function lW(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=s8(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Qr.getTargetData(e,s).next(n=>n?(t=n,iJ.resolve(t)):i.Qr.allocateTargetId(e).next(n=>(t=new ow(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.ns=i.ns.insert(e.targetId,e),i.rs.set(s,e.targetId)),e})),l=o.targetId,h=n?e.sharedClientState.addLocalQueryTarget(l):"not-current";return r&&(a=await lX(e,t,l,"current"===h,o.resumeToken)),e.isPrimaryClient&&n&&ls(e.remoteStore,o),a}async function lX(e,t,n,r,i){e.Na=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Ta(n);i.Xi&&(i=await oH(e.localStore,t.query,!1).then(({documents:e})=>t.view.Ta(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return l8(e,t.targetId,o.Va),o.snapshot})(e,t,n,r);let s=await oH(e.localStore,t,!0),a=new l$(t,s.hs),o=a.Ta(s.documents),l=a1.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),h=a.applyChanges(o,e.isPrimaryClient,l);l8(e,n,h.Va);let u=new lz(t,n,a);return e.wa.set(t,u),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),h.snapshot}async function lY(e,t,n){let r=e.wa.get(t),i=e.Sa.get(r.targetId);if(i.length>1)return e.Sa.set(r.targetId,i.filter(e=>!an(e,t))),void e.wa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await oG(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&la(e.remoteStore,r.targetId),l3(e,r.targetId)}).catch(iY)):(l3(e,r.targetId),await oG(e.localStore,r.targetId,!0))}async function lJ(e,t){let n=e.wa.get(t),r=e.Sa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),la(e.remoteStore,n.targetId))}async function lZ(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=l9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=l4.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=iq.now(),s=t.reduce((e,t)=>e.add(t.key),ag());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=al,l=ag();return e.os.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=aE(r.transform,e||null);null!=i&&(null===n&&(n=sM.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new aF(e.key,t,function e(t){let n=[];return st(t.fields,(t,r)=>{let i=new iH([t]);if(sx(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new sl(n)}(t.value.mapValue),aR.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:ac(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Fa[i.currentUser.toKey()])||(e=new sr(iB)),e=e.insert(r,n),i.Fa[i.currentUser.toKey()]=e,await ht(i,s.changes),await ly(i.remoteStore)}catch(t){let e=lN(t,"Failed to persist write");n.reject(e)}}async function l0(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.os.newChangeBuffer({trackRemovals:!0});r=e.ns;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;h.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,a)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(su.EMPTY_BYTE_STRING,i$.min()).withLastLimboFreeSnapshotVersion(i$.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),r=r.insert(a,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Qr.updateTargetData(i,u))});let u=al,c=ag();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),h.push((s=t.documentUpdates,a=ag(),o=ag(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=al;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(i$.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):iT("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{cs:t,ls:o}})).next(e=>{u=e.cs,c=e.ls})),!n.isEqual(i$.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));h.push(t)}return iJ.waitFor(h).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(t=>(e.ns=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Ca.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||iA(),t.addedDocuments.size>0?r.pa=!0:t.modifiedDocuments.size>0?r.pa||iA():t.removedDocuments.size>0&&(r.pa||iA(),r.pa=!1))}),await ht(e,n,t)}catch(e){await iY(e)}}function l1(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.wa.forEach((e,n)=>{let r=n.view.G_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Q_)e.G_(t)&&(n=!0)}),n&&lU(r),i.length&&e.ya.u_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function l2(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Ca.get(t),i=r&&r.key;if(i){let n=new sr(iQ.comparator);n=n.insert(i,sP.newNoDocument(i,i$.min()));let r=ag().add(i),s=new a0(i$.min(),new Map,new sr(iB),n,r);await l0(e,s),e.Da=e.Da.remove(i),e.Ca.delete(t),he(e)}else await oG(e.localStore,t,!1).then(()=>l3(e,t,n)).catch(iY)}async function l9(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=iJ.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||iA(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ag();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});l5(e,r,null),l6(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ht(e,i)}catch(e){await iY(e)}}async function l4(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||iA(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});l5(e,t,n),l6(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await ht(e,i)}catch(e){await iY(e)}}function l6(e,t){(e.Ma.get(t)||[]).forEach(e=>{e.resolve()}),e.Ma.delete(t)}function l5(e,t,n){let r=e.Fa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Fa[e.currentUser.toKey()]=r}}function l3(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Sa.get(t)))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(t=>{e.va.containsKey(t)||l7(e,t)})}function l7(e,t){e.ba.delete(t.path.canonicalString());let n=e.Da.get(t);null!==n&&(la(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),he(e))}function l8(e,t,n){for(let r of n)r instanceof lj?(e.va.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(iT("SyncEngine","New document in limbo: "+n),e.ba.add(r),he(e))}(e,r)):r instanceof lq?(iT("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||l7(e,r.key)):iA()}function he(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){let t=e.ba.values().next().value;e.ba.delete(t);let n=new iQ(iK.fromString(t)),r=e.xa.next();e.Ca.set(r,new lK(n)),e.Da=e.Da.insert(n,r),ls(e.remoteStore,new ow(s8(new s6(n.path)),r,"TargetPurposeLimboResolution",i7._e))}}async function ht(e,t,n){let r=[],i=[],s=[];e.wa.isEmpty()||(e.wa.forEach((a,o)=>{s.push(e.Na(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=oB.Ki(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.ya.u_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>iJ.forEach(t,t=>iJ.forEach(t.qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>iJ.forEach(t.Qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!i9(e))throw e;iT("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ns=e.ns.insert(t,i)}}}(e.localStore,i))}async function hn(e,t){var n;if(!e.currentUser.isEqual(t)){iT("SyncEngine","User change. New user:",t.toKey());let r=await oz(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ma.forEach(e=>{e.forEach(e=>{e.reject(new iN(iD.CANCELLED,n))})}),e.Ma.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ht(e,r.us)}}function hr(e,t){let n=e.Ca.get(t);if(n&&n.pa)return ag().add(n.key);{let n=ag(),r=e.Sa.get(t);if(!r)return n;for(let t of r){let r=e.wa.get(t);n=n.unionWith(r.view.Ia)}return n}}function hi(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=l0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hr.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=l2.bind(null,e),e.ya.u_=lV.bind(null,e.eventManager),e.ya.La=lF.bind(null,e.eventManager),e}class hs{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=o6(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new o$(t,new oq,e.initialUser,this.serializer)}createPersistence(e){return new oV(oU.Hr,this.serializer)}createSharedClientState(e){return new oW}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ha{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>l1(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=hn.bind(null,this.syncEngine),await lS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lO}createDatastore(e){let t=o6(e.databaseInfo.databaseId),n=new o9(e.databaseInfo);return new le(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new ln(t,this.datastore,e.asyncQueue,e=>l1(this.syncEngine,e,0),oY.D()?new oY:new oX)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new lG(e,t,n,r,i,s);return a&&(o.Oa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){iT("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await li(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):iI("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=iw.UNAUTHENTICATED,this.clientId=iU.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{iT("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(iT("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new iN(iD.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new ik;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=lN(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function hh(e,t){e.asyncQueue.verifyOperationInProgress(),iT("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await oz(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function hu(e,t){e.asyncQueue.verifyOperationInProgress();let n=await hc(e);iT("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>lI(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>lI(t.remoteStore,n)),e._onlineComponents=t}async function hc(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){iT("FirestoreClient","Using user provided OfflineComponentProvider");try{await hh(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===iD.FAILED_PRECONDITION||t.code===iD.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;iS("Error using user provided cache. Falling back to memory cache: "+t),await hh(e,new hs)}}else iT("FirestoreClient","Using default OfflineComponentProvider"),await hh(e,new hs)}return e._offlineComponents}async function hd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(iT("FirestoreClient","Using user provided OnlineComponentProvider"),await hu(e,e._uninitializedComponentsProvider._online)):(iT("FirestoreClient","Using default OnlineComponentProvider"),await hu(e,new ha))),e._onlineComponents}async function hf(e){let t=await hd(e),n=t.eventManager;return n.onListen=lH.bind(null,t.syncEngine),n.onUnlisten=lY.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=lQ.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=lJ.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(e,t,n){if(!n)throw new iN(iD.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hy(e){if(!iQ.isDocumentKey(e))throw new iN(iD.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function hv(e){if(iQ.isDocumentKey(e))throw new iN(iD.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function hw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":iA()}function hE(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new iN(iD.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=hw(e);throw new iN(iD.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new iN(iD.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new iN(iD.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new iN(iD.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hp(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new iN(iD.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new iN(iD.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new iN(iD.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hb{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new h_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new iN(iD.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new iN(iD.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new h_(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ix;switch(e.type){case"firstParty":return new iP(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new iN(iD.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=hg.get(e);t&&(iT("ComponentProvider","Removing Datastore"),hg.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hT(this.firestore,e,this._query)}}class hI{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hS(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hI(this.firestore,e,this._key)}}class hS extends hT{constructor(e,t,n){super(e,t,new s6(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new hI(this.firestore,null,new iQ(e))}withConverter(e){return new hS(this.firestore,e,this._path)}}function hC(e,t,...n){if(e=Z(e),1==arguments.length&&(t=iU.newId()),hm("doc","path",t),e instanceof hb){let r=iK.fromString(t,...n);return hy(r),new hI(e,null,new iQ(r))}{if(!(e instanceof hI||e instanceof hS))throw new iN(iD.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(iK.fromString(t,...n));return hy(r),new hI(e.firestore,e instanceof hS?e.converter:null,new iQ(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new o5(this,"async_queue_retry"),this.cu=()=>{let e=o4();e&&iT("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};let e=o4();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;let t=o4();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});let t=new ik;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(0!==this.ru.length){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!i9(e))throw e;iT("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){let t=this.nu.then(()=>(this._u=!0,e().catch(e=>{let t;throw this.ou=e,this._u=!1,iI("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this._u=!1,e))));return this.nu=t,t}enqueueAfterDelay(e,t,n){this.lu(),this.uu.indexOf(e)>-1&&(t=0);let r=lD.createAndSchedule(this,e,t,n,e=>this.Iu(e));return this.su.push(r),r}lu(){this.ou&&iA()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(let t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{for(let t of(this.su.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.su))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){let t=this.su.indexOf(e);this.su.splice(t,1)}}class hD extends hb{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new hA,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hk(this),this._firestoreClient.terminate()}}function hN(e){return e._firestoreClient||hk(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function hk(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new sv(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hp(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new hl(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hR(su.fromBase64String(e))}catch(e){throw new iN(iD.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new hR(su.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new iN(iD.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new iH(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new iN(iD.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new iN(iD.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return iB(this._lat,e._lat)||iB(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hM=/^__.*__$/;class hP{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new aF(e,this.data,this.fieldMask,t,this.fieldTransforms):new aV(e,this.data,t,this.fieldTransforms)}}class hV{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new aF(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hF(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw iA()}}class hU{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new hU(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.mu({path:n,gu:!1});return r.pu(e),r}yu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.mu({path:n,gu:!1});return r.Ru(),r}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return h0(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(0===e.length)throw this.Su("Document fields must not be empty");if(hF(this.Vu)&&hM.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class hB{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||o6(e)}Cu(e,t,n,r=!1){return new hU({Vu:e,methodName:t,Du:n,path:iH.emptyPath(),gu:!1,bu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hj(e){let t=e._freezeSettings(),n=o6(e._databaseId);return new hB(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hq(e,t,n,r,i,s={}){let a,o;let l=e.Cu(s.merge||s.mergeFields?2:0,t,n,i);hX("Data must be an object, but it was:",l,r);let h=hQ(r,l);if(s.merge)a=new sl(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=hY(t,r,n);if(!l.contains(i))throw new iN(iD.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);h1(e,i)||e.push(i)}a=new sl(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new hP(new sM(h),a,o)}class h$ extends hL{_toFieldTransform(e){if(2!==e.Vu)throw 1===e.Vu?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof h$}}class hz extends hL{_toFieldTransform(e){return new aN(e.path,new a_)}isEqual(e){return e instanceof hz}}function hK(e,t,n,r){let i=e.Cu(1,t,n);hX("Data must be an object, but it was:",i,r);let s=[],a=sM.empty();return st(r,(e,r)=>{let o=hZ(t,e,n);r=Z(r);let l=i.yu(o);if(r instanceof h$)s.push(o);else{let e=hH(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new hV(a,new sl(s),i.fieldTransforms)}function hG(e,t,n,r,i,s){let a=e.Cu(1,t,n),o=[hY(t,r,n)],l=[i];if(s.length%2!=0)throw new iN(iD.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(hY(t,s[e])),l.push(s[e+1]);let h=[],u=sM.empty();for(let e=o.length-1;e>=0;--e)if(!h1(h,o[e])){let t=o[e],n=l[e];n=Z(n);let r=a.yu(t);if(n instanceof h$)h.push(t);else{let e=hH(n,r);null!=e&&(h.push(t),u.set(t,e))}}return new hV(u,new sl(h),a.fieldTransforms)}function hH(e,t){if(hW(e=Z(e)))return hX("Unsupported field value:",t,e),hQ(e,t);if(e instanceof hL)return function(e,t){if(!hF(t.Vu))throw t.Su(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Su(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&4!==t.Vu)throw t.Su("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=hH(i,t.wu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Z(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!i8(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?av(r):ay(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=iq.fromDate(e);return{timestampValue:oi(t.serializer,n)}}if(e instanceof iq){let n=new iq(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:oi(t.serializer,n)}}if(e instanceof hO)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hR)return{bytesValue:os(t.serializer,e._byteString)};if(e instanceof hI){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Su(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:oo(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Su(`Unsupported field value: ${hw(e)}`)}(e,t)}function hQ(e,t){let n={};return sn(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):st(e,(e,r)=>{let i=hH(r,t.fu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function hW(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof iq||e instanceof hO||e instanceof hR||e instanceof hI||e instanceof hL)}function hX(e,t,n){if(!hW(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=hw(n);throw"an object"===r?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function hY(e,t,n){if((t=Z(t))instanceof hx)return t._internalPath;if("string"==typeof t)return hZ(e,t);throw h0("Field path arguments must be of type string or ",e,!1,void 0,n)}let hJ=RegExp("[~\\*/\\[\\]]");function hZ(e,t,n){if(t.search(hJ)>=0)throw h0(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hx(...t.split("."))._internalPath}catch(r){throw h0(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function h0(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new iN(iD.INVALID_ARGUMENT,o+e+l)}function h1(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hI(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new h9(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(h4("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class h9 extends h2{data(){return super.data()}}function h4(e,t){return"string"==typeof t?hZ(e,t):t instanceof hx?t._internalPath:t._delegate._internalPath}class h6{}class h5 extends h6{}class h3 extends h5{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new h3(e,t,n)}_apply(e){let t=this._parse(e);return un(e._query,t),new hT(e.firestore,e.converter,ae(e._query,t))}_parse(e){let t=hj(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new iN(iD.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ut(a,s);let t=[];for(let n of a)t.push(ue(r,e,n));o={arrayValue:{values:t}}}else o=ue(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ut(a,s),o=function(e,t,n,r=!1){return hH(n,e.Cu(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return sq.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class h7 extends h6{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new h7(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:s$.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())un(n,e),n=ae(n,e)}(e._query,t),new hT(e.firestore,e.converter,ae(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class h8 extends h5{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new h8(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new iN(iD.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new iN(iD.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sB(t,n)}(e._query,this._field,this._direction);return new hT(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new s6(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ue(e,t,n){if("string"==typeof(n=Z(n))){if(""===n)throw new iN(iD.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s3(t)&&-1!==n.indexOf("/"))throw new iN(iD.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(iK.fromString(n));if(!iQ.isDocumentKey(r))throw new iN(iD.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sA(e,new iQ(r))}if(n instanceof hI)return sA(e,n._key);throw new iN(iD.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hw(n)}.`)}function ut(e,t){if(!Array.isArray(e)||0===e.length)throw new iN(iD.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function un(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new iN(iD.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new iN(iD.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class ur{convertValue(e,t="none"){switch(s_(e)){case 0:return null;case 1:return e.booleanValue;case 2:return sf(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sp(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw iA()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return st(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new hO(sf(e.latitude),sf(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=sm(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(sy(e));default:return null}}convertTimestamp(e){let t=sd(e);return new iq(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=iK.fromString(e);ov(n)||iA();let r=new sw(n.get(1),n.get(3)),i=new iQ(n.popFirst(5));return r.isEqual(t)||iI(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ua extends h2{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(h4("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class uo extends ua{data(e={}){return super.data(e)}}class ul{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new us(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new uo(this._firestore,this._userDataWriter,n.key,n,new us(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new iN(iD.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new uo(e._firestore,e._userDataWriter,n.doc.key,n.doc,new us(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new uo(e._firestore,e._userDataWriter,t.doc.key,t.doc,new us(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return iA()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class uh extends ur{constructor(e){super(),this.firestore=e}convertBytes(e){return new hR(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new hI(this.firestore,null,t)}}function uu(e,t){return function(e,t){let n=new ik;return e.asyncQueue.enqueueAndForget(async()=>lZ(await hd(e).then(e=>e.syncEngine),t,n)),n.promise}(hN(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=hj(e)}set(e,t,n){this._verifyNotCommitted();let r=ud(e,this._firestore),i=ui(r.converter,t,n),s=hq(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,aR.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=ud(e,this._firestore);return i="string"==typeof(t=Z(t))||t instanceof hx?hG(this._dataReader,"WriteBatch.update",s._key,t,n,r):hK(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,aR.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=ud(e,this._firestore);return this._mutations=this._mutations.concat(new aq(t._key,aR.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new iN(iD.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ud(e,t){if((e=Z(e)).firestore!==t)throw new iN(iD.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}new WeakMap,function(e=!0){iE="10.10.0",eL(new ee("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new hD(new iO(t.getProvider("auth-internal")),new iF(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new iN(iD.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sw(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),eV(iv,"4.5.1",void 0),eV(iv,"4.5.1","esm2017")}();let uf={apiKey:"AIzaSyAUC5lunv28wNR99APoP-gjfwM2B1Etl4Q",authDomain:"todo-b6f6a.firebaseapp.com",projectId:"todo-b6f6a",storageBucket:"todo-b6f6a.appspot.com",messagingSenderId:"784812739856",appId:"1:784812739856:web:ca2161868776c5dbfe2995"},up=document.querySelector(".js-input"),ug=document.querySelector(".js-btn-add-task"),um=document.querySelector(".js-btn-clear"),uy={todos:[],update:function(e){this.todos=e},create:function({title:e}){let t={title:e,done:!1,id:v()};return this.todos.push(t),t},get:function(){return this.todos},clear:function(){this.todos=[]},toggleTodo:function(e){this.get().forEach(t=>{e===t.id&&(t.done=!t.done)})},getTodo:function(e){let t=null;return this.get().forEach(n=>{e===n.id&&(t=n)}),t}},uv=(s=".js-output",a=function(e){uy.toggleTodo(e),uw.update(uy.getTodo(e))},{node:document.querySelector(s),render:function(e){e.forEach(e=>{this.addTodo(e)})},addTodo:function(e){let t=document.createElement("div"),n=document.createElement("input"),r=document.createElement("lable");n.setAttribute("type","checkbox"),n.setAttribute("id",e.id),n.addEventListener("click",e=>{a(e.target.id)}),e.done&&n.setAttribute("checked",!0),r.innerText=e.title,r.setAttribute("for",e.id),t.append(n,r),this.node.append(t)}}),uw=function(e){let t=function(e,t){let n=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=eA){let t=eN.get(e);if(!t&&e===eA&&z())return eP();if(!t)throw eO.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=$("firestore");e&&function(e,t,n,r={}){var i;let s=(e=hE(e,hb))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&iS("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=iw.MOCK_USER;else{t=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[P(JSON.stringify({alg:"none",type:"JWT"})),P(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new iN(iD.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new iw(s)}e._authCredentials=new iL(new iR(t,n))}}(n,...e)}return n}(eP(uf));return{key:e,db:t,pull:async function(){let e=function(e,t,...n){let r=[];for(let i of(t instanceof h6&&r.push(t),function(e){let t=e.filter(e=>e instanceof h7).length,n=e.filter(e=>e instanceof h3).length;if(t>1||t>0&&n>0)throw new iN(iD.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}(function(e,t,...n){if(e=Z(e),hm("collection","path",t),e instanceof hb){let r=iK.fromString(t,...n);return hv(r),new hS(e,null,r)}{if(!(e instanceof hI||e instanceof hS))throw new iN(iD.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(iK.fromString(t,...n));return hv(r),new hS(e.firestore,null,r)}}(this.db,this.key),function(e,t="asc"){let n=h4("orderBy",e);return h8._create(n,t)}("createdAdd")),t=await function(e){e=hE(e,hT);let t=hE(e.firestore,hD),n=hN(t),r=new uh(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new iN(iD.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new ik;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new lB(n,new ho({next:n=>{t.enqueueAndForget(()=>lP(e,s)),n.fromCache&&"server"===r.source?i.reject(new iN(iD.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,ta:!0});return lM(e,s)})(await hf(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new ul(t,r,e,n)))}(e),n=[];return t.forEach(e=>{n.push({id:e.id,title:e.data().title,done:e.data().done})}),n},push:async function(e){try{await function(e,t,n){e=hE(e,hI);let r=hE(e.firestore,hD),i=ui(e.converter,t,void 0);return uu(r,[hq(hj(r),"setDoc",e._key,i,null!==e.converter,void 0).toMutation(e._key,aR.none())])}(hC(this.db,this.key,e.id),{title:e.title,done:e.done,createdAdd:new hz("serverTimestamp")})}catch(e){console.error("Error adding document: ",e)}},delete:async function(e){var n;let r=(hN(n=hE(n=t,hD)),new uc(n,e=>uu(n,e)));e.forEach(e=>{let t=hC(this.db,this.key,e.id);r.delete(t)}),await r.commit()},update:async function(e){let t=hC(this.db,this.key,e.id);await function(e,t,n,...r){e=hE(e,hI);let i=hE(e.firestore,hD),s=hj(i);return uu(i,[("string"==typeof(t=Z(t))||t instanceof hx?hG(s,"updateDoc",e._key,t,void 0,r):hK(s,"updateDoc",e._key,t)).toMutation(e._key,aR.exists(!0))])}(t,{done:e.done})}}}("todos");uw.pull().then(e=>{uy.update(e),uv.render(uy.get())}),ug.addEventListener("click",function(){let e=uy.create({title:up.value});uv.addTodo(e),uw.push(e),up.value=""}),um.addEventListener("click",function(){uw.delete(uy.get()),uy.clear(),uv.render(uy.get()),uv.node.innerHTML=""})}();
//# sourceMappingURL=index.52742d06.js.map
