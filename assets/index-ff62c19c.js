(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ku=(i,e)=>i===e,js=Symbol("solid-proxy"),Zu=Symbol("solid-track"),Kr={equals:Ku};let Ic=zc;const Rn=1,Zr=2,Nc={owned:null,cleanups:null,context:null,owner:null};var Ye=null;let Va=null,qe=null,vt=null,pn=null,ia=0;function Xi(i,e){const t=qe,n=Ye,r=i.length===0,a=r?Nc:{owned:null,cleanups:null,context:null,owner:e===void 0?n:e},o=r?i:()=>i(()=>Bt(()=>ra(a)));Ye=a,qe=null;try{return Yn(o,!0)}finally{qe=t,Ye=n}}function Fe(i,e){e=e?Object.assign({},Kr,e):Kr;const t={value:i,observers:null,observerSlots:null,comparator:e.equals||void 0},n=r=>(typeof r=="function"&&(r=r(t.value)),kc(t,r));return[Bc.bind(t),n]}function st(i,e,t){const n=lo(i,e,!1,Rn);nr(n)}function Ut(i,e,t){Ic=rf;const n=lo(i,e,!1,Rn);(!t||!t.render)&&(n.user=!0),pn?pn.push(n):nr(n)}function ze(i,e,t){t=t?Object.assign({},Kr,t):Kr;const n=lo(i,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,nr(n),Bc.bind(n)}function Bt(i){if(qe===null)return i();const e=qe;qe=null;try{return i()}finally{qe=e}}function Oc(i,e,t){const n=Array.isArray(i);let r,a=t&&t.defer;return o=>{let s;if(n){s=Array(i.length);for(let c=0;c<i.length;c++)s[c]=i[c]()}else s=i();if(a){a=!1;return}const u=Bt(()=>e(s,r,o));return r=s,u}}function Ii(i){return Ye===null||(Ye.cleanups===null?Ye.cleanups=[i]:Ye.cleanups.push(i)),i}function Ju(){return Ye}function Qu(i,e){const t=Ye,n=qe;Ye=i,qe=null;try{return Yn(e,!0)}catch(r){co(r)}finally{Ye=t,qe=n}}function ef(i){const e=qe,t=Ye;return Promise.resolve().then(()=>{qe=e,Ye=t;let n;return Yn(i,!1),qe=Ye=null,n?n.done:void 0})}function Fc(i,e){const t=Symbol("context");return{id:t,Provider:af(t),defaultValue:i}}function so(i){let e;return(e=Hc(Ye,i.id))!==void 0?e:i.defaultValue}function oo(i){const e=ze(i),t=ze(()=>Xs(e()));return t.toArray=()=>{const n=t();return Array.isArray(n)?n:n!=null?[n]:[]},t}function Bc(){if(this.sources&&this.state)if(this.state===Rn)nr(this);else{const i=vt;vt=null,Yn(()=>Qr(this),!1),vt=i}if(qe){const i=this.observers?this.observers.length:0;qe.sources?(qe.sources.push(this),qe.sourceSlots.push(i)):(qe.sources=[this],qe.sourceSlots=[i]),this.observers?(this.observers.push(qe),this.observerSlots.push(qe.sources.length-1)):(this.observers=[qe],this.observerSlots=[qe.sources.length-1])}return this.value}function kc(i,e,t){let n=i.value;return(!i.comparator||!i.comparator(n,e))&&(i.value=e,i.observers&&i.observers.length&&Yn(()=>{for(let r=0;r<i.observers.length;r+=1){const a=i.observers[r],o=Va&&Va.running;o&&Va.disposed.has(a),(o?!a.tState:!a.state)&&(a.pure?vt.push(a):pn.push(a),a.observers&&Gc(a)),o||(a.state=Rn)}if(vt.length>1e6)throw vt=[],new Error},!1)),e}function nr(i){if(!i.fn)return;ra(i);const e=Ye,t=qe,n=ia;qe=Ye=i,tf(i,i.value,n),qe=t,Ye=e}function tf(i,e,t){let n;try{n=i.fn(e)}catch(r){return i.pure&&(i.state=Rn,i.owned&&i.owned.forEach(ra),i.owned=null),i.updatedAt=t+1,co(r)}(!i.updatedAt||i.updatedAt<=t)&&(i.updatedAt!=null&&"observers"in i?kc(i,n):i.value=n,i.updatedAt=t)}function lo(i,e,t,n=Rn,r){const a={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:Ye,context:null,pure:t};return Ye===null||Ye!==Nc&&(Ye.owned?Ye.owned.push(a):Ye.owned=[a]),a}function Jr(i){if(i.state===0)return;if(i.state===Zr)return Qr(i);if(i.suspense&&Bt(i.suspense.inFallback))return i.suspense.effects.push(i);const e=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<ia);)i.state&&e.push(i);for(let t=e.length-1;t>=0;t--)if(i=e[t],i.state===Rn)nr(i);else if(i.state===Zr){const n=vt;vt=null,Yn(()=>Qr(i,e[0]),!1),vt=n}}function Yn(i,e){if(vt)return i();let t=!1;e||(vt=[]),pn?t=!0:pn=[],ia++;try{const n=i();return nf(t),n}catch(n){t||(pn=null),vt=null,co(n)}}function nf(i){if(vt&&(zc(vt),vt=null),i)return;const e=pn;pn=null,e.length&&Yn(()=>Ic(e),!1)}function zc(i){for(let e=0;e<i.length;e++)Jr(i[e])}function rf(i){let e,t=0;for(e=0;e<i.length;e++){const n=i[e];n.user?i[t++]=n:Jr(n)}for(e=0;e<t;e++)Jr(i[e])}function Qr(i,e){i.state=0;for(let t=0;t<i.sources.length;t+=1){const n=i.sources[t];if(n.sources){const r=n.state;r===Rn?n!==e&&(!n.updatedAt||n.updatedAt<ia)&&Jr(n):r===Zr&&Qr(n,e)}}}function Gc(i){for(let e=0;e<i.observers.length;e+=1){const t=i.observers[e];t.state||(t.state=Zr,t.pure?vt.push(t):pn.push(t),t.observers&&Gc(t))}}function ra(i){let e;if(i.sources)for(;i.sources.length;){const t=i.sources.pop(),n=i.sourceSlots.pop(),r=t.observers;if(r&&r.length){const a=r.pop(),o=t.observerSlots.pop();n<r.length&&(a.sourceSlots[o]=n,r[n]=a,t.observerSlots[n]=o)}}if(i.owned){for(e=i.owned.length-1;e>=0;e--)ra(i.owned[e]);i.owned=null}if(i.cleanups){for(e=i.cleanups.length-1;e>=0;e--)i.cleanups[e]();i.cleanups=null}i.state=0,i.context=null}function co(i){throw i}function Hc(i,e){return i?i.context&&i.context[e]!==void 0?i.context[e]:Hc(i.owner,e):void 0}function Xs(i){if(typeof i=="function"&&!i.length)return Xs(i());if(Array.isArray(i)){const e=[];for(let t=0;t<i.length;t++){const n=Xs(i[t]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return i}function af(i,e){return function(n){let r;return st(()=>r=Bt(()=>(Ye.context={[i]:n.value},oo(()=>n.children))),void 0),r}}const sf=Symbol("fallback");function Ao(i){for(let e=0;e<i.length;e++)i[e]()}function of(i,e,t={}){let n=[],r=[],a=[],o=0,s=e.length>1?[]:null;return Ii(()=>Ao(a)),()=>{let u=i()||[],c,l;return u[Zu],Bt(()=>{let h=u.length,_,p,v,g,d,x,m,y,M;if(h===0)o!==0&&(Ao(a),a=[],n=[],r=[],o=0,s&&(s=[])),t.fallback&&(n=[sf],r[0]=Xi(b=>(a[0]=b,t.fallback())),o=1);else if(o===0){for(r=new Array(h),l=0;l<h;l++)n[l]=u[l],r[l]=Xi(f);o=h}else{for(v=new Array(h),g=new Array(h),s&&(d=new Array(h)),x=0,m=Math.min(o,h);x<m&&n[x]===u[x];x++);for(m=o-1,y=h-1;m>=x&&y>=x&&n[m]===u[y];m--,y--)v[y]=r[m],g[y]=a[m],s&&(d[y]=s[m]);for(_=new Map,p=new Array(y+1),l=y;l>=x;l--)M=u[l],c=_.get(M),p[l]=c===void 0?-1:c,_.set(M,l);for(c=x;c<=m;c++)M=n[c],l=_.get(M),l!==void 0&&l!==-1?(v[l]=r[c],g[l]=a[c],s&&(d[l]=s[c]),l=p[l],_.set(M,l)):a[c]();for(l=x;l<h;l++)l in v?(r[l]=v[l],a[l]=g[l],s&&(s[l]=d[l],s[l](l))):r[l]=Xi(f);r=r.slice(0,o=h),n=u.slice(0)}return r});function f(h){if(a[l]=h,s){const[_,p]=Fe(l);return s[l]=p,e(u[l],_)}return e(u[l])}}}function He(i,e){return Bt(()=>i(e||{}))}function _r(){return!0}const lf={get(i,e,t){return e===js?t:i.get(e)},has(i,e){return e===js?!0:i.has(e)},set:_r,deleteProperty:_r,getOwnPropertyDescriptor(i,e){return{configurable:!0,enumerable:!0,get(){return i.get(e)},set:_r,deleteProperty:_r}},ownKeys(i){return i.keys()}};function Wa(i){return(i=typeof i=="function"?i():i)?i:{}}function Vc(...i){let e=!1;for(let n=0;n<i.length;n++){const r=i[n];e=e||!!r&&js in r,i[n]=typeof r=="function"?(e=!0,ze(r)):r}if(e)return new Proxy({get(n){for(let r=i.length-1;r>=0;r--){const a=Wa(i[r])[n];if(a!==void 0)return a}},has(n){for(let r=i.length-1;r>=0;r--)if(n in Wa(i[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<i.length;r++)n.push(...Object.keys(Wa(i[r])));return[...new Set(n)]}},lf);const t={};for(let n=i.length-1;n>=0;n--)if(i[n]){const r=Object.getOwnPropertyDescriptors(i[n]);for(const a in r)a in t||Object.defineProperty(t,a,{enumerable:!0,get(){for(let o=i.length-1;o>=0;o--){const s=(i[o]||{})[a];if(s!==void 0)return s}}})}return t}const cf=i=>`Stale read from <${i}>.`;function uf(i){const e="fallback"in i&&{fallback:()=>i.fallback};return ze(of(()=>i.each,i.children,e||void 0))}function Wc(i){const e=i.keyed,t=ze(()=>i.when,void 0,{equals:(n,r)=>e?n===r:!n==!r});return ze(()=>{const n=t();if(n){const r=i.children;return typeof r=="function"&&r.length>0?Bt(()=>r(e?n:()=>{if(!Bt(t))throw cf("Show");return i.when})):r}return i.fallback},void 0,void 0)}const ff=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],hf=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ff]),df=new Set(["innerHTML","textContent","innerText","children"]),pf=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),mf=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function gf(i,e){const t=mf[i];return typeof t=="object"?t[e]?t.$:void 0:t}const _f=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),vf={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function xf(i,e,t){let n=t.length,r=e.length,a=n,o=0,s=0,u=e[r-1].nextSibling,c=null;for(;o<r||s<a;){if(e[o]===t[s]){o++,s++;continue}for(;e[r-1]===t[a-1];)r--,a--;if(r===o){const l=a<n?s?t[s-1].nextSibling:t[a-s]:u;for(;s<a;)i.insertBefore(t[s++],l)}else if(a===s)for(;o<r;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[a-1]&&t[s]===e[r-1]){const l=e[--r].nextSibling;i.insertBefore(t[s++],e[o++].nextSibling),i.insertBefore(t[--a],l),e[r]=t[a]}else{if(!c){c=new Map;let f=s;for(;f<a;)c.set(t[f],f++)}const l=c.get(e[o]);if(l!=null)if(s<l&&l<a){let f=o,h=1,_;for(;++f<r&&f<a&&!((_=c.get(e[f]))==null||_!==l+h);)h++;if(h>l-s){const p=e[o];for(;s<l;)i.insertBefore(t[s++],p)}else i.replaceChild(t[s++],e[o++])}else o++;else e[o++].remove()}}}const Ro="_$DX_DELEGATE";function yf(i,e,t,n={}){let r;return Xi(a=>{r=a,e===document?i():Ge(e,i(),e.firstChild?null:void 0,t)},n.owner),()=>{r(),e.textContent=""}}function Qe(i,e,t){let n;const r=()=>{const o=document.createElement("template");return o.innerHTML=i,t?o.content.firstChild.firstChild:o.content.firstChild},a=e?()=>(n||(n=r())).cloneNode(!0):()=>Bt(()=>document.importNode(n||(n=r()),!0));return a.cloneNode=a,a}function Ni(i,e=window.document){const t=e[Ro]||(e[Ro]=new Set);for(let n=0,r=i.length;n<r;n++){const a=i[n];t.has(a)||(t.add(a),e.addEventListener(a,Af))}}function Gn(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)}function Mf(i,e,t,n){n==null?i.removeAttributeNS(e,t):i.setAttributeNS(e,t,n)}function En(i,e){e==null?i.removeAttribute("class"):i.className=e}function Sf(i,e,t,n){if(n)Array.isArray(t)?(i[`$$${e}`]=t[0],i[`$$${e}Data`]=t[1]):i[`$$${e}`]=t;else if(Array.isArray(t)){const r=t[0];i.addEventListener(e,t[0]=a=>r.call(i,t[1],a))}else i.addEventListener(e,t)}function Ef(i,e,t={}){const n=Object.keys(e||{}),r=Object.keys(t);let a,o;for(a=0,o=r.length;a<o;a++){const s=r[a];!s||s==="undefined"||e[s]||(Co(i,s,!1),delete t[s])}for(a=0,o=n.length;a<o;a++){const s=n[a],u=!!e[s];!s||s==="undefined"||t[s]===u||!u||(Co(i,s,!0),t[s]=u)}return t}function aa(i,e,t){if(!e)return t?Gn(i,"style"):e;const n=i.style;if(typeof e=="string")return n.cssText=e;typeof t=="string"&&(n.cssText=t=void 0),t||(t={}),e||(e={});let r,a;for(a in t)e[a]==null&&n.removeProperty(a),delete t[a];for(a in e)r=e[a],r!==t[a]&&(n.setProperty(a,r),t[a]=r);return t}function bf(i,e={},t,n){const r={};return n||st(()=>r.children=Ci(i,e.children,r.children)),st(()=>e.ref&&e.ref(i)),st(()=>wf(i,e,t,!0,r,!0)),r}function qs(i,e,t){return Bt(()=>i(e,t))}function Ge(i,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return Ci(i,e,n,t);st(r=>Ci(i,e(),r,t),n)}function wf(i,e,t,n,r={},a=!1){e||(e={});for(const o in r)if(!(o in e)){if(o==="children")continue;r[o]=Po(i,o,null,r[o],t,a)}for(const o in e){if(o==="children"){n||Ci(i,e.children);continue}const s=e[o];r[o]=Po(i,o,s,r[o],t,a)}}function Tf(i){return i.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Co(i,e,t){const n=e.trim().split(/\s+/);for(let r=0,a=n.length;r<a;r++)i.classList.toggle(n[r],t)}function Po(i,e,t,n,r,a){let o,s,u,c,l;if(e==="style")return aa(i,t,n);if(e==="classList")return Ef(i,t,n);if(t===n)return n;if(e==="ref")a||t(i);else if(e.slice(0,3)==="on:"){const f=e.slice(3);n&&i.removeEventListener(f,n),t&&i.addEventListener(f,t)}else if(e.slice(0,10)==="oncapture:"){const f=e.slice(10);n&&i.removeEventListener(f,n,!0),t&&i.addEventListener(f,t,!0)}else if(e.slice(0,2)==="on"){const f=e.slice(2).toLowerCase(),h=_f.has(f);if(!h&&n){const _=Array.isArray(n)?n[0]:n;i.removeEventListener(f,_)}(h||t)&&(Sf(i,f,t,h),h&&Ni([f]))}else if(e.slice(0,5)==="attr:")Gn(i,e.slice(5),t);else if((l=e.slice(0,5)==="prop:")||(u=df.has(e))||!r&&((c=gf(e,i.tagName))||(s=hf.has(e)))||(o=i.nodeName.includes("-")))l&&(e=e.slice(5),s=!0),e==="class"||e==="className"?En(i,t):o&&!s&&!u?i[Tf(e)]=t:i[c||e]=t;else{const f=r&&e.indexOf(":")>-1&&vf[e.split(":")[0]];f?Mf(i,f,e,t):Gn(i,pf[e]||e,t)}return t}function Af(i){const e=`$$${i.type}`;let t=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==t&&Object.defineProperty(i,"target",{configurable:!0,value:t}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}});t;){const n=t[e];if(n&&!t.disabled){const r=t[`${e}Data`];if(r!==void 0?n.call(t,r,i):n.call(t,i),i.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function Ci(i,e,t,n,r){for(;typeof t=="function";)t=t();if(e===t)return t;const a=typeof e,o=n!==void 0;if(i=o&&t[0]&&t[0].parentNode||i,a==="string"||a==="number")if(a==="number"&&(e=e.toString()),o){let s=t[0];s&&s.nodeType===3?s.data=e:s=document.createTextNode(e),t=ni(i,t,n,s)}else t!==""&&typeof t=="string"?t=i.firstChild.data=e:t=i.textContent=e;else if(e==null||a==="boolean")t=ni(i,t,n);else{if(a==="function")return st(()=>{let s=e();for(;typeof s=="function";)s=s();t=Ci(i,s,t,n)}),()=>t;if(Array.isArray(e)){const s=[],u=t&&Array.isArray(t);if(Ys(s,e,t,r))return st(()=>t=Ci(i,s,t,n,!0)),()=>t;if(s.length===0){if(t=ni(i,t,n),o)return t}else u?t.length===0?Lo(i,s,n):xf(i,t,s):(t&&ni(i),Lo(i,s));t=s}else if(e instanceof Node){if(Array.isArray(t)){if(o)return t=ni(i,t,n,e);ni(i,t,null,e)}else t==null||t===""||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);t=e}else console.warn("Unrecognized value. Skipped inserting",e)}return t}function Ys(i,e,t,n){let r=!1;for(let a=0,o=e.length;a<o;a++){let s=e[a],u=t&&t[a];if(s instanceof Node)i.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))r=Ys(i,s,u)||r;else if(typeof s=="function")if(n){for(;typeof s=="function";)s=s();r=Ys(i,Array.isArray(s)?s:[s],Array.isArray(u)?u:[u])||r}else i.push(s),r=!0;else{const c=String(s);u&&u.nodeType===3?(u.data=c,i.push(u)):i.push(document.createTextNode(c))}}return r}function Lo(i,e,t=null){for(let n=0,r=e.length;n<r;n++)i.insertBefore(e[n],t)}function ni(i,e,t,n){if(t===void 0)return i.textContent="";const r=n||document.createTextNode("");if(e.length){let a=!1;for(let o=e.length-1;o>=0;o--){const s=e[o];if(r!==s){const u=s.parentNode===i;!a&&!o?u?i.replaceChild(r,s):i.insertBefore(r,t):u&&s.remove()}else a=!0}}else i.insertBefore(r,t);return[r]}const $c=!1;function jc(i,e,t){return i.addEventListener(e,t),()=>i.removeEventListener(e,t)}function Rf([i,e],t,n){return[t?()=>t(i()):i,n?r=>e(n(r)):e]}function Cf(i){try{return document.querySelector(i)}catch{return null}}function Xc(i,e){const t=Cf(`#${i}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}function qc(i,e,t,n){let r=!1;const a=s=>typeof s=="string"?{value:s}:s,o=Rf(Fe(a(i()),{equals:(s,u)=>s.value===u.value}),void 0,s=>(!r&&e(s),s));return t&&Ii(t((s=i())=>{r=!0,o[1](a(s)),r=!1})),{signal:o,utils:n}}function Pf(i){if(i){if(Array.isArray(i))return{signal:i}}else return{signal:Fe({value:""})};return i}function Lf(){return qc(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:i,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"",i):window.history.pushState(n,"",i),Xc(window.location.hash.slice(1),t)},i=>jc(window,"popstate",()=>i()),{go:i=>window.history.go(i)})}function Df(){return qc(()=>window.location.hash.slice(1),({value:i,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"","#"+i):window.location.hash=i;const r=i.indexOf("#"),a=r>=0?i.slice(r+1):"";Xc(a,t)},i=>jc(window,"hashchange",()=>i()),{go:i=>window.history.go(i),renderPath:i=>`#${i}`,parsePath:i=>{const e=i.replace(/^.*?#/,"");if(!e.startsWith("/")){const[,t="/"]=window.location.hash.split("#",2);return`${t}#${e}`}return e}})}function Uf(){let i=new Set;function e(r){return i.add(r),()=>i.delete(r)}let t=!1;function n(r,a){if(t)return!(t=!1);const o={to:r,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const s of i)s.listener({...o,from:s.location,retry:u=>{u&&(t=!0),s.navigate(r,a)}});return!o.defaultPrevented}return{subscribe:e,confirm:n}}const If=/^(?:[a-z0-9]+:)?\/\//i,Nf=/^\/+|(\/)\/+$/g;function qi(i,e=!1){const t=i.replace(Nf,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function $r(i,e,t){if(If.test(e))return;const n=qi(i),r=t&&qi(t);let a="";return!r||e.startsWith("/")?a=n:r.toLowerCase().indexOf(n.toLowerCase())!==0?a=n+r:a=r,(a||"/")+qi(e,!a)}function Of(i,e){if(i==null)throw new Error(e);return i}function Yc(i,e){return qi(i).replace(/\/*(\*.*)?$/g,"")+qi(e)}function Ff(i){const e={};return i.searchParams.forEach((t,n)=>{e[n]=t}),e}function Bf(i,e,t){const[n,r]=i.split("/*",2),a=n.split("/").filter(Boolean),o=a.length;return s=>{const u=s.split("/").filter(Boolean),c=u.length-o;if(c<0||c>0&&r===void 0&&!e)return null;const l={path:o?"":"/",params:{}},f=h=>t===void 0?void 0:t[h];for(let h=0;h<o;h++){const _=a[h],p=u[h],v=_[0]===":",g=v?_.slice(1):_;if(v&&$a(p,f(g)))l.params[g]=p;else if(v||!$a(p,_))return null;l.path+=`/${p}`}if(r){const h=c?u.slice(-c).join("/"):"";if($a(h,f(r)))l.params[r]=h;else return null}return l}}function $a(i,e){const t=n=>n.localeCompare(i,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(i):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(i):!1}function kf(i){const[e,t]=i.pattern.split("/*",2),n=e.split("/").filter(Boolean);return n.reduce((r,a)=>r+(a.startsWith(":")?2:3),n.length-(t===void 0?0:1))}function Kc(i){const e=new Map,t=Ju();return new Proxy({},{get(n,r){return e.has(r)||Qu(t,()=>e.set(r,ze(()=>i()[r]))),e.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(i())}})}function Zc(i){let e=/(\/?\:[^\/]+)\?/.exec(i);if(!e)return[i];let t=i.slice(0,e.index),n=i.slice(e.index+e[0].length);const r=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(n);)r.push(t+=e[1]),n=n.slice(e[0].length);return Zc(n).reduce((a,o)=>[...a,...r.map(s=>s+o)],[])}const zf=100,Jc=Fc(),sa=Fc(),oa=()=>Of(so(Jc),"Make sure your app is wrapped in a <Router />");let Ji;const Qc=()=>Ji||so(sa)||oa().base,eu=()=>oa().navigatorFactory(),tu=()=>oa().location;function Gf(i,e="",t){const{component:n,data:r,children:a}=i,o=!a||Array.isArray(a)&&!a.length,s={key:i,element:n?()=>He(n,{}):()=>{const{element:u}=i;return u===void 0&&t?He(t,{}):u},preload:i.component?n.preload:i.preload,data:r};return nu(i.path).reduce((u,c)=>{for(const l of Zc(c)){const f=Yc(e,l),h=o?f:f.split("/*",1)[0];u.push({...s,originalPath:l,pattern:h,matcher:Bf(h,!o,i.matchFilters)})}return u},[])}function Hf(i,e=0){return{routes:i,score:kf(i[i.length-1])*1e4-e,matcher(t){const n=[];for(let r=i.length-1;r>=0;r--){const a=i[r],o=a.matcher(t);if(!o)return null;n.unshift({...o,route:a})}return n}}}function nu(i){return Array.isArray(i)?i:[i]}function iu(i,e="",t,n=[],r=[]){const a=nu(i);for(let o=0,s=a.length;o<s;o++){const u=a[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=Gf(u,e,t);for(const l of c){n.push(l);const f=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!f)iu(u.children,l.pattern,t,n,r);else{const h=Hf([...n],r.length);r.push(h)}n.pop()}}}return n.length?r:r.sort((o,s)=>s.score-o.score)}function Vf(i,e){for(let t=0,n=i.length;t<n;t++){const r=i[t].matcher(e);if(r)return r}return[]}function Wf(i,e){const t=new URL("http://sar"),n=ze(u=>{const c=i();try{return new URL(c,t)}catch{return console.error(`Invalid path ${c}`),u}},t,{equals:(u,c)=>u.href===c.href}),r=ze(()=>n().pathname),a=ze(()=>n().search,!0),o=ze(()=>n().hash),s=ze(()=>"");return{get pathname(){return r()},get search(){return a()},get hash(){return o()},get state(){return e()},get key(){return s()},query:Kc(Oc(a,()=>Ff(n())))}}function $f(i,e="",t,n){const{signal:[r,a],utils:o={}}=Pf(i),s=o.parsePath||(A=>A),u=o.renderPath||(A=>A),c=o.beforeLeave||Uf(),l=$r("",e),f=void 0;if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!r().value&&a({value:l,replace:!0,scroll:!1});const[h,_]=Fe(!1),p=async A=>{_(!0);try{await ef(A)}finally{_(!1)}},[v,g]=Fe(r().value),[d,x]=Fe(r().state),m=Wf(v,d),y=[],M={pattern:l,params:{},path:()=>l,outlet:()=>null,resolvePath(A){return $r(l,A)}};if(t)try{Ji=M,M.data=t({data:void 0,params:{},location:m,navigate:w(M)})}finally{Ji=void 0}function b(A,O,T){Bt(()=>{if(typeof O=="number"){O&&(o.go?c.confirm(O,T)&&o.go(O):console.warn("Router integration does not support relative routing"));return}const{replace:S,resolve:R,scroll:C,state:k}={replace:!1,resolve:!0,scroll:!0,...T},F=R?A.resolvePath(O):$r("",O);if(F===void 0)throw new Error(`Path '${O}' is not a routable path`);if(y.length>=zf)throw new Error("Too many redirects");const U=v();if((F!==U||k!==d())&&!$c){if(c.confirm(F,T)){const z=y.push({value:U,replace:S,scroll:C,state:d()});p(()=>{g(F),x(k)}).then(()=>{y.length===z&&L({value:F,state:k})})}}})}function w(A){return A=A||so(sa)||M,(O,T)=>b(A,O,T)}function L(A){const O=y[0];O&&((A.value!==O.value||A.state!==O.state)&&a({...A,replace:O.replace,scroll:O.scroll}),y.length=0)}st(()=>{const{value:A,state:O}=r();Bt(()=>{A!==v()&&p(()=>{g(A),x(O)})})});{let A=function(O){if(O.defaultPrevented||O.button!==0||O.metaKey||O.altKey||O.ctrlKey||O.shiftKey)return;const T=O.composedPath().find(U=>U instanceof Node&&U.nodeName.toUpperCase()==="A");if(!T||!T.hasAttribute("link"))return;const S=T.href;if(T.target||!S&&!T.hasAttribute("state"))return;const R=(T.getAttribute("rel")||"").split(/\s+/);if(T.hasAttribute("download")||R&&R.includes("external"))return;const C=new URL(S);if(C.origin!==window.location.origin||l&&C.pathname&&!C.pathname.toLowerCase().startsWith(l.toLowerCase()))return;const k=s(C.pathname+C.search+C.hash),F=T.getAttribute("state");O.preventDefault(),b(M,k,{resolve:!1,replace:T.hasAttribute("replace"),scroll:!T.hasAttribute("noscroll"),state:F&&JSON.parse(F)})};var E=A;Ni(["click"]),document.addEventListener("click",A),Ii(()=>document.removeEventListener("click",A))}return{base:M,out:f,location:m,isRouting:h,renderPath:u,parsePath:s,navigatorFactory:w,beforeLeave:c}}function jf(i,e,t,n,r){const{base:a,location:o,navigatorFactory:s}=i,{pattern:u,element:c,preload:l,data:f}=n().route,h=ze(()=>n().path);l&&l();const _={parent:e,pattern:u,get child(){return t()},path:h,params:r,data:e.data,outlet:c,resolvePath(p){return $r(a.path(),p,h())}};if(f)try{Ji=_,_.data=f({data:e.data,params:r,location:o,navigate:s(_)})}finally{Ji=void 0}return _}const Xf=i=>{const{source:e,url:t,base:n,data:r,out:a}=i,o=e||Lf(),s=$f(o,n,r);return He(Jc.Provider,{value:s,get children(){return i.children}})},qf=i=>{const e=oa(),t=Qc(),n=oo(()=>i.children),r=ze(()=>iu(n(),Yc(t.pattern,i.base||""),Yf)),a=ze(()=>Vf(r(),e.location.pathname)),o=Kc(()=>{const l=a(),f={};for(let h=0;h<l.length;h++)Object.assign(f,l[h].params);return f});e.out&&e.out.matches.push(a().map(({route:l,path:f,params:h})=>({originalPath:l.originalPath,pattern:l.pattern,path:f,params:h})));const s=[];let u;const c=ze(Oc(a,(l,f,h)=>{let _=f&&l.length===f.length;const p=[];for(let v=0,g=l.length;v<g;v++){const d=f&&f[v],x=l[v];h&&d&&x.route.key===d.route.key?p[v]=h[v]:(_=!1,s[v]&&s[v](),Xi(m=>{s[v]=m,p[v]=jf(e,p[v-1]||t,()=>c()[v+1],()=>a()[v],o)}))}return s.splice(l.length).forEach(v=>v()),h&&_?h:(u=p[0],p)}));return He(Wc,{get when(){return c()&&u},keyed:!0,children:l=>He(sa.Provider,{value:l,get children(){return l.outlet()}})})},Do=i=>{const e=oo(()=>i.children);return Vc(i,{get children(){return e()}})},Yf=()=>{const i=Qc();return He(Wc,{get when(){return i.child},keyed:!0,children:e=>He(sa.Provider,{value:e,get children(){return e.outlet()}})})};function Kf(i){const e=eu(),t=tu(),{href:n,state:r}=i,a=typeof n=="function"?n({navigate:e,location:t}):n;return e(a,{replace:!0,state:r}),null}var ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ru(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var uo={exports:{}};uo.exports;(function(i){(function(){function e(n,r){return r?ru(n):n.slice?e[a(n)]:function(o,s){n(o={exports:{}}),e[a(s)]=o.exports};function a(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){String.random=function(a,o){var s="";for(a=a||24,o=o||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";a-- >0;)s+=o.charAt(Math.floor(Math.random()*o.length));return s},String.match=function(a,o){var s,u;return typeof a!="string"?!1:(typeof o=="string"&&(o={"=":o}),o=o||{},s=o["="]||o["*"]||o[">"]||o["<"],a===s?!0:u!==o["="]?!1:(s=o["*"]||o[">"],a.slice(0,(s||"").length)===s?!0:u!==o["*"]?!1:u!==o[">"]&&u!==o["<"]?a>=o[">"]&&a<=o["<"]:u!==o[">"]&&a>=o[">"]||u!==o["<"]&&a<=o["<"]))},String.hash=function(a,o){if(typeof a=="string"){if(o=o||0,!a.length)return o;for(var s=0,u=a.length,c;s<u;++s)c=a.charCodeAt(s),o=(o<<5)-o+c,o|=0;return o}};var r=Object.prototype.hasOwnProperty;Object.plain=function(a){return a?a instanceof Object&&a.constructor===Object||Object.prototype.toString.call(a).match(/^\[object (\w+)\]$/)[1]==="Object":!1},Object.empty=function(a,o){for(var s in a)if(r.call(a,s)&&(!o||o.indexOf(s)==-1))return!1;return!0},Object.keys=Object.keys||function(a){var o=[];for(var s in a)r.call(a,s)&&o.push(s);return o},function(){var a,o=setTimeout,s=0,u=0,c=typeof setImmediate!=""+a&&setImmediate||function(f,h){return typeof MessageChannel==""+a?o:((f=new MessageChannel).port1.onmessage=function(_){_.data==""&&h()},function(_){h=_,f.port2.postMessage("")})}(),l=o.check=o.check||typeof performance!=""+a&&performance||{now:function(){return+new Date}};o.hold=o.hold||9,o.poll=o.poll||function(f){if(o.hold>=l.now()-s&&u++<3333){f();return}c(function(){s=l.now(),f()},u=0)}}(),function(){var a=setTimeout,o=a.turn=a.turn||function(h){s.push(h)==1&&u(f)},s=o.s=[],u=a.poll,c=0,l,f=function(){(l=s[c++])&&l(),(c==s.length||c==99)&&(s=o.s=s.slice(c),c=0),s.length&&u(f)}}(),function(){var a,o=setTimeout,s=o.turn;(o.each=o.each||function(u,c,l,f){f=f||9,function h(_,p,v){if(p=(_=(u||[]).splice(0,f)).length){for(var g=0;g<p&&a===(v=c(_[g]));g++);if(a===v){s(h);return}}l&&l(v)}()})()}()})(e,"./shim"),e(function(n){n.exports=function r(l,o,s){if(!l)return{to:r};var u,c=typeof o=="function",l=(this.tag||(this.tag={}))[l]||c&&(this.tag[l]={tag:l,to:r._={next:function(h){var _;(_=this.to)&&_.next(h)}}});if(c){var f={off:r.off||(r.off=function(){if(this.next===r._.next)return!0;this===this.the.last&&(this.the.last=this.back),this.to.back=this.back,this.next=r._.next,this.back.to=this.to,this.the.last===this.the&&delete this.on.tag[this.the.tag]}),to:r._,next:o,the:l,on:this,as:s};return(f.back=l.last||l).to=f,l.last=f}return(l=l.to)&&u!==o&&l.next(o),l}})(e,"./onto"),e(function(n){n.exports=function(r){return r===null||typeof r=="string"||typeof r=="boolean"||typeof r=="number"&&r!=1/0&&r!=-1/0&&r===r||!!r&&typeof r["#"]=="string"&&Object.keys(r).length===1&&r["#"]}})(e,"./valid"),e(function(n){e("./shim");function r(){var l=+new Date;return u<l?(o=0,u=l+r.drift):u=l+(o+=1)/s+r.drift}r.drift=0;var a=-1/0,o=0,s=999,u=a,c;r.is=function(l,f,h){var _=f&&l&&l._&&l._[">"]||h;if(_)return typeof(_=_[f])=="number"?_:a},r.ify=function(l,f,h,_,p){(l=l||{})._=l._||{},p&&(l._["#"]=p);var v=l._[">"]||(l._[">"]={});return c!==f&&f!=="_"&&(typeof h=="number"&&(v[f]=h),c!==_&&(l[f]=_)),l},n.exports=r})(e,"./state"),e(function(n){e("./shim");function r(a){var o={s:{}},s=o.s;a=a||{max:999,age:1e3*9},o.check=function(c){return s[c]?u(c):!1};var u=o.track=function(c){var l=s[c]||(s[c]={});return l.was=o.now=+new Date,o.to||(o.to=setTimeout(o.drop,a.age+9)),u.ed&&u.ed(c),l};return o.drop=function(c){o.to=null,o.now=+new Date;var l=Object.keys(s);console.STAT&&console.STAT(o.now,+new Date-o.now,"dup drop keys"),setTimeout.each(l,function(f){var h=s[f];h&&(c||a.age)>o.now-h.was||delete s[f]},0,99)},o}n.exports=r})(e,"./dup"),e(function(n){e("./onto"),n.exports=function(o,s){if(this.on){var u=(this.opt||{}).lack||9e3;if(typeof o!="function"){if(!o)return;var l=o["#"]||o,c=(this.tag||"")[l];return c?(s&&(c=this.on(l,s),clearTimeout(c.err),c.err=setTimeout(function(){c.off()},u)),!0):void 0}var l=s&&s["#"]||r(9);if(!o)return l;var f=this.on(l,o,s);return f.err=f.err||setTimeout(function(){f.off(),f.next({err:"Error: No ACK yet.",lack:!0})},u),l}};var r=String.random||function(){return Math.random().toString(36).slice(2)}})(e,"./ask"),e(function(n){function r(p){return p instanceof r?(this._={$:this}).$:this instanceof r?r.create(this._={$:this,opt:p}):new r(p)}r.is=function(p){return p instanceof r||p&&p._&&p===p._.$||!1},r.version=.202,r.chain=r.prototype,r.chain.toJSON=function(){},e("./shim"),r.valid=e("./valid"),r.state=e("./state"),r.on=e("./onto"),r.dup=e("./dup"),r.ask=e("./ask"),function(){r.create=function(S){S.root=S.root||S,S.graph=S.graph||{},S.on=S.on||r.on,S.ask=S.ask||r.ask,S.dup=S.dup||r.dup();var R=S.$.opt(S.opt);return S.once||(S.on("in",p,S),S.on("out",p,S),S.on("put",d,S),r.on("create",S),S.on("create",S)),S.once=1,R};function p(S){if(S){if(S.out===p){this.to.next(S);return}var R=this,C=R.as,k=C.at||C,F=k.$,U=k.dup,z,H=S.DBG;if((z=S["#"])||(z=S["#"]=o(9)),!U.check(z)){if(U.track(z),z=S._,S._=typeof z=="function"?z:function(){},S.$&&S.$===(S.$._||"").$||(S.$=F),S["@"]&&!S.put&&m(S),!k.ask(S["@"],S))if(H&&(H.u=+new Date),S.put){v(S);return}else S.get&&r.on.get(S,F);H&&(H.uc=+new Date),R.to.next(S),H&&(H.ua=+new Date),!(S.nts||S.NTS)&&(S.out=p,k.on("out",S),H&&(H.ue=+new Date))}}}function v(S){if(S){var R=S._||"",C=R.root=((R.$=S.$||"")._||"").root;if(S["@"]&&R.faith&&!R.miss){S.out=p,C.on("out",S);return}R.latch=C.hatch,R.match=C.hatch=[];var k=S.put,F=R.DBG=S.DBG,U=+new Date;if(O=O||U,!(k["#"]&&k["."])){F&&(F.p=U),R["#"]=S["#"],R.msg=S,R.all=0,R.stun=1;var z=Object.keys(k);console.STAT&&console.STAT(U,((F||R).pk=+new Date)-U,"put sort");var H=0,ne,K,W,q,ie,Z,N;(function xe(ye){if(ne!=H){if(ne=H,!(W=z[H])){console.STAT&&console.STAT(U,((F||R).pd=+new Date)-U,"put"),x(R);return}(q=k[W])?(N=q._)?W!==N["#"]?Z=M+b(W)+"soul not same.":(ie=N[">"])||(Z=M+b(W)+"no state."):Z=M+b(W)+"no meta.":Z=M+b(W)+"no node.",K=Object.keys(q||{})}if(Z){S.err=R.err=Z,x(R);return}var oe=0,pe;for(ye=ye||0;ye++<9&&(pe=K[oe++]);)if(pe!=="_"){var Ie=q[pe],me=ie[pe];if(f===me){Z=M+b(pe)+"on"+b(W)+"no state.";break}if(!u(Ie)){Z=M+b(pe)+"on"+b(W)+"bad "+typeof Ie+b(Ie);break}g(Ie,pe,W,me,S),++A}if((K=K.slice(oe)).length){s(xe);return}++H,K=null,xe(ye)})()}}}r.on.put=v;function g(S,R,C,k,F){var U=F._||"",z=U.root,H=z.graph,ne,K=H[C]||h,W=c(K,R,1),q=K[R],ie=U.DBG;(ne=console.STAT)&&(!H[C]||!q)&&(ne.has=(ne.has||0)+1);var Z=E();if(k>Z){setTimeout(function(){g(S,R,C,k,F)},(ne=k-Z)>L?L:ne),console.STAT&&console.STAT((ie||U).Hf=+new Date,ne,"future");return}if(!(k<W)&&!(!U.faith&&k===W&&(S===q||w(S)<=w(q))&&!U.miss)){U.stun++;var N=F["#"]+U.all++,xe={toString:function(){return N},_:U};xe.toJSON=xe.toString,z.dup.track(xe)["#"]=F["#"],ie&&(ie.ph=ie.ph||+new Date),z.on("put",{"#":xe,"@":F["@"],put:{"#":C,".":R,":":S,">":k},ok:F.ok,_:U})}}function d(S){var R;(R=(S._||"").DBG)&&(R.pa=+new Date,R.pm=R.pm||+new Date);var C=this,k=C.as,F=k.graph,U=S._,z=S.put,H=z["#"],ne=z["."],K=z[":"],W=z[">"];S["#"];var q;(q=U.msg)&&(q=q.put)&&(q=q[H])&&l(q,ne,W,K,H),F[H]=l(F[H],ne,W,K,H),(q=(k.next||"")[H])&&q.on("in",S),x(U),C.to.next(S)}function x(S,R){var C;if(!S.stop&&!(!S.err&&0<--S.stun)&&(S.stop=1,!!(C=S.root))){var k=S.match;k.end=1,k===C.hatch&&(!(k=S.latch)||k.end?delete C.hatch:C.hatch=k),S.hatch&&S.hatch(),setTimeout.each(S.match,function(F){F&&F()}),!(!(R=S.msg)||S.err||R.err)&&(R.out=p,S.root.on("out",R),T())}}function m(S){var R=S["@"]||"",C;if(!(C=R._)){var k=(k=S.$)&&(k=k._)&&(k=k.root)&&(k=k.dup);if(!(k=k.check(R)))return;S["@"]=k["#"]||S["@"];return}C.acks=(C.acks||0)+1,(C.err=S.err)&&(S["@"]=C["#"],x(C)),C.ok=S.ok||C.ok,!C.stop&&!C.crack&&(C.crack=C.match&&C.match.push(function(){y(C)})),y(C)}function y(S){!S||!S.root||S.stun||S.acks!==S.all||S.root.on("in",{"@":S["#"],err:S.err,ok:S.err?f:S.ok||{"":1}})}var M="Error: Invalid graph!",b=function(S){return" '"+(""+S).slice(0,9)+"...' "},w=JSON.stringify,L=2147483647,E=r.state,A=0,O,T=function(){A>999&&A/-(O-(O=+new Date))>1&&(r.window&&console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."),T=function(){A=0})}}(),function(){r.on.get=function(v,g){var d=g._,x=v.get,m=x["#"],y=d.graph[m],M=x["."],b=d.next||(d.next={}),w=b[m],L=v._||{},E=L.DBG=v.DBG;if(E&&(E.g=+new Date),!y)return d.on("get",v);if(M){if((typeof M!="string"||f===y[M])&&!((w||"").next||"")[M]){d.on("get",v);return}y=l({},M,c(y,M),y[M],m)}y&&p(v,y),d.on("get",v)};function p(v,g){var d=+new Date,x=v._||{},m=x.DBG=v.DBG,y=v["#"],M=o(9),b=Object.keys(g||"").sort(),w=((g||"")._||"")["#"];b.length;var L=v.$._.root,E=g===L.graph[w];console.STAT&&console.STAT(d,((m||x).gk=+new Date)-d,"got keys"),g&&function A(){d=+new Date;for(var O=0,T,S={},R;O<9&&(T=b[O++]);)l(S,T,c(g,T),g[T],w);b=b.slice(O),(R={})[w]=S,S=R;var C;E&&(C=function(){},C.ram=C.faith=!0),R=b.length,console.STAT&&console.STAT(d,-(d-(d=+new Date)),"got copied some"),m&&(m.ga=+new Date),L.on("in",{"@":y,"#":M,put:S,"%":R?M=o(9):f,$:L.$,_:C,DBG:m,FOO:1}),console.STAT&&console.STAT(d,+new Date-d,"got in"),R&&setTimeout.turn(A)}(),g||L.on("in",{"@":v["#"]})}r.on.get.ack=p}(),function(){r.chain.opt=function(p){p=p||{};var v=this,g=v._,d=p.peers||p;return Object.plain(p)||(p={}),Object.plain(g.opt)||(g.opt=p),typeof d=="string"&&(d=[d]),Object.plain(g.opt.peers)||(g.opt.peers={}),d instanceof Array&&(p.peers={},d.forEach(function(x){var m={};m.id=m.url=x,p.peers[x]=g.opt.peers[x]=g.opt.peers[x]||m})),a(p,function x(m){var y=this[m];if(this&&this.hasOwnProperty(m)||typeof y=="string"||Object.empty(y)){this[m]=y;return}y&&y.constructor!==Object&&!(y instanceof Array)||a(y,x)}),g.opt.from=p,r.on("opt",g),g.opt.uuid=g.opt.uuid||function(m){return r.state().toString(36).replace(".","")+String.random(m||12)},v}}();var a=function(p,v){Object.keys(p).forEach(v,p)},o=String.random,s=setTimeout.turn,u=r.valid,c=r.state.is,l=r.state.ify,f,h={},_;r.log=function(){return!r.log.off&&_.log.apply(_,arguments),[].slice.call(arguments).join(" ")},r.log.once=function(p,v,g){return(g=r.log.once)[p]=g[p]||0,g[p]++||r.log(v)},typeof window<"u"&&((window.GUN=window.Gun=r).window=window);try{typeof t<"u"&&(t.exports=r)}catch{}n.exports=r,(r.window||{}).console=(r.window||{}).console||{log:function(){}},(_=console).only=function(p,v){return _.only.i&&p===_.only.i&&_.only.i++&&(_.log.apply(_,arguments)||v)},r.log.once("welcome","Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!")})(e,"./root"),e(function(n){var r=e("./root");r.chain.back=function(s,u){var c;if(s=s||1,s===-1||s===1/0)return this._.root.$;if(s===1)return(this._.back||this._).$;var l=this,f=l._;if(typeof s=="string"&&(s=s.split(".")),s instanceof Array){var h=0,_=s.length,c=f;for(h;h<_;h++)c=(c||a)[s[h]];return o!==c?u?l:c:(c=f.back)?c.$.back(s,u):void 0}if(typeof s=="function"){for(var p,c={back:f};(c=c.back)&&o===(p=s(c,u)););return p}return typeof s=="number"?(f.back||f).$.back(s-1):this};var a={},o})(e,"./back"),e(function(n){var r=e("./root");r.chain.chain=function(x){var m=this,y=m._,M=new(x||m).constructor(m),b=M._,w;return b.root=w=y.root,b.id=++w.once,b.back=m._,b.on=r.on,b.on("in",r.on.in,b),b.on("out",r.on.out,b),M};function a(x){var m,y=this.as,M=y.back,b=y.root,w;if(x.$||(x.$=y.$),this.to.next(x),y.err){y.on("in",{put:y.put=f,$:y.$});return}if(m=x.get){if(b.pass&&(b.pass[y.id]=y),y.lex&&Object.keys(y.lex).forEach(function(L){w[L]=y.lex[L]},w=x.get=x.get||{}),m["#"]||y.soul){if(m["#"]=m["#"]||y.soul,x["#"]||(x["#"]=h(9)),M=b.$.get(m["#"])._,m=m["."]){if(p(M.put,m)&&(w=M.ask&&M.ask[m],(M.ask||(M.ask={}))[m]=M.$.get(m)._,M.on("in",{get:m,put:{"#":M.soul,".":m,":":M.put[m],">":g(b.graph[M.soul],m)}}),w))return}else{if(w=M.ask&&M.ask[""],(M.ask||(M.ask={}))[""]=M,f!==M.put&&(M.on("in",M),w))return;x.$=M.$}return b.ask(c,x),b.on("in",x)}if(m["."])return y.get?(x={get:{".":y.get},$:y.$},(M.ask||(M.ask={}))[y.get]=x.$._,M.on("out",x)):(x={get:y.lex?x.get:{},$:y.$},M.on("out",x));if((y.ask||(y.ask={}))[""]=y,y.get)return m["."]=y.get,(M.ask||(M.ask={}))[y.get]=x.$._,M.on("out",x)}return M.on("out",x)}r.on.out=a;function o(x,m){m=m||this.as;var y=m.root,M=x.$||(x.$=m.$),b=(M||"")._||l,w=x.put||"",L=w["#"],E=w["."],A=f!==w["="]?w["="]:w[":"],O=w[">"]||-1/0,T;if(f!==x.put&&(f===w["#"]||f===w["."]||f===w[":"]&&f===w["="]||f===w[">"])){if(!_(w)){if(!(L=((w||"")._||"")["#"])){console.log("chain not yet supported for",w,"...",x,m);return}return M=m.root.$.get(L),setTimeout.each(Object.keys(w).sort(),function(S){S=="_"||f===(O=g(w,S))||m.on("in",{$:M,put:{"#":L,".":S,"=":w[S],">":O},VIA:x})})}m.on("in",{$:b.back.$,put:{"#":L=b.back.soul,".":E=b.has||b.get,"=":w,">":g(b.back.put,E)},via:x});return}(x.seen||"")[m.id]||((x.seen||(x.seen=function(){}))[m.id]=m,m!==b&&(Object.keys(x).forEach(function(S){w[S]=x[S]},w={}),w.get=m.get||w.get,!m.soul&&!m.has?w.$$$=w.$$$||m.$:b.soul&&(w.$=m.$,w.$$=w.$$||b.$),x=w),u(x,m),(m.soul||x.$$)&&O>=g(y.graph[L],E)&&((w=y.$.get(L)._).put=d(w.put,E,O,A,L)),!b.soul&&O>=g(y.graph[L],E)&&(T=(y.$.get(L)._.next||"")[E])&&(T.put=A,typeof(w=_(A))=="string"&&(T.put=y.$.get(w)._.put||A)),this.to&&this.to.next(x),m.any&&setTimeout.each(Object.keys(m.any),function(S){(S=m.any[S])&&S(x)},0,99),m.echo&&setTimeout.each(Object.keys(m.echo),function(S){(S=m.echo[S])&&S.on("in",x)},0,99),((x.$$||"")._||b).soul&&(T=m.next)&&(T=T[E])&&(w={},Object.keys(x).forEach(function(S){w[S]=x[S]}),w.$=(x.$$||x.$).get(w.get=E),delete w.$$,delete w.$$$,T.on("in",w)),s(x,m))}r.on.in=o;function s(x,m){if(m=m||this.as||x.$._,!(x.$$&&this!==r.on)&&!(!x.put||m.soul)){var y=x.put||"",M=y["="]||y[":"],E,b=m.root,w=b.$.get(y["#"]).get(y["."])._;if(typeof(M=_(M))!="string"){this===r.on&&((w.echo||(w.echo={}))[m.id]=m);return}if(!((w.echo||(w.echo={}))[m.id]&&!(b.pass||"")[m.id])){if(E=b.pass){if(E[M+m.id])return;E[M+m.id]=1}(w.echo||(w.echo={}))[m.id]=m,m.has&&(m.link=M);var L=b.$.get(w.link=M)._;(L.echo||(L.echo={}))[w.id]=w;var E=m.ask||"";(E[""]||m.lex)&&L.on("out",{get:{"#":M}}),setTimeout.each(Object.keys(E),function(A,O){!A||!(O=E[A])||O.on("out",{get:{"#":M,".":A}})},0,99)}}}r.on.link=s;function u(x,m){var y=x.put||"",M=f!==y["="]?y["="]:y[":"],b=m.root,w,L;if(f===M){if(m.soul&&f!==m.put||(L=(x.$$||x.$||"")._||"",x["@"]&&(f!==L.put||f!==m.put)))return;(w=m.link||x.linked)&&delete(b.$.get(w)._.echo||"")[m.id],m.has&&(m.link=null),m.put=f,setTimeout.each(Object.keys(m.next||""),function(E,A){(A=m.next[E])&&(w&&delete(b.$.get(w).get(E)._.echo||"")[A.id],A.on("in",{get:E,put:f,$:A.$}))},0,99);return}m.soul||x.$$||(w=_(M),L=x.$._||"",!((w===L.link||m.has&&!L.link)&&!((b.pass||"")[m.id]&&typeof w!="string"))&&(delete(L.echo||"")[m.id],u({get:m.get,put:f,$:x.$,linked:x.linked=x.linked||L.link},m)))}r.on.unlink=u;function c(x,m){var y=this.as,M=y.$._;M.root;var b=y.get||"",w=(x.put||"")[b["#"]]||"";if(!x.put||typeof b["."]=="string"&&f===w[b["."]]){if(f!==M.put||!M.soul&&!M.has)return;M.ack=(M.ack||0)+1,M.on("in",{get:M.get,put:M.put=f,$:M.$,"@":x["@"]});return}(x._||{}).miss=1,r.on.put(x)}var l={},f,h=String.random,_=r.valid,p=function(x,m){return x&&Object.prototype.hasOwnProperty.call(x,m)},v=r.state,g=v.is,d=v.ify})(e,"./chain"),e(function(n){var r=e("./root");r.chain.get=function(f,h,_){var p,v;if(typeof f=="string"){if(f.length==0)return(p=this.chain())._.err={err:r.log("0 length key!",f)},h&&h.call(p,p._.err),p;var g=this,d=g._,x=d.next||u;(p=x[f])||(p=f&&a(f,g)),p=p&&p.$}else if(typeof f=="function"){let E=function(A,O,T){if(!E.stun&&!((U=y.pass)&&!U[M])){var S=A.$._,R=(A.$$||"")._,C=(R||S).put,k=!S.has&&!S.soul,F={},U;if((k||l===C)&&(C=l===((U=A.put)||"")["="]?l===(U||"")[":"]?U:U[":"]:U["="]),typeof(U=r.valid(C))=="string"&&(C=l===(U=y.$.get(U)._.put)?m.not?l:C:U),!(m.not&&l===C)){if(l===m.stun){if((U=y.stun)&&U.on&&(d.$.back(function(z){if(U.on(""+z.id,F={}),(F.run||0)<E.id)return F}),!F.run&&U.on(""+S.id,F={}),!F.run&&R&&U.on(""+R.id,F={}),E.id>F.run&&((!F.stun||F.stun.end)&&(F.stun=U.on("stun"),F.stun=F.stun&&F.stun.last),F.stun&&!F.stun.end))){(F.stun.add||(F.stun.add={}))[M]=function(){E(A,O,1)};return}if(l===C&&(T=0),(U=y.hatch)&&!U.end&&l===m.hatch&&!T){if(b[S.$._.id])return;b[S.$._.id]=1,U.push(function(){E(A,O,1)});return}b={}}if(y.pass){if(y.pass[M+S.id])return;y.pass[M+S.id]=1}if(m.on){m.ok.call(S.$,C,S.get,A,O||E);return}if(m.v2020){m.ok(A,O||E);return}Object.keys(A).forEach(function(z){U[z]=A[z]},U={}),A=U,A.put=C,m.ok.call(m.as,A,O||E)}}};var w=E;if(h===!0)return o(this,f,h,_),this;p=this;var d=p._,m=h||{},y=d.root,M;m.at=d,m.ok=f;var b={};return E.at=d,(d.any||(d.any={}))[M=String.random(7)]=E,E.off=function(){E.stun=1,d.any&&delete d.any[M]},E.rid=s,E.id=m.run||++y.once,v=y.pass,(y.pass={})[M]=1,m.out=m.out||{get:{}},d.on("out",m.out),y.pass=v,p}else{if(typeof f=="number")return this.get(""+f,h,_);if(typeof(v=c(f))=="string")return this.get(v,h,_);(v=this.get.next)&&(p=v(this,f))}return p?(h&&typeof h=="function"&&p.get(h,_),p):((p=this.chain())._.err={err:r.log("Invalid get request!",f)},h&&h.call(p,p._.err),p)};function a(f,h){var _=h._,p=_.next,v=h.chain(),g=v._;return p||(p=_.next={}),p[g.get=f]=g,h===_.root.$?g.soul=f:(_.soul||_.has)&&(g.has=f),g}function o(f,h,_,p){var v=f._,g=0,d;return(d=v.soul||v.link)?h(d,p,v):v.jam?v.jam.push([h,p]):(v.jam=[[h,p]],f.get(function(m,y){if(!(l===m.put&&!v.root.opt.super&&(d=Object.keys(v.root.opt.peers).length)&&++g<=d)){y.rid(m);var M=(M=m.$)&&M._||{},b=0,w;for(d=v.jam,delete v.jam;w=d[b++];){var L=w[0];w=w[1],L&&L(M.link||M.soul||r.valid(m.put)||((m.put||{})._||{})["#"],w,m,y)}}},{out:{get:{".":!0}}}),f)}function s(f){var h=this.at||this.on;if(!f||h.soul||h.has)return this.off();if(f=(f=(f=f.$||f)._||f).id){h.map;var _;if((_=this.seen||(this.seen={}))[f])return!0;_[f]=!0}}var u={},c=r.valid,l})(e,"./get"),e(function(n){var r=e("./root");r.chain.put=function(p,v,g){var d=this,x=d._,m=x.root;g=g||{},g.root=x.root,g.run||(g.run=m.once),a(g,x.id),g.ack=g.ack||v,g.via=g.via||d,g.data=g.data||p,g.soul||(g.soul=x.soul||typeof v=="string"&&v);var y=g.state=g.state||r.state();return typeof p=="function"?(p(function(M){g.data=M,d.put(c,c,g)}),d):g.soul?(g.$=m.$.get(g.soul),g.todo=[{it:g.data,ref:g.$}],g.turn=g.turn||f,g.ran=g.ran||o,function M(){var b=g.todo,w=b.pop(),L=w.it;w.ref&&w.ref._.id;var E,A,O,T,S;if(a(g,w.ref),(T=w.todo)&&(A=T.pop(),L=L[A],T.length&&b.push(w)),A&&(b.path||(b.path=[])).push(A),!(E=h(L))&&!(S=r.is(L))){if(!Object.plain(L)){o.err(g,"Invalid data: "+u(L)+" at "+(g.via.back(function(U){U.get&&T.push(U.get)},T=[])||T.join("."))+"."+(b.path||[]).join("."));return}for(var R=g.seen||(g.seen=[]),C=R.length;C--;)if(L===(T=R[C]).it){E=L=T.link;break}}if(A&&E)w.node=_(w.node,A,y,L);else{let U=function(z,H){var ne=O.link["#"];H&&(H.off(),H.rid(z));var K=ne||z.soul||(T=(z.$$||z.$)._||"").soul||T.link||((T=T.put||"")._||"")["#"]||T["#"]||((T=z.put||"")&&z.$$?T["#"]:(T["="]||T[":"]||"")["#"]);if(!ne&&a(g,z.$),!K&&!w.link["#"]){(w.wait||(w.wait=[])).push(function(){U(z,H)});return}K||(K=[],(z.$$||z.$).back(function(W){if(T=W.soul||W.link)return K.push(T);K.push(W.get)}),K=K.reverse().join("/")),O.link["#"]=K,!S&&(((g.graph||(g.graph={}))[K]=O.node||(O.node={_:{}}))._["#"]=K),delete g.wait[k],O.wait&&setTimeout.each(O.wait,function(W){W&&W()}),g.ran(g)};var F=U;if(!g.seen){o.err(g,"Data at root of graph must be a node (an object).");return}g.seen.push(O={it:L,link:{},todo:S?[]:Object.keys(L).sort().reverse(),path:(b.path||[]).slice(),up:w}),w.node=_(w.node,A,y,O.link),!S&&O.todo.length&&b.push(O);var k=g.seen.length;(g.wait||(g.wait={}))[k]="",T=(O.ref=S?L:A?w.ref.get(A):w.ref)._,(T=L&&(L._||"")["#"]||T.soul||T.link)?U({soul:T}):O.ref.get(U,{run:g.run,v2020:1,out:{get:{".":" "}}})}if(!b.length)return g.ran(g);g.turn(M)}(),d):(s(g),d)};function a(p,v){if(v){v=(v._||"").id||v;var g=p.root.stun||(p.root.stun={on:r.on}),d={},x;p.stun||(p.stun=g.on("stun",function(){})),(x=g.on(""+v))&&x.the.last.next(d),!(d.run>=p.run)&&g.on(""+v,function(m){if(p.stun.end){this.off(),this.to.next(m);return}m.run=m.run||p.run,m.stun=m.stun||p.stun})}}function o(p){if(p.err){o.end(p.stun,p.root);return}if(!(p.todo.length||p.end||!Object.empty(p.wait))){p.end=1;var v=p.$.back(-1)._,g=v.root,d=v.ask(function(M){g.on("ack",M),M.err&&!M.lack&&r.log(M),++x>(p.acks||0)&&this.off(),p.ack&&p.ack(M,this)},p.opt),x=0,m=p.stun,y;(y=function(){m&&(o.end(m,g),setTimeout.each(Object.keys(m=m.add||""),function(M){(M=m[M])&&M()}))}).hatch=y,p.ack&&!p.ok&&(p.ok=p.acks||9),p.via._.on("out",{put:p.out=p.graph,ok:p.ok&&{"@":p.ok+1},opt:p.opt,"#":d,_:y})}}o.end=function(p,v){p.end=l,p.the.to===p&&p===p.the.last&&delete v.stun,p.off()},o.err=function(p,v){(p.ack||l).call(p,p.out={err:p.err=r.log(v)}),p.ran(p)};function s(p){var v=p.via._,g;p.via=p.via.back(function(d){if(d.soul||!d.get)return d.$;g=p.data,(p.data={})[d.get]=g}),(!p.via||!p.via._.soul)&&(p.via=v.root.$.get(((p.data||"")._||"")["#"]||v.$.back("opt.uuid")())),p.via.put(p.data,p.ack,p)}function u(p,v){return p&&(v=p.constructor)&&v.name||typeof p}var c,l=function(){},f=setTimeout.turn,h=r.valid,_=r.state.ify})(e,"./put"),e(function(n){var r=e("./root");e("./chain"),e("./back"),e("./put"),e("./get"),n.exports=r})(e,"./index"),e(function(n){var r=e("./index");r.chain.on=function(s,u,c,l){var f=this,h=f._;h.root;var _;if(typeof s=="string")return u?(_=h.on(s,u,c||h,l),c&&c.$&&(c.subs||(c.subs=[])).push(_),f):h.on(s);var p=u;return(p=p===!0?{change:!0}:p||{}).not=1,p.on=1,f.get(s,p),f},r.chain.once=function(s,u){if(u=u||{},!s)return a(this);var c=this,l=c._,f=l.root;l.put;var h=String.random(7),_;return c.get(function(p,v,g,d){var x=this,m=x._,y=m.one||(m.one={});if(d.stun||y[h]==="")return;if((_=r.valid(p))===!0){M();return}if(typeof _=="string")return;clearTimeout((l.one||"")[h]),clearTimeout(y[h]),y[h]=setTimeout(M,u.wait||99);function M(b){if(!m.has&&!m.soul&&(m={put:p,get:v}),o===(_=m.put)&&(_=((g.$$||"")._||"").put),typeof r.valid(_)=="string"&&(_=f.$.get(_)._.put,_===o&&!b)){y[h]=setTimeout(function(){M(1)},u.wait||99);return}d.stun||y[h]!==""&&(y[h]="",(l.soul||l.has)&&d.off(),s.call(x,_,m.get),clearTimeout(y[h]))}},{on:1}),c};function a(s,u,c){return r.log.once("valonce","Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),(c=s.chain())._.nix=s.once(function(l,f){c._.on("in",this._)}),c._.lex=s._.lex,c}r.chain.off=function(){var s=this,u=s._,c,l=u.back;if(l)return u.ack=0,(c=l.next)&&c[u.get]&&delete c[u.get],(c=l.any)&&(delete l.any,l.any={}),(c=l.ask)&&delete c[u.get],(c=l.put)&&delete c[u.get],(c=u.soul)&&delete l.root.graph[c],(c=u.map)&&Object.keys(c).forEach(function(f,h){h=c[f],h.link&&l.root.$.get(h.link).off()}),(c=u.next)&&Object.keys(c).forEach(function(f,h){h=c[f],h.$.off()}),u.on("off",{}),s};var o})(e,"./on"),e(function(n){var r=e("./index"),a=r.chain.get.next;r.chain.get.next=function(c,l){var f;return Object.plain(l)?(f=((f=l["#"])||"")["="]||f)?c.get(f):((f=c.chain()._).lex=l,c.on("in",function(h){String.match(h.get||(h.put||"")["."],l["."]||l["#"]||l)&&f.on("in",h),this.to.next(h)}),f.$):(a||s)(c,l)},r.chain.map=function(c,l,f){var h=this,_=h._,p,v;return Object.plain(c)&&(p=c["."]?c:{".":c},c=u),c?(r.log.once("mapfn","Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),v=h.chain(),h.map().on(function(g,d,x,m){var y=(c||s).call(this,g,d,x,m);if(u!==y){if(g===y)return v._.on("in",x);if(r.is(y))return v._.on("in",y._);var M={};Object.keys(x.put).forEach(function(b){M[b]=x.put[b]},M),M["="]=y,v._.on("in",{get:d,put:M})}}),v):((v=_.each)||((_.each=v=h.chain())._.lex=p||v._.lex||_.lex,v._.nix=h.back("nix"),h.on("in",o,v._)),v)};function o(c){this.to.next(c);var l=this.as,f=c.$,h=f._,_=c.put,p;!h.soul&&!c.$$||(p=l.lex)&&!String.match(c.get||(_||"")["."],p["."]||p["#"]||p)||r.on.link(c,l)}var s=function(){},u})(e,"./map"),e(function(n){var r=e("./index");r.chain.set=function(a,o,s){var u=this,c=u.back(-1),l,f;return o=o||function(){},s=s||{},s.item=s.item||a,(l=((a||"")._||"")["#"])&&((a={})["#"]=l),typeof(f=r.valid(a))=="string"?u.get(l=f).put(a,o,s):r.is(a)?(u.put(function(h){a.get(function(_,p,v){if(!_)return o.call(u,{err:r.log('Only a node can be linked! Not "'+v.put+'"!')});(f={})[_]={"#":_},h(f)},!0)}),a):(Object.plain(a)&&(a=c.get(l=u.back("opt.uuid")()).put(a)),u.get(l||c.back("opt.uuid")(7)).put(a,o,s))}})(e,"./set"),e(function(n){e("./shim");var r=function(){},a=JSON.parseAsync||function(c,l,f){var h,_=+new Date;try{l(h,JSON.parse(c,f),o.sucks(+new Date-_))}catch(p){l(p)}},o=JSON.stringifyAsync||function(c,l,f,h){var _,p=+new Date;try{l(_,JSON.stringify(c,f,h),o.sucks(+new Date-p))}catch(v){l(v)}};o.sucks=function(c){c>99&&(console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."),o.sucks=r)};function s(c){var l=function(){},f=c.opt||{};f.log=f.log||console.log,f.gap=f.gap||f.wait||0,f.max=f.max||(f.memory?f.memory*999*999:3e8)*.3,f.pack=f.pack||f.max*.01*.01,f.puff=f.puff||9;var h=setTimeout.turn||setTimeout,_=c.dup,p=_.check,v=_.track,g=l.hear=function(m,y){if(m){if(f.max<=m.length)return l.say({dam:"!",err:"Message too big!"},y);l===this&&(g.d+=m.length||0,++g.c);var M=y.SH=+new Date,b=m[0],w;if(b==="["){a(m,function(L,E){if(L||!E)return l.say({dam:"!",err:"DAM JSON parse error."},y);console.STAT&&console.STAT(+new Date,E.length,"# on hear batch");var A=f.puff;(function O(){for(var T=+new Date,S=0,R;S<A&&(R=E[S++]);)l.hear(R,y);E=E.slice(S),console.STAT&&console.STAT(T,+new Date-T,"hear loop"),d(y),E.length&&h(O,0)})()}),m="";return}if(b==="{"||(m["#"]||Object.plain(m))&&(w=m)){if(w)return g.one(w,y,M);a(m,function(L,E){if(L||!E)return l.say({dam:"!",err:"DAM JSON parse error."},y);g.one(E,y,M)});return}}};g.one=function(m,y,O){var b,w,L,E,A;if(m.DBG&&(m.DBG=A={DBG:m.DBG}),A&&(A.h=O),A&&(A.hp=+new Date),(b=m["#"])||(b=m["#"]=String.random(9)),!(L=p(b))&&(w=m["##"],!(w&&(L=m["@"]||m.get&&b)&&_.check(E=L+w)))){if((m._=function(){}).via=l.leap=y,(L=m["><"])&&typeof L=="string"&&L.slice(0,99).split(",").forEach(function(T){this[T]=1},m._.yo={}),L=m.dam){(L=l.hear[L])&&L(m,y,c),v(b);return}(L=m.ok)&&(m._.near=L["/"]);var O=+new Date;A&&(A.is=O),y.SI=b,v.ed=function(T){b===T&&(v.ed=0,(T=_.s[b])&&(T.via=y,m.get&&(T.it=m)))},c.on("in",l.last=m),A&&(A.hd=+new Date),console.STAT&&console.STAT(O,+new Date-O,m.get?"msg get":m.put?"msg put":"msg"),v(b),E&&v(E),l.leap=l.last=null}},g.c=g.d=0,function(){var m=0,y;l.hash=function(w,L){var E,A,O,T=+new Date;o(w.put,function S(R,C){var k=(A||(A=O=C||"")).slice(0,32768);if(E=String.hash(k,E),A=A.slice(32768),A){h(S,0);return}console.STAT&&console.STAT(T,+new Date-T,"say json+hash"),w._.$put=O,w["##"]=E,l.say(w,L),delete w._.$put},M)};function M(w,L){var E;return L instanceof Object?(Object.keys(L).sort().forEach(b,{to:E={},on:L}),E):L}function b(w){this.to[w]=this.on[w]}l.say=function(w,L){var E;if((E=this)&&(E=E.to)&&E.next&&E.next(w),!w)return!1;var A,O,T,S=w["@"],R=w._||(w._=function(){}),C=w.DBG,k=+new Date;if(R.y=R.y||k,L||C&&(C.y=k),(A=w["#"])||(A=w["#"]=String.random(9)),!y&&v(A),!(O=w["##"])&&u!==w.put&&!R.via&&S){l.hash(w,L);return}if(!L&&S&&(L=(E=_.s[S])&&(E.via||(E=E.it)&&(E=E._)&&E.via)||(E=l.last)&&S===E["#"]&&l.leap),!L&&S)return _.s[S]?void 0:(console.STAT&&console.STAT(+new Date,++m,"total no peer to ack to"),!1);if(S&&!w.put&&!O&&((_.s[S]||"").it||"")["##"])return!1;if(!L&&l.way)return l.way(w);if(C&&(C.yh=+new Date),!(T=R.raw)){l.raw(w,L);return}if(C&&(C.yr=+new Date),!L||!L.id){if(!Object.plain(L||f.peers))return!1;var k=+new Date;f.puff;var F=f.peers,U=Object.keys(L||f.peers||{});console.STAT&&console.STAT(k,+new Date-k,"peer keys"),function ne(){var K=+new Date;y=1;var W=R.raw;R.raw=T;for(var q=0,ie;q<9&&(ie=(U||"")[q++]);)(ie=F[ie]||(L||"")[ie])&&l.say(w,ie);R.raw=W,y=0,U=U.slice(q),console.STAT&&console.STAT(K,+new Date-K,"say loop"),U.length&&(h(ne,0),S&&v(S))}();return}if(!L.wire&&l.wire&&l.wire(L),A!==L.last){if(L.last=A,L===R.via||(E=R.yo)&&(E[L.url]||E[L.pid]||E[L.id]))return!1;if(console.STAT&&console.STAT(k,((C||R).yp=+new Date)-(R.y||k),"say prep"),!y&&S&&v(S),L.batch){if(L.tail=(E=L.tail||0)+T.length,L.tail<=f.pack){L.batch+=(E?",":"")+T;return}d(L)}L.batch="[";var z=+new Date;setTimeout(function(){console.STAT&&console.STAT(z,+new Date-z,"0ms TO"),d(L)},f.gap),x(T,L),console.STAT&&S===L.SI&&console.STAT(k,+new Date-L.SH,"say ack")}},l.say.c=l.say.d=0,l.raw=function(w,L){if(!w)return"";var E=w._||{},A,O;if(O=E.raw)return O;if(typeof w=="string")return w;var T=w["##"],S=w["@"];if(T&&S){if(!E.via&&p(S+T))return!1;if(O=(_.s[S]||"").it){if(T===O["##"])return!1;O["##"]||(O["##"]=T)}}if(!w.dam&&!w["@"]){var R=0,C=[];O=f.peers;for(var k in O){var F=O[k];if(C.push(F.url||F.pid||F.id),++R>6)break}R>1&&(w["><"]=C.join())}if(w.put&&(O=w.ok)&&(w.ok={"@":(O["@"]||1)-1,"/":O["/"]==w._.near?l.near:O["/"]}),A=E.$put){O={},Object.keys(w).forEach(function(z){O[z]=w[z]}),O.put=":])([:",o(O,function(z,H){if(!z){var ne=+new Date;O=H.indexOf('"put":":])([:"'),U(u,H=H.slice(0,O+6)+A+H.slice(O+14)),console.STAT&&console.STAT(ne,+new Date-ne,"say slice")}});return}o(w,U);function U(z,H){z||(E.raw=H,l.say(w,L))}}}();function d(m){var y=m.batch,M=typeof y=="string";if(M&&(y+="]"),m.batch=m.tail=null,!!y&&!(M?3>y.length:!y.length)){if(!M)try{y=y.length===1?y[0]:JSON.stringify(y)}catch(b){return f.log("DAM JSON stringify error",b)}y&&x(y,m)}}function x(m,y){try{var M=y.wire;y.say?y.say(m):M.send&&M.send(m),l.say.d+=m.length||0,++l.say.c}catch{(y.queue=y.queue||[]).push(m)}}return l.near=0,l.hi=function(m){var y=m.wire,M;if(!y){l.wire(m.length&&{url:m,id:m}||m);return}m.id?f.peers[m.url||m.id]=m:(M=m.id=m.id||m.url||String.random(9),l.say({dam:"?",pid:c.opt.pid},f.peers[M]=m),delete _.s[m.last]),m.met||(l.near++,m.met=+new Date,c.on("hi",m)),M=m.queue,m.queue=[],setTimeout.each(M||[],function(b){x(b,m)},0,9)},l.bye=function(m){m.met&&--l.near,delete m.met,c.on("bye",m);var y=+new Date;y=y-(m.met||y),l.bye.time=((l.bye.time||y)+y)/2},l.hear["!"]=function(m,y){f.log("Error:",m.err)},l.hear["?"]=function(m,y){m.pid&&(y.pid||(y.pid=m.pid),m["@"])||(l.say({dam:"?",pid:f.pid,"@":m["#"]},y),delete _.s[y.last])},l.hear.mob=function(m,y){if(m.peers){var M=Object.keys(m.peers),b=M[Math.random()*M.length>>0];b&&(l.bye(y),l.hi(b))}},c.on("create",function(m){m.opt.pid=m.opt.pid||String.random(9),this.to.next(m),m.on("out",l.say)}),c.on("bye",function(m,y){m=f.peers[m.id||m]||m,this.to.next(m),m.bye?m.bye():(y=m.wire)&&y.close&&y.close(),delete f.peers[m.id],m.wire=null}),c.on("bye",function(m,y){this.to.next(m),(y=console.STAT)&&(y.peers=l.near),(y=m.url)&&setTimeout(function(){},f.lack||9e3)}),c.on("hi",function(m,y){if(this.to.next(m),(y=console.STAT)&&(y.peers=l.near),!f.super){var M=Object.keys(c.next||"");M.length>9999&&!console.SUBS&&console.log(console.SUBS="Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."),setTimeout.each(M,function(b){var w=c.next[b];if(f.super||(w.ask||"")[""]){l.say({get:{"#":b}},m);return}setTimeout.each(Object.keys(w.ask||""),function(L){L&&l.say({"##":String.hash((c.graph[b]||"")[L]),get:{"#":b,".":L}},m)})})}}),l}var u;try{n.exports=s}catch{}})(e,"./mesh"),e(function(n){var r=e("./index");r.Mesh=e("./mesh"),r.on("opt",function(o){if(this.to.next(o),o.once)return;var s=o.opt;if(s.WebSocket===!1)return;var u=r.window||{},c=s.WebSocket||u.WebSocket||u.webkitWebSocket||u.mozWebSocket;if(!c)return;s.WebSocket=c;var l=s.mesh=s.mesh||r.Mesh(o);l.wire||s.wire,l.wire=s.wire=f;function f(v){try{if(!v||!v.url)return d&&d(v);var g=v.url.replace(/^http/,"ws"),d=v.wire=new s.WebSocket(g);return d.onclose=function(){_(v),s.mesh.bye(v)},d.onerror=function(x){_(v)},d.onopen=function(){s.mesh.hi(v)},d.onmessage=function(x){x&&s.mesh.hear(x.data||x,v)},d}catch{s.mesh.bye(v)}}setTimeout(function(){!s.super&&o.on("out",{dam:"hi"})},1);var h=2*999;function _(v){clearTimeout(v.defer),s.peers[v.url]&&(p&&v.retry<=0||(v.retry=(v.retry||s.retry+1||60)-(-v.tried+(v.tried=+new Date)<h*4?1:0),v.defer=setTimeout(function g(){if(p&&p.hidden)return setTimeout(g,h);f(v)},h)))}var p=""+a!=typeof document&&document});var a})(e,"./websocket"),e(function(n){if(!(typeof Gun>"u")){var r=function(){},a;try{a=(Gun.window||r).localStorage}catch{}a||(Gun.log("Warning: No localStorage exists to persist data to!"),a={setItem:function(s,u){this[s]=u},removeItem:function(s){delete this[s]},getItem:function(s){return this[s]}});var o=JSON.stringifyAsync||function(s,u,c,l){var f;try{u(f,JSON.stringify(s,c,l))}catch(h){u(h)}};Gun.on("create",function s(u){this.to.next(u);var c=u.opt;u.graph;var l=[],f,h,_,p;if(c.localStorage===!1)return;c.prefix=c.file||"gun/";try{f=s[c.prefix]=s[c.prefix]||JSON.parse(_=a.getItem(c.prefix))||{}}catch{f=s[c.prefix]={}}_=(_||"").length,u.on("get",function(g){this.to.next(g);var d=g.get,x,m,y,M;!d||!(x=d["#"])||(m=f[x]||M,m&&(y=d["."])&&!Object.plain(y)&&(m=Gun.state.ify({},y,Gun.state.is(m,y),m[y],x)),Gun.on.get.ack(g,m))}),u.on("put",function(g){this.to.next(g);var d=g.put,x=d["#"],m=d["."],y=g["#"],M=g.ok||"";if(f[x]=Gun.state.ify(f[x],m,d[">"],d[":"],x),p&&_>4999880){u.on("in",{"@":y,err:"localStorage max!"});return}!g["@"]&&(!g._.via||Math.random()<M["@"]/M["/"])&&l.push(y),!h&&(h=setTimeout(v,9+_/333))});function v(){if(!l.length&&((setTimeout.turn||"").s||"").length){setTimeout(v,99);return}var g=l;clearTimeout(h),h=!1,l=[],o(f,function(d,x){try{!d&&a.setItem(c.prefix,x)}catch(m){d=p=m||"localStorage failure"}d&&(Gun.log(d+" Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"),u.on("localStorage:error",{err:d,get:c.prefix,put:f})),_=x.length,setTimeout.each(g,function(m){u.on("in",{"@":m,err:d,ok:0})},0,99)})}})}})(e,"./localStorage")})(),function(){var O;if(""+O!=typeof Gun){var e=function(T){console.warn("Warning! Deprecated internal utility will break in next version:",T)},t=Gun;t.fn=t.fn||{is:function(T){return e("fn"),!!T&&typeof T=="function"}},t.bi=t.bi||{is:function(T){return e("bi"),T instanceof Boolean||typeof T=="boolean"}},t.num=t.num||{is:function(T){return e("num"),!n(T)&&(T-parseFloat(T)+1>=0||T===1/0||T===-1/0)}},t.text=t.text||{is:function(T){return e("text"),typeof T=="string"}},t.text.ify=t.text.ify||function(T){return e("text.ify"),t.text.is(T)?T:typeof JSON<"u"?JSON.stringify(T):T&&T.toString?T.toString():T},t.text.random=t.text.random||function(T,S){e("text.random");var R="";for(T=T||24,S=S||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";T>0;)R+=S.charAt(Math.floor(Math.random()*S.length)),T--;return R},t.text.match=t.text.match||function(T,S){var R,C;return e("text.match"),typeof T!="string"?!1:(typeof S=="string"&&(S={"=":S}),S=S||{},R=S["="]||S["*"]||S[">"]||S["<"],T===R?!0:C!==S["="]?!1:(R=S["*"]||S[">"]||S["<"],T.slice(0,(R||"").length)===R?!0:C!==S["*"]?!1:C!==S[">"]&&C!==S["<"]?T>=S[">"]&&T<=S["<"]:C!==S[">"]&&T>=S[">"]||C!==S["<"]&&T<=S["<"]))},t.text.hash=t.text.hash||function(T,S){if(e("text.hash"),typeof T=="string"){if(S=S||0,!T.length)return S;for(var R=0,C=T.length,k;R<C;++R)k=T.charCodeAt(R),S=(S<<5)-S+k,S|=0;return S}},t.list=t.list||{is:function(T){return e("list"),T instanceof Array}},t.list.slit=t.list.slit||Array.prototype.slice,t.list.sort=t.list.sort||function(T){return e("list.sort"),function(S,R){return!S||!R?0:(S=S[T],R=R[T],S<R?-1:S>R?1:0)}},t.list.map=t.list.map||function(T,S,R){return e("list.map"),E(T,S,R)},t.list.index=1,t.obj=t.boj||{is:function(T){return e("obj"),T?T instanceof Object&&T.constructor===Object||Object.prototype.toString.call(T).match(/^\[object (\w+)\]$/)[1]==="Object":!1}},t.obj.put=t.obj.put||function(T,S,R){return e("obj.put"),(T||{})[S]=R,T},t.obj.has=t.obj.has||function(T,S){return e("obj.has"),T&&Object.prototype.hasOwnProperty.call(T,S)},t.obj.del=t.obj.del||function(T,S){if(e("obj.del"),!!T)return T[S]=null,delete T[S],T},t.obj.as=t.obj.as||function(T,S,R,C){return e("obj.as"),T[S]=T[S]||(C===R?{}:R)},t.obj.ify=t.obj.ify||function(T){if(e("obj.ify"),y(T))return T;try{T=JSON.parse(T)}catch{T={}}return T},function(){var T;function S(R,C){b(this,C)&&T!==this[C]||(this[C]=R)}t.obj.to=t.obj.to||function(R,C){return e("obj.to"),C=C||{},E(R,S,C),C}}(),t.obj.copy=t.obj.copy||function(T){return e("obj.copy"),T&&JSON.parse(JSON.stringify(T))},function(){function T(S,R){var C=this.n,k;if(!(C&&(R===C||y(C)&&b(C,R)))&&k!==R)return!0}t.obj.empty=t.obj.empty||function(S,R){return e("obj.empty"),S?!E(S,T,{n:R}):!0}}(),function(){function T(C,k){if(arguments.length===2){T.r=T.r||{},T.r[C]=k;return}T.r=T.r||[],T.r.push(C)}var S=Object.keys,R;Object.keys=Object.keys||function(C){return R(C,function(k,F,U){U(F)})},t.obj.map=R=t.obj.map||function(C,k,F){e("obj.map");var U,z=0,H,ne,K,W,q=typeof k=="function";if(T.r=U,S&&y(C)&&(K=S(C),W=!0),F=F||{},n(C)||K)for(H=(K||C).length;z<H;z++){var ie=z+t.list.index;if(q){if(ne=W?k.call(F,C[K[z]],K[z],T):k.call(F,C[z],ie,T),ne!==U)return ne}else if(k===C[W?K[z]:z])return K?K[z]:ie}else for(z in C)if(q){if(b(C,z)&&(ne=F?k.call(F,C[z],z,T):k(C[z],z,T),ne!==U))return ne}else if(k===C[z])return z;return q?T.r:t.list.index?0:-1}}(),t.time=t.time||{},t.time.is=t.time.is||function(T){return e("time"),T?T instanceof Date:+new Date().getTime()};var x=t.fn.is,n=t.list.is,m=t.obj,y=m.is,b=m.has,E=m.map,r={};r.is=function(T){return e("val.is"),T===O?!1:T===null?!0:T===1/0?!1:s(T)||o(T)||p(T)?!0:r.link.is(T)||!1},r.link=r.rel={_:"#"},function(){r.link.is=function(S){if(e("val.link.is"),S&&S[a]&&!S._&&y(S)){var R={};if(E(S,T,R),R.id)return R.id}return!1};function T(S,R){var C=this;if(C.id)return C.id=!1;if(R==a&&s(S))C.id=S;else return C.id=!1}}(),r.link.ify=function(T){return e("val.link.ify"),L({},a,T)},t.obj.has._=".";var a=r.link._,O,o=t.bi.is,p=t.num.is,s=t.text.is,m=t.obj,y=m.is,L=m.put,E=m.map;t.val=t.val||r;var u={_:"_"};u.soul=function(T,S){return e("node.soul"),T&&T._&&T._[S||f]},u.soul.ify=function(T,S){return e("node.soul.ify"),S=typeof S=="string"?{soul:S}:S||{},T=T||{},T._=T._||{},T._[f]=S.soul||T._[f]||l(),T},u.soul._=r.link._,function(){u.is=function(S,R,C){e("node.is");var k;return y(S)&&(k=u.soul(S))?!E(S,T,{as:C,cb:R,s:k,n:S}):!1};function T(S,R){if(R!==u._){if(!r.is(S))return!0;this.cb&&this.cb.call(this.as,S,R,this.n,this.s)}}}(),function(){u.ify=function(S,R,C){return e("node.ify"),R?typeof R=="string"?R={soul:R}:typeof R=="function"&&(R={map:R}):R={},R.map&&(R.node=R.map.call(C,S,O,R.node||{})),(R.node=u.soul.ify(R.node||{},R))&&E(S,T,{o:R,as:C}),R.node};function T(S,R){var C=this.o,k,F;if(C.map){k=C.map.call(this.as,S,""+R,C.node),F===k?M(C.node,R):C.node&&(C.node[R]=k);return}r.is(S)&&(C.node[R]=S)}}();var m=t.obj,y=m.is,M=m.del,E=m.map,c=t.text,l=c.random,f=u.soul._,O;t.node=t.node||u;var h=t.state;h.lex=function(){return e("state.lex"),h().toString(36).replace(".","")},h.to=function(T,S,R){e("state.to");var C=(T||{})[S];return y(C)&&(C=A(C)),h.ify(R,S,h.is(T,S),C,u.soul(T))},function(){h.map=function(S,R,C){e("state.map");var k,F=y(F=S||R)?F:null;return S=x(S=S||R)?S:null,F&&!S?(R=p(R)?R:h(),F[g]=F[g]||{},E(F,T,{o:F,s:R}),F):(C=C||y(R)?R:k,R=p(R)?R:h(),function(U,z,H,ne){if(!S)return T.call({o:H,s:R},U,z),U;S.call(C||this||{},U,z,H,ne),!(b(H,z)&&k===H[z])&&T.call({o:H,s:R},U,z)})};function T(S,R){g!==R&&h.ify(this.o,R,this.s)}}();var m=t.obj;m.as;var b=m.has,y=m.is,E=m.map,A=m.copy,_=t.num,p=_.is,v=t.fn,x=v.is,g=u._,O,d={};(function(){d.is=function(R,C,k,F){return e("graph.is"),!R||!y(R)||w(R)?!1:!E(R,T,{cb:C,fn:k,as:F})};function T(R,C){if(!R||C!==u.soul(R)||!u.is(R,this.fn,this.as))return!0;this.cb&&(S.n=R,S.as=this.as,this.cb.call(S.as,R,C,S))}function S(R){R&&u.is(S.n,R,S.as)}})(),function(){d.ify=function(F,U,z){e("graph.ify");var H={path:[],obj:F};return U?typeof U=="string"?U={soul:U}:typeof U=="function"&&(U.map=U):U={},typeof z=="string"&&(U.soul=U.soul||z,z=O),U.soul&&(H.link=r.link.ify(U.soul)),U.shell=(z||{}).shell,U.graph=U.graph||{},U.seen=U.seen||[],U.as=U.as||z,T(U,H),U.root=H.node,U.graph};function T(F,U){var z;return(z=k(F,U))?z:(U.env=F,U.soul=R,u.ify(U.obj,S,U)&&(U.link=U.link||r.link.ify(u.soul(U.node)),U.obj!==F.shell&&(F.graph[r.link.is(U.link)]=U.node)),U)}function S(F,U,z){var H=this,ne=H.env,K,W;if(u._===U&&b(F,r.link._))return z._;if(K=C(F,U,z,H,ne)){if(U||(H.node=H.node||z||{},b(F,u._)&&u.soul(F)&&(H.node._=A(F._)),H.node=u.soul.ify(H.node,r.link.is(H.link)),H.link=H.link||r.link.ify(u.soul(H.node))),(W=ne.map)&&(W.call(ne.as||{},F,U,z,H),b(z,U))){if(F=z[U],O===F){M(z,U);return}if(!(K=C(F,U,z,H,ne)))return}if(!U)return H.node;if(K===!0)return F;if(W=T(ne,{obj:F,path:H.path.concat(U)}),!!W.node)return W.link}}function R(F){var U=this,z=r.link.is(U.link),H=U.env.graph;U.link=U.link||r.link.ify(F),U.link[r.link._]=F,U.node&&U.node[u._]&&(U.node[u._][r.link._]=F),b(H,z)&&(H[F]=H[z],M(H,z))}function C(F,U,z,H,ne){var K;if(r.is(F))return!0;if(y(F))return 1;if(K=ne.invalid)return F=K.call(ne.as||{},F,U,z),C(F,U,z,H,ne);ne.err="Invalid value at '"+H.path.concat(U).join(".")+"'!",t.list.is(F)&&(ne.err+=" Use `.set(item)` instead of an Array.")}function k(F,U){for(var z=F.seen,H=z.length,ne;H--;)if(ne=z[H],U.obj===ne.obj)return ne;z.push(U)}}(),d.node=function(T){e("graph.node");var S=u.soul(T);if(S)return L({},S,T)},function(){d.to=function(S,R,C){if(e("graph.to"),!!S){var k={};return C=C||{seen:{}},E(S[R],T,{obj:k,graph:S,opt:C}),k}};function T(S,R){var C,k;if(u._===R){if(w(S,r.link._))return;this.obj[R]=A(S);return}if(!(C=r.link.is(S))){this.obj[R]=S;return}if(k=this.opt.seen[C]){this.obj[R]=k;return}this.obj[R]=this.opt.seen[C]=d.to(this.graph,C,this.opt)}}();var x=t.fn.is,m=t.obj,y=m.is,M=m.del,b=m.has,w=m.empty,L=m.put,E=m.map,A=m.copy,O;t.graph=t.graph||d}}()})(uo);var Jf=uo.exports,Qf=Jf;const eh=Zf(Qf);var fo={exports:{}};fo.exports;(function(i){(function(){function e(n,r){return r?ru(n):n.slice?e[a(n)]:function(o,s){n(o={exports:{}}),e[a(s)]=o.exports};function a(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){typeof self<"u"&&(n.window=self),typeof window<"u"&&(n.window=window);var r=n.window||n,a,o=r.SEA||{};(o.window=n.window)&&(o.window.SEA=o);try{a+""!=typeof t&&(t.exports=o)}catch{}n.exports=o})(e,"./root"),e(function(n){var r=e("./root");try{r.window&&location.protocol.indexOf("s")<0&&location.host.indexOf("localhost")<0&&!/^127\.\d+\.\d+\.\d+$/.test(location.hostname)&&location.protocol.indexOf("file:")<0&&(console.warn("HTTPS needed for WebCrypto in SEA, redirecting..."),location.protocol="https:")}catch{}})(e,"./https"),e(function(n){var r;if(r+""==typeof btoa){if(r+""==typeof Buffer)try{ja.Buffer=e("buffer",1).Buffer}catch{console.log("Please `npm install buffer` or add it to your package.json !")}ja.btoa=function(a){return Buffer.from(a,"binary").toString("base64")},ja.atob=function(a){return Buffer.from(a,"base64").toString("binary")}}})(e,"./base64"),e(function(n){e("./base64");function r(){}Object.assign(r,{from:Array.from}),r.prototype=Object.create(Array.prototype),r.prototype.toString=function(a,o,s){a=a||"utf8",o=o||0;const u=this.length;if(a==="hex"){const c=new Uint8Array(this);return[...Array((s&&s+1||u)-o).keys()].map(l=>c[l+o].toString(16).padStart(2,"0")).join("")}if(a==="utf8")return Array.from({length:(s||u)-o},(c,l)=>String.fromCharCode(this[l+o])).join("");if(a==="base64")return btoa(this)},n.exports=r})(e,"./array"),e(function(n){e("./base64");var r=e("./array");function a(...o){return console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()"),a.from(...o)}a.prototype=Object.create(Array.prototype),Object.assign(a,{from(){if(!Object.keys(arguments).length||arguments[0]==null)throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");const o=arguments[0];let s;if(typeof o=="string"){const c=arguments[1]||"utf8";if(c==="hex"){const l=o.match(/([\da-fA-F]{2})/g).map(f=>parseInt(f,16));if(!l||!l.length)throw new TypeError("Invalid first argument for type 'hex'.");s=r.from(l)}else if(c==="utf8"||c==="binary"){const l=o.length,f=new Uint16Array(l);Array.from({length:l},(h,_)=>f[_]=o.charCodeAt(_)),s=r.from(f)}else if(c==="base64"){const l=atob(o),f=l.length,h=new Uint8Array(f);Array.from({length:f},(_,p)=>h[p]=l.charCodeAt(p)),s=r.from(h)}else c==="binary"?s=r.from(o):console.info("SafeBuffer.from unknown encoding: "+c);return s}if(o.byteLength,o.byteLength?o.byteLength:o.length){let c;return o instanceof ArrayBuffer&&(c=new Uint8Array(o)),r.from(c||o)}},alloc(o,s=0){return r.from(new Uint8Array(Array.from({length:o},()=>s)))},allocUnsafe(o){return r.from(new Uint8Array(Array.from({length:o})))},concat(o){if(!Array.isArray(o))throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");return r.from(o.reduce((s,u)=>s.concat(Array.from(u)),[]))}}),a.prototype.from=a.from,a.prototype.toString=r.prototype.toString,n.exports=a})(e,"./buffer"),e(function(n){const r=e("./root"),a={Buffer:e("./buffer")};var o={},s;if(JSON.parseAsync=JSON.parseAsync||function(c,l,f){var h;try{l(h,JSON.parse(c,f))}catch(_){l(_)}},JSON.stringifyAsync=JSON.stringifyAsync||function(c,l,f,h){var _;try{l(_,JSON.stringify(c,f,h))}catch(p){l(p)}},a.parse=function(c,l){return new Promise(function(f,h){JSON.parseAsync(c,function(_,p){_?h(_):f(p)},l)})},a.stringify=function(c,l,f){return new Promise(function(h,_){JSON.stringifyAsync(c,function(p,v){p?_(p):h(v)},l,f)})},r.window&&(a.crypto=r.window.crypto||r.window.msCrypto,a.subtle=(a.crypto||o).subtle||(a.crypto||o).webkitSubtle,a.TextEncoder=r.window.TextEncoder,a.TextDecoder=r.window.TextDecoder,a.random=c=>a.Buffer.from(a.crypto.getRandomValues(new Uint8Array(a.Buffer.alloc(c))))),!a.TextDecoder){const{TextEncoder:c,TextDecoder:l}=e((s+""==typeof t?".":"")+"./lib/text-encoding",1);a.TextDecoder=l,a.TextEncoder=c}if(!a.crypto)try{var u=e("crypto",1);Object.assign(a,{crypto:u,random:l=>a.Buffer.from(u.randomBytes(l))});const{Crypto:c}=e("@peculiar/webcrypto",1);a.ossl=a.subtle=new c({directory:"ossl"}).subtle}catch{console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !")}n.exports=a})(e,"./shim"),e(function(n){var r=e("./root"),a=e("./shim"),o={};o.pbkdf2={hash:{name:"SHA-256"},iter:1e5,ks:64},o.ecdsa={pair:{name:"ECDSA",namedCurve:"P-256"},sign:{name:"ECDSA",hash:{name:"SHA-256"}}},o.ecdh={name:"ECDH",namedCurve:"P-256"},o.jwk=function(s,u){s=s.split(".");var c=s[0],l=s[1],f={kty:"EC",crv:"P-256",x:c,y:l,ext:!0};return f.key_ops=u?["sign"]:["verify"],u&&(f.d=u),f},o.keyToJwk=function(s){return{kty:"oct",k:s.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""),ext:!1,alg:"A256GCM"}},o.recall={validity:12*60*60,hook:function(s){return s}},o.check=function(s){return typeof s=="string"&&s.slice(0,4)==="SEA{"},o.parse=async function(u){try{var c=typeof u=="string";return c&&u.slice(0,4)==="SEA{"&&(u=u.slice(3)),c?await a.parse(u):u}catch{}return u},r.opt=o,n.exports=o})(e,"./settings"),e(function(n){var r=e("./shim");n.exports=async function(a,o){var s=typeof a=="string"?a:await r.stringify(a),u=await r.subtle.digest({name:o||"SHA-256"},new r.TextEncoder().encode(s));return r.Buffer.from(u)}})(e,"./sha256"),e(function(n){const r=e("./shim"),a=r.subtle,o=r.ossl?r.ossl:a,s=u=>o.digest({name:"SHA-1"},new ArrayBuffer(u));n.exports=s})(e,"./sha1"),e(function(n){var r=e("./root"),a=e("./shim"),o=e("./settings"),s=e("./sha256"),u;r.work=r.work||(async(c,l,f,h)=>{try{var _=(l||{}).epub||l;if(h=h||{},_ instanceof Function&&(f=_,_=u),c=typeof c=="string"?c:await a.stringify(c),(h.name||"").toLowerCase().slice(0,3)==="sha"){var p=a.Buffer.from(await s(c,h.name),"binary").toString(h.encode||"base64");if(f)try{f(p)}catch(x){console.log(x)}return p}_=_||a.random(9);var v=await(a.ossl||a.subtle).importKey("raw",new a.TextEncoder().encode(c),{name:h.name||"PBKDF2"},!1,["deriveBits"]),g=await(a.ossl||a.subtle).deriveBits({name:h.name||"PBKDF2",iterations:h.iterations||o.pbkdf2.iter,salt:new a.TextEncoder().encode(h.salt||_),hash:h.hash||o.pbkdf2.hash},v,h.length||o.pbkdf2.ks*8);c=a.random(c.length);var d=a.Buffer.from(g,"binary").toString(h.encode||"base64");if(f)try{f(d)}catch(x){console.log(x)}return d}catch(x){if(console.log(x),r.err=x,r.throw)throw x;f&&f();return}}),n.exports=r.work})(e,"./work"),e(function(n){var r=e("./root"),a=e("./shim");e("./settings"),r.name=r.name||(async(o,s)=>{try{if(o)try{o()}catch(u){console.log(u)}return}catch(u){if(console.log(u),r.err=u,r.throw)throw u;o&&o();return}}),r.pair=r.pair||(async(o,s)=>{try{var u=a.ossl||a.subtle,c=await a.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"]).then(async h=>{var _={};_.priv=(await a.subtle.exportKey("jwk",h.privateKey)).d;var p=await a.subtle.exportKey("jwk",h.publicKey);return _.pub=p.x+"."+p.y,_});try{var l=await u.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"]).then(async h=>{var _={};_.epriv=(await u.exportKey("jwk",h.privateKey)).d;var p=await u.exportKey("jwk",h.publicKey);return _.epub=p.x+"."+p.y,_})}catch(h){if(r.window)throw h;if(h=="Error: ECDH is not a supported algorithm")console.log("Ignoring ECDH...");else throw h}l=l||{};var f={pub:c.pub,priv:c.priv,epub:l.epub,epriv:l.epriv};if(o)try{o(f)}catch(h){console.log(h)}return f}catch(h){if(console.log(h),r.err=h,r.throw)throw h;o&&o();return}}),n.exports=r.pair})(e,"./pair"),e(function(n){var r=e("./root"),a=e("./shim"),o=e("./settings"),s=e("./sha256"),u;r.sign=r.sign||(async(c,l,f,h)=>{try{if(h=h||{},!(l||h).priv){if(!r.I)throw"No signing key.";l=await r.I(null,{what:c,how:"sign",why:h.why})}if(u===c)throw"`undefined` not allowed.";var _=await o.parse(c),p=h.check=h.check||_;if(r.verify&&(r.opt.check(p)||p&&p.s&&p.m)&&u!==await r.verify(p,l)){var y=await o.parse(p);if(h.raw||(y="SEA"+await a.stringify(y)),f)try{f(y)}catch(b){console.log(b)}return y}var v=l.pub,g=l.priv,d=o.jwk(v,g),x=await s(_),m=await(a.ossl||a.subtle).importKey("jwk",d,{name:"ECDSA",namedCurve:"P-256"},!1,["sign"]).then(M=>(a.ossl||a.subtle).sign({name:"ECDSA",hash:{name:"SHA-256"}},M,new Uint8Array(x))),y={m:_,s:a.Buffer.from(m,"binary").toString(h.encode||"base64")};if(h.raw||(y="SEA"+await a.stringify(y)),f)try{f(y)}catch(M){console.log(M)}return y}catch(M){if(console.log(M),r.err=M,r.throw)throw M;f&&f();return}}),n.exports=r.sign})(e,"./sign"),e(function(n){var r=e("./root"),a=e("./shim"),o=e("./settings"),s=e("./sha256"),u;r.verify=r.verify||(async(f,h,_,p)=>{try{var v=await o.parse(f);if(h===!1){var g=await o.parse(v.m);if(_)try{_(g)}catch(E){console.log(E)}return g}p=p||{};var d=h.pub||h,x=r.opt.slow_leak?await r.opt.slow_leak(d):await(a.ossl||a.subtle).importKey("jwk",o.jwk(d),{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),m=await s(v.m),y,M,b,w;try{if(y=a.Buffer.from(v.s,p.encode||"base64"),M=new Uint8Array(y),b=await(a.ossl||a.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},x,M,new Uint8Array(m)),!b)throw"Signature did not match."}catch{if(r.opt.fallback)return await r.opt.fall_verify(f,h,_,p)}var L=b?await o.parse(v.m):u;if(_)try{_(L)}catch(E){console.log(E)}return L}catch(E){if(console.log(E),r.err=E,r.throw)throw E;_&&_();return}}),n.exports=r.verify;var c={};r.opt.slow_leak=f=>{if(c[f])return c[f];var h=o.jwk(f);return c[f]=(a.ossl||a.subtle).importKey("jwk",h,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),c[f]};var l=r.opt;r.opt.fall_verify=async function(f,h,_,p,v){if(v===r.opt.fallback)throw"Signature did not match";v=v||1;var g=f||"";f=r.opt.unpack(f)||f;var d=await o.parse(f),x=h.pub||h,m=await r.opt.slow_leak(x),y=v<=r.opt.fallback?a.Buffer.from(await a.subtle.digest({name:"SHA-256"},new a.TextEncoder().encode(await o.parse(d.m)))):await s(d.m),M,b,w;try{if(M=a.Buffer.from(d.s,p.encode||"base64"),b=new Uint8Array(M),w=await(a.ossl||a.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},m,b,new Uint8Array(y)),!w)throw"Signature did not match."}catch{try{M=a.Buffer.from(d.s,"utf8"),b=new Uint8Array(M),w=await(a.ossl||a.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},m,b,new Uint8Array(y))}catch{if(!w)throw"Signature did not match."}}var L=w?await o.parse(d.m):u;if(l.fall_soul=g["#"],l.fall_key=g["."],l.fall_val=f,l.fall_state=g[">"],_)try{_(L)}catch(E){console.log(E)}return L},r.opt.fallback=2})(e,"./verify"),e(function(n){var r=e("./shim"),a=e("./settings"),o=e("./sha256");const s=async(u,c,l)=>{const f=u+(c||r.random(8)).toString("utf8"),h=r.Buffer.from(await o(f),"binary"),_=a.keyToJwk(h);return await r.subtle.importKey("jwk",_,{name:"AES-GCM"},!1,["encrypt","decrypt"])};n.exports=s})(e,"./aeskey"),e(function(n){var r=e("./root"),a=e("./shim");e("./settings");var o=e("./aeskey"),s;r.encrypt=r.encrypt||(async(u,c,l,f)=>{try{f=f||{};var h=(c||f).epriv||c;if(s===u)throw"`undefined` not allowed.";if(!h){if(!r.I)throw"No encryption key.";c=await r.I(null,{what:u,how:"encrypt",why:f.why}),h=c.epriv||c}var _=typeof u=="string"?u:await a.stringify(u),p={s:a.random(9),iv:a.random(15)},v=await o(h,p.s,f).then(d=>a.subtle.encrypt({name:f.name||"AES-GCM",iv:new Uint8Array(p.iv)},d,new a.TextEncoder().encode(_))),g={ct:a.Buffer.from(v,"binary").toString(f.encode||"base64"),iv:p.iv.toString(f.encode||"base64"),s:p.s.toString(f.encode||"base64")};if(f.raw||(g="SEA"+await a.stringify(g)),l)try{l(g)}catch(d){console.log(d)}return g}catch(d){if(console.log(d),r.err=d,r.throw)throw d;l&&l();return}}),n.exports=r.encrypt})(e,"./encrypt"),e(function(n){var r=e("./root"),a=e("./shim"),o=e("./settings"),s=e("./aeskey");r.decrypt=r.decrypt||(async(u,c,l,f)=>{try{f=f||{};var h=(c||f).epriv||c;if(!h){if(!r.I)throw"No decryption key.";c=await r.I(null,{what:u,how:"decrypt",why:f.why}),h=c.epriv||c}var _=await o.parse(u),p,v,g;try{p=a.Buffer.from(_.s,f.encode||"base64"),v=a.Buffer.from(_.iv,f.encode||"base64"),g=a.Buffer.from(_.ct,f.encode||"base64");var d=await s(h,p,f).then(m=>a.subtle.decrypt({name:f.name||"AES-GCM",iv:new Uint8Array(v),tagLength:128},m,new Uint8Array(g)))}catch{if(f.encode==="utf8")throw"Could not decrypt";if(r.opt.fallback)return f.encode="utf8",await r.decrypt(u,c,l,f)}var x=await o.parse(new a.TextDecoder("utf8").decode(d));if(l)try{l(x)}catch(m){console.log(m)}return x}catch(m){if(console.log(m),r.err=m,r.throw)throw m;l&&l();return}}),n.exports=r.decrypt})(e,"./decrypt"),e(function(n){var r=e("./root"),a=e("./shim");e("./settings"),r.secret=r.secret||(async(s,u,c,l)=>{try{if(l=l||{},!u||!u.epriv||!u.epub){if(!r.I)throw"No secret mix.";u=await r.I(null,{what:s,how:"secret",why:l.why})}var f=s.epub||s,h=u.epub,_=u.epriv,p=a.ossl||a.subtle,v=o(f),g=Object.assign({public:await p.importKey(...v,!0,[])},{name:"ECDH",namedCurve:"P-256"}),d=o(h,_),x=await p.importKey(...d,!1,["deriveBits"]).then(async y=>{var M=await p.deriveBits(g,y,256),b=new Uint8Array(M),w=await p.importKey("raw",b,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"]);return p.exportKey("jwk",w).then(({k:L})=>L)}),m=x;if(c)try{c(m)}catch(y){console.log(y)}return m}catch(y){if(console.log(y),r.err=y,r.throw)throw y;c&&c();return}});var o=(s,u)=>{var[c,l]=s.split("."),f=u?{d:u}:{};return["jwk",Object.assign(f,{x:c,y:l,kty:"EC",crv:"P-256",ext:!0}),{name:"ECDH",namedCurve:"P-256"}]};n.exports=r.secret})(e,"./secret"),e(function(n){var r=e("./root");r.certify=r.certify||(async(a,o={},s,u,c={})=>{try{if(console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version."),a=(()=>{var m=[];if(a){if((typeof a=="string"||Array.isArray(a))&&a.indexOf("*")>-1)return"*";if(typeof a=="string")return a;if(Array.isArray(a)){if(a.length===1&&a[0])return typeof a[0]=="object"&&a[0].pub?a[0].pub:typeof a[0]=="string"?a[0]:null;a.map(y=>{typeof y=="string"?m.push(y):typeof y=="object"&&y.pub&&m.push(y.pub)})}return typeof a=="object"&&a.pub?a.pub:m.length>0?m:null}})(),!a)return console.log("No certificant found.");const f=c.expiry&&(typeof c.expiry=="number"||typeof c.expiry=="string")?parseFloat(c.expiry):null,h=(o||{}).read?o.read:null,_=(o||{}).write?o.write:typeof o=="string"||Array.isArray(o)||o["+"]||o["#"]||o["."]||o["="]||o["*"]||o[">"]||o["<"]?o:null,p=(c||{}).block||(c||{}).blacklist||(c||{}).ban||{},v=p.read&&(typeof p.read=="string"||(p.read||{})["#"])?p.read:null,g=typeof p=="string"?p:p.write&&(typeof p.write=="string"||p.write["#"])?p.write:null;if(!h&&!_)return console.log("No policy found.");const d=JSON.stringify({c:a,...f?{e:f}:{},...h?{r:h}:{},..._?{w:_}:{},...v?{rb:v}:{},...g?{wb:g}:{}});var l=await r.sign(d,s,null,{raw:1});if(c.raw||(l="SEA"+JSON.stringify(l)),u)try{u(l)}catch(m){console.log(m)}return l}catch(f){if(r.err=f,r.throw)throw f;u&&u();return}}),n.exports=r.certify})(e,"./certify"),e(function(n){var r=e("./shim"),a=e("./root");a.work=e("./work"),a.sign=e("./sign"),a.verify=e("./verify"),a.encrypt=e("./encrypt"),a.decrypt=e("./decrypt"),a.certify=e("./certify"),a.random=a.random||r.random,a.Buffer=a.Buffer||e("./buffer"),a.keyid=a.keyid||(async o=>{try{const s=r.Buffer.concat(o.replace(/-/g,"+").replace(/_/g,"/").split(".").map(f=>r.Buffer.from(f,"base64"))),u=r.Buffer.concat([r.Buffer.from([153,s.length/256,s.length%256]),s]),c=await sha1hash(u),l=r.Buffer.from(c,"binary");return l.toString("hex",l.length-8)}catch(s){throw console.log(s),s}}),((a.window||{}).GUN||{}).SEA=a,n.exports=a})(e,"./sea"),e(function(n){var r=e("./sea"),a,o;r.window?a=r.window.GUN||{chain:{}}:a=e((o+""==typeof t?".":"")+"./gun",1),r.GUN=a;function s(c){this._={$:this}}s.prototype=function(){function c(){}return c.prototype=a.chain,new c}(),s.prototype.constructor=s,a.chain.user=function(c){var l=this,h=l.back(-1),f;if(c)return c=r.opt.pub((c._||"")["#"])||c,h.get("~"+c);if(f=h.back("user"))return f;var h=h._,_=h,p=_.opt.uuid||u;return(_=(f=_.user=l.chain(new s))._).opt={},_.opt.uuid=function(v){var g=p(),d=h.user;return!d||!(d=d.is)||!(d=d.pub)||(g="~"+d+"/"+g,v&&v.call&&v(null,g)),g},f};function u(){return a.state().toString(36).replace(".","")}a.User=s,s.GUN=a,s.SEA=a.SEA=r,n.exports=s})(e,"./user"),e(function(n){var r,a=""+r!=typeof GUN?GUN||{chain:{}}:e((""+r==typeof t?".":"")+"./gun",1);a.chain.then=function(o,s){var u=this,c=new Promise(function(l,f){u.once(l,s)});return o?c.then(o):c}})(e,"./then"),e(function(n){var r=e("./user"),a=r.SEA,o=r.GUN,s=function(){};r.prototype.create=function(...u){var c=typeof u[0]=="object"&&(u[0].pub||u[0].epub)?u[0]:typeof u[1]=="object"&&(u[1].pub||u[1].epub)?u[1]:null,l=c&&(c.pub||c.epub)?c.pub:typeof u[0]=="string"?u[0]:null,f=c&&(c.pub||c.epub)?c:l&&typeof u[1]=="string"?u[1]:null,h=u.filter(m=>typeof m=="function")[0]||null,_=u&&u.length>1&&typeof u[u.length-1]=="object"?u[u.length-1]:{},p=this,v=p._,g=p.back(-1);if(h=h||s,_=_||{},_.check!==!1){var d;if(l||(d="No user."),(f||"").length<8&&(d="Password too short!"),d)return h({err:o.log(d)}),p}if(v.ing)return(h||s)({err:o.log("User is already being created or authenticated!"),wait:!0}),p;v.ing=!0;var x={};return x.a=function(m){if(x.pubs=m,m&&!_.already){var y={err:o.log("User already created!")};v.ing=!1,(h||s)(y),p.leave();return}x.salt=String.random(64),a.work(f,x.salt,x.b)},x.b=function(m){x.proof=m,c?x.c(c):a.pair(x.c)},x.c=function(m){var y;x.pair=m||{},(y=v.root.user)&&(y._.sea=m,y.is={pub:m.pub,epub:m.epub,alias:l}),x.data={pub:m.pub},x.d()},x.d=function(){x.data.alias=l,x.e()},x.e=function(){x.data.epub=x.pair.epub,a.encrypt({priv:x.pair.priv,epriv:x.pair.epriv},x.proof,x.f,{raw:1})},x.f=function(m){x.data.auth=JSON.stringify({ek:m,s:x.salt}),x.g(x.data.auth)},x.g=function(m){var y;x.data.auth=x.data.auth||m,g.get(y="~"+x.pair.pub).put(x.data).on(x.h);var M={};M[y]={"#":y},g.get("~@"+l).put(M).get(y).on(x.i)},x.h=function(m,y,M,b){b.off(),x.h.ok=1,x.i()},x.i=function(m,y,M,b){b&&(x.i.ok=1,b.off()),!(!x.h.ok||!x.i.ok)&&(v.ing=!1,h({ok:0,pub:x.pair.pub}),s===h&&(c?p.auth(c):p.auth(l,f)))},g.get("~@"+l).once(x.a),p},r.prototype.leave=function(u,c){var l=this,f=l.back(-1)._.user;if(f&&(delete f.is,delete f._.is,delete f._.sea),a.window)try{var h={};h=a.window.sessionStorage,delete h.recall,delete h.pair}catch{}return l}})(e,"./create"),e(function(n){var r=e("./user"),a=r.SEA,o=r.GUN,s=function(){};r.prototype.auth=function(...c){var l=typeof c[0]=="object"&&(c[0].pub||c[0].epub)?c[0]:typeof c[1]=="object"&&(c[1].pub||c[1].epub)?c[1]:null,f=!l&&typeof c[0]=="string"?c[0]:null,h=(f||l&&!(l.priv&&l.epriv))&&typeof c[1]=="string"?c[1]:null,_=c.filter(M=>typeof M=="function")[0]||null,p=c&&c.length>1&&typeof c[c.length-1]=="object"?c[c.length-1]:{},v=this,g=v._,d=v.back(-1);if(g.ing)return(_||s)({err:o.log("User is already being created or authenticated!"),wait:!0}),v;g.ing=!0;var x={},m,y=9;return x.a=function(M){if(!M)return x.b();if(!M.pub){var b=[];return Object.keys(M).forEach(function(w){w!="_"&&b.push(M[w])}),x.b(b)}if(x.name)return x.f(M);x.c((x.data=M).auth)},x.b=function(M){var b=(x.list=(x.list||[]).concat(M||[])).shift();if(m===b){if(x.name)return x.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");if(f&&y--){d.get("~@"+f).once(x.a);return}return x.err("Wrong user or password.")}d.get(b).once(x.a)},x.c=function(M){if(m===M)return x.b();if(typeof M=="string")return x.c(u(M));a.work(h,(x.auth=M).s,x.d,x.enc)},x.d=function(M){a.decrypt(x.auth.ek,M,x.e,x.enc)},x.e=function(M){if(m===M)return x.enc?(x.enc=null,x.b()):(x.enc={encode:"utf8"},x.c(x.auth));x.half=M,x.f(x.data)},x.f=function(M){var b=x.half||{},w=x.data||{};x.g(x.lol={pub:M.pub||w.pub,epub:M.epub||w.epub,priv:M.priv||b.priv,epriv:M.epriv||b.epriv})},x.g=function(M){if(!M||!M.pub||!M.epub)return x.b();x.pair=M;var b=d._.user,w=b._;w.tag;var L=w.opt;w=b._=d.get("~"+M.pub)._,w.opt=L,b.is={pub:M.pub,epub:M.epub,alias:f||M.pub},w.sea=x.pair,g.ing=!1;try{h&&m==(u(g.root.graph["~"+M.pub].auth)||"")[":"]&&(p.shuffle=p.change=h)}catch{}if(p.change?x.z():(_||s)(w),a.window&&(v.back("user")._.opt||p).remember)try{var E={};E=a.window.sessionStorage,E.recall=!0,E.pair=JSON.stringify(M)}catch{}try{d._.tag.auth?d._.on("auth",w):setTimeout(function(){d._.on("auth",w)},1)}catch(A){o.log("Your 'auth' callback crashed with:",A)}},x.h=function(M){if(!M)return x.b();if(f=M.alias,f||(f=M.alias="~"+l.pub),!M.auth)return x.g(l);l=null,x.c((x.data=M).auth)},x.z=function(){x.salt=String.random(64),a.work(p.change,x.salt,x.y)},x.y=function(M){a.encrypt({priv:x.pair.priv,epriv:x.pair.epriv},M,x.x,{raw:1})},x.x=function(M){x.w(JSON.stringify({ek:M,s:x.salt}))},x.w=function(M){if(p.shuffle){console.log("migrate core account from UTF8 & shuffle");var b={};Object.keys(x.data).forEach(function(w){b[w]=x.data[w]}),delete b._,b.auth=M,d.get("~"+x.pair.pub).put(b)}d.get("~"+x.pair.pub).get("auth").put(M,_||s)},x.err=function(M){var b={err:o.log(M||"User cannot be found!")};g.ing=!1,(_||s)(b)},x.plugin=function(M){if(!(x.name=M))return x.err();var b=[M];M[0]!=="~"&&(b[1]="~"+M,b[2]="~@"+M),x.b(b)},l?l.priv&&l.epriv?x.g(l):d.get("~"+l.pub).once(x.h):f?d.get("~@"+f).once(x.a):!f&&!h&&a.name(x.plugin),v};function u(c){if(typeof c!="string")return c;try{c=JSON.parse(c)}catch{c={}}return c}})(e,"./auth"),e(function(n){var r=e("./user"),a=r.SEA;r.GUN,r.prototype.recall=function(o,s){var u=this,c=u.back(-1);if(o=o||{},o&&o.sessionStorage){if(a.window)try{var l={};l=a.window.sessionStorage,l&&(c._.opt.remember=!0,(u.back("user")._.opt||o).remember=!0,(l.recall||l.pair)&&c.user().auth(JSON.parse(l.pair),s))}catch{}return u}return u}})(e,"./recall"),e(function(n){var r=e("./user"),a=r.SEA,o=r.GUN,s=function(){};r.prototype.pair=function(){var u=this,c;try{c=new Proxy({DANGER:"☠"},{get:function(l,f,h){if(!(!u.is||!(u._||"").sea))return u._.sea[f]}})}catch{}return c},r.prototype.delete=async function(u,c,l){console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");var f=this;f.back(-1);var h=f.back("user");try{h.auth(u,c,function(_){var p=(h.is||{}).pub;h.map().once(function(){this.put(null)}),h.leave(),(l||s)({ok:0})})}catch(_){o.log("User.delete failed! Error:",_)}return f},r.prototype.alive=async function(){console.log("user.alive() IS DEPRECATED!!!");const u=this.back(-1);try{return await authRecall(u),u._.user._}catch{const l="No session!";throw o.log(l),{err:l}}},r.prototype.trust=async function(u){console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!"),o.is(u)&&u.get("pub").get((c,l)=>{console.log(c,l)}),u.get("trust").get(path).put(theirPubkey)},r.prototype.grant=function(u,c){console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var l=this,f=l.back(-1).user(),h=f._.sea,_="";return l.back(function(p){p.is||(_+=p.get||"")}),async function(){var p,v=await f.get("grant").get(h.pub).get(_).then();v=await a.decrypt(v,h),v||(v=a.random(16).toString(),p=await a.encrypt(v,h),f.get("grant").get(h.pub).get(_).put(p));var g=u.get("pub").then(),d=u.get("epub").then();g=await g,d=await d;var x=await a.secret(d,h);p=await a.encrypt(v,x),f.get("grant").get(g).get(_).put(p,c)}(),l},r.prototype.secret=function(u,c){console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var l=this,f=l.back(-1).user(),h=f.pair(),_="";return l.back(function(p){p.is||(_+=p.get||"")}),async function(){var p,v=await f.get("trust").get(h.pub).get(_).then();v=await a.decrypt(v,h),v||(v=a.random(16).toString(),p=await a.encrypt(v,h),f.get("trust").get(h.pub).get(_).put(p)),p=await a.encrypt(u,v),l.put(p,c)}(),l},n.exports=r})(e,"./share"),e(function(n){var r=e("./sea"),a=e("./settings"),o,s=(r.window||"").GUN||e((""+o==typeof t?".":"")+"./gun",1);s.on("opt",function(p){p.sea||(p.sea={own:{}},p.on("put",u,p)),this.to.next(p)});function u(p){var v=this,g=v.as,d=p.put,x=d["#"],m=d["."],y=d[":"],M=d[">"],b=p["#"],w;if(!(!x||!m)){if((p._||"").faith&&(g.opt||"").faith&&typeof p._=="function"){r.opt.pack(d,function(E){r.verify(E,!1,function(A){d["="]=r.opt.unpack(A),v.to.next(p)})});return}var L=function(E){g.on("in",{"@":b,err:p.err=E})};if((p._||"").DBG&&((p._||"").DBG.c=+new Date),0<=x.indexOf("<?")&&(w=parseFloat(x.split("<?")[1]||""),w&&M<s.state()-w*1e3)){(w=p._)&&w.stun&&w.stun--;return}if(x==="~@"){u.alias(v,p,y,m,x,g,L);return}if(x.slice(0,2)==="~@"){u.pubs(v,p,y,m,x,g,L);return}if(w=r.opt.pub(x)){u.pub(v,p,y,m,x,g,L,g.user||"",w);return}if(0<=x.indexOf("#")){u.hash(v,p,y,m,x,g,L);return}u.any(v,p,y,m,x,g,L,g.user||"")}}u.hash=function(p,v,g,d,x,m,y){r.work(g,null,function(M){function b(w){let L="";for(let E=0;E<w.length;E++)L+=E-1&1?"":String.fromCharCode(parseInt(w.substring(E-1,E+1),16));return btoa(L)}if(M&&M===d.split("#").slice(-1)[0])return p.to.next(v);if(M&&M===b(d.split("#").slice(-1)[0]))return p.to.next(v);y("Data hash not same as hash!")},{name:"SHA-256"})},u.alias=function(p,v,g,d,x,m,y){if(!g)return y("Data must exist!");if("~@"+d===l(g))return p.to.next(v);y("Alias not same!")},u.pubs=function(p,v,g,d,x,m,y){if(!g)return y("Alias must exist!");if(d===l(g))return p.to.next(v);y("Alias not same!")},u.pub=async function(p,v,g,d,x,m,y,M,b){var w;const L=await a.parse(g)||{},E=(A,O,T)=>{if(A.m&&A.s&&O&&b)return r.verify(A,b,S=>{if(o!==S&&o!==S.e&&v.put[">"]&&v.put[">"]>parseFloat(S.e))return y("Certificate expired.");if(o!==S&&S.c&&S.w&&(S.c===O||S.c.indexOf("*")>-1)){let C=x.indexOf("/")>-1?x.replace(x.substring(0,x.indexOf("/")+1),""):"";String.match=String.match||s.text.match;const k=Array.isArray(S.w)?S.w:typeof S.w=="object"||typeof S.w=="string"?[S.w]:[];for(const F of k)if(String.match(C,F["#"])&&String.match(d,F["."])||!F["."]&&String.match(C,F["#"])||!F["#"]&&String.match(d,F["."])||String.match(C?C+"/"+d:d,F["#"]||F)){if(F["+"]&&F["+"].indexOf("*")>-1&&C&&C.indexOf(O)==-1&&d.indexOf(O)==-1)return y(`Path "${C}" or key "${d}" must contain string "${O}".`);if(S.wb&&(typeof S.wb=="string"||(S.wb||{})["#"])){var R=p.as.root.$.back(-1);return typeof S.wb=="string"&&S.wb.slice(0,1)!=="~"&&(R=R.get("~"+b)),R.get(S.wb).get(O).once(U=>U&&(U===1||U===!0)?y(`Certificant ${O} blocked.`):T(S))}return T(S)}return y("Certificate verification fail.")}})};if(d==="pub"&&"~"+b===x)return g===b?p.to.next(v):y("Account not same!");if((w=M.is)&&w.pub&&!L["*"]&&!L["+"]&&(b===w.pub||b!==w.pub&&((v._.msg||{}).opt||{}).cert)){r.opt.pack(v.put,A=>{r.sign(A,M._.sea,async function(O){if(o===O)return y(r.err||"Signature fail.");if(v.put[":"]={":":w=r.opt.unpack(O.m),"~":O.s},v.put["="]=w,b===M.is.pub){(w=l(g))&&((m.sea.own[w]=m.sea.own[w]||{})[b]=1),JSON.stringifyAsync(v.put[":"],function(T,S){return T?y(T||"Stringify error."):(v.put[":"]=S,p.to.next(v))});return}if(b!==M.is.pub&&((v._.msg||{}).opt||{}).cert){const T=await a.parse(v._.msg.opt.cert);T&&T.m&&T.s&&E(T,M.is.pub,S=>{v.put[":"]["+"]=T,v.put[":"]["*"]=M.is.pub,JSON.stringifyAsync(v.put[":"],function(R,C){return R?y(R||"Stringify error."):(v.put[":"]=C,p.to.next(v))})})}},{raw:1})});return}r.opt.pack(v.put,A=>{r.verify(A,L["*"]||b,function(O){var T;if(O=r.opt.unpack(O),o===O)return y("Unverified data.");if((T=l(O))&&b===r.opt.pub(T)&&((m.sea.own[T]=m.sea.own[T]||{})[b]=1),L["+"]&&L["+"].m&&L["+"].s&&L["*"])E(L["+"],L["*"],S=>(v.put["="]=O,p.to.next(v)));else return v.put["="]=O,p.to.next(v)})})},u.any=function(p,v,g,d,x,m,y,M){if(m.opt.secure)return y("Soul missing public key at '"+d+"'.");m.on("secure",function(b){if(this.off(),!m.opt.secure)return p.to.next(b);y("Data cannot be changed.")}).on.on("secure",v)};var c=s.valid,l=function(p,v){return typeof(v=c(p))=="string"&&v};(s.state||"").ify;var f=/[^\w_-]/;r.opt.pub=function(p){if(p&&(p=p.split("~"),!(!p||!(p=p[1]))&&(p=p.split(f).slice(0,2),!(!p||p.length!=2)&&(p[0]||"")[0]!=="@")))return p=p.slice(0,2).join("."),p},r.opt.stringy=function(p){},r.opt.pack=function(p,v,g,d,x){var m,y;if(r.opt.check(p))return v(p);p&&p["#"]&&p["."]&&p[">"]&&(m=p[":"],y=1),JSON.parseAsync(y?m:p,function(M,b){var w=o!==(b||"")[":"]&&(b||"")["~"];if(!w){v(p);return}v({m:{"#":x||p["#"],".":g||p["."],":":(b||"")[":"],">":p[">"]||s.state.is(d,g)},s:w})})};var h=r.opt;r.opt.unpack=function(p,v,g){var d;if(o!==p){if(p&&o!==(d=p[":"]))return d;if(v=v||h.fall_key,!g&&h.fall_val&&(g={},g[v]=h.fall_val),!(!v||!g)){if(p===g[v]||!r.opt.check(g[v]))return p;var x=g&&g._&&g._["#"]||h.fall_soul,m=s.state.is(g,v)||h.fall_state;if(p&&p.length===4&&x===p[0]&&v===p[1]&&_(m)===_(p[3]))return p[2];if(m<r.opt.shuffle_attack)return p}}},r.opt.shuffle_attack=15463296e5;var _=Math.floor})(e,"./index")})()})(fo);fo.exports;const bn=eh("https://gun-manhattan.herokuapp.com/gun"),ho=bn.get("circles-c979fe7c-ebfd-11ed-a05b-0242ac120003"),jr=ho.get("index-4723d6a2-ecbd-11ed-a05b-0242ac120003");ho.get("circles");ho.get("nodes");const th=(i,e,t=localStorage)=>{const n=t.getItem(i),r=n!==null?JSON.parse(n):e,[a,o]=Fe(r);return[a,u=>(o(u),u===void 0?t.removeItem(i):t.setItem(i,JSON.stringify(u)),u)]},[Uo,au]=Fe(!1),[su,nh]=Fe(null),[ea,ih]=Fe(!1),[Xa,qa]=Fe(null);Fe(null);const[Qi,rh]=Fe(null),[ah,ou]=Fe(!1),[Qt,sh]=th("isDarkTheme",!0),[oh,Ya]=Fe(),[lh,Io]=Fe(),ch=()=>{const i=tu();Ut(()=>{let r=i.pathname?.substring(1);if(!r)return;console.log("Opening node route",r);let a=r.split("/"),o=a[0],s=a[1];if(!o){qa(null),Ya(null);return}s||(s=o),bn.get(`~@${o}`).once((u,c)=>{if(!u){console.log(`Circle not found: no user found for username ${o}`),qa(null),Ya(null);return}let l=Object.keys(u).find(f=>f.startsWith("~"))??"";Ya({username:o,pubKey:l}),bn.get(l).get("circles").get(s).once(f=>{if(f)console.log("Loading circle",JSON.stringify(f,null,2)),qa(f);else{console.error("Circle not found");return}})})});const e=new Date,t=e.getUTCFullYear()+"-"+(e.getUTCMonth()+1).toString().padStart(2,"0"),n=jr.get("dates").get(t);return n.map().on((r,a)=>{if(!r)return;const o=Object.assign({},Qi());o[a]=r,rh(o)}),Ii(()=>n.off()),null},uh=Qe('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',2),fh=Qe("<title></title>",2);function Kn(i,e){const t=Vc(i.a,e);return(()=>{const n=uh.cloneNode(!0);return bf(n,t,!0,!0),Ge(n,()=>$c,null),Ge(n,(()=>{const r=ze(()=>!!e.title,!0);return()=>r()&&(()=>{const a=fh.cloneNode(!0);return Ge(a,()=>e.title),a})()})(),null),st(r=>{const a=i.a.stroke,o={...e.style,overflow:"visible",color:e.color||"currentColor"},s=e.size||"1em",u=e.size||"1em",c=i.c;return a!==r._v$&&Gn(n,"stroke",r._v$=a),r._v$2=aa(n,o,r._v$2),s!==r._v$3&&Gn(n,"height",r._v$3=s),u!==r._v$4&&Gn(n,"width",r._v$4=u),c!==r._v$5&&(n.innerHTML=r._v$5=c),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()}function hh(i){return Kn({a:{fill:"none",viewBox:"0 0 24 24"},c:'<path fill="currentColor" d="M8.514 20h-4a2 2 0 01-2-2V6a2 2 0 012-2h4v2h-4v12h4v2z"/><path fill="currentColor" d="M13.842 17.385l1.42-1.408-3.92-3.953h9.144a1 1 0 100-2h-9.162l3.98-3.947-1.408-1.42-6.391 6.337 6.337 6.391z"/>'},i)}const dh=Qe('<dialog class="bg-transparent"><div class="bg-white p-8 rounded-lg shadow-lg"><h2 class="text-2xl font-bold mb-6">Log in / Sign up</h2><div class="mb-4"><label for="username" class="block text-sm mb-2">Username:</label><input id="username" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md"></div><div class="mb-6"><label for="password" class="block text-sm mb-2">Password:</label><input id="password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md"></div><button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600">Log in</button><button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 ml-4">Sign up'),ph=Qe('<p class="text-red-500 mt-4">'),mh=Qe('<button type="button" class="absolute bg- top-4 right-2 p-1 font-semibold rounded-md" style="background-color:#ebebeb;">'),gh=()=>{bn.user().leave(),localStorage.removeItem("userCredentials"),au(!1)};function _h(){const[i,e]=Fe(""),[t,n]=Fe(""),r="userCredentials",[a,o]=Fe(!0),[s,u]=Fe(null);let c;Ut(()=>{const p=localStorage.getItem(r);if(p){const{username:v,password:g}=JSON.parse(p);console.log("storedCredentials",p),l(v,g)}else o(!1)}),Ut(()=>{c&&!Uo()&&!a()&&(console.log("showing dialog"),c.showModal())});const l=(p,v)=>{const g=bn.user(),d=x=>{if(x.err)console.error("Authentication error:",x.err),Io(null);else{if(!g.is){console.error("Authentication error");return}Io({username:p,pubKey:g.is.pub}),g.get("circles").get(p).once(m=>{if(m)return;let y={name:p,alias:p,type:"user"};g.get("circles").put(y,M=>{console.log("created user circle",JSON.stringify(M)),console.log(y,JSON.stringify(y)),g.get("circles").get(y.alias).put(y,b=>{console.log("created alias for user circle",JSON.stringify(b))})})}),console.log("user public key",g.is?.pub),au(!0),localStorage.setItem(r,JSON.stringify({username:p,password:v})),c.close()}o(!1)};g.auth(p,v,d)},f=(p,v)=>{const g=bn.user();bn.get(`~@${p}`).once(d=>{if(d){u("User already exists");return}else g.create(p,v,x=>{x.err?u(x.err):l(p,v)})})},h=p=>{p.preventDefault(),l(i(),t())},_=p=>{p.preventDefault(),f(i(),t())};return[(()=>{const p=dh(),v=p.firstChild,g=v.firstChild,d=g.nextSibling,x=d.firstChild,m=x.nextSibling,y=d.nextSibling,M=y.firstChild,b=M.nextSibling,w=y.nextSibling,L=w.nextSibling,E=c;return typeof E=="function"?qs(E,p):c=p,m.$$input=A=>e(A.target.value),b.$$input=A=>n(A.target.value),w.$$click=h,L.$$click=_,Ge(v,(()=>{const A=ze(()=>!!s());return()=>A()&&(()=>{const O=ph();return Ge(O,s),O})()})(),null),st(()=>m.value=i()),st(()=>b.value=t()),p})(),ze((()=>{const p=ze(()=>!!Uo());return()=>p()&&(()=>{const v=mh();return v.$$click=gh,Ge(v,He(hh,{size:"24px",color:"#666"})),v})()})())]}Ni(["input","click"]);var lu={},la={},Tt={},we={};Object.defineProperty(we,"__esModule",{value:!0});we.areaConversion=we.timeConversion=we.distanceConversion=we.altitudeKeys=we.latitudeKeys=we.longitudeKeys=we.MAXLON=we.MINLON=we.MAXLAT=we.MINLAT=we.earthRadius=we.sexagesimalPattern=void 0;var vh=/^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;we.sexagesimalPattern=vh;var xh=6378137;we.earthRadius=xh;var yh=-90;we.MINLAT=yh;var Mh=90;we.MAXLAT=Mh;var Sh=-180;we.MINLON=Sh;var Eh=180;we.MAXLON=Eh;var bh=["lng","lon","longitude",0];we.longitudeKeys=bh;var wh=["lat","latitude",1];we.latitudeKeys=wh;var Th=["alt","altitude","elevation","elev",2];we.altitudeKeys=Th;var Ah={m:1,km:.001,cm:100,mm:1e3,mi:1/1609.344,sm:1/1852.216,ft:100/30.48,in:100/2.54,yd:1/.9144};we.distanceConversion=Ah;var Rh={m:60,h:3600,d:86400};we.timeConversion=Rh;var qt={m2:1,km2:1e-6,ha:1e-4,a:.01,ft2:10.763911,yd2:1.19599,in2:1550.0031};we.areaConversion=qt;qt.sqm=qt.m2;qt.sqkm=qt.km2;qt.sqft=qt.ft2;qt.sqyd=qt.yd2;qt.sqin=qt.in2;var Zn={};Object.defineProperty(Zn,"__esModule",{value:!0});Zn.default=void 0;var Ch=function(e,t){return t.reduce(function(n,r){if(typeof e>"u"||e===null)throw new Error("'".concat(e,"' is no valid coordinate."));return Object.prototype.hasOwnProperty.call(e,r)&&typeof r<"u"&&typeof n>"u"?(n=r,r):n},void 0)},Ph=Ch;Zn.default=Ph;var Oi={},Jn={};Object.defineProperty(Jn,"__esModule",{value:!0});Jn.default=void 0;var Lh=function(e){var t=e.toString().trim();return isNaN(parseFloat(t))?!1:parseFloat(t)===Number(t)},Dh=Lh;Jn.default=Dh;var Qn={};Object.defineProperty(Qn,"__esModule",{value:!0});Qn.default=void 0;var Uh=we,Ih=function(e){return Uh.sexagesimalPattern.test(e.toString().trim())},Nh=Ih;Qn.default=Nh;var ei={};Object.defineProperty(ei,"__esModule",{value:!0});ei.default=void 0;var Oh=we,Fh=function(e){var t=new RegExp(Oh.sexagesimalPattern).exec(e.toString().trim());if(typeof t>"u"||t===null)throw new Error("Given value is not in sexagesimal format");var n=Number(t[2])/60||0,r=Number(t[4])/3600||0,a=parseFloat(t[1])+n+r;return["S","W"].includes(t[7])?-a:a},Bh=Fh;ei.default=Bh;var ir={},Fi={};Object.defineProperty(Fi,"__esModule",{value:!0});Fi.default=void 0;var Ka=we,Za=kh(Zn);function kh(i){return i&&i.__esModule?i:{default:i}}function No(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function zh(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?No(Object(t),!0).forEach(function(n){Gh(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):No(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Gh(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Hh=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{longitude:Ka.longitudeKeys,latitude:Ka.latitudeKeys,altitude:Ka.altitudeKeys},n=(0,Za.default)(e,t.longitude),r=(0,Za.default)(e,t.latitude),a=(0,Za.default)(e,t.altitude);return zh({latitude:r,longitude:n},a?{altitude:a}:{})},Vh=Hh;Fi.default=Vh;var rr={};Object.defineProperty(rr,"__esModule",{value:!0});rr.default=void 0;var Wh=po(Jn),$h=po(Qn),jh=po(ei),Oo=we;function po(i){return i&&i.__esModule?i:{default:i}}var Xh=function i(e){return(0,Wh.default)(e)?!(parseFloat(e)>Oo.MAXLAT||e<Oo.MINLAT):(0,$h.default)(e)?i((0,jh.default)(e)):!1},qh=Xh;rr.default=qh;var ar={};Object.defineProperty(ar,"__esModule",{value:!0});ar.default=void 0;var Yh=mo(Jn),Kh=mo(Qn),Zh=mo(ei),Fo=we;function mo(i){return i&&i.__esModule?i:{default:i}}var Jh=function i(e){return(0,Yh.default)(e)?!(parseFloat(e)>Fo.MAXLON||e<Fo.MINLON):(0,Kh.default)(e)?i((0,Zh.default)(e)):!1},Qh=Jh;ar.default=Qh;Object.defineProperty(ir,"__esModule",{value:!0});ir.default=void 0;var ed=go(Fi),Bo=go(rr),ko=go(ar);function go(i){return i&&i.__esModule?i:{default:i}}var td=function(e){var t=(0,ed.default)(e),n=t.latitude,r=t.longitude;if(Array.isArray(e)&&e.length>=2)return(0,ko.default)(e[0])&&(0,Bo.default)(e[1]);if(typeof n>"u"||typeof r>"u")return!1;var a=e[r],o=e[n];return!(typeof o>"u"||typeof a>"u"||(0,Bo.default)(o)===!1||(0,ko.default)(a)===!1)},nd=td;ir.default=nd;Object.defineProperty(Oi,"__esModule",{value:!0});Oi.default=void 0;var id=sr(Jn),rd=sr(Qn),ad=sr(ei),zo=sr(ir),sd=sr(Fi);function sr(i){return i&&i.__esModule?i:{default:i}}function Go(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Ja(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Go(Object(t),!0).forEach(function(n){Ks(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Go(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Ks(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var od=function i(e){if((0,id.default)(e))return Number(e);if((0,rd.default)(e))return(0,ad.default)(e);if((0,zo.default)(e)){var t=(0,sd.default)(e);return Array.isArray(e)?e.map(function(n,r){return[0,1].includes(r)?i(n):n}):Ja(Ja(Ja({},e),t.latitude&&Ks({},t.latitude,i(e[t.latitude]))),t.longitude&&Ks({},t.longitude,i(e[t.longitude])))}return Array.isArray(e)?e.map(function(n){return(0,zo.default)(n)?i(n):n}):e},ld=od;Oi.default=ld;Object.defineProperty(Tt,"__esModule",{value:!0});Tt.default=void 0;var cd=we,ud=cu(Zn),fd=cu(Oi);function cu(i){return i&&i.__esModule?i:{default:i}}var hd=function(e,t){var n=(0,ud.default)(e,cd.latitudeKeys);if(!(typeof n>"u"||n===null)){var r=e[n];return t===!0?r:(0,fd.default)(r)}},dd=hd;Tt.default=dd;var At={};Object.defineProperty(At,"__esModule",{value:!0});At.default=void 0;var pd=we,md=uu(Zn),gd=uu(Oi);function uu(i){return i&&i.__esModule?i:{default:i}}var _d=function(e,t){var n=(0,md.default)(e,pd.longitudeKeys);if(!(typeof n>"u"||n===null)){var r=e[n];return t===!0?r:(0,gd.default)(r)}},vd=_d;At.default=vd;var kt={};Object.defineProperty(kt,"__esModule",{value:!0});kt.default=void 0;var xd=function(e){return e*Math.PI/180},yd=xd;kt.default=yd;var gn={};Object.defineProperty(gn,"__esModule",{value:!0});gn.default=void 0;var Md=function(e){return e*180/Math.PI},Sd=Md;gn.default=Sd;Object.defineProperty(la,"__esModule",{value:!0});la.default=void 0;var Ed=ca(Tt),bd=ca(At),Qa=ca(kt),es=ca(gn),Ho=we;function ca(i){return i&&i.__esModule?i:{default:i}}var wd=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:6371e3,a=(0,Ed.default)(e),o=(0,bd.default)(e),s=t/r,u=(0,Qa.default)(n),c=(0,Qa.default)(a),l=(0,Qa.default)(o),f=Math.asin(Math.sin(c)*Math.cos(s)+Math.cos(c)*Math.sin(s)*Math.cos(u)),h=l+Math.atan2(Math.sin(u)*Math.sin(s)*Math.cos(c),Math.cos(s)-Math.sin(c)*Math.sin(f)),_=(0,es.default)(h);return(_<Ho.MINLON||_>Ho.MAXLON)&&(h=(h+3*Math.PI)%(2*Math.PI)-Math.PI,_=(0,es.default)(h)),{latitude:(0,es.default)(f),longitude:_}},Td=wd;la.default=Td;var ua={};Object.defineProperty(ua,"__esModule",{value:!0});ua.default=void 0;var Ad=we,Rd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",n=Ad.areaConversion[t];if(n)return e*n;throw new Error("Invalid unit used for area conversion.")},Cd=Rd;ua.default=Cd;var fa={};Object.defineProperty(fa,"__esModule",{value:!0});fa.default=void 0;var Pd=we,Ld=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",n=Pd.distanceConversion[t];if(n)return e*n;throw new Error("Invalid unit used for distance conversion.")},Dd=Ld;fa.default=Dd;var ha={};Object.defineProperty(ha,"__esModule",{value:!0});ha.default=void 0;var vr=we,Ud=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"kmh";switch(t){case"kmh":return e*vr.timeConversion.h*vr.distanceConversion.km;case"mph":return e*vr.timeConversion.h*vr.distanceConversion.mi;default:return e}},Id=Ud;ha.default=Id;var da={};Object.defineProperty(da,"__esModule",{value:!0});da.default=void 0;function Vo(i,e){return Bd(i)||Fd(i,e)||Od(i,e)||Nd()}function Nd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Od(i,e){if(i){if(typeof i=="string")return Wo(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wo(i,e)}}function Wo(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Fd(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,a=void 0;try{for(var o=i[Symbol.iterator](),s;!(n=(s=o.next()).done)&&(t.push(s.value),!(e&&t.length===e));n=!0);}catch(u){r=!0,a=u}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw a}}return t}}function Bd(i){if(Array.isArray(i))return i}var kd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4,n=Math.pow(10,t);return Math.round(e*n)/n},zd=function(e){var t=e.toString().split("."),n=Vo(t,2),r=n[0],a=n[1],o=Math.abs(Number(r)),s=+("0."+(a||0))*60,u=s.toString().split("."),c=Math.floor(s),l=kd(+("0."+(u[1]||0))*60).toString(),f=l.split("."),h=Vo(f,2),_=h[0],p=h[1],v=p===void 0?"0":p;return o+"° "+c.toString().padStart(2,"0")+"' "+_.padStart(2,"0")+"."+v.padEnd(1,"0")+'"'},Gd=zd;da.default=Gd;var pa={},or={},rn={},lr={};Object.defineProperty(lr,"__esModule",{value:!0});lr.default=void 0;var Hd=function(e){return e>1?1:e<-1?-1:e},Vd=Hd;lr.default=Vd;Object.defineProperty(rn,"__esModule",{value:!0});rn.default=void 0;var $o=ma(Tt),jo=ma(At),ii=ma(kt),Wd=ma(lr),$d=we;function ma(i){return i&&i.__esModule?i:{default:i}}var jd=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;n=typeof n<"u"&&!isNaN(n)?n:1;var r=(0,$o.default)(e),a=(0,jo.default)(e),o=(0,$o.default)(t),s=(0,jo.default)(t),u=Math.acos((0,Wd.default)(Math.sin((0,ii.default)(o))*Math.sin((0,ii.default)(r))+Math.cos((0,ii.default)(o))*Math.cos((0,ii.default)(r))*Math.cos((0,ii.default)(a)-(0,ii.default)(s))))*$d.earthRadius;return Math.round(u/n)*n},Xd=jd;rn.default=Xd;Object.defineProperty(or,"__esModule",{value:!0});or.default=void 0;var Xo=qd(rn);function qd(i){return i&&i.__esModule?i:{default:i}}var Yd=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xo.default;return n=typeof n=="function"?n:Xo.default,t.slice().sort(function(r,a){return n(e,r)-n(e,a)})},Kd=Yd;or.default=Kd;Object.defineProperty(pa,"__esModule",{value:!0});pa.default=void 0;var Zd=Jd(or);function Jd(i){return i&&i.__esModule?i:{default:i}}var Qd=function(e,t){return(0,Zd.default)(e,t)[0]},ep=Qd;pa.default=ep;var ga={};Object.defineProperty(ga,"__esModule",{value:!0});ga.default=void 0;var ts=_o(kt),tp=_o(Tt),qo=_o(At),Yo=we;function _o(i){return i&&i.__esModule?i:{default:i}}var np=function(e){var t=0;if(e.length>2){for(var n,r,a,o=0;o<e.length;o++){o===e.length-2?(n=e.length-2,r=e.length-1,a=0):o===e.length-1?(n=e.length-1,r=0,a=1):(n=o,r=o+1,a=o+2);var s=(0,qo.default)(e[n]),u=(0,tp.default)(e[r]),c=(0,qo.default)(e[a]);t+=((0,ts.default)(c)-(0,ts.default)(s))*Math.sin((0,ts.default)(u))}t=t*Yo.earthRadius*Yo.earthRadius/2}return Math.abs(t)},ip=np;ga.default=ip;var cr={};Object.defineProperty(cr,"__esModule",{value:!0});cr.default=void 0;var rp=fu(Tt),ap=fu(At);function fu(i){return i&&i.__esModule?i:{default:i}}var sp=function(e){if(Array.isArray(e)===!1||e.length===0)throw new Error("No points were given.");return e.reduce(function(t,n){var r=(0,rp.default)(n),a=(0,ap.default)(n);return{maxLat:Math.max(r,t.maxLat),minLat:Math.min(r,t.minLat),maxLng:Math.max(a,t.maxLng),minLng:Math.min(a,t.minLng)}},{maxLat:-1/0,minLat:1/0,maxLng:-1/0,minLng:1/0})},op=sp;cr.default=op;var _a={};Object.defineProperty(_a,"__esModule",{value:!0});_a.default=void 0;var lp=va(Tt),cp=va(At),ri=va(kt),xr=va(gn),zi=we;function va(i){return i&&i.__esModule?i:{default:i}}var up=function(e,t){var n=(0,lp.default)(e),r=(0,cp.default)(e),a=(0,ri.default)(n),o=(0,ri.default)(r),s=t/zi.earthRadius,u=a-s,c=a+s,l=(0,ri.default)(zi.MAXLAT),f=(0,ri.default)(zi.MINLAT),h=(0,ri.default)(zi.MAXLON),_=(0,ri.default)(zi.MINLON),p,v;if(u>f&&c<l){var g=Math.asin(Math.sin(s)/Math.cos(a));p=o-g,p<_&&(p+=Math.PI*2),v=o+g,v>h&&(v-=Math.PI*2)}else u=Math.max(u,f),c=Math.min(c,l),p=_,v=h;return[{latitude:(0,xr.default)(u),longitude:(0,xr.default)(p)},{latitude:(0,xr.default)(c),longitude:(0,xr.default)(v)}]},fp=up;_a.default=fp;var xa={};Object.defineProperty(xa,"__esModule",{value:!0});xa.default=void 0;var hp=ya(Tt),dp=ya(At),Ko=ya(kt),Zo=ya(gn);function ya(i){return i&&i.__esModule?i:{default:i}}var pp=function(e){if(Array.isArray(e)===!1||e.length===0)return!1;var t=e.length,n=e.reduce(function(s,u){var c=(0,Ko.default)((0,hp.default)(u)),l=(0,Ko.default)((0,dp.default)(u));return{X:s.X+Math.cos(c)*Math.cos(l),Y:s.Y+Math.cos(c)*Math.sin(l),Z:s.Z+Math.sin(c)}},{X:0,Y:0,Z:0}),r=n.X/t,a=n.Y/t,o=n.Z/t;return{longitude:(0,Zo.default)(Math.atan2(a,r)),latitude:(0,Zo.default)(Math.atan2(o,Math.sqrt(r*r+a*a)))}},mp=pp;xa.default=mp;var Ma={};Object.defineProperty(Ma,"__esModule",{value:!0});Ma.default=void 0;var gp=_p(cr);function _p(i){return i&&i.__esModule?i:{default:i}}var vp=function(e){var t=(0,gp.default)(e),n=t.minLat+(t.maxLat-t.minLat)/2,r=t.minLng+(t.maxLng-t.minLng)/2;return{latitude:parseFloat(n.toFixed(6)),longitude:parseFloat(r.toFixed(6))}},xp=vp;Ma.default=xp;var Sa={},ur={};Object.defineProperty(ur,"__esModule",{value:!0});ur.default=void 0;var Jo=Ea(Tt),Qo=Ea(At),yr=Ea(kt),yp=Ea(gn);function Ea(i){return i&&i.__esModule?i:{default:i}}var Mp=function(e,t){var n=(0,yr.default)((0,Qo.default)(t))-(0,yr.default)((0,Qo.default)(e)),r=Math.log(Math.tan((0,yr.default)((0,Jo.default)(t))/2+Math.PI/4)/Math.tan((0,yr.default)((0,Jo.default)(e))/2+Math.PI/4));return Math.abs(n)>Math.PI&&(n>0?n=(Math.PI*2-n)*-1:n=Math.PI*2+n),((0,yp.default)(Math.atan2(n,r))+360)%360},Sp=Mp;ur.default=Sp;Object.defineProperty(Sa,"__esModule",{value:!0});Sa.default=void 0;var el=Ep(ur);function Ep(i){return i&&i.__esModule?i:{default:i}}var bp=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:el.default,r=typeof n=="function"?n(e,t):(0,el.default)(e,t);if(isNaN(r))throw new Error("Could not calculate bearing for given points. Check your bearing function");switch(Math.round(r/22.5)){case 1:return"NNE";case 2:return"NE";case 3:return"ENE";case 4:return"E";case 5:return"ESE";case 6:return"SE";case 7:return"SSE";case 8:return"S";case 9:return"SSW";case 10:return"SW";case 11:return"WSW";case 12:return"W";case 13:return"WNW";case 14:return"NW";case 15:return"NNW";default:return"N"}},wp=bp;Sa.default=wp;var fr={};Object.defineProperty(fr,"__esModule",{value:!0});fr.default=void 0;var ns=hu(rn),tl=hu(lr);function hu(i){return i&&i.__esModule?i:{default:i}}var Tp=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=(0,ns.default)(t,e,r),o=(0,ns.default)(e,n,r),s=(0,ns.default)(t,n,r),u=Math.acos((0,tl.default)((a*a+s*s-o*o)/(2*a*s))),c=Math.acos((0,tl.default)((o*o+s*s-a*a)/(2*o*s)));return u>Math.PI/2?a:c>Math.PI/2?o:Math.sin(u)*a},Ap=Tp;fr.default=Ap;var ba={};Object.defineProperty(ba,"__esModule",{value:!0});ba.default=void 0;var nl=wa(Tt),il=wa(At),an=wa(kt),Rp=wa(gn);function wa(i){return i&&i.__esModule?i:{default:i}}var Cp=function(e,t){var n=(0,nl.default)(t),r=(0,il.default)(t),a=(0,nl.default)(e),o=(0,il.default)(e),s=((0,Rp.default)(Math.atan2(Math.sin((0,an.default)(r)-(0,an.default)(o))*Math.cos((0,an.default)(n)),Math.cos((0,an.default)(a))*Math.sin((0,an.default)(n))-Math.sin((0,an.default)(a))*Math.cos((0,an.default)(n))*Math.cos((0,an.default)(r)-(0,an.default)(o))))+360)%360;return s},Pp=Cp;ba.default=Pp;var Ta={};Object.defineProperty(Ta,"__esModule",{value:!0});Ta.default=void 0;var Lp=Dp(rn);function Dp(i){return i&&i.__esModule?i:{default:i}}function Xr(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xr=function(t){return typeof t}:Xr=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xr(i)}var Up=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Lp.default;return e.reduce(function(n,r){return Xr(n)==="object"&&n.last!==null&&(n.distance+=t(r,n.last)),n.last=r,n},{last:null,distance:0}).distance},Ip=Up;Ta.default=Ip;var Aa={};Object.defineProperty(Aa,"__esModule",{value:!0});Aa.default=void 0;var rl=vo(Tt),al=vo(At),is=vo(kt),sl=we;function vo(i){return i&&i.__esModule?i:{default:i}}var Np=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;n=typeof n<"u"&&!isNaN(n)?n:1;var r=(0,rl.default)(e),a=(0,al.default)(e),o=(0,rl.default)(t),s=(0,al.default)(t),u=6356752314245e-6,c=1/298.257223563,l=(0,is.default)(s-a),f,h,_,p,v,g,d=Math.atan((1-c)*Math.tan((0,is.default)(parseFloat(r)))),x=Math.atan((1-c)*Math.tan((0,is.default)(parseFloat(o)))),m=Math.sin(d),y=Math.cos(d),M=Math.sin(x),b=Math.cos(x),w=l,L,E=100;do{var A=Math.sin(w),O=Math.cos(w);if(g=Math.sqrt(b*A*(b*A)+(y*M-m*b*O)*(y*M-m*b*O)),g===0)return 0;f=m*M+y*b*O,h=Math.atan2(g,f),_=y*b*A/g,p=1-_*_,v=f-2*m*M/p,isNaN(v)&&(v=0);var T=c/16*p*(4+c*(4-3*p));L=w,w=l+(1-T)*c*_*(h+T*g*(v+T*f*(-1+2*v*v)))}while(Math.abs(w-L)>1e-12&&--E>0);if(E===0)return NaN;var S=p*(sl.earthRadius*sl.earthRadius-u*u)/(u*u),R=1+S/16384*(4096+S*(-768+S*(320-175*S))),C=S/1024*(256+S*(-128+S*(74-47*S))),k=C*g*(v+C/4*(f*(-1+2*v*v)-C/6*v*(-3+4*g*g)*(-3+4*v*v))),F=u*R*(h-k);return Math.round(F/n)*n},Op=Np;Aa.default=Op;var Ra={};Object.defineProperty(Ra,"__esModule",{value:!0});Ra.default=void 0;var Fp=function(e){if(/^NNE|NE|NNW|N$/.test(e))return"N";if(/^ENE|E|ESE|SE$/.test(e))return"E";if(/^SSE|S|SSW|SW$/.test(e))return"S";if(/^WSW|W|WNW|NW$/.test(e))return"W"},Bp=Fp;Ra.default=Bp;var Ca={};Object.defineProperty(Ca,"__esModule",{value:!0});Ca.default=void 0;var kp=zp(rn);function zp(i){return i&&i.__esModule?i:{default:i}}var Gp=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:kp.default,r=n(e,t),a=Number(t.time)-Number(e.time),o=r/a*1e3;return o},Hp=Gp;Ca.default=Hp;var Pa={};Object.defineProperty(Pa,"__esModule",{value:!0});Pa.default=void 0;var rs=Vp(rn);function Vp(i){return i&&i.__esModule?i:{default:i}}var Wp=function(e,t,n){return(0,rs.default)(t,e)+(0,rs.default)(e,n)===(0,rs.default)(t,n)},$p=Wp;Pa.default=$p;var La={};Object.defineProperty(La,"__esModule",{value:!0});La.default=void 0;var Mr=du(Tt),Nt=du(At);function du(i){return i&&i.__esModule?i:{default:i}}var jp=function(e,t){for(var n=!1,r=t.length,a=-1,o=r-1;++a<r;o=a)((0,Nt.default)(t[a])<=(0,Nt.default)(e)&&(0,Nt.default)(e)<(0,Nt.default)(t[o])||(0,Nt.default)(t[o])<=(0,Nt.default)(e)&&(0,Nt.default)(e)<(0,Nt.default)(t[a]))&&(0,Mr.default)(e)<((0,Mr.default)(t[o])-(0,Mr.default)(t[a]))*((0,Nt.default)(e)-(0,Nt.default)(t[a]))/((0,Nt.default)(t[o])-(0,Nt.default)(t[a]))+(0,Mr.default)(t[a])&&(n=!n);return n},Xp=jp;La.default=Xp;var Da={};Object.defineProperty(Da,"__esModule",{value:!0});Da.default=void 0;var qp=Yp(fr);function Yp(i){return i&&i.__esModule?i:{default:i}}var Kp=function(e,t,n,r){return(0,qp.default)(e,t,n)<r},Zp=Kp;Da.default=Zp;var Ua={};Object.defineProperty(Ua,"__esModule",{value:!0});Ua.default=void 0;var Jp=Qp(rn);function Qp(i){return i&&i.__esModule?i:{default:i}}var em=function(e,t,n){return(0,Jp.default)(e,t)<n},tm=em;Ua.default=tm;var Ia={};Object.defineProperty(Ia,"__esModule",{value:!0});Ia.default=void 0;function nm(i,e){return sm(i)||am(i,e)||rm(i,e)||im()}function im(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rm(i,e){if(i){if(typeof i=="string")return ol(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ol(i,e)}}function ol(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function am(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,a=void 0;try{for(var o=i[Symbol.iterator](),s;!(n=(s=o.next()).done)&&(t.push(s.value),!(e&&t.length===e));n=!0);}catch(u){r=!0,a=u}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw a}}return t}}function sm(i){if(Array.isArray(i))return i}var om=function(e){if(!e.startsWith("POLYGON"))throw new Error("Invalid wkt.");var t=e.slice(e.indexOf("(")+2,e.indexOf(")")).split(", "),n=t.map(function(r){var a=r.split(" "),o=nm(a,2),s=o[0],u=o[1];return{longitude:parseFloat(s),latitude:parseFloat(u)}});return n},lm=om;Ia.default=lm;(function(i){Object.defineProperty(i,"__esModule",{value:!0});var e={computeDestinationPoint:!0,convertArea:!0,convertDistance:!0,convertSpeed:!0,decimalToSexagesimal:!0,findNearest:!0,getAreaOfPolygon:!0,getBounds:!0,getBoundsOfDistance:!0,getCenter:!0,getCenterOfBounds:!0,getCompassDirection:!0,getCoordinateKey:!0,getCoordinateKeys:!0,getDistance:!0,getDistanceFromLine:!0,getGreatCircleBearing:!0,getLatitude:!0,getLongitude:!0,getPathLength:!0,getPreciseDistance:!0,getRhumbLineBearing:!0,getRoughCompassDirection:!0,getSpeed:!0,isDecimal:!0,isPointInLine:!0,isPointInPolygon:!0,isPointNearLine:!0,isPointWithinRadius:!0,isSexagesimal:!0,isValidCoordinate:!0,isValidLatitude:!0,isValidLongitude:!0,orderByDistance:!0,sexagesimalToDecimal:!0,toDecimal:!0,toRad:!0,toDeg:!0,wktToPolygon:!0};Object.defineProperty(i,"computeDestinationPoint",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(i,"convertArea",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(i,"convertDistance",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(i,"convertSpeed",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(i,"decimalToSexagesimal",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(i,"findNearest",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(i,"getAreaOfPolygon",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(i,"getBounds",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(i,"getBoundsOfDistance",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(i,"getCenter",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(i,"getCenterOfBounds",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(i,"getCompassDirection",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(i,"getCoordinateKey",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(i,"getCoordinateKeys",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(i,"getDistance",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(i,"getDistanceFromLine",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(i,"getGreatCircleBearing",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(i,"getLatitude",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(i,"getLongitude",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(i,"getPathLength",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(i,"getPreciseDistance",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(i,"getRhumbLineBearing",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(i,"getRoughCompassDirection",{enumerable:!0,get:function(){return L.default}}),Object.defineProperty(i,"getSpeed",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(i,"isDecimal",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(i,"isPointInLine",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(i,"isPointInPolygon",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(i,"isPointNearLine",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(i,"isPointWithinRadius",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(i,"isSexagesimal",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(i,"isValidCoordinate",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(i,"isValidLatitude",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(i,"isValidLongitude",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(i,"orderByDistance",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(i,"sexagesimalToDecimal",{enumerable:!0,get:function(){return H.default}}),Object.defineProperty(i,"toDecimal",{enumerable:!0,get:function(){return ne.default}}),Object.defineProperty(i,"toRad",{enumerable:!0,get:function(){return K.default}}),Object.defineProperty(i,"toDeg",{enumerable:!0,get:function(){return W.default}}),Object.defineProperty(i,"wktToPolygon",{enumerable:!0,get:function(){return q.default}});var t=Z(la),n=Z(ua),r=Z(fa),a=Z(ha),o=Z(da),s=Z(pa),u=Z(ga),c=Z(cr),l=Z(_a),f=Z(xa),h=Z(Ma),_=Z(Sa),p=Z(Zn),v=Z(Fi),g=Z(rn),d=Z(fr),x=Z(ba),m=Z(Tt),y=Z(At),M=Z(Ta),b=Z(Aa),w=Z(ur),L=Z(Ra),E=Z(Ca),A=Z(Jn),O=Z(Pa),T=Z(La),S=Z(Da),R=Z(Ua),C=Z(Qn),k=Z(ir),F=Z(rr),U=Z(ar),z=Z(or),H=Z(ei),ne=Z(Oi),K=Z(kt),W=Z(gn),q=Z(Ia),ie=we;Object.keys(ie).forEach(function(N){N==="default"||N==="__esModule"||Object.prototype.hasOwnProperty.call(e,N)||Object.defineProperty(i,N,{enumerable:!0,get:function(){return ie[N]}})});function Z(N){return N&&N.__esModule?N:{default:N}}})(lu);const cm=()=>{const i=t=>{let n={latitude:t.coords.latitude,longitude:t.coords.longitude},r=su();if(r?.latitude&&r?.longitude){const a=lu.getPreciseDistance(r,n);if(console.log(`getUserLocationSuccess (diff: ${a}, lat: ${t.coords.latitude}, lon: ${t.coords.longitude}, acc: ${t.coords.accuracy})`,0),a<100)return}console.log(`getUserLocationSuccess (lat: ${t.coords.latitude}, lon: ${t.coords.longitude}, acc: ${t.coords.accuracy})`,0),nh({latitude:t.coords.latitude,longitude:t.coords.longitude})},e=t=>{console.log(`getUserLocationError: ${t.message}`,0),navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,maximumAge:1/0})};return Ut(()=>{let t=null;navigator.geolocation?navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"geolocation"}).then(n=>{console.log(`Query geolocation result: ${n.state}`,0),n.state==="granted"?(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1/0}),t=navigator.geolocation.watchPosition(i)):n.state==="prompt"?(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!0,timeout:6e4,maximumAge:0}),t=navigator.geolocation.watchPosition(i)):n.state,n.onchange=function(){console.log(`Query geolocation change: ${n.state}`,0)}}):(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1/0}),t=navigator.geolocation.watchPosition(i)):console.log("geolocation not available",0),Ii(()=>{t!==null&&navigator.geolocation.clearWatch(t)})}),null};function um(i){return Kn({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M19 12H5M12 19l-7-7 7-7"/>'},i)}function fm(i){return Kn({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>'},i)}function hm(i){return Kn({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>'},i)}const dm=Qe('<img alt="Circle Picture">'),pm=i=>{const e={width:i.size,height:i.size},t=n=>{const r=n.target;r.src="./images/default-circle-picture.png"};return(()=>{const n=dm();return n.addEventListener("error",t),st(r=>{const a=i.circle?.picture??"./images/default-circle-picture.png",o=e,s=`rounded-full object-cover  ${i.className}`;return a!==r._v$&&Gn(n,"src",r._v$=a),r._v$2=aa(n,o,r._v$2),s!==r._v$3&&En(n,r._v$3=s),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})()},mm=Qe('<div class="py-3 px-6 flex items-center justify-start absolute top-0 left-0"><div class="mr-3 relative"></div><div class="relative flex items-center">'),gm=Qe('<button class="mr-3">'),_m=Qe('<div class="absolute bottom-0 right-0 text-white"><label for="circle-pic-input"></label><input id="circle-pic-input" type="file" accept="image/*" class="hidden">'),vm=Qe('<div><input id="circle-name-input" class="bg-transparent border-none outline-none font-bold text-2xl text-white" type="text">'),xm=Qe('<h1 class="text-white text-2xl font-bold">'),ym=()=>{const i=()=>{},[e,t]=Fe(!1),[n,r]=Fe(!1),[a,o]=Fe(!1),[s,u]=Fe(!1),[c,l]=Fe(""),f=g=>l(g.target.value);Ut(()=>{let g=oh(),d=lh();t(!d||!g?!1:g.username===d.username)});const h=()=>{u(!1)},_=g=>{console.log("Saving new picture: ",URL.createObjectURL(g.target.files[0]))},p=()=>{u(!0),l(Xa()?.name??"")};Ut(()=>{s()&&document.getElementById("circle-name-input")?.focus()});const v=g=>{g.key==="Enter"?h():g.key==="Escape"&&u(!1)};return(()=>{const g=mm(),d=g.firstChild,x=d.nextSibling;return Ge(g,(()=>{const m=ze(()=>!!ea());return()=>m()&&(()=>{const y=gm();return y.$$click=i,Ge(y,He(um,{color:"white",size:"28px"})),y})()})(),d),d.addEventListener("mouseleave",()=>o(!1)),d.addEventListener("mouseenter",()=>e()&&o(!0)),Ge(d,He(pm,{get circle(){return Xa()},size:"40px",className:"mr-3"}),null),Ge(d,(()=>{const m=ze(()=>!!(a()&&e()));return()=>m()&&(()=>{const y=_m(),M=y.firstChild,b=M.nextSibling;return Ge(M,He(fm,{size:"20px",class:"cursor-pointer"})),b.addEventListener("change",_),y})()})(),null),x.addEventListener("mouseleave",()=>r(!1)),x.addEventListener("mouseenter",()=>e()&&r(!0)),Ge(x,(()=>{const m=ze(()=>!!s());return()=>m()?(()=>{const y=vm(),M=y.firstChild;return M.addEventListener("blur",h),M.$$keydown=v,M.$$input=f,st(()=>M.value=c()),y})():[(()=>{const y=xm();return Ge(y,()=>Xa()?.name),y})(),ze((()=>{const y=ze(()=>!!(n()&&e()));return()=>y()&&He(hm,{class:"cursor-pointer ml-2",color:"white",onClick:p})})())]})()),g})()};Ni(["click","input","keydown"]);const Mm=()=>{const[i,e]=Fe(window.innerWidth),[t,n]=Fe(window.innerHeight),r=()=>{e(window.innerWidth),n(window.innerHeight)};return Ut(()=>{window.addEventListener("resize",r),Ii(()=>{window.removeEventListener("resize",r)})}),{windowWidth:i,windowHeight:t}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xo="152",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sm=0,ll=1,Em=2,pu=1,bm=2,hn=3,An=0,bt=1,dn=2,wn=0,Ti=1,cl=2,ul=3,fl=4,wm=5,bi=100,Tm=101,Am=102,hl=103,dl=104,Rm=200,Cm=201,Pm=202,Lm=203,mu=204,gu=205,Dm=206,Um=207,Im=208,Nm=209,Om=210,Fm=0,Bm=1,km=2,Zs=3,zm=4,Gm=5,Hm=6,Vm=7,_u=0,Wm=1,$m=2,mn=0,jm=1,Xm=2,qm=3,Ym=4,Km=5,vu=300,Pi=301,Li=302,Js=303,Qs=304,Na=306,eo=1e3,jt=1001,to=1002,St=1003,pl=1004,as=1005,Ft=1006,Zm=1007,er=1008,$n=1009,Jm=1010,Qm=1011,xu=1012,eg=1013,kn=1014,zn=1015,tr=1016,tg=1017,ng=1018,Ai=1020,ig=1021,Xt=1023,rg=1024,ag=1025,Hn=1026,Di=1027,sg=1028,og=1029,lg=1030,cg=1031,ug=1033,ss=33776,os=33777,ls=33778,cs=33779,ml=35840,gl=35841,_l=35842,vl=35843,fg=36196,xl=37492,yl=37496,Ml=37808,Sl=37809,El=37810,bl=37811,wl=37812,Tl=37813,Al=37814,Rl=37815,Cl=37816,Pl=37817,Ll=37818,Dl=37819,Ul=37820,Il=37821,us=36492,hg=36283,Nl=36284,Ol=36285,Fl=36286,yu=3e3,Vn=3001,dg=3200,pg=3201,Mu=0,mg=1,Wn="",Te="srgb",nn="srgb-linear",Su="display-p3",fs=7680,gg=519,Bl=35044,kl="300 es",no=1035;let ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}};const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hs=Math.PI/180,io=180/Math.PI;function hr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function _g(i,e){return(i%e+e)%e}function ds(i,e,t){return(1-t)*i+t*e}function zl(i){return(i&i-1)===0&&i!==0}function vg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}let Ue=class Eu{constructor(e=0,t=0){Eu.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class bu{constructor(){bu.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,a,o,s,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=s,l[3]=t,l[4]=a,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],u=n[6],c=n[1],l=n[4],f=n[7],h=n[2],_=n[5],p=n[8],v=r[0],g=r[3],d=r[6],x=r[1],m=r[4],y=r[7],M=r[2],b=r[5],w=r[8];return a[0]=o*v+s*x+u*M,a[3]=o*g+s*m+u*b,a[6]=o*d+s*y+u*w,a[1]=c*v+l*x+f*M,a[4]=c*g+l*m+f*b,a[7]=c*d+l*y+f*w,a[2]=h*v+_*x+p*M,a[5]=h*g+_*m+p*b,a[8]=h*d+_*y+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*s*c-n*a*l+n*s*u+r*a*c-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],l=e[8],f=l*o-s*c,h=s*u-l*a,_=c*a-o*u,p=t*f+n*h+r*_;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=f*v,e[1]=(r*c-l*n)*v,e[2]=(s*n-r*o)*v,e[3]=h*v,e[4]=(l*t-r*u)*v,e[5]=(r*a-s*t)*v,e[6]=_*v,e[7]=(n*u-c*t)*v,e[8]=(o*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const u=Math.cos(a),c=Math.sin(a);return this.set(n*u,n*c,-n*(u*o+c*s)+o+e,-r*c,r*u,-r*(-c*o+u*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ps.makeScale(e,t)),this}rotate(e){return this.premultiply(ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(ps.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const ps=new Be;function wu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Gl={};function Yi(i){i in Gl||(Gl[i]=!0,console.warn(i))}function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const xg=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),yg=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Mg(i){return i.convertSRGBToLinear().applyMatrix3(yg)}function Sg(i){return i.applyMatrix3(xg).convertLinearToSRGB()}const Eg={[nn]:i=>i,[Te]:i=>i.convertSRGBToLinear(),[Su]:Mg},bg={[nn]:i=>i,[Te]:i=>i.convertLinearToSRGB(),[Su]:Sg},Gt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return nn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Eg[e],r=bg[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let oi,Tu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=ta("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Ri(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Au=class{constructor(e=null){this.isSource=!0,this.uuid=hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(gs(r[o].image)):a.push(gs(r[o]))}else a=gs(r);n.url=a}return t||(e.images[this.uuid]=n),n}};function gs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wg=0,_n=class qr extends ti{constructor(e=qr.DEFAULT_IMAGE,t=qr.DEFAULT_MAPPING,n=jt,r=jt,a=Ft,o=er,s=Xt,u=$n,c=qr.DEFAULT_ANISOTROPY,l=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=hr(),this.name="",this.source=new Au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=u,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Vn?Te:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Vn:yu}set encoding(e){Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vn?Te:Wn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=vu;_n.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const u=e.elements,c=u[0],l=u[4],f=u[8],h=u[1],_=u[5],p=u[9],v=u[2],g=u[6],d=u[10];if(Math.abs(l-h)<.01&&Math.abs(f-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(f+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+_+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(c+1)/2,y=(_+1)/2,M=(d+1)/2,b=(l+h)/4,w=(f+v)/4,L=(p+g)/4;return m>y&&m>M?m<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(m),r=b/n,a=w/n):y>M?y<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),n=b/r,a=L/r):M<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(M),n=w/a,r=L/a),this.set(n,r,a,t),this}let x=Math.sqrt((g-p)*(g-p)+(f-v)*(f-v)+(h-l)*(h-l));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(f-v)/x,this.z=(h-l)/x,this.w=Math.acos((c+_+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jn extends ti{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Yi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?Te:Wn),this.texture=new _n(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Au(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tg extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let u=n[r+0],c=n[r+1],l=n[r+2],f=n[r+3];const h=a[o+0],_=a[o+1],p=a[o+2],v=a[o+3];if(s===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=_,e[t+2]=p,e[t+3]=v;return}if(f!==v||u!==h||c!==_||l!==p){let g=1-s;const d=u*h+c*_+l*p+f*v,x=d>=0?1:-1,m=1-d*d;if(m>Number.EPSILON){const M=Math.sqrt(m),b=Math.atan2(M,d*x);g=Math.sin(g*b)/M,s=Math.sin(s*b)/M}const y=s*x;if(u=u*g+h*y,c=c*g+_*y,l=l*g+p*y,f=f*g+v*y,g===1-s){const M=1/Math.sqrt(u*u+c*c+l*l+f*f);u*=M,c*=M,l*=M,f*=M}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],u=n[r+1],c=n[r+2],l=n[r+3],f=a[o],h=a[o+1],_=a[o+2],p=a[o+3];return e[t]=s*p+l*f+u*_-c*h,e[t+1]=u*p+l*h+c*f-s*_,e[t+2]=c*p+l*_+s*h-u*f,e[t+3]=l*p-s*f-u*h-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,u=Math.sin,c=s(n/2),l=s(r/2),f=s(a/2),h=u(n/2),_=u(r/2),p=u(a/2);switch(o){case"XYZ":this._x=h*l*f+c*_*p,this._y=c*_*f-h*l*p,this._z=c*l*p+h*_*f,this._w=c*l*f-h*_*p;break;case"YXZ":this._x=h*l*f+c*_*p,this._y=c*_*f-h*l*p,this._z=c*l*p-h*_*f,this._w=c*l*f+h*_*p;break;case"ZXY":this._x=h*l*f-c*_*p,this._y=c*_*f+h*l*p,this._z=c*l*p+h*_*f,this._w=c*l*f-h*_*p;break;case"ZYX":this._x=h*l*f-c*_*p,this._y=c*_*f+h*l*p,this._z=c*l*p-h*_*f,this._w=c*l*f+h*_*p;break;case"YZX":this._x=h*l*f+c*_*p,this._y=c*_*f+h*l*p,this._z=c*l*p-h*_*f,this._w=c*l*f-h*_*p;break;case"XZY":this._x=h*l*f-c*_*p,this._y=c*_*f-h*l*p,this._z=c*l*p+h*_*f,this._w=c*l*f+h*_*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],u=t[9],c=t[2],l=t[6],f=t[10],h=n+s+f;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(l-u)*_,this._y=(a-c)*_,this._z=(o-r)*_}else if(n>s&&n>f){const _=2*Math.sqrt(1+n-s-f);this._w=(l-u)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(a+c)/_}else if(s>f){const _=2*Math.sqrt(1+s-n-f);this._w=(a-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(u+l)/_}else{const _=2*Math.sqrt(1+f-n-s);this._w=(o-r)/_,this._x=(a+c)/_,this._y=(u+l)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,u=t._y,c=t._z,l=t._w;return this._x=n*l+o*s+r*c-a*u,this._y=r*l+o*u+a*s-n*c,this._z=a*l+o*c+n*u-r*s,this._w=o*l-n*s-r*u-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const u=1-s*s;if(u<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),l=Math.atan2(c,s),f=Math.sin((1-t)*l)/c,h=Math.sin(t*l)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,u=e.w,c=u*t+o*r-s*n,l=u*n+s*t-a*r,f=u*r+a*n-o*t,h=-a*t-o*n-s*r;return this.x=c*u+h*-a+l*-s-f*-o,this.y=l*u+h*-o+f*-a-c*-s,this.z=f*u+h*-s+c*-o-l*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,u=t.z;return this.x=r*u-a*s,this.y=a*o-n*u,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _s.copy(this).projectOnVector(e),this.sub(_s)}reflect(e){return this.sub(_s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _s=new V,Hl=new Xn;class dr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),li.copy(e.boundingBox),li.applyMatrix4(e.matrixWorld),this.union(li);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)on.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(on)}else r.boundingBox===null&&r.computeBoundingBox(),li.copy(r.boundingBox),li.applyMatrix4(e.matrixWorld),this.union(li)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),Er.subVectors(this.max,Gi),ci.subVectors(e.a,Gi),ui.subVectors(e.b,Gi),fi.subVectors(e.c,Gi),xn.subVectors(ui,ci),yn.subVectors(fi,ui),Un.subVectors(ci,fi);let t=[0,-xn.z,xn.y,0,-yn.z,yn.y,0,-Un.z,Un.y,xn.z,0,-xn.x,yn.z,0,-yn.x,Un.z,0,-Un.x,-xn.y,xn.x,0,-yn.y,yn.x,0,-Un.y,Un.x,0];return!vs(t,ci,ui,fi,Er)||(t=[1,0,0,0,1,0,0,0,1],!vs(t,ci,ui,fi,Er))?!1:(br.crossVectors(xn,yn),t=[br.x,br.y,br.z],vs(t,ci,ui,fi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new V,new V,new V,new V,new V,new V,new V,new V],on=new V,li=new dr,ci=new V,ui=new V,fi=new V,xn=new V,yn=new V,Un=new V,Gi=new V,Er=new V,br=new V,In=new V;function vs(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){In.fromArray(i,a);const s=r.x*Math.abs(In.x)+r.y*Math.abs(In.y)+r.z*Math.abs(In.z),u=e.dot(In),c=t.dot(In),l=n.dot(In);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>s)return!1}return!0}const Ag=new dr,Hi=new V,xs=new V;class yo{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ag.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(xs)),this.expandByPoint(Hi.copy(e.center).sub(xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new V,ys=new V,wr=new V,Mn=new V,Ms=new V,Tr=new V,Ss=new V;class Rg{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ys.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(ys);const a=e.distanceTo(t)*.5,o=-this.direction.dot(wr),s=Mn.dot(this.direction),u=-Mn.dot(wr),c=Mn.lengthSq(),l=Math.abs(1-o*o);let f,h,_,p;if(l>0)if(f=o*u-s,h=o*s-u,p=a*l,f>=0)if(h>=-p)if(h<=p){const v=1/l;f*=v,h*=v,_=f*(f+o*h+2*s)+h*(o*f+h+2*u)+c}else h=a,f=Math.max(0,-(o*h+s)),_=-f*f+h*(h+2*u)+c;else h=-a,f=Math.max(0,-(o*h+s)),_=-f*f+h*(h+2*u)+c;else h<=-p?(f=Math.max(0,-(-o*a+s)),h=f>0?-a:Math.min(Math.max(-a,-u),a),_=-f*f+h*(h+2*u)+c):h<=p?(f=0,h=Math.min(Math.max(-a,-u),a),_=h*(h+2*u)+c):(f=Math.max(0,-(o*a+s)),h=f>0?a:Math.min(Math.max(-a,-u),a),_=-f*f+h*(h+2*u)+c);else h=o>0?-a:a,f=Math.max(0,-(o*h+s)),_=-f*f+h*(h+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ys).addScaledVector(wr,h),_}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,u=n+o;return u<0?null:s<0?this.at(u,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,u;const c=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),l>=0?(a=(e.min.y-h.y)*l,o=(e.max.y-h.y)*l):(a=(e.max.y-h.y)*l,o=(e.min.y-h.y)*l),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-h.z)*f,u=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,u=(e.min.z-h.z)*f),n>u||s>r)||((s>n||n!==n)&&(n=s),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,r,a){Ms.subVectors(t,e),Tr.subVectors(n,e),Ss.crossVectors(Ms,Tr);let o=this.direction.dot(Ss),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const u=s*this.direction.dot(Tr.crossVectors(Mn,Tr));if(u<0)return null;const c=s*this.direction.dot(Ms.cross(Mn));if(c<0||u+c>o)return null;const l=-s*Mn.dot(Ss);return l<0?null:this.at(l/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,a,o,s,u,c,l,f,h,_,p,v,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=a,d[5]=o,d[9]=s,d[13]=u,d[2]=c,d[6]=l,d[10]=f,d[14]=h,d[3]=_,d[7]=p,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),a=1/hi.setFromMatrixColumn(e,1).length(),o=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),u=Math.cos(r),c=Math.sin(r),l=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=o*l,_=o*f,p=s*l,v=s*f;t[0]=u*l,t[4]=-u*f,t[8]=c,t[1]=_+p*c,t[5]=h-v*c,t[9]=-s*u,t[2]=v-h*c,t[6]=p+_*c,t[10]=o*u}else if(e.order==="YXZ"){const h=u*l,_=u*f,p=c*l,v=c*f;t[0]=h+v*s,t[4]=p*s-_,t[8]=o*c,t[1]=o*f,t[5]=o*l,t[9]=-s,t[2]=_*s-p,t[6]=v+h*s,t[10]=o*u}else if(e.order==="ZXY"){const h=u*l,_=u*f,p=c*l,v=c*f;t[0]=h-v*s,t[4]=-o*f,t[8]=p+_*s,t[1]=_+p*s,t[5]=o*l,t[9]=v-h*s,t[2]=-o*c,t[6]=s,t[10]=o*u}else if(e.order==="ZYX"){const h=o*l,_=o*f,p=s*l,v=s*f;t[0]=u*l,t[4]=p*c-_,t[8]=h*c+v,t[1]=u*f,t[5]=v*c+h,t[9]=_*c-p,t[2]=-c,t[6]=s*u,t[10]=o*u}else if(e.order==="YZX"){const h=o*u,_=o*c,p=s*u,v=s*c;t[0]=u*l,t[4]=v-h*f,t[8]=p*f+_,t[1]=f,t[5]=o*l,t[9]=-s*l,t[2]=-c*l,t[6]=_*f+p,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*u,_=o*c,p=s*u,v=s*c;t[0]=u*l,t[4]=-f,t[8]=c*l,t[1]=h*f+v,t[5]=o*l,t[9]=_*f-p,t[2]=p*f-_,t[6]=s*l,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Pg)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Sn.crossVectors(n,Pt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Sn.crossVectors(n,Pt)),Sn.normalize(),Ar.crossVectors(Pt,Sn),r[0]=Sn.x,r[4]=Ar.x,r[8]=Pt.x,r[1]=Sn.y,r[5]=Ar.y,r[9]=Pt.y,r[2]=Sn.z,r[6]=Ar.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],u=n[8],c=n[12],l=n[1],f=n[5],h=n[9],_=n[13],p=n[2],v=n[6],g=n[10],d=n[14],x=n[3],m=n[7],y=n[11],M=n[15],b=r[0],w=r[4],L=r[8],E=r[12],A=r[1],O=r[5],T=r[9],S=r[13],R=r[2],C=r[6],k=r[10],F=r[14],U=r[3],z=r[7],H=r[11],ne=r[15];return a[0]=o*b+s*A+u*R+c*U,a[4]=o*w+s*O+u*C+c*z,a[8]=o*L+s*T+u*k+c*H,a[12]=o*E+s*S+u*F+c*ne,a[1]=l*b+f*A+h*R+_*U,a[5]=l*w+f*O+h*C+_*z,a[9]=l*L+f*T+h*k+_*H,a[13]=l*E+f*S+h*F+_*ne,a[2]=p*b+v*A+g*R+d*U,a[6]=p*w+v*O+g*C+d*z,a[10]=p*L+v*T+g*k+d*H,a[14]=p*E+v*S+g*F+d*ne,a[3]=x*b+m*A+y*R+M*U,a[7]=x*w+m*O+y*C+M*z,a[11]=x*L+m*T+y*k+M*H,a[15]=x*E+m*S+y*F+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],u=e[9],c=e[13],l=e[2],f=e[6],h=e[10],_=e[14],p=e[3],v=e[7],g=e[11],d=e[15];return p*(+a*u*f-r*c*f-a*s*h+n*c*h+r*s*_-n*u*_)+v*(+t*u*_-t*c*h+a*o*h-r*o*_+r*c*l-a*u*l)+g*(+t*c*f-t*s*_-a*o*f+n*o*_+a*s*l-n*c*l)+d*(-r*s*l-t*u*f+t*s*h+r*o*f-n*o*h+n*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],l=e[8],f=e[9],h=e[10],_=e[11],p=e[12],v=e[13],g=e[14],d=e[15],x=f*g*c-v*h*c+v*u*_-s*g*_-f*u*d+s*h*d,m=p*h*c-l*g*c-p*u*_+o*g*_+l*u*d-o*h*d,y=l*v*c-p*f*c+p*s*_-o*v*_-l*s*d+o*f*d,M=p*f*u-l*v*u-p*s*h+o*v*h+l*s*g-o*f*g,b=t*x+n*m+r*y+a*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(v*h*a-f*g*a-v*r*_+n*g*_+f*r*d-n*h*d)*w,e[2]=(s*g*a-v*u*a+v*r*c-n*g*c-s*r*d+n*u*d)*w,e[3]=(f*u*a-s*h*a-f*r*c+n*h*c+s*r*_-n*u*_)*w,e[4]=m*w,e[5]=(l*g*a-p*h*a+p*r*_-t*g*_-l*r*d+t*h*d)*w,e[6]=(p*u*a-o*g*a-p*r*c+t*g*c+o*r*d-t*u*d)*w,e[7]=(o*h*a-l*u*a+l*r*c-t*h*c-o*r*_+t*u*_)*w,e[8]=y*w,e[9]=(p*f*a-l*v*a-p*n*_+t*v*_+l*n*d-t*f*d)*w,e[10]=(o*v*a-p*s*a+p*n*c-t*v*c-o*n*d+t*s*d)*w,e[11]=(l*s*a-o*f*a-l*n*c+t*f*c+o*n*_-t*s*_)*w,e[12]=M*w,e[13]=(l*v*r-p*f*r+p*n*h-t*v*h-l*n*g+t*f*g)*w,e[14]=(p*s*r-o*v*r-p*n*u+t*v*u+o*n*g-t*s*g)*w,e[15]=(o*f*r-l*s*r+l*n*u-t*f*u-o*n*h+t*s*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,u=e.z,c=a*o,l=a*s;return this.set(c*o+n,c*s-r*u,c*u+r*s,0,c*s+r*u,l*s+n,l*u-r*o,0,c*u-r*s,l*u+r*o,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,u=t._w,c=a+a,l=o+o,f=s+s,h=a*c,_=a*l,p=a*f,v=o*l,g=o*f,d=s*f,x=u*c,m=u*l,y=u*f,M=n.x,b=n.y,w=n.z;return r[0]=(1-(v+d))*M,r[1]=(_+y)*M,r[2]=(p-m)*M,r[3]=0,r[4]=(_-y)*b,r[5]=(1-(h+d))*b,r[6]=(g+x)*b,r[7]=0,r[8]=(p+m)*w,r[9]=(g-x)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=hi.set(r[0],r[1],r[2]).length();const o=hi.set(r[4],r[5],r[6]).length(),s=hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const c=1/a,l=1/o,f=1/s;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=l,Ht.elements[5]*=l,Ht.elements[6]*=l,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o){const s=this.elements,u=2*a/(t-e),c=2*a/(n-r),l=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+a)/(o-a),_=-2*o*a/(o-a);return s[0]=u,s[4]=0,s[8]=l,s[12]=0,s[1]=0,s[5]=c,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=_,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,a,o){const s=this.elements,u=1/(t-e),c=1/(n-r),l=1/(o-a),f=(t+e)*u,h=(n+r)*c,_=(o+a)*l;return s[0]=2*u,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*l,s[14]=-_,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new V,Ht=new ot,Cg=new V(0,0,0),Pg=new V(1,1,1),Sn=new V,Ar=new V,Pt=new V,Vl=new ot,Wl=new Xn;class Oa{constructor(e=0,t=0,n=0,r=Oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],u=r[1],c=r[5],l=r[9],f=r[2],h=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(s,_),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,_));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-l,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oa.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lg=0;const $l=new V,di=new Xn,cn=new ot,Rr=new V,Vi=new V,Dg=new V,Ug=new Xn,jl=new V(1,0,0),Xl=new V(0,1,0),ql=new V(0,0,1),Ig={type:"added"},Yl={type:"removed"};class wt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new V,t=new Oa,n=new Xn,r=new V(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Be}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Vi,Rr,this.up):cn.lookAt(Rr,Vi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(cn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ig)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,u){return s[u.uuid]===void 0&&(s[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const u=s.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const f=u[c];a(e.shapes,f)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let u=0,c=this.material.length;u<c;u++)s.push(a(e.materials,this.material[u]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const u=this.animations[s];r.animations.push(a(e.animations,u))}}if(t){const s=o(e.geometries),u=o(e.materials),c=o(e.textures),l=o(e.images),f=o(e.shapes),h=o(e.skeletons),_=o(e.animations),p=o(e.nodes);s.length>0&&(n.geometries=s),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),_.length>0&&(n.animations=_),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(s){const u=[];for(const c in s){const l=s[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new V(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new V,un=new V,Es=new V,fn=new V,pi=new V,mi=new V,Kl=new V,bs=new V,ws=new V,Ts=new V;let Cr=!1;class $t{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Vt.subVectors(r,t),un.subVectors(n,t),Es.subVectors(e,t);const o=Vt.dot(Vt),s=Vt.dot(un),u=Vt.dot(Es),c=un.dot(un),l=un.dot(Es),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const h=1/f,_=(c*u-s*l)*h,p=(o*l-s*u)*h;return a.set(1-_-p,p,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,r,a,o,s,u){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),this.getInterpolation(e,t,n,r,a,o,s,u)}static getInterpolation(e,t,n,r,a,o,s,u){return this.getBarycoord(e,t,n,r,fn),u.setScalar(0),u.addScaledVector(a,fn.x),u.addScaledVector(o,fn.y),u.addScaledVector(s,fn.z),u}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),un.subVectors(e,t),Vt.cross(un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Vt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;pi.subVectors(r,n),mi.subVectors(a,n),bs.subVectors(e,n);const u=pi.dot(bs),c=mi.dot(bs);if(u<=0&&c<=0)return t.copy(n);ws.subVectors(e,r);const l=pi.dot(ws),f=mi.dot(ws);if(l>=0&&f<=l)return t.copy(r);const h=u*f-l*c;if(h<=0&&u>=0&&l<=0)return o=u/(u-l),t.copy(n).addScaledVector(pi,o);Ts.subVectors(e,a);const _=pi.dot(Ts),p=mi.dot(Ts);if(p>=0&&_<=p)return t.copy(a);const v=_*c-u*p;if(v<=0&&c>=0&&p<=0)return s=c/(c-p),t.copy(n).addScaledVector(mi,s);const g=l*p-_*f;if(g<=0&&f-l>=0&&_-p>=0)return Kl.subVectors(a,r),s=(f-l)/(f-l+(_-p)),t.copy(r).addScaledVector(Kl,s);const d=1/(g+v+h);return o=v*d,s=h*d,t.copy(n).addScaledVector(pi,o).addScaledVector(mi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ng=0;class pr extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Ti,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const u=a[s];delete u.metadata,o.push(u)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function As(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Te){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=_g(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=As(o,a,e+1/3),this.g=As(o,a,e),this.b=As(o,a,e-1/3)}return Gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Te){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Te){const n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Te){return Gt.fromWorkingColorSpace(gt.copy(this),e),Math.round(Et(gt.r*255,0,255))*65536+Math.round(Et(gt.g*255,0,255))*256+Math.round(Et(gt.b*255,0,255))}getHexString(e=Te){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,r=gt.g,a=gt.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let u,c;const l=(s+o)/2;if(s===o)u=0,c=0;else{const f=o-s;switch(c=l<=.5?f/(o+s):f/(2-o-s),o){case n:u=(r-a)/f+(r<a?6:0);break;case r:u=(a-n)/f+2;break;case a:u=(n-r)/f+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Te){Gt.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,r=gt.b;return e!==Te?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=n,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Pr);const n=ds(Wt.h,Pr.h,t),r=ds(Wt.s,Pr.s,t),a=ds(Wt.l,Pr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Ve;Ve.NAMES=Pu;class na extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new V,Lr=new Ue;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),a=Ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lu extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Du extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Og=0;const Ot=new ot,Rs=new wt,gi=new V,Lt=new dr,Wi=new dr,ft=new V;class Cn extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wu(e)?Du:Lu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Be().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Rs.lookAt(e),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Lt.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Wi.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(Lt.min,Wi.min),Lt.expandByPoint(ft),ft.addVectors(Lt.max,Wi.max),Lt.expandByPoint(ft)):(Lt.expandByPoint(Wi.min),Lt.expandByPoint(Wi.max))}Lt.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)ft.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],u=this.morphTargetsRelative;for(let c=0,l=s.count;c<l;c++)ft.fromBufferAttribute(s,c),u&&(gi.fromBufferAttribute(e,c),ft.add(gi)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*s),4));const u=this.getAttribute("tangent").array,c=[],l=[];for(let A=0;A<s;A++)c[A]=new V,l[A]=new V;const f=new V,h=new V,_=new V,p=new Ue,v=new Ue,g=new Ue,d=new V,x=new V;function m(A,O,T){f.fromArray(r,A*3),h.fromArray(r,O*3),_.fromArray(r,T*3),p.fromArray(o,A*2),v.fromArray(o,O*2),g.fromArray(o,T*2),h.sub(f),_.sub(f),v.sub(p),g.sub(p);const S=1/(v.x*g.y-g.x*v.y);isFinite(S)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(_,-v.y).multiplyScalar(S),x.copy(_).multiplyScalar(v.x).addScaledVector(h,-g.x).multiplyScalar(S),c[A].add(d),c[O].add(d),c[T].add(d),l[A].add(x),l[O].add(x),l[T].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,O=y.length;A<O;++A){const T=y[A],S=T.start,R=T.count;for(let C=S,k=S+R;C<k;C+=3)m(n[C+0],n[C+1],n[C+2])}const M=new V,b=new V,w=new V,L=new V;function E(A){w.fromArray(a,A*3),L.copy(w);const O=c[A];M.copy(O),M.sub(w.multiplyScalar(w.dot(O))).normalize(),b.crossVectors(L,O);const S=b.dot(l[A])<0?-1:1;u[A*4]=M.x,u[A*4+1]=M.y,u[A*4+2]=M.z,u[A*4+3]=S}for(let A=0,O=y.length;A<O;++A){const T=y[A],S=T.start,R=T.count;for(let C=S,k=S+R;C<k;C+=3)E(n[C+0]),E(n[C+1]),E(n[C+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,_=n.count;h<_;h++)n.setXYZ(h,0,0,0);const r=new V,a=new V,o=new V,s=new V,u=new V,c=new V,l=new V,f=new V;if(e)for(let h=0,_=e.count;h<_;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),l.subVectors(o,a),f.subVectors(r,a),l.cross(f),s.fromBufferAttribute(n,p),u.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),s.add(l),u.add(l),c.add(l),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(v,u.x,u.y,u.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,_=t.count;h<_;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),l.subVectors(o,a),f.subVectors(r,a),l.cross(f),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(s,u){const c=s.array,l=s.itemSize,f=s.normalized,h=new c.constructor(u.length*l);let _=0,p=0;for(let v=0,g=u.length;v<g;v++){s.isInterleavedBufferAttribute?_=u[v]*s.data.stride+s.offset:_=u[v]*l;for(let d=0;d<l;d++)h[p++]=c[_++]}return new en(h,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,r=this.attributes;for(const s in r){const u=r[s],c=e(u,n);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const u=[],c=a[s];for(let l=0,f=c.length;l<f;l++){const h=c[l],_=e(h,n);u.push(_)}t.morphAttributes[s]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,u=o.length;s<u;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let a=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let f=0,h=c.length;f<h;f++){const _=c[f];l.push(_.toJSON(e.data))}l.length>0&&(r[u]=l,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(t))}const a=e.morphAttributes;for(const c in a){const l=[],f=a[c];for(let h=0,_=f.length;h<_;h++)l.push(f[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,l=o.length;c<l;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new ot,Kt=new Rg,Dr=new yo,Jl=new V,_i=new V,vi=new V,xi=new V,Cs=new V,Ur=new V,Ir=new Ue,Nr=new Ue,Or=new Ue,Ql=new V,ec=new V,tc=new V,Fr=new V,Br=new V;class Jt extends wt{constructor(e=new Cn,t=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Ur.set(0,0,0);for(let u=0,c=a.length;u<c;u++){const l=s[u],f=a[u];l!==0&&(Cs.fromBufferAttribute(f,e),o?Ur.addScaledVector(Cs,l):Ur.addScaledVector(Cs.sub(t),l))}t.add(Ur)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(a),Kt.copy(e.ray).recast(e.near),!(Dr.containsPoint(Kt.origin)===!1&&(Kt.intersectSphere(Dr,Jl)===null||Kt.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&(Zl.copy(a).invert(),Kt.copy(e.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&Kt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,a=this.material,o=r.index,s=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,l=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,p=f.length;_<p;_++){const v=f[_],g=a[v.materialIndex],d=Math.max(v.start,h.start),x=Math.min(o.count,Math.min(v.start+v.count,h.start+h.count));for(let m=d,y=x;m<y;m+=3){const M=o.getX(m),b=o.getX(m+1),w=o.getX(m+2);n=kr(this,g,e,Kt,u,c,l,M,b,w),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const _=Math.max(0,h.start),p=Math.min(o.count,h.start+h.count);for(let v=_,g=p;v<g;v+=3){const d=o.getX(v),x=o.getX(v+1),m=o.getX(v+2);n=kr(this,a,e,Kt,u,c,l,d,x,m),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}else if(s!==void 0)if(Array.isArray(a))for(let _=0,p=f.length;_<p;_++){const v=f[_],g=a[v.materialIndex],d=Math.max(v.start,h.start),x=Math.min(s.count,Math.min(v.start+v.count,h.start+h.count));for(let m=d,y=x;m<y;m+=3){const M=m,b=m+1,w=m+2;n=kr(this,g,e,Kt,u,c,l,M,b,w),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const _=Math.max(0,h.start),p=Math.min(s.count,h.start+h.count);for(let v=_,g=p;v<g;v+=3){const d=v,x=v+1,m=v+2;n=kr(this,a,e,Kt,u,c,l,d,x,m),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}}}function Fg(i,e,t,n,r,a,o,s){let u;if(e.side===bt?u=n.intersectTriangle(o,a,r,!0,s):u=n.intersectTriangle(r,a,o,e.side===An,s),u===null)return null;Br.copy(s),Br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:i}}function kr(i,e,t,n,r,a,o,s,u,c){i.getVertexPosition(s,_i),i.getVertexPosition(u,vi),i.getVertexPosition(c,xi);const l=Fg(i,e,t,n,_i,vi,xi,Fr);if(l){r&&(Ir.fromBufferAttribute(r,s),Nr.fromBufferAttribute(r,u),Or.fromBufferAttribute(r,c),l.uv=$t.getInterpolation(Fr,_i,vi,xi,Ir,Nr,Or,new Ue)),a&&(Ir.fromBufferAttribute(a,s),Nr.fromBufferAttribute(a,u),Or.fromBufferAttribute(a,c),l.uv1=$t.getInterpolation(Fr,_i,vi,xi,Ir,Nr,Or,new Ue),l.uv2=l.uv1),o&&(Ql.fromBufferAttribute(o,s),ec.fromBufferAttribute(o,u),tc.fromBufferAttribute(o,c),l.normal=$t.getInterpolation(Fr,_i,vi,xi,Ql,ec,tc,new V),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a:s,b:u,c,normal:new V,materialIndex:0};$t.getNormal(_i,vi,xi,f.normal),l.face=f}return l}class mr extends Cn{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const u=[],c=[],l=[],f=[];let h=0,_=0;p("z","y","x",-1,-1,n,t,e,o,a,0),p("z","y","x",1,-1,n,t,-e,o,a,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,a,4),p("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(u),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(f,2));function p(v,g,d,x,m,y,M,b,w,L,E){const A=y/w,O=M/L,T=y/2,S=M/2,R=b/2,C=w+1,k=L+1;let F=0,U=0;const z=new V;for(let H=0;H<k;H++){const ne=H*O-S;for(let K=0;K<C;K++){const W=K*A-T;z[v]=W*x,z[g]=ne*m,z[d]=R,c.push(z.x,z.y,z.z),z[v]=0,z[g]=0,z[d]=b>0?1:-1,l.push(z.x,z.y,z.z),f.push(K/w),f.push(1-H/L),F+=1}}for(let H=0;H<L;H++)for(let ne=0;ne<w;ne++){const K=h+ne+C*H,W=h+ne+C*(H+1),q=h+(ne+1)+C*(H+1),ie=h+(ne+1)+C*H;u.push(K,W,ie),u.push(W,q,ie),U+=6}s.addGroup(_,U,E),_+=U,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const r in n)e[r]=n[r]}return e}function Bg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uu(i){return i.getRenderTarget()===null?i.outputColorSpace:nn}const kg={clone:Ui,merge:Mt};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Iu extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Iu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/u,t-=o.offsetY*n/c,r*=o.width/u,n*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Mi=1;class Hg extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Dt(yi,Mi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new Dt(yi,Mi,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new Dt(yi,Mi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new Dt(yi,Mi,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const u=new Dt(yi,Mi,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const c=new Dt(yi,Mi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,a,o,s,u,c]=this.children,l=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=mn,e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(l),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Nu extends _n{constructor(e,t,n,r,a,o,s,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,r,a,o,s,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vg extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Yi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vn?Te:Wn),this.texture=new Nu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mr(5,5,5),a=new qn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:wn});a.uniforms.tEquirect.value=t;const o=new Jt(r,a),s=t.minFilter;return t.minFilter===er&&(t.minFilter=Ft),new Hg(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const Ps=new V,Wg=new V,$g=new Be;class On{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ps.subVectors(n,t).cross(Wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ps),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$g.getNormalMatrix(e),r=this.coplanarPoint(Ps).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new yo,zr=new V;class Mo{constructor(e=new On,t=new On,n=new On,r=new On,a=new On,o=new On){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],s=n[3],u=n[4],c=n[5],l=n[6],f=n[7],h=n[8],_=n[9],p=n[10],v=n[11],g=n[12],d=n[13],x=n[14],m=n[15];return t[0].setComponents(s-r,f-u,v-h,m-g).normalize(),t[1].setComponents(s+r,f+u,v+h,m+g).normalize(),t[2].setComponents(s+a,f+c,v+_,m+d).normalize(),t[3].setComponents(s-a,f-c,v-_,m-d).normalize(),t[4].setComponents(s-o,f-l,v-p,m-x).normalize(),t[5].setComponents(s+o,f+l,v+p,m+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function jg(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,l){const f=c.array,h=c.usage,_=i.createBuffer();i.bindBuffer(l,_),i.bufferData(l,f,h),c.onUploadCallback();let p;if(f instanceof Float32Array)p=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)p=i.SHORT;else if(f instanceof Uint32Array)p=i.UNSIGNED_INT;else if(f instanceof Int32Array)p=i.INT;else if(f instanceof Int8Array)p=i.BYTE;else if(f instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,l,f){const h=l.array,_=l.updateRange;i.bindBuffer(f,c),_.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,_.offset*h.BYTES_PER_ELEMENT,h,_.offset,_.count):i.bufferSubData(f,_.offset*h.BYTES_PER_ELEMENT,h.subarray(_.offset,_.offset+_.count)),_.count=-1),l.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l&&(i.deleteBuffer(l.buffer),n.delete(c))}function u(c,l){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,l)):f.version<c.version&&(a(f.buffer,c,l),f.version=c.version)}return{get:o,remove:s,update:u}}class So extends Cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),u=Math.floor(r),c=s+1,l=u+1,f=e/s,h=t/u,_=[],p=[],v=[],g=[];for(let d=0;d<l;d++){const x=d*h-o;for(let m=0;m<c;m++){const y=m*f-a;p.push(y,-x,0),v.push(0,0,1),g.push(m/s),g.push(1-d/u)}}for(let d=0;d<u;d++)for(let x=0;x<s;x++){const m=x+c*d,y=x+c*(d+1),M=x+1+c*(d+1),b=x+1+c*d;_.push(m,y,b),_.push(y,M,b)}this.setIndex(_),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg="vec3 transformed = vec3( position );",e_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,n_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,i_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,p_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,__=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,O_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,H_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,K_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_v=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Av=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Fv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zv=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:Xg,alphamap_pars_fragment:qg,alphatest_fragment:Yg,alphatest_pars_fragment:Kg,aomap_fragment:Zg,aomap_pars_fragment:Jg,begin_vertex:Qg,beginnormal_vertex:e_,bsdfs:t_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:s_,clipping_planes_vertex:o_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:u_,color_vertex:f_,common:h_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:__,emissivemap_pars_fragment:v_,encodings_fragment:x_,encodings_pars_fragment:y_,envmap_fragment:M_,envmap_common_pars_fragment:S_,envmap_pars_fragment:E_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:O_,envmap_vertex:w_,fog_vertex:T_,fog_pars_vertex:A_,fog_fragment:R_,fog_pars_fragment:C_,gradientmap_pars_fragment:P_,lightmap_fragment:L_,lightmap_pars_fragment:D_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:I_,lights_pars_begin:N_,lights_toon_fragment:F_,lights_toon_pars_fragment:B_,lights_phong_fragment:k_,lights_phong_pars_fragment:z_,lights_physical_fragment:G_,lights_physical_pars_fragment:H_,lights_fragment_begin:V_,lights_fragment_maps:W_,lights_fragment_end:$_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:Y_,map_fragment:K_,map_pars_fragment:Z_,map_particle_fragment:J_,map_particle_pars_fragment:Q_,metalnessmap_fragment:ev,metalnessmap_pars_fragment:tv,morphcolor_vertex:nv,morphnormal_vertex:iv,morphtarget_pars_vertex:rv,morphtarget_vertex:av,normal_fragment_begin:sv,normal_fragment_maps:ov,normal_pars_fragment:lv,normal_pars_vertex:cv,normal_vertex:uv,normalmap_pars_fragment:fv,clearcoat_normal_fragment_begin:hv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:pv,iridescence_pars_fragment:mv,output_fragment:gv,packing:_v,premultiplied_alpha_fragment:vv,project_vertex:xv,dithering_fragment:yv,dithering_pars_fragment:Mv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:Ev,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:wv,shadowmap_vertex:Tv,shadowmask_pars_fragment:Av,skinbase_vertex:Rv,skinning_pars_vertex:Cv,skinning_vertex:Pv,skinnormal_vertex:Lv,specularmap_fragment:Dv,specularmap_pars_fragment:Uv,tonemapping_fragment:Iv,tonemapping_pars_fragment:Nv,transmission_fragment:Ov,transmission_pars_fragment:Fv,uv_pars_fragment:Bv,uv_pars_vertex:kv,uv_vertex:zv,worldpos_vertex:Gv,background_vert:Hv,background_frag:Vv,backgroundCube_vert:Wv,backgroundCube_frag:$v,cube_vert:jv,cube_frag:Xv,depth_vert:qv,depth_frag:Yv,distanceRGBA_vert:Kv,distanceRGBA_frag:Zv,equirect_vert:Jv,equirect_frag:Qv,linedashed_vert:e0,linedashed_frag:t0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:r0,meshlambert_frag:a0,meshmatcap_vert:s0,meshmatcap_frag:o0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:u0,meshphong_frag:f0,meshphysical_vert:h0,meshphysical_frag:d0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:_0,shadow_vert:v0,shadow_frag:x0,sprite_vert:y0,sprite_frag:M0},le={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaTest:{value:0}}},Zt={basic:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Mt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Mt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Mt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Mt([le.points,le.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Mt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Mt([le.common,le.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Mt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Mt([le.sprite,le.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Mt([le.common,le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Mt([le.lights,le.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Zt.physical={uniforms:Mt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Gr={r:0,b:0,g:0};function S0(i,e,t,n,r,a,o){const s=new Ve(0);let u=a===!0?0:1,c,l,f=null,h=0,_=null;function p(g,d){let x=!1,m=d.isScene===!0?d.background:null;switch(m&&m.isTexture&&(m=(d.backgroundBlurriness>0?t:e).get(m)),m===null?v(s,u):m&&m.isColor&&(v(m,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Na)?(l===void 0&&(l=new Jt(new mr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ui(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=m.colorSpace!==Te,(f!==m||h!==m.version||_!==i.toneMapping)&&(l.material.needsUpdate=!0,f=m,h=m.version,_=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Jt(new So(2,2),new qn({name:"BackgroundMaterial",uniforms:Ui(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=m.colorSpace!==Te,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||h!==m.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,f=m,h=m.version,_=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,d){g.getRGB(Gr,Uu(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(g,d=1){s.set(g),u=d,v(s,u)},getClearAlpha:function(){return u},setClearAlpha:function(g){u=g,v(s,u)},render:p}}function E0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,s={},u=g(null);let c=u,l=!1;function f(R,C,k,F,U){let z=!1;if(o){const H=v(F,k,C);c!==H&&(c=H,_(c.object)),z=d(R,F,k,U),z&&x(R,F,k,U)}else{const H=C.wireframe===!0;(c.geometry!==F.id||c.program!==k.id||c.wireframe!==H)&&(c.geometry=F.id,c.program=k.id,c.wireframe=H,z=!0)}U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||l)&&(l=!1,L(R,C,k,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function _(R){return n.isWebGL2?i.bindVertexArray(R):a.bindVertexArrayOES(R)}function p(R){return n.isWebGL2?i.deleteVertexArray(R):a.deleteVertexArrayOES(R)}function v(R,C,k){const F=k.wireframe===!0;let U=s[R.id];U===void 0&&(U={},s[R.id]=U);let z=U[C.id];z===void 0&&(z={},U[C.id]=z);let H=z[F];return H===void 0&&(H=g(h()),z[F]=H),H}function g(R){const C=[],k=[],F=[];for(let U=0;U<r;U++)C[U]=0,k[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:F,object:R,attributes:{},index:null}}function d(R,C,k,F){const U=c.attributes,z=C.attributes;let H=0;const ne=k.getAttributes();for(const K in ne)if(ne[K].location>=0){const q=U[K];let ie=z[K];if(ie===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;H++}return c.attributesNum!==H||c.index!==F}function x(R,C,k,F){const U={},z=C.attributes;let H=0;const ne=k.getAttributes();for(const K in ne)if(ne[K].location>=0){let q=z[K];q===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),U[K]=ie,H++}c.attributes=U,c.attributesNum=H,c.index=F}function m(){const R=c.newAttributes;for(let C=0,k=R.length;C<k;C++)R[C]=0}function y(R){M(R,0)}function M(R,C){const k=c.newAttributes,F=c.enabledAttributes,U=c.attributeDivisors;k[R]=1,F[R]===0&&(i.enableVertexAttribArray(R),F[R]=1),U[R]!==C&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,C),U[R]=C)}function b(){const R=c.newAttributes,C=c.enabledAttributes;for(let k=0,F=C.length;k<F;k++)C[k]!==R[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function w(R,C,k,F,U,z){n.isWebGL2===!0&&(k===i.INT||k===i.UNSIGNED_INT)?i.vertexAttribIPointer(R,C,k,U,z):i.vertexAttribPointer(R,C,k,F,U,z)}function L(R,C,k,F){if(n.isWebGL2===!1&&(R.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const U=F.attributes,z=k.getAttributes(),H=C.defaultAttributeValues;for(const ne in z){const K=z[ne];if(K.location>=0){let W=U[ne];if(W===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){const q=W.normalized,ie=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const N=Z.buffer,xe=Z.type,ye=Z.bytesPerElement;if(W.isInterleavedBufferAttribute){const oe=W.data,pe=oe.stride,Ie=W.offset;if(oe.isInstancedInterleavedBuffer){for(let me=0;me<K.locationSize;me++)M(K.location+me,oe.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<K.locationSize;me++)y(K.location+me);i.bindBuffer(i.ARRAY_BUFFER,N);for(let me=0;me<K.locationSize;me++)w(K.location+me,ie/K.locationSize,xe,q,pe*ye,(Ie+ie/K.locationSize*me)*ye)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<K.locationSize;oe++)M(K.location+oe,W.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<K.locationSize;oe++)y(K.location+oe);i.bindBuffer(i.ARRAY_BUFFER,N);for(let oe=0;oe<K.locationSize;oe++)w(K.location+oe,ie/K.locationSize,xe,q,ie*ye,ie/K.locationSize*oe*ye)}}else if(H!==void 0){const q=H[ne];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(K.location,q);break;case 3:i.vertexAttrib3fv(K.location,q);break;case 4:i.vertexAttrib4fv(K.location,q);break;default:i.vertexAttrib1fv(K.location,q)}}}}b()}function E(){T();for(const R in s){const C=s[R];for(const k in C){const F=C[k];for(const U in F)p(F[U].object),delete F[U];delete C[k]}delete s[R]}}function A(R){if(s[R.id]===void 0)return;const C=s[R.id];for(const k in C){const F=C[k];for(const U in F)p(F[U].object),delete F[U];delete C[k]}delete s[R.id]}function O(R){for(const C in s){const k=s[C];if(k[R.id]===void 0)continue;const F=k[R.id];for(const U in F)p(F[U].object),delete F[U];delete k[R.id]}}function T(){S(),l=!0,c!==u&&(c=u,_(c.object))}function S(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:f,reset:T,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:O,initAttributes:m,enableAttribute:y,disableUnusedAttributes:b}}function b0(i,e,t,n){const r=n.isWebGL2;let a;function o(c){a=c}function s(c,l){i.drawArrays(a,c,l),t.update(l,a,1)}function u(c,l,f){if(f===0)return;let h,_;if(r)h=i,_="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[_](a,c,l,f),t.update(l,a,f)}this.setMode=o,this.render=s,this.renderInstances=u}function w0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const u=a(s);u!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",u,"instead."),s=u);const c=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,y=o||e.has("OES_texture_float"),M=m&&y,b=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:h,maxTextureSize:_,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:b}}function T0(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new On,s=new Be,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const _=f.length!==0||h||n!==0||r;return r=h,n=f.length,_},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){t=l(f,h,0)},this.setState=function(f,h,_){const p=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!r||p===null||p.length===0||a&&!g)a?l(null):c();else{const x=a?0:n,m=x*4;let y=d.clippingState||null;u.value=y,y=l(p,h,m,_);for(let M=0;M!==m;++M)y[M]=t[M];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(f,h,_,p){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=u.value,p!==!0||g===null){const d=_+v*4,x=h.matrixWorldInverse;s.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let m=0,y=_;m!==v;++m,y+=4)o.copy(f[m]).applyMatrix4(x,s),o.normal.toArray(g,y),g[y+3]=o.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function A0(i){let e=new WeakMap;function t(o,s){return s===Js?o.mapping=Pi:s===Qs&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Js||s===Qs)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new Vg(u.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const u=e.get(s);u!==void 0&&(e.delete(s),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class R0 extends Iu{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=l*this.view.offsetY,u=s-l*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,nc=[.125,.215,.35,.446,.526,.582],Bn=20,Ls=new R0,ic=new Ve;let Ds=null;const Fn=(1+Math.sqrt(5))/2,Si=1/Fn,rc=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Fn,Si),new V(0,Fn,-Si),new V(Si,0,Fn),new V(-Si,0,Fn),new V(Fn,Si,0),new V(-Fn,Si,0)];class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ds=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:tr,format:Xt,colorSpace:nn,depthBuffer:!1},r=sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(a)),this._blurMaterial=P0(a,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,n,r){const s=new Dt(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,h=l.toneMapping;l.getClearColor(ic),l.toneMapping=mn,l.autoClear=!1;const _=new na({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),p=new Jt(new mr,_);let v=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,v=!0):(_.color.copy(ic),v=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(s.up.set(0,u[d],0),s.lookAt(c[d],0,0)):x===1?(s.up.set(0,0,u[d]),s.lookAt(0,c[d],0)):(s.up.set(0,u[d],0),s.lookAt(0,0,c[d]));const m=this._cubeSize;Hr(r,x*m,d>2?m:0,m,m),l.setRenderTarget(r),v&&l.render(p,s),l.render(e,s)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pi||e.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const u=this._cubeSize;Hr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rc[(r-1)%rc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new Jt(this._lodPlanes[r],c),h=c.uniforms,_=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Bn-1),v=a/p,g=isFinite(a)?1+Math.floor(l*v):Bn;g>Bn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bn}`);const d=[];let x=0;for(let w=0;w<Bn;++w){const L=w/v,E=Math.exp(-L*L/2);d.push(E),w===0?x+=E:w<g&&(x+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:m}=this;h.dTheta.value=p,h.mipInt.value=m-n;const y=this._sizeLods[r],M=3*y*(r>m-wi?r-m+wi:0),b=4*(this._cubeSize-y);Hr(t,M,b,3*y,2*y),u.setRenderTarget(t),u.render(f,Ls)}}function C0(i){const e=[],t=[],n=[];let r=i;const a=i-wi+1+nc.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let u=1/s;o>i-wi?u=nc[o-i+wi-1]:o===0&&(u=0),n.push(u);const c=1/(s-2),l=-c,f=1+c,h=[l,l,f,l,f,f,l,l,f,f,l,f],_=6,p=6,v=3,g=2,d=1,x=new Float32Array(v*p*_),m=new Float32Array(g*p*_),y=new Float32Array(d*p*_);for(let b=0;b<_;b++){const w=b%3*2/3-1,L=b>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];x.set(E,v*p*b),m.set(h,g*p*b);const A=[b,b,b,b,b,b];y.set(A,d*p*b)}const M=new Cn;M.setAttribute("position",new en(x,v)),M.setAttribute("uv",new en(m,g)),M.setAttribute("faceIndex",new en(y,d)),e.push(M),r>wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sc(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function P0(i,e,t){const n=new Float32Array(Bn),r=new V(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function oc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function lc(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L0(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const u=s.mapping,c=u===Js||u===Qs,l=u===Pi||u===Li;if(c||l)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new ac(i)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||l&&f&&r(f)){t===null&&(t=new ac(i));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",a),h.texture}else return null}}}return s}function r(s){let u=0;const c=6;for(let l=0;l<c;l++)s[l]!==void 0&&u++;return u===c}function a(s){const u=s.target;u.removeEventListener("dispose",a);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function D0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function U0(i,e,t,n){const r={},a=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete r[h.id];const _=a.get(h);_&&(e.remove(_),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function u(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER);const _=f.morphAttributes;for(const p in _){const v=_[p];for(let g=0,d=v.length;g<d;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){const h=[],_=f.index,p=f.attributes.position;let v=0;if(_!==null){const x=_.array;v=_.version;for(let m=0,y=x.length;m<y;m+=3){const M=x[m+0],b=x[m+1],w=x[m+2];h.push(M,b,b,w,w,M)}}else{const x=p.array;v=p.version;for(let m=0,y=x.length/3-1;m<y;m+=3){const M=m+0,b=m+1,w=m+2;h.push(M,b,b,w,w,M)}}const g=new(wu(h)?Du:Lu)(h,1);g.version=v;const d=a.get(f);d&&e.remove(d),a.set(f,g)}function l(f){const h=a.get(f);if(h){const _=f.index;_!==null&&h.version<_.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:u,getWireframeAttribute:l}}function I0(i,e,t,n){const r=n.isWebGL2;let a;function o(h){a=h}let s,u;function c(h){s=h.type,u=h.bytesPerElement}function l(h,_){i.drawElements(a,_,s,h*u),t.update(_,a,1)}function f(h,_,p){if(p===0)return;let v,g;if(r)v=i,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](a,_,s,h*u,p),t.update(_,a,p)}this.setMode=o,this.setIndex=c,this.render=l,this.renderInstances=f}function N0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function O0(i,e){return i[0]-e[0]}function F0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function B0(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,o=new Ke,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function u(c,l,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=p!==void 0?p.length:0;let g=a.get(l);if(g===void 0||g.count!==v){let C=function(){S.dispose(),a.delete(l),l.removeEventListener("dispose",C)};var _=C;g!==void 0&&g.texture.dispose();const m=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,b=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],L=l.morphAttributes.color||[];let E=0;m===!0&&(E=1),y===!0&&(E=2),M===!0&&(E=3);let A=l.attributes.position.count*E,O=1;A>e.maxTextureSize&&(O=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*O*4*v),S=new Ru(T,A,O,v);S.type=zn,S.needsUpdate=!0;const R=E*4;for(let k=0;k<v;k++){const F=b[k],U=w[k],z=L[k],H=A*O*4*k;for(let ne=0;ne<F.count;ne++){const K=ne*R;m===!0&&(o.fromBufferAttribute(F,ne),T[H+K+0]=o.x,T[H+K+1]=o.y,T[H+K+2]=o.z,T[H+K+3]=0),y===!0&&(o.fromBufferAttribute(U,ne),T[H+K+4]=o.x,T[H+K+5]=o.y,T[H+K+6]=o.z,T[H+K+7]=0),M===!0&&(o.fromBufferAttribute(z,ne),T[H+K+8]=o.x,T[H+K+9]=o.y,T[H+K+10]=o.z,T[H+K+11]=z.itemSize===4?o.w:1)}}g={count:v,texture:S,size:new Ue(A,O)},a.set(l,g),l.addEventListener("dispose",C)}let d=0;for(let m=0;m<h.length;m++)d+=h[m];const x=l.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=h===void 0?0:h.length;let v=n[l.id];if(v===void 0||v.length!==p){v=[];for(let y=0;y<p;y++)v[y]=[y,0];n[l.id]=v}for(let y=0;y<p;y++){const M=v[y];M[0]=y,M[1]=h[y]}v.sort(F0);for(let y=0;y<8;y++)y<p&&v[y][1]?(s[y][0]=v[y][0],s[y][1]=v[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(O0);const g=l.morphAttributes.position,d=l.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const M=s[y],b=M[0],w=M[1];b!==Number.MAX_SAFE_INTEGER&&w?(g&&l.getAttribute("morphTarget"+y)!==g[b]&&l.setAttribute("morphTarget"+y,g[b]),d&&l.getAttribute("morphNormal"+y)!==d[b]&&l.setAttribute("morphNormal"+y,d[b]),r[y]=w,x+=w):(g&&l.hasAttribute("morphTarget"+y)===!0&&l.deleteAttribute("morphTarget"+y),d&&l.hasAttribute("morphNormal"+y)===!0&&l.deleteAttribute("morphNormal"+y),r[y]=0)}const m=l.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function k0(i,e,t,n){let r=new WeakMap;function a(u){const c=n.render.frame,l=u.geometry,f=e.get(u,l);return r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",s)===!1&&u.addEventListener("dispose",s),t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function s(u){const c=u.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Fu=new _n,Bu=new Ru,ku=new Tg,zu=new Nu,cc=[],uc=[],fc=new Float32Array(16),hc=new Float32Array(9),dc=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=cc[r];if(a===void 0&&(a=new Float32Array(r),cc[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fa(i,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function W0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),ct(t,n)}}function $0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),ct(t,n)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;fc.set(n),i.uniformMatrix4fv(this.addr,!1,fc),ct(t,n)}}function X0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function Z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function tx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Fu,r)}function nx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ku,r)}function ix(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zu,r)}function rx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bu,r)}function ax(i){switch(i){case 5126:return z0;case 35664:return G0;case 35665:return H0;case 35666:return V0;case 35674:return W0;case 35675:return $0;case 35676:return j0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return J0;case 36295:return Q0;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return rx}}function sx(i,e){i.uniform1fv(this.addr,e)}function ox(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function lx(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function cx(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function ux(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fx(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hx(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dx(i,e){i.uniform1iv(this.addr,e)}function px(i,e){i.uniform2iv(this.addr,e)}function mx(i,e){i.uniform3iv(this.addr,e)}function gx(i,e){i.uniform4iv(this.addr,e)}function _x(i,e){i.uniform1uiv(this.addr,e)}function vx(i,e){i.uniform2uiv(this.addr,e)}function xx(i,e){i.uniform3uiv(this.addr,e)}function yx(i,e){i.uniform4uiv(this.addr,e)}function Mx(i,e,t){const n=this.cache,r=e.length,a=Fa(t,r);lt(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fu,a[o])}function Sx(i,e,t){const n=this.cache,r=e.length,a=Fa(t,r);lt(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ku,a[o])}function Ex(i,e,t){const n=this.cache,r=e.length,a=Fa(t,r);lt(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zu,a[o])}function bx(i,e,t){const n=this.cache,r=e.length,a=Fa(t,r);lt(n,a)||(i.uniform1iv(this.addr,a),ct(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bu,a[o])}function wx(i){switch(i){case 5126:return sx;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return ux;case 35675:return fx;case 35676:return hx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return vx;case 36295:return xx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return bx}}class Tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ax(t.type)}}class Ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wx(t.type)}}class Rx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Us=/(\w+)(\])?(\[|\.)?/g;function pc(i,e){i.seq.push(e),i.map[e.id]=e}function Cx(i,e,t){const n=i.name,r=n.length;for(Us.lastIndex=0;;){const a=Us.exec(n),o=Us.lastIndex;let s=a[1];const u=a[2]==="]",c=a[3];if(u&&(s=s|0),c===void 0||c==="["&&o+2===r){pc(t,c===void 0?new Tx(s,i,e):new Ax(s,i,e));break}else{let f=t.map[s];f===void 0&&(f=new Rx(s),pc(t,f)),t=f}}}class Yr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Cx(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],u=n[s.id];u.needsUpdate!==!1&&s.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function mc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Px=0;function Lx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Dx(i){switch(i){case nn:return["Linear","( value )"];case Te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function gc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Lx(i.getShaderSource(e),o)}else return r}function Ux(i,e){const t=Dx(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ix(i,e){let t;switch(e){case jm:t="Linear";break;case Xm:t="Reinhard";break;case qm:t="OptimizedCineon";break;case Ym:t="ACESFilmic";break;case Km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function Ox(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function ji(i){return i!==""}function _c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(i){return i.replace(Bx,kx)}function kx(i,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ro(t)}const zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(zx,Gx)}function Gx(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function yc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function $x(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case Wm:e="ENVMAP_BLENDING_MIX";break;case $m:e="ENVMAP_BLENDING_ADD";break}return e}function jx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xx(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const u=Hx(t),c=Vx(t),l=Wx(t),f=$x(t),h=jx(t),_=t.isWebGL2?"":Nx(t),p=Ox(a),v=r.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[p].filter(ji).join(`
`),g.length>0&&(g+=`
`),d=[_,p].filter(ji).join(`
`),d.length>0&&(d+=`
`)):(g=[yc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),d=[_,yc(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==mn?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),o=ro(o),o=_c(o,t),o=vc(o,t),s=ro(s),s=_c(s,t),s=vc(s,t),o=xc(o),s=xc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const m=x+g+o,y=x+d+s,M=mc(r,r.VERTEX_SHADER,m),b=mc(r,r.FRAGMENT_SHADER,y);if(r.attachShader(v,M),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(M).trim(),O=r.getShaderInfoLog(b).trim();let T=!0,S=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(T=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,M,b);else{const R=gc(r,M,"vertex"),C=gc(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+R+`
`+C)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(A===""||O==="")&&(S=!1);S&&(this.diagnostics={runnable:T,programLog:E,vertexShader:{log:A,prefix:g},fragmentShader:{log:O,prefix:d}})}r.deleteShader(M),r.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new Yr(r,v)),w};let L;return this.getAttributes=function(){return L===void 0&&(L=Fx(r,v)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}let qx=0;class Yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kx(e),t.set(e,n)),n}}class Kx{constructor(e){this.id=qx++,this.code=e,this.usedTimes=0}}function Zx(i,e,t,n,r,a,o){const s=new Cu,u=new Yx,c=[],l=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let _=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===1?"uv1":E===2?"uv2":E===3?"uv3":"uv"}function g(E,A,O,T,S){const R=T.fog,C=S.geometry,k=E.isMeshStandardMaterial?T.environment:null,F=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),U=F&&F.mapping===Na?F.image.height:null,z=p[E.type];E.precision!==null&&(_=r.getMaxPrecision(E.precision),_!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const H=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=H!==void 0?H.length:0;let K=0;C.morphAttributes.position!==void 0&&(K=1),C.morphAttributes.normal!==void 0&&(K=2),C.morphAttributes.color!==void 0&&(K=3);let W,q,ie,Z;if(z){const $e=Zt[z];W=$e.vertexShader,q=$e.fragmentShader}else W=E.vertexShader,q=E.fragmentShader,u.update(E),ie=u.getVertexShaderID(E),Z=u.getFragmentShaderID(E);const N=i.getRenderTarget(),xe=S.isInstancedMesh===!0,ye=!!E.map,oe=!!E.matcap,pe=!!F,Ie=!!E.aoMap,me=!!E.lightMap,Ae=!!E.bumpMap,Je=!!E.normalMap,Ze=!!E.displacementMap,it=!!E.emissiveMap,et=!!E.metalnessMap,ke=!!E.roughnessMap,Xe=E.clearcoat>0,dt=E.iridescence>0,I=E.sheen>0,P=E.transmission>0,Y=Xe&&!!E.clearcoatMap,re=Xe&&!!E.clearcoatNormalMap,se=Xe&&!!E.clearcoatRoughnessMap,ce=dt&&!!E.iridescenceMap,B=dt&&!!E.iridescenceThicknessMap,te=I&&!!E.sheenColorMap,X=I&&!!E.sheenRoughnessMap,ue=!!E.specularMap,de=!!E.specularColorMap,_e=!!E.specularIntensityMap,fe=P&&!!E.transmissionMap,ge=P&&!!E.thicknessMap,Ee=!!E.gradientMap,Pe=!!E.alphaMap,tt=E.alphaTest>0,G=!!E.extensions,J=!!C.attributes.uv1,ae=!!C.attributes.uv2,he=!!C.attributes.uv3;return{isWebGL2:l,shaderID:z,shaderName:E.type,vertexShader:W,fragmentShader:q,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,instancing:xe,instancingColor:xe&&S.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:nn,map:ye,matcap:oe,envMap:pe,envMapMode:pe&&F.mapping,envMapCubeUVHeight:U,aoMap:Ie,lightMap:me,bumpMap:Ae,normalMap:Je,displacementMap:h&&Ze,emissiveMap:it,normalMapObjectSpace:Je&&E.normalMapType===mg,normalMapTangentSpace:Je&&E.normalMapType===Mu,metalnessMap:et,roughnessMap:ke,clearcoat:Xe,clearcoatMap:Y,clearcoatNormalMap:re,clearcoatRoughnessMap:se,iridescence:dt,iridescenceMap:ce,iridescenceThicknessMap:B,sheen:I,sheenColorMap:te,sheenRoughnessMap:X,specularMap:ue,specularColorMap:de,specularIntensityMap:_e,transmission:P,transmissionMap:fe,thicknessMap:ge,gradientMap:Ee,opaque:E.transparent===!1&&E.blending===Ti,alphaMap:Pe,alphaTest:tt,combine:E.combine,mapUv:ye&&v(E.map.channel),aoMapUv:Ie&&v(E.aoMap.channel),lightMapUv:me&&v(E.lightMap.channel),bumpMapUv:Ae&&v(E.bumpMap.channel),normalMapUv:Je&&v(E.normalMap.channel),displacementMapUv:Ze&&v(E.displacementMap.channel),emissiveMapUv:it&&v(E.emissiveMap.channel),metalnessMapUv:et&&v(E.metalnessMap.channel),roughnessMapUv:ke&&v(E.roughnessMap.channel),clearcoatMapUv:Y&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:B&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:X&&v(E.sheenRoughnessMap.channel),specularMapUv:ue&&v(E.specularMap.channel),specularColorMapUv:de&&v(E.specularColorMap.channel),specularIntensityMapUv:_e&&v(E.specularIntensityMap.channel),transmissionMapUv:fe&&v(E.transmissionMap.channel),thicknessMapUv:ge&&v(E.thicknessMap.channel),alphaMapUv:Pe&&v(E.alphaMap.channel),vertexTangents:Je&&!!C.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:ae,vertexUv3s:he,pointsUvs:S.isPoints===!0&&!!C.attributes.uv&&(ye||Pe),fog:!!R,useFog:E.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:S.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:E.toneMapped?i.toneMapping:mn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===bt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:G&&E.extensions.derivatives===!0,extensionFragDepth:G&&E.extensions.fragDepth===!0,extensionDrawBuffers:G&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)A.push(O),A.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(x(A,E),m(A,E),A.push(i.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function x(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function m(E,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),E.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),E.push(s.mask)}function y(E){const A=p[E.type];let O;if(A){const T=Zt[A];O=kg.clone(T.uniforms)}else O=E.uniforms;return O}function M(E,A){let O;for(let T=0,S=c.length;T<S;T++){const R=c[T];if(R.cacheKey===A){O=R,++O.usedTimes;break}}return O===void 0&&(O=new Xx(i,A,E,a),c.push(O)),O}function b(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function w(E){u.remove(E)}function L(){u.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:L}}function Jx(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Qx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,_,p,v,g){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:_,groupOrder:p,renderOrder:f.renderOrder,z:v,group:g},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=_,d.groupOrder=p,d.renderOrder=f.renderOrder,d.z=v,d.group=g),e++,d}function s(f,h,_,p,v,g){const d=o(f,h,_,p,v,g);_.transmission>0?n.push(d):_.transparent===!0?r.push(d):t.push(d)}function u(f,h,_,p,v,g){const d=o(f,h,_,p,v,g);_.transmission>0?n.unshift(d):_.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Qx),n.length>1&&n.sort(h||Mc),r.length>1&&r.sort(h||Mc)}function l(){for(let f=e,h=i.length;f<h;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:u,finish:l,sort:c}}function ey(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Sc,i.set(n,[o])):r>=a.length?(o=new Sc,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ve};break;case"SpotLight":t={position:new V,direction:new V,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function ny(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iy=0;function ry(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ay(i,e){const t=new ty,n=ny(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)r.probe.push(new V);const a=new V,o=new ot,s=new ot;function u(l,f){let h=0,_=0,p=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let v=0,g=0,d=0,x=0,m=0,y=0,M=0,b=0,w=0,L=0;l.sort(ry);const E=f===!0?Math.PI:1;for(let O=0,T=l.length;O<T;O++){const S=l[O],R=S.color,C=S.intensity,k=S.distance,F=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=R.r*C*E,_+=R.g*C*E,p+=R.b*C*E;else if(S.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(S.sh.coefficients[U],C);else if(S.isDirectionalLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity*E),S.castShadow){const z=S.shadow,H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.directionalShadow[v]=H,r.directionalShadowMap[v]=F,r.directionalShadowMatrix[v]=S.shadow.matrix,y++}r.directional[v]=U,v++}else if(S.isSpotLight){const U=t.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(R).multiplyScalar(C*E),U.distance=k,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,r.spot[d]=U;const z=S.shadow;if(S.map&&(r.spotLightMap[w]=S.map,w++,z.updateMatrices(S),S.castShadow&&L++),r.spotLightMatrix[d]=z.matrix,S.castShadow){const H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.spotShadow[d]=H,r.spotShadowMap[d]=F,b++}d++}else if(S.isRectAreaLight){const U=t.get(S);U.color.copy(R).multiplyScalar(C),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),r.rectArea[x]=U,x++}else if(S.isPointLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity*E),U.distance=S.distance,U.decay=S.decay,S.castShadow){const z=S.shadow,H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=F,r.pointShadowMatrix[g]=S.shadow.matrix,M++}r.point[g]=U,g++}else if(S.isHemisphereLight){const U=t.get(S);U.skyColor.copy(S.color).multiplyScalar(C*E),U.groundColor.copy(S.groundColor).multiplyScalar(C*E),r.hemi[m]=U,m++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=_,r.ambient[2]=p;const A=r.hash;(A.directionalLength!==v||A.pointLength!==g||A.spotLength!==d||A.rectAreaLength!==x||A.hemiLength!==m||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==b||A.numSpotMaps!==w)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=x,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=b+w-L,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=L,A.directionalLength=v,A.pointLength=g,A.spotLength=d,A.rectAreaLength=x,A.hemiLength=m,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=b,A.numSpotMaps=w,r.version=iy++)}function c(l,f){let h=0,_=0,p=0,v=0,g=0;const d=f.matrixWorldInverse;for(let x=0,m=l.length;x<m;x++){const y=l[x];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),h++}else if(y.isSpotLight){const M=r.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),p++}else if(y.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),s.identity(),o.copy(y.matrixWorld),o.premultiply(d),s.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(y.isPointLight){const M=r.point[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),_++}else if(y.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),g++}}}return{setup:u,setupView:c,state:r}}function Ec(i,e){const t=new ay(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function o(f){n.push(f)}function s(f){r.push(f)}function u(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:s}}function sy(i,e){let t=new WeakMap;function n(a,o=0){const s=t.get(a);let u;return s===void 0?(u=new Ec(i,e),t.set(a,[u])):o>=s.length?(u=new Ec(i,e),s.push(u)):u=s[o],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class oy extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fy(i,e,t){let n=new Mo;const r=new Ue,a=new Ue,o=new Ke,s=new oy({depthPacking:pg}),u=new ly,c={},l=t.maxTextureSize,f={[An]:bt,[bt]:An,[dn]:dn},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:cy,fragmentShader:uy}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const p=new Cn;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let d=this.type;this.render=function(M,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const L=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),O=i.state;O.setBlending(wn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const T=d!==hn&&this.type===hn,S=d===hn&&this.type!==hn;for(let R=0,C=M.length;R<C;R++){const k=M[R],F=k.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const U=F.getFrameExtents();if(r.multiply(U),a.copy(F.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(a.x=Math.floor(l/U.x),r.x=a.x*U.x,F.mapSize.x=a.x),r.y>l&&(a.y=Math.floor(l/U.y),r.y=a.y*U.y,F.mapSize.y=a.y)),F.map===null||T===!0||S===!0){const H=this.type!==hn?{minFilter:St,magFilter:St}:{};F.map!==null&&F.map.dispose(),F.map=new jn(r.x,r.y,H),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const z=F.getViewportCount();for(let H=0;H<z;H++){const ne=F.getViewport(H);o.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),O.viewport(o),F.updateMatrices(k,H),n=F.getFrustum(),y(b,w,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===hn&&x(F,w),F.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(L,E,A)};function x(M,b){const w=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,_.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new jn(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(b,null,w,h,v,null),_.uniforms.shadow_pass.value=M.mapPass.texture,_.uniforms.resolution.value=M.mapSize,_.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(b,null,w,_,v,null)}function m(M,b,w,L){let E=null;const A=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)E=A;else if(E=w.isPointLight===!0?u:s,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=E.uuid,T=b.uuid;let S=c[O];S===void 0&&(S={},c[O]=S);let R=S[T];R===void 0&&(R=E.clone(),S[T]=R),E=R}if(E.visible=b.visible,E.wireframe=b.wireframe,L===hn?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:f[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=i.properties.get(E);O.light=w}return E}function y(M,b,w,L,E){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===hn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const T=e.update(M),S=M.material;if(Array.isArray(S)){const R=T.groups;for(let C=0,k=R.length;C<k;C++){const F=R[C],U=S[F.materialIndex];if(U&&U.visible){const z=m(M,U,L,E);i.renderBufferDirect(w,null,T,z,M,F)}}}else if(S.visible){const R=m(M,S,L,E);i.renderBufferDirect(w,null,T,R,M,null)}}const O=M.children;for(let T=0,S=O.length;T<S;T++)y(O[T],b,w,L,E)}}function hy(i,e,t){const n=t.isWebGL2;function r(){let G=!1;const J=new Ke;let ae=null;const he=new Ke(0,0,0,0);return{setMask:function(ve){ae!==ve&&!G&&(i.colorMask(ve,ve,ve,ve),ae=ve)},setLocked:function(ve){G=ve},setClear:function(ve,$e,je,pt,vn){vn===!0&&(ve*=pt,$e*=pt,je*=pt),J.set(ve,$e,je,pt),he.equals(J)===!1&&(i.clearColor(ve,$e,je,pt),he.copy(J))},reset:function(){G=!1,ae=null,he.set(-1,0,0,0)}}}function a(){let G=!1,J=null,ae=null,he=null;return{setTest:function(ve){ve?N(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ve){J!==ve&&!G&&(i.depthMask(ve),J=ve)},setFunc:function(ve){if(ae!==ve){switch(ve){case Fm:i.depthFunc(i.NEVER);break;case Bm:i.depthFunc(i.ALWAYS);break;case km:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case zm:i.depthFunc(i.EQUAL);break;case Gm:i.depthFunc(i.GEQUAL);break;case Hm:i.depthFunc(i.GREATER);break;case Vm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ve}},setLocked:function(ve){G=ve},setClear:function(ve){he!==ve&&(i.clearDepth(ve),he=ve)},reset:function(){G=!1,J=null,ae=null,he=null}}}function o(){let G=!1,J=null,ae=null,he=null,ve=null,$e=null,je=null,pt=null,vn=null;return{setTest:function(nt){G||(nt?N(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(nt){J!==nt&&!G&&(i.stencilMask(nt),J=nt)},setFunc:function(nt,It,Yt){(ae!==nt||he!==It||ve!==Yt)&&(i.stencilFunc(nt,It,Yt),ae=nt,he=It,ve=Yt)},setOp:function(nt,It,Yt){($e!==nt||je!==It||pt!==Yt)&&(i.stencilOp(nt,It,Yt),$e=nt,je=It,pt=Yt)},setLocked:function(nt){G=nt},setClear:function(nt){vn!==nt&&(i.clearStencil(nt),vn=nt)},reset:function(){G=!1,J=null,ae=null,he=null,ve=null,$e=null,je=null,pt=null,vn=null}}}const s=new r,u=new a,c=new o,l=new WeakMap,f=new WeakMap;let h={},_={},p=new WeakMap,v=[],g=null,d=!1,x=null,m=null,y=null,M=null,b=null,w=null,L=null,E=!1,A=null,O=null,T=null,S=null,R=null;const C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=F>=2);let z=null,H={};const ne=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),W=new Ke().fromArray(ne),q=new Ke().fromArray(K);function ie(G,J,ae,he){const ve=new Uint8Array(4),$e=i.createTexture();i.bindTexture(G,$e),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ae;je++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(J,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(J+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return $e}const Z={};Z[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Z[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),u.setClear(1),c.setClear(0),N(i.DEPTH_TEST),u.setFunc(Zs),Ze(!1),it(ll),N(i.CULL_FACE),Ae(wn);function N(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function xe(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function ye(G,J){return _[G]!==J?(i.bindFramebuffer(G,J),_[G]=J,n&&(G===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=J),G===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=J)),!0):!1}function oe(G,J){let ae=v,he=!1;if(G)if(ae=p.get(J),ae===void 0&&(ae=[],p.set(J,ae)),G.isWebGLMultipleRenderTargets){const ve=G.texture;if(ae.length!==ve.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,je=ve.length;$e<je;$e++)ae[$e]=i.COLOR_ATTACHMENT0+$e;ae.length=ve.length,he=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,he=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function pe(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const Ie={[bi]:i.FUNC_ADD,[Tm]:i.FUNC_SUBTRACT,[Am]:i.FUNC_REVERSE_SUBTRACT};if(n)Ie[hl]=i.MIN,Ie[dl]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(Ie[hl]=G.MIN_EXT,Ie[dl]=G.MAX_EXT)}const me={[Rm]:i.ZERO,[Cm]:i.ONE,[Pm]:i.SRC_COLOR,[mu]:i.SRC_ALPHA,[Om]:i.SRC_ALPHA_SATURATE,[Im]:i.DST_COLOR,[Dm]:i.DST_ALPHA,[Lm]:i.ONE_MINUS_SRC_COLOR,[gu]:i.ONE_MINUS_SRC_ALPHA,[Nm]:i.ONE_MINUS_DST_COLOR,[Um]:i.ONE_MINUS_DST_ALPHA};function Ae(G,J,ae,he,ve,$e,je,pt){if(G===wn){d===!0&&(xe(i.BLEND),d=!1);return}if(d===!1&&(N(i.BLEND),d=!0),G!==wm){if(G!==x||pt!==E){if((m!==bi||b!==bi)&&(i.blendEquation(i.FUNC_ADD),m=bi,b=bi),pt)switch(G){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,M=null,w=null,L=null,x=G,E=pt}return}ve=ve||J,$e=$e||ae,je=je||he,(J!==m||ve!==b)&&(i.blendEquationSeparate(Ie[J],Ie[ve]),m=J,b=ve),(ae!==y||he!==M||$e!==w||je!==L)&&(i.blendFuncSeparate(me[ae],me[he],me[$e],me[je]),y=ae,M=he,w=$e,L=je),x=G,E=!1}function Je(G,J){G.side===dn?xe(i.CULL_FACE):N(i.CULL_FACE);let ae=G.side===bt;J&&(ae=!ae),Ze(ae),G.blending===Ti&&G.transparent===!1?Ae(wn):Ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),s.setMask(G.colorWrite);const he=G.stencilWrite;c.setTest(he),he&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(G){A!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),A=G)}function it(G){G!==Sm?(N(i.CULL_FACE),G!==O&&(G===ll?i.cullFace(i.BACK):G===Em?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),O=G}function et(G){G!==T&&(k&&i.lineWidth(G),T=G)}function ke(G,J,ae){G?(N(i.POLYGON_OFFSET_FILL),(S!==J||R!==ae)&&(i.polygonOffset(J,ae),S=J,R=ae)):xe(i.POLYGON_OFFSET_FILL)}function Xe(G){G?N(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function dt(G){G===void 0&&(G=i.TEXTURE0+C-1),z!==G&&(i.activeTexture(G),z=G)}function I(G,J,ae){ae===void 0&&(z===null?ae=i.TEXTURE0+C-1:ae=z);let he=H[ae];he===void 0&&(he={type:void 0,texture:void 0},H[ae]=he),(he.type!==G||he.texture!==J)&&(z!==ae&&(i.activeTexture(ae),z=ae),i.bindTexture(G,J||Z[G]),he.type=G,he.texture=J)}function P(){const G=H[z];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(G){W.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),W.copy(G))}function ge(G){q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function Ee(G,J){let ae=f.get(J);ae===void 0&&(ae=new WeakMap,f.set(J,ae));let he=ae.get(G);he===void 0&&(he=i.getUniformBlockIndex(J,G.name),ae.set(G,he))}function Pe(G,J){const he=f.get(J).get(G);l.get(J)!==he&&(i.uniformBlockBinding(J,he,G.__bindingPointIndex),l.set(J,he))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},z=null,H={},_={},p=new WeakMap,v=[],g=null,d=!1,x=null,m=null,y=null,M=null,b=null,w=null,L=null,E=!1,A=null,O=null,T=null,S=null,R=null,W.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),u.reset(),c.reset()}return{buffers:{color:s,depth:u,stencil:c},enable:N,disable:xe,bindFramebuffer:ye,drawBuffers:oe,useProgram:pe,setBlending:Ae,setMaterial:Je,setFlipSided:Ze,setCullFace:it,setLineWidth:et,setPolygonOffset:ke,setScissorTest:Xe,activeTexture:dt,bindTexture:I,unbindTexture:P,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:de,texImage3D:_e,updateUBOMapping:Ee,uniformBlockBinding:Pe,texStorage2D:X,texStorage3D:ue,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:B,compressedTexSubImage3D:te,scissor:fe,viewport:ge,reset:tt}}function dy(i,e,t,n,r,a,o){const s=r.isWebGL2,u=r.maxTextures,c=r.maxCubemapSize,l=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let v;const g=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,P){return d?new OffscreenCanvas(I,P):ta("canvas")}function m(I,P,Y,re){let se=1;if((I.width>re||I.height>re)&&(se=re/Math.max(I.width,I.height)),se<1||P===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const ce=P?vg:Math.floor,B=ce(se*I.width),te=ce(se*I.height);v===void 0&&(v=x(B,te));const X=Y?x(B,te):v;return X.width=B,X.height=te,X.getContext("2d").drawImage(I,0,0,B,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+B+"x"+te+")."),X}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function y(I){return zl(I.width)&&zl(I.height)}function M(I){return s?!1:I.wrapS!==jt||I.wrapT!==jt||I.minFilter!==St&&I.minFilter!==Ft}function b(I,P){return I.generateMipmaps&&P&&I.minFilter!==St&&I.minFilter!==Ft}function w(I){i.generateMipmap(I)}function L(I,P,Y,re,se=!1){if(s===!1)return P;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=P;return P===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8)),P===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8)),P===i.RGBA&&(Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=re===Te&&se===!1?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)),(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function E(I,P,Y){return b(I,Y)===!0||I.isFramebufferTexture&&I.minFilter!==St&&I.minFilter!==Ft?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function A(I){return I===St||I===pl||I===as?i.NEAREST:i.LINEAR}function O(I){const P=I.target;P.removeEventListener("dispose",O),S(P),P.isVideoTexture&&p.delete(P)}function T(I){const P=I.target;P.removeEventListener("dispose",T),C(P)}function S(I){const P=n.get(I);if(P.__webglInit===void 0)return;const Y=I.source,re=g.get(Y);if(re){const se=re[P.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(I),Object.keys(re).length===0&&g.delete(Y)}n.remove(I)}function R(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const Y=I.source,re=g.get(Y);delete re[P.__cacheKey],o.memory.textures--}function C(I){const P=I.texture,Y=n.get(I),re=n.get(P);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)i.deleteFramebuffer(Y.__webglFramebuffer[se]),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[se]);else{if(i.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let se=0;se<Y.__webglColorRenderbuffer.length;se++)Y.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[se]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let se=0,ce=P.length;se<ce;se++){const B=n.get(P[se]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(P[se])}n.remove(P),n.remove(I)}let k=0;function F(){k=0}function U(){const I=k;return I>=u&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+u),k+=1,I}function z(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function H(I,P){const Y=n.get(I);if(I.isVideoTexture&&Xe(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(Y,I,P);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+P)}function ne(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){xe(Y,I,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+P)}function K(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){xe(Y,I,P);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+P)}function W(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ye(Y,I,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+P)}const q={[eo]:i.REPEAT,[jt]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},ie={[St]:i.NEAREST,[pl]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Zm]:i.LINEAR_MIPMAP_NEAREST,[er]:i.LINEAR_MIPMAP_LINEAR};function Z(I,P,Y){if(Y?(i.texParameteri(I,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ie[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ie[P.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==jt||P.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,A(P.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,A(P.minFilter)),P.minFilter!==St&&P.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===St||P.minFilter!==as&&P.minFilter!==er||P.type===zn&&e.has("OES_texture_float_linear")===!1||s===!1&&P.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function N(I,P){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",O));const re=P.source;let se=g.get(re);se===void 0&&(se={},g.set(re,se));const ce=z(P);if(ce!==I.__cacheKey){se[ce]===void 0&&(se[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[ce].usedTimes++;const B=se[I.__cacheKey];B!==void 0&&(se[I.__cacheKey].usedTimes--,B.usedTimes===0&&R(P)),I.__cacheKey=ce,I.__webglTexture=se[ce].texture}return Y}function xe(I,P,Y){let re=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(re=i.TEXTURE_3D);const se=N(I,P),ce=P.source;t.bindTexture(re,I.__webglTexture,i.TEXTURE0+Y);const B=n.get(ce);if(ce.version!==B.__version||se===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const te=M(P)&&y(P.image)===!1;let X=m(P.image,te,!1,l);X=dt(P,X);const ue=y(X)||s,de=a.convert(P.format,P.colorSpace);let _e=a.convert(P.type),fe=L(P.internalFormat,de,_e,P.colorSpace);Z(re,P,ue);let ge;const Ee=P.mipmaps,Pe=s&&P.isVideoTexture!==!0,tt=B.__version===void 0||se===!0,G=E(P,X,ue);if(P.isDepthTexture)fe=i.DEPTH_COMPONENT,s?P.type===zn?fe=i.DEPTH_COMPONENT32F:P.type===kn?fe=i.DEPTH_COMPONENT24:P.type===Ai?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:P.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Hn&&fe===i.DEPTH_COMPONENT&&P.type!==xu&&P.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=kn,_e=a.convert(P.type)),P.format===Di&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,P.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ai,_e=a.convert(P.type))),tt&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,fe,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,de,_e,null));else if(P.isDataTexture)if(Ee.length>0&&ue){Pe&&tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let J=0,ae=Ee.length;J<ae;J++)ge=Ee[J],Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,_e,ge.data):t.texImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,de,_e,ge.data);P.generateMipmaps=!1}else Pe?(tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,X.width,X.height,de,_e,X.data)):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,de,_e,X.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Pe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,fe,Ee[0].width,Ee[0].height,X.depth);for(let J=0,ae=Ee.length;J<ae;J++)ge=Ee[J],P.format!==Xt?de!==null?Pe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,X.depth,de,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,fe,ge.width,ge.height,X.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,X.depth,de,_e,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,fe,ge.width,ge.height,X.depth,0,de,_e,ge.data)}else{Pe&&tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let J=0,ae=Ee.length;J<ae;J++)ge=Ee[J],P.format!==Xt?de!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,_e,ge.data):t.texImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,de,_e,ge.data)}else if(P.isDataArrayTexture)Pe?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,fe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,de,_e,X.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,X.width,X.height,X.depth,0,de,_e,X.data);else if(P.isData3DTexture)Pe?(tt&&t.texStorage3D(i.TEXTURE_3D,G,fe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,de,_e,X.data)):t.texImage3D(i.TEXTURE_3D,0,fe,X.width,X.height,X.depth,0,de,_e,X.data);else if(P.isFramebufferTexture){if(tt)if(Pe)t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height);else{let J=X.width,ae=X.height;for(let he=0;he<G;he++)t.texImage2D(i.TEXTURE_2D,he,fe,J,ae,0,de,_e,null),J>>=1,ae>>=1}}else if(Ee.length>0&&ue){Pe&&tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let J=0,ae=Ee.length;J<ae;J++)ge=Ee[J],Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,de,_e,ge):t.texImage2D(i.TEXTURE_2D,J,fe,de,_e,ge);P.generateMipmaps=!1}else Pe?(tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,_e,X)):t.texImage2D(i.TEXTURE_2D,0,fe,de,_e,X);b(P,ue)&&w(re),B.__version=ce.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ye(I,P,Y){if(P.image.length!==6)return;const re=N(I,P),se=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const ce=n.get(se);if(se.version!==ce.__version||re===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const B=P.isCompressedTexture||P.image[0].isCompressedTexture,te=P.image[0]&&P.image[0].isDataTexture,X=[];for(let J=0;J<6;J++)!B&&!te?X[J]=m(P.image[J],!1,!0,c):X[J]=te?P.image[J].image:P.image[J],X[J]=dt(P,X[J]);const ue=X[0],de=y(ue)||s,_e=a.convert(P.format,P.colorSpace),fe=a.convert(P.type),ge=L(P.internalFormat,_e,fe,P.colorSpace),Ee=s&&P.isVideoTexture!==!0,Pe=ce.__version===void 0||re===!0;let tt=E(P,ue,de);Z(i.TEXTURE_CUBE_MAP,P,de);let G;if(B){Ee&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,ge,ue.width,ue.height);for(let J=0;J<6;J++){G=X[J].mipmaps;for(let ae=0;ae<G.length;ae++){const he=G[ae];P.format!==Xt?_e!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,0,0,he.width,he.height,_e,fe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,ge,he.width,he.height,0,_e,fe,he.data)}}}else{G=P.mipmaps,Ee&&Pe&&(G.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,ge,X[0].width,X[0].height));for(let J=0;J<6;J++)if(te){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,X[J].width,X[J].height,_e,fe,X[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ge,X[J].width,X[J].height,0,_e,fe,X[J].data);for(let ae=0;ae<G.length;ae++){const ve=G[ae].image[J].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,0,0,ve.width,ve.height,_e,fe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,ge,ve.width,ve.height,0,_e,fe,ve.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,fe,X[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ge,_e,fe,X[J]);for(let ae=0;ae<G.length;ae++){const he=G[ae];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,0,0,_e,fe,he.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,ge,_e,fe,he.image[J])}}}b(P,de)&&w(i.TEXTURE_CUBE_MAP),ce.__version=se.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function oe(I,P,Y,re,se){const ce=a.convert(Y.format,Y.colorSpace),B=a.convert(Y.type),te=L(Y.internalFormat,ce,B,Y.colorSpace);n.get(P).__hasExternalTextures||(se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,0,te,P.width,P.height,P.depth,0,ce,B,null):t.texImage2D(se,0,te,P.width,P.height,0,ce,B,null)),t.bindFramebuffer(i.FRAMEBUFFER,I),ke(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,se,n.get(Y).__webglTexture,0,et(P)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,se,n.get(Y).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(I,P,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer&&!P.stencilBuffer){let re=i.DEPTH_COMPONENT16;if(Y||ke(P)){const se=P.depthTexture;se&&se.isDepthTexture&&(se.type===zn?re=i.DEPTH_COMPONENT32F:se.type===kn&&(re=i.DEPTH_COMPONENT24));const ce=et(P);ke(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,re,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,re,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(P.depthBuffer&&P.stencilBuffer){const re=et(P);Y&&ke(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,P.width,P.height):ke(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const re=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let se=0;se<re.length;se++){const ce=re[se],B=a.convert(ce.format,ce.colorSpace),te=a.convert(ce.type),X=L(ce.internalFormat,B,te,ce.colorSpace),ue=et(P);Y&&ke(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,X,P.width,P.height):ke(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,X,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,X,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),H(P.depthTexture,0);const re=n.get(P.depthTexture).__webglTexture,se=et(P);if(P.depthTexture.format===Hn)ke(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(P.depthTexture.format===Di)ke(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function me(I){const P=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ie(P.__webglFramebuffer,I)}else if(Y){P.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[re]),P.__webglDepthbuffer[re]=i.createRenderbuffer(),pe(P.__webglDepthbuffer[re],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),pe(P.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,P,Y){const re=n.get(I);P!==void 0&&oe(re.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),Y!==void 0&&me(I)}function Je(I){const P=I.texture,Y=n.get(I),re=n.get(P);I.addEventListener("dispose",T),I.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=P.version,o.memory.textures++);const se=I.isWebGLCubeRenderTarget===!0,ce=I.isWebGLMultipleRenderTargets===!0,B=y(I)||s;if(se){Y.__webglFramebuffer=[];for(let te=0;te<6;te++)Y.__webglFramebuffer[te]=i.createFramebuffer()}else{if(Y.__webglFramebuffer=i.createFramebuffer(),ce)if(r.drawBuffers){const te=I.texture;for(let X=0,ue=te.length;X<ue;X++){const de=n.get(te[X]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&I.samples>0&&ke(I)===!1){const te=ce?P:[P];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let X=0;X<te.length;X++){const ue=te[X];Y.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[X]);const de=a.convert(ue.format,ue.colorSpace),_e=a.convert(ue.type),fe=L(ue.internalFormat,de,_e,ue.colorSpace,I.isXRRenderTarget===!0),ge=et(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,fe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,Y.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Z(i.TEXTURE_CUBE_MAP,P,B);for(let te=0;te<6;te++)oe(Y.__webglFramebuffer[te],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te);b(P,B)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const te=I.texture;for(let X=0,ue=te.length;X<ue;X++){const de=te[X],_e=n.get(de);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Z(i.TEXTURE_2D,de,B),oe(Y.__webglFramebuffer,I,de,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D),b(de,B)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(s?te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,re.__webglTexture),Z(te,P,B),oe(Y.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,te),b(P,B)&&w(te),t.unbindTexture()}I.depthBuffer&&me(I)}function Ze(I){const P=y(I)||s,Y=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let re=0,se=Y.length;re<se;re++){const ce=Y[re];if(b(ce,P)){const B=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=n.get(ce).__webglTexture;t.bindTexture(B,te),w(B),t.unbindTexture()}}}function it(I){if(s&&I.samples>0&&ke(I)===!1){const P=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Y=I.width,re=I.height;let se=i.COLOR_BUFFER_BIT;const ce=[],B=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(I),X=I.isWebGLMultipleRenderTargets===!0;if(X)for(let ue=0;ue<P.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ue=0;ue<P.length;ue++){ce.push(i.COLOR_ATTACHMENT0+ue),I.depthBuffer&&ce.push(B);const de=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(de===!1&&(I.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),X&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]),de===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[B]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[B])),X){const _e=n.get(P[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,Y,re,0,0,Y,re,se,i.NEAREST),_&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ue=0;ue<P.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);const de=n.get(P[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function et(I){return Math.min(f,I.samples)}function ke(I){const P=n.get(I);return s&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Xe(I){const P=o.render.frame;p.get(I)!==P&&(p.set(I,P),I.update())}function dt(I,P){const Y=I.colorSpace,re=I.format,se=I.type;return I.isCompressedTexture===!0||I.format===no||Y!==nn&&Y!==Wn&&(Y===Te?s===!1?e.has("EXT_sRGB")===!0&&re===Xt?(I.format=no,I.minFilter=Ft,I.generateMipmaps=!1):P=Tu.sRGBToLinear(P):(re!==Xt||se!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),P}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Ae,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ke}function py(i,e,t){const n=t.isWebGL2;function r(a,o=Wn){let s;if(a===$n)return i.UNSIGNED_BYTE;if(a===tg)return i.UNSIGNED_SHORT_4_4_4_4;if(a===ng)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Jm)return i.BYTE;if(a===Qm)return i.SHORT;if(a===xu)return i.UNSIGNED_SHORT;if(a===eg)return i.INT;if(a===kn)return i.UNSIGNED_INT;if(a===zn)return i.FLOAT;if(a===tr)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===ig)return i.ALPHA;if(a===Xt)return i.RGBA;if(a===rg)return i.LUMINANCE;if(a===ag)return i.LUMINANCE_ALPHA;if(a===Hn)return i.DEPTH_COMPONENT;if(a===Di)return i.DEPTH_STENCIL;if(a===no)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===sg)return i.RED;if(a===og)return i.RED_INTEGER;if(a===lg)return i.RG;if(a===cg)return i.RG_INTEGER;if(a===ug)return i.RGBA_INTEGER;if(a===ss||a===os||a===ls||a===cs)if(o===Te)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ml||a===gl||a===_l||a===vl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===_l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===vl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===fg)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===xl||a===yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===xl)return o===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===yl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ml||a===Sl||a===El||a===bl||a===wl||a===Tl||a===Al||a===Rl||a===Cl||a===Pl||a===Ll||a===Dl||a===Ul||a===Il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ml)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Sl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===El)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===bl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===wl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Tl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Al)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Rl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Cl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ll)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dl)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ul)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Il)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===us)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===us)return o===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===hg||a===Nl||a===Ol||a===Fl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===us)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ai?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class my extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vr extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gy={type:"move"};class Is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const l=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=l.position.distanceTo(f.position),_=.02,p=.005;c.inputState.pinching&&h>_+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=_-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return s!==null&&(s.visible=r!==null),u!==null&&(u.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _y extends _n{constructor(e,t,n,r,a,o,s,u,c,l){if(l=l!==void 0?l:Hn,l!==Hn&&l!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Hn&&(n=kn),n===void 0&&l===Di&&(n=Ai),super(null,r,a,o,s,u,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:St,this.minFilter=u!==void 0?u:St,this.flipY=!1,this.generateMipmaps=!1}}class vy extends ti{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",u=1,c=null,l=null,f=null,h=null,_=null,p=null;const v=t.getContextAttributes();let g=null,d=null;const x=[],m=[],y=new Set,M=new Map,b=new Dt;b.layers.enable(1),b.viewport=new Ke;const w=new Dt;w.layers.enable(2),w.viewport=new Ke;const L=[b,w],E=new my;E.layers.enable(1),E.layers.enable(2);let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=x[W];return q===void 0&&(q=new Is,x[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=x[W];return q===void 0&&(q=new Is,x[W]=q),q.getGripSpace()},this.getHand=function(W){let q=x[W];return q===void 0&&(q=new Is,x[W]=q),q.getHandSpace()};function T(W){const q=m.indexOf(W.inputSource);if(q===-1)return;const ie=x[q];ie!==void 0&&(ie.update(W.inputSource,W.frame,c||o),ie.dispatchEvent({type:W.type,data:W.inputSource}))}function S(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",S),r.removeEventListener("inputsourceschange",R);for(let W=0;W<x.length;W++){const q=m[W];q!==null&&(m[W]=null,x[W].disconnect(q))}A=null,O=null,e.setRenderTarget(g),_=null,h=null,f=null,r=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",S),r.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:_}),d=new jn(_.framebufferWidth,_.framebufferHeight,{format:Xt,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let q=null,ie=null,Z=null;v.depth&&(Z=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?Di:Hn,ie=v.stencil?Ai:kn);const N={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:a};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(N),r.updateRenderState({layers:[h]}),d=new jn(h.textureWidth,h.textureHeight,{format:Xt,type:$n,depthTexture:new _y(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const xe=e.properties.get(d);xe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await r.requestReferenceSpace(s),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(W){for(let q=0;q<W.removed.length;q++){const ie=W.removed[q],Z=m.indexOf(ie);Z>=0&&(m[Z]=null,x[Z].disconnect(ie))}for(let q=0;q<W.added.length;q++){const ie=W.added[q];let Z=m.indexOf(ie);if(Z===-1){for(let xe=0;xe<x.length;xe++)if(xe>=m.length){m.push(ie),Z=xe;break}else if(m[xe]===null){m[xe]=ie,Z=xe;break}if(Z===-1)break}const N=x[Z];N&&N.connect(ie)}}const C=new V,k=new V;function F(W,q,ie){C.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(ie.matrixWorld);const Z=C.distanceTo(k),N=q.projectionMatrix.elements,xe=ie.projectionMatrix.elements,ye=N[14]/(N[10]-1),oe=N[14]/(N[10]+1),pe=(N[9]+1)/N[5],Ie=(N[9]-1)/N[5],me=(N[8]-1)/N[0],Ae=(xe[8]+1)/xe[0],Je=ye*me,Ze=ye*Ae,it=Z/(-me+Ae),et=it*-me;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(et),W.translateZ(it),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const ke=ye+it,Xe=oe+it,dt=Je-et,I=Ze+(Z-et),P=pe*oe/Xe*ke,Y=Ie*oe/Xe*ke;W.projectionMatrix.makePerspective(dt,I,P,Y,ke,Xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function U(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;E.near=w.near=b.near=W.near,E.far=w.far=b.far=W.far,(A!==E.near||O!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,O=E.far);const q=W.parent,ie=E.cameras;U(E,q);for(let Z=0;Z<ie.length;Z++)U(ie[Z],q);ie.length===2?F(E,b,w):E.projectionMatrix.copy(b.projectionMatrix),z(W,E,q)};function z(W,q,ie){ie===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const Z=W.children;for(let N=0,xe=Z.length;N<xe;N++)Z[N].updateMatrixWorld(!0);W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=io*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&_===null))return u},this.setFoveation=function(W){u=W,h!==null&&(h.fixedFoveation=W),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=W)},this.getPlanes=function(){return y};let H=null;function ne(W,q){if(l=q.getViewerPose(c||o),p=q,l!==null){const ie=l.views;_!==null&&(e.setRenderTargetFramebuffer(d,_.framebuffer),e.setRenderTarget(d));let Z=!1;ie.length!==E.cameras.length&&(E.cameras.length=0,Z=!0);for(let N=0;N<ie.length;N++){const xe=ie[N];let ye=null;if(_!==null)ye=_.getViewport(xe);else{const pe=f.getViewSubImage(h,xe);ye=pe.viewport,N===0&&(e.setRenderTargetTextures(d,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(d))}let oe=L[N];oe===void 0&&(oe=new Dt,oe.layers.enable(N),oe.viewport=new Ke,L[N]=oe),oe.matrix.fromArray(xe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(xe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ye.x,ye.y,ye.width,ye.height),N===0&&(E.matrix.copy(oe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Z===!0&&E.cameras.push(oe)}}for(let ie=0;ie<x.length;ie++){const Z=m[ie],N=x[ie];Z!==null&&N!==void 0&&N.update(Z,q,c||o)}if(H&&H(W,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ie=null;for(const Z of y)q.detectedPlanes.has(Z)||(ie===null&&(ie=[]),ie.push(Z));if(ie!==null)for(const Z of ie)y.delete(Z),M.delete(Z),n.dispatchEvent({type:"planeremoved",data:Z});for(const Z of q.detectedPlanes)if(!y.has(Z))y.add(Z),M.set(Z,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Z});else{const N=M.get(Z);Z.lastChangedTime>N&&(M.set(Z,Z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Z}))}}p=null}const K=new Ou;K.setAnimationLoop(ne),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}}function xy(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Uu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,m,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(g,d):d.isMeshToonMaterial?(a(g,d),f(g,d)):d.isMeshPhongMaterial?(a(g,d),l(g,d)):d.isMeshStandardMaterial?(a(g,d),h(g,d),d.isMeshPhysicalMaterial&&_(g,d,y)):d.isMeshMatcapMaterial?(a(g,d),p(g,d)):d.isMeshDepthMaterial?a(g,d):d.isMeshDistanceMaterial?(a(g,d),v(g,d)):d.isMeshNormalMaterial?a(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&s(g,d)):d.isPointsMaterial?u(g,d,x,m):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===bt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===bt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const m=i.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*m,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function s(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function u(g,d,x,m){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=m*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function _(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bt&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function yy(i,e,t,n){let r={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(x,m){const y=m.program;n.uniformBlockBinding(x,y)}function c(x,m){let y=r[x.id];y===void 0&&(p(x),y=l(x),r[x.id]=y,x.addEventListener("dispose",g));const M=m.program;n.updateUBOMapping(x,M);const b=e.render.frame;a[x.id]!==b&&(h(x),a[x.id]=b)}function l(x){const m=f();x.__bindingPointIndex=m;const y=i.createBuffer(),M=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,y),y}function f(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const m=r[x.id],y=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let b=0,w=y.length;b<w;b++){const L=y[b];if(_(L,b,M)===!0){const E=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let T=0;T<A.length;T++){const S=A[T],R=v(S);typeof S=="number"?(L.__data[0]=S,i.bufferSubData(i.UNIFORM_BUFFER,E+O,L.__data)):S.isMatrix3?(L.__data[0]=S.elements[0],L.__data[1]=S.elements[1],L.__data[2]=S.elements[2],L.__data[3]=S.elements[0],L.__data[4]=S.elements[3],L.__data[5]=S.elements[4],L.__data[6]=S.elements[5],L.__data[7]=S.elements[0],L.__data[8]=S.elements[6],L.__data[9]=S.elements[7],L.__data[10]=S.elements[8],L.__data[11]=S.elements[0]):(S.toArray(L.__data,O),O+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,L.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(x,m,y){const M=x.value;if(y[m]===void 0){if(typeof M=="number")y[m]=M;else{const b=Array.isArray(M)?M:[M],w=[];for(let L=0;L<b.length;L++)w.push(b[L].clone());y[m]=w}return!0}else if(typeof M=="number"){if(y[m]!==M)return y[m]=M,!0}else{const b=Array.isArray(y[m])?y[m]:[y[m]],w=Array.isArray(M)?M:[M];for(let L=0;L<b.length;L++){const E=b[L];if(E.equals(w[L])===!1)return E.copy(w[L]),!0}}return!1}function p(x){const m=x.uniforms;let y=0;const M=16;let b=0;for(let w=0,L=m.length;w<L;w++){const E=m[w],A={boundary:0,storage:0},O=Array.isArray(E.value)?E.value:[E.value];for(let T=0,S=O.length;T<S;T++){const R=O[T],C=v(R);A.boundary+=C.boundary,A.storage+=C.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,w>0){b=y%M;const T=M-b;b!==0&&T-A.boundary<0&&(y+=M-b,E.__offset=y)}y+=A.storage}return b=y%M,b>0&&(y+=M-b),x.__size=y,x.__cache={},this}function v(x){const m={boundary:0,storage:0};return typeof x=="number"?(m.boundary=4,m.storage=4):x.isVector2?(m.boundary=8,m.storage=8):x.isVector3||x.isColor?(m.boundary=16,m.storage=12):x.isVector4?(m.boundary=16,m.storage=16):x.isMatrix3?(m.boundary=48,m.storage=48):x.isMatrix4?(m.boundary=64,m.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),m}function g(x){const m=x.target;m.removeEventListener("dispose",g);const y=o.indexOf(m.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[m.id]),delete r[m.id],delete a[m.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},a={}}return{bind:u,update:c,dispose:d}}function My(){const i=ta("canvas");return i.style.display="block",i}class Gu{constructor(e={}){const{canvas:t=My(),context:n=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let _=null,p=null;const v=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Te,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const d=this;let x=!1,m=0,y=0,M=null,b=-1,w=null;const L=new Ke,E=new Ke;let A=null,O=t.width,T=t.height,S=1,R=null,C=null;const k=new Ke(0,0,O,T),F=new Ke(0,0,O,T);let U=!1;const z=new Mo;let H=!1,ne=!1,K=null;const W=new ot,q=new V,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return M===null?S:1}let N=n;function xe(D,j){for(let Q=0;Q<D.length;Q++){const $=D[Q],ee=t.getContext($,j);if(ee!==null)return ee}return null}try{const D={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xo}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),N===null){const j=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&j.shift(),N=xe(j,D),N===null)throw xe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ye,oe,pe,Ie,me,Ae,Je,Ze,it,et,ke,Xe,dt,I,P,Y,re,se,ce,B,te,X,ue,de;function _e(){ye=new D0(N),oe=new w0(N,ye,e),ye.init(oe),X=new py(N,ye,oe),pe=new hy(N,ye,oe),Ie=new N0(N),me=new Jx,Ae=new dy(N,ye,pe,me,oe,X,Ie),Je=new A0(d),Ze=new L0(d),it=new jg(N,oe),ue=new E0(N,ye,it,oe),et=new U0(N,it,Ie,ue),ke=new k0(N,et,it,Ie),ce=new B0(N,oe,Ae),Y=new T0(me),Xe=new Zx(d,Je,Ze,ye,oe,ue,Y),dt=new xy(d,me),I=new ey,P=new sy(ye,oe),se=new S0(d,Je,Ze,pe,ke,h,u),re=new fy(d,ke,oe),de=new yy(N,Ie,oe,pe),B=new b0(N,ye,Ie,oe),te=new I0(N,ye,Ie,oe),Ie.programs=Xe.programs,d.capabilities=oe,d.extensions=ye,d.properties=me,d.renderLists=I,d.shadowMap=re,d.state=pe,d.info=Ie}_e();const fe=new vy(d,N);this.xr=fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const D=ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(D){D!==void 0&&(S=D,this.setSize(O,T,!1))},this.getSize=function(D){return D.set(O,T)},this.setSize=function(D,j,Q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,T=j,t.width=Math.floor(D*S),t.height=Math.floor(j*S),Q===!0&&(t.style.width=D+"px",t.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(O*S,T*S).floor()},this.setDrawingBufferSize=function(D,j,Q){O=D,T=j,S=Q,t.width=Math.floor(D*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(L)},this.getViewport=function(D){return D.copy(k)},this.setViewport=function(D,j,Q,$){D.isVector4?k.set(D.x,D.y,D.z,D.w):k.set(D,j,Q,$),pe.viewport(L.copy(k).multiplyScalar(S).floor())},this.getScissor=function(D){return D.copy(F)},this.setScissor=function(D,j,Q,$){D.isVector4?F.set(D.x,D.y,D.z,D.w):F.set(D,j,Q,$),pe.scissor(E.copy(F).multiplyScalar(S).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(D){pe.setScissorTest(U=D)},this.setOpaqueSort=function(D){R=D},this.setTransparentSort=function(D){C=D},this.getClearColor=function(D){return D.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(D=!0,j=!0,Q=!0){let $=0;D&&($|=N.COLOR_BUFFER_BIT),j&&($|=N.DEPTH_BUFFER_BIT),Q&&($|=N.STENCIL_BUFFER_BIT),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),I.dispose(),P.dispose(),me.dispose(),Je.dispose(),Ze.dispose(),ke.dispose(),ue.dispose(),de.dispose(),Xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ve),fe.removeEventListener("sessionend",$e),K&&(K.dispose(),K=null),je.stop()};function ge(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const D=Ie.autoReset,j=re.enabled,Q=re.autoUpdate,$=re.needsUpdate,ee=re.type;_e(),Ie.autoReset=D,re.enabled=j,re.autoUpdate=Q,re.needsUpdate=$,re.type=ee}function Pe(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function tt(D){const j=D.target;j.removeEventListener("dispose",tt),G(j)}function G(D){J(D),me.remove(D)}function J(D){const j=me.get(D).programs;j!==void 0&&(j.forEach(function(Q){Xe.releaseProgram(Q)}),D.isShaderMaterial&&Xe.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,Q,$,ee,Me){j===null&&(j=ie);const Se=ee.isMesh&&ee.matrixWorld.determinant()<0,be=ju(D,j,Q,$,ee);pe.setMaterial($,Se);let Re=Q.index,Le=1;$.wireframe===!0&&(Re=et.getWireframeAttribute(Q),Le=2);const De=Q.drawRange,Ne=Q.attributes.position;let We=De.start*Le,xt=(De.start+De.count)*Le;Me!==null&&(We=Math.max(We,Me.start*Le),xt=Math.min(xt,(Me.start+Me.count)*Le)),Re!==null?(We=Math.max(We,0),xt=Math.min(xt,Re.count)):Ne!=null&&(We=Math.max(We,0),xt=Math.min(xt,Ne.count));const zt=xt-We;if(zt<0||zt===1/0)return;ue.setup(ee,$,be,Q,Re);let Pn,rt=B;if(Re!==null&&(Pn=it.get(Re),rt=te,rt.setIndex(Pn)),ee.isMesh)$.wireframe===!0?(pe.setLineWidth($.wireframeLinewidth*Z()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(ee.isLine){let Oe=$.linewidth;Oe===void 0&&(Oe=1),pe.setLineWidth(Oe*Z()),ee.isLineSegments?rt.setMode(N.LINES):ee.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else ee.isPoints?rt.setMode(N.POINTS):ee.isSprite&&rt.setMode(N.TRIANGLES);if(ee.isInstancedMesh)rt.renderInstances(We,zt,ee.count);else if(Q.isInstancedBufferGeometry){const Oe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ka=Math.min(Q.instanceCount,Oe);rt.renderInstances(We,zt,ka)}else rt.render(We,zt)},this.compile=function(D,j){function Q($,ee,Me){$.transparent===!0&&$.side===dn&&$.forceSinglePass===!1?($.side=bt,$.needsUpdate=!0,gr($,ee,Me),$.side=An,$.needsUpdate=!0,gr($,ee,Me),$.side=dn):gr($,ee,Me)}p=P.get(D),p.init(),g.push(p),D.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(d.useLegacyLights),D.traverse(function($){const ee=$.material;if(ee)if(Array.isArray(ee))for(let Me=0;Me<ee.length;Me++){const Se=ee[Me];Q(Se,D,$)}else Q(ee,D,$)}),g.pop(),p=null};let ae=null;function he(D){ae&&ae(D)}function ve(){je.stop()}function $e(){je.start()}const je=new Ou;je.setAnimationLoop(he),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(D){ae=D,fe.setAnimationLoop(D),D===null?je.stop():je.start()},fe.addEventListener("sessionstart",ve),fe.addEventListener("sessionend",$e),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),D.isScene===!0&&D.onBeforeRender(d,D,j,M),p=P.get(D,g.length),p.init(),g.push(p),W.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z.setFromProjectionMatrix(W),ne=this.localClippingEnabled,H=Y.init(this.clippingPlanes,ne),_=I.get(D,v.length),_.init(),v.push(_),pt(D,j,0,d.sortObjects),_.finish(),d.sortObjects===!0&&_.sort(R,C),H===!0&&Y.beginShadows();const Q=p.state.shadowsArray;if(re.render(Q,D,j),H===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(_,D),p.setupLights(d.useLegacyLights),j.isArrayCamera){const $=j.cameras;for(let ee=0,Me=$.length;ee<Me;ee++){const Se=$[ee];vn(_,D,Se,Se.viewport)}}else vn(_,D,j);M!==null&&(Ae.updateMultisampleRenderTarget(M),Ae.updateRenderTargetMipmap(M)),D.isScene===!0&&D.onAfterRender(d,D,j),ue.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,v.pop(),v.length>0?_=v[v.length-1]:_=null};function pt(D,j,Q,$){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||z.intersectsSprite(D)){$&&q.setFromMatrixPosition(D.matrixWorld).applyMatrix4(W);const Se=ke.update(D),be=D.material;be.visible&&_.push(D,Se,be,Q,q.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||z.intersectsObject(D))){D.isSkinnedMesh&&D.skeleton.frame!==Ie.render.frame&&(D.skeleton.update(),D.skeleton.frame=Ie.render.frame);const Se=ke.update(D),be=D.material;if($&&(Se.boundingSphere===null&&Se.computeBoundingSphere(),q.copy(Se.boundingSphere.center).applyMatrix4(D.matrixWorld).applyMatrix4(W)),Array.isArray(be)){const Re=Se.groups;for(let Le=0,De=Re.length;Le<De;Le++){const Ne=Re[Le],We=be[Ne.materialIndex];We&&We.visible&&_.push(D,Se,We,Q,q.z,Ne)}}else be.visible&&_.push(D,Se,be,Q,q.z,null)}}const Me=D.children;for(let Se=0,be=Me.length;Se<be;Se++)pt(Me[Se],j,Q,$)}function vn(D,j,Q,$){const ee=D.opaque,Me=D.transmissive,Se=D.transparent;p.setupLightsView(Q),H===!0&&Y.setGlobalState(d.clippingPlanes,Q),Me.length>0&&nt(ee,Me,j,Q),$&&pe.viewport(L.copy($)),ee.length>0&&It(ee,j,Q),Me.length>0&&It(Me,j,Q),Se.length>0&&It(Se,j,Q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function nt(D,j,Q,$){if(K===null){const be=oe.isWebGL2;K=new jn(1024,1024,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?tr:$n,minFilter:er,samples:be&&s===!0?4:0})}const ee=d.getRenderTarget();d.setRenderTarget(K),d.clear();const Me=d.toneMapping;d.toneMapping=mn,It(D,Q,$),Ae.updateMultisampleRenderTarget(K),Ae.updateRenderTargetMipmap(K);let Se=!1;for(let be=0,Re=j.length;be<Re;be++){const Le=j[be],De=Le.object,Ne=Le.geometry,We=Le.material,xt=Le.group;if(We.side===dn&&De.layers.test($.layers)){const zt=We.side;We.side=bt,We.needsUpdate=!0,Yt(De,Q,$,Ne,We,xt),We.side=zt,We.needsUpdate=!0,Se=!0}}Se===!0&&(Ae.updateMultisampleRenderTarget(K),Ae.updateRenderTargetMipmap(K)),d.setRenderTarget(ee),d.toneMapping=Me}function It(D,j,Q){const $=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Me=D.length;ee<Me;ee++){const Se=D[ee],be=Se.object,Re=Se.geometry,Le=$===null?Se.material:$,De=Se.group;be.layers.test(Q.layers)&&Yt(be,j,Q,Re,Le,De)}}function Yt(D,j,Q,$,ee,Me){D.onBeforeRender(d,j,Q,$,ee,Me),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ee.onBeforeRender(d,j,Q,$,D,Me),ee.transparent===!0&&ee.side===dn&&ee.forceSinglePass===!1?(ee.side=bt,ee.needsUpdate=!0,d.renderBufferDirect(Q,j,$,ee,D,Me),ee.side=An,ee.needsUpdate=!0,d.renderBufferDirect(Q,j,$,ee,D,Me),ee.side=dn):d.renderBufferDirect(Q,j,$,ee,D,Me),D.onAfterRender(d,j,Q,$,ee,Me)}function gr(D,j,Q){j.isScene!==!0&&(j=ie);const $=me.get(D),ee=p.state.lights,Me=p.state.shadowsArray,Se=ee.state.version,be=Xe.getParameters(D,ee.state,Me,j,Q),Re=Xe.getProgramCacheKey(be);let Le=$.programs;$.environment=D.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(D.isMeshStandardMaterial?Ze:Je).get(D.envMap||$.environment),Le===void 0&&(D.addEventListener("dispose",tt),Le=new Map,$.programs=Le);let De=Le.get(Re);if(De!==void 0){if($.currentProgram===De&&$.lightsStateVersion===Se)return bo(D,be),De}else be.uniforms=Xe.getUniforms(D),D.onBuild(Q,be,d),D.onBeforeCompile(be,d),De=Xe.acquireProgram(be,Re),Le.set(Re,De),$.uniforms=be.uniforms;const Ne=$.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ne.clippingPlanes=Y.uniform),bo(D,be),$.needsLights=qu(D),$.lightsStateVersion=Se,$.needsLights&&(Ne.ambientLightColor.value=ee.state.ambient,Ne.lightProbe.value=ee.state.probe,Ne.directionalLights.value=ee.state.directional,Ne.directionalLightShadows.value=ee.state.directionalShadow,Ne.spotLights.value=ee.state.spot,Ne.spotLightShadows.value=ee.state.spotShadow,Ne.rectAreaLights.value=ee.state.rectArea,Ne.ltc_1.value=ee.state.rectAreaLTC1,Ne.ltc_2.value=ee.state.rectAreaLTC2,Ne.pointLights.value=ee.state.point,Ne.pointLightShadows.value=ee.state.pointShadow,Ne.hemisphereLights.value=ee.state.hemi,Ne.directionalShadowMap.value=ee.state.directionalShadowMap,Ne.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ne.spotShadowMap.value=ee.state.spotShadowMap,Ne.spotLightMatrix.value=ee.state.spotLightMatrix,Ne.spotLightMap.value=ee.state.spotLightMap,Ne.pointShadowMap.value=ee.state.pointShadowMap,Ne.pointShadowMatrix.value=ee.state.pointShadowMatrix);const We=De.getUniforms(),xt=Yr.seqWithValue(We.seq,Ne);return $.currentProgram=De,$.uniformsList=xt,De}function bo(D,j){const Q=me.get(D);Q.outputColorSpace=j.outputColorSpace,Q.instancing=j.instancing,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function ju(D,j,Q,$,ee){j.isScene!==!0&&(j=ie),Ae.resetTextureUnits();const Me=j.fog,Se=$.isMeshStandardMaterial?j.environment:null,be=M===null?d.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:nn,Re=($.isMeshStandardMaterial?Ze:Je).get($.envMap||Se),Le=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,De=!!$.normalMap&&!!Q.attributes.tangent,Ne=!!Q.morphAttributes.position,We=!!Q.morphAttributes.normal,xt=!!Q.morphAttributes.color,zt=$.toneMapped?d.toneMapping:mn,Pn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,rt=Pn!==void 0?Pn.length:0,Oe=me.get($),ka=p.state.lights;if(H===!0&&(ne===!0||D!==w)){const Rt=D===w&&$.id===b;Y.setState($,D,Rt)}let ut=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ka.state.version||Oe.outputColorSpace!==be||ee.isInstancedMesh&&Oe.instancing===!1||!ee.isInstancedMesh&&Oe.instancing===!0||ee.isSkinnedMesh&&Oe.skinning===!1||!ee.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Re||$.fog===!0&&Oe.fog!==Me||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Y.numPlanes||Oe.numIntersection!==Y.numIntersection)||Oe.vertexAlphas!==Le||Oe.vertexTangents!==De||Oe.morphTargets!==Ne||Oe.morphNormals!==We||Oe.morphColors!==xt||Oe.toneMapping!==zt||oe.isWebGL2===!0&&Oe.morphTargetsCount!==rt)&&(ut=!0):(ut=!0,Oe.__version=$.version);let Ln=Oe.currentProgram;ut===!0&&(Ln=gr($,j,ee));let wo=!1,ki=!1,za=!1;const yt=Ln.getUniforms(),Dn=Oe.uniforms;if(pe.useProgram(Ln.program)&&(wo=!0,ki=!0,za=!0),$.id!==b&&(b=$.id,ki=!0),wo||w!==D){if(yt.setValue(N,"projectionMatrix",D.projectionMatrix),oe.logarithmicDepthBuffer&&yt.setValue(N,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),w!==D&&(w=D,ki=!0,za=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Rt=yt.map.cameraPosition;Rt!==void 0&&Rt.setValue(N,q.setFromMatrixPosition(D.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(N,"isOrthographic",D.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ee.isSkinnedMesh)&&yt.setValue(N,"viewMatrix",D.matrixWorldInverse)}if(ee.isSkinnedMesh){yt.setOptional(N,ee,"bindMatrix"),yt.setOptional(N,ee,"bindMatrixInverse");const Rt=ee.skeleton;Rt&&(oe.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(N,"boneTexture",Rt.boneTexture,Ae),yt.setValue(N,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ga=Q.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0&&oe.isWebGL2===!0)&&ce.update(ee,Q,Ln),(ki||Oe.receiveShadow!==ee.receiveShadow)&&(Oe.receiveShadow=ee.receiveShadow,yt.setValue(N,"receiveShadow",ee.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Dn.envMap.value=Re,Dn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ki&&(yt.setValue(N,"toneMappingExposure",d.toneMappingExposure),Oe.needsLights&&Xu(Dn,za),Me&&$.fog===!0&&dt.refreshFogUniforms(Dn,Me),dt.refreshMaterialUniforms(Dn,$,S,T,K),Yr.upload(N,Oe.uniformsList,Dn,Ae)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yr.upload(N,Oe.uniformsList,Dn,Ae),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(N,"center",ee.center),yt.setValue(N,"modelViewMatrix",ee.modelViewMatrix),yt.setValue(N,"normalMatrix",ee.normalMatrix),yt.setValue(N,"modelMatrix",ee.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Rt=$.uniformsGroups;for(let Ha=0,Yu=Rt.length;Ha<Yu;Ha++)if(oe.isWebGL2){const To=Rt[Ha];de.update(To,Ln),de.bind(To,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function Xu(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function qu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(D,j,Q){me.get(D.texture).__webglTexture=j,me.get(D.depthTexture).__webglTexture=Q;const $=me.get(D);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,j){const Q=me.get(D);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,Q=0){M=D,m=j,y=Q;let $=!0,ee=null,Me=!1,Se=!1;if(D){const Re=me.get(D);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(N.FRAMEBUFFER,null),$=!1):Re.__webglFramebuffer===void 0?Ae.setupRenderTarget(D):Re.__hasExternalTextures&&Ae.rebindTextures(D,me.get(D.texture).__webglTexture,me.get(D.depthTexture).__webglTexture);const Le=D.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const De=me.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ee=De[j],Me=!0):oe.isWebGL2&&D.samples>0&&Ae.useMultisampledRTT(D)===!1?ee=me.get(D).__webglMultisampledFramebuffer:ee=De,L.copy(D.viewport),E.copy(D.scissor),A=D.scissorTest}else L.copy(k).multiplyScalar(S).floor(),E.copy(F).multiplyScalar(S).floor(),A=U;if(pe.bindFramebuffer(N.FRAMEBUFFER,ee)&&oe.drawBuffers&&$&&pe.drawBuffers(D,ee),pe.viewport(L),pe.scissor(E),pe.setScissorTest(A),Me){const Re=me.get(D.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re.__webglTexture,Q)}else if(Se){const Re=me.get(D.texture),Le=j||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,Q||0,Le)}b=-1},this.readRenderTargetPixels=function(D,j,Q,$,ee,Me,Se){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=me.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){pe.bindFramebuffer(N.FRAMEBUFFER,be);try{const Re=D.texture,Le=Re.format,De=Re.type;if(Le!==Xt&&X.convert(Le)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=De===tr&&(ye.has("EXT_color_buffer_half_float")||oe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(De!==$n&&X.convert(De)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===zn&&(oe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-$&&Q>=0&&Q<=D.height-ee&&N.readPixels(j,Q,$,ee,X.convert(Le),X.convert(De),Me)}finally{const Re=M!==null?me.get(M).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(D,j,Q=0){const $=Math.pow(2,-Q),ee=Math.floor(j.image.width*$),Me=Math.floor(j.image.height*$);Ae.setTexture2D(j,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,D.x,D.y,ee,Me),pe.unbindTexture()},this.copyTextureToTexture=function(D,j,Q,$=0){const ee=j.image.width,Me=j.image.height,Se=X.convert(Q.format),be=X.convert(Q.type);Ae.setTexture2D(Q,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,$,D.x,D.y,ee,Me,Se,be,j.image.data):j.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,$,D.x,D.y,j.mipmaps[0].width,j.mipmaps[0].height,Se,j.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,$,D.x,D.y,Se,be,j.image),$===0&&Q.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(D,j,Q,$,ee=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=D.max.x-D.min.x+1,Se=D.max.y-D.min.y+1,be=D.max.z-D.min.z+1,Re=X.convert($.format),Le=X.convert($.type);let De;if($.isData3DTexture)Ae.setTexture3D($,0),De=N.TEXTURE_3D;else if($.isDataArrayTexture)Ae.setTexture2DArray($,0),De=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment);const Ne=N.getParameter(N.UNPACK_ROW_LENGTH),We=N.getParameter(N.UNPACK_IMAGE_HEIGHT),xt=N.getParameter(N.UNPACK_SKIP_PIXELS),zt=N.getParameter(N.UNPACK_SKIP_ROWS),Pn=N.getParameter(N.UNPACK_SKIP_IMAGES),rt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,D.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,D.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,D.min.z),Q.isDataTexture||Q.isData3DTexture?N.texSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,be,Re,Le,rt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,be,Re,rt.data)):N.texSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,be,Re,Le,rt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ne),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,We),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,zt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pn),ee===0&&$.generateMipmaps&&N.generateMipmap(De),pe.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Ae.setTextureCube(D,0):D.isData3DTexture?Ae.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ae.setTexture2DArray(D,0):Ae.setTexture2D(D,0),pe.unbindTexture()},this.resetState=function(){m=0,y=0,M=null,pe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Vn:yu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vn?Te:nn}}class Sy extends Gu{}Sy.prototype.isWebGL1Renderer=!0;class Ey extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ki extends Cn{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+s,Math.PI);let c=0;const l=[],f=new V,h=new V,_=[],p=[],v=[],g=[];for(let d=0;d<=n;d++){const x=[],m=d/n;let y=0;d===0&&o===0?y=.5/t:d===n&&u===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const b=M/t;f.x=-e*Math.cos(r+b*a)*Math.sin(o+m*s),f.y=e*Math.cos(o+m*s),f.z=e*Math.sin(r+b*a)*Math.sin(o+m*s),p.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),g.push(b+y,1-m),x.push(c++)}l.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const m=l[d][x+1],y=l[d][x],M=l[d+1][x],b=l[d+1][x+1];(d!==0||o>0)&&_.push(m,y,b),(d!==n-1||u<Math.PI)&&_.push(y,M,b)}this.setIndex(_),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class by extends pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hu extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ns=new ot,bc=new V,wc=new V;class wy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(bc),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),Ns.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ns),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tc=new ot,$i=new V,Os=new V;class Ty extends wy{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),n.position.copy($i),Os.copy(n.position),Os.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Os),n.updateMatrixWorld(),r.makeTranslation(-$i.x,-$i.y,-$i.z),Tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc)}}class Ay extends Hu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ty}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ry extends Hu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ac{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);const Rc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Cy{constructor(e,t,n){const r=this;let a=!1,o=0,s=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){s++,a===!1&&r.onStart!==void 0&&r.onStart(l,o,s),a=!0},this.itemEnd=function(l){o++,r.onProgress!==void 0&&r.onProgress(l,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return u?u(l):l},this.setURLModifier=function(l){return u=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){const f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,h=c.length;f<h;f+=2){const _=c[f],p=c[f+1];if(_.global&&(_.lastIndex=0),_.test(l))return p}return null}}}const Py=new Cy;class Vu{constructor(e){this.manager=e!==void 0?e:Py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Cc={};function Fs(i){i in Cc||(Cc[i]=!0,console.warn(i))}class Ly extends Vu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=Rc.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=ao("img");function u(){l(),Rc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(f){l(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function l(){s.removeEventListener("load",u,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",u,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class Dy{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Wu=300,Pc=1e3,Wr=1001,Lc=1002,Uy=1006,Iy=1008,Ny=1009,Oy=1023,Fy=3e3,Bs=3001,ks="",zs="srgb",_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function $u(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function By(i,e,t){return Math.max(e,Math.min(t,i))}class Zi{constructor(e=0,t=0){Zi.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(By(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ba{constructor(){Ba.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,a,o,s,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=s,l[3]=t,l[4]=a,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],u=n[6],c=n[1],l=n[4],f=n[7],h=n[2],_=n[5],p=n[8],v=r[0],g=r[3],d=r[6],x=r[1],m=r[4],y=r[7],M=r[2],b=r[5],w=r[8];return a[0]=o*v+s*x+u*M,a[3]=o*g+s*m+u*b,a[6]=o*d+s*y+u*w,a[1]=c*v+l*x+f*M,a[4]=c*g+l*m+f*b,a[7]=c*d+l*y+f*w,a[2]=h*v+_*x+p*M,a[5]=h*g+_*m+p*b,a[8]=h*d+_*y+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*s*c-n*a*l+n*s*u+r*a*c-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],l=e[8],f=l*o-s*c,h=s*u-l*a,_=c*a-o*u,p=t*f+n*h+r*_;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=f*v,e[1]=(r*c-l*n)*v,e[2]=(s*n-r*o)*v,e[3]=h*v,e[4]=(l*t-r*u)*v,e[5]=(r*a-s*t)*v,e[6]=_*v,e[7]=(n*u-c*t)*v,e[8]=(o*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const u=Math.cos(a),c=Math.sin(a);return this.set(n*u,n*c,-n*(u*o+c*s)+o+e,-r*c,r*u,-r*(-c*o+u*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ba;function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}let Ei;class ky{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=ao("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Hs(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hs(t[n]/255)*255):t[n]=Hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zy{constructor(e=null){this.isSource=!0,this.uuid=$u(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Vs(r[o].image)):a.push(Vs(r[o]))}else a=Vs(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ky.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gy=0;class Tn extends Dy{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=Wr,r=Wr,a=Uy,o=Iy,s=Oy,u=Ny,c=Tn.DEFAULT_ANISOTROPY,l=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=$u(),this.name="",this.source=new zy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=u,this.offset=new Zi(0,0),this.repeat=new Zi(1,1),this.center=new Zi(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ba,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Bs?zs:ks),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pc:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pc:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zs?Bs:Fy}set encoding(e){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bs?zs:ks}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Wu;Tn.DEFAULT_ANISOTROPY=1;class Hy extends Vu{constructor(e){super(e)}load(e,t,n,r){const a=new Tn,o=new Ly(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}const Dc={type:"change"},Ws={type:"start"},Uc={type:"end"};class Vy extends ti{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Xe),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dc),n.update(),a=r.NONE},this.update=function(){const B=new V,te=new Xn().setFromUnitVectors(e.up,new V(0,1,0)),X=te.clone().invert(),ue=new V,de=new Xn,_e=2*Math.PI;return function(){const ge=n.object.position;B.copy(ge).sub(n.target),B.applyQuaternion(te),s.setFromVector3(B),n.autoRotate&&a===r.NONE&&E(w()),n.enableDamping?(s.theta+=u.theta*n.dampingFactor,s.phi+=u.phi*n.dampingFactor):(s.theta+=u.theta,s.phi+=u.phi);let Ee=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(Ee)&&isFinite(Pe)&&(Ee<-Math.PI?Ee+=_e:Ee>Math.PI&&(Ee-=_e),Pe<-Math.PI?Pe+=_e:Pe>Math.PI&&(Pe-=_e),Ee<=Pe?s.theta=Math.max(Ee,Math.min(Pe,s.theta)):s.theta=s.theta>(Ee+Pe)/2?Math.max(Ee,s.theta):Math.min(Pe,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),B.setFromSpherical(s),B.applyQuaternion(X),ge.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),l.set(0,0,0)),c=1,f||ue.distanceToSquared(n.object.position)>o||8*(1-de.dot(n.object.quaternion))>o?(n.dispatchEvent(Dc),ue.copy(n.object.position),de.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",Ze),n.domElement.removeEventListener("wheel",ke),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Xe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Ac,u=new Ac;let c=1;const l=new V;let f=!1;const h=new Ue,_=new Ue,p=new Ue,v=new Ue,g=new Ue,d=new Ue,x=new Ue,m=new Ue,y=new Ue,M=[],b={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function E(B){u.theta-=B}function A(B){u.phi-=B}const O=function(){const B=new V;return function(X,ue){B.setFromMatrixColumn(ue,0),B.multiplyScalar(-X),l.add(B)}}(),T=function(){const B=new V;return function(X,ue){n.screenSpacePanning===!0?B.setFromMatrixColumn(ue,1):(B.setFromMatrixColumn(ue,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(X),l.add(B)}}(),S=function(){const B=new V;return function(X,ue){const de=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;B.copy(_e).sub(n.target);let fe=B.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),O(2*X*fe/de.clientHeight,n.object.matrix),T(2*ue*fe/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(X*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),T(ue*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(B){n.object.isPerspectiveCamera?c/=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*B)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(B){n.object.isPerspectiveCamera?c*=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/B)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(B){h.set(B.clientX,B.clientY)}function F(B){x.set(B.clientX,B.clientY)}function U(B){v.set(B.clientX,B.clientY)}function z(B){_.set(B.clientX,B.clientY),p.subVectors(_,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;E(2*Math.PI*p.x/te.clientHeight),A(2*Math.PI*p.y/te.clientHeight),h.copy(_),n.update()}function H(B){m.set(B.clientX,B.clientY),y.subVectors(m,x),y.y>0?R(L()):y.y<0&&C(L()),x.copy(m),n.update()}function ne(B){g.set(B.clientX,B.clientY),d.subVectors(g,v).multiplyScalar(n.panSpeed),S(d.x,d.y),v.copy(g),n.update()}function K(B){B.deltaY<0?C(L()):B.deltaY>0&&R(L()),n.update()}function W(B){let te=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(-n.keyPanSpeed,0),te=!0;break}te&&(B.preventDefault(),n.update())}function q(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const B=.5*(M[0].pageX+M[1].pageX),te=.5*(M[0].pageY+M[1].pageY);h.set(B,te)}}function ie(){if(M.length===1)v.set(M[0].pageX,M[0].pageY);else{const B=.5*(M[0].pageX+M[1].pageX),te=.5*(M[0].pageY+M[1].pageY);v.set(B,te)}}function Z(){const B=M[0].pageX-M[1].pageX,te=M[0].pageY-M[1].pageY,X=Math.sqrt(B*B+te*te);x.set(0,X)}function N(){n.enableZoom&&Z(),n.enablePan&&ie()}function xe(){n.enableZoom&&Z(),n.enableRotate&&q()}function ye(B){if(M.length==1)_.set(B.pageX,B.pageY);else{const X=ce(B),ue=.5*(B.pageX+X.x),de=.5*(B.pageY+X.y);_.set(ue,de)}p.subVectors(_,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;E(2*Math.PI*p.x/te.clientHeight),A(2*Math.PI*p.y/te.clientHeight),h.copy(_)}function oe(B){if(M.length===1)g.set(B.pageX,B.pageY);else{const te=ce(B),X=.5*(B.pageX+te.x),ue=.5*(B.pageY+te.y);g.set(X,ue)}d.subVectors(g,v).multiplyScalar(n.panSpeed),S(d.x,d.y),v.copy(g)}function pe(B){const te=ce(B),X=B.pageX-te.x,ue=B.pageY-te.y,de=Math.sqrt(X*X+ue*ue);m.set(0,de),y.set(0,Math.pow(m.y/x.y,n.zoomSpeed)),R(y.y),x.copy(m)}function Ie(B){n.enableZoom&&pe(B),n.enablePan&&oe(B)}function me(B){n.enableZoom&&pe(B),n.enableRotate&&ye(B)}function Ae(B){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",Je),n.domElement.addEventListener("pointerup",Ze)),Y(B),B.pointerType==="touch"?dt(B):it(B))}function Je(B){n.enabled!==!1&&(B.pointerType==="touch"?I(B):et(B))}function Ze(B){re(B),M.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(Uc),a=r.NONE}function it(B){let te;switch(B.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case ai.DOLLY:if(n.enableZoom===!1)return;F(B),a=r.DOLLY;break;case ai.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;U(B),a=r.PAN}else{if(n.enableRotate===!1)return;k(B),a=r.ROTATE}break;case ai.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;k(B),a=r.ROTATE}else{if(n.enablePan===!1)return;U(B),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ws)}function et(B){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;z(B);break;case r.DOLLY:if(n.enableZoom===!1)return;H(B);break;case r.PAN:if(n.enablePan===!1)return;ne(B);break}}function ke(B){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(B.preventDefault(),n.dispatchEvent(Ws),K(B),n.dispatchEvent(Uc))}function Xe(B){n.enabled===!1||n.enablePan===!1||W(B)}function dt(B){switch(se(B),M.length){case 1:switch(n.touches.ONE){case si.ROTATE:if(n.enableRotate===!1)return;q(),a=r.TOUCH_ROTATE;break;case si.PAN:if(n.enablePan===!1)return;ie(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(),a=r.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ws)}function I(B){switch(se(B),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(B),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;oe(B),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(B),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(B),n.update();break;default:a=r.NONE}}function P(B){n.enabled!==!1&&B.preventDefault()}function Y(B){M.push(B)}function re(B){delete b[B.pointerId];for(let te=0;te<M.length;te++)if(M[te].pointerId==B.pointerId){M.splice(te,1);return}}function se(B){let te=b[B.pointerId];te===void 0&&(te=new Ue,b[B.pointerId]=te),te.set(B.pageX,B.pageY)}function ce(B){const te=B.pointerId===M[0].pointerId?M[1]:M[0];return b[te.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",Ze),n.domElement.addEventListener("wheel",ke,{passive:!1}),this.update()}}const Wy=Qe('<div class="map-container w-full h-full absolute z-0"><div class="map absolute">'),$y=()=>{let i,e;const[t,n]=Fe(!1),[r,a]=Fe(null),[o,s]=Fe(null),[u,c]=Fe(null),[l,f]=Fe(null),h=8437738,_=1579305;Ut(()=>{ah()&&(d(),ou(!1))}),Ut(()=>{let x=r();x&&(x.background=new Ve(Qt()?_:h))});const p=()=>{let x=r(),m=o(),y=u(),M=l();if(!x||!m||!y||!M)return;requestAnimationFrame(p);const w=(m.position.distanceTo(M.target)-M.minDistance)/(2-M.minDistance);M.zoomSpeed=Math.min(Math.max(.001,w),5),M.rotateSpeed=.27,M.update(),y.render(x,m)},v=()=>{if(t())return;n(!0),console.log("initializing three js");const x=e.clientWidth,m=e.clientHeight,y=new Ey;y.background=new Ve(Qt()?_:h);const M=new Dt(75,x/m,.001,1e3),b=new Gu;b.setSize(x,m),i.appendChild(b.domElement),new Ki(1,32,32),new na({color:5994437,wireframe:!0}),M.position.z=2;const w=new Hy().load("./images/1_earth_sm.jpg"),L=new Vy(M,b.domElement);L.enablePan=!1,L.minDistance=1.002,L.maxDistance=20,L.screenSpacePanning=!1,L.target=new V(0,0,0);const E=new Ay(14737632,1);E.position.set(10,10,10),y.add(E);const A=new Ry(Qt()?2105376:6316128);y.add(A);const O=new Jt(new Ki(1,32,32),new by({map:w}));y.add(O),a(y),s(M),c(b),f(L),p()},g=(x,m)=>{const y=new na({color:63487}),M=new Ki(.01,5,5),b=new Jt(M,y),w=(90-x)*(Math.PI/180),L=(m+180)*(Math.PI/180);return b.position.x=-Math.sin(w)*Math.cos(L),b.position.y=Math.cos(w),b.position.z=Math.sin(w)*Math.sin(L),b.rotation.set(0,0,Math.PI/2),b},d=()=>{const x=e.clientWidth,m=e.clientHeight;let y=o(),M=u();!y||!M||(y.aspect=x/m,y.updateProjectionMatrix(),M.setSize(x,m))};return Ut(()=>(v(),window.addEventListener("resize",d),()=>{i.firstChild&&i.removeChild(i.firstChild),window.removeEventListener("resize",d)})),Ut(()=>{let x=r(),m=o(),y=u(),M=Qi()?Object.values(Qi()):[];!x||!m||!y||!M||(x.children.filter(b=>b.userData.pin).forEach(b=>x?.remove(b)),M.forEach(b=>{if(b.latitude&&b.longitude){const w=g(b.latitude,b.longitude);w.userData.pin=!0,x?.add(w)}}),y.render(x,m))}),(()=>{const x=Wy(),m=x.firstChild,y=e;typeof y=="function"?qs(y,x):e=x;const M=i;return typeof M=="function"?qs(M,m):i=m,x})()},$s="0123456789bcdefghjkmnpqrstuvwxyz";class ht{static encode(e,t,n){if(typeof n>"u"){for(let h=1;h<=12;h++){const _=ht.encode(e,t,h),p=ht.decode(_);if(p.lat==e&&p.lon==t)return _}n=12}if(e=Number(e),t=Number(t),n=Number(n),isNaN(e)||isNaN(t)||isNaN(n))throw new Error("Invalid geohash");let r=0,a=0,o=!0,s="",u=-90,c=90,l=-180,f=180;for(;s.length<n;){if(o){const h=(l+f)/2;t>=h?(r=r*2+1,l=h):(r=r*2,f=h)}else{const h=(u+c)/2;e>=h?(r=r*2+1,u=h):(r=r*2,c=h)}o=!o,++a==5&&(s+=$s.charAt(r),a=0,r=0)}return s}static decode(e){const t=ht.bounds(e),n=t.sw.lat,r=t.sw.lon,a=t.ne.lat,o=t.ne.lon;let s=(n+a)/2,u=(r+o)/2;return s=s.toFixed(Math.floor(2-Math.log(a-n)/Math.LN10)),u=u.toFixed(Math.floor(2-Math.log(o-r)/Math.LN10)),{lat:Number(s),lon:Number(u)}}static bounds(e){if(e.length==0)throw new Error("Invalid geohash");e=e.toLowerCase();let t=!0,n=-90,r=90,a=-180,o=180;for(let u=0;u<e.length;u++){const c=e.charAt(u),l=$s.indexOf(c);if(l==-1)throw new Error("Invalid geohash");for(let f=4;f>=0;f--){const h=l>>f&1;if(t){const _=(a+o)/2;h==1?a=_:o=_}else{const _=(n+r)/2;h==1?n=_:r=_}t=!t}}return{sw:{lat:n,lon:a},ne:{lat:r,lon:o}}}static adjacent(e,t){if(e=e.toLowerCase(),t=t.toLowerCase(),e.length==0)throw new Error("Invalid geohash");if("nsew".indexOf(t)==-1)throw new Error("Invalid direction");const n={n:["p0r21436x8zb9dcf5h7kjnmqesgutwvy","bc01fg45238967deuvhjyznpkmstqrwx"],s:["14365h7k9dcfesgujnmqp0r2twvyx8zb","238967debc01fg45kmstqrwxuvhjyznp"],e:["bc01fg45238967deuvhjyznpkmstqrwx","p0r21436x8zb9dcf5h7kjnmqesgutwvy"],w:["238967debc01fg45kmstqrwxuvhjyznp","14365h7k9dcfesgujnmqp0r2twvyx8zb"]},r={n:["prxz","bcfguvyz"],s:["028b","0145hjnp"],e:["bcfguvyz","prxz"],w:["0145hjnp","028b"]},a=e.slice(-1);let o=e.slice(0,-1);const s=e.length%2;return r[t][s].indexOf(a)!=-1&&o!=""&&(o=ht.adjacent(o,t)),o+$s.charAt(n[t][s].indexOf(a))}static neighbours(e){return{n:ht.adjacent(e,"n"),ne:ht.adjacent(ht.adjacent(e,"n"),"e"),e:ht.adjacent(e,"e"),se:ht.adjacent(ht.adjacent(e,"s"),"e"),s:ht.adjacent(e,"s"),sw:ht.adjacent(ht.adjacent(e,"s"),"w"),w:ht.adjacent(e,"w"),nw:ht.adjacent(ht.adjacent(e,"n"),"w")}}}function jy(i){return Kn({a:{viewBox:"0 0 512 512"},c:'<path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"/>'},i)}const Xy=Qe('<div class="flex h-full pointer-events-none"><div class="p-3 w-full mt-24"><ul>'),qy=Qe('<div class="p-3 mt-auto w-full relative pointer-events-auto"><div class="bg-inputBox dark:bg-inputBoxDark shadow-lg rounded-3xl overflow-hidden"><textarea class="w-full resize-none bg-inputBox dark:bg-inputBoxDark text-black dark:text-white" style="height:35px;padding-left:15px;padding-top:7px;"></textarea><button class="absolute top-5 right-8">'),Yy=Qe("<li> (<!>)"),Ky=()=>{const[i,e]=Fe(""),t=()=>{if(i().trim()===""||!bn.user().is)return;const a=new Date,o=[a.getUTCFullYear(),a.getUTCFullYear()+"-"+(a.getUTCMonth()+1).toString().padStart(2,"0"),a.getUTCFullYear()+"-"+(a.getUTCMonth()+1).toString().padStart(2,"0")+"-"+a.getUTCDate().toString().padStart(2,"0")];let s={message:i(),createdAt:a.toISOString(),type:"message"},u=[],c=su();if(c){const l=c.latitude,f=c.longitude,h=ht.encode(l,f),_=h.substring(0,4);u=[_.substring(0,2),_.substring(0,3),_],s.latitude=l,s.longitude=f,s.geohash=h}o.forEach(l=>{jr.get("dates").get(l).set(messageRef)}),s.location&&(u.forEach(l=>{jr.get("locations").get(l).set(messageRef)}),u.forEach(l=>{o.forEach(f=>{jr.get("locations_and_dates").get(l).get(f).set(messageRef)})})),e("")},n=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),t())};return[(()=>{const r=Xy(),a=r.firstChild,o=a.firstChild;return Ge(o,(()=>{const s=ze(()=>!!Qi());return()=>s()&&He(uf,{get each(){return Object.values(Qi())?.filter(u=>u.type==="message")},children:u=>(()=>{const c=Yy(),l=c.firstChild,f=l.nextSibling;return f.nextSibling,Ge(c,()=>u.message,l),Ge(c,()=>new Date(u.createdAt).toLocaleTimeString(),f),st(h=>{const _=`${Qt()?"chatmessage-dark":"chatmessage"} rounded-3xl shadow-lg p-2 pl-3 pr-3 min-w-3 mb-2 pointer-events-auto text-sm`,p=ea()?"max-width: 700px;":"";return _!==h._v$&&En(c,h._v$=_),h._v$2=aa(c,p,h._v$2),h},{_v$:void 0,_v$2:void 0}),c})()})})()),r})(),(()=>{const r=qy(),a=r.firstChild,o=a.firstChild,s=o.nextSibling;return o.$$keydown=n,o.$$input=u=>e(u.target.value),s.$$click=t,Ge(s,He(jy,{get color(){return Qt()?"#cccccc":"#8d8c80"},size:"22px"})),st(()=>o.value=i()),r})()]};Ni(["input","keydown","click"]);function Zy(i){return Kn({a:{viewBox:"0 0 512 512"},c:'<path d="M32 256C32 132.2 132.3 32 255.8 32c11.36 0 29.7 1.668 40.9 3.746 9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3 9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480 132.1 480 32 379.6 32 256z"/>'},i)}function Jy(i){return Kn({a:{viewBox:"0 0 512 512"},c:'<path d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1s41.2 96.9 95.1 96.9 95.1-42.98 95.1-95.1-42.1-96.9-95.1-96.9zM509.3 347l-63.2-91.9 63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89 164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6 12.56 141.3c-10.927 1.9-16.156 14.6-9.824 22.8L65.89 256 2.74 347.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7 19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109 109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1 0-70.69 57.31-127.1 127.1-127.1S383.1 186.2 383.1 256c0 70.7-56.4 127.1-127.1 127.1z"/>'},i)}const Qy=Qe('<div class="flex flex-col h-screen w-screen z-1 absolute pointer-events-none"><div class="p-5 absolute w-screen pointer-events-auto"><div class="flex justify-center" style="margin-left:5px;"><button class="rounded-full pl-2 pr-2 bg-navbutton dark:bg-navbuttonDark hover:bg-navbuttonHover dark:hover:bg-navbuttonHover text-black dark:text-gray-200"></button></div></div><div class="flex flex-grow">'),eM=Qe("<button>"),tM=Qe("<div>About"),nM=Qe("<div>"),iM=Qe("<div>Video"),rM=Qe("<div>Calendar"),aM=()=>{const[i,e]=Fe(["chat"]),t=["about","chat","video","calendar","map"],n=o=>{ea()?i().includes(o)?e([]):e([o]):(i().includes(o)?e(i().filter(s=>s!==o)):i().length<3&&e([...i(),o]),ou(!0))},r=o=>{let s=i().indexOf(o),u=!1;return ea()||(u=(i()[0]===o||i()[2]===o)&&i().length!==1,o==="chat"&&(u=!0)),`flex flex-col ${u?"min-w-96 w-96 flex-shrink-0":"flex-grow"} order-${s+1}`},a=()=>{sh(!Qt())};return(()=>{const o=Qy(),s=o.firstChild,u=s.firstChild,c=u.firstChild,l=s.nextSibling;return Ge(u,()=>t.map(f=>(()=>{const h=eM();return h.$$click=()=>n(f),Ge(h,()=>f.charAt(0).toUpperCase()+f.slice(1)),st(()=>En(h,`mr-2 px-6 py-1 text-black dark:text-gray-200 hover:bg-navbuttonHover dark:hover:bg-navbuttonHoverDark transition-colors duration-200 rounded focus:outline-none navbutton navbutton${i().includes(f)?"-toggled":""}${Qt()?"-dark":""} }
                            }`)),h})()),c),c.$$click=a,Ge(c,(()=>{const f=ze(()=>!!Qt());return()=>f()?He(Jy,{}):He(Zy,{})})()),Ge(l,(()=>{const f=ze(()=>!!i().includes("about"));return()=>f()&&(()=>{const h=tM();return st(()=>En(h,r("about"))),h})()})(),null),Ge(l,(()=>{const f=ze(()=>!!i().includes("chat"));return()=>f()&&(()=>{const h=nM();return Ge(h,He(Ky,{})),st(()=>En(h,r("chat"))),h})()})(),null),Ge(l,(()=>{const f=ze(()=>!!i().includes("video"));return()=>f()&&(()=>{const h=iM();return st(()=>En(h,r("video"))),h})()})(),null),Ge(l,(()=>{const f=ze(()=>!!i().includes("calendar"));return()=>f()&&(()=>{const h=rM();return st(()=>En(h,r("calendar"))),h})()})(),null),o})()};Ni(["click"]);const sM=Qe('<div class="w-full h-full">'),oM=()=>{const{windowWidth:i,windowHeight:e}=Mm();return eu(),Ut(()=>{let t=i()<768;ih(t)}),Ut(()=>{Qt()||Qt()===void 0&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),console.log("using dark theme")):(document.documentElement.classList.remove("dark"),console.log("using light theme"))}),console.log("APP_NAMESPACE","circles-c979fe7c-ebfd-11ed-a05b-0242ac120003"),[(()=>{const t=sM();return Ge(t,He($y,{}),null),Ge(t,He(aM,{}),null),Ge(t,He(ym,{}),null),Ge(t,He(qf,{get children(){return[He(Do,{path:"/",get element(){return He(Kf,{href:"/all"})}}),He(Do,{path:"/*",get element(){return He(ch,{})}})]}}),null),t})(),He(_h,{}),He(cm,{})]},lM=document.getElementById("root");yf(()=>He(Xf,{get source(){return Df()},get base(){return"/circles3"},get children(){return He(oM,{})}}),lM);
