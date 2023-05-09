(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const lf=(i,e)=>i===e,tn=Symbol("solid-proxy"),ja=Symbol("solid-track"),Qr={equals:lf};let kc=jc;const Rn=1,es=2,zc={owned:null,cleanups:null,context:null,owner:null};var qe=null;let $s=null,Ve=null,vt=null,gn=null,os=0;function qi(i,e){const t=Ve,n=qe,r=i.length===0,s=r?zc:{owned:null,cleanups:null,context:null,owner:e===void 0?n:e},o=r?i:()=>i(()=>Ft(()=>ls(s)));qe=s,Ve=null;try{return Cn(o,!0)}finally{Ve=t,qe=n}}function $e(i,e){e=e?Object.assign({},Qr,e):Qr;const t={value:i,observers:null,observerSlots:null,comparator:e.equals||void 0},n=r=>(typeof r=="function"&&(r=r(t.value)),$c(t,r));return[Wc.bind(t),n]}function nt(i,e,t){const n=fo(i,e,!1,Rn);ar(n)}function nn(i,e,t){kc=mf;const n=fo(i,e,!1,Rn);(!t||!t.render)&&(n.user=!0),gn?gn.push(n):ar(n)}function Xe(i,e,t){t=t?Object.assign({},Qr,t):Qr;const n=fo(i,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,ar(n),Wc.bind(n)}function cf(i){return Cn(i,!1)}function Ft(i){if(Ve===null)return i();const e=Ve;Ve=null;try{return i()}finally{Ve=e}}function Gc(i,e,t){const n=Array.isArray(i);let r,s=t&&t.defer;return o=>{let a;if(n){a=Array(i.length);for(let l=0;l<i.length;l++)a[l]=i[l]()}else a=i();if(s){s=!1;return}const u=Ft(()=>e(a,r,o));return r=a,u}}function Ii(i){return qe===null||(qe.cleanups===null?qe.cleanups=[i]:qe.cleanups.push(i)),i}function Hc(){return Ve}function uf(){return qe}function ff(i,e){const t=qe,n=Ve;qe=i,Ve=null;try{return Cn(e,!0)}catch(r){ho(r)}finally{qe=t,Ve=n}}function hf(i){const e=Ve,t=qe;return Promise.resolve().then(()=>{Ve=e,qe=t;let n;return Cn(i,!1),Ve=qe=null,n?n.done:void 0})}function Vc(i,e){const t=Symbol("context");return{id:t,Provider:gf(t),defaultValue:i}}function co(i){let e;return(e=qc(qe,i.id))!==void 0?e:i.defaultValue}function uo(i){const e=Xe(i),t=Xe(()=>Xa(e()));return t.toArray=()=>{const n=t();return Array.isArray(n)?n:n!=null?[n]:[]},t}function Wc(){if(this.sources&&this.state)if(this.state===Rn)ar(this);else{const i=vt;vt=null,Cn(()=>ns(this),!1),vt=i}if(Ve){const i=this.observers?this.observers.length:0;Ve.sources?(Ve.sources.push(this),Ve.sourceSlots.push(i)):(Ve.sources=[this],Ve.sourceSlots=[i]),this.observers?(this.observers.push(Ve),this.observerSlots.push(Ve.sources.length-1)):(this.observers=[Ve],this.observerSlots=[Ve.sources.length-1])}return this.value}function $c(i,e,t){let n=i.value;return(!i.comparator||!i.comparator(n,e))&&(i.value=e,i.observers&&i.observers.length&&Cn(()=>{for(let r=0;r<i.observers.length;r+=1){const s=i.observers[r],o=$s&&$s.running;o&&$s.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?vt.push(s):gn.push(s),s.observers&&Xc(s)),o||(s.state=Rn)}if(vt.length>1e6)throw vt=[],new Error},!1)),e}function ar(i){if(!i.fn)return;ls(i);const e=qe,t=Ve,n=os;Ve=qe=i,df(i,i.value,n),Ve=t,qe=e}function df(i,e,t){let n;try{n=i.fn(e)}catch(r){return i.pure&&(i.state=Rn,i.owned&&i.owned.forEach(ls),i.owned=null),i.updatedAt=t+1,ho(r)}(!i.updatedAt||i.updatedAt<=t)&&(i.updatedAt!=null&&"observers"in i?$c(i,n):i.value=n,i.updatedAt=t)}function fo(i,e,t,n=Rn,r){const s={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:qe,context:null,pure:t};return qe===null||qe!==zc&&(qe.owned?qe.owned.push(s):qe.owned=[s]),s}function ts(i){if(i.state===0)return;if(i.state===es)return ns(i);if(i.suspense&&Ft(i.suspense.inFallback))return i.suspense.effects.push(i);const e=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<os);)i.state&&e.push(i);for(let t=e.length-1;t>=0;t--)if(i=e[t],i.state===Rn)ar(i);else if(i.state===es){const n=vt;vt=null,Cn(()=>ns(i,e[0]),!1),vt=n}}function Cn(i,e){if(vt)return i();let t=!1;e||(vt=[]),gn?t=!0:gn=[],os++;try{const n=i();return pf(t),n}catch(n){t||(gn=null),vt=null,ho(n)}}function pf(i){if(vt&&(jc(vt),vt=null),i)return;const e=gn;gn=null,e.length&&Cn(()=>kc(e),!1)}function jc(i){for(let e=0;e<i.length;e++)ts(i[e])}function mf(i){let e,t=0;for(e=0;e<i.length;e++){const n=i[e];n.user?i[t++]=n:ts(n)}for(e=0;e<t;e++)ts(i[e])}function ns(i,e){i.state=0;for(let t=0;t<i.sources.length;t+=1){const n=i.sources[t];if(n.sources){const r=n.state;r===Rn?n!==e&&(!n.updatedAt||n.updatedAt<os)&&ts(n):r===es&&ns(n,e)}}}function Xc(i){for(let e=0;e<i.observers.length;e+=1){const t=i.observers[e];t.state||(t.state=es,t.pure?vt.push(t):gn.push(t),t.observers&&Xc(t))}}function ls(i){let e;if(i.sources)for(;i.sources.length;){const t=i.sources.pop(),n=i.sourceSlots.pop(),r=t.observers;if(r&&r.length){const s=r.pop(),o=t.observerSlots.pop();n<r.length&&(s.sourceSlots[o]=n,r[n]=s,t.observerSlots[n]=o)}}if(i.owned){for(e=i.owned.length-1;e>=0;e--)ls(i.owned[e]);i.owned=null}if(i.cleanups){for(e=i.cleanups.length-1;e>=0;e--)i.cleanups[e]();i.cleanups=null}i.state=0,i.context=null}function ho(i){throw i}function qc(i,e){return i?i.context&&i.context[e]!==void 0?i.context[e]:qc(i.owner,e):void 0}function Xa(i){if(typeof i=="function"&&!i.length)return Xa(i());if(Array.isArray(i)){const e=[];for(let t=0;t<i.length;t++){const n=Xa(i[t]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return i}function gf(i,e){return function(n){let r;return nt(()=>r=Ft(()=>(qe.context={[i]:n.value},uo(()=>n.children))),void 0),r}}const _f=Symbol("fallback");function Io(i){for(let e=0;e<i.length;e++)i[e]()}function vf(i,e,t={}){let n=[],r=[],s=[],o=0,a=e.length>1?[]:null;return Ii(()=>Io(s)),()=>{let u=i()||[],l,c;return u[ja],Ft(()=>{let h=u.length,m,p,_,g,d,x,v,M,y;if(h===0)o!==0&&(Io(s),s=[],n=[],r=[],o=0,a&&(a=[])),t.fallback&&(n=[_f],r[0]=qi(b=>(s[0]=b,t.fallback())),o=1);else if(o===0){for(r=new Array(h),c=0;c<h;c++)n[c]=u[c],r[c]=qi(f);o=h}else{for(_=new Array(h),g=new Array(h),a&&(d=new Array(h)),x=0,v=Math.min(o,h);x<v&&n[x]===u[x];x++);for(v=o-1,M=h-1;v>=x&&M>=x&&n[v]===u[M];v--,M--)_[M]=r[v],g[M]=s[v],a&&(d[M]=a[v]);for(m=new Map,p=new Array(M+1),c=M;c>=x;c--)y=u[c],l=m.get(y),p[c]=l===void 0?-1:l,m.set(y,c);for(l=x;l<=v;l++)y=n[l],c=m.get(y),c!==void 0&&c!==-1?(_[c]=r[l],g[c]=s[l],a&&(d[c]=a[l]),c=p[c],m.set(y,c)):s[l]();for(c=x;c<h;c++)c in _?(r[c]=_[c],s[c]=g[c],a&&(a[c]=d[c],a[c](c))):r[c]=qi(f);r=r.slice(0,o=h),n=u.slice(0)}return r});function f(h){if(s[c]=h,a){const[m,p]=$e(c);return a[c]=p,e(u[c],m)}return e(u[c])}}}function Ye(i,e){return Ft(()=>i(e||{}))}function Mr(){return!0}const xf={get(i,e,t){return e===tn?t:i.get(e)},has(i,e){return e===tn?!0:i.has(e)},set:Mr,deleteProperty:Mr,getOwnPropertyDescriptor(i,e){return{configurable:!0,enumerable:!0,get(){return i.get(e)},set:Mr,deleteProperty:Mr}},ownKeys(i){return i.keys()}};function js(i){return(i=typeof i=="function"?i():i)?i:{}}function Yc(...i){let e=!1;for(let n=0;n<i.length;n++){const r=i[n];e=e||!!r&&tn in r,i[n]=typeof r=="function"?(e=!0,Xe(r)):r}if(e)return new Proxy({get(n){for(let r=i.length-1;r>=0;r--){const s=js(i[r])[n];if(s!==void 0)return s}},has(n){for(let r=i.length-1;r>=0;r--)if(n in js(i[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<i.length;r++)n.push(...Object.keys(js(i[r])));return[...new Set(n)]}},xf);const t={};for(let n=i.length-1;n>=0;n--)if(i[n]){const r=Object.getOwnPropertyDescriptors(i[n]);for(const s in r)s in t||Object.defineProperty(t,s,{enumerable:!0,get(){for(let o=i.length-1;o>=0;o--){const a=(i[o]||{})[s];if(a!==void 0)return a}}})}return t}const yf=i=>`Stale read from <${i}>.`;function Kc(i){const e="fallback"in i&&{fallback:()=>i.fallback};return Xe(vf(()=>i.each,i.children,e||void 0))}function Zc(i){const e=i.keyed,t=Xe(()=>i.when,void 0,{equals:(n,r)=>e?n===r:!n==!r});return Xe(()=>{const n=t();if(n){const r=i.children;return typeof r=="function"&&r.length>0?Ft(()=>r(e?n:()=>{if(!Ft(t))throw yf("Show");return i.when})):r}return i.fallback},void 0,void 0)}const Mf=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Sf=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Mf]),Ef=new Set(["innerHTML","textContent","innerText","children"]),bf=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),wf=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Tf(i,e){const t=wf[i];return typeof t=="object"?t[e]?t.$:void 0:t}const Af=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Rf={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Cf(i,e,t){let n=t.length,r=e.length,s=n,o=0,a=0,u=e[r-1].nextSibling,l=null;for(;o<r||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[r-1]===t[s-1];)r--,s--;if(r===o){const c=s<n?a?t[a-1].nextSibling:t[s-a]:u;for(;a<s;)i.insertBefore(t[a++],c)}else if(s===a)for(;o<r;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[r-1]){const c=e[--r].nextSibling;i.insertBefore(t[a++],e[o++].nextSibling),i.insertBefore(t[--s],c),e[r]=t[s]}else{if(!l){l=new Map;let f=a;for(;f<s;)l.set(t[f],f++)}const c=l.get(e[o]);if(c!=null)if(a<c&&c<s){let f=o,h=1,m;for(;++f<r&&f<s&&!((m=l.get(e[f]))==null||m!==c+h);)h++;if(h>c-a){const p=e[o];for(;a<c;)i.insertBefore(t[a++],p)}else i.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Oo="_$DX_DELEGATE";function Pf(i,e,t,n={}){let r;return qi(s=>{r=s,e===document?i():ze(e,i(),e.firstChild?null:void 0,t)},n.owner),()=>{r(),e.textContent=""}}function ot(i,e,t){let n;const r=()=>{const o=document.createElement("template");return o.innerHTML=i,t?o.content.firstChild.firstChild:o.content.firstChild},s=e?()=>(n||(n=r())).cloneNode(!0):()=>Ft(()=>document.importNode(n||(n=r()),!0));return s.cloneNode=s,s}function Pn(i,e=window.document){const t=e[Oo]||(e[Oo]=new Set);for(let n=0,r=i.length;n<r;n++){const s=i[n];t.has(s)||(t.add(s),e.addEventListener(s,Nf))}}function Vn(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)}function Lf(i,e,t,n){n==null?i.removeAttributeNS(e,t):i.setAttributeNS(e,t,n)}function pn(i,e){e==null?i.removeAttribute("class"):i.className=e}function Jc(i,e,t,n){if(n)Array.isArray(t)?(i[`$$${e}`]=t[0],i[`$$${e}Data`]=t[1]):i[`$$${e}`]=t;else if(Array.isArray(t)){const r=t[0];i.addEventListener(e,t[0]=s=>r.call(i,t[1],s))}else i.addEventListener(e,t)}function Df(i,e,t={}){const n=Object.keys(e||{}),r=Object.keys(t);let s,o;for(s=0,o=r.length;s<o;s++){const a=r[s];!a||a==="undefined"||e[a]||(No(i,a,!1),delete t[a])}for(s=0,o=n.length;s<o;s++){const a=n[s],u=!!e[a];!a||a==="undefined"||t[a]===u||!u||(No(i,a,!0),t[a]=u)}return t}function Qi(i,e,t){if(!e)return t?Vn(i,"style"):e;const n=i.style;if(typeof e=="string")return n.cssText=e;typeof t=="string"&&(n.cssText=t=void 0),t||(t={}),e||(e={});let r,s;for(s in t)e[s]==null&&n.removeProperty(s),delete t[s];for(s in e)r=e[s],r!==t[s]&&(n.setProperty(s,r),t[s]=r);return t}function Uf(i,e={},t,n){const r={};return n||nt(()=>r.children=Ci(i,e.children,r.children)),nt(()=>e.ref&&e.ref(i)),nt(()=>If(i,e,t,!0,r,!0)),r}function Qc(i,e,t){return Ft(()=>i(e,t))}function ze(i,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return Ci(i,e,n,t);nt(r=>Ci(i,e(),r,t),n)}function If(i,e,t,n,r={},s=!1){e||(e={});for(const o in r)if(!(o in e)){if(o==="children")continue;r[o]=Fo(i,o,null,r[o],t,s)}for(const o in e){if(o==="children"){n||Ci(i,e.children);continue}const a=e[o];r[o]=Fo(i,o,a,r[o],t,s)}}function Of(i){return i.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function No(i,e,t){const n=e.trim().split(/\s+/);for(let r=0,s=n.length;r<s;r++)i.classList.toggle(n[r],t)}function Fo(i,e,t,n,r,s){let o,a,u,l,c;if(e==="style")return Qi(i,t,n);if(e==="classList")return Df(i,t,n);if(t===n)return n;if(e==="ref")s||t(i);else if(e.slice(0,3)==="on:"){const f=e.slice(3);n&&i.removeEventListener(f,n),t&&i.addEventListener(f,t)}else if(e.slice(0,10)==="oncapture:"){const f=e.slice(10);n&&i.removeEventListener(f,n,!0),t&&i.addEventListener(f,t,!0)}else if(e.slice(0,2)==="on"){const f=e.slice(2).toLowerCase(),h=Af.has(f);if(!h&&n){const m=Array.isArray(n)?n[0]:n;i.removeEventListener(f,m)}(h||t)&&(Jc(i,f,t,h),h&&Pn([f]))}else if(e.slice(0,5)==="attr:")Vn(i,e.slice(5),t);else if((c=e.slice(0,5)==="prop:")||(u=Ef.has(e))||!r&&((l=Tf(e,i.tagName))||(a=Sf.has(e)))||(o=i.nodeName.includes("-")))c&&(e=e.slice(5),a=!0),e==="class"||e==="className"?pn(i,t):o&&!a&&!u?i[Of(e)]=t:i[l||e]=t;else{const f=r&&e.indexOf(":")>-1&&Rf[e.split(":")[0]];f?Lf(i,f,e,t):Vn(i,bf[e]||e,t)}return t}function Nf(i){const e=`$$${i.type}`;let t=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==t&&Object.defineProperty(i,"target",{configurable:!0,value:t}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}});t;){const n=t[e];if(n&&!t.disabled){const r=t[`${e}Data`];if(r!==void 0?n.call(t,r,i):n.call(t,i),i.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function Ci(i,e,t,n,r){for(;typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=n!==void 0;if(i=o&&t[0]&&t[0].parentNode||i,s==="string"||s==="number")if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=ni(i,t,n,a)}else t!==""&&typeof t=="string"?t=i.firstChild.data=e:t=i.textContent=e;else if(e==null||s==="boolean")t=ni(i,t,n);else{if(s==="function")return nt(()=>{let a=e();for(;typeof a=="function";)a=a();t=Ci(i,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[],u=t&&Array.isArray(t);if(qa(a,e,t,r))return nt(()=>t=Ci(i,a,t,n,!0)),()=>t;if(a.length===0){if(t=ni(i,t,n),o)return t}else u?t.length===0?Bo(i,a,n):Cf(i,t,a):(t&&ni(i),Bo(i,a));t=a}else if(e instanceof Node){if(Array.isArray(t)){if(o)return t=ni(i,t,n,e);ni(i,t,null,e)}else t==null||t===""||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);t=e}else console.warn("Unrecognized value. Skipped inserting",e)}return t}function qa(i,e,t,n){let r=!1;for(let s=0,o=e.length;s<o;s++){let a=e[s],u=t&&t[s];if(a instanceof Node)i.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))r=qa(i,a,u)||r;else if(typeof a=="function")if(n){for(;typeof a=="function";)a=a();r=qa(i,Array.isArray(a)?a:[a],Array.isArray(u)?u:[u])||r}else i.push(a),r=!0;else{const l=String(a);u&&u.nodeType===3?(u.data=l,i.push(u)):i.push(document.createTextNode(l))}}return r}function Bo(i,e,t=null){for(let n=0,r=e.length;n<r;n++)i.insertBefore(e[n],t)}function ni(i,e,t,n){if(t===void 0)return i.textContent="";const r=n||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(r!==a){const u=a.parentNode===i;!s&&!o?u?i.replaceChild(r,a):i.insertBefore(r,t):u&&a.remove()}else s=!0}}else i.insertBefore(r,t);return[r]}const eu=!1;function Ff(i,e,t){return i.addEventListener(e,t),()=>i.removeEventListener(e,t)}function Bf([i,e],t,n){return[t?()=>t(i()):i,n?r=>e(n(r)):e]}function kf(i){try{return document.querySelector(i)}catch{return null}}function zf(i,e){const t=kf(`#${i}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}function Gf(i,e,t,n){let r=!1;const s=a=>typeof a=="string"?{value:a}:a,o=Bf($e(s(i()),{equals:(a,u)=>a.value===u.value}),void 0,a=>(!r&&e(a),a));return t&&Ii(t((a=i())=>{r=!0,o[1](s(a)),r=!1})),{signal:o,utils:n}}function Hf(i){if(i){if(Array.isArray(i))return{signal:i}}else return{signal:$e({value:""})};return i}function Vf(){return Gf(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:i,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"",i):window.history.pushState(n,"",i),zf(window.location.hash.slice(1),t)},i=>Ff(window,"popstate",()=>i()),{go:i=>window.history.go(i)})}function Wf(){let i=new Set;function e(r){return i.add(r),()=>i.delete(r)}let t=!1;function n(r,s){if(t)return!(t=!1);const o={to:r,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of i)a.listener({...o,from:a.location,retry:u=>{u&&(t=!0),a.navigate(r,s)}});return!o.defaultPrevented}return{subscribe:e,confirm:n}}const $f=/^(?:[a-z0-9]+:)?\/\//i,jf=/^\/+|(\/)\/+$/g;function Yi(i,e=!1){const t=i.replace(jf,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function Yr(i,e,t){if($f.test(e))return;const n=Yi(i),r=t&&Yi(t);let s="";return!r||e.startsWith("/")?s=n:r.toLowerCase().indexOf(n.toLowerCase())!==0?s=n+r:s=r,(s||"/")+Yi(e,!s)}function Xf(i,e){if(i==null)throw new Error(e);return i}function tu(i,e){return Yi(i).replace(/\/*(\*.*)?$/g,"")+Yi(e)}function qf(i){const e={};return i.searchParams.forEach((t,n)=>{e[n]=t}),e}function Yf(i,e,t){const[n,r]=i.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return a=>{const u=a.split("/").filter(Boolean),l=u.length-o;if(l<0||l>0&&r===void 0&&!e)return null;const c={path:o?"":"/",params:{}},f=h=>t===void 0?void 0:t[h];for(let h=0;h<o;h++){const m=s[h],p=u[h],_=m[0]===":",g=_?m.slice(1):m;if(_&&Xs(p,f(g)))c.params[g]=p;else if(_||!Xs(p,m))return null;c.path+=`/${p}`}if(r){const h=l?u.slice(-l).join("/"):"";if(Xs(h,f(r)))c.params[r]=h;else return null}return c}}function Xs(i,e){const t=n=>n.localeCompare(i,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(i):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(i):!1}function Kf(i){const[e,t]=i.pattern.split("/*",2),n=e.split("/").filter(Boolean);return n.reduce((r,s)=>r+(s.startsWith(":")?2:3),n.length-(t===void 0?0:1))}function nu(i){const e=new Map,t=uf();return new Proxy({},{get(n,r){return e.has(r)||ff(t,()=>e.set(r,Xe(()=>i()[r]))),e.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(i())}})}function iu(i){let e=/(\/?\:[^\/]+)\?/.exec(i);if(!e)return[i];let t=i.slice(0,e.index),n=i.slice(e.index+e[0].length);const r=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(n);)r.push(t+=e[1]),n=n.slice(e[0].length);return iu(n).reduce((s,o)=>[...s,...r.map(a=>a+o)],[])}const Zf=100,ru=Vc(),cs=Vc(),po=()=>Xf(co(ru),"Make sure your app is wrapped in a <Router />");let er;const mo=()=>er||co(cs)||po().base,Jf=()=>po().navigatorFactory(),Qf=()=>mo().params;function eh(i,e="",t){const{component:n,data:r,children:s}=i,o=!s||Array.isArray(s)&&!s.length,a={key:i,element:n?()=>Ye(n,{}):()=>{const{element:u}=i;return u===void 0&&t?Ye(t,{}):u},preload:i.component?n.preload:i.preload,data:r};return su(i.path).reduce((u,l)=>{for(const c of iu(l)){const f=tu(e,c),h=o?f:f.split("/*",1)[0];u.push({...a,originalPath:c,pattern:h,matcher:Yf(h,!o,i.matchFilters)})}return u},[])}function th(i,e=0){return{routes:i,score:Kf(i[i.length-1])*1e4-e,matcher(t){const n=[];for(let r=i.length-1;r>=0;r--){const s=i[r],o=s.matcher(t);if(!o)return null;n.unshift({...o,route:s})}return n}}}function su(i){return Array.isArray(i)?i:[i]}function au(i,e="",t,n=[],r=[]){const s=su(i);for(let o=0,a=s.length;o<a;o++){const u=s[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const l=eh(u,e,t);for(const c of l){n.push(c);const f=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!f)au(u.children,c.pattern,t,n,r);else{const h=th([...n],r.length);r.push(h)}n.pop()}}}return n.length?r:r.sort((o,a)=>a.score-o.score)}function nh(i,e){for(let t=0,n=i.length;t<n;t++){const r=i[t].matcher(e);if(r)return r}return[]}function ih(i,e){const t=new URL("http://sar"),n=Xe(u=>{const l=i();try{return new URL(l,t)}catch{return console.error(`Invalid path ${l}`),u}},t,{equals:(u,l)=>u.href===l.href}),r=Xe(()=>n().pathname),s=Xe(()=>n().search,!0),o=Xe(()=>n().hash),a=Xe(()=>"");return{get pathname(){return r()},get search(){return s()},get hash(){return o()},get state(){return e()},get key(){return a()},query:nu(Gc(s,()=>qf(n())))}}function rh(i,e="",t,n){const{signal:[r,s],utils:o={}}=Hf(i),a=o.parsePath||(A=>A),u=o.renderPath||(A=>A),l=o.beforeLeave||Wf(),c=Yr("",e),f=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&s({value:c,replace:!0,scroll:!1});const[h,m]=$e(!1),p=async A=>{m(!0);try{await hf(A)}finally{m(!1)}},[_,g]=$e(r().value),[d,x]=$e(r().state),v=ih(_,d),M=[],y={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(A){return Yr(c,A)}};if(t)try{er=y,y.data=t({data:void 0,params:{},location:v,navigate:w(y)})}finally{er=void 0}function b(A,F,T){Ft(()=>{if(typeof F=="number"){F&&(o.go?l.confirm(F,T)&&o.go(F):console.warn("Router integration does not support relative routing"));return}const{replace:S,resolve:R,scroll:C,state:k}={replace:!1,resolve:!0,scroll:!0,...T},N=R?A.resolvePath(F):Yr("",F);if(N===void 0)throw new Error(`Path '${F}' is not a routable path`);if(M.length>=Zf)throw new Error("Too many redirects");const U=_();if((N!==U||k!==d())&&!eu){if(l.confirm(N,T)){const z=M.push({value:U,replace:S,scroll:C,state:d()});p(()=>{g(N),x(k)}).then(()=>{M.length===z&&D({value:N,state:k})})}}})}function w(A){return A=A||co(cs)||y,(F,T)=>b(A,F,T)}function D(A){const F=M[0];F&&((A.value!==F.value||A.state!==F.state)&&s({...A,replace:F.replace,scroll:F.scroll}),M.length=0)}nt(()=>{const{value:A,state:F}=r();Ft(()=>{A!==_()&&p(()=>{g(A),x(F)})})});{let A=function(F){if(F.defaultPrevented||F.button!==0||F.metaKey||F.altKey||F.ctrlKey||F.shiftKey)return;const T=F.composedPath().find(U=>U instanceof Node&&U.nodeName.toUpperCase()==="A");if(!T||!T.hasAttribute("link"))return;const S=T.href;if(T.target||!S&&!T.hasAttribute("state"))return;const R=(T.getAttribute("rel")||"").split(/\s+/);if(T.hasAttribute("download")||R&&R.includes("external"))return;const C=new URL(S);if(C.origin!==window.location.origin||c&&C.pathname&&!C.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const k=a(C.pathname+C.search+C.hash),N=T.getAttribute("state");F.preventDefault(),b(y,k,{resolve:!1,replace:T.hasAttribute("replace"),scroll:!T.hasAttribute("noscroll"),state:N&&JSON.parse(N)})};var E=A;Pn(["click"]),document.addEventListener("click",A),Ii(()=>document.removeEventListener("click",A))}return{base:y,out:f,location:v,isRouting:h,renderPath:u,parsePath:a,navigatorFactory:w,beforeLeave:l}}function sh(i,e,t,n,r){const{base:s,location:o,navigatorFactory:a}=i,{pattern:u,element:l,preload:c,data:f}=n().route,h=Xe(()=>n().path);c&&c();const m={parent:e,pattern:u,get child(){return t()},path:h,params:r,data:e.data,outlet:l,resolvePath(p){return Yr(s.path(),p,h())}};if(f)try{er=m,m.data=f({data:e.data,params:r,location:o,navigate:a(m)})}finally{er=void 0}return m}const ah=i=>{const{source:e,url:t,base:n,data:r,out:s}=i,o=e||Vf(),a=rh(o,n,r);return Ye(ru.Provider,{value:a,get children(){return i.children}})},oh=i=>{const e=po(),t=mo(),n=uo(()=>i.children),r=Xe(()=>au(n(),tu(t.pattern,i.base||""),ch)),s=Xe(()=>nh(r(),e.location.pathname)),o=nu(()=>{const c=s(),f={};for(let h=0;h<c.length;h++)Object.assign(f,c[h].params);return f});e.out&&e.out.matches.push(s().map(({route:c,path:f,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:f,params:h})));const a=[];let u;const l=Xe(Gc(s,(c,f,h)=>{let m=f&&c.length===f.length;const p=[];for(let _=0,g=c.length;_<g;_++){const d=f&&f[_],x=c[_];h&&d&&x.route.key===d.route.key?p[_]=h[_]:(m=!1,a[_]&&a[_](),qi(v=>{a[_]=v,p[_]=sh(e,p[_-1]||t,()=>l()[_+1],()=>s()[_],o)}))}return a.splice(c.length).forEach(_=>_()),h&&m?h:(u=p[0],p)}));return Ye(Zc,{get when(){return l()&&u},keyed:!0,children:c=>Ye(cs.Provider,{value:c,get children(){return c.outlet()}})})},lh=i=>{const e=uo(()=>i.children);return Yc(i,{get children(){return e()}})},ch=()=>{const i=mo();return Ye(Zc,{get when(){return i.child},keyed:!0,children:e=>Ye(cs.Provider,{value:e,get children(){return e.outlet()}})})};const Ya=Symbol("store-raw"),tr=Symbol("store-node");function ou(i){let e=i[tn];if(!e&&(Object.defineProperty(i,tn,{value:e=new Proxy(i,hh)}),!Array.isArray(i))){const t=Object.keys(i),n=Object.getOwnPropertyDescriptors(i);for(let r=0,s=t.length;r<s;r++){const o=t[r];n[o].get&&Object.defineProperty(i,o,{enumerable:n[o].enumerable,get:n[o].get.bind(e)})}}return e}function is(i){let e;return i!=null&&typeof i=="object"&&(i[tn]||!(e=Object.getPrototypeOf(i))||e===Object.prototype||Array.isArray(i))}function nr(i,e=new Set){let t,n,r,s;if(t=i!=null&&i[Ya])return t;if(!is(i)||e.has(i))return i;if(Array.isArray(i)){Object.isFrozen(i)?i=i.slice(0):e.add(i);for(let o=0,a=i.length;o<a;o++)r=i[o],(n=nr(r,e))!==r&&(i[o]=n)}else{Object.isFrozen(i)?i=Object.assign({},i):e.add(i);const o=Object.keys(i),a=Object.getOwnPropertyDescriptors(i);for(let u=0,l=o.length;u<l;u++)s=o[u],!a[s].get&&(r=i[s],(n=nr(r,e))!==r&&(i[s]=n))}return i}function go(i){let e=i[tr];return e||Object.defineProperty(i,tr,{value:e=Object.create(null)}),e}function Ka(i,e,t){return i[e]||(i[e]=cu(t))}function uh(i,e){const t=Reflect.getOwnPropertyDescriptor(i,e);return!t||t.get||!t.configurable||e===tn||e===tr||(delete t.value,delete t.writable,t.get=()=>i[tn][e]),t}function lu(i){if(Hc()){const e=go(i);(e._||(e._=cu()))()}}function fh(i){return lu(i),Reflect.ownKeys(i)}function cu(i){const[e,t]=$e(i,{equals:!1,internal:!0});return e.$=t,e}const hh={get(i,e,t){if(e===Ya)return i;if(e===tn)return t;if(e===ja)return lu(i),t;const n=go(i),r=n[e];let s=r?r():i[e];if(e===tr||e==="__proto__")return s;if(!r){const o=Object.getOwnPropertyDescriptor(i,e);Hc()&&(typeof s!="function"||i.hasOwnProperty(e))&&!(o&&o.get)&&(s=Ka(n,e,s)())}return is(s)?ou(s):s},has(i,e){return e===Ya||e===tn||e===ja||e===tr||e==="__proto__"?!0:(this.get(i,e,i),e in i)},set(){return!0},deleteProperty(){return!0},ownKeys:fh,getOwnPropertyDescriptor:uh};function rs(i,e,t,n=!1){if(!n&&i[e]===t)return;const r=i[e],s=i.length;t===void 0?delete i[e]:i[e]=t;let o=go(i),a;(a=Ka(o,e,r))&&a.$(()=>t),Array.isArray(i)&&i.length!==s&&(a=Ka(o,"length",s))&&a.$(i.length),(a=o._)&&a.$()}function uu(i,e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1){const r=t[n];rs(i,r,e[r])}}function dh(i,e){if(typeof e=="function"&&(e=e(i)),e=nr(e),Array.isArray(e)){if(i===e)return;let t=0,n=e.length;for(;t<n;t++){const r=e[t];i[t]!==r&&rs(i,t,r)}rs(i,"length",n)}else uu(i,e)}function ji(i,e,t=[]){let n,r=i;if(e.length>1){n=e.shift();const o=typeof n,a=Array.isArray(i);if(Array.isArray(n)){for(let u=0;u<n.length;u++)ji(i,[n[u]].concat(e),t);return}else if(a&&o==="function"){for(let u=0;u<i.length;u++)n(i[u],u)&&ji(i,[u].concat(e),t);return}else if(a&&o==="object"){const{from:u=0,to:l=i.length-1,by:c=1}=n;for(let f=u;f<=l;f+=c)ji(i,[f].concat(e),t);return}else if(e.length>1){ji(i[n],e,[n].concat(t));return}r=i[n],t=[n].concat(t)}let s=e[0];typeof s=="function"&&(s=s(r,t),s===r)||n===void 0&&s==null||(s=nr(s),n===void 0||is(r)&&is(s)&&!Array.isArray(s)?uu(r,s):rs(i,n,s))}function ph(...[i,e]){const t=nr(i||{}),n=Array.isArray(t),r=ou(t);function s(...o){cf(()=>{n&&o.length===1?dh(t,o[0]):ji(t,o)})}return[r,s]}var qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function fu(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var _o={exports:{}};_o.exports;(function(i){(function(){function e(n,r){return r?fu(n):n.slice?e[s(n)]:function(o,a){n(o={exports:{}}),e[s(a)]=o.exports};function s(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){String.random=function(s,o){var a="";for(s=s||24,o=o||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";s-- >0;)a+=o.charAt(Math.floor(Math.random()*o.length));return a},String.match=function(s,o){var a,u;return typeof s!="string"?!1:(typeof o=="string"&&(o={"=":o}),o=o||{},a=o["="]||o["*"]||o[">"]||o["<"],s===a?!0:u!==o["="]?!1:(a=o["*"]||o[">"],s.slice(0,(a||"").length)===a?!0:u!==o["*"]?!1:u!==o[">"]&&u!==o["<"]?s>=o[">"]&&s<=o["<"]:u!==o[">"]&&s>=o[">"]||u!==o["<"]&&s<=o["<"]))},String.hash=function(s,o){if(typeof s=="string"){if(o=o||0,!s.length)return o;for(var a=0,u=s.length,l;a<u;++a)l=s.charCodeAt(a),o=(o<<5)-o+l,o|=0;return o}};var r=Object.prototype.hasOwnProperty;Object.plain=function(s){return s?s instanceof Object&&s.constructor===Object||Object.prototype.toString.call(s).match(/^\[object (\w+)\]$/)[1]==="Object":!1},Object.empty=function(s,o){for(var a in s)if(r.call(s,a)&&(!o||o.indexOf(a)==-1))return!1;return!0},Object.keys=Object.keys||function(s){var o=[];for(var a in s)r.call(s,a)&&o.push(a);return o},function(){var s,o=setTimeout,a=0,u=0,l=typeof setImmediate!=""+s&&setImmediate||function(f,h){return typeof MessageChannel==""+s?o:((f=new MessageChannel).port1.onmessage=function(m){m.data==""&&h()},function(m){h=m,f.port2.postMessage("")})}(),c=o.check=o.check||typeof performance!=""+s&&performance||{now:function(){return+new Date}};o.hold=o.hold||9,o.poll=o.poll||function(f){if(o.hold>=c.now()-a&&u++<3333){f();return}l(function(){a=c.now(),f()},u=0)}}(),function(){var s=setTimeout,o=s.turn=s.turn||function(h){a.push(h)==1&&u(f)},a=o.s=[],u=s.poll,l=0,c,f=function(){(c=a[l++])&&c(),(l==a.length||l==99)&&(a=o.s=a.slice(l),l=0),a.length&&u(f)}}(),function(){var s,o=setTimeout,a=o.turn;(o.each=o.each||function(u,l,c,f){f=f||9,function h(m,p,_){if(p=(m=(u||[]).splice(0,f)).length){for(var g=0;g<p&&s===(_=l(m[g]));g++);if(s===_){a(h);return}}c&&c(_)}()})()}()})(e,"./shim"),e(function(n){n.exports=function r(c,o,a){if(!c)return{to:r};var u,l=typeof o=="function",c=(this.tag||(this.tag={}))[c]||l&&(this.tag[c]={tag:c,to:r._={next:function(h){var m;(m=this.to)&&m.next(h)}}});if(l){var f={off:r.off||(r.off=function(){if(this.next===r._.next)return!0;this===this.the.last&&(this.the.last=this.back),this.to.back=this.back,this.next=r._.next,this.back.to=this.to,this.the.last===this.the&&delete this.on.tag[this.the.tag]}),to:r._,next:o,the:c,on:this,as:a};return(f.back=c.last||c).to=f,c.last=f}return(c=c.to)&&u!==o&&c.next(o),c}})(e,"./onto"),e(function(n){n.exports=function(r){return r===null||typeof r=="string"||typeof r=="boolean"||typeof r=="number"&&r!=1/0&&r!=-1/0&&r===r||!!r&&typeof r["#"]=="string"&&Object.keys(r).length===1&&r["#"]}})(e,"./valid"),e(function(n){e("./shim");function r(){var c=+new Date;return u<c?(o=0,u=c+r.drift):u=c+(o+=1)/a+r.drift}r.drift=0;var s=-1/0,o=0,a=999,u=s,l;r.is=function(c,f,h){var m=f&&c&&c._&&c._[">"]||h;if(m)return typeof(m=m[f])=="number"?m:s},r.ify=function(c,f,h,m,p){(c=c||{})._=c._||{},p&&(c._["#"]=p);var _=c._[">"]||(c._[">"]={});return l!==f&&f!=="_"&&(typeof h=="number"&&(_[f]=h),l!==m&&(c[f]=m)),c},n.exports=r})(e,"./state"),e(function(n){e("./shim");function r(s){var o={s:{}},a=o.s;s=s||{max:999,age:1e3*9},o.check=function(l){return a[l]?u(l):!1};var u=o.track=function(l){var c=a[l]||(a[l]={});return c.was=o.now=+new Date,o.to||(o.to=setTimeout(o.drop,s.age+9)),u.ed&&u.ed(l),c};return o.drop=function(l){o.to=null,o.now=+new Date;var c=Object.keys(a);console.STAT&&console.STAT(o.now,+new Date-o.now,"dup drop keys"),setTimeout.each(c,function(f){var h=a[f];h&&(l||s.age)>o.now-h.was||delete a[f]},0,99)},o}n.exports=r})(e,"./dup"),e(function(n){e("./onto"),n.exports=function(o,a){if(this.on){var u=(this.opt||{}).lack||9e3;if(typeof o!="function"){if(!o)return;var c=o["#"]||o,l=(this.tag||"")[c];return l?(a&&(l=this.on(c,a),clearTimeout(l.err),l.err=setTimeout(function(){l.off()},u)),!0):void 0}var c=a&&a["#"]||r(9);if(!o)return c;var f=this.on(c,o,a);return f.err=f.err||setTimeout(function(){f.off(),f.next({err:"Error: No ACK yet.",lack:!0})},u),c}};var r=String.random||function(){return Math.random().toString(36).slice(2)}})(e,"./ask"),e(function(n){function r(p){return p instanceof r?(this._={$:this}).$:this instanceof r?r.create(this._={$:this,opt:p}):new r(p)}r.is=function(p){return p instanceof r||p&&p._&&p===p._.$||!1},r.version=.202,r.chain=r.prototype,r.chain.toJSON=function(){},e("./shim"),r.valid=e("./valid"),r.state=e("./state"),r.on=e("./onto"),r.dup=e("./dup"),r.ask=e("./ask"),function(){r.create=function(S){S.root=S.root||S,S.graph=S.graph||{},S.on=S.on||r.on,S.ask=S.ask||r.ask,S.dup=S.dup||r.dup();var R=S.$.opt(S.opt);return S.once||(S.on("in",p,S),S.on("out",p,S),S.on("put",d,S),r.on("create",S),S.on("create",S)),S.once=1,R};function p(S){if(S){if(S.out===p){this.to.next(S);return}var R=this,C=R.as,k=C.at||C,N=k.$,U=k.dup,z,H=S.DBG;if((z=S["#"])||(z=S["#"]=o(9)),!U.check(z)){if(U.track(z),z=S._,S._=typeof z=="function"?z:function(){},S.$&&S.$===(S.$._||"").$||(S.$=N),S["@"]&&!S.put&&v(S),!k.ask(S["@"],S))if(H&&(H.u=+new Date),S.put){_(S);return}else S.get&&r.on.get(S,N);H&&(H.uc=+new Date),R.to.next(S),H&&(H.ua=+new Date),!(S.nts||S.NTS)&&(S.out=p,k.on("out",S),H&&(H.ue=+new Date))}}}function _(S){if(S){var R=S._||"",C=R.root=((R.$=S.$||"")._||"").root;if(S["@"]&&R.faith&&!R.miss){S.out=p,C.on("out",S);return}R.latch=C.hatch,R.match=C.hatch=[];var k=S.put,N=R.DBG=S.DBG,U=+new Date;if(F=F||U,!(k["#"]&&k["."])){N&&(N.p=U),R["#"]=S["#"],R.msg=S,R.all=0,R.stun=1;var z=Object.keys(k);console.STAT&&console.STAT(U,((N||R).pk=+new Date)-U,"put sort");var H=0,ne,K,W,q,ie,Z,O;(function xe(ye){if(ne!=H){if(ne=H,!(W=z[H])){console.STAT&&console.STAT(U,((N||R).pd=+new Date)-U,"put"),x(R);return}(q=k[W])?(O=q._)?W!==O["#"]?Z=y+b(W)+"soul not same.":(ie=O[">"])||(Z=y+b(W)+"no state."):Z=y+b(W)+"no meta.":Z=y+b(W)+"no node.",K=Object.keys(q||{})}if(Z){S.err=R.err=Z,x(R);return}var oe=0,pe;for(ye=ye||0;ye++<9&&(pe=K[oe++]);)if(pe!=="_"){var Ie=q[pe],me=ie[pe];if(f===me){Z=y+b(pe)+"on"+b(W)+"no state.";break}if(!u(Ie)){Z=y+b(pe)+"on"+b(W)+"bad "+typeof Ie+b(Ie);break}g(Ie,pe,W,me,S),++A}if((K=K.slice(oe)).length){a(xe);return}++H,K=null,xe(ye)})()}}}r.on.put=_;function g(S,R,C,k,N){var U=N._||"",z=U.root,H=z.graph,ne,K=H[C]||h,W=l(K,R,1),q=K[R],ie=U.DBG;(ne=console.STAT)&&(!H[C]||!q)&&(ne.has=(ne.has||0)+1);var Z=E();if(k>Z){setTimeout(function(){g(S,R,C,k,N)},(ne=k-Z)>D?D:ne),console.STAT&&console.STAT((ie||U).Hf=+new Date,ne,"future");return}if(!(k<W)&&!(!U.faith&&k===W&&(S===q||w(S)<=w(q))&&!U.miss)){U.stun++;var O=N["#"]+U.all++,xe={toString:function(){return O},_:U};xe.toJSON=xe.toString,z.dup.track(xe)["#"]=N["#"],ie&&(ie.ph=ie.ph||+new Date),z.on("put",{"#":xe,"@":N["@"],put:{"#":C,".":R,":":S,">":k},ok:N.ok,_:U})}}function d(S){var R;(R=(S._||"").DBG)&&(R.pa=+new Date,R.pm=R.pm||+new Date);var C=this,k=C.as,N=k.graph,U=S._,z=S.put,H=z["#"],ne=z["."],K=z[":"],W=z[">"];S["#"];var q;(q=U.msg)&&(q=q.put)&&(q=q[H])&&c(q,ne,W,K,H),N[H]=c(N[H],ne,W,K,H),(q=(k.next||"")[H])&&q.on("in",S),x(U),C.to.next(S)}function x(S,R){var C;if(!S.stop&&!(!S.err&&0<--S.stun)&&(S.stop=1,!!(C=S.root))){var k=S.match;k.end=1,k===C.hatch&&(!(k=S.latch)||k.end?delete C.hatch:C.hatch=k),S.hatch&&S.hatch(),setTimeout.each(S.match,function(N){N&&N()}),!(!(R=S.msg)||S.err||R.err)&&(R.out=p,S.root.on("out",R),T())}}function v(S){var R=S["@"]||"",C;if(!(C=R._)){var k=(k=S.$)&&(k=k._)&&(k=k.root)&&(k=k.dup);if(!(k=k.check(R)))return;S["@"]=k["#"]||S["@"];return}C.acks=(C.acks||0)+1,(C.err=S.err)&&(S["@"]=C["#"],x(C)),C.ok=S.ok||C.ok,!C.stop&&!C.crack&&(C.crack=C.match&&C.match.push(function(){M(C)})),M(C)}function M(S){!S||!S.root||S.stun||S.acks!==S.all||S.root.on("in",{"@":S["#"],err:S.err,ok:S.err?f:S.ok||{"":1}})}var y="Error: Invalid graph!",b=function(S){return" '"+(""+S).slice(0,9)+"...' "},w=JSON.stringify,D=2147483647,E=r.state,A=0,F,T=function(){A>999&&A/-(F-(F=+new Date))>1&&(r.window&&console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."),T=function(){A=0})}}(),function(){r.on.get=function(_,g){var d=g._,x=_.get,v=x["#"],M=d.graph[v],y=x["."],b=d.next||(d.next={}),w=b[v],D=_._||{},E=D.DBG=_.DBG;if(E&&(E.g=+new Date),!M)return d.on("get",_);if(y){if((typeof y!="string"||f===M[y])&&!((w||"").next||"")[y]){d.on("get",_);return}M=c({},y,l(M,y),M[y],v)}M&&p(_,M),d.on("get",_)};function p(_,g){var d=+new Date,x=_._||{},v=x.DBG=_.DBG,M=_["#"],y=o(9),b=Object.keys(g||"").sort(),w=((g||"")._||"")["#"];b.length;var D=_.$._.root,E=g===D.graph[w];console.STAT&&console.STAT(d,((v||x).gk=+new Date)-d,"got keys"),g&&function A(){d=+new Date;for(var F=0,T,S={},R;F<9&&(T=b[F++]);)c(S,T,l(g,T),g[T],w);b=b.slice(F),(R={})[w]=S,S=R;var C;E&&(C=function(){},C.ram=C.faith=!0),R=b.length,console.STAT&&console.STAT(d,-(d-(d=+new Date)),"got copied some"),v&&(v.ga=+new Date),D.on("in",{"@":M,"#":y,put:S,"%":R?y=o(9):f,$:D.$,_:C,DBG:v,FOO:1}),console.STAT&&console.STAT(d,+new Date-d,"got in"),R&&setTimeout.turn(A)}(),g||D.on("in",{"@":_["#"]})}r.on.get.ack=p}(),function(){r.chain.opt=function(p){p=p||{};var _=this,g=_._,d=p.peers||p;return Object.plain(p)||(p={}),Object.plain(g.opt)||(g.opt=p),typeof d=="string"&&(d=[d]),Object.plain(g.opt.peers)||(g.opt.peers={}),d instanceof Array&&(p.peers={},d.forEach(function(x){var v={};v.id=v.url=x,p.peers[x]=g.opt.peers[x]=g.opt.peers[x]||v})),s(p,function x(v){var M=this[v];if(this&&this.hasOwnProperty(v)||typeof M=="string"||Object.empty(M)){this[v]=M;return}M&&M.constructor!==Object&&!(M instanceof Array)||s(M,x)}),g.opt.from=p,r.on("opt",g),g.opt.uuid=g.opt.uuid||function(v){return r.state().toString(36).replace(".","")+String.random(v||12)},_}}();var s=function(p,_){Object.keys(p).forEach(_,p)},o=String.random,a=setTimeout.turn,u=r.valid,l=r.state.is,c=r.state.ify,f,h={},m;r.log=function(){return!r.log.off&&m.log.apply(m,arguments),[].slice.call(arguments).join(" ")},r.log.once=function(p,_,g){return(g=r.log.once)[p]=g[p]||0,g[p]++||r.log(_)},typeof window<"u"&&((window.GUN=window.Gun=r).window=window);try{typeof t<"u"&&(t.exports=r)}catch{}n.exports=r,(r.window||{}).console=(r.window||{}).console||{log:function(){}},(m=console).only=function(p,_){return m.only.i&&p===m.only.i&&m.only.i++&&(m.log.apply(m,arguments)||_)},r.log.once("welcome","Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!")})(e,"./root"),e(function(n){var r=e("./root");r.chain.back=function(a,u){var l;if(a=a||1,a===-1||a===1/0)return this._.root.$;if(a===1)return(this._.back||this._).$;var c=this,f=c._;if(typeof a=="string"&&(a=a.split(".")),a instanceof Array){var h=0,m=a.length,l=f;for(h;h<m;h++)l=(l||s)[a[h]];return o!==l?u?c:l:(l=f.back)?l.$.back(a,u):void 0}if(typeof a=="function"){for(var p,l={back:f};(l=l.back)&&o===(p=a(l,u)););return p}return typeof a=="number"?(f.back||f).$.back(a-1):this};var s={},o})(e,"./back"),e(function(n){var r=e("./root");r.chain.chain=function(x){var v=this,M=v._,y=new(x||v).constructor(v),b=y._,w;return b.root=w=M.root,b.id=++w.once,b.back=v._,b.on=r.on,b.on("in",r.on.in,b),b.on("out",r.on.out,b),y};function s(x){var v,M=this.as,y=M.back,b=M.root,w;if(x.$||(x.$=M.$),this.to.next(x),M.err){M.on("in",{put:M.put=f,$:M.$});return}if(v=x.get){if(b.pass&&(b.pass[M.id]=M),M.lex&&Object.keys(M.lex).forEach(function(D){w[D]=M.lex[D]},w=x.get=x.get||{}),v["#"]||M.soul){if(v["#"]=v["#"]||M.soul,x["#"]||(x["#"]=h(9)),y=b.$.get(v["#"])._,v=v["."]){if(p(y.put,v)&&(w=y.ask&&y.ask[v],(y.ask||(y.ask={}))[v]=y.$.get(v)._,y.on("in",{get:v,put:{"#":y.soul,".":v,":":y.put[v],">":g(b.graph[y.soul],v)}}),w))return}else{if(w=y.ask&&y.ask[""],(y.ask||(y.ask={}))[""]=y,f!==y.put&&(y.on("in",y),w))return;x.$=y.$}return b.ask(l,x),b.on("in",x)}if(v["."])return M.get?(x={get:{".":M.get},$:M.$},(y.ask||(y.ask={}))[M.get]=x.$._,y.on("out",x)):(x={get:M.lex?x.get:{},$:M.$},y.on("out",x));if((M.ask||(M.ask={}))[""]=M,M.get)return v["."]=M.get,(y.ask||(y.ask={}))[M.get]=x.$._,y.on("out",x)}return y.on("out",x)}r.on.out=s;function o(x,v){v=v||this.as;var M=v.root,y=x.$||(x.$=v.$),b=(y||"")._||c,w=x.put||"",D=w["#"],E=w["."],A=f!==w["="]?w["="]:w[":"],F=w[">"]||-1/0,T;if(f!==x.put&&(f===w["#"]||f===w["."]||f===w[":"]&&f===w["="]||f===w[">"])){if(!m(w)){if(!(D=((w||"")._||"")["#"])){console.log("chain not yet supported for",w,"...",x,v);return}return y=v.root.$.get(D),setTimeout.each(Object.keys(w).sort(),function(S){S=="_"||f===(F=g(w,S))||v.on("in",{$:y,put:{"#":D,".":S,"=":w[S],">":F},VIA:x})})}v.on("in",{$:b.back.$,put:{"#":D=b.back.soul,".":E=b.has||b.get,"=":w,">":g(b.back.put,E)},via:x});return}(x.seen||"")[v.id]||((x.seen||(x.seen=function(){}))[v.id]=v,v!==b&&(Object.keys(x).forEach(function(S){w[S]=x[S]},w={}),w.get=v.get||w.get,!v.soul&&!v.has?w.$$$=w.$$$||v.$:b.soul&&(w.$=v.$,w.$$=w.$$||b.$),x=w),u(x,v),(v.soul||x.$$)&&F>=g(M.graph[D],E)&&((w=M.$.get(D)._).put=d(w.put,E,F,A,D)),!b.soul&&F>=g(M.graph[D],E)&&(T=(M.$.get(D)._.next||"")[E])&&(T.put=A,typeof(w=m(A))=="string"&&(T.put=M.$.get(w)._.put||A)),this.to&&this.to.next(x),v.any&&setTimeout.each(Object.keys(v.any),function(S){(S=v.any[S])&&S(x)},0,99),v.echo&&setTimeout.each(Object.keys(v.echo),function(S){(S=v.echo[S])&&S.on("in",x)},0,99),((x.$$||"")._||b).soul&&(T=v.next)&&(T=T[E])&&(w={},Object.keys(x).forEach(function(S){w[S]=x[S]}),w.$=(x.$$||x.$).get(w.get=E),delete w.$$,delete w.$$$,T.on("in",w)),a(x,v))}r.on.in=o;function a(x,v){if(v=v||this.as||x.$._,!(x.$$&&this!==r.on)&&!(!x.put||v.soul)){var M=x.put||"",y=M["="]||M[":"],E,b=v.root,w=b.$.get(M["#"]).get(M["."])._;if(typeof(y=m(y))!="string"){this===r.on&&((w.echo||(w.echo={}))[v.id]=v);return}if(!((w.echo||(w.echo={}))[v.id]&&!(b.pass||"")[v.id])){if(E=b.pass){if(E[y+v.id])return;E[y+v.id]=1}(w.echo||(w.echo={}))[v.id]=v,v.has&&(v.link=y);var D=b.$.get(w.link=y)._;(D.echo||(D.echo={}))[w.id]=w;var E=v.ask||"";(E[""]||v.lex)&&D.on("out",{get:{"#":y}}),setTimeout.each(Object.keys(E),function(A,F){!A||!(F=E[A])||F.on("out",{get:{"#":y,".":A}})},0,99)}}}r.on.link=a;function u(x,v){var M=x.put||"",y=f!==M["="]?M["="]:M[":"],b=v.root,w,D;if(f===y){if(v.soul&&f!==v.put||(D=(x.$$||x.$||"")._||"",x["@"]&&(f!==D.put||f!==v.put)))return;(w=v.link||x.linked)&&delete(b.$.get(w)._.echo||"")[v.id],v.has&&(v.link=null),v.put=f,setTimeout.each(Object.keys(v.next||""),function(E,A){(A=v.next[E])&&(w&&delete(b.$.get(w).get(E)._.echo||"")[A.id],A.on("in",{get:E,put:f,$:A.$}))},0,99);return}v.soul||x.$$||(w=m(y),D=x.$._||"",!((w===D.link||v.has&&!D.link)&&!((b.pass||"")[v.id]&&typeof w!="string"))&&(delete(D.echo||"")[v.id],u({get:v.get,put:f,$:x.$,linked:x.linked=x.linked||D.link},v)))}r.on.unlink=u;function l(x,v){var M=this.as,y=M.$._;y.root;var b=M.get||"",w=(x.put||"")[b["#"]]||"";if(!x.put||typeof b["."]=="string"&&f===w[b["."]]){if(f!==y.put||!y.soul&&!y.has)return;y.ack=(y.ack||0)+1,y.on("in",{get:y.get,put:y.put=f,$:y.$,"@":x["@"]});return}(x._||{}).miss=1,r.on.put(x)}var c={},f,h=String.random,m=r.valid,p=function(x,v){return x&&Object.prototype.hasOwnProperty.call(x,v)},_=r.state,g=_.is,d=_.ify})(e,"./chain"),e(function(n){var r=e("./root");r.chain.get=function(f,h,m){var p,_;if(typeof f=="string"){if(f.length==0)return(p=this.chain())._.err={err:r.log("0 length key!",f)},h&&h.call(p,p._.err),p;var g=this,d=g._,x=d.next||u;(p=x[f])||(p=f&&s(f,g)),p=p&&p.$}else if(typeof f=="function"){let E=function(A,F,T){if(!E.stun&&!((U=M.pass)&&!U[y])){var S=A.$._,R=(A.$$||"")._,C=(R||S).put,k=!S.has&&!S.soul,N={},U;if((k||c===C)&&(C=c===((U=A.put)||"")["="]?c===(U||"")[":"]?U:U[":"]:U["="]),typeof(U=r.valid(C))=="string"&&(C=c===(U=M.$.get(U)._.put)?v.not?c:C:U),!(v.not&&c===C)){if(c===v.stun){if((U=M.stun)&&U.on&&(d.$.back(function(z){if(U.on(""+z.id,N={}),(N.run||0)<E.id)return N}),!N.run&&U.on(""+S.id,N={}),!N.run&&R&&U.on(""+R.id,N={}),E.id>N.run&&((!N.stun||N.stun.end)&&(N.stun=U.on("stun"),N.stun=N.stun&&N.stun.last),N.stun&&!N.stun.end))){(N.stun.add||(N.stun.add={}))[y]=function(){E(A,F,1)};return}if(c===C&&(T=0),(U=M.hatch)&&!U.end&&c===v.hatch&&!T){if(b[S.$._.id])return;b[S.$._.id]=1,U.push(function(){E(A,F,1)});return}b={}}if(M.pass){if(M.pass[y+S.id])return;M.pass[y+S.id]=1}if(v.on){v.ok.call(S.$,C,S.get,A,F||E);return}if(v.v2020){v.ok(A,F||E);return}Object.keys(A).forEach(function(z){U[z]=A[z]},U={}),A=U,A.put=C,v.ok.call(v.as,A,F||E)}}};var w=E;if(h===!0)return o(this,f,h,m),this;p=this;var d=p._,v=h||{},M=d.root,y;v.at=d,v.ok=f;var b={};return E.at=d,(d.any||(d.any={}))[y=String.random(7)]=E,E.off=function(){E.stun=1,d.any&&delete d.any[y]},E.rid=a,E.id=v.run||++M.once,_=M.pass,(M.pass={})[y]=1,v.out=v.out||{get:{}},d.on("out",v.out),M.pass=_,p}else{if(typeof f=="number")return this.get(""+f,h,m);if(typeof(_=l(f))=="string")return this.get(_,h,m);(_=this.get.next)&&(p=_(this,f))}return p?(h&&typeof h=="function"&&p.get(h,m),p):((p=this.chain())._.err={err:r.log("Invalid get request!",f)},h&&h.call(p,p._.err),p)};function s(f,h){var m=h._,p=m.next,_=h.chain(),g=_._;return p||(p=m.next={}),p[g.get=f]=g,h===m.root.$?g.soul=f:(m.soul||m.has)&&(g.has=f),g}function o(f,h,m,p){var _=f._,g=0,d;return(d=_.soul||_.link)?h(d,p,_):_.jam?_.jam.push([h,p]):(_.jam=[[h,p]],f.get(function(v,M){if(!(c===v.put&&!_.root.opt.super&&(d=Object.keys(_.root.opt.peers).length)&&++g<=d)){M.rid(v);var y=(y=v.$)&&y._||{},b=0,w;for(d=_.jam,delete _.jam;w=d[b++];){var D=w[0];w=w[1],D&&D(y.link||y.soul||r.valid(v.put)||((v.put||{})._||{})["#"],w,v,M)}}},{out:{get:{".":!0}}}),f)}function a(f){var h=this.at||this.on;if(!f||h.soul||h.has)return this.off();if(f=(f=(f=f.$||f)._||f).id){h.map;var m;if((m=this.seen||(this.seen={}))[f])return!0;m[f]=!0}}var u={},l=r.valid,c})(e,"./get"),e(function(n){var r=e("./root");r.chain.put=function(p,_,g){var d=this,x=d._,v=x.root;g=g||{},g.root=x.root,g.run||(g.run=v.once),s(g,x.id),g.ack=g.ack||_,g.via=g.via||d,g.data=g.data||p,g.soul||(g.soul=x.soul||typeof _=="string"&&_);var M=g.state=g.state||r.state();return typeof p=="function"?(p(function(y){g.data=y,d.put(l,l,g)}),d):g.soul?(g.$=v.$.get(g.soul),g.todo=[{it:g.data,ref:g.$}],g.turn=g.turn||f,g.ran=g.ran||o,function y(){var b=g.todo,w=b.pop(),D=w.it;w.ref&&w.ref._.id;var E,A,F,T,S;if(s(g,w.ref),(T=w.todo)&&(A=T.pop(),D=D[A],T.length&&b.push(w)),A&&(b.path||(b.path=[])).push(A),!(E=h(D))&&!(S=r.is(D))){if(!Object.plain(D)){o.err(g,"Invalid data: "+u(D)+" at "+(g.via.back(function(U){U.get&&T.push(U.get)},T=[])||T.join("."))+"."+(b.path||[]).join("."));return}for(var R=g.seen||(g.seen=[]),C=R.length;C--;)if(D===(T=R[C]).it){E=D=T.link;break}}if(A&&E)w.node=m(w.node,A,M,D);else{let U=function(z,H){var ne=F.link["#"];H&&(H.off(),H.rid(z));var K=ne||z.soul||(T=(z.$$||z.$)._||"").soul||T.link||((T=T.put||"")._||"")["#"]||T["#"]||((T=z.put||"")&&z.$$?T["#"]:(T["="]||T[":"]||"")["#"]);if(!ne&&s(g,z.$),!K&&!w.link["#"]){(w.wait||(w.wait=[])).push(function(){U(z,H)});return}K||(K=[],(z.$$||z.$).back(function(W){if(T=W.soul||W.link)return K.push(T);K.push(W.get)}),K=K.reverse().join("/")),F.link["#"]=K,!S&&(((g.graph||(g.graph={}))[K]=F.node||(F.node={_:{}}))._["#"]=K),delete g.wait[k],F.wait&&setTimeout.each(F.wait,function(W){W&&W()}),g.ran(g)};var N=U;if(!g.seen){o.err(g,"Data at root of graph must be a node (an object).");return}g.seen.push(F={it:D,link:{},todo:S?[]:Object.keys(D).sort().reverse(),path:(b.path||[]).slice(),up:w}),w.node=m(w.node,A,M,F.link),!S&&F.todo.length&&b.push(F);var k=g.seen.length;(g.wait||(g.wait={}))[k]="",T=(F.ref=S?D:A?w.ref.get(A):w.ref)._,(T=D&&(D._||"")["#"]||T.soul||T.link)?U({soul:T}):F.ref.get(U,{run:g.run,v2020:1,out:{get:{".":" "}}})}if(!b.length)return g.ran(g);g.turn(y)}(),d):(a(g),d)};function s(p,_){if(_){_=(_._||"").id||_;var g=p.root.stun||(p.root.stun={on:r.on}),d={},x;p.stun||(p.stun=g.on("stun",function(){})),(x=g.on(""+_))&&x.the.last.next(d),!(d.run>=p.run)&&g.on(""+_,function(v){if(p.stun.end){this.off(),this.to.next(v);return}v.run=v.run||p.run,v.stun=v.stun||p.stun})}}function o(p){if(p.err){o.end(p.stun,p.root);return}if(!(p.todo.length||p.end||!Object.empty(p.wait))){p.end=1;var _=p.$.back(-1)._,g=_.root,d=_.ask(function(y){g.on("ack",y),y.err&&!y.lack&&r.log(y),++x>(p.acks||0)&&this.off(),p.ack&&p.ack(y,this)},p.opt),x=0,v=p.stun,M;(M=function(){v&&(o.end(v,g),setTimeout.each(Object.keys(v=v.add||""),function(y){(y=v[y])&&y()}))}).hatch=M,p.ack&&!p.ok&&(p.ok=p.acks||9),p.via._.on("out",{put:p.out=p.graph,ok:p.ok&&{"@":p.ok+1},opt:p.opt,"#":d,_:M})}}o.end=function(p,_){p.end=c,p.the.to===p&&p===p.the.last&&delete _.stun,p.off()},o.err=function(p,_){(p.ack||c).call(p,p.out={err:p.err=r.log(_)}),p.ran(p)};function a(p){var _=p.via._,g;p.via=p.via.back(function(d){if(d.soul||!d.get)return d.$;g=p.data,(p.data={})[d.get]=g}),(!p.via||!p.via._.soul)&&(p.via=_.root.$.get(((p.data||"")._||"")["#"]||_.$.back("opt.uuid")())),p.via.put(p.data,p.ack,p)}function u(p,_){return p&&(_=p.constructor)&&_.name||typeof p}var l,c=function(){},f=setTimeout.turn,h=r.valid,m=r.state.ify})(e,"./put"),e(function(n){var r=e("./root");e("./chain"),e("./back"),e("./put"),e("./get"),n.exports=r})(e,"./index"),e(function(n){var r=e("./index");r.chain.on=function(a,u,l,c){var f=this,h=f._;h.root;var m;if(typeof a=="string")return u?(m=h.on(a,u,l||h,c),l&&l.$&&(l.subs||(l.subs=[])).push(m),f):h.on(a);var p=u;return(p=p===!0?{change:!0}:p||{}).not=1,p.on=1,f.get(a,p),f},r.chain.once=function(a,u){if(u=u||{},!a)return s(this);var l=this,c=l._,f=c.root;c.put;var h=String.random(7),m;return l.get(function(p,_,g,d){var x=this,v=x._,M=v.one||(v.one={});if(d.stun||M[h]==="")return;if((m=r.valid(p))===!0){y();return}if(typeof m=="string")return;clearTimeout((c.one||"")[h]),clearTimeout(M[h]),M[h]=setTimeout(y,u.wait||99);function y(b){if(!v.has&&!v.soul&&(v={put:p,get:_}),o===(m=v.put)&&(m=((g.$$||"")._||"").put),typeof r.valid(m)=="string"&&(m=f.$.get(m)._.put,m===o&&!b)){M[h]=setTimeout(function(){y(1)},u.wait||99);return}d.stun||M[h]!==""&&(M[h]="",(c.soul||c.has)&&d.off(),a.call(x,m,v.get),clearTimeout(M[h]))}},{on:1}),l};function s(a,u,l){return r.log.once("valonce","Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),(l=a.chain())._.nix=a.once(function(c,f){l._.on("in",this._)}),l._.lex=a._.lex,l}r.chain.off=function(){var a=this,u=a._,l,c=u.back;if(c)return u.ack=0,(l=c.next)&&l[u.get]&&delete l[u.get],(l=c.any)&&(delete c.any,c.any={}),(l=c.ask)&&delete l[u.get],(l=c.put)&&delete l[u.get],(l=u.soul)&&delete c.root.graph[l],(l=u.map)&&Object.keys(l).forEach(function(f,h){h=l[f],h.link&&c.root.$.get(h.link).off()}),(l=u.next)&&Object.keys(l).forEach(function(f,h){h=l[f],h.$.off()}),u.on("off",{}),a};var o})(e,"./on"),e(function(n){var r=e("./index"),s=r.chain.get.next;r.chain.get.next=function(l,c){var f;return Object.plain(c)?(f=((f=c["#"])||"")["="]||f)?l.get(f):((f=l.chain()._).lex=c,l.on("in",function(h){String.match(h.get||(h.put||"")["."],c["."]||c["#"]||c)&&f.on("in",h),this.to.next(h)}),f.$):(s||a)(l,c)},r.chain.map=function(l,c,f){var h=this,m=h._,p,_;return Object.plain(l)&&(p=l["."]?l:{".":l},l=u),l?(r.log.once("mapfn","Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),_=h.chain(),h.map().on(function(g,d,x,v){var M=(l||a).call(this,g,d,x,v);if(u!==M){if(g===M)return _._.on("in",x);if(r.is(M))return _._.on("in",M._);var y={};Object.keys(x.put).forEach(function(b){y[b]=x.put[b]},y),y["="]=M,_._.on("in",{get:d,put:y})}}),_):((_=m.each)||((m.each=_=h.chain())._.lex=p||_._.lex||m.lex,_._.nix=h.back("nix"),h.on("in",o,_._)),_)};function o(l){this.to.next(l);var c=this.as,f=l.$,h=f._,m=l.put,p;!h.soul&&!l.$$||(p=c.lex)&&!String.match(l.get||(m||"")["."],p["."]||p["#"]||p)||r.on.link(l,c)}var a=function(){},u})(e,"./map"),e(function(n){var r=e("./index");r.chain.set=function(s,o,a){var u=this,l=u.back(-1),c,f;return o=o||function(){},a=a||{},a.item=a.item||s,(c=((s||"")._||"")["#"])&&((s={})["#"]=c),typeof(f=r.valid(s))=="string"?u.get(c=f).put(s,o,a):r.is(s)?(u.put(function(h){s.get(function(m,p,_){if(!m)return o.call(u,{err:r.log('Only a node can be linked! Not "'+_.put+'"!')});(f={})[m]={"#":m},h(f)},!0)}),s):(Object.plain(s)&&(s=l.get(c=u.back("opt.uuid")()).put(s)),u.get(c||l.back("opt.uuid")(7)).put(s,o,a))}})(e,"./set"),e(function(n){e("./shim");var r=function(){},s=JSON.parseAsync||function(l,c,f){var h,m=+new Date;try{c(h,JSON.parse(l,f),o.sucks(+new Date-m))}catch(p){c(p)}},o=JSON.stringifyAsync||function(l,c,f,h){var m,p=+new Date;try{c(m,JSON.stringify(l,f,h),o.sucks(+new Date-p))}catch(_){c(_)}};o.sucks=function(l){l>99&&(console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."),o.sucks=r)};function a(l){var c=function(){},f=l.opt||{};f.log=f.log||console.log,f.gap=f.gap||f.wait||0,f.max=f.max||(f.memory?f.memory*999*999:3e8)*.3,f.pack=f.pack||f.max*.01*.01,f.puff=f.puff||9;var h=setTimeout.turn||setTimeout,m=l.dup,p=m.check,_=m.track,g=c.hear=function(v,M){if(v){if(f.max<=v.length)return c.say({dam:"!",err:"Message too big!"},M);c===this&&(g.d+=v.length||0,++g.c);var y=M.SH=+new Date,b=v[0],w;if(b==="["){s(v,function(D,E){if(D||!E)return c.say({dam:"!",err:"DAM JSON parse error."},M);console.STAT&&console.STAT(+new Date,E.length,"# on hear batch");var A=f.puff;(function F(){for(var T=+new Date,S=0,R;S<A&&(R=E[S++]);)c.hear(R,M);E=E.slice(S),console.STAT&&console.STAT(T,+new Date-T,"hear loop"),d(M),E.length&&h(F,0)})()}),v="";return}if(b==="{"||(v["#"]||Object.plain(v))&&(w=v)){if(w)return g.one(w,M,y);s(v,function(D,E){if(D||!E)return c.say({dam:"!",err:"DAM JSON parse error."},M);g.one(E,M,y)});return}}};g.one=function(v,M,F){var b,w,D,E,A;if(v.DBG&&(v.DBG=A={DBG:v.DBG}),A&&(A.h=F),A&&(A.hp=+new Date),(b=v["#"])||(b=v["#"]=String.random(9)),!(D=p(b))&&(w=v["##"],!(w&&(D=v["@"]||v.get&&b)&&m.check(E=D+w)))){if((v._=function(){}).via=c.leap=M,(D=v["><"])&&typeof D=="string"&&D.slice(0,99).split(",").forEach(function(T){this[T]=1},v._.yo={}),D=v.dam){(D=c.hear[D])&&D(v,M,l),_(b);return}(D=v.ok)&&(v._.near=D["/"]);var F=+new Date;A&&(A.is=F),M.SI=b,_.ed=function(T){b===T&&(_.ed=0,(T=m.s[b])&&(T.via=M,v.get&&(T.it=v)))},l.on("in",c.last=v),A&&(A.hd=+new Date),console.STAT&&console.STAT(F,+new Date-F,v.get?"msg get":v.put?"msg put":"msg"),_(b),E&&_(E),c.leap=c.last=null}},g.c=g.d=0,function(){var v=0,M;c.hash=function(w,D){var E,A,F,T=+new Date;o(w.put,function S(R,C){var k=(A||(A=F=C||"")).slice(0,32768);if(E=String.hash(k,E),A=A.slice(32768),A){h(S,0);return}console.STAT&&console.STAT(T,+new Date-T,"say json+hash"),w._.$put=F,w["##"]=E,c.say(w,D),delete w._.$put},y)};function y(w,D){var E;return D instanceof Object?(Object.keys(D).sort().forEach(b,{to:E={},on:D}),E):D}function b(w){this.to[w]=this.on[w]}c.say=function(w,D){var E;if((E=this)&&(E=E.to)&&E.next&&E.next(w),!w)return!1;var A,F,T,S=w["@"],R=w._||(w._=function(){}),C=w.DBG,k=+new Date;if(R.y=R.y||k,D||C&&(C.y=k),(A=w["#"])||(A=w["#"]=String.random(9)),!M&&_(A),!(F=w["##"])&&u!==w.put&&!R.via&&S){c.hash(w,D);return}if(!D&&S&&(D=(E=m.s[S])&&(E.via||(E=E.it)&&(E=E._)&&E.via)||(E=c.last)&&S===E["#"]&&c.leap),!D&&S)return m.s[S]?void 0:(console.STAT&&console.STAT(+new Date,++v,"total no peer to ack to"),!1);if(S&&!w.put&&!F&&((m.s[S]||"").it||"")["##"])return!1;if(!D&&c.way)return c.way(w);if(C&&(C.yh=+new Date),!(T=R.raw)){c.raw(w,D);return}if(C&&(C.yr=+new Date),!D||!D.id){if(!Object.plain(D||f.peers))return!1;var k=+new Date;f.puff;var N=f.peers,U=Object.keys(D||f.peers||{});console.STAT&&console.STAT(k,+new Date-k,"peer keys"),function ne(){var K=+new Date;M=1;var W=R.raw;R.raw=T;for(var q=0,ie;q<9&&(ie=(U||"")[q++]);)(ie=N[ie]||(D||"")[ie])&&c.say(w,ie);R.raw=W,M=0,U=U.slice(q),console.STAT&&console.STAT(K,+new Date-K,"say loop"),U.length&&(h(ne,0),S&&_(S))}();return}if(!D.wire&&c.wire&&c.wire(D),A!==D.last){if(D.last=A,D===R.via||(E=R.yo)&&(E[D.url]||E[D.pid]||E[D.id]))return!1;if(console.STAT&&console.STAT(k,((C||R).yp=+new Date)-(R.y||k),"say prep"),!M&&S&&_(S),D.batch){if(D.tail=(E=D.tail||0)+T.length,D.tail<=f.pack){D.batch+=(E?",":"")+T;return}d(D)}D.batch="[";var z=+new Date;setTimeout(function(){console.STAT&&console.STAT(z,+new Date-z,"0ms TO"),d(D)},f.gap),x(T,D),console.STAT&&S===D.SI&&console.STAT(k,+new Date-D.SH,"say ack")}},c.say.c=c.say.d=0,c.raw=function(w,D){if(!w)return"";var E=w._||{},A,F;if(F=E.raw)return F;if(typeof w=="string")return w;var T=w["##"],S=w["@"];if(T&&S){if(!E.via&&p(S+T))return!1;if(F=(m.s[S]||"").it){if(T===F["##"])return!1;F["##"]||(F["##"]=T)}}if(!w.dam&&!w["@"]){var R=0,C=[];F=f.peers;for(var k in F){var N=F[k];if(C.push(N.url||N.pid||N.id),++R>6)break}R>1&&(w["><"]=C.join())}if(w.put&&(F=w.ok)&&(w.ok={"@":(F["@"]||1)-1,"/":F["/"]==w._.near?c.near:F["/"]}),A=E.$put){F={},Object.keys(w).forEach(function(z){F[z]=w[z]}),F.put=":])([:",o(F,function(z,H){if(!z){var ne=+new Date;F=H.indexOf('"put":":])([:"'),U(u,H=H.slice(0,F+6)+A+H.slice(F+14)),console.STAT&&console.STAT(ne,+new Date-ne,"say slice")}});return}o(w,U);function U(z,H){z||(E.raw=H,c.say(w,D))}}}();function d(v){var M=v.batch,y=typeof M=="string";if(y&&(M+="]"),v.batch=v.tail=null,!!M&&!(y?3>M.length:!M.length)){if(!y)try{M=M.length===1?M[0]:JSON.stringify(M)}catch(b){return f.log("DAM JSON stringify error",b)}M&&x(M,v)}}function x(v,M){try{var y=M.wire;M.say?M.say(v):y.send&&y.send(v),c.say.d+=v.length||0,++c.say.c}catch{(M.queue=M.queue||[]).push(v)}}return c.near=0,c.hi=function(v){var M=v.wire,y;if(!M){c.wire(v.length&&{url:v,id:v}||v);return}v.id?f.peers[v.url||v.id]=v:(y=v.id=v.id||v.url||String.random(9),c.say({dam:"?",pid:l.opt.pid},f.peers[y]=v),delete m.s[v.last]),v.met||(c.near++,v.met=+new Date,l.on("hi",v)),y=v.queue,v.queue=[],setTimeout.each(y||[],function(b){x(b,v)},0,9)},c.bye=function(v){v.met&&--c.near,delete v.met,l.on("bye",v);var M=+new Date;M=M-(v.met||M),c.bye.time=((c.bye.time||M)+M)/2},c.hear["!"]=function(v,M){f.log("Error:",v.err)},c.hear["?"]=function(v,M){v.pid&&(M.pid||(M.pid=v.pid),v["@"])||(c.say({dam:"?",pid:f.pid,"@":v["#"]},M),delete m.s[M.last])},c.hear.mob=function(v,M){if(v.peers){var y=Object.keys(v.peers),b=y[Math.random()*y.length>>0];b&&(c.bye(M),c.hi(b))}},l.on("create",function(v){v.opt.pid=v.opt.pid||String.random(9),this.to.next(v),v.on("out",c.say)}),l.on("bye",function(v,M){v=f.peers[v.id||v]||v,this.to.next(v),v.bye?v.bye():(M=v.wire)&&M.close&&M.close(),delete f.peers[v.id],v.wire=null}),l.on("bye",function(v,M){this.to.next(v),(M=console.STAT)&&(M.peers=c.near),(M=v.url)&&setTimeout(function(){},f.lack||9e3)}),l.on("hi",function(v,M){if(this.to.next(v),(M=console.STAT)&&(M.peers=c.near),!f.super){var y=Object.keys(l.next||"");y.length>9999&&!console.SUBS&&console.log(console.SUBS="Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."),setTimeout.each(y,function(b){var w=l.next[b];if(f.super||(w.ask||"")[""]){c.say({get:{"#":b}},v);return}setTimeout.each(Object.keys(w.ask||""),function(D){D&&c.say({"##":String.hash((l.graph[b]||"")[D]),get:{"#":b,".":D}},v)})})}}),c}var u;try{n.exports=a}catch{}})(e,"./mesh"),e(function(n){var r=e("./index");r.Mesh=e("./mesh"),r.on("opt",function(o){if(this.to.next(o),o.once)return;var a=o.opt;if(a.WebSocket===!1)return;var u=r.window||{},l=a.WebSocket||u.WebSocket||u.webkitWebSocket||u.mozWebSocket;if(!l)return;a.WebSocket=l;var c=a.mesh=a.mesh||r.Mesh(o);c.wire||a.wire,c.wire=a.wire=f;function f(_){try{if(!_||!_.url)return d&&d(_);var g=_.url.replace(/^http/,"ws"),d=_.wire=new a.WebSocket(g);return d.onclose=function(){m(_),a.mesh.bye(_)},d.onerror=function(x){m(_)},d.onopen=function(){a.mesh.hi(_)},d.onmessage=function(x){x&&a.mesh.hear(x.data||x,_)},d}catch{a.mesh.bye(_)}}setTimeout(function(){!a.super&&o.on("out",{dam:"hi"})},1);var h=2*999;function m(_){clearTimeout(_.defer),a.peers[_.url]&&(p&&_.retry<=0||(_.retry=(_.retry||a.retry+1||60)-(-_.tried+(_.tried=+new Date)<h*4?1:0),_.defer=setTimeout(function g(){if(p&&p.hidden)return setTimeout(g,h);f(_)},h)))}var p=""+s!=typeof document&&document});var s})(e,"./websocket"),e(function(n){if(!(typeof Gun>"u")){var r=function(){},s;try{s=(Gun.window||r).localStorage}catch{}s||(Gun.log("Warning: No localStorage exists to persist data to!"),s={setItem:function(a,u){this[a]=u},removeItem:function(a){delete this[a]},getItem:function(a){return this[a]}});var o=JSON.stringifyAsync||function(a,u,l,c){var f;try{u(f,JSON.stringify(a,l,c))}catch(h){u(h)}};Gun.on("create",function a(u){this.to.next(u);var l=u.opt;u.graph;var c=[],f,h,m,p;if(l.localStorage===!1)return;l.prefix=l.file||"gun/";try{f=a[l.prefix]=a[l.prefix]||JSON.parse(m=s.getItem(l.prefix))||{}}catch{f=a[l.prefix]={}}m=(m||"").length,u.on("get",function(g){this.to.next(g);var d=g.get,x,v,M,y;!d||!(x=d["#"])||(v=f[x]||y,v&&(M=d["."])&&!Object.plain(M)&&(v=Gun.state.ify({},M,Gun.state.is(v,M),v[M],x)),Gun.on.get.ack(g,v))}),u.on("put",function(g){this.to.next(g);var d=g.put,x=d["#"],v=d["."],M=g["#"],y=g.ok||"";if(f[x]=Gun.state.ify(f[x],v,d[">"],d[":"],x),p&&m>4999880){u.on("in",{"@":M,err:"localStorage max!"});return}!g["@"]&&(!g._.via||Math.random()<y["@"]/y["/"])&&c.push(M),!h&&(h=setTimeout(_,9+m/333))});function _(){if(!c.length&&((setTimeout.turn||"").s||"").length){setTimeout(_,99);return}var g=c;clearTimeout(h),h=!1,c=[],o(f,function(d,x){try{!d&&s.setItem(l.prefix,x)}catch(v){d=p=v||"localStorage failure"}d&&(Gun.log(d+" Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"),u.on("localStorage:error",{err:d,get:l.prefix,put:f})),m=x.length,setTimeout.each(g,function(v){u.on("in",{"@":v,err:d,ok:0})},0,99)})}})}})(e,"./localStorage")})(),function(){var F;if(""+F!=typeof Gun){var e=function(T){console.warn("Warning! Deprecated internal utility will break in next version:",T)},t=Gun;t.fn=t.fn||{is:function(T){return e("fn"),!!T&&typeof T=="function"}},t.bi=t.bi||{is:function(T){return e("bi"),T instanceof Boolean||typeof T=="boolean"}},t.num=t.num||{is:function(T){return e("num"),!n(T)&&(T-parseFloat(T)+1>=0||T===1/0||T===-1/0)}},t.text=t.text||{is:function(T){return e("text"),typeof T=="string"}},t.text.ify=t.text.ify||function(T){return e("text.ify"),t.text.is(T)?T:typeof JSON<"u"?JSON.stringify(T):T&&T.toString?T.toString():T},t.text.random=t.text.random||function(T,S){e("text.random");var R="";for(T=T||24,S=S||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";T>0;)R+=S.charAt(Math.floor(Math.random()*S.length)),T--;return R},t.text.match=t.text.match||function(T,S){var R,C;return e("text.match"),typeof T!="string"?!1:(typeof S=="string"&&(S={"=":S}),S=S||{},R=S["="]||S["*"]||S[">"]||S["<"],T===R?!0:C!==S["="]?!1:(R=S["*"]||S[">"]||S["<"],T.slice(0,(R||"").length)===R?!0:C!==S["*"]?!1:C!==S[">"]&&C!==S["<"]?T>=S[">"]&&T<=S["<"]:C!==S[">"]&&T>=S[">"]||C!==S["<"]&&T<=S["<"]))},t.text.hash=t.text.hash||function(T,S){if(e("text.hash"),typeof T=="string"){if(S=S||0,!T.length)return S;for(var R=0,C=T.length,k;R<C;++R)k=T.charCodeAt(R),S=(S<<5)-S+k,S|=0;return S}},t.list=t.list||{is:function(T){return e("list"),T instanceof Array}},t.list.slit=t.list.slit||Array.prototype.slice,t.list.sort=t.list.sort||function(T){return e("list.sort"),function(S,R){return!S||!R?0:(S=S[T],R=R[T],S<R?-1:S>R?1:0)}},t.list.map=t.list.map||function(T,S,R){return e("list.map"),E(T,S,R)},t.list.index=1,t.obj=t.boj||{is:function(T){return e("obj"),T?T instanceof Object&&T.constructor===Object||Object.prototype.toString.call(T).match(/^\[object (\w+)\]$/)[1]==="Object":!1}},t.obj.put=t.obj.put||function(T,S,R){return e("obj.put"),(T||{})[S]=R,T},t.obj.has=t.obj.has||function(T,S){return e("obj.has"),T&&Object.prototype.hasOwnProperty.call(T,S)},t.obj.del=t.obj.del||function(T,S){if(e("obj.del"),!!T)return T[S]=null,delete T[S],T},t.obj.as=t.obj.as||function(T,S,R,C){return e("obj.as"),T[S]=T[S]||(C===R?{}:R)},t.obj.ify=t.obj.ify||function(T){if(e("obj.ify"),M(T))return T;try{T=JSON.parse(T)}catch{T={}}return T},function(){var T;function S(R,C){b(this,C)&&T!==this[C]||(this[C]=R)}t.obj.to=t.obj.to||function(R,C){return e("obj.to"),C=C||{},E(R,S,C),C}}(),t.obj.copy=t.obj.copy||function(T){return e("obj.copy"),T&&JSON.parse(JSON.stringify(T))},function(){function T(S,R){var C=this.n,k;if(!(C&&(R===C||M(C)&&b(C,R)))&&k!==R)return!0}t.obj.empty=t.obj.empty||function(S,R){return e("obj.empty"),S?!E(S,T,{n:R}):!0}}(),function(){function T(C,k){if(arguments.length===2){T.r=T.r||{},T.r[C]=k;return}T.r=T.r||[],T.r.push(C)}var S=Object.keys,R;Object.keys=Object.keys||function(C){return R(C,function(k,N,U){U(N)})},t.obj.map=R=t.obj.map||function(C,k,N){e("obj.map");var U,z=0,H,ne,K,W,q=typeof k=="function";if(T.r=U,S&&M(C)&&(K=S(C),W=!0),N=N||{},n(C)||K)for(H=(K||C).length;z<H;z++){var ie=z+t.list.index;if(q){if(ne=W?k.call(N,C[K[z]],K[z],T):k.call(N,C[z],ie,T),ne!==U)return ne}else if(k===C[W?K[z]:z])return K?K[z]:ie}else for(z in C)if(q){if(b(C,z)&&(ne=N?k.call(N,C[z],z,T):k(C[z],z,T),ne!==U))return ne}else if(k===C[z])return z;return q?T.r:t.list.index?0:-1}}(),t.time=t.time||{},t.time.is=t.time.is||function(T){return e("time"),T?T instanceof Date:+new Date().getTime()};var x=t.fn.is,n=t.list.is,v=t.obj,M=v.is,b=v.has,E=v.map,r={};r.is=function(T){return e("val.is"),T===F?!1:T===null?!0:T===1/0?!1:a(T)||o(T)||p(T)?!0:r.link.is(T)||!1},r.link=r.rel={_:"#"},function(){r.link.is=function(S){if(e("val.link.is"),S&&S[s]&&!S._&&M(S)){var R={};if(E(S,T,R),R.id)return R.id}return!1};function T(S,R){var C=this;if(C.id)return C.id=!1;if(R==s&&a(S))C.id=S;else return C.id=!1}}(),r.link.ify=function(T){return e("val.link.ify"),D({},s,T)},t.obj.has._=".";var s=r.link._,F,o=t.bi.is,p=t.num.is,a=t.text.is,v=t.obj,M=v.is,D=v.put,E=v.map;t.val=t.val||r;var u={_:"_"};u.soul=function(T,S){return e("node.soul"),T&&T._&&T._[S||f]},u.soul.ify=function(T,S){return e("node.soul.ify"),S=typeof S=="string"?{soul:S}:S||{},T=T||{},T._=T._||{},T._[f]=S.soul||T._[f]||c(),T},u.soul._=r.link._,function(){u.is=function(S,R,C){e("node.is");var k;return M(S)&&(k=u.soul(S))?!E(S,T,{as:C,cb:R,s:k,n:S}):!1};function T(S,R){if(R!==u._){if(!r.is(S))return!0;this.cb&&this.cb.call(this.as,S,R,this.n,this.s)}}}(),function(){u.ify=function(S,R,C){return e("node.ify"),R?typeof R=="string"?R={soul:R}:typeof R=="function"&&(R={map:R}):R={},R.map&&(R.node=R.map.call(C,S,F,R.node||{})),(R.node=u.soul.ify(R.node||{},R))&&E(S,T,{o:R,as:C}),R.node};function T(S,R){var C=this.o,k,N;if(C.map){k=C.map.call(this.as,S,""+R,C.node),N===k?y(C.node,R):C.node&&(C.node[R]=k);return}r.is(S)&&(C.node[R]=S)}}();var v=t.obj,M=v.is,y=v.del,E=v.map,l=t.text,c=l.random,f=u.soul._,F;t.node=t.node||u;var h=t.state;h.lex=function(){return e("state.lex"),h().toString(36).replace(".","")},h.to=function(T,S,R){e("state.to");var C=(T||{})[S];return M(C)&&(C=A(C)),h.ify(R,S,h.is(T,S),C,u.soul(T))},function(){h.map=function(S,R,C){e("state.map");var k,N=M(N=S||R)?N:null;return S=x(S=S||R)?S:null,N&&!S?(R=p(R)?R:h(),N[g]=N[g]||{},E(N,T,{o:N,s:R}),N):(C=C||M(R)?R:k,R=p(R)?R:h(),function(U,z,H,ne){if(!S)return T.call({o:H,s:R},U,z),U;S.call(C||this||{},U,z,H,ne),!(b(H,z)&&k===H[z])&&T.call({o:H,s:R},U,z)})};function T(S,R){g!==R&&h.ify(this.o,R,this.s)}}();var v=t.obj;v.as;var b=v.has,M=v.is,E=v.map,A=v.copy,m=t.num,p=m.is,_=t.fn,x=_.is,g=u._,F,d={};(function(){d.is=function(R,C,k,N){return e("graph.is"),!R||!M(R)||w(R)?!1:!E(R,T,{cb:C,fn:k,as:N})};function T(R,C){if(!R||C!==u.soul(R)||!u.is(R,this.fn,this.as))return!0;this.cb&&(S.n=R,S.as=this.as,this.cb.call(S.as,R,C,S))}function S(R){R&&u.is(S.n,R,S.as)}})(),function(){d.ify=function(N,U,z){e("graph.ify");var H={path:[],obj:N};return U?typeof U=="string"?U={soul:U}:typeof U=="function"&&(U.map=U):U={},typeof z=="string"&&(U.soul=U.soul||z,z=F),U.soul&&(H.link=r.link.ify(U.soul)),U.shell=(z||{}).shell,U.graph=U.graph||{},U.seen=U.seen||[],U.as=U.as||z,T(U,H),U.root=H.node,U.graph};function T(N,U){var z;return(z=k(N,U))?z:(U.env=N,U.soul=R,u.ify(U.obj,S,U)&&(U.link=U.link||r.link.ify(u.soul(U.node)),U.obj!==N.shell&&(N.graph[r.link.is(U.link)]=U.node)),U)}function S(N,U,z){var H=this,ne=H.env,K,W;if(u._===U&&b(N,r.link._))return z._;if(K=C(N,U,z,H,ne)){if(U||(H.node=H.node||z||{},b(N,u._)&&u.soul(N)&&(H.node._=A(N._)),H.node=u.soul.ify(H.node,r.link.is(H.link)),H.link=H.link||r.link.ify(u.soul(H.node))),(W=ne.map)&&(W.call(ne.as||{},N,U,z,H),b(z,U))){if(N=z[U],F===N){y(z,U);return}if(!(K=C(N,U,z,H,ne)))return}if(!U)return H.node;if(K===!0)return N;if(W=T(ne,{obj:N,path:H.path.concat(U)}),!!W.node)return W.link}}function R(N){var U=this,z=r.link.is(U.link),H=U.env.graph;U.link=U.link||r.link.ify(N),U.link[r.link._]=N,U.node&&U.node[u._]&&(U.node[u._][r.link._]=N),b(H,z)&&(H[N]=H[z],y(H,z))}function C(N,U,z,H,ne){var K;if(r.is(N))return!0;if(M(N))return 1;if(K=ne.invalid)return N=K.call(ne.as||{},N,U,z),C(N,U,z,H,ne);ne.err="Invalid value at '"+H.path.concat(U).join(".")+"'!",t.list.is(N)&&(ne.err+=" Use `.set(item)` instead of an Array.")}function k(N,U){for(var z=N.seen,H=z.length,ne;H--;)if(ne=z[H],U.obj===ne.obj)return ne;z.push(U)}}(),d.node=function(T){e("graph.node");var S=u.soul(T);if(S)return D({},S,T)},function(){d.to=function(S,R,C){if(e("graph.to"),!!S){var k={};return C=C||{seen:{}},E(S[R],T,{obj:k,graph:S,opt:C}),k}};function T(S,R){var C,k;if(u._===R){if(w(S,r.link._))return;this.obj[R]=A(S);return}if(!(C=r.link.is(S))){this.obj[R]=S;return}if(k=this.opt.seen[C]){this.obj[R]=k;return}this.obj[R]=this.opt.seen[C]=d.to(this.graph,C,this.opt)}}();var x=t.fn.is,v=t.obj,M=v.is,y=v.del,b=v.has,w=v.empty,D=v.put,E=v.map,A=v.copy,F;t.graph=t.graph||d}}()})(_o);var hu=_o.exports,gh=hu;const _h=mh(gh);var vo={exports:{}};vo.exports;(function(i){(function(){function e(n,r){return r?fu(n):n.slice?e[s(n)]:function(o,a){n(o={exports:{}}),e[s(a)]=o.exports};function s(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){typeof self<"u"&&(n.window=self),typeof window<"u"&&(n.window=window);var r=n.window||n,s,o=r.SEA||{};(o.window=n.window)&&(o.window.SEA=o);try{s+""!=typeof t&&(t.exports=o)}catch{}n.exports=o})(e,"./root"),e(function(n){var r=e("./root");try{r.window&&location.protocol.indexOf("s")<0&&location.host.indexOf("localhost")<0&&!/^127\.\d+\.\d+\.\d+$/.test(location.hostname)&&location.protocol.indexOf("file:")<0&&(console.warn("HTTPS needed for WebCrypto in SEA, redirecting..."),location.protocol="https:")}catch{}})(e,"./https"),e(function(n){var r;if(r+""==typeof btoa){if(r+""==typeof Buffer)try{qs.Buffer=e("buffer",1).Buffer}catch{console.log("Please `npm install buffer` or add it to your package.json !")}qs.btoa=function(s){return Buffer.from(s,"binary").toString("base64")},qs.atob=function(s){return Buffer.from(s,"base64").toString("binary")}}})(e,"./base64"),e(function(n){e("./base64");function r(){}Object.assign(r,{from:Array.from}),r.prototype=Object.create(Array.prototype),r.prototype.toString=function(s,o,a){s=s||"utf8",o=o||0;const u=this.length;if(s==="hex"){const l=new Uint8Array(this);return[...Array((a&&a+1||u)-o).keys()].map(c=>l[c+o].toString(16).padStart(2,"0")).join("")}if(s==="utf8")return Array.from({length:(a||u)-o},(l,c)=>String.fromCharCode(this[c+o])).join("");if(s==="base64")return btoa(this)},n.exports=r})(e,"./array"),e(function(n){e("./base64");var r=e("./array");function s(...o){return console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()"),s.from(...o)}s.prototype=Object.create(Array.prototype),Object.assign(s,{from(){if(!Object.keys(arguments).length||arguments[0]==null)throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");const o=arguments[0];let a;if(typeof o=="string"){const l=arguments[1]||"utf8";if(l==="hex"){const c=o.match(/([\da-fA-F]{2})/g).map(f=>parseInt(f,16));if(!c||!c.length)throw new TypeError("Invalid first argument for type 'hex'.");a=r.from(c)}else if(l==="utf8"||l==="binary"){const c=o.length,f=new Uint16Array(c);Array.from({length:c},(h,m)=>f[m]=o.charCodeAt(m)),a=r.from(f)}else if(l==="base64"){const c=atob(o),f=c.length,h=new Uint8Array(f);Array.from({length:f},(m,p)=>h[p]=c.charCodeAt(p)),a=r.from(h)}else l==="binary"?a=r.from(o):console.info("SafeBuffer.from unknown encoding: "+l);return a}if(o.byteLength,o.byteLength?o.byteLength:o.length){let l;return o instanceof ArrayBuffer&&(l=new Uint8Array(o)),r.from(l||o)}},alloc(o,a=0){return r.from(new Uint8Array(Array.from({length:o},()=>a)))},allocUnsafe(o){return r.from(new Uint8Array(Array.from({length:o})))},concat(o){if(!Array.isArray(o))throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");return r.from(o.reduce((a,u)=>a.concat(Array.from(u)),[]))}}),s.prototype.from=s.from,s.prototype.toString=r.prototype.toString,n.exports=s})(e,"./buffer"),e(function(n){const r=e("./root"),s={Buffer:e("./buffer")};var o={},a;if(JSON.parseAsync=JSON.parseAsync||function(l,c,f){var h;try{c(h,JSON.parse(l,f))}catch(m){c(m)}},JSON.stringifyAsync=JSON.stringifyAsync||function(l,c,f,h){var m;try{c(m,JSON.stringify(l,f,h))}catch(p){c(p)}},s.parse=function(l,c){return new Promise(function(f,h){JSON.parseAsync(l,function(m,p){m?h(m):f(p)},c)})},s.stringify=function(l,c,f){return new Promise(function(h,m){JSON.stringifyAsync(l,function(p,_){p?m(p):h(_)},c,f)})},r.window&&(s.crypto=r.window.crypto||r.window.msCrypto,s.subtle=(s.crypto||o).subtle||(s.crypto||o).webkitSubtle,s.TextEncoder=r.window.TextEncoder,s.TextDecoder=r.window.TextDecoder,s.random=l=>s.Buffer.from(s.crypto.getRandomValues(new Uint8Array(s.Buffer.alloc(l))))),!s.TextDecoder){const{TextEncoder:l,TextDecoder:c}=e((a+""==typeof t?".":"")+"./lib/text-encoding",1);s.TextDecoder=c,s.TextEncoder=l}if(!s.crypto)try{var u=e("crypto",1);Object.assign(s,{crypto:u,random:c=>s.Buffer.from(u.randomBytes(c))});const{Crypto:l}=e("@peculiar/webcrypto",1);s.ossl=s.subtle=new l({directory:"ossl"}).subtle}catch{console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !")}n.exports=s})(e,"./shim"),e(function(n){var r=e("./root"),s=e("./shim"),o={};o.pbkdf2={hash:{name:"SHA-256"},iter:1e5,ks:64},o.ecdsa={pair:{name:"ECDSA",namedCurve:"P-256"},sign:{name:"ECDSA",hash:{name:"SHA-256"}}},o.ecdh={name:"ECDH",namedCurve:"P-256"},o.jwk=function(a,u){a=a.split(".");var l=a[0],c=a[1],f={kty:"EC",crv:"P-256",x:l,y:c,ext:!0};return f.key_ops=u?["sign"]:["verify"],u&&(f.d=u),f},o.keyToJwk=function(a){return{kty:"oct",k:a.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""),ext:!1,alg:"A256GCM"}},o.recall={validity:12*60*60,hook:function(a){return a}},o.check=function(a){return typeof a=="string"&&a.slice(0,4)==="SEA{"},o.parse=async function(u){try{var l=typeof u=="string";return l&&u.slice(0,4)==="SEA{"&&(u=u.slice(3)),l?await s.parse(u):u}catch{}return u},r.opt=o,n.exports=o})(e,"./settings"),e(function(n){var r=e("./shim");n.exports=async function(s,o){var a=typeof s=="string"?s:await r.stringify(s),u=await r.subtle.digest({name:o||"SHA-256"},new r.TextEncoder().encode(a));return r.Buffer.from(u)}})(e,"./sha256"),e(function(n){const r=e("./shim"),s=r.subtle,o=r.ossl?r.ossl:s,a=u=>o.digest({name:"SHA-1"},new ArrayBuffer(u));n.exports=a})(e,"./sha1"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.work=r.work||(async(l,c,f,h)=>{try{var m=(c||{}).epub||c;if(h=h||{},m instanceof Function&&(f=m,m=u),l=typeof l=="string"?l:await s.stringify(l),(h.name||"").toLowerCase().slice(0,3)==="sha"){var p=s.Buffer.from(await a(l,h.name),"binary").toString(h.encode||"base64");if(f)try{f(p)}catch(x){console.log(x)}return p}m=m||s.random(9);var _=await(s.ossl||s.subtle).importKey("raw",new s.TextEncoder().encode(l),{name:h.name||"PBKDF2"},!1,["deriveBits"]),g=await(s.ossl||s.subtle).deriveBits({name:h.name||"PBKDF2",iterations:h.iterations||o.pbkdf2.iter,salt:new s.TextEncoder().encode(h.salt||m),hash:h.hash||o.pbkdf2.hash},_,h.length||o.pbkdf2.ks*8);l=s.random(l.length);var d=s.Buffer.from(g,"binary").toString(h.encode||"base64");if(f)try{f(d)}catch(x){console.log(x)}return d}catch(x){if(console.log(x),r.err=x,r.throw)throw x;f&&f();return}}),n.exports=r.work})(e,"./work"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings"),r.name=r.name||(async(o,a)=>{try{if(o)try{o()}catch(u){console.log(u)}return}catch(u){if(console.log(u),r.err=u,r.throw)throw u;o&&o();return}}),r.pair=r.pair||(async(o,a)=>{try{var u=s.ossl||s.subtle,l=await s.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"]).then(async h=>{var m={};m.priv=(await s.subtle.exportKey("jwk",h.privateKey)).d;var p=await s.subtle.exportKey("jwk",h.publicKey);return m.pub=p.x+"."+p.y,m});try{var c=await u.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"]).then(async h=>{var m={};m.epriv=(await u.exportKey("jwk",h.privateKey)).d;var p=await u.exportKey("jwk",h.publicKey);return m.epub=p.x+"."+p.y,m})}catch(h){if(r.window)throw h;if(h=="Error: ECDH is not a supported algorithm")console.log("Ignoring ECDH...");else throw h}c=c||{};var f={pub:l.pub,priv:l.priv,epub:c.epub,epriv:c.epriv};if(o)try{o(f)}catch(h){console.log(h)}return f}catch(h){if(console.log(h),r.err=h,r.throw)throw h;o&&o();return}}),n.exports=r.pair})(e,"./pair"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.sign=r.sign||(async(l,c,f,h)=>{try{if(h=h||{},!(c||h).priv){if(!r.I)throw"No signing key.";c=await r.I(null,{what:l,how:"sign",why:h.why})}if(u===l)throw"`undefined` not allowed.";var m=await o.parse(l),p=h.check=h.check||m;if(r.verify&&(r.opt.check(p)||p&&p.s&&p.m)&&u!==await r.verify(p,c)){var M=await o.parse(p);if(h.raw||(M="SEA"+await s.stringify(M)),f)try{f(M)}catch(b){console.log(b)}return M}var _=c.pub,g=c.priv,d=o.jwk(_,g),x=await a(m),v=await(s.ossl||s.subtle).importKey("jwk",d,{name:"ECDSA",namedCurve:"P-256"},!1,["sign"]).then(y=>(s.ossl||s.subtle).sign({name:"ECDSA",hash:{name:"SHA-256"}},y,new Uint8Array(x))),M={m,s:s.Buffer.from(v,"binary").toString(h.encode||"base64")};if(h.raw||(M="SEA"+await s.stringify(M)),f)try{f(M)}catch(y){console.log(y)}return M}catch(y){if(console.log(y),r.err=y,r.throw)throw y;f&&f();return}}),n.exports=r.sign})(e,"./sign"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.verify=r.verify||(async(f,h,m,p)=>{try{var _=await o.parse(f);if(h===!1){var g=await o.parse(_.m);if(m)try{m(g)}catch(E){console.log(E)}return g}p=p||{};var d=h.pub||h,x=r.opt.slow_leak?await r.opt.slow_leak(d):await(s.ossl||s.subtle).importKey("jwk",o.jwk(d),{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),v=await a(_.m),M,y,b,w;try{if(M=s.Buffer.from(_.s,p.encode||"base64"),y=new Uint8Array(M),b=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},x,y,new Uint8Array(v)),!b)throw"Signature did not match."}catch{if(r.opt.fallback)return await r.opt.fall_verify(f,h,m,p)}var D=b?await o.parse(_.m):u;if(m)try{m(D)}catch(E){console.log(E)}return D}catch(E){if(console.log(E),r.err=E,r.throw)throw E;m&&m();return}}),n.exports=r.verify;var l={};r.opt.slow_leak=f=>{if(l[f])return l[f];var h=o.jwk(f);return l[f]=(s.ossl||s.subtle).importKey("jwk",h,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),l[f]};var c=r.opt;r.opt.fall_verify=async function(f,h,m,p,_){if(_===r.opt.fallback)throw"Signature did not match";_=_||1;var g=f||"";f=r.opt.unpack(f)||f;var d=await o.parse(f),x=h.pub||h,v=await r.opt.slow_leak(x),M=_<=r.opt.fallback?s.Buffer.from(await s.subtle.digest({name:"SHA-256"},new s.TextEncoder().encode(await o.parse(d.m)))):await a(d.m),y,b,w;try{if(y=s.Buffer.from(d.s,p.encode||"base64"),b=new Uint8Array(y),w=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},v,b,new Uint8Array(M)),!w)throw"Signature did not match."}catch{try{y=s.Buffer.from(d.s,"utf8"),b=new Uint8Array(y),w=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},v,b,new Uint8Array(M))}catch{if(!w)throw"Signature did not match."}}var D=w?await o.parse(d.m):u;if(c.fall_soul=g["#"],c.fall_key=g["."],c.fall_val=f,c.fall_state=g[">"],m)try{m(D)}catch(E){console.log(E)}return D},r.opt.fallback=2})(e,"./verify"),e(function(n){var r=e("./shim"),s=e("./settings"),o=e("./sha256");const a=async(u,l,c)=>{const f=u+(l||r.random(8)).toString("utf8"),h=r.Buffer.from(await o(f),"binary"),m=s.keyToJwk(h);return await r.subtle.importKey("jwk",m,{name:"AES-GCM"},!1,["encrypt","decrypt"])};n.exports=a})(e,"./aeskey"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings");var o=e("./aeskey"),a;r.encrypt=r.encrypt||(async(u,l,c,f)=>{try{f=f||{};var h=(l||f).epriv||l;if(a===u)throw"`undefined` not allowed.";if(!h){if(!r.I)throw"No encryption key.";l=await r.I(null,{what:u,how:"encrypt",why:f.why}),h=l.epriv||l}var m=typeof u=="string"?u:await s.stringify(u),p={s:s.random(9),iv:s.random(15)},_=await o(h,p.s,f).then(d=>s.subtle.encrypt({name:f.name||"AES-GCM",iv:new Uint8Array(p.iv)},d,new s.TextEncoder().encode(m))),g={ct:s.Buffer.from(_,"binary").toString(f.encode||"base64"),iv:p.iv.toString(f.encode||"base64"),s:p.s.toString(f.encode||"base64")};if(f.raw||(g="SEA"+await s.stringify(g)),c)try{c(g)}catch(d){console.log(d)}return g}catch(d){if(console.log(d),r.err=d,r.throw)throw d;c&&c();return}}),n.exports=r.encrypt})(e,"./encrypt"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./aeskey");r.decrypt=r.decrypt||(async(u,l,c,f)=>{try{f=f||{};var h=(l||f).epriv||l;if(!h){if(!r.I)throw"No decryption key.";l=await r.I(null,{what:u,how:"decrypt",why:f.why}),h=l.epriv||l}var m=await o.parse(u),p,_,g;try{p=s.Buffer.from(m.s,f.encode||"base64"),_=s.Buffer.from(m.iv,f.encode||"base64"),g=s.Buffer.from(m.ct,f.encode||"base64");var d=await a(h,p,f).then(v=>s.subtle.decrypt({name:f.name||"AES-GCM",iv:new Uint8Array(_),tagLength:128},v,new Uint8Array(g)))}catch{if(f.encode==="utf8")throw"Could not decrypt";if(r.opt.fallback)return f.encode="utf8",await r.decrypt(u,l,c,f)}var x=await o.parse(new s.TextDecoder("utf8").decode(d));if(c)try{c(x)}catch(v){console.log(v)}return x}catch(v){if(console.log(v),r.err=v,r.throw)throw v;c&&c();return}}),n.exports=r.decrypt})(e,"./decrypt"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings"),r.secret=r.secret||(async(a,u,l,c)=>{try{if(c=c||{},!u||!u.epriv||!u.epub){if(!r.I)throw"No secret mix.";u=await r.I(null,{what:a,how:"secret",why:c.why})}var f=a.epub||a,h=u.epub,m=u.epriv,p=s.ossl||s.subtle,_=o(f),g=Object.assign({public:await p.importKey(..._,!0,[])},{name:"ECDH",namedCurve:"P-256"}),d=o(h,m),x=await p.importKey(...d,!1,["deriveBits"]).then(async M=>{var y=await p.deriveBits(g,M,256),b=new Uint8Array(y),w=await p.importKey("raw",b,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"]);return p.exportKey("jwk",w).then(({k:D})=>D)}),v=x;if(l)try{l(v)}catch(M){console.log(M)}return v}catch(M){if(console.log(M),r.err=M,r.throw)throw M;l&&l();return}});var o=(a,u)=>{var[l,c]=a.split("."),f=u?{d:u}:{};return["jwk",Object.assign(f,{x:l,y:c,kty:"EC",crv:"P-256",ext:!0}),{name:"ECDH",namedCurve:"P-256"}]};n.exports=r.secret})(e,"./secret"),e(function(n){var r=e("./root");r.certify=r.certify||(async(s,o={},a,u,l={})=>{try{if(console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version."),s=(()=>{var v=[];if(s){if((typeof s=="string"||Array.isArray(s))&&s.indexOf("*")>-1)return"*";if(typeof s=="string")return s;if(Array.isArray(s)){if(s.length===1&&s[0])return typeof s[0]=="object"&&s[0].pub?s[0].pub:typeof s[0]=="string"?s[0]:null;s.map(M=>{typeof M=="string"?v.push(M):typeof M=="object"&&M.pub&&v.push(M.pub)})}return typeof s=="object"&&s.pub?s.pub:v.length>0?v:null}})(),!s)return console.log("No certificant found.");const f=l.expiry&&(typeof l.expiry=="number"||typeof l.expiry=="string")?parseFloat(l.expiry):null,h=(o||{}).read?o.read:null,m=(o||{}).write?o.write:typeof o=="string"||Array.isArray(o)||o["+"]||o["#"]||o["."]||o["="]||o["*"]||o[">"]||o["<"]?o:null,p=(l||{}).block||(l||{}).blacklist||(l||{}).ban||{},_=p.read&&(typeof p.read=="string"||(p.read||{})["#"])?p.read:null,g=typeof p=="string"?p:p.write&&(typeof p.write=="string"||p.write["#"])?p.write:null;if(!h&&!m)return console.log("No policy found.");const d=JSON.stringify({c:s,...f?{e:f}:{},...h?{r:h}:{},...m?{w:m}:{},..._?{rb:_}:{},...g?{wb:g}:{}});var c=await r.sign(d,a,null,{raw:1});if(l.raw||(c="SEA"+JSON.stringify(c)),u)try{u(c)}catch(v){console.log(v)}return c}catch(f){if(r.err=f,r.throw)throw f;u&&u();return}}),n.exports=r.certify})(e,"./certify"),e(function(n){var r=e("./shim"),s=e("./root");s.work=e("./work"),s.sign=e("./sign"),s.verify=e("./verify"),s.encrypt=e("./encrypt"),s.decrypt=e("./decrypt"),s.certify=e("./certify"),s.random=s.random||r.random,s.Buffer=s.Buffer||e("./buffer"),s.keyid=s.keyid||(async o=>{try{const a=r.Buffer.concat(o.replace(/-/g,"+").replace(/_/g,"/").split(".").map(f=>r.Buffer.from(f,"base64"))),u=r.Buffer.concat([r.Buffer.from([153,a.length/256,a.length%256]),a]),l=await sha1hash(u),c=r.Buffer.from(l,"binary");return c.toString("hex",c.length-8)}catch(a){throw console.log(a),a}}),((s.window||{}).GUN||{}).SEA=s,n.exports=s})(e,"./sea"),e(function(n){var r=e("./sea"),s,o;r.window?s=r.window.GUN||{chain:{}}:s=e((o+""==typeof t?".":"")+"./gun",1),r.GUN=s;function a(l){this._={$:this}}a.prototype=function(){function l(){}return l.prototype=s.chain,new l}(),a.prototype.constructor=a,s.chain.user=function(l){var c=this,h=c.back(-1),f;if(l)return l=r.opt.pub((l._||"")["#"])||l,h.get("~"+l);if(f=h.back("user"))return f;var h=h._,m=h,p=m.opt.uuid||u;return(m=(f=m.user=c.chain(new a))._).opt={},m.opt.uuid=function(_){var g=p(),d=h.user;return!d||!(d=d.is)||!(d=d.pub)||(g="~"+d+"/"+g,_&&_.call&&_(null,g)),g},f};function u(){return s.state().toString(36).replace(".","")}s.User=a,a.GUN=s,a.SEA=s.SEA=r,n.exports=a})(e,"./user"),e(function(n){var r,s=""+r!=typeof GUN?GUN||{chain:{}}:e((""+r==typeof t?".":"")+"./gun",1);s.chain.then=function(o,a){var u=this,l=new Promise(function(c,f){u.once(c,a)});return o?l.then(o):l}})(e,"./then"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.create=function(...u){var l=typeof u[0]=="object"&&(u[0].pub||u[0].epub)?u[0]:typeof u[1]=="object"&&(u[1].pub||u[1].epub)?u[1]:null,c=l&&(l.pub||l.epub)?l.pub:typeof u[0]=="string"?u[0]:null,f=l&&(l.pub||l.epub)?l:c&&typeof u[1]=="string"?u[1]:null,h=u.filter(v=>typeof v=="function")[0]||null,m=u&&u.length>1&&typeof u[u.length-1]=="object"?u[u.length-1]:{},p=this,_=p._,g=p.back(-1);if(h=h||a,m=m||{},m.check!==!1){var d;if(c||(d="No user."),(f||"").length<8&&(d="Password too short!"),d)return h({err:o.log(d)}),p}if(_.ing)return(h||a)({err:o.log("User is already being created or authenticated!"),wait:!0}),p;_.ing=!0;var x={};return x.a=function(v){if(x.pubs=v,v&&!m.already){var M={err:o.log("User already created!")};_.ing=!1,(h||a)(M),p.leave();return}x.salt=String.random(64),s.work(f,x.salt,x.b)},x.b=function(v){x.proof=v,l?x.c(l):s.pair(x.c)},x.c=function(v){var M;x.pair=v||{},(M=_.root.user)&&(M._.sea=v,M.is={pub:v.pub,epub:v.epub,alias:c}),x.data={pub:v.pub},x.d()},x.d=function(){x.data.alias=c,x.e()},x.e=function(){x.data.epub=x.pair.epub,s.encrypt({priv:x.pair.priv,epriv:x.pair.epriv},x.proof,x.f,{raw:1})},x.f=function(v){x.data.auth=JSON.stringify({ek:v,s:x.salt}),x.g(x.data.auth)},x.g=function(v){var M;x.data.auth=x.data.auth||v,g.get(M="~"+x.pair.pub).put(x.data).on(x.h);var y={};y[M]={"#":M},g.get("~@"+c).put(y).get(M).on(x.i)},x.h=function(v,M,y,b){b.off(),x.h.ok=1,x.i()},x.i=function(v,M,y,b){b&&(x.i.ok=1,b.off()),!(!x.h.ok||!x.i.ok)&&(_.ing=!1,h({ok:0,pub:x.pair.pub}),a===h&&(l?p.auth(l):p.auth(c,f)))},g.get("~@"+c).once(x.a),p},r.prototype.leave=function(u,l){var c=this,f=c.back(-1)._.user;if(f&&(delete f.is,delete f._.is,delete f._.sea),s.window)try{var h={};h=s.window.sessionStorage,delete h.recall,delete h.pair}catch{}return c}})(e,"./create"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.auth=function(...l){var c=typeof l[0]=="object"&&(l[0].pub||l[0].epub)?l[0]:typeof l[1]=="object"&&(l[1].pub||l[1].epub)?l[1]:null,f=!c&&typeof l[0]=="string"?l[0]:null,h=(f||c&&!(c.priv&&c.epriv))&&typeof l[1]=="string"?l[1]:null,m=l.filter(y=>typeof y=="function")[0]||null,p=l&&l.length>1&&typeof l[l.length-1]=="object"?l[l.length-1]:{},_=this,g=_._,d=_.back(-1);if(g.ing)return(m||a)({err:o.log("User is already being created or authenticated!"),wait:!0}),_;g.ing=!0;var x={},v,M=9;return x.a=function(y){if(!y)return x.b();if(!y.pub){var b=[];return Object.keys(y).forEach(function(w){w!="_"&&b.push(y[w])}),x.b(b)}if(x.name)return x.f(y);x.c((x.data=y).auth)},x.b=function(y){var b=(x.list=(x.list||[]).concat(y||[])).shift();if(v===b){if(x.name)return x.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");if(f&&M--){d.get("~@"+f).once(x.a);return}return x.err("Wrong user or password.")}d.get(b).once(x.a)},x.c=function(y){if(v===y)return x.b();if(typeof y=="string")return x.c(u(y));s.work(h,(x.auth=y).s,x.d,x.enc)},x.d=function(y){s.decrypt(x.auth.ek,y,x.e,x.enc)},x.e=function(y){if(v===y)return x.enc?(x.enc=null,x.b()):(x.enc={encode:"utf8"},x.c(x.auth));x.half=y,x.f(x.data)},x.f=function(y){var b=x.half||{},w=x.data||{};x.g(x.lol={pub:y.pub||w.pub,epub:y.epub||w.epub,priv:y.priv||b.priv,epriv:y.epriv||b.epriv})},x.g=function(y){if(!y||!y.pub||!y.epub)return x.b();x.pair=y;var b=d._.user,w=b._;w.tag;var D=w.opt;w=b._=d.get("~"+y.pub)._,w.opt=D,b.is={pub:y.pub,epub:y.epub,alias:f||y.pub},w.sea=x.pair,g.ing=!1;try{h&&v==(u(g.root.graph["~"+y.pub].auth)||"")[":"]&&(p.shuffle=p.change=h)}catch{}if(p.change?x.z():(m||a)(w),s.window&&(_.back("user")._.opt||p).remember)try{var E={};E=s.window.sessionStorage,E.recall=!0,E.pair=JSON.stringify(y)}catch{}try{d._.tag.auth?d._.on("auth",w):setTimeout(function(){d._.on("auth",w)},1)}catch(A){o.log("Your 'auth' callback crashed with:",A)}},x.h=function(y){if(!y)return x.b();if(f=y.alias,f||(f=y.alias="~"+c.pub),!y.auth)return x.g(c);c=null,x.c((x.data=y).auth)},x.z=function(){x.salt=String.random(64),s.work(p.change,x.salt,x.y)},x.y=function(y){s.encrypt({priv:x.pair.priv,epriv:x.pair.epriv},y,x.x,{raw:1})},x.x=function(y){x.w(JSON.stringify({ek:y,s:x.salt}))},x.w=function(y){if(p.shuffle){console.log("migrate core account from UTF8 & shuffle");var b={};Object.keys(x.data).forEach(function(w){b[w]=x.data[w]}),delete b._,b.auth=y,d.get("~"+x.pair.pub).put(b)}d.get("~"+x.pair.pub).get("auth").put(y,m||a)},x.err=function(y){var b={err:o.log(y||"User cannot be found!")};g.ing=!1,(m||a)(b)},x.plugin=function(y){if(!(x.name=y))return x.err();var b=[y];y[0]!=="~"&&(b[1]="~"+y,b[2]="~@"+y),x.b(b)},c?c.priv&&c.epriv?x.g(c):d.get("~"+c.pub).once(x.h):f?d.get("~@"+f).once(x.a):!f&&!h&&s.name(x.plugin),_};function u(l){if(typeof l!="string")return l;try{l=JSON.parse(l)}catch{l={}}return l}})(e,"./auth"),e(function(n){var r=e("./user"),s=r.SEA;r.GUN,r.prototype.recall=function(o,a){var u=this,l=u.back(-1);if(o=o||{},o&&o.sessionStorage){if(s.window)try{var c={};c=s.window.sessionStorage,c&&(l._.opt.remember=!0,(u.back("user")._.opt||o).remember=!0,(c.recall||c.pair)&&l.user().auth(JSON.parse(c.pair),a))}catch{}return u}return u}})(e,"./recall"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.pair=function(){var u=this,l;try{l=new Proxy({DANGER:"☠"},{get:function(c,f,h){if(!(!u.is||!(u._||"").sea))return u._.sea[f]}})}catch{}return l},r.prototype.delete=async function(u,l,c){console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");var f=this;f.back(-1);var h=f.back("user");try{h.auth(u,l,function(m){var p=(h.is||{}).pub;h.map().once(function(){this.put(null)}),h.leave(),(c||a)({ok:0})})}catch(m){o.log("User.delete failed! Error:",m)}return f},r.prototype.alive=async function(){console.log("user.alive() IS DEPRECATED!!!");const u=this.back(-1);try{return await authRecall(u),u._.user._}catch{const c="No session!";throw o.log(c),{err:c}}},r.prototype.trust=async function(u){console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!"),o.is(u)&&u.get("pub").get((l,c)=>{console.log(l,c)}),u.get("trust").get(path).put(theirPubkey)},r.prototype.grant=function(u,l){console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var c=this,f=c.back(-1).user(),h=f._.sea,m="";return c.back(function(p){p.is||(m+=p.get||"")}),async function(){var p,_=await f.get("grant").get(h.pub).get(m).then();_=await s.decrypt(_,h),_||(_=s.random(16).toString(),p=await s.encrypt(_,h),f.get("grant").get(h.pub).get(m).put(p));var g=u.get("pub").then(),d=u.get("epub").then();g=await g,d=await d;var x=await s.secret(d,h);p=await s.encrypt(_,x),f.get("grant").get(g).get(m).put(p,l)}(),c},r.prototype.secret=function(u,l){console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var c=this,f=c.back(-1).user(),h=f.pair(),m="";return c.back(function(p){p.is||(m+=p.get||"")}),async function(){var p,_=await f.get("trust").get(h.pub).get(m).then();_=await s.decrypt(_,h),_||(_=s.random(16).toString(),p=await s.encrypt(_,h),f.get("trust").get(h.pub).get(m).put(p)),p=await s.encrypt(u,_),c.put(p,l)}(),c},n.exports=r})(e,"./share"),e(function(n){var r=e("./sea"),s=e("./settings"),o,a=(r.window||"").GUN||e((""+o==typeof t?".":"")+"./gun",1);a.on("opt",function(p){p.sea||(p.sea={own:{}},p.on("put",u,p)),this.to.next(p)});function u(p){var _=this,g=_.as,d=p.put,x=d["#"],v=d["."],M=d[":"],y=d[">"],b=p["#"],w;if(!(!x||!v)){if((p._||"").faith&&(g.opt||"").faith&&typeof p._=="function"){r.opt.pack(d,function(E){r.verify(E,!1,function(A){d["="]=r.opt.unpack(A),_.to.next(p)})});return}var D=function(E){g.on("in",{"@":b,err:p.err=E})};if((p._||"").DBG&&((p._||"").DBG.c=+new Date),0<=x.indexOf("<?")&&(w=parseFloat(x.split("<?")[1]||""),w&&y<a.state()-w*1e3)){(w=p._)&&w.stun&&w.stun--;return}if(x==="~@"){u.alias(_,p,M,v,x,g,D);return}if(x.slice(0,2)==="~@"){u.pubs(_,p,M,v,x,g,D);return}if(w=r.opt.pub(x)){u.pub(_,p,M,v,x,g,D,g.user||"",w);return}if(0<=x.indexOf("#")){u.hash(_,p,M,v,x,g,D);return}u.any(_,p,M,v,x,g,D,g.user||"")}}u.hash=function(p,_,g,d,x,v,M){r.work(g,null,function(y){function b(w){let D="";for(let E=0;E<w.length;E++)D+=E-1&1?"":String.fromCharCode(parseInt(w.substring(E-1,E+1),16));return btoa(D)}if(y&&y===d.split("#").slice(-1)[0])return p.to.next(_);if(y&&y===b(d.split("#").slice(-1)[0]))return p.to.next(_);M("Data hash not same as hash!")},{name:"SHA-256"})},u.alias=function(p,_,g,d,x,v,M){if(!g)return M("Data must exist!");if("~@"+d===c(g))return p.to.next(_);M("Alias not same!")},u.pubs=function(p,_,g,d,x,v,M){if(!g)return M("Alias must exist!");if(d===c(g))return p.to.next(_);M("Alias not same!")},u.pub=async function(p,_,g,d,x,v,M,y,b){var w;const D=await s.parse(g)||{},E=(A,F,T)=>{if(A.m&&A.s&&F&&b)return r.verify(A,b,S=>{if(o!==S&&o!==S.e&&_.put[">"]&&_.put[">"]>parseFloat(S.e))return M("Certificate expired.");if(o!==S&&S.c&&S.w&&(S.c===F||S.c.indexOf("*")>-1)){let C=x.indexOf("/")>-1?x.replace(x.substring(0,x.indexOf("/")+1),""):"";String.match=String.match||a.text.match;const k=Array.isArray(S.w)?S.w:typeof S.w=="object"||typeof S.w=="string"?[S.w]:[];for(const N of k)if(String.match(C,N["#"])&&String.match(d,N["."])||!N["."]&&String.match(C,N["#"])||!N["#"]&&String.match(d,N["."])||String.match(C?C+"/"+d:d,N["#"]||N)){if(N["+"]&&N["+"].indexOf("*")>-1&&C&&C.indexOf(F)==-1&&d.indexOf(F)==-1)return M(`Path "${C}" or key "${d}" must contain string "${F}".`);if(S.wb&&(typeof S.wb=="string"||(S.wb||{})["#"])){var R=p.as.root.$.back(-1);return typeof S.wb=="string"&&S.wb.slice(0,1)!=="~"&&(R=R.get("~"+b)),R.get(S.wb).get(F).once(U=>U&&(U===1||U===!0)?M(`Certificant ${F} blocked.`):T(S))}return T(S)}return M("Certificate verification fail.")}})};if(d==="pub"&&"~"+b===x)return g===b?p.to.next(_):M("Account not same!");if((w=y.is)&&w.pub&&!D["*"]&&!D["+"]&&(b===w.pub||b!==w.pub&&((_._.msg||{}).opt||{}).cert)){r.opt.pack(_.put,A=>{r.sign(A,y._.sea,async function(F){if(o===F)return M(r.err||"Signature fail.");if(_.put[":"]={":":w=r.opt.unpack(F.m),"~":F.s},_.put["="]=w,b===y.is.pub){(w=c(g))&&((v.sea.own[w]=v.sea.own[w]||{})[b]=1),JSON.stringifyAsync(_.put[":"],function(T,S){return T?M(T||"Stringify error."):(_.put[":"]=S,p.to.next(_))});return}if(b!==y.is.pub&&((_._.msg||{}).opt||{}).cert){const T=await s.parse(_._.msg.opt.cert);T&&T.m&&T.s&&E(T,y.is.pub,S=>{_.put[":"]["+"]=T,_.put[":"]["*"]=y.is.pub,JSON.stringifyAsync(_.put[":"],function(R,C){return R?M(R||"Stringify error."):(_.put[":"]=C,p.to.next(_))})})}},{raw:1})});return}r.opt.pack(_.put,A=>{r.verify(A,D["*"]||b,function(F){var T;if(F=r.opt.unpack(F),o===F)return M("Unverified data.");if((T=c(F))&&b===r.opt.pub(T)&&((v.sea.own[T]=v.sea.own[T]||{})[b]=1),D["+"]&&D["+"].m&&D["+"].s&&D["*"])E(D["+"],D["*"],S=>(_.put["="]=F,p.to.next(_)));else return _.put["="]=F,p.to.next(_)})})},u.any=function(p,_,g,d,x,v,M,y){if(v.opt.secure)return M("Soul missing public key at '"+d+"'.");v.on("secure",function(b){if(this.off(),!v.opt.secure)return p.to.next(b);M("Data cannot be changed.")}).on.on("secure",_)};var l=a.valid,c=function(p,_){return typeof(_=l(p))=="string"&&_};(a.state||"").ify;var f=/[^\w_-]/;r.opt.pub=function(p){if(p&&(p=p.split("~"),!(!p||!(p=p[1]))&&(p=p.split(f).slice(0,2),!(!p||p.length!=2)&&(p[0]||"")[0]!=="@")))return p=p.slice(0,2).join("."),p},r.opt.stringy=function(p){},r.opt.pack=function(p,_,g,d,x){var v,M;if(r.opt.check(p))return _(p);p&&p["#"]&&p["."]&&p[">"]&&(v=p[":"],M=1),JSON.parseAsync(M?v:p,function(y,b){var w=o!==(b||"")[":"]&&(b||"")["~"];if(!w){_(p);return}_({m:{"#":x||p["#"],".":g||p["."],":":(b||"")[":"],">":p[">"]||a.state.is(d,g)},s:w})})};var h=r.opt;r.opt.unpack=function(p,_,g){var d;if(o!==p){if(p&&o!==(d=p[":"]))return d;if(_=_||h.fall_key,!g&&h.fall_val&&(g={},g[_]=h.fall_val),!(!_||!g)){if(p===g[_]||!r.opt.check(g[_]))return p;var x=g&&g._&&g._["#"]||h.fall_soul,v=a.state.is(g,_)||h.fall_state;if(p&&p.length===4&&x===p[0]&&_===p[1]&&m(v)===m(p[3]))return p[2];if(v<r.opt.shuffle_attack)return p}}},r.opt.shuffle_attack=15463296e5;var m=Math.floor})(e,"./index")})()})(vo);vo.exports;const ir=_h("https://gun-manhattan.herokuapp.com/gun"),xo=ir.get("circles-b979fe7c-ebfd-11ed-a05b-0242ac120003"),ki=xo.get("index-4723d6a2-ecbd-11ed-a05b-0242ac120003"),du=xo.get("circles");xo.get("nodes");const[Xt,yo]=ph({circleRef:null,userRef:null,isLoggedIn:!1,userLocation:void 0}),[pu,vh]=$e(!1),[Za,Ja]=$e(null);$e(null);const mu=i=>{yo("userRef",i)},gu=i=>{yo("isLoggedIn",i)},xh=i=>{yo("userLocation",i),Xt.userRef&&Xt.userRef.get("location").put(i)},yh=ot('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',2),Mh=ot("<title></title>",2);function _u(i,e){const t=Yc(i.a,e);return(()=>{const n=yh.cloneNode(!0);return Uf(n,t,!0,!0),ze(n,()=>eu,null),ze(n,(()=>{const r=Xe(()=>!!e.title,!0);return()=>r()&&(()=>{const s=Mh.cloneNode(!0);return ze(s,()=>e.title),s})()})(),null),nt(r=>{const s=i.a.stroke,o={...e.style,overflow:"visible",color:e.color||"currentColor"},a=e.size||"1em",u=e.size||"1em",l=i.c;return s!==r._v$&&Vn(n,"stroke",r._v$=s),r._v$2=Qi(n,o,r._v$2),a!==r._v$3&&Vn(n,"height",r._v$3=a),u!==r._v$4&&Vn(n,"width",r._v$4=u),l!==r._v$5&&(n.innerHTML=r._v$5=l),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()}function Sh(i){return _u({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M19 12H5M12 19l-7-7 7-7"/>'},i)}const Eh=ot('<img alt="Circle Picture">'),vu=i=>{const e={width:i.size,height:i.size},t=n=>{const r=n.target;r.src="./images/default-circle-picture.png"};return(()=>{const n=Eh();return n.addEventListener("error",t),nt(r=>{const s=i.circle?.picture??"./images/default-circle-picture.png",o=e,a=`rounded-full object-cover  ${i.className}`;return s!==r._v$&&Vn(n,"src",r._v$=s),r._v$2=Qi(n,o,r._v$2),a!==r._v$3&&pn(n,r._v$3=a),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})()},bh=ot('<div class="bg-heading py-3 px-6 flex items-center justify-start"><h2 class="text-white">'),wh=ot('<button class="mr-3">'),Th=({onBack:i})=>(()=>{const e=bh(),t=e.firstChild;return ze(e,(()=>{const n=Xe(()=>!!pu());return()=>n()&&(()=>{const r=wh();return Jc(r,"click",i,!0),ze(r,Ye(Sh,{color:"white",size:"28px"})),r})()})(),t),ze(e,Ye(vu,{get circle(){return Za()},size:"40px",className:"mr-3"}),t),ze(t,()=>Za()?.name),e})();Pn(["click"]);const Ys="0123456789bcdefghjkmnpqrstuvwxyz";class ht{static encode(e,t,n){if(typeof n>"u"){for(let h=1;h<=12;h++){const m=ht.encode(e,t,h),p=ht.decode(m);if(p.lat==e&&p.lon==t)return m}n=12}if(e=Number(e),t=Number(t),n=Number(n),isNaN(e)||isNaN(t)||isNaN(n))throw new Error("Invalid geohash");let r=0,s=0,o=!0,a="",u=-90,l=90,c=-180,f=180;for(;a.length<n;){if(o){const h=(c+f)/2;t>=h?(r=r*2+1,c=h):(r=r*2,f=h)}else{const h=(u+l)/2;e>=h?(r=r*2+1,u=h):(r=r*2,l=h)}o=!o,++s==5&&(a+=Ys.charAt(r),s=0,r=0)}return a}static decode(e){const t=ht.bounds(e),n=t.sw.lat,r=t.sw.lon,s=t.ne.lat,o=t.ne.lon;let a=(n+s)/2,u=(r+o)/2;return a=a.toFixed(Math.floor(2-Math.log(s-n)/Math.LN10)),u=u.toFixed(Math.floor(2-Math.log(o-r)/Math.LN10)),{lat:Number(a),lon:Number(u)}}static bounds(e){if(e.length==0)throw new Error("Invalid geohash");e=e.toLowerCase();let t=!0,n=-90,r=90,s=-180,o=180;for(let u=0;u<e.length;u++){const l=e.charAt(u),c=Ys.indexOf(l);if(c==-1)throw new Error("Invalid geohash");for(let f=4;f>=0;f--){const h=c>>f&1;if(t){const m=(s+o)/2;h==1?s=m:o=m}else{const m=(n+r)/2;h==1?n=m:r=m}t=!t}}return{sw:{lat:n,lon:s},ne:{lat:r,lon:o}}}static adjacent(e,t){if(e=e.toLowerCase(),t=t.toLowerCase(),e.length==0)throw new Error("Invalid geohash");if("nsew".indexOf(t)==-1)throw new Error("Invalid direction");const n={n:["p0r21436x8zb9dcf5h7kjnmqesgutwvy","bc01fg45238967deuvhjyznpkmstqrwx"],s:["14365h7k9dcfesgujnmqp0r2twvyx8zb","238967debc01fg45kmstqrwxuvhjyznp"],e:["bc01fg45238967deuvhjyznpkmstqrwx","p0r21436x8zb9dcf5h7kjnmqesgutwvy"],w:["238967debc01fg45kmstqrwxuvhjyznp","14365h7k9dcfesgujnmqp0r2twvyx8zb"]},r={n:["prxz","bcfguvyz"],s:["028b","0145hjnp"],e:["bcfguvyz","prxz"],w:["0145hjnp","028b"]},s=e.slice(-1);let o=e.slice(0,-1);const a=e.length%2;return r[t][a].indexOf(s)!=-1&&o!=""&&(o=ht.adjacent(o,t)),o+Ys.charAt(n[t][a].indexOf(s))}static neighbours(e){return{n:ht.adjacent(e,"n"),ne:ht.adjacent(ht.adjacent(e,"n"),"e"),e:ht.adjacent(e,"e"),se:ht.adjacent(ht.adjacent(e,"s"),"e"),s:ht.adjacent(e,"s"),sw:ht.adjacent(ht.adjacent(e,"s"),"w"),w:ht.adjacent(e,"w"),nw:ht.adjacent(ht.adjacent(e,"n"),"w")}}}var Ks=typeof window<"u"?window.Gun:hu;Ks.chain.open=function(i,e,t,n){return n=n||1,e=e||{},e.doc=e.doc||{},e.ids=e.ids||{},e.any=e.any||i,e.meta=e.meta||!1,e.eve=e.eve||{off:function(){Object.keys(e.eve.s).forEach(function(r,s){(s=e.eve.s[r])&&s.off()}),e.eve.s={}},s:{}},this.on(function(r,s,o,a){if(clearTimeout(e.to),e.to=setTimeout(function(){e.any&&(e.any.call(e.at.$,e.doc,e.key,e,e.eve),e.off&&(e.eve.off(),e.any=null))},e.wait||9),e.at=e.at||o,e.key=e.key||s,e.eve.s[this._.id]=a,Ks.valid(r)===!0){t?t[s]=r:e.doc=r;return}var u=this;setTimeout.each(Object.keys(r),function(l,c){if(!(l==="_"&&!e.meta)){c=r[l];var f=t||e.doc,h;if(f){if(typeof(h=Ks.valid(c))!="string"){f[l]=c;return}if(e.ids[h]){f[l]=e.ids[h];return}if(e.depth<=n){f[l]=f[l]||c;return}u.get(l).open(e.any,e,e.ids[h]=f[l]={},n+1)}}})})};const Ah=i=>{const[e,t]=$e([]);return nn(()=>(console.log("loading circles"),i.open(n=>{console.log("nodeRef.open");const r=Object.keys(n).map(s=>n[s]).filter(s=>Object.keys(s).length!==0);t(r),console.log(r)}),()=>{i.off()})),e},Rh=ot('<div><div class="p-3"><ul></ul></div><div><textarea></textarea><button>Send'),Ch=ot("<li> (<!>)"),Ph=()=>{const[i,e]=$e(""),t=new Date,n=t.getUTCFullYear()+"-"+(t.getUTCMonth()+1).toString().padStart(2,"0"),r=ki.get("dates").get(n),s=Ah(r),o=()=>{if(i().trim()===""||!ir.user().is)return;const l=new Date,c=[l.getUTCFullYear(),l.getUTCFullYear()+"-"+(l.getUTCMonth()+1).toString().padStart(2,"0"),l.getUTCFullYear()+"-"+(l.getUTCMonth()+1).toString().padStart(2,"0")+"-"+l.getUTCDate().toString().padStart(2,"0")];let f={message:i(),createdAt:l.toISOString(),user:Xt.userRef},h=[];if(Xt.userLocation){const p=Math.random()*360-180,_=Math.random()*180-90,g=ht.encode(_,p),d=g.substring(0,4);h=[d.substring(0,2),d.substring(0,3),d],f.location={latitude:_,longitude:p,geohash:g}}const m=Xt.userRef.get("messages").set(f);ki.get("messages").set(m),c.forEach(p=>{ki.get("dates").get(p).set(m)}),f.location&&(h.forEach(p=>{ki.get("locations").get(p).set(m)}),h.forEach(p=>{c.forEach(_=>{ki.get("locations_and_dates").get(p).get(_).set(m)})})),e("")},a=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),o())};return(()=>{const u=Rh(),l=u.firstChild,c=l.firstChild,f=l.nextSibling,h=f.firstChild,m=h.nextSibling;return ze(c,Ye(Kc,{get each(){return s()},children:p=>(()=>{const _=Ch(),g=_.firstChild,d=g.nextSibling;return d.nextSibling,ze(_,()=>p.message,g),ze(_,()=>new Date(p.createdAt).toLocaleTimeString(),d),_})()})),h.$$keydown=a,h.$$input=p=>e(p.target.value),m.$$click=o,nt(()=>h.value=i()),u})()};Pn(["input","keydown","click"]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="152",ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lh=0,ko=1,Dh=2,xu=1,Uh=2,dn=3,An=0,bt=1,mn=2,wn=0,Ti=1,zo=2,Go=3,Ho=4,Ih=5,bi=100,Oh=101,Nh=102,Vo=103,Wo=104,Fh=200,Bh=201,kh=202,zh=203,yu=204,Mu=205,Gh=206,Hh=207,Vh=208,Wh=209,$h=210,jh=0,Xh=1,qh=2,Qa=3,Yh=4,Kh=5,Zh=6,Jh=7,Su=0,Qh=1,ed=2,_n=0,td=1,nd=2,id=3,rd=4,sd=5,Eu=300,Pi=301,Li=302,eo=303,to=304,us=306,no=1e3,$t=1001,io=1002,St=1003,$o=1004,Zs=1005,Nt=1006,ad=1007,rr=1008,Xn=1009,od=1010,ld=1011,bu=1012,cd=1013,Gn=1014,Hn=1015,sr=1016,ud=1017,fd=1018,Ai=1020,hd=1021,jt=1023,dd=1024,pd=1025,Wn=1026,Di=1027,md=1028,gd=1029,_d=1030,vd=1031,xd=1033,Js=33776,Qs=33777,ea=33778,ta=33779,jo=35840,Xo=35841,qo=35842,Yo=35843,yd=36196,Ko=37492,Zo=37496,Jo=37808,Qo=37809,el=37810,tl=37811,nl=37812,il=37813,rl=37814,sl=37815,al=37816,ol=37817,ll=37818,cl=37819,ul=37820,fl=37821,na=36492,Md=36283,hl=36284,dl=36285,pl=36286,wu=3e3,$n=3001,Sd=3200,Ed=3201,Tu=0,bd=1,jn="",Te="srgb",rn="srgb-linear",Au="display-p3",ia=7680,wd=519,ml=35044,gl="300 es",ro=1035;let Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,so=180/Math.PI;function or(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Td(i,e){return(i%e+e)%e}function sa(i,e,t){return(1-t)*i+t*e}function _l(i){return(i&i-1)===0&&i!==0}function Ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}let Ue=class Ru{constructor(e=0,t=0){Ru.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class Cu{constructor(){Cu.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,u,l){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=u,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],l=n[1],c=n[4],f=n[7],h=n[2],m=n[5],p=n[8],_=r[0],g=r[3],d=r[6],x=r[1],v=r[4],M=r[7],y=r[2],b=r[5],w=r[8];return s[0]=o*_+a*x+u*y,s[3]=o*g+a*v+u*b,s[6]=o*d+a*M+u*w,s[1]=l*_+c*x+f*y,s[4]=l*g+c*v+f*b,s[7]=l*d+c*M+f*w,s[2]=h*_+m*x+p*y,s[5]=h*g+m*v+p*b,s[8]=h*d+m*M+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8];return t*o*c-t*a*l-n*s*c+n*a*u+r*s*l-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8],f=c*o-a*l,h=a*u-c*s,m=l*s-o*u,p=t*f+n*h+r*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(r*l-c*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(c*t-r*u)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*u-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*o+l*a)+o+e,-r*l,r*u,-r*(-l*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const aa=new Fe;function Pu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const vl={};function Ki(i){i in vl||(vl[i]=!0,console.warn(i))}function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Rd=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Cd=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Pd(i){return i.convertSRGBToLinear().applyMatrix3(Cd)}function Ld(i){return i.applyMatrix3(Rd).convertLinearToSRGB()}const Dd={[rn]:i=>i,[Te]:i=>i.convertSRGBToLinear(),[Au]:Pd},Ud={[rn]:i=>i,[Te]:i=>i.convertLinearToSRGB(),[Au]:Ld},zt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return rn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Dd[e],r=Ud[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let si,Lu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=ss("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Du=class{constructor(e=null){this.isSource=!0,this.uuid=or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0,vn=class Kr extends Zn{constructor(e=Kr.DEFAULT_IMAGE,t=Kr.DEFAULT_MAPPING,n=$t,r=$t,s=Nt,o=rr,a=jt,u=Xn,l=Kr.DEFAULT_ANISOTROPY,c=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=or(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===$n?Te:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?$n:wu}set encoding(e){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$n?Te:jn}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Eu;vn.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,l=u[0],c=u[4],f=u[8],h=u[1],m=u[5],p=u[9],_=u[2],g=u[6],d=u[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,M=(m+1)/2,y=(d+1)/2,b=(c+h)/4,w=(f+_)/4,D=(p+g)/4;return v>M&&v>y?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=b/n,s=w/n):M>y?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=b/r,s=D/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=w/s,r=D/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(f-_)/x,this.z=(h-c)/x,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qn extends Zn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$n?Te:jn),this.texture=new vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uu extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Od extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let u=n[r+0],l=n[r+1],c=n[r+2],f=n[r+3];const h=s[o+0],m=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=u,e[t+1]=l,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=p,e[t+3]=_;return}if(f!==_||u!==h||l!==m||c!==p){let g=1-a;const d=u*h+l*m+c*p+f*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const y=Math.sqrt(v),b=Math.atan2(y,d*x);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y}const M=a*x;if(u=u*g+h*M,l=l*g+m*M,c=c*g+p*M,f=f*g+_*M,g===1-a){const y=1/Math.sqrt(u*u+l*l+c*c+f*f);u*=y,l*=y,c*=y,f*=y}}e[t]=u,e[t+1]=l,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],u=n[r+1],l=n[r+2],c=n[r+3],f=s[o],h=s[o+1],m=s[o+2],p=s[o+3];return e[t]=a*p+c*f+u*m-l*h,e[t+1]=u*p+c*h+l*f-a*m,e[t+2]=l*p+c*m+a*h-u*f,e[t+3]=c*p-a*f-u*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,l=a(n/2),c=a(r/2),f=a(s/2),h=u(n/2),m=u(r/2),p=u(s/2);switch(o){case"XYZ":this._x=h*c*f+l*m*p,this._y=l*m*f-h*c*p,this._z=l*c*p+h*m*f,this._w=l*c*f-h*m*p;break;case"YXZ":this._x=h*c*f+l*m*p,this._y=l*m*f-h*c*p,this._z=l*c*p-h*m*f,this._w=l*c*f+h*m*p;break;case"ZXY":this._x=h*c*f-l*m*p,this._y=l*m*f+h*c*p,this._z=l*c*p+h*m*f,this._w=l*c*f-h*m*p;break;case"ZYX":this._x=h*c*f-l*m*p,this._y=l*m*f+h*c*p,this._z=l*c*p-h*m*f,this._w=l*c*f+h*m*p;break;case"YZX":this._x=h*c*f+l*m*p,this._y=l*m*f+h*c*p,this._z=l*c*p-h*m*f,this._w=l*c*f-h*m*p;break;case"XZY":this._x=h*c*f-l*m*p,this._y=l*m*f-h*c*p,this._z=l*c*p+h*m*f,this._w=l*c*f+h*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],u=t[9],l=t[2],c=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-u)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(c-u)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(u+c)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(u+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,u=t._y,l=t._z,c=t._w;return this._x=n*c+o*a+r*l-s*u,this._y=r*c+o*u+s*a-n*l,this._z=s*c+o*l+n*u-r*a,this._w=o*c-n*a-r*u-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(u),c=Math.atan2(l,a),f=Math.sin((1-t)*c)/l,h=Math.sin(t*c)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,u=e.w,l=u*t+o*r-a*n,c=u*n+a*t-s*r,f=u*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=l*u+h*-s+c*-a-f*-o,this.y=c*u+h*-o+f*-s-l*-a,this.z=f*u+h*-a+l*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=r*u-s*a,this.y=s*o-n*u,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new V,xl=new Yn;class lr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ai.copy(e.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)on.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(on)}else r.boundingBox===null&&r.computeBoundingBox(),ai.copy(r.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),Er.subVectors(this.max,zi),oi.subVectors(e.a,zi),li.subVectors(e.b,zi),ci.subVectors(e.c,zi),Mn.subVectors(li,oi),Sn.subVectors(ci,li),On.subVectors(oi,ci);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-On.z,On.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,On.z,0,-On.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-On.y,On.x,0];return!ua(t,oi,li,ci,Er)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,oi,li,ci,Er))?!1:(br.crossVectors(Mn,Sn),t=[br.x,br.y,br.z],ua(t,oi,li,ci,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new V,new V,new V,new V,new V,new V,new V,new V],on=new V,ai=new lr,oi=new V,li=new V,ci=new V,Mn=new V,Sn=new V,On=new V,zi=new V,Er=new V,br=new V,Nn=new V;function ua(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Nn.fromArray(i,s);const a=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),u=e.dot(Nn),l=t.dot(Nn),c=n.dot(Nn);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>a)return!1}return!0}const Nd=new lr,Gi=new V,fa=new V;class So{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(fa)),this.expandByPoint(Gi.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new V,ha=new V,wr=new V,En=new V,da=new V,Tr=new V,pa=new V;class Fd{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ha.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=En.dot(this.direction),u=-En.dot(wr),l=En.lengthSq(),c=Math.abs(1-o*o);let f,h,m,p;if(c>0)if(f=o*u-a,h=o*a-u,p=s*c,f>=0)if(h>=-p)if(h<=p){const _=1/c;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*u)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*u)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*u)+l;else h<=-p?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-u),s),m=-f*f+h*(h+2*u)+l):h<=p?(f=0,h=Math.min(Math.max(-s,-u),s),m=h*(h+2*u)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-u),s),m=-f*f+h*(h+2*u)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ha).addScaledVector(wr,h),m}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,u;const l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,u=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,u=(e.min.z-h.z)*f),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,r,s){da.subVectors(t,e),Tr.subVectors(n,e),pa.crossVectors(da,Tr);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,e);const u=a*this.direction.dot(Tr.crossVectors(En,Tr));if(u<0)return null;const l=a*this.direction.dot(da.cross(En));if(l<0||u+l>o)return null;const c=-a*En.dot(pa);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,u,l,c,f,h,m,p,_,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=u,d[2]=l,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=p,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),o=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(r),l=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,p=a*c,_=a*f;t[0]=u*c,t[4]=-u*f,t[8]=l,t[1]=m+p*l,t[5]=h-_*l,t[9]=-a*u,t[2]=_-h*l,t[6]=p+m*l,t[10]=o*u}else if(e.order==="YXZ"){const h=u*c,m=u*f,p=l*c,_=l*f;t[0]=h+_*a,t[4]=p*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-p,t[6]=_+h*a,t[10]=o*u}else if(e.order==="ZXY"){const h=u*c,m=u*f,p=l*c,_=l*f;t[0]=h-_*a,t[4]=-o*f,t[8]=p+m*a,t[1]=m+p*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const h=o*c,m=o*f,p=a*c,_=a*f;t[0]=u*c,t[4]=p*l-m,t[8]=h*l+_,t[1]=u*f,t[5]=_*l+h,t[9]=m*l-p,t[2]=-l,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const h=o*u,m=o*l,p=a*u,_=a*l;t[0]=u*c,t[4]=_-h*f,t[8]=p*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-l*c,t[6]=m*f+p,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*u,m=o*l,p=a*u,_=a*l;t[0]=u*c,t[4]=-f,t[8]=l*c,t[1]=h*f+_,t[5]=o*c,t[9]=m*f-p,t[2]=p*f-m,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bd,e,kd)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),bn.crossVectors(n,Pt),bn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),bn.crossVectors(n,Pt)),bn.normalize(),Ar.crossVectors(Pt,bn),r[0]=bn.x,r[4]=Ar.x,r[8]=Pt.x,r[1]=bn.y,r[5]=Ar.y,r[9]=Pt.y,r[2]=bn.z,r[6]=Ar.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],l=n[12],c=n[1],f=n[5],h=n[9],m=n[13],p=n[2],_=n[6],g=n[10],d=n[14],x=n[3],v=n[7],M=n[11],y=n[15],b=r[0],w=r[4],D=r[8],E=r[12],A=r[1],F=r[5],T=r[9],S=r[13],R=r[2],C=r[6],k=r[10],N=r[14],U=r[3],z=r[7],H=r[11],ne=r[15];return s[0]=o*b+a*A+u*R+l*U,s[4]=o*w+a*F+u*C+l*z,s[8]=o*D+a*T+u*k+l*H,s[12]=o*E+a*S+u*N+l*ne,s[1]=c*b+f*A+h*R+m*U,s[5]=c*w+f*F+h*C+m*z,s[9]=c*D+f*T+h*k+m*H,s[13]=c*E+f*S+h*N+m*ne,s[2]=p*b+_*A+g*R+d*U,s[6]=p*w+_*F+g*C+d*z,s[10]=p*D+_*T+g*k+d*H,s[14]=p*E+_*S+g*N+d*ne,s[3]=x*b+v*A+M*R+y*U,s[7]=x*w+v*F+M*C+y*z,s[11]=x*D+v*T+M*k+y*H,s[15]=x*E+v*S+M*N+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],u=e[9],l=e[13],c=e[2],f=e[6],h=e[10],m=e[14],p=e[3],_=e[7],g=e[11],d=e[15];return p*(+s*u*f-r*l*f-s*a*h+n*l*h+r*a*m-n*u*m)+_*(+t*u*m-t*l*h+s*o*h-r*o*m+r*l*c-s*u*c)+g*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*c-n*l*c)+d*(-r*a*c-t*u*f+t*a*h+r*o*f-n*o*h+n*u*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8],f=e[9],h=e[10],m=e[11],p=e[12],_=e[13],g=e[14],d=e[15],x=f*g*l-_*h*l+_*u*m-a*g*m-f*u*d+a*h*d,v=p*h*l-c*g*l-p*u*m+o*g*m+c*u*d-o*h*d,M=c*_*l-p*f*l+p*a*m-o*_*m-c*a*d+o*f*d,y=p*f*u-c*_*u-p*a*h+o*_*h+c*a*g-o*f*g,b=t*x+n*v+r*M+s*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(_*h*s-f*g*s-_*r*m+n*g*m+f*r*d-n*h*d)*w,e[2]=(a*g*s-_*u*s+_*r*l-n*g*l-a*r*d+n*u*d)*w,e[3]=(f*u*s-a*h*s-f*r*l+n*h*l+a*r*m-n*u*m)*w,e[4]=v*w,e[5]=(c*g*s-p*h*s+p*r*m-t*g*m-c*r*d+t*h*d)*w,e[6]=(p*u*s-o*g*s-p*r*l+t*g*l+o*r*d-t*u*d)*w,e[7]=(o*h*s-c*u*s+c*r*l-t*h*l-o*r*m+t*u*m)*w,e[8]=M*w,e[9]=(p*f*s-c*_*s-p*n*m+t*_*m+c*n*d-t*f*d)*w,e[10]=(o*_*s-p*a*s+p*n*l-t*_*l-o*n*d+t*a*d)*w,e[11]=(c*a*s-o*f*s-c*n*l+t*f*l+o*n*m-t*a*m)*w,e[12]=y*w,e[13]=(c*_*r-p*f*r+p*n*h-t*_*h-c*n*g+t*f*g)*w,e[14]=(p*a*r-o*_*r-p*n*u+t*_*u+o*n*g-t*a*g)*w,e[15]=(o*f*r-c*a*r+c*n*u-t*f*u-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,l=s*o,c=s*a;return this.set(l*o+n,l*a-r*u,l*u+r*a,0,l*a+r*u,c*a+n,c*u-r*o,0,l*u-r*a,c*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,l=s+s,c=o+o,f=a+a,h=s*l,m=s*c,p=s*f,_=o*c,g=o*f,d=a*f,x=u*l,v=u*c,M=u*f,y=n.x,b=n.y,w=n.z;return r[0]=(1-(_+d))*y,r[1]=(m+M)*y,r[2]=(p-v)*y,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(h+d))*b,r[6]=(g+x)*b,r[7]=0,r[8]=(p+v)*w,r[9]=(g-x)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ui.set(r[0],r[1],r[2]).length();const o=ui.set(r[4],r[5],r[6]).length(),a=ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/s,c=1/o,f=1/a;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=c,Gt.elements[5]*=c,Gt.elements[6]*=c,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,u=2*s/(t-e),l=2*s/(n-r),c=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=u,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,u=1/(t-e),l=1/(n-r),c=1/(o-s),f=(t+e)*u,h=(n+r)*l,m=(o+s)*c;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new V,Gt=new at,Bd=new V(0,0,0),kd=new V(1,1,1),bn=new V,Ar=new V,Pt=new V,yl=new at,Ml=new Yn;class fs{constructor(e=0,t=0,n=0,r=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],u=r[1],l=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zd=0;const Sl=new V,fi=new Yn,cn=new at,Rr=new V,Hi=new V,Gd=new V,Hd=new Yn,El=new V(1,0,0),bl=new V(0,1,0),wl=new V(0,0,1),Vd={type:"added"},Tl={type:"removed"};class wt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new V,t=new fs,n=new Yn,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Fe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Hi,Rr,this.up):cn.lookAt(Rr,Hi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(cn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const f=u[l];s(e.shapes,f)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(s(e.materials,this.material[u]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),l=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const u=[];for(const l in a){const c=a[l];delete c.metadata,u.push(c)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new V(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new V,un=new V,ma=new V,fn=new V,hi=new V,di=new V,Al=new V,ga=new V,_a=new V,va=new V;let Cr=!1;class Wt{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ht.subVectors(r,t),un.subVectors(n,t),ma.subVectors(e,t);const o=Ht.dot(Ht),a=Ht.dot(un),u=Ht.dot(ma),l=un.dot(un),c=un.dot(ma),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(l*u-a*c)*h,p=(o*c-a*u)*h;return s.set(1-m-p,p,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,r,s,o,a,u){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),this.getInterpolation(e,t,n,r,s,o,a,u)}static getInterpolation(e,t,n,r,s,o,a,u){return this.getBarycoord(e,t,n,r,fn),u.setScalar(0),u.addScaledVector(s,fn.x),u.addScaledVector(o,fn.y),u.addScaledVector(a,fn.z),u}static isFrontFacing(e,t,n,r){return Ht.subVectors(n,t),un.subVectors(e,t),Ht.cross(un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Ht.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;hi.subVectors(r,n),di.subVectors(s,n),ga.subVectors(e,n);const u=hi.dot(ga),l=di.dot(ga);if(u<=0&&l<=0)return t.copy(n);_a.subVectors(e,r);const c=hi.dot(_a),f=di.dot(_a);if(c>=0&&f<=c)return t.copy(r);const h=u*f-c*l;if(h<=0&&u>=0&&c<=0)return o=u/(u-c),t.copy(n).addScaledVector(hi,o);va.subVectors(e,s);const m=hi.dot(va),p=di.dot(va);if(p>=0&&m<=p)return t.copy(s);const _=m*l-u*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(di,a);const g=c*p-m*f;if(g<=0&&f-c>=0&&m-p>=0)return Al.subVectors(s,r),a=(f-c)/(f-c+(m-p)),t.copy(r).addScaledVector(Al,a);const d=1/(g+_+h);return o=_*d,a=h*d,t.copy(n).addScaledVector(hi,o).addScaledVector(di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Wd=0;class cr extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Ti,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yu,this.blendDst=Mu,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Te){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=Td(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xa(o,s,e+1/3),this.g=xa(o,s,e),this.b=xa(o,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,t=Te){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Te){const n=Ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Te){return zt.fromWorkingColorSpace(gt.copy(this),e),Math.round(Et(gt.r*255,0,255))*65536+Math.round(Et(gt.g*255,0,255))*256+Math.round(Et(gt.b*255,0,255))}getHexString(e=Te){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,r=gt.g,s=gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let u,l;const c=(a+o)/2;if(a===o)u=0,l=0;else{const f=o-a;switch(l=c<=.5?f/(o+a):f/(2-o-a),o){case n:u=(r-s)/f+(r<s?6:0);break;case r:u=(s-n)/f+2;break;case s:u=(n-r)/f+4;break}u/=6}return e.h=u,e.s=l,e.l=c,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Te){zt.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,r=gt.b;return e!==Te?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=n,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(Pr);const n=sa(Vt.h,Pr.h,t),r=sa(Vt.s,Pr.s,t),s=sa(Vt.l,Pr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new We;We.NAMES=Ou;class as extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new V,Lr=new Ue;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Nu extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fu extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $d=0;const It=new at,ya=new wt,pi=new V,Lt=new lr,Vi=new lr,ft=new V;class Ln extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Fu:Nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Lt.min,Vi.min),Lt.expandByPoint(ft),ft.addVectors(Lt.max,Vi.max),Lt.expandByPoint(ft)):(Lt.expandByPoint(Vi.min),Lt.expandByPoint(Vi.max))}Lt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)ft.fromBufferAttribute(a,l),u&&(pi.fromBufferAttribute(e,l),ft.add(pi)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,l=[],c=[];for(let A=0;A<a;A++)l[A]=new V,c[A]=new V;const f=new V,h=new V,m=new V,p=new Ue,_=new Ue,g=new Ue,d=new V,x=new V;function v(A,F,T){f.fromArray(r,A*3),h.fromArray(r,F*3),m.fromArray(r,T*3),p.fromArray(o,A*2),_.fromArray(o,F*2),g.fromArray(o,T*2),h.sub(f),m.sub(f),_.sub(p),g.sub(p);const S=1/(_.x*g.y-g.x*_.y);isFinite(S)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(m,-_.y).multiplyScalar(S),x.copy(m).multiplyScalar(_.x).addScaledVector(h,-g.x).multiplyScalar(S),l[A].add(d),l[F].add(d),l[T].add(d),c[A].add(x),c[F].add(x),c[T].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,F=M.length;A<F;++A){const T=M[A],S=T.start,R=T.count;for(let C=S,k=S+R;C<k;C+=3)v(n[C+0],n[C+1],n[C+2])}const y=new V,b=new V,w=new V,D=new V;function E(A){w.fromArray(s,A*3),D.copy(w);const F=l[A];y.copy(F),y.sub(w.multiplyScalar(w.dot(F))).normalize(),b.crossVectors(D,F);const S=b.dot(c[A])<0?-1:1;u[A*4]=y.x,u[A*4+1]=y.y,u[A*4+2]=y.z,u[A*4+3]=S}for(let A=0,F=M.length;A<F;++A){const T=M[A],S=T.start,R=T.count;for(let C=S,k=S+R;C<k;C+=3)E(n[C+0]),E(n[C+1]),E(n[C+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,u=new V,l=new V,c=new V,f=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const p=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(n,p),u.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(c),u.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,u){const l=a.array,c=a.itemSize,f=a.normalized,h=new l.constructor(u.length*c);let m=0,p=0;for(let _=0,g=u.length;_<g;_++){a.isInterleavedBufferAttribute?m=u[_]*a.data.stride+a.offset:m=u[_]*c;for(let d=0;d<c;d++)h[p++]=l[m++]}return new Qt(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],l=e(u,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const u=[],l=s[a];for(let c=0,f=l.length;c<f;c++){const h=l[c],m=e(h,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];c.push(m.toJSON(e.data))}c.length>0&&(r[u]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(t))}const s=e.morphAttributes;for(const l in s){const c=[],f=s[l];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,c=o.length;l<c;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new at,Kt=new Fd,Dr=new So,Cl=new V,mi=new V,gi=new V,_i=new V,Ma=new V,Ur=new V,Ir=new Ue,Or=new Ue,Nr=new Ue,Pl=new V,Ll=new V,Dl=new V,Fr=new V,Br=new V;class Jt extends wt{constructor(e=new Ln,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ur.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const c=a[u],f=s[u];c!==0&&(Ma.fromBufferAttribute(f,e),o?Ur.addScaledVector(Ma,c):Ur.addScaledVector(Ma.sub(t),c))}t.add(Ur)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Kt.copy(e.ray).recast(e.near),!(Dr.containsPoint(Kt.origin)===!1&&(Kt.intersectSphere(Dr,Cl)===null||Kt.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Rl.copy(s).invert(),Kt.copy(e.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&Kt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,u=r.attributes.uv,l=r.attributes.uv1,c=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,p=f.length;m<p;m++){const _=f[m],g=s[_.materialIndex],d=Math.max(_.start,h.start),x=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let v=d,M=x;v<M;v+=3){const y=o.getX(v),b=o.getX(v+1),w=o.getX(v+2);n=kr(this,g,e,Kt,u,l,c,y,b,w),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const m=Math.max(0,h.start),p=Math.min(o.count,h.start+h.count);for(let _=m,g=p;_<g;_+=3){const d=o.getX(_),x=o.getX(_+1),v=o.getX(_+2);n=kr(this,s,e,Kt,u,l,c,d,x,v),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,p=f.length;m<p;m++){const _=f[m],g=s[_.materialIndex],d=Math.max(_.start,h.start),x=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let v=d,M=x;v<M;v+=3){const y=v,b=v+1,w=v+2;n=kr(this,g,e,Kt,u,l,c,y,b,w),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const m=Math.max(0,h.start),p=Math.min(a.count,h.start+h.count);for(let _=m,g=p;_<g;_+=3){const d=_,x=_+1,v=_+2;n=kr(this,s,e,Kt,u,l,c,d,x,v),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function jd(i,e,t,n,r,s,o,a){let u;if(e.side===bt?u=n.intersectTriangle(o,s,r,!0,a):u=n.intersectTriangle(r,s,o,e.side===An,a),u===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Br);return l<t.near||l>t.far?null:{distance:l,point:Br.clone(),object:i}}function kr(i,e,t,n,r,s,o,a,u,l){i.getVertexPosition(a,mi),i.getVertexPosition(u,gi),i.getVertexPosition(l,_i);const c=jd(i,e,t,n,mi,gi,_i,Fr);if(c){r&&(Ir.fromBufferAttribute(r,a),Or.fromBufferAttribute(r,u),Nr.fromBufferAttribute(r,l),c.uv=Wt.getInterpolation(Fr,mi,gi,_i,Ir,Or,Nr,new Ue)),s&&(Ir.fromBufferAttribute(s,a),Or.fromBufferAttribute(s,u),Nr.fromBufferAttribute(s,l),c.uv1=Wt.getInterpolation(Fr,mi,gi,_i,Ir,Or,Nr,new Ue),c.uv2=c.uv1),o&&(Pl.fromBufferAttribute(o,a),Ll.fromBufferAttribute(o,u),Dl.fromBufferAttribute(o,l),c.normal=Wt.getInterpolation(Fr,mi,gi,_i,Pl,Ll,Dl,new V),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:u,c:l,normal:new V,materialIndex:0};Wt.getNormal(mi,gi,_i,f.normal),c.face=f}return c}class ur extends Ln{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],l=[],c=[],f=[];let h=0,m=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(c,3)),this.setAttribute("uv",new en(f,2));function p(_,g,d,x,v,M,y,b,w,D,E){const A=M/w,F=y/D,T=M/2,S=y/2,R=b/2,C=w+1,k=D+1;let N=0,U=0;const z=new V;for(let H=0;H<k;H++){const ne=H*F-S;for(let K=0;K<C;K++){const W=K*A-T;z[_]=W*x,z[g]=ne*v,z[d]=R,l.push(z.x,z.y,z.z),z[_]=0,z[g]=0,z[d]=b>0?1:-1,c.push(z.x,z.y,z.z),f.push(K/w),f.push(1-H/D),N+=1}}for(let H=0;H<D;H++)for(let ne=0;ne<w;ne++){const K=h+ne+C*H,W=h+ne+C*(H+1),q=h+(ne+1)+C*(H+1),ie=h+(ne+1)+C*H;u.push(K,W,ie),u.push(W,q,ie),U+=6}a.addGroup(m,U,E),m+=U,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const r in n)e[r]=n[r]}return e}function Xd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bu(i){return i.getRenderTarget()===null?i.outputColorSpace:rn}const qd={clone:Ui,merge:Mt};var Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ku extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends ku{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/l,r*=o.width/u,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,xi=1;class Zd extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Dt(vi,xi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Dt(vi,xi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Dt(vi,xi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Dt(vi,xi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new Dt(vi,xi,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const l=new Dt(vi,xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,u,l]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=_n,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class zu extends vn{constructor(e,t,n,r,s,o,a,u,l,c){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,r,s,o,a,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$n?Te:jn),this.texture=new zu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ur(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:wn});s.uniforms.tEquirect.value=t;const o=new Jt(r,s),a=t.minFilter;return t.minFilter===rr&&(t.minFilter=Nt),new Zd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Sa=new V,Qd=new V,ep=new Fe;class Bn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Sa.subVectors(n,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ep.getNormalMatrix(e),r=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new So,zr=new V;class Eo{constructor(e=new Bn,t=new Bn,n=new Bn,r=new Bn,s=new Bn,o=new Bn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],u=n[4],l=n[5],c=n[6],f=n[7],h=n[8],m=n[9],p=n[10],_=n[11],g=n[12],d=n[13],x=n[14],v=n[15];return t[0].setComponents(a-r,f-u,_-h,v-g).normalize(),t[1].setComponents(a+r,f+u,_+h,v+g).normalize(),t[2].setComponents(a+s,f+l,_+m,v+d).normalize(),t[3].setComponents(a-s,f-l,_-m,v-d).normalize(),t[4].setComponents(a-o,f-c,_-p,v-x).normalize(),t[5].setComponents(a+o,f+c,_+p,v+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function tp(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,c){const f=l.array,h=l.usage,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,f,h),l.onUploadCallback();let p;if(f instanceof Float32Array)p=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)p=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)p=i.SHORT;else if(f instanceof Uint32Array)p=i.UNSIGNED_INT;else if(f instanceof Int32Array)p=i.INT;else if(f instanceof Int8Array)p=i.BYTE;else if(f instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,c,f){const h=c.array,m=c.updateRange;i.bindBuffer(f,l),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(i.deleteBuffer(c.buffer),n.delete(l))}function u(l,c){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,c)):f.version<l.version&&(s(f.buffer,l,c),f.version=l.version)}return{get:o,remove:a,update:u}}class bo extends Ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(r),l=a+1,c=u+1,f=e/a,h=t/u,m=[],p=[],_=[],g=[];for(let d=0;d<c;d++){const x=d*h-o;for(let v=0;v<l;v++){const M=v*f-s;p.push(M,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-d/u)}}for(let d=0;d<u;d++)for(let x=0;x<a;x++){const v=x+l*d,M=x+l*(d+1),y=x+1+l*(d+1),b=x+1+l*d;m.push(v,M,b),m.push(M,y,b)}this.setIndex(m),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp="vec3 transformed = vec3( position );",cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,$p=`#if defined( USE_ENVMAP )
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Zp=`struct PhysicalMaterial {
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
}`,Jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_UV
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
#endif`,qm=`#ifdef USE_UV
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
#endif`,Ym=`#ifdef USE_UV
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ig=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,ag=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`uniform float scale;
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
}`,ug=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define MATCAP
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
}`,gg=`#define MATCAP
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
}`,_g=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define STANDARD
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
}`,Eg=`#define TOON
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
}`,bg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ce={alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:rp,alphatest_pars_fragment:sp,aomap_fragment:ap,aomap_pars_fragment:op,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:up,iridescence_fragment:fp,bumpmap_pars_fragment:hp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:_p,color_pars_fragment:vp,color_pars_vertex:xp,color_vertex:yp,common:Mp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:bp,displacementmap_vertex:wp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ap,encodings_fragment:Rp,encodings_pars_fragment:Cp,envmap_fragment:Pp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:$p,envmap_vertex:Ip,fog_vertex:Op,fog_pars_vertex:Np,fog_fragment:Fp,fog_pars_fragment:Bp,gradientmap_pars_fragment:kp,lightmap_fragment:zp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:jp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:Qp,lights_fragment_end:em,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:rm,map_fragment:sm,map_pars_fragment:am,map_particle_fragment:om,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:um,morphcolor_vertex:fm,morphnormal_vertex:hm,morphtarget_pars_vertex:dm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:_m,normal_pars_vertex:vm,normal_vertex:xm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:bm,output_fragment:wm,packing:Tm,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Im,shadowmap_vertex:Om,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Bm,skinning_vertex:km,skinnormal_vertex:zm,specularmap_fragment:Gm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Wm,transmission_fragment:$m,transmission_pars_fragment:jm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:Km,background_vert:Zm,background_frag:Jm,backgroundCube_vert:Qm,backgroundCube_frag:eg,cube_vert:tg,cube_frag:ng,depth_vert:ig,depth_frag:rg,distanceRGBA_vert:sg,distanceRGBA_frag:ag,equirect_vert:og,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:ug,meshbasic_vert:fg,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:_g,meshnormal_frag:vg,meshphong_vert:xg,meshphong_frag:yg,meshphysical_vert:Mg,meshphysical_frag:Sg,meshtoon_vert:Eg,meshtoon_frag:bg,points_vert:wg,points_frag:Tg,shadow_vert:Ag,shadow_frag:Rg,sprite_vert:Cg,sprite_frag:Pg},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaTest:{value:0}}},Zt={basic:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Mt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Mt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Mt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Mt([le.points,le.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Mt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Mt([le.common,le.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Mt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Mt([le.sprite,le.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Mt([le.common,le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Mt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Zt.physical={uniforms:Mt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Gr={r:0,b:0,g:0};function Lg(i,e,t,n,r,s,o){const a=new We(0);let u=s===!0?0:1,l,c,f=null,h=0,m=null;function p(g,d){let x=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,u):v&&v.isColor&&(_(v,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===us)?(c===void 0&&(c=new Jt(new ur(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ui(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Te,(f!==v||h!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Jt(new bo(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ui(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=v.colorSpace!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,h=v.version,m=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,d){g.getRGB(Gr,Bu(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),u=d,_(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(g){u=g,_(a,u)},render:p}}function Dg(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},u=g(null);let l=u,c=!1;function f(R,C,k,N,U){let z=!1;if(o){const H=_(N,k,C);l!==H&&(l=H,m(l.object)),z=d(R,N,k,U),z&&x(R,N,k,U)}else{const H=C.wireframe===!0;(l.geometry!==N.id||l.program!==k.id||l.wireframe!==H)&&(l.geometry=N.id,l.program=k.id,l.wireframe=H,z=!0)}U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,D(R,C,k,N),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function p(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,C,k){const N=k.wireframe===!0;let U=a[R.id];U===void 0&&(U={},a[R.id]=U);let z=U[C.id];z===void 0&&(z={},U[C.id]=z);let H=z[N];return H===void 0&&(H=g(h()),z[N]=H),H}function g(R){const C=[],k=[],N=[];for(let U=0;U<r;U++)C[U]=0,k[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:N,object:R,attributes:{},index:null}}function d(R,C,k,N){const U=l.attributes,z=C.attributes;let H=0;const ne=k.getAttributes();for(const K in ne)if(ne[K].location>=0){const q=U[K];let ie=z[K];if(ie===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;H++}return l.attributesNum!==H||l.index!==N}function x(R,C,k,N){const U={},z=C.attributes;let H=0;const ne=k.getAttributes();for(const K in ne)if(ne[K].location>=0){let q=z[K];q===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),U[K]=ie,H++}l.attributes=U,l.attributesNum=H,l.index=N}function v(){const R=l.newAttributes;for(let C=0,k=R.length;C<k;C++)R[C]=0}function M(R){y(R,0)}function y(R,C){const k=l.newAttributes,N=l.enabledAttributes,U=l.attributeDivisors;k[R]=1,N[R]===0&&(i.enableVertexAttribArray(R),N[R]=1),U[R]!==C&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,C),U[R]=C)}function b(){const R=l.newAttributes,C=l.enabledAttributes;for(let k=0,N=C.length;k<N;k++)C[k]!==R[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function w(R,C,k,N,U,z){n.isWebGL2===!0&&(k===i.INT||k===i.UNSIGNED_INT)?i.vertexAttribIPointer(R,C,k,U,z):i.vertexAttribPointer(R,C,k,N,U,z)}function D(R,C,k,N){if(n.isWebGL2===!1&&(R.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=N.attributes,z=k.getAttributes(),H=C.defaultAttributeValues;for(const ne in z){const K=z[ne];if(K.location>=0){let W=U[ne];if(W===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){const q=W.normalized,ie=W.itemSize,Z=t.get(W);if(Z===void 0)continue;const O=Z.buffer,xe=Z.type,ye=Z.bytesPerElement;if(W.isInterleavedBufferAttribute){const oe=W.data,pe=oe.stride,Ie=W.offset;if(oe.isInstancedInterleavedBuffer){for(let me=0;me<K.locationSize;me++)y(K.location+me,oe.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<K.locationSize;me++)M(K.location+me);i.bindBuffer(i.ARRAY_BUFFER,O);for(let me=0;me<K.locationSize;me++)w(K.location+me,ie/K.locationSize,xe,q,pe*ye,(Ie+ie/K.locationSize*me)*ye)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<K.locationSize;oe++)y(K.location+oe,W.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<K.locationSize;oe++)M(K.location+oe);i.bindBuffer(i.ARRAY_BUFFER,O);for(let oe=0;oe<K.locationSize;oe++)w(K.location+oe,ie/K.locationSize,xe,q,ie*ye,ie/K.locationSize*oe*ye)}}else if(H!==void 0){const q=H[ne];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(K.location,q);break;case 3:i.vertexAttrib3fv(K.location,q);break;case 4:i.vertexAttrib4fv(K.location,q);break;default:i.vertexAttrib1fv(K.location,q)}}}}b()}function E(){T();for(const R in a){const C=a[R];for(const k in C){const N=C[k];for(const U in N)p(N[U].object),delete N[U];delete C[k]}delete a[R]}}function A(R){if(a[R.id]===void 0)return;const C=a[R.id];for(const k in C){const N=C[k];for(const U in N)p(N[U].object),delete N[U];delete C[k]}delete a[R.id]}function F(R){for(const C in a){const k=a[C];if(k[R.id]===void 0)continue;const N=k[R.id];for(const U in N)p(N[U].object),delete N[U];delete k[R.id]}}function T(){S(),c=!0,l!==u&&(l=u,m(l.object))}function S(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:f,reset:T,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function Ug(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,c){i.drawArrays(s,l,c),t.update(c,s,1)}function u(l,c,f){if(f===0)return;let h,m;if(r)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=u}function Ig(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const l=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),y=v&&M,b=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:b}}function Og(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Bn,a=new Fe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||r;return r=h,n=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!r||p===null||p.length===0||s&&!g)s?c(null):l();else{const x=s?0:n,v=x*4;let M=d.clippingState||null;u.value=M,M=c(p,h,v,m);for(let y=0;y!==v;++y)M[y]=t[y];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(f,h,m,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=u.value,p!==!0||g===null){const d=m+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,M=m;v!==_;++v,M+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(g,M),g[M+3]=o.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Ng(i){let e=new WeakMap;function t(o,a){return a===eo?o.mapping=Pi:a===to&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===eo||a===to)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new Jd(u.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fg extends ku{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=c*this.view.offsetY,u=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,Ul=[.125,.215,.35,.446,.526,.582],zn=20,Ea=new Fg,Il=new We;let ba=null;const kn=(1+Math.sqrt(5))/2,yi=1/kn,Ol=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,kn,yi),new V(0,kn,-yi),new V(yi,0,kn),new V(-yi,0,kn),new V(kn,yi,0),new V(-kn,yi,0)];class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ba=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:sr,format:jt,colorSpace:rn,depthBuffer:!1},r=Fl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bg(s)),this._blurMaterial=kg(s,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,r){const a=new Dt(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Il),c.toneMapping=_n,c.autoClear=!1;const m=new as({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),p=new Jt(new ur,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(Il),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,u[d],0),a.lookAt(l[d],0,0)):x===1?(a.up.set(0,0,u[d]),a.lookAt(0,l[d],0)):(a.up.set(0,u[d],0),a.lookAt(0,0,l[d]));const v=this._cubeSize;Hr(r,x*v,d>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(p,a),c.render(e,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pi||e.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;Hr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ol[(r-1)%Ol.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Jt(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zn-1),_=s/p,g=isFinite(s)?1+Math.floor(c*_):zn;g>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zn}`);const d=[];let x=0;for(let w=0;w<zn;++w){const D=w/_,E=Math.exp(-D*D/2);d.push(E),w===0?x+=E:w<g&&(x+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=p,h.mipInt.value=v-n;const M=this._sizeLods[r],y=3*M*(r>v-wi?r-v+wi:0),b=4*(this._cubeSize-M);Hr(t,y,b,3*M,2*M),u.setRenderTarget(t),u.render(f,Ea)}}function Bg(i){const e=[],t=[],n=[];let r=i;const s=i-wi+1+Ul.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let u=1/a;o>i-wi?u=Ul[o-i+wi-1]:o===0&&(u=0),n.push(u);const l=1/(a-2),c=-l,f=1+l,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,p=6,_=3,g=2,d=1,x=new Float32Array(_*p*m),v=new Float32Array(g*p*m),M=new Float32Array(d*p*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,D=b>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];x.set(E,_*p*b),v.set(h,g*p*b);const A=[b,b,b,b,b,b];M.set(A,d*p*b)}const y=new Ln;y.setAttribute("position",new Qt(x,_)),y.setAttribute("uv",new Qt(v,g)),y.setAttribute("faceIndex",new Qt(M,d)),e.push(y),r>wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fl(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function kg(i,e,t){const n=new Float32Array(zn),r=new V(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wo(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Bl(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function kl(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function wo(){return`

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
	`}function zg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,l=u===eo||u===to,c=u===Pi||u===Li;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Nl(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Nl(i));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let u=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&u++;return u===l}function s(a){const u=a.target;u.removeEventListener("dispose",s);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hg(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function u(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const p in m){const _=m[p];for(let g=0,d=_.length;g<d;g++)e.update(_[g],i.ARRAY_BUFFER)}}function l(f){const h=[],m=f.index,p=f.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,M=x.length;v<M;v+=3){const y=x[v+0],b=x[v+1],w=x[v+2];h.push(y,b,b,w,w,y)}}else{const x=p.array;_=p.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const y=v+0,b=v+1,w=v+2;h.push(y,b,b,w,w,y)}}const g=new(Pu(h)?Fu:Nu)(h,1);g.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:u,getWireframeAttribute:c}}function Vg(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,u;function l(h){a=h.type,u=h.bytesPerElement}function c(h,m){i.drawElements(s,m,a,h*u),t.update(m,s,1)}function f(h,m,p){if(p===0)return;let _,g;if(r)_=i,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](s,m,a,h*u,p),t.update(m,s,p)}this.setMode=o,this.setIndex=l,this.render=c,this.renderInstances=f}function Wg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $g(i,e){return i[0]-e[0]}function jg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Xg(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ke,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function u(l,c,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let g=s.get(c);if(g===void 0||g.count!==_){let C=function(){S.dispose(),s.delete(c),c.removeEventListener("dispose",C)};var m=C;g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let E=0;v===!0&&(E=1),M===!0&&(E=2),y===!0&&(E=3);let A=c.attributes.position.count*E,F=1;A>e.maxTextureSize&&(F=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*F*4*_),S=new Uu(T,A,F,_);S.type=Hn,S.needsUpdate=!0;const R=E*4;for(let k=0;k<_;k++){const N=b[k],U=w[k],z=D[k],H=A*F*4*k;for(let ne=0;ne<N.count;ne++){const K=ne*R;v===!0&&(o.fromBufferAttribute(N,ne),T[H+K+0]=o.x,T[H+K+1]=o.y,T[H+K+2]=o.z,T[H+K+3]=0),M===!0&&(o.fromBufferAttribute(U,ne),T[H+K+4]=o.x,T[H+K+5]=o.y,T[H+K+6]=o.z,T[H+K+7]=0),y===!0&&(o.fromBufferAttribute(z,ne),T[H+K+8]=o.x,T[H+K+9]=o.y,T[H+K+10]=o.z,T[H+K+11]=z.itemSize===4?o.w:1)}}g={count:_,texture:S,size:new Ue(A,F)},s.set(c,g),c.addEventListener("dispose",C)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const x=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=h===void 0?0:h.length;let _=n[c.id];if(_===void 0||_.length!==p){_=[];for(let M=0;M<p;M++)_[M]=[M,0];n[c.id]=_}for(let M=0;M<p;M++){const y=_[M];y[0]=M,y[1]=h[M]}_.sort(jg);for(let M=0;M<8;M++)M<p&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort($g);const g=c.morphAttributes.position,d=c.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const y=a[M],b=y[0],w=y[1];b!==Number.MAX_SAFE_INTEGER&&w?(g&&c.getAttribute("morphTarget"+M)!==g[b]&&c.setAttribute("morphTarget"+M,g[b]),d&&c.getAttribute("morphNormal"+M)!==d[b]&&c.setAttribute("morphNormal"+M,d[b]),r[M]=w,x+=w):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),d&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const v=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function qg(i,e,t,n){let r=new WeakMap;function s(u){const l=n.render.frame,c=u.geometry,f=e.get(u,c);return r.get(f)!==l&&(e.update(f),r.set(f,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Hu=new vn,Vu=new Uu,Wu=new Od,$u=new zu,zl=[],Gl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=zl[r];if(s===void 0&&(s=new Float32Array(r),zl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hs(i,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function Qg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),ct(t,n)}}function e_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),ct(t,n)}}function t_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),ct(t,n)}}function n_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function i_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function r_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function a_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function o_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function l_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function u_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Hu,r)}function f_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wu,r)}function h_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$u,r)}function d_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vu,r)}function p_(i){switch(i){case 5126:return Yg;case 35664:return Kg;case 35665:return Zg;case 35666:return Jg;case 35674:return Qg;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return r_;case 35669:case 35673:return s_;case 5125:return a_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return d_}}function m_(i,e){i.uniform1fv(this.addr,e)}function g_(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function __(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function v_(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function x_(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y_(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M_(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S_(i,e){i.uniform1iv(this.addr,e)}function E_(i,e){i.uniform2iv(this.addr,e)}function b_(i,e){i.uniform3iv(this.addr,e)}function w_(i,e){i.uniform4iv(this.addr,e)}function T_(i,e){i.uniform1uiv(this.addr,e)}function A_(i,e){i.uniform2uiv(this.addr,e)}function R_(i,e){i.uniform3uiv(this.addr,e)}function C_(i,e){i.uniform4uiv(this.addr,e)}function P_(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hu,s[o])}function L_(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wu,s[o])}function D_(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||$u,s[o])}function U_(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vu,s[o])}function I_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return v_;case 35674:return x_;case 35675:return y_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return E_;case 35668:case 35672:return b_;case 35669:case 35673:return w_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return U_}}class O_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=p_(t.type)}}class N_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=I_(t.type)}}class F_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function $l(i,e){i.seq.push(e),i.map[e.id]=e}function B_(i,e,t){const n=i.name,r=n.length;for(wa.lastIndex=0;;){const s=wa.exec(n),o=wa.lastIndex;let a=s[1];const u=s[2]==="]",l=s[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===r){$l(t,l===void 0?new O_(a,i,e):new N_(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new F_(a),$l(t,f)),t=f}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);B_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function jl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let k_=0;function z_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function G_(i){switch(i){case rn:return["Linear","( value )"];case Te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Xl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+z_(i.getShaderSource(e),o)}else return r}function H_(i,e){const t=G_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function V_(i,e){let t;switch(e){case td:t="Linear";break;case nd:t="Reinhard";break;case id:t="OptimizedCineon";break;case rd:t="ACESFilmic";break;case sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function W_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function $_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xi(i){return i!==""}function ql(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(i){return i.replace(X_,q_)}function q_(i,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ao(t)}const Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(Y_,K_)}function K_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function J_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function ev(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Su:e="ENVMAP_BLENDING_MULTIPLY";break;case Qh:e="ENVMAP_BLENDING_MIX";break;case ed:e="ENVMAP_BLENDING_ADD";break}return e}function tv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=Z_(t),l=J_(t),c=Q_(t),f=ev(t),h=tv(t),m=t.isWebGL2?"":W_(t),p=$_(s),_=r.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[p].filter(Xi).join(`
`),g.length>0&&(g+=`
`),d=[m,p].filter(Xi).join(`
`),d.length>0&&(d+=`
`)):(g=[Zl(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),d=[m,Zl(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Ce.tonemapping_pars_fragment:"",t.toneMapping!==_n?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,H_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=ao(o),o=ql(o,t),o=Yl(o,t),a=ao(a),a=ql(a,t),a=Yl(a,t),o=Kl(o),a=Kl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+g+o,M=x+d+a,y=jl(r,r.VERTEX_SHADER,v),b=jl(r,r.FRAGMENT_SHADER,M);if(r.attachShader(_,y),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(y).trim(),F=r.getShaderInfoLog(b).trim();let T=!0,S=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(T=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,y,b);else{const R=Xl(r,y,"vertex"),C=Xl(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+R+`
`+C)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(A===""||F==="")&&(S=!1);S&&(this.diagnostics={runnable:T,programLog:E,vertexShader:{log:A,prefix:g},fragmentShader:{log:F,prefix:d}})}r.deleteShader(y),r.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new Zr(r,_)),w};let D;return this.getAttributes=function(){return D===void 0&&(D=j_(r,_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let iv=0;class rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sv(e),t.set(e,n)),n}}class sv{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}}function av(i,e,t,n,r,s,o){const a=new Iu,u=new rv,l=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===1?"uv1":E===2?"uv2":E===3?"uv3":"uv"}function g(E,A,F,T,S){const R=T.fog,C=S.geometry,k=E.isMeshStandardMaterial?T.environment:null,N=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),U=N&&N.mapping===us?N.image.height:null,z=p[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const H=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=H!==void 0?H.length:0;let K=0;C.morphAttributes.position!==void 0&&(K=1),C.morphAttributes.normal!==void 0&&(K=2),C.morphAttributes.color!==void 0&&(K=3);let W,q,ie,Z;if(z){const Ge=Zt[z];W=Ge.vertexShader,q=Ge.fragmentShader}else W=E.vertexShader,q=E.fragmentShader,u.update(E),ie=u.getVertexShaderID(E),Z=u.getFragmentShaderID(E);const O=i.getRenderTarget(),xe=S.isInstancedMesh===!0,ye=!!E.map,oe=!!E.matcap,pe=!!N,Ie=!!E.aoMap,me=!!E.lightMap,Ae=!!E.bumpMap,Je=!!E.normalMap,Ze=!!E.displacementMap,it=!!E.emissiveMap,Qe=!!E.metalnessMap,Be=!!E.roughnessMap,je=E.clearcoat>0,dt=E.iridescence>0,I=E.sheen>0,P=E.transmission>0,Y=je&&!!E.clearcoatMap,re=je&&!!E.clearcoatNormalMap,ae=je&&!!E.clearcoatRoughnessMap,ce=dt&&!!E.iridescenceMap,B=dt&&!!E.iridescenceThicknessMap,te=I&&!!E.sheenColorMap,X=I&&!!E.sheenRoughnessMap,ue=!!E.specularMap,de=!!E.specularColorMap,_e=!!E.specularIntensityMap,fe=P&&!!E.transmissionMap,ge=P&&!!E.thicknessMap,Ee=!!E.gradientMap,Pe=!!E.alphaMap,et=E.alphaTest>0,G=!!E.extensions,J=!!C.attributes.uv1,se=!!C.attributes.uv2,he=!!C.attributes.uv3;return{isWebGL2:c,shaderID:z,shaderName:E.type,vertexShader:W,fragmentShader:q,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:xe,instancingColor:xe&&S.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:rn,map:ye,matcap:oe,envMap:pe,envMapMode:pe&&N.mapping,envMapCubeUVHeight:U,aoMap:Ie,lightMap:me,bumpMap:Ae,normalMap:Je,displacementMap:h&&Ze,emissiveMap:it,normalMapObjectSpace:Je&&E.normalMapType===bd,normalMapTangentSpace:Je&&E.normalMapType===Tu,metalnessMap:Qe,roughnessMap:Be,clearcoat:je,clearcoatMap:Y,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:dt,iridescenceMap:ce,iridescenceThicknessMap:B,sheen:I,sheenColorMap:te,sheenRoughnessMap:X,specularMap:ue,specularColorMap:de,specularIntensityMap:_e,transmission:P,transmissionMap:fe,thicknessMap:ge,gradientMap:Ee,opaque:E.transparent===!1&&E.blending===Ti,alphaMap:Pe,alphaTest:et,combine:E.combine,mapUv:ye&&_(E.map.channel),aoMapUv:Ie&&_(E.aoMap.channel),lightMapUv:me&&_(E.lightMap.channel),bumpMapUv:Ae&&_(E.bumpMap.channel),normalMapUv:Je&&_(E.normalMap.channel),displacementMapUv:Ze&&_(E.displacementMap.channel),emissiveMapUv:it&&_(E.emissiveMap.channel),metalnessMapUv:Qe&&_(E.metalnessMap.channel),roughnessMapUv:Be&&_(E.roughnessMap.channel),clearcoatMapUv:Y&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:B&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:X&&_(E.sheenRoughnessMap.channel),specularMapUv:ue&&_(E.specularMap.channel),specularColorMapUv:de&&_(E.specularColorMap.channel),specularIntensityMapUv:_e&&_(E.specularIntensityMap.channel),transmissionMapUv:fe&&_(E.transmissionMap.channel),thicknessMapUv:ge&&_(E.thicknessMap.channel),alphaMapUv:Pe&&_(E.alphaMap.channel),vertexTangents:Je&&!!C.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:se,vertexUv3s:he,pointsUvs:S.isPoints===!0&&!!C.attributes.uv&&(ye||Pe),fog:!!R,useFog:E.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:S.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:E.toneMapped?i.toneMapping:_n,useLegacyLights:i.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mn,flipSided:E.side===bt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:G&&E.extensions.derivatives===!0,extensionFragDepth:G&&E.extensions.fragDepth===!0,extensionDrawBuffers:G&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)A.push(F),A.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(x(A,E),v(A,E),A.push(i.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function x(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function v(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),E.push(a.mask)}function M(E){const A=p[E.type];let F;if(A){const T=Zt[A];F=qd.clone(T.uniforms)}else F=E.uniforms;return F}function y(E,A){let F;for(let T=0,S=l.length;T<S;T++){const R=l[T];if(R.cacheKey===A){F=R,++F.usedTimes;break}}return F===void 0&&(F=new nv(i,A,E,s),l.push(F)),F}function b(E){if(--E.usedTimes===0){const A=l.indexOf(E);l[A]=l[l.length-1],l.pop(),E.destroy()}}function w(E){u.remove(E)}function D(){u.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:D}}function ov(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function lv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ql(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,m,p,_,g){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:p,renderOrder:f.renderOrder,z:_,group:g},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=p,d.renderOrder=f.renderOrder,d.z=_,d.group=g),e++,d}function a(f,h,m,p,_,g){const d=o(f,h,m,p,_,g);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function u(f,h,m,p,_,g){const d=o(f,h,m,p,_,g);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||lv),n.length>1&&n.sort(h||Jl),r.length>1&&r.sort(h||Jl)}function c(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:u,finish:c,sort:l}}function cv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ql,i.set(n,[o])):r>=s.length?(o=new Ql,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new We};break;case"SpotLight":t={position:new V,direction:new V,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function fv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hv=0;function dv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i,e){const t=new uv,n=fv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new V);const s=new V,o=new at,a=new at;function u(c,f){let h=0,m=0,p=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let _=0,g=0,d=0,x=0,v=0,M=0,y=0,b=0,w=0,D=0;c.sort(dv);const E=f===!0?Math.PI:1;for(let F=0,T=c.length;F<T;F++){const S=c[F],R=S.color,C=S.intensity,k=S.distance,N=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=R.r*C*E,m+=R.g*C*E,p+=R.b*C*E;else if(S.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(S.sh.coefficients[U],C);else if(S.isDirectionalLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity*E),S.castShadow){const z=S.shadow,H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.directionalShadow[_]=H,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=S.shadow.matrix,M++}r.directional[_]=U,_++}else if(S.isSpotLight){const U=t.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(R).multiplyScalar(C*E),U.distance=k,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,r.spot[d]=U;const z=S.shadow;if(S.map&&(r.spotLightMap[w]=S.map,w++,z.updateMatrices(S),S.castShadow&&D++),r.spotLightMatrix[d]=z.matrix,S.castShadow){const H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.spotShadow[d]=H,r.spotShadowMap[d]=N,b++}d++}else if(S.isRectAreaLight){const U=t.get(S);U.color.copy(R).multiplyScalar(C),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),r.rectArea[x]=U,x++}else if(S.isPointLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity*E),U.distance=S.distance,U.decay=S.decay,S.castShadow){const z=S.shadow,H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=N,r.pointShadowMatrix[g]=S.shadow.matrix,y++}r.point[g]=U,g++}else if(S.isHemisphereLight){const U=t.get(S);U.skyColor.copy(S.color).multiplyScalar(C*E),U.groundColor.copy(S.groundColor).multiplyScalar(C*E),r.hemi[v]=U,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=p;const A=r.hash;(A.directionalLength!==_||A.pointLength!==g||A.spotLength!==d||A.rectAreaLength!==x||A.hemiLength!==v||A.numDirectionalShadows!==M||A.numPointShadows!==y||A.numSpotShadows!==b||A.numSpotMaps!==w)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=b+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,A.directionalLength=_,A.pointLength=g,A.spotLength=d,A.rectAreaLength=x,A.hemiLength=v,A.numDirectionalShadows=M,A.numPointShadows=y,A.numSpotShadows=b,A.numSpotMaps=w,r.version=hv++)}function l(c,f){let h=0,m=0,p=0,_=0,g=0;const d=f.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){const M=c[x];if(M.isDirectionalLight){const y=r.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),h++}else if(M.isSpotLight){const y=r.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),p++}else if(M.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=r.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const y=r.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(d),g++}}}return{setup:u,setupView:l,state:r}}function ec(i,e){const t=new pv(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function u(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:l,pushLight:o,pushShadow:a}}function mv(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let u;return a===void 0?(u=new ec(i,e),t.set(s,[u])):o>=a.length?(u=new ec(i,e),a.push(u)):u=a[o],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class gv extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _v extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`;function yv(i,e,t){let n=new Eo;const r=new Ue,s=new Ue,o=new Ke,a=new gv({depthPacking:Ed}),u=new _v,l={},c=t.maxTextureSize,f={[An]:bt,[bt]:An,[mn]:mn},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:vv,fragmentShader:xv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const p=new Ln;p.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let d=this.type;this.render=function(y,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const D=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const T=d!==dn&&this.type===dn,S=d===dn&&this.type!==dn;for(let R=0,C=y.length;R<C;R++){const k=y[R],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();if(r.multiply(U),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null||T===!0||S===!0){const H=this.type!==dn?{minFilter:St,magFilter:St}:{};N.map!==null&&N.map.dispose(),N.map=new qn(r.x,r.y,H),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const z=N.getViewportCount();for(let H=0;H<z;H++){const ne=N.getViewport(H);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),F.viewport(o),N.updateMatrices(k,H),n=N.getFrustum(),M(b,w,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===dn&&x(N,w),N.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(D,E,A)};function x(y,b){const w=e.update(_);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new qn(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(b,null,w,h,_,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(b,null,w,m,_,null)}function v(y,b,w,D){let E=null;const A=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)E=A;else if(E=w.isPointLight===!0?u:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=E.uuid,T=b.uuid;let S=l[F];S===void 0&&(S={},l[F]=S);let R=S[T];R===void 0&&(R=E.clone(),S[T]=R),E=R}if(E.visible=b.visible,E.wireframe=b.wireframe,D===dn?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:f[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=i.properties.get(E);F.light=w}return E}function M(y,b,w,D,E){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===dn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const T=e.update(y),S=y.material;if(Array.isArray(S)){const R=T.groups;for(let C=0,k=R.length;C<k;C++){const N=R[C],U=S[N.materialIndex];if(U&&U.visible){const z=v(y,U,D,E);i.renderBufferDirect(w,null,T,z,y,N)}}}else if(S.visible){const R=v(y,S,D,E);i.renderBufferDirect(w,null,T,R,y,null)}}const F=y.children;for(let T=0,S=F.length;T<S;T++)M(F[T],b,w,D,E)}}function Mv(i,e,t){const n=t.isWebGL2;function r(){let G=!1;const J=new Ke;let se=null;const he=new Ke(0,0,0,0);return{setMask:function(ve){se!==ve&&!G&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){G=ve},setClear:function(ve,Ge,He,pt,yn){yn===!0&&(ve*=pt,Ge*=pt,He*=pt),J.set(ve,Ge,He,pt),he.equals(J)===!1&&(i.clearColor(ve,Ge,He,pt),he.copy(J))},reset:function(){G=!1,se=null,he.set(-1,0,0,0)}}}function s(){let G=!1,J=null,se=null,he=null;return{setTest:function(ve){ve?O(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ve){J!==ve&&!G&&(i.depthMask(ve),J=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case jh:i.depthFunc(i.NEVER);break;case Xh:i.depthFunc(i.ALWAYS);break;case qh:i.depthFunc(i.LESS);break;case Qa:i.depthFunc(i.LEQUAL);break;case Yh:i.depthFunc(i.EQUAL);break;case Kh:i.depthFunc(i.GEQUAL);break;case Zh:i.depthFunc(i.GREATER);break;case Jh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){G=ve},setClear:function(ve){he!==ve&&(i.clearDepth(ve),he=ve)},reset:function(){G=!1,J=null,se=null,he=null}}}function o(){let G=!1,J=null,se=null,he=null,ve=null,Ge=null,He=null,pt=null,yn=null;return{setTest:function(tt){G||(tt?O(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(tt){J!==tt&&!G&&(i.stencilMask(tt),J=tt)},setFunc:function(tt,Ut,Yt){(se!==tt||he!==Ut||ve!==Yt)&&(i.stencilFunc(tt,Ut,Yt),se=tt,he=Ut,ve=Yt)},setOp:function(tt,Ut,Yt){(Ge!==tt||He!==Ut||pt!==Yt)&&(i.stencilOp(tt,Ut,Yt),Ge=tt,He=Ut,pt=Yt)},setLocked:function(tt){G=tt},setClear:function(tt){yn!==tt&&(i.clearStencil(tt),yn=tt)},reset:function(){G=!1,J=null,se=null,he=null,ve=null,Ge=null,He=null,pt=null,yn=null}}}const a=new r,u=new s,l=new o,c=new WeakMap,f=new WeakMap;let h={},m={},p=new WeakMap,_=[],g=null,d=!1,x=null,v=null,M=null,y=null,b=null,w=null,D=null,E=!1,A=null,F=null,T=null,S=null,R=null;const C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=N>=2);let z=null,H={};const ne=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),W=new Ke().fromArray(ne),q=new Ke().fromArray(K);function ie(G,J,se,he){const ve=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(G,Ge),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<se;He++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(J,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(J+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Ge}const Z={};Z[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Z[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),l.setClear(0),O(i.DEPTH_TEST),u.setFunc(Qa),Ze(!1),it(ko),O(i.CULL_FACE),Ae(wn);function O(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function xe(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function ye(G,J){return m[G]!==J?(i.bindFramebuffer(G,J),m[G]=J,n&&(G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=J),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=J)),!0):!1}function oe(G,J){let se=_,he=!1;if(G)if(se=p.get(J),se===void 0&&(se=[],p.set(J,se)),G.isWebGLMultipleRenderTargets){const ve=G.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,He=ve.length;Ge<He;Ge++)se[Ge]=i.COLOR_ATTACHMENT0+Ge;se.length=ve.length,he=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,he=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function pe(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const Ie={[bi]:i.FUNC_ADD,[Oh]:i.FUNC_SUBTRACT,[Nh]:i.FUNC_REVERSE_SUBTRACT};if(n)Ie[Vo]=i.MIN,Ie[Wo]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(Ie[Vo]=G.MIN_EXT,Ie[Wo]=G.MAX_EXT)}const me={[Fh]:i.ZERO,[Bh]:i.ONE,[kh]:i.SRC_COLOR,[yu]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[Gh]:i.DST_ALPHA,[zh]:i.ONE_MINUS_SRC_COLOR,[Mu]:i.ONE_MINUS_SRC_ALPHA,[Wh]:i.ONE_MINUS_DST_COLOR,[Hh]:i.ONE_MINUS_DST_ALPHA};function Ae(G,J,se,he,ve,Ge,He,pt){if(G===wn){d===!0&&(xe(i.BLEND),d=!1);return}if(d===!1&&(O(i.BLEND),d=!0),G!==Ih){if(G!==x||pt!==E){if((v!==bi||b!==bi)&&(i.blendEquation(i.FUNC_ADD),v=bi,b=bi),pt)switch(G){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,y=null,w=null,D=null,x=G,E=pt}return}ve=ve||J,Ge=Ge||se,He=He||he,(J!==v||ve!==b)&&(i.blendEquationSeparate(Ie[J],Ie[ve]),v=J,b=ve),(se!==M||he!==y||Ge!==w||He!==D)&&(i.blendFuncSeparate(me[se],me[he],me[Ge],me[He]),M=se,y=he,w=Ge,D=He),x=G,E=!1}function Je(G,J){G.side===mn?xe(i.CULL_FACE):O(i.CULL_FACE);let se=G.side===bt;J&&(se=!se),Ze(se),G.blending===Ti&&G.transparent===!1?Ae(wn):Ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const he=G.stencilWrite;l.setTest(he),he&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(G){A!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),A=G)}function it(G){G!==Lh?(O(i.CULL_FACE),G!==F&&(G===ko?i.cullFace(i.BACK):G===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),F=G}function Qe(G){G!==T&&(k&&i.lineWidth(G),T=G)}function Be(G,J,se){G?(O(i.POLYGON_OFFSET_FILL),(S!==J||R!==se)&&(i.polygonOffset(J,se),S=J,R=se)):xe(i.POLYGON_OFFSET_FILL)}function je(G){G?O(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function dt(G){G===void 0&&(G=i.TEXTURE0+C-1),z!==G&&(i.activeTexture(G),z=G)}function I(G,J,se){se===void 0&&(z===null?se=i.TEXTURE0+C-1:se=z);let he=H[se];he===void 0&&(he={type:void 0,texture:void 0},H[se]=he),(he.type!==G||he.texture!==J)&&(z!==se&&(i.activeTexture(se),z=se),i.bindTexture(G,J||Z[G]),he.type=G,he.texture=J)}function P(){const G=H[z];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(G){W.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),W.copy(G))}function ge(G){q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function Ee(G,J){let se=f.get(J);se===void 0&&(se=new WeakMap,f.set(J,se));let he=se.get(G);he===void 0&&(he=i.getUniformBlockIndex(J,G.name),se.set(G,he))}function Pe(G,J){const he=f.get(J).get(G);c.get(J)!==he&&(i.uniformBlockBinding(J,he,G.__bindingPointIndex),c.set(J,he))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},z=null,H={},m={},p=new WeakMap,_=[],g=null,d=!1,x=null,v=null,M=null,y=null,b=null,w=null,D=null,E=!1,A=null,F=null,T=null,S=null,R=null,W.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),l.reset()}return{buffers:{color:a,depth:u,stencil:l},enable:O,disable:xe,bindFramebuffer:ye,drawBuffers:oe,useProgram:pe,setBlending:Ae,setMaterial:Je,setFlipSided:Ze,setCullFace:it,setLineWidth:Qe,setPolygonOffset:Be,setScissorTest:je,activeTexture:dt,bindTexture:I,unbindTexture:P,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:de,texImage3D:_e,updateUBOMapping:Ee,uniformBlockBinding:Pe,texStorage2D:X,texStorage3D:ue,texSubImage2D:ae,texSubImage3D:ce,compressedTexSubImage2D:B,compressedTexSubImage3D:te,scissor:fe,viewport:ge,reset:et}}function Sv(i,e,t,n,r,s,o){const a=r.isWebGL2,u=r.maxTextures,l=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let _;const g=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,P){return d?new OffscreenCanvas(I,P):ss("canvas")}function v(I,P,Y,re){let ae=1;if((I.width>re||I.height>re)&&(ae=re/Math.max(I.width,I.height)),ae<1||P===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const ce=P?Ad:Math.floor,B=ce(ae*I.width),te=ce(ae*I.height);_===void 0&&(_=x(B,te));const X=Y?x(B,te):_;return X.width=B,X.height=te,X.getContext("2d").drawImage(I,0,0,B,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+B+"x"+te+")."),X}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function M(I){return _l(I.width)&&_l(I.height)}function y(I){return a?!1:I.wrapS!==$t||I.wrapT!==$t||I.minFilter!==St&&I.minFilter!==Nt}function b(I,P){return I.generateMipmaps&&P&&I.minFilter!==St&&I.minFilter!==Nt}function w(I){i.generateMipmap(I)}function D(I,P,Y,re,ae=!1){if(a===!1)return P;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=P;return P===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8)),P===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8)),P===i.RGBA&&(Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=re===Te&&ae===!1?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)),(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function E(I,P,Y){return b(I,Y)===!0||I.isFramebufferTexture&&I.minFilter!==St&&I.minFilter!==Nt?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function A(I){return I===St||I===$o||I===Zs?i.NEAREST:i.LINEAR}function F(I){const P=I.target;P.removeEventListener("dispose",F),S(P),P.isVideoTexture&&p.delete(P)}function T(I){const P=I.target;P.removeEventListener("dispose",T),C(P)}function S(I){const P=n.get(I);if(P.__webglInit===void 0)return;const Y=I.source,re=g.get(Y);if(re){const ae=re[P.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(I),Object.keys(re).length===0&&g.delete(Y)}n.remove(I)}function R(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const Y=I.source,re=g.get(Y);delete re[P.__cacheKey],o.memory.textures--}function C(I){const P=I.texture,Y=n.get(I),re=n.get(P);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)i.deleteFramebuffer(Y.__webglFramebuffer[ae]),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[ae]);else{if(i.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ae=0,ce=P.length;ae<ce;ae++){const B=n.get(P[ae]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(P[ae])}n.remove(P),n.remove(I)}let k=0;function N(){k=0}function U(){const I=k;return I>=u&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+u),k+=1,I}function z(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function H(I,P){const Y=n.get(I);if(I.isVideoTexture&&je(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(Y,I,P);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+P)}function ne(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){xe(Y,I,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+P)}function K(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){xe(Y,I,P);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+P)}function W(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ye(Y,I,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+P)}const q={[no]:i.REPEAT,[$t]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},ie={[St]:i.NEAREST,[$o]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[ad]:i.LINEAR_MIPMAP_NEAREST,[rr]:i.LINEAR_MIPMAP_LINEAR};function Z(I,P,Y){if(Y?(i.texParameteri(I,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ie[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ie[P.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==$t||P.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,A(P.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,A(P.minFilter)),P.minFilter!==St&&P.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===St||P.minFilter!==Zs&&P.minFilter!==rr||P.type===Hn&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function O(I,P){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",F));const re=P.source;let ae=g.get(re);ae===void 0&&(ae={},g.set(re,ae));const ce=z(P);if(ce!==I.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[ce].usedTimes++;const B=ae[I.__cacheKey];B!==void 0&&(ae[I.__cacheKey].usedTimes--,B.usedTimes===0&&R(P)),I.__cacheKey=ce,I.__webglTexture=ae[ce].texture}return Y}function xe(I,P,Y){let re=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(re=i.TEXTURE_3D);const ae=O(I,P),ce=P.source;t.bindTexture(re,I.__webglTexture,i.TEXTURE0+Y);const B=n.get(ce);if(ce.version!==B.__version||ae===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const te=y(P)&&M(P.image)===!1;let X=v(P.image,te,!1,c);X=dt(P,X);const ue=M(X)||a,de=s.convert(P.format,P.colorSpace);let _e=s.convert(P.type),fe=D(P.internalFormat,de,_e,P.colorSpace);Z(re,P,ue);let ge;const Ee=P.mipmaps,Pe=a&&P.isVideoTexture!==!0,et=B.__version===void 0||ae===!0,G=E(P,X,ue);if(P.isDepthTexture)fe=i.DEPTH_COMPONENT,a?P.type===Hn?fe=i.DEPTH_COMPONENT32F:P.type===Gn?fe=i.DEPTH_COMPONENT24:P.type===Ai?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:P.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Wn&&fe===i.DEPTH_COMPONENT&&P.type!==bu&&P.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Gn,_e=s.convert(P.type)),P.format===Di&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,P.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ai,_e=s.convert(P.type))),et&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,fe,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,de,_e,null));else if(P.isDataTexture)if(Ee.length>0&&ue){Pe&&et&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let J=0,se=Ee.length;J<se;J++)ge=Ee[J],Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,_e,ge.data):t.texImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,de,_e,ge.data);P.generateMipmaps=!1}else Pe?(et&&t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,X.width,X.height,de,_e,X.data)):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,de,_e,X.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Pe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,fe,Ee[0].width,Ee[0].height,X.depth);for(let J=0,se=Ee.length;J<se;J++)ge=Ee[J],P.format!==jt?de!==null?Pe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,X.depth,de,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,fe,ge.width,ge.height,X.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,X.depth,de,_e,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,fe,ge.width,ge.height,X.depth,0,de,_e,ge.data)}else{Pe&&et&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let J=0,se=Ee.length;J<se;J++)ge=Ee[J],P.format!==jt?de!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,ge.width,ge.height,de,_e,ge.data):t.texImage2D(i.TEXTURE_2D,J,fe,ge.width,ge.height,0,de,_e,ge.data)}else if(P.isDataArrayTexture)Pe?(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,fe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,de,_e,X.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,X.width,X.height,X.depth,0,de,_e,X.data);else if(P.isData3DTexture)Pe?(et&&t.texStorage3D(i.TEXTURE_3D,G,fe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,de,_e,X.data)):t.texImage3D(i.TEXTURE_3D,0,fe,X.width,X.height,X.depth,0,de,_e,X.data);else if(P.isFramebufferTexture){if(et)if(Pe)t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height);else{let J=X.width,se=X.height;for(let he=0;he<G;he++)t.texImage2D(i.TEXTURE_2D,he,fe,J,se,0,de,_e,null),J>>=1,se>>=1}}else if(Ee.length>0&&ue){Pe&&et&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let J=0,se=Ee.length;J<se;J++)ge=Ee[J],Pe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,de,_e,ge):t.texImage2D(i.TEXTURE_2D,J,fe,de,_e,ge);P.generateMipmaps=!1}else Pe?(et&&t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,_e,X)):t.texImage2D(i.TEXTURE_2D,0,fe,de,_e,X);b(P,ue)&&w(re),B.__version=ce.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ye(I,P,Y){if(P.image.length!==6)return;const re=O(I,P),ae=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const ce=n.get(ae);if(ae.version!==ce.__version||re===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const B=P.isCompressedTexture||P.image[0].isCompressedTexture,te=P.image[0]&&P.image[0].isDataTexture,X=[];for(let J=0;J<6;J++)!B&&!te?X[J]=v(P.image[J],!1,!0,l):X[J]=te?P.image[J].image:P.image[J],X[J]=dt(P,X[J]);const ue=X[0],de=M(ue)||a,_e=s.convert(P.format,P.colorSpace),fe=s.convert(P.type),ge=D(P.internalFormat,_e,fe,P.colorSpace),Ee=a&&P.isVideoTexture!==!0,Pe=ce.__version===void 0||re===!0;let et=E(P,ue,de);Z(i.TEXTURE_CUBE_MAP,P,de);let G;if(B){Ee&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,et,ge,ue.width,ue.height);for(let J=0;J<6;J++){G=X[J].mipmaps;for(let se=0;se<G.length;se++){const he=G[se];P.format!==jt?_e!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,0,0,he.width,he.height,_e,fe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se,ge,he.width,he.height,0,_e,fe,he.data)}}}else{G=P.mipmaps,Ee&&Pe&&(G.length>0&&et++,t.texStorage2D(i.TEXTURE_CUBE_MAP,et,ge,X[0].width,X[0].height));for(let J=0;J<6;J++)if(te){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,X[J].width,X[J].height,_e,fe,X[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ge,X[J].width,X[J].height,0,_e,fe,X[J].data);for(let se=0;se<G.length;se++){const ve=G[se].image[J].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,0,0,ve.width,ve.height,_e,fe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,ge,ve.width,ve.height,0,_e,fe,ve.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,fe,X[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ge,_e,fe,X[J]);for(let se=0;se<G.length;se++){const he=G[se];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,0,0,_e,fe,he.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se+1,ge,_e,fe,he.image[J])}}}b(P,de)&&w(i.TEXTURE_CUBE_MAP),ce.__version=ae.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function oe(I,P,Y,re,ae){const ce=s.convert(Y.format,Y.colorSpace),B=s.convert(Y.type),te=D(Y.internalFormat,ce,B,Y.colorSpace);n.get(P).__hasExternalTextures||(ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,te,P.width,P.height,P.depth,0,ce,B,null):t.texImage2D(ae,0,te,P.width,P.height,0,ce,B,null)),t.bindFramebuffer(i.FRAMEBUFFER,I),Be(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ae,n.get(Y).__webglTexture,0,Qe(P)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ae,n.get(Y).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(I,P,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer&&!P.stencilBuffer){let re=i.DEPTH_COMPONENT16;if(Y||Be(P)){const ae=P.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Hn?re=i.DEPTH_COMPONENT32F:ae.type===Gn&&(re=i.DEPTH_COMPONENT24));const ce=Qe(P);Be(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,re,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,re,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(P.depthBuffer&&P.stencilBuffer){const re=Qe(P);Y&&Be(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,P.width,P.height):Be(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const re=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ae=0;ae<re.length;ae++){const ce=re[ae],B=s.convert(ce.format,ce.colorSpace),te=s.convert(ce.type),X=D(ce.internalFormat,B,te,ce.colorSpace),ue=Qe(P);Y&&Be(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,X,P.width,P.height):Be(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,X,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,X,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),H(P.depthTexture,0);const re=n.get(P.depthTexture).__webglTexture,ae=Qe(P);if(P.depthTexture.format===Wn)Be(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(P.depthTexture.format===Di)Be(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function me(I){const P=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ie(P.__webglFramebuffer,I)}else if(Y){P.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[re]),P.__webglDepthbuffer[re]=i.createRenderbuffer(),pe(P.__webglDepthbuffer[re],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),pe(P.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,P,Y){const re=n.get(I);P!==void 0&&oe(re.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),Y!==void 0&&me(I)}function Je(I){const P=I.texture,Y=n.get(I),re=n.get(P);I.addEventListener("dispose",T),I.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=P.version,o.memory.textures++);const ae=I.isWebGLCubeRenderTarget===!0,ce=I.isWebGLMultipleRenderTargets===!0,B=M(I)||a;if(ae){Y.__webglFramebuffer=[];for(let te=0;te<6;te++)Y.__webglFramebuffer[te]=i.createFramebuffer()}else{if(Y.__webglFramebuffer=i.createFramebuffer(),ce)if(r.drawBuffers){const te=I.texture;for(let X=0,ue=te.length;X<ue;X++){const de=n.get(te[X]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Be(I)===!1){const te=ce?P:[P];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let X=0;X<te.length;X++){const ue=te[X];Y.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[X]);const de=s.convert(ue.format,ue.colorSpace),_e=s.convert(ue.type),fe=D(ue.internalFormat,de,_e,ue.colorSpace,I.isXRRenderTarget===!0),ge=Qe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,fe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,Y.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Z(i.TEXTURE_CUBE_MAP,P,B);for(let te=0;te<6;te++)oe(Y.__webglFramebuffer[te],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te);b(P,B)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const te=I.texture;for(let X=0,ue=te.length;X<ue;X++){const de=te[X],_e=n.get(de);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Z(i.TEXTURE_2D,de,B),oe(Y.__webglFramebuffer,I,de,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D),b(de,B)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,re.__webglTexture),Z(te,P,B),oe(Y.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,te),b(P,B)&&w(te),t.unbindTexture()}I.depthBuffer&&me(I)}function Ze(I){const P=M(I)||a,Y=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let re=0,ae=Y.length;re<ae;re++){const ce=Y[re];if(b(ce,P)){const B=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=n.get(ce).__webglTexture;t.bindTexture(B,te),w(B),t.unbindTexture()}}}function it(I){if(a&&I.samples>0&&Be(I)===!1){const P=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Y=I.width,re=I.height;let ae=i.COLOR_BUFFER_BIT;const ce=[],B=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(I),X=I.isWebGLMultipleRenderTargets===!0;if(X)for(let ue=0;ue<P.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ue=0;ue<P.length;ue++){ce.push(i.COLOR_ATTACHMENT0+ue),I.depthBuffer&&ce.push(B);const de=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(de===!1&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),X&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]),de===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[B]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[B])),X){const _e=n.get(P[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,Y,re,0,0,Y,re,ae,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ue=0;ue<P.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);const de=n.get(P[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function Qe(I){return Math.min(f,I.samples)}function Be(I){const P=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function je(I){const P=o.render.frame;p.get(I)!==P&&(p.set(I,P),I.update())}function dt(I,P){const Y=I.colorSpace,re=I.format,ae=I.type;return I.isCompressedTexture===!0||I.format===ro||Y!==rn&&Y!==jn&&(Y===Te?a===!1?e.has("EXT_sRGB")===!0&&re===jt?(I.format=ro,I.minFilter=Nt,I.generateMipmaps=!1):P=Lu.sRGBToLinear(P):(re!==jt||ae!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),P}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Ae,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Be}function Ev(i,e,t){const n=t.isWebGL2;function r(s,o=jn){let a;if(s===Xn)return i.UNSIGNED_BYTE;if(s===ud)return i.UNSIGNED_SHORT_4_4_4_4;if(s===fd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===od)return i.BYTE;if(s===ld)return i.SHORT;if(s===bu)return i.UNSIGNED_SHORT;if(s===cd)return i.INT;if(s===Gn)return i.UNSIGNED_INT;if(s===Hn)return i.FLOAT;if(s===sr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hd)return i.ALPHA;if(s===jt)return i.RGBA;if(s===dd)return i.LUMINANCE;if(s===pd)return i.LUMINANCE_ALPHA;if(s===Wn)return i.DEPTH_COMPONENT;if(s===Di)return i.DEPTH_STENCIL;if(s===ro)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===md)return i.RED;if(s===gd)return i.RED_INTEGER;if(s===_d)return i.RG;if(s===vd)return i.RG_INTEGER;if(s===xd)return i.RGBA_INTEGER;if(s===Js||s===Qs||s===ea||s===ta)if(o===Te)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jo||s===Xo||s===qo||s===Yo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ko||s===Zo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ko)return o===Te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zo)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jo||s===Qo||s===el||s===tl||s===nl||s===il||s===rl||s===sl||s===al||s===ol||s===ll||s===cl||s===ul||s===fl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Jo)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qo)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===el)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===il)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===al)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ol)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ll)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ul)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fl)return o===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===na)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===na)return o===Te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Md||s===hl||s===dl||s===pl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===na)return a.COMPRESSED_RED_RGTC1_EXT;if(s===hl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class bv extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vr extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wv={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),d=this._getHandJoint(l,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,p=.005;l.inputState.pinching&&h>m+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tv extends vn{constructor(e,t,n,r,s,o,a,u,l,c){if(c=c!==void 0?c:Wn,c!==Wn&&c!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Wn&&(n=Gn),n===void 0&&c===Di&&(n=Ai),super(null,r,s,o,a,u,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=u!==void 0?u:St,this.flipY=!1,this.generateMipmaps=!1}}class Av extends Zn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",u=1,l=null,c=null,f=null,h=null,m=null,p=null;const _=t.getContextAttributes();let g=null,d=null;const x=[],v=[],M=new Set,y=new Map,b=new Dt;b.layers.enable(1),b.viewport=new Ke;const w=new Dt;w.layers.enable(2),w.viewport=new Ke;const D=[b,w],E=new bv;E.layers.enable(1),E.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=x[W];return q===void 0&&(q=new Ta,x[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=x[W];return q===void 0&&(q=new Ta,x[W]=q),q.getGripSpace()},this.getHand=function(W){let q=x[W];return q===void 0&&(q=new Ta,x[W]=q),q.getHandSpace()};function T(W){const q=v.indexOf(W.inputSource);if(q===-1)return;const ie=x[q];ie!==void 0&&(ie.update(W.inputSource,W.frame,l||o),ie.dispatchEvent({type:W.type,data:W.inputSource}))}function S(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",S),r.removeEventListener("inputsourceschange",R);for(let W=0;W<x.length;W++){const q=v[W];q!==null&&(v[W]=null,x[W].disconnect(q))}A=null,F=null,e.setRenderTarget(g),m=null,h=null,f=null,r=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",S),r.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),d=new qn(m.framebufferWidth,m.framebufferHeight,{format:jt,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,ie=null,Z=null;_.depth&&(Z=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?Di:Wn,ie=_.stencil?Ai:Gn);const O={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(O),r.updateRenderState({layers:[h]}),d=new qn(h.textureWidth,h.textureHeight,{format:jt,type:Xn,depthTexture:new Tv(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const xe=e.properties.get(d);xe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(u),l=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(W){for(let q=0;q<W.removed.length;q++){const ie=W.removed[q],Z=v.indexOf(ie);Z>=0&&(v[Z]=null,x[Z].disconnect(ie))}for(let q=0;q<W.added.length;q++){const ie=W.added[q];let Z=v.indexOf(ie);if(Z===-1){for(let xe=0;xe<x.length;xe++)if(xe>=v.length){v.push(ie),Z=xe;break}else if(v[xe]===null){v[xe]=ie,Z=xe;break}if(Z===-1)break}const O=x[Z];O&&O.connect(ie)}}const C=new V,k=new V;function N(W,q,ie){C.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(ie.matrixWorld);const Z=C.distanceTo(k),O=q.projectionMatrix.elements,xe=ie.projectionMatrix.elements,ye=O[14]/(O[10]-1),oe=O[14]/(O[10]+1),pe=(O[9]+1)/O[5],Ie=(O[9]-1)/O[5],me=(O[8]-1)/O[0],Ae=(xe[8]+1)/xe[0],Je=ye*me,Ze=ye*Ae,it=Z/(-me+Ae),Qe=it*-me;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Qe),W.translateZ(it),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Be=ye+it,je=oe+it,dt=Je-Qe,I=Ze+(Z-Qe),P=pe*oe/je*Be,Y=Ie*oe/je*Be;W.projectionMatrix.makePerspective(dt,I,P,Y,Be,je),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function U(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;E.near=w.near=b.near=W.near,E.far=w.far=b.far=W.far,(A!==E.near||F!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,F=E.far);const q=W.parent,ie=E.cameras;U(E,q);for(let Z=0;Z<ie.length;Z++)U(ie[Z],q);ie.length===2?N(E,b,w):E.projectionMatrix.copy(b.projectionMatrix),z(W,E,q)};function z(W,q,ie){ie===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const Z=W.children;for(let O=0,xe=Z.length;O<xe;O++)Z[O].updateMatrixWorld(!0);W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=so*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return u},this.setFoveation=function(W){u=W,h!==null&&(h.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.getPlanes=function(){return M};let H=null;function ne(W,q){if(c=q.getViewerPose(l||o),p=q,c!==null){const ie=c.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Z=!1;ie.length!==E.cameras.length&&(E.cameras.length=0,Z=!0);for(let O=0;O<ie.length;O++){const xe=ie[O];let ye=null;if(m!==null)ye=m.getViewport(xe);else{const pe=f.getViewSubImage(h,xe);ye=pe.viewport,O===0&&(e.setRenderTargetTextures(d,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(d))}let oe=D[O];oe===void 0&&(oe=new Dt,oe.layers.enable(O),oe.viewport=new Ke,D[O]=oe),oe.matrix.fromArray(xe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(xe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ye.x,ye.y,ye.width,ye.height),O===0&&(E.matrix.copy(oe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Z===!0&&E.cameras.push(oe)}}for(let ie=0;ie<x.length;ie++){const Z=v[ie],O=x[ie];Z!==null&&O!==void 0&&O.update(Z,q,l||o)}if(H&&H(W,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ie=null;for(const Z of M)q.detectedPlanes.has(Z)||(ie===null&&(ie=[]),ie.push(Z));if(ie!==null)for(const Z of ie)M.delete(Z),y.delete(Z),n.dispatchEvent({type:"planeremoved",data:Z});for(const Z of q.detectedPlanes)if(!M.has(Z))M.add(Z),y.set(Z,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Z});else{const O=y.get(Z);Z.lastChangedTime>O&&(y.set(Z,Z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Z}))}}p=null}const K=new Gu;K.setAnimationLoop(ne),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}}function Rv(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Bu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),p(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),_(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?u(g,d,x,v):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===bt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===bt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function u(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bt&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Cv(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function l(x,v){let M=r[x.id];M===void 0&&(p(x),M=c(x),r[x.id]=M,x.addEventListener("dispose",g));const y=v.program;n.updateUBOMapping(x,y);const b=e.render.frame;s[x.id]!==b&&(h(x),s[x.id]=b)}function c(x){const v=f();x.__bindingPointIndex=v;const M=i.createBuffer(),y=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],M=x.uniforms,y=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,w=M.length;b<w;b++){const D=M[b];if(m(D,b,y)===!0){const E=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let T=0;T<A.length;T++){const S=A[T],R=_(S);typeof S=="number"?(D.__data[0]=S,i.bufferSubData(i.UNIFORM_BUFFER,E+F,D.__data)):S.isMatrix3?(D.__data[0]=S.elements[0],D.__data[1]=S.elements[1],D.__data[2]=S.elements[2],D.__data[3]=S.elements[0],D.__data[4]=S.elements[3],D.__data[5]=S.elements[4],D.__data[6]=S.elements[5],D.__data[7]=S.elements[0],D.__data[8]=S.elements[6],D.__data[9]=S.elements[7],D.__data[10]=S.elements[8],D.__data[11]=S.elements[0]):(S.toArray(D.__data,F),F+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,D.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,v,M){const y=x.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const b=Array.isArray(y)?y:[y],w=[];for(let D=0;D<b.length;D++)w.push(b[D].clone());M[v]=w}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const b=Array.isArray(M[v])?M[v]:[M[v]],w=Array.isArray(y)?y:[y];for(let D=0;D<b.length;D++){const E=b[D];if(E.equals(w[D])===!1)return E.copy(w[D]),!0}}return!1}function p(x){const v=x.uniforms;let M=0;const y=16;let b=0;for(let w=0,D=v.length;w<D;w++){const E=v[w],A={boundary:0,storage:0},F=Array.isArray(E.value)?E.value:[E.value];for(let T=0,S=F.length;T<S;T++){const R=F[T],C=_(R);A.boundary+=C.boundary,A.storage+=C.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,w>0){b=M%y;const T=y-b;b!==0&&T-A.boundary<0&&(M+=y-b,E.__offset=M)}M+=A.storage}return b=M%y,b>0&&(M+=y-b),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:u,update:l,dispose:d}}function Pv(){const i=ss("canvas");return i.style.display="block",i}class ju{constructor(e={}){const{canvas:t=Pv(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let m=null,p=null;const _=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Te,this.useLegacyLights=!0,this.toneMapping=_n,this.toneMappingExposure=1;const d=this;let x=!1,v=0,M=0,y=null,b=-1,w=null;const D=new Ke,E=new Ke;let A=null,F=t.width,T=t.height,S=1,R=null,C=null;const k=new Ke(0,0,F,T),N=new Ke(0,0,F,T);let U=!1;const z=new Eo;let H=!1,ne=!1,K=null;const W=new at,q=new V,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return y===null?S:1}let O=n;function xe(L,j){for(let Q=0;Q<L.length;Q++){const $=L[Q],ee=t.getContext($,j);if(ee!==null)return ee}return null}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mo}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const j=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&j.shift(),O=xe(j,L),O===null)throw xe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ye,oe,pe,Ie,me,Ae,Je,Ze,it,Qe,Be,je,dt,I,P,Y,re,ae,ce,B,te,X,ue,de;function _e(){ye=new Gg(O),oe=new Ig(O,ye,e),ye.init(oe),X=new Ev(O,ye,oe),pe=new Mv(O,ye,oe),Ie=new Wg(O),me=new ov,Ae=new Sv(O,ye,pe,me,oe,X,Ie),Je=new Ng(d),Ze=new zg(d),it=new tp(O,oe),ue=new Dg(O,ye,it,oe),Qe=new Hg(O,it,Ie,ue),Be=new qg(O,Qe,it,Ie),ce=new Xg(O,oe,Ae),Y=new Og(me),je=new av(d,Je,Ze,ye,oe,ue,Y),dt=new Rv(d,me),I=new cv,P=new mv(ye,oe),ae=new Lg(d,Je,Ze,pe,Be,h,u),re=new yv(d,Be,oe),de=new Cv(O,Ie,oe,pe),B=new Ug(O,ye,Ie,oe),te=new Vg(O,ye,Ie,oe),Ie.programs=je.programs,d.capabilities=oe,d.extensions=ye,d.properties=me,d.renderLists=I,d.shadowMap=re,d.state=pe,d.info=Ie}_e();const fe=new Av(d,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const L=ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(L){L!==void 0&&(S=L,this.setSize(F,T,!1))},this.getSize=function(L){return L.set(F,T)},this.setSize=function(L,j,Q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,T=j,t.width=Math.floor(L*S),t.height=Math.floor(j*S),Q===!0&&(t.style.width=L+"px",t.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(F*S,T*S).floor()},this.setDrawingBufferSize=function(L,j,Q){F=L,T=j,S=Q,t.width=Math.floor(L*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,j,Q,$){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,j,Q,$),pe.viewport(D.copy(k).multiplyScalar(S).floor())},this.getScissor=function(L){return L.copy(N)},this.setScissor=function(L,j,Q,$){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,j,Q,$),pe.scissor(E.copy(N).multiplyScalar(S).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(L){pe.setScissorTest(U=L)},this.setOpaqueSort=function(L){R=L},this.setTransparentSort=function(L){C=L},this.getClearColor=function(L){return L.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(L=!0,j=!0,Q=!0){let $=0;L&&($|=O.COLOR_BUFFER_BIT),j&&($|=O.DEPTH_BUFFER_BIT),Q&&($|=O.STENCIL_BUFFER_BIT),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),I.dispose(),P.dispose(),me.dispose(),Je.dispose(),Ze.dispose(),Be.dispose(),ue.dispose(),de.dispose(),je.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ve),fe.removeEventListener("sessionend",Ge),K&&(K.dispose(),K=null),He.stop()};function ge(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const L=Ie.autoReset,j=re.enabled,Q=re.autoUpdate,$=re.needsUpdate,ee=re.type;_e(),Ie.autoReset=L,re.enabled=j,re.autoUpdate=Q,re.needsUpdate=$,re.type=ee}function Pe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function et(L){const j=L.target;j.removeEventListener("dispose",et),G(j)}function G(L){J(L),me.remove(L)}function J(L){const j=me.get(L).programs;j!==void 0&&(j.forEach(function(Q){je.releaseProgram(Q)}),L.isShaderMaterial&&je.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,Q,$,ee,Me){j===null&&(j=ie);const Se=ee.isMesh&&ee.matrixWorld.determinant()<0,be=rf(L,j,Q,$,ee);pe.setMaterial($,Se);let Re=Q.index,Le=1;$.wireframe===!0&&(Re=Qe.getWireframeAttribute(Q),Le=2);const De=Q.drawRange,Oe=Q.attributes.position;let ke=De.start*Le,xt=(De.start+De.count)*Le;Me!==null&&(ke=Math.max(ke,Me.start*Le),xt=Math.min(xt,(Me.start+Me.count)*Le)),Re!==null?(ke=Math.max(ke,0),xt=Math.min(xt,Re.count)):Oe!=null&&(ke=Math.max(ke,0),xt=Math.min(xt,Oe.count));const kt=xt-ke;if(kt<0||kt===1/0)return;ue.setup(ee,$,be,Q,Re);let Dn,rt=B;if(Re!==null&&(Dn=it.get(Re),rt=te,rt.setIndex(Dn)),ee.isMesh)$.wireframe===!0?(pe.setLineWidth($.wireframeLinewidth*Z()),rt.setMode(O.LINES)):rt.setMode(O.TRIANGLES);else if(ee.isLine){let Ne=$.linewidth;Ne===void 0&&(Ne=1),pe.setLineWidth(Ne*Z()),ee.isLineSegments?rt.setMode(O.LINES):ee.isLineLoop?rt.setMode(O.LINE_LOOP):rt.setMode(O.LINE_STRIP)}else ee.isPoints?rt.setMode(O.POINTS):ee.isSprite&&rt.setMode(O.TRIANGLES);if(ee.isInstancedMesh)rt.renderInstances(ke,kt,ee.count);else if(Q.isInstancedBufferGeometry){const Ne=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Gs=Math.min(Q.instanceCount,Ne);rt.renderInstances(ke,kt,Gs)}else rt.render(ke,kt)},this.compile=function(L,j){function Q($,ee,Me){$.transparent===!0&&$.side===mn&&$.forceSinglePass===!1?($.side=bt,$.needsUpdate=!0,yr($,ee,Me),$.side=An,$.needsUpdate=!0,yr($,ee,Me),$.side=mn):yr($,ee,Me)}p=P.get(L),p.init(),g.push(p),L.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(d.useLegacyLights),L.traverse(function($){const ee=$.material;if(ee)if(Array.isArray(ee))for(let Me=0;Me<ee.length;Me++){const Se=ee[Me];Q(Se,L,$)}else Q(ee,L,$)}),g.pop(),p=null};let se=null;function he(L){se&&se(L)}function ve(){He.stop()}function Ge(){He.start()}const He=new Gu;He.setAnimationLoop(he),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(L){se=L,fe.setAnimationLoop(L),L===null?He.stop():He.start()},fe.addEventListener("sessionstart",ve),fe.addEventListener("sessionend",Ge),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),L.isScene===!0&&L.onBeforeRender(d,L,j,y),p=P.get(L,g.length),p.init(),g.push(p),W.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z.setFromProjectionMatrix(W),ne=this.localClippingEnabled,H=Y.init(this.clippingPlanes,ne),m=I.get(L,_.length),m.init(),_.push(m),pt(L,j,0,d.sortObjects),m.finish(),d.sortObjects===!0&&m.sort(R,C),H===!0&&Y.beginShadows();const Q=p.state.shadowsArray;if(re.render(Q,L,j),H===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(m,L),p.setupLights(d.useLegacyLights),j.isArrayCamera){const $=j.cameras;for(let ee=0,Me=$.length;ee<Me;ee++){const Se=$[ee];yn(m,L,Se,Se.viewport)}}else yn(m,L,j);y!==null&&(Ae.updateMultisampleRenderTarget(y),Ae.updateRenderTargetMipmap(y)),L.isScene===!0&&L.onAfterRender(d,L,j),ue.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function pt(L,j,Q,$){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)Q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||z.intersectsSprite(L)){$&&q.setFromMatrixPosition(L.matrixWorld).applyMatrix4(W);const Se=Be.update(L),be=L.material;be.visible&&m.push(L,Se,be,Q,q.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||z.intersectsObject(L))){L.isSkinnedMesh&&L.skeleton.frame!==Ie.render.frame&&(L.skeleton.update(),L.skeleton.frame=Ie.render.frame);const Se=Be.update(L),be=L.material;if($&&(Se.boundingSphere===null&&Se.computeBoundingSphere(),q.copy(Se.boundingSphere.center).applyMatrix4(L.matrixWorld).applyMatrix4(W)),Array.isArray(be)){const Re=Se.groups;for(let Le=0,De=Re.length;Le<De;Le++){const Oe=Re[Le],ke=be[Oe.materialIndex];ke&&ke.visible&&m.push(L,Se,ke,Q,q.z,Oe)}}else be.visible&&m.push(L,Se,be,Q,q.z,null)}}const Me=L.children;for(let Se=0,be=Me.length;Se<be;Se++)pt(Me[Se],j,Q,$)}function yn(L,j,Q,$){const ee=L.opaque,Me=L.transmissive,Se=L.transparent;p.setupLightsView(Q),H===!0&&Y.setGlobalState(d.clippingPlanes,Q),Me.length>0&&tt(ee,Me,j,Q),$&&pe.viewport(D.copy($)),ee.length>0&&Ut(ee,j,Q),Me.length>0&&Ut(Me,j,Q),Se.length>0&&Ut(Se,j,Q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function tt(L,j,Q,$){if(K===null){const be=oe.isWebGL2;K=new qn(1024,1024,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?sr:Xn,minFilter:rr,samples:be&&a===!0?4:0})}const ee=d.getRenderTarget();d.setRenderTarget(K),d.clear();const Me=d.toneMapping;d.toneMapping=_n,Ut(L,Q,$),Ae.updateMultisampleRenderTarget(K),Ae.updateRenderTargetMipmap(K);let Se=!1;for(let be=0,Re=j.length;be<Re;be++){const Le=j[be],De=Le.object,Oe=Le.geometry,ke=Le.material,xt=Le.group;if(ke.side===mn&&De.layers.test($.layers)){const kt=ke.side;ke.side=bt,ke.needsUpdate=!0,Yt(De,Q,$,Oe,ke,xt),ke.side=kt,ke.needsUpdate=!0,Se=!0}}Se===!0&&(Ae.updateMultisampleRenderTarget(K),Ae.updateRenderTargetMipmap(K)),d.setRenderTarget(ee),d.toneMapping=Me}function Ut(L,j,Q){const $=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Me=L.length;ee<Me;ee++){const Se=L[ee],be=Se.object,Re=Se.geometry,Le=$===null?Se.material:$,De=Se.group;be.layers.test(Q.layers)&&Yt(be,j,Q,Re,Le,De)}}function Yt(L,j,Q,$,ee,Me){L.onBeforeRender(d,j,Q,$,ee,Me),L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(d,j,Q,$,L,Me),ee.transparent===!0&&ee.side===mn&&ee.forceSinglePass===!1?(ee.side=bt,ee.needsUpdate=!0,d.renderBufferDirect(Q,j,$,ee,L,Me),ee.side=An,ee.needsUpdate=!0,d.renderBufferDirect(Q,j,$,ee,L,Me),ee.side=mn):d.renderBufferDirect(Q,j,$,ee,L,Me),L.onAfterRender(d,j,Q,$,ee,Me)}function yr(L,j,Q){j.isScene!==!0&&(j=ie);const $=me.get(L),ee=p.state.lights,Me=p.state.shadowsArray,Se=ee.state.version,be=je.getParameters(L,ee.state,Me,j,Q),Re=je.getProgramCacheKey(be);let Le=$.programs;$.environment=L.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(L.isMeshStandardMaterial?Ze:Je).get(L.envMap||$.environment),Le===void 0&&(L.addEventListener("dispose",et),Le=new Map,$.programs=Le);let De=Le.get(Re);if(De!==void 0){if($.currentProgram===De&&$.lightsStateVersion===Se)return Lo(L,be),De}else be.uniforms=je.getUniforms(L),L.onBuild(Q,be,d),L.onBeforeCompile(be,d),De=je.acquireProgram(be,Re),Le.set(Re,De),$.uniforms=be.uniforms;const Oe=$.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Oe.clippingPlanes=Y.uniform),Lo(L,be),$.needsLights=af(L),$.lightsStateVersion=Se,$.needsLights&&(Oe.ambientLightColor.value=ee.state.ambient,Oe.lightProbe.value=ee.state.probe,Oe.directionalLights.value=ee.state.directional,Oe.directionalLightShadows.value=ee.state.directionalShadow,Oe.spotLights.value=ee.state.spot,Oe.spotLightShadows.value=ee.state.spotShadow,Oe.rectAreaLights.value=ee.state.rectArea,Oe.ltc_1.value=ee.state.rectAreaLTC1,Oe.ltc_2.value=ee.state.rectAreaLTC2,Oe.pointLights.value=ee.state.point,Oe.pointLightShadows.value=ee.state.pointShadow,Oe.hemisphereLights.value=ee.state.hemi,Oe.directionalShadowMap.value=ee.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Oe.spotShadowMap.value=ee.state.spotShadowMap,Oe.spotLightMatrix.value=ee.state.spotLightMatrix,Oe.spotLightMap.value=ee.state.spotLightMap,Oe.pointShadowMap.value=ee.state.pointShadowMap,Oe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ke=De.getUniforms(),xt=Zr.seqWithValue(ke.seq,Oe);return $.currentProgram=De,$.uniformsList=xt,De}function Lo(L,j){const Q=me.get(L);Q.outputColorSpace=j.outputColorSpace,Q.instancing=j.instancing,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function rf(L,j,Q,$,ee){j.isScene!==!0&&(j=ie),Ae.resetTextureUnits();const Me=j.fog,Se=$.isMeshStandardMaterial?j.environment:null,be=y===null?d.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:rn,Re=($.isMeshStandardMaterial?Ze:Je).get($.envMap||Se),Le=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,De=!!$.normalMap&&!!Q.attributes.tangent,Oe=!!Q.morphAttributes.position,ke=!!Q.morphAttributes.normal,xt=!!Q.morphAttributes.color,kt=$.toneMapped?d.toneMapping:_n,Dn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,rt=Dn!==void 0?Dn.length:0,Ne=me.get($),Gs=p.state.lights;if(H===!0&&(ne===!0||L!==w)){const Rt=L===w&&$.id===b;Y.setState($,L,Rt)}let ut=!1;$.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Gs.state.version||Ne.outputColorSpace!==be||ee.isInstancedMesh&&Ne.instancing===!1||!ee.isInstancedMesh&&Ne.instancing===!0||ee.isSkinnedMesh&&Ne.skinning===!1||!ee.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Re||$.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Y.numPlanes||Ne.numIntersection!==Y.numIntersection)||Ne.vertexAlphas!==Le||Ne.vertexTangents!==De||Ne.morphTargets!==Oe||Ne.morphNormals!==ke||Ne.morphColors!==xt||Ne.toneMapping!==kt||oe.isWebGL2===!0&&Ne.morphTargetsCount!==rt)&&(ut=!0):(ut=!0,Ne.__version=$.version);let Un=Ne.currentProgram;ut===!0&&(Un=yr($,j,ee));let Do=!1,Bi=!1,Hs=!1;const yt=Un.getUniforms(),In=Ne.uniforms;if(pe.useProgram(Un.program)&&(Do=!0,Bi=!0,Hs=!0),$.id!==b&&(b=$.id,Bi=!0),Do||w!==L){if(yt.setValue(O,"projectionMatrix",L.projectionMatrix),oe.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),w!==L&&(w=L,Bi=!0,Hs=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Rt=yt.map.cameraPosition;Rt!==void 0&&Rt.setValue(O,q.setFromMatrixPosition(L.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(O,"isOrthographic",L.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ee.isSkinnedMesh)&&yt.setValue(O,"viewMatrix",L.matrixWorldInverse)}if(ee.isSkinnedMesh){yt.setOptional(O,ee,"bindMatrix"),yt.setOptional(O,ee,"bindMatrixInverse");const Rt=ee.skeleton;Rt&&(oe.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(O,"boneTexture",Rt.boneTexture,Ae),yt.setValue(O,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vs=Q.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0&&oe.isWebGL2===!0)&&ce.update(ee,Q,Un),(Bi||Ne.receiveShadow!==ee.receiveShadow)&&(Ne.receiveShadow=ee.receiveShadow,yt.setValue(O,"receiveShadow",ee.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(In.envMap.value=Re,In.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Bi&&(yt.setValue(O,"toneMappingExposure",d.toneMappingExposure),Ne.needsLights&&sf(In,Hs),Me&&$.fog===!0&&dt.refreshFogUniforms(In,Me),dt.refreshMaterialUniforms(In,$,S,T,K),Zr.upload(O,Ne.uniformsList,In,Ae)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Zr.upload(O,Ne.uniformsList,In,Ae),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(O,"center",ee.center),yt.setValue(O,"modelViewMatrix",ee.modelViewMatrix),yt.setValue(O,"normalMatrix",ee.normalMatrix),yt.setValue(O,"modelMatrix",ee.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Rt=$.uniformsGroups;for(let Ws=0,of=Rt.length;Ws<of;Ws++)if(oe.isWebGL2){const Uo=Rt[Ws];de.update(Uo,Un),de.bind(Uo,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function sf(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function af(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(L,j,Q){me.get(L.texture).__webglTexture=j,me.get(L.depthTexture).__webglTexture=Q;const $=me.get(L);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,j){const Q=me.get(L);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,Q=0){y=L,v=j,M=Q;let $=!0,ee=null,Me=!1,Se=!1;if(L){const Re=me.get(L);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(O.FRAMEBUFFER,null),$=!1):Re.__webglFramebuffer===void 0?Ae.setupRenderTarget(L):Re.__hasExternalTextures&&Ae.rebindTextures(L,me.get(L.texture).__webglTexture,me.get(L.depthTexture).__webglTexture);const Le=L.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const De=me.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ee=De[j],Me=!0):oe.isWebGL2&&L.samples>0&&Ae.useMultisampledRTT(L)===!1?ee=me.get(L).__webglMultisampledFramebuffer:ee=De,D.copy(L.viewport),E.copy(L.scissor),A=L.scissorTest}else D.copy(k).multiplyScalar(S).floor(),E.copy(N).multiplyScalar(S).floor(),A=U;if(pe.bindFramebuffer(O.FRAMEBUFFER,ee)&&oe.drawBuffers&&$&&pe.drawBuffers(L,ee),pe.viewport(D),pe.scissor(E),pe.setScissorTest(A),Me){const Re=me.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re.__webglTexture,Q)}else if(Se){const Re=me.get(L.texture),Le=j||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,Q||0,Le)}b=-1},this.readRenderTargetPixels=function(L,j,Q,$,ee,Me,Se){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){pe.bindFramebuffer(O.FRAMEBUFFER,be);try{const Re=L.texture,Le=Re.format,De=Re.type;if(Le!==jt&&X.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=De===sr&&(ye.has("EXT_color_buffer_half_float")||oe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(De!==Xn&&X.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Hn&&(oe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-$&&Q>=0&&Q<=L.height-ee&&O.readPixels(j,Q,$,ee,X.convert(Le),X.convert(De),Me)}finally{const Re=y!==null?me.get(y).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(L,j,Q=0){const $=Math.pow(2,-Q),ee=Math.floor(j.image.width*$),Me=Math.floor(j.image.height*$);Ae.setTexture2D(j,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,L.x,L.y,ee,Me),pe.unbindTexture()},this.copyTextureToTexture=function(L,j,Q,$=0){const ee=j.image.width,Me=j.image.height,Se=X.convert(Q.format),be=X.convert(Q.type);Ae.setTexture2D(Q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,L.x,L.y,ee,Me,Se,be,j.image.data):j.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,L.x,L.y,j.mipmaps[0].width,j.mipmaps[0].height,Se,j.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,$,L.x,L.y,Se,be,j.image),$===0&&Q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(L,j,Q,$,ee=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=L.max.x-L.min.x+1,Se=L.max.y-L.min.y+1,be=L.max.z-L.min.z+1,Re=X.convert($.format),Le=X.convert($.type);let De;if($.isData3DTexture)Ae.setTexture3D($,0),De=O.TEXTURE_3D;else if($.isDataArrayTexture)Ae.setTexture2DArray($,0),De=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const Oe=O.getParameter(O.UNPACK_ROW_LENGTH),ke=O.getParameter(O.UNPACK_IMAGE_HEIGHT),xt=O.getParameter(O.UNPACK_SKIP_PIXELS),kt=O.getParameter(O.UNPACK_SKIP_ROWS),Dn=O.getParameter(O.UNPACK_SKIP_IMAGES),rt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,L.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,L.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,L.min.z),Q.isDataTexture||Q.isData3DTexture?O.texSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,be,Re,Le,rt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,be,Re,rt.data)):O.texSubImage3D(De,ee,j.x,j.y,j.z,Me,Se,be,Re,Le,rt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Oe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ke),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dn),ee===0&&$.generateMipmaps&&O.generateMipmap(De),pe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ae.setTextureCube(L,0):L.isData3DTexture?Ae.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ae.setTexture2DArray(L,0):Ae.setTexture2D(L,0),pe.unbindTexture()},this.resetState=function(){v=0,M=0,y=null,pe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?$n:wu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$n?Te:rn}}class Lv extends ju{}Lv.prototype.isWebGL1Renderer=!0;class Dv extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Zi extends Ln{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+a,Math.PI);let l=0;const c=[],f=new V,h=new V,m=[],p=[],_=[],g=[];for(let d=0;d<=n;d++){const x=[],v=d/n;let M=0;d===0&&o===0?M=.5/t:d===n&&u===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const b=y/t;f.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),p.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),g.push(b+M,1-v),x.push(l++)}c.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const v=c[d][x+1],M=c[d][x],y=c[d+1][x],b=c[d+1][x+1];(d!==0||o>0)&&m.push(v,M,b),(d!==n-1||u<Math.PI)&&m.push(M,y,b)}this.setIndex(m),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uv extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xu extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Aa=new at,tc=new V,nc=new V;class Iv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ic=new at,Wi=new V,Ra=new V;class Ov extends Iv{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),Ra.copy(n.position),Ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ra),n.updateMatrixWorld(),r.makeTranslation(-Wi.x,-Wi.y,-Wi.z),ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic)}}class Nv extends Xu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ov}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fv extends Xu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);const sc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Bv{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,u;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return u?u(c):c},this.setURLModifier=function(c){return u=c,this},this.addHandler=function(c,f){return l.push(c,f),this},this.removeHandler=function(c){const f=l.indexOf(c);return f!==-1&&l.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],p=l[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return p}return null}}}const kv=new Bv;class qu{constructor(e){this.manager=e!==void 0?e:kv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const ac={};function Ca(i){i in ac||(ac[i]=!0,console.warn(i))}class zv extends qu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=oo("img");function u(){c(),sc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",u,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Gv{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yu=300,oc=1e3,Wr=1001,lc=1002,Hv=1006,Vv=1008,Wv=1009,$v=1023,jv=3e3,Pa=3001,La="",Da="srgb",_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function Ku(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function Xv(i,e,t){return Math.max(e,Math.min(t,i))}class Ji{constructor(e=0,t=0){Ji.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xv(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ds{constructor(){ds.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,u,l){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=u,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],l=n[1],c=n[4],f=n[7],h=n[2],m=n[5],p=n[8],_=r[0],g=r[3],d=r[6],x=r[1],v=r[4],M=r[7],y=r[2],b=r[5],w=r[8];return s[0]=o*_+a*x+u*y,s[3]=o*g+a*v+u*b,s[6]=o*d+a*M+u*w,s[1]=l*_+c*x+f*y,s[4]=l*g+c*v+f*b,s[7]=l*d+c*M+f*w,s[2]=h*_+m*x+p*y,s[5]=h*g+m*v+p*b,s[8]=h*d+m*M+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8];return t*o*c-t*a*l-n*s*c+n*a*u+r*s*l-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8],f=c*o-a*l,h=a*u-c*s,m=l*s-o*u,p=t*f+n*h+r*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(r*l-c*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(c*t-r*u)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*u-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*o+l*a)+o+e,-r*l,r*u,-r*(-l*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new ds;function Ia(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}let Mi;class qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=oo("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ia(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ia(t[n]/255)*255):t[n]=Ia(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Yv{constructor(e=null){this.isSource=!0,this.uuid=Ku(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class Tn extends Gv{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=Wr,r=Wr,s=Hv,o=Vv,a=$v,u=Wv,l=Tn.DEFAULT_ANISOTROPY,c=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ku(),this.name="",this.source=new Yv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ji(0,0),this.repeat=new Ji(1,1),this.center=new Ji(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ds,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Pa?Da:La),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Da?Pa:jv}set encoding(e){Ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pa?Da:La}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Yu;Tn.DEFAULT_ANISOTROPY=1;class Zv extends qu{constructor(e){super(e)}load(e,t,n,r){const s=new Tn,o=new zv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}const cc={type:"change"},Na={type:"start"},uc={type:"end"};class Jv extends Zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",je),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",je),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cc),n.update(),s=r.NONE},this.update=function(){const B=new V,te=new Yn().setFromUnitVectors(e.up,new V(0,1,0)),X=te.clone().invert(),ue=new V,de=new Yn,_e=2*Math.PI;return function(){const ge=n.object.position;B.copy(ge).sub(n.target),B.applyQuaternion(te),a.setFromVector3(B),n.autoRotate&&s===r.NONE&&E(w()),n.enableDamping?(a.theta+=u.theta*n.dampingFactor,a.phi+=u.phi*n.dampingFactor):(a.theta+=u.theta,a.phi+=u.phi);let Ee=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(Ee)&&isFinite(Pe)&&(Ee<-Math.PI?Ee+=_e:Ee>Math.PI&&(Ee-=_e),Pe<-Math.PI?Pe+=_e:Pe>Math.PI&&(Pe-=_e),Ee<=Pe?a.theta=Math.max(Ee,Math.min(Pe,a.theta)):a.theta=a.theta>(Ee+Pe)/2?Math.max(Ee,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),B.setFromSpherical(a),B.applyQuaternion(X),ge.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),c.set(0,0,0)),l=1,f||ue.distanceToSquared(n.object.position)>o||8*(1-de.dot(n.object.quaternion))>o?(n.dispatchEvent(cc),ue.copy(n.object.position),de.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",Ze),n.domElement.removeEventListener("wheel",Be),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",je),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new rc,u=new rc;let l=1;const c=new V;let f=!1;const h=new Ue,m=new Ue,p=new Ue,_=new Ue,g=new Ue,d=new Ue,x=new Ue,v=new Ue,M=new Ue,y=[],b={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function D(){return Math.pow(.95,n.zoomSpeed)}function E(B){u.theta-=B}function A(B){u.phi-=B}const F=function(){const B=new V;return function(X,ue){B.setFromMatrixColumn(ue,0),B.multiplyScalar(-X),c.add(B)}}(),T=function(){const B=new V;return function(X,ue){n.screenSpacePanning===!0?B.setFromMatrixColumn(ue,1):(B.setFromMatrixColumn(ue,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(X),c.add(B)}}(),S=function(){const B=new V;return function(X,ue){const de=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;B.copy(_e).sub(n.target);let fe=B.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),F(2*X*fe/de.clientHeight,n.object.matrix),T(2*ue*fe/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(X*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),T(ue*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(B){n.object.isPerspectiveCamera?l/=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*B)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(B){n.object.isPerspectiveCamera?l*=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/B)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(B){h.set(B.clientX,B.clientY)}function N(B){x.set(B.clientX,B.clientY)}function U(B){_.set(B.clientX,B.clientY)}function z(B){m.set(B.clientX,B.clientY),p.subVectors(m,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;E(2*Math.PI*p.x/te.clientHeight),A(2*Math.PI*p.y/te.clientHeight),h.copy(m),n.update()}function H(B){v.set(B.clientX,B.clientY),M.subVectors(v,x),M.y>0?R(D()):M.y<0&&C(D()),x.copy(v),n.update()}function ne(B){g.set(B.clientX,B.clientY),d.subVectors(g,_).multiplyScalar(n.panSpeed),S(d.x,d.y),_.copy(g),n.update()}function K(B){B.deltaY<0?C(D()):B.deltaY>0&&R(D()),n.update()}function W(B){let te=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(-n.keyPanSpeed,0),te=!0;break}te&&(B.preventDefault(),n.update())}function q(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const B=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);h.set(B,te)}}function ie(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const B=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);_.set(B,te)}}function Z(){const B=y[0].pageX-y[1].pageX,te=y[0].pageY-y[1].pageY,X=Math.sqrt(B*B+te*te);x.set(0,X)}function O(){n.enableZoom&&Z(),n.enablePan&&ie()}function xe(){n.enableZoom&&Z(),n.enableRotate&&q()}function ye(B){if(y.length==1)m.set(B.pageX,B.pageY);else{const X=ce(B),ue=.5*(B.pageX+X.x),de=.5*(B.pageY+X.y);m.set(ue,de)}p.subVectors(m,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;E(2*Math.PI*p.x/te.clientHeight),A(2*Math.PI*p.y/te.clientHeight),h.copy(m)}function oe(B){if(y.length===1)g.set(B.pageX,B.pageY);else{const te=ce(B),X=.5*(B.pageX+te.x),ue=.5*(B.pageY+te.y);g.set(X,ue)}d.subVectors(g,_).multiplyScalar(n.panSpeed),S(d.x,d.y),_.copy(g)}function pe(B){const te=ce(B),X=B.pageX-te.x,ue=B.pageY-te.y,de=Math.sqrt(X*X+ue*ue);v.set(0,de),M.set(0,Math.pow(v.y/x.y,n.zoomSpeed)),R(M.y),x.copy(v)}function Ie(B){n.enableZoom&&pe(B),n.enablePan&&oe(B)}function me(B){n.enableZoom&&pe(B),n.enableRotate&&ye(B)}function Ae(B){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",Je),n.domElement.addEventListener("pointerup",Ze)),Y(B),B.pointerType==="touch"?dt(B):it(B))}function Je(B){n.enabled!==!1&&(B.pointerType==="touch"?I(B):Qe(B))}function Ze(B){re(B),y.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(uc),s=r.NONE}function it(B){let te;switch(B.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case ii.DOLLY:if(n.enableZoom===!1)return;N(B),s=r.DOLLY;break;case ii.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;U(B),s=r.PAN}else{if(n.enableRotate===!1)return;k(B),s=r.ROTATE}break;case ii.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;k(B),s=r.ROTATE}else{if(n.enablePan===!1)return;U(B),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Na)}function Qe(B){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;z(B);break;case r.DOLLY:if(n.enableZoom===!1)return;H(B);break;case r.PAN:if(n.enablePan===!1)return;ne(B);break}}function Be(B){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(B.preventDefault(),n.dispatchEvent(Na),K(B),n.dispatchEvent(uc))}function je(B){n.enabled===!1||n.enablePan===!1||W(B)}function dt(B){switch(ae(B),y.length){case 1:switch(n.touches.ONE){case ri.ROTATE:if(n.enableRotate===!1)return;q(),s=r.TOUCH_ROTATE;break;case ri.PAN:if(n.enablePan===!1)return;ie(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(),s=r.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Na)}function I(B){switch(ae(B),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(B),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;oe(B),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(B),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(B),n.update();break;default:s=r.NONE}}function P(B){n.enabled!==!1&&B.preventDefault()}function Y(B){y.push(B)}function re(B){delete b[B.pointerId];for(let te=0;te<y.length;te++)if(y[te].pointerId==B.pointerId){y.splice(te,1);return}}function ae(B){let te=b[B.pointerId];te===void 0&&(te=new Ue,b[B.pointerId]=te),te.set(B.pageX,B.pageY)}function ce(B){const te=B.pointerId===y[0].pointerId?y[1]:y[0];return b[te.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",Ze),n.domElement.addEventListener("wheel",Be,{passive:!1}),this.update()}}const Qv=ot('<div class="globe-container w-full h-full">'),e0=i=>{let e;const[t,n]=$e(null),[r,s]=$e(null),[o,a]=$e(null),u=()=>{console.log("initializing three js");const f=e.clientWidth,h=e.clientHeight,m=new Dv,p=new Dt(75,f/h,.001,1e3),_=new ju;_.setSize(f,h),e.appendChild(_.domElement),new Zi(1,32,32),new as({color:5994437,wireframe:!0}),p.position.z=2;const g=new Zv().load("./images/1_earth_8k.jpg"),d=new Jv(p,_.domElement);d.enablePan=!1,d.minDistance=1.002,d.maxDistance=20,d.screenSpacePanning=!1,d.target=new V(0,0,0);const x=new Nv(16777215,1);x.position.set(10,10,10),m.add(x);const v=new Fv(4210752);m.add(v);const M=new Jt(new Zi(1,32,32),new Uv({map:g}));m.add(M);const y=()=>{requestAnimationFrame(y);const w=(p.position.distanceTo(d.target)-d.minDistance)/(2-d.minDistance);d.zoomSpeed=Math.min(Math.max(.001,w),5),d.rotateSpeed=.27,d.update(),d.update(),_.render(m,p)};y(),n(m),s(p),a(_)},l=(f,h)=>{const m=new as({color:16727040}),p=new Zi(.01,5,5),_=new Jt(p,m),g=(90-f)*(Math.PI/180),d=(h+180)*(Math.PI/180);return _.position.x=-Math.sin(g)*Math.cos(d),_.position.y=Math.cos(g),_.position.z=Math.sin(g)*Math.sin(d),_.rotation.set(0,0,Math.PI/2),_},c=()=>{const f=e.clientWidth,h=e.clientHeight;let m=r(),p=o();!m||!p||(m.aspect=f/h,m.updateProjectionMatrix(),p.setSize(f,h))};return nn(()=>(u(),window.addEventListener("resize",c),()=>{e.firstChild&&e.removeChild(e.firstChild),window.removeEventListener("resize",c)})),nn(()=>{let f=t(),h=r(),m=o(),p=i.circles?.();!f||!h||!m||!p||(console.log("updating pins",p?.length),f.children.filter(_=>_.userData.pin).forEach(_=>f?.remove(_)),p.forEach(_=>{if(_.location?.latitude&&_.location?.longitude){const g=l(_.location.latitude,_.location.longitude);g.userData.pin=!0,f?.add(g)}}),m.render(f,h))}),(()=>{const f=Qv(),h=e;return typeof h=="function"?Qc(h,f):e=f,f})()},t0=ot('<div class="flex flex-col h-screen"><nav class="bg-gray-200 p-2"><div class="flex"></div></nav><div class="flex flex-grow">'),n0=ot("<button>"),i0=ot("<div>About"),fc=ot("<div>"),r0=ot("<div>Video"),s0=ot("<div>Calendar"),a0=({onBack:i})=>{const e=Qf(),[t,n]=$e(["chat"]),r=["about","chat","video","calendar","map"],s=u=>({name:u});nn(()=>{let u=e?.circleId;if(!u)return;console.log("Opening circle with ID",u);let l=du.get(u);return u==="all"&&l.put({name:"All",picture:"./images/all.png"},()=>{console.log("Updating all circle.")}),l.once(c=>{if(c)console.log("Loading circle",JSON.stringify(c,null,2)),Ja(c);else{const f=s(u);l.put(f,()=>{console.log(`Circle with ID "${u}" created.`)}),Ja(c)}}),l.on((c,f)=>{console.log("test")}),()=>{l.off()}});const o=u=>{t().includes(u)?n(t().filter(l=>l!==u)):t().length<3&&n([...t(),u])},a=u=>{let l=t().indexOf(u),c=(t()[0]===u||t()[2]===u)&&t().length!==1,f="bg-blue-200";switch(l){default:case 0:f="bg-blue-300";break;case 1:f="bg-green-300";break;case 2:f="bg-red-300";break}return`${c?"min-w-96 w-96":"flex-grow"} ${f} order-${l+1}`};return(()=>{const u=t0(),l=u.firstChild,c=l.firstChild,f=l.nextSibling;return ze(u,Ye(Th,{onBack:i}),l),ze(c,()=>r.map(h=>(()=>{const m=n0();return m.$$click=()=>o(h),ze(m,()=>h.charAt(0).toUpperCase()+h.slice(1)),nt(()=>pn(m,`mr-2 px-4 py-2 rounded focus:outline-none ${t().includes(h)?"bg-blue-500 text-white":"bg-gray-300"}`)),m})())),ze(f,(()=>{const h=Xe(()=>!!t().includes("about"));return()=>h()&&(()=>{const m=i0();return nt(()=>pn(m,a("about"))),m})()})(),null),ze(f,(()=>{const h=Xe(()=>!!t().includes("chat"));return()=>h()&&(()=>{const m=fc();return ze(m,Ye(Ph,{})),nt(()=>pn(m,a("chat"))),m})()})(),null),ze(f,(()=>{const h=Xe(()=>!!t().includes("video"));return()=>h()&&(()=>{const m=r0();return nt(()=>pn(m,a("video"))),m})()})(),null),ze(f,(()=>{const h=Xe(()=>!!t().includes("calendar"));return()=>h()&&(()=>{const m=s0();return nt(()=>pn(m,a("calendar"))),m})()})(),null),ze(f,(()=>{const h=Xe(()=>!!t().includes("map"));return()=>h()&&(()=>{const m=fc();return ze(m,Ye(e0,{})),nt(()=>pn(m,a("map"))),m})()})(),null),u})()};Pn(["click"]);function o0(i){return _u({a:{fill:"none",viewBox:"0 0 24 24"},c:'<path fill="currentColor" d="M8.514 20h-4a2 2 0 01-2-2V6a2 2 0 012-2h4v2h-4v12h4v2z"/><path fill="currentColor" d="M13.842 17.385l1.42-1.408-3.92-3.953h9.144a1 1 0 100-2h-9.162l3.98-3.947-1.408-1.42-6.391 6.337 6.337 6.391z"/>'},i)}const l0=ot('<dialog class="bg-transparent"><div class="bg-white p-8 rounded-lg shadow-lg"><h2 class="text-2xl font-bold mb-6">Log in / Sign up</h2><div class="mb-4"><label for="username" class="block text-sm mb-2">Username:</label><input id="username" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md"></div><div class="mb-6"><label for="password" class="block text-sm mb-2">Password:</label><input id="password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md"></div><button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600">Log in</button><button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 ml-4">Sign up'),c0=ot('<button type="button" class="absolute bg-heading top-4 right-2 p-1 text-white font-semibold rounded-md ">'),u0=()=>{ir.user().leave(),localStorage.removeItem("userCredentials"),gu(!1),mu(null)};function f0(){const[i,e]=$e(""),[t,n]=$e(""),r="userCredentials",[s,o]=$e(!0);let a;nn(()=>{const m=localStorage.getItem(r);if(m){const{username:p,password:_}=JSON.parse(m);console.log("storedCredentials",m),l(p,_)}else o(!1)}),nn(()=>{a&&!Xt.isLoggedIn&&!s()&&(console.log("showing dialog"),a.showModal())});const u=m=>{const p="Anonymous";Xt.userRef.put({name:p},g=>{g.err?console.error("Failed to create user circle:",g.err):console.log("User circle created:",m)})},l=(m,p)=>{const _=ir.user(),g=d=>{if(d.err)console.error("Authentication error:",d.err);else{if(!_.is){console.error("Authentication error");return}let x=_.is.pub;const v=du.get(x);mu(v),v.once(M=>{M||u(x)}),console.log("log user public key",_.is?.pub),gu(!0),localStorage.setItem(r,JSON.stringify({username:m,password:p})),a.close()}o(!1)};_.auth(m,p,g)},c=(m,p)=>{ir.user().create(m,p,g=>{g.err?console.error("User creation error:",g.err):l(m,p)})},f=m=>{m.preventDefault(),l(i(),t())},h=m=>{m.preventDefault(),c(i(),t())};return[(()=>{const m=l0(),p=m.firstChild,_=p.firstChild,g=_.nextSibling,d=g.firstChild,x=d.nextSibling,v=g.nextSibling,M=v.firstChild,y=M.nextSibling,b=v.nextSibling,w=b.nextSibling,D=a;return typeof D=="function"?Qc(D,m):a=m,x.$$input=E=>e(E.target.value),y.$$input=E=>n(E.target.value),b.$$click=f,w.$$click=h,nt(()=>x.value=i()),nt(()=>y.value=t()),m})(),Xe((()=>{const m=Xe(()=>!!Xt.isLoggedIn);return()=>m()&&(()=>{const p=c0();return p.$$click=u0,ze(p,Ye(o0,{size:"24px"})),p})()})())]}Pn(["input","click"]);var Zu={},ps={},Tt={},we={};Object.defineProperty(we,"__esModule",{value:!0});we.areaConversion=we.timeConversion=we.distanceConversion=we.altitudeKeys=we.latitudeKeys=we.longitudeKeys=we.MAXLON=we.MINLON=we.MAXLAT=we.MINLAT=we.earthRadius=we.sexagesimalPattern=void 0;var h0=/^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;we.sexagesimalPattern=h0;var d0=6378137;we.earthRadius=d0;var p0=-90;we.MINLAT=p0;var m0=90;we.MAXLAT=m0;var g0=-180;we.MINLON=g0;var _0=180;we.MAXLON=_0;var v0=["lng","lon","longitude",0];we.longitudeKeys=v0;var x0=["lat","latitude",1];we.latitudeKeys=x0;var y0=["alt","altitude","elevation","elev",2];we.altitudeKeys=y0;var M0={m:1,km:.001,cm:100,mm:1e3,mi:1/1609.344,sm:1/1852.216,ft:100/30.48,in:100/2.54,yd:1/.9144};we.distanceConversion=M0;var S0={m:60,h:3600,d:86400};we.timeConversion=S0;var qt={m2:1,km2:1e-6,ha:1e-4,a:.01,ft2:10.763911,yd2:1.19599,in2:1550.0031};we.areaConversion=qt;qt.sqm=qt.m2;qt.sqkm=qt.km2;qt.sqft=qt.ft2;qt.sqyd=qt.yd2;qt.sqin=qt.in2;var Jn={};Object.defineProperty(Jn,"__esModule",{value:!0});Jn.default=void 0;var E0=function(e,t){return t.reduce(function(n,r){if(typeof e>"u"||e===null)throw new Error("'".concat(e,"' is no valid coordinate."));return Object.prototype.hasOwnProperty.call(e,r)&&typeof r<"u"&&typeof n>"u"?(n=r,r):n},void 0)},b0=E0;Jn.default=b0;var Ni={},Qn={};Object.defineProperty(Qn,"__esModule",{value:!0});Qn.default=void 0;var w0=function(e){var t=e.toString().trim();return isNaN(parseFloat(t))?!1:parseFloat(t)===Number(t)},T0=w0;Qn.default=T0;var ei={};Object.defineProperty(ei,"__esModule",{value:!0});ei.default=void 0;var A0=we,R0=function(e){return A0.sexagesimalPattern.test(e.toString().trim())},C0=R0;ei.default=C0;var ti={};Object.defineProperty(ti,"__esModule",{value:!0});ti.default=void 0;var P0=we,L0=function(e){var t=new RegExp(P0.sexagesimalPattern).exec(e.toString().trim());if(typeof t>"u"||t===null)throw new Error("Given value is not in sexagesimal format");var n=Number(t[2])/60||0,r=Number(t[4])/3600||0,s=parseFloat(t[1])+n+r;return["S","W"].includes(t[7])?-s:s},D0=L0;ti.default=D0;var fr={},Fi={};Object.defineProperty(Fi,"__esModule",{value:!0});Fi.default=void 0;var Fa=we,Ba=U0(Jn);function U0(i){return i&&i.__esModule?i:{default:i}}function hc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function I0(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?hc(Object(t),!0).forEach(function(n){O0(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):hc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function O0(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var N0=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{longitude:Fa.longitudeKeys,latitude:Fa.latitudeKeys,altitude:Fa.altitudeKeys},n=(0,Ba.default)(e,t.longitude),r=(0,Ba.default)(e,t.latitude),s=(0,Ba.default)(e,t.altitude);return I0({latitude:r,longitude:n},s?{altitude:s}:{})},F0=N0;Fi.default=F0;var hr={};Object.defineProperty(hr,"__esModule",{value:!0});hr.default=void 0;var B0=To(Qn),k0=To(ei),z0=To(ti),dc=we;function To(i){return i&&i.__esModule?i:{default:i}}var G0=function i(e){return(0,B0.default)(e)?!(parseFloat(e)>dc.MAXLAT||e<dc.MINLAT):(0,k0.default)(e)?i((0,z0.default)(e)):!1},H0=G0;hr.default=H0;var dr={};Object.defineProperty(dr,"__esModule",{value:!0});dr.default=void 0;var V0=Ao(Qn),W0=Ao(ei),$0=Ao(ti),pc=we;function Ao(i){return i&&i.__esModule?i:{default:i}}var j0=function i(e){return(0,V0.default)(e)?!(parseFloat(e)>pc.MAXLON||e<pc.MINLON):(0,W0.default)(e)?i((0,$0.default)(e)):!1},X0=j0;dr.default=X0;Object.defineProperty(fr,"__esModule",{value:!0});fr.default=void 0;var q0=Ro(Fi),mc=Ro(hr),gc=Ro(dr);function Ro(i){return i&&i.__esModule?i:{default:i}}var Y0=function(e){var t=(0,q0.default)(e),n=t.latitude,r=t.longitude;if(Array.isArray(e)&&e.length>=2)return(0,gc.default)(e[0])&&(0,mc.default)(e[1]);if(typeof n>"u"||typeof r>"u")return!1;var s=e[r],o=e[n];return!(typeof o>"u"||typeof s>"u"||(0,mc.default)(o)===!1||(0,gc.default)(s)===!1)},K0=Y0;fr.default=K0;Object.defineProperty(Ni,"__esModule",{value:!0});Ni.default=void 0;var Z0=pr(Qn),J0=pr(ei),Q0=pr(ti),_c=pr(fr),ex=pr(Fi);function pr(i){return i&&i.__esModule?i:{default:i}}function vc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function ka(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?vc(Object(t),!0).forEach(function(n){lo(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):vc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function lo(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var tx=function i(e){if((0,Z0.default)(e))return Number(e);if((0,J0.default)(e))return(0,Q0.default)(e);if((0,_c.default)(e)){var t=(0,ex.default)(e);return Array.isArray(e)?e.map(function(n,r){return[0,1].includes(r)?i(n):n}):ka(ka(ka({},e),t.latitude&&lo({},t.latitude,i(e[t.latitude]))),t.longitude&&lo({},t.longitude,i(e[t.longitude])))}return Array.isArray(e)?e.map(function(n){return(0,_c.default)(n)?i(n):n}):e},nx=tx;Ni.default=nx;Object.defineProperty(Tt,"__esModule",{value:!0});Tt.default=void 0;var ix=we,rx=Ju(Jn),sx=Ju(Ni);function Ju(i){return i&&i.__esModule?i:{default:i}}var ax=function(e,t){var n=(0,rx.default)(e,ix.latitudeKeys);if(!(typeof n>"u"||n===null)){var r=e[n];return t===!0?r:(0,sx.default)(r)}},ox=ax;Tt.default=ox;var At={};Object.defineProperty(At,"__esModule",{value:!0});At.default=void 0;var lx=we,cx=Qu(Jn),ux=Qu(Ni);function Qu(i){return i&&i.__esModule?i:{default:i}}var fx=function(e,t){var n=(0,cx.default)(e,lx.longitudeKeys);if(!(typeof n>"u"||n===null)){var r=e[n];return t===!0?r:(0,ux.default)(r)}},hx=fx;At.default=hx;var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.default=void 0;var dx=function(e){return e*Math.PI/180},px=dx;Bt.default=px;var xn={};Object.defineProperty(xn,"__esModule",{value:!0});xn.default=void 0;var mx=function(e){return e*180/Math.PI},gx=mx;xn.default=gx;Object.defineProperty(ps,"__esModule",{value:!0});ps.default=void 0;var _x=ms(Tt),vx=ms(At),za=ms(Bt),Ga=ms(xn),xc=we;function ms(i){return i&&i.__esModule?i:{default:i}}var xx=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:6371e3,s=(0,_x.default)(e),o=(0,vx.default)(e),a=t/r,u=(0,za.default)(n),l=(0,za.default)(s),c=(0,za.default)(o),f=Math.asin(Math.sin(l)*Math.cos(a)+Math.cos(l)*Math.sin(a)*Math.cos(u)),h=c+Math.atan2(Math.sin(u)*Math.sin(a)*Math.cos(l),Math.cos(a)-Math.sin(l)*Math.sin(f)),m=(0,Ga.default)(h);return(m<xc.MINLON||m>xc.MAXLON)&&(h=(h+3*Math.PI)%(2*Math.PI)-Math.PI,m=(0,Ga.default)(h)),{latitude:(0,Ga.default)(f),longitude:m}},yx=xx;ps.default=yx;var gs={};Object.defineProperty(gs,"__esModule",{value:!0});gs.default=void 0;var Mx=we,Sx=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",n=Mx.areaConversion[t];if(n)return e*n;throw new Error("Invalid unit used for area conversion.")},Ex=Sx;gs.default=Ex;var _s={};Object.defineProperty(_s,"__esModule",{value:!0});_s.default=void 0;var bx=we,wx=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",n=bx.distanceConversion[t];if(n)return e*n;throw new Error("Invalid unit used for distance conversion.")},Tx=wx;_s.default=Tx;var vs={};Object.defineProperty(vs,"__esModule",{value:!0});vs.default=void 0;var $r=we,Ax=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"kmh";switch(t){case"kmh":return e*$r.timeConversion.h*$r.distanceConversion.km;case"mph":return e*$r.timeConversion.h*$r.distanceConversion.mi;default:return e}},Rx=Ax;vs.default=Rx;var xs={};Object.defineProperty(xs,"__esModule",{value:!0});xs.default=void 0;function yc(i,e){return Dx(i)||Lx(i,e)||Px(i,e)||Cx()}function Cx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Px(i,e){if(i){if(typeof i=="string")return Mc(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mc(i,e)}}function Mc(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Lx(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,s=void 0;try{for(var o=i[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(u){r=!0,s=u}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function Dx(i){if(Array.isArray(i))return i}var Ux=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4,n=Math.pow(10,t);return Math.round(e*n)/n},Ix=function(e){var t=e.toString().split("."),n=yc(t,2),r=n[0],s=n[1],o=Math.abs(Number(r)),a=+("0."+(s||0))*60,u=a.toString().split("."),l=Math.floor(a),c=Ux(+("0."+(u[1]||0))*60).toString(),f=c.split("."),h=yc(f,2),m=h[0],p=h[1],_=p===void 0?"0":p;return o+"° "+l.toString().padStart(2,"0")+"' "+m.padStart(2,"0")+"."+_.padEnd(1,"0")+'"'},Ox=Ix;xs.default=Ox;var ys={},mr={},sn={},gr={};Object.defineProperty(gr,"__esModule",{value:!0});gr.default=void 0;var Nx=function(e){return e>1?1:e<-1?-1:e},Fx=Nx;gr.default=Fx;Object.defineProperty(sn,"__esModule",{value:!0});sn.default=void 0;var Sc=Ms(Tt),Ec=Ms(At),Si=Ms(Bt),Bx=Ms(gr),kx=we;function Ms(i){return i&&i.__esModule?i:{default:i}}var zx=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;n=typeof n<"u"&&!isNaN(n)?n:1;var r=(0,Sc.default)(e),s=(0,Ec.default)(e),o=(0,Sc.default)(t),a=(0,Ec.default)(t),u=Math.acos((0,Bx.default)(Math.sin((0,Si.default)(o))*Math.sin((0,Si.default)(r))+Math.cos((0,Si.default)(o))*Math.cos((0,Si.default)(r))*Math.cos((0,Si.default)(s)-(0,Si.default)(a))))*kx.earthRadius;return Math.round(u/n)*n},Gx=zx;sn.default=Gx;Object.defineProperty(mr,"__esModule",{value:!0});mr.default=void 0;var bc=Hx(sn);function Hx(i){return i&&i.__esModule?i:{default:i}}var Vx=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:bc.default;return n=typeof n=="function"?n:bc.default,t.slice().sort(function(r,s){return n(e,r)-n(e,s)})},Wx=Vx;mr.default=Wx;Object.defineProperty(ys,"__esModule",{value:!0});ys.default=void 0;var $x=jx(mr);function jx(i){return i&&i.__esModule?i:{default:i}}var Xx=function(e,t){return(0,$x.default)(e,t)[0]},qx=Xx;ys.default=qx;var Ss={};Object.defineProperty(Ss,"__esModule",{value:!0});Ss.default=void 0;var Ha=Co(Bt),Yx=Co(Tt),wc=Co(At),Tc=we;function Co(i){return i&&i.__esModule?i:{default:i}}var Kx=function(e){var t=0;if(e.length>2){for(var n,r,s,o=0;o<e.length;o++){o===e.length-2?(n=e.length-2,r=e.length-1,s=0):o===e.length-1?(n=e.length-1,r=0,s=1):(n=o,r=o+1,s=o+2);var a=(0,wc.default)(e[n]),u=(0,Yx.default)(e[r]),l=(0,wc.default)(e[s]);t+=((0,Ha.default)(l)-(0,Ha.default)(a))*Math.sin((0,Ha.default)(u))}t=t*Tc.earthRadius*Tc.earthRadius/2}return Math.abs(t)},Zx=Kx;Ss.default=Zx;var _r={};Object.defineProperty(_r,"__esModule",{value:!0});_r.default=void 0;var Jx=ef(Tt),Qx=ef(At);function ef(i){return i&&i.__esModule?i:{default:i}}var ey=function(e){if(Array.isArray(e)===!1||e.length===0)throw new Error("No points were given.");return e.reduce(function(t,n){var r=(0,Jx.default)(n),s=(0,Qx.default)(n);return{maxLat:Math.max(r,t.maxLat),minLat:Math.min(r,t.minLat),maxLng:Math.max(s,t.maxLng),minLng:Math.min(s,t.minLng)}},{maxLat:-1/0,minLat:1/0,maxLng:-1/0,minLng:1/0})},ty=ey;_r.default=ty;var Es={};Object.defineProperty(Es,"__esModule",{value:!0});Es.default=void 0;var ny=bs(Tt),iy=bs(At),Ei=bs(Bt),jr=bs(xn),$i=we;function bs(i){return i&&i.__esModule?i:{default:i}}var ry=function(e,t){var n=(0,ny.default)(e),r=(0,iy.default)(e),s=(0,Ei.default)(n),o=(0,Ei.default)(r),a=t/$i.earthRadius,u=s-a,l=s+a,c=(0,Ei.default)($i.MAXLAT),f=(0,Ei.default)($i.MINLAT),h=(0,Ei.default)($i.MAXLON),m=(0,Ei.default)($i.MINLON),p,_;if(u>f&&l<c){var g=Math.asin(Math.sin(a)/Math.cos(s));p=o-g,p<m&&(p+=Math.PI*2),_=o+g,_>h&&(_-=Math.PI*2)}else u=Math.max(u,f),l=Math.min(l,c),p=m,_=h;return[{latitude:(0,jr.default)(u),longitude:(0,jr.default)(p)},{latitude:(0,jr.default)(l),longitude:(0,jr.default)(_)}]},sy=ry;Es.default=sy;var ws={};Object.defineProperty(ws,"__esModule",{value:!0});ws.default=void 0;var ay=Ts(Tt),oy=Ts(At),Ac=Ts(Bt),Rc=Ts(xn);function Ts(i){return i&&i.__esModule?i:{default:i}}var ly=function(e){if(Array.isArray(e)===!1||e.length===0)return!1;var t=e.length,n=e.reduce(function(a,u){var l=(0,Ac.default)((0,ay.default)(u)),c=(0,Ac.default)((0,oy.default)(u));return{X:a.X+Math.cos(l)*Math.cos(c),Y:a.Y+Math.cos(l)*Math.sin(c),Z:a.Z+Math.sin(l)}},{X:0,Y:0,Z:0}),r=n.X/t,s=n.Y/t,o=n.Z/t;return{longitude:(0,Rc.default)(Math.atan2(s,r)),latitude:(0,Rc.default)(Math.atan2(o,Math.sqrt(r*r+s*s)))}},cy=ly;ws.default=cy;var As={};Object.defineProperty(As,"__esModule",{value:!0});As.default=void 0;var uy=fy(_r);function fy(i){return i&&i.__esModule?i:{default:i}}var hy=function(e){var t=(0,uy.default)(e),n=t.minLat+(t.maxLat-t.minLat)/2,r=t.minLng+(t.maxLng-t.minLng)/2;return{latitude:parseFloat(n.toFixed(6)),longitude:parseFloat(r.toFixed(6))}},dy=hy;As.default=dy;var Rs={},vr={};Object.defineProperty(vr,"__esModule",{value:!0});vr.default=void 0;var Cc=Cs(Tt),Pc=Cs(At),Xr=Cs(Bt),py=Cs(xn);function Cs(i){return i&&i.__esModule?i:{default:i}}var my=function(e,t){var n=(0,Xr.default)((0,Pc.default)(t))-(0,Xr.default)((0,Pc.default)(e)),r=Math.log(Math.tan((0,Xr.default)((0,Cc.default)(t))/2+Math.PI/4)/Math.tan((0,Xr.default)((0,Cc.default)(e))/2+Math.PI/4));return Math.abs(n)>Math.PI&&(n>0?n=(Math.PI*2-n)*-1:n=Math.PI*2+n),((0,py.default)(Math.atan2(n,r))+360)%360},gy=my;vr.default=gy;Object.defineProperty(Rs,"__esModule",{value:!0});Rs.default=void 0;var Lc=_y(vr);function _y(i){return i&&i.__esModule?i:{default:i}}var vy=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Lc.default,r=typeof n=="function"?n(e,t):(0,Lc.default)(e,t);if(isNaN(r))throw new Error("Could not calculate bearing for given points. Check your bearing function");switch(Math.round(r/22.5)){case 1:return"NNE";case 2:return"NE";case 3:return"ENE";case 4:return"E";case 5:return"ESE";case 6:return"SE";case 7:return"SSE";case 8:return"S";case 9:return"SSW";case 10:return"SW";case 11:return"WSW";case 12:return"W";case 13:return"WNW";case 14:return"NW";case 15:return"NNW";default:return"N"}},xy=vy;Rs.default=xy;var xr={};Object.defineProperty(xr,"__esModule",{value:!0});xr.default=void 0;var Va=tf(sn),Dc=tf(gr);function tf(i){return i&&i.__esModule?i:{default:i}}var yy=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=(0,Va.default)(t,e,r),o=(0,Va.default)(e,n,r),a=(0,Va.default)(t,n,r),u=Math.acos((0,Dc.default)((s*s+a*a-o*o)/(2*s*a))),l=Math.acos((0,Dc.default)((o*o+a*a-s*s)/(2*o*a)));return u>Math.PI/2?s:l>Math.PI/2?o:Math.sin(u)*s},My=yy;xr.default=My;var Ps={};Object.defineProperty(Ps,"__esModule",{value:!0});Ps.default=void 0;var Uc=Ls(Tt),Ic=Ls(At),hn=Ls(Bt),Sy=Ls(xn);function Ls(i){return i&&i.__esModule?i:{default:i}}var Ey=function(e,t){var n=(0,Uc.default)(t),r=(0,Ic.default)(t),s=(0,Uc.default)(e),o=(0,Ic.default)(e),a=((0,Sy.default)(Math.atan2(Math.sin((0,hn.default)(r)-(0,hn.default)(o))*Math.cos((0,hn.default)(n)),Math.cos((0,hn.default)(s))*Math.sin((0,hn.default)(n))-Math.sin((0,hn.default)(s))*Math.cos((0,hn.default)(n))*Math.cos((0,hn.default)(r)-(0,hn.default)(o))))+360)%360;return a},by=Ey;Ps.default=by;var Ds={};Object.defineProperty(Ds,"__esModule",{value:!0});Ds.default=void 0;var wy=Ty(sn);function Ty(i){return i&&i.__esModule?i:{default:i}}function Jr(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Jr=function(t){return typeof t}:Jr=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jr(i)}var Ay=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wy.default;return e.reduce(function(n,r){return Jr(n)==="object"&&n.last!==null&&(n.distance+=t(r,n.last)),n.last=r,n},{last:null,distance:0}).distance},Ry=Ay;Ds.default=Ry;var Us={};Object.defineProperty(Us,"__esModule",{value:!0});Us.default=void 0;var Oc=Po(Tt),Nc=Po(At),Wa=Po(Bt),Fc=we;function Po(i){return i&&i.__esModule?i:{default:i}}var Cy=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;n=typeof n<"u"&&!isNaN(n)?n:1;var r=(0,Oc.default)(e),s=(0,Nc.default)(e),o=(0,Oc.default)(t),a=(0,Nc.default)(t),u=6356752314245e-6,l=1/298.257223563,c=(0,Wa.default)(a-s),f,h,m,p,_,g,d=Math.atan((1-l)*Math.tan((0,Wa.default)(parseFloat(r)))),x=Math.atan((1-l)*Math.tan((0,Wa.default)(parseFloat(o)))),v=Math.sin(d),M=Math.cos(d),y=Math.sin(x),b=Math.cos(x),w=c,D,E=100;do{var A=Math.sin(w),F=Math.cos(w);if(g=Math.sqrt(b*A*(b*A)+(M*y-v*b*F)*(M*y-v*b*F)),g===0)return 0;f=v*y+M*b*F,h=Math.atan2(g,f),m=M*b*A/g,p=1-m*m,_=f-2*v*y/p,isNaN(_)&&(_=0);var T=l/16*p*(4+l*(4-3*p));D=w,w=c+(1-T)*l*m*(h+T*g*(_+T*f*(-1+2*_*_)))}while(Math.abs(w-D)>1e-12&&--E>0);if(E===0)return NaN;var S=p*(Fc.earthRadius*Fc.earthRadius-u*u)/(u*u),R=1+S/16384*(4096+S*(-768+S*(320-175*S))),C=S/1024*(256+S*(-128+S*(74-47*S))),k=C*g*(_+C/4*(f*(-1+2*_*_)-C/6*_*(-3+4*g*g)*(-3+4*_*_))),N=u*R*(h-k);return Math.round(N/n)*n},Py=Cy;Us.default=Py;var Is={};Object.defineProperty(Is,"__esModule",{value:!0});Is.default=void 0;var Ly=function(e){if(/^NNE|NE|NNW|N$/.test(e))return"N";if(/^ENE|E|ESE|SE$/.test(e))return"E";if(/^SSE|S|SSW|SW$/.test(e))return"S";if(/^WSW|W|WNW|NW$/.test(e))return"W"},Dy=Ly;Is.default=Dy;var Os={};Object.defineProperty(Os,"__esModule",{value:!0});Os.default=void 0;var Uy=Iy(sn);function Iy(i){return i&&i.__esModule?i:{default:i}}var Oy=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Uy.default,r=n(e,t),s=Number(t.time)-Number(e.time),o=r/s*1e3;return o},Ny=Oy;Os.default=Ny;var Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});Ns.default=void 0;var $a=Fy(sn);function Fy(i){return i&&i.__esModule?i:{default:i}}var By=function(e,t,n){return(0,$a.default)(t,e)+(0,$a.default)(e,n)===(0,$a.default)(t,n)},ky=By;Ns.default=ky;var Fs={};Object.defineProperty(Fs,"__esModule",{value:!0});Fs.default=void 0;var qr=nf(Tt),Ot=nf(At);function nf(i){return i&&i.__esModule?i:{default:i}}var zy=function(e,t){for(var n=!1,r=t.length,s=-1,o=r-1;++s<r;o=s)((0,Ot.default)(t[s])<=(0,Ot.default)(e)&&(0,Ot.default)(e)<(0,Ot.default)(t[o])||(0,Ot.default)(t[o])<=(0,Ot.default)(e)&&(0,Ot.default)(e)<(0,Ot.default)(t[s]))&&(0,qr.default)(e)<((0,qr.default)(t[o])-(0,qr.default)(t[s]))*((0,Ot.default)(e)-(0,Ot.default)(t[s]))/((0,Ot.default)(t[o])-(0,Ot.default)(t[s]))+(0,qr.default)(t[s])&&(n=!n);return n},Gy=zy;Fs.default=Gy;var Bs={};Object.defineProperty(Bs,"__esModule",{value:!0});Bs.default=void 0;var Hy=Vy(xr);function Vy(i){return i&&i.__esModule?i:{default:i}}var Wy=function(e,t,n,r){return(0,Hy.default)(e,t,n)<r},$y=Wy;Bs.default=$y;var ks={};Object.defineProperty(ks,"__esModule",{value:!0});ks.default=void 0;var jy=Xy(sn);function Xy(i){return i&&i.__esModule?i:{default:i}}var qy=function(e,t,n){return(0,jy.default)(e,t)<n},Yy=qy;ks.default=Yy;var zs={};Object.defineProperty(zs,"__esModule",{value:!0});zs.default=void 0;function Ky(i,e){return eM(i)||Qy(i,e)||Jy(i,e)||Zy()}function Zy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jy(i,e){if(i){if(typeof i=="string")return Bc(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Bc(i,e)}}function Bc(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Qy(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,s=void 0;try{for(var o=i[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(u){r=!0,s=u}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function eM(i){if(Array.isArray(i))return i}var tM=function(e){if(!e.startsWith("POLYGON"))throw new Error("Invalid wkt.");var t=e.slice(e.indexOf("(")+2,e.indexOf(")")).split(", "),n=t.map(function(r){var s=r.split(" "),o=Ky(s,2),a=o[0],u=o[1];return{longitude:parseFloat(a),latitude:parseFloat(u)}});return n},nM=tM;zs.default=nM;(function(i){Object.defineProperty(i,"__esModule",{value:!0});var e={computeDestinationPoint:!0,convertArea:!0,convertDistance:!0,convertSpeed:!0,decimalToSexagesimal:!0,findNearest:!0,getAreaOfPolygon:!0,getBounds:!0,getBoundsOfDistance:!0,getCenter:!0,getCenterOfBounds:!0,getCompassDirection:!0,getCoordinateKey:!0,getCoordinateKeys:!0,getDistance:!0,getDistanceFromLine:!0,getGreatCircleBearing:!0,getLatitude:!0,getLongitude:!0,getPathLength:!0,getPreciseDistance:!0,getRhumbLineBearing:!0,getRoughCompassDirection:!0,getSpeed:!0,isDecimal:!0,isPointInLine:!0,isPointInPolygon:!0,isPointNearLine:!0,isPointWithinRadius:!0,isSexagesimal:!0,isValidCoordinate:!0,isValidLatitude:!0,isValidLongitude:!0,orderByDistance:!0,sexagesimalToDecimal:!0,toDecimal:!0,toRad:!0,toDeg:!0,wktToPolygon:!0};Object.defineProperty(i,"computeDestinationPoint",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(i,"convertArea",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(i,"convertDistance",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(i,"convertSpeed",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(i,"decimalToSexagesimal",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(i,"findNearest",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(i,"getAreaOfPolygon",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(i,"getBounds",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(i,"getBoundsOfDistance",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(i,"getCenter",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(i,"getCenterOfBounds",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(i,"getCompassDirection",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(i,"getCoordinateKey",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(i,"getCoordinateKeys",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(i,"getDistance",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(i,"getDistanceFromLine",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(i,"getGreatCircleBearing",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(i,"getLatitude",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(i,"getLongitude",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(i,"getPathLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(i,"getPreciseDistance",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(i,"getRhumbLineBearing",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(i,"getRoughCompassDirection",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(i,"getSpeed",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(i,"isDecimal",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(i,"isPointInLine",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(i,"isPointInPolygon",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(i,"isPointNearLine",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(i,"isPointWithinRadius",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(i,"isSexagesimal",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(i,"isValidCoordinate",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(i,"isValidLatitude",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(i,"isValidLongitude",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(i,"orderByDistance",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(i,"sexagesimalToDecimal",{enumerable:!0,get:function(){return H.default}}),Object.defineProperty(i,"toDecimal",{enumerable:!0,get:function(){return ne.default}}),Object.defineProperty(i,"toRad",{enumerable:!0,get:function(){return K.default}}),Object.defineProperty(i,"toDeg",{enumerable:!0,get:function(){return W.default}}),Object.defineProperty(i,"wktToPolygon",{enumerable:!0,get:function(){return q.default}});var t=Z(ps),n=Z(gs),r=Z(_s),s=Z(vs),o=Z(xs),a=Z(ys),u=Z(Ss),l=Z(_r),c=Z(Es),f=Z(ws),h=Z(As),m=Z(Rs),p=Z(Jn),_=Z(Fi),g=Z(sn),d=Z(xr),x=Z(Ps),v=Z(Tt),M=Z(At),y=Z(Ds),b=Z(Us),w=Z(vr),D=Z(Is),E=Z(Os),A=Z(Qn),F=Z(Ns),T=Z(Fs),S=Z(Bs),R=Z(ks),C=Z(ei),k=Z(fr),N=Z(hr),U=Z(dr),z=Z(mr),H=Z(ti),ne=Z(Ni),K=Z(Bt),W=Z(xn),q=Z(zs),ie=we;Object.keys(ie).forEach(function(O){O==="default"||O==="__esModule"||Object.prototype.hasOwnProperty.call(e,O)||Object.defineProperty(i,O,{enumerable:!0,get:function(){return ie[O]}})});function Z(O){return O&&O.__esModule?O:{default:O}}})(Zu);const iM=()=>{const i=t=>{let n={latitude:t.coords.latitude,longitude:t.coords.longitude};if(Xt.userLocation?.latitude&&Xt.userLocation?.longitude){const r=Zu.getPreciseDistance(Xt.userLocation,n);if(console.log(`getUserLocationSuccess (diff: ${r}, lat: ${t.coords.latitude}, lon: ${t.coords.longitude}, acc: ${t.coords.accuracy})`,0),r<100)return}console.log(`getUserLocationSuccess (lat: ${t.coords.latitude}, lon: ${t.coords.longitude}, acc: ${t.coords.accuracy})`,0),xh({latitude:t.coords.latitude,longitude:t.coords.longitude})},e=t=>{console.log(`getUserLocationError: ${t.message}`,0),navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,maximumAge:1/0})};return nn(()=>{let t=null;navigator.geolocation?navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"geolocation"}).then(n=>{console.log(`Query geolocation result: ${n.state}`,0),n.state==="granted"?(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1/0}),t=navigator.geolocation.watchPosition(i)):n.state==="prompt"?(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!0,timeout:6e4,maximumAge:0}),t=navigator.geolocation.watchPosition(i)):n.state,n.onchange=function(){console.log(`Query geolocation change: ${n.state}`,0)}}):(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1/0}),t=navigator.geolocation.watchPosition(i)):console.log("geolocation not available",0),Ii(()=>{t!==null&&navigator.geolocation.clearWatch(t)})}),null},rM=ot("<div>"),sM=ot('<h3 class="ml-3">'),aM=i=>{const e=()=>{i.onClick&&i.onClick(i.circle)};return(()=>{const t=rM();return t.$$click=e,ze(t,Ye(vu,{get circle(){return i.circle},size:"40px"}),null),ze(t,(()=>{const n=Xe(()=>!i.itemCollapsed?.());return()=>n()&&(()=>{const r=sM();return ze(r,()=>i.circle.name),r})()})(),null),nt(()=>pn(t,`flex items-center p-3 cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-200 ${i.highlightCurrentCircle&&Za()?.name?.toLowerCase()===i.circle?.name?.toLowerCase()?"bg-blue-200":""} ${i.className}`)),t})()};Pn(["click"]);const oM=ot("<div>"),lM=i=>{const[e,t]=$e([{name:"All",picture:"./images/all.png"},{name:"Test"}]);$e(e()[0]);const n=r=>{i.onSelect(r)};return(()=>{const r=oM();return ze(r,Ye(Kc,{get each(){return e()},children:s=>Ye(aM,{circle:s,get itemCollapsed(){return i.circleSelectCollapsed},highlightCurrentCircle:!0,onClick:n})})),r})()},cM=()=>{const[i,e]=$e(window.innerWidth),[t,n]=$e(window.innerHeight),r=()=>{e(window.innerWidth),n(window.innerHeight)};return nn(()=>{window.addEventListener("resize",r),Ii(()=>{window.removeEventListener("resize",r)})}),{windowWidth:i,windowHeight:t}},uM=ot('<div class="h-screen w-screen relative"><div class="h-full w-full md:w-72 relative"><div class="hidden md:block absolute right-0 top-0 h-full w-2 cursor-col-resize"></div></div><div class="h-full w-full md:w-full" style="background-color:#f5f5f5;">'),fM=()=>{const[i,e]=$e(!0),[t,n]=$e(!1),[r,s]=$e(18),[o,a]=$e(!1),{windowWidth:u,windowHeight:l}=cM(),c=Jf(),f=()=>{a(!0)},h=g=>{if(!o())return;const d=parseFloat(getComputedStyle(document.documentElement).fontSize),x=g.clientX/d;x<18?x<10?(s(4),n(!0)):(s(18),n(!1)):(s(x),n(!1))},m=()=>{a(!1)};nn(()=>{vh(u()<768)}),nn(()=>{console.log("APP_NAMESPACE","circles-b979fe7c-ebfd-11ed-a05b-0242ac120003"),o()?(document.body.classList.add("no-select"),window.addEventListener("mousemove",h),window.addEventListener("mouseup",m)):(document.body.classList.remove("no-select"),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",m))}),Ii(()=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",m)});const p=g=>{console.log("Selecting circle",g?.name),Ja(g),c(`/${g?.name.toLowerCase()}`),u()<768&&e(!1)},_=()=>{u()<768&&e(!0)};return[(()=>{const g=uM(),d=g.firstChild,x=d.firstChild,v=d.nextSibling;return ze(d,Ye(lM,{onSelect:p,circleSelectCollapsed:t}),x),x.$$mousedown=f,ze(v,Ye(oh,{get children(){return Ye(lh,{path:"/:circleId",get element(){return Ye(a0,{onBack:_})}})}})),nt(M=>{const y=`display: flex; flex-direction: row; min-width: ${pu()?"200%":"100%"}; transition: transform 300ms ease; transform: translateX(${i()?"0":"-50%"});`,b=u()>=768?`width: ${r()}rem; max-width: ${r()}rem; min-width: ${r()}rem;`:"width: 100%;";return M._v$=Qi(g,y,M._v$),M._v$2=Qi(d,b,M._v$2),M},{_v$:void 0,_v$2:void 0}),g})(),Ye(f0,{}),Ye(iM,{})]};Pn(["mousedown"]);const hM=document.getElementById("root");Pf(()=>Ye(ah,{get children(){return Ye(fM,{})}}),hM);
