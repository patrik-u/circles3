(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const nf=(i,e)=>i===e,qa=Symbol("solid-proxy"),rf=Symbol("solid-track"),is={equals:nf};let kc=$c;const An=1,rs=2,zc={owned:null,cleanups:null,context:null,owner:null};var Ye=null;let qs=null,qe=null,xt=null,pn=null,cs=0;function qi(i,e){const t=qe,n=Ye,r=i.length===0,s=r?zc:{owned:null,cleanups:null,context:null,owner:e===void 0?n:e},o=r?i:()=>i(()=>It(()=>us(s)));Ye=s,qe=null;try{return Zn(o,!0)}finally{qe=t,Ye=n}}function Le(i,e){e=e?Object.assign({},is,e):is;const t={value:i,observers:null,observerSlots:null,comparator:e.equals||void 0},n=r=>(typeof r=="function"&&(r=r(t.value)),Wc(t,r));return[Vc.bind(t),n]}function it(i,e,t){const n=fo(i,e,!1,An);ar(n)}function dt(i,e,t){kc=ff;const n=fo(i,e,!1,An);(!t||!t.render)&&(n.user=!0),pn?pn.push(n):ar(n)}function je(i,e,t){t=t?Object.assign({},is,t):is;const n=fo(i,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,ar(n),Vc.bind(n)}function It(i){if(qe===null)return i();const e=qe;qe=null;try{return i()}finally{qe=e}}function Gc(i,e,t){const n=Array.isArray(i);let r,s=t&&t.defer;return o=>{let a;if(n){a=Array(i.length);for(let c=0;c<i.length;c++)a[c]=i[c]()}else a=i();if(s){s=!1;return}const u=It(()=>e(a,r,o));return r=a,u}}function sf(i){dt(()=>It(i))}function Rn(i){return Ye===null||(Ye.cleanups===null?Ye.cleanups=[i]:Ye.cleanups.push(i)),i}function af(){return Ye}function of(i,e){const t=Ye,n=qe;Ye=i,qe=null;try{return Zn(e,!0)}catch(r){ho(r)}finally{Ye=t,qe=n}}function lf(i){const e=qe,t=Ye;return Promise.resolve().then(()=>{qe=e,Ye=t;let n;return Zn(i,!1),qe=Ye=null,n?n.done:void 0})}function Hc(i,e){const t=Symbol("context");return{id:t,Provider:hf(t),defaultValue:i}}function co(i){let e;return(e=Xc(Ye,i.id))!==void 0?e:i.defaultValue}function uo(i){const e=je(i),t=je(()=>Ya(e()));return t.toArray=()=>{const n=t();return Array.isArray(n)?n:n!=null?[n]:[]},t}function Vc(){if(this.sources&&this.state)if(this.state===An)ar(this);else{const i=xt;xt=null,Zn(()=>as(this),!1),xt=i}if(qe){const i=this.observers?this.observers.length:0;qe.sources?(qe.sources.push(this),qe.sourceSlots.push(i)):(qe.sources=[this],qe.sourceSlots=[i]),this.observers?(this.observers.push(qe),this.observerSlots.push(qe.sources.length-1)):(this.observers=[qe],this.observerSlots=[qe.sources.length-1])}return this.value}function Wc(i,e,t){let n=i.value;return(!i.comparator||!i.comparator(n,e))&&(i.value=e,i.observers&&i.observers.length&&Zn(()=>{for(let r=0;r<i.observers.length;r+=1){const s=i.observers[r],o=qs&&qs.running;o&&qs.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?xt.push(s):pn.push(s),s.observers&&jc(s)),o||(s.state=An)}if(xt.length>1e6)throw xt=[],new Error},!1)),e}function ar(i){if(!i.fn)return;us(i);const e=Ye,t=qe,n=cs;qe=Ye=i,cf(i,i.value,n),qe=t,Ye=e}function cf(i,e,t){let n;try{n=i.fn(e)}catch(r){return i.pure&&(i.state=An,i.owned&&i.owned.forEach(us),i.owned=null),i.updatedAt=t+1,ho(r)}(!i.updatedAt||i.updatedAt<=t)&&(i.updatedAt!=null&&"observers"in i?Wc(i,n):i.value=n,i.updatedAt=t)}function fo(i,e,t,n=An,r){const s={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:Ye,context:null,pure:t};return Ye===null||Ye!==zc&&(Ye.owned?Ye.owned.push(s):Ye.owned=[s]),s}function ss(i){if(i.state===0)return;if(i.state===rs)return as(i);if(i.suspense&&It(i.suspense.inFallback))return i.suspense.effects.push(i);const e=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<cs);)i.state&&e.push(i);for(let t=e.length-1;t>=0;t--)if(i=e[t],i.state===An)ar(i);else if(i.state===rs){const n=xt;xt=null,Zn(()=>as(i,e[0]),!1),xt=n}}function Zn(i,e){if(xt)return i();let t=!1;e||(xt=[]),pn?t=!0:pn=[],cs++;try{const n=i();return uf(t),n}catch(n){t||(pn=null),xt=null,ho(n)}}function uf(i){if(xt&&($c(xt),xt=null),i)return;const e=pn;pn=null,e.length&&Zn(()=>kc(e),!1)}function $c(i){for(let e=0;e<i.length;e++)ss(i[e])}function ff(i){let e,t=0;for(e=0;e<i.length;e++){const n=i[e];n.user?i[t++]=n:ss(n)}for(e=0;e<t;e++)ss(i[e])}function as(i,e){i.state=0;for(let t=0;t<i.sources.length;t+=1){const n=i.sources[t];if(n.sources){const r=n.state;r===An?n!==e&&(!n.updatedAt||n.updatedAt<cs)&&ss(n):r===rs&&as(n,e)}}}function jc(i){for(let e=0;e<i.observers.length;e+=1){const t=i.observers[e];t.state||(t.state=rs,t.pure?xt.push(t):pn.push(t),t.observers&&jc(t))}}function us(i){let e;if(i.sources)for(;i.sources.length;){const t=i.sources.pop(),n=i.sourceSlots.pop(),r=t.observers;if(r&&r.length){const s=r.pop(),o=t.observerSlots.pop();n<r.length&&(s.sourceSlots[o]=n,r[n]=s,t.observerSlots[n]=o)}}if(i.owned){for(e=i.owned.length-1;e>=0;e--)us(i.owned[e]);i.owned=null}if(i.cleanups){for(e=i.cleanups.length-1;e>=0;e--)i.cleanups[e]();i.cleanups=null}i.state=0,i.context=null}function ho(i){throw i}function Xc(i,e){return i?i.context&&i.context[e]!==void 0?i.context[e]:Xc(i.owner,e):void 0}function Ya(i){if(typeof i=="function"&&!i.length)return Ya(i());if(Array.isArray(i)){const e=[];for(let t=0;t<i.length;t++){const n=Ya(i[t]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return i}function hf(i,e){return function(n){let r;return it(()=>r=It(()=>(Ye.context={[i]:n.value},uo(()=>n.children))),void 0),r}}const df=Symbol("fallback");function Po(i){for(let e=0;e<i.length;e++)i[e]()}function pf(i,e,t={}){let n=[],r=[],s=[],o=0,a=e.length>1?[]:null;return Rn(()=>Po(s)),()=>{let u=i()||[],c,l;return u[rf],It(()=>{let h=u.length,v,p,_,g,d,x,m,M,y;if(h===0)o!==0&&(Po(s),s=[],n=[],r=[],o=0,a&&(a=[])),t.fallback&&(n=[df],r[0]=qi(b=>(s[0]=b,t.fallback())),o=1);else if(o===0){for(r=new Array(h),l=0;l<h;l++)n[l]=u[l],r[l]=qi(f);o=h}else{for(_=new Array(h),g=new Array(h),a&&(d=new Array(h)),x=0,m=Math.min(o,h);x<m&&n[x]===u[x];x++);for(m=o-1,M=h-1;m>=x&&M>=x&&n[m]===u[M];m--,M--)_[M]=r[m],g[M]=s[m],a&&(d[M]=a[m]);for(v=new Map,p=new Array(M+1),l=M;l>=x;l--)y=u[l],c=v.get(y),p[l]=c===void 0?-1:c,v.set(y,l);for(c=x;c<=m;c++)y=n[c],l=v.get(y),l!==void 0&&l!==-1?(_[l]=r[c],g[l]=s[c],a&&(d[l]=a[c]),l=p[l],v.set(y,l)):s[c]();for(l=x;l<h;l++)l in _?(r[l]=_[l],s[l]=g[l],a&&(a[l]=d[l],a[l](l))):r[l]=qi(f);r=r.slice(0,o=h),n=u.slice(0)}return r});function f(h){if(s[l]=h,a){const[v,p]=Le(l);return a[l]=p,e(u[l],v)}return e(u[l])}}}function Te(i,e){return It(()=>i(e||{}))}function Sr(){return!0}const mf={get(i,e,t){return e===qa?t:i.get(e)},has(i,e){return e===qa?!0:i.has(e)},set:Sr,deleteProperty:Sr,getOwnPropertyDescriptor(i,e){return{configurable:!0,enumerable:!0,get(){return i.get(e)},set:Sr,deleteProperty:Sr}},ownKeys(i){return i.keys()}};function Ys(i){return(i=typeof i=="function"?i():i)?i:{}}function qc(...i){let e=!1;for(let n=0;n<i.length;n++){const r=i[n];e=e||!!r&&qa in r,i[n]=typeof r=="function"?(e=!0,je(r)):r}if(e)return new Proxy({get(n){for(let r=i.length-1;r>=0;r--){const s=Ys(i[r])[n];if(s!==void 0)return s}},has(n){for(let r=i.length-1;r>=0;r--)if(n in Ys(i[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<i.length;r++)n.push(...Object.keys(Ys(i[r])));return[...new Set(n)]}},mf);const t={};for(let n=i.length-1;n>=0;n--)if(i[n]){const r=Object.getOwnPropertyDescriptors(i[n]);for(const s in r)s in t||Object.defineProperty(t,s,{enumerable:!0,get(){for(let o=i.length-1;o>=0;o--){const a=(i[o]||{})[s];if(a!==void 0)return a}}})}return t}const gf=i=>`Stale read from <${i}>.`;function Ka(i){const e="fallback"in i&&{fallback:()=>i.fallback};return je(pf(()=>i.each,i.children,e||void 0))}function Hn(i){const e=i.keyed,t=je(()=>i.when,void 0,{equals:(n,r)=>e?n===r:!n==!r});return je(()=>{const n=t();if(n){const r=i.children;return typeof r=="function"&&r.length>0?It(()=>r(e?n:()=>{if(!It(t))throw gf("Show");return i.when})):r}return i.fallback},void 0,void 0)}const _f=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],vf=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",..._f]),xf=new Set(["innerHTML","textContent","innerText","children"]),yf=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Mf=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Sf(i,e){const t=Mf[i];return typeof t=="object"?t[e]?t.$:void 0:t}const Ef=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),bf={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function wf(i,e,t){let n=t.length,r=e.length,s=n,o=0,a=0,u=e[r-1].nextSibling,c=null;for(;o<r||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[r-1]===t[s-1];)r--,s--;if(r===o){const l=s<n?a?t[a-1].nextSibling:t[s-a]:u;for(;a<s;)i.insertBefore(t[a++],l)}else if(s===a)for(;o<r;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[r-1]){const l=e[--r].nextSibling;i.insertBefore(t[a++],e[o++].nextSibling),i.insertBefore(t[--s],l),e[r]=t[s]}else{if(!c){c=new Map;let f=a;for(;f<s;)c.set(t[f],f++)}const l=c.get(e[o]);if(l!=null)if(a<l&&l<s){let f=o,h=1,v;for(;++f<r&&f<s&&!((v=c.get(e[f]))==null||v!==l+h);)h++;if(h>l-a){const p=e[o];for(;a<l;)i.insertBefore(t[a++],p)}else i.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Lo="_$DX_DELEGATE";function Tf(i,e,t,n={}){let r;return qi(s=>{r=s,e===document?i():Be(e,i(),e.firstChild?null:void 0,t)},n.owner),()=>{r(),e.textContent=""}}function Je(i,e,t){let n;const r=()=>{const o=document.createElement("template");return o.innerHTML=i,t?o.content.firstChild.firstChild:o.content.firstChild},s=e?()=>(n||(n=r())).cloneNode(!0):()=>It(()=>document.importNode(n||(n=r()),!0));return s.cloneNode=s,s}function Cn(i,e=window.document){const t=e[Lo]||(e[Lo]=new Set);for(let n=0,r=i.length;n<r;n++){const s=i[n];t.has(s)||(t.add(s),e.addEventListener(s,Uf))}}function Vn(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)}function Af(i,e,t,n){n==null?i.removeAttributeNS(e,t):i.setAttributeNS(e,t,n)}function En(i,e){e==null?i.removeAttribute("class"):i.className=e}function Rf(i,e,t,n){if(n)Array.isArray(t)?(i[`$$${e}`]=t[0],i[`$$${e}Data`]=t[1]):i[`$$${e}`]=t;else if(Array.isArray(t)){const r=t[0];i.addEventListener(e,t[0]=s=>r.call(i,t[1],s))}else i.addEventListener(e,t)}function Cf(i,e,t={}){const n=Object.keys(e||{}),r=Object.keys(t);let s,o;for(s=0,o=r.length;s<o;s++){const a=r[s];!a||a==="undefined"||e[a]||(Do(i,a,!1),delete t[a])}for(s=0,o=n.length;s<o;s++){const a=n[s],u=!!e[a];!a||a==="undefined"||t[a]===u||!u||(Do(i,a,!0),t[a]=u)}return t}function or(i,e,t){if(!e)return t?Vn(i,"style"):e;const n=i.style;if(typeof e=="string")return n.cssText=e;typeof t=="string"&&(n.cssText=t=void 0),t||(t={}),e||(e={});let r,s;for(s in t)e[s]==null&&n.removeProperty(s),delete t[s];for(s in e)r=e[s],r!==t[s]&&(n.setProperty(s,r),t[s]=r);return t}function Pf(i,e={},t,n){const r={};return n||it(()=>r.children=Di(i,e.children,r.children)),it(()=>e.ref&&e.ref(i)),it(()=>Lf(i,e,t,!0,r,!0)),r}function tr(i,e,t){return It(()=>i(e,t))}function Be(i,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return Di(i,e,n,t);it(r=>Di(i,e(),r,t),n)}function Lf(i,e,t,n,r={},s=!1){e||(e={});for(const o in r)if(!(o in e)){if(o==="children")continue;r[o]=Uo(i,o,null,r[o],t,s)}for(const o in e){if(o==="children"){n||Di(i,e.children);continue}const a=e[o];r[o]=Uo(i,o,a,r[o],t,s)}}function Df(i){return i.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Do(i,e,t){const n=e.trim().split(/\s+/);for(let r=0,s=n.length;r<s;r++)i.classList.toggle(n[r],t)}function Uo(i,e,t,n,r,s){let o,a,u,c,l;if(e==="style")return or(i,t,n);if(e==="classList")return Cf(i,t,n);if(t===n)return n;if(e==="ref")s||t(i);else if(e.slice(0,3)==="on:"){const f=e.slice(3);n&&i.removeEventListener(f,n),t&&i.addEventListener(f,t)}else if(e.slice(0,10)==="oncapture:"){const f=e.slice(10);n&&i.removeEventListener(f,n,!0),t&&i.addEventListener(f,t,!0)}else if(e.slice(0,2)==="on"){const f=e.slice(2).toLowerCase(),h=Ef.has(f);if(!h&&n){const v=Array.isArray(n)?n[0]:n;i.removeEventListener(f,v)}(h||t)&&(Rf(i,f,t,h),h&&Cn([f]))}else if(e.slice(0,5)==="attr:")Vn(i,e.slice(5),t);else if((l=e.slice(0,5)==="prop:")||(u=xf.has(e))||!r&&((c=Sf(e,i.tagName))||(a=vf.has(e)))||(o=i.nodeName.includes("-")))l&&(e=e.slice(5),a=!0),e==="class"||e==="className"?En(i,t):o&&!a&&!u?i[Df(e)]=t:i[c||e]=t;else{const f=r&&e.indexOf(":")>-1&&bf[e.split(":")[0]];f?Af(i,f,e,t):Vn(i,yf[e]||e,t)}return t}function Uf(i){const e=`$$${i.type}`;let t=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==t&&Object.defineProperty(i,"target",{configurable:!0,value:t}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}});t;){const n=t[e];if(n&&!t.disabled){const r=t[`${e}Data`];if(r!==void 0?n.call(t,r,i):n.call(t,i),i.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function Di(i,e,t,n,r){for(;typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=n!==void 0;if(i=o&&t[0]&&t[0].parentNode||i,s==="string"||s==="number")if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=si(i,t,n,a)}else t!==""&&typeof t=="string"?t=i.firstChild.data=e:t=i.textContent=e;else if(e==null||s==="boolean")t=si(i,t,n);else{if(s==="function")return it(()=>{let a=e();for(;typeof a=="function";)a=a();t=Di(i,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[],u=t&&Array.isArray(t);if(Ja(a,e,t,r))return it(()=>t=Di(i,a,t,n,!0)),()=>t;if(a.length===0){if(t=si(i,t,n),o)return t}else u?t.length===0?Io(i,a,n):wf(i,t,a):(t&&si(i),Io(i,a));t=a}else if(e instanceof Node){if(Array.isArray(t)){if(o)return t=si(i,t,n,e);si(i,t,null,e)}else t==null||t===""||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);t=e}else console.warn("Unrecognized value. Skipped inserting",e)}return t}function Ja(i,e,t,n){let r=!1;for(let s=0,o=e.length;s<o;s++){let a=e[s],u=t&&t[s];if(a instanceof Node)i.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))r=Ja(i,a,u)||r;else if(typeof a=="function")if(n){for(;typeof a=="function";)a=a();r=Ja(i,Array.isArray(a)?a:[a],Array.isArray(u)?u:[u])||r}else i.push(a),r=!0;else{const c=String(a);u&&u.nodeType===3?(u.data=c,i.push(u)):i.push(document.createTextNode(c))}}return r}function Io(i,e,t=null){for(let n=0,r=e.length;n<r;n++)i.insertBefore(e[n],t)}function si(i,e,t,n){if(t===void 0)return i.textContent="";const r=n||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(r!==a){const u=a.parentNode===i;!s&&!o?u?i.replaceChild(r,a):i.insertBefore(r,t):u&&a.remove()}else s=!0}}else i.insertBefore(r,t);return[r]}const Yc=!1;function Kc(i,e,t){return i.addEventListener(e,t),()=>i.removeEventListener(e,t)}function If([i,e],t,n){return[t?()=>t(i()):i,n?r=>e(n(r)):e]}function Nf(i){try{return document.querySelector(i)}catch{return null}}function Jc(i,e){const t=Nf(`#${i}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}function Zc(i,e,t,n){let r=!1;const s=a=>typeof a=="string"?{value:a}:a,o=If(Le(s(i()),{equals:(a,u)=>a.value===u.value}),void 0,a=>(!r&&e(a),a));return t&&Rn(t((a=i())=>{r=!0,o[1](s(a)),r=!1})),{signal:o,utils:n}}function Of(i){if(i){if(Array.isArray(i))return{signal:i}}else return{signal:Le({value:""})};return i}function Ff(){return Zc(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:i,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"",i):window.history.pushState(n,"",i),Jc(window.location.hash.slice(1),t)},i=>Kc(window,"popstate",()=>i()),{go:i=>window.history.go(i)})}function Bf(){return Zc(()=>window.location.hash.slice(1),({value:i,replace:e,scroll:t,state:n})=>{e?window.history.replaceState(n,"","#"+i):window.location.hash=i;const r=i.indexOf("#"),s=r>=0?i.slice(r+1):"";Jc(s,t)},i=>Kc(window,"hashchange",()=>i()),{go:i=>window.history.go(i),renderPath:i=>`#${i}`,parsePath:i=>{const e=i.replace(/^.*?#/,"");if(!e.startsWith("/")){const[,t="/"]=window.location.hash.split("#",2);return`${t}#${e}`}return e}})}function kf(){let i=new Set;function e(r){return i.add(r),()=>i.delete(r)}let t=!1;function n(r,s){if(t)return!(t=!1);const o={to:r,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const a of i)a.listener({...o,from:a.location,retry:u=>{u&&(t=!0),a.navigate(r,s)}});return!o.defaultPrevented}return{subscribe:e,confirm:n}}const zf=/^(?:[a-z0-9]+:)?\/\//i,Gf=/^\/+|(\/)\/+$/g;function Yi(i,e=!1){const t=i.replace(Gf,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function Zr(i,e,t){if(zf.test(e))return;const n=Yi(i),r=t&&Yi(t);let s="";return!r||e.startsWith("/")?s=n:r.toLowerCase().indexOf(n.toLowerCase())!==0?s=n+r:s=r,(s||"/")+Yi(e,!s)}function Hf(i,e){if(i==null)throw new Error(e);return i}function Qc(i,e){return Yi(i).replace(/\/*(\*.*)?$/g,"")+Yi(e)}function Vf(i){const e={};return i.searchParams.forEach((t,n)=>{e[n]=t}),e}function Wf(i,e,t){const[n,r]=i.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return a=>{const u=a.split("/").filter(Boolean),c=u.length-o;if(c<0||c>0&&r===void 0&&!e)return null;const l={path:o?"":"/",params:{}},f=h=>t===void 0?void 0:t[h];for(let h=0;h<o;h++){const v=s[h],p=u[h],_=v[0]===":",g=_?v.slice(1):v;if(_&&Ks(p,f(g)))l.params[g]=p;else if(_||!Ks(p,v))return null;l.path+=`/${p}`}if(r){const h=c?u.slice(-c).join("/"):"";if(Ks(h,f(r)))l.params[r]=h;else return null}return l}}function Ks(i,e){const t=n=>n.localeCompare(i,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(i):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(i):!1}function $f(i){const[e,t]=i.pattern.split("/*",2),n=e.split("/").filter(Boolean);return n.reduce((r,s)=>r+(s.startsWith(":")?2:3),n.length-(t===void 0?0:1))}function eu(i){const e=new Map,t=af();return new Proxy({},{get(n,r){return e.has(r)||of(t,()=>e.set(r,je(()=>i()[r]))),e.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(i())}})}function tu(i){let e=/(\/?\:[^\/]+)\?/.exec(i);if(!e)return[i];let t=i.slice(0,e.index),n=i.slice(e.index+e[0].length);const r=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(n);)r.push(t+=e[1]),n=n.slice(e[0].length);return tu(n).reduce((s,o)=>[...s,...r.map(a=>a+o)],[])}const jf=100,nu=Hc(),fs=Hc(),hs=()=>Hf(co(nu),"Make sure your app is wrapped in a <Router />");let nr;const iu=()=>nr||co(fs)||hs().base,ru=()=>hs().navigatorFactory(),su=()=>hs().location;function Xf(i,e="",t){const{component:n,data:r,children:s}=i,o=!s||Array.isArray(s)&&!s.length,a={key:i,element:n?()=>Te(n,{}):()=>{const{element:u}=i;return u===void 0&&t?Te(t,{}):u},preload:i.component?n.preload:i.preload,data:r};return au(i.path).reduce((u,c)=>{for(const l of tu(c)){const f=Qc(e,l),h=o?f:f.split("/*",1)[0];u.push({...a,originalPath:l,pattern:h,matcher:Wf(h,!o,i.matchFilters)})}return u},[])}function qf(i,e=0){return{routes:i,score:$f(i[i.length-1])*1e4-e,matcher(t){const n=[];for(let r=i.length-1;r>=0;r--){const s=i[r],o=s.matcher(t);if(!o)return null;n.unshift({...o,route:s})}return n}}}function au(i){return Array.isArray(i)?i:[i]}function ou(i,e="",t,n=[],r=[]){const s=au(i);for(let o=0,a=s.length;o<a;o++){const u=s[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=Xf(u,e,t);for(const l of c){n.push(l);const f=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!f)ou(u.children,l.pattern,t,n,r);else{const h=qf([...n],r.length);r.push(h)}n.pop()}}}return n.length?r:r.sort((o,a)=>a.score-o.score)}function Yf(i,e){for(let t=0,n=i.length;t<n;t++){const r=i[t].matcher(e);if(r)return r}return[]}function Kf(i,e){const t=new URL("http://sar"),n=je(u=>{const c=i();try{return new URL(c,t)}catch{return console.error(`Invalid path ${c}`),u}},t,{equals:(u,c)=>u.href===c.href}),r=je(()=>n().pathname),s=je(()=>n().search,!0),o=je(()=>n().hash),a=je(()=>"");return{get pathname(){return r()},get search(){return s()},get hash(){return o()},get state(){return e()},get key(){return a()},query:eu(Gc(s,()=>Vf(n())))}}function Jf(i,e="",t,n){const{signal:[r,s],utils:o={}}=Of(i),a=o.parsePath||(A=>A),u=o.renderPath||(A=>A),c=o.beforeLeave||kf(),l=Zr("",e),f=void 0;if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!r().value&&s({value:l,replace:!0,scroll:!1});const[h,v]=Le(!1),p=async A=>{v(!0);try{await lf(A)}finally{v(!1)}},[_,g]=Le(r().value),[d,x]=Le(r().state),m=Kf(_,d),M=[],y={pattern:l,params:{},path:()=>l,outlet:()=>null,resolvePath(A){return Zr(l,A)}};if(t)try{nr=y,y.data=t({data:void 0,params:{},location:m,navigate:w(y)})}finally{nr=void 0}function b(A,N,T){It(()=>{if(typeof N=="number"){N&&(o.go?c.confirm(N,T)&&o.go(N):console.warn("Router integration does not support relative routing"));return}const{replace:S,resolve:R,scroll:C,state:k}={replace:!1,resolve:!0,scroll:!0,...T},F=R?A.resolvePath(N):Zr("",N);if(F===void 0)throw new Error(`Path '${N}' is not a routable path`);if(M.length>=jf)throw new Error("Too many redirects");const U=_();if((F!==U||k!==d())&&!Yc){if(c.confirm(F,T)){const z=M.push({value:U,replace:S,scroll:C,state:d()});p(()=>{g(F),x(k)}).then(()=>{M.length===z&&L({value:F,state:k})})}}})}function w(A){return A=A||co(fs)||y,(N,T)=>b(A,N,T)}function L(A){const N=M[0];N&&((A.value!==N.value||A.state!==N.state)&&s({...A,replace:N.replace,scroll:N.scroll}),M.length=0)}it(()=>{const{value:A,state:N}=r();It(()=>{A!==_()&&p(()=>{g(A),x(N)})})});{let A=function(N){if(N.defaultPrevented||N.button!==0||N.metaKey||N.altKey||N.ctrlKey||N.shiftKey)return;const T=N.composedPath().find(U=>U instanceof Node&&U.nodeName.toUpperCase()==="A");if(!T||!T.hasAttribute("link"))return;const S=T.href;if(T.target||!S&&!T.hasAttribute("state"))return;const R=(T.getAttribute("rel")||"").split(/\s+/);if(T.hasAttribute("download")||R&&R.includes("external"))return;const C=new URL(S);if(C.origin!==window.location.origin||l&&C.pathname&&!C.pathname.toLowerCase().startsWith(l.toLowerCase()))return;const k=a(C.pathname+C.search+C.hash),F=T.getAttribute("state");N.preventDefault(),b(y,k,{resolve:!1,replace:T.hasAttribute("replace"),scroll:!T.hasAttribute("noscroll"),state:F&&JSON.parse(F)})};var E=A;Cn(["click"]),document.addEventListener("click",A),Rn(()=>document.removeEventListener("click",A))}return{base:y,out:f,location:m,isRouting:h,renderPath:u,parsePath:a,navigatorFactory:w,beforeLeave:c}}function Zf(i,e,t,n,r){const{base:s,location:o,navigatorFactory:a}=i,{pattern:u,element:c,preload:l,data:f}=n().route,h=je(()=>n().path);l&&l();const v={parent:e,pattern:u,get child(){return t()},path:h,params:r,data:e.data,outlet:c,resolvePath(p){return Zr(s.path(),p,h())}};if(f)try{nr=v,v.data=f({data:e.data,params:r,location:o,navigate:a(v)})}finally{nr=void 0}return v}const Qf=i=>{const{source:e,url:t,base:n,data:r,out:s}=i,o=e||Ff(),a=Jf(o,n,r);return Te(nu.Provider,{value:a,get children(){return i.children}})},eh=i=>{const e=hs(),t=iu(),n=uo(()=>i.children),r=je(()=>ou(n(),Qc(t.pattern,i.base||""),th)),s=je(()=>Yf(r(),e.location.pathname)),o=eu(()=>{const l=s(),f={};for(let h=0;h<l.length;h++)Object.assign(f,l[h].params);return f});e.out&&e.out.matches.push(s().map(({route:l,path:f,params:h})=>({originalPath:l.originalPath,pattern:l.pattern,path:f,params:h})));const a=[];let u;const c=je(Gc(s,(l,f,h)=>{let v=f&&l.length===f.length;const p=[];for(let _=0,g=l.length;_<g;_++){const d=f&&f[_],x=l[_];h&&d&&x.route.key===d.route.key?p[_]=h[_]:(v=!1,a[_]&&a[_](),qi(m=>{a[_]=m,p[_]=Zf(e,p[_-1]||t,()=>c()[_+1],()=>s()[_],o)}))}return a.splice(l.length).forEach(_=>_()),h&&v?h:(u=p[0],p)}));return Te(Hn,{get when(){return c()&&u},keyed:!0,children:l=>Te(fs.Provider,{value:l,get children(){return l.outlet()}})})},No=i=>{const e=uo(()=>i.children);return qc(i,{get children(){return e()}})},th=()=>{const i=iu();return Te(Hn,{get when(){return i.child},keyed:!0,children:e=>Te(fs.Provider,{value:e,get children(){return e.outlet()}})})};function nh(i){const e=ru(),t=su(),{href:n,state:r}=i,s=typeof n=="function"?n({navigate:e,location:t}):n;return e(s,{replace:!0,state:r}),null}var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ih(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function lu(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var po={exports:{}};po.exports;(function(i){(function(){function e(n,r){return r?lu(n):n.slice?e[s(n)]:function(o,a){n(o={exports:{}}),e[s(a)]=o.exports};function s(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){String.random=function(s,o){var a="";for(s=s||24,o=o||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";s-- >0;)a+=o.charAt(Math.floor(Math.random()*o.length));return a},String.match=function(s,o){var a,u;return typeof s!="string"?!1:(typeof o=="string"&&(o={"=":o}),o=o||{},a=o["="]||o["*"]||o[">"]||o["<"],s===a?!0:u!==o["="]?!1:(a=o["*"]||o[">"],s.slice(0,(a||"").length)===a?!0:u!==o["*"]?!1:u!==o[">"]&&u!==o["<"]?s>=o[">"]&&s<=o["<"]:u!==o[">"]&&s>=o[">"]||u!==o["<"]&&s<=o["<"]))},String.hash=function(s,o){if(typeof s=="string"){if(o=o||0,!s.length)return o;for(var a=0,u=s.length,c;a<u;++a)c=s.charCodeAt(a),o=(o<<5)-o+c,o|=0;return o}};var r=Object.prototype.hasOwnProperty;Object.plain=function(s){return s?s instanceof Object&&s.constructor===Object||Object.prototype.toString.call(s).match(/^\[object (\w+)\]$/)[1]==="Object":!1},Object.empty=function(s,o){for(var a in s)if(r.call(s,a)&&(!o||o.indexOf(a)==-1))return!1;return!0},Object.keys=Object.keys||function(s){var o=[];for(var a in s)r.call(s,a)&&o.push(a);return o},function(){var s,o=setTimeout,a=0,u=0,c=typeof setImmediate!=""+s&&setImmediate||function(f,h){return typeof MessageChannel==""+s?o:((f=new MessageChannel).port1.onmessage=function(v){v.data==""&&h()},function(v){h=v,f.port2.postMessage("")})}(),l=o.check=o.check||typeof performance!=""+s&&performance||{now:function(){return+new Date}};o.hold=o.hold||9,o.poll=o.poll||function(f){if(o.hold>=l.now()-a&&u++<3333){f();return}c(function(){a=l.now(),f()},u=0)}}(),function(){var s=setTimeout,o=s.turn=s.turn||function(h){a.push(h)==1&&u(f)},a=o.s=[],u=s.poll,c=0,l,f=function(){(l=a[c++])&&l(),(c==a.length||c==99)&&(a=o.s=a.slice(c),c=0),a.length&&u(f)}}(),function(){var s,o=setTimeout,a=o.turn;(o.each=o.each||function(u,c,l,f){f=f||9,function h(v,p,_){if(p=(v=(u||[]).splice(0,f)).length){for(var g=0;g<p&&s===(_=c(v[g]));g++);if(s===_){a(h);return}}l&&l(_)}()})()}()})(e,"./shim"),e(function(n){n.exports=function r(l,o,a){if(!l)return{to:r};var u,c=typeof o=="function",l=(this.tag||(this.tag={}))[l]||c&&(this.tag[l]={tag:l,to:r._={next:function(h){var v;(v=this.to)&&v.next(h)}}});if(c){var f={off:r.off||(r.off=function(){if(this.next===r._.next)return!0;this===this.the.last&&(this.the.last=this.back),this.to.back=this.back,this.next=r._.next,this.back.to=this.to,this.the.last===this.the&&delete this.on.tag[this.the.tag]}),to:r._,next:o,the:l,on:this,as:a};return(f.back=l.last||l).to=f,l.last=f}return(l=l.to)&&u!==o&&l.next(o),l}})(e,"./onto"),e(function(n){n.exports=function(r){return r===null||typeof r=="string"||typeof r=="boolean"||typeof r=="number"&&r!=1/0&&r!=-1/0&&r===r||!!r&&typeof r["#"]=="string"&&Object.keys(r).length===1&&r["#"]}})(e,"./valid"),e(function(n){e("./shim");function r(){var l=+new Date;return u<l?(o=0,u=l+r.drift):u=l+(o+=1)/a+r.drift}r.drift=0;var s=-1/0,o=0,a=999,u=s,c;r.is=function(l,f,h){var v=f&&l&&l._&&l._[">"]||h;if(v)return typeof(v=v[f])=="number"?v:s},r.ify=function(l,f,h,v,p){(l=l||{})._=l._||{},p&&(l._["#"]=p);var _=l._[">"]||(l._[">"]={});return c!==f&&f!=="_"&&(typeof h=="number"&&(_[f]=h),c!==v&&(l[f]=v)),l},n.exports=r})(e,"./state"),e(function(n){e("./shim");function r(s){var o={s:{}},a=o.s;s=s||{max:999,age:1e3*9},o.check=function(c){return a[c]?u(c):!1};var u=o.track=function(c){var l=a[c]||(a[c]={});return l.was=o.now=+new Date,o.to||(o.to=setTimeout(o.drop,s.age+9)),u.ed&&u.ed(c),l};return o.drop=function(c){o.to=null,o.now=+new Date;var l=Object.keys(a);console.STAT&&console.STAT(o.now,+new Date-o.now,"dup drop keys"),setTimeout.each(l,function(f){var h=a[f];h&&(c||s.age)>o.now-h.was||delete a[f]},0,99)},o}n.exports=r})(e,"./dup"),e(function(n){e("./onto"),n.exports=function(o,a){if(this.on){var u=(this.opt||{}).lack||9e3;if(typeof o!="function"){if(!o)return;var l=o["#"]||o,c=(this.tag||"")[l];return c?(a&&(c=this.on(l,a),clearTimeout(c.err),c.err=setTimeout(function(){c.off()},u)),!0):void 0}var l=a&&a["#"]||r(9);if(!o)return l;var f=this.on(l,o,a);return f.err=f.err||setTimeout(function(){f.off(),f.next({err:"Error: No ACK yet.",lack:!0})},u),l}};var r=String.random||function(){return Math.random().toString(36).slice(2)}})(e,"./ask"),e(function(n){function r(p){return p instanceof r?(this._={$:this}).$:this instanceof r?r.create(this._={$:this,opt:p}):new r(p)}r.is=function(p){return p instanceof r||p&&p._&&p===p._.$||!1},r.version=.202,r.chain=r.prototype,r.chain.toJSON=function(){},e("./shim"),r.valid=e("./valid"),r.state=e("./state"),r.on=e("./onto"),r.dup=e("./dup"),r.ask=e("./ask"),function(){r.create=function(S){S.root=S.root||S,S.graph=S.graph||{},S.on=S.on||r.on,S.ask=S.ask||r.ask,S.dup=S.dup||r.dup();var R=S.$.opt(S.opt);return S.once||(S.on("in",p,S),S.on("out",p,S),S.on("put",d,S),r.on("create",S),S.on("create",S)),S.once=1,R};function p(S){if(S){if(S.out===p){this.to.next(S);return}var R=this,C=R.as,k=C.at||C,F=k.$,U=k.dup,z,H=S.DBG;if((z=S["#"])||(z=S["#"]=o(9)),!U.check(z)){if(U.track(z),z=S._,S._=typeof z=="function"?z:function(){},S.$&&S.$===(S.$._||"").$||(S.$=F),S["@"]&&!S.put&&m(S),!k.ask(S["@"],S))if(H&&(H.u=+new Date),S.put){_(S);return}else S.get&&r.on.get(S,F);H&&(H.uc=+new Date),R.to.next(S),H&&(H.ua=+new Date),!(S.nts||S.NTS)&&(S.out=p,k.on("out",S),H&&(H.ue=+new Date))}}}function _(S){if(S){var R=S._||"",C=R.root=((R.$=S.$||"")._||"").root;if(S["@"]&&R.faith&&!R.miss){S.out=p,C.on("out",S);return}R.latch=C.hatch,R.match=C.hatch=[];var k=S.put,F=R.DBG=S.DBG,U=+new Date;if(N=N||U,!(k["#"]&&k["."])){F&&(F.p=U),R["#"]=S["#"],R.msg=S,R.all=0,R.stun=1;var z=Object.keys(k);console.STAT&&console.STAT(U,((F||R).pk=+new Date)-U,"put sort");var H=0,ne,K,W,q,ie,J,O;(function xe(ye){if(ne!=H){if(ne=H,!(W=z[H])){console.STAT&&console.STAT(U,((F||R).pd=+new Date)-U,"put"),x(R);return}(q=k[W])?(O=q._)?W!==O["#"]?J=y+b(W)+"soul not same.":(ie=O[">"])||(J=y+b(W)+"no state."):J=y+b(W)+"no meta.":J=y+b(W)+"no node.",K=Object.keys(q||{})}if(J){S.err=R.err=J,x(R);return}var oe=0,pe;for(ye=ye||0;ye++<9&&(pe=K[oe++]);)if(pe!=="_"){var Oe=q[pe],me=ie[pe];if(f===me){J=y+b(pe)+"on"+b(W)+"no state.";break}if(!u(Oe)){J=y+b(pe)+"on"+b(W)+"bad "+typeof Oe+b(Oe);break}g(Oe,pe,W,me,S),++A}if((K=K.slice(oe)).length){a(xe);return}++H,K=null,xe(ye)})()}}}r.on.put=_;function g(S,R,C,k,F){var U=F._||"",z=U.root,H=z.graph,ne,K=H[C]||h,W=c(K,R,1),q=K[R],ie=U.DBG;(ne=console.STAT)&&(!H[C]||!q)&&(ne.has=(ne.has||0)+1);var J=E();if(k>J){setTimeout(function(){g(S,R,C,k,F)},(ne=k-J)>L?L:ne),console.STAT&&console.STAT((ie||U).Hf=+new Date,ne,"future");return}if(!(k<W)&&!(!U.faith&&k===W&&(S===q||w(S)<=w(q))&&!U.miss)){U.stun++;var O=F["#"]+U.all++,xe={toString:function(){return O},_:U};xe.toJSON=xe.toString,z.dup.track(xe)["#"]=F["#"],ie&&(ie.ph=ie.ph||+new Date),z.on("put",{"#":xe,"@":F["@"],put:{"#":C,".":R,":":S,">":k},ok:F.ok,_:U})}}function d(S){var R;(R=(S._||"").DBG)&&(R.pa=+new Date,R.pm=R.pm||+new Date);var C=this,k=C.as,F=k.graph,U=S._,z=S.put,H=z["#"],ne=z["."],K=z[":"],W=z[">"];S["#"];var q;(q=U.msg)&&(q=q.put)&&(q=q[H])&&l(q,ne,W,K,H),F[H]=l(F[H],ne,W,K,H),(q=(k.next||"")[H])&&q.on("in",S),x(U),C.to.next(S)}function x(S,R){var C;if(!S.stop&&!(!S.err&&0<--S.stun)&&(S.stop=1,!!(C=S.root))){var k=S.match;k.end=1,k===C.hatch&&(!(k=S.latch)||k.end?delete C.hatch:C.hatch=k),S.hatch&&S.hatch(),setTimeout.each(S.match,function(F){F&&F()}),!(!(R=S.msg)||S.err||R.err)&&(R.out=p,S.root.on("out",R),T())}}function m(S){var R=S["@"]||"",C;if(!(C=R._)){var k=(k=S.$)&&(k=k._)&&(k=k.root)&&(k=k.dup);if(!(k=k.check(R)))return;S["@"]=k["#"]||S["@"];return}C.acks=(C.acks||0)+1,(C.err=S.err)&&(S["@"]=C["#"],x(C)),C.ok=S.ok||C.ok,!C.stop&&!C.crack&&(C.crack=C.match&&C.match.push(function(){M(C)})),M(C)}function M(S){!S||!S.root||S.stun||S.acks!==S.all||S.root.on("in",{"@":S["#"],err:S.err,ok:S.err?f:S.ok||{"":1}})}var y="Error: Invalid graph!",b=function(S){return" '"+(""+S).slice(0,9)+"...' "},w=JSON.stringify,L=2147483647,E=r.state,A=0,N,T=function(){A>999&&A/-(N-(N=+new Date))>1&&(r.window&&console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."),T=function(){A=0})}}(),function(){r.on.get=function(_,g){var d=g._,x=_.get,m=x["#"],M=d.graph[m],y=x["."],b=d.next||(d.next={}),w=b[m],L=_._||{},E=L.DBG=_.DBG;if(E&&(E.g=+new Date),!M)return d.on("get",_);if(y){if((typeof y!="string"||f===M[y])&&!((w||"").next||"")[y]){d.on("get",_);return}M=l({},y,c(M,y),M[y],m)}M&&p(_,M),d.on("get",_)};function p(_,g){var d=+new Date,x=_._||{},m=x.DBG=_.DBG,M=_["#"],y=o(9),b=Object.keys(g||"").sort(),w=((g||"")._||"")["#"];b.length;var L=_.$._.root,E=g===L.graph[w];console.STAT&&console.STAT(d,((m||x).gk=+new Date)-d,"got keys"),g&&function A(){d=+new Date;for(var N=0,T,S={},R;N<9&&(T=b[N++]);)l(S,T,c(g,T),g[T],w);b=b.slice(N),(R={})[w]=S,S=R;var C;E&&(C=function(){},C.ram=C.faith=!0),R=b.length,console.STAT&&console.STAT(d,-(d-(d=+new Date)),"got copied some"),m&&(m.ga=+new Date),L.on("in",{"@":M,"#":y,put:S,"%":R?y=o(9):f,$:L.$,_:C,DBG:m,FOO:1}),console.STAT&&console.STAT(d,+new Date-d,"got in"),R&&setTimeout.turn(A)}(),g||L.on("in",{"@":_["#"]})}r.on.get.ack=p}(),function(){r.chain.opt=function(p){p=p||{};var _=this,g=_._,d=p.peers||p;return Object.plain(p)||(p={}),Object.plain(g.opt)||(g.opt=p),typeof d=="string"&&(d=[d]),Object.plain(g.opt.peers)||(g.opt.peers={}),d instanceof Array&&(p.peers={},d.forEach(function(x){var m={};m.id=m.url=x,p.peers[x]=g.opt.peers[x]=g.opt.peers[x]||m})),s(p,function x(m){var M=this[m];if(this&&this.hasOwnProperty(m)||typeof M=="string"||Object.empty(M)){this[m]=M;return}M&&M.constructor!==Object&&!(M instanceof Array)||s(M,x)}),g.opt.from=p,r.on("opt",g),g.opt.uuid=g.opt.uuid||function(m){return r.state().toString(36).replace(".","")+String.random(m||12)},_}}();var s=function(p,_){Object.keys(p).forEach(_,p)},o=String.random,a=setTimeout.turn,u=r.valid,c=r.state.is,l=r.state.ify,f,h={},v;r.log=function(){return!r.log.off&&v.log.apply(v,arguments),[].slice.call(arguments).join(" ")},r.log.once=function(p,_,g){return(g=r.log.once)[p]=g[p]||0,g[p]++||r.log(_)},typeof window<"u"&&((window.GUN=window.Gun=r).window=window);try{typeof t<"u"&&(t.exports=r)}catch{}n.exports=r,(r.window||{}).console=(r.window||{}).console||{log:function(){}},(v=console).only=function(p,_){return v.only.i&&p===v.only.i&&v.only.i++&&(v.log.apply(v,arguments)||_)},r.log.once("welcome","Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!")})(e,"./root"),e(function(n){var r=e("./root");r.chain.back=function(a,u){var c;if(a=a||1,a===-1||a===1/0)return this._.root.$;if(a===1)return(this._.back||this._).$;var l=this,f=l._;if(typeof a=="string"&&(a=a.split(".")),a instanceof Array){var h=0,v=a.length,c=f;for(h;h<v;h++)c=(c||s)[a[h]];return o!==c?u?l:c:(c=f.back)?c.$.back(a,u):void 0}if(typeof a=="function"){for(var p,c={back:f};(c=c.back)&&o===(p=a(c,u)););return p}return typeof a=="number"?(f.back||f).$.back(a-1):this};var s={},o})(e,"./back"),e(function(n){var r=e("./root");r.chain.chain=function(x){var m=this,M=m._,y=new(x||m).constructor(m),b=y._,w;return b.root=w=M.root,b.id=++w.once,b.back=m._,b.on=r.on,b.on("in",r.on.in,b),b.on("out",r.on.out,b),y};function s(x){var m,M=this.as,y=M.back,b=M.root,w;if(x.$||(x.$=M.$),this.to.next(x),M.err){M.on("in",{put:M.put=f,$:M.$});return}if(m=x.get){if(b.pass&&(b.pass[M.id]=M),M.lex&&Object.keys(M.lex).forEach(function(L){w[L]=M.lex[L]},w=x.get=x.get||{}),m["#"]||M.soul){if(m["#"]=m["#"]||M.soul,x["#"]||(x["#"]=h(9)),y=b.$.get(m["#"])._,m=m["."]){if(p(y.put,m)&&(w=y.ask&&y.ask[m],(y.ask||(y.ask={}))[m]=y.$.get(m)._,y.on("in",{get:m,put:{"#":y.soul,".":m,":":y.put[m],">":g(b.graph[y.soul],m)}}),w))return}else{if(w=y.ask&&y.ask[""],(y.ask||(y.ask={}))[""]=y,f!==y.put&&(y.on("in",y),w))return;x.$=y.$}return b.ask(c,x),b.on("in",x)}if(m["."])return M.get?(x={get:{".":M.get},$:M.$},(y.ask||(y.ask={}))[M.get]=x.$._,y.on("out",x)):(x={get:M.lex?x.get:{},$:M.$},y.on("out",x));if((M.ask||(M.ask={}))[""]=M,M.get)return m["."]=M.get,(y.ask||(y.ask={}))[M.get]=x.$._,y.on("out",x)}return y.on("out",x)}r.on.out=s;function o(x,m){m=m||this.as;var M=m.root,y=x.$||(x.$=m.$),b=(y||"")._||l,w=x.put||"",L=w["#"],E=w["."],A=f!==w["="]?w["="]:w[":"],N=w[">"]||-1/0,T;if(f!==x.put&&(f===w["#"]||f===w["."]||f===w[":"]&&f===w["="]||f===w[">"])){if(!v(w)){if(!(L=((w||"")._||"")["#"])){console.log("chain not yet supported for",w,"...",x,m);return}return y=m.root.$.get(L),setTimeout.each(Object.keys(w).sort(),function(S){S=="_"||f===(N=g(w,S))||m.on("in",{$:y,put:{"#":L,".":S,"=":w[S],">":N},VIA:x})})}m.on("in",{$:b.back.$,put:{"#":L=b.back.soul,".":E=b.has||b.get,"=":w,">":g(b.back.put,E)},via:x});return}(x.seen||"")[m.id]||((x.seen||(x.seen=function(){}))[m.id]=m,m!==b&&(Object.keys(x).forEach(function(S){w[S]=x[S]},w={}),w.get=m.get||w.get,!m.soul&&!m.has?w.$$$=w.$$$||m.$:b.soul&&(w.$=m.$,w.$$=w.$$||b.$),x=w),u(x,m),(m.soul||x.$$)&&N>=g(M.graph[L],E)&&((w=M.$.get(L)._).put=d(w.put,E,N,A,L)),!b.soul&&N>=g(M.graph[L],E)&&(T=(M.$.get(L)._.next||"")[E])&&(T.put=A,typeof(w=v(A))=="string"&&(T.put=M.$.get(w)._.put||A)),this.to&&this.to.next(x),m.any&&setTimeout.each(Object.keys(m.any),function(S){(S=m.any[S])&&S(x)},0,99),m.echo&&setTimeout.each(Object.keys(m.echo),function(S){(S=m.echo[S])&&S.on("in",x)},0,99),((x.$$||"")._||b).soul&&(T=m.next)&&(T=T[E])&&(w={},Object.keys(x).forEach(function(S){w[S]=x[S]}),w.$=(x.$$||x.$).get(w.get=E),delete w.$$,delete w.$$$,T.on("in",w)),a(x,m))}r.on.in=o;function a(x,m){if(m=m||this.as||x.$._,!(x.$$&&this!==r.on)&&!(!x.put||m.soul)){var M=x.put||"",y=M["="]||M[":"],E,b=m.root,w=b.$.get(M["#"]).get(M["."])._;if(typeof(y=v(y))!="string"){this===r.on&&((w.echo||(w.echo={}))[m.id]=m);return}if(!((w.echo||(w.echo={}))[m.id]&&!(b.pass||"")[m.id])){if(E=b.pass){if(E[y+m.id])return;E[y+m.id]=1}(w.echo||(w.echo={}))[m.id]=m,m.has&&(m.link=y);var L=b.$.get(w.link=y)._;(L.echo||(L.echo={}))[w.id]=w;var E=m.ask||"";(E[""]||m.lex)&&L.on("out",{get:{"#":y}}),setTimeout.each(Object.keys(E),function(A,N){!A||!(N=E[A])||N.on("out",{get:{"#":y,".":A}})},0,99)}}}r.on.link=a;function u(x,m){var M=x.put||"",y=f!==M["="]?M["="]:M[":"],b=m.root,w,L;if(f===y){if(m.soul&&f!==m.put||(L=(x.$$||x.$||"")._||"",x["@"]&&(f!==L.put||f!==m.put)))return;(w=m.link||x.linked)&&delete(b.$.get(w)._.echo||"")[m.id],m.has&&(m.link=null),m.put=f,setTimeout.each(Object.keys(m.next||""),function(E,A){(A=m.next[E])&&(w&&delete(b.$.get(w).get(E)._.echo||"")[A.id],A.on("in",{get:E,put:f,$:A.$}))},0,99);return}m.soul||x.$$||(w=v(y),L=x.$._||"",!((w===L.link||m.has&&!L.link)&&!((b.pass||"")[m.id]&&typeof w!="string"))&&(delete(L.echo||"")[m.id],u({get:m.get,put:f,$:x.$,linked:x.linked=x.linked||L.link},m)))}r.on.unlink=u;function c(x,m){var M=this.as,y=M.$._;y.root;var b=M.get||"",w=(x.put||"")[b["#"]]||"";if(!x.put||typeof b["."]=="string"&&f===w[b["."]]){if(f!==y.put||!y.soul&&!y.has)return;y.ack=(y.ack||0)+1,y.on("in",{get:y.get,put:y.put=f,$:y.$,"@":x["@"]});return}(x._||{}).miss=1,r.on.put(x)}var l={},f,h=String.random,v=r.valid,p=function(x,m){return x&&Object.prototype.hasOwnProperty.call(x,m)},_=r.state,g=_.is,d=_.ify})(e,"./chain"),e(function(n){var r=e("./root");r.chain.get=function(f,h,v){var p,_;if(typeof f=="string"){if(f.length==0)return(p=this.chain())._.err={err:r.log("0 length key!",f)},h&&h.call(p,p._.err),p;var g=this,d=g._,x=d.next||u;(p=x[f])||(p=f&&s(f,g)),p=p&&p.$}else if(typeof f=="function"){let E=function(A,N,T){if(!E.stun&&!((U=M.pass)&&!U[y])){var S=A.$._,R=(A.$$||"")._,C=(R||S).put,k=!S.has&&!S.soul,F={},U;if((k||l===C)&&(C=l===((U=A.put)||"")["="]?l===(U||"")[":"]?U:U[":"]:U["="]),typeof(U=r.valid(C))=="string"&&(C=l===(U=M.$.get(U)._.put)?m.not?l:C:U),!(m.not&&l===C)){if(l===m.stun){if((U=M.stun)&&U.on&&(d.$.back(function(z){if(U.on(""+z.id,F={}),(F.run||0)<E.id)return F}),!F.run&&U.on(""+S.id,F={}),!F.run&&R&&U.on(""+R.id,F={}),E.id>F.run&&((!F.stun||F.stun.end)&&(F.stun=U.on("stun"),F.stun=F.stun&&F.stun.last),F.stun&&!F.stun.end))){(F.stun.add||(F.stun.add={}))[y]=function(){E(A,N,1)};return}if(l===C&&(T=0),(U=M.hatch)&&!U.end&&l===m.hatch&&!T){if(b[S.$._.id])return;b[S.$._.id]=1,U.push(function(){E(A,N,1)});return}b={}}if(M.pass){if(M.pass[y+S.id])return;M.pass[y+S.id]=1}if(m.on){m.ok.call(S.$,C,S.get,A,N||E);return}if(m.v2020){m.ok(A,N||E);return}Object.keys(A).forEach(function(z){U[z]=A[z]},U={}),A=U,A.put=C,m.ok.call(m.as,A,N||E)}}};var w=E;if(h===!0)return o(this,f,h,v),this;p=this;var d=p._,m=h||{},M=d.root,y;m.at=d,m.ok=f;var b={};return E.at=d,(d.any||(d.any={}))[y=String.random(7)]=E,E.off=function(){E.stun=1,d.any&&delete d.any[y]},E.rid=a,E.id=m.run||++M.once,_=M.pass,(M.pass={})[y]=1,m.out=m.out||{get:{}},d.on("out",m.out),M.pass=_,p}else{if(typeof f=="number")return this.get(""+f,h,v);if(typeof(_=c(f))=="string")return this.get(_,h,v);(_=this.get.next)&&(p=_(this,f))}return p?(h&&typeof h=="function"&&p.get(h,v),p):((p=this.chain())._.err={err:r.log("Invalid get request!",f)},h&&h.call(p,p._.err),p)};function s(f,h){var v=h._,p=v.next,_=h.chain(),g=_._;return p||(p=v.next={}),p[g.get=f]=g,h===v.root.$?g.soul=f:(v.soul||v.has)&&(g.has=f),g}function o(f,h,v,p){var _=f._,g=0,d;return(d=_.soul||_.link)?h(d,p,_):_.jam?_.jam.push([h,p]):(_.jam=[[h,p]],f.get(function(m,M){if(!(l===m.put&&!_.root.opt.super&&(d=Object.keys(_.root.opt.peers).length)&&++g<=d)){M.rid(m);var y=(y=m.$)&&y._||{},b=0,w;for(d=_.jam,delete _.jam;w=d[b++];){var L=w[0];w=w[1],L&&L(y.link||y.soul||r.valid(m.put)||((m.put||{})._||{})["#"],w,m,M)}}},{out:{get:{".":!0}}}),f)}function a(f){var h=this.at||this.on;if(!f||h.soul||h.has)return this.off();if(f=(f=(f=f.$||f)._||f).id){h.map;var v;if((v=this.seen||(this.seen={}))[f])return!0;v[f]=!0}}var u={},c=r.valid,l})(e,"./get"),e(function(n){var r=e("./root");r.chain.put=function(p,_,g){var d=this,x=d._,m=x.root;g=g||{},g.root=x.root,g.run||(g.run=m.once),s(g,x.id),g.ack=g.ack||_,g.via=g.via||d,g.data=g.data||p,g.soul||(g.soul=x.soul||typeof _=="string"&&_);var M=g.state=g.state||r.state();return typeof p=="function"?(p(function(y){g.data=y,d.put(c,c,g)}),d):g.soul?(g.$=m.$.get(g.soul),g.todo=[{it:g.data,ref:g.$}],g.turn=g.turn||f,g.ran=g.ran||o,function y(){var b=g.todo,w=b.pop(),L=w.it;w.ref&&w.ref._.id;var E,A,N,T,S;if(s(g,w.ref),(T=w.todo)&&(A=T.pop(),L=L[A],T.length&&b.push(w)),A&&(b.path||(b.path=[])).push(A),!(E=h(L))&&!(S=r.is(L))){if(!Object.plain(L)){o.err(g,"Invalid data: "+u(L)+" at "+(g.via.back(function(U){U.get&&T.push(U.get)},T=[])||T.join("."))+"."+(b.path||[]).join("."));return}for(var R=g.seen||(g.seen=[]),C=R.length;C--;)if(L===(T=R[C]).it){E=L=T.link;break}}if(A&&E)w.node=v(w.node,A,M,L);else{let U=function(z,H){var ne=N.link["#"];H&&(H.off(),H.rid(z));var K=ne||z.soul||(T=(z.$$||z.$)._||"").soul||T.link||((T=T.put||"")._||"")["#"]||T["#"]||((T=z.put||"")&&z.$$?T["#"]:(T["="]||T[":"]||"")["#"]);if(!ne&&s(g,z.$),!K&&!w.link["#"]){(w.wait||(w.wait=[])).push(function(){U(z,H)});return}K||(K=[],(z.$$||z.$).back(function(W){if(T=W.soul||W.link)return K.push(T);K.push(W.get)}),K=K.reverse().join("/")),N.link["#"]=K,!S&&(((g.graph||(g.graph={}))[K]=N.node||(N.node={_:{}}))._["#"]=K),delete g.wait[k],N.wait&&setTimeout.each(N.wait,function(W){W&&W()}),g.ran(g)};var F=U;if(!g.seen){o.err(g,"Data at root of graph must be a node (an object).");return}g.seen.push(N={it:L,link:{},todo:S?[]:Object.keys(L).sort().reverse(),path:(b.path||[]).slice(),up:w}),w.node=v(w.node,A,M,N.link),!S&&N.todo.length&&b.push(N);var k=g.seen.length;(g.wait||(g.wait={}))[k]="",T=(N.ref=S?L:A?w.ref.get(A):w.ref)._,(T=L&&(L._||"")["#"]||T.soul||T.link)?U({soul:T}):N.ref.get(U,{run:g.run,v2020:1,out:{get:{".":" "}}})}if(!b.length)return g.ran(g);g.turn(y)}(),d):(a(g),d)};function s(p,_){if(_){_=(_._||"").id||_;var g=p.root.stun||(p.root.stun={on:r.on}),d={},x;p.stun||(p.stun=g.on("stun",function(){})),(x=g.on(""+_))&&x.the.last.next(d),!(d.run>=p.run)&&g.on(""+_,function(m){if(p.stun.end){this.off(),this.to.next(m);return}m.run=m.run||p.run,m.stun=m.stun||p.stun})}}function o(p){if(p.err){o.end(p.stun,p.root);return}if(!(p.todo.length||p.end||!Object.empty(p.wait))){p.end=1;var _=p.$.back(-1)._,g=_.root,d=_.ask(function(y){g.on("ack",y),y.err&&!y.lack&&r.log(y),++x>(p.acks||0)&&this.off(),p.ack&&p.ack(y,this)},p.opt),x=0,m=p.stun,M;(M=function(){m&&(o.end(m,g),setTimeout.each(Object.keys(m=m.add||""),function(y){(y=m[y])&&y()}))}).hatch=M,p.ack&&!p.ok&&(p.ok=p.acks||9),p.via._.on("out",{put:p.out=p.graph,ok:p.ok&&{"@":p.ok+1},opt:p.opt,"#":d,_:M})}}o.end=function(p,_){p.end=l,p.the.to===p&&p===p.the.last&&delete _.stun,p.off()},o.err=function(p,_){(p.ack||l).call(p,p.out={err:p.err=r.log(_)}),p.ran(p)};function a(p){var _=p.via._,g;p.via=p.via.back(function(d){if(d.soul||!d.get)return d.$;g=p.data,(p.data={})[d.get]=g}),(!p.via||!p.via._.soul)&&(p.via=_.root.$.get(((p.data||"")._||"")["#"]||_.$.back("opt.uuid")())),p.via.put(p.data,p.ack,p)}function u(p,_){return p&&(_=p.constructor)&&_.name||typeof p}var c,l=function(){},f=setTimeout.turn,h=r.valid,v=r.state.ify})(e,"./put"),e(function(n){var r=e("./root");e("./chain"),e("./back"),e("./put"),e("./get"),n.exports=r})(e,"./index"),e(function(n){var r=e("./index");r.chain.on=function(a,u,c,l){var f=this,h=f._;h.root;var v;if(typeof a=="string")return u?(v=h.on(a,u,c||h,l),c&&c.$&&(c.subs||(c.subs=[])).push(v),f):h.on(a);var p=u;return(p=p===!0?{change:!0}:p||{}).not=1,p.on=1,f.get(a,p),f},r.chain.once=function(a,u){if(u=u||{},!a)return s(this);var c=this,l=c._,f=l.root;l.put;var h=String.random(7),v;return c.get(function(p,_,g,d){var x=this,m=x._,M=m.one||(m.one={});if(d.stun||M[h]==="")return;if((v=r.valid(p))===!0){y();return}if(typeof v=="string")return;clearTimeout((l.one||"")[h]),clearTimeout(M[h]),M[h]=setTimeout(y,u.wait||99);function y(b){if(!m.has&&!m.soul&&(m={put:p,get:_}),o===(v=m.put)&&(v=((g.$$||"")._||"").put),typeof r.valid(v)=="string"&&(v=f.$.get(v)._.put,v===o&&!b)){M[h]=setTimeout(function(){y(1)},u.wait||99);return}d.stun||M[h]!==""&&(M[h]="",(l.soul||l.has)&&d.off(),a.call(x,v,m.get),clearTimeout(M[h]))}},{on:1}),c};function s(a,u,c){return r.log.once("valonce","Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),(c=a.chain())._.nix=a.once(function(l,f){c._.on("in",this._)}),c._.lex=a._.lex,c}r.chain.off=function(){var a=this,u=a._,c,l=u.back;if(l)return u.ack=0,(c=l.next)&&c[u.get]&&delete c[u.get],(c=l.any)&&(delete l.any,l.any={}),(c=l.ask)&&delete c[u.get],(c=l.put)&&delete c[u.get],(c=u.soul)&&delete l.root.graph[c],(c=u.map)&&Object.keys(c).forEach(function(f,h){h=c[f],h.link&&l.root.$.get(h.link).off()}),(c=u.next)&&Object.keys(c).forEach(function(f,h){h=c[f],h.$.off()}),u.on("off",{}),a};var o})(e,"./on"),e(function(n){var r=e("./index"),s=r.chain.get.next;r.chain.get.next=function(c,l){var f;return Object.plain(l)?(f=((f=l["#"])||"")["="]||f)?c.get(f):((f=c.chain()._).lex=l,c.on("in",function(h){String.match(h.get||(h.put||"")["."],l["."]||l["#"]||l)&&f.on("in",h),this.to.next(h)}),f.$):(s||a)(c,l)},r.chain.map=function(c,l,f){var h=this,v=h._,p,_;return Object.plain(c)&&(p=c["."]?c:{".":c},c=u),c?(r.log.once("mapfn","Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),_=h.chain(),h.map().on(function(g,d,x,m){var M=(c||a).call(this,g,d,x,m);if(u!==M){if(g===M)return _._.on("in",x);if(r.is(M))return _._.on("in",M._);var y={};Object.keys(x.put).forEach(function(b){y[b]=x.put[b]},y),y["="]=M,_._.on("in",{get:d,put:y})}}),_):((_=v.each)||((v.each=_=h.chain())._.lex=p||_._.lex||v.lex,_._.nix=h.back("nix"),h.on("in",o,_._)),_)};function o(c){this.to.next(c);var l=this.as,f=c.$,h=f._,v=c.put,p;!h.soul&&!c.$$||(p=l.lex)&&!String.match(c.get||(v||"")["."],p["."]||p["#"]||p)||r.on.link(c,l)}var a=function(){},u})(e,"./map"),e(function(n){var r=e("./index");r.chain.set=function(s,o,a){var u=this,c=u.back(-1),l,f;return o=o||function(){},a=a||{},a.item=a.item||s,(l=((s||"")._||"")["#"])&&((s={})["#"]=l),typeof(f=r.valid(s))=="string"?u.get(l=f).put(s,o,a):r.is(s)?(u.put(function(h){s.get(function(v,p,_){if(!v)return o.call(u,{err:r.log('Only a node can be linked! Not "'+_.put+'"!')});(f={})[v]={"#":v},h(f)},!0)}),s):(Object.plain(s)&&(s=c.get(l=u.back("opt.uuid")()).put(s)),u.get(l||c.back("opt.uuid")(7)).put(s,o,a))}})(e,"./set"),e(function(n){e("./shim");var r=function(){},s=JSON.parseAsync||function(c,l,f){var h,v=+new Date;try{l(h,JSON.parse(c,f),o.sucks(+new Date-v))}catch(p){l(p)}},o=JSON.stringifyAsync||function(c,l,f,h){var v,p=+new Date;try{l(v,JSON.stringify(c,f,h),o.sucks(+new Date-p))}catch(_){l(_)}};o.sucks=function(c){c>99&&(console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."),o.sucks=r)};function a(c){var l=function(){},f=c.opt||{};f.log=f.log||console.log,f.gap=f.gap||f.wait||0,f.max=f.max||(f.memory?f.memory*999*999:3e8)*.3,f.pack=f.pack||f.max*.01*.01,f.puff=f.puff||9;var h=setTimeout.turn||setTimeout,v=c.dup,p=v.check,_=v.track,g=l.hear=function(m,M){if(m){if(f.max<=m.length)return l.say({dam:"!",err:"Message too big!"},M);l===this&&(g.d+=m.length||0,++g.c);var y=M.SH=+new Date,b=m[0],w;if(b==="["){s(m,function(L,E){if(L||!E)return l.say({dam:"!",err:"DAM JSON parse error."},M);console.STAT&&console.STAT(+new Date,E.length,"# on hear batch");var A=f.puff;(function N(){for(var T=+new Date,S=0,R;S<A&&(R=E[S++]);)l.hear(R,M);E=E.slice(S),console.STAT&&console.STAT(T,+new Date-T,"hear loop"),d(M),E.length&&h(N,0)})()}),m="";return}if(b==="{"||(m["#"]||Object.plain(m))&&(w=m)){if(w)return g.one(w,M,y);s(m,function(L,E){if(L||!E)return l.say({dam:"!",err:"DAM JSON parse error."},M);g.one(E,M,y)});return}}};g.one=function(m,M,N){var b,w,L,E,A;if(m.DBG&&(m.DBG=A={DBG:m.DBG}),A&&(A.h=N),A&&(A.hp=+new Date),(b=m["#"])||(b=m["#"]=String.random(9)),!(L=p(b))&&(w=m["##"],!(w&&(L=m["@"]||m.get&&b)&&v.check(E=L+w)))){if((m._=function(){}).via=l.leap=M,(L=m["><"])&&typeof L=="string"&&L.slice(0,99).split(",").forEach(function(T){this[T]=1},m._.yo={}),L=m.dam){(L=l.hear[L])&&L(m,M,c),_(b);return}(L=m.ok)&&(m._.near=L["/"]);var N=+new Date;A&&(A.is=N),M.SI=b,_.ed=function(T){b===T&&(_.ed=0,(T=v.s[b])&&(T.via=M,m.get&&(T.it=m)))},c.on("in",l.last=m),A&&(A.hd=+new Date),console.STAT&&console.STAT(N,+new Date-N,m.get?"msg get":m.put?"msg put":"msg"),_(b),E&&_(E),l.leap=l.last=null}},g.c=g.d=0,function(){var m=0,M;l.hash=function(w,L){var E,A,N,T=+new Date;o(w.put,function S(R,C){var k=(A||(A=N=C||"")).slice(0,32768);if(E=String.hash(k,E),A=A.slice(32768),A){h(S,0);return}console.STAT&&console.STAT(T,+new Date-T,"say json+hash"),w._.$put=N,w["##"]=E,l.say(w,L),delete w._.$put},y)};function y(w,L){var E;return L instanceof Object?(Object.keys(L).sort().forEach(b,{to:E={},on:L}),E):L}function b(w){this.to[w]=this.on[w]}l.say=function(w,L){var E;if((E=this)&&(E=E.to)&&E.next&&E.next(w),!w)return!1;var A,N,T,S=w["@"],R=w._||(w._=function(){}),C=w.DBG,k=+new Date;if(R.y=R.y||k,L||C&&(C.y=k),(A=w["#"])||(A=w["#"]=String.random(9)),!M&&_(A),!(N=w["##"])&&u!==w.put&&!R.via&&S){l.hash(w,L);return}if(!L&&S&&(L=(E=v.s[S])&&(E.via||(E=E.it)&&(E=E._)&&E.via)||(E=l.last)&&S===E["#"]&&l.leap),!L&&S)return v.s[S]?void 0:(console.STAT&&console.STAT(+new Date,++m,"total no peer to ack to"),!1);if(S&&!w.put&&!N&&((v.s[S]||"").it||"")["##"])return!1;if(!L&&l.way)return l.way(w);if(C&&(C.yh=+new Date),!(T=R.raw)){l.raw(w,L);return}if(C&&(C.yr=+new Date),!L||!L.id){if(!Object.plain(L||f.peers))return!1;var k=+new Date;f.puff;var F=f.peers,U=Object.keys(L||f.peers||{});console.STAT&&console.STAT(k,+new Date-k,"peer keys"),function ne(){var K=+new Date;M=1;var W=R.raw;R.raw=T;for(var q=0,ie;q<9&&(ie=(U||"")[q++]);)(ie=F[ie]||(L||"")[ie])&&l.say(w,ie);R.raw=W,M=0,U=U.slice(q),console.STAT&&console.STAT(K,+new Date-K,"say loop"),U.length&&(h(ne,0),S&&_(S))}();return}if(!L.wire&&l.wire&&l.wire(L),A!==L.last){if(L.last=A,L===R.via||(E=R.yo)&&(E[L.url]||E[L.pid]||E[L.id]))return!1;if(console.STAT&&console.STAT(k,((C||R).yp=+new Date)-(R.y||k),"say prep"),!M&&S&&_(S),L.batch){if(L.tail=(E=L.tail||0)+T.length,L.tail<=f.pack){L.batch+=(E?",":"")+T;return}d(L)}L.batch="[";var z=+new Date;setTimeout(function(){console.STAT&&console.STAT(z,+new Date-z,"0ms TO"),d(L)},f.gap),x(T,L),console.STAT&&S===L.SI&&console.STAT(k,+new Date-L.SH,"say ack")}},l.say.c=l.say.d=0,l.raw=function(w,L){if(!w)return"";var E=w._||{},A,N;if(N=E.raw)return N;if(typeof w=="string")return w;var T=w["##"],S=w["@"];if(T&&S){if(!E.via&&p(S+T))return!1;if(N=(v.s[S]||"").it){if(T===N["##"])return!1;N["##"]||(N["##"]=T)}}if(!w.dam&&!w["@"]){var R=0,C=[];N=f.peers;for(var k in N){var F=N[k];if(C.push(F.url||F.pid||F.id),++R>6)break}R>1&&(w["><"]=C.join())}if(w.put&&(N=w.ok)&&(w.ok={"@":(N["@"]||1)-1,"/":N["/"]==w._.near?l.near:N["/"]}),A=E.$put){N={},Object.keys(w).forEach(function(z){N[z]=w[z]}),N.put=":])([:",o(N,function(z,H){if(!z){var ne=+new Date;N=H.indexOf('"put":":])([:"'),U(u,H=H.slice(0,N+6)+A+H.slice(N+14)),console.STAT&&console.STAT(ne,+new Date-ne,"say slice")}});return}o(w,U);function U(z,H){z||(E.raw=H,l.say(w,L))}}}();function d(m){var M=m.batch,y=typeof M=="string";if(y&&(M+="]"),m.batch=m.tail=null,!!M&&!(y?3>M.length:!M.length)){if(!y)try{M=M.length===1?M[0]:JSON.stringify(M)}catch(b){return f.log("DAM JSON stringify error",b)}M&&x(M,m)}}function x(m,M){try{var y=M.wire;M.say?M.say(m):y.send&&y.send(m),l.say.d+=m.length||0,++l.say.c}catch{(M.queue=M.queue||[]).push(m)}}return l.near=0,l.hi=function(m){var M=m.wire,y;if(!M){l.wire(m.length&&{url:m,id:m}||m);return}m.id?f.peers[m.url||m.id]=m:(y=m.id=m.id||m.url||String.random(9),l.say({dam:"?",pid:c.opt.pid},f.peers[y]=m),delete v.s[m.last]),m.met||(l.near++,m.met=+new Date,c.on("hi",m)),y=m.queue,m.queue=[],setTimeout.each(y||[],function(b){x(b,m)},0,9)},l.bye=function(m){m.met&&--l.near,delete m.met,c.on("bye",m);var M=+new Date;M=M-(m.met||M),l.bye.time=((l.bye.time||M)+M)/2},l.hear["!"]=function(m,M){f.log("Error:",m.err)},l.hear["?"]=function(m,M){m.pid&&(M.pid||(M.pid=m.pid),m["@"])||(l.say({dam:"?",pid:f.pid,"@":m["#"]},M),delete v.s[M.last])},l.hear.mob=function(m,M){if(m.peers){var y=Object.keys(m.peers),b=y[Math.random()*y.length>>0];b&&(l.bye(M),l.hi(b))}},c.on("create",function(m){m.opt.pid=m.opt.pid||String.random(9),this.to.next(m),m.on("out",l.say)}),c.on("bye",function(m,M){m=f.peers[m.id||m]||m,this.to.next(m),m.bye?m.bye():(M=m.wire)&&M.close&&M.close(),delete f.peers[m.id],m.wire=null}),c.on("bye",function(m,M){this.to.next(m),(M=console.STAT)&&(M.peers=l.near),(M=m.url)&&setTimeout(function(){},f.lack||9e3)}),c.on("hi",function(m,M){if(this.to.next(m),(M=console.STAT)&&(M.peers=l.near),!f.super){var y=Object.keys(c.next||"");y.length>9999&&!console.SUBS&&console.log(console.SUBS="Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."),setTimeout.each(y,function(b){var w=c.next[b];if(f.super||(w.ask||"")[""]){l.say({get:{"#":b}},m);return}setTimeout.each(Object.keys(w.ask||""),function(L){L&&l.say({"##":String.hash((c.graph[b]||"")[L]),get:{"#":b,".":L}},m)})})}}),l}var u;try{n.exports=a}catch{}})(e,"./mesh"),e(function(n){var r=e("./index");r.Mesh=e("./mesh"),r.on("opt",function(o){if(this.to.next(o),o.once)return;var a=o.opt;if(a.WebSocket===!1)return;var u=r.window||{},c=a.WebSocket||u.WebSocket||u.webkitWebSocket||u.mozWebSocket;if(!c)return;a.WebSocket=c;var l=a.mesh=a.mesh||r.Mesh(o);l.wire||a.wire,l.wire=a.wire=f;function f(_){try{if(!_||!_.url)return d&&d(_);var g=_.url.replace(/^http/,"ws"),d=_.wire=new a.WebSocket(g);return d.onclose=function(){v(_),a.mesh.bye(_)},d.onerror=function(x){v(_)},d.onopen=function(){a.mesh.hi(_)},d.onmessage=function(x){x&&a.mesh.hear(x.data||x,_)},d}catch{a.mesh.bye(_)}}setTimeout(function(){!a.super&&o.on("out",{dam:"hi"})},1);var h=2*999;function v(_){clearTimeout(_.defer),a.peers[_.url]&&(p&&_.retry<=0||(_.retry=(_.retry||a.retry+1||60)-(-_.tried+(_.tried=+new Date)<h*4?1:0),_.defer=setTimeout(function g(){if(p&&p.hidden)return setTimeout(g,h);f(_)},h)))}var p=""+s!=typeof document&&document});var s})(e,"./websocket"),e(function(n){if(!(typeof Gun>"u")){var r=function(){},s;try{s=(Gun.window||r).localStorage}catch{}s||(Gun.log("Warning: No localStorage exists to persist data to!"),s={setItem:function(a,u){this[a]=u},removeItem:function(a){delete this[a]},getItem:function(a){return this[a]}});var o=JSON.stringifyAsync||function(a,u,c,l){var f;try{u(f,JSON.stringify(a,c,l))}catch(h){u(h)}};Gun.on("create",function a(u){this.to.next(u);var c=u.opt;u.graph;var l=[],f,h,v,p;if(c.localStorage===!1)return;c.prefix=c.file||"gun/";try{f=a[c.prefix]=a[c.prefix]||JSON.parse(v=s.getItem(c.prefix))||{}}catch{f=a[c.prefix]={}}v=(v||"").length,u.on("get",function(g){this.to.next(g);var d=g.get,x,m,M,y;!d||!(x=d["#"])||(m=f[x]||y,m&&(M=d["."])&&!Object.plain(M)&&(m=Gun.state.ify({},M,Gun.state.is(m,M),m[M],x)),Gun.on.get.ack(g,m))}),u.on("put",function(g){this.to.next(g);var d=g.put,x=d["#"],m=d["."],M=g["#"],y=g.ok||"";if(f[x]=Gun.state.ify(f[x],m,d[">"],d[":"],x),p&&v>4999880){u.on("in",{"@":M,err:"localStorage max!"});return}!g["@"]&&(!g._.via||Math.random()<y["@"]/y["/"])&&l.push(M),!h&&(h=setTimeout(_,9+v/333))});function _(){if(!l.length&&((setTimeout.turn||"").s||"").length){setTimeout(_,99);return}var g=l;clearTimeout(h),h=!1,l=[],o(f,function(d,x){try{!d&&s.setItem(c.prefix,x)}catch(m){d=p=m||"localStorage failure"}d&&(Gun.log(d+" Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"),u.on("localStorage:error",{err:d,get:c.prefix,put:f})),v=x.length,setTimeout.each(g,function(m){u.on("in",{"@":m,err:d,ok:0})},0,99)})}})}})(e,"./localStorage")})(),function(){var N;if(""+N!=typeof Gun){var e=function(T){console.warn("Warning! Deprecated internal utility will break in next version:",T)},t=Gun;t.fn=t.fn||{is:function(T){return e("fn"),!!T&&typeof T=="function"}},t.bi=t.bi||{is:function(T){return e("bi"),T instanceof Boolean||typeof T=="boolean"}},t.num=t.num||{is:function(T){return e("num"),!n(T)&&(T-parseFloat(T)+1>=0||T===1/0||T===-1/0)}},t.text=t.text||{is:function(T){return e("text"),typeof T=="string"}},t.text.ify=t.text.ify||function(T){return e("text.ify"),t.text.is(T)?T:typeof JSON<"u"?JSON.stringify(T):T&&T.toString?T.toString():T},t.text.random=t.text.random||function(T,S){e("text.random");var R="";for(T=T||24,S=S||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";T>0;)R+=S.charAt(Math.floor(Math.random()*S.length)),T--;return R},t.text.match=t.text.match||function(T,S){var R,C;return e("text.match"),typeof T!="string"?!1:(typeof S=="string"&&(S={"=":S}),S=S||{},R=S["="]||S["*"]||S[">"]||S["<"],T===R?!0:C!==S["="]?!1:(R=S["*"]||S[">"]||S["<"],T.slice(0,(R||"").length)===R?!0:C!==S["*"]?!1:C!==S[">"]&&C!==S["<"]?T>=S[">"]&&T<=S["<"]:C!==S[">"]&&T>=S[">"]||C!==S["<"]&&T<=S["<"]))},t.text.hash=t.text.hash||function(T,S){if(e("text.hash"),typeof T=="string"){if(S=S||0,!T.length)return S;for(var R=0,C=T.length,k;R<C;++R)k=T.charCodeAt(R),S=(S<<5)-S+k,S|=0;return S}},t.list=t.list||{is:function(T){return e("list"),T instanceof Array}},t.list.slit=t.list.slit||Array.prototype.slice,t.list.sort=t.list.sort||function(T){return e("list.sort"),function(S,R){return!S||!R?0:(S=S[T],R=R[T],S<R?-1:S>R?1:0)}},t.list.map=t.list.map||function(T,S,R){return e("list.map"),E(T,S,R)},t.list.index=1,t.obj=t.boj||{is:function(T){return e("obj"),T?T instanceof Object&&T.constructor===Object||Object.prototype.toString.call(T).match(/^\[object (\w+)\]$/)[1]==="Object":!1}},t.obj.put=t.obj.put||function(T,S,R){return e("obj.put"),(T||{})[S]=R,T},t.obj.has=t.obj.has||function(T,S){return e("obj.has"),T&&Object.prototype.hasOwnProperty.call(T,S)},t.obj.del=t.obj.del||function(T,S){if(e("obj.del"),!!T)return T[S]=null,delete T[S],T},t.obj.as=t.obj.as||function(T,S,R,C){return e("obj.as"),T[S]=T[S]||(C===R?{}:R)},t.obj.ify=t.obj.ify||function(T){if(e("obj.ify"),M(T))return T;try{T=JSON.parse(T)}catch{T={}}return T},function(){var T;function S(R,C){b(this,C)&&T!==this[C]||(this[C]=R)}t.obj.to=t.obj.to||function(R,C){return e("obj.to"),C=C||{},E(R,S,C),C}}(),t.obj.copy=t.obj.copy||function(T){return e("obj.copy"),T&&JSON.parse(JSON.stringify(T))},function(){function T(S,R){var C=this.n,k;if(!(C&&(R===C||M(C)&&b(C,R)))&&k!==R)return!0}t.obj.empty=t.obj.empty||function(S,R){return e("obj.empty"),S?!E(S,T,{n:R}):!0}}(),function(){function T(C,k){if(arguments.length===2){T.r=T.r||{},T.r[C]=k;return}T.r=T.r||[],T.r.push(C)}var S=Object.keys,R;Object.keys=Object.keys||function(C){return R(C,function(k,F,U){U(F)})},t.obj.map=R=t.obj.map||function(C,k,F){e("obj.map");var U,z=0,H,ne,K,W,q=typeof k=="function";if(T.r=U,S&&M(C)&&(K=S(C),W=!0),F=F||{},n(C)||K)for(H=(K||C).length;z<H;z++){var ie=z+t.list.index;if(q){if(ne=W?k.call(F,C[K[z]],K[z],T):k.call(F,C[z],ie,T),ne!==U)return ne}else if(k===C[W?K[z]:z])return K?K[z]:ie}else for(z in C)if(q){if(b(C,z)&&(ne=F?k.call(F,C[z],z,T):k(C[z],z,T),ne!==U))return ne}else if(k===C[z])return z;return q?T.r:t.list.index?0:-1}}(),t.time=t.time||{},t.time.is=t.time.is||function(T){return e("time"),T?T instanceof Date:+new Date().getTime()};var x=t.fn.is,n=t.list.is,m=t.obj,M=m.is,b=m.has,E=m.map,r={};r.is=function(T){return e("val.is"),T===N?!1:T===null?!0:T===1/0?!1:a(T)||o(T)||p(T)?!0:r.link.is(T)||!1},r.link=r.rel={_:"#"},function(){r.link.is=function(S){if(e("val.link.is"),S&&S[s]&&!S._&&M(S)){var R={};if(E(S,T,R),R.id)return R.id}return!1};function T(S,R){var C=this;if(C.id)return C.id=!1;if(R==s&&a(S))C.id=S;else return C.id=!1}}(),r.link.ify=function(T){return e("val.link.ify"),L({},s,T)},t.obj.has._=".";var s=r.link._,N,o=t.bi.is,p=t.num.is,a=t.text.is,m=t.obj,M=m.is,L=m.put,E=m.map;t.val=t.val||r;var u={_:"_"};u.soul=function(T,S){return e("node.soul"),T&&T._&&T._[S||f]},u.soul.ify=function(T,S){return e("node.soul.ify"),S=typeof S=="string"?{soul:S}:S||{},T=T||{},T._=T._||{},T._[f]=S.soul||T._[f]||l(),T},u.soul._=r.link._,function(){u.is=function(S,R,C){e("node.is");var k;return M(S)&&(k=u.soul(S))?!E(S,T,{as:C,cb:R,s:k,n:S}):!1};function T(S,R){if(R!==u._){if(!r.is(S))return!0;this.cb&&this.cb.call(this.as,S,R,this.n,this.s)}}}(),function(){u.ify=function(S,R,C){return e("node.ify"),R?typeof R=="string"?R={soul:R}:typeof R=="function"&&(R={map:R}):R={},R.map&&(R.node=R.map.call(C,S,N,R.node||{})),(R.node=u.soul.ify(R.node||{},R))&&E(S,T,{o:R,as:C}),R.node};function T(S,R){var C=this.o,k,F;if(C.map){k=C.map.call(this.as,S,""+R,C.node),F===k?y(C.node,R):C.node&&(C.node[R]=k);return}r.is(S)&&(C.node[R]=S)}}();var m=t.obj,M=m.is,y=m.del,E=m.map,c=t.text,l=c.random,f=u.soul._,N;t.node=t.node||u;var h=t.state;h.lex=function(){return e("state.lex"),h().toString(36).replace(".","")},h.to=function(T,S,R){e("state.to");var C=(T||{})[S];return M(C)&&(C=A(C)),h.ify(R,S,h.is(T,S),C,u.soul(T))},function(){h.map=function(S,R,C){e("state.map");var k,F=M(F=S||R)?F:null;return S=x(S=S||R)?S:null,F&&!S?(R=p(R)?R:h(),F[g]=F[g]||{},E(F,T,{o:F,s:R}),F):(C=C||M(R)?R:k,R=p(R)?R:h(),function(U,z,H,ne){if(!S)return T.call({o:H,s:R},U,z),U;S.call(C||this||{},U,z,H,ne),!(b(H,z)&&k===H[z])&&T.call({o:H,s:R},U,z)})};function T(S,R){g!==R&&h.ify(this.o,R,this.s)}}();var m=t.obj;m.as;var b=m.has,M=m.is,E=m.map,A=m.copy,v=t.num,p=v.is,_=t.fn,x=_.is,g=u._,N,d={};(function(){d.is=function(R,C,k,F){return e("graph.is"),!R||!M(R)||w(R)?!1:!E(R,T,{cb:C,fn:k,as:F})};function T(R,C){if(!R||C!==u.soul(R)||!u.is(R,this.fn,this.as))return!0;this.cb&&(S.n=R,S.as=this.as,this.cb.call(S.as,R,C,S))}function S(R){R&&u.is(S.n,R,S.as)}})(),function(){d.ify=function(F,U,z){e("graph.ify");var H={path:[],obj:F};return U?typeof U=="string"?U={soul:U}:typeof U=="function"&&(U.map=U):U={},typeof z=="string"&&(U.soul=U.soul||z,z=N),U.soul&&(H.link=r.link.ify(U.soul)),U.shell=(z||{}).shell,U.graph=U.graph||{},U.seen=U.seen||[],U.as=U.as||z,T(U,H),U.root=H.node,U.graph};function T(F,U){var z;return(z=k(F,U))?z:(U.env=F,U.soul=R,u.ify(U.obj,S,U)&&(U.link=U.link||r.link.ify(u.soul(U.node)),U.obj!==F.shell&&(F.graph[r.link.is(U.link)]=U.node)),U)}function S(F,U,z){var H=this,ne=H.env,K,W;if(u._===U&&b(F,r.link._))return z._;if(K=C(F,U,z,H,ne)){if(U||(H.node=H.node||z||{},b(F,u._)&&u.soul(F)&&(H.node._=A(F._)),H.node=u.soul.ify(H.node,r.link.is(H.link)),H.link=H.link||r.link.ify(u.soul(H.node))),(W=ne.map)&&(W.call(ne.as||{},F,U,z,H),b(z,U))){if(F=z[U],N===F){y(z,U);return}if(!(K=C(F,U,z,H,ne)))return}if(!U)return H.node;if(K===!0)return F;if(W=T(ne,{obj:F,path:H.path.concat(U)}),!!W.node)return W.link}}function R(F){var U=this,z=r.link.is(U.link),H=U.env.graph;U.link=U.link||r.link.ify(F),U.link[r.link._]=F,U.node&&U.node[u._]&&(U.node[u._][r.link._]=F),b(H,z)&&(H[F]=H[z],y(H,z))}function C(F,U,z,H,ne){var K;if(r.is(F))return!0;if(M(F))return 1;if(K=ne.invalid)return F=K.call(ne.as||{},F,U,z),C(F,U,z,H,ne);ne.err="Invalid value at '"+H.path.concat(U).join(".")+"'!",t.list.is(F)&&(ne.err+=" Use `.set(item)` instead of an Array.")}function k(F,U){for(var z=F.seen,H=z.length,ne;H--;)if(ne=z[H],U.obj===ne.obj)return ne;z.push(U)}}(),d.node=function(T){e("graph.node");var S=u.soul(T);if(S)return L({},S,T)},function(){d.to=function(S,R,C){if(e("graph.to"),!!S){var k={};return C=C||{seen:{}},E(S[R],T,{obj:k,graph:S,opt:C}),k}};function T(S,R){var C,k;if(u._===R){if(w(S,r.link._))return;this.obj[R]=A(S);return}if(!(C=r.link.is(S))){this.obj[R]=S;return}if(k=this.opt.seen[C]){this.obj[R]=k;return}this.obj[R]=this.opt.seen[C]=d.to(this.graph,C,this.opt)}}();var x=t.fn.is,m=t.obj,M=m.is,y=m.del,b=m.has,w=m.empty,L=m.put,E=m.map,A=m.copy,N;t.graph=t.graph||d}}()})(po);var rh=po.exports,sh=rh;const ah=ih(sh);var mo={exports:{}};mo.exports;(function(i){(function(){function e(n,r){return r?lu(n):n.slice?e[s(n)]:function(o,a){n(o={exports:{}}),e[s(a)]=o.exports};function s(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){typeof self<"u"&&(n.window=self),typeof window<"u"&&(n.window=window);var r=n.window||n,s,o=r.SEA||{};(o.window=n.window)&&(o.window.SEA=o);try{s+""!=typeof t&&(t.exports=o)}catch{}n.exports=o})(e,"./root"),e(function(n){var r=e("./root");try{r.window&&location.protocol.indexOf("s")<0&&location.host.indexOf("localhost")<0&&!/^127\.\d+\.\d+\.\d+$/.test(location.hostname)&&location.protocol.indexOf("file:")<0&&(console.warn("HTTPS needed for WebCrypto in SEA, redirecting..."),location.protocol="https:")}catch{}})(e,"./https"),e(function(n){var r;if(r+""==typeof btoa){if(r+""==typeof Buffer)try{Js.Buffer=e("buffer",1).Buffer}catch{console.log("Please `npm install buffer` or add it to your package.json !")}Js.btoa=function(s){return Buffer.from(s,"binary").toString("base64")},Js.atob=function(s){return Buffer.from(s,"base64").toString("binary")}}})(e,"./base64"),e(function(n){e("./base64");function r(){}Object.assign(r,{from:Array.from}),r.prototype=Object.create(Array.prototype),r.prototype.toString=function(s,o,a){s=s||"utf8",o=o||0;const u=this.length;if(s==="hex"){const c=new Uint8Array(this);return[...Array((a&&a+1||u)-o).keys()].map(l=>c[l+o].toString(16).padStart(2,"0")).join("")}if(s==="utf8")return Array.from({length:(a||u)-o},(c,l)=>String.fromCharCode(this[l+o])).join("");if(s==="base64")return btoa(this)},n.exports=r})(e,"./array"),e(function(n){e("./base64");var r=e("./array");function s(...o){return console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()"),s.from(...o)}s.prototype=Object.create(Array.prototype),Object.assign(s,{from(){if(!Object.keys(arguments).length||arguments[0]==null)throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");const o=arguments[0];let a;if(typeof o=="string"){const c=arguments[1]||"utf8";if(c==="hex"){const l=o.match(/([\da-fA-F]{2})/g).map(f=>parseInt(f,16));if(!l||!l.length)throw new TypeError("Invalid first argument for type 'hex'.");a=r.from(l)}else if(c==="utf8"||c==="binary"){const l=o.length,f=new Uint16Array(l);Array.from({length:l},(h,v)=>f[v]=o.charCodeAt(v)),a=r.from(f)}else if(c==="base64"){const l=atob(o),f=l.length,h=new Uint8Array(f);Array.from({length:f},(v,p)=>h[p]=l.charCodeAt(p)),a=r.from(h)}else c==="binary"?a=r.from(o):console.info("SafeBuffer.from unknown encoding: "+c);return a}if(o.byteLength,o.byteLength?o.byteLength:o.length){let c;return o instanceof ArrayBuffer&&(c=new Uint8Array(o)),r.from(c||o)}},alloc(o,a=0){return r.from(new Uint8Array(Array.from({length:o},()=>a)))},allocUnsafe(o){return r.from(new Uint8Array(Array.from({length:o})))},concat(o){if(!Array.isArray(o))throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");return r.from(o.reduce((a,u)=>a.concat(Array.from(u)),[]))}}),s.prototype.from=s.from,s.prototype.toString=r.prototype.toString,n.exports=s})(e,"./buffer"),e(function(n){const r=e("./root"),s={Buffer:e("./buffer")};var o={},a;if(JSON.parseAsync=JSON.parseAsync||function(c,l,f){var h;try{l(h,JSON.parse(c,f))}catch(v){l(v)}},JSON.stringifyAsync=JSON.stringifyAsync||function(c,l,f,h){var v;try{l(v,JSON.stringify(c,f,h))}catch(p){l(p)}},s.parse=function(c,l){return new Promise(function(f,h){JSON.parseAsync(c,function(v,p){v?h(v):f(p)},l)})},s.stringify=function(c,l,f){return new Promise(function(h,v){JSON.stringifyAsync(c,function(p,_){p?v(p):h(_)},l,f)})},r.window&&(s.crypto=r.window.crypto||r.window.msCrypto,s.subtle=(s.crypto||o).subtle||(s.crypto||o).webkitSubtle,s.TextEncoder=r.window.TextEncoder,s.TextDecoder=r.window.TextDecoder,s.random=c=>s.Buffer.from(s.crypto.getRandomValues(new Uint8Array(s.Buffer.alloc(c))))),!s.TextDecoder){const{TextEncoder:c,TextDecoder:l}=e((a+""==typeof t?".":"")+"./lib/text-encoding",1);s.TextDecoder=l,s.TextEncoder=c}if(!s.crypto)try{var u=e("crypto",1);Object.assign(s,{crypto:u,random:l=>s.Buffer.from(u.randomBytes(l))});const{Crypto:c}=e("@peculiar/webcrypto",1);s.ossl=s.subtle=new c({directory:"ossl"}).subtle}catch{console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !")}n.exports=s})(e,"./shim"),e(function(n){var r=e("./root"),s=e("./shim"),o={};o.pbkdf2={hash:{name:"SHA-256"},iter:1e5,ks:64},o.ecdsa={pair:{name:"ECDSA",namedCurve:"P-256"},sign:{name:"ECDSA",hash:{name:"SHA-256"}}},o.ecdh={name:"ECDH",namedCurve:"P-256"},o.jwk=function(a,u){a=a.split(".");var c=a[0],l=a[1],f={kty:"EC",crv:"P-256",x:c,y:l,ext:!0};return f.key_ops=u?["sign"]:["verify"],u&&(f.d=u),f},o.keyToJwk=function(a){return{kty:"oct",k:a.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,""),ext:!1,alg:"A256GCM"}},o.recall={validity:12*60*60,hook:function(a){return a}},o.check=function(a){return typeof a=="string"&&a.slice(0,4)==="SEA{"},o.parse=async function(u){try{var c=typeof u=="string";return c&&u.slice(0,4)==="SEA{"&&(u=u.slice(3)),c?await s.parse(u):u}catch{}return u},r.opt=o,n.exports=o})(e,"./settings"),e(function(n){var r=e("./shim");n.exports=async function(s,o){var a=typeof s=="string"?s:await r.stringify(s),u=await r.subtle.digest({name:o||"SHA-256"},new r.TextEncoder().encode(a));return r.Buffer.from(u)}})(e,"./sha256"),e(function(n){const r=e("./shim"),s=r.subtle,o=r.ossl?r.ossl:s,a=u=>o.digest({name:"SHA-1"},new ArrayBuffer(u));n.exports=a})(e,"./sha1"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.work=r.work||(async(c,l,f,h)=>{try{var v=(l||{}).epub||l;if(h=h||{},v instanceof Function&&(f=v,v=u),c=typeof c=="string"?c:await s.stringify(c),(h.name||"").toLowerCase().slice(0,3)==="sha"){var p=s.Buffer.from(await a(c,h.name),"binary").toString(h.encode||"base64");if(f)try{f(p)}catch(x){console.log(x)}return p}v=v||s.random(9);var _=await(s.ossl||s.subtle).importKey("raw",new s.TextEncoder().encode(c),{name:h.name||"PBKDF2"},!1,["deriveBits"]),g=await(s.ossl||s.subtle).deriveBits({name:h.name||"PBKDF2",iterations:h.iterations||o.pbkdf2.iter,salt:new s.TextEncoder().encode(h.salt||v),hash:h.hash||o.pbkdf2.hash},_,h.length||o.pbkdf2.ks*8);c=s.random(c.length);var d=s.Buffer.from(g,"binary").toString(h.encode||"base64");if(f)try{f(d)}catch(x){console.log(x)}return d}catch(x){if(console.log(x),r.err=x,r.throw)throw x;f&&f();return}}),n.exports=r.work})(e,"./work"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings"),r.name=r.name||(async(o,a)=>{try{if(o)try{o()}catch(u){console.log(u)}return}catch(u){if(console.log(u),r.err=u,r.throw)throw u;o&&o();return}}),r.pair=r.pair||(async(o,a)=>{try{var u=s.ossl||s.subtle,c=await s.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"]).then(async h=>{var v={};v.priv=(await s.subtle.exportKey("jwk",h.privateKey)).d;var p=await s.subtle.exportKey("jwk",h.publicKey);return v.pub=p.x+"."+p.y,v});try{var l=await u.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"]).then(async h=>{var v={};v.epriv=(await u.exportKey("jwk",h.privateKey)).d;var p=await u.exportKey("jwk",h.publicKey);return v.epub=p.x+"."+p.y,v})}catch(h){if(r.window)throw h;if(h=="Error: ECDH is not a supported algorithm")console.log("Ignoring ECDH...");else throw h}l=l||{};var f={pub:c.pub,priv:c.priv,epub:l.epub,epriv:l.epriv};if(o)try{o(f)}catch(h){console.log(h)}return f}catch(h){if(console.log(h),r.err=h,r.throw)throw h;o&&o();return}}),n.exports=r.pair})(e,"./pair"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.sign=r.sign||(async(c,l,f,h)=>{try{if(h=h||{},!(l||h).priv){if(!r.I)throw"No signing key.";l=await r.I(null,{what:c,how:"sign",why:h.why})}if(u===c)throw"`undefined` not allowed.";var v=await o.parse(c),p=h.check=h.check||v;if(r.verify&&(r.opt.check(p)||p&&p.s&&p.m)&&u!==await r.verify(p,l)){var M=await o.parse(p);if(h.raw||(M="SEA"+await s.stringify(M)),f)try{f(M)}catch(b){console.log(b)}return M}var _=l.pub,g=l.priv,d=o.jwk(_,g),x=await a(v),m=await(s.ossl||s.subtle).importKey("jwk",d,{name:"ECDSA",namedCurve:"P-256"},!1,["sign"]).then(y=>(s.ossl||s.subtle).sign({name:"ECDSA",hash:{name:"SHA-256"}},y,new Uint8Array(x))),M={m:v,s:s.Buffer.from(m,"binary").toString(h.encode||"base64")};if(h.raw||(M="SEA"+await s.stringify(M)),f)try{f(M)}catch(y){console.log(y)}return M}catch(y){if(console.log(y),r.err=y,r.throw)throw y;f&&f();return}}),n.exports=r.sign})(e,"./sign"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./sha256"),u;r.verify=r.verify||(async(f,h,v,p)=>{try{var _=await o.parse(f);if(h===!1){var g=await o.parse(_.m);if(v)try{v(g)}catch(E){console.log(E)}return g}p=p||{};var d=h.pub||h,x=r.opt.slow_leak?await r.opt.slow_leak(d):await(s.ossl||s.subtle).importKey("jwk",o.jwk(d),{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),m=await a(_.m),M,y,b,w;try{if(M=s.Buffer.from(_.s,p.encode||"base64"),y=new Uint8Array(M),b=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},x,y,new Uint8Array(m)),!b)throw"Signature did not match."}catch{if(r.opt.fallback)return await r.opt.fall_verify(f,h,v,p)}var L=b?await o.parse(_.m):u;if(v)try{v(L)}catch(E){console.log(E)}return L}catch(E){if(console.log(E),r.err=E,r.throw)throw E;v&&v();return}}),n.exports=r.verify;var c={};r.opt.slow_leak=f=>{if(c[f])return c[f];var h=o.jwk(f);return c[f]=(s.ossl||s.subtle).importKey("jwk",h,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),c[f]};var l=r.opt;r.opt.fall_verify=async function(f,h,v,p,_){if(_===r.opt.fallback)throw"Signature did not match";_=_||1;var g=f||"";f=r.opt.unpack(f)||f;var d=await o.parse(f),x=h.pub||h,m=await r.opt.slow_leak(x),M=_<=r.opt.fallback?s.Buffer.from(await s.subtle.digest({name:"SHA-256"},new s.TextEncoder().encode(await o.parse(d.m)))):await a(d.m),y,b,w;try{if(y=s.Buffer.from(d.s,p.encode||"base64"),b=new Uint8Array(y),w=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},m,b,new Uint8Array(M)),!w)throw"Signature did not match."}catch{try{y=s.Buffer.from(d.s,"utf8"),b=new Uint8Array(y),w=await(s.ossl||s.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},m,b,new Uint8Array(M))}catch{if(!w)throw"Signature did not match."}}var L=w?await o.parse(d.m):u;if(l.fall_soul=g["#"],l.fall_key=g["."],l.fall_val=f,l.fall_state=g[">"],v)try{v(L)}catch(E){console.log(E)}return L},r.opt.fallback=2})(e,"./verify"),e(function(n){var r=e("./shim"),s=e("./settings"),o=e("./sha256");const a=async(u,c,l)=>{const f=u+(c||r.random(8)).toString("utf8"),h=r.Buffer.from(await o(f),"binary"),v=s.keyToJwk(h);return await r.subtle.importKey("jwk",v,{name:"AES-GCM"},!1,["encrypt","decrypt"])};n.exports=a})(e,"./aeskey"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings");var o=e("./aeskey"),a;r.encrypt=r.encrypt||(async(u,c,l,f)=>{try{f=f||{};var h=(c||f).epriv||c;if(a===u)throw"`undefined` not allowed.";if(!h){if(!r.I)throw"No encryption key.";c=await r.I(null,{what:u,how:"encrypt",why:f.why}),h=c.epriv||c}var v=typeof u=="string"?u:await s.stringify(u),p={s:s.random(9),iv:s.random(15)},_=await o(h,p.s,f).then(d=>s.subtle.encrypt({name:f.name||"AES-GCM",iv:new Uint8Array(p.iv)},d,new s.TextEncoder().encode(v))),g={ct:s.Buffer.from(_,"binary").toString(f.encode||"base64"),iv:p.iv.toString(f.encode||"base64"),s:p.s.toString(f.encode||"base64")};if(f.raw||(g="SEA"+await s.stringify(g)),l)try{l(g)}catch(d){console.log(d)}return g}catch(d){if(console.log(d),r.err=d,r.throw)throw d;l&&l();return}}),n.exports=r.encrypt})(e,"./encrypt"),e(function(n){var r=e("./root"),s=e("./shim"),o=e("./settings"),a=e("./aeskey");r.decrypt=r.decrypt||(async(u,c,l,f)=>{try{f=f||{};var h=(c||f).epriv||c;if(!h){if(!r.I)throw"No decryption key.";c=await r.I(null,{what:u,how:"decrypt",why:f.why}),h=c.epriv||c}var v=await o.parse(u),p,_,g;try{p=s.Buffer.from(v.s,f.encode||"base64"),_=s.Buffer.from(v.iv,f.encode||"base64"),g=s.Buffer.from(v.ct,f.encode||"base64");var d=await a(h,p,f).then(m=>s.subtle.decrypt({name:f.name||"AES-GCM",iv:new Uint8Array(_),tagLength:128},m,new Uint8Array(g)))}catch{if(f.encode==="utf8")throw"Could not decrypt";if(r.opt.fallback)return f.encode="utf8",await r.decrypt(u,c,l,f)}var x=await o.parse(new s.TextDecoder("utf8").decode(d));if(l)try{l(x)}catch(m){console.log(m)}return x}catch(m){if(console.log(m),r.err=m,r.throw)throw m;l&&l();return}}),n.exports=r.decrypt})(e,"./decrypt"),e(function(n){var r=e("./root"),s=e("./shim");e("./settings"),r.secret=r.secret||(async(a,u,c,l)=>{try{if(l=l||{},!u||!u.epriv||!u.epub){if(!r.I)throw"No secret mix.";u=await r.I(null,{what:a,how:"secret",why:l.why})}var f=a.epub||a,h=u.epub,v=u.epriv,p=s.ossl||s.subtle,_=o(f),g=Object.assign({public:await p.importKey(..._,!0,[])},{name:"ECDH",namedCurve:"P-256"}),d=o(h,v),x=await p.importKey(...d,!1,["deriveBits"]).then(async M=>{var y=await p.deriveBits(g,M,256),b=new Uint8Array(y),w=await p.importKey("raw",b,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"]);return p.exportKey("jwk",w).then(({k:L})=>L)}),m=x;if(c)try{c(m)}catch(M){console.log(M)}return m}catch(M){if(console.log(M),r.err=M,r.throw)throw M;c&&c();return}});var o=(a,u)=>{var[c,l]=a.split("."),f=u?{d:u}:{};return["jwk",Object.assign(f,{x:c,y:l,kty:"EC",crv:"P-256",ext:!0}),{name:"ECDH",namedCurve:"P-256"}]};n.exports=r.secret})(e,"./secret"),e(function(n){var r=e("./root");r.certify=r.certify||(async(s,o={},a,u,c={})=>{try{if(console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version."),s=(()=>{var m=[];if(s){if((typeof s=="string"||Array.isArray(s))&&s.indexOf("*")>-1)return"*";if(typeof s=="string")return s;if(Array.isArray(s)){if(s.length===1&&s[0])return typeof s[0]=="object"&&s[0].pub?s[0].pub:typeof s[0]=="string"?s[0]:null;s.map(M=>{typeof M=="string"?m.push(M):typeof M=="object"&&M.pub&&m.push(M.pub)})}return typeof s=="object"&&s.pub?s.pub:m.length>0?m:null}})(),!s)return console.log("No certificant found.");const f=c.expiry&&(typeof c.expiry=="number"||typeof c.expiry=="string")?parseFloat(c.expiry):null,h=(o||{}).read?o.read:null,v=(o||{}).write?o.write:typeof o=="string"||Array.isArray(o)||o["+"]||o["#"]||o["."]||o["="]||o["*"]||o[">"]||o["<"]?o:null,p=(c||{}).block||(c||{}).blacklist||(c||{}).ban||{},_=p.read&&(typeof p.read=="string"||(p.read||{})["#"])?p.read:null,g=typeof p=="string"?p:p.write&&(typeof p.write=="string"||p.write["#"])?p.write:null;if(!h&&!v)return console.log("No policy found.");const d=JSON.stringify({c:s,...f?{e:f}:{},...h?{r:h}:{},...v?{w:v}:{},..._?{rb:_}:{},...g?{wb:g}:{}});var l=await r.sign(d,a,null,{raw:1});if(c.raw||(l="SEA"+JSON.stringify(l)),u)try{u(l)}catch(m){console.log(m)}return l}catch(f){if(r.err=f,r.throw)throw f;u&&u();return}}),n.exports=r.certify})(e,"./certify"),e(function(n){var r=e("./shim"),s=e("./root");s.work=e("./work"),s.sign=e("./sign"),s.verify=e("./verify"),s.encrypt=e("./encrypt"),s.decrypt=e("./decrypt"),s.certify=e("./certify"),s.random=s.random||r.random,s.Buffer=s.Buffer||e("./buffer"),s.keyid=s.keyid||(async o=>{try{const a=r.Buffer.concat(o.replace(/-/g,"+").replace(/_/g,"/").split(".").map(f=>r.Buffer.from(f,"base64"))),u=r.Buffer.concat([r.Buffer.from([153,a.length/256,a.length%256]),a]),c=await sha1hash(u),l=r.Buffer.from(c,"binary");return l.toString("hex",l.length-8)}catch(a){throw console.log(a),a}}),((s.window||{}).GUN||{}).SEA=s,n.exports=s})(e,"./sea"),e(function(n){var r=e("./sea"),s,o;r.window?s=r.window.GUN||{chain:{}}:s=e((o+""==typeof t?".":"")+"./gun",1),r.GUN=s;function a(c){this._={$:this}}a.prototype=function(){function c(){}return c.prototype=s.chain,new c}(),a.prototype.constructor=a,s.chain.user=function(c){var l=this,h=l.back(-1),f;if(c)return c=r.opt.pub((c._||"")["#"])||c,h.get("~"+c);if(f=h.back("user"))return f;var h=h._,v=h,p=v.opt.uuid||u;return(v=(f=v.user=l.chain(new a))._).opt={},v.opt.uuid=function(_){var g=p(),d=h.user;return!d||!(d=d.is)||!(d=d.pub)||(g="~"+d+"/"+g,_&&_.call&&_(null,g)),g},f};function u(){return s.state().toString(36).replace(".","")}s.User=a,a.GUN=s,a.SEA=s.SEA=r,n.exports=a})(e,"./user"),e(function(n){var r,s=""+r!=typeof GUN?GUN||{chain:{}}:e((""+r==typeof t?".":"")+"./gun",1);s.chain.then=function(o,a){var u=this,c=new Promise(function(l,f){u.once(l,a)});return o?c.then(o):c}})(e,"./then"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.create=function(...u){var c=typeof u[0]=="object"&&(u[0].pub||u[0].epub)?u[0]:typeof u[1]=="object"&&(u[1].pub||u[1].epub)?u[1]:null,l=c&&(c.pub||c.epub)?c.pub:typeof u[0]=="string"?u[0]:null,f=c&&(c.pub||c.epub)?c:l&&typeof u[1]=="string"?u[1]:null,h=u.filter(m=>typeof m=="function")[0]||null,v=u&&u.length>1&&typeof u[u.length-1]=="object"?u[u.length-1]:{},p=this,_=p._,g=p.back(-1);if(h=h||a,v=v||{},v.check!==!1){var d;if(l||(d="No user."),(f||"").length<8&&(d="Password too short!"),d)return h({err:o.log(d)}),p}if(_.ing)return(h||a)({err:o.log("User is already being created or authenticated!"),wait:!0}),p;_.ing=!0;var x={};return x.a=function(m){if(x.pubs=m,m&&!v.already){var M={err:o.log("User already created!")};_.ing=!1,(h||a)(M),p.leave();return}x.salt=String.random(64),s.work(f,x.salt,x.b)},x.b=function(m){x.proof=m,c?x.c(c):s.pair(x.c)},x.c=function(m){var M;x.pair=m||{},(M=_.root.user)&&(M._.sea=m,M.is={pub:m.pub,epub:m.epub,alias:l}),x.data={pub:m.pub},x.d()},x.d=function(){x.data.alias=l,x.e()},x.e=function(){x.data.epub=x.pair.epub,s.encrypt({priv:x.pair.priv,epriv:x.pair.epriv},x.proof,x.f,{raw:1})},x.f=function(m){x.data.auth=JSON.stringify({ek:m,s:x.salt}),x.g(x.data.auth)},x.g=function(m){var M;x.data.auth=x.data.auth||m,g.get(M="~"+x.pair.pub).put(x.data).on(x.h);var y={};y[M]={"#":M},g.get("~@"+l).put(y).get(M).on(x.i)},x.h=function(m,M,y,b){b.off(),x.h.ok=1,x.i()},x.i=function(m,M,y,b){b&&(x.i.ok=1,b.off()),!(!x.h.ok||!x.i.ok)&&(_.ing=!1,h({ok:0,pub:x.pair.pub}),a===h&&(c?p.auth(c):p.auth(l,f)))},g.get("~@"+l).once(x.a),p},r.prototype.leave=function(u,c){var l=this,f=l.back(-1)._.user;if(f&&(delete f.is,delete f._.is,delete f._.sea),s.window)try{var h={};h=s.window.sessionStorage,delete h.recall,delete h.pair}catch{}return l}})(e,"./create"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.auth=function(...c){var l=typeof c[0]=="object"&&(c[0].pub||c[0].epub)?c[0]:typeof c[1]=="object"&&(c[1].pub||c[1].epub)?c[1]:null,f=!l&&typeof c[0]=="string"?c[0]:null,h=(f||l&&!(l.priv&&l.epriv))&&typeof c[1]=="string"?c[1]:null,v=c.filter(y=>typeof y=="function")[0]||null,p=c&&c.length>1&&typeof c[c.length-1]=="object"?c[c.length-1]:{},_=this,g=_._,d=_.back(-1);if(g.ing)return(v||a)({err:o.log("User is already being created or authenticated!"),wait:!0}),_;g.ing=!0;var x={},m,M=9;return x.a=function(y){if(!y)return x.b();if(!y.pub){var b=[];return Object.keys(y).forEach(function(w){w!="_"&&b.push(y[w])}),x.b(b)}if(x.name)return x.f(y);x.c((x.data=y).auth)},x.b=function(y){var b=(x.list=(x.list||[]).concat(y||[])).shift();if(m===b){if(x.name)return x.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");if(f&&M--){d.get("~@"+f).once(x.a);return}return x.err("Wrong user or password.")}d.get(b).once(x.a)},x.c=function(y){if(m===y)return x.b();if(typeof y=="string")return x.c(u(y));s.work(h,(x.auth=y).s,x.d,x.enc)},x.d=function(y){s.decrypt(x.auth.ek,y,x.e,x.enc)},x.e=function(y){if(m===y)return x.enc?(x.enc=null,x.b()):(x.enc={encode:"utf8"},x.c(x.auth));x.half=y,x.f(x.data)},x.f=function(y){var b=x.half||{},w=x.data||{};x.g(x.lol={pub:y.pub||w.pub,epub:y.epub||w.epub,priv:y.priv||b.priv,epriv:y.epriv||b.epriv})},x.g=function(y){if(!y||!y.pub||!y.epub)return x.b();x.pair=y;var b=d._.user,w=b._;w.tag;var L=w.opt;w=b._=d.get("~"+y.pub)._,w.opt=L,b.is={pub:y.pub,epub:y.epub,alias:f||y.pub},w.sea=x.pair,g.ing=!1;try{h&&m==(u(g.root.graph["~"+y.pub].auth)||"")[":"]&&(p.shuffle=p.change=h)}catch{}if(p.change?x.z():(v||a)(w),s.window&&(_.back("user")._.opt||p).remember)try{var E={};E=s.window.sessionStorage,E.recall=!0,E.pair=JSON.stringify(y)}catch{}try{d._.tag.auth?d._.on("auth",w):setTimeout(function(){d._.on("auth",w)},1)}catch(A){o.log("Your 'auth' callback crashed with:",A)}},x.h=function(y){if(!y)return x.b();if(f=y.alias,f||(f=y.alias="~"+l.pub),!y.auth)return x.g(l);l=null,x.c((x.data=y).auth)},x.z=function(){x.salt=String.random(64),s.work(p.change,x.salt,x.y)},x.y=function(y){s.encrypt({priv:x.pair.priv,epriv:x.pair.epriv},y,x.x,{raw:1})},x.x=function(y){x.w(JSON.stringify({ek:y,s:x.salt}))},x.w=function(y){if(p.shuffle){console.log("migrate core account from UTF8 & shuffle");var b={};Object.keys(x.data).forEach(function(w){b[w]=x.data[w]}),delete b._,b.auth=y,d.get("~"+x.pair.pub).put(b)}d.get("~"+x.pair.pub).get("auth").put(y,v||a)},x.err=function(y){var b={err:o.log(y||"User cannot be found!")};g.ing=!1,(v||a)(b)},x.plugin=function(y){if(!(x.name=y))return x.err();var b=[y];y[0]!=="~"&&(b[1]="~"+y,b[2]="~@"+y),x.b(b)},l?l.priv&&l.epriv?x.g(l):d.get("~"+l.pub).once(x.h):f?d.get("~@"+f).once(x.a):!f&&!h&&s.name(x.plugin),_};function u(c){if(typeof c!="string")return c;try{c=JSON.parse(c)}catch{c={}}return c}})(e,"./auth"),e(function(n){var r=e("./user"),s=r.SEA;r.GUN,r.prototype.recall=function(o,a){var u=this,c=u.back(-1);if(o=o||{},o&&o.sessionStorage){if(s.window)try{var l={};l=s.window.sessionStorage,l&&(c._.opt.remember=!0,(u.back("user")._.opt||o).remember=!0,(l.recall||l.pair)&&c.user().auth(JSON.parse(l.pair),a))}catch{}return u}return u}})(e,"./recall"),e(function(n){var r=e("./user"),s=r.SEA,o=r.GUN,a=function(){};r.prototype.pair=function(){var u=this,c;try{c=new Proxy({DANGER:"☠"},{get:function(l,f,h){if(!(!u.is||!(u._||"").sea))return u._.sea[f]}})}catch{}return c},r.prototype.delete=async function(u,c,l){console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");var f=this;f.back(-1);var h=f.back("user");try{h.auth(u,c,function(v){var p=(h.is||{}).pub;h.map().once(function(){this.put(null)}),h.leave(),(l||a)({ok:0})})}catch(v){o.log("User.delete failed! Error:",v)}return f},r.prototype.alive=async function(){console.log("user.alive() IS DEPRECATED!!!");const u=this.back(-1);try{return await authRecall(u),u._.user._}catch{const l="No session!";throw o.log(l),{err:l}}},r.prototype.trust=async function(u){console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!"),o.is(u)&&u.get("pub").get((c,l)=>{console.log(c,l)}),u.get("trust").get(path).put(theirPubkey)},r.prototype.grant=function(u,c){console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var l=this,f=l.back(-1).user(),h=f._.sea,v="";return l.back(function(p){p.is||(v+=p.get||"")}),async function(){var p,_=await f.get("grant").get(h.pub).get(v).then();_=await s.decrypt(_,h),_||(_=s.random(16).toString(),p=await s.encrypt(_,h),f.get("grant").get(h.pub).get(v).put(p));var g=u.get("pub").then(),d=u.get("epub").then();g=await g,d=await d;var x=await s.secret(d,h);p=await s.encrypt(_,x),f.get("grant").get(g).get(v).put(p,c)}(),l},r.prototype.secret=function(u,c){console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var l=this,f=l.back(-1).user(),h=f.pair(),v="";return l.back(function(p){p.is||(v+=p.get||"")}),async function(){var p,_=await f.get("trust").get(h.pub).get(v).then();_=await s.decrypt(_,h),_||(_=s.random(16).toString(),p=await s.encrypt(_,h),f.get("trust").get(h.pub).get(v).put(p)),p=await s.encrypt(u,_),l.put(p,c)}(),l},n.exports=r})(e,"./share"),e(function(n){var r=e("./sea"),s=e("./settings"),o,a=(r.window||"").GUN||e((""+o==typeof t?".":"")+"./gun",1);a.on("opt",function(p){p.sea||(p.sea={own:{}},p.on("put",u,p)),this.to.next(p)});function u(p){var _=this,g=_.as,d=p.put,x=d["#"],m=d["."],M=d[":"],y=d[">"],b=p["#"],w;if(!(!x||!m)){if((p._||"").faith&&(g.opt||"").faith&&typeof p._=="function"){r.opt.pack(d,function(E){r.verify(E,!1,function(A){d["="]=r.opt.unpack(A),_.to.next(p)})});return}var L=function(E){g.on("in",{"@":b,err:p.err=E})};if((p._||"").DBG&&((p._||"").DBG.c=+new Date),0<=x.indexOf("<?")&&(w=parseFloat(x.split("<?")[1]||""),w&&y<a.state()-w*1e3)){(w=p._)&&w.stun&&w.stun--;return}if(x==="~@"){u.alias(_,p,M,m,x,g,L);return}if(x.slice(0,2)==="~@"){u.pubs(_,p,M,m,x,g,L);return}if(w=r.opt.pub(x)){u.pub(_,p,M,m,x,g,L,g.user||"",w);return}if(0<=x.indexOf("#")){u.hash(_,p,M,m,x,g,L);return}u.any(_,p,M,m,x,g,L,g.user||"")}}u.hash=function(p,_,g,d,x,m,M){r.work(g,null,function(y){function b(w){let L="";for(let E=0;E<w.length;E++)L+=E-1&1?"":String.fromCharCode(parseInt(w.substring(E-1,E+1),16));return btoa(L)}if(y&&y===d.split("#").slice(-1)[0])return p.to.next(_);if(y&&y===b(d.split("#").slice(-1)[0]))return p.to.next(_);M("Data hash not same as hash!")},{name:"SHA-256"})},u.alias=function(p,_,g,d,x,m,M){if(!g)return M("Data must exist!");if("~@"+d===l(g))return p.to.next(_);M("Alias not same!")},u.pubs=function(p,_,g,d,x,m,M){if(!g)return M("Alias must exist!");if(d===l(g))return p.to.next(_);M("Alias not same!")},u.pub=async function(p,_,g,d,x,m,M,y,b){var w;const L=await s.parse(g)||{},E=(A,N,T)=>{if(A.m&&A.s&&N&&b)return r.verify(A,b,S=>{if(o!==S&&o!==S.e&&_.put[">"]&&_.put[">"]>parseFloat(S.e))return M("Certificate expired.");if(o!==S&&S.c&&S.w&&(S.c===N||S.c.indexOf("*")>-1)){let C=x.indexOf("/")>-1?x.replace(x.substring(0,x.indexOf("/")+1),""):"";String.match=String.match||a.text.match;const k=Array.isArray(S.w)?S.w:typeof S.w=="object"||typeof S.w=="string"?[S.w]:[];for(const F of k)if(String.match(C,F["#"])&&String.match(d,F["."])||!F["."]&&String.match(C,F["#"])||!F["#"]&&String.match(d,F["."])||String.match(C?C+"/"+d:d,F["#"]||F)){if(F["+"]&&F["+"].indexOf("*")>-1&&C&&C.indexOf(N)==-1&&d.indexOf(N)==-1)return M(`Path "${C}" or key "${d}" must contain string "${N}".`);if(S.wb&&(typeof S.wb=="string"||(S.wb||{})["#"])){var R=p.as.root.$.back(-1);return typeof S.wb=="string"&&S.wb.slice(0,1)!=="~"&&(R=R.get("~"+b)),R.get(S.wb).get(N).once(U=>U&&(U===1||U===!0)?M(`Certificant ${N} blocked.`):T(S))}return T(S)}return M("Certificate verification fail.")}})};if(d==="pub"&&"~"+b===x)return g===b?p.to.next(_):M("Account not same!");if((w=y.is)&&w.pub&&!L["*"]&&!L["+"]&&(b===w.pub||b!==w.pub&&((_._.msg||{}).opt||{}).cert)){r.opt.pack(_.put,A=>{r.sign(A,y._.sea,async function(N){if(o===N)return M(r.err||"Signature fail.");if(_.put[":"]={":":w=r.opt.unpack(N.m),"~":N.s},_.put["="]=w,b===y.is.pub){(w=l(g))&&((m.sea.own[w]=m.sea.own[w]||{})[b]=1),JSON.stringifyAsync(_.put[":"],function(T,S){return T?M(T||"Stringify error."):(_.put[":"]=S,p.to.next(_))});return}if(b!==y.is.pub&&((_._.msg||{}).opt||{}).cert){const T=await s.parse(_._.msg.opt.cert);T&&T.m&&T.s&&E(T,y.is.pub,S=>{_.put[":"]["+"]=T,_.put[":"]["*"]=y.is.pub,JSON.stringifyAsync(_.put[":"],function(R,C){return R?M(R||"Stringify error."):(_.put[":"]=C,p.to.next(_))})})}},{raw:1})});return}r.opt.pack(_.put,A=>{r.verify(A,L["*"]||b,function(N){var T;if(N=r.opt.unpack(N),o===N)return M("Unverified data.");if((T=l(N))&&b===r.opt.pub(T)&&((m.sea.own[T]=m.sea.own[T]||{})[b]=1),L["+"]&&L["+"].m&&L["+"].s&&L["*"])E(L["+"],L["*"],S=>(_.put["="]=N,p.to.next(_)));else return _.put["="]=N,p.to.next(_)})})},u.any=function(p,_,g,d,x,m,M,y){if(m.opt.secure)return M("Soul missing public key at '"+d+"'.");m.on("secure",function(b){if(this.off(),!m.opt.secure)return p.to.next(b);M("Data cannot be changed.")}).on.on("secure",_)};var c=a.valid,l=function(p,_){return typeof(_=c(p))=="string"&&_};(a.state||"").ify;var f=/[^\w_-]/;r.opt.pub=function(p){if(p&&(p=p.split("~"),!(!p||!(p=p[1]))&&(p=p.split(f).slice(0,2),!(!p||p.length!=2)&&(p[0]||"")[0]!=="@")))return p=p.slice(0,2).join("."),p},r.opt.stringy=function(p){},r.opt.pack=function(p,_,g,d,x){var m,M;if(r.opt.check(p))return _(p);p&&p["#"]&&p["."]&&p[">"]&&(m=p[":"],M=1),JSON.parseAsync(M?m:p,function(y,b){var w=o!==(b||"")[":"]&&(b||"")["~"];if(!w){_(p);return}_({m:{"#":x||p["#"],".":g||p["."],":":(b||"")[":"],">":p[">"]||a.state.is(d,g)},s:w})})};var h=r.opt;r.opt.unpack=function(p,_,g){var d;if(o!==p){if(p&&o!==(d=p[":"]))return d;if(_=_||h.fall_key,!g&&h.fall_val&&(g={},g[_]=h.fall_val),!(!_||!g)){if(p===g[_]||!r.opt.check(g[_]))return p;var x=g&&g._&&g._["#"]||h.fall_soul,m=a.state.is(g,_)||h.fall_state;if(p&&p.length===4&&x===p[0]&&_===p[1]&&v(m)===v(p[3]))return p[2];if(m<r.opt.shuffle_attack)return p}}},r.opt.shuffle_attack=15463296e5;var v=Math.floor})(e,"./index")})()})(mo);mo.exports;const Wn=ah("https://gun-manhattan.herokuapp.com/gun"),go=Wn.get("circles-c979fe7c-ebfd-11ed-a05b-0242ac120003"),Qr=go.get("index-4723d6a2-ecbd-11ed-a05b-0242ac120003");go.get("circles");go.get("nodes");const oh=(i,e,t=localStorage)=>{const n=t.getItem(i),r=n!==null?JSON.parse(n):e,[s,o]=Le(r);return[s,u=>(o(u),u===void 0?t.removeItem(i):t.setItem(i,JSON.stringify(u)),u)]},[Za,cu]=Le(!1),[uu,lh]=Le(null),[Ki,ch]=Le(!1),[Er,Ji]=Le(null),[br,Oo]=Le(null),[ir,uh]=Le(null),[fh,fu]=Le(!1),[Qt,hh]=oh("isDarkTheme",!0),[dh,ph]=Le(null),[hu,Fo]=Le(null),[mh,gh]=Le(null),_h=()=>{const i=su();dt(()=>{let r=i.pathname?.substring(1);if(ph(r?.split("/")[0]),!r){Ji(null),Oo(null);return}let s=Wn.get(r);return Oo(s),s.on(o=>{if(o)console.log("Loading circle",JSON.stringify(o,null,2)),Ji(o);else{console.error("Circle not found"),Ji(null);return}}),()=>{s.off()}});const e=new Date,t=e.getUTCFullYear()+"-"+(e.getUTCMonth()+1).toString().padStart(2,"0"),n=Qr.get("dates").get(t);return n.map().on((r,s)=>{if(!r)return;const o=Object.assign({},ir());o[s]=r,uh(o)}),Rn(()=>n.off()),dt(()=>{}),null},vh=Je('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',2),xh=Je("<title></title>",2);function Qn(i,e){const t=qc(i.a,e);return(()=>{const n=vh.cloneNode(!0);return Pf(n,t,!0,!0),Be(n,()=>Yc,null),Be(n,(()=>{const r=je(()=>!!e.title,!0);return()=>r()&&(()=>{const s=xh.cloneNode(!0);return Be(s,()=>e.title),s})()})(),null),it(r=>{const s=i.a.stroke,o={...e.style,overflow:"visible",color:e.color||"currentColor"},a=e.size||"1em",u=e.size||"1em",c=i.c;return s!==r._v$&&Vn(n,"stroke",r._v$=s),r._v$2=or(n,o,r._v$2),a!==r._v$3&&Vn(n,"height",r._v$3=a),u!==r._v$4&&Vn(n,"width",r._v$4=u),c!==r._v$5&&(n.innerHTML=r._v$5=c),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()}function yh(i){return Qn({a:{fill:"none",viewBox:"0 0 24 24"},c:'<path fill="currentColor" d="M8.514 20h-4a2 2 0 01-2-2V6a2 2 0 012-2h4v2h-4v12h4v2z"/><path fill="currentColor" d="M13.842 17.385l1.42-1.408-3.92-3.953h9.144a1 1 0 100-2h-9.162l3.98-3.947-1.408-1.42-6.391 6.337 6.337 6.391z"/>'},i)}const Mh=Je('<dialog class="bg-transparent"><div class="bg-white p-8 rounded-lg shadow-lg"><h2 class="text-2xl font-bold mb-6">Log in / Sign up</h2><div class="mb-4"><label for="username" class="block text-sm mb-2">Username:</label><input id="username" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md"></div><div class="mb-6"><label for="password" class="block text-sm mb-2">Password:</label><input id="password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md"></div><button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600">Log in</button><button type="button" class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 ml-4">Sign up'),Sh=Je('<button type="button" class="absolute bottom-4 right-2 p-1 font-semibold rounded-md">'),Eh=Je('<p class="text-red-500 mt-4">'),bh=()=>{Wn.user().leave(),localStorage.removeItem("userCredentials"),cu(!1)};function wh(){const[i,e]=Le(""),[t,n]=Le(""),r="userCredentials",[s,o]=Le(!0),[a,u]=Le(null),c="home";let l;dt(()=>{const _=localStorage.getItem(r);if(_){const{username:g,password:d}=JSON.parse(_);console.log("storedCredentials",_),f(g,d)}else o(!1)}),dt(()=>{l&&!Za()&&!s()&&(console.log("showing dialog"),l.showModal())});const f=(_,g)=>{const d=Wn.user(),x=m=>{if(m.err)console.error("Authentication error:",m.err);else{if(!d.is){console.error("Authentication error"),Fo(null);return}Fo(d.is.pub),d.get("circles").get(c).once(M=>{if(M){console.log("user circle already exists",JSON.stringify(M));return}let y={name:_,alias:_,type:"user"};d.get("circles").get(c).put(y).once(b=>{console.log("created user circle",JSON.stringify(b))})}),d.get("circles").get(c).on(M=>{console.log("user circle data",JSON.stringify(M)),gh(M)}),console.log("user public key",d.is?.pub),cu(!0),localStorage.setItem(r,JSON.stringify({username:_,password:g})),l.close()}o(!1)};d.auth(_,g,x)},h=(_,g)=>{const d=Wn.user();Wn.get(`~@${_}`).once(x=>{if(x){u("User already exists");return}else d.create(_,g,m=>{m.err?u(m.err):f(_,g)})})},v=_=>{_.preventDefault(),f(i(),t())},p=_=>{_.preventDefault(),h(i(),t())};return[(()=>{const _=Mh(),g=_.firstChild,d=g.firstChild,x=d.nextSibling,m=x.firstChild,M=m.nextSibling,y=x.nextSibling,b=y.firstChild,w=b.nextSibling,L=y.nextSibling,E=L.nextSibling,A=l;return typeof A=="function"?tr(A,_):l=_,M.$$input=N=>e(N.target.value),w.$$input=N=>n(N.target.value),L.$$click=v,E.$$click=p,Be(g,(()=>{const N=je(()=>!!a());return()=>N()&&(()=>{const T=Eh();return Be(T,a),T})()})(),null),it(()=>M.value=i()),it(()=>w.value=t()),_})(),Te(Hn,{get when(){return Za()},get children(){const _=Sh();return _.$$click=bh,Be(_,Te(yh,{size:"24px",color:"#888"})),_}})]}Cn(["input","click"]);var du={},ds={},At={},we={};Object.defineProperty(we,"__esModule",{value:!0});we.areaConversion=we.timeConversion=we.distanceConversion=we.altitudeKeys=we.latitudeKeys=we.longitudeKeys=we.MAXLON=we.MINLON=we.MAXLAT=we.MINLAT=we.earthRadius=we.sexagesimalPattern=void 0;var Th=/^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;we.sexagesimalPattern=Th;var Ah=6378137;we.earthRadius=Ah;var Rh=-90;we.MINLAT=Rh;var Ch=90;we.MAXLAT=Ch;var Ph=-180;we.MINLON=Ph;var Lh=180;we.MAXLON=Lh;var Dh=["lng","lon","longitude",0];we.longitudeKeys=Dh;var Uh=["lat","latitude",1];we.latitudeKeys=Uh;var Ih=["alt","altitude","elevation","elev",2];we.altitudeKeys=Ih;var Nh={m:1,km:.001,cm:100,mm:1e3,mi:1/1609.344,sm:1/1852.216,ft:100/30.48,in:100/2.54,yd:1/.9144};we.distanceConversion=Nh;var Oh={m:60,h:3600,d:86400};we.timeConversion=Oh;var qt={m2:1,km2:1e-6,ha:1e-4,a:.01,ft2:10.763911,yd2:1.19599,in2:1550.0031};we.areaConversion=qt;qt.sqm=qt.m2;qt.sqkm=qt.km2;qt.sqft=qt.ft2;qt.sqyd=qt.yd2;qt.sqin=qt.in2;var ei={};Object.defineProperty(ei,"__esModule",{value:!0});ei.default=void 0;var Fh=function(e,t){return t.reduce(function(n,r){if(typeof e>"u"||e===null)throw new Error("'".concat(e,"' is no valid coordinate."));return Object.prototype.hasOwnProperty.call(e,r)&&typeof r<"u"&&typeof n>"u"?(n=r,r):n},void 0)},Bh=Fh;ei.default=Bh;var Fi={},ti={};Object.defineProperty(ti,"__esModule",{value:!0});ti.default=void 0;var kh=function(e){var t=e.toString().trim();return isNaN(parseFloat(t))?!1:parseFloat(t)===Number(t)},zh=kh;ti.default=zh;var ni={};Object.defineProperty(ni,"__esModule",{value:!0});ni.default=void 0;var Gh=we,Hh=function(e){return Gh.sexagesimalPattern.test(e.toString().trim())},Vh=Hh;ni.default=Vh;var ii={};Object.defineProperty(ii,"__esModule",{value:!0});ii.default=void 0;var Wh=we,$h=function(e){var t=new RegExp(Wh.sexagesimalPattern).exec(e.toString().trim());if(typeof t>"u"||t===null)throw new Error("Given value is not in sexagesimal format");var n=Number(t[2])/60||0,r=Number(t[4])/3600||0,s=parseFloat(t[1])+n+r;return["S","W"].includes(t[7])?-s:s},jh=$h;ii.default=jh;var lr={},Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});Bi.default=void 0;var Zs=we,Qs=Xh(ei);function Xh(i){return i&&i.__esModule?i:{default:i}}function Bo(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function qh(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Bo(Object(t),!0).forEach(function(n){Yh(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Bo(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Yh(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var Kh=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{longitude:Zs.longitudeKeys,latitude:Zs.latitudeKeys,altitude:Zs.altitudeKeys},n=(0,Qs.default)(e,t.longitude),r=(0,Qs.default)(e,t.latitude),s=(0,Qs.default)(e,t.altitude);return qh({latitude:r,longitude:n},s?{altitude:s}:{})},Jh=Kh;Bi.default=Jh;var cr={};Object.defineProperty(cr,"__esModule",{value:!0});cr.default=void 0;var Zh=_o(ti),Qh=_o(ni),ed=_o(ii),ko=we;function _o(i){return i&&i.__esModule?i:{default:i}}var td=function i(e){return(0,Zh.default)(e)?!(parseFloat(e)>ko.MAXLAT||e<ko.MINLAT):(0,Qh.default)(e)?i((0,ed.default)(e)):!1},nd=td;cr.default=nd;var ur={};Object.defineProperty(ur,"__esModule",{value:!0});ur.default=void 0;var id=vo(ti),rd=vo(ni),sd=vo(ii),zo=we;function vo(i){return i&&i.__esModule?i:{default:i}}var ad=function i(e){return(0,id.default)(e)?!(parseFloat(e)>zo.MAXLON||e<zo.MINLON):(0,rd.default)(e)?i((0,sd.default)(e)):!1},od=ad;ur.default=od;Object.defineProperty(lr,"__esModule",{value:!0});lr.default=void 0;var ld=xo(Bi),Go=xo(cr),Ho=xo(ur);function xo(i){return i&&i.__esModule?i:{default:i}}var cd=function(e){var t=(0,ld.default)(e),n=t.latitude,r=t.longitude;if(Array.isArray(e)&&e.length>=2)return(0,Ho.default)(e[0])&&(0,Go.default)(e[1]);if(typeof n>"u"||typeof r>"u")return!1;var s=e[r],o=e[n];return!(typeof o>"u"||typeof s>"u"||(0,Go.default)(o)===!1||(0,Ho.default)(s)===!1)},ud=cd;lr.default=ud;Object.defineProperty(Fi,"__esModule",{value:!0});Fi.default=void 0;var fd=fr(ti),hd=fr(ni),dd=fr(ii),Vo=fr(lr),pd=fr(Bi);function fr(i){return i&&i.__esModule?i:{default:i}}function Wo(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function ea(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Wo(Object(t),!0).forEach(function(n){Qa(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Wo(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Qa(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var md=function i(e){if((0,fd.default)(e))return Number(e);if((0,hd.default)(e))return(0,dd.default)(e);if((0,Vo.default)(e)){var t=(0,pd.default)(e);return Array.isArray(e)?e.map(function(n,r){return[0,1].includes(r)?i(n):n}):ea(ea(ea({},e),t.latitude&&Qa({},t.latitude,i(e[t.latitude]))),t.longitude&&Qa({},t.longitude,i(e[t.longitude])))}return Array.isArray(e)?e.map(function(n){return(0,Vo.default)(n)?i(n):n}):e},gd=md;Fi.default=gd;Object.defineProperty(At,"__esModule",{value:!0});At.default=void 0;var _d=we,vd=pu(ei),xd=pu(Fi);function pu(i){return i&&i.__esModule?i:{default:i}}var yd=function(e,t){var n=(0,vd.default)(e,_d.latitudeKeys);if(!(typeof n>"u"||n===null)){var r=e[n];return t===!0?r:(0,xd.default)(r)}},Md=yd;At.default=Md;var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.default=void 0;var Sd=we,Ed=mu(ei),bd=mu(Fi);function mu(i){return i&&i.__esModule?i:{default:i}}var wd=function(e,t){var n=(0,Ed.default)(e,Sd.longitudeKeys);if(!(typeof n>"u"||n===null)){var r=e[n];return t===!0?r:(0,bd.default)(r)}},Td=wd;Rt.default=Td;var kt={};Object.defineProperty(kt,"__esModule",{value:!0});kt.default=void 0;var Ad=function(e){return e*Math.PI/180},Rd=Ad;kt.default=Rd;var gn={};Object.defineProperty(gn,"__esModule",{value:!0});gn.default=void 0;var Cd=function(e){return e*180/Math.PI},Pd=Cd;gn.default=Pd;Object.defineProperty(ds,"__esModule",{value:!0});ds.default=void 0;var Ld=ps(At),Dd=ps(Rt),ta=ps(kt),na=ps(gn),$o=we;function ps(i){return i&&i.__esModule?i:{default:i}}var Ud=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:6371e3,s=(0,Ld.default)(e),o=(0,Dd.default)(e),a=t/r,u=(0,ta.default)(n),c=(0,ta.default)(s),l=(0,ta.default)(o),f=Math.asin(Math.sin(c)*Math.cos(a)+Math.cos(c)*Math.sin(a)*Math.cos(u)),h=l+Math.atan2(Math.sin(u)*Math.sin(a)*Math.cos(c),Math.cos(a)-Math.sin(c)*Math.sin(f)),v=(0,na.default)(h);return(v<$o.MINLON||v>$o.MAXLON)&&(h=(h+3*Math.PI)%(2*Math.PI)-Math.PI,v=(0,na.default)(h)),{latitude:(0,na.default)(f),longitude:v}},Id=Ud;ds.default=Id;var ms={};Object.defineProperty(ms,"__esModule",{value:!0});ms.default=void 0;var Nd=we,Od=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",n=Nd.areaConversion[t];if(n)return e*n;throw new Error("Invalid unit used for area conversion.")},Fd=Od;ms.default=Fd;var gs={};Object.defineProperty(gs,"__esModule",{value:!0});gs.default=void 0;var Bd=we,kd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",n=Bd.distanceConversion[t];if(n)return e*n;throw new Error("Invalid unit used for distance conversion.")},zd=kd;gs.default=zd;var _s={};Object.defineProperty(_s,"__esModule",{value:!0});_s.default=void 0;var wr=we,Gd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"kmh";switch(t){case"kmh":return e*wr.timeConversion.h*wr.distanceConversion.km;case"mph":return e*wr.timeConversion.h*wr.distanceConversion.mi;default:return e}},Hd=Gd;_s.default=Hd;var vs={};Object.defineProperty(vs,"__esModule",{value:!0});vs.default=void 0;function jo(i,e){return jd(i)||$d(i,e)||Wd(i,e)||Vd()}function Vd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wd(i,e){if(i){if(typeof i=="string")return Xo(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Xo(i,e)}}function Xo(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function $d(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,s=void 0;try{for(var o=i[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(u){r=!0,s=u}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function jd(i){if(Array.isArray(i))return i}var Xd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4,n=Math.pow(10,t);return Math.round(e*n)/n},qd=function(e){var t=e.toString().split("."),n=jo(t,2),r=n[0],s=n[1],o=Math.abs(Number(r)),a=+("0."+(s||0))*60,u=a.toString().split("."),c=Math.floor(a),l=Xd(+("0."+(u[1]||0))*60).toString(),f=l.split("."),h=jo(f,2),v=h[0],p=h[1],_=p===void 0?"0":p;return o+"° "+c.toString().padStart(2,"0")+"' "+v.padStart(2,"0")+"."+_.padEnd(1,"0")+'"'},Yd=qd;vs.default=Yd;var xs={},hr={},rn={},dr={};Object.defineProperty(dr,"__esModule",{value:!0});dr.default=void 0;var Kd=function(e){return e>1?1:e<-1?-1:e},Jd=Kd;dr.default=Jd;Object.defineProperty(rn,"__esModule",{value:!0});rn.default=void 0;var qo=ys(At),Yo=ys(Rt),ai=ys(kt),Zd=ys(dr),Qd=we;function ys(i){return i&&i.__esModule?i:{default:i}}var ep=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;n=typeof n<"u"&&!isNaN(n)?n:1;var r=(0,qo.default)(e),s=(0,Yo.default)(e),o=(0,qo.default)(t),a=(0,Yo.default)(t),u=Math.acos((0,Zd.default)(Math.sin((0,ai.default)(o))*Math.sin((0,ai.default)(r))+Math.cos((0,ai.default)(o))*Math.cos((0,ai.default)(r))*Math.cos((0,ai.default)(s)-(0,ai.default)(a))))*Qd.earthRadius;return Math.round(u/n)*n},tp=ep;rn.default=tp;Object.defineProperty(hr,"__esModule",{value:!0});hr.default=void 0;var Ko=np(rn);function np(i){return i&&i.__esModule?i:{default:i}}var ip=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ko.default;return n=typeof n=="function"?n:Ko.default,t.slice().sort(function(r,s){return n(e,r)-n(e,s)})},rp=ip;hr.default=rp;Object.defineProperty(xs,"__esModule",{value:!0});xs.default=void 0;var sp=ap(hr);function ap(i){return i&&i.__esModule?i:{default:i}}var op=function(e,t){return(0,sp.default)(e,t)[0]},lp=op;xs.default=lp;var Ms={};Object.defineProperty(Ms,"__esModule",{value:!0});Ms.default=void 0;var ia=yo(kt),cp=yo(At),Jo=yo(Rt),Zo=we;function yo(i){return i&&i.__esModule?i:{default:i}}var up=function(e){var t=0;if(e.length>2){for(var n,r,s,o=0;o<e.length;o++){o===e.length-2?(n=e.length-2,r=e.length-1,s=0):o===e.length-1?(n=e.length-1,r=0,s=1):(n=o,r=o+1,s=o+2);var a=(0,Jo.default)(e[n]),u=(0,cp.default)(e[r]),c=(0,Jo.default)(e[s]);t+=((0,ia.default)(c)-(0,ia.default)(a))*Math.sin((0,ia.default)(u))}t=t*Zo.earthRadius*Zo.earthRadius/2}return Math.abs(t)},fp=up;Ms.default=fp;var pr={};Object.defineProperty(pr,"__esModule",{value:!0});pr.default=void 0;var hp=gu(At),dp=gu(Rt);function gu(i){return i&&i.__esModule?i:{default:i}}var pp=function(e){if(Array.isArray(e)===!1||e.length===0)throw new Error("No points were given.");return e.reduce(function(t,n){var r=(0,hp.default)(n),s=(0,dp.default)(n);return{maxLat:Math.max(r,t.maxLat),minLat:Math.min(r,t.minLat),maxLng:Math.max(s,t.maxLng),minLng:Math.min(s,t.minLng)}},{maxLat:-1/0,minLat:1/0,maxLng:-1/0,minLng:1/0})},mp=pp;pr.default=mp;var Ss={};Object.defineProperty(Ss,"__esModule",{value:!0});Ss.default=void 0;var gp=Es(At),_p=Es(Rt),oi=Es(kt),Tr=Es(gn),Gi=we;function Es(i){return i&&i.__esModule?i:{default:i}}var vp=function(e,t){var n=(0,gp.default)(e),r=(0,_p.default)(e),s=(0,oi.default)(n),o=(0,oi.default)(r),a=t/Gi.earthRadius,u=s-a,c=s+a,l=(0,oi.default)(Gi.MAXLAT),f=(0,oi.default)(Gi.MINLAT),h=(0,oi.default)(Gi.MAXLON),v=(0,oi.default)(Gi.MINLON),p,_;if(u>f&&c<l){var g=Math.asin(Math.sin(a)/Math.cos(s));p=o-g,p<v&&(p+=Math.PI*2),_=o+g,_>h&&(_-=Math.PI*2)}else u=Math.max(u,f),c=Math.min(c,l),p=v,_=h;return[{latitude:(0,Tr.default)(u),longitude:(0,Tr.default)(p)},{latitude:(0,Tr.default)(c),longitude:(0,Tr.default)(_)}]},xp=vp;Ss.default=xp;var bs={};Object.defineProperty(bs,"__esModule",{value:!0});bs.default=void 0;var yp=ws(At),Mp=ws(Rt),Qo=ws(kt),el=ws(gn);function ws(i){return i&&i.__esModule?i:{default:i}}var Sp=function(e){if(Array.isArray(e)===!1||e.length===0)return!1;var t=e.length,n=e.reduce(function(a,u){var c=(0,Qo.default)((0,yp.default)(u)),l=(0,Qo.default)((0,Mp.default)(u));return{X:a.X+Math.cos(c)*Math.cos(l),Y:a.Y+Math.cos(c)*Math.sin(l),Z:a.Z+Math.sin(c)}},{X:0,Y:0,Z:0}),r=n.X/t,s=n.Y/t,o=n.Z/t;return{longitude:(0,el.default)(Math.atan2(s,r)),latitude:(0,el.default)(Math.atan2(o,Math.sqrt(r*r+s*s)))}},Ep=Sp;bs.default=Ep;var Ts={};Object.defineProperty(Ts,"__esModule",{value:!0});Ts.default=void 0;var bp=wp(pr);function wp(i){return i&&i.__esModule?i:{default:i}}var Tp=function(e){var t=(0,bp.default)(e),n=t.minLat+(t.maxLat-t.minLat)/2,r=t.minLng+(t.maxLng-t.minLng)/2;return{latitude:parseFloat(n.toFixed(6)),longitude:parseFloat(r.toFixed(6))}},Ap=Tp;Ts.default=Ap;var As={},mr={};Object.defineProperty(mr,"__esModule",{value:!0});mr.default=void 0;var tl=Rs(At),nl=Rs(Rt),Ar=Rs(kt),Rp=Rs(gn);function Rs(i){return i&&i.__esModule?i:{default:i}}var Cp=function(e,t){var n=(0,Ar.default)((0,nl.default)(t))-(0,Ar.default)((0,nl.default)(e)),r=Math.log(Math.tan((0,Ar.default)((0,tl.default)(t))/2+Math.PI/4)/Math.tan((0,Ar.default)((0,tl.default)(e))/2+Math.PI/4));return Math.abs(n)>Math.PI&&(n>0?n=(Math.PI*2-n)*-1:n=Math.PI*2+n),((0,Rp.default)(Math.atan2(n,r))+360)%360},Pp=Cp;mr.default=Pp;Object.defineProperty(As,"__esModule",{value:!0});As.default=void 0;var il=Lp(mr);function Lp(i){return i&&i.__esModule?i:{default:i}}var Dp=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:il.default,r=typeof n=="function"?n(e,t):(0,il.default)(e,t);if(isNaN(r))throw new Error("Could not calculate bearing for given points. Check your bearing function");switch(Math.round(r/22.5)){case 1:return"NNE";case 2:return"NE";case 3:return"ENE";case 4:return"E";case 5:return"ESE";case 6:return"SE";case 7:return"SSE";case 8:return"S";case 9:return"SSW";case 10:return"SW";case 11:return"WSW";case 12:return"W";case 13:return"WNW";case 14:return"NW";case 15:return"NNW";default:return"N"}},Up=Dp;As.default=Up;var gr={};Object.defineProperty(gr,"__esModule",{value:!0});gr.default=void 0;var ra=_u(rn),rl=_u(dr);function _u(i){return i&&i.__esModule?i:{default:i}}var Ip=function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=(0,ra.default)(t,e,r),o=(0,ra.default)(e,n,r),a=(0,ra.default)(t,n,r),u=Math.acos((0,rl.default)((s*s+a*a-o*o)/(2*s*a))),c=Math.acos((0,rl.default)((o*o+a*a-s*s)/(2*o*a)));return u>Math.PI/2?s:c>Math.PI/2?o:Math.sin(u)*s},Np=Ip;gr.default=Np;var Cs={};Object.defineProperty(Cs,"__esModule",{value:!0});Cs.default=void 0;var sl=Ps(At),al=Ps(Rt),sn=Ps(kt),Op=Ps(gn);function Ps(i){return i&&i.__esModule?i:{default:i}}var Fp=function(e,t){var n=(0,sl.default)(t),r=(0,al.default)(t),s=(0,sl.default)(e),o=(0,al.default)(e),a=((0,Op.default)(Math.atan2(Math.sin((0,sn.default)(r)-(0,sn.default)(o))*Math.cos((0,sn.default)(n)),Math.cos((0,sn.default)(s))*Math.sin((0,sn.default)(n))-Math.sin((0,sn.default)(s))*Math.cos((0,sn.default)(n))*Math.cos((0,sn.default)(r)-(0,sn.default)(o))))+360)%360;return a},Bp=Fp;Cs.default=Bp;var Ls={};Object.defineProperty(Ls,"__esModule",{value:!0});Ls.default=void 0;var kp=zp(rn);function zp(i){return i&&i.__esModule?i:{default:i}}function es(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?es=function(t){return typeof t}:es=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},es(i)}var Gp=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:kp.default;return e.reduce(function(n,r){return es(n)==="object"&&n.last!==null&&(n.distance+=t(r,n.last)),n.last=r,n},{last:null,distance:0}).distance},Hp=Gp;Ls.default=Hp;var Ds={};Object.defineProperty(Ds,"__esModule",{value:!0});Ds.default=void 0;var ol=Mo(At),ll=Mo(Rt),sa=Mo(kt),cl=we;function Mo(i){return i&&i.__esModule?i:{default:i}}var Vp=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;n=typeof n<"u"&&!isNaN(n)?n:1;var r=(0,ol.default)(e),s=(0,ll.default)(e),o=(0,ol.default)(t),a=(0,ll.default)(t),u=6356752314245e-6,c=1/298.257223563,l=(0,sa.default)(a-s),f,h,v,p,_,g,d=Math.atan((1-c)*Math.tan((0,sa.default)(parseFloat(r)))),x=Math.atan((1-c)*Math.tan((0,sa.default)(parseFloat(o)))),m=Math.sin(d),M=Math.cos(d),y=Math.sin(x),b=Math.cos(x),w=l,L,E=100;do{var A=Math.sin(w),N=Math.cos(w);if(g=Math.sqrt(b*A*(b*A)+(M*y-m*b*N)*(M*y-m*b*N)),g===0)return 0;f=m*y+M*b*N,h=Math.atan2(g,f),v=M*b*A/g,p=1-v*v,_=f-2*m*y/p,isNaN(_)&&(_=0);var T=c/16*p*(4+c*(4-3*p));L=w,w=l+(1-T)*c*v*(h+T*g*(_+T*f*(-1+2*_*_)))}while(Math.abs(w-L)>1e-12&&--E>0);if(E===0)return NaN;var S=p*(cl.earthRadius*cl.earthRadius-u*u)/(u*u),R=1+S/16384*(4096+S*(-768+S*(320-175*S))),C=S/1024*(256+S*(-128+S*(74-47*S))),k=C*g*(_+C/4*(f*(-1+2*_*_)-C/6*_*(-3+4*g*g)*(-3+4*_*_))),F=u*R*(h-k);return Math.round(F/n)*n},Wp=Vp;Ds.default=Wp;var Us={};Object.defineProperty(Us,"__esModule",{value:!0});Us.default=void 0;var $p=function(e){if(/^NNE|NE|NNW|N$/.test(e))return"N";if(/^ENE|E|ESE|SE$/.test(e))return"E";if(/^SSE|S|SSW|SW$/.test(e))return"S";if(/^WSW|W|WNW|NW$/.test(e))return"W"},jp=$p;Us.default=jp;var Is={};Object.defineProperty(Is,"__esModule",{value:!0});Is.default=void 0;var Xp=qp(rn);function qp(i){return i&&i.__esModule?i:{default:i}}var Yp=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xp.default,r=n(e,t),s=Number(t.time)-Number(e.time),o=r/s*1e3;return o},Kp=Yp;Is.default=Kp;var Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});Ns.default=void 0;var aa=Jp(rn);function Jp(i){return i&&i.__esModule?i:{default:i}}var Zp=function(e,t,n){return(0,aa.default)(t,e)+(0,aa.default)(e,n)===(0,aa.default)(t,n)},Qp=Zp;Ns.default=Qp;var Os={};Object.defineProperty(Os,"__esModule",{value:!0});Os.default=void 0;var Rr=vu(At),Ot=vu(Rt);function vu(i){return i&&i.__esModule?i:{default:i}}var em=function(e,t){for(var n=!1,r=t.length,s=-1,o=r-1;++s<r;o=s)((0,Ot.default)(t[s])<=(0,Ot.default)(e)&&(0,Ot.default)(e)<(0,Ot.default)(t[o])||(0,Ot.default)(t[o])<=(0,Ot.default)(e)&&(0,Ot.default)(e)<(0,Ot.default)(t[s]))&&(0,Rr.default)(e)<((0,Rr.default)(t[o])-(0,Rr.default)(t[s]))*((0,Ot.default)(e)-(0,Ot.default)(t[s]))/((0,Ot.default)(t[o])-(0,Ot.default)(t[s]))+(0,Rr.default)(t[s])&&(n=!n);return n},tm=em;Os.default=tm;var Fs={};Object.defineProperty(Fs,"__esModule",{value:!0});Fs.default=void 0;var nm=im(gr);function im(i){return i&&i.__esModule?i:{default:i}}var rm=function(e,t,n,r){return(0,nm.default)(e,t,n)<r},sm=rm;Fs.default=sm;var Bs={};Object.defineProperty(Bs,"__esModule",{value:!0});Bs.default=void 0;var am=om(rn);function om(i){return i&&i.__esModule?i:{default:i}}var lm=function(e,t,n){return(0,am.default)(e,t)<n},cm=lm;Bs.default=cm;var ks={};Object.defineProperty(ks,"__esModule",{value:!0});ks.default=void 0;function um(i,e){return pm(i)||dm(i,e)||hm(i,e)||fm()}function fm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hm(i,e){if(i){if(typeof i=="string")return ul(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ul(i,e)}}function ul(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function dm(i,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var t=[],n=!0,r=!1,s=void 0;try{for(var o=i[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(u){r=!0,s=u}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function pm(i){if(Array.isArray(i))return i}var mm=function(e){if(!e.startsWith("POLYGON"))throw new Error("Invalid wkt.");var t=e.slice(e.indexOf("(")+2,e.indexOf(")")).split(", "),n=t.map(function(r){var s=r.split(" "),o=um(s,2),a=o[0],u=o[1];return{longitude:parseFloat(a),latitude:parseFloat(u)}});return n},gm=mm;ks.default=gm;(function(i){Object.defineProperty(i,"__esModule",{value:!0});var e={computeDestinationPoint:!0,convertArea:!0,convertDistance:!0,convertSpeed:!0,decimalToSexagesimal:!0,findNearest:!0,getAreaOfPolygon:!0,getBounds:!0,getBoundsOfDistance:!0,getCenter:!0,getCenterOfBounds:!0,getCompassDirection:!0,getCoordinateKey:!0,getCoordinateKeys:!0,getDistance:!0,getDistanceFromLine:!0,getGreatCircleBearing:!0,getLatitude:!0,getLongitude:!0,getPathLength:!0,getPreciseDistance:!0,getRhumbLineBearing:!0,getRoughCompassDirection:!0,getSpeed:!0,isDecimal:!0,isPointInLine:!0,isPointInPolygon:!0,isPointNearLine:!0,isPointWithinRadius:!0,isSexagesimal:!0,isValidCoordinate:!0,isValidLatitude:!0,isValidLongitude:!0,orderByDistance:!0,sexagesimalToDecimal:!0,toDecimal:!0,toRad:!0,toDeg:!0,wktToPolygon:!0};Object.defineProperty(i,"computeDestinationPoint",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(i,"convertArea",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(i,"convertDistance",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(i,"convertSpeed",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(i,"decimalToSexagesimal",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(i,"findNearest",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(i,"getAreaOfPolygon",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(i,"getBounds",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(i,"getBoundsOfDistance",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(i,"getCenter",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(i,"getCenterOfBounds",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(i,"getCompassDirection",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(i,"getCoordinateKey",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(i,"getCoordinateKeys",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(i,"getDistance",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(i,"getDistanceFromLine",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(i,"getGreatCircleBearing",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(i,"getLatitude",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(i,"getLongitude",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(i,"getPathLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(i,"getPreciseDistance",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(i,"getRhumbLineBearing",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(i,"getRoughCompassDirection",{enumerable:!0,get:function(){return L.default}}),Object.defineProperty(i,"getSpeed",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(i,"isDecimal",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(i,"isPointInLine",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(i,"isPointInPolygon",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(i,"isPointNearLine",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(i,"isPointWithinRadius",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(i,"isSexagesimal",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(i,"isValidCoordinate",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(i,"isValidLatitude",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(i,"isValidLongitude",{enumerable:!0,get:function(){return U.default}}),Object.defineProperty(i,"orderByDistance",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(i,"sexagesimalToDecimal",{enumerable:!0,get:function(){return H.default}}),Object.defineProperty(i,"toDecimal",{enumerable:!0,get:function(){return ne.default}}),Object.defineProperty(i,"toRad",{enumerable:!0,get:function(){return K.default}}),Object.defineProperty(i,"toDeg",{enumerable:!0,get:function(){return W.default}}),Object.defineProperty(i,"wktToPolygon",{enumerable:!0,get:function(){return q.default}});var t=J(ds),n=J(ms),r=J(gs),s=J(_s),o=J(vs),a=J(xs),u=J(Ms),c=J(pr),l=J(Ss),f=J(bs),h=J(Ts),v=J(As),p=J(ei),_=J(Bi),g=J(rn),d=J(gr),x=J(Cs),m=J(At),M=J(Rt),y=J(Ls),b=J(Ds),w=J(mr),L=J(Us),E=J(Is),A=J(ti),N=J(Ns),T=J(Os),S=J(Fs),R=J(Bs),C=J(ni),k=J(lr),F=J(cr),U=J(ur),z=J(hr),H=J(ii),ne=J(Fi),K=J(kt),W=J(gn),q=J(ks),ie=we;Object.keys(ie).forEach(function(O){O==="default"||O==="__esModule"||Object.prototype.hasOwnProperty.call(e,O)||Object.defineProperty(i,O,{enumerable:!0,get:function(){return ie[O]}})});function J(O){return O&&O.__esModule?O:{default:O}}})(du);const _m=()=>{const i=t=>{let n={latitude:t.coords.latitude,longitude:t.coords.longitude},r=uu();if(r?.latitude&&r?.longitude){const s=du.getPreciseDistance(r,n);if(console.log(`getUserLocationSuccess (diff: ${s}, lat: ${t.coords.latitude}, lon: ${t.coords.longitude}, acc: ${t.coords.accuracy})`,0),s<100)return}console.log(`getUserLocationSuccess (lat: ${t.coords.latitude}, lon: ${t.coords.longitude}, acc: ${t.coords.accuracy})`,0),lh({latitude:t.coords.latitude,longitude:t.coords.longitude})},e=t=>{console.log(`getUserLocationError: ${t.message}`,0),navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,maximumAge:1/0})};return dt(()=>{let t=null;navigator.geolocation?navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"geolocation"}).then(n=>{console.log(`Query geolocation result: ${n.state}`,0),n.state==="granted"?(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1/0}),t=navigator.geolocation.watchPosition(i)):n.state==="prompt"?(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!0,timeout:6e4,maximumAge:0}),t=navigator.geolocation.watchPosition(i)):n.state,n.onchange=function(){console.log(`Query geolocation change: ${n.state}`,0)}}):(navigator.geolocation.getCurrentPosition(i,e,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1/0}),t=navigator.geolocation.watchPosition(i)):console.log("geolocation not available",0),Rn(()=>{t!==null&&navigator.geolocation.clearWatch(t)})}),null};function vm(i){return Qn({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M19 12H5M12 19l-7-7 7-7"/>'},i)}function xm(i){return Qn({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>'},i)}function ym(i){return Qn({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>'},i)}const Mm=Je('<img alt="Circle Picture">'),xu=i=>{const e={width:i.size,height:i.size},t=n=>{console.log("Error loading image",JSON.stringify(n));const r=n.target;r.src="./images/default-circle-picture.png"};return(()=>{const n=Mm();return n.addEventListener("error",t),it(r=>{const s=i.circle?.pictureRaw??i.circle?.picture??"./images/default-circle-picture.png",o=e,a=`rounded-full object-cover  ${i.className}`;return s!==r._v$&&Vn(n,"src",r._v$=s),r._v$2=or(n,o,r._v$2),a!==r._v$3&&En(n,r._v$3=a),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})()},Sm=Je('<button class="mr-3">'),Em=Je('<div class="absolute bottom-0 right-0 text-white"><label for="circle-pic-input"></label><input id="circle-pic-input" type="file" accept="image/*" class="hidden">'),bm=Je('<div><input id="circle-name-input" class="bg-transparent border-none outline-none font-bold text-2xl text-white" type="text">'),wm=Je('<div class="py-3 px-6 flex items-center justify-start absolute top-0 left-0"><div class="mr-3 relative"></div><div class="relative flex items-center">'),Tm=Je('<h1 class="text-white text-2xl font-bold">'),Am=()=>{const i=()=>{},[e,t]=Le(!1),[n,r]=Le(!1),[s,o]=Le(!1),[a,u]=Le(!1),[c,l]=Le(""),[f,h]=Le(""),v=x=>l(x.target.value);dt(()=>{t("~"+hu()===dh())});const p=()=>{u(!1),Ji(x=>({...x,name:c()})),br()&&br().get("name").put(c())},_=x=>{const m=x.target.files[0];if(!m)return;const M=new FileReader;M.onload=function(y){const b=new Image;b.onload=()=>{let L=b.width,E=b.height;L>E?L>1e3&&(E*=1e3/L,L=1e3):E>1e3&&(L*=1e3/E,E=1e3);const A=document.createElement("canvas");A.width=L,A.height=E,A.getContext("2d").drawImage(b,0,0,L,E);const T=A.toDataURL("image/png");console.log("Saving new picture: ",T),Ji(S=>({...S,pictureRaw:T})),br()&&br().get("pictureRaw").put(T)},b.src=y.target.result},M.readAsDataURL(m)},g=()=>{u(!0),l(Er()?.name??"")};dt(()=>{a()&&document.getElementById("circle-name-input")?.focus()}),dt(()=>{console.log("Setting circle name: ",Er()?.name??""),h(Er()?.name??"")});const d=x=>{x.key==="Enter"?p():x.key==="Escape"&&u(!1)};return(()=>{const x=wm(),m=x.firstChild,M=m.nextSibling;return Be(x,Te(Hn,{get when(){return Ki()},get children(){const y=Sm();return y.$$click=i,Be(y,Te(vm,{color:"white",size:"28px"})),y}}),m),m.addEventListener("mouseleave",()=>o(!1)),m.addEventListener("mouseenter",()=>e()&&o(!0)),Be(m,Te(xu,{get circle(){return Er()},size:"40px",className:"mr-3"}),null),Be(m,Te(Hn,{get when(){return je(()=>!!s())()&&e()},get children(){const y=Em(),b=y.firstChild,w=b.nextSibling;return Be(b,Te(xm,{size:"20px",class:"cursor-pointer"})),w.addEventListener("change",_),y}}),null),M.addEventListener("mouseleave",()=>r(!1)),M.addEventListener("mouseenter",()=>e()&&r(!0)),Be(M,Te(Hn,{get when(){return a()},get fallback(){return[(()=>{const y=Tm();return Be(y,f),y})(),je((()=>{const y=je(()=>!!(n()&&e()));return()=>y()&&Te(ym,{class:"cursor-pointer ml-2",color:"white",onClick:g})})())]},get children(){const y=bm(),b=y.firstChild;return b.addEventListener("blur",p),b.$$keydown=d,b.$$input=v,it(()=>b.value=c()),y}})),x})()};Cn(["click","input","keydown"]);const Rm=()=>{const[i,e]=Le(window.innerWidth),[t,n]=Le(window.innerHeight),r=()=>{e(window.innerWidth),n(window.innerHeight)};return dt(()=>{window.addEventListener("resize",r),Rn(()=>{window.removeEventListener("resize",r)})}),{windowWidth:i,windowHeight:t}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="152",li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cm=0,fl=1,Pm=2,yu=1,Lm=2,hn=3,Tn=0,wt=1,dn=2,bn=0,Ci=1,hl=2,dl=3,pl=4,Dm=5,Ai=100,Um=101,Im=102,ml=103,gl=104,Nm=200,Om=201,Fm=202,Bm=203,Mu=204,Su=205,km=206,zm=207,Gm=208,Hm=209,Vm=210,Wm=0,$m=1,jm=2,eo=3,Xm=4,qm=5,Ym=6,Km=7,Eu=0,Jm=1,Zm=2,mn=0,Qm=1,eg=2,tg=3,ng=4,ig=5,bu=300,Ui=301,Ii=302,to=303,no=304,zs=306,io=1e3,jt=1001,ro=1002,Et=1003,_l=1004,oa=1005,Bt=1006,rg=1007,rr=1008,qn=1009,sg=1010,ag=1011,wu=1012,og=1013,zn=1014,Gn=1015,sr=1016,lg=1017,cg=1018,Pi=1020,ug=1021,Xt=1023,fg=1024,hg=1025,$n=1026,Ni=1027,dg=1028,pg=1029,mg=1030,gg=1031,_g=1033,la=33776,ca=33777,ua=33778,fa=33779,vl=35840,xl=35841,yl=35842,Ml=35843,vg=36196,Sl=37492,El=37496,bl=37808,wl=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Ll=37815,Dl=37816,Ul=37817,Il=37818,Nl=37819,Ol=37820,Fl=37821,ha=36492,xg=36283,Bl=36284,kl=36285,zl=36286,Tu=3e3,jn=3001,yg=3200,Mg=3201,Au=0,Sg=1,Xn="",Ae="srgb",nn="srgb-linear",Ru="display-p3",da=7680,Eg=519,Gl=35044,Hl="300 es",so=1035;let ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pa=Math.PI/180,ao=180/Math.PI;function _r(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function bg(i,e){return(i%e+e)%e}function ma(i,e,t){return(1-t)*i+t*e}function Vl(i){return(i&i-1)===0&&i!==0}function wg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}let Ne=class Cu{constructor(e=0,t=0){Cu.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class Pu{constructor(){Pu.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],c=n[1],l=n[4],f=n[7],h=n[2],v=n[5],p=n[8],_=r[0],g=r[3],d=r[6],x=r[1],m=r[4],M=r[7],y=r[2],b=r[5],w=r[8];return s[0]=o*_+a*x+u*y,s[3]=o*g+a*m+u*b,s[6]=o*d+a*M+u*w,s[1]=c*_+l*x+f*y,s[4]=c*g+l*m+f*b,s[7]=c*d+l*M+f*w,s[2]=h*_+v*x+p*y,s[5]=h*g+v*m+p*b,s[8]=h*d+v*M+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*s*l+n*a*u+r*s*c-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],f=l*o-a*c,h=a*u-l*s,v=c*s-o*u,p=t*f+n*h+r*v;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(r*c-l*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(l*t-r*u)*_,e[5]=(r*s-a*t)*_,e[6]=v*_,e[7]=(n*u-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*o+c*a)+o+e,-r*c,r*u,-r*(-c*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const ga=new ze;function Lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Wl={};function Zi(i){i in Wl||(Wl[i]=!0,console.warn(i))}function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Tg=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ag=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Rg(i){return i.convertSRGBToLinear().applyMatrix3(Ag)}function Cg(i){return i.applyMatrix3(Tg).convertLinearToSRGB()}const Pg={[nn]:i=>i,[Ae]:i=>i.convertSRGBToLinear(),[Ru]:Rg},Lg={[nn]:i=>i,[Ae]:i=>i.convertLinearToSRGB(),[Ru]:Cg},Gt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return nn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Pg[e],r=Lg[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ui,Du=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=os("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uu=class{constructor(e=null){this.isSource=!0,this.uuid=_r(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(va(r[o].image)):s.push(va(r[o]))}else s=va(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Du.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dg=0,_n=class ts extends ri{constructor(e=ts.DEFAULT_IMAGE,t=ts.DEFAULT_MAPPING,n=jt,r=jt,s=Bt,o=rr,a=Xt,u=qn,c=ts.DEFAULT_ANISOTROPY,l=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=_r(),this.name="",this.source=new Uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===jn?Ae:Xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?jn:Tu}set encoding(e){Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jn?Ae:Xn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=bu;_n.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,c=u[0],l=u[4],f=u[8],h=u[1],v=u[5],p=u[9],_=u[2],g=u[6],d=u[10];if(Math.abs(l-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+v+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(c+1)/2,M=(v+1)/2,y=(d+1)/2,b=(l+h)/4,w=(f+_)/4,L=(p+g)/4;return m>M&&m>y?m<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(m),r=b/n,s=w/n):M>y?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=b/r,s=L/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=w/s,r=L/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(h-l)*(h-l));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(f-_)/x,this.z=(h-l)/x,this.w=Math.acos((c+v+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yn extends ri{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jn?Ae:Xn),this.texture=new _n(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Iu extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ug extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let u=n[r+0],c=n[r+1],l=n[r+2],f=n[r+3];const h=s[o+0],v=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=v,e[t+2]=p,e[t+3]=_;return}if(f!==_||u!==h||c!==v||l!==p){let g=1-a;const d=u*h+c*v+l*p+f*_,x=d>=0?1:-1,m=1-d*d;if(m>Number.EPSILON){const y=Math.sqrt(m),b=Math.atan2(y,d*x);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y}const M=a*x;if(u=u*g+h*M,c=c*g+v*M,l=l*g+p*M,f=f*g+_*M,g===1-a){const y=1/Math.sqrt(u*u+c*c+l*l+f*f);u*=y,c*=y,l*=y,f*=y}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],u=n[r+1],c=n[r+2],l=n[r+3],f=s[o],h=s[o+1],v=s[o+2],p=s[o+3];return e[t]=a*p+l*f+u*v-c*h,e[t+1]=u*p+l*h+c*f-a*v,e[t+2]=c*p+l*v+a*h-u*f,e[t+3]=l*p-a*f-u*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,c=a(n/2),l=a(r/2),f=a(s/2),h=u(n/2),v=u(r/2),p=u(s/2);switch(o){case"XYZ":this._x=h*l*f+c*v*p,this._y=c*v*f-h*l*p,this._z=c*l*p+h*v*f,this._w=c*l*f-h*v*p;break;case"YXZ":this._x=h*l*f+c*v*p,this._y=c*v*f-h*l*p,this._z=c*l*p-h*v*f,this._w=c*l*f+h*v*p;break;case"ZXY":this._x=h*l*f-c*v*p,this._y=c*v*f+h*l*p,this._z=c*l*p+h*v*f,this._w=c*l*f-h*v*p;break;case"ZYX":this._x=h*l*f-c*v*p,this._y=c*v*f+h*l*p,this._z=c*l*p-h*v*f,this._w=c*l*f+h*v*p;break;case"YZX":this._x=h*l*f+c*v*p,this._y=c*v*f+h*l*p,this._z=c*l*p-h*v*f,this._w=c*l*f-h*v*p;break;case"XZY":this._x=h*l*f-c*v*p,this._y=c*v*f-h*l*p,this._z=c*l*p+h*v*f,this._w=c*l*f+h*v*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],u=t[9],c=t[2],l=t[6],f=t[10],h=n+a+f;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(l-u)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(n>a&&n>f){const v=2*Math.sqrt(1+n-a-f);this._w=(l-u)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>f){const v=2*Math.sqrt(1+a-n-f);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(u+l)/v}else{const v=2*Math.sqrt(1+f-n-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(u+l)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,u=t._y,c=t._z,l=t._w;return this._x=n*l+o*a+r*c-s*u,this._y=r*l+o*u+s*a-n*c,this._z=s*l+o*c+n*u-r*a,this._w=o*l-n*a-r*u-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),l=Math.atan2(c,a),f=Math.sin((1-t)*l)/c,h=Math.sin(t*l)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,u=e.w,c=u*t+o*r-a*n,l=u*n+a*t-s*r,f=u*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*u+h*-s+l*-a-f*-o,this.y=l*u+h*-o+f*-s-c*-a,this.z=f*u+h*-a+c*-o-l*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=r*u-s*a,this.y=s*o-n*u,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new V,$l=new Kn;class vr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fi.copy(e.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)on.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(on)}else r.boundingBox===null&&r.computeBoundingBox(),fi.copy(r.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),Pr.subVectors(this.max,Hi),hi.subVectors(e.a,Hi),di.subVectors(e.b,Hi),pi.subVectors(e.c,Hi),xn.subVectors(di,hi),yn.subVectors(pi,di),In.subVectors(hi,pi);let t=[0,-xn.z,xn.y,0,-yn.z,yn.y,0,-In.z,In.y,xn.z,0,-xn.x,yn.z,0,-yn.x,In.z,0,-In.x,-xn.y,xn.x,0,-yn.y,yn.x,0,-In.y,In.x,0];return!ya(t,hi,di,pi,Pr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,hi,di,pi,Pr))?!1:(Lr.crossVectors(xn,yn),t=[Lr.x,Lr.y,Lr.z],ya(t,hi,di,pi,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new V,new V,new V,new V,new V,new V,new V,new V],on=new V,fi=new vr,hi=new V,di=new V,pi=new V,xn=new V,yn=new V,In=new V,Hi=new V,Pr=new V,Lr=new V,Nn=new V;function ya(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Nn.fromArray(i,s);const a=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),u=e.dot(Nn),c=t.dot(Nn),l=n.dot(Nn);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}const Ig=new vr,Vi=new V,Ma=new V;class Eo{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ig.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(Ma)),this.expandByPoint(Vi.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new V,Sa=new V,Dr=new V,Mn=new V,Ea=new V,Ur=new V,ba=new V;class Ng{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sa.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Dr),a=Mn.dot(this.direction),u=-Mn.dot(Dr),c=Mn.lengthSq(),l=Math.abs(1-o*o);let f,h,v,p;if(l>0)if(f=o*u-a,h=o*a-u,p=s*l,f>=0)if(h>=-p)if(h<=p){const _=1/l;f*=_,h*=_,v=f*(f+o*h+2*a)+h*(o*f+h+2*u)+c}else h=s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*u)+c;else h=-s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*u)+c;else h<=-p?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-u),s),v=-f*f+h*(h+2*u)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-u),s),v=h*(h+2*u)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-u),s),v=-f*f+h*(h+2*u)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sa).addScaledVector(Dr,h),v}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,u;const c=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),l>=0?(s=(e.min.y-h.y)*l,o=(e.max.y-h.y)*l):(s=(e.max.y-h.y)*l,o=(e.min.y-h.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,u=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,u=(e.min.z-h.z)*f),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,r,s){Ea.subVectors(t,e),Ur.subVectors(n,e),ba.crossVectors(Ea,Ur);let o=this.direction.dot(ba),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const u=a*this.direction.dot(Ur.crossVectors(Mn,Ur));if(u<0)return null;const c=a*this.direction.dot(Ea.cross(Mn));if(c<0||u+c>o)return null;const l=-a*Mn.dot(ba);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,u,c,l,f,h,v,p,_,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=u,d[2]=c,d[6]=l,d[10]=f,d[14]=h,d[3]=v,d[7]=p,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(r),c=Math.sin(r),l=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*l,v=o*f,p=a*l,_=a*f;t[0]=u*l,t[4]=-u*f,t[8]=c,t[1]=v+p*c,t[5]=h-_*c,t[9]=-a*u,t[2]=_-h*c,t[6]=p+v*c,t[10]=o*u}else if(e.order==="YXZ"){const h=u*l,v=u*f,p=c*l,_=c*f;t[0]=h+_*a,t[4]=p*a-v,t[8]=o*c,t[1]=o*f,t[5]=o*l,t[9]=-a,t[2]=v*a-p,t[6]=_+h*a,t[10]=o*u}else if(e.order==="ZXY"){const h=u*l,v=u*f,p=c*l,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=p+v*a,t[1]=v+p*a,t[5]=o*l,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const h=o*l,v=o*f,p=a*l,_=a*f;t[0]=u*l,t[4]=p*c-v,t[8]=h*c+_,t[1]=u*f,t[5]=_*c+h,t[9]=v*c-p,t[2]=-c,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const h=o*u,v=o*c,p=a*u,_=a*c;t[0]=u*l,t[4]=_-h*f,t[8]=p*f+v,t[1]=f,t[5]=o*l,t[9]=-a*l,t[2]=-c*l,t[6]=v*f+p,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*u,v=o*c,p=a*u,_=a*c;t[0]=u*l,t[4]=-f,t[8]=c*l,t[1]=h*f+_,t[5]=o*l,t[9]=v*f-p,t[2]=p*f-v,t[6]=a*l,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Og,e,Fg)}lookAt(e,t,n){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Sn.crossVectors(n,Lt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Sn.crossVectors(n,Lt)),Sn.normalize(),Ir.crossVectors(Lt,Sn),r[0]=Sn.x,r[4]=Ir.x,r[8]=Lt.x,r[1]=Sn.y,r[5]=Ir.y,r[9]=Lt.y,r[2]=Sn.z,r[6]=Ir.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],c=n[12],l=n[1],f=n[5],h=n[9],v=n[13],p=n[2],_=n[6],g=n[10],d=n[14],x=n[3],m=n[7],M=n[11],y=n[15],b=r[0],w=r[4],L=r[8],E=r[12],A=r[1],N=r[5],T=r[9],S=r[13],R=r[2],C=r[6],k=r[10],F=r[14],U=r[3],z=r[7],H=r[11],ne=r[15];return s[0]=o*b+a*A+u*R+c*U,s[4]=o*w+a*N+u*C+c*z,s[8]=o*L+a*T+u*k+c*H,s[12]=o*E+a*S+u*F+c*ne,s[1]=l*b+f*A+h*R+v*U,s[5]=l*w+f*N+h*C+v*z,s[9]=l*L+f*T+h*k+v*H,s[13]=l*E+f*S+h*F+v*ne,s[2]=p*b+_*A+g*R+d*U,s[6]=p*w+_*N+g*C+d*z,s[10]=p*L+_*T+g*k+d*H,s[14]=p*E+_*S+g*F+d*ne,s[3]=x*b+m*A+M*R+y*U,s[7]=x*w+m*N+M*C+y*z,s[11]=x*L+m*T+M*k+y*H,s[15]=x*E+m*S+M*F+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],u=e[9],c=e[13],l=e[2],f=e[6],h=e[10],v=e[14],p=e[3],_=e[7],g=e[11],d=e[15];return p*(+s*u*f-r*c*f-s*a*h+n*c*h+r*a*v-n*u*v)+_*(+t*u*v-t*c*h+s*o*h-r*o*v+r*c*l-s*u*l)+g*(+t*c*f-t*a*v-s*o*f+n*o*v+s*a*l-n*c*l)+d*(-r*a*l-t*u*f+t*a*h+r*o*f-n*o*h+n*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],f=e[9],h=e[10],v=e[11],p=e[12],_=e[13],g=e[14],d=e[15],x=f*g*c-_*h*c+_*u*v-a*g*v-f*u*d+a*h*d,m=p*h*c-l*g*c-p*u*v+o*g*v+l*u*d-o*h*d,M=l*_*c-p*f*c+p*a*v-o*_*v-l*a*d+o*f*d,y=p*f*u-l*_*u-p*a*h+o*_*h+l*a*g-o*f*g,b=t*x+n*m+r*M+s*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(_*h*s-f*g*s-_*r*v+n*g*v+f*r*d-n*h*d)*w,e[2]=(a*g*s-_*u*s+_*r*c-n*g*c-a*r*d+n*u*d)*w,e[3]=(f*u*s-a*h*s-f*r*c+n*h*c+a*r*v-n*u*v)*w,e[4]=m*w,e[5]=(l*g*s-p*h*s+p*r*v-t*g*v-l*r*d+t*h*d)*w,e[6]=(p*u*s-o*g*s-p*r*c+t*g*c+o*r*d-t*u*d)*w,e[7]=(o*h*s-l*u*s+l*r*c-t*h*c-o*r*v+t*u*v)*w,e[8]=M*w,e[9]=(p*f*s-l*_*s-p*n*v+t*_*v+l*n*d-t*f*d)*w,e[10]=(o*_*s-p*a*s+p*n*c-t*_*c-o*n*d+t*a*d)*w,e[11]=(l*a*s-o*f*s-l*n*c+t*f*c+o*n*v-t*a*v)*w,e[12]=y*w,e[13]=(l*_*r-p*f*r+p*n*h-t*_*h-l*n*g+t*f*g)*w,e[14]=(p*a*r-o*_*r-p*n*u+t*_*u+o*n*g-t*a*g)*w,e[15]=(o*f*r-l*a*r+l*n*u-t*f*u-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,c=s*o,l=s*a;return this.set(c*o+n,c*a-r*u,c*u+r*a,0,c*a+r*u,l*a+n,l*u-r*o,0,c*u-r*a,l*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,c=s+s,l=o+o,f=a+a,h=s*c,v=s*l,p=s*f,_=o*l,g=o*f,d=a*f,x=u*c,m=u*l,M=u*f,y=n.x,b=n.y,w=n.z;return r[0]=(1-(_+d))*y,r[1]=(v+M)*y,r[2]=(p-m)*y,r[3]=0,r[4]=(v-M)*b,r[5]=(1-(h+d))*b,r[6]=(g+x)*b,r[7]=0,r[8]=(p+m)*w,r[9]=(g-x)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const o=mi.set(r[4],r[5],r[6]).length(),a=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const c=1/s,l=1/o,f=1/a;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=l,Ht.elements[5]*=l,Ht.elements[6]*=l,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,u=2*s/(t-e),c=2*s/(n-r),l=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),v=-2*o*s/(o-s);return a[0]=u,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,u=1/(t-e),c=1/(n-r),l=1/(o-s),f=(t+e)*u,h=(n+r)*c,v=(o+s)*l;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new V,Ht=new ot,Og=new V(0,0,0),Fg=new V(1,1,1),Sn=new V,Ir=new V,Lt=new V,jl=new ot,Xl=new Kn;class Gs{constructor(e=0,t=0,n=0,r=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],u=r[1],c=r[5],l=r[9],f=r[2],h=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class Nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bg=0;const ql=new V,gi=new Kn,cn=new ot,Nr=new V,Wi=new V,kg=new V,zg=new Kn,Yl=new V(1,0,0),Kl=new V(0,1,0),Jl=new V(0,0,1),Gg={type:"added"},Zl={type:"removed"};class Tt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new V,t=new Gs,n=new Kn,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Wi,Nr,this.up):cn.lookAt(Nr,Wi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(cn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const f=u[c];s(e.shapes,f)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(s(e.materials,this.material[u]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),c=o(e.textures),l=o(e.images),f=o(e.shapes),h=o(e.skeletons),v=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),v.length>0&&(n.animations=v),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const u=[];for(const c in a){const l=a[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new V(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new V,un=new V,wa=new V,fn=new V,_i=new V,vi=new V,Ql=new V,Ta=new V,Aa=new V,Ra=new V;let Or=!1;class $t{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),un.subVectors(n,t),wa.subVectors(e,t);const o=Vt.dot(Vt),a=Vt.dot(un),u=Vt.dot(wa),c=un.dot(un),l=un.dot(wa),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,v=(c*u-a*l)*h,p=(o*l-a*u)*h;return s.set(1-v-p,p,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,r,s,o,a,u){return Or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Or=!0),this.getInterpolation(e,t,n,r,s,o,a,u)}static getInterpolation(e,t,n,r,s,o,a,u){return this.getBarycoord(e,t,n,r,fn),u.setScalar(0),u.addScaledVector(s,fn.x),u.addScaledVector(o,fn.y),u.addScaledVector(a,fn.z),u}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),un.subVectors(e,t),Vt.cross(un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Vt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Or=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;_i.subVectors(r,n),vi.subVectors(s,n),Ta.subVectors(e,n);const u=_i.dot(Ta),c=vi.dot(Ta);if(u<=0&&c<=0)return t.copy(n);Aa.subVectors(e,r);const l=_i.dot(Aa),f=vi.dot(Aa);if(l>=0&&f<=l)return t.copy(r);const h=u*f-l*c;if(h<=0&&u>=0&&l<=0)return o=u/(u-l),t.copy(n).addScaledVector(_i,o);Ra.subVectors(e,s);const v=_i.dot(Ra),p=vi.dot(Ra);if(p>=0&&v<=p)return t.copy(s);const _=v*c-u*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(vi,a);const g=l*p-v*f;if(g<=0&&f-l>=0&&v-p>=0)return Ql.subVectors(s,r),a=(f-l)/(f-l+(v-p)),t.copy(r).addScaledVector(Ql,a);const d=1/(g+_+h);return o=_*d,a=h*d,t.copy(n).addScaledVector(_i,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hg=0;class xr extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Ci,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mu,this.blendDst=Su,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=bg(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ca(o,s,e+1/3),this.g=Ca(o,s,e),this.b=Ca(o,s,e-1/3)}return Gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ae){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){const n=Ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return Gt.fromWorkingColorSpace(_t.copy(this),e),Math.round(bt(_t.r*255,0,255))*65536+Math.round(bt(_t.g*255,0,255))*256+Math.round(bt(_t.b*255,0,255))}getHexString(e=Ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,r=_t.g,s=_t.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let u,c;const l=(a+o)/2;if(a===o)u=0,c=0;else{const f=o-a;switch(c=l<=.5?f/(o+a):f/(2-o-a),o){case n:u=(r-s)/f+(r<s?6:0);break;case r:u=(s-n)/f+2;break;case s:u=(n-r)/f+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Ae){Gt.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,r=_t.b;return e!==Ae?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=n,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(Fr);const n=ma(Wt.h,Fr.h,t),r=ma(Wt.s,Fr.s,t),s=ma(Wt.l,Fr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new He;He.NAMES=Ou;class ls extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new V,Br=new Ne;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fu extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bu extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vg=0;const Ft=new ot,Pa=new Tt,xi=new V,Dt=new vr,$i=new vr,ft=new V;class Pn extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Bu:Fu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Dt.min,$i.min),Dt.expandByPoint(ft),ft.addVectors(Dt.max,$i.max),Dt.expandByPoint(ft)):(Dt.expandByPoint($i.min),Dt.expandByPoint($i.max))}Dt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)ft.fromBufferAttribute(a,c),u&&(xi.fromBufferAttribute(e,c),ft.add(xi)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],l=[];for(let A=0;A<a;A++)c[A]=new V,l[A]=new V;const f=new V,h=new V,v=new V,p=new Ne,_=new Ne,g=new Ne,d=new V,x=new V;function m(A,N,T){f.fromArray(r,A*3),h.fromArray(r,N*3),v.fromArray(r,T*3),p.fromArray(o,A*2),_.fromArray(o,N*2),g.fromArray(o,T*2),h.sub(f),v.sub(f),_.sub(p),g.sub(p);const S=1/(_.x*g.y-g.x*_.y);isFinite(S)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(v,-_.y).multiplyScalar(S),x.copy(v).multiplyScalar(_.x).addScaledVector(h,-g.x).multiplyScalar(S),c[A].add(d),c[N].add(d),c[T].add(d),l[A].add(x),l[N].add(x),l[T].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,N=M.length;A<N;++A){const T=M[A],S=T.start,R=T.count;for(let C=S,k=S+R;C<k;C+=3)m(n[C+0],n[C+1],n[C+2])}const y=new V,b=new V,w=new V,L=new V;function E(A){w.fromArray(s,A*3),L.copy(w);const N=c[A];y.copy(N),y.sub(w.multiplyScalar(w.dot(N))).normalize(),b.crossVectors(L,N);const S=b.dot(l[A])<0?-1:1;u[A*4]=y.x,u[A*4+1]=y.y,u[A*4+2]=y.z,u[A*4+3]=S}for(let A=0,N=M.length;A<N;++A){const T=M[A],S=T.start,R=T.count;for(let C=S,k=S+R;C<k;C+=3)E(n[C+0]),E(n[C+1]),E(n[C+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,v=n.count;h<v;h++)n.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,u=new V,c=new V,l=new V,f=new V;if(e)for(let h=0,v=e.count;h<v;h+=3){const p=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),l.subVectors(o,s),f.subVectors(r,s),l.cross(f),a.fromBufferAttribute(n,p),u.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(l),u.add(l),c.add(l),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,v=t.count;h<v;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),l.subVectors(o,s),f.subVectors(r,s),l.cross(f),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,u){const c=a.array,l=a.itemSize,f=a.normalized,h=new c.constructor(u.length*l);let v=0,p=0;for(let _=0,g=u.length;_<g;_++){a.isInterleavedBufferAttribute?v=u[_]*a.data.stride+a.offset:v=u[_]*l;for(let d=0;d<l;d++)h[p++]=c[v++]}return new en(h,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const u=[],c=s[a];for(let l=0,f=c.length;l<f;l++){const h=c[l],v=e(h,n);u.push(v)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let f=0,h=c.length;f<h;f++){const v=c[f];l.push(v.toJSON(e.data))}l.length>0&&(r[u]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(t))}const s=e.morphAttributes;for(const c in s){const l=[],f=s[c];for(let h=0,v=f.length;h<v;h++)l.push(f[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,l=o.length;c<l;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new ot,Kt=new Ng,kr=new Eo,tc=new V,yi=new V,Mi=new V,Si=new V,La=new V,zr=new V,Gr=new Ne,Hr=new Ne,Vr=new Ne,nc=new V,ic=new V,rc=new V,Wr=new V,$r=new V;class Zt extends Tt{constructor(e=new Pn,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zr.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const l=a[u],f=s[u];l!==0&&(La.fromBufferAttribute(f,e),o?zr.addScaledVector(La,l):zr.addScaledVector(La.sub(t),l))}t.add(zr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),Kt.copy(e.ray).recast(e.near),!(kr.containsPoint(Kt.origin)===!1&&(Kt.intersectSphere(kr,tc)===null||Kt.origin.distanceToSquared(tc)>(e.far-e.near)**2))&&(ec.copy(s).invert(),Kt.copy(e.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Kt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,l=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,p=f.length;v<p;v++){const _=f[v],g=s[_.materialIndex],d=Math.max(_.start,h.start),x=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let m=d,M=x;m<M;m+=3){const y=o.getX(m),b=o.getX(m+1),w=o.getX(m+2);n=jr(this,g,e,Kt,u,c,l,y,b,w),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const v=Math.max(0,h.start),p=Math.min(o.count,h.start+h.count);for(let _=v,g=p;_<g;_+=3){const d=o.getX(_),x=o.getX(_+1),m=o.getX(_+2);n=jr(this,s,e,Kt,u,c,l,d,x,m),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let v=0,p=f.length;v<p;v++){const _=f[v],g=s[_.materialIndex],d=Math.max(_.start,h.start),x=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let m=d,M=x;m<M;m+=3){const y=m,b=m+1,w=m+2;n=jr(this,g,e,Kt,u,c,l,y,b,w),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const v=Math.max(0,h.start),p=Math.min(a.count,h.start+h.count);for(let _=v,g=p;_<g;_+=3){const d=_,x=_+1,m=_+2;n=jr(this,s,e,Kt,u,c,l,d,x,m),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function Wg(i,e,t,n,r,s,o,a){let u;if(e.side===wt?u=n.intersectTriangle(o,s,r,!0,a):u=n.intersectTriangle(r,s,o,e.side===Tn,a),u===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:i}}function jr(i,e,t,n,r,s,o,a,u,c){i.getVertexPosition(a,yi),i.getVertexPosition(u,Mi),i.getVertexPosition(c,Si);const l=Wg(i,e,t,n,yi,Mi,Si,Wr);if(l){r&&(Gr.fromBufferAttribute(r,a),Hr.fromBufferAttribute(r,u),Vr.fromBufferAttribute(r,c),l.uv=$t.getInterpolation(Wr,yi,Mi,Si,Gr,Hr,Vr,new Ne)),s&&(Gr.fromBufferAttribute(s,a),Hr.fromBufferAttribute(s,u),Vr.fromBufferAttribute(s,c),l.uv1=$t.getInterpolation(Wr,yi,Mi,Si,Gr,Hr,Vr,new Ne),l.uv2=l.uv1),o&&(nc.fromBufferAttribute(o,a),ic.fromBufferAttribute(o,u),rc.fromBufferAttribute(o,c),l.normal=$t.getInterpolation(Wr,yi,Mi,Si,nc,ic,rc,new V),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:u,c,normal:new V,materialIndex:0};$t.getNormal(yi,Mi,Si,f.normal),l.face=f}return l}class yr extends Pn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],c=[],l=[],f=[];let h=0,v=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(f,2));function p(_,g,d,x,m,M,y,b,w,L,E){const A=M/w,N=y/L,T=M/2,S=y/2,R=b/2,C=w+1,k=L+1;let F=0,U=0;const z=new V;for(let H=0;H<k;H++){const ne=H*N-S;for(let K=0;K<C;K++){const W=K*A-T;z[_]=W*x,z[g]=ne*m,z[d]=R,c.push(z.x,z.y,z.z),z[_]=0,z[g]=0,z[d]=b>0?1:-1,l.push(z.x,z.y,z.z),f.push(K/w),f.push(1-H/L),F+=1}}for(let H=0;H<L;H++)for(let ne=0;ne<w;ne++){const K=h+ne+C*H,W=h+ne+C*(H+1),q=h+(ne+1)+C*(H+1),ie=h+(ne+1)+C*H;u.push(K,W,ie),u.push(W,q,ie),U+=6}a.addGroup(v,U,E),v+=U,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=Oi(i[t]);for(const r in n)e[r]=n[r]}return e}function $g(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ku(i){return i.getRenderTarget()===null?i.outputColorSpace:nn}const jg={clone:Oi,merge:St};var Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=$g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zu extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends zu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/c,r*=o.width/u,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,bi=1;class Yg extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Ut(Ei,bi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ut(Ei,bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ut(Ei,bi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ut(Ei,bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new Ut(Ei,bi,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const c=new Ut(Ei,bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,u,c]=this.children,l=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=mn,e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(l),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Gu extends _n{constructor(e,t,n,r,s,o,a,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,r,s,o,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kg extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===jn?Ae:Xn),this.texture=new Gu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yr(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:bn});s.uniforms.tEquirect.value=t;const o=new Zt(r,s),a=t.minFilter;return t.minFilter===rr&&(t.minFilter=Bt),new Yg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Da=new V,Jg=new V,Zg=new ze;class Fn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Da.subVectors(n,t).cross(Jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Da),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zg.getNormalMatrix(e),r=this.coplanarPoint(Da).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Eo,Xr=new V;class bo{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],u=n[4],c=n[5],l=n[6],f=n[7],h=n[8],v=n[9],p=n[10],_=n[11],g=n[12],d=n[13],x=n[14],m=n[15];return t[0].setComponents(a-r,f-u,_-h,m-g).normalize(),t[1].setComponents(a+r,f+u,_+h,m+g).normalize(),t[2].setComponents(a+s,f+c,_+v,m+d).normalize(),t[3].setComponents(a-s,f-c,_-v,m-d).normalize(),t[4].setComponents(a-o,f-l,_-p,m-x).normalize(),t[5].setComponents(a+o,f+l,_+p,m+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xr.x=r.normal.x>0?e.max.x:e.min.x,Xr.y=r.normal.y>0?e.max.y:e.min.y,Xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Qg(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,l){const f=c.array,h=c.usage,v=i.createBuffer();i.bindBuffer(l,v),i.bufferData(l,f,h),c.onUploadCallback();let p;if(f instanceof Float32Array)p=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)p=i.SHORT;else if(f instanceof Uint32Array)p=i.UNSIGNED_INT;else if(f instanceof Int32Array)p=i.INT;else if(f instanceof Int8Array)p=i.BYTE;else if(f instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,l,f){const h=l.array,v=l.updateRange;i.bindBuffer(f,c),v.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h,v.offset,v.count):i.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h.subarray(v.offset,v.offset+v.count)),v.count=-1),l.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l&&(i.deleteBuffer(l.buffer),n.delete(c))}function u(c,l){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,l)):f.version<c.version&&(s(f.buffer,c,l),f.version=c.version)}return{get:o,remove:a,update:u}}class wo extends Pn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(r),c=a+1,l=u+1,f=e/a,h=t/u,v=[],p=[],_=[],g=[];for(let d=0;d<l;d++){const x=d*h-o;for(let m=0;m<c;m++){const M=m*f-s;p.push(M,-x,0),_.push(0,0,1),g.push(m/a),g.push(1-d/u)}}for(let d=0;d<u;d++)for(let x=0;x<a;x++){const m=x+c*d,M=x+c*(d+1),y=x+1+c*(d+1),b=x+1+c*d;v.push(m,M,b),v.push(M,y,b)}this.setIndex(v),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a_="vec3 transformed = vec3( position );",o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c_=`#ifdef USE_IRIDESCENCE
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
#endif`,u_=`#ifdef USE_BUMPMAP
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x_=`#define PI 3.141592653589793
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
} // validated`,y_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M_=`vec3 transformedNormal = objectNormal;
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
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,B_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,k_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
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
#endif`,V_=`#if defined( USE_ENVMAP )
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
#endif`,W_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
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
#endif`,Y_=`struct PhysicalMaterial {
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
}`,K_=`
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Q_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iv=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,av=`#if defined( USE_POINTS_UV )
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
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uv=`#ifdef USE_MORPHNORMALS
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
#endif`,fv=`#ifdef USE_MORPHTARGETS
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
#endif`,hv=`#ifdef USE_MORPHTARGETS
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
#endif`,dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vv=`#ifdef USE_NORMALMAP
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
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iv=`float getShadowMask() {
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
}`,Nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#ifdef USE_UV
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
#endif`,jv=`#ifdef USE_UV
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
#endif`,Xv=`#ifdef USE_UV
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
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,r0=`#define DISTANCE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,u0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,h0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,v0=`#define PHONG
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
}`,x0=`#define STANDARD
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
}`,y0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,S0=`#define TOON
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
}`,E0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,Pe={alphamap_fragment:e_,alphamap_pars_fragment:t_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:r_,aomap_pars_fragment:s_,begin_vertex:a_,beginnormal_vertex:o_,bsdfs:l_,iridescence_fragment:c_,bumpmap_pars_fragment:u_,clipping_planes_fragment:f_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:p_,color_fragment:m_,color_pars_fragment:g_,color_pars_vertex:__,color_vertex:v_,common:x_,cube_uv_reflection_fragment:y_,defaultnormal_vertex:M_,displacementmap_pars_vertex:S_,displacementmap_vertex:E_,emissivemap_fragment:b_,emissivemap_pars_fragment:w_,encodings_fragment:T_,encodings_pars_fragment:A_,envmap_fragment:R_,envmap_common_pars_fragment:C_,envmap_pars_fragment:P_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:V_,envmap_vertex:D_,fog_vertex:U_,fog_pars_vertex:I_,fog_fragment:N_,fog_pars_fragment:O_,gradientmap_pars_fragment:F_,lightmap_fragment:B_,lightmap_pars_fragment:k_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:G_,lights_pars_begin:H_,lights_toon_fragment:W_,lights_toon_pars_fragment:$_,lights_phong_fragment:j_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:K_,lights_fragment_maps:J_,lights_fragment_end:Z_,logdepthbuf_fragment:Q_,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:rv,map_particle_fragment:sv,map_particle_pars_fragment:av,metalnessmap_fragment:ov,metalnessmap_pars_fragment:lv,morphcolor_vertex:cv,morphnormal_vertex:uv,morphtarget_pars_vertex:fv,morphtarget_vertex:hv,normal_fragment_begin:dv,normal_fragment_maps:pv,normal_pars_fragment:mv,normal_pars_vertex:gv,normal_vertex:_v,normalmap_pars_fragment:vv,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:Mv,iridescence_pars_fragment:Sv,output_fragment:Ev,packing:bv,premultiplied_alpha_fragment:wv,project_vertex:Tv,dithering_fragment:Av,dithering_pars_fragment:Rv,roughnessmap_fragment:Cv,roughnessmap_pars_fragment:Pv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Uv,shadowmask_pars_fragment:Iv,skinbase_vertex:Nv,skinning_pars_vertex:Ov,skinning_vertex:Fv,skinnormal_vertex:Bv,specularmap_fragment:kv,specularmap_pars_fragment:zv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Hv,transmission_fragment:Vv,transmission_pars_fragment:Wv,uv_pars_fragment:$v,uv_pars_vertex:jv,uv_vertex:Xv,worldpos_vertex:qv,background_vert:Yv,background_frag:Kv,backgroundCube_vert:Jv,backgroundCube_frag:Zv,cube_vert:Qv,cube_frag:e0,depth_vert:t0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:r0,equirect_vert:s0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:u0,meshlambert_vert:f0,meshlambert_frag:h0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:v0,meshphysical_vert:x0,meshphysical_frag:y0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:E0,points_frag:b0,shadow_vert:w0,shadow_frag:T0,sprite_vert:A0,sprite_frag:R0},le={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}}},Jt={basic:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:St([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:St([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:St([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:St([le.points,le.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:St([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:St([le.common,le.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:St([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:St([le.sprite,le.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:St([le.common,le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:St([le.lights,le.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Jt.physical={uniforms:St([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const qr={r:0,b:0,g:0};function C0(i,e,t,n,r,s,o){const a=new He(0);let u=s===!0?0:1,c,l,f=null,h=0,v=null;function p(g,d){let x=!1,m=d.isScene===!0?d.background:null;switch(m&&m.isTexture&&(m=(d.backgroundBlurriness>0?t:e).get(m)),m===null?_(a,u):m&&m.isColor&&(_(m,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),m&&(m.isCubeTexture||m.mapping===zs)?(l===void 0&&(l=new Zt(new yr(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Oi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=m.colorSpace!==Ae,(f!==m||h!==m.version||v!==i.toneMapping)&&(l.material.needsUpdate=!0,f=m,h=m.version,v=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Zt(new wo(2,2),new Jn({name:"BackgroundMaterial",uniforms:Oi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=m.colorSpace!==Ae,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||h!==m.version||v!==i.toneMapping)&&(c.material.needsUpdate=!0,f=m,h=m.version,v=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,d){g.getRGB(qr,ku(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),u=d,_(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(g){u=g,_(a,u)},render:p}}function P0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},u=g(null);let c=u,l=!1;function f(R,C,k,F,U){let z=!1;if(o){const H=_(F,k,C);c!==H&&(c=H,v(c.object)),z=d(R,F,k,U),z&&x(R,F,k,U)}else{const H=C.wireframe===!0;(c.geometry!==F.id||c.program!==k.id||c.wireframe!==H)&&(c.geometry=F.id,c.program=k.id,c.wireframe=H,z=!0)}U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||l)&&(l=!1,L(R,C,k,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function v(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function p(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,C,k){const F=k.wireframe===!0;let U=a[R.id];U===void 0&&(U={},a[R.id]=U);let z=U[C.id];z===void 0&&(z={},U[C.id]=z);let H=z[F];return H===void 0&&(H=g(h()),z[F]=H),H}function g(R){const C=[],k=[],F=[];for(let U=0;U<r;U++)C[U]=0,k[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:F,object:R,attributes:{},index:null}}function d(R,C,k,F){const U=c.attributes,z=C.attributes;let H=0;const ne=k.getAttributes();for(const K in ne)if(ne[K].location>=0){const q=U[K];let ie=z[K];if(ie===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;H++}return c.attributesNum!==H||c.index!==F}function x(R,C,k,F){const U={},z=C.attributes;let H=0;const ne=k.getAttributes();for(const K in ne)if(ne[K].location>=0){let q=z[K];q===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),U[K]=ie,H++}c.attributes=U,c.attributesNum=H,c.index=F}function m(){const R=c.newAttributes;for(let C=0,k=R.length;C<k;C++)R[C]=0}function M(R){y(R,0)}function y(R,C){const k=c.newAttributes,F=c.enabledAttributes,U=c.attributeDivisors;k[R]=1,F[R]===0&&(i.enableVertexAttribArray(R),F[R]=1),U[R]!==C&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,C),U[R]=C)}function b(){const R=c.newAttributes,C=c.enabledAttributes;for(let k=0,F=C.length;k<F;k++)C[k]!==R[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function w(R,C,k,F,U,z){n.isWebGL2===!0&&(k===i.INT||k===i.UNSIGNED_INT)?i.vertexAttribIPointer(R,C,k,U,z):i.vertexAttribPointer(R,C,k,F,U,z)}function L(R,C,k,F){if(n.isWebGL2===!1&&(R.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const U=F.attributes,z=k.getAttributes(),H=C.defaultAttributeValues;for(const ne in z){const K=z[ne];if(K.location>=0){let W=U[ne];if(W===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){const q=W.normalized,ie=W.itemSize,J=t.get(W);if(J===void 0)continue;const O=J.buffer,xe=J.type,ye=J.bytesPerElement;if(W.isInterleavedBufferAttribute){const oe=W.data,pe=oe.stride,Oe=W.offset;if(oe.isInstancedInterleavedBuffer){for(let me=0;me<K.locationSize;me++)y(K.location+me,oe.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<K.locationSize;me++)M(K.location+me);i.bindBuffer(i.ARRAY_BUFFER,O);for(let me=0;me<K.locationSize;me++)w(K.location+me,ie/K.locationSize,xe,q,pe*ye,(Oe+ie/K.locationSize*me)*ye)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<K.locationSize;oe++)y(K.location+oe,W.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<K.locationSize;oe++)M(K.location+oe);i.bindBuffer(i.ARRAY_BUFFER,O);for(let oe=0;oe<K.locationSize;oe++)w(K.location+oe,ie/K.locationSize,xe,q,ie*ye,ie/K.locationSize*oe*ye)}}else if(H!==void 0){const q=H[ne];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(K.location,q);break;case 3:i.vertexAttrib3fv(K.location,q);break;case 4:i.vertexAttrib4fv(K.location,q);break;default:i.vertexAttrib1fv(K.location,q)}}}}b()}function E(){T();for(const R in a){const C=a[R];for(const k in C){const F=C[k];for(const U in F)p(F[U].object),delete F[U];delete C[k]}delete a[R]}}function A(R){if(a[R.id]===void 0)return;const C=a[R.id];for(const k in C){const F=C[k];for(const U in F)p(F[U].object),delete F[U];delete C[k]}delete a[R.id]}function N(R){for(const C in a){const k=a[C];if(k[R.id]===void 0)continue;const F=k[R.id];for(const U in F)p(F[U].object),delete F[U];delete k[R.id]}}function T(){S(),l=!0,c!==u&&(c=u,v(c.object))}function S(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:f,reset:T,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:m,enableAttribute:M,disableUnusedAttributes:b}}function L0(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,l){i.drawArrays(s,c,l),t.update(l,s,1)}function u(c,l,f){if(f===0)return;let h,v;if(r)h=i,v="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[v](s,c,l,f),t.update(l,s,f)}this.setMode=o,this.render=a,this.renderInstances=u}function D0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,M=o||e.has("OES_texture_float"),y=m&&M,b=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:m,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:b}}function U0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Fn,a=new ze,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const v=f.length!==0||h||n!==0||r;return r=h,n=f.length,v},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=l(f,h,0)},this.setState=function(f,h,v){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!r||p===null||p.length===0||s&&!g)s?l(null):c();else{const x=s?0:n,m=x*4;let M=d.clippingState||null;u.value=M,M=l(p,h,m,v);for(let y=0;y!==m;++y)M[y]=t[y];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(f,h,v,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=u.value,p!==!0||g===null){const d=v+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let m=0,M=v;m!==_;++m,M+=4)o.copy(f[m]).applyMatrix4(x,a),o.normal.toArray(g,M),g[M+3]=o.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function I0(i){let e=new WeakMap;function t(o,a){return a===to?o.mapping=Ui:a===no&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new Kg(u.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class N0 extends zu{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,sc=[.125,.215,.35,.446,.526,.582],kn=20,Ua=new N0,ac=new He;let Ia=null;const Bn=(1+Math.sqrt(5))/2,wi=1/Bn,oc=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Bn,wi),new V(0,Bn,-wi),new V(wi,0,Bn),new V(-wi,0,Bn),new V(Bn,wi,0),new V(-Bn,wi,0)];class lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ia=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia),e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:sr,format:Xt,colorSpace:nn,depthBuffer:!1},r=cc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O0(s)),this._blurMaterial=F0(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,r){const a=new Ut(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,h=l.toneMapping;l.getClearColor(ac),l.toneMapping=mn,l.autoClear=!1;const v=new ls({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),p=new Zt(new yr,v);let _=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,_=!0):(v.color.copy(ac),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,u[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,u[d]),a.lookAt(0,c[d],0)):(a.up.set(0,u[d],0),a.lookAt(0,0,c[d]));const m=this._cubeSize;Yr(r,x*m,d>2?m:0,m,m),l.setRenderTarget(r),_&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ui||e.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;Yr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=oc[(r-1)%oc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new Zt(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*kn-1),_=s/p,g=isFinite(s)?1+Math.floor(l*_):kn;g>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${kn}`);const d=[];let x=0;for(let w=0;w<kn;++w){const L=w/_,E=Math.exp(-L*L/2);d.push(E),w===0?x+=E:w<g&&(x+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=p,h.mipInt.value=m-n;const M=this._sizeLods[r],y=3*M*(r>m-Ri?r-m+Ri:0),b=4*(this._cubeSize-M);Yr(t,y,b,3*M,2*M),u.setRenderTarget(t),u.render(f,Ua)}}function O0(i){const e=[],t=[],n=[];let r=i;const s=i-Ri+1+sc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let u=1/a;o>i-Ri?u=sc[o-i+Ri-1]:o===0&&(u=0),n.push(u);const c=1/(a-2),l=-c,f=1+c,h=[l,l,f,l,f,f,l,l,f,f,l,f],v=6,p=6,_=3,g=2,d=1,x=new Float32Array(_*p*v),m=new Float32Array(g*p*v),M=new Float32Array(d*p*v);for(let b=0;b<v;b++){const w=b%3*2/3-1,L=b>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];x.set(E,_*p*b),m.set(h,g*p*b);const A=[b,b,b,b,b,b];M.set(A,d*p*b)}const y=new Pn;y.setAttribute("position",new en(x,_)),y.setAttribute("uv",new en(m,g)),y.setAttribute("faceIndex",new en(M,d)),e.push(y),r>Ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cc(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function F0(i,e,t){const n=new Float32Array(kn),r=new V(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:To(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function uc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function fc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}function B0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,c=u===to||u===no,l=u===Ui||u===Ii;if(c||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new lc(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||l&&f&&r(f)){t===null&&(t=new lc(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function s(a){const u=a.target;u.removeEventListener("dispose",s);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function k0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function z0(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function u(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER);const v=f.morphAttributes;for(const p in v){const _=v[p];for(let g=0,d=_.length;g<d;g++)e.update(_[g],i.ARRAY_BUFFER)}}function c(f){const h=[],v=f.index,p=f.attributes.position;let _=0;if(v!==null){const x=v.array;_=v.version;for(let m=0,M=x.length;m<M;m+=3){const y=x[m+0],b=x[m+1],w=x[m+2];h.push(y,b,b,w,w,y)}}else{const x=p.array;_=p.version;for(let m=0,M=x.length/3-1;m<M;m+=3){const y=m+0,b=m+1,w=m+2;h.push(y,b,b,w,w,y)}}const g=new(Lu(h)?Bu:Fu)(h,1);g.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function l(f){const h=s.get(f);if(h){const v=f.index;v!==null&&h.version<v.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:u,getWireframeAttribute:l}}function G0(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,u;function c(h){a=h.type,u=h.bytesPerElement}function l(h,v){i.drawElements(s,v,a,h*u),t.update(v,s,1)}function f(h,v,p){if(p===0)return;let _,g;if(r)_=i,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](s,v,a,h*u,p),t.update(v,s,p)}this.setMode=o,this.setIndex=c,this.render=l,this.renderInstances=f}function H0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function V0(i,e){return i[0]-e[0]}function W0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function $0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ke,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,l,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,_=p!==void 0?p.length:0;let g=s.get(l);if(g===void 0||g.count!==_){let C=function(){S.dispose(),s.delete(l),l.removeEventListener("dispose",C)};var v=C;g!==void 0&&g.texture.dispose();const m=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,b=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],L=l.morphAttributes.color||[];let E=0;m===!0&&(E=1),M===!0&&(E=2),y===!0&&(E=3);let A=l.attributes.position.count*E,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*N*4*_),S=new Iu(T,A,N,_);S.type=Gn,S.needsUpdate=!0;const R=E*4;for(let k=0;k<_;k++){const F=b[k],U=w[k],z=L[k],H=A*N*4*k;for(let ne=0;ne<F.count;ne++){const K=ne*R;m===!0&&(o.fromBufferAttribute(F,ne),T[H+K+0]=o.x,T[H+K+1]=o.y,T[H+K+2]=o.z,T[H+K+3]=0),M===!0&&(o.fromBufferAttribute(U,ne),T[H+K+4]=o.x,T[H+K+5]=o.y,T[H+K+6]=o.z,T[H+K+7]=0),y===!0&&(o.fromBufferAttribute(z,ne),T[H+K+8]=o.x,T[H+K+9]=o.y,T[H+K+10]=o.z,T[H+K+11]=z.itemSize===4?o.w:1)}}g={count:_,texture:S,size:new Ne(A,N)},s.set(l,g),l.addEventListener("dispose",C)}let d=0;for(let m=0;m<h.length;m++)d+=h[m];const x=l.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=h===void 0?0:h.length;let _=n[l.id];if(_===void 0||_.length!==p){_=[];for(let M=0;M<p;M++)_[M]=[M,0];n[l.id]=_}for(let M=0;M<p;M++){const y=_[M];y[0]=M,y[1]=h[M]}_.sort(W0);for(let M=0;M<8;M++)M<p&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(V0);const g=l.morphAttributes.position,d=l.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const y=a[M],b=y[0],w=y[1];b!==Number.MAX_SAFE_INTEGER&&w?(g&&l.getAttribute("morphTarget"+M)!==g[b]&&l.setAttribute("morphTarget"+M,g[b]),d&&l.getAttribute("morphNormal"+M)!==d[b]&&l.setAttribute("morphNormal"+M,d[b]),r[M]=w,x+=w):(g&&l.hasAttribute("morphTarget"+M)===!0&&l.deleteAttribute("morphTarget"+M),d&&l.hasAttribute("morphNormal"+M)===!0&&l.deleteAttribute("morphNormal"+M),r[M]=0)}const m=l.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function j0(i,e,t,n){let r=new WeakMap;function s(u){const c=n.render.frame,l=u.geometry,f=e.get(u,l);return r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Vu=new _n,Wu=new Iu,$u=new Ug,ju=new Gu,hc=[],dc=[],pc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=hc[r];if(s===void 0&&(s=new Float32Array(r),hc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hs(i,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function X0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function J0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;gc.set(n),i.uniformMatrix2fv(this.addr,!1,gc),ct(t,n)}}function Z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;mc.set(n),i.uniformMatrix3fv(this.addr,!1,mc),ct(t,n)}}function Q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;pc.set(n),i.uniformMatrix4fv(this.addr,!1,pc),ct(t,n)}}function ex(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function lx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Vu,r)}function cx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$u,r)}function ux(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ju,r)}function fx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wu,r)}function hx(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return K0;case 35674:return J0;case 35675:return Z0;case 35676:return Q0;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return fx}}function dx(i,e){i.uniform1fv(this.addr,e)}function px(i,e){const t=ki(e,this.size,2);i.uniform2fv(this.addr,t)}function mx(i,e){const t=ki(e,this.size,3);i.uniform3fv(this.addr,t)}function gx(i,e){const t=ki(e,this.size,4);i.uniform4fv(this.addr,t)}function _x(i,e){const t=ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vx(i,e){const t=ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xx(i,e){const t=ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yx(i,e){i.uniform1iv(this.addr,e)}function Mx(i,e){i.uniform2iv(this.addr,e)}function Sx(i,e){i.uniform3iv(this.addr,e)}function Ex(i,e){i.uniform4iv(this.addr,e)}function bx(i,e){i.uniform1uiv(this.addr,e)}function wx(i,e){i.uniform2uiv(this.addr,e)}function Tx(i,e){i.uniform3uiv(this.addr,e)}function Ax(i,e){i.uniform4uiv(this.addr,e)}function Rx(i,e,t){const n=this.cache,r=e.length,s=Hs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Vu,s[o])}function Cx(i,e,t){const n=this.cache,r=e.length,s=Hs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$u,s[o])}function Px(i,e,t){const n=this.cache,r=e.length,s=Hs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ju,s[o])}function Lx(i,e,t){const n=this.cache,r=e.length,s=Hs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wu,s[o])}function Dx(i){switch(i){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return vx;case 35676:return xx;case 5124:case 35670:return yx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return Ex;case 5125:return bx;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hx(t.type)}}class Ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Dx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function _c(i,e){i.seq.push(e),i.map[e.id]=e}function Ox(i,e,t){const n=i.name,r=n.length;for(Na.lastIndex=0;;){const s=Na.exec(n),o=Na.lastIndex;let a=s[1];const u=s[2]==="]",c=s[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===r){_c(t,c===void 0?new Ux(a,i,e):new Ix(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Nx(a),_c(t,f)),t=f}}}class ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ox(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function vc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Fx=0;function Bx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kx(i){switch(i){case nn:return["Linear","( value )"];case Ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bx(i.getShaderSource(e),o)}else return r}function zx(i,e){const t=kx(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gx(i,e){let t;switch(e){case Qm:t="Linear";break;case eg:t="Reinhard";break;case tg:t="OptimizedCineon";break;case ng:t="ACESFilmic";break;case ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function Vx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xi(i){return i!==""}function yc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace($x,jx)}function jx(i,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return oo(t)}const Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(i){return i.replace(Xx,qx)}function qx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ec(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Ii:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Zx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eu:e="ENVMAP_BLENDING_MULTIPLY";break;case Jm:e="ENVMAP_BLENDING_MIX";break;case Zm:e="ENVMAP_BLENDING_ADD";break}return e}function Qx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ey(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=Yx(t),c=Kx(t),l=Jx(t),f=Zx(t),h=Qx(t),v=t.isWebGL2?"":Hx(t),p=Vx(s),_=r.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[p].filter(Xi).join(`
`),g.length>0&&(g+=`
`),d=[v,p].filter(Xi).join(`
`),d.length>0&&(d+=`
`)):(g=[Ec(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),d=[v,Ec(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==mn?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,zx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=oo(o),o=yc(o,t),o=Mc(o,t),a=oo(a),a=yc(a,t),a=Mc(a,t),o=Sc(o),a=Sc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const m=x+g+o,M=x+d+a,y=vc(r,r.VERTEX_SHADER,m),b=vc(r,r.FRAGMENT_SHADER,M);if(r.attachShader(_,y),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(y).trim(),N=r.getShaderInfoLog(b).trim();let T=!0,S=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(T=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,y,b);else{const R=xc(r,y,"vertex"),C=xc(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+R+`
`+C)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(A===""||N==="")&&(S=!1);S&&(this.diagnostics={runnable:T,programLog:E,vertexShader:{log:A,prefix:g},fragmentShader:{log:N,prefix:d}})}r.deleteShader(y),r.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new ns(r,_)),w};let L;return this.getAttributes=function(){return L===void 0&&(L=Wx(r,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let ty=0;class ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iy(e),t.set(e,n)),n}}class iy{constructor(e){this.id=ty++,this.code=e,this.usedTimes=0}}function ry(i,e,t,n,r,s,o){const a=new Nu,u=new ny,c=[],l=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let v=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===1?"uv1":E===2?"uv2":E===3?"uv3":"uv"}function g(E,A,N,T,S){const R=T.fog,C=S.geometry,k=E.isMeshStandardMaterial?T.environment:null,F=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),U=F&&F.mapping===zs?F.image.height:null,z=p[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const H=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=H!==void 0?H.length:0;let K=0;C.morphAttributes.position!==void 0&&(K=1),C.morphAttributes.normal!==void 0&&(K=2),C.morphAttributes.color!==void 0&&(K=3);let W,q,ie,J;if(z){const We=Jt[z];W=We.vertexShader,q=We.fragmentShader}else W=E.vertexShader,q=E.fragmentShader,u.update(E),ie=u.getVertexShaderID(E),J=u.getFragmentShaderID(E);const O=i.getRenderTarget(),xe=S.isInstancedMesh===!0,ye=!!E.map,oe=!!E.matcap,pe=!!F,Oe=!!E.aoMap,me=!!E.lightMap,Re=!!E.bumpMap,Qe=!!E.normalMap,Ze=!!E.displacementMap,rt=!!E.emissiveMap,et=!!E.metalnessMap,Ge=!!E.roughnessMap,Xe=E.clearcoat>0,pt=E.iridescence>0,I=E.sheen>0,P=E.transmission>0,Y=Xe&&!!E.clearcoatMap,re=Xe&&!!E.clearcoatNormalMap,ae=Xe&&!!E.clearcoatRoughnessMap,ce=pt&&!!E.iridescenceMap,B=pt&&!!E.iridescenceThicknessMap,te=I&&!!E.sheenColorMap,X=I&&!!E.sheenRoughnessMap,ue=!!E.specularMap,de=!!E.specularColorMap,_e=!!E.specularIntensityMap,fe=P&&!!E.transmissionMap,ge=P&&!!E.thicknessMap,Ee=!!E.gradientMap,De=!!E.alphaMap,tt=E.alphaTest>0,G=!!E.extensions,Z=!!C.attributes.uv1,se=!!C.attributes.uv2,he=!!C.attributes.uv3;return{isWebGL2:l,shaderID:z,shaderName:E.type,vertexShader:W,fragmentShader:q,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,instancing:xe,instancingColor:xe&&S.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:nn,map:ye,matcap:oe,envMap:pe,envMapMode:pe&&F.mapping,envMapCubeUVHeight:U,aoMap:Oe,lightMap:me,bumpMap:Re,normalMap:Qe,displacementMap:h&&Ze,emissiveMap:rt,normalMapObjectSpace:Qe&&E.normalMapType===Sg,normalMapTangentSpace:Qe&&E.normalMapType===Au,metalnessMap:et,roughnessMap:Ge,clearcoat:Xe,clearcoatMap:Y,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:pt,iridescenceMap:ce,iridescenceThicknessMap:B,sheen:I,sheenColorMap:te,sheenRoughnessMap:X,specularMap:ue,specularColorMap:de,specularIntensityMap:_e,transmission:P,transmissionMap:fe,thicknessMap:ge,gradientMap:Ee,opaque:E.transparent===!1&&E.blending===Ci,alphaMap:De,alphaTest:tt,combine:E.combine,mapUv:ye&&_(E.map.channel),aoMapUv:Oe&&_(E.aoMap.channel),lightMapUv:me&&_(E.lightMap.channel),bumpMapUv:Re&&_(E.bumpMap.channel),normalMapUv:Qe&&_(E.normalMap.channel),displacementMapUv:Ze&&_(E.displacementMap.channel),emissiveMapUv:rt&&_(E.emissiveMap.channel),metalnessMapUv:et&&_(E.metalnessMap.channel),roughnessMapUv:Ge&&_(E.roughnessMap.channel),clearcoatMapUv:Y&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:B&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:X&&_(E.sheenRoughnessMap.channel),specularMapUv:ue&&_(E.specularMap.channel),specularColorMapUv:de&&_(E.specularColorMap.channel),specularIntensityMapUv:_e&&_(E.specularIntensityMap.channel),transmissionMapUv:fe&&_(E.transmissionMap.channel),thicknessMapUv:ge&&_(E.thicknessMap.channel),alphaMapUv:De&&_(E.alphaMap.channel),vertexTangents:Qe&&!!C.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:Z,vertexUv2s:se,vertexUv3s:he,pointsUvs:S.isPoints===!0&&!!C.attributes.uv&&(ye||De),fog:!!R,useFog:E.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:S.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:E.toneMapped?i.toneMapping:mn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===wt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:G&&E.extensions.derivatives===!0,extensionFragDepth:G&&E.extensions.fragDepth===!0,extensionDrawBuffers:G&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)A.push(N),A.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(x(A,E),m(A,E),A.push(i.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function x(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function m(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),E.push(a.mask)}function M(E){const A=p[E.type];let N;if(A){const T=Jt[A];N=jg.clone(T.uniforms)}else N=E.uniforms;return N}function y(E,A){let N;for(let T=0,S=c.length;T<S;T++){const R=c[T];if(R.cacheKey===A){N=R,++N.usedTimes;break}}return N===void 0&&(N=new ey(i,A,E,s),c.push(N)),N}function b(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function w(E){u.remove(E)}function L(){u.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:L}}function sy(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function ay(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,v,p,_,g){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:v,groupOrder:p,renderOrder:f.renderOrder,z:_,group:g},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=v,d.groupOrder=p,d.renderOrder=f.renderOrder,d.z=_,d.group=g),e++,d}function a(f,h,v,p,_,g){const d=o(f,h,v,p,_,g);v.transmission>0?n.push(d):v.transparent===!0?r.push(d):t.push(d)}function u(f,h,v,p,_,g){const d=o(f,h,v,p,_,g);v.transmission>0?n.unshift(d):v.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||ay),n.length>1&&n.sort(h||bc),r.length>1&&r.sort(h||bc)}function l(){for(let f=e,h=i.length;f<h;f++){const v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:u,finish:l,sort:c}}function oy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new wc,i.set(n,[o])):r>=s.length?(o=new wc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ly(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new He};break;case"SpotLight":t={position:new V,direction:new V,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function cy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let uy=0;function fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hy(i,e){const t=new ly,n=cy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)r.probe.push(new V);const s=new V,o=new ot,a=new ot;function u(l,f){let h=0,v=0,p=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,g=0,d=0,x=0,m=0,M=0,y=0,b=0,w=0,L=0;l.sort(fy);const E=f===!0?Math.PI:1;for(let N=0,T=l.length;N<T;N++){const S=l[N],R=S.color,C=S.intensity,k=S.distance,F=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=R.r*C*E,v+=R.g*C*E,p+=R.b*C*E;else if(S.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(S.sh.coefficients[U],C);else if(S.isDirectionalLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity*E),S.castShadow){const z=S.shadow,H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.directionalShadow[_]=H,r.directionalShadowMap[_]=F,r.directionalShadowMatrix[_]=S.shadow.matrix,M++}r.directional[_]=U,_++}else if(S.isSpotLight){const U=t.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(R).multiplyScalar(C*E),U.distance=k,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,r.spot[d]=U;const z=S.shadow;if(S.map&&(r.spotLightMap[w]=S.map,w++,z.updateMatrices(S),S.castShadow&&L++),r.spotLightMatrix[d]=z.matrix,S.castShadow){const H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.spotShadow[d]=H,r.spotShadowMap[d]=F,b++}d++}else if(S.isRectAreaLight){const U=t.get(S);U.color.copy(R).multiplyScalar(C),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),r.rectArea[x]=U,x++}else if(S.isPointLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity*E),U.distance=S.distance,U.decay=S.decay,S.castShadow){const z=S.shadow,H=n.get(S);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=F,r.pointShadowMatrix[g]=S.shadow.matrix,y++}r.point[g]=U,g++}else if(S.isHemisphereLight){const U=t.get(S);U.skyColor.copy(S.color).multiplyScalar(C*E),U.groundColor.copy(S.groundColor).multiplyScalar(C*E),r.hemi[m]=U,m++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=v,r.ambient[2]=p;const A=r.hash;(A.directionalLength!==_||A.pointLength!==g||A.spotLength!==d||A.rectAreaLength!==x||A.hemiLength!==m||A.numDirectionalShadows!==M||A.numPointShadows!==y||A.numSpotShadows!==b||A.numSpotMaps!==w)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=x,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=b+w-L,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=L,A.directionalLength=_,A.pointLength=g,A.spotLength=d,A.rectAreaLength=x,A.hemiLength=m,A.numDirectionalShadows=M,A.numPointShadows=y,A.numSpotShadows=b,A.numSpotMaps=w,r.version=uy++)}function c(l,f){let h=0,v=0,p=0,_=0,g=0;const d=f.matrixWorldInverse;for(let x=0,m=l.length;x<m;x++){const M=l[x];if(M.isDirectionalLight){const y=r.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),h++}else if(M.isSpotLight){const y=r.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),p++}else if(M.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=r.point[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),v++}else if(M.isHemisphereLight){const y=r.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(d),g++}}}return{setup:u,setupView:c,state:r}}function Tc(i,e){const t=new hy(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function u(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a}}function dy(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let u;return a===void 0?(u=new Tc(i,e),t.set(s,[u])):o>=a.length?(u=new Tc(i,e),a.push(u)):u=a[o],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class py extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`;function vy(i,e,t){let n=new bo;const r=new Ne,s=new Ne,o=new Ke,a=new py({depthPacking:Mg}),u=new my,c={},l=t.maxTextureSize,f={[Tn]:wt,[wt]:Tn,[dn]:dn},h=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:gy,fragmentShader:_y}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const p=new Pn;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let d=this.type;this.render=function(y,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const L=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),N=i.state;N.setBlending(bn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const T=d!==hn&&this.type===hn,S=d===hn&&this.type!==hn;for(let R=0,C=y.length;R<C;R++){const k=y[R],F=k.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const U=F.getFrameExtents();if(r.multiply(U),s.copy(F.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/U.x),r.x=s.x*U.x,F.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/U.y),r.y=s.y*U.y,F.mapSize.y=s.y)),F.map===null||T===!0||S===!0){const H=this.type!==hn?{minFilter:Et,magFilter:Et}:{};F.map!==null&&F.map.dispose(),F.map=new Yn(r.x,r.y,H),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const z=F.getViewportCount();for(let H=0;H<z;H++){const ne=F.getViewport(H);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),N.viewport(o),F.updateMatrices(k,H),n=F.getFrustum(),M(b,w,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===hn&&x(F,w),F.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(L,E,A)};function x(y,b){const w=e.update(_);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,v.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Yn(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(b,null,w,h,_,null),v.uniforms.shadow_pass.value=y.mapPass.texture,v.uniforms.resolution.value=y.mapSize,v.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(b,null,w,v,_,null)}function m(y,b,w,L){let E=null;const A=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)E=A;else if(E=w.isPointLight===!0?u:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=E.uuid,T=b.uuid;let S=c[N];S===void 0&&(S={},c[N]=S);let R=S[T];R===void 0&&(R=E.clone(),S[T]=R),E=R}if(E.visible=b.visible,E.wireframe=b.wireframe,L===hn?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:f[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=i.properties.get(E);N.light=w}return E}function M(y,b,w,L,E){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===hn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const T=e.update(y),S=y.material;if(Array.isArray(S)){const R=T.groups;for(let C=0,k=R.length;C<k;C++){const F=R[C],U=S[F.materialIndex];if(U&&U.visible){const z=m(y,U,L,E);i.renderBufferDirect(w,null,T,z,y,F)}}}else if(S.visible){const R=m(y,S,L,E);i.renderBufferDirect(w,null,T,R,y,null)}}const N=y.children;for(let T=0,S=N.length;T<S;T++)M(N[T],b,w,L,E)}}function xy(i,e,t){const n=t.isWebGL2;function r(){let G=!1;const Z=new Ke;let se=null;const he=new Ke(0,0,0,0);return{setMask:function(ve){se!==ve&&!G&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){G=ve},setClear:function(ve,We,$e,mt,vn){vn===!0&&(ve*=mt,We*=mt,$e*=mt),Z.set(ve,We,$e,mt),he.equals(Z)===!1&&(i.clearColor(ve,We,$e,mt),he.copy(Z))},reset:function(){G=!1,se=null,he.set(-1,0,0,0)}}}function s(){let G=!1,Z=null,se=null,he=null;return{setTest:function(ve){ve?O(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ve){Z!==ve&&!G&&(i.depthMask(ve),Z=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Wm:i.depthFunc(i.NEVER);break;case $m:i.depthFunc(i.ALWAYS);break;case jm:i.depthFunc(i.LESS);break;case eo:i.depthFunc(i.LEQUAL);break;case Xm:i.depthFunc(i.EQUAL);break;case qm:i.depthFunc(i.GEQUAL);break;case Ym:i.depthFunc(i.GREATER);break;case Km:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){G=ve},setClear:function(ve){he!==ve&&(i.clearDepth(ve),he=ve)},reset:function(){G=!1,Z=null,se=null,he=null}}}function o(){let G=!1,Z=null,se=null,he=null,ve=null,We=null,$e=null,mt=null,vn=null;return{setTest:function(nt){G||(nt?O(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(nt){Z!==nt&&!G&&(i.stencilMask(nt),Z=nt)},setFunc:function(nt,Nt,Yt){(se!==nt||he!==Nt||ve!==Yt)&&(i.stencilFunc(nt,Nt,Yt),se=nt,he=Nt,ve=Yt)},setOp:function(nt,Nt,Yt){(We!==nt||$e!==Nt||mt!==Yt)&&(i.stencilOp(nt,Nt,Yt),We=nt,$e=Nt,mt=Yt)},setLocked:function(nt){G=nt},setClear:function(nt){vn!==nt&&(i.clearStencil(nt),vn=nt)},reset:function(){G=!1,Z=null,se=null,he=null,ve=null,We=null,$e=null,mt=null,vn=null}}}const a=new r,u=new s,c=new o,l=new WeakMap,f=new WeakMap;let h={},v={},p=new WeakMap,_=[],g=null,d=!1,x=null,m=null,M=null,y=null,b=null,w=null,L=null,E=!1,A=null,N=null,T=null,S=null,R=null;const C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=F>=2);let z=null,H={};const ne=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),W=new Ke().fromArray(ne),q=new Ke().fromArray(K);function ie(G,Z,se,he){const ve=new Uint8Array(4),We=i.createTexture();i.bindTexture(G,We),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<se;$e++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(Z,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Z+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return We}const J={};J[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(J[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),O(i.DEPTH_TEST),u.setFunc(eo),Ze(!1),rt(fl),O(i.CULL_FACE),Re(bn);function O(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function xe(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function ye(G,Z){return v[G]!==Z?(i.bindFramebuffer(G,Z),v[G]=Z,n&&(G===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Z),G===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Z)),!0):!1}function oe(G,Z){let se=_,he=!1;if(G)if(se=p.get(Z),se===void 0&&(se=[],p.set(Z,se)),G.isWebGLMultipleRenderTargets){const ve=G.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let We=0,$e=ve.length;We<$e;We++)se[We]=i.COLOR_ATTACHMENT0+We;se.length=ve.length,he=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,he=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function pe(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const Oe={[Ai]:i.FUNC_ADD,[Um]:i.FUNC_SUBTRACT,[Im]:i.FUNC_REVERSE_SUBTRACT};if(n)Oe[ml]=i.MIN,Oe[gl]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(Oe[ml]=G.MIN_EXT,Oe[gl]=G.MAX_EXT)}const me={[Nm]:i.ZERO,[Om]:i.ONE,[Fm]:i.SRC_COLOR,[Mu]:i.SRC_ALPHA,[Vm]:i.SRC_ALPHA_SATURATE,[Gm]:i.DST_COLOR,[km]:i.DST_ALPHA,[Bm]:i.ONE_MINUS_SRC_COLOR,[Su]:i.ONE_MINUS_SRC_ALPHA,[Hm]:i.ONE_MINUS_DST_COLOR,[zm]:i.ONE_MINUS_DST_ALPHA};function Re(G,Z,se,he,ve,We,$e,mt){if(G===bn){d===!0&&(xe(i.BLEND),d=!1);return}if(d===!1&&(O(i.BLEND),d=!0),G!==Dm){if(G!==x||mt!==E){if((m!==Ai||b!==Ai)&&(i.blendEquation(i.FUNC_ADD),m=Ai,b=Ai),mt)switch(G){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,y=null,w=null,L=null,x=G,E=mt}return}ve=ve||Z,We=We||se,$e=$e||he,(Z!==m||ve!==b)&&(i.blendEquationSeparate(Oe[Z],Oe[ve]),m=Z,b=ve),(se!==M||he!==y||We!==w||$e!==L)&&(i.blendFuncSeparate(me[se],me[he],me[We],me[$e]),M=se,y=he,w=We,L=$e),x=G,E=!1}function Qe(G,Z){G.side===dn?xe(i.CULL_FACE):O(i.CULL_FACE);let se=G.side===wt;Z&&(se=!se),Ze(se),G.blending===Ci&&G.transparent===!1?Re(bn):Re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const he=G.stencilWrite;c.setTest(he),he&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(G){A!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),A=G)}function rt(G){G!==Cm?(O(i.CULL_FACE),G!==N&&(G===fl?i.cullFace(i.BACK):G===Pm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),N=G}function et(G){G!==T&&(k&&i.lineWidth(G),T=G)}function Ge(G,Z,se){G?(O(i.POLYGON_OFFSET_FILL),(S!==Z||R!==se)&&(i.polygonOffset(Z,se),S=Z,R=se)):xe(i.POLYGON_OFFSET_FILL)}function Xe(G){G?O(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function pt(G){G===void 0&&(G=i.TEXTURE0+C-1),z!==G&&(i.activeTexture(G),z=G)}function I(G,Z,se){se===void 0&&(z===null?se=i.TEXTURE0+C-1:se=z);let he=H[se];he===void 0&&(he={type:void 0,texture:void 0},H[se]=he),(he.type!==G||he.texture!==Z)&&(z!==se&&(i.activeTexture(se),z=se),i.bindTexture(G,Z||J[G]),he.type=G,he.texture=Z)}function P(){const G=H[z];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(G){W.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),W.copy(G))}function ge(G){q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function Ee(G,Z){let se=f.get(Z);se===void 0&&(se=new WeakMap,f.set(Z,se));let he=se.get(G);he===void 0&&(he=i.getUniformBlockIndex(Z,G.name),se.set(G,he))}function De(G,Z){const he=f.get(Z).get(G);l.get(Z)!==he&&(i.uniformBlockBinding(Z,he,G.__bindingPointIndex),l.set(Z,he))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},z=null,H={},v={},p=new WeakMap,_=[],g=null,d=!1,x=null,m=null,M=null,y=null,b=null,w=null,L=null,E=!1,A=null,N=null,T=null,S=null,R=null,W.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:O,disable:xe,bindFramebuffer:ye,drawBuffers:oe,useProgram:pe,setBlending:Re,setMaterial:Qe,setFlipSided:Ze,setCullFace:rt,setLineWidth:et,setPolygonOffset:Ge,setScissorTest:Xe,activeTexture:pt,bindTexture:I,unbindTexture:P,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:de,texImage3D:_e,updateUBOMapping:Ee,uniformBlockBinding:De,texStorage2D:X,texStorage3D:ue,texSubImage2D:ae,texSubImage3D:ce,compressedTexSubImage2D:B,compressedTexSubImage3D:te,scissor:fe,viewport:ge,reset:tt}}function yy(i,e,t,n,r,s,o){const a=r.isWebGL2,u=r.maxTextures,c=r.maxCubemapSize,l=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let _;const g=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,P){return d?new OffscreenCanvas(I,P):os("canvas")}function m(I,P,Y,re){let ae=1;if((I.width>re||I.height>re)&&(ae=re/Math.max(I.width,I.height)),ae<1||P===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const ce=P?wg:Math.floor,B=ce(ae*I.width),te=ce(ae*I.height);_===void 0&&(_=x(B,te));const X=Y?x(B,te):_;return X.width=B,X.height=te,X.getContext("2d").drawImage(I,0,0,B,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+B+"x"+te+")."),X}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function M(I){return Vl(I.width)&&Vl(I.height)}function y(I){return a?!1:I.wrapS!==jt||I.wrapT!==jt||I.minFilter!==Et&&I.minFilter!==Bt}function b(I,P){return I.generateMipmaps&&P&&I.minFilter!==Et&&I.minFilter!==Bt}function w(I){i.generateMipmap(I)}function L(I,P,Y,re,ae=!1){if(a===!1)return P;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=P;return P===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8)),P===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8)),P===i.RGBA&&(Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=re===Ae&&ae===!1?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)),(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function E(I,P,Y){return b(I,Y)===!0||I.isFramebufferTexture&&I.minFilter!==Et&&I.minFilter!==Bt?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function A(I){return I===Et||I===_l||I===oa?i.NEAREST:i.LINEAR}function N(I){const P=I.target;P.removeEventListener("dispose",N),S(P),P.isVideoTexture&&p.delete(P)}function T(I){const P=I.target;P.removeEventListener("dispose",T),C(P)}function S(I){const P=n.get(I);if(P.__webglInit===void 0)return;const Y=I.source,re=g.get(Y);if(re){const ae=re[P.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(I),Object.keys(re).length===0&&g.delete(Y)}n.remove(I)}function R(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const Y=I.source,re=g.get(Y);delete re[P.__cacheKey],o.memory.textures--}function C(I){const P=I.texture,Y=n.get(I),re=n.get(P);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)i.deleteFramebuffer(Y.__webglFramebuffer[ae]),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[ae]);else{if(i.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ae=0,ce=P.length;ae<ce;ae++){const B=n.get(P[ae]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(P[ae])}n.remove(P),n.remove(I)}let k=0;function F(){k=0}function U(){const I=k;return I>=u&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+u),k+=1,I}function z(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function H(I,P){const Y=n.get(I);if(I.isVideoTexture&&Xe(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(Y,I,P);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+P)}function ne(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){xe(Y,I,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+P)}function K(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){xe(Y,I,P);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+P)}function W(I,P){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ye(Y,I,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+P)}const q={[io]:i.REPEAT,[jt]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},ie={[Et]:i.NEAREST,[_l]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[rg]:i.LINEAR_MIPMAP_NEAREST,[rr]:i.LINEAR_MIPMAP_LINEAR};function J(I,P,Y){if(Y?(i.texParameteri(I,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ie[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ie[P.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==jt||P.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,A(P.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,A(P.minFilter)),P.minFilter!==Et&&P.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===Et||P.minFilter!==oa&&P.minFilter!==rr||P.type===Gn&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function O(I,P){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",N));const re=P.source;let ae=g.get(re);ae===void 0&&(ae={},g.set(re,ae));const ce=z(P);if(ce!==I.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[ce].usedTimes++;const B=ae[I.__cacheKey];B!==void 0&&(ae[I.__cacheKey].usedTimes--,B.usedTimes===0&&R(P)),I.__cacheKey=ce,I.__webglTexture=ae[ce].texture}return Y}function xe(I,P,Y){let re=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(re=i.TEXTURE_3D);const ae=O(I,P),ce=P.source;t.bindTexture(re,I.__webglTexture,i.TEXTURE0+Y);const B=n.get(ce);if(ce.version!==B.__version||ae===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const te=y(P)&&M(P.image)===!1;let X=m(P.image,te,!1,l);X=pt(P,X);const ue=M(X)||a,de=s.convert(P.format,P.colorSpace);let _e=s.convert(P.type),fe=L(P.internalFormat,de,_e,P.colorSpace);J(re,P,ue);let ge;const Ee=P.mipmaps,De=a&&P.isVideoTexture!==!0,tt=B.__version===void 0||ae===!0,G=E(P,X,ue);if(P.isDepthTexture)fe=i.DEPTH_COMPONENT,a?P.type===Gn?fe=i.DEPTH_COMPONENT32F:P.type===zn?fe=i.DEPTH_COMPONENT24:P.type===Pi?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:P.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===$n&&fe===i.DEPTH_COMPONENT&&P.type!==wu&&P.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=zn,_e=s.convert(P.type)),P.format===Ni&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,P.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Pi,_e=s.convert(P.type))),tt&&(De?t.texStorage2D(i.TEXTURE_2D,1,fe,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,de,_e,null));else if(P.isDataTexture)if(Ee.length>0&&ue){De&&tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let Z=0,se=Ee.length;Z<se;Z++)ge=Ee[Z],De?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ge.width,ge.height,de,_e,ge.data):t.texImage2D(i.TEXTURE_2D,Z,fe,ge.width,ge.height,0,de,_e,ge.data);P.generateMipmaps=!1}else De?(tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,X.width,X.height,de,_e,X.data)):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,de,_e,X.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){De&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,fe,Ee[0].width,Ee[0].height,X.depth);for(let Z=0,se=Ee.length;Z<se;Z++)ge=Ee[Z],P.format!==Xt?de!==null?De?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ge.width,ge.height,X.depth,de,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,fe,ge.width,ge.height,X.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ge.width,ge.height,X.depth,de,_e,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,fe,ge.width,ge.height,X.depth,0,de,_e,ge.data)}else{De&&tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let Z=0,se=Ee.length;Z<se;Z++)ge=Ee[Z],P.format!==Xt?de!==null?De?t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ge.width,ge.height,de,_e,ge.data):t.texImage2D(i.TEXTURE_2D,Z,fe,ge.width,ge.height,0,de,_e,ge.data)}else if(P.isDataArrayTexture)De?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,fe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,de,_e,X.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,X.width,X.height,X.depth,0,de,_e,X.data);else if(P.isData3DTexture)De?(tt&&t.texStorage3D(i.TEXTURE_3D,G,fe,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,de,_e,X.data)):t.texImage3D(i.TEXTURE_3D,0,fe,X.width,X.height,X.depth,0,de,_e,X.data);else if(P.isFramebufferTexture){if(tt)if(De)t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height);else{let Z=X.width,se=X.height;for(let he=0;he<G;he++)t.texImage2D(i.TEXTURE_2D,he,fe,Z,se,0,de,_e,null),Z>>=1,se>>=1}}else if(Ee.length>0&&ue){De&&tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,Ee[0].width,Ee[0].height);for(let Z=0,se=Ee.length;Z<se;Z++)ge=Ee[Z],De?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,de,_e,ge):t.texImage2D(i.TEXTURE_2D,Z,fe,de,_e,ge);P.generateMipmaps=!1}else De?(tt&&t.texStorage2D(i.TEXTURE_2D,G,fe,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,_e,X)):t.texImage2D(i.TEXTURE_2D,0,fe,de,_e,X);b(P,ue)&&w(re),B.__version=ce.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ye(I,P,Y){if(P.image.length!==6)return;const re=O(I,P),ae=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const ce=n.get(ae);if(ae.version!==ce.__version||re===!0){t.activeTexture(i.TEXTURE0+Y),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const B=P.isCompressedTexture||P.image[0].isCompressedTexture,te=P.image[0]&&P.image[0].isDataTexture,X=[];for(let Z=0;Z<6;Z++)!B&&!te?X[Z]=m(P.image[Z],!1,!0,c):X[Z]=te?P.image[Z].image:P.image[Z],X[Z]=pt(P,X[Z]);const ue=X[0],de=M(ue)||a,_e=s.convert(P.format,P.colorSpace),fe=s.convert(P.type),ge=L(P.internalFormat,_e,fe,P.colorSpace),Ee=a&&P.isVideoTexture!==!0,De=ce.__version===void 0||re===!0;let tt=E(P,ue,de);J(i.TEXTURE_CUBE_MAP,P,de);let G;if(B){Ee&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,ge,ue.width,ue.height);for(let Z=0;Z<6;Z++){G=X[Z].mipmaps;for(let se=0;se<G.length;se++){const he=G[se];P.format!==Xt?_e!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,he.width,he.height,_e,fe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,ge,he.width,he.height,0,_e,fe,he.data)}}}else{G=P.mipmaps,Ee&&De&&(G.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,ge,X[0].width,X[0].height));for(let Z=0;Z<6;Z++)if(te){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,X[Z].width,X[Z].height,_e,fe,X[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ge,X[Z].width,X[Z].height,0,_e,fe,X[Z].data);for(let se=0;se<G.length;se++){const ve=G[se].image[Z].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,ve.width,ve.height,_e,fe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,ge,ve.width,ve.height,0,_e,fe,ve.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_e,fe,X[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ge,_e,fe,X[Z]);for(let se=0;se<G.length;se++){const he=G[se];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,_e,fe,he.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,ge,_e,fe,he.image[Z])}}}b(P,de)&&w(i.TEXTURE_CUBE_MAP),ce.__version=ae.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function oe(I,P,Y,re,ae){const ce=s.convert(Y.format,Y.colorSpace),B=s.convert(Y.type),te=L(Y.internalFormat,ce,B,Y.colorSpace);n.get(P).__hasExternalTextures||(ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,te,P.width,P.height,P.depth,0,ce,B,null):t.texImage2D(ae,0,te,P.width,P.height,0,ce,B,null)),t.bindFramebuffer(i.FRAMEBUFFER,I),Ge(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ae,n.get(Y).__webglTexture,0,et(P)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ae,n.get(Y).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(I,P,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer&&!P.stencilBuffer){let re=i.DEPTH_COMPONENT16;if(Y||Ge(P)){const ae=P.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Gn?re=i.DEPTH_COMPONENT32F:ae.type===zn&&(re=i.DEPTH_COMPONENT24));const ce=et(P);Ge(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,re,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,re,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(P.depthBuffer&&P.stencilBuffer){const re=et(P);Y&&Ge(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,P.width,P.height):Ge(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const re=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ae=0;ae<re.length;ae++){const ce=re[ae],B=s.convert(ce.format,ce.colorSpace),te=s.convert(ce.type),X=L(ce.internalFormat,B,te,ce.colorSpace),ue=et(P);Y&&Ge(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,X,P.width,P.height):Ge(P)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,X,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,X,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),H(P.depthTexture,0);const re=n.get(P.depthTexture).__webglTexture,ae=et(P);if(P.depthTexture.format===$n)Ge(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(P.depthTexture.format===Ni)Ge(P)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function me(I){const P=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Oe(P.__webglFramebuffer,I)}else if(Y){P.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[re]),P.__webglDepthbuffer[re]=i.createRenderbuffer(),pe(P.__webglDepthbuffer[re],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),pe(P.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(I,P,Y){const re=n.get(I);P!==void 0&&oe(re.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),Y!==void 0&&me(I)}function Qe(I){const P=I.texture,Y=n.get(I),re=n.get(P);I.addEventListener("dispose",T),I.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=P.version,o.memory.textures++);const ae=I.isWebGLCubeRenderTarget===!0,ce=I.isWebGLMultipleRenderTargets===!0,B=M(I)||a;if(ae){Y.__webglFramebuffer=[];for(let te=0;te<6;te++)Y.__webglFramebuffer[te]=i.createFramebuffer()}else{if(Y.__webglFramebuffer=i.createFramebuffer(),ce)if(r.drawBuffers){const te=I.texture;for(let X=0,ue=te.length;X<ue;X++){const de=n.get(te[X]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Ge(I)===!1){const te=ce?P:[P];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let X=0;X<te.length;X++){const ue=te[X];Y.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[X]);const de=s.convert(ue.format,ue.colorSpace),_e=s.convert(ue.type),fe=L(ue.internalFormat,de,_e,ue.colorSpace,I.isXRRenderTarget===!0),ge=et(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,fe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,Y.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),J(i.TEXTURE_CUBE_MAP,P,B);for(let te=0;te<6;te++)oe(Y.__webglFramebuffer[te],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te);b(P,B)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const te=I.texture;for(let X=0,ue=te.length;X<ue;X++){const de=te[X],_e=n.get(de);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),J(i.TEXTURE_2D,de,B),oe(Y.__webglFramebuffer,I,de,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D),b(de,B)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,re.__webglTexture),J(te,P,B),oe(Y.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,te),b(P,B)&&w(te),t.unbindTexture()}I.depthBuffer&&me(I)}function Ze(I){const P=M(I)||a,Y=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let re=0,ae=Y.length;re<ae;re++){const ce=Y[re];if(b(ce,P)){const B=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=n.get(ce).__webglTexture;t.bindTexture(B,te),w(B),t.unbindTexture()}}}function rt(I){if(a&&I.samples>0&&Ge(I)===!1){const P=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Y=I.width,re=I.height;let ae=i.COLOR_BUFFER_BIT;const ce=[],B=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(I),X=I.isWebGLMultipleRenderTargets===!0;if(X)for(let ue=0;ue<P.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ue=0;ue<P.length;ue++){ce.push(i.COLOR_ATTACHMENT0+ue),I.depthBuffer&&ce.push(B);const de=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(de===!1&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),X&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]),de===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[B]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[B])),X){const _e=n.get(P[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,Y,re,0,0,Y,re,ae,i.NEAREST),v&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ue=0;ue<P.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);const de=n.get(P[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function et(I){return Math.min(f,I.samples)}function Ge(I){const P=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Xe(I){const P=o.render.frame;p.get(I)!==P&&(p.set(I,P),I.update())}function pt(I,P){const Y=I.colorSpace,re=I.format,ae=I.type;return I.isCompressedTexture===!0||I.format===so||Y!==nn&&Y!==Xn&&(Y===Ae?a===!1?e.has("EXT_sRGB")===!0&&re===Xt?(I.format=so,I.minFilter=Bt,I.generateMipmaps=!1):P=Du.sRGBToLinear(P):(re!==Xt||ae!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),P}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ge}function My(i,e,t){const n=t.isWebGL2;function r(s,o=Xn){let a;if(s===qn)return i.UNSIGNED_BYTE;if(s===lg)return i.UNSIGNED_SHORT_4_4_4_4;if(s===cg)return i.UNSIGNED_SHORT_5_5_5_1;if(s===sg)return i.BYTE;if(s===ag)return i.SHORT;if(s===wu)return i.UNSIGNED_SHORT;if(s===og)return i.INT;if(s===zn)return i.UNSIGNED_INT;if(s===Gn)return i.FLOAT;if(s===sr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ug)return i.ALPHA;if(s===Xt)return i.RGBA;if(s===fg)return i.LUMINANCE;if(s===hg)return i.LUMINANCE_ALPHA;if(s===$n)return i.DEPTH_COMPONENT;if(s===Ni)return i.DEPTH_STENCIL;if(s===so)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dg)return i.RED;if(s===pg)return i.RED_INTEGER;if(s===mg)return i.RG;if(s===gg)return i.RG_INTEGER;if(s===_g)return i.RGBA_INTEGER;if(s===la||s===ca||s===ua||s===fa)if(o===Ae)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vl||s===xl||s===yl||s===Ml)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ml)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sl||s===El)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sl)return o===Ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===El)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bl||s===wl||s===Tl||s===Al||s===Rl||s===Cl||s===Pl||s===Ll||s===Dl||s===Ul||s===Il||s===Nl||s===Ol||s===Fl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Al)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ll)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ul)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Il)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ol)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fl)return o===Ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ha)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ha)return o===Ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===xg||s===Bl||s===kl||s===zl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ha)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Sy extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kr extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),d=this._getHandJoint(c,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const l=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=l.position.distanceTo(f.position),v=.02,p=.005;c.inputState.pinching&&h>v+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class by extends _n{constructor(e,t,n,r,s,o,a,u,c,l){if(l=l!==void 0?l:$n,l!==$n&&l!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===$n&&(n=zn),n===void 0&&l===Ni&&(n=Pi),super(null,r,s,o,a,u,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=u!==void 0?u:Et,this.flipY=!1,this.generateMipmaps=!1}}class wy extends ri{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",u=1,c=null,l=null,f=null,h=null,v=null,p=null;const _=t.getContextAttributes();let g=null,d=null;const x=[],m=[],M=new Set,y=new Map,b=new Ut;b.layers.enable(1),b.viewport=new Ke;const w=new Ut;w.layers.enable(2),w.viewport=new Ke;const L=[b,w],E=new Sy;E.layers.enable(1),E.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=x[W];return q===void 0&&(q=new Oa,x[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=x[W];return q===void 0&&(q=new Oa,x[W]=q),q.getGripSpace()},this.getHand=function(W){let q=x[W];return q===void 0&&(q=new Oa,x[W]=q),q.getHandSpace()};function T(W){const q=m.indexOf(W.inputSource);if(q===-1)return;const ie=x[q];ie!==void 0&&(ie.update(W.inputSource,W.frame,c||o),ie.dispatchEvent({type:W.type,data:W.inputSource}))}function S(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",S),r.removeEventListener("inputsourceschange",R);for(let W=0;W<x.length;W++){const q=m[W];q!==null&&(m[W]=null,x[W].disconnect(q))}A=null,N=null,e.setRenderTarget(g),v=null,h=null,f=null,r=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",S),r.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:v}),d=new Yn(v.framebufferWidth,v.framebufferHeight,{format:Xt,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,ie=null,J=null;_.depth&&(J=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?Ni:$n,ie=_.stencil?Pi:zn);const O={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(O),r.updateRenderState({layers:[h]}),d=new Yn(h.textureWidth,h.textureHeight,{format:Xt,type:qn,depthTexture:new by(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const xe=e.properties.get(d);xe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(W){for(let q=0;q<W.removed.length;q++){const ie=W.removed[q],J=m.indexOf(ie);J>=0&&(m[J]=null,x[J].disconnect(ie))}for(let q=0;q<W.added.length;q++){const ie=W.added[q];let J=m.indexOf(ie);if(J===-1){for(let xe=0;xe<x.length;xe++)if(xe>=m.length){m.push(ie),J=xe;break}else if(m[xe]===null){m[xe]=ie,J=xe;break}if(J===-1)break}const O=x[J];O&&O.connect(ie)}}const C=new V,k=new V;function F(W,q,ie){C.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(ie.matrixWorld);const J=C.distanceTo(k),O=q.projectionMatrix.elements,xe=ie.projectionMatrix.elements,ye=O[14]/(O[10]-1),oe=O[14]/(O[10]+1),pe=(O[9]+1)/O[5],Oe=(O[9]-1)/O[5],me=(O[8]-1)/O[0],Re=(xe[8]+1)/xe[0],Qe=ye*me,Ze=ye*Re,rt=J/(-me+Re),et=rt*-me;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(et),W.translateZ(rt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ge=ye+rt,Xe=oe+rt,pt=Qe-et,I=Ze+(J-et),P=pe*oe/Xe*Ge,Y=Oe*oe/Xe*Ge;W.projectionMatrix.makePerspective(pt,I,P,Y,Ge,Xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function U(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;E.near=w.near=b.near=W.near,E.far=w.far=b.far=W.far,(A!==E.near||N!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,N=E.far);const q=W.parent,ie=E.cameras;U(E,q);for(let J=0;J<ie.length;J++)U(ie[J],q);ie.length===2?F(E,b,w):E.projectionMatrix.copy(b.projectionMatrix),z(W,E,q)};function z(W,q,ie){ie===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const J=W.children;for(let O=0,xe=J.length;O<xe;O++)J[O].updateMatrixWorld(!0);W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ao*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&v===null))return u},this.setFoveation=function(W){u=W,h!==null&&(h.fixedFoveation=W),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=W)},this.getPlanes=function(){return M};let H=null;function ne(W,q){if(l=q.getViewerPose(c||o),p=q,l!==null){const ie=l.views;v!==null&&(e.setRenderTargetFramebuffer(d,v.framebuffer),e.setRenderTarget(d));let J=!1;ie.length!==E.cameras.length&&(E.cameras.length=0,J=!0);for(let O=0;O<ie.length;O++){const xe=ie[O];let ye=null;if(v!==null)ye=v.getViewport(xe);else{const pe=f.getViewSubImage(h,xe);ye=pe.viewport,O===0&&(e.setRenderTargetTextures(d,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(d))}let oe=L[O];oe===void 0&&(oe=new Ut,oe.layers.enable(O),oe.viewport=new Ke,L[O]=oe),oe.matrix.fromArray(xe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(xe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ye.x,ye.y,ye.width,ye.height),O===0&&(E.matrix.copy(oe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),J===!0&&E.cameras.push(oe)}}for(let ie=0;ie<x.length;ie++){const J=m[ie],O=x[ie];J!==null&&O!==void 0&&O.update(J,q,c||o)}if(H&&H(W,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ie=null;for(const J of M)q.detectedPlanes.has(J)||(ie===null&&(ie=[]),ie.push(J));if(ie!==null)for(const J of ie)M.delete(J),y.delete(J),n.dispatchEvent({type:"planeremoved",data:J});for(const J of q.detectedPlanes)if(!M.has(J))M.add(J),y.set(J,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:J});else{const O=y.get(J);J.lastChangedTime>O&&(y.set(J,J.lastChangedTime),n.dispatchEvent({type:"planechanged",data:J}))}}p=null}const K=new Hu;K.setAnimationLoop(ne),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}}function Ty(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ku(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,m,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),l(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&v(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),p(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),_(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?u(g,d,x,m):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===wt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===wt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const m=i.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*m,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function u(g,d,x,m){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=m*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function v(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wt&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ay(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(x,m){const M=m.program;n.uniformBlockBinding(x,M)}function c(x,m){let M=r[x.id];M===void 0&&(p(x),M=l(x),r[x.id]=M,x.addEventListener("dispose",g));const y=m.program;n.updateUBOMapping(x,y);const b=e.render.frame;s[x.id]!==b&&(h(x),s[x.id]=b)}function l(x){const m=f();x.__bindingPointIndex=m;const M=i.createBuffer(),y=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const m=r[x.id],M=x.uniforms,y=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let b=0,w=M.length;b<w;b++){const L=M[b];if(v(L,b,y)===!0){const E=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let T=0;T<A.length;T++){const S=A[T],R=_(S);typeof S=="number"?(L.__data[0]=S,i.bufferSubData(i.UNIFORM_BUFFER,E+N,L.__data)):S.isMatrix3?(L.__data[0]=S.elements[0],L.__data[1]=S.elements[1],L.__data[2]=S.elements[2],L.__data[3]=S.elements[0],L.__data[4]=S.elements[3],L.__data[5]=S.elements[4],L.__data[6]=S.elements[5],L.__data[7]=S.elements[0],L.__data[8]=S.elements[6],L.__data[9]=S.elements[7],L.__data[10]=S.elements[8],L.__data[11]=S.elements[0]):(S.toArray(L.__data,N),N+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,L.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(x,m,M){const y=x.value;if(M[m]===void 0){if(typeof y=="number")M[m]=y;else{const b=Array.isArray(y)?y:[y],w=[];for(let L=0;L<b.length;L++)w.push(b[L].clone());M[m]=w}return!0}else if(typeof y=="number"){if(M[m]!==y)return M[m]=y,!0}else{const b=Array.isArray(M[m])?M[m]:[M[m]],w=Array.isArray(y)?y:[y];for(let L=0;L<b.length;L++){const E=b[L];if(E.equals(w[L])===!1)return E.copy(w[L]),!0}}return!1}function p(x){const m=x.uniforms;let M=0;const y=16;let b=0;for(let w=0,L=m.length;w<L;w++){const E=m[w],A={boundary:0,storage:0},N=Array.isArray(E.value)?E.value:[E.value];for(let T=0,S=N.length;T<S;T++){const R=N[T],C=_(R);A.boundary+=C.boundary,A.storage+=C.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,w>0){b=M%y;const T=y-b;b!==0&&T-A.boundary<0&&(M+=y-b,E.__offset=M)}M+=A.storage}return b=M%y,b>0&&(M+=y-b),x.__size=M,x.__cache={},this}function _(x){const m={boundary:0,storage:0};return typeof x=="number"?(m.boundary=4,m.storage=4):x.isVector2?(m.boundary=8,m.storage=8):x.isVector3||x.isColor?(m.boundary=16,m.storage=12):x.isVector4?(m.boundary=16,m.storage=16):x.isMatrix3?(m.boundary=48,m.storage=48):x.isMatrix4?(m.boundary=64,m.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),m}function g(x){const m=x.target;m.removeEventListener("dispose",g);const M=o.indexOf(m.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:u,update:c,dispose:d}}function Ry(){const i=os("canvas");return i.style.display="block",i}class Xu{constructor(e={}){const{canvas:t=Ry(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let v=null,p=null;const _=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ae,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const d=this;let x=!1,m=0,M=0,y=null,b=-1,w=null;const L=new Ke,E=new Ke;let A=null,N=t.width,T=t.height,S=1,R=null,C=null;const k=new Ke(0,0,N,T),F=new Ke(0,0,N,T);let U=!1;const z=new bo;let H=!1,ne=!1,K=null;const W=new ot,q=new V,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return y===null?S:1}let O=n;function xe(D,j){for(let Q=0;Q<D.length;Q++){const $=D[Q],ee=t.getContext($,j);if(ee!==null)return ee}return null}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${So}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",De,!1),O===null){const j=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&j.shift(),O=xe(j,D),O===null)throw xe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ye,oe,pe,Oe,me,Re,Qe,Ze,rt,et,Ge,Xe,pt,I,P,Y,re,ae,ce,B,te,X,ue,de;function _e(){ye=new k0(O),oe=new D0(O,ye,e),ye.init(oe),X=new My(O,ye,oe),pe=new xy(O,ye,oe),Oe=new H0(O),me=new sy,Re=new yy(O,ye,pe,me,oe,X,Oe),Qe=new I0(d),Ze=new B0(d),rt=new Qg(O,oe),ue=new P0(O,ye,rt,oe),et=new z0(O,rt,Oe,ue),Ge=new j0(O,et,rt,Oe),ce=new $0(O,oe,Re),Y=new U0(me),Xe=new ry(d,Qe,Ze,ye,oe,ue,Y),pt=new Ty(d,me),I=new oy,P=new dy(ye,oe),ae=new C0(d,Qe,Ze,pe,Ge,h,u),re=new vy(d,Ge,oe),de=new Ay(O,Oe,oe,pe),B=new L0(O,ye,Oe,oe),te=new G0(O,ye,Oe,oe),Oe.programs=Xe.programs,d.capabilities=oe,d.extensions=ye,d.properties=me,d.renderLists=I,d.shadowMap=re,d.state=pe,d.info=Oe}_e();const fe=new wy(d,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(D){D!==void 0&&(S=D,this.setSize(N,T,!1))},this.getSize=function(D){return D.set(N,T)},this.setSize=function(D,j,Q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=D,T=j,t.width=Math.floor(D*S),t.height=Math.floor(j*S),Q===!0&&(t.style.width=D+"px",t.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(N*S,T*S).floor()},this.setDrawingBufferSize=function(D,j,Q){N=D,T=j,S=Q,t.width=Math.floor(D*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(L)},this.getViewport=function(D){return D.copy(k)},this.setViewport=function(D,j,Q,$){D.isVector4?k.set(D.x,D.y,D.z,D.w):k.set(D,j,Q,$),pe.viewport(L.copy(k).multiplyScalar(S).floor())},this.getScissor=function(D){return D.copy(F)},this.setScissor=function(D,j,Q,$){D.isVector4?F.set(D.x,D.y,D.z,D.w):F.set(D,j,Q,$),pe.scissor(E.copy(F).multiplyScalar(S).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(D){pe.setScissorTest(U=D)},this.setOpaqueSort=function(D){R=D},this.setTransparentSort=function(D){C=D},this.getClearColor=function(D){return D.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(D=!0,j=!0,Q=!0){let $=0;D&&($|=O.COLOR_BUFFER_BIT),j&&($|=O.DEPTH_BUFFER_BIT),Q&&($|=O.STENCIL_BUFFER_BIT),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",De,!1),I.dispose(),P.dispose(),me.dispose(),Qe.dispose(),Ze.dispose(),Ge.dispose(),ue.dispose(),de.dispose(),Xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ve),fe.removeEventListener("sessionend",We),K&&(K.dispose(),K=null),$e.stop()};function ge(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const D=Oe.autoReset,j=re.enabled,Q=re.autoUpdate,$=re.needsUpdate,ee=re.type;_e(),Oe.autoReset=D,re.enabled=j,re.autoUpdate=Q,re.needsUpdate=$,re.type=ee}function De(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function tt(D){const j=D.target;j.removeEventListener("dispose",tt),G(j)}function G(D){Z(D),me.remove(D)}function Z(D){const j=me.get(D).programs;j!==void 0&&(j.forEach(function(Q){Xe.releaseProgram(Q)}),D.isShaderMaterial&&Xe.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,Q,$,ee,Me){j===null&&(j=ie);const Se=ee.isMesh&&ee.matrixWorld.determinant()<0,be=Zu(D,j,Q,$,ee);pe.setMaterial($,Se);let Ce=Q.index,Ue=1;$.wireframe===!0&&(Ce=et.getWireframeAttribute(Q),Ue=2);const Ie=Q.drawRange,Fe=Q.attributes.position;let Ve=Ie.start*Ue,yt=(Ie.start+Ie.count)*Ue;Me!==null&&(Ve=Math.max(Ve,Me.start*Ue),yt=Math.min(yt,(Me.start+Me.count)*Ue)),Ce!==null?(Ve=Math.max(Ve,0),yt=Math.min(yt,Ce.count)):Fe!=null&&(Ve=Math.max(Ve,0),yt=Math.min(yt,Fe.count));const zt=yt-Ve;if(zt<0||zt===1/0)return;ue.setup(ee,$,be,Q,Ce);let Ln,st=B;if(Ce!==null&&(Ln=rt.get(Ce),st=te,st.setIndex(Ln)),ee.isMesh)$.wireframe===!0?(pe.setLineWidth($.wireframeLinewidth*J()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(ee.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),pe.setLineWidth(ke*J()),ee.isLineSegments?st.setMode(O.LINES):ee.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else ee.isPoints?st.setMode(O.POINTS):ee.isSprite&&st.setMode(O.TRIANGLES);if(ee.isInstancedMesh)st.renderInstances(Ve,zt,ee.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ws=Math.min(Q.instanceCount,ke);st.renderInstances(Ve,zt,Ws)}else st.render(Ve,zt)},this.compile=function(D,j){function Q($,ee,Me){$.transparent===!0&&$.side===dn&&$.forceSinglePass===!1?($.side=wt,$.needsUpdate=!0,Mr($,ee,Me),$.side=Tn,$.needsUpdate=!0,Mr($,ee,Me),$.side=dn):Mr($,ee,Me)}p=P.get(D),p.init(),g.push(p),D.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(d.useLegacyLights),D.traverse(function($){const ee=$.material;if(ee)if(Array.isArray(ee))for(let Me=0;Me<ee.length;Me++){const Se=ee[Me];Q(Se,D,$)}else Q(ee,D,$)}),g.pop(),p=null};let se=null;function he(D){se&&se(D)}function ve(){$e.stop()}function We(){$e.start()}const $e=new Hu;$e.setAnimationLoop(he),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(D){se=D,fe.setAnimationLoop(D),D===null?$e.stop():$e.start()},fe.addEventListener("sessionstart",ve),fe.addEventListener("sessionend",We),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),D.isScene===!0&&D.onBeforeRender(d,D,j,y),p=P.get(D,g.length),p.init(),g.push(p),W.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z.setFromProjectionMatrix(W),ne=this.localClippingEnabled,H=Y.init(this.clippingPlanes,ne),v=I.get(D,_.length),v.init(),_.push(v),mt(D,j,0,d.sortObjects),v.finish(),d.sortObjects===!0&&v.sort(R,C),H===!0&&Y.beginShadows();const Q=p.state.shadowsArray;if(re.render(Q,D,j),H===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(v,D),p.setupLights(d.useLegacyLights),j.isArrayCamera){const $=j.cameras;for(let ee=0,Me=$.length;ee<Me;ee++){const Se=$[ee];vn(v,D,Se,Se.viewport)}}else vn(v,D,j);y!==null&&(Re.updateMultisampleRenderTarget(y),Re.updateRenderTargetMipmap(y)),D.isScene===!0&&D.onAfterRender(d,D,j),ue.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function mt(D,j,Q,$){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||z.intersectsSprite(D)){$&&q.setFromMatrixPosition(D.matrixWorld).applyMatrix4(W);const Se=Ge.update(D),be=D.material;be.visible&&v.push(D,Se,be,Q,q.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||z.intersectsObject(D))){D.isSkinnedMesh&&D.skeleton.frame!==Oe.render.frame&&(D.skeleton.update(),D.skeleton.frame=Oe.render.frame);const Se=Ge.update(D),be=D.material;if($&&(Se.boundingSphere===null&&Se.computeBoundingSphere(),q.copy(Se.boundingSphere.center).applyMatrix4(D.matrixWorld).applyMatrix4(W)),Array.isArray(be)){const Ce=Se.groups;for(let Ue=0,Ie=Ce.length;Ue<Ie;Ue++){const Fe=Ce[Ue],Ve=be[Fe.materialIndex];Ve&&Ve.visible&&v.push(D,Se,Ve,Q,q.z,Fe)}}else be.visible&&v.push(D,Se,be,Q,q.z,null)}}const Me=D.children;for(let Se=0,be=Me.length;Se<be;Se++)mt(Me[Se],j,Q,$)}function vn(D,j,Q,$){const ee=D.opaque,Me=D.transmissive,Se=D.transparent;p.setupLightsView(Q),H===!0&&Y.setGlobalState(d.clippingPlanes,Q),Me.length>0&&nt(ee,Me,j,Q),$&&pe.viewport(L.copy($)),ee.length>0&&Nt(ee,j,Q),Me.length>0&&Nt(Me,j,Q),Se.length>0&&Nt(Se,j,Q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function nt(D,j,Q,$){if(K===null){const be=oe.isWebGL2;K=new Yn(1024,1024,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?sr:qn,minFilter:rr,samples:be&&a===!0?4:0})}const ee=d.getRenderTarget();d.setRenderTarget(K),d.clear();const Me=d.toneMapping;d.toneMapping=mn,Nt(D,Q,$),Re.updateMultisampleRenderTarget(K),Re.updateRenderTargetMipmap(K);let Se=!1;for(let be=0,Ce=j.length;be<Ce;be++){const Ue=j[be],Ie=Ue.object,Fe=Ue.geometry,Ve=Ue.material,yt=Ue.group;if(Ve.side===dn&&Ie.layers.test($.layers)){const zt=Ve.side;Ve.side=wt,Ve.needsUpdate=!0,Yt(Ie,Q,$,Fe,Ve,yt),Ve.side=zt,Ve.needsUpdate=!0,Se=!0}}Se===!0&&(Re.updateMultisampleRenderTarget(K),Re.updateRenderTargetMipmap(K)),d.setRenderTarget(ee),d.toneMapping=Me}function Nt(D,j,Q){const $=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Me=D.length;ee<Me;ee++){const Se=D[ee],be=Se.object,Ce=Se.geometry,Ue=$===null?Se.material:$,Ie=Se.group;be.layers.test(Q.layers)&&Yt(be,j,Q,Ce,Ue,Ie)}}function Yt(D,j,Q,$,ee,Me){D.onBeforeRender(d,j,Q,$,ee,Me),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ee.onBeforeRender(d,j,Q,$,D,Me),ee.transparent===!0&&ee.side===dn&&ee.forceSinglePass===!1?(ee.side=wt,ee.needsUpdate=!0,d.renderBufferDirect(Q,j,$,ee,D,Me),ee.side=Tn,ee.needsUpdate=!0,d.renderBufferDirect(Q,j,$,ee,D,Me),ee.side=dn):d.renderBufferDirect(Q,j,$,ee,D,Me),D.onAfterRender(d,j,Q,$,ee,Me)}function Mr(D,j,Q){j.isScene!==!0&&(j=ie);const $=me.get(D),ee=p.state.lights,Me=p.state.shadowsArray,Se=ee.state.version,be=Xe.getParameters(D,ee.state,Me,j,Q),Ce=Xe.getProgramCacheKey(be);let Ue=$.programs;$.environment=D.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(D.isMeshStandardMaterial?Ze:Qe).get(D.envMap||$.environment),Ue===void 0&&(D.addEventListener("dispose",tt),Ue=new Map,$.programs=Ue);let Ie=Ue.get(Ce);if(Ie!==void 0){if($.currentProgram===Ie&&$.lightsStateVersion===Se)return Ao(D,be),Ie}else be.uniforms=Xe.getUniforms(D),D.onBuild(Q,be,d),D.onBeforeCompile(be,d),Ie=Xe.acquireProgram(be,Ce),Ue.set(Ce,Ie),$.uniforms=be.uniforms;const Fe=$.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Fe.clippingPlanes=Y.uniform),Ao(D,be),$.needsLights=ef(D),$.lightsStateVersion=Se,$.needsLights&&(Fe.ambientLightColor.value=ee.state.ambient,Fe.lightProbe.value=ee.state.probe,Fe.directionalLights.value=ee.state.directional,Fe.directionalLightShadows.value=ee.state.directionalShadow,Fe.spotLights.value=ee.state.spot,Fe.spotLightShadows.value=ee.state.spotShadow,Fe.rectAreaLights.value=ee.state.rectArea,Fe.ltc_1.value=ee.state.rectAreaLTC1,Fe.ltc_2.value=ee.state.rectAreaLTC2,Fe.pointLights.value=ee.state.point,Fe.pointLightShadows.value=ee.state.pointShadow,Fe.hemisphereLights.value=ee.state.hemi,Fe.directionalShadowMap.value=ee.state.directionalShadowMap,Fe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Fe.spotShadowMap.value=ee.state.spotShadowMap,Fe.spotLightMatrix.value=ee.state.spotLightMatrix,Fe.spotLightMap.value=ee.state.spotLightMap,Fe.pointShadowMap.value=ee.state.pointShadowMap,Fe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Ve=Ie.getUniforms(),yt=ns.seqWithValue(Ve.seq,Fe);return $.currentProgram=Ie,$.uniformsList=yt,Ie}function Ao(D,j){const Q=me.get(D);Q.outputColorSpace=j.outputColorSpace,Q.instancing=j.instancing,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function Zu(D,j,Q,$,ee){j.isScene!==!0&&(j=ie),Re.resetTextureUnits();const Me=j.fog,Se=$.isMeshStandardMaterial?j.environment:null,be=y===null?d.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:nn,Ce=($.isMeshStandardMaterial?Ze:Qe).get($.envMap||Se),Ue=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ie=!!$.normalMap&&!!Q.attributes.tangent,Fe=!!Q.morphAttributes.position,Ve=!!Q.morphAttributes.normal,yt=!!Q.morphAttributes.color,zt=$.toneMapped?d.toneMapping:mn,Ln=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,st=Ln!==void 0?Ln.length:0,ke=me.get($),Ws=p.state.lights;if(H===!0&&(ne===!0||D!==w)){const Ct=D===w&&$.id===b;Y.setState($,D,Ct)}let ut=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ws.state.version||ke.outputColorSpace!==be||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ce||$.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Y.numPlanes||ke.numIntersection!==Y.numIntersection)||ke.vertexAlphas!==Ue||ke.vertexTangents!==Ie||ke.morphTargets!==Fe||ke.morphNormals!==Ve||ke.morphColors!==yt||ke.toneMapping!==zt||oe.isWebGL2===!0&&ke.morphTargetsCount!==st)&&(ut=!0):(ut=!0,ke.__version=$.version);let Dn=ke.currentProgram;ut===!0&&(Dn=Mr($,j,ee));let Ro=!1,zi=!1,$s=!1;const Mt=Dn.getUniforms(),Un=ke.uniforms;if(pe.useProgram(Dn.program)&&(Ro=!0,zi=!0,$s=!0),$.id!==b&&(b=$.id,zi=!0),Ro||w!==D){if(Mt.setValue(O,"projectionMatrix",D.projectionMatrix),oe.logarithmicDepthBuffer&&Mt.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),w!==D&&(w=D,zi=!0,$s=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Ct=Mt.map.cameraPosition;Ct!==void 0&&Ct.setValue(O,q.setFromMatrixPosition(D.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ee.isSkinnedMesh)&&Mt.setValue(O,"viewMatrix",D.matrixWorldInverse)}if(ee.isSkinnedMesh){Mt.setOptional(O,ee,"bindMatrix"),Mt.setOptional(O,ee,"bindMatrixInverse");const Ct=ee.skeleton;Ct&&(oe.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),Mt.setValue(O,"boneTexture",Ct.boneTexture,Re),Mt.setValue(O,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const js=Q.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0&&oe.isWebGL2===!0)&&ce.update(ee,Q,Dn),(zi||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,Mt.setValue(O,"receiveShadow",ee.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Un.envMap.value=Ce,Un.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),zi&&(Mt.setValue(O,"toneMappingExposure",d.toneMappingExposure),ke.needsLights&&Qu(Un,$s),Me&&$.fog===!0&&pt.refreshFogUniforms(Un,Me),pt.refreshMaterialUniforms(Un,$,S,T,K),ns.upload(O,ke.uniformsList,Un,Re)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ns.upload(O,ke.uniformsList,Un,Re),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(O,"center",ee.center),Mt.setValue(O,"modelViewMatrix",ee.modelViewMatrix),Mt.setValue(O,"normalMatrix",ee.normalMatrix),Mt.setValue(O,"modelMatrix",ee.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ct=$.uniformsGroups;for(let Xs=0,tf=Ct.length;Xs<tf;Xs++)if(oe.isWebGL2){const Co=Ct[Xs];de.update(Co,Dn),de.bind(Co,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function Qu(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function ef(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(D,j,Q){me.get(D.texture).__webglTexture=j,me.get(D.depthTexture).__webglTexture=Q;const $=me.get(D);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,j){const Q=me.get(D);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,Q=0){y=D,m=j,M=Q;let $=!0,ee=null,Me=!1,Se=!1;if(D){const Ce=me.get(D);Ce.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(O.FRAMEBUFFER,null),$=!1):Ce.__webglFramebuffer===void 0?Re.setupRenderTarget(D):Ce.__hasExternalTextures&&Re.rebindTextures(D,me.get(D.texture).__webglTexture,me.get(D.depthTexture).__webglTexture);const Ue=D.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Se=!0);const Ie=me.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ee=Ie[j],Me=!0):oe.isWebGL2&&D.samples>0&&Re.useMultisampledRTT(D)===!1?ee=me.get(D).__webglMultisampledFramebuffer:ee=Ie,L.copy(D.viewport),E.copy(D.scissor),A=D.scissorTest}else L.copy(k).multiplyScalar(S).floor(),E.copy(F).multiplyScalar(S).floor(),A=U;if(pe.bindFramebuffer(O.FRAMEBUFFER,ee)&&oe.drawBuffers&&$&&pe.drawBuffers(D,ee),pe.viewport(L),pe.scissor(E),pe.setScissorTest(A),Me){const Ce=me.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce.__webglTexture,Q)}else if(Se){const Ce=me.get(D.texture),Ue=j||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,Q||0,Ue)}b=-1},this.readRenderTargetPixels=function(D,j,Q,$,ee,Me,Se){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=me.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){pe.bindFramebuffer(O.FRAMEBUFFER,be);try{const Ce=D.texture,Ue=Ce.format,Ie=Ce.type;if(Ue!==Xt&&X.convert(Ue)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===sr&&(ye.has("EXT_color_buffer_half_float")||oe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ie!==qn&&X.convert(Ie)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Gn&&(oe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-$&&Q>=0&&Q<=D.height-ee&&O.readPixels(j,Q,$,ee,X.convert(Ue),X.convert(Ie),Me)}finally{const Ce=y!==null?me.get(y).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(D,j,Q=0){const $=Math.pow(2,-Q),ee=Math.floor(j.image.width*$),Me=Math.floor(j.image.height*$);Re.setTexture2D(j,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,D.x,D.y,ee,Me),pe.unbindTexture()},this.copyTextureToTexture=function(D,j,Q,$=0){const ee=j.image.width,Me=j.image.height,Se=X.convert(Q.format),be=X.convert(Q.type);Re.setTexture2D(Q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,D.x,D.y,ee,Me,Se,be,j.image.data):j.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,D.x,D.y,j.mipmaps[0].width,j.mipmaps[0].height,Se,j.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,$,D.x,D.y,Se,be,j.image),$===0&&Q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(D,j,Q,$,ee=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=D.max.x-D.min.x+1,Se=D.max.y-D.min.y+1,be=D.max.z-D.min.z+1,Ce=X.convert($.format),Ue=X.convert($.type);let Ie;if($.isData3DTexture)Re.setTexture3D($,0),Ie=O.TEXTURE_3D;else if($.isDataArrayTexture)Re.setTexture2DArray($,0),Ie=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const Fe=O.getParameter(O.UNPACK_ROW_LENGTH),Ve=O.getParameter(O.UNPACK_IMAGE_HEIGHT),yt=O.getParameter(O.UNPACK_SKIP_PIXELS),zt=O.getParameter(O.UNPACK_SKIP_ROWS),Ln=O.getParameter(O.UNPACK_SKIP_IMAGES),st=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,st.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,D.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,D.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,D.min.z),Q.isDataTexture||Q.isData3DTexture?O.texSubImage3D(Ie,ee,j.x,j.y,j.z,Me,Se,be,Ce,Ue,st.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ie,ee,j.x,j.y,j.z,Me,Se,be,Ce,st.data)):O.texSubImage3D(Ie,ee,j.x,j.y,j.z,Me,Se,be,Ce,Ue,st),O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ve),O.pixelStorei(O.UNPACK_SKIP_PIXELS,yt),O.pixelStorei(O.UNPACK_SKIP_ROWS,zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ln),ee===0&&$.generateMipmaps&&O.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Re.setTextureCube(D,0):D.isData3DTexture?Re.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Re.setTexture2DArray(D,0):Re.setTexture2D(D,0),pe.unbindTexture()},this.resetState=function(){m=0,M=0,y=null,pe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?jn:Tu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===jn?Ae:nn}}class Cy extends Xu{}Cy.prototype.isWebGL1Renderer=!0;class Py extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Qi extends Pn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+a,Math.PI);let c=0;const l=[],f=new V,h=new V,v=[],p=[],_=[],g=[];for(let d=0;d<=n;d++){const x=[],m=d/n;let M=0;d===0&&o===0?M=.5/t:d===n&&u===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const b=y/t;f.x=-e*Math.cos(r+b*s)*Math.sin(o+m*a),f.y=e*Math.cos(o+m*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+m*a),p.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),g.push(b+M,1-m),x.push(c++)}l.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const m=l[d][x+1],M=l[d][x],y=l[d+1][x],b=l[d+1][x+1];(d!==0||o>0)&&v.push(m,M,b),(d!==n-1||u<Math.PI)&&v.push(M,y,b)}this.setIndex(v),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ly extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qu extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fa=new ot,Ac=new V,Rc=new V;class Dy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ac),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cc=new ot,ji=new V,Ba=new V;class Uy extends Dy{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(ji),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),r.makeTranslation(-ji.x,-ji.y,-ji.z),Cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc)}}class Iy extends qu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Uy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ny extends qu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);const Lc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Oy{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,s===!1&&r.onStart!==void 0&&r.onStart(l,o,a),s=!0},this.itemEnd=function(l){o++,r.onProgress!==void 0&&r.onProgress(l,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return u?u(l):l},this.setURLModifier=function(l){return u=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){const f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,h=c.length;f<h;f+=2){const v=c[f],p=c[f+1];if(v.global&&(v.lastIndex=0),v.test(l))return p}return null}}}const Fy=new Oy;class Yu{constructor(e){this.manager=e!==void 0?e:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Dc={};function ka(i){i in Dc||(Dc[i]=!0,console.warn(i))}class By extends Yu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Lc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=lo("img");function u(){l(),Lc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){l(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){a.removeEventListener("load",u,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ky{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ku=300,Uc=1e3,Jr=1001,Ic=1002,zy=1006,Gy=1008,Hy=1009,Vy=1023,Wy=3e3,za=3001,Ga="",Ha="srgb",vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function Ju(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function $y(i,e,t){return Math.max(e,Math.min(t,i))}class er{constructor(e=0,t=0){er.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($y(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(){Vs.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=u,l[6]=n,l[7]=o,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],c=n[1],l=n[4],f=n[7],h=n[2],v=n[5],p=n[8],_=r[0],g=r[3],d=r[6],x=r[1],m=r[4],M=r[7],y=r[2],b=r[5],w=r[8];return s[0]=o*_+a*x+u*y,s[3]=o*g+a*m+u*b,s[6]=o*d+a*M+u*w,s[1]=c*_+l*x+f*y,s[4]=c*g+l*m+f*b,s[7]=c*d+l*M+f*w,s[2]=h*_+v*x+p*y,s[5]=h*g+v*m+p*b,s[8]=h*d+v*M+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8];return t*o*l-t*a*c-n*s*l+n*a*u+r*s*c-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],l=e[8],f=l*o-a*c,h=a*u-l*s,v=c*s-o*u,p=t*f+n*h+r*v;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(r*c-l*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(l*t-r*u)*_,e[5]=(r*s-a*t)*_,e[6]=v*_,e[7]=(n*u-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*o+c*a)+o+e,-r*c,r*u,-r*(-c*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Vs;function Wa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}let Ti;class jy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=lo("canvas")),Ti.width=e.width,Ti.height=e.height;const n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wa(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wa(t[n]/255)*255):t[n]=Wa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Xy{constructor(e=null){this.isSource=!0,this.uuid=Ju(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($a(r[o].image)):s.push($a(r[o]))}else s=$a(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;class wn extends ky{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,n=Jr,r=Jr,s=zy,o=Gy,a=Vy,u=Hy,c=wn.DEFAULT_ANISOTROPY,l=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ju(),this.name="",this.source=new Xy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new er(0,0),this.repeat=new er(1,1),this.center=new er(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vs,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(ka("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===za?Ha:Ga),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ka("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ha?za:Wy}set encoding(e){ka("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===za?Ha:Ga}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Ku;wn.DEFAULT_ANISOTROPY=1;class Yy extends Yu{constructor(e){super(e)}load(e,t,n,r){const s=new wn,o=new By(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}const Nc={type:"change"},ja={type:"start"},Oc={type:"end"};class Ky extends ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Xe),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Nc),n.update(),s=r.NONE},this.update=function(){const B=new V,te=new Kn().setFromUnitVectors(e.up,new V(0,1,0)),X=te.clone().invert(),ue=new V,de=new Kn,_e=2*Math.PI;return function(){const ge=n.object.position;B.copy(ge).sub(n.target),B.applyQuaternion(te),a.setFromVector3(B),n.autoRotate&&s===r.NONE&&E(w()),n.enableDamping?(a.theta+=u.theta*n.dampingFactor,a.phi+=u.phi*n.dampingFactor):(a.theta+=u.theta,a.phi+=u.phi);let Ee=n.minAzimuthAngle,De=n.maxAzimuthAngle;return isFinite(Ee)&&isFinite(De)&&(Ee<-Math.PI?Ee+=_e:Ee>Math.PI&&(Ee-=_e),De<-Math.PI?De+=_e:De>Math.PI&&(De-=_e),Ee<=De?a.theta=Math.max(Ee,Math.min(De,a.theta)):a.theta=a.theta>(Ee+De)/2?Math.max(Ee,a.theta):Math.min(De,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),B.setFromSpherical(a),B.applyQuaternion(X),ge.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),l.set(0,0,0)),c=1,f||ue.distanceToSquared(n.object.position)>o||8*(1-de.dot(n.object.quaternion))>o?(n.dispatchEvent(Nc),ue.copy(n.object.position),de.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",Ze),n.domElement.removeEventListener("wheel",Ge),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Xe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Pc,u=new Pc;let c=1;const l=new V;let f=!1;const h=new Ne,v=new Ne,p=new Ne,_=new Ne,g=new Ne,d=new Ne,x=new Ne,m=new Ne,M=new Ne,y=[],b={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function E(B){u.theta-=B}function A(B){u.phi-=B}const N=function(){const B=new V;return function(X,ue){B.setFromMatrixColumn(ue,0),B.multiplyScalar(-X),l.add(B)}}(),T=function(){const B=new V;return function(X,ue){n.screenSpacePanning===!0?B.setFromMatrixColumn(ue,1):(B.setFromMatrixColumn(ue,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(X),l.add(B)}}(),S=function(){const B=new V;return function(X,ue){const de=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;B.copy(_e).sub(n.target);let fe=B.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),N(2*X*fe/de.clientHeight,n.object.matrix),T(2*ue*fe/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(X*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),T(ue*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(B){n.object.isPerspectiveCamera?c/=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*B)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(B){n.object.isPerspectiveCamera?c*=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/B)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(B){h.set(B.clientX,B.clientY)}function F(B){x.set(B.clientX,B.clientY)}function U(B){_.set(B.clientX,B.clientY)}function z(B){v.set(B.clientX,B.clientY),p.subVectors(v,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;E(2*Math.PI*p.x/te.clientHeight),A(2*Math.PI*p.y/te.clientHeight),h.copy(v),n.update()}function H(B){m.set(B.clientX,B.clientY),M.subVectors(m,x),M.y>0?R(L()):M.y<0&&C(L()),x.copy(m),n.update()}function ne(B){g.set(B.clientX,B.clientY),d.subVectors(g,_).multiplyScalar(n.panSpeed),S(d.x,d.y),_.copy(g),n.update()}function K(B){B.deltaY<0?C(L()):B.deltaY>0&&R(L()),n.update()}function W(B){let te=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):S(-n.keyPanSpeed,0),te=!0;break}te&&(B.preventDefault(),n.update())}function q(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const B=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);h.set(B,te)}}function ie(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const B=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);_.set(B,te)}}function J(){const B=y[0].pageX-y[1].pageX,te=y[0].pageY-y[1].pageY,X=Math.sqrt(B*B+te*te);x.set(0,X)}function O(){n.enableZoom&&J(),n.enablePan&&ie()}function xe(){n.enableZoom&&J(),n.enableRotate&&q()}function ye(B){if(y.length==1)v.set(B.pageX,B.pageY);else{const X=ce(B),ue=.5*(B.pageX+X.x),de=.5*(B.pageY+X.y);v.set(ue,de)}p.subVectors(v,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;E(2*Math.PI*p.x/te.clientHeight),A(2*Math.PI*p.y/te.clientHeight),h.copy(v)}function oe(B){if(y.length===1)g.set(B.pageX,B.pageY);else{const te=ce(B),X=.5*(B.pageX+te.x),ue=.5*(B.pageY+te.y);g.set(X,ue)}d.subVectors(g,_).multiplyScalar(n.panSpeed),S(d.x,d.y),_.copy(g)}function pe(B){const te=ce(B),X=B.pageX-te.x,ue=B.pageY-te.y,de=Math.sqrt(X*X+ue*ue);m.set(0,de),M.set(0,Math.pow(m.y/x.y,n.zoomSpeed)),R(M.y),x.copy(m)}function Oe(B){n.enableZoom&&pe(B),n.enablePan&&oe(B)}function me(B){n.enableZoom&&pe(B),n.enableRotate&&ye(B)}function Re(B){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",Qe),n.domElement.addEventListener("pointerup",Ze)),Y(B),B.pointerType==="touch"?pt(B):rt(B))}function Qe(B){n.enabled!==!1&&(B.pointerType==="touch"?I(B):et(B))}function Ze(B){re(B),y.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(Oc),s=r.NONE}function rt(B){let te;switch(B.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case li.DOLLY:if(n.enableZoom===!1)return;F(B),s=r.DOLLY;break;case li.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;U(B),s=r.PAN}else{if(n.enableRotate===!1)return;k(B),s=r.ROTATE}break;case li.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;k(B),s=r.ROTATE}else{if(n.enablePan===!1)return;U(B),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ja)}function et(B){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;z(B);break;case r.DOLLY:if(n.enableZoom===!1)return;H(B);break;case r.PAN:if(n.enablePan===!1)return;ne(B);break}}function Ge(B){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(B.preventDefault(),n.dispatchEvent(ja),K(B),n.dispatchEvent(Oc))}function Xe(B){n.enabled===!1||n.enablePan===!1||W(B)}function pt(B){switch(ae(B),y.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;q(),s=r.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;ie(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(),s=r.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ja)}function I(B){switch(ae(B),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(B),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;oe(B),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(B),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(B),n.update();break;default:s=r.NONE}}function P(B){n.enabled!==!1&&B.preventDefault()}function Y(B){y.push(B)}function re(B){delete b[B.pointerId];for(let te=0;te<y.length;te++)if(y[te].pointerId==B.pointerId){y.splice(te,1);return}}function ae(B){let te=b[B.pointerId];te===void 0&&(te=new Ne,b[B.pointerId]=te),te.set(B.pageX,B.pageY)}function ce(B){const te=B.pointerId===y[0].pointerId?y[1]:y[0];return b[te.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",Ze),n.domElement.addEventListener("wheel",Ge,{passive:!1}),this.update()}}const Jy=Je('<div class="map-container w-full h-full absolute z-0"><div class="map absolute">'),Zy=()=>{let i,e;const[t,n]=Le(!1),[r,s]=Le(null),[o,a]=Le(null),[u,c]=Le(null),[l,f]=Le(null),h=8437738,v=1579305;dt(()=>{fh()&&(d(),fu(!1))}),dt(()=>{let x=r();x&&(x.background=new He(Qt()?v:h))});const p=()=>{let x=r(),m=o(),M=u(),y=l();if(!x||!m||!M||!y)return;requestAnimationFrame(p);const w=(m.position.distanceTo(y.target)-y.minDistance)/(2-y.minDistance);y.zoomSpeed=Math.min(Math.max(.001,w),5),y.rotateSpeed=.27,y.update(),M.render(x,m)},_=()=>{if(t())return;n(!0),console.log("initializing three js");const x=e.clientWidth,m=e.clientHeight,M=new Py;M.background=new He(Qt()?v:h);const y=new Ut(75,x/m,.001,1e3),b=new Xu;b.setSize(x,m),i.appendChild(b.domElement),new Qi(1,32,32),new ls({color:5994437,wireframe:!0}),y.position.z=2;const w=new Yy().load("./images/1_earth_sm.jpg"),L=new Ky(y,b.domElement);L.enablePan=!1,L.minDistance=1.002,L.maxDistance=20,L.screenSpacePanning=!1,L.target=new V(0,0,0);const E=new Iy(14737632,1);E.position.set(10,10,10),M.add(E);const A=new Ny(Qt()?2105376:6316128);M.add(A);const N=new Zt(new Qi(1,32,32),new Ly({map:w}));M.add(N),s(M),a(y),c(b),f(L),p()},g=(x,m)=>{const M=new ls({color:63487}),y=new Qi(.01,5,5),b=new Zt(y,M),w=(90-x)*(Math.PI/180),L=(m+180)*(Math.PI/180);return b.position.x=-Math.sin(w)*Math.cos(L),b.position.y=Math.cos(w),b.position.z=Math.sin(w)*Math.sin(L),b.rotation.set(0,0,Math.PI/2),b},d=()=>{const x=e.clientWidth,m=e.clientHeight;let M=o(),y=u();!M||!y||(M.aspect=x/m,M.updateProjectionMatrix(),y.setSize(x,m))};return dt(()=>(_(),window.addEventListener("resize",d),()=>{i.firstChild&&i.removeChild(i.firstChild),window.removeEventListener("resize",d)})),dt(()=>{let x=r(),m=o(),M=u(),y=ir()?Object.values(ir()):[];!x||!m||!M||!y||(x.children.filter(b=>b.userData.pin).forEach(b=>x?.remove(b)),y.forEach(b=>{if(b.latitude&&b.longitude){const w=g(b.latitude,b.longitude);w.userData.pin=!0,x?.add(w)}}),M.render(x,m))}),(()=>{const x=Jy(),m=x.firstChild,M=e;typeof M=="function"?tr(M,x):e=x;const y=i;return typeof y=="function"?tr(y,m):i=m,x})()},Xa="0123456789bcdefghjkmnpqrstuvwxyz";class ht{static encode(e,t,n){if(typeof n>"u"){for(let h=1;h<=12;h++){const v=ht.encode(e,t,h),p=ht.decode(v);if(p.lat==e&&p.lon==t)return v}n=12}if(e=Number(e),t=Number(t),n=Number(n),isNaN(e)||isNaN(t)||isNaN(n))throw new Error("Invalid geohash");let r=0,s=0,o=!0,a="",u=-90,c=90,l=-180,f=180;for(;a.length<n;){if(o){const h=(l+f)/2;t>=h?(r=r*2+1,l=h):(r=r*2,f=h)}else{const h=(u+c)/2;e>=h?(r=r*2+1,u=h):(r=r*2,c=h)}o=!o,++s==5&&(a+=Xa.charAt(r),s=0,r=0)}return a}static decode(e){const t=ht.bounds(e),n=t.sw.lat,r=t.sw.lon,s=t.ne.lat,o=t.ne.lon;let a=(n+s)/2,u=(r+o)/2;return a=a.toFixed(Math.floor(2-Math.log(s-n)/Math.LN10)),u=u.toFixed(Math.floor(2-Math.log(o-r)/Math.LN10)),{lat:Number(a),lon:Number(u)}}static bounds(e){if(e.length==0)throw new Error("Invalid geohash");e=e.toLowerCase();let t=!0,n=-90,r=90,s=-180,o=180;for(let u=0;u<e.length;u++){const c=e.charAt(u),l=Xa.indexOf(c);if(l==-1)throw new Error("Invalid geohash");for(let f=4;f>=0;f--){const h=l>>f&1;if(t){const v=(s+o)/2;h==1?s=v:o=v}else{const v=(n+r)/2;h==1?n=v:r=v}t=!t}}return{sw:{lat:n,lon:s},ne:{lat:r,lon:o}}}static adjacent(e,t){if(e=e.toLowerCase(),t=t.toLowerCase(),e.length==0)throw new Error("Invalid geohash");if("nsew".indexOf(t)==-1)throw new Error("Invalid direction");const n={n:["p0r21436x8zb9dcf5h7kjnmqesgutwvy","bc01fg45238967deuvhjyznpkmstqrwx"],s:["14365h7k9dcfesgujnmqp0r2twvyx8zb","238967debc01fg45kmstqrwxuvhjyznp"],e:["bc01fg45238967deuvhjyznpkmstqrwx","p0r21436x8zb9dcf5h7kjnmqesgutwvy"],w:["238967debc01fg45kmstqrwxuvhjyznp","14365h7k9dcfesgujnmqp0r2twvyx8zb"]},r={n:["prxz","bcfguvyz"],s:["028b","0145hjnp"],e:["bcfguvyz","prxz"],w:["0145hjnp","028b"]},s=e.slice(-1);let o=e.slice(0,-1);const a=e.length%2;return r[t][a].indexOf(s)!=-1&&o!=""&&(o=ht.adjacent(o,t)),o+Xa.charAt(n[t][a].indexOf(s))}static neighbours(e){return{n:ht.adjacent(e,"n"),ne:ht.adjacent(ht.adjacent(e,"n"),"e"),e:ht.adjacent(e,"e"),se:ht.adjacent(ht.adjacent(e,"s"),"e"),s:ht.adjacent(e,"s"),sw:ht.adjacent(ht.adjacent(e,"s"),"w"),w:ht.adjacent(e,"w"),nw:ht.adjacent(ht.adjacent(e,"n"),"w")}}}function Qy(i){return Qn({a:{viewBox:"0 0 512 512"},c:'<path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"/>'},i)}const eM=Je('<div class="flex h-full pointer-events-none"><div class="p-3 w-full mt-24"><ul>'),tM=Je('<div class="p-3 mt-auto w-full relative pointer-events-auto"><div class="bg-inputBox dark:bg-inputBoxDark shadow-lg rounded-3xl overflow-hidden"><textarea class="w-full resize-none bg-inputBox dark:bg-inputBoxDark text-black dark:text-white" style="height:35px;padding-left:15px;padding-top:7px;"></textarea><button class="absolute top-5 right-8">'),nM=Je("<li> (<!>)"),iM=()=>{const[i,e]=Le(""),t=()=>{if(i().trim()===""||!Wn.user().is)return;const s=new Date,o=[s.getUTCFullYear(),s.getUTCFullYear()+"-"+(s.getUTCMonth()+1).toString().padStart(2,"0"),s.getUTCFullYear()+"-"+(s.getUTCMonth()+1).toString().padStart(2,"0")+"-"+s.getUTCDate().toString().padStart(2,"0")];let a={message:i(),createdAt:s.toISOString(),type:"message"},u=[],c=uu();if(c){const l=c.latitude,f=c.longitude,h=ht.encode(l,f),v=h.substring(0,4);u=[v.substring(0,2),v.substring(0,3),v],a.latitude=l,a.longitude=f,a.geohash=h}o.forEach(l=>{Qr.get("dates").get(l).set(messageRef)}),a.location&&(u.forEach(l=>{Qr.get("locations").get(l).set(messageRef)}),u.forEach(l=>{o.forEach(f=>{Qr.get("locations_and_dates").get(l).get(f).set(messageRef)})})),e("")},n=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),t())};return[(()=>{const r=eM(),s=r.firstChild,o=s.firstChild;return Be(o,(()=>{const a=je(()=>!!ir());return()=>a()&&Te(Ka,{get each(){return Object.values(ir())?.filter(u=>u.type==="message")},children:u=>(()=>{const c=nM(),l=c.firstChild,f=l.nextSibling;return f.nextSibling,Be(c,()=>u.message,l),Be(c,()=>new Date(u.createdAt).toLocaleTimeString(),f),it(h=>{const v=`${Qt()?"chatmessage-dark":"chatmessage"} rounded-3xl shadow-lg p-2 pl-3 pr-3 min-w-3 mb-2 pointer-events-auto text-sm`,p=Ki()?"max-width: 700px;":"";return v!==h._v$&&En(c,h._v$=v),h._v$2=or(c,p,h._v$2),h},{_v$:void 0,_v$2:void 0}),c})()})})()),r})(),(()=>{const r=tM(),s=r.firstChild,o=s.firstChild,a=o.nextSibling;return o.$$keydown=n,o.$$input=u=>e(u.target.value),a.$$click=t,Be(a,Te(Qy,{get color(){return Qt()?"#cccccc":"#8d8c80"},size:"22px"})),it(()=>o.value=i()),r})()]};Cn(["input","keydown","click"]);function rM(i){return Qn({a:{viewBox:"0 0 512 512"},c:'<path d="M32 256C32 132.2 132.3 32 255.8 32c11.36 0 29.7 1.668 40.9 3.746 9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3 9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480 132.1 480 32 379.6 32 256z"/>'},i)}function sM(i){return Qn({a:{viewBox:"0 0 512 512"},c:'<path d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1s41.2 96.9 95.1 96.9 95.1-42.98 95.1-95.1-42.1-96.9-95.1-96.9zM509.3 347l-63.2-91.9 63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89 164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6 12.56 141.3c-10.927 1.9-16.156 14.6-9.824 22.8L65.89 256 2.74 347.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7 19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109 109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1 0-70.69 57.31-127.1 127.1-127.1S383.1 186.2 383.1 256c0 70.7-56.4 127.1-127.1 127.1z"/>'},i)}const aM=Je('<video class="jitsi-track rounded-3xl" autoplay>'),oM=Je('<div class="w-full h-full"><div class="jitsi-container p-3 w-full mt-24 z-1"></div><div class="absolute bottom-0 right-0 text-white pointer-events-auto"><button>Toggle Audio</button><button>Toggle Video</button><button>Disconnect'),Fc=i=>{let e;if(i.track.getType()==="video")return sf(()=>{i.track.attach(e)}),Rn(()=>{i.track.detach(e)}),(()=>{const t=aM(),n=e;return typeof n=="function"?tr(n,t):e=t,t})()},lM=()=>{let[i,e]=Le([]),[t,n]=Le([]),r,[s,o]=Le(null);const a="testroom7e39a1bcf3e811eda05b0242ac120003",u=async()=>{const f={hosts:{domain:"meet.jit.si",muc:"conference.meet.jit.si"},bosh:`https://meet.jit.si/http-bind?room=${a}`,clientNode:"http://jitsi.org/jitsimeet"},h={openBridgeChannel:!0};JitsiMeetJS.init(),JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);const v=new JitsiMeetJS.JitsiConnection(null,null,f);v.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,()=>{console.log("Connection established");const p=v.initJitsiConference(a,h);p.on(JitsiMeetJS.events.conference.TRACK_ADDED,_=>{n([...t(),_]),console.log("Remote track added",_)}),p.on(JitsiMeetJS.events.conference.TRACK_REMOVED,_=>{console.log(),n([...t(),_])}),JitsiMeetJS.createLocalTracks({devices:["audio","video"]}).then(_=>{for(let g=0;g<_.length;g++)e([...i(),_[g]])}).catch(_=>{throw _}),p.join()}),v.connect(),o(v)};Rn(()=>{let f=s();f&&f.disconnect()}),dt(()=>{s()||u()});const c=()=>{s().isAudioMuted()?s().unmuteAudio():s().muteAudio()},l=()=>{s().isVideoMuted()?s().unmuteVideo():s().muteVideo()};return(()=>{const f=oM(),h=f.firstChild,v=h.nextSibling,p=v.firstChild,_=p.nextSibling,g=_.nextSibling,d=r;return typeof d=="function"?tr(d,h):r=h,Be(h,Te(Ka,{get each(){return i()},children:x=>Te(Fc,{track:x})}),null),Be(h,Te(Ka,{get each(){return t()},children:x=>Te(Fc,{track:x})}),null),p.$$click=c,_.$$click=l,g.$$click=()=>s().disconnect(),f})()};Cn(["click"]);const cM=Je('<div class="flex flex-col h-screen w-screen z-1 absolute pointer-events-none"><div class="p-5 absolute w-screen pointer-events-auto"><div class="flex justify-center"><button class="rounded-full pl-2 pr-2 bg-navbutton dark:bg-navbuttonDark hover:bg-navbuttonHover dark:hover:bg-navbuttonHover text-black dark:text-gray-200"></button></div></div><div class="flex flex-grow">'),uM=Je("<button>"),fM=Je("<div>About"),Bc=Je("<div>"),hM=Je("<div>Calendar"),dM=()=>{const[i,e]=Le(["chat"]),t=["about","chat","video","calendar"],n=o=>{Ki()?i().includes(o)?e([]):e([o]):(i().includes(o)?e(i().filter(a=>a!==o)):i().length<3&&e([...i(),o]),fu(!0))},r=o=>{let a=i().indexOf(o),u=!1;return Ki()||(u=(i()[0]===o||i()[2]===o)&&i().length!==1,o==="chat"&&(u=!0)),`flex flex-col ${u?"min-w-96 w-96 flex-shrink-0":"flex-grow"} order-${a+1}`},s=()=>{hh(!Qt())};return(()=>{const o=cM(),a=o.firstChild,u=a.firstChild,c=u.firstChild,l=a.nextSibling;return Be(u,()=>t.map(f=>(()=>{const h=uM();return h.$$click=()=>n(f),Be(h,()=>f.charAt(0).toUpperCase()+f.slice(1)),it(()=>En(h,`mr-2 px-6 py-1 text-black dark:text-gray-200 hover:bg-navbuttonHover dark:hover:bg-navbuttonHoverDark transition-colors duration-200 rounded focus:outline-none navbutton navbutton${i().includes(f)?"-toggled":""}${Qt()?"-dark":""} }
                            }`)),h})()),c),c.$$click=s,Be(c,(()=>{const f=je(()=>!!Qt());return()=>f()?Te(sM,{}):Te(rM,{})})()),Be(l,(()=>{const f=je(()=>!!i().includes("about"));return()=>f()&&(()=>{const h=fM();return it(()=>En(h,r("about"))),h})()})(),null),Be(l,(()=>{const f=je(()=>!!i().includes("chat"));return()=>f()&&(()=>{const h=Bc();return Be(h,Te(iM,{})),it(()=>En(h,r("chat"))),h})()})(),null),Be(l,(()=>{const f=je(()=>!!i().includes("video"));return()=>f()&&(()=>{const h=Bc();return Be(h,Te(lM,{})),it(()=>En(h,r("video"))),h})()})(),null),Be(l,(()=>{const f=je(()=>!!i().includes("calendar"));return()=>f()&&(()=>{const h=hM();return it(()=>En(h,r("calendar"))),h})()})(),null),it(f=>or(u,`margin-left: 5px; margin-top: ${Ki()?"50px":""}`,f)),o})()};Cn(["click"]);const pM=Je('<div class="mr-6 mt-3 flex items-center justify-start absolute top-0 right-0 cursor-pointer"><div class="relative">'),mM=()=>{const i=ru(),e=()=>{i("/~"+hu()+"/circles/home")};return Te(Hn,{get when(){return Za()},get children(){const t=pM(),n=t.firstChild;return t.$$click=e,Be(n,Te(xu,{get circle(){return mh()},size:"40px"})),t}})};Cn(["click"]);const gM=Je('<div class="w-full h-full">'),_M=()=>{const{windowWidth:i,windowHeight:e}=Rm();return dt(()=>{let t=i()<768;ch(t)}),dt(()=>{Qt()||Qt()===void 0&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),console.log("using dark theme")):(document.documentElement.classList.remove("dark"),console.log("using light theme"))}),console.log("APP_NAMESPACE","circles-c979fe7c-ebfd-11ed-a05b-0242ac120003"),[(()=>{const t=gM();return Be(t,Te(Zy,{}),null),Be(t,Te(dM,{}),null),Be(t,Te(Am,{}),null),Be(t,Te(mM,{}),null),Be(t,Te(eh,{get children(){return[Te(No,{path:"/",get element(){return Te(nh,{get href(){return"/~AJc7sdYoB8HxDlKWFah1oQBqf2H6dLm4FTQMP_ZC8n4.SJYIl-T94RsuquPQnlrxiopTEoTSxEa5EETATX8mK0c/circles/home"}})}}),Te(No,{path:"/*",get element(){return Te(_h,{})}})]}}),null),t})(),Te(wh,{}),Te(_m,{})]},vM=document.getElementById("root");Tf(()=>Te(Qf,{get source(){return Bf()},get children(){return Te(_M,{})}}),vM);
