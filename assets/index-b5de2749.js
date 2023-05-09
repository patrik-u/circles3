(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const cf=(i,e)=>i===e,rn=Symbol("solid-proxy"),Xa=Symbol("solid-track"),es={equals:cf};let Gc=qc;const Rn=1,ts=2,Hc={owned:null,cleanups:null,context:null,owner:null};var qe=null;let js=null,We=null,vt=null,gn=null,ls=0;function Yi(i,e){const t=We,n=qe,r=i.length===0,s=r?Hc:{owned:null,cleanups:null,context:null,owner:e===void 0?n:e},o=r?i:()=>i(()=>Bt(()=>cs(s)));qe=s,We=null;try{return Cn(o,!0)}finally{We=t,qe=n}}function je(i,e){e=e?Object.assign({},es,e):es;const t={value:i,observers:null,observerSlots:null,comparator:e.equals||void 0},n=r=>(typeof r=="function"&&(r=r(t.value)),Xc(t,r));return[jc.bind(t),n]}function Qe(i,e,t){const n=ho(i,e,!1,Rn);or(n)}function qt(i,e,t){Gc=gf;const n=ho(i,e,!1,Rn);(!t||!t.render)&&(n.user=!0),gn?gn.push(n):or(n)}function Ge(i,e,t){t=t?Object.assign({},es,t):es;const n=ho(i,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,or(n),jc.bind(n)}function uf(i){return Cn(i,!1)}function Bt(i){if(We===null)return i();const e=We;We=null;try{return i()}finally{We=e}}function Vc(i,e,t){const n=Array.isArray(i);let r,s=t&&t.defer;return o=>{let a;if(n){a=Array(i.length);for(let c=0;c<i.length;c++)a[c]=i[c]()}else a=i();if(s){s=!1;return}const u=Bt(()=>e(a,r,o));return r=a,u}}function Ii(i){return qe===null||(qe.cleanups===null?qe.cleanups=[i]:qe.cleanups.push(i)),i}function Wc(){return We}function ff(){return qe}function hf(i,e){const t=qe,n=We;qe=i,We=null;try{return Cn(e,!0)}catch(r){po(r)}finally{qe=t,We=n}}function df(i){const e=We,t=qe;return Promise.resolve().then(()=>{We=e,qe=t;let n;return Cn(i,!1),We=qe=null,n?n.done:void 0})}function $c(i,e){const t=Symbol("context");return{id:t,Provider:_f(t),defaultValue:i}}function uo(i){let e;return(e=Kc(qe,i.id))!==void 0?e:i.defaultValue}function fo(i){const e=Ge(i),t=Ge(()=>qa(e()));return t.toArray=()=>{const n=t();return Array.isArray(n)?n:n!=null?[n]:[]},t}function jc(){if(this.sources&&this.state)if(this.state===Rn)or(this);else{const i=vt;vt=null,Cn(()=>is(this),!1),vt=i}if(We){const i=this.observers?this.observers.length:0;We.sources?(We.sources.push(this),We.sourceSlots.push(i)):(We.sources=[this],We.sourceSlots=[i]),this.observers?(this.observers.push(We),this.observerSlots.push(We.sources.length-1)):(this.observers=[We],this.observerSlots=[We.sources.length-1])}return this.value}function Xc(i,e,t){let n=i.value;return(!i.comparator||!i.comparator(n,e))&&(i.value=e,i.observers&&i.observers.length&&Cn(()=>{for(let r=0;r<i.observers.length;r+=1){const s=i.observers[r],o=js&&js.running;o&&js.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?vt.push(s):gn.push(s),s.observers&&Yc(s)),o||(s.state=Rn)}if(vt.length>1e6)throw vt=[],new Error},!1)),e}function or(i){if(!i.fn)return;cs(i);const e=qe,t=We,n=ls;We=qe=i,pf(i,i.value,n),We=t,qe=e}function pf(i,e,t){let n;try{n=i.fn(e)}catch(r){return i.pure&&(i.state=Rn,i.owned&&i.owned.forEach(cs),i.owned=null),i.updatedAt=t+1,po(r)}(!i.updatedAt||i.updatedAt<=t)&&(i.updatedAt!=null&&"observers"in i?Xc(i,n):i.value=n,i.updatedAt=t)}function ho(i,e,t,n=Rn,r){const s={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:qe,context:null,pure:t};return qe===null||qe!==Hc&&(qe.owned?qe.owned.push(s):qe.owned=[s]),s}function ns(i){if(i.state===0)return;if(i.state===ts)return is(i);if(i.suspense&&Bt(i.suspense.inFallback))return i.suspense.effects.push(i);const e=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<ls);)i.state&&e.push(i);for(let t=e.length-1;t>=0;t--)if(i=e[t],i.state===Rn)or(i);else if(i.state===ts){const n=vt;vt=null,Cn(()=>is(i,e[0]),!1),vt=n}}function Cn(i,e){if(vt)return i();let t=!1;e||(vt=[]),gn?t=!0:gn=[],ls++;try{const n=i();return mf(t),n}catch(n){t||(gn=null),vt=null,po(n)}}function mf(i){if(vt&&(qc(vt),vt=null),i)return;const e=gn;gn=null,e.length&&Cn(()=>Gc(e),!1)}function qc(i){for(let e=0;e<i.length;e++)ns(i[e])}function gf(i){let e,t=0;for(e=0;e<i.length;e++){const n=i[e];n.user?i[t++]=n:ns(n)}for(e=0;e<t;e++)ns(i[e])}function is(i,e){i.state=0;for(let t=0;t<i.sources.length;t+=1){const n=i.sources[t];if(n.sources){const r=n.state;r===Rn?n!==e&&(!n.updatedAt||n.updatedAt<ls)&&ns(n):r===ts&&is(n,e)}}}function Yc(i){for(let e=0;e<i.observers.length;e+=1){const t=i.observers[e];t.state||(t.state=ts,t.pure?vt.push(t):gn.push(t),t.observers&&Yc(t))}}function cs(i){let e;if(i.sources)for(;i.sources.length;){const t=i.sources.pop(),n=i.sourceSlots.pop(),r=t.observers;if(r&&r.length){const s=r.pop(),o=t.observerSlots.pop();n<r.length&&(s.sourceSlots[o]=n,r[n]=s,t.observerSlots[n]=o)}}if(i.owned){for(e=i.owned.length-1;e>=0;e--)cs(i.owned[e]);i.owned=null}if(i.cleanups){for(e=i.cleanups.length-1;e>=0;e--)i.cleanups[e]();i.cleanups=null}i.state=0,i.context=null}function po(i){throw i}function Kc(i,e){return i?i.context&&i.context[e]!==void 0?i.context[e]:Kc(i.owner,e):void 0}function qa(i){if(typeof i=="function"&&!i.length)return qa(i());if(Array.isArray(i)){const e=[];for(let t=0;t<i.length;t++){const n=qa(i[t]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return i}function _f(i,e){return function(n){let r;return Qe(()=>r=Bt(()=>(qe.context={[i]:n.value},fo(()=>n.children))),void 0),r}}const vf=Symbol("fallback");function Oo(i){for(let e=0;e<i.length;e++)i[e]()}function xf(i,e,t={}){let n=[],r=[],s=[],o=0,a=e.length>1?[]:null;return Ii(()=>Oo(s)),()=>{let u=i()||[],c,l;return u[Xa],Bt(()=>{let h=u.length,m,d,v,g,p,x,_,y,M;if(h===0)o!==0&&(Oo(s),s=[],n=[],r=[],o=0,a&&(a=[])),t.fallback&&(n=[vf],r[0]=Yi(E=>(s[0]=E,t.fallback())),o=1);else if(o===0){for(r=new Array(h),l=0;l<h;l++)n[l]=u[l],r[l]=Yi(f);o=h}else{for(v=new Array(h),g=new Array(h),a&&(p=new Array(h)),x=0,_=Math.min(o,h);x<_&&n[x]===u[x];x++);for(_=o-1,y=h-1;_>=x&&y>=x&&n[_]===u[y];_--,y--)v[y]=r[_],g[y]=s[_],a&&(p[y]=a[_]);for(m=new Map,d=new Array(y+1),l=y;l>=x;l--)M=u[l],c=m.get(M),d[l]=c===void 0?-1:c,m.set(M,l);for(c=x;c<=_;c++)M=n[c],l=m.get(M),l!==void 0&&l!==-1?(v[l]=r[c],g[l]=s[c],a&&(p[l]=a[c]),l=d[l],m.set(M,l)):s[c]();for(l=x;l<h;l++)l in v?(r[l]=v[l],s[l]=g[l],a&&(a[l]=p[l],a[l](l))):r[l]=Yi(f);r=r.slice(0,o=h),n=u.slice(0)}return r});function f(h){if(s[l]=h,a){const[m,d]=je(l);return a[l]=d,e(u[l],m)}return e(u[l])}}}function Ye(i,e){return Bt(()=>i(e||{}))}function Sr(){return!0}const yf={get(i,e,t){return e===rn?t:i.get(e)},has(i,e){return e===rn?!0:i.has(e)},set:Sr,deleteProperty:Sr,getOwnPropertyDescriptor(i,e){return{configurable:!0,enumerable:!0,get(){return i.get(e)},set:Sr,deleteProperty:Sr}},ownKeys(i){return i.keys()}};function Xs(i){return(i=typeof i=="function"?i():i)?i:{}}function Zc(...i){let e=!1;for(let n=0;n<i.length;n++){const r=i[n];e=e||!!r&&rn in r,i[n]=typeof r=="function"?(e=!0,Ge(r)):r}if(e)return new Proxy({get(n){for(let r=i.length-1;r>=0;r--){const s=Xs(i[r])[n];if(s!==void 0)return s}},has(n){for(let r=i.length-1;r>=0;r--)if(n in Xs(i[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<i.length;r++)n.push(...Object.keys(Xs(i[r])));return[...new Set(n)]}},yf);const t={};for(let n=i.length-1;n>=0;n--)if(i[n]){const r=Object.getOwnPropertyDescriptors(i[n]);for(const s in r)s in t||Object.defineProperty(t,s,{enumerable:!0,get(){for(let o=i.length-1;o>=0;o--){const a=(i[o]||{})[s];if(a!==void 0)return a}}})}return t}const Mf=i=>`Stale read from <${i}>.`;function Jc(i){const e="fallback"in i&&{fallback:()=>i.fallback};return Ge(xf(()=>i.each,i.children,e||void 0))}function Qc(i){const e=i.keyed,t=Ge(()=>i.when,void 0,{equals:(n,r)=>e?n===r:!n==!r});return Ge(()=>{const n=t();if(n){const r=i.children;return typeof r=="function"&&r.length>0?Bt(()=>r(e?n:()=>{if(!Bt(t))throw Mf("Show");return i.when})):r}return i.fallback},void 0,void 0)}const Sf=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],bf=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Sf]),Ef=new Set(["innerHTML","textContent","innerText","children"]),wf=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Tf=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Af(i,e){const t=Tf[i];return typeof t=="object"?t[e]?t.$:void 0:t}const Rf=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Cf={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Pf(i,e,t){let n=t.length,r=e.length,s=n,o=0,a=0,u=e[r-1].nextSibling,c=null;for(;o<r||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[r-1]===t[s-1];)r--,s--;if(r===o){const l=s<n?a?t[a-1].nextSibling:t[s-a]:u;for(;a<s;)i.insertBefore(t[a++],l)}else if(s===a)for(;o<r;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[r-1]){const l=e[--r].nextSibling;i.insertBefore(t[a++],e[o++].nextSibling),i.insertBefore(t[--s],l),e[r]=t[s]}else{if(!c){c=new Map;let f=a;for(;f<s;)c.set(t[f],f++)}const l=c.get(e[o]);if(l!=null)if(a<l&&l<s){let f=o,h=1,m;for(;++f<r&&f<s&&!((m=c.get(e[f]))==null||m!==l+h);)h++;if(h>l-a){const d=e[o];for(;a<l;)i.insertBefore(t[a++],d)}else i.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const No="_$DX_DELEGATE";function Lf(i,e,t,n={}){let r;return Yi(s=>{r=s,e===document?i():ke(e,i(),e.firstChild?null:void 0,t)},n.owner),()=>{r(),e.textContent=""}}function et(i,e,t){let n;const r=()=>{const o=document.createElement("template");return o.innerHTML=i,t?o.content.firstChild.firstChild:o.content.firstChild},s=e?()=>(n||(n=r())).cloneNode(!0):()=>Bt(()=>document.importNode(n||(n=r()),!0));return s.cloneNode=s,s}function Kn(i,e=window.document){const t=e[No]||(e[No]=new Set);for(let n=0,r=i.length;n<r;n++){const s=i[n];t.has(s)||(t.add(s),e.addEventListener(s,Ff))}}function Hn(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)}function Df(i,e,t,n){n==null?i.removeAttributeNS(e,t):i.setAttributeNS(e,t,n)}function Jt(i,e){e==null?i.removeAttribute("class"):i.className=e}function eu(i,e,t,n){if(n)Array.isArray(t)?(i[`$$${e}`]=t[0],i[`$$${e}Data`]=t[1]):i[`$$${e}`]=t;else if(Array.isArray(t)){const r=t[0];i.addEventListener(e,t[0]=s=>r.call(i,t[1],s))}else i.addEventListener(e,t)}function Uf(i,e,t={}){const n=Object.keys(e||{}),r=Object.keys(t);let s,o;for(s=0,o=r.length;s<o;s++){const a=r[s];!a||a==="undefined"||e[a]||(Fo(i,a,!1),delete t[a])}for(s=0,o=n.length;s<o;s++){const a=n[s],u=!!e[a];!a||a==="undefined"||t[a]===u||!u||(Fo(i,a,!0),t[a]=u)}return t}function er(i,e,t){if(!e)return t?Hn(i,"style"):e;const n=i.style;if(typeof e=="string")return n.cssText=e;typeof t=="string"&&(n.cssText=t=void 0),t||(t={}),e||(e={});let r,s;for(s in t)e[s]==null&&n.removeProperty(s),delete t[s];for(s in e)r=e[s],r!==t[s]&&(n.setProperty(s,r),t[s]=r);return t}function If(i,e={},t,n){const r={};return n||Qe(()=>r.children=Ci(i,e.children,r.children)),Qe(()=>e.ref&&e.ref(i)),Qe(()=>Of(i,e,t,!0,r,!0)),r}function tu(i,e,t){return Bt(()=>i(e,t))}function ke(i,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return Ci(i,e,n,t);Qe(r=>Ci(i,e(),r,t),n)}function Of(i,e,t,n,r={},s=!1){e||(e={});for(const o in r)if(!(o in e)){if(o==="children")continue;r[o]=Bo(i,o,null,r[o],t,s)}for(const o in e){if(o==="children"){n||Ci(i,e.children);continue}const a=e[o];r[o]=Bo(i,o,a,r[o],t,s)}}function Nf(i){return i.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Fo(i,e,t){const n=e.trim().split(/\s+/);for(let r=0,s=n.length;r<s;r++)i.classList.toggle(n[r],t)}function Bo(i,e,t,n,r,s){let o,a,u,c,l;if(e==="style")return er(i,t,n);if(e==="classList")return Uf(i,t,n);if(t===n)return n;if(e==="ref")s||t(i);else if(e.slice(0,3)==="on:"){const f=e.slice(3);n&&i.removeEventListener(f,n),t&&i.addEventListener(f,t)}else if(e.slice(0,10)==="oncapture:"){const f=e.slice(10);n&&i.removeEventListener(f,n,!0),t&&i.addEventListener(f,t,!0)}else if(e.slice(0,2)==="on"){const f=e.slice(2).toLowerCase(),h=Rf.has(f);if(!h&&n){const m=Array.isArray(n)?n[0]:n;i.removeEventListener(f,m)}(h||t)&&(eu(i,f,t,h),h&&Kn([f]))}else if(e.slice(0,5)==="attr:")Hn(i,e.slice(5),t);else if((l=e.slice(0,5)==="prop:")||(u=Ef.has(e))||!r&&((c=Af(e,i.tagName))||(a=bf.has(e)))||(o=i.nodeName.includes("-")))l&&(e=e.slice(5),a=!0),e==="class"||e==="className"?Jt(i,t):o&&!a&&!u?i[Nf(e)]=t:i[c||e]=t;else{const f=r&&e.indexOf(":")>-1&&Cf[e.split(":")[0]];f?Df(i,f,e,t):Hn(i,wf[e]||e,t)}return t}function Ff(i){const e=`$$${i.type}`;let t=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==t&&Object.defineProperty(i,"target",{configurable:!0,value:t}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}});t;){const n=t[e];if(n&&!t.disabled){const r=t[`${e}Data`];if(r!==void 0?n.call(t,r,i):n.call(t,i),i.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function Ci(i,e,t,n,r){for(;typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=n!==void 0;if(i=o&&t[0]&&t[0].parentNode||i,s==="string"||s==="number")if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=ni(i,t,n,a)}else t!==""&&typeof t=="string"?t=i.firstChild.data=e:t=i.textContent=e;else if(e==null||s==="boolean")t=ni(i,t,n);else{if(s==="function")return Qe(()=>{let a=e();for(;typeof a=="function";)a=a();t=Ci(i,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[],u=t&&Array.isArray(t);if(Ya(a,e,t,r))return Qe(()=>t=Ci(i,a,t,n,!0)),()=>t;if(a.length===0){if(t=ni(i,t,n),o)return t}else u?t.length===0?ko(i,a,n):Pf(i,t,a):(t&&ni(i),ko(i,a));t=a}else if(e instanceof Node){if(Array.isArray(t)){if(o)return t=ni(i,t,n,e);ni(i,t,null,e)}else t==null||t===""||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);t=e}else console.warn("Unrecognized value. Skipped inserting",e)}return t}function Ya(i,e,t,n){let r=!1;for(let s=0,o=e.length;s<o;s++){let a=e[s],u=t&&t[s];if(a instanceof Node)i.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))r=Ya(i,a,u)||r;else if(typeof a=="function")if(n){for(;typeof a=="function";)a=a();r=Ya(i,Array.isArray(a)?a:[a],Array.isArray(u)?u:[u])||r}else i.push(a),r=!0;else{const c=String(a);u&&u.nodeType===3?(u.data=c,i.push(u)):i.push(document.createTextNode(c))}}return r}function ko(i,e,t=null){for(let n=0,r=e.length;n<r;n++)i.insertBefore(e[n],t)}function ni(i,e,t,n){if(t===void 0)return i.textContent="";const r=n||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(r!==a){const u=a.parentNode===i;!s&&!o?u?i.replaceChild(r,a):i.insertBefore(r,t):u&&a.remove()}else s=!0}}else i.insertBefore(r,t);return[r]}const nu=!1;function Bf(i,e,t){return i.addEventListener(e,t),()=>i.removeEventListener(e,t)}function kf([i,e],t,n){return[t?()=>t(i()):i,n?r=>e(n(r)):e]}function zf(i){try{return document.querySelector(i)}catch{return null}}function Gf(i,e){const t=zf(`#${i}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}function Hf(i,e,t,n){let r=!1;const s=a=>typeof a=="string"?{value:a}:a,o=kf(je(s(i()),{equals:(a,u)=>a.value===u.value}),void 0,a=>(!r&&e(a),a));return t&&Ii(t((a=i())=>{r=!0,o[1](s(a)),r=!1})),{signal:o,utils:n}}function Vf(i){if(i){if(Array.isArray(i))return{signal:i}}else return{signal:je({value:""})};return i}function Wf(){return Hf(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:i,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"",i):window.history.pushState(n,"",i),Gf(window.location.hash.slice(1),t)},i=>Bf(window,"popstate",()=>i()),{go:i=>window.history.go(i)})}function $f(){let i=new Set;function e(r){return i.add(r),()=>i.delete(r)}let t=!1;function n(r,s){if(t)return!(t=!1);const o={to:r,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of i)a.listener({...o,from:a.location,retry:u=>{u&&(t=!0),a.navigate(r,s)}});return!o.defaultPrevented}return{subscribe:e,confirm:n}}const jf=/^(?:[a-z0-9]+:)?\/\//i,Xf=/^\/+|(\/)\/+$/g;function Ki(i,e=!1){const t=i.replace(Xf,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function Kr(i,e,t){if(jf.test(e))return;const n=Ki(i),r=t&&Ki(t);let s="";return!r||e.startsWith("/")?s=n:r.toLowerCase().indexOf(n.toLowerCase())!==0?s=n+r:s=r,(s||"/")+Ki(e,!s)}function qf(i,e){if(i==null)throw new Error(e);return i}function iu(i,e){return Ki(i).replace(/\/*(\*.*)?$/g,"")+Ki(e)}function Yf(i){const e={};return i.searchParams.forEach((t,n)=>{e[n]=t}),e}function Kf(i,e,t){const[n,r]=i.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return a=>{const u=a.split("/").filter(Boolean),c=u.length-o;if(c<0||c>0&&r===void 0&&!e)return null;const l={path:o?"":"/",params:{}},f=h=>t===void 0?void 0:t[h];for(let h=0;h<o;h++){const m=s[h],d=u[h],v=m[0]===":",g=v?m.slice(1):m;if(v&&qs(d,f(g)))l.params[g]=d;else if(v||!qs(d,m))return null;l.path+=`/${d}`}if(r){const h=c?u.slice(-c).join("/"):"";if(qs(h,f(r)))l.params[r]=h;else return null}return l}}function qs(i,e){const t=n=>n.localeCompare(i,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(i):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(i):!1}function Zf(i){const[e,t]=i.pattern.split("/*",2),n=e.split("/").filter(Boolean);return n.reduce((r,s)=>r+(s.startsWith(":")?2:3),n.length-(t===void 0?0:1))}function ru(i){const e=new Map,t=ff();return new Proxy({},{get(n,r){return e.has(r)||hf(t,()=>e.set(r,Ge(()=>i()[r]))),e.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(i())}})}function su(i){let e=/(\/?\:[^\/]+)\?/.exec(i);if(!e)return[i];let t=i.slice(0,e.index),n=i.slice(e.index+e[0].length);const r=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(n);)r.push(t+=e[1]),n=n.slice(e[0].length);return su(n).reduce((s,o)=>[...s,...r.map(a=>a+o)],[])}const Jf=100,au=$c(),us=$c(),mo=()=>qf(uo(au),"Make sure your app is wrapped in a <Router />");let tr;const go=()=>tr||uo(us)||mo().base,Qf=()=>mo().navigatorFactory(),eh=()=>go().params;function th(i,e="",t){const{component:n,data:r,children:s}=i,o=!s||Array.isArray(s)&&!s.length,a={key:i,element:n?()=>Ye(n,{}):()=>{const{element:u}=i;return u===void 0&&t?Ye(t,{}):u},preload:i.component?n.preload:i.preload,data:r};return ou(i.path).reduce((u,c)=>{for(const l of su(c)){const f=iu(e,l),h=o?f:f.split("/*",1)[0];u.push({...a,originalPath:l,pattern:h,matcher:Kf(h,!o,i.matchFilters)})}return u},[])}function nh(i,e=0){return{routes:i,score:Zf(i[i.length-1])*1e4-e,matcher(t){const n=[];for(let r=i.length-1;r>=0;r--){const s=i[r],o=s.matcher(t);if(!o)return null;n.unshift({...o,route:s})}return n}}}function ou(i){return Array.isArray(i)?i:[i]}function lu(i,e="",t,n=[],r=[]){const s=ou(i);for(let o=0,a=s.length;o<a;o++){const u=s[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=th(u,e,t);for(const l of c){n.push(l);const f=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!f)lu(u.children,l.pattern,t,n,r);else{const h=nh([...n],r.length);r.push(h)}n.pop()}}}return n.length?r:r.sort((o,a)=>a.score-o.score)}function ih(i,e){for(let t=0,n=i.length;t<n;t++){const r=i[t].matcher(e);if(r)return r}return[]}function rh(i,e){const t=new URL("http://sar"),n=Ge(u=>{const c=i();try{return new URL(c,t)}catch{return console.error(`Invalid path ${c}`),u}},t,{equals:(u,c)=>u.href===c.href}),r=Ge(()=>n().pathname),s=Ge(()=>n().search,!0),o=Ge(()=>n().hash),a=Ge(()=>"");return{get pathname(){return r()},get search(){return s()},get hash(){return o()},get state(){return e()},get key(){return a()},query:ru(Vc(s,()=>Yf(n())))}}function sh(i,e="",t,n){const{signal:[r,s],utils:o={}}=Vf(i),a=o.parsePath||(A=>A),u=o.renderPath||(A=>A),c=o.beforeLeave||$f(),l=Kr("",e),f=void 0;if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!r().value&&s({value:l,replace:!0,scroll:!1});const[h,m]=je(!1),d=async A=>{m(!0);try{await df(A)}finally{m(!1)}},[v,g]=je(r().value),[p,x]=je(r().state),_=rh(v,p),y=[],M={pattern:l,params:{},path:()=>l,outlet:()=>null,resolvePath(A){return Kr(l,A)}};if(t)try{tr=M,M.data=t({data:void 0,params:{},location:_,navigate:w(M)})}finally{tr=void 0}function E(A,F,T){Bt(()=>{if(typeof F=="number"){F&&(o.go?c.confirm(F,T)&&o.go(F):console.warn("Router integration does not support relative routing"));return}const{replace:S,resolve:R,scroll:C,state:k}={replace:!1,resolve:!0,scroll:!0,...T},N=R?A.resolvePath(F):Kr("",F);if(N===void 0)throw new Error(`Path '${F}' is not a routable path`);if(y.length>=Jf)throw new Error("Too many redirects");const U=v();if((N!==U||k!==p())&&!nu){if(c.confirm(N,T)){const z=y.push({value:U,replace:S,scroll:C,state:p()});d(()=>{g(N),x(k)}).then(()=>{y.length===z&&D({value:N,state:k})})}}})}function w(A){return A=A||uo(us)||M,(F,T)=>E(A,F,T)}function D(A){const F=y[0];F&&((A.value!==F.value||A.state!==F.state)&&s({...A,replace:F.replace,scroll:F.scroll}),y.length=0)}Qe(()=>{const{value:A,state:F}=r();Bt(()=>{A!==v()&&d(()=>{g(A),x(F)})})});{let A=function(F){if(F.defaultPrevented||F.button!==0||F.metaKey||F.altKey||F.ctrlKey||F.shiftKey)return;const T=F.composedPath().find(U=>U instanceof Node&&U.nodeName.toUpperCase()==="A");if(!T||!T.hasAttribute("link"))return;const S=T.href;if(T.target||!S&&!T.hasAttribute("state"))return;const R=(T.getAttribute("rel")||"").split(/\s+/);if(T.hasAttribute("download")||R&&R.includes("external"))return;const C=new URL(S);if(C.origin!==window.location.origin||l&&C.pathname&&!C.pathname.toLowerCase().startsWith(l.toLowerCase()))return;const k=a(C.pathname+C.search+C.hash),N=T.getAttribute("state");F.preventDefault(),E(M,k,{resolve:!1,replace:T.hasAttribute("replace"),scroll:!T.hasAttribute("noscroll"),state:N&&JSON.parse(N)})};var b=A;Kn(["click"]),document.addEventListener("click",A),Ii(()=>document.removeEventListener("click",A))}return{base:M,out:f,location:_,isRouting:h,renderPath:u,parsePath:a,navigatorFactory:w,beforeLeave:c}}function ah(i,e,t,n,r){const{base:s,location:o,navigatorFactory:a}=i,{pattern:u,element:c,preload:l,data:f}=n().route,h=Ge(()=>n().path);l&&l();const m={parent:e,pattern:u,get child(){return t()},path:h,params:r,data:e.data,outlet:c,resolvePath(d){return Kr(s.path(),d,h())}};if(f)try{tr=m,m.data=f({data:e.data,params:r,location:o,navigate:a(m)})}finally{tr=void 0}return m}const oh=i=>{const{source:e,url:t,base:n,data:r,out:s}=i,o=e||Wf(),a=sh(o,n,r);return Ye(au.Provider,{value:a,get children(){return i.children}})},lh=i=>{const e=mo(),t=go(),n=fo(()=>i.children),r=Ge(()=>lu(n(),iu(t.pattern,i.base||""),uh)),s=Ge(()=>ih(r(),e.location.pathname)),o=ru(()=>{const l=s(),f={};for(let h=0;h<l.length;h++)Object.assign(f,l[h].params);return f});e.out&&e.out.matches.push(s().map(({route:l,path:f,params:h})=>({originalPath:l.originalPath,pattern:l.pattern,path:f,params:h})));const a=[];let u;const c=Ge(Vc(s,(l,f,h)=>{let m=f&&l.length===f.length;const d=[];for(let v=0,g=l.length;v<g;v++){const p=f&&f[v],x=l[v];h&&p&&x.route.key===p.route.key?d[v]=h[v]:(m=!1,a[v]&&a[v](),Yi(_=>{a[v]=_,d[v]=ah(e,d[v-1]||t,()=>c()[v+1],()=>s()[v],o)}))}return a.splice(l.length).forEach(v=>v()),h&&m?h:(u=d[0],d)}));return Ye(Qc,{get when(){return c()&&u},keyed:!0,children:l=>Ye(us.Provider,{value:l,get children(){return l.outlet()}})})},ch=i=>{const e=fo(()=>i.children);return Zc(i,{get children(){return e()}})},uh=()=>{const i=go();return Ye(Qc,{get when(){return i.child},keyed:!0,children:e=>Ye(us.Provider,{value:e,get children(){return e.outlet()}})})};const Ka=Symbol("store-raw"),nr=Symbol("store-node");function cu(i){let e=i[rn];if(!e&&(Object.defineProperty(i,rn,{value:e=new Proxy(i,dh)}),!Array.isArray(i))){const t=Object.keys(i),n=Object.getOwnPropertyDescriptors(i);for(let r=0,s=t.length;r<s;r++){const o=t[r];n[o].get&&Object.defineProperty(i,o,{enumerable:n[o].enumerable,get:n[o].get.bind(e)})}}return e}function rs(i){let e;return i!=null&&typeof i=="object"&&(i[rn]||!(e=Object.getPrototypeOf(i))||e===Object.prototype||Array.isArray(i))}function ir(i,e=new Set){let t,n,r,s;if(t=i!=null&&i[Ka])return t;if(!rs(i)||e.has(i))return i;if(Array.isArray(i)){Object.isFrozen(i)?i=i.slice(0):e.add(i);for(let o=0,a=i.length;o<a;o++)r=i[o],(n=ir(r,e))!==r&&(i[o]=n)}else{Object.isFrozen(i)?i=Object.assign({},i):e.add(i);const o=Object.keys(i),a=Object.getOwnPropertyDescriptors(i);for(let u=0,c=o.length;u<c;u++)s=o[u],!a[s].get&&(r=i[s],(n=ir(r,e))!==r&&(i[s]=n))}return i}function _o(i){let e=i[nr];return e||Object.defineProperty(i,nr,{value:e=Object.create(null)}),e}function Za(i,e,t){return i[e]||(i[e]=fu(t))}function fh(i,e){const t=Reflect.getOwnPropertyDescriptor(i,e);return!t||t.get||!t.configurable||e===rn||e===nr||(delete t.value,delete t.writable,t.get=()=>i[rn][e]),t}function uu(i){if(Wc()){const e=_o(i);(e._||(e._=fu()))()}}function hh(i){return uu(i),Reflect.ownKeys(i)}function fu(i){const[e,t]=je(i,{equals:!1,internal:!0});return e.$=t,e}const dh={get(i,e,t){if(e===Ka)return i;if(e===rn)return t;if(e===Xa)return uu(i),t;const n=_o(i),r=n[e];let s=r?r():i[e];if(e===nr||e==="__proto__")return s;if(!r){const o=Object.getOwnPropertyDescriptor(i,e);Wc()&&(typeof s!="function"||i.hasOwnProperty(e))&&!(o&&o.get)&&(s=Za(n,e,s)())}return rs(s)?cu(s):s},has(i,e){return e===Ka||e===rn||e===Xa||e===nr||e==="__proto__"?!0:(this.get(i,e,i),e in i)},set(){return!0},deleteProperty(){return!0},ownKeys:hh,getOwnPropertyDescriptor:fh};function ss(i,e,t,n=!1){if(!n&&i[e]===t)return;const r=i[e],s=i.length;t===void 0?delete i[e]:i[e]=t;let o=_o(i),a;(a=Za(o,e,r))&&a.$(()=>t),Array.isArray(i)&&i.length!==s&&(a=Za(o,"length",s))&&a.$(i.length),(a=o._)&&a.$()}function hu(i,e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1){const r=t[n];ss(i,r,e[r])}}function ph(i,e){if(typeof e=="function"&&(e=e(i)),e=ir(e),Array.isArray(e)){if(i===e)return;let t=0,n=e.length;for(;t<n;t++){const r=e[t];i[t]!==r&&ss(i,t,r)}ss(i,"length",n)}else hu(i,e)}function ji(i,e,t=[]){let n,r=i;if(e.length>1){n=e.shift();const o=typeof n,a=Array.isArray(i);if(Array.isArray(n)){for(let u=0;u<n.length;u++)ji(i,[n[u]].concat(e),t);return}else if(a&&o==="function"){for(let u=0;u<i.length;u++)n(i[u],u)&&ji(i,[u].concat(e),t);return}else if(a&&o==="object"){const{from:u=0,to:c=i.length-1,by:l=1}=n;for(let f=u;f<=c;f+=l)ji(i,[f].concat(e),t);return}else if(e.length>1){ji(i[n],e,[n].concat(t));return}r=i[n],t=[n].concat(t)}let s=e[0];typeof s=="function"&&(s=s(r,t),s===r)||n===void 0&&s==null||(s=ir(s),n===void 0||rs(r)&&rs(s)&&!Array.isArray(s)?hu(r,s):ss(i,n,s))}function mh(...[i,e]){const t=ir(i||{}),n=Array.isArray(t),r=cu(t);function s(...o){uf(()=>{n&&o.length===1?ph(t,o[0]):ji(t,o)})}return[r,s]}var Ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function du(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var vo={exports:{}};vo.exports;(function(i){(function(){function e(n,r){return r?du(n):n.slice?e[s(n)]:function(o,a){n(o={exports:{}}),e[s(a)]=o.exports};function s(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){String.random=function(s,o){var a="";for(s=s||24,o=o||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";s-- >0;)a+=o.charAt(Math.floor(Math.random()*o.length));return a},String.match=function(s,o){var a,u;return typeof s!="string"?!1:(typeof o=="string"&&(o={"=":o}),o=o||{},a=o["="]||o["*"]||o[">"]||o["<"],s===a?!0:u!==o["="]?!1:(a=o["*"]||o[">"],s.slice(0,(a||"").length)===a?!0:u!==o["*"]?!1:u!==o[">"]&&u!==o["<"]?s>=o[">"]&&s<=o["<"]:u!==o[">"]&&s>=o[">"]||u!==o["<"]&&s<=o["<"]))},String.hash=function(s,o){if(typeof s=="string"){if(o=o||0,!s.length)return o;for(var a=0,u=s.length,c;a<u;++a)c=s.charCodeAt(a),o=(o<<5)-o+c,o|=0;return o}};var r=Object.prototype.hasOwnProperty;Object.plain=function(s){return s?s instanceof Object&&s.constructor===Object||Object.prototype.toString.call(s).match(/^\[object (\w+)\]$/)[1]==="Object":!1},Object.empty=function(s,o){for(var a in s)if(r.call(s,a)&&(!o||o.indexOf(a)==-1))return!1;return!0},Object.keys=Object.keys||function(s){var o=[];for(var a in s)r.call(s,a)&&o.push(a);return o},function(){var s,o=setTimeout,a=0,u=0,c=typeof setImmediate!=""+s&&setImmediate||function(f,h){return typeof MessageChannel==""+s?o:((f=new MessageChannel).port1.onmessage=function(m){m.data==""&&h()},function(m){h=m,f.port2.postMessage("")})}(),l=o.check=o.check||typeof performance!=""+s&&performance||{now:function(){return+new Date}};o.hold=o.hold||9,o.poll=o.poll||function(f){if(o.hold>=l.now()-a&&u++<3333){f();return}c(function(){a=l.now(),f()},u=0)}}(),function(){var s=setTimeout,o=s.turn=s.turn||function(h){a.push(h)==1&&u(f)},a=o.s=[],u=s.poll,c=0,l,f=function(){(l=a[c++])&&l(),(c==a.length||c==99)&&(a=o.s=a.slice(c),c=0),a.length&&u(f)}}(),function(){var s,o=setTimeout,a=o.turn;(o.each=o.each||function(u,c,l,f){f=f||9,function h(m,d,v){if(d=(m=(u||[]).splice(0,f)).length){for(var g=0;g<d&&s===(v=c(m[g]));g++);if(s===v){a(h);return}}l&&l(v)}()})()}()})(e,"./shim"),e(function(n){n.exports=function r(l,o,a){if(!l)return{to:r};var u,c=typeof o=="function",l=(this.tag||(this.tag={}))[l]||c&&(this.tag[l]={tag:l,to:r._={next:function(h){var m;(m=this.to)&&m.next(h)}}});if(c){var f={off:r.off||(r.off=function(){if(this.next===r._.next)return!0;this===this.the.last&&(this.the.last=this.back),this.to.back=this.back,this.next=r._.next,this.back.to=this.to,this.the.last===this.the&&delete this.on.tag[this.the.tag]}),to:r._,next:o,the:l,on:this,as:a};return(f.back=l.last||l).to=f,l.last=f}return(l=l.to)&&u!==o&&l.next(o),l}})(e,"./onto"),e(function(n){n.exports=function(r){return r===null||typeof r=="string"||typeof r=="boolean"||typeof r=="number"&&r!=1/0&&r!=-1/0&&r===r||!!r&&typeof r["#"]=="string"&&Object.keys(r).length===1&&r["#"]}})(e,"./valid"),e(function(n){e("./shim");function r(){var l=+new Date;return u<l?(o=0,u=l+r.drift):u=l+(o+=1)/a+r.drift}r.drift=0;var s=-1/0,o=0,a=999,u=s,c;r.is=function(l,f,h){var m=f&&l&&l._&&l._[">"]||h;if(m)return typeof(m=m[f])=="number"?m:s},r.ify=function(l,f,h,m,d){(l=l||{})._=l._||{},d&&(l._["#"]=d);var v=l._[">"]||(l._[">"]={});return c!==f&&f!=="_"&&(typeof h=="number"&&(v[f]=h),c!==m&&(l[f]=m)),l},n.exports=r})(e,"./state"),e(function(n){e("./shim");function r(s){var o={s:{}},a=o.s;s=s||{max:999,age:1e3*9},o.check=function(c){return a[c]?u(c):!1};var u=o.track=function(c){var l=a[c]||(a[c]={});return l.was=o.now=+new Date,o.to||(o.to=setTimeout(o.drop,s.age+9)),u.ed&&u.ed(c),l};return o.drop=function(c){o.to=null,o.now=+new Date;var l=Object.keys(a);console.STAT&&console.STAT(o.now,+new Date-o.now,"dup drop keys"),setTimeout.each(l,function(f){var h=a[f];h&&(c||s.age)>o.now-h.was||delete a[f]},0,99)},o}n.exports=r})(e,"./dup"),e(function(n){e("./onto"),n.exports=function(o,a){if(this.on){var u=(this.opt||{}).lack||9e3;if(typeof o!="function"){if(!o)return;var l=o["#"]||o,c=(this.tag||"")[l];return c?(a&&(c=this.on(l,a),clearTimeout(c.err),c.err=setTimeout(function(){c.off()},u)),!0):void 0}var l=a&&a["#"]||r(9);if(!o)return l;var f=this.on(l,o,a);return f.err=f.err||setTimeout(function(){f.off(),f.next({err:"Error: No ACK yet.",lack:!0})},u),l}};var r=String.random||function(){return Math.random().toString(36).slice(2)}})(e,"./ask"),e(function(n){function r(d){return d instanceof r?(this._={$:this}).$:this instanceof r?r.create(this._={$:this,opt:d}):new r(d)}r.is=function(d){return d instanceof r||d&&d._&&d===d._.$||!1},r.version=.202,r.chain=r.prototype,r.chain.toJSON=function(){},e("./shim"),r.valid=e("./valid"),r.state=e("./state"),r.on=e("./onto"),r.dup=e("./dup"),r.ask=e("./ask"),function(){r.create=function(S){S.root=S.root||S,S.graph=S.graph||{},S.on=S.on||r.on,S.ask=S.ask||r.ask,S.dup=S.dup||r.dup();var R=S.$.opt(S.opt);return S.once||(S.on("in",d,S),S.on("out",d,S),S.on("put",p,S),r.on("create",S),S.on("create",S)),S.once=1,R};function d(S){if(S){if(S.out===d){this.to.next(S);return}var R=this,C=R.as,k=C.at||C,N=k.$,U=k.dup,z,H=S.DBG;if((z=S["#"])||(z=S["#"]=o(9)),!U.check(z)){if(U.track(z),z=S._,S._=typeof z=="function"?z:function(){},S.$&&S.$===(S.$._||"").$||(S.$=N),S["@"]&&!S.put&&_(S),!k.ask(S["@"],S))if(H&&(H.u=+new Date),S.put){v(S);return}else S.get&&r.on.get(S,N);H&&(H.uc=+new Date),R.to.next(S),H&&(H.ua=+new Date),!(S.nts||S.NTS)&&(S.out=d,k.on("out",S),H&&(H.ue=+new Date))}}}function v(S){if(S){var R=S._||"",C=R.root=((R.$=S.$||"")._||"").root;if(S["@"]&&R.faith&&!R.miss){S.out=d,C.on("out",S);return}R.latch=C.hatch,R.match=C.hatch=[];var k=S.put,N=R.DBG=S.DBG,U=+new Date;if(F=F||U,!(k["#"]&&k["."])){N&&(N.p=U),R["#"]=S["#"],R.msg=S,R.all=0,R.stun=1;var z=Object.keys(k);console.STAT&&console.STAT(U,((N||R).pk=+new Date)-U,"put sort");var H=0,ne,K,W,q,ie,Z,O;(function xe(ye){if(ne!=H){if(ne=H,!(W=z[H])){console.STAT&&console.STAT(U,((N||R).pd=+new Date)-U,"put"),x(R);return}(q=k[W])?(O=q._)?W!==O["#"]?Z=M+E(W)+"soul not same.":(ie=O[">"])||(Z=M+E(W)+"no state."):Z=M+E(W)+"no meta.":Z=M+E(W)+"no node.",K=Object.keys(q||{})}if(Z){S.err=R.err=Z,x(R);return}var oe=0,pe;for(ye=ye||0;ye++<9&&(pe=K[oe++]);)if(pe!=="_"){var Ie=q[pe],me=ie[pe];if(f===me){Z=M+E(pe)+"on"+E(W)+"no state.";break}if(!u(Ie)){Z=M+E(pe)+"on"+E(W)+"bad "+typeof Ie+E(Ie);break}g(Ie,pe,W,me,S),++A}if((K=K.slice(oe)).length){a(xe);return}++H,K=null,xe(ye)})()}}}r.on.put=v;function g(S,R,C,k,N){var U=N._||"",z=U.root,H=z.graph,ne,K=H[C]||h,W=c(K,R,1),q=K[R],ie=U.DBG;(ne=console.STAT)&&(!H[C]||!q)&&(ne.has=(ne.has||0)+1);var Z=b();if(k>Z){setTimeout(function(){g(S,R,C,k,N)},(ne=k-Z)>D?D:ne),console.STAT&&console.STAT((ie||U).Hf=+new Date,ne,"future");return}if(!(k<W)&&!(!U.faith&&k===W&&(S===q||w(S)<=w(q))&&!U.miss)){U.stun++;var O=N["#"]+U.all++,xe={toString:function(){return O},_:U};xe.toJSON=xe.toString,z.dup.track(xe)["#"]=N["#"],ie&&(ie.ph=ie.ph||+new Date),z.on("put",{"#":xe,"@":N["@"],put:{"#":C,".":R,":":S,">":k},ok:N.ok,_:U})}}function p(S){var R;(R=(S._||"").DBG)&&(R.pa=+new Date,R.pm=R.pm||+new Date);var C=this,k=C.as,N=k.graph,U=S._,z=S.put,H=z["#"],ne=z["."],K=z[":"],W=z[">"];S["#"];var q;(q=U.msg)&&(q=q.put)&&(q=q[H])&&l(q,ne,W,K,H),N[H]=l(N[H],ne,W,K,H),(q=(k.next||"")[H])&&q.on("in",S),x(U),C.to.next(S)}function x(S,R){var C;if(!S.stop&&!(!S.err&&0<--S.stun)&&(S.stop=1,!!(C=S.root))){var k=S.match;k.end=1,k===C.hatch&&(!(k=S.latch)||k.end?delete C.hatch:C.hatch=k),S.hatch&&S.hatch(),setTimeout.each(S.match,function(N){N&&N()}),!(!(R=S.msg)||S.err||R.err)&&(R.out=d,S.root.on("out",R),T())}}function _(S){var R=S["@"]||"",C;if(!(C=R._)){var k=(k=S.$)&&(k=k._)&&(k=k.root)&&(k=k.dup);if(!(k=k.check(R)))return;S["@"]=k["#"]||S["@"];return}C.acks=(C.acks||0)+1,(C.err=S.err)&&(S["@"]=C["#"],x(C)),C.ok=S.ok||C.ok,!C.stop&&!C.crack&&(C.crack=C.match&&C.match.push(function(){y(C)})),y(C)}function y(S){!S||!S.root||S.stun||S.acks!==S.all||S.root.on("in",{"@":S["#"],err:S.err,ok:S.err?f:S.ok||{"":1}})}var M="Error: Invalid graph!",E=function(S){return" '"+(""+S).slice(0,9)+"...' "},w=JSON.stringify,D=2147483647,b=r.state,A=0,F,T=function(){A>999&&A/-(F-(F=+new Date))>1&&(r.window&&console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."),T=function(){A=0})}}(),function(){r.on.get=function(v,g){var p=g._,x=v.get,_=x["#"],y=p.graph[_],M=x["."],E=p.next||(p.next={}),w=E[_],D=v._||{},b=D.DBG=v.DBG;if(b&&(b.g=+new Date),!y)return p.on("get",v);if(M){if((typeof M!="string"||f===y[M])&&!((w||"").next||"")[M]){p.on("get",v);return}y=l({},M,c(y,M),y[M],_)}y&&d(v,y),p.on("get",v)};function d(v,g){var p=+new Date,x=v._||{},_=x.DBG=v.DBG,y=v["#"],M=o(9),E=Object.keys(g||"").sort(),w=((g||"")._||"")["#"];E.length;var D=v.$._.root,b=g===D.graph[w];console.STAT&&console.STAT(p,((_||x).gk=+new Date)-p,"got keys"),g&&function A(){p=+new Date;for(var F=0,T,S={},R;F<9&&(T=E[F++]);)l(S,T,c(g,T),g[T],w);E=E.slice(F),(R={})[w]=S,S=R;var C;b&&(C=function(){},C.ram=C.faith=!0),R=E.length,console.STAT&&console.STAT(p,-(p-(p=+new Date)),"got copied some"),_&&(_.ga=+new Date),D.on("in",{"@":y,"#":M,put:S,"%":R?M=o(9):f,$:D.$,_:C,DBG:_,FOO:1}),console.STAT&&console.STAT(p,+new Date-p,"got in"),R&&setTimeout.turn(A)}(),g||D.on("in",{"@":v["#"]})}r.on.get.ack=d}(),function(){r.chain.opt=function(d){d=d||{};var v=this,g=v._,p=d.peers||d;return Object.plain(d)||(d={}),Object.plain(g.opt)||(g.opt=d),typeof p=="string"&&(p=[p]),Object.plain(g.opt.peers)||(g.opt.peers={}),p instanceof Array&&(d.peers={},p.forEach(function(x){var _={};_.id=_.url=x,d.peers[x]=g.opt.peers[x]=g.opt.peers[x]||_})),s(d,function x(_){var y=this[_];if(this&&this.hasOwnProperty(_)||typeof y=="string"||Object.empty(y)){this[_]=y;return}y&&y.constructor!==Object&&!(y instanceof Array)||s(y,x)}),g.opt.from=d,r.on("opt",g),g.opt.uuid=g.opt.uuid||function(_){return r.state().toString(36).replace(".","")+String.random(_||12)},v}}();var s=function(d,v){Object.keys(d).forEach(v,d)},o=String.random,a=setTimeout.turn,u=r.valid,c=r.state.is,l=r.state.ify,f,h={},m;r.log=function(){return!r.log.off&&m.log.apply(m,arguments),[].slice.call(arguments).join(" ")},r.log.once=function(d,v,g){return(g=r.log.once)[d]=g[d]||0,g[d]++||r.log(v)},typeof window<"u"&&((window.GUN=window.Gun=r).window=window);try{typeof t<"u"&&(t.exports=r)}catch{}n.exports=r,(r.window||{}).console=(r.window||{}).console||{log:function(){}},(m=console).only=function(d,v){return m.only.i&&d===m.only.i&&m.only.i++&&(m.log.apply(m,arguments)||v)},r.log.once("welcome","Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!")})(e,"./root"),e(function(n){var r=e("./root");r.chain.back=function(a,u){var c;if(a=a||1,a===-1||a===1/0)return this._.root.$;if(a===1)return(this._.back||this._).$;var l=this,f=l._;if(typeof a=="string"&&(a=a.split(".")),a instanceof Array){var h=0,m=a.length,c=f;for(h;h<m;h++)c=(c||s)[a[h]];return o!==c?u?l:c:(c=f.back)?c.$.back(a,u):void 0}if(typeof a=="function"){for(var d,c={back:f};(c=c.back)&&o===(d=a(c,u)););return d}return typeof a=="number"?(f.back||f).$.back(a-1):this};var s={},o})(e,"./back"),e(function(n){var r=e("./root");r.chain.chain=function(x){var _=this,y=_._,M=new(x||_).constructor(_),E=M._,w;return E.root=w=y.root,E.id=++w.once,E.back=_._,E.on=r.on,E.on("in",r.on.in,E),E.on("out",r.on.out,E),M};function s(x){var _,y=this.as,M=y.back,E=y.root,w;if(x.$||(x.$=y.$),this.to.next(x),y.err){y.on("in",{put:y.put=f,$:y.$});return}if(_=x.get){if(E.pass&&(E.pass[y.id]=y),y.lex&&Object.keys(y.lex).forEach(function(D){w[D]=y.lex[D]},w=x.get=x.get||{}),_["#"]||y.soul){if(_["#"]=_["#"]||y.soul,x["#"]||(x["#"]=h(9)),M=E.$.get(_["#"])._,_=_["."]){if(d(M.put,_)&&(w=M.ask&&M.ask[_],(M.ask||(M.ask={}))[_]=M.$.get(_)._,M.on("in",{get:_,put:{"#":M.soul,".":_,":":M.put[_],">":g(E.graph[M.soul],_)}}),w))return}else{if(w=M.ask&&M.ask[""],(M.ask||(M.ask={}))[""]=M,f!==M.put&&(M.on("in",M),w))return;x.$=M.$}return E.ask(c,x),E.on("in",x)}if(_["."])return y.get?(x={get:{".":y.get},$:y.$},(M.ask||(M.ask={}))[y.get]=x.$._,M.on("out",x)):(x={get:y.lex?x.get:{},$:y.$},M.on("out",x));if((y.ask||(y.ask={}))[""]=y,y.get)return _["."]=y.get,(M.ask||(M.ask={}))[y.get]=x.$._,M.on("out",x)}return M.on("out",x)}r.on.out=s;function o(x,_){_=_||this.as;var y=_.root,M=x.$||(x.$=_.$),E=(M||"")._||l,w=x.put||"",D=w["#"],b=w["."],A=f!==w["="]?w["="]:w[":"],F=w[">"]||-1/0,T;if(f!==x.put&&(f===w["#"]||f===w["."]||f===w[":"]&&f===w["="]||f===w[">"])){if(!m(w)){if(!(D=((w||"")._||"")["#"])){console.log("chain not yet supported for",w,"...",x,_);return}return M=_.root.$.get(D),setTimeout.each(Object.keys(w).sort(),function(S){S=="_"||f===(F=g(w,S))||_.on("in",{$:M,put:{"#":D,".":S,"=":w[S],">":F},VIA:x})})}_.on("in",{$:E.back.$,put:{"#":D=E.back.soul,".":b=E.has||E.get,"=":w,">":g(E.back.put,b)},via:x});return}(x.seen||"")[_.id]||((x.seen||(x.seen=function(){}))[_.id]=_,_!==E&&(Object.keys(x).forEach(function(S){w[S]=x[S]},w={}),w.get=_.get||w.get,!_.soul&&!_.has?w.$$$=w.$$$||_.$:E.soul&&(w.$=_.$,w.$$=w.$$||E.$),x=w),u(x,_),(_.soul||x.$$)&&F>=g(y.graph[D],b)&&((w=y.$.get(D)._).put=p(w.put,b,F,A,D)),!E.soul&&F>=g(y.graph[D],b)&&(T=(y.$.get(D)._.next||"")[b])&&(T.put=A,typeof(w=m(A))=="string"&&(T.put=y.$.get(w)._.put||A)),this.to&&this.to.next(x),_.any&&setTimeout.each(Object.keys(_.any),function(S){(S=_.any[S])&&S(x)},0,99),_.echo&&setTimeout.each(Object.keys(_.echo),function(S){(S=_.echo[S])&&S.on("in",x)},0,99),((x.$$||"")._||E).soul&&(T=_.next)&&(T=T[b])&&(w={},Object.keys(x).forEach(function(S){w[S]=x[S]}),w.$=(x.$$||x.$).get(w.get=b),delete w.$$,delete w.$$$,T.on("in",w)),a(x,_))}r.on.in=o;function a(x,_){if(_=_||this.as||x.$._,!(x.$$&&this!==r.on)&&!(!x.put||_.soul)){var y=x.put||"",M=y["="]||y[":"],b,E=_.root,w=E.$.get(y["#"]).get(y["."])._;if(typeof(M=m(M))!="string"){this===r.on&&((w.echo||(w.echo={}))[_.id]=_);return}if(!((w.echo||(w.echo={}))[_.id]&&!(E.pass||"")[_.id])){if(b=E.pass){if(b[M+_.id])return;b[M+_.id]=1}(w.echo||(w.echo={}))[_.id]=_,_.has&&(_.link=M);var D=E.$.get(w.link=M)._;(D.echo||(D.echo={}))[w.id]=w;var b=_.ask||"";(b[""]||_.lex)&&D.on("out",{get:{"#":M}}),setTimeout.each(Object.keys(b),function(A,F){!A||!(F=b[A])||F.on("out",{get:{"#":M,".":A}})},0,99)}}}r.on.link=a;function u(x,_){var y=x.put||"",M=f!==y["="]?y["="]:y[":"],E=_.root,w,D;if(f===M){if(_.soul&&f!==_.put||(D=(x.$$||x.$||"")._||"",x["@"]&&(f!==D.put||f!==_.put)))return;(w=_.link||x.linked)&&delete(E.$.get(w)._.echo||"")[_.id],_.has&&(_.link=null),_.put=f,setTimeout.each(Object.keys(_.next||""),function(b,A){(A=_.next[b])&&(w&&delete(E.$.get(w).get(b)._.echo||"")[A.id],A.on("in",{get:b,put:f,$:A.$}))},0,99);return}_.soul||x.$$||(w=m(M),D=x.$._||"",!((w===D.link||_.has&&!D.link)&&!((E.pass||"")[_.id]&&typeof w!="string"))&&(delete(D.echo||"")[_.id],u({get:_.get,put:f,$:x.$,linked:x.linked=x.linked||D.link},_)))}r.on.unlink=u;function c(x,_){var y=this.as,M=y.$._;M.root;var E=y.get||"",w=(x.put||"")[E["#"]]||"";if(!x.put||typeof E["."]=="string"&&f===w[E["."]]){if(f!==M.put||!M.soul&&!M.has)return;M.ack=(M.ack||0)+1,M.on("in",{get:M.get,put:M.put=f,$:M.$,"@":x["@"]});return}(x._||{}).miss=1,r.on.put(x)}var l={},f,h=String.random,m=r.valid,d=function(x,_){return x&&Object.prototype.hasOwnProperty.call(x,_)},v=r.state,g=v.is,p=v.ify})(e,"./chain"),e(function(n){var r=e("./root");r.chain.get=function(f,h,m){var d,v;if(typeof f=="string"){if(f.length==0)return(d=this.chain())._.err={err:r.log("0 length key!",f)},h&&h.call(d,d._.err),d;var g=this,p=g._,x=p.next||u;(d=x[f])||(d=f&&s(f,g)),d=d&&d.$}else if(typeof f=="function"){let b=function(A,F,T){if(!b.stun&&!((U=y.pass)&&!U[M])){var S=A.$._,R=(A.$$||"")._,C=(R||S).put,k=!S.has&&!S.soul,N={},U;if((k||l===C)&&(C=l===((U=A.put)||"")["="]?l===(U||"")[":"]?U:U[":"]:U["="]),typeof(U=r.valid(C))=="string"&&(C=l===(U=y.$.get(U)._.put)?_.not?l:C:U),!(_.not&&l===C)){if(l===_.stun){if((U=y.stun)&&U.on&&(p.$.back(function(z){if(U.on(""+z.id,N={}),(N.run||0)<b.id)return N}),!N.run&&U.on(""+S.id,N={}),!N.run&&R&&U.on(""+R.id,N={}),b.id>N.run&&((!N.stun||N.stun.end)&&(N.stun=U.on("stun"),N.stun=N.stun&&N.stun.last),N.stun&&!N.stun.end))){(N.stun.add||(N.stun.add={}))[M]=function(){b(A,F,1)};return}if(l===C&&(T=0),(U=y.hatch)&&!U.end&&l===_.hatch&&!T){if(E[S.$._.id])return;E[S.$._.id]=1,U.push(function(){b(A,F,1)});return}E={}}if(y.pass){if(y.pass[M+S.id])return;y.pass[M+S.id]=1}if(_.on){_.ok.call(S.$,C,S.get,A,F||b);return}if(_.v2020){_.ok(A,F||b);return}Object.keys(A).forEach(function(z){U[z]=A[z]},U={}),A=U,A.put=C,_.ok.call(_.as,A,F||b)}}};var w=b;if(h===!0)return o(this,f,h,m),this;d=this;var p=d._,_=h||{},y=p.root,M;_.at=p,_.ok=f;var E={};return b.at=p,(p.any||(p.any={}))[M=String.random(7)]=b,b.off=function(){b.stun=1,p.any&&delete p.any[M]},b.rid=a,b.id=_.run||++y.once,v=y.pass,(y.pass={})[M]=1,_.out=_.out||{get:{}},p.on("out",_.out),y.pass=v,d}else{if(typeof f=="number")return this.get(""+f,h,m);if(typeof(v=c(f))=="string")return this.get(v,h,m);(v=this.get.next)&&(d=v(this,f))}return d?(h&&typeof h=="function"&&d.get(h,m),d):((d=this.chain())._.err={err:r.log("Invalid get request!",f)},h&&h.call(d,d._.err),d)};function s(f,h){var m=h._,d=m.next,v=h.chain(),g=v._;return d||(d=m.next={}),d[g.get=f]=g,h===m.root.$?g.soul=f:(m.soul||m.has)&&(g.has=f),g}function o(f,h,m,d){var v=f._,g=0,p;return(p=v.soul||v.link)?h(p,d,v):v.jam?v.jam.push([h,d]):(v.jam=[[h,d]],f.get(function(_,y){if(!(l===_.put&&!v.root.opt.super&&(p=Object.keys(v.root.opt.peers).length)&&++g<=p)){y.rid(_);var M=(M=_.$)&&M._||{},E=0,w;for(p=v.jam,delete v.jam;w=p[E++];){var D=w[0];w=w[1],D&&D(M.link||M.soul||r.valid(_.put)||((_.put||{})._||{})["#"],w,_,y)}}},{out:{get:{".":!0}}}),f)}function a(f){var h=this.at||this.on;if(!f||h.soul||h.has)return this.off();if(f=(f=(f=f.$||f)._||f).id){h.map;var m;if((m=this.seen||(this.seen={}))[f])return!0;m[f]=!0}}var u={},c=r.valid,l})(e,"./get"),e(function(n){var r=e("./root");r.chain.put=function(d,v,g){var p=this,x=p._,_=x.root;g=g||{},g.root=x.root,g.run||(g.run=_.once),s(g,x.id),g.ack=g.ack||v,g.via=g.via||p,g.data=g.data||d,g.soul||(g.soul=x.soul||typeof v=="string"&&v);var y=g.state=g.state||r.state();return typeof d=="function"?(d(function(M){g.data=M,p.put(c,c,g)}),p):g.soul?(g.$=_.$.get(g.soul),g.todo=[{it:g.data,ref:g.$}],g.turn=g.turn||f,g.ran=g.ran||o,function M(){var E=g.todo,w=E.pop(),D=w.it;w.ref&&w.ref._.id;var b,A,F,T,S;if(s(g,w.ref),(T=w.todo)&&(A=T.pop(),D=D[A],T.length&&E.push(w)),A&&(E.path||(E.path=[])).push(A),!(b=h(D))&&!(S=r.is(D))){if(!Object.plain(D)){o.err(g,"Invalid data: "+u(D)+" at "+(g.via.back(function(U){U.get&&T.push(U.get)},T=[])||T.join("."))+"."+(E.path||[]).join("."));return}for(var R=g.seen||(g.seen=[]),C=R.length;C--;)if(D===(T=R[C]).it){b=D=T.link;break}}if(A&&b)w.node=m(w.node,A,y,D);else{let U=function(z,H){var ne=F.link["#"];H&&(H.off(),H.rid(z));var K=ne||z.soul||(T=(z.$$||z.$)._||"").soul||T.link||((T=T.put||"")._||"")["#"]||T["#"]||((T=z.put||"")&&z.$$?T["#"]:(T["="]||T[":"]||"")["#"]);if(!ne&&s(g,z.$),!K&&!w.link["#"]){(w.wait||(w.wait=[])).push(function(){U(z,H)});return}K||(K=[],(z.$$||z.$).back(function(W){if(T=W.soul||W.link)return K.push(T);K.push(W.get)}),K=K.reverse().join("/")),F.link["#"]=K,!S&&(((g.graph||(g.graph={}))[K]=F.node||(F.node={_:{}}))._["#"]=K),delete g.wait[k],F.wait&&setTimeout.each(F.wait,function(W){W&&W()}),g.ran(g)};var N=U;if(!g.seen){o.err(g,"Data at root of graph must be a node (an object).");return}g.seen.push(F={it:D,link:{},todo:S?[]:Object.keys(D).sort().reverse(),path:(E.path||[]).slice(),up:w}),w.node=m(w.node,A,y,F.link),!S&&F.todo.length&&E.push(F);var k=g.seen.length;(g.wait||(g.wait={}))[k]="",T=(F.ref=S?D:A?w.ref.get(A):w.ref)._,(T=D&&(D._||"")["#"]||T.soul||T.link)?U({soul:T}):F.ref.get(U,{run:g.run,v2020:1,out:{get:{".":" "}}})}if(!E.length)return g.ran(g);g.turn(M)}(),p):(a(g),p)};function s(d,v){if(v){v=(v._||"").id||v;var g=d.root.stun||(d.root.stun={on:r.on}),p={},x;d.stun||(d.stun=g.on("stun",function(){})),(x=g.on(""+v))&&x.the.last.next(p),!(p.run>=d.run)&&g.on(""+v,function(_){if(d.stun.end){this.off(),this.to.next(_);return}_.run=_.run||d.run,_.stun=_.stun||d.stun})}}function o(d){if(d.err){o.end(d.stun,d.root);return}if(!(d.todo.length||d.end||!Object.empty(d.wait))){d.end=1;var v=d.$.back(-1)._,g=v.root,p=v.ask(function(M){g.on("ack",M),M.err&&!M.lack&&r.log(M),++x>(d.acks||0)&&this.off(),d.ack&&d.ack(M,this)},d.opt),x=0,_=d.stun,y;(y=function(){_&&(o.end(_,g),setTimeout.each(Object.keys(_=_.add||""),function(M){(M=_[M])&&M()}))}).hatch=y,d.ack&&!d.ok&&(d.ok=d.acks||9),d.via._.on("out",{put:d.out=d.graph,ok:d.ok&&{"@":d.ok+1},opt:d.opt,"#":p,_:y})}}o.end=function(d,v){d.end=l,d.the.to===d&&d===d.the.last&&delete v.stun,d.off()},o.err=function(d,v){(d.ack||l).call(d,d.out={err:d.err=r.log(v)}),d.ran(d)};function a(d){var v=d.via._,g;d.via=d.via.back(function(p){if(p.soul||!p.get)return p.$;g=d.data,(d.data={})[p.get]=g}),(!d.via||!d.via._.soul)&&(d.via=v.root.$.get(((d.data||"")._||"")["#"]||v.$.back("opt.uuid")())),d.via.put(d.data,d.ack,d)}function u(d,v){return d&&(v=d.constructor)&&v.name||typeof d}var c,l=function(){},f=setTimeout.turn,h=r.valid,m=r.state.ify})(e,"./put"),e(function(n){var r=e("./root");e("./chain"),e("./back"),e("./put"),e("./get"),n.exports=r})(e,"./index"),e(function(n){var r=e("./index");r.chain.on=function(a,u,c,l){var f=this,h=f._;h.root;var m;if(typeof a=="string")return u?(m=h.on(a,u,c||h,l),c&&c.$&&(c.subs||(c.subs=[])).push(m),f):h.on(a);var d=u;return(d=d===!0?{change:!0}:d||{}).not=1,d.on=1,f.get(a,d),f},r.chain.once=function(a,u){if(u=u||{},!a)return s(this);var c=this,l=c._,f=l.root;l.put;var h=String.random(7),m;return c.get(function(d,v,g,p){var x=this,_=x._,y=_.one||(_.one={});if(p.stun||y[h]==="")return;if((m=r.valid(d))===!0){M();return}if(typeof m=="string")return;clearTimeout((l.one||"")[h]),clearTimeout(y[h]),y[h]=setTimeout(M,u.wait||99);function M(E){if(!_.has&&!_.soul&&(_={put:d,get:v}),o===(m=_.put)&&(m=((g.$$||"")._||"").put),typeof r.valid(m)=="string"&&(m=f.$.get(m)._.put,m===o&&!E)){y[h]=setTimeout(function(){M(1)},u.wait||99);return}p.stun||y[h]!==""&&(y[h]="",(l.soul||l.has)&&p.off(),a.call(x,m,_.get),clearTimeout(y[h]))}},{on:1}),c};function s(a,u,c){return r.log.once("valonce","Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),(c=a.chain())._.nix=a.once(function(l,f){c._.on("in",this._)}),c._.lex=a._.lex,c}r.chain.off=function(){var a=this,u=a._,c,l=u.back;if(l)return u.ack=0,(c=l.next)&&c[u.get]&&delete c[u.get],(c=l.any)&&(delete l.any,l.any={}),(c=l.ask)&&delete c[u.get],(c=l.put)&&delete c[u.get],(c=u.soul)&&delete l.root.graph[c],(c=u.map)&&Object.keys(c).forEach(function(f,h){h=c[f],h.link&&l.root.$.get(h.link).off()}),(c=u.next)&&Object.keys(c).forEach(function(f,h){h=c[f],h.$.off()}),u.on("off",{}),a};var o})(e,"./on"),e(function(n){var r=e("./index"),s=r.chain.get.next;r.chain.get.next=function(c,l){var f;return Object.plain(l)?(f=((f=l["#"])||"")["="]||f)?c.get(f):((f=c.chain()._).lex=l,c.on("in",function(h){String.match(h.get||(h.put||"")["."],l["."]||l["#"]||l)&&f.on("in",h),this.to.next(h)}),f.$):(s||a)(c,l)},r.chain.map=function(c,l,f){var h=this,m=h._,d,v;return Object.plain(c)&&(d=c["."]?c:{".":c},c=u),c?(r.log.once("mapfn","Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),v=h.chain(),h.map().on(function(g,p,x,_){var y=(c||a).call(this,g,p,x,_);if(u!==y){if(g===y)return v._.on("in",x);if(r.is(y))return v._.on("in",y._);var M={};Object.keys(x.put).forEach(function(E){M[E]=x.put[E]},M),M["="]=y,v._.on("in",{get:p,put:M})}}),v):((v=m.each)||((m.each=v=h.chain())._.lex=d||v._.lex||m.lex,v._.nix=h.back("nix"),h.on("in",o,v._)),v)};function o(c){this.to.next(c);var l=this.as,f=c.$,h=f._,m=c.put,d;!h.soul&&!c.$$||(d=l.lex)&&!String.match(c.get||(m||"")["."],d["."]||d["#"]||d)||r.on.link(c,l)}var a=function(){},u})(e,"./map"),e(function(n){var r=e("./index");r.chain.set=function(s,o,a){var u=this,c=u.back(-1),l,f;return o=o||function(){},a=a||{},a.item=a.item||s,(l=((s||"")._||"")["#"])&&((s={})["#"]=l),typeof(f=r.valid(s))=="string"?u.get(l=f).put(s,o,a):r.is(s)?(u.put(function(h){s.get(function(m,d,v){if(!m)return o.call(u,{err:r.log('Only a node can be linked! Not "'+v.put+'"!')});(f={})[m]={"#":m},h(f)},!0)}),s):(Object.plain(s)&&(s=c.get(l=u.back("opt.uuid")()).put(s)),u.get(l||c.back("opt.uuid")(7)).put(s,o,a))}})(e,"./set"),e(function(n){e("./shim");var r=function(){},s=JSON.parseAsync||function(c,l,f){var h,m=+new Date;try{l(h,JSON.parse(c,f),o.sucks(+new Date-m))}catch(d){l(d)}},o=JSON.stringifyAsync||function(c,l,f,h){var m,d=+new Date;try{l(m,JSON.stringify(c,f,h),o.sucks(+new Date-d))}catch(v){l(v)}};o.sucks=function(c){c>99&&(console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."),o.sucks=r)};function a(c){var l=function(){},f=c.opt||{};f.log=f.log||console.log,f.gap=f.gap||f.wait||0,f.max=f.max||(f.memory?f.memory*999*999:3e8)*.3,f.pack=f.pack||f.max*.01*.01,f.puff=f.puff||9;var h=setTimeout.turn||setTimeout,m=c.dup,d=m.check,v=m.track,g=l.hear=function(_,y){if(_){if(f.max<=_.length)return l.say({dam:"!",err:"Message too big!"},y);l===this&&(g.d+=_.length||0,++g.c);var M=y.SH=+new Date,E=_[0],w;if(E==="["){s(_,function(D,b){if(D||!b)return l.say({dam:"!",err:"DAM JSON parse error."},y);console.STAT&&console.STAT(+new Date,b.length,"# on hear batch");var A=f.puff;(function F(){for(var T=+new Date,S=0,R;S<A&&(R=b[S++]);)l.hear(R,y);b=b.slice(S),console.STAT&&console.STAT(T,+new Date-T,"hear loop"),p(y),b.length&&h(F,0)})()}),_="";return}if(E==="{"||(_["#"]||Object.plain(_))&&(w=_)){if(w)return g.one(w,y,M);s(_,function(D,b){if(D||!b)return l.say({dam:"!",err:"DAM JSON parse error."},y);g.one(b,y,M)});return}}};g.one=function(_,y,F){var E,w,D,b,A;if(_.DBG&&(_.DBG=A={DBG:_.DBG}),A&&(A.h=F),A&&(A.hp=+new Date),(E=_["#"])||(E=_["#"]=String.random(9)),!(D=d(E))&&(w=_["##"],!(w&&(D=_["@"]||_.get&&E)&&m.check(b=D+w)))){if((_._=function(){}).via=l.leap=y,(D=_["><"])&&typeof D=="string"&&D.slice(0,99).split(",").forEach(function(T){this[T]=1},_._.yo={}),D=_.dam){(D=l.hear[D])&&D(_,y,c),v(E);return}(D=_.ok)&&(_._.near=D["/"]);var F=+new Date;A&&(A.is=F),y.SI=E,v.ed=function(T){E===T&&(v.ed=0,(T=m.s[E])&&(T.via=y,_.get&&(T.it=_)))},c.on("in",l.last=_),A&&(A.hd=+new Date),console.STAT&&console.STAT(F,+new Date-F,_.get?"msg get":_.put?"msg put":"msg"),v(E),b&&v(b),l.leap=l.last=null}},g.c=g.d=0,function(){var _=0,y;l.hash=function(w,D){var b,A,F,T=+new Date;o(w.put,function S(R,C){var k=(A||(A=F=C||"")).slice(0,32768);if(b=String.hash(k,b),A=A.slice(32768),A){h(S,0);return}console.STAT&&console.STAT(T,+new Date-T,"say json+hash"),w._.$put=F,w["##"]=b,l.say(w,D),delete w._.$put},M)};function M(w,D){var b;return D instanceof Object?(Object.keys(D).sort().forEach(E,{to:b={},on:D}),b):D}function E(w){this.to[w]=this.on[w]}l.say=function(w,D){var b;if((b=this)&&(b=b.to)&&b.next&&b.next(w),!w)return!1;var A,F,T,S=w["@"],R=w._||(w._=function(){}),C=w.DBG,k=+new Date;if(R.y=R.y||k,D||C&&(C.y=k),(A=w["#"])||(A=w["#"]=String.random(9)),!y&&v(A),!(F=w["##"])&&u!==w.put&&!R.via&&S){l.hash(w,D);return}if(!D&&S&&(D=(b=m.s[S])&&(b.via||(b=b.it)&&(b=b._)&&b.via)||(b=l.last)&&S===b["#"]&&l.leap),!D&&S)return m.s[S]?void 0:(console.STAT&&console.STAT(+new Date,++_,"total no peer to ack to"),!1);if(S&&!w.put&&!F&&((m.s[S]||"").it||"")["##"])return!1;if(!D&&l.way)return l.way(w);if(C&&(C.yh=+new Date),!(T=R.raw)){l.raw(w,D);return}if(C&&(C.yr=+new Date),!D||!D.id){if(!Object.plain(D||f.peers))return!1;var k=+new Date;f.puff;var N=f.peers,U=Object.keys(D||f.peers||{});console.STAT&&console.STAT(k,+new Date-k,"peer keys"),function ne(){var K=+new Date;y=1;var W=R.raw;R.raw=T;for(var q=0,ie;q<9&&(ie=(U||"")[q++]);)(ie=N[ie]||(D||"")[ie])&&l.say(w,ie);R.raw=W,y=0,U=U.slice(q),console.STAT&&console.STAT(K,+new Date-K,"say loop"),U.length&&(h(ne,0),S&&v(S))}();return}if(!D.wire&&l.wire&&l.wire(D),A!==D.last){if(D.last=A,D===R.via||(b=R.yo)&&(b[D.url]||b[D.pid]||b[D.id]))return!1;if(console.STAT&&console.STAT(k,((C||R).yp=+new Date)-(R.y||k),"say prep"),!y&&S&&v(S),D.batch){if(D.tail=(b=D.tail||0)+T.length,D.tail<=f.pack){D.batch+=(b?",":"")+T;return}p(D)}D.batch="[";var z=+new Date;setTimeout(function(){console.STAT&&console.STAT(z,+new Date-z,"0ms TO"),p(D)},f.gap),x(T,D),console.STAT&&S===D.SI&&console.STAT(k,+new Date-D.SH,"say ack")}},l.say.c=l.say.d=0,l.raw=function(w,D){if(!w)return"";var b=w._||{},A,F;if(F=b.raw)return F;if(typeof w=="string")return w;var T=w["##"],S=w["@"];if(T&&S){if(!b.via&&d(S+T))return!1;if(F=(m.s[S]||"").it){if(T===F["##"])return!1;F["##"]||(F["##"]=T)}}if(!w.dam&&!w["@"]){var R=0,C=[];F=f.peers;for(var k in F){var N=F[k];if(C.push(N.url||N.pid||N.id),++R>6)break}R>1&&(w["><"]=C.join())}if(w.put&&(F=w.ok)&&(w.ok={"@":(F["@"]||1)-1,"/":F["/"]==w._.near?l.near:F["/"]}),A=b.$put){F={},Object.keys(w).forEach(function(z){F[z]=w[z]}),F.put=":])([:",o(F,function(z,H){if(!z){var ne=+new Date;F=H.indexOf('"put":":])([:"'),U(u,H=H.slice(0,F+6)+A+H.slice(F+14)),console.STAT&&console.STAT(ne,+new Date-ne,"say slice")}});return}o(w,U);function U(z,H){z||(b.raw=H,l.say(w,D))}}}();function p(_){var y=_.batch,M=typeof y=="string";if(M&&(y+="]"),_.batch=_.tail=null,!!y&&!(M?3>y.length:!y.length)){if(!M)try{y=y.length===1?y[0]:JSON.stringify(y)}catch(E){return f.log("DAM JSON stringify error",E)}y&&x(y,_)}}function x(_,y){try{var M=y.wire;y.say?y.say(_):M.send&&M.send(_),l.say.d+=_.length||0,++l.say.c}catch{(y.queue=y.queue||[]).push(_)}}return l.near=0,l.hi=function(_){var y=_.wire,M;if(!y){l.wire(_.length&&{url:_,id:_}||_);return}_.id?f.peers[_.url||_.id]=_:(M=_.id=_.id||_.url||String.random(9),l.say({dam:"?",pid:c.opt.pid},f.peers[M]=_),delete m.s[_.last]),_.met||(l.near++,_.met=+new Date,c.on("hi",_)),M=_.queue,_.queue=[],setTimeout.each(M||[],function(E){x(E,_)},0,9)},l.bye=function(_){_.met&&--l.near,delete _.met,c.on("bye",_);var y=+new Date;y=y-(_.met||y),l.bye.time=((l.bye.time||y)+y)/2},l.hear["!"]=function(_,y){f.log("Error:",_.err)},l.hear["?"]=function(_,y){_.pid&&(y.pid||(y.pid=_.pid),_["@"])||(l.say({dam:"?",pid:f.pid,"@":_["#"]},y),delete m.s[y.last])},l.hear.mob=function(_,y){if(_.peers){var M=Object.keys(_.peers),E=M[Math.random()*M.length>>0];E&&(l.bye(y),l.hi(E))}},c.on("create",function(_){_.opt.pid=_.opt.pid||String.random(9),this.to.next(_),_.on("out",l.say)}),c.on("bye",function(_,y){_=f.peers[_.id||_]||_,this.to.next(_),_.bye?_.bye():(y=_.wire)&&y.close&&y.close(),delete f.peers[_.id],_.wire=null}),c.on("bye",function(_,y){this.to.next(_),(y=console.STAT)&&(y.peers=l.near),(y=_.url)&&setTimeout(function(){},f.lack||9e3)}),c.on("hi",function(_,y){if(this.to.next(_),(y=console.STAT)&&(y.peers=l.near),!f.super){var M=Object.keys(c.next||"");M.length>9999&&!console.SUBS&&console.log(console.SUBS="Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."),setTimeout.each(M,function(E){var w=c.next[E];if(f.super||(w.ask||"")[""]){l.say({get:{"#":E}},_);return}setTimeout.each(Object.keys(w.ask||""),function(D){D&&l.say({"##":String.hash((c.graph[E]||"")[D]),get:{"#":E,".":D}},_)})})}}),l}var u;try{n.exports=a}catch{}})(e,"./mesh"),e(function(n){var r=e("./index");r.Mesh=e("./mesh"),r.on("opt",function(o){if(this.to.next(o),o.once)return;var a=o.opt;if(a.WebSocket===!1)return;var u=r.window||{},c=a.WebSocket||u.WebSocket||u.webkitWebSocket||u.mozWebSocket;if(!c)return;a.WebSocket=c;var l=a.mesh=a.mesh||r.Mesh(o);l.wire||a.wire,l.wire=a.wire=f;function f(v){try{if(!v||!v.url)return p&&p(v);var g=v.url.replace(/^http/,"ws"),p=v.wire=new a.WebSocket(g);return p.onclose=function(){m(v),a.mesh.bye(v)},p.onerror=function(x){m(v)},p.onopen=function(){a.mesh.hi(v)},p.onmessage=function(x){x&&a.mesh.hear(x.data||x,v)},p}catch{a.mesh.bye(v)}}setTimeout(function(){!a.super&&o.on("out",{dam:"hi"})},1);var h=2*999;function m(v){clearTimeout(v.defer),a.peers[v.url]&&(d&&v.retry<=0||(v.retry=(v.retry||a.retry+1||60)-(-v.tried+(v.tried=+new Date)<h*4?1:0),v.defer=setTimeout(function g(){if(d&&d.hidden)return setTimeout(g,h);f(v)},h)))}var d=""+s!=typeof document&&document});var s})(e,"./websocket"),e(function(n){if(!(typeof Gun>"u")){var r=function(){},s;try{s=(Gun.window||r).localStorage}catch{}s||(Gun.log("Warning: No localStorage exists to persist data to!"),s={setItem:function(a,u){this[a]=u},removeItem:function(a){delete this[a]},getItem:function(a){return this[a]}});var o=JSON.stringifyAsync||function(a,u,c,l){var f;try{u(f,JSON.stringify(a,c,l))}catch(h){u(h)}};Gun.on("create",function a(u){this.to.next(u);var c=u.opt;u.graph;var l=[],f,h,m,d;if(c.localStorage===!1)return;c.prefix=c.file||"gun/";try{f=a[c.prefix]=a[c.prefix]||JSON.parse(m=s.getItem(c.prefix))||{}}catch{f=a[c.prefix]={}}m=(m||"").length,u.on("get",function(g){this.to.next(g);var p=g.get,x,_,y,M;!p||!(x=p["#"])||(_=f[x]||M,_&&(y=p["."])&&!Object.plain(y)&&(_=Gun.state.ify({},y,Gun.state.is(_,y),_[y],x)),Gun.on.get.ack(g,_))}),u.on("put",function(g){this.to.next(g);var p=g.put,x=p["#"],_=p["."],y=g["#"],M=g.ok||"";if(f[x]=Gun.state.ify(f[x],_,p[">"],p[":"],x),d&&m>4999880){u.on("in",{"@":y,err:"localStorage max!"});return}!g["@"]&&(!g._.via||Math.random()<M["@"]/M["/"])&&l.push(y),!h&&(h=setTimeout(v,9+m/333))});function v(){if(!l.length&&((setTimeout.turn||"").s||"").length){setTimeout(v,99);return}var g=l;clearTimeout(h),h=!1,l=[],o(f,function(p,x){try{!p&&s.setItem(c.prefix,x)}catch(_){p=d=_||"localStorage failure"}p&&(Gun.log(p+" Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"),u.on("localStorage:error",{err:p,get:c.prefix,put:f})),m=x.length,setTimeout.each(g,function(_){u.on("in",{"@":_,err:p,ok:0})},0,99)})}})}})(e,"./localStorage")})(),function(){var F;if(""+F!=typeof Gun){var e=function(T){console.warn("Warning! Deprecated internal utility will break in next version:",T)},t=Gun;t.fn=t.fn||{is:function(T){return e("fn"),!!T&&typeof T=="function"}},t.bi=t.bi||{is:function(T){return e("bi"),T instanceof Boolean||typeof T=="boolean"}},t.num=t.num||{is:function(T){return e("num"),!n(T)&&(T-parseFloat(T)+1>=0||T===1/0||T===-1/0)}},t.text=t.text||{is:function(T){return e("text"),typeof T=="string"}},t.text.ify=t.text.ify||function(T){return e("text.ify"),t.text.is(T)?T:typeof JSON<"u"?JSON.stringify(T):T&&T.toString?T.toString():T},t.text.random=t.text.random||function(T,S){e("text.random");var R="";for(T=T||24,S=S||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";T>0;)R+=S.charAt(Math.floor(Math.random()*S.length)),T--;return R},t.text.match=t.text.match||function(T,S){var R,C;return e("text.match"),typeof T!="string"?!1:(typeof S=="string"&&(S={"=":S}),S=S||{},R=S["="]||S["*"]||S[">"]||S["<"],T===R?!0:C!==S["="]?!1:(R=S["*"]||S[">"]||S["<"],T.slice(0,(R||"").length)===R?!0:C!==S["*"]?!1:C!==S[">"]&&C!==S["<"]?T>=S[">"]&&T<=S["<"]:C!==S[">"]&&T>=S[">"]||C!==S["<"]&&T<=S["<"]))},t.text.hash=t.text.hash||function(T,S){if(e("text.hash"),typeof T=="string"){if(S=S||0,!T.length)return S;for(var R=0,C=T.length,k;R<C;++R)k=T.charCodeAt(R),S=(S<<5)-S+k,S|=0;return S}},t.list=t.list||{is:function(T){return e("list"),T instanceof Array}},t.list.slit=t.list.slit||Array.prototype.slice,t.list.sort=t.list.sort||function(T){return e("list.sort"),function(S,R){return!S||!R?0:(S=S[T],R=R[T],S<R?-1:S>R?1:0)}},t.list.map=t.list.map||function(T,S,R){return e("list.map"),b(T,S,R)},t.list.index=1,t.obj=t.boj||{is:function(T){return e("obj"),T?T instanceof Object&&T.constructor===Object||Object.prototype.toString.call(T).match(/^\[object (\w+)\]$/)[1]==="Object":!1}},t.obj.put=t.obj.put||function(T,S,R){return e("obj.put"),(T||{})[S]=R,T},t.obj.has=t.obj.has||function(T,S){return e("obj.has"),T&&Object.prototype.hasOwnProperty.call(T,S)},t.obj.del=t.obj.del||function(T,S){if(e("obj.del"),!!T)return T[S]=null,delete T[S],T},t.obj.as=t.obj.as||function(T,S,R,C){return e("obj.as"),T[S]=T[S]||(C===R?{}:R)},t.obj.ify=t.obj.ify||function(T){if(e("obj.ify"),y(T))return T;try{T=JSON.parse(T)}catch{T={}}return T},function(){var T;function S(R,C){E(this,C)&&T!==this[C]||(this[C]=R)}t.obj.to=t.obj.to||function(R,C){return e("obj.to"),C=C||{},b(R,S,C),C}}(),t.obj.copy=t.obj.copy||function(T){return e("obj.copy"),T&&JSON.parse(JSON.stringify(T))},function(){function T(S,R){var C=this.n,k;if(!(C&&(R===C||y(C)&&E(C,R)))&&k!==R)return!0}t.obj.empty=t.obj.empty||function(S,R){return e("obj.empty"),S?!b(S,T,{n:R}):!0}}(),function(){function T(C,k){if(arguments.length===2){T.r=T.r||{},T.r[C]=k;return}T.r=T.r||[],T.r.push(C)}var S=Object.keys,R;Object.keys=Object.keys||function(C){return R(C,function(k,N,U){U(N)})},t.obj.map=R=t.obj.map||function(C,k,N){e("obj.map");var U,z=0,H,ne,K,W,q=typeof k=="function";if(T.r=U,S&&y(C)&&(K=S(C),W=!0),N=N||{},n(C)||K)for(H=(K||C).length;z<H;z++){var ie=z+t.list.index;if(q){if(ne=W?k.call(N,C[K[z]],K[z],T):k.call(N,C[z],ie,T),ne!==U)return ne}else if(k===C[W?K[z]:z])return K?K[z]:ie}else for(z in C)if(q){if(E(C,z)&&(ne=N?k.call(N,C[z],z,T):k(C[z],z,T),ne!==U))return ne}else if(k===C[z])return z;return q?T.r:t.list.index?0:-1}}(),t.time=t.time||{},t.time.is=t.time.is||function(T){return e("time"),T?T instanceof Date:+new Date().getTime()};var x=t.fn.is,n=t.list.is,_=t.obj,y=_.is,E=_.has,b=_.map,r={};r.is=function(T){return e("val.is"),T===F?!1:T===null?!0:T===1/0?!1:a(T)||o(T)||d(T)?!0:r.link.is(T)||!1},r.link=r.rel={_:"#"},function(){r.link.is=function(S){if(e("val.link.is"),S&&S[s]&&!S._&&y(S)){var R={};if(b(S,T,R),R.id)return R.id}return!1};function T(S,R){var C=this;if(C.id)return C.id=!1;if(R==s&&a(S))C.id=S;else return C.id=!1}}(),r.link.ify=function(T){return e("val.link.ify"),D({},s,T)},t.obj.has._=".";var s=r.link._,F,o=t.bi.is,d=t.num.is,a=t.text.is,_=t.obj,y=_.is,D=_.put,b=_.map;t.val=t.val||r;var u={_:"_"};u.soul=function(T,S){return e("node.soul"),T&&T._&&T._[S||f]},u.soul.ify=function(T,S){return e("node.soul.ify"),S=typeof S=="string"?{soul:S}:S||{},T=T||{},T._=T._||{},T._[f]=S.soul||T._[f]||l(),T},u.soul._=r.link._,function(){u.is=function(S,R,C){e("node.is");var k;return y(S)&&(k=u.soul(S))?!b(S,T,{as:C,cb:R,s:k,n:S}):!1};function T(S,R){if(R!==u._){if(!r.is(S))return!0;this.cb&&this.cb.call(this.as,S,R,this.n,this.s)}}}(),function(){u.ify=function(S,R,C){return e("node.ify"),R?typeof R=="string"?R={soul:R}:typeof R=="function"&&(R={map:R}):R={},R.map&&(R.node=R.map.call(C,S,F,R.node||{})),(R.node=u.soul.ify(R.node||{},R))&&b(S,T,{o:R,as:C}),R.node};function T(S,R){var C=this.o,k,N;if(C.map){k=C.map.call(this.as,S,""+R,C.node),N===k?M(C.node,R):C.node&&(C.node[R]=k);return}r.is(S)&&(C.node[R]=S)}}();var _=t.obj,y=_.is,M=_.del,b=_.map,c=t.text,l=c.random,f=u.soul._,F;t.node=t.node||u;var h=t.state;h.lex=function(){return e("state.lex"),h().toString(36).replace(".","")},h.to=function(T,S,R){e("state.to");var C=(T||{})[S];return y(C)&&(C=A(C)),h.ify(R,S,h.is(T,S),C,u.soul(T))},function(){h.map=function(S,R,C){e("state.map");var k,N=y(N=S||R)?N:null;return S=x(S=S||R)?S:null,N&&!S?(R=d(R)?R:h(),N[g]=N[g]||{},b(N,T,{o:N,s:R}),N):(C=C||y(R)?R:k,R=d(R)?R:h(),function(U,z,H,ne){if(!S)return T.call({o:H,s:R},U,z),U;S.call(C||this||{},U,z,H,ne),!(E(H,z)&&k===H[z])&&T.call({o:H,s:R},U,z)})};function T(S,R){g!==R&&h.ify(this.o,R,this.s)}}();var _=t.obj;_.as;var E=_.has,y=_.is,b=_.map,A=_.copy,m=t.num,d=m.is,v=t.fn,x=v.is,g=u._,F,p={};(function(){p.is=function(R,C,k,N){return e("graph.is"),!R||!y(R)||w(R)?!1:!b(R,T,{cb:C,fn:k,as:N})};function T(R,C){if(!R||C!==u.soul(R)||!u.is(R,this.fn,this.as))return!0;this.cb&&(S.n=R,S.as=this.as,this.cb.call(S.as,R,C,S))}function S(R){R&&u.is(S.n,R,S.as)}})(),function(){p.ify=function(N,U,z){e("graph.ify");var H={path:[],obj:N};return U?typeof U=="string"?U={soul:U}:typeof U=="function"&&(U.map=U):U={},typeof z=="string"&&(U.soul=U.soul||z,z=F),U.soul&&(H.link=r.link.ify(U.soul)),U.shell=(z||{}).shell,U.graph=U.graph||{},U.seen=U.seen||[],U.as=U.as||z,T(U,H),U.root=H.node,U.graph};function T(N,U){var z;return(z=k(N,U))?z:(U.env=N,U.soul=R,u.ify(U.obj,S,U)&&(U.link=U.link||r.link.ify(u.soul(U.node)),U.obj!==N.shell&&(N.graph[r.link.is(U.link)]=U.node)),U)}function S(N,U,z){var H=this,ne=H.env,K,W;if(u._===U&&E(N,r.link._))return z._;if(K=C(N,U,z,H,ne)){if(U||(H.node=H.node||z||{},E(N,u._)&&u.soul(N)&&(H.node._=A(N._)),H.node=u.soul.ify(H.node,r.link.is(H.link)),H.link=H.link||r.link.ify(u.soul(H.node))),(W=ne.map)&&(W.call(ne.as||{},N,U,z,H),E(z,U))){if(N=z[U],F===N){M(z,U);return}if(!(K=C(N,U,z,H,ne)))return}if(!U)return H.node;if(K===!0)return N;if(W=T(ne,{obj:N,path:H.path.concat(U)}),!!W.node)return W.link}}function R(N){var U=this,z=r.link.is(U.link),H=U.env.graph;U.link=U.link||r.link.ify(N),U.link[r.link._]=N,U.node&&U.node[u._]&&(U.node[u._][r.link._]=N),E(H,z)&&(H[N]=H[z],M(H,z))}function C(N,U,z,H,ne){var K;if(r.is(N))return!0;if(y(N))return 1;if(K=ne.invalid)return N=K.call(ne.as||{},N,U,z),C(N,U,z,H,ne);ne.err="Invalid value at '"+H.path.concat(U).join(".")+"'!",t.list.is(N)&&(ne.err+=" Use `.set(item)` instead of an Array.")}function k(N,U){for(var z=N.seen,H=z.length,ne;H--;)if(ne=z[H],U.obj===ne.obj)return ne;z.push(U)}}(),p.node=function(T){e("graph.node");var S=u.soul(T);if(S)return D({},S,T)},function(){p.to=function(S,R,C){if(e("graph.to"),!!S){var k={};return C=C||{seen:{}},b(S[R],T,{obj:k,graph:S,opt:C}),k}};function T(S,R){var C,k;if(u._===R){if(w(S,r.link._))return;this.obj[R]=A(S);return}if(!(C=r.link.is(S))){this.obj[R]=S;return}if(k=this.opt.seen[C]){this.obj[R]=k;return}this.obj[R]=this.opt.seen[C]=p.to(this.graph,C,this.opt)}}();var x=t.fn.is,_=t.obj,y=_.is,M=_.del,E=_.has,w=_.empty,D=_.put,b=_.map,A=_.copy,F;t.graph=t.graph||p}}()})(vo);var pu=vo.exports,_h=pu;const vh=gh(_h);var xo={exports:{}};xo.exports;(function(i){(function(){function e(n,r){return r?du(n):n.slice?e[s(n)]:function(o,a){n(o={exports:{}}),e[s(a)]=o.exports};function s(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){typeof self<"u"&&(n.window=self),typeof window<"u"&&(n.window=window);var r=n.window||n,s,o=r.SEA||{};(o.window=n.window)&&(o.window.SEA=o);try{s+""!=typeof t&&(t.exports=o)}catch{}n.exports=o})(e,"./root"),e(function(n){var r=e("./root");try{r.window&&location.protocol.indexOf("s")<0&&location.host.indexOf("localhost")<0&&!/^127\.\d+\.\d+\.\d+$/.test(location.hostname)&&location.protocol.indexOf("file:")<0&&(console.warn("HTTPS needed for WebCrypto in SEA, redirecting..."),location.protocol="https:")}catch{}})(e,"./https"),e(function(n){var r;if(r+""==typeof btoa){if(r+""==typeof Buffer)try{Ys.Buffer=e("buffer",1).Buffer}catch{console.log("Please `npm install buffer` or add it to your package.json !")}Ys.btoa=function(s){return Buffer.from(s,"binary").toString("base64")},Ys.atob=function(s){return Buffer.from(s,"base64").toString("binary")}}})(e,"./base64"),e(function(n){e("./base64");function r(){}Object.assign(r,{from:Array.from}),r.prototype=Object.create(Array.prototype),r.prototype.toString=function(s,o,a){s=s||"utf8",o=o||0;const u=this.length;if(s==="hex"){const c=new Uint8Array(this);return[...Array((a&&a+1||u)-o).keys()].map(l=>c[l+o].toString(16).padStart(2,"0")).join("")}if(s==="utf8")return Array.from({length:(a||u)-o},(c,l)=>String.fromCharCode(this[l+o])).join("");if(s==="base64")return btoa(this)},n.exports=r})(e,"./array"),e(function(n){e("./base64");var r=e("./array");function s(...o){return console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()"),s.from(...o)}s.prototype=Object.create(Array.prototype),Object.assign(s,{from(){if(!Object.keys(arguments).length||arguments[0]==null)throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");const o=arguments[0];let a;if(typeof o=="string"){const c=arguments[1]||"utf8";if(c==="hex"){const l=o.match(/([\da-fA-F]{2})/g).map(f=>parseInt(f,16));if(!l||!l.length)throw new TypeError("Invalid first argument for type 'hex'.");a=r.from(l)}else if(c==="utf8"||c==="binary"){const l=o.length,f=new Uint16Array(l);Array.from({length:l},(h,m)=>f[m]=o.charCodeAt(m)),a=r.from(f)}else if(c==="base64"){const l=atob(o),f=l.length,h=new Uint8Array(f);Array.from({length:f},(m,d)=>h[d]=l.charCodeAt(d)),a=r.from(h)}else c==="binary"?a=r.from(o):console.info("SafeBuffer.from unknown encoding: "+c);return a}if(o.byteLength,o.byteLength?o.byteLength:o.length){let c;return o instanceof ArrayBuffer&&(c=new Uint8Array(o)),r.from(c||o)}},alloc(o,a=0){return r.from(new Uint8Array(Array.from({length:o},()=>a)))},allocUnsafe(o){return r.from(new Uint8Array(Array.from({length:o})))},concat(o){if(!Array.isArray(o))throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");return r.from(o.reduce((a,u)=>a.concat(Array.from(u)),[]))}}),s.prototype.from=s.from,s.prototype.toString=r.prototype.toString,n.exports=s})(e,"./buffer"),e(function(n){const r=e("./root"),s={Buffer:e("./buffer")};var o={},a;if(JSON.parseAsync=JSON.parseAsync||function(c,l,f){var h;try{l(h,JSON.parse(c,f))}catch(m){l(m)}},JSON.stringifyAsync=JSON.stringifyAsync||function(c,l,f,h){var m;try{l(m,JSON.stringify(c,f,h))}catch(d){l(d)}},s.parse=function(c,l){return new Promise(function(f,h){JSON.parseAsync(c,function(m,d){m?h(m):f(d)},l)})},s.stringify=function(c,l,f){return new Promise(function(h,m){JSON.stringifyAsync(c,function(d,v){d?m(d):h(v)},l,f)})},r.window&&(s.crypto=r.window.crypto||r.window.msCrypto,s.subtle=(s.crypto||o).subtle||(s.crypto||o).webkitSubtle,s.TextEncoder=r.window.TextEncoder,s.TextDecoder=r.window.TextDecoder,s.random=c=>s.Buffer.from(s.crypto.getRandomValues(new Uint8Array(s.Buffer.alloc(c))))),!s.TextDecoder){const{TextEncoder:c,TextDecoder:l}=e((a+""==typeof t?".":"")+"./lib/text-encoding",1);s.TextDecoder=l,s.TextEncoder=c}if(!s.crypto)try{var u=e("crypto",1);Object.assign(s,{crypto:u,random:l=>s.Buffer.from(u.randomBytes(l))});const{Crypto:c}=e("@peculiar/webcrypto",1);s.ossl=s.subtle=new c({directory:"ossl"}).subtle}catch{console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !")}n.exports=s})(e,"./shim"),e(function(n){var r=e("./root"),s=e("./shim"),o={};o.pbkdf2={hash:{name:"SHA-256"},iter:1e5,ks:64},o.ecdsa={pair:{name:"ECDSA",namedCurve:"P-256"},sign:{name:"ECDSA",hash:{name:"SHA-256"}}},o.ecdh={name:"ECDH",namedCurve:"P-256"},o.jwk=function(a,u){a=a.split(".");var c=a[0],l=a[1],f={kty:"EC",crv:"P-256",x:c,y:l,ext:!0};return f.key_ops=u?["sign"]:["verify"],u&&(f.d=u),f},o.keyToJwk=function(a){return{kty:"oct",k:a.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""),ext:!1,alg:"A256GCM"}},o.recall={validity:12*60*60,hook:function(a){return a}},o.check=function(a){return typeof a=="string"&&a.slice(0,4)==="SEA{"},o.parse=async function(u){try{var c=typeof u=="string";return c&&u.slice(0,4)==="SEA{"&&(u=u.slice(3)),c?await s.parse(u):u}catch{}return u},r.opt=o,n.exports=o})(e,"./settings"),e(function(n){var r=e("./shim");n.exports=async function(s,o){var a=typeof s=="string"?s:await r.stringify(s),u=await r.subtle.digest({name:o||"SHA-256"},new r.TextEncoder().encode(a));return r.Buffer.from(u)}})(e,"./sha256"),e(function(n){const r=e("./shim"),s=r.subtle,o=r.ossl?r.ossl:s,a=u=>o.digest({name:"SHA-1"},new ArrayBuffer(u));n.exports=a})(e,"./sha1"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.work=r.work||(async(c,l,f,h)=>{try{var m=(l||{}).epub||l;if(h=h||{},m instanceof Function&&(f=m,m=u),c=typeof c=="string"?c:await s.stringify(c),(h.name||"").toLowerCase().slice(0,3)==="sha"){var d=s.Buffer.from(await a(c,h.name),"binary").toString(h.encode||"base64");if(f)try{f(d)}catch(x){console.log(x)}return d}m=m||s.random(9);var v=await(s.ossl||s.subtle).importKey("raw",new s.TextEncoder().encode(c),{name:h.name||"PBKDF2"},!1,["deriveBits"]),g=await(s.ossl||s.subtle).deriveBits({name:h.name||"PBKDF2",iterations:h.iterations||o.pbkdf2.iter,salt:new s.TextEncoder().encode(h.salt||m),hash:h.hash||o.pbkdf2.hash},v,h.length||o.pbkdf2.ks*8);c=s.random(c.length);var p=s.Buffer.from(g,"binary").toString(h.encode||"base64");if(f)try{f(p)}catch(x){console.log(x)}return p}catch(x){if(console.log(x),r.err=x,r.throw)throw x;f&&f();return}}),n.exports=r.work})(e,"./work"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings"),r.name=r.name||(async(o,a)=>{try{if(o)try{o()}catch(u){console.log(u)}return}catch(u){if(console.log(u),r.err=u,r.throw)throw u;o&&o();return}}),r.pair=r.pair||(async(o,a)=>{try{var u=s.ossl||s.subtle,c=await s.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"]).then(async h=>{var m={};m.priv=(await s.subtle.exportKey("jwk",h.privateKey)).d;var d=await s.subtle.exportKey("jwk",h.publicKey);return m.pub=d.x+"."+d.y,m});try{var l=await u.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"]).then(async h=>{var m={};m.epriv=(await u.exportKey("jwk",h.privateKey)).d;var d=await u.exportKey("jwk",h.publicKey);return m.epub=d.x+"."+d.y,m})}catch(h){if(r.window)throw h;if(h=="Error: ECDH is not a supported algorithm")console.log("Ignoring ECDH...");else throw h}l=l||{};var f={pub:c.pub,priv:c.priv,epub:l.epub,epriv:l.epriv};if(o)try{o(f)}catch(h){console.log(h)}return f}catch(h){if(console.log(h),r.err=h,r.throw)throw h;o&&o();return}}),n.exports=r.pair})(e,"./pair"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.sign=r.sign||(async(c,l,f,h)=>{try{if(h=h||{},!(l||h).priv){if(!r.I)throw"No signing key.";l=await r.I(null,{what:c,how:"sign",why:h.why})}if(u===c)throw"`undefined` not allowed.";var m=await o.parse(c),d=h.check=h.check||m;if(r.verify&&(r.opt.check(d)||d&&d.s&&d.m)&&u!==await r.verify(d,l)){var y=await o.parse(d);if(h.raw||(y="SEA"+await s.stringify(y)),f)try{f(y)}catch(E){console.log(E)}return y}var v=l.pub,g=l.priv,p=o.jwk(v,g),x=await a(m),_=await(s.ossl||s.subtle).importKey("jwk",p,{name:"ECDSA",namedCurve:"P-256"},!1,["sign"]).then(M=>(s.ossl||s.subtle).sign({name:"ECDSA",hash:{name:"SHA-256"}},M,new Uint8Array(x))),y={m,s:s.Buffer.from(_,"binary").toString(h.encode||"base64")};if(h.raw||(y="SEA"+await s.stringify(y)),f)try{f(y)}catch(M){console.log(M)}return y}catch(M){if(console.log(M),r.err=M,r.throw)throw M;f&&f();return}}),n.exports=r.sign})(e,"./sign"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.verify=r.verify||(async(f,h,m,d)=>{try{var v=await o.parse(f);if(h===!1){var g=await o.parse(v.m);if(m)try{m(g)}catch(b){console.log(b)}return g}d=d||{};var p=h.pub||h,x=r.opt.slow_leak?await r.opt.slow_leak(p):await(s.ossl||s.subtle).importKey("jwk",o.jwk(p),{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),_=await a(v.m),y,M,E,w;try{if(y=s.Buffer.from(v.s,d.encode||"base64"),M=new Uint8Array(y),E=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},x,M,new Uint8Array(_)),!E)throw"Signature did not match."}catch{if(r.opt.fallback)return await r.opt.fall_verify(f,h,m,d)}var D=E?await o.parse(v.m):u;if(m)try{m(D)}catch(b){console.log(b)}return D}catch(b){if(console.log(b),r.err=b,r.throw)throw b;m&&m();return}}),n.exports=r.verify;var c={};r.opt.slow_leak=f=>{if(c[f])return c[f];var h=o.jwk(f);return c[f]=(s.ossl||s.subtle).importKey("jwk",h,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),c[f]};var l=r.opt;r.opt.fall_verify=async function(f,h,m,d,v){if(v===r.opt.fallback)throw"Signature did not match";v=v||1;var g=f||"";f=r.opt.unpack(f)||f;var p=await o.parse(f),x=h.pub||h,_=await r.opt.slow_leak(x),y=v<=r.opt.fallback?s.Buffer.from(await s.subtle.digest({name:"SHA-256"},new s.TextEncoder().encode(await o.parse(p.m)))):await a(p.m),M,E,w;try{if(M=s.Buffer.from(p.s,d.encode||"base64"),E=new Uint8Array(M),w=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},_,E,new Uint8Array(y)),!w)throw"Signature did not match."}catch{try{M=s.Buffer.from(p.s,"utf8"),E=new Uint8Array(M),w=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},_,E,new Uint8Array(y))}catch{if(!w)throw"Signature did not match."}}var D=w?await o.parse(p.m):u;if(l.fall_soul=g["#"],l.fall_key=g["."],l.fall_val=f,l.fall_state=g[">"],m)try{m(D)}catch(b){console.log(b)}return D},r.opt.fallback=2})(e,"./verify"),e(function(n){var r=e("./shim"),s=e("./settings"),o=e("./sha256");const a=async(u,c,l)=>{const f=u+(c||r.random(8)).toString("utf8"),h=r.Buffer.from(await o(f),"binary"),m=s.keyToJwk(h);return await r.subtle.importKey("jwk",m,{name:"AES-GCM"},!1,["encrypt","decrypt"])};n.exports=a})(e,"./aeskey"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings");var o=e("./aeskey"),a;r.encrypt=r.encrypt||(async(u,c,l,f)=>{try{f=f||{};var h=(c||f).epriv||c;if(a===u)throw"`undefined` not allowed.";if(!h){if(!r.I)throw"No encryption key.";c=await r.I(null,{what:u,how:"encrypt",why:f.why}),h=c.epriv||c}var m=typeof u=="string"?u:await s.stringify(u),d={s:s.random(9),iv:s.random(15)},v=await o(h,d.s,f).then(p=>s.subtle.encrypt({name:f.name||"AES-GCM",iv:new Uint8Array(d.iv)},p,new s.TextEncoder().encode(m))),g={ct:s.Buffer.from(v,"binary").toString(f.encode||"base64"),iv:d.iv.toString(f.encode||"base64"),s:d.s.toString(f.encode||"base64")};if(f.raw||(g="SEA"+await s.stringify(g)),l)try{l(g)}catch(p){console.log(p)}return g}catch(p){if(console.log(p),r.err=p,r.throw)throw p;l&&l();return}}),n.exports=r.encrypt})(e,"./encrypt"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./aeskey");r.decrypt=r.decrypt||(async(u,c,l,f)=>{try{f=f||{};var h=(c||f).epriv||c;if(!h){if(!r.I)throw"No decryption key.";c=await r.I(null,{what:u,how:"decrypt",why:f.why}),h=c.epriv||c}var m=await o.parse(u),d,v,g;try{d=s.Buffer.from(m.s,f.encode||"base64"),v=s.Buffer.from(m.iv,f.encode||"base64"),g=s.Buffer.from(m.ct,f.encode||"base64");var p=await a(h,d,f).then(_=>s.subtle.decrypt({name:f.name||"AES-GCM",iv:new Uint8Array(v),tagLength:128},_,new Uint8Array(g)))}catch{if(f.encode==="utf8")throw"Could not decrypt";if(r.opt.fallback)return f.encode="utf8",await r.decrypt(u,c,l,f)}var x=await o.parse(new s.TextDecoder("utf8").decode(p));if(l)try{l(x)}catch(_){console.log(_)}return x}catch(_){if(console.log(_),r.err=_,r.throw)throw _;l&&l();return}}),n.exports=r.decrypt})(e,"./decrypt"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings"),r.secret=r.secret||(async(a,u,c,l)=>{try{if(l=l||{},!u||!u.epriv||!u.epub){if(!r.I)throw"No secret mix.";u=await r.I(null,{what:a,how:"secret",why:l.why})}var f=a.epub||a,h=u.epub,m=u.epriv,d=s.ossl||s.subtle,v=o(f),g=Object.assign({public:await d.importKey(...v,!0,[])},{name:"ECDH",namedCurve:"P-256"}),p=o(h,m),x=await d.importKey(...p,!1,["deriveBits"]).then(async y=>{var M=await d.deriveBits(g,y,256),E=new Uint8Array(M),w=await d.importKey("raw",E,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"]);return d.exportKey("jwk",w).then(({k:D})=>D)}),_=x;if(c)try{c(_)}catch(y){console.log(y)}return _}catch(y){if(console.log(y),r.err=y,r.throw)throw y;c&&c();return}});var o=(a,u)=>{var[c,l]=a.split("."),f=u?{d:u}:{};return["jwk",Object.assign(f,{x:c,y:l,kty:"EC",crv:"P-256",ext:!0}),{name:"ECDH",namedCurve:"P-256"}]};n.exports=r.secret})(e,"./secret"),e(function(n){var r=e("./root");r.certify=r.certify||(async(s,o={},a,u,c={})=>{try{if(console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version."),s=(()=>{var _=[];if(s){if((typeof s=="string"||Array.isArray(s))&&s.indexOf("*")>-1)return"*";if(typeof s=="string")return s;if(Array.isArray(s)){if(s.length===1&&s[0])return typeof s[0]=="object"&&s[0].pub?s[0].pub:typeof s[0]=="string"?s[0]:null;s.map(y=>{typeof y=="string"?_.push(y):typeof y=="object"&&y.pub&&_.push(y.pub)})}return typeof s=="object"&&s.pub?s.pub:_.length>0?_:null}})(),!s)return console.log("No certificant found.");const f=c.expiry&&(typeof c.expiry=="number"||typeof c.expiry=="string")?parseFloat(c.expiry):null,h=(o||{}).read?o.read:null,m=(o||{}).write?o.write:typeof o=="string"||Array.isArray(o)||o["+"]||o["#"]||o["."]||o["="]||o["*"]||o[">"]||o["<"]?o:null,d=(c||{}).block||(c||{}).blacklist||(c||{}).ban||{},v=d.read&&(typeof d.read=="string"||(d.read||{})["#"])?d.read:null,g=typeof d=="string"?d:d.write&&(typeof d.write=="string"||d.write["#"])?d.write:null;if(!h&&!m)return console.log("No policy found.");const p=JSON.stringify({c:s,...f?{e:f}:{},...h?{r:h}:{},...m?{w:m}:{},...v?{rb:v}:{},...g?{wb:g}:{}});var l=await r.sign(p,a,null,{raw:1});if(c.raw||(l="SEA"+JSON.stringify(l)),u)try{u(l)}catch(_){console.log(_)}return l}catch(f){if(r.err=f,r.throw)throw f;u&&u();return}}),n.exports=r.certify})(e,"./certify"),e(function(n){var r=e("./shim"),s=e("./root");s.work=e("./work"),s.sign=e("./sign"),s.verify=e("./verify"),s.encrypt=e("./encrypt"),s.decrypt=e("./decrypt"),s.certify=e("./certify"),s.random=s.random||r.random,s.Buffer=s.Buffer||e("./buffer"),s.keyid=s.keyid||(async o=>{try{const a=r.Buffer.concat(o.replace(/-/g,"+").replace(/_/g,"/").split(".").map(f=>r.Buffer.from(f,"base64"))),u=r.Buffer.concat([r.Buffer.from([153,a.length/256,a.length%256]),a]),c=await sha1hash(u),l=r.Buffer.from(c,"binary");return l.toString("hex",l.length-8)}catch(a){throw console.log(a),a}}),((s.window||{}).GUN||{}).SEA=s,n.exports=s})(e,"./sea"),e(function(n){var r=e("./sea"),s,o;r.window?s=r.window.GUN||{chain:{}}:s=e((o+""==typeof t?".":"")+"./gun",1),r.GUN=s;function a(c){this._={$:this}}a.prototype=function(){function c(){}return c.prototype=s.chain,new c}(),a.prototype.constructor=a,s.chain.user=function(c){var l=this,h=l.back(-1),f;if(c)return c=r.opt.pub((c._||"")["#"])||c,h.get("~"+c);if(f=h.back("user"))return f;var h=h._,m=h,d=m.opt.uuid||u;return(m=(f=m.user=l.chain(new a))._).opt={},m.opt.uuid=function(v){var g=d(),p=h.user;return!p||!(p=p.is)||!(p=p.pub)||(g="~"+p+"/"+g,v&&v.call&&v(null,g)),g},f};function u(){return s.state().toString(36).replace(".","")}s.User=a,a.GUN=s,a.SEA=s.SEA=r,n.exports=a})(e,"./user"),e(function(n){var r,s=""+r!=typeof GUN?GUN||{chain:{}}:e((""+r==typeof t?".":"")+"./gun",1);s.chain.then=function(o,a){var u=this,c=new Promise(function(l,f){u.once(l,a)});return o?c.then(o):c}})(e,"./then"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.create=function(...u){var c=typeof u[0]=="object"&&(u[0].pub||u[0].epub)?u[0]:typeof u[1]=="object"&&(u[1].pub||u[1].epub)?u[1]:null,l=c&&(c.pub||c.epub)?c.pub:typeof u[0]=="string"?u[0]:null,f=c&&(c.pub||c.epub)?c:l&&typeof u[1]=="string"?u[1]:null,h=u.filter(_=>typeof _=="function")[0]||null,m=u&&u.length>1&&typeof u[u.length-1]=="object"?u[u.length-1]:{},d=this,v=d._,g=d.back(-1);if(h=h||a,m=m||{},m.check!==!1){var p;if(l||(p="No user."),(f||"").length<8&&(p="Password too short!"),p)return h({err:o.log(p)}),d}if(v.ing)return(h||a)({err:o.log("User is already being created or authenticated!"),wait:!0}),d;v.ing=!0;var x={};return x.a=function(_){if(x.pubs=_,_&&!m.already){var y={err:o.log("User already created!")};v.ing=!1,(h||a)(y),d.leave();return}x.salt=String.random(64),s.work(f,x.salt,x.b)},x.b=function(_){x.proof=_,c?x.c(c):s.pair(x.c)},x.c=function(_){var y;x.pair=_||{},(y=v.root.user)&&(y._.sea=_,y.is={pub:_.pub,epub:_.epub,alias:l}),x.data={pub:_.pub},x.d()},x.d=function(){x.data.alias=l,x.e()},x.e=function(){x.data.epub=x.pair.epub,s.encrypt({priv:x.pair.priv,epriv:x.pair.epriv},x.proof,x.f,{raw:1})},x.f=function(_){x.data.auth=JSON.stringify({ek:_,s:x.salt}),x.g(x.data.auth)},x.g=function(_){var y;x.data.auth=x.data.auth||_,g.get(y="~"+x.pair.pub).put(x.data).on(x.h);var M={};M[y]={"#":y},g.get("~@"+l).put(M).get(y).on(x.i)},x.h=function(_,y,M,E){E.off(),x.h.ok=1,x.i()},x.i=function(_,y,M,E){E&&(x.i.ok=1,E.off()),!(!x.h.ok||!x.i.ok)&&(v.ing=!1,h({ok:0,pub:x.pair.pub}),a===h&&(c?d.auth(c):d.auth(l,f)))},g.get("~@"+l).once(x.a),d},r.prototype.leave=function(u,c){var l=this,f=l.back(-1)._.user;if(f&&(delete f.is,delete f._.is,delete f._.sea),s.window)try{var h={};h=s.window.sessionStorage,delete h.recall,delete h.pair}catch{}return l}})(e,"./create"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.auth=function(...c){var l=typeof c[0]=="object"&&(c[0].pub||c[0].epub)?c[0]:typeof c[1]=="object"&&(c[1].pub||c[1].epub)?c[1]:null,f=!l&&typeof c[0]=="string"?c[0]:null,h=(f||l&&!(l.priv&&l.epriv))&&typeof c[1]=="string"?c[1]:null,m=c.filter(M=>typeof M=="function")[0]||null,d=c&&c.length>1&&typeof c[c.length-1]=="object"?c[c.length-1]:{},v=this,g=v._,p=v.back(-1);if(g.ing)return(m||a)({err:o.log("User is already being created or authenticated!"),wait:!0}),v;g.ing=!0;var x={},_,y=9;return x.a=function(M){if(!M)return x.b();if(!M.pub){var E=[];return Object.keys(M).forEach(function(w){w!="_"&&E.push(M[w])}),x.b(E)}if(x.name)return x.f(M);x.c((x.data=M).auth)},x.b=function(M){var E=(x.list=(x.list||[]).concat(M||[])).shift();if(_===E){if(x.name)return x.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");if(f&&y--){p.get("~@"+f).once(x.a);return}return x.err("Wrong user or password.")}p.get(E).once(x.a)},x.c=function(M){if(_===M)return x.b();if(typeof M=="string")return x.c(u(M));s.work(h,(x.auth=M).s,x.d,x.enc)},x.d=function(M){s.decrypt(x.auth.ek,M,x.e,x.enc)},x.e=function(M){if(_===M)return x.enc?(x.enc=null,x.b()):(x.enc={encode:"utf8"},x.c(x.auth));x.half=M,x.f(x.data)},x.f=function(M){var E=x.half||{},w=x.data||{};x.g(x.lol={pub:M.pub||w.pub,epub:M.epub||w.epub,priv:M.priv||E.priv,epriv:M.epriv||E.epriv})},x.g=function(M){if(!M||!M.pub||!M.epub)return x.b();x.pair=M;var E=p._.user,w=E._;w.tag;var D=w.opt;w=E._=p.get("~"+M.pub)._,w.opt=D,E.is={pub:M.pub,epub:M.epub,alias:f||M.pub},w.sea=x.pair,g.ing=!1;try{h&&_==(u(g.root.graph["~"+M.pub].auth)||"")[":"]&&(d.shuffle=d.change=h)}catch{}if(d.change?x.z():(m||a)(w),s.window&&(v.back("user")._.opt||d).remember)try{var b={};b=s.window.sessionStorage,b.recall=!0,b.pair=JSON.stringify(M)}catch{}try{p._.tag.auth?p._.on("auth",w):setTimeout(function(){p._.on("auth",w)},1)}catch(A){o.log("Your 'auth' callback crashed with:",A)}},x.h=function(M){if(!M)return x.b();if(f=M.alias,f||(f=M.alias="~"+l.pub),!M.auth)return x.g(l);l=null,x.c((x.data=M).auth)},x.z=function(){x.salt=String.random(64),s.work(d.change,x.salt,x.y)},x.y=function(M){s.encrypt({priv:x.pair.priv,epriv:x.pair.epriv},M,x.x,{raw:1})},x.x=function(M){x.w(JSON.stringify({ek:M,s:x.salt}))},x.w=function(M){if(d.shuffle){console.log("migrate core account from UTF8 & shuffle");var E={};Object.keys(x.data).forEach(function(w){E[w]=x.data[w]}),delete E._,E.auth=M,p.get("~"+x.pair.pub).put(E)}p.get("~"+x.pair.pub).get("auth").put(M,m||a)},x.err=function(M){var E={err:o.log(M||"User cannot be found!")};g.ing=!1,(m||a)(E)},x.plugin=function(M){if(!(x.name=M))return x.err();var E=[M];M[0]!=="~"&&(E[1]="~"+M,E[2]="~@"+M),x.b(E)},l?l.priv&&l.epriv?x.g(l):p.get("~"+l.pub).once(x.h):f?p.get("~@"+f).once(x.a):!f&&!h&&s.name(x.plugin),v};function u(c){if(typeof c!="string")return c;try{c=JSON.parse(c)}catch{c={}}return c}})(e,"./auth"),e(function(n){var r=e("./user"),s=r.SEA;r.GUN,r.prototype.recall=function(o,a){var u=this,c=u.back(-1);if(o=o||{},o&&o.sessionStorage){if(s.window)try{var l={};l=s.window.sessionStorage,l&&(c._.opt.remember=!0,(u.back("user")._.opt||o).remember=!0,(l.recall||l.pair)&&c.user().auth(JSON.parse(l.pair),a))}catch{}return u}return u}})(e,"./recall"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.pair=function(){var u=this,c;try{c=new Proxy({DANGER:"☠"},{get:function(l,f,h){if(!(!u.is||!(u._||"").sea))return u._.sea[f]}})}catch{}return c},r.prototype.delete=async function(u,c,l){console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");var f=this;f.back(-1);var h=f.back("user");try{h.auth(u,c,function(m){var d=(h.is||{}).pub;h.map().once(function(){this.put(null)}),h.leave(),(l||a)({ok:0})})}catch(m){o.log("User.delete failed! Error:",m)}return f},r.prototype.alive=async function(){console.log("user.alive() IS DEPRECATED!!!");const u=this.back(-1);try{return await authRecall(u),u._.user._}catch{const l="No session!";throw o.log(l),{err:l}}},r.prototype.trust=async function(u){console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!"),o.is(u)&&u.get("pub").get((c,l)=>{console.log(c,l)}),u.get("trust").get(path).put(theirPubkey)},r.prototype.grant=function(u,c){console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var l=this,f=l.back(-1).user(),h=f._.sea,m="";return l.back(function(d){d.is||(m+=d.get||"")}),async function(){var d,v=await f.get("grant").get(h.pub).get(m).then();v=await s.decrypt(v,h),v||(v=s.random(16).toString(),d=await s.encrypt(v,h),f.get("grant").get(h.pub).get(m).put(d));var g=u.get("pub").then(),p=u.get("epub").then();g=await g,p=await p;var x=await s.secret(p,h);d=await s.encrypt(v,x),f.get("grant").get(g).get(m).put(d,c)}(),l},r.prototype.secret=function(u,c){console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var l=this,f=l.back(-1).user(),h=f.pair(),m="";return l.back(function(d){d.is||(m+=d.get||"")}),async function(){var d,v=await f.get("trust").get(h.pub).get(m).then();v=await s.decrypt(v,h),v||(v=s.random(16).toString(),d=await s.encrypt(v,h),f.get("trust").get(h.pub).get(m).put(d)),d=await s.encrypt(u,v),l.put(d,c)}(),l},n.exports=r})(e,"./share"),e(function(n){var r=e("./sea"),s=e("./settings"),o,a=(r.window||"").GUN||e((""+o==typeof t?".":"")+"./gun",1);a.on("opt",function(d){d.sea||(d.sea={own:{}},d.on("put",u,d)),this.to.next(d)});function u(d){var v=this,g=v.as,p=d.put,x=p["#"],_=p["."],y=p[":"],M=p[">"],E=d["#"],w;if(!(!x||!_)){if((d._||"").faith&&(g.opt||"").faith&&typeof d._=="function"){r.opt.pack(p,function(b){r.verify(b,!1,function(A){p["="]=r.opt.unpack(A),v.to.next(d)})});return}var D=function(b){g.on("in",{"@":E,err:d.err=b})};if((d._||"").DBG&&((d._||"").DBG.c=+new Date),0<=x.indexOf("<?")&&(w=parseFloat(x.split("<?")[1]||""),w&&M<a.state()-w*1e3)){(w=d._)&&w.stun&&w.stun--;return}if(x==="~@"){u.alias(v,d,y,_,x,g,D);return}if(x.slice(0,2)==="~@"){u.pubs(v,d,y,_,x,g,D);return}if(w=r.opt.pub(x)){u.pub(v,d,y,_,x,g,D,g.user||"",w);return}if(0<=x.indexOf("#")){u.hash(v,d,y,_,x,g,D);return}u.any(v,d,y,_,x,g,D,g.user||"")}}u.hash=function(d,v,g,p,x,_,y){r.work(g,null,function(M){function E(w){let D="";for(let b=0;b<w.length;b++)D+=b-1&1?"":String.fromCharCode(parseInt(w.substring(b-1,b+1),16));return btoa(D)}if(M&&M===p.split("#").slice(-1)[0])return d.to.next(v);if(M&&M===E(p.split("#").slice(-1)[0]))return d.to.next(v);y("Data hash not same as hash!")},{name:"SHA-256"})},u.alias=function(d,v,g,p,x,_,y){if(!g)return y("Data must exist!");if("~@"+p===l(g))return d.to.next(v);y("Alias not same!")},u.pubs=function(d,v,g,p,x,_,y){if(!g)return y("Alias must exist!");if(p===l(g))return d.to.next(v);y("Alias not same!")},u.pub=async function(d,v,g,p,x,_,y,M,E){var w;const D=await s.parse(g)||{},b=(A,F,T)=>{if(A.m&&A.s&&F&&E)return r.verify(A,E,S=>{if(o!==S&&o!==S.e&&v.put[">"]&&v.put[">"]>parseFloat(S.e))return y("Certificate expired.");if(o!==S&&S.c&&S.w&&(S.c===F||S.c.indexOf("*")>-1)){let C=x.indexOf("/")>-1?x.replace(x.substring(0,x.indexOf("/")+1),""):"";String.match=String.match||a.text.match;const k=Array.isArray(S.w)?S.w:typeof S.w=="object"||typeof S.w=="string"?[S.w]:[];for(const N of k)if(String.match(C,N["#"])&&String.match(p,N["."])||!N["."]&&String.match(C,N["#"])||!N["#"]&&String.match(p,N["."])||String.match(C?C+"/"+p:p,N["#"]||N)){if(N["+"]&&N["+"].indexOf("*")>-1&&C&&C.indexOf(F)==-1&&p.indexOf(F)==-1)return y(`Path "${C}" or key "${p}" must contain string "${F}".`);if(S.wb&&(typeof S.wb=="string"||(S.wb||{})["#"])){var R=d.as.root.$.back(-1);return typeof S.wb=="string"&&S.wb.slice(0,1)!=="~"&&(R=R.get("~"+E)),R.get(S.wb).get(F).once(U=>U&&(U===1||U===!0)?y(`Certificant ${F} blocked.`):T(S))}return T(S)}return y("Certificate verification fail.")}})};if(p==="pub"&&"~"+E===x)return g===E?d.to.next(v):y("Account not same!");if((w=M.is)&&w.pub&&!D["*"]&&!D["+"]&&(E===w.pub||E!==w.pub&&((v._.msg||{}).opt||{}).cert)){r.opt.pack(v.put,A=>{r.sign(A,M._.sea,async function(F){if(o===F)return y(r.err||"Signature fail.");if(v.put[":"]={":":w=r.opt.unpack(F.m),"~":F.s},v.put["="]=w,E===M.is.pub){(w=l(g))&&((_.sea.own[w]=_.sea.own[w]||{})[E]=1),JSON.stringifyAsync(v.put[":"],function(T,S){return T?y(T||"Stringify error."):(v.put[":"]=S,d.to.next(v))});return}if(E!==M.is.pub&&((v._.msg||{}).opt||{}).cert){const T=await s.parse(v._.msg.opt.cert);T&&T.m&&T.s&&b(T,M.is.pub,S=>{v.put[":"]["+"]=T,v.put[":"]["*"]=M.is.pub,JSON.stringifyAsync(v.put[":"],function(R,C){return R?y(R||"Stringify error."):(v.put[":"]=C,d.to.next(v))})})}},{raw:1})});return}r.opt.pack(v.put,A=>{r.verify(A,D["*"]||E,function(F){var T;if(F=r.opt.unpack(F),o===F)return y("Unverified data.");if((T=l(F))&&E===r.opt.pub(T)&&((_.sea.own[T]=_.sea.own[T]||{})[E]=1),D["+"]&&D["+"].m&&D["+"].s&&D["*"])b(D["+"],D["*"],S=>(v.put["="]=F,d.to.next(v)));else return v.put["="]=F,d.to.next(v)})})},u.any=function(d,v,g,p,x,_,y,M){if(_.opt.secure)return y("Soul missing public key at '"+p+"'.");_.on("secure",function(E){if(this.off(),!_.opt.secure)return d.to.next(E);y("Data cannot be changed.")}).on.on("secure",v)};var c=a.valid,l=function(d,v){return typeof(v=c(d))=="string"&&v};(a.state||"").ify;var f=/[^\w_-]/;r.opt.pub=function(d){if(d&&(d=d.split("~"),!(!d||!(d=d[1]))&&(d=d.split(f).slice(0,2),!(!d||d.length!=2)&&(d[0]||"")[0]!=="@")))return d=d.slice(0,2).join("."),d},r.opt.stringy=function(d){},r.opt.pack=function(d,v,g,p,x){var _,y;if(r.opt.check(d))return v(d);d&&d["#"]&&d["."]&&d[">"]&&(_=d[":"],y=1),JSON.parseAsync(y?_:d,function(M,E){var w=o!==(E||"")[":"]&&(E||"")["~"];if(!w){v(d);return}v({m:{"#":x||d["#"],".":g||d["."],":":(E||"")[":"],">":d[">"]||a.state.is(p,g)},s:w})})};var h=r.opt;r.opt.unpack=function(d,v,g){var p;if(o!==d){if(d&&o!==(p=d[":"]))return p;if(v=v||h.fall_key,!g&&h.fall_val&&(g={},g[v]=h.fall_val),!(!v||!g)){if(d===g[v]||!r.opt.check(g[v]))return d;var x=g&&g._&&g._["#"]||h.fall_soul,_=a.state.is(g,v)||h.fall_state;if(d&&d.length===4&&x===d[0]&&v===d[1]&&m(_)===m(d[3]))return d[2];if(_<r.opt.shuffle_attack)return d}}},r.opt.shuffle_attack=15463296e5;var m=Math.floor})(e,"./index")})()})(xo);xo.exports;const rr=vh("https://gun-manhattan.herokuapp.com/gun"),yo=rr.get("circles-c979fe7c-ebfd-11ed-a05b-0242ac120003"),ki=yo.get("index-4723d6a2-ecbd-11ed-a05b-0242ac120003"),mu=yo.get("circles");yo.get("nodes");const[Ft,Mo]=mh({circleRef:null,userRef:null,isLoggedIn:!1,userLocation:void 0}),[Xi,xh]=je(!1),[Ja,Qa]=je(null),[yh,Mh]=je(null),gu=i=>{Mo("userRef",i)},_u=i=>{Mo("isLoggedIn",i)},Sh=i=>{Mo("userLocation",i),Ft.userRef&&Ft.userRef.get("location").put(i)},Ks="0123456789bcdefghjkmnpqrstuvwxyz";class ht{static encode(e,t,n){if(typeof n>"u"){for(let h=1;h<=12;h++){const m=ht.encode(e,t,h),d=ht.decode(m);if(d.lat==e&&d.lon==t)return m}n=12}if(e=Number(e),t=Number(t),n=Number(n),isNaN(e)||isNaN(t)||isNaN(n))throw new Error("Invalid geohash");let r=0,s=0,o=!0,a="",u=-90,c=90,l=-180,f=180;for(;a.length<n;){if(o){const h=(l+f)/2;t>=h?(r=r*2+1,l=h):(r=r*2,f=h)}else{const h=(u+c)/2;e>=h?(r=r*2+1,u=h):(r=r*2,c=h)}o=!o,++s==5&&(a+=Ks.charAt(r),s=0,r=0)}return a}static decode(e){const t=ht.bounds(e),n=t.sw.lat,r=t.sw.lon,s=t.ne.lat,o=t.ne.lon;let a=(n+s)/2,u=(r+o)/2;return a=a.toFixed(Math.floor(2-Math.log(s-n)/Math.LN10)),u=u.toFixed(Math.floor(2-Math.log(o-r)/Math.LN10)),{lat:Number(a),lon:Number(u)}}static bounds(e){if(e.length==0)throw new Error("Invalid geohash");e=e.toLowerCase();let t=!0,n=-90,r=90,s=-180,o=180;for(let u=0;u<e.length;u++){const c=e.charAt(u),l=Ks.indexOf(c);if(l==-1)throw new Error("Invalid geohash");for(let f=4;f>=0;f--){const h=l>>f&1;if(t){const m=(s+o)/2;h==1?s=m:o=m}else{const m=(n+r)/2;h==1?n=m:r=m}t=!t}}return{sw:{lat:n,lon:s},ne:{lat:r,lon:o}}}static adjacent(e,t){if(e=e.toLowerCase(),t=t.toLowerCase(),e.length==0)throw new Error("Invalid geohash");if("nsew".indexOf(t)==-1)throw new Error("Invalid direction");const n={n:["p0r21436x8zb9dcf5h7kjnmqesgutwvy","bc01fg45238967deuvhjyznpkmstqrwx"],s:["14365h7k9dcfesgujnmqp0r2twvyx8zb","238967debc01fg45kmstqrwxuvhjyznp"],e:["bc01fg45238967deuvhjyznpkmstqrwx","p0r21436x8zb9dcf5h7kjnmqesgutwvy"],w:["238967debc01fg45kmstqrwxuvhjyznp","14365h7k9dcfesgujnmqp0r2twvyx8zb"]},r={n:["prxz","bcfguvyz"],s:["028b","0145hjnp"],e:["bcfguvyz","prxz"],w:["0145hjnp","028b"]},s=e.slice(-1);let o=e.slice(0,-1);const a=e.length%2;return r[t][a].indexOf(s)!=-1&&o!=""&&(o=ht.adjacent(o,t)),o+Ks.charAt(n[t][a].indexOf(s))}static neighbours(e){return{n:ht.adjacent(e,"n"),ne:ht.adjacent(ht.adjacent(e,"n"),"e"),e:ht.adjacent(e,"e"),se:ht.adjacent(ht.adjacent(e,"s"),"e"),s:ht.adjacent(e,"s"),sw:ht.adjacent(ht.adjacent(e,"s"),"w"),w:ht.adjacent(e,"w"),nw:ht.adjacent(ht.adjacent(e,"n"),"w")}}}var Zs=typeof window<"u"?window.Gun:pu;Zs.chain.open=function(i,e,t,n){return n=n||1,e=e||{},e.doc=e.doc||{},e.ids=e.ids||{},e.any=e.any||i,e.meta=e.meta||!1,e.eve=e.eve||{off:function(){Object.keys(e.eve.s).forEach(function(r,s){(s=e.eve.s[r])&&s.off()}),e.eve.s={}},s:{}},this.on(function(r,s,o,a){if(clearTimeout(e.to),e.to=setTimeout(function(){e.any&&(e.any.call(e.at.$,e.doc,e.key,e,e.eve),e.off&&(e.eve.off(),e.any=null))},e.wait||9),e.at=e.at||o,e.key=e.key||s,e.eve.s[this._.id]=a,Zs.valid(r)===!0){t?t[s]=r:e.doc=r;return}var u=this;setTimeout.each(Object.keys(r),function(c,l){if(!(c==="_"&&!e.meta)){l=r[c];var f=t||e.doc,h;if(f){if(typeof(h=Zs.valid(l))!="string"){f[c]=l;return}if(e.ids[h]){f[c]=e.ids[h];return}if(e.depth<=n){f[c]=f[c]||l;return}u.get(c).open(e.any,e,e.ids[h]=f[c]={},n+1)}}})})};const bh=i=>{const[e,t]=je([]);return qt(()=>(console.log("loading circles"),i.open(n=>{console.log("nodeRef.open");const r=Object.keys(n).map(s=>n[s]).filter(s=>Object.keys(s).length!==0);t(r),console.log(r)}),()=>{i.off()})),e},Eh=et('<div class="flex"><div class="p-3"><ul>'),wh=et('<div class="bg-white shadow-lg p-1 mt-auto w-full relative"><textarea class="w-full"></textarea><button class="absolute bg-blue-200 top-2 right-2 mr-2 px-4 py-2 rounded">Send'),Th=et('<li class="bg-white rounded-lg shadow-lg p-3 mb-3"> (<!>)'),Ah=()=>{const[i,e]=je(""),t=new Date,n=t.getUTCFullYear()+"-"+(t.getUTCMonth()+1).toString().padStart(2,"0"),r=ki.get("dates").get(n),s=bh(r);qt(()=>{Mh(s())});const o=()=>{if(i().trim()===""||!rr.user().is)return;const c=new Date,l=[c.getUTCFullYear(),c.getUTCFullYear()+"-"+(c.getUTCMonth()+1).toString().padStart(2,"0"),c.getUTCFullYear()+"-"+(c.getUTCMonth()+1).toString().padStart(2,"0")+"-"+c.getUTCDate().toString().padStart(2,"0")];let f={message:i(),createdAt:c.toISOString()},h=[];if(Ft.userLocation){const d=Ft.userLocation.latitude,v=Ft.userLocation.longitude,g=ht.encode(d,v),p=g.substring(0,4);h=[p.substring(0,2),p.substring(0,3),p],f.location={latitude:d,longitude:v,geohash:g}}const m=Ft.userRef.get("messages").set(f);ki.get("messages").set(m),l.forEach(d=>{ki.get("dates").get(d).set(m)}),f.location&&(h.forEach(d=>{ki.get("locations").get(d).set(m)}),h.forEach(d=>{l.forEach(v=>{ki.get("locations_and_dates").get(d).get(v).set(m)})})),e("")},a=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),o())};return[(()=>{const u=Eh(),c=u.firstChild,l=c.firstChild;return ke(l,Ye(Jc,{get each(){return s()},children:f=>(()=>{const h=Th(),m=h.firstChild,d=m.nextSibling;return d.nextSibling,ke(h,()=>f.message,m),ke(h,()=>new Date(f.createdAt).toLocaleTimeString(),d),h})()})),u})(),(()=>{const u=wh(),c=u.firstChild,l=c.nextSibling;return c.$$keydown=a,c.$$input=f=>e(f.target.value),l.$$click=o,Qe(()=>c.value=i()),u})()]};Kn(["input","keydown","click"]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="152",ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rh=0,zo=1,Ch=2,vu=1,Ph=2,pn=3,An=0,Et=1,mn=2,wn=0,Ti=1,Go=2,Ho=3,Vo=4,Lh=5,Ei=100,Dh=101,Uh=102,Wo=103,$o=104,Ih=200,Oh=201,Nh=202,Fh=203,xu=204,yu=205,Bh=206,kh=207,zh=208,Gh=209,Hh=210,Vh=0,Wh=1,$h=2,eo=3,jh=4,Xh=5,qh=6,Yh=7,Mu=0,Kh=1,Zh=2,_n=0,Jh=1,Qh=2,ed=3,td=4,nd=5,Su=300,Pi=301,Li=302,to=303,no=304,fs=306,io=1e3,jt=1001,ro=1002,St=1003,jo=1004,Js=1005,Nt=1006,id=1007,sr=1008,jn=1009,rd=1010,sd=1011,bu=1012,ad=1013,zn=1014,Gn=1015,ar=1016,od=1017,ld=1018,Ai=1020,cd=1021,Xt=1023,ud=1024,fd=1025,Vn=1026,Di=1027,hd=1028,dd=1029,pd=1030,md=1031,gd=1033,Qs=33776,ea=33777,ta=33778,na=33779,Xo=35840,qo=35841,Yo=35842,Ko=35843,_d=36196,Zo=37492,Jo=37496,Qo=37808,el=37809,tl=37810,nl=37811,il=37812,rl=37813,sl=37814,al=37815,ol=37816,ll=37817,cl=37818,ul=37819,fl=37820,hl=37821,ia=36492,vd=36283,dl=36284,pl=36285,ml=36286,Eu=3e3,Wn=3001,xd=3200,yd=3201,wu=0,Md=1,$n="",Te="srgb",sn="srgb-linear",Tu="display-p3",ra=7680,Sd=519,gl=35044,_l="300 es",so=1035;let Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,ao=180/Math.PI;function lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function bd(i,e){return(i%e+e)%e}function aa(i,e,t){return(1-t)*i+t*e}function vl(i){return(i&i-1)===0&&i!==0}function Ed(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function br(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}let Ue=class Au{constructor(e=0,t=0){Au.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class Ru{constructor(){Ru.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],c=n[1],l=n[4],f=n[7],h=n[2],m=n[5],d=n[8],v=r[0],g=r[3],p=r[6],x=r[1],_=r[4],y=r[7],M=r[2],E=r[5],w=r[8];return s[0]=o*v+a*x+u*M,s[3]=o*g+a*_+u*E,s[6]=o*p+a*y+u*w,s[1]=c*v+l*x+f*M,s[4]=c*g+l*_+f*E,s[7]=c*p+l*y+f*w,s[2]=h*v+m*x+d*M,s[5]=h*g+m*_+d*E,s[8]=h*p+m*y+d*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*s*l+n*a*u+r*s*c-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],f=l*o-a*c,h=a*u-l*s,m=c*s-o*u,d=t*f+n*h+r*m;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/d;return e[0]=f*v,e[1]=(r*c-l*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(l*t-r*u)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*u-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*o+c*a)+o+e,-r*c,r*u,-r*(-c*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const oa=new Fe;function Cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const xl={};function Zi(i){i in xl||(xl[i]=!0,console.warn(i))}function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function la(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wd=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Td=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ad(i){return i.convertSRGBToLinear().applyMatrix3(Td)}function Rd(i){return i.applyMatrix3(wd).convertLinearToSRGB()}const Cd={[sn]:i=>i,[Te]:i=>i.convertSRGBToLinear(),[Tu]:Ad},Pd={[sn]:i=>i,[Te]:i=>i.convertLinearToSRGB(),[Tu]:Rd},Gt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return sn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Cd[e],r=Pd[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let si,Pu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=as("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lu=class{constructor(e=null){this.isSource=!0,this.uuid=lr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ca(r[o].image)):s.push(ca(r[o]))}else s=ca(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0,vn=class Zr extends Zn{constructor(e=Zr.DEFAULT_IMAGE,t=Zr.DEFAULT_MAPPING,n=jt,r=jt,s=Nt,o=sr,a=Xt,u=jn,c=Zr.DEFAULT_ANISOTROPY,l=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=lr(),this.name="",this.source=new Lu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Wn?Te:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Wn:Eu}set encoding(e){Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wn?Te:$n}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Su;vn.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,c=u[0],l=u[4],f=u[8],h=u[1],m=u[5],d=u[9],v=u[2],g=u[6],p=u[10];if(Math.abs(l-h)<.01&&Math.abs(f-v)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(f+v)<.1&&Math.abs(d+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(m+1)/2,M=(p+1)/2,E=(l+h)/4,w=(f+v)/4,D=(d+g)/4;return _>y&&_>M?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=E/n,s=w/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=E/r,s=D/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=w/s,r=D/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-d)*(g-d)+(f-v)*(f-v)+(h-l)*(h-l));return Math.abs(x)<.001&&(x=1),this.x=(g-d)/x,this.y=(f-v)/x,this.z=(h-l)/x,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xn extends Zn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wn?Te:$n),this.texture=new vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Du extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let u=n[r+0],c=n[r+1],l=n[r+2],f=n[r+3];const h=s[o+0],m=s[o+1],d=s[o+2],v=s[o+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=d,e[t+3]=v;return}if(f!==v||u!==h||c!==m||l!==d){let g=1-a;const p=u*h+c*m+l*d+f*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const M=Math.sqrt(_),E=Math.atan2(M,p*x);g=Math.sin(g*E)/M,a=Math.sin(a*E)/M}const y=a*x;if(u=u*g+h*y,c=c*g+m*y,l=l*g+d*y,f=f*g+v*y,g===1-a){const M=1/Math.sqrt(u*u+c*c+l*l+f*f);u*=M,c*=M,l*=M,f*=M}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],u=n[r+1],c=n[r+2],l=n[r+3],f=s[o],h=s[o+1],m=s[o+2],d=s[o+3];return e[t]=a*d+l*f+u*m-c*h,e[t+1]=u*d+l*h+c*f-a*m,e[t+2]=c*d+l*m+a*h-u*f,e[t+3]=l*d-a*f-u*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,c=a(n/2),l=a(r/2),f=a(s/2),h=u(n/2),m=u(r/2),d=u(s/2);switch(o){case"XYZ":this._x=h*l*f+c*m*d,this._y=c*m*f-h*l*d,this._z=c*l*d+h*m*f,this._w=c*l*f-h*m*d;break;case"YXZ":this._x=h*l*f+c*m*d,this._y=c*m*f-h*l*d,this._z=c*l*d-h*m*f,this._w=c*l*f+h*m*d;break;case"ZXY":this._x=h*l*f-c*m*d,this._y=c*m*f+h*l*d,this._z=c*l*d+h*m*f,this._w=c*l*f-h*m*d;break;case"ZYX":this._x=h*l*f-c*m*d,this._y=c*m*f+h*l*d,this._z=c*l*d-h*m*f,this._w=c*l*f+h*m*d;break;case"YZX":this._x=h*l*f+c*m*d,this._y=c*m*f+h*l*d,this._z=c*l*d-h*m*f,this._w=c*l*f-h*m*d;break;case"XZY":this._x=h*l*f-c*m*d,this._y=c*m*f-h*l*d,this._z=c*l*d+h*m*f,this._w=c*l*f+h*m*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],u=t[9],c=t[2],l=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(l-u)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(l-u)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(u+l)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(u+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,u=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+r*c-s*u,this._y=r*l+o*u+s*a-n*c,this._z=s*l+o*c+n*u-r*a,this._w=o*l-n*a-r*u-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),l=Math.atan2(c,a),f=Math.sin((1-t)*l)/c,h=Math.sin(t*l)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,u=e.w,c=u*t+o*r-a*n,l=u*n+a*t-s*r,f=u*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*u+h*-s+l*-a-f*-o,this.y=l*u+h*-o+f*-s-c*-a,this.z=f*u+h*-a+c*-o-l*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=r*u-s*a,this.y=s*o-n*u,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new V,yl=new qn;class cr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ai.copy(e.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ln.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ln)}else r.boundingBox===null&&r.computeBoundingBox(),ai.copy(r.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),Er.subVectors(this.max,zi),oi.subVectors(e.a,zi),li.subVectors(e.b,zi),ci.subVectors(e.c,zi),Mn.subVectors(li,oi),Sn.subVectors(ci,li),In.subVectors(oi,ci);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-In.z,In.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,In.z,0,-In.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-In.y,In.x,0];return!fa(t,oi,li,ci,Er)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,oi,li,ci,Er))?!1:(wr.crossVectors(Mn,Sn),t=[wr.x,wr.y,wr.z],fa(t,oi,li,ci,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new V,new V,new V,new V,new V,new V,new V,new V],ln=new V,ai=new cr,oi=new V,li=new V,ci=new V,Mn=new V,Sn=new V,In=new V,zi=new V,Er=new V,wr=new V,On=new V;function fa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){On.fromArray(i,s);const a=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),u=e.dot(On),c=t.dot(On),l=n.dot(On);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}const Ud=new cr,Gi=new V,ha=new V;class bo{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ud.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(ha)),this.expandByPoint(Gi.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new V,da=new V,Tr=new V,bn=new V,pa=new V,Ar=new V,ma=new V;class Id{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){da.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=bn.dot(this.direction),u=-bn.dot(Tr),c=bn.lengthSq(),l=Math.abs(1-o*o);let f,h,m,d;if(l>0)if(f=o*u-a,h=o*a-u,d=s*l,f>=0)if(h>=-d)if(h<=d){const v=1/l;f*=v,h*=v,m=f*(f+o*h+2*a)+h*(o*f+h+2*u)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*u)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*u)+c;else h<=-d?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-u),s),m=-f*f+h*(h+2*u)+c):h<=d?(f=0,h=Math.min(Math.max(-s,-u),s),m=h*(h+2*u)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-u),s),m=-f*f+h*(h+2*u)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(Tr,h),m}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,u;const c=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),l>=0?(s=(e.min.y-h.y)*l,o=(e.max.y-h.y)*l):(s=(e.max.y-h.y)*l,o=(e.min.y-h.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,u=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,u=(e.min.z-h.z)*f),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,s){pa.subVectors(t,e),Ar.subVectors(n,e),ma.crossVectors(pa,Ar);let o=this.direction.dot(ma),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,e);const u=a*this.direction.dot(Ar.crossVectors(bn,Ar));if(u<0)return null;const c=a*this.direction.dot(pa.cross(bn));if(c<0||u+c>o)return null;const l=-a*bn.dot(ma);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,u,c,l,f,h,m,d,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=u,p[2]=c,p[6]=l,p[10]=f,p[14]=h,p[3]=m,p[7]=d,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),o=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(r),c=Math.sin(r),l=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*l,m=o*f,d=a*l,v=a*f;t[0]=u*l,t[4]=-u*f,t[8]=c,t[1]=m+d*c,t[5]=h-v*c,t[9]=-a*u,t[2]=v-h*c,t[6]=d+m*c,t[10]=o*u}else if(e.order==="YXZ"){const h=u*l,m=u*f,d=c*l,v=c*f;t[0]=h+v*a,t[4]=d*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*l,t[9]=-a,t[2]=m*a-d,t[6]=v+h*a,t[10]=o*u}else if(e.order==="ZXY"){const h=u*l,m=u*f,d=c*l,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=d+m*a,t[1]=m+d*a,t[5]=o*l,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const h=o*l,m=o*f,d=a*l,v=a*f;t[0]=u*l,t[4]=d*c-m,t[8]=h*c+v,t[1]=u*f,t[5]=v*c+h,t[9]=m*c-d,t[2]=-c,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const h=o*u,m=o*c,d=a*u,v=a*c;t[0]=u*l,t[4]=v-h*f,t[8]=d*f+m,t[1]=f,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=m*f+d,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*u,m=o*c,d=a*u,v=a*c;t[0]=u*l,t[4]=-f,t[8]=c*l,t[1]=h*f+v,t[5]=o*l,t[9]=m*f-d,t[2]=d*f-m,t[6]=a*l,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Nd)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),En.crossVectors(n,Pt),En.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),En.crossVectors(n,Pt)),En.normalize(),Rr.crossVectors(Pt,En),r[0]=En.x,r[4]=Rr.x,r[8]=Pt.x,r[1]=En.y,r[5]=Rr.y,r[9]=Pt.y,r[2]=En.z,r[6]=Rr.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],c=n[12],l=n[1],f=n[5],h=n[9],m=n[13],d=n[2],v=n[6],g=n[10],p=n[14],x=n[3],_=n[7],y=n[11],M=n[15],E=r[0],w=r[4],D=r[8],b=r[12],A=r[1],F=r[5],T=r[9],S=r[13],R=r[2],C=r[6],k=r[10],N=r[14],U=r[3],z=r[7],H=r[11],ne=r[15];return s[0]=o*E+a*A+u*R+c*U,s[4]=o*w+a*F+u*C+c*z,s[8]=o*D+a*T+u*k+c*H,s[12]=o*b+a*S+u*N+c*ne,s[1]=l*E+f*A+h*R+m*U,s[5]=l*w+f*F+h*C+m*z,s[9]=l*D+f*T+h*k+m*H,s[13]=l*b+f*S+h*N+m*ne,s[2]=d*E+v*A+g*R+p*U,s[6]=d*w+v*F+g*C+p*z,s[10]=d*D+v*T+g*k+p*H,s[14]=d*b+v*S+g*N+p*ne,s[3]=x*E+_*A+y*R+M*U,s[7]=x*w+_*F+y*C+M*z,s[11]=x*D+_*T+y*k+M*H,s[15]=x*b+_*S+y*N+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],u=e[9],c=e[13],l=e[2],f=e[6],h=e[10],m=e[14],d=e[3],v=e[7],g=e[11],p=e[15];return d*(+s*u*f-r*c*f-s*a*h+n*c*h+r*a*m-n*u*m)+v*(+t*u*m-t*c*h+s*o*h-r*o*m+r*c*l-s*u*l)+g*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*l-n*c*l)+p*(-r*a*l-t*u*f+t*a*h+r*o*f-n*o*h+n*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],f=e[9],h=e[10],m=e[11],d=e[12],v=e[13],g=e[14],p=e[15],x=f*g*c-v*h*c+v*u*m-a*g*m-f*u*p+a*h*p,_=d*h*c-l*g*c-d*u*m+o*g*m+l*u*p-o*h*p,y=l*v*c-d*f*c+d*a*m-o*v*m-l*a*p+o*f*p,M=d*f*u-l*v*u-d*a*h+o*v*h+l*a*g-o*f*g,E=t*x+n*_+r*y+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(v*h*s-f*g*s-v*r*m+n*g*m+f*r*p-n*h*p)*w,e[2]=(a*g*s-v*u*s+v*r*c-n*g*c-a*r*p+n*u*p)*w,e[3]=(f*u*s-a*h*s-f*r*c+n*h*c+a*r*m-n*u*m)*w,e[4]=_*w,e[5]=(l*g*s-d*h*s+d*r*m-t*g*m-l*r*p+t*h*p)*w,e[6]=(d*u*s-o*g*s-d*r*c+t*g*c+o*r*p-t*u*p)*w,e[7]=(o*h*s-l*u*s+l*r*c-t*h*c-o*r*m+t*u*m)*w,e[8]=y*w,e[9]=(d*f*s-l*v*s-d*n*m+t*v*m+l*n*p-t*f*p)*w,e[10]=(o*v*s-d*a*s+d*n*c-t*v*c-o*n*p+t*a*p)*w,e[11]=(l*a*s-o*f*s-l*n*c+t*f*c+o*n*m-t*a*m)*w,e[12]=M*w,e[13]=(l*v*r-d*f*r+d*n*h-t*v*h-l*n*g+t*f*g)*w,e[14]=(d*a*r-o*v*r-d*n*u+t*v*u+o*n*g-t*a*g)*w,e[15]=(o*f*r-l*a*r+l*n*u-t*f*u-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,c=s*o,l=s*a;return this.set(c*o+n,c*a-r*u,c*u+r*a,0,c*a+r*u,l*a+n,l*u-r*o,0,c*u-r*a,l*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,c=s+s,l=o+o,f=a+a,h=s*c,m=s*l,d=s*f,v=o*l,g=o*f,p=a*f,x=u*c,_=u*l,y=u*f,M=n.x,E=n.y,w=n.z;return r[0]=(1-(v+p))*M,r[1]=(m+y)*M,r[2]=(d-_)*M,r[3]=0,r[4]=(m-y)*E,r[5]=(1-(h+p))*E,r[6]=(g+x)*E,r[7]=0,r[8]=(d+_)*w,r[9]=(g-x)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ui.set(r[0],r[1],r[2]).length();const o=ui.set(r[4],r[5],r[6]).length(),a=ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const c=1/s,l=1/o,f=1/a;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=l,Ht.elements[5]*=l,Ht.elements[6]*=l,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,u=2*s/(t-e),c=2*s/(n-r),l=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=u,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,u=1/(t-e),c=1/(n-r),l=1/(o-s),f=(t+e)*u,h=(n+r)*c,m=(o+s)*l;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new V,Ht=new ot,Od=new V(0,0,0),Nd=new V(1,1,1),En=new V,Rr=new V,Pt=new V,Ml=new ot,Sl=new qn;class hs{constructor(e=0,t=0,n=0,r=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],u=r[1],c=r[5],l=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fd=0;const bl=new V,fi=new qn,un=new ot,Cr=new V,Hi=new V,Bd=new V,kd=new qn,El=new V(1,0,0),wl=new V(0,1,0),Tl=new V(0,0,1),zd={type:"added"},Al={type:"removed"};class wt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new V,t=new hs,n=new qn,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Fe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(wl,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(wl,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Hi,Cr,this.up):un.lookAt(Cr,Hi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(un),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Al)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Al)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const f=u[c];s(e.shapes,f)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(s(e.materials,this.material[u]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),c=o(e.textures),l=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),d=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),d.length>0&&(n.nodes=d)}return n.object=r,n;function o(a){const u=[];for(const c in a){const l=a[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new V(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new V,fn=new V,ga=new V,hn=new V,hi=new V,di=new V,Rl=new V,_a=new V,va=new V,xa=new V;let Pr=!1;class $t{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),fn.subVectors(n,t),ga.subVectors(e,t);const o=Vt.dot(Vt),a=Vt.dot(fn),u=Vt.dot(ga),c=fn.dot(fn),l=fn.dot(ga),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*u-a*l)*h,d=(o*l-a*u)*h;return s.set(1-m-d,d,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hn),hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,n,r,s,o,a,u){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),this.getInterpolation(e,t,n,r,s,o,a,u)}static getInterpolation(e,t,n,r,s,o,a,u){return this.getBarycoord(e,t,n,r,hn),u.setScalar(0),u.addScaledVector(s,hn.x),u.addScaledVector(o,hn.y),u.addScaledVector(a,hn.z),u}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),fn.subVectors(e,t),Vt.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Vt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;hi.subVectors(r,n),di.subVectors(s,n),_a.subVectors(e,n);const u=hi.dot(_a),c=di.dot(_a);if(u<=0&&c<=0)return t.copy(n);va.subVectors(e,r);const l=hi.dot(va),f=di.dot(va);if(l>=0&&f<=l)return t.copy(r);const h=u*f-l*c;if(h<=0&&u>=0&&l<=0)return o=u/(u-l),t.copy(n).addScaledVector(hi,o);xa.subVectors(e,s);const m=hi.dot(xa),d=di.dot(xa);if(d>=0&&m<=d)return t.copy(s);const v=m*c-u*d;if(v<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(di,a);const g=l*d-m*f;if(g<=0&&f-l>=0&&m-d>=0)return Rl.subVectors(s,r),a=(f-l)/(f-l+(m-d)),t.copy(r).addScaledVector(Rl,a);const p=1/(g+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(hi,o).addScaledVector(di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gd=0;class ur extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Ti,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xu,this.blendDst=yu,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Te){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=bd(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ya(o,s,e+1/3),this.g=ya(o,s,e),this.b=ya(o,s,e-1/3)}return Gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Te){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Te){const n=Iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Te){return Gt.fromWorkingColorSpace(gt.copy(this),e),Math.round(bt(gt.r*255,0,255))*65536+Math.round(bt(gt.g*255,0,255))*256+Math.round(bt(gt.b*255,0,255))}getHexString(e=Te){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,r=gt.g,s=gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let u,c;const l=(a+o)/2;if(a===o)u=0,c=0;else{const f=o-a;switch(c=l<=.5?f/(o+a):f/(2-o-a),o){case n:u=(r-s)/f+(r<s?6:0);break;case r:u=(s-n)/f+2;break;case s:u=(n-r)/f+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Te){Gt.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,r=gt.b;return e!==Te?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=n,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Lr);const n=aa(Wt.h,Lr.h,t),r=aa(Wt.s,Lr.s,t),s=aa(Wt.l,Lr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new $e;$e.NAMES=Iu;class os extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new V,Dr=new Ue;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ou extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hd=0;const It=new ot,Ma=new wt,pi=new V,Lt=new cr,Vi=new cr,ft=new V;class Pn extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cu(e)?Nu:Ou)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Lt.min,Vi.min),Lt.expandByPoint(ft),ft.addVectors(Lt.max,Vi.max),Lt.expandByPoint(ft)):(Lt.expandByPoint(Vi.min),Lt.expandByPoint(Vi.max))}Lt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)ft.fromBufferAttribute(a,c),u&&(pi.fromBufferAttribute(e,c),ft.add(pi)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],l=[];for(let A=0;A<a;A++)c[A]=new V,l[A]=new V;const f=new V,h=new V,m=new V,d=new Ue,v=new Ue,g=new Ue,p=new V,x=new V;function _(A,F,T){f.fromArray(r,A*3),h.fromArray(r,F*3),m.fromArray(r,T*3),d.fromArray(o,A*2),v.fromArray(o,F*2),g.fromArray(o,T*2),h.sub(f),m.sub(f),v.sub(d),g.sub(d);const S=1/(v.x*g.y-g.x*v.y);isFinite(S)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(m,-v.y).multiplyScalar(S),x.copy(m).multiplyScalar(v.x).addScaledVector(h,-g.x).multiplyScalar(S),c[A].add(p),c[F].add(p),c[T].add(p),l[A].add(x),l[F].add(x),l[T].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,F=y.length;A<F;++A){const T=y[A],S=T.start,R=T.count;for(let C=S,k=S+R;C<k;C+=3)_(n[C+0],n[C+1],n[C+2])}const M=new V,E=new V,w=new V,D=new V;function b(A){w.fromArray(s,A*3),D.copy(w);const F=c[A];M.copy(F),M.sub(w.multiplyScalar(w.dot(F))).normalize(),E.crossVectors(D,F);const S=E.dot(l[A])<0?-1:1;u[A*4]=M.x,u[A*4+1]=M.y,u[A*4+2]=M.z,u[A*4+3]=S}for(let A=0,F=y.length;A<F;++A){const T=y[A],S=T.start,R=T.count;for(let C=S,k=S+R;C<k;C+=3)b(n[C+0]),b(n[C+1]),b(n[C+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,u=new V,c=new V,l=new V,f=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const d=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,d),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),l.subVectors(o,s),f.subVectors(r,s),l.cross(f),a.fromBufferAttribute(n,d),u.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(l),u.add(l),c.add(l),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(v,u.x,u.y,u.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),l.subVectors(o,s),f.subVectors(r,s),l.cross(f),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,u){const c=a.array,l=a.itemSize,f=a.normalized,h=new c.constructor(u.length*l);let m=0,d=0;for(let v=0,g=u.length;v<g;v++){a.isInterleavedBufferAttribute?m=u[v]*a.data.stride+a.offset:m=u[v]*l;for(let p=0;p<l;p++)h[d++]=c[m++]}return new tn(h,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const u=[],c=s[a];for(let l=0,f=c.length;l<f;l++){const h=c[l],m=e(h,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];l.push(m.toJSON(e.data))}l.length>0&&(r[u]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(t))}const s=e.morphAttributes;for(const c in s){const l=[],f=s[c];for(let h=0,m=f.length;h<m;h++)l.push(f[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,l=o.length;c<l;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new ot,Zt=new Id,Ur=new bo,Pl=new V,mi=new V,gi=new V,_i=new V,Sa=new V,Ir=new V,Or=new Ue,Nr=new Ue,Fr=new Ue,Ll=new V,Dl=new V,Ul=new V,Br=new V,kr=new V;class en extends wt{constructor(e=new Pn,t=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ir.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const l=a[u],f=s[u];l!==0&&(Sa.fromBufferAttribute(f,e),o?Ir.addScaledVector(Sa,l):Ir.addScaledVector(Sa.sub(t),l))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Zt.copy(e.ray).recast(e.near),!(Ur.containsPoint(Zt.origin)===!1&&(Zt.intersectSphere(Ur,Pl)===null||Zt.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Cl.copy(s).invert(),Zt.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&Zt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,l=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,d=f.length;m<d;m++){const v=f[m],g=s[v.materialIndex],p=Math.max(v.start,h.start),x=Math.min(o.count,Math.min(v.start+v.count,h.start+h.count));for(let _=p,y=x;_<y;_+=3){const M=o.getX(_),E=o.getX(_+1),w=o.getX(_+2);n=zr(this,g,e,Zt,u,c,l,M,E,w),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const m=Math.max(0,h.start),d=Math.min(o.count,h.start+h.count);for(let v=m,g=d;v<g;v+=3){const p=o.getX(v),x=o.getX(v+1),_=o.getX(v+2);n=zr(this,s,e,Zt,u,c,l,p,x,_),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,d=f.length;m<d;m++){const v=f[m],g=s[v.materialIndex],p=Math.max(v.start,h.start),x=Math.min(a.count,Math.min(v.start+v.count,h.start+h.count));for(let _=p,y=x;_<y;_+=3){const M=_,E=_+1,w=_+2;n=zr(this,g,e,Zt,u,c,l,M,E,w),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const m=Math.max(0,h.start),d=Math.min(a.count,h.start+h.count);for(let v=m,g=d;v<g;v+=3){const p=v,x=v+1,_=v+2;n=zr(this,s,e,Zt,u,c,l,p,x,_),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}}}function Vd(i,e,t,n,r,s,o,a){let u;if(e.side===Et?u=n.intersectTriangle(o,s,r,!0,a):u=n.intersectTriangle(r,s,o,e.side===An,a),u===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:i}}function zr(i,e,t,n,r,s,o,a,u,c){i.getVertexPosition(a,mi),i.getVertexPosition(u,gi),i.getVertexPosition(c,_i);const l=Vd(i,e,t,n,mi,gi,_i,Br);if(l){r&&(Or.fromBufferAttribute(r,a),Nr.fromBufferAttribute(r,u),Fr.fromBufferAttribute(r,c),l.uv=$t.getInterpolation(Br,mi,gi,_i,Or,Nr,Fr,new Ue)),s&&(Or.fromBufferAttribute(s,a),Nr.fromBufferAttribute(s,u),Fr.fromBufferAttribute(s,c),l.uv1=$t.getInterpolation(Br,mi,gi,_i,Or,Nr,Fr,new Ue),l.uv2=l.uv1),o&&(Ll.fromBufferAttribute(o,a),Dl.fromBufferAttribute(o,u),Ul.fromBufferAttribute(o,c),l.normal=$t.getInterpolation(Br,mi,gi,_i,Ll,Dl,Ul,new V),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:u,c,normal:new V,materialIndex:0};$t.getNormal(mi,gi,_i,f.normal),l.face=f}return l}class fr extends Pn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],c=[],l=[],f=[];let h=0,m=0;d("z","y","x",-1,-1,n,t,e,o,s,0),d("z","y","x",1,-1,n,t,-e,o,s,1),d("x","z","y",1,1,e,n,t,r,o,2),d("x","z","y",1,-1,e,n,-t,r,o,3),d("x","y","z",1,-1,e,t,n,r,s,4),d("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(l,3)),this.setAttribute("uv",new nn(f,2));function d(v,g,p,x,_,y,M,E,w,D,b){const A=y/w,F=M/D,T=y/2,S=M/2,R=E/2,C=w+1,k=D+1;let N=0,U=0;const z=new V;for(let H=0;H<k;H++){const ne=H*F-S;for(let K=0;K<C;K++){const W=K*A-T;z[v]=W*x,z[g]=ne*_,z[p]=R,c.push(z.x,z.y,z.z),z[v]=0,z[g]=0,z[p]=E>0?1:-1,l.push(z.x,z.y,z.z),f.push(K/w),f.push(1-H/D),N+=1}}for(let H=0;H<D;H++)for(let ne=0;ne<w;ne++){const K=h+ne+C*H,W=h+ne+C*(H+1),q=h+(ne+1)+C*(H+1),ie=h+(ne+1)+C*H;u.push(K,W,ie),u.push(W,q,ie),U+=6}a.addGroup(m,U,b),m+=U,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const r in n)e[r]=n[r]}return e}function Wd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fu(i){return i.getRenderTarget()===null?i.outputColorSpace:sn}const $d={clone:Ui,merge:Mt};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bu extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Bu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/c,r*=o.width/u,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,xi=1;class qd extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Dt(vi,xi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Dt(vi,xi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Dt(vi,xi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Dt(vi,xi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new Dt(vi,xi,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const c=new Dt(vi,xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,u,c]=this.children,l=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=_n,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(l),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ku extends vn{constructor(e,t,n,r,s,o,a,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,r,s,o,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yd extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wn?Te:$n),this.texture=new ku(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fr(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:wn});s.uniforms.tEquirect.value=t;const o=new en(r,s),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=Nt),new qd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ba=new V,Kd=new V,Zd=new Fe;class Fn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ba.subVectors(n,t).cross(Kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zd.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new bo,Gr=new V;class Eo{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],u=n[4],c=n[5],l=n[6],f=n[7],h=n[8],m=n[9],d=n[10],v=n[11],g=n[12],p=n[13],x=n[14],_=n[15];return t[0].setComponents(a-r,f-u,v-h,_-g).normalize(),t[1].setComponents(a+r,f+u,v+h,_+g).normalize(),t[2].setComponents(a+s,f+c,v+m,_+p).normalize(),t[3].setComponents(a-s,f-c,v-m,_-p).normalize(),t[4].setComponents(a-o,f-l,v-d,_-x).normalize(),t[5].setComponents(a+o,f+l,v+d,_+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Gr.x=r.normal.x>0?e.max.x:e.min.x,Gr.y=r.normal.y>0?e.max.y:e.min.y,Gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Jd(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,l){const f=c.array,h=c.usage,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,f,h),c.onUploadCallback();let d;if(f instanceof Float32Array)d=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)d=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else d=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)d=i.SHORT;else if(f instanceof Uint32Array)d=i.UNSIGNED_INT;else if(f instanceof Int32Array)d=i.INT;else if(f instanceof Int8Array)d=i.BYTE;else if(f instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:d,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,l,f){const h=l.array,m=l.updateRange;i.bindBuffer(f,c),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),l.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l&&(i.deleteBuffer(l.buffer),n.delete(c))}function u(c,l){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,l)):f.version<c.version&&(s(f.buffer,c,l),f.version=c.version)}return{get:o,remove:a,update:u}}class wo extends Pn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(r),c=a+1,l=u+1,f=e/a,h=t/u,m=[],d=[],v=[],g=[];for(let p=0;p<l;p++){const x=p*h-o;for(let _=0;_<c;_++){const y=_*f-s;d.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-p/u)}}for(let p=0;p<u;p++)for(let x=0;x<a;x++){const _=x+c*p,y=x+c*(p+1),M=x+1+c*(p+1),E=x+1+c*p;m.push(_,y,E),m.push(y,M,E)}this.setIndex(m),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp="vec3 transformed = vec3( position );",ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Hp=`#if defined( USE_ENVMAP )
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,qp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_UV
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
#endif`,$m=`#ifdef USE_UV
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
#endif`,jm=`#ifdef USE_UV
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eg=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ag=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,hg=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,yg=`#define TOON
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
}`,Mg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Ce={alphamap_fragment:Qd,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:rp,begin_vertex:sp,beginnormal_vertex:ap,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:dp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:_p,common:vp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:yp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Sp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ep,encodings_fragment:wp,encodings_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Hp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Up,fog_fragment:Ip,fog_pars_fragment:Op,gradientmap_pars_fragment:Np,lightmap_fragment:Fp,lightmap_pars_fragment:Bp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:zp,lights_pars_begin:Gp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:$p,lights_phong_pars_fragment:jp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:Kp,lights_fragment_end:Zp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:rm,map_particle_pars_fragment:sm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:hm,normal_fragment_maps:dm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:Mm,output_fragment:Sm,packing:bm,premultiplied_alpha_fragment:Em,project_vertex:wm,dithering_fragment:Tm,dithering_pars_fragment:Am,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Um,skinbase_vertex:Im,skinning_pars_vertex:Om,skinning_vertex:Nm,skinnormal_vertex:Fm,specularmap_fragment:Bm,specularmap_pars_fragment:km,tonemapping_fragment:zm,tonemapping_pars_fragment:Gm,transmission_fragment:Hm,transmission_pars_fragment:Vm,uv_pars_fragment:Wm,uv_pars_vertex:$m,uv_vertex:jm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:Km,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:Qm,depth_vert:eg,depth_frag:tg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:rg,equirect_frag:sg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:ug,meshlambert_frag:fg,meshmatcap_vert:hg,meshmatcap_frag:dg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:_g,meshphysical_vert:vg,meshphysical_frag:xg,meshtoon_vert:yg,meshtoon_frag:Mg,points_vert:Sg,points_frag:bg,shadow_vert:Eg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:Ag},le={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaTest:{value:0}}},Qt={basic:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Mt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Mt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Mt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Mt([le.points,le.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Mt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Mt([le.common,le.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Mt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Mt([le.sprite,le.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Mt([le.common,le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Mt([le.lights,le.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Qt.physical={uniforms:Mt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Hr={r:0,b:0,g:0};function Rg(i,e,t,n,r,s,o){const a=new $e(0);let u=s===!0?0:1,c,l,f=null,h=0,m=null;function d(g,p){let x=!1,_=p.isScene===!0?p.background:null;switch(_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,u):_&&_.isColor&&(v(_,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===fs)?(l===void 0&&(l=new en(new fr(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ui(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=_.colorSpace!==Te,(f!==_||h!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,m=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new en(new wo(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ui(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_.colorSpace!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,m=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(Hr,Fu(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),u=p,v(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(g){u=g,v(a,u)},render:d}}function Cg(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},u=g(null);let c=u,l=!1;function f(R,C,k,N,U){let z=!1;if(o){const H=v(N,k,C);c!==H&&(c=H,m(c.object)),z=p(R,N,k,U),z&&x(R,N,k,U)}else{const H=C.wireframe===!0;(c.geometry!==N.id||c.program!==k.id||c.wireframe!==H)&&(c.geometry=N.id,c.program=k.id,c.wireframe=H,z=!0)}U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||l)&&(l=!1,D(R,C,k,N),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function d(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function v(R,C,k){const N=k.wireframe===!0;let U=a[R.id];U===void 0&&(U={},a[R.id]=U);let z=U[C.id];z===void 0&&(z={},U[C.id]=z);let H=z[N];return H===void 0&&(H=g(h()),z[N]=H),H}function g(R){const C=[],k=[],N=[];for(let U=0;U<r;U++)C[U]=0,k[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:N,object:R,attributes:{},index:null}}function p(R,C,k,N){const U=c.attributes,z=C.attributes;let H=0;const ne=k.getAttributes();for(const K in ne)if(ne[K].location>=0){const q=U[K];let ie=z[K];if(ie===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;H++}return c.attributesNum!==H||c.index!==N}function x(R,C,k,N){const U={},z=C.attributes;let H=0;const ne=k.getAttributes();for(const K in ne)if(ne[K].location>=0){let q=z[K];q===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),U[K]=ie,H++}c.attributes=U,c.attributesNum=H,c.index=N}function _(){const R=c.newAttributes;for(let C=0,k=R.length;C<k;C++)R[C]=0}function y(R){M(R,0)}function M(R,C){const k=c.newAttributes,N=c.enabledAttributes,U=c.attributeDivisors;k[R]=1,N[R]===0&&(i.enableVertexAttribArray(R),N[R]=1),U[R]!==C&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,C),U[R]=C)}function E(){const R=c.newAttributes,C=c.enabledAttributes;for(let k=0,N=C.length;k<N;k++)C[k]!==R[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function w(R,C,k,N,U,z){n.isWebGL2===!0&&(k===i.INT||k===i.UNSIGNED_INT)?i.vertexAttribIPointer(R,C,k,U,z):i.vertexAttribPointer(R,C,k,N,U,z)}function D(R,C,k,N){if(n.isWebGL2===!1&&(R.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const U=N.attributes,z=k.getAttributes(),H=C.defaultAttributeValues;for(const ne in z){const K=z[ne];if(K.location>=0){let W=U[ne];if(W===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){const q=W.normalized,ie=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const O=Z.buffer,xe=Z.type,ye=Z.bytesPerElement;if(W.isInterleavedBufferAttribute){const oe=W.data,pe=oe.stride,Ie=W.offset;if(oe.isInstancedInterleavedBuffer){for(let me=0;me<K.locationSize;me++)M(K.location+me,oe.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<K.locationSize;me++)y(K.location+me);i.bindBuffer(i.ARRAY_BUFFER,O);for(let me=0;me<K.locationSize;me++)w(K.location+me,ie/K.locationSize,xe,q,pe*ye,(Ie+ie/K.locationSize*me)*ye)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<K.locationSize;oe++)M(K.location+oe,W.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<K.locationSize;oe++)y(K.location+oe);i.bindBuffer(i.ARRAY_BUFFER,O);for(let oe=0;oe<K.locationSize;oe++)w(K.location+oe,ie/K.locationSize,xe,q,ie*ye,ie/K.locationSize*oe*ye)}}else if(H!==void 0){const q=H[ne];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(K.location,q);break;case 3:i.vertexAttrib3fv(K.location,q);break;case 4:i.vertexAttrib4fv(K.location,q);break;default:i.vertexAttrib1fv(K.location,q)}}}}E()}function b(){T();for(const R in a){const C=a[R];for(const k in C){const N=C[k];for(const U in N)d(N[U].object),delete N[U];delete C[k]}delete a[R]}}function A(R){if(a[R.id]===void 0)return;const C=a[R.id];for(const k in C){const N=C[k];for(const U in N)d(N[U].object),delete N[U];delete C[k]}delete a[R.id]}function F(R){for(const C in a){const k=a[C];if(k[R.id]===void 0)continue;const N=k[R.id];for(const U in N)d(N[U].object),delete N[U];delete k[R.id]}}function T(){S(),l=!0,c!==u&&(c=u,m(c.object))}function S(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:f,reset:T,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:y,disableUnusedAttributes:E}}function Pg(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,l){i.drawArrays(s,c,l),t.update(l,s,1)}function u(c,l,f){if(f===0)return;let h,m;if(r)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,l,f),t.update(l,s,f)}this.setMode=o,this.render=a,this.renderInstances=u}function Lg(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),M=_&&y,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:d,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function Dg(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Fn,a=new Fe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||r;return r=h,n=f.length,m},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=l(f,h,0)},this.setState=function(f,h,m){const d=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||d===null||d.length===0||s&&!g)s?l(null):c();else{const x=s?0:n,_=x*4;let y=p.clippingState||null;u.value=y,y=l(d,h,_,m);for(let M=0;M!==_;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(f,h,m,d){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=u.value,d!==!0||g===null){const p=m+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=m;_!==v;++_,y+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Ug(i){let e=new WeakMap;function t(o,a){return a===to?o.mapping=Pi:a===no&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new Yd(u.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ig extends Bu{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,Il=[.125,.215,.35,.446,.526,.582],kn=20,Ea=new Ig,Ol=new $e;let wa=null;const Bn=(1+Math.sqrt(5))/2,yi=1/Bn,Nl=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Bn,yi),new V(0,Bn,-yi),new V(yi,0,Bn),new V(-yi,0,Bn),new V(Bn,yi,0),new V(-Bn,yi,0)];class Fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){wa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa),e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:ar,format:Xt,colorSpace:sn,depthBuffer:!1},r=Bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(s)),this._blurMaterial=Ng(s,e,t)}return r}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,r){const a=new Dt(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,h=l.toneMapping;l.getClearColor(Ol),l.toneMapping=_n,l.autoClear=!1;const m=new os({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),d=new en(new fr,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(Ol),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,u[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,u[p]),a.lookAt(0,c[p],0)):(a.up.set(0,u[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Vr(r,x*_,p>2?_:0,_,_),l.setRenderTarget(r),v&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pi||e.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;Vr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nl[(r-1)%Nl.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new en(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,d=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kn-1),v=s/d,g=isFinite(s)?1+Math.floor(l*v):kn;g>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${kn}`);const p=[];let x=0;for(let w=0;w<kn;++w){const D=w/v,b=Math.exp(-D*D/2);p.push(b),w===0?x+=b:w<g&&(x+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=d,h.mipInt.value=_-n;const y=this._sizeLods[r],M=3*y*(r>_-wi?r-_+wi:0),E=4*(this._cubeSize-y);Vr(t,M,E,3*y,2*y),u.setRenderTarget(t),u.render(f,Ea)}}function Og(i){const e=[],t=[],n=[];let r=i;const s=i-wi+1+Il.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let u=1/a;o>i-wi?u=Il[o-i+wi-1]:o===0&&(u=0),n.push(u);const c=1/(a-2),l=-c,f=1+c,h=[l,l,f,l,f,f,l,l,f,f,l,f],m=6,d=6,v=3,g=2,p=1,x=new Float32Array(v*d*m),_=new Float32Array(g*d*m),y=new Float32Array(p*d*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,D=E>2?0:-1,b=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];x.set(b,v*d*E),_.set(h,g*d*E);const A=[E,E,E,E,E,E];y.set(A,p*d*E)}const M=new Pn;M.setAttribute("position",new tn(x,v)),M.setAttribute("uv",new tn(_,g)),M.setAttribute("faceIndex",new tn(y,p)),e.push(M),r>wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bl(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ng(i,e,t){const n=new Float32Array(kn),r=new V(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:To(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function kl(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function zl(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}function Fg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,c=u===to||u===no,l=u===Pi||u===Li;if(c||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Fl(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||l&&f&&r(f)){t===null&&(t=new Fl(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function s(a){const u=a.target;u.removeEventListener("dispose",s);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kg(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const d in h.attributes)e.remove(h.attributes[d]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function u(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const d in m){const v=m[d];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,d=f.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let _=0,y=x.length;_<y;_+=3){const M=x[_+0],E=x[_+1],w=x[_+2];h.push(M,E,E,w,w,M)}}else{const x=d.array;v=d.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const M=_+0,E=_+1,w=_+2;h.push(M,E,E,w,w,M)}}const g=new(Cu(h)?Nu:Ou)(h,1);g.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function l(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:u,getWireframeAttribute:l}}function zg(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,u;function c(h){a=h.type,u=h.bytesPerElement}function l(h,m){i.drawElements(s,m,a,h*u),t.update(m,s,1)}function f(h,m,d){if(d===0)return;let v,g;if(r)v=i,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](s,m,a,h*u,d),t.update(m,s,d)}this.setMode=o,this.setIndex=c,this.render=l,this.renderInstances=f}function Gg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hg(i,e){return i[0]-e[0]}function Vg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Wg(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ke,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,l,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0;let g=s.get(l);if(g===void 0||g.count!==v){let C=function(){S.dispose(),s.delete(l),l.removeEventListener("dispose",C)};var m=C;g!==void 0&&g.texture.dispose();const _=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,E=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let b=0;_===!0&&(b=1),y===!0&&(b=2),M===!0&&(b=3);let A=l.attributes.position.count*b,F=1;A>e.maxTextureSize&&(F=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*F*4*v),S=new Du(T,A,F,v);S.type=Gn,S.needsUpdate=!0;const R=b*4;for(let k=0;k<v;k++){const N=E[k],U=w[k],z=D[k],H=A*F*4*k;for(let ne=0;ne<N.count;ne++){const K=ne*R;_===!0&&(o.fromBufferAttribute(N,ne),T[H+K+0]=o.x,T[H+K+1]=o.y,T[H+K+2]=o.z,T[H+K+3]=0),y===!0&&(o.fromBufferAttribute(U,ne),T[H+K+4]=o.x,T[H+K+5]=o.y,T[H+K+6]=o.z,T[H+K+7]=0),M===!0&&(o.fromBufferAttribute(z,ne),T[H+K+8]=o.x,T[H+K+9]=o.y,T[H+K+10]=o.z,T[H+K+11]=z.itemSize===4?o.w:1)}}g={count:v,texture:S,size:new Ue(A,F)},s.set(l,g),l.addEventListener("dispose",C)}let p=0;for(let _=0;_<h.length;_++)p+=h[_];const x=l.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const d=h===void 0?0:h.length;let v=n[l.id];if(v===void 0||v.length!==d){v=[];for(let y=0;y<d;y++)v[y]=[y,0];n[l.id]=v}for(let y=0;y<d;y++){const M=v[y];M[0]=y,M[1]=h[y]}v.sort(Vg);for(let y=0;y<8;y++)y<d&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Hg);const g=l.morphAttributes.position,p=l.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const M=a[y],E=M[0],w=M[1];E!==Number.MAX_SAFE_INTEGER&&w?(g&&l.getAttribute("morphTarget"+y)!==g[E]&&l.setAttribute("morphTarget"+y,g[E]),p&&l.getAttribute("morphNormal"+y)!==p[E]&&l.setAttribute("morphNormal"+y,p[E]),r[y]=w,x+=w):(g&&l.hasAttribute("morphTarget"+y)===!0&&l.deleteAttribute("morphTarget"+y),p&&l.hasAttribute("morphNormal"+y)===!0&&l.deleteAttribute("morphNormal"+y),r[y]=0)}const _=l.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",_),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function $g(i,e,t,n){let r=new WeakMap;function s(u){const c=n.render.frame,l=u.geometry,f=e.get(u,l);return r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Gu=new vn,Hu=new Du,Vu=new Dd,Wu=new ku,Gl=[],Hl=[],Vl=new Float32Array(16),Wl=new Float32Array(9),$l=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Gl[r];if(s===void 0&&(s=new Float32Array(r),Gl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ds(i,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function Kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;$l.set(n),i.uniformMatrix2fv(this.addr,!1,$l),ct(t,n)}}function Zg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Wl.set(n),i.uniformMatrix3fv(this.addr,!1,Wl),ct(t,n)}}function Jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Vl.set(n),i.uniformMatrix4fv(this.addr,!1,Vl),ct(t,n)}}function Qg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function i_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function r_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function o_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Gu,r)}function l_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vu,r)}function c_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wu,r)}function u_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hu,r)}function f_(i){switch(i){case 5126:return jg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Kg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return r_;case 36295:return s_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return u_}}function h_(i,e){i.uniform1fv(this.addr,e)}function d_(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function p_(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function m_(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function g_(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function __(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function v_(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function x_(i,e){i.uniform1iv(this.addr,e)}function y_(i,e){i.uniform2iv(this.addr,e)}function M_(i,e){i.uniform3iv(this.addr,e)}function S_(i,e){i.uniform4iv(this.addr,e)}function b_(i,e){i.uniform1uiv(this.addr,e)}function E_(i,e){i.uniform2uiv(this.addr,e)}function w_(i,e){i.uniform3uiv(this.addr,e)}function T_(i,e){i.uniform4uiv(this.addr,e)}function A_(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Gu,s[o])}function R_(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Vu,s[o])}function C_(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wu,s[o])}function P_(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hu,s[o])}function L_(i){switch(i){case 5126:return h_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return b_;case 36294:return E_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}class D_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=f_(t.type)}}class U_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=L_(t.type)}}class I_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function jl(i,e){i.seq.push(e),i.map[e.id]=e}function O_(i,e,t){const n=i.name,r=n.length;for(Ta.lastIndex=0;;){const s=Ta.exec(n),o=Ta.lastIndex;let a=s[1];const u=s[2]==="]",c=s[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===r){jl(t,c===void 0?new D_(a,i,e):new U_(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new I_(a),jl(t,f)),t=f}}}class Jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);O_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Xl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let N_=0;function F_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function B_(i){switch(i){case sn:return["Linear","( value )"];case Te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function ql(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+F_(i.getShaderSource(e),o)}else return r}function k_(i,e){const t=B_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function z_(i,e){let t;switch(e){case Jh:t="Linear";break;case Qh:t="Reinhard";break;case ed:t="OptimizedCineon";break;case td:t="ACESFilmic";break;case nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function G_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qi).join(`
`)}function H_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qi(i){return i!==""}function Yl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(W_,$_)}function $_(i,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return oo(t)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(i){return i.replace(j_,X_)}function X_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Y_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:e="ENVMAP_TYPE_CUBE";break;case fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function Z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function J_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Q_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=q_(t),c=Y_(t),l=K_(t),f=Z_(t),h=J_(t),m=t.isWebGL2?"":G_(t),d=H_(s),v=r.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[d].filter(qi).join(`
`),g.length>0&&(g+=`
`),p=[m,d].filter(qi).join(`
`),p.length>0&&(p+=`
`)):(g=[Jl(t),"#define SHADER_NAME "+t.shaderName,d,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),p=[m,Jl(t),"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Ce.tonemapping_pars_fragment:"",t.toneMapping!==_n?z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,k_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),o=oo(o),o=Yl(o,t),o=Kl(o,t),a=oo(a),a=Yl(a,t),a=Kl(a,t),o=Zl(o),a=Zl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+g+o,y=x+p+a,M=Xl(r,r.VERTEX_SHADER,_),E=Xl(r,r.FRAGMENT_SHADER,y);if(r.attachShader(v,M),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const b=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(M).trim(),F=r.getShaderInfoLog(E).trim();let T=!0,S=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(T=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,M,E);else{const R=ql(r,M,"vertex"),C=ql(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+R+`
`+C)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(A===""||F==="")&&(S=!1);S&&(this.diagnostics={runnable:T,programLog:b,vertexShader:{log:A,prefix:g},fragmentShader:{log:F,prefix:p}})}r.deleteShader(M),r.deleteShader(E);let w;this.getUniforms=function(){return w===void 0&&(w=new Jr(r,v)),w};let D;return this.getAttributes=function(){return D===void 0&&(D=V_(r,v)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=N_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}let ev=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nv(e),t.set(e,n)),n}}class nv{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}}function iv(i,e,t,n,r,s,o){const a=new Uu,u=new tv,c=[],l=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function g(b,A,F,T,S){const R=T.fog,C=S.geometry,k=b.isMeshStandardMaterial?T.environment:null,N=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),U=N&&N.mapping===fs?N.image.height:null,z=d[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const H=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=H!==void 0?H.length:0;let K=0;C.morphAttributes.position!==void 0&&(K=1),C.morphAttributes.normal!==void 0&&(K=2),C.morphAttributes.color!==void 0&&(K=3);let W,q,ie,Z;if(z){const He=Qt[z];W=He.vertexShader,q=He.fragmentShader}else W=b.vertexShader,q=b.fragmentShader,u.update(b),ie=u.getVertexShaderID(b),Z=u.getFragmentShaderID(b);const O=i.getRenderTarget(),xe=S.isInstancedMesh===!0,ye=!!b.map,oe=!!b.matcap,pe=!!N,Ie=!!b.aoMap,me=!!b.lightMap,Ae=!!b.bumpMap,Je=!!b.normalMap,Ze=!!b.displacementMap,rt=!!b.emissiveMap,tt=!!b.metalnessMap,Be=!!b.roughnessMap,Xe=b.clearcoat>0,dt=b.iridescence>0,I=b.sheen>0,P=b.transmission>0,Y=Xe&&!!b.clearcoatMap,re=Xe&&!!b.clearcoatNormalMap,ae=Xe&&!!b.clearcoatRoughnessMap,ce=dt&&!!b.iridescenceMap,B=dt&&!!b.iridescenceThicknessMap,te=I&&!!b.sheenColorMap,X=I&&!!b.sheenRoughnessMap,ue=!!b.specularMap,de=!!b.specularColorMap,_e=!!b.specularIntensityMap,fe=P&&!!b.transmissionMap,ge=P&&!!b.thicknessMap,be=!!b.gradientMap,Pe=!!b.alphaMap,nt=b.alphaTest>0,G=!!b.extensions,J=!!C.attributes.uv1,se=!!C.attributes.uv2,he=!!C.attributes.uv3;return{isWebGL2:l,shaderID:z,shaderName:b.type,vertexShader:W,fragmentShader:q,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:xe,instancingColor:xe&&S.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:sn,map:ye,matcap:oe,envMap:pe,envMapMode:pe&&N.mapping,envMapCubeUVHeight:U,aoMap:Ie,lightMap:me,bumpMap:Ae,normalMap:Je,displacementMap:h&&Ze,emissiveMap:rt,normalMapObjectSpace:Je&&b.normalMapType===Md,normalMapTangentSpace:Je&&b.normalMapType===wu,metalnessMap:tt,roughnessMap:Be,clearcoat:Xe,clearcoatMap:Y,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:dt,iridescenceMap:ce,iridescenceThicknessMap:B,sheen:I,sheenColorMap:te,sheenRoughnessMap:X,specularMap:ue,specularColorMap:de,specularIntensityMap:_e,transmission:P,transmissionMap:fe,thicknessMap:ge,gradientMap:be,opaque:b.transparent===!1&&b.blending===Ti,alphaMap:Pe,alphaTest:nt,combine:b.combine,mapUv:ye&&v(b.map.channel),aoMapUv:Ie&&v(b.aoMap.channel),lightMapUv:me&&v(b.lightMap.channel),bumpMapUv:Ae&&v(b.bumpMap.channel),normalMapUv:Je&&v(b.normalMap.channel),displacementMapUv:Ze&&v(b.displacementMap.channel),emissiveMapUv:rt&&v(b.emissiveMap.channel),metalnessMapUv:tt&&v(b.metalnessMap.channel),roughnessMapUv:Be&&v(b.roughnessMap.channel),clearcoatMapUv:Y&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:B&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:te&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:X&&v(b.sheenRoughnessMap.channel),specularMapUv:ue&&v(b.specularMap.channel),specularColorMapUv:de&&v(b.specularColorMap.channel),specularIntensityMapUv:_e&&v(b.specularIntensityMap.channel),transmissionMapUv:fe&&v(b.transmissionMap.channel),thicknessMapUv:ge&&v(b.thicknessMap.channel),alphaMapUv:Pe&&v(b.alphaMap.channel),vertexTangents:Je&&!!C.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:se,vertexUv3s:he,pointsUvs:S.isPoints===!0&&!!C.attributes.uv&&(ye||Pe),fog:!!R,useFog:b.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:S.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:_n,useLegacyLights:i.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mn,flipSided:b.side===Et,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:G&&b.extensions.derivatives===!0,extensionFragDepth:G&&b.extensions.fragDepth===!0,extensionDrawBuffers:G&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)A.push(F),A.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(x(A,b),_(A,b),A.push(i.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function x(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function _(b,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),b.push(a.mask)}function y(b){const A=d[b.type];let F;if(A){const T=Qt[A];F=$d.clone(T.uniforms)}else F=b.uniforms;return F}function M(b,A){let F;for(let T=0,S=c.length;T<S;T++){const R=c[T];if(R.cacheKey===A){F=R,++F.usedTimes;break}}return F===void 0&&(F=new Q_(i,A,b,s),c.push(F)),F}function E(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function w(b){u.remove(b)}function D(){u.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:D}}function rv(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function sv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ql(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ec(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,m,d,v,g){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:d,renderOrder:f.renderOrder,z:v,group:g},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=d,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function a(f,h,m,d,v,g){const p=o(f,h,m,d,v,g);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function u(f,h,m,d,v,g){const p=o(f,h,m,d,v,g);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||sv),n.length>1&&n.sort(h||Ql),r.length>1&&r.sort(h||Ql)}function l(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:u,finish:l,sort:c}}function av(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ec,i.set(n,[o])):r>=s.length?(o=new ec,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ov(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new $e};break;case"SpotLight":t={position:new V,direction:new V,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function lv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cv=0;function uv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fv(i,e){const t=new ov,n=lv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)r.probe.push(new V);const s=new V,o=new ot,a=new ot;function u(l,f){let h=0,m=0,d=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let v=0,g=0,p=0,x=0,_=0,y=0,M=0,E=0,w=0,D=0;l.sort(uv);const b=f===!0?Math.PI:1;for(let F=0,T=l.length;F<T;F++){const S=l[F],R=S.color,C=S.intensity,k=S.distance,N=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=R.r*C*b,m+=R.g*C*b,d+=R.b*C*b;else if(S.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(S.sh.coefficients[U],C);else if(S.isDirectionalLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity*b),S.castShadow){const z=S.shadow,H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.directionalShadow[v]=H,r.directionalShadowMap[v]=N,r.directionalShadowMatrix[v]=S.shadow.matrix,y++}r.directional[v]=U,v++}else if(S.isSpotLight){const U=t.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(R).multiplyScalar(C*b),U.distance=k,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,r.spot[p]=U;const z=S.shadow;if(S.map&&(r.spotLightMap[w]=S.map,w++,z.updateMatrices(S),S.castShadow&&D++),r.spotLightMatrix[p]=z.matrix,S.castShadow){const H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.spotShadow[p]=H,r.spotShadowMap[p]=N,E++}p++}else if(S.isRectAreaLight){const U=t.get(S);U.color.copy(R).multiplyScalar(C),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),r.rectArea[x]=U,x++}else if(S.isPointLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity*b),U.distance=S.distance,U.decay=S.decay,S.castShadow){const z=S.shadow,H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=N,r.pointShadowMatrix[g]=S.shadow.matrix,M++}r.point[g]=U,g++}else if(S.isHemisphereLight){const U=t.get(S);U.skyColor.copy(S.color).multiplyScalar(C*b),U.groundColor.copy(S.groundColor).multiplyScalar(C*b),r.hemi[_]=U,_++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=d;const A=r.hash;(A.directionalLength!==v||A.pointLength!==g||A.spotLength!==p||A.rectAreaLength!==x||A.hemiLength!==_||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==E||A.numSpotMaps!==w)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=x,r.point.length=g,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=E+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,A.directionalLength=v,A.pointLength=g,A.spotLength=p,A.rectAreaLength=x,A.hemiLength=_,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=E,A.numSpotMaps=w,r.version=cv++)}function c(l,f){let h=0,m=0,d=0,v=0,g=0;const p=f.matrixWorldInverse;for(let x=0,_=l.length;x<_;x++){const y=l[x];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(y.isSpotLight){const M=r.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),m++}else if(y.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:u,setupView:c,state:r}}function tc(i,e){const t=new fv(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function u(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a}}function hv(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let u;return a===void 0?(u=new tc(i,e),t.set(s,[u])):o>=a.length?(u=new tc(i,e),a.push(u)):u=a[o],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class dv extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
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
}`;function _v(i,e,t){let n=new Eo;const r=new Ue,s=new Ue,o=new Ke,a=new dv({depthPacking:yd}),u=new pv,c={},l=t.maxTextureSize,f={[An]:Et,[Et]:An,[mn]:mn},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const d=new Pn;d.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new en(d,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let p=this.type;this.render=function(M,E,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const D=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const T=p!==pn&&this.type===pn,S=p===pn&&this.type!==pn;for(let R=0,C=M.length;R<C;R++){const k=M[R],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();if(r.multiply(U),s.copy(N.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/U.y),r.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null||T===!0||S===!0){const H=this.type!==pn?{minFilter:St,magFilter:St}:{};N.map!==null&&N.map.dispose(),N.map=new Xn(r.x,r.y,H),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const z=N.getViewportCount();for(let H=0;H<z;H++){const ne=N.getViewport(H);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),F.viewport(o),N.updateMatrices(k,H),n=N.getFrustum(),y(E,w,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===pn&&x(N,w),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(D,b,A)};function x(M,E){const w=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Xn(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,w,h,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,w,m,v,null)}function _(M,E,w,D){let b=null;const A=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)b=A;else if(b=w.isPointLight===!0?u:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=b.uuid,T=E.uuid;let S=c[F];S===void 0&&(S={},c[F]=S);let R=S[T];R===void 0&&(R=b.clone(),S[T]=R),b=R}if(b.visible=E.visible,b.wireframe=E.wireframe,D===pn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=w}return b}function y(M,E,w,D,b){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===pn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const T=e.update(M),S=M.material;if(Array.isArray(S)){const R=T.groups;for(let C=0,k=R.length;C<k;C++){const N=R[C],U=S[N.materialIndex];if(U&&U.visible){const z=_(M,U,D,b);i.renderBufferDirect(w,null,T,z,M,N)}}}else if(S.visible){const R=_(M,S,D,b);i.renderBufferDirect(w,null,T,R,M,null)}}const F=M.children;for(let T=0,S=F.length;T<S;T++)y(F[T],E,w,D,b)}}function vv(i,e,t){const n=t.isWebGL2;function r(){let G=!1;const J=new Ke;let se=null;const he=new Ke(0,0,0,0);return{setMask:function(ve){se!==ve&&!G&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){G=ve},setClear:function(ve,He,Ve,pt,yn){yn===!0&&(ve*=pt,He*=pt,Ve*=pt),J.set(ve,He,Ve,pt),he.equals(J)===!1&&(i.clearColor(ve,He,Ve,pt),he.copy(J))},reset:function(){G=!1,se=null,he.set(-1,0,0,0)}}}function s(){let G=!1,J=null,se=null,he=null;return{setTest:function(ve){ve?O(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ve){J!==ve&&!G&&(i.depthMask(ve),J=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Vh:i.depthFunc(i.NEVER);break;case Wh:i.depthFunc(i.ALWAYS);break;case $h:i.depthFunc(i.LESS);break;case eo:i.depthFunc(i.LEQUAL);break;case jh:i.depthFunc(i.EQUAL);break;case Xh:i.depthFunc(i.GEQUAL);break;case qh:i.depthFunc(i.GREATER);break;case Yh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){G=ve},setClear:function(ve){he!==ve&&(i.clearDepth(ve),he=ve)},reset:function(){G=!1,J=null,se=null,he=null}}}function o(){let G=!1,J=null,se=null,he=null,ve=null,He=null,Ve=null,pt=null,yn=null;return{setTest:function(it){G||(it?O(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(it){J!==it&&!G&&(i.stencilMask(it),J=it)},setFunc:function(it,Ut,Kt){(se!==it||he!==Ut||ve!==Kt)&&(i.stencilFunc(it,Ut,Kt),se=it,he=Ut,ve=Kt)},setOp:function(it,Ut,Kt){(He!==it||Ve!==Ut||pt!==Kt)&&(i.stencilOp(it,Ut,Kt),He=it,Ve=Ut,pt=Kt)},setLocked:function(it){G=it},setClear:function(it){yn!==it&&(i.clearStencil(it),yn=it)},reset:function(){G=!1,J=null,se=null,he=null,ve=null,He=null,Ve=null,pt=null,yn=null}}}const a=new r,u=new s,c=new o,l=new WeakMap,f=new WeakMap;let h={},m={},d=new WeakMap,v=[],g=null,p=!1,x=null,_=null,y=null,M=null,E=null,w=null,D=null,b=!1,A=null,F=null,T=null,S=null,R=null;const C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=N>=2);let z=null,H={};const ne=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),W=new Ke().fromArray(ne),q=new Ke().fromArray(K);function ie(G,J,se,he){const ve=new Uint8Array(4),He=i.createTexture();i.bindTexture(G,He),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<se;Ve++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(J,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(J+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return He}const Z={};Z[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Z[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),O(i.DEPTH_TEST),u.setFunc(eo),Ze(!1),rt(zo),O(i.CULL_FACE),Ae(wn);function O(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function xe(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function ye(G,J){return m[G]!==J?(i.bindFramebuffer(G,J),m[G]=J,n&&(G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=J),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=J)),!0):!1}function oe(G,J){let se=v,he=!1;if(G)if(se=d.get(J),se===void 0&&(se=[],d.set(J,se)),G.isWebGLMultipleRenderTargets){const ve=G.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let He=0,Ve=ve.length;He<Ve;He++)se[He]=i.COLOR_ATTACHMENT0+He;se.length=ve.length,he=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,he=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function pe(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const Ie={[Ei]:i.FUNC_ADD,[Dh]:i.FUNC_SUBTRACT,[Uh]:i.FUNC_REVERSE_SUBTRACT};if(n)Ie[Wo]=i.MIN,Ie[$o]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(Ie[Wo]=G.MIN_EXT,Ie[$o]=G.MAX_EXT)}const me={[Ih]:i.ZERO,[Oh]:i.ONE,[Nh]:i.SRC_COLOR,[xu]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[yu]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA};function Ae(G,J,se,he,ve,He,Ve,pt){if(G===wn){p===!0&&(xe(i.BLEND),p=!1);return}if(p===!1&&(O(i.BLEND),p=!0),G!==Lh){if(G!==x||pt!==b){if((_!==Ei||E!==Ei)&&(i.blendEquation(i.FUNC_ADD),_=Ei,E=Ei),pt)switch(G){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.ONE,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,M=null,w=null,D=null,x=G,b=pt}return}ve=ve||J,He=He||se,Ve=Ve||he,(J!==_||ve!==E)&&(i.blendEquationSeparate(Ie[J],Ie[ve]),_=J,E=ve),(se!==y||he!==M||He!==w||Ve!==D)&&(i.blendFuncSeparate(me[se],me[he],me[He],me[Ve]),y=se,M=he,w=He,D=Ve),x=G,b=!1}function Je(G,J){G.side===mn?xe(i.CULL_FACE):O(i.CULL_FACE);let se=G.side===Et;J&&(se=!se),Ze(se),G.blending===Ti&&G.transparent===!1?Ae(wn):Ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const he=G.stencilWrite;c.setTest(he),he&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(G){A!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),A=G)}function rt(G){G!==Rh?(O(i.CULL_FACE),G!==F&&(G===zo?i.cullFace(i.BACK):G===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),F=G}function tt(G){G!==T&&(k&&i.lineWidth(G),T=G)}function Be(G,J,se){G?(O(i.POLYGON_OFFSET_FILL),(S!==J||R!==se)&&(i.polygonOffset(J,se),S=J,R=se)):xe(i.POLYGON_OFFSET_FILL)}function Xe(G){G?O(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function dt(G){G===void 0&&(G=i.TEXTURE0+C-1),z!==G&&(i.activeTexture(G),z=G)}function I(G,J,se){se===void 0&&(z===null?se=i.TEXTURE0+C-1:se=z);let he=H[se];he===void 0&&(he={type:void 0,texture:void 0},H[se]=he),(he.type!==G||he.texture!==J)&&(z!==se&&(i.activeTexture(se),z=se),i.bindTexture(G,J||Z[G]),he.type=G,he.texture=J)}function P(){const G=H[z];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(G){W.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),W.copy(G))}function ge(G){q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function be(G,J){let se=f.get(J);se===void 0&&(se=new WeakMap,f.set(J,se));let he=se.get(G);he===void 0&&(he=i.getUniformBlockIndex(J,G.name),se.set(G,he))}function Pe(G,J){const he=f.get(J).get(G);l.get(J)!==he&&(i.uniformBlockBinding(J,he,G.__bindingPointIndex),l.set(J,he))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},z=null,H={},m={},d=new WeakMap,v=[],g=null,p=!1,x=null,_=null,y=null,M=null,E=null,w=null,D=null,b=!1,A=null,F=null,T=null,S=null,R=null,W.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:O,disable:xe,bindFramebuffer:ye,drawBuffers:oe,useProgram:pe,setBlending:Ae,setMaterial:Je,setFlipSided:Ze,setCullFace:rt,setLineWidth:tt,setPolygonOffset:Be,setScissorTest:Xe,activeTexture:dt,bindTexture:I,unbindTexture:P,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:de,texImage3D:_e,updateUBOMapping:be,uniformBlockBinding:Pe,texStorage2D:X,texStorage3D:ue,texSubImage2D:ae,texSubImage3D:ce,compressedTexSubImage2D:B,compressedTexSubImage3D:te,scissor:fe,viewport:ge,reset:nt}}function xv(i,e,t,n,r,s,o){const a=r.isWebGL2,u=r.maxTextures,c=r.maxCubemapSize,l=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let v;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,P){return p?new OffscreenCanvas(I,P):as("canvas")}function _(I,P,Y,re){let ae=1;if((I.width>re||I.height>re)&&(ae=re/Math.max(I.width,I.height)),ae<1||P===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const ce=P?Ed:Math.floor,B=ce(ae*I.width),te=ce(ae*I.height);v===void 0&&(v=x(B,te));const X=Y?x(B,te):v;return X.width=B,X.height=te,X.getContext("2d").drawImage(I,0,0,B,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+B+"x"+te+")."),X}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function y(I){return vl(I.width)&&vl(I.height)}function M(I){return a?!1:I.wrapS!==jt||I.wrapT!==jt||I.minFilter!==St&&I.minFilter!==Nt}function E(I,P){return I.generateMipmaps&&P&&I.minFilter!==St&&I.minFilter!==Nt}function w(I){i.generateMipmap(I)}function D(I,P,Y,re,ae=!1){if(a===!1)return P;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=P;return P===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8)),P===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8)),P===i.RGBA&&(Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=re===Te&&ae===!1?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)),(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(I,P,Y){return E(I,Y)===!0||I.isFramebufferTexture&&I.minFilter!==St&&I.minFilter!==Nt?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function A(I){return I===St||I===jo||I===Js?i.NEAREST:i.LINEAR}function F(I){const P=I.target;P.removeEventListener("dispose",F),S(P),P.isVideoTexture&&d.delete(P)}function T(I){const P=I.target;P.removeEventListener("dispose",T),C(P)}function S(I){const P=n.get(I);if(P.__webglInit===void 0)return;const Y=I.source,re=g.get(Y);if(re){const ae=re[P.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(I),Object.keys(re).length===0&&g.delete(Y)}n.remove(I)}function R(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const Y=I.source,re=g.get(Y);delete re[P.__cacheKey],o.memory.textures--}function C(I){const P=I.texture,Y=n.get(I),re=n.get(P);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)i.deleteFramebuffer(Y.__webglFramebuffer[ae]),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[ae]);else{if(i.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ae=0,ce=P.length;ae<ce;ae++){const B=n.get(P[ae]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(P[ae])}n.remove(P),n.remove(I)}let k=0;function N(){k=0}function U(){const I=k;return I>=u&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+u),k+=1,I}function z(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function H(I,P){const Y=n.get(I);if(I.isVideoTexture&&Xe(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(Y,I,P);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+P)}function ne(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){xe(Y,I,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+P)}function K(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){xe(Y,I,P);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+P)}function W(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ye(Y,I,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+P)}const q={[io]:i.REPEAT,[jt]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},ie={[St]:i.NEAREST,[jo]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[id]:i.LINEAR_MIPMAP_NEAREST,[sr]:i.LINEAR_MIPMAP_LINEAR};function Z(I,P,Y){if(Y?(i.texParameteri(I,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ie[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ie[P.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==jt||P.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,A(P.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,A(P.minFilter)),P.minFilter!==St&&P.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===St||P.minFilter!==Js&&P.minFilter!==sr||P.type===Gn&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function O(I,P){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",F));const re=P.source;let ae=g.get(re);ae===void 0&&(ae={},g.set(re,ae));const ce=z(P);if(ce!==I.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[ce].usedTimes++;const B=ae[I.__cacheKey];B!==void 0&&(ae[I.__cacheKey].usedTimes--,B.usedTimes===0&&R(P)),I.__cacheKey=ce,I.__webglTexture=ae[ce].texture}return Y}function xe(I,P,Y){let re=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(re=i.TEXTURE_3D);const ae=O(I,P),ce=P.source;t.bindTexture(re,I.__webglTexture,i.TEXTURE0+Y);const B=n.get(ce);if(ce.version!==B.__version||ae===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const te=M(P)&&y(P.image)===!1;let X=_(P.image,te,!1,l);X=dt(P,X);const ue=y(X)||a,de=s.convert(P.format,P.colorSpace);let _e=s.convert(P.type),fe=D(P.internalFormat,de,_e,P.colorSpace);Z(re,P,ue);let ge;const be=P.mipmaps,Pe=a&&P.isVideoTexture!==!0,nt=B.__version===void 0||ae===!0,G=b(P,X,ue);if(P.isDepthTexture)fe=i.DEPTH_COMPONENT,a?P.type===Gn?fe=i.DEPTH_COMPONENT32F:P.type===zn?fe=i.DEPTH_COMPONENT24:P.type===Ai?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:P.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Vn&&fe===i.DEPTH_COMPONENT&&P.type!==bu&&P.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=zn,_e=s.convert(P.type)),P.format===Di&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,P.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ai,_e=s.convert(P.type))),nt&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,fe,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,de,_e,null));else if(P.isDataTexture)if(be.length>0&&ue){Pe&&nt&&t.texStorage2D(i.TEXTURE_2D,G,fe,be[0].width,be[0].height);for(let J=0,se=be.length;J<se;J++)ge=be[J],Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,_e,ge.data):t.texImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,de,_e,ge.data);P.generateMipmaps=!1}else Pe?(nt&&t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,X.width,X.height,de,_e,X.data)):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,de,_e,X.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Pe&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,fe,be[0].width,be[0].height,X.depth);for(let J=0,se=be.length;J<se;J++)ge=be[J],P.format!==Xt?de!==null?Pe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,X.depth,de,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,fe,ge.width,ge.height,X.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,X.depth,de,_e,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,fe,ge.width,ge.height,X.depth,0,de,_e,ge.data)}else{Pe&&nt&&t.texStorage2D(i.TEXTURE_2D,G,fe,be[0].width,be[0].height);for(let J=0,se=be.length;J<se;J++)ge=be[J],P.format!==Xt?de!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,_e,ge.data):t.texImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,de,_e,ge.data)}else if(P.isDataArrayTexture)Pe?(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,fe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,de,_e,X.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,X.width,X.height,X.depth,0,de,_e,X.data);else if(P.isData3DTexture)Pe?(nt&&t.texStorage3D(i.TEXTURE_3D,G,fe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,de,_e,X.data)):t.texImage3D(i.TEXTURE_3D,0,fe,X.width,X.height,X.depth,0,de,_e,X.data);else if(P.isFramebufferTexture){if(nt)if(Pe)t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height);else{let J=X.width,se=X.height;for(let he=0;he<G;he++)t.texImage2D(i.TEXTURE_2D,he,fe,J,se,0,de,_e,null),J>>=1,se>>=1}}else if(be.length>0&&ue){Pe&&nt&&t.texStorage2D(i.TEXTURE_2D,G,fe,be[0].width,be[0].height);for(let J=0,se=be.length;J<se;J++)ge=be[J],Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,de,_e,ge):t.texImage2D(i.TEXTURE_2D,J,fe,de,_e,ge);P.generateMipmaps=!1}else Pe?(nt&&t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,_e,X)):t.texImage2D(i.TEXTURE_2D,0,fe,de,_e,X);E(P,ue)&&w(re),B.__version=ce.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ye(I,P,Y){if(P.image.length!==6)return;const re=O(I,P),ae=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const ce=n.get(ae);if(ae.version!==ce.__version||re===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const B=P.isCompressedTexture||P.image[0].isCompressedTexture,te=P.image[0]&&P.image[0].isDataTexture,X=[];for(let J=0;J<6;J++)!B&&!te?X[J]=_(P.image[J],!1,!0,c):X[J]=te?P.image[J].image:P.image[J],X[J]=dt(P,X[J]);const ue=X[0],de=y(ue)||a,_e=s.convert(P.format,P.colorSpace),fe=s.convert(P.type),ge=D(P.internalFormat,_e,fe,P.colorSpace),be=a&&P.isVideoTexture!==!0,Pe=ce.__version===void 0||re===!0;let nt=b(P,ue,de);Z(i.TEXTURE_CUBE_MAP,P,de);let G;if(B){be&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,ge,ue.width,ue.height);for(let J=0;J<6;J++){G=X[J].mipmaps;for(let se=0;se<G.length;se++){const he=G[se];P.format!==Xt?_e!==null?be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,0,0,he.width,he.height,_e,fe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,ge,he.width,he.height,0,_e,fe,he.data)}}}else{G=P.mipmaps,be&&Pe&&(G.length>0&&nt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,ge,X[0].width,X[0].height));for(let J=0;J<6;J++)if(te){be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,X[J].width,X[J].height,_e,fe,X[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ge,X[J].width,X[J].height,0,_e,fe,X[J].data);for(let se=0;se<G.length;se++){const ve=G[se].image[J].image;be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,0,0,ve.width,ve.height,_e,fe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,ge,ve.width,ve.height,0,_e,fe,ve.data)}}else{be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,fe,X[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ge,_e,fe,X[J]);for(let se=0;se<G.length;se++){const he=G[se];be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,0,0,_e,fe,he.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,ge,_e,fe,he.image[J])}}}E(P,de)&&w(i.TEXTURE_CUBE_MAP),ce.__version=ae.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function oe(I,P,Y,re,ae){const ce=s.convert(Y.format,Y.colorSpace),B=s.convert(Y.type),te=D(Y.internalFormat,ce,B,Y.colorSpace);n.get(P).__hasExternalTextures||(ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,te,P.width,P.height,P.depth,0,ce,B,null):t.texImage2D(ae,0,te,P.width,P.height,0,ce,B,null)),t.bindFramebuffer(i.FRAMEBUFFER,I),Be(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ae,n.get(Y).__webglTexture,0,tt(P)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ae,n.get(Y).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(I,P,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer&&!P.stencilBuffer){let re=i.DEPTH_COMPONENT16;if(Y||Be(P)){const ae=P.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Gn?re=i.DEPTH_COMPONENT32F:ae.type===zn&&(re=i.DEPTH_COMPONENT24));const ce=tt(P);Be(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,re,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,re,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(P.depthBuffer&&P.stencilBuffer){const re=tt(P);Y&&Be(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,P.width,P.height):Be(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const re=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ae=0;ae<re.length;ae++){const ce=re[ae],B=s.convert(ce.format,ce.colorSpace),te=s.convert(ce.type),X=D(ce.internalFormat,B,te,ce.colorSpace),ue=tt(P);Y&&Be(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,X,P.width,P.height):Be(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,X,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,X,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),H(P.depthTexture,0);const re=n.get(P.depthTexture).__webglTexture,ae=tt(P);if(P.depthTexture.format===Vn)Be(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(P.depthTexture.format===Di)Be(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function me(I){const P=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ie(P.__webglFramebuffer,I)}else if(Y){P.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[re]),P.__webglDepthbuffer[re]=i.createRenderbuffer(),pe(P.__webglDepthbuffer[re],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),pe(P.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,P,Y){const re=n.get(I);P!==void 0&&oe(re.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),Y!==void 0&&me(I)}function Je(I){const P=I.texture,Y=n.get(I),re=n.get(P);I.addEventListener("dispose",T),I.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=P.version,o.memory.textures++);const ae=I.isWebGLCubeRenderTarget===!0,ce=I.isWebGLMultipleRenderTargets===!0,B=y(I)||a;if(ae){Y.__webglFramebuffer=[];for(let te=0;te<6;te++)Y.__webglFramebuffer[te]=i.createFramebuffer()}else{if(Y.__webglFramebuffer=i.createFramebuffer(),ce)if(r.drawBuffers){const te=I.texture;for(let X=0,ue=te.length;X<ue;X++){const de=n.get(te[X]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Be(I)===!1){const te=ce?P:[P];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let X=0;X<te.length;X++){const ue=te[X];Y.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[X]);const de=s.convert(ue.format,ue.colorSpace),_e=s.convert(ue.type),fe=D(ue.internalFormat,de,_e,ue.colorSpace,I.isXRRenderTarget===!0),ge=tt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,fe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,Y.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Z(i.TEXTURE_CUBE_MAP,P,B);for(let te=0;te<6;te++)oe(Y.__webglFramebuffer[te],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te);E(P,B)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const te=I.texture;for(let X=0,ue=te.length;X<ue;X++){const de=te[X],_e=n.get(de);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Z(i.TEXTURE_2D,de,B),oe(Y.__webglFramebuffer,I,de,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D),E(de,B)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,re.__webglTexture),Z(te,P,B),oe(Y.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,te),E(P,B)&&w(te),t.unbindTexture()}I.depthBuffer&&me(I)}function Ze(I){const P=y(I)||a,Y=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let re=0,ae=Y.length;re<ae;re++){const ce=Y[re];if(E(ce,P)){const B=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=n.get(ce).__webglTexture;t.bindTexture(B,te),w(B),t.unbindTexture()}}}function rt(I){if(a&&I.samples>0&&Be(I)===!1){const P=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Y=I.width,re=I.height;let ae=i.COLOR_BUFFER_BIT;const ce=[],B=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(I),X=I.isWebGLMultipleRenderTargets===!0;if(X)for(let ue=0;ue<P.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ue=0;ue<P.length;ue++){ce.push(i.COLOR_ATTACHMENT0+ue),I.depthBuffer&&ce.push(B);const de=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(de===!1&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),X&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]),de===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[B]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[B])),X){const _e=n.get(P[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,Y,re,0,0,Y,re,ae,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ue=0;ue<P.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);const de=n.get(P[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function tt(I){return Math.min(f,I.samples)}function Be(I){const P=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Xe(I){const P=o.render.frame;d.get(I)!==P&&(d.set(I,P),I.update())}function dt(I,P){const Y=I.colorSpace,re=I.format,ae=I.type;return I.isCompressedTexture===!0||I.format===so||Y!==sn&&Y!==$n&&(Y===Te?a===!1?e.has("EXT_sRGB")===!0&&re===Xt?(I.format=so,I.minFilter=Nt,I.generateMipmaps=!1):P=Pu.sRGBToLinear(P):(re!==Xt||ae!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),P}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Ae,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Be}function yv(i,e,t){const n=t.isWebGL2;function r(s,o=$n){let a;if(s===jn)return i.UNSIGNED_BYTE;if(s===od)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ld)return i.UNSIGNED_SHORT_5_5_5_1;if(s===rd)return i.BYTE;if(s===sd)return i.SHORT;if(s===bu)return i.UNSIGNED_SHORT;if(s===ad)return i.INT;if(s===zn)return i.UNSIGNED_INT;if(s===Gn)return i.FLOAT;if(s===ar)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cd)return i.ALPHA;if(s===Xt)return i.RGBA;if(s===ud)return i.LUMINANCE;if(s===fd)return i.LUMINANCE_ALPHA;if(s===Vn)return i.DEPTH_COMPONENT;if(s===Di)return i.DEPTH_STENCIL;if(s===so)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hd)return i.RED;if(s===dd)return i.RED_INTEGER;if(s===pd)return i.RG;if(s===md)return i.RG_INTEGER;if(s===gd)return i.RGBA_INTEGER;if(s===Qs||s===ea||s===ta||s===na)if(o===Te)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xo||s===qo||s===Yo||s===Ko)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zo||s===Jo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zo)return o===Te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jo)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qo||s===el||s===tl||s===nl||s===il||s===rl||s===sl||s===al||s===ol||s===ll||s===cl||s===ul||s===fl||s===hl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qo)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===el)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===il)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===al)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ol)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ll)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ul)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ia)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ia)return o===Te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===vd||s===dl||s===pl||s===ml)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ia)return a.COMPRESSED_RED_RGTC1_EXT;if(s===dl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ml)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Mv extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wr extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const l=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=l.position.distanceTo(f.position),m=.02,d=.005;c.inputState.pinching&&h>m+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bv extends vn{constructor(e,t,n,r,s,o,a,u,c,l){if(l=l!==void 0?l:Vn,l!==Vn&&l!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Vn&&(n=zn),n===void 0&&l===Di&&(n=Ai),super(null,r,s,o,a,u,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=u!==void 0?u:St,this.flipY=!1,this.generateMipmaps=!1}}class Ev extends Zn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",u=1,c=null,l=null,f=null,h=null,m=null,d=null;const v=t.getContextAttributes();let g=null,p=null;const x=[],_=[],y=new Set,M=new Map,E=new Dt;E.layers.enable(1),E.viewport=new Ke;const w=new Dt;w.layers.enable(2),w.viewport=new Ke;const D=[E,w],b=new Mv;b.layers.enable(1),b.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=x[W];return q===void 0&&(q=new Aa,x[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=x[W];return q===void 0&&(q=new Aa,x[W]=q),q.getGripSpace()},this.getHand=function(W){let q=x[W];return q===void 0&&(q=new Aa,x[W]=q),q.getHandSpace()};function T(W){const q=_.indexOf(W.inputSource);if(q===-1)return;const ie=x[q];ie!==void 0&&(ie.update(W.inputSource,W.frame,c||o),ie.dispatchEvent({type:W.type,data:W.inputSource}))}function S(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",S),r.removeEventListener("inputsourceschange",R);for(let W=0;W<x.length;W++){const q=_[W];q!==null&&(_[W]=null,x[W].disconnect(q))}A=null,F=null,e.setRenderTarget(g),m=null,h=null,f=null,r=null,p=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",S),r.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),p=new Xn(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let q=null,ie=null,Z=null;v.depth&&(Z=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?Di:Vn,ie=v.stencil?Ai:zn);const O={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(O),r.updateRenderState({layers:[h]}),p=new Xn(h.textureWidth,h.textureHeight,{format:Xt,type:jn,depthTexture:new bv(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const xe=e.properties.get(p);xe.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(W){for(let q=0;q<W.removed.length;q++){const ie=W.removed[q],Z=_.indexOf(ie);Z>=0&&(_[Z]=null,x[Z].disconnect(ie))}for(let q=0;q<W.added.length;q++){const ie=W.added[q];let Z=_.indexOf(ie);if(Z===-1){for(let xe=0;xe<x.length;xe++)if(xe>=_.length){_.push(ie),Z=xe;break}else if(_[xe]===null){_[xe]=ie,Z=xe;break}if(Z===-1)break}const O=x[Z];O&&O.connect(ie)}}const C=new V,k=new V;function N(W,q,ie){C.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(ie.matrixWorld);const Z=C.distanceTo(k),O=q.projectionMatrix.elements,xe=ie.projectionMatrix.elements,ye=O[14]/(O[10]-1),oe=O[14]/(O[10]+1),pe=(O[9]+1)/O[5],Ie=(O[9]-1)/O[5],me=(O[8]-1)/O[0],Ae=(xe[8]+1)/xe[0],Je=ye*me,Ze=ye*Ae,rt=Z/(-me+Ae),tt=rt*-me;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(tt),W.translateZ(rt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Be=ye+rt,Xe=oe+rt,dt=Je-tt,I=Ze+(Z-tt),P=pe*oe/Xe*Be,Y=Ie*oe/Xe*Be;W.projectionMatrix.makePerspective(dt,I,P,Y,Be,Xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function U(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;b.near=w.near=E.near=W.near,b.far=w.far=E.far=W.far,(A!==b.near||F!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,F=b.far);const q=W.parent,ie=b.cameras;U(b,q);for(let Z=0;Z<ie.length;Z++)U(ie[Z],q);ie.length===2?N(b,E,w):b.projectionMatrix.copy(E.projectionMatrix),z(W,b,q)};function z(W,q,ie){ie===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const Z=W.children;for(let O=0,xe=Z.length;O<xe;O++)Z[O].updateMatrixWorld(!0);W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ao*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&m===null))return u},this.setFoveation=function(W){u=W,h!==null&&(h.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.getPlanes=function(){return y};let H=null;function ne(W,q){if(l=q.getViewerPose(c||o),d=q,l!==null){const ie=l.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let Z=!1;ie.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let O=0;O<ie.length;O++){const xe=ie[O];let ye=null;if(m!==null)ye=m.getViewport(xe);else{const pe=f.getViewSubImage(h,xe);ye=pe.viewport,O===0&&(e.setRenderTargetTextures(p,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(p))}let oe=D[O];oe===void 0&&(oe=new Dt,oe.layers.enable(O),oe.viewport=new Ke,D[O]=oe),oe.matrix.fromArray(xe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(xe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ye.x,ye.y,ye.width,ye.height),O===0&&(b.matrix.copy(oe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Z===!0&&b.cameras.push(oe)}}for(let ie=0;ie<x.length;ie++){const Z=_[ie],O=x[ie];Z!==null&&O!==void 0&&O.update(Z,q,c||o)}if(H&&H(W,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ie=null;for(const Z of y)q.detectedPlanes.has(Z)||(ie===null&&(ie=[]),ie.push(Z));if(ie!==null)for(const Z of ie)y.delete(Z),M.delete(Z),n.dispatchEvent({type:"planeremoved",data:Z});for(const Z of q.detectedPlanes)if(!y.has(Z))y.add(Z),M.set(Z,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Z});else{const O=M.get(Z);Z.lastChangedTime>O&&(M.set(Z,Z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Z}))}}d=null}const K=new zu;K.setAnimationLoop(ne),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}}function wv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Fu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),l(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&m(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),d(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?u(g,p,x,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Et&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Et&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const _=i.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function u(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Et&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tv(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(d(x),y=l(x),r[x.id]=y,x.addEventListener("dispose",g));const M=_.program;n.updateUBOMapping(x,M);const E=e.render.frame;s[x.id]!==E&&(h(x),s[x.id]=E)}function l(x){const _=f();x.__bindingPointIndex=_;const y=i.createBuffer(),M=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=r[x.id],y=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,w=y.length;E<w;E++){const D=y[E];if(m(D,E,M)===!0){const b=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let T=0;T<A.length;T++){const S=A[T],R=v(S);typeof S=="number"?(D.__data[0]=S,i.bufferSubData(i.UNIFORM_BUFFER,b+F,D.__data)):S.isMatrix3?(D.__data[0]=S.elements[0],D.__data[1]=S.elements[1],D.__data[2]=S.elements[2],D.__data[3]=S.elements[0],D.__data[4]=S.elements[3],D.__data[5]=S.elements[4],D.__data[6]=S.elements[5],D.__data[7]=S.elements[0],D.__data[8]=S.elements[6],D.__data[9]=S.elements[7],D.__data[10]=S.elements[8],D.__data[11]=S.elements[0]):(S.toArray(D.__data,F),F+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,D.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,_,y){const M=x.value;if(y[_]===void 0){if(typeof M=="number")y[_]=M;else{const E=Array.isArray(M)?M:[M],w=[];for(let D=0;D<E.length;D++)w.push(E[D].clone());y[_]=w}return!0}else if(typeof M=="number"){if(y[_]!==M)return y[_]=M,!0}else{const E=Array.isArray(y[_])?y[_]:[y[_]],w=Array.isArray(M)?M:[M];for(let D=0;D<E.length;D++){const b=E[D];if(b.equals(w[D])===!1)return b.copy(w[D]),!0}}return!1}function d(x){const _=x.uniforms;let y=0;const M=16;let E=0;for(let w=0,D=_.length;w<D;w++){const b=_[w],A={boundary:0,storage:0},F=Array.isArray(b.value)?b.value:[b.value];for(let T=0,S=F.length;T<S;T++){const R=F[T],C=v(R);A.boundary+=C.boundary,A.storage+=C.storage}if(b.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,w>0){E=y%M;const T=M-E;E!==0&&T-A.boundary<0&&(y+=M-E,b.__offset=y)}y+=A.storage}return E=y%M,E>0&&(y+=M-E),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:u,update:c,dispose:p}}function Av(){const i=as("canvas");return i.style.display="block",i}class $u{constructor(e={}){const{canvas:t=Av(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let m=null,d=null;const v=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Te,this.useLegacyLights=!0,this.toneMapping=_n,this.toneMappingExposure=1;const p=this;let x=!1,_=0,y=0,M=null,E=-1,w=null;const D=new Ke,b=new Ke;let A=null,F=t.width,T=t.height,S=1,R=null,C=null;const k=new Ke(0,0,F,T),N=new Ke(0,0,F,T);let U=!1;const z=new Eo;let H=!1,ne=!1,K=null;const W=new ot,q=new V,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return M===null?S:1}let O=n;function xe(L,j){for(let Q=0;Q<L.length;Q++){const $=L[Q],ee=t.getContext($,j);if(ee!==null)return ee}return null}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${So}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const j=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&j.shift(),O=xe(j,L),O===null)throw xe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ye,oe,pe,Ie,me,Ae,Je,Ze,rt,tt,Be,Xe,dt,I,P,Y,re,ae,ce,B,te,X,ue,de;function _e(){ye=new Bg(O),oe=new Lg(O,ye,e),ye.init(oe),X=new yv(O,ye,oe),pe=new vv(O,ye,oe),Ie=new Gg(O),me=new rv,Ae=new xv(O,ye,pe,me,oe,X,Ie),Je=new Ug(p),Ze=new Fg(p),rt=new Jd(O,oe),ue=new Cg(O,ye,rt,oe),tt=new kg(O,rt,Ie,ue),Be=new $g(O,tt,rt,Ie),ce=new Wg(O,oe,Ae),Y=new Dg(me),Xe=new iv(p,Je,Ze,ye,oe,ue,Y),dt=new wv(p,me),I=new av,P=new hv(ye,oe),ae=new Rg(p,Je,Ze,pe,Be,h,u),re=new _v(p,Be,oe),de=new Tv(O,Ie,oe,pe),B=new Pg(O,ye,Ie,oe),te=new zg(O,ye,Ie,oe),Ie.programs=Xe.programs,p.capabilities=oe,p.extensions=ye,p.properties=me,p.renderLists=I,p.shadowMap=re,p.state=pe,p.info=Ie}_e();const fe=new Ev(p,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const L=ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(L){L!==void 0&&(S=L,this.setSize(F,T,!1))},this.getSize=function(L){return L.set(F,T)},this.setSize=function(L,j,Q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,T=j,t.width=Math.floor(L*S),t.height=Math.floor(j*S),Q===!0&&(t.style.width=L+"px",t.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(F*S,T*S).floor()},this.setDrawingBufferSize=function(L,j,Q){F=L,T=j,S=Q,t.width=Math.floor(L*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,j,Q,$){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,j,Q,$),pe.viewport(D.copy(k).multiplyScalar(S).floor())},this.getScissor=function(L){return L.copy(N)},this.setScissor=function(L,j,Q,$){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,j,Q,$),pe.scissor(b.copy(N).multiplyScalar(S).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(L){pe.setScissorTest(U=L)},this.setOpaqueSort=function(L){R=L},this.setTransparentSort=function(L){C=L},this.getClearColor=function(L){return L.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(L=!0,j=!0,Q=!0){let $=0;L&&($|=O.COLOR_BUFFER_BIT),j&&($|=O.DEPTH_BUFFER_BIT),Q&&($|=O.STENCIL_BUFFER_BIT),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),I.dispose(),P.dispose(),me.dispose(),Je.dispose(),Ze.dispose(),Be.dispose(),ue.dispose(),de.dispose(),Xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ve),fe.removeEventListener("sessionend",He),K&&(K.dispose(),K=null),Ve.stop()};function ge(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const L=Ie.autoReset,j=re.enabled,Q=re.autoUpdate,$=re.needsUpdate,ee=re.type;_e(),Ie.autoReset=L,re.enabled=j,re.autoUpdate=Q,re.needsUpdate=$,re.type=ee}function Pe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function nt(L){const j=L.target;j.removeEventListener("dispose",nt),G(j)}function G(L){J(L),me.remove(L)}function J(L){const j=me.get(L).programs;j!==void 0&&(j.forEach(function(Q){Xe.releaseProgram(Q)}),L.isShaderMaterial&&Xe.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,Q,$,ee,Me){j===null&&(j=ie);const Se=ee.isMesh&&ee.matrixWorld.determinant()<0,Ee=sf(L,j,Q,$,ee);pe.setMaterial($,Se);let Re=Q.index,Le=1;$.wireframe===!0&&(Re=tt.getWireframeAttribute(Q),Le=2);const De=Q.drawRange,Oe=Q.attributes.position;let ze=De.start*Le,xt=(De.start+De.count)*Le;Me!==null&&(ze=Math.max(ze,Me.start*Le),xt=Math.min(xt,(Me.start+Me.count)*Le)),Re!==null?(ze=Math.max(ze,0),xt=Math.min(xt,Re.count)):Oe!=null&&(ze=Math.max(ze,0),xt=Math.min(xt,Oe.count));const zt=xt-ze;if(zt<0||zt===1/0)return;ue.setup(ee,$,Ee,Q,Re);let Ln,st=B;if(Re!==null&&(Ln=rt.get(Re),st=te,st.setIndex(Ln)),ee.isMesh)$.wireframe===!0?(pe.setLineWidth($.wireframeLinewidth*Z()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(ee.isLine){let Ne=$.linewidth;Ne===void 0&&(Ne=1),pe.setLineWidth(Ne*Z()),ee.isLineSegments?st.setMode(O.LINES):ee.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else ee.isPoints?st.setMode(O.POINTS):ee.isSprite&&st.setMode(O.TRIANGLES);if(ee.isInstancedMesh)st.renderInstances(ze,zt,ee.count);else if(Q.isInstancedBufferGeometry){const Ne=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Hs=Math.min(Q.instanceCount,Ne);st.renderInstances(ze,zt,Hs)}else st.render(ze,zt)},this.compile=function(L,j){function Q($,ee,Me){$.transparent===!0&&$.side===mn&&$.forceSinglePass===!1?($.side=Et,$.needsUpdate=!0,Mr($,ee,Me),$.side=An,$.needsUpdate=!0,Mr($,ee,Me),$.side=mn):Mr($,ee,Me)}d=P.get(L),d.init(),g.push(d),L.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),d.setupLights(p.useLegacyLights),L.traverse(function($){const ee=$.material;if(ee)if(Array.isArray(ee))for(let Me=0;Me<ee.length;Me++){const Se=ee[Me];Q(Se,L,$)}else Q(ee,L,$)}),g.pop(),d=null};let se=null;function he(L){se&&se(L)}function ve(){Ve.stop()}function He(){Ve.start()}const Ve=new zu;Ve.setAnimationLoop(he),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(L){se=L,fe.setAnimationLoop(L),L===null?Ve.stop():Ve.start()},fe.addEventListener("sessionstart",ve),fe.addEventListener("sessionend",He),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),L.isScene===!0&&L.onBeforeRender(p,L,j,M),d=P.get(L,g.length),d.init(),g.push(d),W.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z.setFromProjectionMatrix(W),ne=this.localClippingEnabled,H=Y.init(this.clippingPlanes,ne),m=I.get(L,v.length),m.init(),v.push(m),pt(L,j,0,p.sortObjects),m.finish(),p.sortObjects===!0&&m.sort(R,C),H===!0&&Y.beginShadows();const Q=d.state.shadowsArray;if(re.render(Q,L,j),H===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(m,L),d.setupLights(p.useLegacyLights),j.isArrayCamera){const $=j.cameras;for(let ee=0,Me=$.length;ee<Me;ee++){const Se=$[ee];yn(m,L,Se,Se.viewport)}}else yn(m,L,j);M!==null&&(Ae.updateMultisampleRenderTarget(M),Ae.updateRenderTargetMipmap(M)),L.isScene===!0&&L.onAfterRender(p,L,j),ue.resetDefaultState(),E=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function pt(L,j,Q,$){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||z.intersectsSprite(L)){$&&q.setFromMatrixPosition(L.matrixWorld).applyMatrix4(W);const Se=Be.update(L),Ee=L.material;Ee.visible&&m.push(L,Se,Ee,Q,q.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||z.intersectsObject(L))){L.isSkinnedMesh&&L.skeleton.frame!==Ie.render.frame&&(L.skeleton.update(),L.skeleton.frame=Ie.render.frame);const Se=Be.update(L),Ee=L.material;if($&&(Se.boundingSphere===null&&Se.computeBoundingSphere(),q.copy(Se.boundingSphere.center).applyMatrix4(L.matrixWorld).applyMatrix4(W)),Array.isArray(Ee)){const Re=Se.groups;for(let Le=0,De=Re.length;Le<De;Le++){const Oe=Re[Le],ze=Ee[Oe.materialIndex];ze&&ze.visible&&m.push(L,Se,ze,Q,q.z,Oe)}}else Ee.visible&&m.push(L,Se,Ee,Q,q.z,null)}}const Me=L.children;for(let Se=0,Ee=Me.length;Se<Ee;Se++)pt(Me[Se],j,Q,$)}function yn(L,j,Q,$){const ee=L.opaque,Me=L.transmissive,Se=L.transparent;d.setupLightsView(Q),H===!0&&Y.setGlobalState(p.clippingPlanes,Q),Me.length>0&&it(ee,Me,j,Q),$&&pe.viewport(D.copy($)),ee.length>0&&Ut(ee,j,Q),Me.length>0&&Ut(Me,j,Q),Se.length>0&&Ut(Se,j,Q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function it(L,j,Q,$){if(K===null){const Ee=oe.isWebGL2;K=new Xn(1024,1024,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ar:jn,minFilter:sr,samples:Ee&&a===!0?4:0})}const ee=p.getRenderTarget();p.setRenderTarget(K),p.clear();const Me=p.toneMapping;p.toneMapping=_n,Ut(L,Q,$),Ae.updateMultisampleRenderTarget(K),Ae.updateRenderTargetMipmap(K);let Se=!1;for(let Ee=0,Re=j.length;Ee<Re;Ee++){const Le=j[Ee],De=Le.object,Oe=Le.geometry,ze=Le.material,xt=Le.group;if(ze.side===mn&&De.layers.test($.layers)){const zt=ze.side;ze.side=Et,ze.needsUpdate=!0,Kt(De,Q,$,Oe,ze,xt),ze.side=zt,ze.needsUpdate=!0,Se=!0}}Se===!0&&(Ae.updateMultisampleRenderTarget(K),Ae.updateRenderTargetMipmap(K)),p.setRenderTarget(ee),p.toneMapping=Me}function Ut(L,j,Q){const $=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Me=L.length;ee<Me;ee++){const Se=L[ee],Ee=Se.object,Re=Se.geometry,Le=$===null?Se.material:$,De=Se.group;Ee.layers.test(Q.layers)&&Kt(Ee,j,Q,Re,Le,De)}}function Kt(L,j,Q,$,ee,Me){L.onBeforeRender(p,j,Q,$,ee,Me),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(p,j,Q,$,L,Me),ee.transparent===!0&&ee.side===mn&&ee.forceSinglePass===!1?(ee.side=Et,ee.needsUpdate=!0,p.renderBufferDirect(Q,j,$,ee,L,Me),ee.side=An,ee.needsUpdate=!0,p.renderBufferDirect(Q,j,$,ee,L,Me),ee.side=mn):p.renderBufferDirect(Q,j,$,ee,L,Me),L.onAfterRender(p,j,Q,$,ee,Me)}function Mr(L,j,Q){j.isScene!==!0&&(j=ie);const $=me.get(L),ee=d.state.lights,Me=d.state.shadowsArray,Se=ee.state.version,Ee=Xe.getParameters(L,ee.state,Me,j,Q),Re=Xe.getProgramCacheKey(Ee);let Le=$.programs;$.environment=L.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(L.isMeshStandardMaterial?Ze:Je).get(L.envMap||$.environment),Le===void 0&&(L.addEventListener("dispose",nt),Le=new Map,$.programs=Le);let De=Le.get(Re);if(De!==void 0){if($.currentProgram===De&&$.lightsStateVersion===Se)return Do(L,Ee),De}else Ee.uniforms=Xe.getUniforms(L),L.onBuild(Q,Ee,p),L.onBeforeCompile(Ee,p),De=Xe.acquireProgram(Ee,Re),Le.set(Re,De),$.uniforms=Ee.uniforms;const Oe=$.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Oe.clippingPlanes=Y.uniform),Do(L,Ee),$.needsLights=of(L),$.lightsStateVersion=Se,$.needsLights&&(Oe.ambientLightColor.value=ee.state.ambient,Oe.lightProbe.value=ee.state.probe,Oe.directionalLights.value=ee.state.directional,Oe.directionalLightShadows.value=ee.state.directionalShadow,Oe.spotLights.value=ee.state.spot,Oe.spotLightShadows.value=ee.state.spotShadow,Oe.rectAreaLights.value=ee.state.rectArea,Oe.ltc_1.value=ee.state.rectAreaLTC1,Oe.ltc_2.value=ee.state.rectAreaLTC2,Oe.pointLights.value=ee.state.point,Oe.pointLightShadows.value=ee.state.pointShadow,Oe.hemisphereLights.value=ee.state.hemi,Oe.directionalShadowMap.value=ee.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Oe.spotShadowMap.value=ee.state.spotShadowMap,Oe.spotLightMatrix.value=ee.state.spotLightMatrix,Oe.spotLightMap.value=ee.state.spotLightMap,Oe.pointShadowMap.value=ee.state.pointShadowMap,Oe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ze=De.getUniforms(),xt=Jr.seqWithValue(ze.seq,Oe);return $.currentProgram=De,$.uniformsList=xt,De}function Do(L,j){const Q=me.get(L);Q.outputColorSpace=j.outputColorSpace,Q.instancing=j.instancing,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function sf(L,j,Q,$,ee){j.isScene!==!0&&(j=ie),Ae.resetTextureUnits();const Me=j.fog,Se=$.isMeshStandardMaterial?j.environment:null,Ee=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:sn,Re=($.isMeshStandardMaterial?Ze:Je).get($.envMap||Se),Le=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,De=!!$.normalMap&&!!Q.attributes.tangent,Oe=!!Q.morphAttributes.position,ze=!!Q.morphAttributes.normal,xt=!!Q.morphAttributes.color,zt=$.toneMapped?p.toneMapping:_n,Ln=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,st=Ln!==void 0?Ln.length:0,Ne=me.get($),Hs=d.state.lights;if(H===!0&&(ne===!0||L!==w)){const Rt=L===w&&$.id===E;Y.setState($,L,Rt)}let ut=!1;$.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Hs.state.version||Ne.outputColorSpace!==Ee||ee.isInstancedMesh&&Ne.instancing===!1||!ee.isInstancedMesh&&Ne.instancing===!0||ee.isSkinnedMesh&&Ne.skinning===!1||!ee.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Re||$.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Y.numPlanes||Ne.numIntersection!==Y.numIntersection)||Ne.vertexAlphas!==Le||Ne.vertexTangents!==De||Ne.morphTargets!==Oe||Ne.morphNormals!==ze||Ne.morphColors!==xt||Ne.toneMapping!==zt||oe.isWebGL2===!0&&Ne.morphTargetsCount!==st)&&(ut=!0):(ut=!0,Ne.__version=$.version);let Dn=Ne.currentProgram;ut===!0&&(Dn=Mr($,j,ee));let Uo=!1,Bi=!1,Vs=!1;const yt=Dn.getUniforms(),Un=Ne.uniforms;if(pe.useProgram(Dn.program)&&(Uo=!0,Bi=!0,Vs=!0),$.id!==E&&(E=$.id,Bi=!0),Uo||w!==L){if(yt.setValue(O,"projectionMatrix",L.projectionMatrix),oe.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),w!==L&&(w=L,Bi=!0,Vs=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Rt=yt.map.cameraPosition;Rt!==void 0&&Rt.setValue(O,q.setFromMatrixPosition(L.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(O,"isOrthographic",L.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ee.isSkinnedMesh)&&yt.setValue(O,"viewMatrix",L.matrixWorldInverse)}if(ee.isSkinnedMesh){yt.setOptional(O,ee,"bindMatrix"),yt.setOptional(O,ee,"bindMatrixInverse");const Rt=ee.skeleton;Rt&&(oe.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(O,"boneTexture",Rt.boneTexture,Ae),yt.setValue(O,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ws=Q.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0&&oe.isWebGL2===!0)&&ce.update(ee,Q,Dn),(Bi||Ne.receiveShadow!==ee.receiveShadow)&&(Ne.receiveShadow=ee.receiveShadow,yt.setValue(O,"receiveShadow",ee.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Un.envMap.value=Re,Un.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Bi&&(yt.setValue(O,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&af(Un,Vs),Me&&$.fog===!0&&dt.refreshFogUniforms(Un,Me),dt.refreshMaterialUniforms(Un,$,S,T,K),Jr.upload(O,Ne.uniformsList,Un,Ae)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Jr.upload(O,Ne.uniformsList,Un,Ae),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(O,"center",ee.center),yt.setValue(O,"modelViewMatrix",ee.modelViewMatrix),yt.setValue(O,"normalMatrix",ee.normalMatrix),yt.setValue(O,"modelMatrix",ee.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Rt=$.uniformsGroups;for(let $s=0,lf=Rt.length;$s<lf;$s++)if(oe.isWebGL2){const Io=Rt[$s];de.update(Io,Dn),de.bind(Io,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function af(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function of(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(L,j,Q){me.get(L.texture).__webglTexture=j,me.get(L.depthTexture).__webglTexture=Q;const $=me.get(L);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,j){const Q=me.get(L);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,Q=0){M=L,_=j,y=Q;let $=!0,ee=null,Me=!1,Se=!1;if(L){const Re=me.get(L);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(O.FRAMEBUFFER,null),$=!1):Re.__webglFramebuffer===void 0?Ae.setupRenderTarget(L):Re.__hasExternalTextures&&Ae.rebindTextures(L,me.get(L.texture).__webglTexture,me.get(L.depthTexture).__webglTexture);const Le=L.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const De=me.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ee=De[j],Me=!0):oe.isWebGL2&&L.samples>0&&Ae.useMultisampledRTT(L)===!1?ee=me.get(L).__webglMultisampledFramebuffer:ee=De,D.copy(L.viewport),b.copy(L.scissor),A=L.scissorTest}else D.copy(k).multiplyScalar(S).floor(),b.copy(N).multiplyScalar(S).floor(),A=U;if(pe.bindFramebuffer(O.FRAMEBUFFER,ee)&&oe.drawBuffers&&$&&pe.drawBuffers(L,ee),pe.viewport(D),pe.scissor(b),pe.setScissorTest(A),Me){const Re=me.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re.__webglTexture,Q)}else if(Se){const Re=me.get(L.texture),Le=j||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,Q||0,Le)}E=-1},this.readRenderTargetPixels=function(L,j,Q,$,ee,Me,Se){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){pe.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const Re=L.texture,Le=Re.format,De=Re.type;if(Le!==Xt&&X.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=De===ar&&(ye.has("EXT_color_buffer_half_float")||oe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(De!==jn&&X.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Gn&&(oe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-$&&Q>=0&&Q<=L.height-ee&&O.readPixels(j,Q,$,ee,X.convert(Le),X.convert(De),Me)}finally{const Re=M!==null?me.get(M).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(L,j,Q=0){const $=Math.pow(2,-Q),ee=Math.floor(j.image.width*$),Me=Math.floor(j.image.height*$);Ae.setTexture2D(j,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,L.x,L.y,ee,Me),pe.unbindTexture()},this.copyTextureToTexture=function(L,j,Q,$=0){const ee=j.image.width,Me=j.image.height,Se=X.convert(Q.format),Ee=X.convert(Q.type);Ae.setTexture2D(Q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,L.x,L.y,ee,Me,Se,Ee,j.image.data):j.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,L.x,L.y,j.mipmaps[0].width,j.mipmaps[0].height,Se,j.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,$,L.x,L.y,Se,Ee,j.image),$===0&&Q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(L,j,Q,$,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=L.max.x-L.min.x+1,Se=L.max.y-L.min.y+1,Ee=L.max.z-L.min.z+1,Re=X.convert($.format),Le=X.convert($.type);let De;if($.isData3DTexture)Ae.setTexture3D($,0),De=O.TEXTURE_3D;else if($.isDataArrayTexture)Ae.setTexture2DArray($,0),De=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const Oe=O.getParameter(O.UNPACK_ROW_LENGTH),ze=O.getParameter(O.UNPACK_IMAGE_HEIGHT),xt=O.getParameter(O.UNPACK_SKIP_PIXELS),zt=O.getParameter(O.UNPACK_SKIP_ROWS),Ln=O.getParameter(O.UNPACK_SKIP_IMAGES),st=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,st.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,L.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,L.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,L.min.z),Q.isDataTexture||Q.isData3DTexture?O.texSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,Ee,Re,Le,st.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,Ee,Re,st.data)):O.texSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,Ee,Re,Le,st),O.pixelStorei(O.UNPACK_ROW_LENGTH,Oe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ze),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ln),ee===0&&$.generateMipmaps&&O.generateMipmap(De),pe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ae.setTextureCube(L,0):L.isData3DTexture?Ae.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ae.setTexture2DArray(L,0):Ae.setTexture2D(L,0),pe.unbindTexture()},this.resetState=function(){_=0,y=0,M=null,pe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Wn:Eu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wn?Te:sn}}class Rv extends $u{}Rv.prototype.isWebGL1Renderer=!0;class Cv extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ji extends Pn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+a,Math.PI);let c=0;const l=[],f=new V,h=new V,m=[],d=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&u===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const E=M/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+_*a),d.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),g.push(E+y,1-_),x.push(c++)}l.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const _=l[p][x+1],y=l[p][x],M=l[p+1][x],E=l[p+1][x+1];(p!==0||o>0)&&m.push(_,y,E),(p!==n-1||u<Math.PI)&&m.push(y,M,E)}this.setIndex(m),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pv extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ju extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ra=new ot,nc=new V,ic=new V;class Lv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rc=new ot,Wi=new V,Ca=new V;class Dv extends Lv{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),Ca.copy(n.position),Ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ca),n.updateMatrixWorld(),r.makeTranslation(-Wi.x,-Wi.y,-Wi.z),rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc)}}class Uv extends ju{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Iv extends ju{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);const ac={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ov{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,s===!1&&r.onStart!==void 0&&r.onStart(l,o,a),s=!0},this.itemEnd=function(l){o++,r.onProgress!==void 0&&r.onProgress(l,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return u?u(l):l},this.setURLModifier=function(l){return u=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){const f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],d=c[f+1];if(m.global&&(m.lastIndex=0),m.test(l))return d}return null}}}const Nv=new Ov;class Xu{constructor(e){this.manager=e!==void 0?e:Nv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const oc={};function Pa(i){i in oc||(oc[i]=!0,console.warn(i))}class Fv extends Xu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ac.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=lo("img");function u(){l(),ac.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){l(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){a.removeEventListener("load",u,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Bv{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qu=300,lc=1e3,$r=1001,cc=1002,kv=1006,zv=1008,Gv=1009,Hv=1023,Vv=3e3,La=3001,Da="",Ua="srgb",_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function Yu(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function Wv(i,e,t){return Math.max(e,Math.min(t,i))}class Qi{constructor(e=0,t=0){Qi.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wv(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ps{constructor(){ps.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],c=n[1],l=n[4],f=n[7],h=n[2],m=n[5],d=n[8],v=r[0],g=r[3],p=r[6],x=r[1],_=r[4],y=r[7],M=r[2],E=r[5],w=r[8];return s[0]=o*v+a*x+u*M,s[3]=o*g+a*_+u*E,s[6]=o*p+a*y+u*w,s[1]=c*v+l*x+f*M,s[4]=c*g+l*_+f*E,s[7]=c*p+l*y+f*w,s[2]=h*v+m*x+d*M,s[5]=h*g+m*_+d*E,s[8]=h*p+m*y+d*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*s*l+n*a*u+r*s*c-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],f=l*o-a*c,h=a*u-l*s,m=c*s-o*u,d=t*f+n*h+r*m;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/d;return e[0]=f*v,e[1]=(r*c-l*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(l*t-r*u)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*u-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*o+c*a)+o+e,-r*c,r*u,-r*(-c*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new ps;function Oa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}let Mi;class $v{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=lo("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oa(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oa(t[n]/255)*255):t[n]=Oa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jv{constructor(e=null){this.isSource=!0,this.uuid=Yu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Na(r[o].image)):s.push(Na(r[o]))}else s=Na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$v.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xv=0;class Tn extends Bv{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=$r,r=$r,s=kv,o=zv,a=Hv,u=Gv,c=Tn.DEFAULT_ANISOTROPY,l=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Yu(),this.name="",this.source=new jv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Qi(0,0),this.repeat=new Qi(1,1),this.center=new Qi(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ps,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===La?Ua:Da),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lc:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lc:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ua?La:Vv}set encoding(e){Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===La?Ua:Da}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=qu;Tn.DEFAULT_ANISOTROPY=1;class qv extends Xu{constructor(e){super(e)}load(e,t,n,r){const s=new Tn,o=new Fv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}const uc={type:"change"},Fa={type:"start"},fc={type:"end"};class Yv extends Zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Xe),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(uc),n.update(),s=r.NONE},this.update=function(){const B=new V,te=new qn().setFromUnitVectors(e.up,new V(0,1,0)),X=te.clone().invert(),ue=new V,de=new qn,_e=2*Math.PI;return function(){const ge=n.object.position;B.copy(ge).sub(n.target),B.applyQuaternion(te),a.setFromVector3(B),n.autoRotate&&s===r.NONE&&b(w()),n.enableDamping?(a.theta+=u.theta*n.dampingFactor,a.phi+=u.phi*n.dampingFactor):(a.theta+=u.theta,a.phi+=u.phi);let be=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(be)&&isFinite(Pe)&&(be<-Math.PI?be+=_e:be>Math.PI&&(be-=_e),Pe<-Math.PI?Pe+=_e:Pe>Math.PI&&(Pe-=_e),be<=Pe?a.theta=Math.max(be,Math.min(Pe,a.theta)):a.theta=a.theta>(be+Pe)/2?Math.max(be,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),B.setFromSpherical(a),B.applyQuaternion(X),ge.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),l.set(0,0,0)),c=1,f||ue.distanceToSquared(n.object.position)>o||8*(1-de.dot(n.object.quaternion))>o?(n.dispatchEvent(uc),ue.copy(n.object.position),de.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",Ze),n.domElement.removeEventListener("wheel",Be),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Xe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new sc,u=new sc;let c=1;const l=new V;let f=!1;const h=new Ue,m=new Ue,d=new Ue,v=new Ue,g=new Ue,p=new Ue,x=new Ue,_=new Ue,y=new Ue,M=[],E={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function D(){return Math.pow(.95,n.zoomSpeed)}function b(B){u.theta-=B}function A(B){u.phi-=B}const F=function(){const B=new V;return function(X,ue){B.setFromMatrixColumn(ue,0),B.multiplyScalar(-X),l.add(B)}}(),T=function(){const B=new V;return function(X,ue){n.screenSpacePanning===!0?B.setFromMatrixColumn(ue,1):(B.setFromMatrixColumn(ue,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(X),l.add(B)}}(),S=function(){const B=new V;return function(X,ue){const de=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;B.copy(_e).sub(n.target);let fe=B.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),F(2*X*fe/de.clientHeight,n.object.matrix),T(2*ue*fe/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(X*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),T(ue*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(B){n.object.isPerspectiveCamera?c/=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*B)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(B){n.object.isPerspectiveCamera?c*=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/B)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(B){h.set(B.clientX,B.clientY)}function N(B){x.set(B.clientX,B.clientY)}function U(B){v.set(B.clientX,B.clientY)}function z(B){m.set(B.clientX,B.clientY),d.subVectors(m,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;b(2*Math.PI*d.x/te.clientHeight),A(2*Math.PI*d.y/te.clientHeight),h.copy(m),n.update()}function H(B){_.set(B.clientX,B.clientY),y.subVectors(_,x),y.y>0?R(D()):y.y<0&&C(D()),x.copy(_),n.update()}function ne(B){g.set(B.clientX,B.clientY),p.subVectors(g,v).multiplyScalar(n.panSpeed),S(p.x,p.y),v.copy(g),n.update()}function K(B){B.deltaY<0?C(D()):B.deltaY>0&&R(D()),n.update()}function W(B){let te=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(-n.keyPanSpeed,0),te=!0;break}te&&(B.preventDefault(),n.update())}function q(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const B=.5*(M[0].pageX+M[1].pageX),te=.5*(M[0].pageY+M[1].pageY);h.set(B,te)}}function ie(){if(M.length===1)v.set(M[0].pageX,M[0].pageY);else{const B=.5*(M[0].pageX+M[1].pageX),te=.5*(M[0].pageY+M[1].pageY);v.set(B,te)}}function Z(){const B=M[0].pageX-M[1].pageX,te=M[0].pageY-M[1].pageY,X=Math.sqrt(B*B+te*te);x.set(0,X)}function O(){n.enableZoom&&Z(),n.enablePan&&ie()}function xe(){n.enableZoom&&Z(),n.enableRotate&&q()}function ye(B){if(M.length==1)m.set(B.pageX,B.pageY);else{const X=ce(B),ue=.5*(B.pageX+X.x),de=.5*(B.pageY+X.y);m.set(ue,de)}d.subVectors(m,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;b(2*Math.PI*d.x/te.clientHeight),A(2*Math.PI*d.y/te.clientHeight),h.copy(m)}function oe(B){if(M.length===1)g.set(B.pageX,B.pageY);else{const te=ce(B),X=.5*(B.pageX+te.x),ue=.5*(B.pageY+te.y);g.set(X,ue)}p.subVectors(g,v).multiplyScalar(n.panSpeed),S(p.x,p.y),v.copy(g)}function pe(B){const te=ce(B),X=B.pageX-te.x,ue=B.pageY-te.y,de=Math.sqrt(X*X+ue*ue);_.set(0,de),y.set(0,Math.pow(_.y/x.y,n.zoomSpeed)),R(y.y),x.copy(_)}function Ie(B){n.enableZoom&&pe(B),n.enablePan&&oe(B)}function me(B){n.enableZoom&&pe(B),n.enableRotate&&ye(B)}function Ae(B){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",Je),n.domElement.addEventListener("pointerup",Ze)),Y(B),B.pointerType==="touch"?dt(B):rt(B))}function Je(B){n.enabled!==!1&&(B.pointerType==="touch"?I(B):tt(B))}function Ze(B){re(B),M.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(fc),s=r.NONE}function rt(B){let te;switch(B.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case ii.DOLLY:if(n.enableZoom===!1)return;N(B),s=r.DOLLY;break;case ii.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;U(B),s=r.PAN}else{if(n.enableRotate===!1)return;k(B),s=r.ROTATE}break;case ii.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;k(B),s=r.ROTATE}else{if(n.enablePan===!1)return;U(B),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Fa)}function tt(B){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;z(B);break;case r.DOLLY:if(n.enableZoom===!1)return;H(B);break;case r.PAN:if(n.enablePan===!1)return;ne(B);break}}function Be(B){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(B.preventDefault(),n.dispatchEvent(Fa),K(B),n.dispatchEvent(fc))}function Xe(B){n.enabled===!1||n.enablePan===!1||W(B)}function dt(B){switch(ae(B),M.length){case 1:switch(n.touches.ONE){case ri.ROTATE:if(n.enableRotate===!1)return;q(),s=r.TOUCH_ROTATE;break;case ri.PAN:if(n.enablePan===!1)return;ie(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(),s=r.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Fa)}function I(B){switch(ae(B),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(B),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;oe(B),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(B),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(B),n.update();break;default:s=r.NONE}}function P(B){n.enabled!==!1&&B.preventDefault()}function Y(B){M.push(B)}function re(B){delete E[B.pointerId];for(let te=0;te<M.length;te++)if(M[te].pointerId==B.pointerId){M.splice(te,1);return}}function ae(B){let te=E[B.pointerId];te===void 0&&(te=new Ue,E[B.pointerId]=te),te.set(B.pageX,B.pageY)}function ce(B){const te=B.pointerId===M[0].pointerId?M[1]:M[0];return E[te.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",Ze),n.domElement.addEventListener("wheel",Be,{passive:!1}),this.update()}}const Kv=et('<div class="globe-container w-full h-full">'),Zv=()=>{let i;const[e,t]=je(null),[n,r]=je(null),[s,o]=je(null),a=()=>{console.log("initializing three js");const l=i.clientWidth,f=i.clientHeight,h=new Cv,m=new Dt(75,l/f,.001,1e3),d=new $u;d.setSize(l,f),i.appendChild(d.domElement),new Ji(1,32,32),new os({color:5994437,wireframe:!0}),m.position.z=2;const v=new qv().load("./images/1_earth_8k.jpg"),g=new Yv(m,d.domElement);g.enablePan=!1,g.minDistance=1.002,g.maxDistance=20,g.screenSpacePanning=!1,g.target=new V(0,0,0);const p=new Uv(16777215,1);p.position.set(10,10,10),h.add(p);const x=new Iv(4210752);h.add(x);const _=new en(new Ji(1,32,32),new Pv({map:v}));h.add(_);const y=()=>{requestAnimationFrame(y);const E=(m.position.distanceTo(g.target)-g.minDistance)/(2-g.minDistance);g.zoomSpeed=Math.min(Math.max(.001,E),5),g.rotateSpeed=.27,g.update(),g.update(),d.render(h,m)};y(),t(h),r(m),o(d)},u=(l,f)=>{const h=new os({color:16727040}),m=new Ji(.01,5,5),d=new en(m,h),v=(90-l)*(Math.PI/180),g=(f+180)*(Math.PI/180);return d.position.x=-Math.sin(v)*Math.cos(g),d.position.y=Math.cos(v),d.position.z=Math.sin(v)*Math.sin(g),d.rotation.set(0,0,Math.PI/2),d},c=()=>{const l=i.clientWidth,f=i.clientHeight;let h=n(),m=s();!h||!m||(h.aspect=l/f,h.updateProjectionMatrix(),m.setSize(l,f))};return qt(()=>(a(),window.addEventListener("resize",c),()=>{i.firstChild&&i.removeChild(i.firstChild),window.removeEventListener("resize",c)})),qt(()=>{let l=e(),f=n(),h=s(),m=yh();!l||!f||!h||!m||(console.log("updating pins",m?.length),l.children.filter(d=>d.userData.pin).forEach(d=>l?.remove(d)),m.forEach(d=>{if(d.location?.latitude&&d.location?.longitude){const v=u(d.location.latitude,d.location.longitude);v.userData.pin=!0,l?.add(v)}}),h.render(l,f))}),(()=>{const l=Kv(),f=i;return typeof f=="function"?tu(f,l):i=l,l})()},Jv=et('<img alt="Circle Picture">'),Ku=i=>{const e={width:i.size,height:i.size},t=n=>{const r=n.target;r.src="./images/default-circle-picture.png"};return(()=>{const n=Jv();return n.addEventListener("error",t),Qe(r=>{const s=i.circle?.picture??"./images/default-circle-picture.png",o=e,a=`rounded-full object-cover  ${i.className}`;return s!==r._v$&&Hn(n,"src",r._v$=s),r._v$2=er(n,o,r._v$2),a!==r._v$3&&Jt(n,r._v$3=a),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})()},Qv=et('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',2),e0=et("<title></title>",2);function Zu(i,e){const t=Zc(i.a,e);return(()=>{const n=Qv.cloneNode(!0);return If(n,t,!0,!0),ke(n,()=>nu,null),ke(n,(()=>{const r=Ge(()=>!!e.title,!0);return()=>r()&&(()=>{const s=e0.cloneNode(!0);return ke(s,()=>e.title),s})()})(),null),Qe(r=>{const s=i.a.stroke,o={...e.style,overflow:"visible",color:e.color||"currentColor"},a=e.size||"1em",u=e.size||"1em",c=i.c;return s!==r._v$&&Hn(n,"stroke",r._v$=s),r._v$2=er(n,o,r._v$2),a!==r._v$3&&Hn(n,"height",r._v$3=a),u!==r._v$4&&Hn(n,"width",r._v$4=u),c!==r._v$5&&(n.innerHTML=r._v$5=c),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()}function t0(i){return Zu({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M19 12H5M12 19l-7-7 7-7"/>'},i)}const n0=et('<div class="flex flex-col h-screen"><div class="bg-heading py-3 px-6 flex items-center justify-start"><h2 class="text-white"></h2></div><div class="flex flex-grow">'),i0=et('<button class="mr-3">'),r0=et('<nav class="ml-16"><div class="flex">'),hc=et("<button>"),s0=et('<nav class="bg-gray-200 p-2"><div class="flex">'),a0=et("<div>About"),dc=et("<div>"),o0=et("<div>Video"),l0=et("<div>Calendar"),c0=({onBack:i})=>{const e=eh(),[t,n]=je(["chat"]),r=["about","chat","video","calendar","map"],s=u=>({name:u});qt(()=>{let u=e?.circleId;if(!u)return;console.log("Opening circle with ID",u);let c=mu.get(u);return u==="all"&&c.put({name:"All",picture:"./images/all.png"},()=>{console.log("Updating all circle.")}),c.once(l=>{if(l)console.log("Loading circle",JSON.stringify(l,null,2)),Qa(l);else{const f=s(u);c.put(f,()=>{console.log(`Circle with ID "${u}" created.`)}),Qa(l)}}),c.on((l,f)=>{console.log("test")}),()=>{c.off()}});const o=u=>{Xi()?n([u]):t().includes(u)?n(t().filter(c=>c!==u)):t().length<3&&n([...t(),u])},a=u=>{let c=t().indexOf(u),l=(t()[0]===u||t()[2]===u)&&t().length!==1,f="bg-gray-200";switch(c){default:case 0:f="bg-gray-100";break;case 1:f="bg-gray-200";break;case 2:f="bg-gray-300";break}return`flex flex-col ${l?"min-w-96 w-96":"flex-grow"} ${f} order-${c+1}`};return(()=>{const u=n0(),c=u.firstChild,l=c.firstChild,f=c.nextSibling;return ke(c,(()=>{const h=Ge(()=>!!Xi());return()=>h()&&(()=>{const m=i0();return eu(m,"click",i,!0),ke(m,Ye(t0,{color:"white",size:"28px"})),m})()})(),l),ke(c,Ye(Ku,{get circle(){return Ja()},size:"40px",className:"mr-3"}),l),ke(l,()=>Ja()?.name),ke(c,(()=>{const h=Ge(()=>!Xi());return()=>h()&&(()=>{const m=r0(),d=m.firstChild;return ke(d,()=>r.map(v=>(()=>{const g=hc();return g.$$click=()=>o(v),ke(g,()=>v.charAt(0).toUpperCase()+v.slice(1)),Qe(()=>Jt(g,`mr-2 px-4 py-2 rounded focus:outline-none ${t().includes(v)?"bg-blue-500 text-white":"bg-gray-300"}`)),g})())),m})()})(),null),ke(u,(()=>{const h=Ge(()=>!!Xi());return()=>h()&&(()=>{const m=s0(),d=m.firstChild;return ke(d,()=>r.map(v=>(()=>{const g=hc();return g.$$click=()=>o(v),ke(g,()=>v.charAt(0).toUpperCase()+v.slice(1)),Qe(()=>Jt(g,`mr-2 px-4 py-2 rounded focus:outline-none ${t().includes(v)?"bg-blue-500 text-white":"bg-gray-300"}`)),g})())),m})()})(),f),ke(f,(()=>{const h=Ge(()=>!!t().includes("about"));return()=>h()&&(()=>{const m=a0();return Qe(()=>Jt(m,a("about"))),m})()})(),null),ke(f,(()=>{const h=Ge(()=>!!t().includes("chat"));return()=>h()&&(()=>{const m=dc();return ke(m,Ye(Ah,{})),Qe(()=>Jt(m,a("chat"))),m})()})(),null),ke(f,(()=>{const h=Ge(()=>!!t().includes("video"));return()=>h()&&(()=>{const m=o0();return Qe(()=>Jt(m,a("video"))),m})()})(),null),ke(f,(()=>{const h=Ge(()=>!!t().includes("calendar"));return()=>h()&&(()=>{const m=l0();return Qe(()=>Jt(m,a("calendar"))),m})()})(),null),ke(f,(()=>{const h=Ge(()=>!!t().includes("map"));return()=>h()&&(()=>{const m=dc();return ke(m,Ye(Zv,{})),Qe(()=>Jt(m,a("map"))),m})()})(),null),u})()};Kn(["click"]);function u0(i){return Zu({a:{fill:"none",viewBox:"0 0 24 24"},c:'<path fill="currentColor" d="M8.514 20h-4a2 2 0 01-2-2V6a2 2 0 012-2h4v2h-4v12h4v2z"/><path fill="currentColor" d="M13.842 17.385l1.42-1.408-3.92-3.953h9.144a1 1 0 100-2h-9.162l3.98-3.947-1.408-1.42-6.391 6.337 6.337 6.391z"/>'},i)}const f0=et('<dialog class="bg-transparent"><div class="bg-white p-8 rounded-lg shadow-lg"><h2 class="text-2xl font-bold mb-6">Log in / Sign up</h2><div class="mb-4"><label for="username" class="block text-sm mb-2">Username:</label><input id="username" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md"></div><div class="mb-6"><label for="password" class="block text-sm mb-2">Password:</label><input id="password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md"></div><button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600">Log in</button><button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 ml-4">Sign up'),h0=et('<button type="button" class="absolute bg-heading top-4 right-2 p-1 text-white font-semibold rounded-md ">'),d0=()=>{rr.user().leave(),localStorage.removeItem("userCredentials"),_u(!1),gu(null)};function p0(){const[i,e]=je(""),[t,n]=je(""),r="userCredentials",[s,o]=je(!0);let a;qt(()=>{const m=localStorage.getItem(r);if(m){const{username:d,password:v}=JSON.parse(m);console.log("storedCredentials",m),c(d,v)}else o(!1)}),qt(()=>{a&&!Ft.isLoggedIn&&!s()&&(console.log("showing dialog"),a.showModal())});const u=m=>{const d="Anonymous";Ft.userRef.put({name:d},g=>{g.err?console.error("Failed to create user circle:",g.err):console.log("User circle created:",m)})},c=(m,d)=>{const v=rr.user(),g=p=>{if(p.err)console.error("Authentication error:",p.err);else{if(!v.is){console.error("Authentication error");return}let x=v.is.pub;const _=mu.get(x);gu(_),_.once(y=>{y||u(x)}),console.log("log user public key",v.is?.pub),_u(!0),localStorage.setItem(r,JSON.stringify({username:m,password:d})),a.close()}o(!1)};v.auth(m,d,g)},l=(m,d)=>{rr.user().create(m,d,g=>{g.err?console.error("User creation error:",g.err):c(m,d)})},f=m=>{m.preventDefault(),c(i(),t())},h=m=>{m.preventDefault(),l(i(),t())};return[(()=>{const m=f0(),d=m.firstChild,v=d.firstChild,g=v.nextSibling,p=g.firstChild,x=p.nextSibling,_=g.nextSibling,y=_.firstChild,M=y.nextSibling,E=_.nextSibling,w=E.nextSibling,D=a;return typeof D=="function"?tu(D,m):a=m,x.$$input=b=>e(b.target.value),M.$$input=b=>n(b.target.value),E.$$click=f,w.$$click=h,Qe(()=>x.value=i()),Qe(()=>M.value=t()),m})(),Ge((()=>{const m=Ge(()=>!!Ft.isLoggedIn);return()=>m()&&(()=>{const d=h0();return d.$$click=d0,ke(d,Ye(u0,{size:"24px"})),d})()})())]}Kn(["input","click"]);var Ju={},ms={},Tt={},we={};Object.defineProperty(we,"__esModule",{value:!0});we.areaConversion=we.timeConversion=we.distanceConversion=we.altitudeKeys=we.latitudeKeys=we.longitudeKeys=we.MAXLON=we.MINLON=we.MAXLAT=we.MINLAT=we.earthRadius=we.sexagesimalPattern=void 0;var m0=/^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;we.sexagesimalPattern=m0;var g0=6378137;we.earthRadius=g0;var _0=-90;we.MINLAT=_0;var v0=90;we.MAXLAT=v0;var x0=-180;we.MINLON=x0;var y0=180;we.MAXLON=y0;var M0=["lng","lon","longitude",0];we.longitudeKeys=M0;var S0=["lat","latitude",1];we.latitudeKeys=S0;var b0=["alt","altitude","elevation","elev",2];we.altitudeKeys=b0;var E0={m:1,km:.001,cm:100,mm:1e3,mi:1/1609.344,sm:1/1852.216,ft:100/30.48,in:100/2.54,yd:1/.9144};we.distanceConversion=E0;var w0={m:60,h:3600,d:86400};we.timeConversion=w0;var Yt={m2:1,km2:1e-6,ha:1e-4,a:.01,ft2:10.763911,yd2:1.19599,in2:1550.0031};we.areaConversion=Yt;Yt.sqm=Yt.m2;Yt.sqkm=Yt.km2;Yt.sqft=Yt.ft2;Yt.sqyd=Yt.yd2;Yt.sqin=Yt.in2;var Jn={};Object.defineProperty(Jn,"__esModule",{value:!0});Jn.default=void 0;var T0=function(e,t){return t.reduce(function(n,r){if(typeof e>"u"||e===null)throw new Error("'".concat(e,"' is no valid coordinate."));return Object.prototype.hasOwnProperty.call(e,r)&&typeof r<"u"&&typeof n>"u"?(n=r,r):n},void 0)},A0=T0;Jn.default=A0;var Ni={},Qn={};Object.defineProperty(Qn,"__esModule",{value:!0});Qn.default=void 0;var R0=function(e){var t=e.toString().trim();return isNaN(parseFloat(t))?!1:parseFloat(t)===Number(t)},C0=R0;Qn.default=C0;var ei={};Object.defineProperty(ei,"__esModule",{value:!0});ei.default=void 0;var P0=we,L0=function(e){return P0.sexagesimalPattern.test(e.toString().trim())},D0=L0;ei.default=D0;var ti={};Object.defineProperty(ti,"__esModule",{value:!0});ti.default=void 0;var U0=we,I0=function(e){var t=new RegExp(U0.sexagesimalPattern).exec(e.toString().trim());if(typeof t>"u"||t===null)throw new Error("Given value is not in sexagesimal format");var n=Number(t[2])/60||0,r=Number(t[4])/3600||0,s=parseFloat(t[1])+n+r;return["S","W"].includes(t[7])?-s:s},O0=I0;ti.default=O0;var hr={},Fi={};Object.defineProperty(Fi,"__esModule",{value:!0});Fi.default=void 0;var Ba=we,ka=N0(Jn);function N0(i){return i&&i.__esModule?i:{default:i}}function pc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function F0(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pc(Object(t),!0).forEach(function(n){B0(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):pc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function B0(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var k0=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{longitude:Ba.longitudeKeys,latitude:Ba.latitudeKeys,altitude:Ba.altitudeKeys},n=(0,ka.default)(e,t.longitude),r=(0,ka.default)(e,t.latitude),s=(0,ka.default)(e,t.altitude);return F0({latitude:r,longitude:n},s?{altitude:s}:{})},z0=k0;Fi.default=z0;var dr={};Object.defineProperty(dr,"__esModule",{value:!0});dr.default=void 0;var G0=Ao(Qn),H0=Ao(ei),V0=Ao(ti),mc=we;function Ao(i){return i&&i.__esModule?i:{default:i}}var W0=function i(e){return(0,G0.default)(e)?!(parseFloat(e)>mc.MAXLAT||e<mc.MINLAT):(0,H0.default)(e)?i((0,V0.default)(e)):!1},$0=W0;dr.default=$0;var pr={};Object.defineProperty(pr,"__esModule",{value:!0});pr.default=void 0;var j0=Ro(Qn),X0=Ro(ei),q0=Ro(ti),gc=we;function Ro(i){return i&&i.__esModule?i:{default:i}}var Y0=function i(e){return(0,j0.default)(e)?!(parseFloat(e)>gc.MAXLON||e<gc.MINLON):(0,X0.default)(e)?i((0,q0.default)(e)):!1},K0=Y0;pr.default=K0;Object.defineProperty(hr,"__esModule",{value:!0});hr.default=void 0;var Z0=Co(Fi),_c=Co(dr),vc=Co(pr);function Co(i){return i&&i.__esModule?i:{default:i}}var J0=function(e){var t=(0,Z0.default)(e),n=t.latitude,r=t.longitude;if(Array.isArray(e)&&e.length>=2)return(0,vc.default)(e[0])&&(0,_c.default)(e[1]);if(typeof n>"u"||typeof r>"u")return!1;var s=e[r],o=e[n];return!(typeof o>"u"||typeof s>"u"||(0,_c.default)(o)===!1||(0,vc.default)(s)===!1)},Q0=J0;hr.default=Q0;Object.defineProperty(Ni,"__esModule",{value:!0});Ni.default=void 0;var ex=mr(Qn),tx=mr(ei),nx=mr(ti),xc=mr(hr),ix=mr(Fi);function mr(i){return i&&i.__esModule?i:{default:i}}function yc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function za(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yc(Object(t),!0).forEach(function(n){co(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):yc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function co(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var rx=function i(e){if((0,ex.default)(e))return Number(e);if((0,tx.default)(e))return(0,nx.default)(e);if((0,xc.default)(e)){var t=(0,ix.default)(e);return Array.isArray(e)?e.map(function(n,r){return[0,1].includes(r)?i(n):n}):za(za(za({},e),t.latitude&&co({},t.latitude,i(e[t.latitude]))),t.longitude&&co({},t.longitude,i(e[t.longitude])))}return Array.isArray(e)?e.map(function(n){return(0,xc.default)(n)?i(n):n}):e},sx=rx;Ni.default=sx;Object.defineProperty(Tt,"__esModule",{value:!0});Tt.default=void 0;var ax=we,ox=Qu(Jn),lx=Qu(Ni);function Qu(i){return i&&i.__esModule?i:{default:i}}var cx=function(e,t){var n=(0,ox.default)(e,ax.latitudeKeys);if(!(typeof n>"u"||n===null)){var r=e[n];return t===!0?r:(0,lx.default)(r)}},ux=cx;Tt.default=ux;var At={};Object.defineProperty(At,"__esModule",{value:!0});At.default=void 0;var fx=we,hx=ef(Jn),dx=ef(Ni);function ef(i){return i&&i.__esModule?i:{default:i}}var px=function(e,t){var n=(0,hx.default)(e,fx.longitudeKeys);if(!(typeof n>"u"||n===null)){var r=e[n];return t===!0?r:(0,dx.default)(r)}},mx=px;At.default=mx;var kt={};Object.defineProperty(kt,"__esModule",{value:!0});kt.default=void 0;var gx=function(e){return e*Math.PI/180},_x=gx;kt.default=_x;var xn={};Object.defineProperty(xn,"__esModule",{value:!0});xn.default=void 0;var vx=function(e){return e*180/Math.PI},xx=vx;xn.default=xx;Object.defineProperty(ms,"__esModule",{value:!0});ms.default=void 0;var yx=gs(Tt),Mx=gs(At),Ga=gs(kt),Ha=gs(xn),Mc=we;function gs(i){return i&&i.__esModule?i:{default:i}}var Sx=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:6371e3,s=(0,yx.default)(e),o=(0,Mx.default)(e),a=t/r,u=(0,Ga.default)(n),c=(0,Ga.default)(s),l=(0,Ga.default)(o),f=Math.asin(Math.sin(c)*Math.cos(a)+Math.cos(c)*Math.sin(a)*Math.cos(u)),h=l+Math.atan2(Math.sin(u)*Math.sin(a)*Math.cos(c),Math.cos(a)-Math.sin(c)*Math.sin(f)),m=(0,Ha.default)(h);return(m<Mc.MINLON||m>Mc.MAXLON)&&(h=(h+3*Math.PI)%(2*Math.PI)-Math.PI,m=(0,Ha.default)(h)),{latitude:(0,Ha.default)(f),longitude:m}},bx=Sx;ms.default=bx;var _s={};Object.defineProperty(_s,"__esModule",{value:!0});_s.default=void 0;var Ex=we,wx=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",n=Ex.areaConversion[t];if(n)return e*n;throw new Error("Invalid unit used for area conversion.")},Tx=wx;_s.default=Tx;var vs={};Object.defineProperty(vs,"__esModule",{value:!0});vs.default=void 0;var Ax=we,Rx=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",n=Ax.distanceConversion[t];if(n)return e*n;throw new Error("Invalid unit used for distance conversion.")},Cx=Rx;vs.default=Cx;var xs={};Object.defineProperty(xs,"__esModule",{value:!0});xs.default=void 0;var jr=we,Px=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"kmh";switch(t){case"kmh":return e*jr.timeConversion.h*jr.distanceConversion.km;case"mph":return e*jr.timeConversion.h*jr.distanceConversion.mi;default:return e}},Lx=Px;xs.default=Lx;var ys={};Object.defineProperty(ys,"__esModule",{value:!0});ys.default=void 0;function Sc(i,e){return Ox(i)||Ix(i,e)||Ux(i,e)||Dx()}function Dx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ux(i,e){if(i){if(typeof i=="string")return bc(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return bc(i,e)}}function bc(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Ix(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,s=void 0;try{for(var o=i[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(u){r=!0,s=u}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function Ox(i){if(Array.isArray(i))return i}var Nx=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4,n=Math.pow(10,t);return Math.round(e*n)/n},Fx=function(e){var t=e.toString().split("."),n=Sc(t,2),r=n[0],s=n[1],o=Math.abs(Number(r)),a=+("0."+(s||0))*60,u=a.toString().split("."),c=Math.floor(a),l=Nx(+("0."+(u[1]||0))*60).toString(),f=l.split("."),h=Sc(f,2),m=h[0],d=h[1],v=d===void 0?"0":d;return o+"° "+c.toString().padStart(2,"0")+"' "+m.padStart(2,"0")+"."+v.padEnd(1,"0")+'"'},Bx=Fx;ys.default=Bx;var Ms={},gr={},an={},_r={};Object.defineProperty(_r,"__esModule",{value:!0});_r.default=void 0;var kx=function(e){return e>1?1:e<-1?-1:e},zx=kx;_r.default=zx;Object.defineProperty(an,"__esModule",{value:!0});an.default=void 0;var Ec=Ss(Tt),wc=Ss(At),Si=Ss(kt),Gx=Ss(_r),Hx=we;function Ss(i){return i&&i.__esModule?i:{default:i}}var Vx=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;n=typeof n<"u"&&!isNaN(n)?n:1;var r=(0,Ec.default)(e),s=(0,wc.default)(e),o=(0,Ec.default)(t),a=(0,wc.default)(t),u=Math.acos((0,Gx.default)(Math.sin((0,Si.default)(o))*Math.sin((0,Si.default)(r))+Math.cos((0,Si.default)(o))*Math.cos((0,Si.default)(r))*Math.cos((0,Si.default)(s)-(0,Si.default)(a))))*Hx.earthRadius;return Math.round(u/n)*n},Wx=Vx;an.default=Wx;Object.defineProperty(gr,"__esModule",{value:!0});gr.default=void 0;var Tc=$x(an);function $x(i){return i&&i.__esModule?i:{default:i}}var jx=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Tc.default;return n=typeof n=="function"?n:Tc.default,t.slice().sort(function(r,s){return n(e,r)-n(e,s)})},Xx=jx;gr.default=Xx;Object.defineProperty(Ms,"__esModule",{value:!0});Ms.default=void 0;var qx=Yx(gr);function Yx(i){return i&&i.__esModule?i:{default:i}}var Kx=function(e,t){return(0,qx.default)(e,t)[0]},Zx=Kx;Ms.default=Zx;var bs={};Object.defineProperty(bs,"__esModule",{value:!0});bs.default=void 0;var Va=Po(kt),Jx=Po(Tt),Ac=Po(At),Rc=we;function Po(i){return i&&i.__esModule?i:{default:i}}var Qx=function(e){var t=0;if(e.length>2){for(var n,r,s,o=0;o<e.length;o++){o===e.length-2?(n=e.length-2,r=e.length-1,s=0):o===e.length-1?(n=e.length-1,r=0,s=1):(n=o,r=o+1,s=o+2);var a=(0,Ac.default)(e[n]),u=(0,Jx.default)(e[r]),c=(0,Ac.default)(e[s]);t+=((0,Va.default)(c)-(0,Va.default)(a))*Math.sin((0,Va.default)(u))}t=t*Rc.earthRadius*Rc.earthRadius/2}return Math.abs(t)},ey=Qx;bs.default=ey;var vr={};Object.defineProperty(vr,"__esModule",{value:!0});vr.default=void 0;var ty=tf(Tt),ny=tf(At);function tf(i){return i&&i.__esModule?i:{default:i}}var iy=function(e){if(Array.isArray(e)===!1||e.length===0)throw new Error("No points were given.");return e.reduce(function(t,n){var r=(0,ty.default)(n),s=(0,ny.default)(n);return{maxLat:Math.max(r,t.maxLat),minLat:Math.min(r,t.minLat),maxLng:Math.max(s,t.maxLng),minLng:Math.min(s,t.minLng)}},{maxLat:-1/0,minLat:1/0,maxLng:-1/0,minLng:1/0})},ry=iy;vr.default=ry;var Es={};Object.defineProperty(Es,"__esModule",{value:!0});Es.default=void 0;var sy=ws(Tt),ay=ws(At),bi=ws(kt),Xr=ws(xn),$i=we;function ws(i){return i&&i.__esModule?i:{default:i}}var oy=function(e,t){var n=(0,sy.default)(e),r=(0,ay.default)(e),s=(0,bi.default)(n),o=(0,bi.default)(r),a=t/$i.earthRadius,u=s-a,c=s+a,l=(0,bi.default)($i.MAXLAT),f=(0,bi.default)($i.MINLAT),h=(0,bi.default)($i.MAXLON),m=(0,bi.default)($i.MINLON),d,v;if(u>f&&c<l){var g=Math.asin(Math.sin(a)/Math.cos(s));d=o-g,d<m&&(d+=Math.PI*2),v=o+g,v>h&&(v-=Math.PI*2)}else u=Math.max(u,f),c=Math.min(c,l),d=m,v=h;return[{latitude:(0,Xr.default)(u),longitude:(0,Xr.default)(d)},{latitude:(0,Xr.default)(c),longitude:(0,Xr.default)(v)}]},ly=oy;Es.default=ly;var Ts={};Object.defineProperty(Ts,"__esModule",{value:!0});Ts.default=void 0;var cy=As(Tt),uy=As(At),Cc=As(kt),Pc=As(xn);function As(i){return i&&i.__esModule?i:{default:i}}var fy=function(e){if(Array.isArray(e)===!1||e.length===0)return!1;var t=e.length,n=e.reduce(function(a,u){var c=(0,Cc.default)((0,cy.default)(u)),l=(0,Cc.default)((0,uy.default)(u));return{X:a.X+Math.cos(c)*Math.cos(l),Y:a.Y+Math.cos(c)*Math.sin(l),Z:a.Z+Math.sin(c)}},{X:0,Y:0,Z:0}),r=n.X/t,s=n.Y/t,o=n.Z/t;return{longitude:(0,Pc.default)(Math.atan2(s,r)),latitude:(0,Pc.default)(Math.atan2(o,Math.sqrt(r*r+s*s)))}},hy=fy;Ts.default=hy;var Rs={};Object.defineProperty(Rs,"__esModule",{value:!0});Rs.default=void 0;var dy=py(vr);function py(i){return i&&i.__esModule?i:{default:i}}var my=function(e){var t=(0,dy.default)(e),n=t.minLat+(t.maxLat-t.minLat)/2,r=t.minLng+(t.maxLng-t.minLng)/2;return{latitude:parseFloat(n.toFixed(6)),longitude:parseFloat(r.toFixed(6))}},gy=my;Rs.default=gy;var Cs={},xr={};Object.defineProperty(xr,"__esModule",{value:!0});xr.default=void 0;var Lc=Ps(Tt),Dc=Ps(At),qr=Ps(kt),_y=Ps(xn);function Ps(i){return i&&i.__esModule?i:{default:i}}var vy=function(e,t){var n=(0,qr.default)((0,Dc.default)(t))-(0,qr.default)((0,Dc.default)(e)),r=Math.log(Math.tan((0,qr.default)((0,Lc.default)(t))/2+Math.PI/4)/Math.tan((0,qr.default)((0,Lc.default)(e))/2+Math.PI/4));return Math.abs(n)>Math.PI&&(n>0?n=(Math.PI*2-n)*-1:n=Math.PI*2+n),((0,_y.default)(Math.atan2(n,r))+360)%360},xy=vy;xr.default=xy;Object.defineProperty(Cs,"__esModule",{value:!0});Cs.default=void 0;var Uc=yy(xr);function yy(i){return i&&i.__esModule?i:{default:i}}var My=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Uc.default,r=typeof n=="function"?n(e,t):(0,Uc.default)(e,t);if(isNaN(r))throw new Error("Could not calculate bearing for given points. Check your bearing function");switch(Math.round(r/22.5)){case 1:return"NNE";case 2:return"NE";case 3:return"ENE";case 4:return"E";case 5:return"ESE";case 6:return"SE";case 7:return"SSE";case 8:return"S";case 9:return"SSW";case 10:return"SW";case 11:return"WSW";case 12:return"W";case 13:return"WNW";case 14:return"NW";case 15:return"NNW";default:return"N"}},Sy=My;Cs.default=Sy;var yr={};Object.defineProperty(yr,"__esModule",{value:!0});yr.default=void 0;var Wa=nf(an),Ic=nf(_r);function nf(i){return i&&i.__esModule?i:{default:i}}var by=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=(0,Wa.default)(t,e,r),o=(0,Wa.default)(e,n,r),a=(0,Wa.default)(t,n,r),u=Math.acos((0,Ic.default)((s*s+a*a-o*o)/(2*s*a))),c=Math.acos((0,Ic.default)((o*o+a*a-s*s)/(2*o*a)));return u>Math.PI/2?s:c>Math.PI/2?o:Math.sin(u)*s},Ey=by;yr.default=Ey;var Ls={};Object.defineProperty(Ls,"__esModule",{value:!0});Ls.default=void 0;var Oc=Ds(Tt),Nc=Ds(At),dn=Ds(kt),wy=Ds(xn);function Ds(i){return i&&i.__esModule?i:{default:i}}var Ty=function(e,t){var n=(0,Oc.default)(t),r=(0,Nc.default)(t),s=(0,Oc.default)(e),o=(0,Nc.default)(e),a=((0,wy.default)(Math.atan2(Math.sin((0,dn.default)(r)-(0,dn.default)(o))*Math.cos((0,dn.default)(n)),Math.cos((0,dn.default)(s))*Math.sin((0,dn.default)(n))-Math.sin((0,dn.default)(s))*Math.cos((0,dn.default)(n))*Math.cos((0,dn.default)(r)-(0,dn.default)(o))))+360)%360;return a},Ay=Ty;Ls.default=Ay;var Us={};Object.defineProperty(Us,"__esModule",{value:!0});Us.default=void 0;var Ry=Cy(an);function Cy(i){return i&&i.__esModule?i:{default:i}}function Qr(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qr=function(t){return typeof t}:Qr=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qr(i)}var Py=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ry.default;return e.reduce(function(n,r){return Qr(n)==="object"&&n.last!==null&&(n.distance+=t(r,n.last)),n.last=r,n},{last:null,distance:0}).distance},Ly=Py;Us.default=Ly;var Is={};Object.defineProperty(Is,"__esModule",{value:!0});Is.default=void 0;var Fc=Lo(Tt),Bc=Lo(At),$a=Lo(kt),kc=we;function Lo(i){return i&&i.__esModule?i:{default:i}}var Dy=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;n=typeof n<"u"&&!isNaN(n)?n:1;var r=(0,Fc.default)(e),s=(0,Bc.default)(e),o=(0,Fc.default)(t),a=(0,Bc.default)(t),u=6356752314245e-6,c=1/298.257223563,l=(0,$a.default)(a-s),f,h,m,d,v,g,p=Math.atan((1-c)*Math.tan((0,$a.default)(parseFloat(r)))),x=Math.atan((1-c)*Math.tan((0,$a.default)(parseFloat(o)))),_=Math.sin(p),y=Math.cos(p),M=Math.sin(x),E=Math.cos(x),w=l,D,b=100;do{var A=Math.sin(w),F=Math.cos(w);if(g=Math.sqrt(E*A*(E*A)+(y*M-_*E*F)*(y*M-_*E*F)),g===0)return 0;f=_*M+y*E*F,h=Math.atan2(g,f),m=y*E*A/g,d=1-m*m,v=f-2*_*M/d,isNaN(v)&&(v=0);var T=c/16*d*(4+c*(4-3*d));D=w,w=l+(1-T)*c*m*(h+T*g*(v+T*f*(-1+2*v*v)))}while(Math.abs(w-D)>1e-12&&--b>0);if(b===0)return NaN;var S=d*(kc.earthRadius*kc.earthRadius-u*u)/(u*u),R=1+S/16384*(4096+S*(-768+S*(320-175*S))),C=S/1024*(256+S*(-128+S*(74-47*S))),k=C*g*(v+C/4*(f*(-1+2*v*v)-C/6*v*(-3+4*g*g)*(-3+4*v*v))),N=u*R*(h-k);return Math.round(N/n)*n},Uy=Dy;Is.default=Uy;var Os={};Object.defineProperty(Os,"__esModule",{value:!0});Os.default=void 0;var Iy=function(e){if(/^NNE|NE|NNW|N$/.test(e))return"N";if(/^ENE|E|ESE|SE$/.test(e))return"E";if(/^SSE|S|SSW|SW$/.test(e))return"S";if(/^WSW|W|WNW|NW$/.test(e))return"W"},Oy=Iy;Os.default=Oy;var Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});Ns.default=void 0;var Ny=Fy(an);function Fy(i){return i&&i.__esModule?i:{default:i}}var By=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ny.default,r=n(e,t),s=Number(t.time)-Number(e.time),o=r/s*1e3;return o},ky=By;Ns.default=ky;var Fs={};Object.defineProperty(Fs,"__esModule",{value:!0});Fs.default=void 0;var ja=zy(an);function zy(i){return i&&i.__esModule?i:{default:i}}var Gy=function(e,t,n){return(0,ja.default)(t,e)+(0,ja.default)(e,n)===(0,ja.default)(t,n)},Hy=Gy;Fs.default=Hy;var Bs={};Object.defineProperty(Bs,"__esModule",{value:!0});Bs.default=void 0;var Yr=rf(Tt),Ot=rf(At);function rf(i){return i&&i.__esModule?i:{default:i}}var Vy=function(e,t){for(var n=!1,r=t.length,s=-1,o=r-1;++s<r;o=s)((0,Ot.default)(t[s])<=(0,Ot.default)(e)&&(0,Ot.default)(e)<(0,Ot.default)(t[o])||(0,Ot.default)(t[o])<=(0,Ot.default)(e)&&(0,Ot.default)(e)<(0,Ot.default)(t[s]))&&(0,Yr.default)(e)<((0,Yr.default)(t[o])-(0,Yr.default)(t[s]))*((0,Ot.default)(e)-(0,Ot.default)(t[s]))/((0,Ot.default)(t[o])-(0,Ot.default)(t[s]))+(0,Yr.default)(t[s])&&(n=!n);return n},Wy=Vy;Bs.default=Wy;var ks={};Object.defineProperty(ks,"__esModule",{value:!0});ks.default=void 0;var $y=jy(yr);function jy(i){return i&&i.__esModule?i:{default:i}}var Xy=function(e,t,n,r){return(0,$y.default)(e,t,n)<r},qy=Xy;ks.default=qy;var zs={};Object.defineProperty(zs,"__esModule",{value:!0});zs.default=void 0;var Yy=Ky(an);function Ky(i){return i&&i.__esModule?i:{default:i}}var Zy=function(e,t,n){return(0,Yy.default)(e,t)<n},Jy=Zy;zs.default=Jy;var Gs={};Object.defineProperty(Gs,"__esModule",{value:!0});Gs.default=void 0;function Qy(i,e){return iM(i)||nM(i,e)||tM(i,e)||eM()}function eM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tM(i,e){if(i){if(typeof i=="string")return zc(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zc(i,e)}}function zc(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function nM(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,s=void 0;try{for(var o=i[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(u){r=!0,s=u}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function iM(i){if(Array.isArray(i))return i}var rM=function(e){if(!e.startsWith("POLYGON"))throw new Error("Invalid wkt.");var t=e.slice(e.indexOf("(")+2,e.indexOf(")")).split(", "),n=t.map(function(r){var s=r.split(" "),o=Qy(s,2),a=o[0],u=o[1];return{longitude:parseFloat(a),latitude:parseFloat(u)}});return n},sM=rM;Gs.default=sM;(function(i){Object.defineProperty(i,"__esModule",{value:!0});var e={computeDestinationPoint:!0,convertArea:!0,convertDistance:!0,convertSpeed:!0,decimalToSexagesimal:!0,findNearest:!0,getAreaOfPolygon:!0,getBounds:!0,getBoundsOfDistance:!0,getCenter:!0,getCenterOfBounds:!0,getCompassDirection:!0,getCoordinateKey:!0,getCoordinateKeys:!0,getDistance:!0,getDistanceFromLine:!0,getGreatCircleBearing:!0,getLatitude:!0,getLongitude:!0,getPathLength:!0,getPreciseDistance:!0,getRhumbLineBearing:!0,getRoughCompassDirection:!0,getSpeed:!0,isDecimal:!0,isPointInLine:!0,isPointInPolygon:!0,isPointNearLine:!0,isPointWithinRadius:!0,isSexagesimal:!0,isValidCoordinate:!0,isValidLatitude:!0,isValidLongitude:!0,orderByDistance:!0,sexagesimalToDecimal:!0,toDecimal:!0,toRad:!0,toDeg:!0,wktToPolygon:!0};Object.defineProperty(i,"computeDestinationPoint",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(i,"convertArea",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(i,"convertDistance",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(i,"convertSpeed",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(i,"decimalToSexagesimal",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(i,"findNearest",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(i,"getAreaOfPolygon",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(i,"getBounds",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(i,"getBoundsOfDistance",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(i,"getCenter",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(i,"getCenterOfBounds",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(i,"getCompassDirection",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(i,"getCoordinateKey",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(i,"getCoordinateKeys",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(i,"getDistance",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(i,"getDistanceFromLine",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(i,"getGreatCircleBearing",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(i,"getLatitude",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(i,"getLongitude",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(i,"getPathLength",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(i,"getPreciseDistance",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(i,"getRhumbLineBearing",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(i,"getRoughCompassDirection",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(i,"getSpeed",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(i,"isDecimal",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(i,"isPointInLine",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(i,"isPointInPolygon",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(i,"isPointNearLine",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(i,"isPointWithinRadius",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(i,"isSexagesimal",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(i,"isValidCoordinate",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(i,"isValidLatitude",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(i,"isValidLongitude",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(i,"orderByDistance",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(i,"sexagesimalToDecimal",{enumerable:!0,get:function(){return H.default}}),Object.defineProperty(i,"toDecimal",{enumerable:!0,get:function(){return ne.default}}),Object.defineProperty(i,"toRad",{enumerable:!0,get:function(){return K.default}}),Object.defineProperty(i,"toDeg",{enumerable:!0,get:function(){return W.default}}),Object.defineProperty(i,"wktToPolygon",{enumerable:!0,get:function(){return q.default}});var t=Z(ms),n=Z(_s),r=Z(vs),s=Z(xs),o=Z(ys),a=Z(Ms),u=Z(bs),c=Z(vr),l=Z(Es),f=Z(Ts),h=Z(Rs),m=Z(Cs),d=Z(Jn),v=Z(Fi),g=Z(an),p=Z(yr),x=Z(Ls),_=Z(Tt),y=Z(At),M=Z(Us),E=Z(Is),w=Z(xr),D=Z(Os),b=Z(Ns),A=Z(Qn),F=Z(Fs),T=Z(Bs),S=Z(ks),R=Z(zs),C=Z(ei),k=Z(hr),N=Z(dr),U=Z(pr),z=Z(gr),H=Z(ti),ne=Z(Ni),K=Z(kt),W=Z(xn),q=Z(Gs),ie=we;Object.keys(ie).forEach(function(O){O==="default"||O==="__esModule"||Object.prototype.hasOwnProperty.call(e,O)||Object.defineProperty(i,O,{enumerable:!0,get:function(){return ie[O]}})});function Z(O){return O&&O.__esModule?O:{default:O}}})(Ju);const aM=()=>{const i=t=>{let n={latitude:t.coords.latitude,longitude:t.coords.longitude};if(Ft.userLocation?.latitude&&Ft.userLocation?.longitude){const r=Ju.getPreciseDistance(Ft.userLocation,n);if(console.log(`getUserLocationSuccess (diff: ${r}, lat: ${t.coords.latitude}, lon: ${t.coords.longitude}, acc: ${t.coords.accuracy})`,0),r<100)return}console.log(`getUserLocationSuccess (lat: ${t.coords.latitude}, lon: ${t.coords.longitude}, acc: ${t.coords.accuracy})`,0),Sh({latitude:t.coords.latitude,longitude:t.coords.longitude})},e=t=>{console.log(`getUserLocationError: ${t.message}`,0),navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,maximumAge:1/0})};return qt(()=>{let t=null;navigator.geolocation?navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"geolocation"}).then(n=>{console.log(`Query geolocation result: ${n.state}`,0),n.state==="granted"?(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1/0}),t=navigator.geolocation.watchPosition(i)):n.state==="prompt"?(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!0,timeout:6e4,maximumAge:0}),t=navigator.geolocation.watchPosition(i)):n.state,n.onchange=function(){console.log(`Query geolocation change: ${n.state}`,0)}}):(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1/0}),t=navigator.geolocation.watchPosition(i)):console.log("geolocation not available",0),Ii(()=>{t!==null&&navigator.geolocation.clearWatch(t)})}),null},oM=et("<div>"),lM=et('<h3 class="ml-3">'),cM=i=>{const e=()=>{i.onClick&&i.onClick(i.circle)};return(()=>{const t=oM();return t.$$click=e,ke(t,Ye(Ku,{get circle(){return i.circle},size:"40px"}),null),ke(t,(()=>{const n=Ge(()=>!i.itemCollapsed?.());return()=>n()&&(()=>{const r=lM();return ke(r,()=>i.circle.name),r})()})(),null),Qe(()=>Jt(t,`flex items-center p-3 cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-200 ${i.highlightCurrentCircle&&Ja()?.name?.toLowerCase()===i.circle?.name?.toLowerCase()?"bg-blue-200":""} ${i.className}`)),t})()};Kn(["click"]);const uM=et("<div>"),fM=i=>{const[e,t]=je([{name:"All",picture:"./images/all.png"}]);je(e()[0]);const n=r=>{i.onSelect(r)};return(()=>{const r=uM();return ke(r,Ye(Jc,{get each(){return e()},children:s=>Ye(cM,{circle:s,get itemCollapsed(){return i.circleSelectCollapsed},highlightCurrentCircle:!0,onClick:n})})),r})()},hM=()=>{const[i,e]=je(window.innerWidth),[t,n]=je(window.innerHeight),r=()=>{e(window.innerWidth),n(window.innerHeight)};return qt(()=>{window.addEventListener("resize",r),Ii(()=>{window.removeEventListener("resize",r)})}),{windowWidth:i,windowHeight:t}},dM=et('<div class="h-screen w-screen relative"><div class="h-full w-full md:w-72 relative"><div class="hidden md:block absolute right-0 top-0 h-full w-2 cursor-col-resize"></div></div><div class="h-full w-full md:w-full" style="background-color:#f5f5f5;">'),pM=()=>{const[i,e]=je(!0),[t,n]=je(!1),[r,s]=je(18),[o,a]=je(!1),{windowWidth:u,windowHeight:c}=hM(),l=Qf(),f=()=>{a(!0)},h=g=>{if(!o())return;const p=parseFloat(getComputedStyle(document.documentElement).fontSize),x=g.clientX/p;x<18?x<10?(s(4),n(!0)):(s(18),n(!1)):(s(x),n(!1))},m=()=>{a(!1)};qt(()=>{let g=u()<768;xh(g),g&&n(!1)}),qt(()=>{console.log("APP_NAMESPACE","circles-c979fe7c-ebfd-11ed-a05b-0242ac120003"),o()?(document.body.classList.add("no-select"),window.addEventListener("mousemove",h),window.addEventListener("mouseup",m)):(document.body.classList.remove("no-select"),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",m))}),Ii(()=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",m)});const d=g=>{console.log("Selecting circle",g?.name),Qa(g),l(`/${g?.name.toLowerCase()}`),u()<768&&e(!1)},v=()=>{u()<768&&e(!0)};return[(()=>{const g=dM(),p=g.firstChild,x=p.firstChild,_=p.nextSibling;return ke(p,Ye(fM,{onSelect:d,circleSelectCollapsed:t}),x),x.$$mousedown=f,ke(_,Ye(lh,{get children(){return Ye(ch,{path:"/:circleId",get element(){return Ye(c0,{onBack:v})}})}})),Qe(y=>{const M=`display: flex; flex-direction: row; min-width: ${Xi()?"200%":"100%"}; transition: transform 300ms ease; transform: translateX(${i()?"0":"-50%"});`,E=u()>=768?`width: ${r()}rem; max-width: ${r()}rem; min-width: ${r()}rem;`:"width: 100%;";return y._v$=er(g,M,y._v$),y._v$2=er(p,E,y._v$2),y},{_v$:void 0,_v$2:void 0}),g})(),Ye(p0,{}),Ye(aM,{})]};Kn(["mousedown"]);const mM=document.getElementById("root");Lf(()=>Ye(oh,{get base(){return"/circles3"},get children(){return Ye(pM,{})}}),mM);
