import{c as e,d as t,f as n,i as r,n as i,p as a,r as o,t as s,u as c}from"./policy-content-CJ1EFPf4.js";function l(e){e.statusCode=e.statusCode||e.code||307;let t=new Headers(e.headers);e.href&&t.get(`Location`)===null&&t.set(`Location`,e.href);let n=new Response(null,{status:e.statusCode,headers:t});if(n.options=e,e.throw)throw n;return n}function u(e){return e instanceof Response&&!!e.options}function d(e){if(typeof e==`object`&&e&&e.isSerializedRedirect)return l(e)}function f(e){return e[e.length-1]}function p(e,t){return typeof e==`function`?e(t):e}var m=Object.prototype.hasOwnProperty;function h(e){for(let t in e)if(m.call(e,t))return!0;return!1}var g=()=>Object.create(null),_=(e,t)=>v(e,t,!0);function v(e,t,n,r=0){if(e===t)return e;if(r++>500)return t;let i=Array.isArray(e)&&Array.isArray(t);if(!i&&!(y(e)&&y(t)))return t;let a=Object.keys(e),o=a.length,s=Object.keys(t),c=s.length;if(i?o!==e.length||c!==t.length||o&&f(a)!==`${o-1}`||c&&f(s)!==`${c-1}`:o!==Object.getOwnPropertyNames(e).length||c!==Object.getOwnPropertyNames(t).length||Object.getOwnPropertySymbols(t).length)return t;let l=0,u,d,p;if(i){for(;l<c&&(p=l,d=e[p],u=t[p],u=d===u?d:typeof d==`object`?v(d,u,n,r):u,u===d);l++);if(l===c&&o===c)return e}else{let i=o===c,f=!0;for(;l<c;l++){p=s[l],d=e[p];let o=t[p];u=d===o?d:typeof d==`object`?v(d,o,n,r):o,i&&=u===d&&(a[l]===p||m.call(e,p)),f&&=Object.is(u,o),a[l]=u}if(i)return Object.getOwnPropertySymbols(e).length?t:e;if(f)return t}let h=i?s.fill(0):n?g():{};for(let o=0;o<c;o++)p=i?o:s[o],i?(d=e[p],o>l&&(u=t[p],u=d===u?d:typeof d==`object`?v(d,u,n,r):u),h[p]=o<l?d:u):h[p]=a[o];return h}function y(e){return!e||typeof e!=`object`?!1:(Object.getPrototypeOf(e)?.constructor??Object)===Object}function b(e,t,n,r){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=t[i];if(a!==o&&!b(a,o,n,r))return!1}return!0}if(y(e)&&y(t)){if(n){for(let i in t)if((r||t[i]!==void 0)&&!b(e[i],t[i],n,r))return!1;return!0}let i=0;if(r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;for(let a in t)if((r||t[a]!==void 0)&&(i--===0||!b(e[a],t[a],n,r)))return!1;return i===0}return!1}function ee(e){return typeof e?.message==`string`?e.message.startsWith(`Failed to fetch dynamically imported module`)||e.message.startsWith(`error loading dynamically imported module`)||e.message.startsWith(`Importing a module script failed`):!1}var te=/[\x00-\x1f\x7f"<>`{}]/g;function ne(e){return e.replace(te,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function x(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return ne(t)}var S=[`http:`,`https:`,`mailto:`,`tel:`];function re(e){if(e[0]!==`/`&&e.includes(`:`))return/^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i.exec(e)?.[1]?.replace(/[\t\n\r]/g,``).toLowerCase()}var ie=/^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;function ae(e,t){if(!e)return!1;if(ie.test(e))return!0;let n=re(e);return n?!t.has(n):!1}var C={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},oe=/[&><\u2028\u2029]/g;function w(e){return e.replace(oe,e=>C[e])}function T(e){if(!e)return e;let t=e;if(/[%\\\x00-\x1f\x7f]/.test(e)){let n=/%25|%5C/gi,r=0,i;for(t=``;(i=n.exec(e))!==null;)t+=x(e.slice(r,i.index))+i[0],r=n.lastIndex;t+=x(r?e.slice(r):e)}return t}function E(e){return/[\s\u0080-\uFFFF]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function se(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function D(e){return e.replace(/\/{2,}/g,`/`)}function O(e){return e===`/`?e:e.replace(/^\/+/,``)}function k(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/+$/,``):e}function ce(e){return k(O(e))}function A(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function j(e,t,n=`never`,r){if(t.includes(`//`)&&(t=D(t)),t.startsWith(`/`))return t.length===1||n===`preserve`?t:n===`always`?t.endsWith(`/`)?t:`${t}/`:t.endsWith(`/`)?t.slice(0,-1):t;let i=t===`.`,a;if(r){a=i?e:e+`\0`+t;let n=r.get(a);if(n)return n}let o;if(i)o=e.split(`/`);else{for(e.includes(`//`)&&(e=D(e)),o=e.split(`/`);o.length>1&&f(o)===``;)o.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&o.push(r):o=[r]:r===`..`?o.length>1?o.pop():o=[``]:r===`.`||o.push(r)}}o.length>1&&(f(o)===``?n===`never`&&o.pop():n===`always`&&o.push(``));let s=o.join(`/`),c=(i?D(s):s)||`/`;return a&&r&&r.set(a,c),c}function M(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g,`\\$&`),`g`);return e=>e.replace(n,e=>t.get(e)??e)}function N(e){return e==null||e===``}function le(e,t,n){if(typeof t!=`string`)return``+(t??void 0);let r=e===`_splat`;if(r&&(!t||/^[a-zA-Z0-9\-._~!/]*$/.test(t)))return t;let i=encodeURIComponent(t);return r&&(i=i.replaceAll(`%2F`,`/`)),n?n(i):i}function ue(e,t,n,r,i){let a=e.endsWith(`/`)?`/`:``,o=``;for(let e of t){if(typeof e==`string`){o+=e;continue}let[t,s,c,l]=e,u=t===2,d=u&&l!==void 0?l+a:l,f=n[s];if(t!==3||f!=null){if(i&&(i[s]=f,u&&(i[`*`]=f)),u&&N(f)){if(c===`/`&&!d)continue;f=``}o+=c+le(s,f,r)+(d||``)}}return o+a||`/`}function P(){throw Error(`Invariant failed`)}var de=`__root__`,fe=`Error preloading route! ☝️`,pe=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(e){if(this.init=e=>{this.originalIndex=e,this._branch=void 0;let t=this.options,n=!t?.path&&!t?.id;this.parentRoute=this.options.getParentRoute?.(),n?this._path=de:this.parentRoute||P();let r=n?de:t?.path;r&&r!==`/`&&(r=O(r));let i=t?.id||r,a=n?de:D((this.parentRoute.id===`__root__`?``:this.parentRoute.id)+`/`+(i??``));r===`__root__`&&(r=`/`);let o=a===`__root__`?`/`:r===void 0?this.parentRoute.fullPath:D(this.parentRoute.fullPath+`/`+r);this._path=r,this._id=a,this._fullPath=o,this._to=k(o)},this.addChildren=e=>this._addFileChildren(e),this._addFileChildren=e=>(Array.isArray(e)&&(this.children=e),typeof e==`object`&&e&&(this.children=Object.values(e)),this),this._addFileTypes=()=>this,this.updateLoader=e=>(Object.assign(this.options,e),this),this.update=e=>(Object.assign(this.options,e),this),this.lazy=e=>(this.lazyFn=e,this),this.redirect=e=>l({from:this.fullPath,...e}),this.options=e||{},this.isRoot=!e?.getParentRoute,e?.id&&e?.path)throw Error(`Route cannot have both an 'id' and a 'path' option.`)}},me=class extends pe{constructor(e){super(e)}},F=a(t(),1),he=F.use,ge=F.useLayoutEffect,I=c(),_e=()=>!0,ve=()=>!1;function ye({children:e,fallback:t=null}){return(0,I.jsx)(F.Fragment,{children:be()?e:t})}function be(e=!0){return F.useSyncExternalStore(xe,_e,e?ve:_e)}function xe(){return()=>{}}var Se=F.createContext(null);function Ce(e){return F.useContext(Se)}var we=F.createContext(void 0),Te=F.createContext(void 0),Ee=n((e=>{var n=t();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useState,o=n.useEffect,s=n.useLayoutEffect,c=n.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=n.useSyncExternalStore===void 0?f:n.useSyncExternalStore})),De=n(((e,t)=>{t.exports=Ee()})),Oe=n((e=>{var n=t(),r=De();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=r.useSyncExternalStore,s=n.useRef,c=n.useEffect,l=n.useMemo,u=n.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),ke=n(((e,t)=>{t.exports=Oe()}))();function Ae(e,t){return e===t}function je(e,t=e=>e,n){let r=n?.compare??Ae,i=(0,F.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,F.useCallback)(()=>e.get(),[e]);return(0,ke.useSyncExternalStoreWithSelector)(i,a,a,t,r)}var Me={};function Ne(e,t){let n=F.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=v(n.current,i):i}}function Pe(e){let t=Ce(),n=F.useContext(e.from?Te:we),r=e.from??n,i=t.stores.getMatchStore(r),a=Ne(e,t),o=je(i,e=>e?a(e):Me);if(o!==Me)return o;(e.shouldThrow??!0)&&P()}function Fe(e){return Pe({from:e.from,strict:e.strict,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.loaderData):t.loaderData})}function Ie(e){let{select:t,...n}=e;return Pe({...n,select:e=>t?t(e.loaderDeps):e.loaderDeps})}function Le(e){return Pe({from:e.from,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,strict:e.strict,select:t=>{let n=e.strict===!1?t.params:t._strictParams;return e.select?e.select(n):n}})}function Re(e){return Pe({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.search):t.search})}function ze(e){let t=Ce();return F.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}function Be(e){return Pe({...e,select:t=>e.select?e.select(t.context):t.context})}function Ve(...e){let t=F.useRef(e),n=t.current;return e.forEach((e,t)=>{b(n[t],e,!1,!0)||(n[t]=e)}),t.current}function He(e,t){e.preloadRoute(t).catch(e=>{console.warn(e),console.warn(fe)})}var Ue={compare:(e,t)=>e[0]===t[0]&&e[1]===t[1]};function We(e,t){let n=typeof e==`string`&&re(e);if(n)return t.has(n)?e:null}function Ge(e,t,n,r,i){let a=A(e.pathname,r),o=A(t.pathname,r);return(n?.exact?a!==o:!(a.startsWith(o)&&(a.length===o.length||a[o.length]===`/`)))||(n?.includeSearch??!0)&&!b(e.search,t.search,!n?.exact,n?.explicitUndefined)?!1:!n?.includeHash||i&&e.hash===t.hash}function Ke(e,t,n){let r=Ce(),i=F.useRef(null),a=F.useCallback(e=>{if(i.current=e,typeof t==`function`)return t(e);t&&(t.current=e)},[t]),{activeOptions:o,to:s,preload:c,preloadDelay:l,hashScrollIntoView:u,replace:d,startTransition:f,resetScroll:p,viewTransition:m,ignoreBlocker:h,disabled:g,target:_,onClick:v,onBlur:y,onFocus:b,onMouseEnter:ee,onMouseLeave:te,onTouchStart:ne}=e,x=be(!!o?.includeHash),[S,ie,ae]=Ve(e.search,e.params,o),[C,oe]=F.useMemo(()=>[e,{...e}],[r,e.from,e._fromLocation,e.hash,e.to,S,ie,e.state,e.mask,e.unsafeRelative]),w=F.useMemo(()=>{let e=We(s,r.protocolAllowlist);if(e!==void 0){let t=[e??void 0];return()=>t}let t,n;return e=>{C._fromLocation||(oe._fromLocation=e);let i=r.buildLocation(oe),a=tt(i,r,g);return(!t||t[0]!==a)&&(t=[a,!(g||a&&!re(a))&&void 0],n=[a,!0]),t[1]!==void 0&&Ge(e,i,ae,r.basepath,x)?n:t}},[ae,g,x,C,oe,r,s]),[T,E]=je(r.stores.location,w,Ue),se=E===void 0&&T,D=g||T===void 0,O=F.useRef(!1),k=e.reloadDocument||se||D?!1:c??r.options.defaultPreload,ce=l??r.options.defaultPreloadDelay??0,A=F.useCallback(e=>{let t=e?.isIntersecting;if(!(t??k===`intent`)){t===!1&&$e(i);return}if(!ce){He(r,C);return}Qe.has(i)||Qe.set(i,setTimeout(()=>{Qe.delete(i),He(r,C)},ce))},[r,C,i,k,ce]);F.useEffect(()=>{if(!k)return;k===`render`&&!O.current&&(O.current=!0,He(r,C));let e=!0,t;return k===`viewport`&&i.current&&typeof IntersectionObserver==`function`&&(t=new IntersectionObserver(t=>{e&&A(t.pop())},{rootMargin:`100px`}),t.observe(i.current)),()=>{e=!1,t?.disconnect(),$e(i)}},[r,C,k,A,i]);let j=Xe(e,n);if(j.ref=t?a:i,se)return j.href=se,j;let M=e=>{let t=_??e.currentTarget.getAttribute(`target`);!D&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(!t||t===`_self`)&&e.button===0&&(e.preventDefault(),r.navigate({...C,replace:d,resetScroll:p,hashScrollIntoView:u,startTransition:f,viewTransition:m,ignoreBlocker:h}))},N=()=>{k===`intent`&&He(r,C)},le=()=>{k===`intent`&&$e(i)};return j.onClick=et(v,M),j.onBlur=et(y,le),j.onFocus=et(b,A),j.onMouseEnter=et(ee,A),j.onMouseLeave=et(te,le),j.onTouchStart=et(ne,N),Ze(j,e,E,T,D,n)}var qe={},Je={className:`active`},Ye=new Set([`to`,`params`,`search`,`hash`,`state`,`mask`,`from`,`unsafeRelative`,`_fromLocation`,`reloadDocument`,`preload`,`preloadDelay`,`preloadIntentProximity`,`hashScrollIntoView`,`replace`,`startTransition`,`resetScroll`,`viewTransition`,`ignoreBlocker`,`activeProps`,`inactiveProps`,`activeOptions`,`_asChild`]);function Xe(e,t){let n={};for(let r in e)Ye.has(r)||r===`type`&&t!==void 0||r===`disabled`&&t===`a`||(n[r]=e[r]);return n}function Ze(e,t,n,r,i,a){let{activeProps:o,inactiveProps:s,className:c,style:l,target:u}=t,d=p(n?o:s,{})??(n?Je:qe);Object.assign(e,d),e.href=r,a!==`a`&&(e.disabled=i),e.target=u;let f=d.style;(l||f)&&(e.style=l&&f?{...l,...f}:l||f);let m=d.className;return(c||m)&&(e.className=c?m?`${c} ${m}`:c:m),i&&(e.role=`link`,e[`aria-disabled`]=!0),n&&(e[`data-status`]=`active`,e[`aria-current`]=`page`),e}var Qe=new WeakMap,$e=e=>{clearTimeout(Qe.get(e)),Qe.delete(e)},et=(e,t)=>e?n=>n.defaultPrevented||(e(n),n.defaultPrevented||t(n)):t;function tt(e,t,n){if(n)return;let r=e.maskedLocation??e,i=r.external?r.publicHref:t.history.createHref(r.publicHref)||`/`;if(!((r.external||i!==r.publicHref)&&ae(i,t.protocolAllowlist)))return i}var L=F.memo(F.forwardRef((e,t)=>{let n=e._asChild||`a`,r=Ke(e,t,n),i=typeof e.children==`function`?e.children({isActive:r[`data-status`]===`active`}):e.children;return F.createElement(n,r,i)}),nt);function nt(e,t){let n=0;for(let r in t)if(n++,e[r]!==t[r]&&(!Ye.has(r)||!b(e[r],t[r],!1,!0)))return!1;for(let t in e)n--;return n===0}var rt=class extends pe{constructor(e){super(e),this.useMatch=e=>Pe({...e,from:this.id}),this.useRouteContext=e=>Be({...e,from:this.id}),this.useSearch=e=>Re({...e,from:this.id}),this.useParams=e=>Le({...e,from:this.id}),this.useLoaderDeps=e=>Ie({...e,from:this.id}),this.useLoaderData=e=>Fe({...e,from:this.id}),this.useNavigate=()=>ze({from:this.fullPath}),this.Link=F.forwardRef((e,t)=>(0,I.jsx)(L,{ref:t,from:this.fullPath,...e}))}};function it(e){return new rt(e)}var at=class extends me{constructor(e){super(e),this.useMatch=e=>Pe({...e,from:this.id}),this.useRouteContext=e=>Be({...e,from:this.id}),this.useSearch=e=>Re({...e,from:this.id}),this.useParams=e=>Le({...e,from:this.id}),this.useLoaderDeps=e=>Ie({...e,from:this.id}),this.useLoaderData=e=>Fe({...e,from:this.id}),this.useNavigate=()=>ze({from:this.fullPath}),this.Link=F.forwardRef((e,t)=>(0,I.jsx)(L,{ref:t,from:this.fullPath,...e}))}};function ot(e){return new at(e)}function st(e){return e=>{let t=it(e);return t.isRoot=!1,t}}function ct(e,t){let n,r,i,a=()=>(n||=(i=void 0,e().then(e=>{n=void 0,o.preload=void 0,r=e[t??`default`]}).catch(e=>{n=void 0,i=e})),n),o=function(e){if(i){if(ee(i)&&typeof sessionStorage<`u`){let e=`tanstack_router_reload:${i.message}`;if(!sessionStorage.getItem(e))throw sessionStorage.setItem(e,`1`),window.location.reload(),new Promise(()=>{})}throw i}if(!r)if(he)he(a());else throw a();return F.createElement(r,e)};return o.preload=a,o}function lt(e){let t=Ce({warn:e?.router===void 0}),n=e?.router||t;return je(n.stores.__store,Ne(e,n))}var ut=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),dt=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ft=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),pt=e=>{let t=ft(e);return t.charAt(0).toUpperCase()+t.slice(1)},mt={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ht=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},gt=(0,F.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,F.createElement)(`svg`,{ref:c,...mt,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ut(`lucide`,i),...!a&&!ht(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,F.createElement)(e,t)),...Array.isArray(a)?a:[a]])),R=(e,t)=>{let n=(0,F.forwardRef)(({className:n,...r},i)=>(0,F.createElement)(gt,{ref:i,iconNode:t,className:ut(`lucide-${dt(pt(e))}`,`lucide-${e}`,n),...r}));return n.displayName=pt(e),n},_t=R(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),vt=R(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),yt=R(`instagram`,[[`rect`,{width:`20`,height:`20`,x:`2`,y:`2`,rx:`5`,ry:`5`,key:`2e1cvw`}],[`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,key:`9exkf1`}],[`line`,{x1:`17.5`,x2:`17.51`,y1:`6.5`,y2:`6.5`,key:`r4j83e`}]]),bt=R(`linkedin`,[[`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,key:`c2jq9f`}],[`rect`,{width:`4`,height:`12`,x:`2`,y:`9`,key:`mk3on5`}],[`circle`,{cx:`4`,cy:`4`,r:`2`,key:`bt5ra8`}]]),xt=R(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),St=R(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Ct=R(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),wt=R(`youtube`,[[`path`,{d:`M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17`,key:`1q2vi4`}],[`path`,{d:`m10 15 5-3-5-3z`,key:`1jp15x`}]]),Tt=`---
title: "A promoção que se paga"
slug: a-promocao-que-se-paga
language: pt
type: i6 Blog
date: 2026-07-29
read_time: 6
theme: preco-elasticidade
theme_label: "Preço e elasticidade"
tags: [promoção, margem, simulação]
excerpt: "Simular incremental antes de aprovar a campanha separa desconto que constrói base de desconto que compra venda já garantida."
format: html
---

<h2>Incremental é o único número que importa</h2>
<p>Volume em campanha quase sempre sobe. A pergunta é quanto desse volume
aconteceria de qualquer forma — e quanto veio de antecipação de compra futura.</p>
<h2>Antes de aprovar</h2>
<ul>
<li>Separe base incremental de base canibalizada.</li>
<li>Compare com o mesmo item em lojas fora da campanha.</li>
<li>Projete o efeito nas quatro semanas seguintes, não só na semana promocional.</li>
</ul>
<h2>Depois de rodar</h2>
<p>Campanha sem leitura posterior vira folclore interno. Feche o ciclo com o
resultado medido, mesmo quando ele contraria a expectativa.</p>
`,Et=`---
title: "Precificação dinâmica: o que muda quando o preço aprende"
slug: cadencia-precificacao-dinamica
language: pt
type: i6 on Media
date: 2026-08-20
read_time: 4
theme: cobertura
theme_label: "Cobertura"
tags: [imprensa, preço]
excerpt: "Matéria de exemplo sobre elasticidade por cluster de loja e o limite ético do preço personalizado."
cover_image: media-logo-cadencia
external_url: https://exemplo.cadencia.test/precificacao-dinamica
featured: false
gated: false
format: html
---

<h2>Resumo da matéria</h2>
<p>Preço que aprende exige regra de contenção explícita: piso de margem, teto de
variação e revisão humana quando o modelo sai da faixa esperada.</p>
<p>Conteúdo fictício, criado apenas para demonstração do layout.</p>
`,Dt=`---
title: "O catálogo é o modelo"
slug: catalogo-que-alimenta-modelo
language: pt
type: i6 Article
date: 2026-07-15
read_time: 5
theme: dados-engenharia
theme_label: "Dados e engenharia"
tags: [catálogo, qualidade, ingestão]
excerpt: "Atributo faltando em catálogo não é detalhe de cadastro: é a fronteira do que qualquer modelo consegue enxergar."
format: html
---

<h2>Onde o erro nasce</h2>
<p>Antes de discutir arquitetura de modelo, vale medir quantos itens têm
categoria errada, descrição vazia ou preço desatualizado. Esse número explica
boa parte do resultado.</p>
<h2>Ingestão como produto</h2>
<p>Trate a entrada de dados como superfície de produto: validação na chegada,
erro legível, reprocesso simples. Corrigir na origem é mais barato do que
compensar depois.</p>
<h2>Sinal de maturidade</h2>
<p>Quando o time consegue responder "o que mudou no catálogo esta semana" sem
abrir um chamado, o modelo para de ser caixa-preta.</p>
`,Ot=`---
title: "Da métrica ao experimento"
slug: da-metrica-ao-experimento
language: pt
type: i6 Blog
date: 2026-07-08
read_time: 6
theme: dados-engenharia
theme_label: "Dados e engenharia"
tags: [experimentação, métricas, decisão]
excerpt: "Painel que só descreve o passado não muda decisão. Experimento pequeno e recorrente muda — desde que a métrica seja escolhida antes."
format: html
---

<h2>Escolher a métrica antes</h2>
<p>Definir o critério de sucesso depois do resultado é a forma mais elegante de
sempre ganhar. Escreva a métrica, a janela e o corte antes de ligar o teste.</p>
<h2>Pequeno e recorrente</h2>
<p>Um experimento por trimestre não cria repertório. Vários testes curtos, com
leitura padronizada, criam.</p>
<h2>Encerrar também é resultado</h2>
<p>Desligar o que não funcionou libera capacidade — e é o tipo de decisão que
mais rapidamente paga a estrutura de medição.</p>
`,kt=`---
title: "Demand forecasting a commercial team actually uses"
slug: previsao-demanda-time-comercial
language: en
type: i6 Article
date: 2026-08-27
read_time: 8
theme: previsao-demanda
theme_label: "Demand forecasting"
tags: [forecasting, replenishment, risk]
cover_image: blog-cover-forecast
is_default: true
excerpt: "Probabilistic forecasting per SKU-store-day turns \\"how much will we sell\\" into \\"how much risk do we accept\\" on every replenishment call."
format: html
---

<h2>The real problem</h2>
<p>Most forecasts arrive as a single monthly number per category, while the team
has to decide per SKU, per store, per day. Someone fills that gap by hand.</p>
<h2>From a number to a range</h2>
<p>A probabilistic forecast returns a distribution. Service level becomes an
explicit choice with visible cost on both sides.</p>
<h2>What changes day to day</h2>
<ul>
<li>Replenishment by percentile instead of average.</li>
<li>Long-tail items stop rounding down to zero.</li>
<li>Exceptions arrive ranked by impact.</li>
</ul>
<h2>Where it usually breaks</h2>
<p>A good model on a poor catalog is still a poor decision. Measure how much of
the error comes from stale product data before adding sophistication.</p>
`,At=`---
title: "Elasticidade de preço sem canibalizar margem"
slug: elasticidade-preco-sem-canibalizar-margem
language: pt
type: i6 Article
date: 2026-08-19
read_time: 6
theme: preco-elasticidade
theme_label: "Preço e elasticidade"
tags: [preço, margem, elasticidade]
cover_image: blog-cover-pricing
excerpt: "Curvas de elasticidade por cluster de loja permitem subir preço onde a demanda é rígida e proteger volume onde ela é sensível."
format: html
---

<h2>Preço médio esconde decisão</h2>
<p>Uma elasticidade única para a rede inteira é a média de comportamentos que se
cancelam. Ao separar por cluster de loja, aparecem bolsões em que o consumidor
não reage a variação pequena — e outros em que reage de imediato.</p>
<h2>Como estruturar o teste</h2>
<ol>
<li>Agrupe lojas por comportamento observado, não por região administrativa.</li>
<li>Estime a curva por cluster e por faixa de preço, não só no ponto atual.</li>
<li>Simule o resultado em margem antes de mexer na tabela.</li>
</ol>
<h2>O sinal de que deu certo</h2>
<p>Margem por categoria sobe sem queda relevante de volume nos clusters
sensíveis. Se o volume cai onde a curva dizia que não cairia, o problema
costuma estar no mix de concorrência local, não no modelo.</p>
`,jt=`---
title: "Predictive decisions in retail: an interview with the infinity6 team"
slug: i6-na-midia-decisao-preditiva
language: en
type: i6 on Media
date: 2026-08-21
read_time: 4
theme: cobertura
theme_label: "Coverage"
tags: [press, retail]
excerpt: "A conversation about assortment, pricing and replenishment moving from descriptive dashboards to continuous recommendation."
cover_image: media-logo-pauta-varejo
external_url: https://example.com/cobertura-i6
featured: false
gated: false
format: html
---

<h2>From the interview</h2>
<p>The bottleneck is no longer producing the number — it is getting the number
into the decision, within the window where the decision happens.</p>
<blockquote>
<p>"A model that answers after the meeting is not a model, it is a report."</p>
</blockquote>
`,Mt=`---
title: "Decisão preditiva no varejo brasileiro: entrevista com o time infinity6"
slug: i6-na-midia-decisao-preditiva
language: pt
type: i6 on Media
date: 2026-08-21
read_time: 4
theme: cobertura
theme_label: "Cobertura"
tags: [imprensa, varejo]
excerpt: "Conversa sobre como decisões de sortimento, preço e reposição estão migrando de painel descritivo para recomendação contínua."
cover_image: media-logo-pauta-varejo
external_url: https://example.com/cobertura-i6
featured: false
gated: false
format: html
---

<h2>Trecho da entrevista</h2>
<p>O ponto central da conversa foi simples: o gargalo deixou de ser a produção do
número e passou a ser a chegada dele na decisão, no prazo em que a decisão
acontece.</p>
<blockquote>
<p>"Modelo que responde depois da reunião não é modelo, é relatório."</p>
</blockquote>
<p>A íntegra está disponível no veículo original.</p>
`,Nt=`---
title: "IA aplicada sai do piloto: o que muda na operação"
slug: i6-na-midia-ia-aplicada
language: pt
type: i6 on Media
date: 2026-07-30
read_time: 3
theme: cobertura
theme_label: "Cobertura"
tags: [imprensa, operação]
excerpt: "Participação em painel sobre a passagem de provas de conceito para operação contínua em decisões comerciais."
cover_image: media-logo-rede-giro
external_url: https://example.com/painel-ia-aplicada
featured: false
gated: false
format: html
---

<h2>Resumo da participação</h2>
<p>Piloto prova viabilidade técnica; operação prova viabilidade de processo. A
distância entre as duas é quase sempre organizacional — quem decide, com que
frequência e com qual critério.</p>
`,Pt=`---
title: "Assortment guided by local demand"
slug: "local-assortment"
language: "en"
type: "i6 Success Story"
segment: "Store networks"
client: "Fictional Horizonte Company"
client_anon: true
description: "A regional network began balancing variety and availability in each market."
challenge: "National decisions concealed local differences and increased both excess and stockouts."
what_to_anticipate: "The operation needed to anticipate which categories would gain relevance in each region."
prediction: "Demand, seasonality and affinity signals formed a comparable store-level view."
solution: "Recommendations supported shorter planning cycles and consistent local choices."
metric1: "-14% stockouts"
metric2: "+9% turnover"
metric3: "-8% excess"
solutions: ["Assortment|assortment, Local planning"]
quote: "“We gained a common language for deciding variety without losing each store’s reality.”"
customer_name: ""
customer_title: "Operations Director · fictional company"
cover_image: "blog-cover-assortment"
show_home: false
published: true
sort_order: 2
format: markdown
---
`,Ft=`---
title: "Surtido guiado por la demanda local"
slug: "local-assortment"
language: "es"
type: "i6 Success Story"
segment: "Redes de tiendas"
client: "Empresa ficticia Horizonte"
client_anon: true
description: "Una red regional comenzó a equilibrar variedad y disponibilidad en cada mercado."
challenge: "Las decisiones nacionales ocultaban diferencias locales y aumentaban exceso y quiebres."
what_to_anticipate: "La operación necesitaba anticipar qué categorías ganarían relevancia en cada región."
prediction: "Señales de demanda, estacionalidad y afinidad formaron una visión comparable por tienda."
solution: "Las recomendaciones apoyaron ciclos de planificación más cortos y decisiones locales consistentes."
metric1: "-14% quiebres"
metric2: "+9% rotación"
metric3: "-8% exceso"
solutions: ["Assortment|assortment, Planificación local"]
quote: "“Logramos un lenguaje común para decidir variedad sin perder la realidad de cada tienda.”"
customer_name: ""
customer_title: "Director de Operaciones · empresa ficticia"
cover_image: "blog-cover-assortment"
show_home: false
published: true
sort_order: 2
format: markdown
---
`,It=`---
title: "Sortimento guiado pela demanda local"
slug: "local-assortment"
language: "pt"
type: "i6 Success Story"
segment: "Redes de lojas"
client: "Empresa fictícia Horizonte"
client_anon: true
description: "Uma rede regional passou a equilibrar variedade e disponibilidade em cada praça."
challenge: "Decisões nacionais escondiam diferenças locais e aumentavam excesso e ruptura."
what_to_anticipate: "A operação precisava antecipar quais categorias ganhariam relevância em cada região."
prediction: "Sinais de demanda, sazonalidade e afinidade formaram uma visão comparável por loja."
solution: "A recomendação apoiou ciclos de planejamento mais curtos e escolhas locais consistentes."
metric1: "-14% ruptura"
metric2: "+9% giro"
metric3: "-8% excesso"
solutions: ["Assortment|assortment, Planejamento local"]
quote: "“Ganhamos uma linguagem comum para decidir variedade sem perder a realidade de cada loja.”"
customer_name: ""
customer_title: "Diretor de Operações · empresa fictícia"
cover_image: "blog-cover-assortment"
show_home: false
published: true
sort_order: 2
format: markdown
---
`,Lt=`---
title: "Predictive AI reaches the boardroom agenda in retail"
slug: mercado-vivo-conselho-preditivo
language: en
type: i6 on Media
date: 2026-08-29
read_time: 5
theme: cobertura
theme_label: "Coverage"
tags: [press, board]
excerpt: "Fictional interview on how replenishment and pricing decisions moved from an annual committee to a daily routine."
cover_image: media-logo-mercado-vivo
external_url: https://exemplo.mercadovivo.test/conselho-preditivo
featured: true
gated: false
format: html
---

<h2>From the interview</h2>
<p>The topic is no longer technology, it is cadence: how often the company is
willing to revisit a decision that used to be annual.</p>
<blockquote>
<p>"Boards don't ask for models. They ask for predictability — and predictability has a deadline."</p>
</blockquote>
<p>Fictional content, created for layout demonstration only.</p>
`,Rt=`---
title: "IA preditiva vira pauta de conselho no varejo brasileiro"
slug: mercado-vivo-conselho-preditivo
language: pt
type: i6 on Media
date: 2026-08-29
read_time: 5
theme: cobertura
theme_label: "Cobertura"
tags: [imprensa, conselho]
excerpt: "Entrevista fictícia sobre como decisões de reposição e preço migraram do comitê anual para a rotina diária."
cover_image: media-logo-mercado-vivo
external_url: https://exemplo.mercadovivo.test/conselho-preditivo
featured: true
gated: false
format: html
---

<h2>Trecho da entrevista</h2>
<p>O tema deixou de ser tecnologia e passou a ser cadência: com que frequência a
empresa está disposta a rever uma decisão que antes era anual.</p>
<blockquote>
<p>"Conselho não pede modelo. Pede previsibilidade — e previsibilidade tem prazo."</p>
</blockquote>
<p>Conteúdo fictício, criado apenas para demonstração do layout.</p>
`,zt=`---
title: "Previsão de demanda que o time comercial realmente usa"
slug: previsao-demanda-time-comercial
language: pt
type: i6 Article
date: 2026-08-27
read_time: 8
theme: previsao-demanda
theme_label: "Previsão de demanda"
tags: [previsão, reposição, risco]
cover_image: blog-cover-forecast
is_default: true
excerpt: "Previsão probabilística por SKU-PDV-dia muda a conversa do \\"quanto vendemos\\" para \\"quanto risco aceitamos\\" em cada decisão de reposição."
format: html
---

<h2>O problema real</h2>
<p>A maior parte das previsões morre no meio do caminho: chega em número único,
mensal, por categoria, e o time comercial precisa decidir em SKU, em loja, em
dia. Entre o modelo e a decisão sobra um vão que alguém preenche no olho.</p>
<h2>Trocar o número pelo intervalo</h2>
<p>Uma previsão probabilística devolve uma distribuição, não um ponto. Isso muda
a pergunta operacional: em vez de "quanto vamos vender", o time discute
"quanto de ruptura aceitamos correr nesta praça". O nível de serviço passa a
ser uma escolha explícita, com custo visível dos dois lados.</p>
<h2>O que muda na rotina</h2>
<ul>
<li>Reposição por percentil, não por média.</li>
<li>Itens de cauda longa deixam de ser arredondados para zero.</li>
<li>Exceções chegam priorizadas por impacto, não por ordem alfabética.</li>
</ul>
<h2>Onde costuma falhar</h2>
<p>Modelo bom com cadastro ruim continua sendo decisão ruim. Antes de sofisticar
a previsão, vale medir quanto do erro vem de dado de catálogo desatualizado.</p>
`,Bt=`---
title: "Price elasticity without eating your margin"
slug: elasticidade-preco-sem-canibalizar-margem
language: en
type: i6 Article
date: 2026-08-19
read_time: 6
theme: preco-elasticidade
theme_label: "Price and elasticity"
tags: [pricing, margin, elasticity]
cover_image: blog-cover-pricing
excerpt: "Elasticity curves per store cluster let you raise price where demand is rigid and protect volume where it is sensitive."
format: html
---

<h2>Average price hides the decision</h2>
<p>A single elasticity for the whole chain averages away behaviours that cancel
each other out. Cluster by observed behaviour and the pockets appear.</p>
<h2>How to structure the test</h2>
<ol>
<li>Group stores by behaviour, not by administrative region.</li>
<li>Estimate the curve per cluster and per price band.</li>
<li>Simulate margin impact before touching the price list.</li>
</ol>
<h2>The signal it worked</h2>
<p>Category margin rises without meaningful volume loss in the sensitive
clusters.</p>
`,Vt=`---
title: "Recomendar para quem você ainda não conhece"
slug: recomendar-para-quem-voce-ainda-nao-conhece
language: pt
type: i6 Article
date: 2026-08-12
read_time: 7
theme: recomendacao
theme_label: "Recomendação"
tags: [recomendação, personalização, cold start]
cover_image: blog-cover-recommendation
excerpt: "A maior parte do tráfego é anônima. Grupos de sessão em tempo real sustentam personalização antes do primeiro login."
format: html
---

<h2>O visitante sem histórico</h2>
<p>Boa parte das sessões não tem identidade nem histórico. Esperar o login para
personalizar é abrir mão da maior fatia do tráfego justamente no momento em
que a decisão de compra está sendo formada.</p>
<h2>Sinal de sessão vale mais que perfil antigo</h2>
<p>Sequência de navegação, tempo em página e contexto de entrada dizem mais sobre
a intenção de agora do que uma compra feita há seis meses. O modelo aprende no
curso da própria sessão e ajusta a vitrine a cada interação.</p>
<h2>Cuidado com o efeito espelho</h2>
<p>Recomendação que só reforça o que já foi visto vira eco. Reserve espaço para
descoberta controlada e meça a receita incremental, não o clique.</p>
`,Ht=`---
title: "Recommending to people you don't know yet"
slug: recomendar-para-quem-voce-ainda-nao-conhece
language: en
type: i6 Article
date: 2026-08-12
read_time: 7
theme: recomendacao
theme_label: "Recommendation"
tags: [recommendation, personalization, cold start]
cover_image: blog-cover-recommendation
excerpt: "Most traffic is anonymous. Real-time session grouping sustains personalization before the first login."
format: html
---

<h2>The visitor with no history</h2>
<p>Waiting for a login before personalizing means giving up the largest share of
traffic exactly when the purchase decision is being formed.</p>
<h2>Session signal beats an old profile</h2>
<p>Browsing sequence, dwell time and entry context say more about present intent
than a purchase made six months ago.</p>
<h2>Watch the echo effect</h2>
<p>Recommendations that only reinforce what was already seen become an echo.
Reserve room for controlled discovery and measure incremental revenue.</p>
`,Ut=`---
title: "Governança de dados é o gargalo real da IA corporativa"
slug: rede-giro-governanca-de-dados
language: pt
type: i6 on Media
date: 2026-07-25
read_time: 3
theme: cobertura
theme_label: "Cobertura"
tags: [imprensa, governança]
excerpt: "Painel fictício sobre histórico consistente, granularidade e contratos de integração antes de qualquer modelo."
cover_image: media-logo-rede-giro
external_url: https://exemplo.redegiro.test/governanca-de-dados
featured: false
gated: false
format: html
---

<h2>Resumo da participação</h2>
<p>Antes de discutir arquitetura de modelo, a conversa foi sobre contrato de dado:
quem garante o campo, com que frequência ele chega e o que acontece quando falha.</p>
<p>Conteúdo fictício, criado apenas para demonstração do layout.</p>
`,Wt=`---
title: "Relevance that expanded discovery"
slug: "relevance-discovery"
language: "en"
type: "i6 Success Story"
segment: "Digital retail"
client: "Fictional Aurora Company"
client_anon: true
description: "A digital operation redesigned discovery to connect every visit with the most relevant opportunities."
challenge: "The catalog grew faster than the ability to surface relevant products. **Strong options remained invisible** to many visits."
what_to_anticipate: "The business needed to anticipate each session intent, including unidentified visitors, and respond within the experience."
prediction: "The model began estimating affinity and context for every interaction, prioritizing items with the strongest incremental potential."
solution: "The team activated **i6 Relevance** at strategic journey points, with continuous measurement against a control group."
metric1: "+18% influenced revenue"
metric2: "+11% influenced orders"
metric3: "+7% influenced average order"
solutions: ["Relevance|relevance, Contextual personalization"]
quote: "“The decision stopped being which product to feature and became which opportunity we cannot afford to miss.”"
customer_name: ""
customer_title: "Digital Director · fictional company"
cover_image: "blog-cover-recommendation"
show_home: false
published: true
sort_order: 1
format: markdown
---
`,Gt=`---
title: "Relevancia que amplió el descubrimiento"
slug: "relevance-discovery"
language: "es"
type: "i6 Success Story"
segment: "Retail digital"
client: "Empresa ficticia Aurora"
client_anon: true
description: "Una operación digital rediseñó el descubrimiento para conectar cada visita con las oportunidades más relevantes."
challenge: "El catálogo crecía más rápido que la capacidad de mostrar productos relevantes. **Buenas opciones seguían invisibles** para muchas visitas."
what_to_anticipate: "Era necesario anticipar la intención de cada sesión, incluso sin historial identificado, y responder dentro de la experiencia."
prediction: "El modelo comenzó a estimar afinidad y contexto en cada interacción, priorizando artículos con mayor potencial incremental."
solution: "El equipo activó **i6 Relevance** en puntos estratégicos del recorrido, con medición continua frente a un grupo de control."
metric1: "+18% ingresos influenciados"
metric2: "+11% pedidos influenciados"
metric3: "+7% ticket medio influenciado"
solutions: ["Relevance|relevance, Personalización contextual"]
quote: "“La decisión dejó de ser qué producto destacar y pasó a ser qué oportunidad no podemos perder.”"
customer_name: ""
customer_title: "Directora Digital · empresa ficticia"
cover_image: "blog-cover-recommendation"
show_home: false
published: true
sort_order: 1
format: markdown
---
`,Kt=`---
title: "Relevância que ampliou a descoberta"
slug: "relevance-discovery"
language: "pt"
type: "i6 Success Story"
segment: "Varejo digital"
client: "Empresa fictícia Aurora"
client_anon: true
description: "Uma operação digital reorganizou a experiência de descoberta para conectar cada visita às oportunidades mais relevantes."
challenge: "O catálogo crescia mais rápido do que a capacidade de apresentar produtos relevantes. **Boas opções permaneciam invisíveis** para grande parte das visitas."
what_to_anticipate: "Era necessário antecipar a intenção de cada sessão, inclusive sem histórico identificado, e responder em tempo de experiência."
prediction: "O modelo passou a estimar afinidade e contexto para cada interação, priorizando itens com maior probabilidade de contribuição incremental."
solution: "A equipe ativou o **i6 Relevance** em pontos estratégicos da jornada, com medição contínua contra um grupo de controle."
metric1: "+18% receita influenciada"
metric2: "+11% pedidos influenciados"
metric3: "+7% ticket médio influenciado"
solutions: ["Relevance|relevance, Personalização contextual"]
quote: "“A decisão deixou de ser qual produto destacar e passou a ser qual oportunidade não podemos perder.”"
customer_name: ""
customer_title: "Diretora de Digital · empresa fictícia"
cover_image: "blog-cover-recommendation"
show_home: false
published: true
sort_order: 1
format: markdown
---
`,qt=`---
title: "Ruptura de gôndola é decisão, não azar"
slug: ruptura-de-gondola-e-decisao
language: pt
type: i6 Article
date: 2026-08-05
read_time: 5
theme: previsao-demanda
theme_label: "Previsão de demanda"
tags: [ruptura, reposição, operação]
excerpt: "Toda ruptura é o resultado de um nível de serviço que alguém escolheu, mesmo quando ninguém escreveu essa escolha em lugar nenhum."
format: html
---

<h2>A escolha implícita</h2>
<p>Estoque de segurança é uma aposta. Quando ela não é declarada, a operação
descobre o número pelo efeito: prateleira vazia no fim de semana, sobra na
segunda-feira.</p>
<h2>Tornar a aposta explícita</h2>
<p>Definir nível de serviço por curva de item e por praça transforma discussão de
culpa em discussão de trade-off — e permite comparar o custo da ruptura com o
custo do capital parado.</p>
<h2>Medida honesta</h2>
<p>Meça ruptura no ponto de venda, não no centro de distribuição. Os dois números
raramente contam a mesma história.</p>
`,Jt=`---
title: "Bastidores: como testamos um motor de previsão antes de subir"
slug: social-bastidores-motor-previsao
language: pt
type: i6 Social
date: 2026-07-16
read_time: 2
theme: bastidores
theme_label: "Bastidores"
tags: [social, engenharia]
excerpt: "Post de exemplo com o ritual de validação semanal do time de engenharia."
cover_image: media-logo-canal-vitrine
external_url: https://exemplo.canalvitrine.test/bastidores-previsao
featured: false
gated: false
format: html
---

<h2>Do post</h2>
<p>Backtest, janela cega, comparação contra a regra manual e só então liberação.
Quatro passos, sempre na mesma ordem.</p>
<p>Conteúdo fictício, criado apenas para demonstração do layout.</p>
`,Yt=`---
title: "Encontro da comunidade i6 Builders: o que rolou"
slug: social-encontro-comunidade
language: pt
type: i6 Social
date: 2026-06-25
read_time: 2
theme: bastidores
theme_label: "Bastidores"
tags: [social, comunidade]
excerpt: "Post de exemplo sobre o encontro presencial e as demos apresentadas pelos participantes."
cover_image: media-logo-canal-vitrine
external_url: https://exemplo.canalvitrine.test/encontro-comunidade
featured: false
gated: false
format: html
---

<h2>Do post</h2>
<p>Três demos, uma discussão longa sobre dado sujo e a conclusão de sempre: o
problema raramente está no modelo.</p>
<p>Conteúdo fictício, criado apenas para demonstração do layout.</p>
`,Xt=`---
title: "Number of the week: 84% accuracy per SKU-store-day"
slug: social-numero-da-semana
language: en
type: i6 Social
date: 2026-07-05
read_time: 1
theme: bastidores
theme_label: "Behind the scenes"
tags: [social, metrics]
excerpt: "Sample post with a fictional indicator and what it changes in daily operations."
external_url: https://exemplo.canalvitrine.test/numero-da-semana
featured: false
gated: false
format: html
---

<h2>From the post</h2>
<p>Accuracy alone decides nothing. What changes operations is the risk band it
allows you to take on replenishment.</p>
<p>Fictional content, created for layout demonstration only.</p>
`,Zt=`---
title: "O número da semana: 84% de acurácia por SKU-PDV-dia"
slug: social-numero-da-semana
language: pt
type: i6 Social
date: 2026-07-05
read_time: 1
theme: bastidores
theme_label: "Bastidores"
tags: [social, métricas]
excerpt: "Post de exemplo com um indicador fictício e o que ele muda na operação."
external_url: https://exemplo.canalvitrine.test/numero-da-semana
featured: false
gated: false
format: html
---

<h2>Do post</h2>
<p>Acurácia sozinha não decide nada. O que muda a operação é a faixa de risco que
ela permite assumir na reposição.</p>
<p>Conteúdo fictício, criado apenas para demonstração do layout.</p>
`,Qt=`---
title: "Sortimento por cluster de loja, não por média da rede"
slug: sortimento-por-cluster-de-loja
language: pt
type: i6 Article
date: 2026-07-22
read_time: 7
theme: previsao-demanda
theme_label: "Previsão de demanda"
tags: [sortimento, cluster, varejo]
cover_image: blog-cover-assortment
excerpt: "A média da rede descreve uma loja que não existe. Clusters de comportamento devolvem o sortimento ao território real de cada ponto."
format: html
---

<h2>A loja média não existe</h2>
<p>Planogramas construídos sobre a média da rede acertam o centro e erram as
pontas — justamente onde estão margem e ruptura.</p>
<h2>Agrupar por comportamento</h2>
<p>Cluster por cesta observada, sazonalidade local e resposta a preço produz
grupos pequenos o suficiente para decidir e grandes o suficiente para operar.</p>
<h2>Rodar em ciclo</h2>
<p>Sortimento não é entrega anual. Revisões curtas, com leitura de resultado por
cluster, mantêm o mix próximo do comportamento que está acontecendo agora.</p>
`,$t={url:`/media/assets-v1/357f3b8a-a6cd-4189-b5f6-8a1f406ca158/blog-cover-assortment.jpg`},en={url:`/media/assets-v1/f5c29ec1-8900-47ef-b84b-6069192808fa/blog-cover-forecast.jpg`},tn={url:`/media/assets-v1/7865821b-6f11-4cef-a86e-b47d40b13dd2/blog-cover-pricing.jpg`},nn={url:`/media/assets-v1/cb4825bc-633a-4b91-9870-f52c6fb38a60/blog-cover-recommendation.jpg`},rn={url:`/media/assets-v1/b204822e-9584-42f5-87f6-3d8e53135c9c/media-logo-cadencia.png`},an={url:`/media/assets-v1/2e1be98c-f99d-422b-b93f-51dc8d2a723b/media-logo-canal-vitrine.png`},on={url:`/media/assets-v1/23cc01c2-ade4-4564-96ae-ac09e80e2fce/media-logo-mercado-vivo.png`},sn={url:`/media/assets-v1/6bbf6a40-956f-4e47-aaa6-b79edd2d276d/media-logo-pauta-varejo.png`},cn={url:`/media/assets-v1/dd9996e7-3b8a-47f9-ad28-5a0c63ad1ef4/media-logo-rede-giro.png`},ln=[`i6 Article`,`i6 Blog`,`i6 on Media`,`i6 eBook`,`i6 Social`],un=[`i6 Article`,`i6 Blog`],dn=[`i6 on Media`,`i6 Social`],fn={"blog-cover-forecast":en.url,"blog-cover-assortment":$t.url,"blog-cover-pricing":tn.url,"blog-cover-recommendation":nn.url,"media-logo-mercado-vivo":on.url,"media-logo-pauta-varejo":sn.url,"media-logo-cadencia":rn.url,"media-logo-rede-giro":cn.url,"media-logo-canal-vitrine":an.url};function pn(e){if(e)return/^https?:\/\//.test(e)||e.startsWith(`/`)?e:fn[e]}function mn(e){return e.startsWith(`en`)?`en`:e.startsWith(`es`)?`es`:`pt`}var hn=[`pt`,`en`,`es`];function gn(e){return typeof e==`string`&&hn.includes(e)}function _n(e){return e===`en`?`en-US`:e===`es`?`es-ES`:`pt-BR`}function vn(e){let t=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(e.trim());if(!t)return{data:{},body:e};let[,n,r=``]=t,i={};for(let e of(n??``).split(/\r?\n/)){let t=e.trim();if(!t||t.startsWith(`#`))continue;let n=t.indexOf(`:`);if(n===-1)continue;let r=t.slice(0,n).trim(),a=t.slice(n+1).trim();r&&(i[r]=yn(a))}return{data:i,body:r}}function yn(e){if(e===``||e===`null`||e===`~`)return null;if(e===`true`)return!0;if(e===`false`)return!1;if(e.startsWith(`[`)&&e.endsWith(`]`))return e.slice(1,-1).split(`,`).map(e=>bn(e.trim())).filter(e=>e.length>0);let t=bn(e);return t===e?/^-?\d+(\.\d+)?$/.test(e)?Number(e):e:t}function bn(e){if(e.length>=2&&e.startsWith(`"`)&&e.endsWith(`"`))try{return JSON.parse(e)}catch{return e.slice(1,-1)}return e.length>=2&&e.startsWith(`'`)&&e.endsWith(`'`)?e.slice(1,-1):e}function xn(e){if(!e)return;let t=e.replace(/`{1,3}[^`]*`{1,3}/g,` `).replace(/!\[[^\]]*\]\([^)]*\)/g,` `).replace(/\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/^#{1,6}\s+/gm,``).replace(/[*_~>]/g,``).replace(/\s+/g,` `).trim();return t.length>0?t:void 0}var Sn=Object.assign({"/src/content/insights/a-promocao-que-se-paga-pt.md":Tt,"/src/content/insights/cadencia-precificacao-dinamica-pt.md":Et,"/src/content/insights/catalogo-que-alimenta-modelo-pt.md":Dt,"/src/content/insights/da-metrica-ao-experimento-pt.md":Ot,"/src/content/insights/demand-forecasting-teams-actually-use-en.md":kt,"/src/content/insights/elasticidade-preco-sem-canibalizar-margem-pt.md":At,"/src/content/insights/i6-in-the-media-predictive-decisions-en.md":jt,"/src/content/insights/i6-na-midia-decisao-preditiva-pt.md":Mt,"/src/content/insights/i6-na-midia-ia-aplicada-pt.md":Nt,"/src/content/insights/local-assortment.en.md":Pt,"/src/content/insights/local-assortment.es.md":Ft,"/src/content/insights/local-assortment.pt.md":It,"/src/content/insights/mercado-vivo-conselho-preditivo-en.md":Lt,"/src/content/insights/mercado-vivo-conselho-preditivo-pt.md":Rt,"/src/content/insights/previsao-demanda-time-comercial-pt.md":zt,"/src/content/insights/price-elasticity-without-eating-margin-en.md":Bt,"/src/content/insights/recomendar-para-quem-voce-ainda-nao-conhece-pt.md":Vt,"/src/content/insights/recommending-to-people-you-dont-know-en.md":Ht,"/src/content/insights/rede-giro-governanca-de-dados-pt.md":Ut,"/src/content/insights/relevance-discovery.en.md":Wt,"/src/content/insights/relevance-discovery.es.md":Gt,"/src/content/insights/relevance-discovery.pt.md":Kt,"/src/content/insights/ruptura-de-gondola-e-decisao-pt.md":qt,"/src/content/insights/social-bastidores-motor-previsao-pt.md":Jt,"/src/content/insights/social-encontro-comunidade-pt.md":Yt,"/src/content/insights/social-numero-da-semana-en.md":Xt,"/src/content/insights/social-numero-da-semana-pt.md":Zt,"/src/content/insights/sortimento-por-cluster-de-loja-pt.md":Qt});function Cn(e){return typeof e==`string`&&ln.includes(e)}function wn(e){return(e.split(`/`).pop()??``).replace(/\.md$/,``).replace(/[.-](pt|en|es)$/,``)}function z(e,t){return t?{[e]:t}:{}}function B(e,t){let n=e[t];return typeof n==`string`&&n.length>0?n:void 0}function Tn(e,t){if(!(!e||!/^\d{4}-\d{2}-\d{2}$/.test(e)||Number.isNaN(Date.parse(e))))return e>=t?e:void 0}function En(e,t){let{data:n,body:r}=vn(t),i=B(n,`title`),a=B(n,`language`),o=a===`en`||a===`pt`||a===`es`?a:null,s=B(n,`date`),c=n.type,l=Cn(c)?c:null;if(!i||!o||!s||!l)return null;let u=n.tags,d=Array.isArray(u)?u:[],f=xn(B(n,`excerpt`)),p=B(n,`cover_image`),m=n.read_time,h=B(n,`theme`),g=B(n,`theme_label`),_=B(n,`external_url`),v=B(n,`format`)===`html`?`html`:`markdown`;return{...z(`id`,B(n,`id`)),slug:B(n,`slug`)??wn(e),title:i,language:o,type:l,date:s,...z(`updatedAt`,Tn(B(n,`updated_at`),s)),...f?{excerpt:f}:{},...p?{coverImage:p}:{},...typeof m==`number`?{readTime:m}:{},isDefault:n.is_default===!0,featured:n.featured===!0,gated:n.gated===!0,...h?{theme:h}:{},...g?{themeLabel:g}:{},tags:d,..._?{externalUrl:_}:{},format:v,body:r.trim(),...z(`writerName`,B(n,`writer_name`)),...z(`writerRole`,B(n,`writer_role`)),...z(`writerImage`,B(n,`writer_image_key`)),ctaForm:n.cta_form===!0,...z(`ctaFormTitle`,B(n,`cta_form_title`)),...z(`ctaFormSubtitle`,B(n,`cta_form_subtitle`)),...z(`ctaFormText`,B(n,`cta_form_text`)),...z(`relatedProduct`,B(n,`related_product`)),...z(`assetUrl`,B(n,`asset_url`))}}var Dn=Object.entries(Sn).map(([e,t])=>En(e,t)).filter(e=>e!==null).sort((e,t)=>e.date<t.date?1:e.date>t.date?-1:0);function On(e,t){return Dn.filter(n=>t.includes(n.type)&&n.language===e)}function kn(e,t,n=ln){return Dn.find(r=>r.slug===t&&n.includes(r.type)&&r.language===e)}function An(e){return e.find(e=>e.isDefault)??e[0]}function jn(e){return e.themeLabel??e.theme}function Mn(t){let n=t.split(`/`).filter(Boolean)[0];return gn(n)?_n(n):e}function Nn(e){return e.startsWith(`en`)?`en`:e.startsWith(`es`)?`es`:`pt`}function Pn(e,t){let n=e.split(`/`).filter(Boolean),r=n.length>0&&gn(n[0])?n.slice(1).join(`/`):n.join(`/`);return`/${t}${r?`/${r}`:``}`}function Fn(e){let t=e.search(/[?#]/),n=t===-1?e:e.slice(0,t),r=t===-1?``:e.slice(t);return`${n.endsWith(`/`)?n:`${n}/`}${r}`}function In(e,t){return e===`pt`&&t===``?`/`:Fn(`/${e}${t}`)}function Ln(e,t){return[...[`pt`,`en`,`es`].map(n=>({rel:`alternate`,hrefLang:n,href:`${e}${In(n,t)}`})),{rel:`alternate`,hrefLang:`x-default`,href:`${e}${In(`pt`,t)}`}]}var Rn=[`assortment`,`forecasting`,`pricing`,`relevance`,`targeting`],zn=[`assortment`,`forecasting`,`pricing`,`relevance`,`targeting`],Bn=new Set(Rn);function Vn(e){return Bn.has(e)}function Hn(e){return e===`production`?`production`:`test`}var Un=Hn({BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,TSS_DEV_SERVER:`false`,TSS_DEV_SSR_STYLES_BASEPATH:`/`,TSS_DEV_SSR_STYLES_ENABLED:`true`,TSS_DISABLE_CSRF_MIDDLEWARE_WARNING:`false`,TSS_INLINE_CSS_ENABLED:`false`,TSS_ROUTER_BASEPATH:``,TSS_SERVER_FN_BASE:`/_serverFn/`,VITE_APP_ORIGIN:`https://app.infinity6.ai`,VITE_I6_ENV:`test`,VITE_PUBLISH_TARGET:`pages`}.VITE_I6_ENV),Wn={test:`https://decsuite.sandbox.rs.infinity6.ai`,production:`https://decsuite.app.rs.infinity6.ai`}[Un],Gn={test:`https://dev.app.infinity6.ai/#home`,production:`https://app.infinity6.ai/#home`};function Kn(e=Un){return`${Gn[e]}?origem=checkout`}var qn=`campaign_state`,Jn=`i6ds_campaign_state`,Yn={test:`CAESAXMaAXMilwFnSgX21qEGM3PdMlLd9b-HwTuALPte-Lz4ArlkLvVgQDColc1mz59VvNvYXKnfoGkwX7OzN5zb8oSrdNs124bLpD0CRA7tI0bukbmPvycJyS6He_JF6fv3Ykpnz8TVzoSeTJVkgnyGXRhyk9u-rofIZJJEtK8jiiJ9der0tILro8uu6l0SkivaDV9R1hW_MMdLj8OBe1e1`,production:``},Xn=/^[A-Za-z0-9+/_-]+={0,2}$/;function Zn(e){return typeof e==`string`&&e.length>0&&e.length<=2048&&Xn.test(e)&&!/\s/.test(e)}function Qn(e){if(typeof window>`u`)return;let t=new URLSearchParams(e).get(`campaign_state`)?.replace(/ /g,`+`)??null;if(Zn(t))try{window.sessionStorage.setItem(Jn,t)}catch{}}function $n(e){let t=e.startsWith(`?`)?e.slice(1):e;if(!t)return null;let n=t.split(`&`),r=n.filter(e=>{let t=e.split(`=`,1)[0]??``;try{return decodeURIComponent(t.replace(/\+/g,` `))!==qn}catch{return!0}});if(r.length===n.length)return null;let i=r.filter(e=>e!==``).join(`&`);return i?`?${i}`:``}function er(){if(typeof window>`u`)return;let{pathname:e,search:t,hash:n}=window.location;Qn(t);let r=$n(t);if(r!==null)try{window.history.replaceState(window.history.state,``,`${e}${r}${n}`)}catch{}}function tr(e=Un){let t=Yn[e];return Zn(t)?t:null}function nr(e=Un){if(typeof window>`u`)return tr(e);try{let t=window.sessionStorage.getItem(Jn);return Zn(t)?t:tr(e)}catch{return tr(e)}}var rr=[`chatgpt`,`claude`,`perplexity`,`gemini`,`copilot`,`grok`,`deepseek`,`meta_ai`,`none`],ir=e=>typeof e==`string`&&rr.includes(e),ar=[[`chatgpt`,[`chatgpt.com`,`chat.openai.com`]],[`claude`,[`claude.ai`]],[`perplexity`,[`perplexity.ai`]],[`gemini`,[`gemini.google.com`,`bard.google.com`]],[`copilot`,[`copilot.microsoft.com`,`edgeservices.bing.com`]],[`grok`,[`grok.com`]],[`deepseek`,[`chat.deepseek.com`]],[`meta_ai`,[`meta.ai`]]],or=/^\/(chat|copilot)(\/|$)/i,sr=/^[a-z0-9.-]+$/,cr=(e,t)=>e===t||e.endsWith(`.${t}`);function lr(e){for(let[t,n]of ar)if(n.some(t=>cr(e,t)))return t;return`none`}function ur(e){let t;try{t=new URL(e??``)}catch{return`none`}if(t.protocol!==`https:`&&t.protocol!==`http:`)return`none`;let n=t.hostname.toLowerCase(),r=lr(n);return r===`none`?cr(n,`bing.com`)&&or.test(t.pathname)?`copilot`:`none`:r}function dr(e){let t=(e??``).trim().toLowerCase();return!t||t===`none`?`none`:rr.includes(t)?t:sr.test(t)?lr(t):`none`}function fr(e,t){try{let n=new URL(e);return n.protocol!==`https:`&&n.protocol!==`http:`||n.hostname.toLowerCase()===t.toLowerCase()?``:n.origin}catch{return``}}var V={aid:`i6ds_aid`,firstTouch:`i6ds_first_touch`,lastTouch:`i6ds_last_touch`,pages:`i6ds_pages`,session:`i6ds_session`},pr=20,mr=18e5,hr=200,gr=[`utm_source`,`utm_medium`,`utm_campaign`,`utm_term`,`utm_content`],_r=()=>typeof window<`u`&&typeof sessionStorage<`u`;function vr(){try{if(typeof crypto<`u`&&`randomUUID`in crypto)return crypto.randomUUID()}catch{}let e=new Uint8Array(16);if(typeof crypto<`u`&&typeof crypto.getRandomValues==`function`)crypto.getRandomValues(e);else for(let t=0;t<e.length;t+=1)e[t]=Math.floor(Math.random()*256);e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``);return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function H(e){if(!_r())return null;try{let t=sessionStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function yr(e,t){if(_r())try{sessionStorage.setItem(e,JSON.stringify(t))}catch{}}function br(e){let t=new URLSearchParams(e),n={};for(let e of gr){let r=t.get(e);r&&(n[e]=r.slice(0,hr))}return n}function xr(){if(!_r())return``;let e=``;try{e=sessionStorage.getItem(V.aid)??``,e||(e=vr(),sessionStorage.setItem(V.aid,e))}catch{}return e}function Sr(){if(!_r())return null;let e=Date.now(),t=H(V.session);return!t||e-t.last_activity>mr?t={id:vr(),started_at:e,last_activity:e}:t.last_activity=e,yr(V.session,t),t}function Cr(){if(!_r())return;er(),xr(),Sr();let e=br(window.location.search),t=typeof document>`u`?``:document.referrer||``,n=fr(t,window.location.hostname),r=ur(t),i=new Date().toISOString(),a=Object.keys(e).length>0,o=H(V.firstTouch);if(o)a&&!o.utm_source&&yr(V.firstTouch,{...o,...e});else{let t={...e,...n?{referrer:n.slice(0,hr)}:{},...r===`none`?{}:{referrer_ai:r},landing_page:Er(`${window.location.pathname}${window.location.search}`),ts:i};yr(V.firstTouch,t)}if(a){let t={...e,...n?{referrer:n.slice(0,hr)}:{},ts:i};yr(V.lastTouch,t)}}var wr=[`session_id`,qn];function Tr(e){let t=String(e),n=t.indexOf(`?`);if(n===-1)return t;let r=t.slice(n+1).split(`&`).filter(e=>{if(e===``)return!1;let t=e.split(`=`,1)[0]??``,n=t;try{n=decodeURIComponent(t.replace(/\+/g,` `))}catch{return!0}return!wr.includes(n)});return r.length?`${t.slice(0,n)}?${r.join(`&`)}`:t.slice(0,n)}function Er(e){return Tr(e).slice(0,hr)}function Dr(e){if(!_r())return;xr(),Sr();let t=H(V.pages)??[];t.push({path:Tr(String(e)).slice(0,hr),ts:new Date().toISOString()}),t.length>pr&&t.splice(0,t.length-pr),yr(V.pages,t)}var Or=/^\/(?:pt|en|es)\/(?:i6-blog|i6-midia)\/([^/?]+)/;function kr(e){return Or.exec(e)?.[1]??``}function Ar(e){if(e===null||e<0)return``;let t=Math.round(e/1e3);return`${Math.floor(t/60)}m${t%60}s`}function jr(){if(!_r())return{};let e=H(V.firstTouch)??{},t=H(V.lastTouch)??{},n=H(V.pages)??[],r=H(V.session),i=``;for(let e=n.length-1;e>=0;--e){let t=kr(n[e].path);if(t){i=t.slice(0,hr);break}}return{anonymous_id:xr(),session_id:r?.id??``,slug:i,first_touch_source:e.utm_source??``,first_touch_medium:e.utm_medium??``,first_touch_campaign:e.utm_campaign??``,first_touch_referrer:fr(e.referrer??``,window.location.hostname),first_touch_landing_page:e.landing_page??``,last_touch_source:t.utm_source??``,last_touch_medium:t.utm_medium??``,last_touch_campaign:t.utm_campaign??``,pages_viewed_count:String(n.length),journey:n.slice(-10).map(e=>e.path).join(` > `),session_duration:Ar(r?Date.now()-r.started_at:null)}}function Mr(){if(!_r())return``;try{return sessionStorage.getItem(V.aid)??``}catch{return``}}function Nr(){return{first:H(V.firstTouch),last:H(V.lastTouch)}}function Pr(e){return br(e)}var Fr=`https://www.googletagmanager.com/gtag/js`,Ir=/^G-[A-Z0-9]{6,12}$/,Lr=null,Rr=!1,zr=`none`,Br=()=>typeof window>`u`?``:window.location.hostname;function Vr(e,t){if(t.toLowerCase()!==`decision.infinity6.ai`)return null;let n=e.querySelector(`meta[name="i6-ga4-id"]`)?.getAttribute(`content`)??``;return Ir.test(n)?n:null}function Hr(...e){(window.dataLayer??=[]).push(arguments)}function Ur(e,t){window[`ga-disable-${e}`]=t}function Wr(){if(typeof window>`u`||typeof document>`u`)return;let e=Lr??Vr(document,Br());if(!e)return;if(er(),Ur(e,!1),Lr){Hr(`consent`,`update`,{analytics_storage:`granted`}),Rr=!0;return}Hr(`consent`,`default`,{ad_storage:`denied`,ad_user_data:`denied`,ad_personalization:`denied`,analytics_storage:`denied`,functionality_storage:`denied`,personalization_storage:`denied`,security_storage:`denied`}),Hr(`consent`,`update`,{analytics_storage:`granted`});let t=Xr({first:Nr().first,documentReferrer:document.referrer,location:window.location});zr=t.trafficAiSource,Hr(`js`,new Date),zr!==`none`&&Hr(`set`,`user_properties`,{traffic_ai_source:zr}),Hr(`config`,e,{cookie_domain:`auto`,allow_google_signals:!1,allow_ad_personalization_signals:!1,traffic_ai_source:zr,...t.overrides});let n=document.createElement(`script`);n.async=!0,n.src=`${Fr}?id=${encodeURIComponent(e)}`,document.head.appendChild(n),Lr=e,Rr=!0}function Gr(){Rr=!1,!(!Lr||typeof window>`u`)&&(Hr(`consent`,`update`,{analytics_storage:`denied`}),Ur(Lr,!0))}var Kr=new Set([`utm_source`,`utm_medium`,`utm_campaign`,`utm_term`,`utm_content`,`produto`,`tipo`,`motivo`,`plan`]),qr=100;function Jr(e){let t=new URLSearchParams;for(let[n,r]of new URLSearchParams(e.search))Kr.has(n)&&t.append(n,r.slice(0,qr));let n=t.toString();return`${e.origin}${e.pathname}${n?`?${n}`:``}`}var Yr=[[`utm_source`,`campaign_source`],[`utm_medium`,`campaign_medium`],[`utm_campaign`,`campaign_name`],[`utm_term`,`campaign_term`],[`utm_content`,`campaign_content`]];function Xr(e){let{first:t,location:n}=e,r=t?t.referrer??``:e.documentReferrer,i=t?t.utm_source:Pr(n.search).utm_source,a=t&&ir(t.referrer_ai)?t.referrer_ai:ur(r),o=a===`none`?dr(i):a,s=!!t?.landing_page&&t.landing_page!==Er(`${n.pathname}${n.search}`),c={};if(c.page_referrer=fr(r,n.hostname)||fr(e.documentReferrer,n.hostname),!t||!s)return{trafficAiSource:o,overrides:c};for(let[e,n]of Yr){let r=t[e];r&&(c[n]=r.slice(0,qr))}return{trafficAiSource:o,overrides:c}}function Zr(e,t){!Rr||!Lr||typeof window>`u`||Hr(`event`,e,{...t,traffic_ai_source:zr,page_location:Jr(window.location)})}var Qr=zn,$r=(e,t)=>typeof t==`string`&&e.includes(t),ei=[`demo`,`contato`,`produto`,`precos`,`suporte`,`chat`,`blog`],ti=[`pt`,`en`,`es`];function ni(e){return typeof e==`string`&&Qr.includes(e)}function ri(e){if(!$r(ei,e.leadType)||!$r(ti,e.language))return;let t=e.productInterest;(ni(t)||t===`suite`||t===`nenhum`)&&Zr(`generate_lead`,{lead_type:e.leadType,product_interest:t,language:e.language})}var ii=[`starter`,`growth`,`scale`];function ai(e){!$r(ii,e.planId)||!ni(e.product)||Zr(`begin_checkout`,{plan_id:e.planId,product:e.product})}var oi=[`start_now`,`book_demo`,`talk_to_team`,`see_plans`,`free_trial`,`explore_products`,`contact`],si=[`header`,`header_mobile`,`home_hero`,`home_products`,`home_plans`,`product_hero`,`product_cta`,`success_stories`,`pricing_table`,`plan_calculator`,`checkout`,`footer`];function ci(e){!$r(oi,e.name)||!$r(si,e.location)||(ni(e.product)||e.product===`suite`)&&Zr(`cta_click`,{cta_name:e.name,cta_location:e.location,product_context:e.product})}function li(e){!$r([`home_product`,`mega_menu`],e.contentType)||!ni(e.itemId)||Zr(`select_content`,{content_type:e.contentType,item_id:e.itemId})}var ui=[`chatgpt`,`gemini`,`perplexity`,`claude`,`none`];function di(e){!$r([`copy_prompt`,`open_provider`],e.action)||!$r(ui,e.provider)||Zr(`ai_prompt_interaction`,{action:e.action,provider:e.provider})}var fi=/^\/(?:pt|en|es)\/(i6-blog|i6-midia)\/([a-z0-9][a-z0-9-]{0,119})\/?$/;function pi(e){let t=``;try{t=new URL(e).pathname}catch{return null}let n=fi.exec(t);return n?{contentType:n[1]===`i6-blog`?`blog`:`midia`,articleSlug:n[2]}:null}function mi(e){let t=pi(e);t&&Zr(`share_content`,{content_type:t.contentType,article_slug:t.articleSlug})}var hi=[{labelKey:`nav.products`,target:{kind:`products-menu`}},{labelKey:`nav.intelligence`,target:{kind:`intelligence-menu`}},{labelKey:`nav.cases`,target:{kind:`route`,to:`/$lang/success-stories`}},{labelKey:`nav.pricing`,target:{kind:`route`,to:`/$lang/pricing`}}],gi=/^\/\$lang\/products\/([a-z]+)$/;function _i(e){if(e.kind!==`route`)return`suite`;let t=gi.exec(e.to)?.[1];if(ni(t))return t;if(ni(e.hash))return e.hash;let n=e.search?.produto;return ni(n)?n:`suite`}function vi(){return lt({select:e=>Nn(Mn(e.location.pathname))})}function U({target:e,className:t,children:n,onClick:r,cta:i}){let a=vi(),o=i?t=>{ci({...i,product:_i(e)}),r?.(t)}:r;return e.kind===`anchor`?(0,I.jsx)(`a`,{href:e.href,className:t,onClick:o,children:n}):e.kind===`route`?(0,I.jsx)(L,{to:e.to,params:{lang:a},...e.hash===void 0?{}:{hash:e.hash},...e.search===void 0?{}:{search:e.search},className:t,onClick:o,children:n}):(0,I.jsx)(`span`,{className:t,"aria-disabled":`true`,children:n})}function yi(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=yi(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function bi(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=yi(e))&&(r&&(r+=` `),r+=t);return r}var xi=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Si=(e,t)=>({classGroupId:e,validator:t}),Ci=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),wi=`-`,Ti=[],Ei=`arbitrary..`,Di=e=>{let t=Ai(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return ki(e);let n=e.split(wi);return Oi(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?xi(i,t):t:i||Ti}return n[e]||Ti}}},Oi=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Oi(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(wi):e.slice(t).join(wi),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},ki=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Ei+r:void 0})(),Ai=e=>{let{theme:t,classGroups:n}=e;return ji(n,t)},ji=(e,t)=>{let n=Ci();for(let r in e){let i=e[r];Mi(i,n,r,t)}return n},Mi=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Ni(i,t,n,r)}},Ni=(e,t,n,r)=>{if(typeof e==`string`){Pi(e,t,n);return}if(typeof e==`function`){Fi(e,t,n,r);return}Ii(e,t,n,r)},Pi=(e,t,n)=>{let r=e===``?t:Li(t,e);r.classGroupId=n},Fi=(e,t,n,r)=>{if(Ri(e)){Mi(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Si(n,e))},Ii=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Mi(o,Li(t,a),n,r)}},Li=(e,t)=>{let n=e,r=t.split(wi),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Ci(),n.nextPart.set(t,i)),n=i}return n},Ri=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,zi=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Bi=`!`,Vi=`:`,Hi=[],Ui=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Wi=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Vi){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Bi)?(c=s.slice(0,-1),l=!0):s.startsWith(Bi)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Ui(t,l,c,u)};if(t){let e=t+Vi,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Ui(Hi,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Gi=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Ki=e=>({cache:zi(e.cacheSize),parseClassName:Wi(e),sortModifiers:Gi(e),postfixLookupClassGroupIds:qi(e),...Di(e)}),qi=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},Ji=/\s+/,Yi=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(Ji),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+Bi:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},Xi=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=Zi(n))&&(i&&(i+=` `),i+=r);return i},Zi=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Zi(e[r]))&&(n&&(n+=` `),n+=t);return n},Qi=(e,...t)=>{let n,r,i,a,o=o=>(n=Ki(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Yi(e,n);return i(e,a),a};return a=o,(...e)=>a(Xi(...e))},$i=[],W=e=>{let t=t=>t[e]||$i;return t.isThemeGetter=!0,t},ea=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ta=/^\((?:(\w[\w-]*):)?(.+)\)$/i,na=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,ra=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ia=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,aa=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,oa=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sa=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,G=e=>na.test(e),K=e=>!!e&&!Number.isNaN(Number(e)),q=e=>!!e&&Number.isInteger(Number(e)),ca=e=>e.endsWith(`%`)&&K(e.slice(0,-1)),J=e=>ra.test(e),la=()=>!0,ua=e=>ia.test(e)&&!aa.test(e),da=()=>!1,fa=e=>oa.test(e),pa=e=>sa.test(e),ma=e=>!Y(e)&&!X(e),ha=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),ga=e=>ja(e,Fa,da),Y=e=>ea.test(e),_a=e=>ja(e,Ia,ua),va=e=>ja(e,La,K),ya=e=>ja(e,za,la),ba=e=>ja(e,Ra,da),xa=e=>ja(e,Na,da),Sa=e=>ja(e,Pa,pa),Ca=e=>ja(e,Ba,fa),X=e=>ta.test(e),wa=e=>Ma(e,Ia),Ta=e=>Ma(e,Ra),Ea=e=>Ma(e,Na),Da=e=>Ma(e,Fa),Oa=e=>Ma(e,Pa),ka=e=>Ma(e,Ba,!0),Aa=e=>Ma(e,za,!0),ja=(e,t,n)=>{let r=ea.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Ma=(e,t,n=!1)=>{let r=ta.exec(e);return r?r[1]?t(r[1]):n:!1},Na=e=>e===`position`||e===`percentage`,Pa=e=>e===`image`||e===`url`,Fa=e=>e===`length`||e===`size`||e===`bg-size`,Ia=e=>e===`length`,La=e=>e===`number`,Ra=e=>e===`family-name`,za=e=>e===`number`||e===`weight`,Ba=e=>e===`shadow`,Va=Qi(()=>{let e=W(`color`),t=W(`font`),n=W(`text`),r=W(`font-weight`),i=W(`tracking`),a=W(`leading`),o=W(`breakpoint`),s=W(`container`),c=W(`spacing`),l=W(`radius`),u=W(`shadow`),d=W(`inset-shadow`),f=W(`text-shadow`),p=W(`drop-shadow`),m=W(`blur`),h=W(`perspective`),g=W(`aspect`),_=W(`ease`),v=W(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],ee=()=>[...b(),X,Y],te=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],ne=()=>[`auto`,`contain`,`none`],x=()=>[X,Y,c],S=()=>[G,`full`,`auto`,...x()],re=()=>[q,`none`,`subgrid`,X,Y],ie=()=>[`auto`,{span:[`full`,q,X,Y]},q,X,Y],ae=()=>[q,`auto`,X,Y],C=()=>[`auto`,`min`,`max`,`fr`,X,Y],oe=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],w=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],T=()=>[`auto`,...x()],E=()=>[G,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...x()],se=()=>[G,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...x()],D=()=>[G,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...x()],O=()=>[e,X,Y],k=()=>[...b(),Ea,xa,{position:[X,Y]}],ce=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],A=()=>[`auto`,`cover`,`contain`,Da,ga,{size:[X,Y]}],j=()=>[ca,wa,_a],M=()=>[``,`none`,`full`,l,X,Y],N=()=>[``,K,wa,_a],le=()=>[`solid`,`dashed`,`dotted`,`double`],ue=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],P=()=>[K,ca,Ea,xa],de=()=>[``,`none`,m,X,Y],fe=()=>[`none`,K,X,Y],pe=()=>[`none`,K,X,Y],me=()=>[K,X,Y],F=()=>[G,`full`,...x()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[J],breakpoint:[J],color:[la],container:[J],"drop-shadow":[J],ease:[`in`,`out`,`in-out`],font:[ma],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[J],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[J],shadow:[J],spacing:[`px`,K],text:[J],"text-shadow":[J],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,G,Y,X,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,X,Y]}],"container-named":[ha],columns:[{columns:[K,Y,X,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:ee()}],overflow:[{overflow:te()}],"overflow-x":[{"overflow-x":te()}],"overflow-y":[{"overflow-y":te()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{"inset-s":S(),start:S()}],end:[{"inset-e":S(),end:S()}],"inset-bs":[{"inset-bs":S()}],"inset-be":[{"inset-be":S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[q,`auto`,X,Y]}],basis:[{basis:[G,`full`,`auto`,s,...x()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[K,G,`auto`,`initial`,`none`,Y]}],grow:[{grow:[``,K,X,Y]}],shrink:[{shrink:[``,K,X,Y]}],order:[{order:[q,`first`,`last`,`none`,X,Y]}],"grid-cols":[{"grid-cols":re()}],"col-start-end":[{col:ie()}],"col-start":[{"col-start":ae()}],"col-end":[{"col-end":ae()}],"grid-rows":[{"grid-rows":re()}],"row-start-end":[{row:ie()}],"row-start":[{"row-start":ae()}],"row-end":[{"row-end":ae()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":C()}],"auto-rows":[{"auto-rows":C()}],gap:[{gap:x()}],"gap-x":[{"gap-x":x()}],"gap-y":[{"gap-y":x()}],"justify-content":[{justify:[...oe(),`normal`]}],"justify-items":[{"justify-items":[...w(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...w()]}],"align-content":[{content:[`normal`,...oe()]}],"align-items":[{items:[...w(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...w(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":oe()}],"place-items":[{"place-items":[...w(),`baseline`]}],"place-self":[{"place-self":[`auto`,...w()]}],p:[{p:x()}],px:[{px:x()}],py:[{py:x()}],ps:[{ps:x()}],pe:[{pe:x()}],pbs:[{pbs:x()}],pbe:[{pbe:x()}],pt:[{pt:x()}],pr:[{pr:x()}],pb:[{pb:x()}],pl:[{pl:x()}],m:[{m:T()}],mx:[{mx:T()}],my:[{my:T()}],ms:[{ms:T()}],me:[{me:T()}],mbs:[{mbs:T()}],mbe:[{mbe:T()}],mt:[{mt:T()}],mr:[{mr:T()}],mb:[{mb:T()}],ml:[{ml:T()}],"space-x":[{"space-x":x()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":x()}],"space-y-reverse":[`space-y-reverse`],size:[{size:E()}],"inline-size":[{inline:[`auto`,...se()]}],"min-inline-size":[{"min-inline":[`auto`,...se()]}],"max-inline-size":[{"max-inline":[`none`,...se()]}],"block-size":[{block:[`auto`,...D()]}],"min-block-size":[{"min-block":[`auto`,...D()]}],"max-block-size":[{"max-block":[`none`,...D()]}],w:[{w:[s,`screen`,...E()]}],"min-w":[{"min-w":[s,`screen`,`none`,...E()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...E()]}],h:[{h:[`screen`,`lh`,...E()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...E()]}],"max-h":[{"max-h":[`screen`,`lh`,...E()]}],"font-size":[{text:[`base`,n,wa,_a]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Aa,ya]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,ca,Y]}],"font-family":[{font:[Ta,ba,t]}],"font-features":[{"font-features":[Y]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,X,Y]}],"line-clamp":[{"line-clamp":[K,`none`,X,va]}],leading:[{leading:[a,...x()]}],"list-image":[{"list-image":[`none`,X,Y]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,X,Y]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...le(),`wavy`]}],"text-decoration-thickness":[{decoration:[K,`from-font`,`auto`,X,_a]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[K,`auto`,X,Y]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:x()}],"tab-size":[{tab:[q,X,Y]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,X,Y]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,X,Y]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:k()}],"bg-repeat":[{bg:ce()}],"bg-size":[{bg:A()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},q,X,Y],radial:[``,X,Y],conic:[q,X,Y]},Oa,Sa]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:j()}],"gradient-via-pos":[{via:j()}],"gradient-to-pos":[{to:j()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:M()}],"rounded-s":[{"rounded-s":M()}],"rounded-e":[{"rounded-e":M()}],"rounded-t":[{"rounded-t":M()}],"rounded-r":[{"rounded-r":M()}],"rounded-b":[{"rounded-b":M()}],"rounded-l":[{"rounded-l":M()}],"rounded-ss":[{"rounded-ss":M()}],"rounded-se":[{"rounded-se":M()}],"rounded-ee":[{"rounded-ee":M()}],"rounded-es":[{"rounded-es":M()}],"rounded-tl":[{"rounded-tl":M()}],"rounded-tr":[{"rounded-tr":M()}],"rounded-br":[{"rounded-br":M()}],"rounded-bl":[{"rounded-bl":M()}],"border-w":[{border:N()}],"border-w-x":[{"border-x":N()}],"border-w-y":[{"border-y":N()}],"border-w-s":[{"border-s":N()}],"border-w-e":[{"border-e":N()}],"border-w-bs":[{"border-bs":N()}],"border-w-be":[{"border-be":N()}],"border-w-t":[{"border-t":N()}],"border-w-r":[{"border-r":N()}],"border-w-b":[{"border-b":N()}],"border-w-l":[{"border-l":N()}],"divide-x":[{"divide-x":N()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":N()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...le(),`hidden`,`none`]}],"divide-style":[{divide:[...le(),`hidden`,`none`]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-bs":[{"border-bs":O()}],"border-color-be":[{"border-be":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...le(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[K,X,Y]}],"outline-w":[{outline:[``,K,wa,_a]}],"outline-color":[{outline:O()}],shadow:[{shadow:[``,`none`,u,ka,Ca]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":[`none`,d,ka,Ca]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:N()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[K,_a]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":N()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":[`none`,f,ka,Ca]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[K,X,Y]}],"mix-blend":[{"mix-blend":[...ue(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":ue()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[K]}],"mask-image-linear-from-pos":[{"mask-linear-from":P()}],"mask-image-linear-to-pos":[{"mask-linear-to":P()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":P()}],"mask-image-t-to-pos":[{"mask-t-to":P()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":P()}],"mask-image-r-to-pos":[{"mask-r-to":P()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":P()}],"mask-image-b-to-pos":[{"mask-b-to":P()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":P()}],"mask-image-l-to-pos":[{"mask-l-to":P()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":P()}],"mask-image-x-to-pos":[{"mask-x-to":P()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":P()}],"mask-image-y-to-pos":[{"mask-y-to":P()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[X,Y]}],"mask-image-radial-from-pos":[{"mask-radial-from":P()}],"mask-image-radial-to-pos":[{"mask-radial-to":P()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[K]}],"mask-image-conic-from-pos":[{"mask-conic-from":P()}],"mask-image-conic-to-pos":[{"mask-conic-to":P()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:k()}],"mask-repeat":[{mask:ce()}],"mask-size":[{mask:A()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,X,Y]}],filter:[{filter:[``,`none`,X,Y]}],blur:[{blur:de()}],brightness:[{brightness:[K,X,Y]}],contrast:[{contrast:[K,X,Y]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,ka,Ca]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:[``,K,X,Y]}],"hue-rotate":[{"hue-rotate":[K,X,Y]}],invert:[{invert:[``,K,X,Y]}],saturate:[{saturate:[K,X,Y]}],sepia:[{sepia:[``,K,X,Y]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,X,Y]}],"backdrop-blur":[{"backdrop-blur":de()}],"backdrop-brightness":[{"backdrop-brightness":[K,X,Y]}],"backdrop-contrast":[{"backdrop-contrast":[K,X,Y]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,K,X,Y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[K,X,Y]}],"backdrop-invert":[{"backdrop-invert":[``,K,X,Y]}],"backdrop-opacity":[{"backdrop-opacity":[K,X,Y]}],"backdrop-saturate":[{"backdrop-saturate":[K,X,Y]}],"backdrop-sepia":[{"backdrop-sepia":[``,K,X,Y]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":x()}],"border-spacing-x":[{"border-spacing-x":x()}],"border-spacing-y":[{"border-spacing-y":x()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,X,Y]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[K,`initial`,X,Y]}],ease:[{ease:[`linear`,`initial`,_,X,Y]}],delay:[{delay:[K,X,Y]}],animate:[{animate:[`none`,v,X,Y]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,X,Y]}],"perspective-origin":[{"perspective-origin":ee()}],rotate:[{rotate:fe()}],"rotate-x":[{"rotate-x":fe()}],"rotate-y":[{"rotate-y":fe()}],"rotate-z":[{"rotate-z":fe()}],scale:[{scale:pe()}],"scale-x":[{"scale-x":pe()}],"scale-y":[{"scale-y":pe()}],"scale-z":[{"scale-z":pe()}],"scale-3d":[`scale-3d`],skew:[{skew:me()}],"skew-x":[{"skew-x":me()}],"skew-y":[{"skew-y":me()}],transform:[{transform:[X,Y,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:ee()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:F()}],"translate-x":[{"translate-x":F()}],"translate-y":[{"translate-y":F()}],"translate-z":[{"translate-z":F()}],"translate-none":[`translate-none`],zoom:[{zoom:[q,X,Y]}],accent:[{accent:O()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,X,Y]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":O()}],"scrollbar-track-color":[{"scrollbar-track":O()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":x()}],"scroll-mx":[{"scroll-mx":x()}],"scroll-my":[{"scroll-my":x()}],"scroll-ms":[{"scroll-ms":x()}],"scroll-me":[{"scroll-me":x()}],"scroll-mbs":[{"scroll-mbs":x()}],"scroll-mbe":[{"scroll-mbe":x()}],"scroll-mt":[{"scroll-mt":x()}],"scroll-mr":[{"scroll-mr":x()}],"scroll-mb":[{"scroll-mb":x()}],"scroll-ml":[{"scroll-ml":x()}],"scroll-p":[{"scroll-p":x()}],"scroll-px":[{"scroll-px":x()}],"scroll-py":[{"scroll-py":x()}],"scroll-ps":[{"scroll-ps":x()}],"scroll-pe":[{"scroll-pe":x()}],"scroll-pbs":[{"scroll-pbs":x()}],"scroll-pbe":[{"scroll-pbe":x()}],"scroll-pt":[{"scroll-pt":x()}],"scroll-pr":[{"scroll-pr":x()}],"scroll-pb":[{"scroll-pb":x()}],"scroll-pl":[{"scroll-pl":x()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,X,Y]}],fill:[{fill:[`none`,...O()]}],"stroke-w":[{stroke:[K,wa,_a,va]}],stroke:[{stroke:[`none`,...O()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function Z(...e){return Va(bi(e))}var Ha=Object.defineProperty,Ua=(e,t)=>Ha(e,`name`,{value:t,configurable:!0});function Wa(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}Ua(Wa,`setRef`);function Ga(...e){return t=>{let n=!1,r=e.map(e=>{let r=Wa(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Wa(e[t],null)}}}}Ua(Ga,`composeRefs`);function Ka(...e){return F.useCallback(Ga(...e),e)}Ua(Ka,`useComposedRefs`);var qa=Object.defineProperty,Q=(e,t)=>qa(e,`name`,{value:t,configurable:!0});function Ja(e){let t=F.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];ro(r)&&typeof so==`function`&&(r=so(r._payload)),F.Children.forEach(r,e=>{if(to(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;ro(n)&&typeof so==`function`&&(n=so(n._payload)),a=Qa(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=F.cloneElement(a,void 0,s):!o&&F.Children.count(r)===1&&F.isValidElement(r)&&(a=r);let c=a?eo(a):void 0,l=Ka(n,c);if(!a){if(r||r===0)throw Error(o?oo(e):ao(e));return r}let u=$a(i,a.props??{});return a.type!==F.Fragment&&(u.ref=n?l:c),F.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}Q(Ja,`createSlot`);var Ya=Ja(`Slot`),Xa=Symbol.for(`radix.slottable`);function Za(e){let t=Q(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=Xa,t}Q(Za,`createSlottable`);var Qa=Q((e,t)=>{if(`child`in e.props){let t=e.props.child;return F.isValidElement(t)?F.cloneElement(t,void 0,e.props.children(t.props.children)):null}return F.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function $a(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}Q($a,`mergeProps`);function eo(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Q(eo,`getElementRef`);function to(e){return F.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Xa}Q(to,`isSlottable`);var no=Symbol.for(`react.lazy`);function ro(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===no&&`_payload`in e&&io(e._payload)}Q(ro,`isLazyComponent`);function io(e){return typeof e==`object`&&!!e&&`then`in e}Q(io,`isPromiseLike`);var ao=Q(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),oo=Q(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),so=F.use,co=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,lo=bi,uo=(e,t)=>n=>{if(t?.variants==null)return lo(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=co(t)||co(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return lo(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},fo=uo(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-normal tracking-tightish cursor-pointer transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,{variants:{variant:{default:`bg-primary text-primary-foreground shadow-ds-sm hover:bg-primary/90 hover:shadow-ds-md`,destructive:`bg-destructive text-destructive-foreground shadow-ds-sm hover:bg-destructive/90 hover:shadow-ds-md`,success:`bg-success text-success-foreground shadow-ds-sm hover:bg-success/90 hover:shadow-ds-md`,outline:`border border-border/60 bg-background shadow-ds-sm hover:bg-muted/60 hover:shadow-ds-md`,secondary:`bg-secondary/70 text-secondary-foreground hover:bg-secondary hover:shadow-ds-sm`,ghost:`hover:bg-muted/60 hover:text-accent-foreground`,link:`text-primary underline-offset-4 hover:underline active:scale-100`},size:{sm:`h-9 rounded-full px-3.5 text-xs sm:h-8`,default:`h-10 px-4.5 py-2 sm:h-9`,lg:`h-11 rounded-full px-7 sm:h-10 sm:px-8`,icon:`h-10 w-10 rounded-full sm:h-9 sm:w-9`,"icon-touch":`size-11 rounded-full`},fullWidth:{true:`w-full`,false:``}},defaultVariants:{variant:`default`,size:`default`,fullWidth:!1}}),$=F.forwardRef(({className:e,variant:t,size:n,fullWidth:r,asChild:i=!1,loading:a=!1,disabled:o,children:s,...c},l)=>i?(0,I.jsx)(Ya,{className:Z(fo({variant:t,size:n,fullWidth:r,className:e})),ref:l,"aria-busy":a||void 0,"aria-disabled":o||a||void 0,...c,children:s}):(0,I.jsxs)(`button`,{className:Z(fo({variant:t,size:n,fullWidth:r,className:e})),ref:l,disabled:o||a,"aria-busy":a||void 0,...c,children:[a?(0,I.jsx)(xt,{className:`animate-spin`,"aria-hidden":`true`}):null,s]}));$.displayName=`Button`;var po=Object.freeze({assortment:`Assortment`,forecasting:`Forecasting`,pricing:`Pricing`,relevance:`Relevance`,targeting:`Targeting`}),mo={essential:!0,analytics:!1,marketing:!1,preferences:!1},ho={essential:!0,analytics:!0,marketing:!0,preferences:!0},go=`i6ds_cookie_consent`,_o=`2.0`,vo=31536e6,yo={status:`unknown`,consent:mo,bannerOpen:!1,preferencesOpen:!1},bo=yo,xo=new Set;function So(e){bo=e;for(let e of xo)e()}function Co(e){return xo.add(e),()=>xo.delete(e)}function wo(){return bo}function To(){return yo}function Eo(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.essential===!0&&typeof t.analytics==`boolean`&&typeof t.marketing==`boolean`&&typeof t.preferences==`boolean`}function Do(){if(typeof window>`u`||typeof localStorage>`u`)return null;try{let e=localStorage.getItem(go);if(!e)return null;let t=JSON.parse(e),n=typeof t.savedAt==`number`&&t.savedAt<=Date.now()&&Date.now()-t.savedAt<=vo;return t.version!==_o||!n||!Eo(t.consent)?(localStorage.removeItem(go),null):t.consent}catch{return null}}function Oo(e){if(!(typeof window>`u`||typeof localStorage>`u`))try{let t={version:_o,savedAt:Date.now(),consent:e};localStorage.setItem(go,JSON.stringify(t))}catch{}}function ko(){if(typeof window>`u`||bo.status===`resolved`)return;let e=Do();So({status:`resolved`,consent:e??mo,bannerOpen:e===null,preferencesOpen:!1})}function Ao(e){Oo(e),So({status:`resolved`,consent:e,bannerOpen:!1,preferencesOpen:!1})}function jo(){Ao(ho)}function Mo(){Ao(mo)}function No(e){Ao({...e,essential:!0})}function Po(){So({status:`resolved`,consent:bo.status===`resolved`?bo.consent:Do()??mo,bannerOpen:!0,preferencesOpen:!0})}function Fo(e){So({...bo,preferencesOpen:e})}function Io(){if(typeof window<`u`&&typeof localStorage<`u`)try{localStorage.removeItem(go)}catch{}So({status:`resolved`,consent:mo,bannerOpen:!0,preferencesOpen:!1})}function Lo(){let e=(0,F.useSyncExternalStore)(Co,wo,To);return(0,F.useEffect)(()=>ko(),[]),{...e,acceptAll:jo,acceptEssential:Mo,updateConsent:No,openPreferences:Po,setPreferencesOpen:Fo,resetConsent:Io}}var Ro={privacy:`privacy`,ethics:`ethics`,cookies:`cookies.policy`,contract:`checkout.contract`},zo=(0,F.createContext)(null);function Bo(){let e=(0,F.useContext)(zo);if(!e)throw Error(`usePolicyDrawer must be used within PolicyDrawerProvider`);return e}function Vo(){return(0,F.useContext)(zo)}function Ho({kind:e,closePolicy:t}){let{t:n}=r(),{openPreferences:a}=Lo(),c=(0,F.useRef)(null),l=Ro[e];return(0,F.useEffect)(()=>{let e=c.current;if(e)return e.showModal(),()=>{e.open&&e.close()}},[]),(0,I.jsx)(`dialog`,{ref:c,"aria-labelledby":`policy-drawer-title`,onCancel:e=>{e.preventDefault(),t()},className:`fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[92%] max-w-xl overflow-hidden border-l border-border/60 bg-background p-0 text-foreground shadow-ds-lg backdrop:bg-foreground/35 sm:w-[min(40rem,80%)]`,children:(0,I.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,I.jsxs)(`header`,{className:`flex shrink-0 items-center justify-between gap-4 border-b border-border/60 bg-background/95 p-5 backdrop-blur-sm sm:p-6`,children:[(0,I.jsx)(`h2`,{id:`policy-drawer-title`,className:`font-display text-xl font-semibold`,children:n(`${l}.title`)}),(0,I.jsx)($,{type:`button`,size:`icon`,variant:`ghost`,"aria-label":n(`${l}.close`),onClick:t,children:(0,I.jsx)(Ct,{"aria-hidden":`true`})})]}),(0,I.jsx)(`div`,{className:`flex-1 overflow-y-auto p-5 sm:p-8`,children:e===`contract`?(0,I.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:n(`checkout.contract.soon`)}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`p`,{className:`mb-8 text-sm leading-relaxed text-muted-foreground`,children:n(`${l}.subtitle`)}),e===`privacy`?(0,I.jsx)(o,{}):e===`cookies`?(0,I.jsx)(s,{}):(0,I.jsx)(i,{}),e===`cookies`?(0,I.jsx)($,{type:`button`,className:`mt-8 rounded-full`,onClick:()=>{t(),a()},children:n(`cookies.footerLink`)}):null]})}),e===`contract`?null:(0,I.jsx)(`footer`,{className:`shrink-0 border-t border-border/60 bg-muted/30 p-4 text-center`,children:(0,I.jsx)(`p`,{className:`text-2xs uppercase text-muted-foreground`,children:n(e===`cookies`?`privacy.lastUpdated`:`${l}.lastUpdated`)})})]})})}function Uo({children:e}){let[t,n]=(0,F.useState)(null),r=(0,F.useCallback)(e=>n(e),[]),i=(0,F.useCallback)(()=>n(null),[]),a=(0,F.useMemo)(()=>({openPolicy:r,closePolicy:i}),[r,i]);return(0,I.jsxs)(zo.Provider,{value:a,children:[e,t?(0,I.jsx)(Ho,{kind:t,closePolicy:i}):null]})}var Wo=`modulepreload`,Go=function(e){return`/`+e},Ko={},qo=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Go(t,n),t=s(t),t in Ko)return;Ko[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Wo,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Jo={home:{top:`top`,socialProof:`clientes`,products:`produtos`,why:`por-que-infinity6`,howItWorks:`plataforma`,outcomes:`resultados`,enterprise:`enterprise`,plans:`planos`},relevance:{top:`top`,model:`modelo`,ingestion:`ingestao`,api:`integracao`,measure:`medicao`,insights:`insights`,learning:`aprendizado`,cta:`relevance-cta`},assortment:{top:`top`,order:`pedido-inteligente`,newItems:`itens-novos`,target:`meta-no-pedido`,levels:`seus-niveis`,results:`resultado-medido`,cycle:`dados-e-ciclo`,cta:`assortment-cta`},forecasting:{top:`top`,monthly:`quanto-vender`,market:`mercado`,levels:`do-total-ao-sku`,confidence:`onde-revisar`,explain:`por-que-esta-previsao`,target:`meta-alcancavel`,accuracy:`acuracia`,cta:`forecasting-cta`},pricing:{top:`top`,margin:`price-to-margin`,turnover:`price-to-turnover`,conversion:`price-to-conversion`,tenders:`licitacoes`,factors:`fatores-do-preco`,rules:`dados-e-regras`,cta:`pricing-cta`},targeting:{top:`top`,audiences:`publicos`,channel:`canal-e-momento`,reach:`alcance`,behavior:`comportamento`,result:`resultado`,data:`dados-e-conexoes`,cta:`targeting-cta`}},Yo={url:`/media/assets-v1/2155c8df-68c8-466a-9de1-135c21f61443/footer-infinity6-symbol.png`},Xo={url:`/media/assets-v1/f4f29a40-6f3a-479d-a0ad-01ce044ab8ba/footer-infinity6-symbol-light.png`},Zo={url:`/media/assets-v1/2987e06e-6281-4ae5-99c0-b3146259c3e6/footer-ecosystem-decision-suite.png`},Qo={url:`/media/assets-v1/4c41aad2-5c7e-432b-a452-89395b2531e2/footer-ecosystem-decision-suite-light.png`},$o={url:`/media/assets-v1/f8fd88e0-3001-4fa8-9b5d-c45ae670a4ec/footer-ecosystem-i6creators.png`},es={url:`/media/assets-v1/19b6a1cd-6824-4f07-a7eb-20bbcd99b09d/footer-ecosystem-i6creators-light.png`},ts={url:`/media/assets-v1/61a4a1fd-b9b3-4d25-a99f-e09986b74a5c/footer-ecosystem-i6creation-stack.png`},ns={url:`/media/assets-v1/ad0ab876-ae04-4bea-a8a1-98a497915014/footer-ecosystem-i6creation-stack-light.png`},rs=`decida@infinity6.ai`;function is(e){return[{titleKey:`footer.column.quickLinks`,links:[{labelKey:`footer.link.howItWorks`,target:{kind:`route`,to:`/$lang`,hash:Jo.home.howItWorks}},{labelKey:`footer.link.enterprise`,target:{kind:`route`,to:`/$lang`,hash:Jo.home.enterprise}},{labelKey:`footer.link.pricing`,target:{kind:`route`,to:`/$lang/pricing`}},{labelKey:`footer.link.cases`,target:{kind:`route`,to:`/$lang/success-stories`}},{labelKey:`blog.nav.blog`,target:{kind:`route`,to:`/$lang/i6-blog`}},{labelKey:`blog.nav.media`,target:{kind:`route`,to:`/$lang/i6-midia`}}]},{titleKey:`footer.column.products`,links:[{labelKey:`footer.link.assortment`,target:{kind:`route`,to:`/$lang/products/assortment`}},{labelKey:`footer.link.forecasting`,target:{kind:`route`,to:`/$lang/products/forecasting`}},{labelKey:`footer.link.productPricing`,target:{kind:`route`,to:`/$lang/products/pricing`}},{labelKey:`footer.link.discovery`,target:{kind:`route`,to:`/$lang/products/relevance`}},{labelKey:`footer.link.targeting`,target:{kind:`route`,to:`/$lang/products/targeting`}}]},{titleKey:`footer.column.contact`,links:[{labelKey:`footer.link.contactUs`,target:{kind:`route`,to:`/$lang/demo`,search:{tipo:`contato`}}},{labelKey:`footer.link.demo`,target:{kind:`route`,to:`/$lang/demo`}},{labelKey:`footer.link.platformAccess`,target:{kind:`anchor`,href:e}},{label:rs,target:{kind:`anchor`,href:`mailto:${rs}`}}]}]}function as(e){return[{id:`decision`,brand:`i6 Decision Suite`,labelKey:`footer.ecosystem.decide`},{id:`creators`,brand:`i6Creators`,labelKey:`footer.ecosystem.connect`,href:`https://www.infinity6.ai/${e}/i6creators`},{id:`creationStack`,brand:`i6Creation Stack`,labelKey:`footer.ecosystem.build`,href:`https://www.infinity6.ai/${e}/i6creation-stack`}]}var os=[{id:`linkedin`,label:`LinkedIn`,href:`https://www.linkedin.com/company/infinity6`},{id:`youtube`,label:`YouTube`,href:`https://www.youtube.com/@infinity6ai`},{id:`instagram`,label:`Instagram`},{id:`tiktok`,label:`TikTok`}];function ss(e){return e.kind===`route`?e.to===`/$lang/pricing`?{cta:{name:`see_plans`,location:`footer`}}:e.to===`/$lang/demo`?e.search?.tipo===`contato`?{cta:{name:`contact`,location:`footer`}}:{cta:{name:`book_demo`,location:`footer`}}:{}:{}}var cs={decision:{light:Zo.url,dark:Qo.url},creators:{light:$o.url,dark:es.url},creationStack:{light:ts.url,dark:ns.url}};function ls({size:e=16}){return(0,I.jsx)(`svg`,{viewBox:`0 0 24 24`,width:e,height:e,fill:`currentColor`,"aria-hidden":`true`,children:(0,I.jsx)(`path`,{d:`M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z`})})}var us={linkedin:(0,I.jsx)(bt,{size:16,"aria-hidden":`true`}),youtube:(0,I.jsx)(wt,{size:16,"aria-hidden":`true`}),instagram:(0,I.jsx)(yt,{size:16,"aria-hidden":`true`}),tiktok:(0,I.jsx)(ls,{size:16})};function ds({light:e,dark:t,alt:n,className:r}){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`img`,{src:e,alt:n,className:Z(r,`dark:hidden`),loading:`lazy`,draggable:!1}),(0,I.jsx)(`img`,{src:t,alt:n,className:Z(r,`hidden dark:block`),loading:`lazy`,draggable:!1})]})}function fs({label:e}){return(0,I.jsxs)(`div`,{className:`relative mb-6 border-t border-border pt-4`,children:[(0,I.jsx)(`span`,{"aria-hidden":`true`,className:`absolute -top-px left-0 h-0.5 w-6 bg-product-accent`}),(0,I.jsx)(`h3`,{className:`font-sans text-sm font-semibold tracking-[-0.011em] text-muted-foreground`,children:e})]})}var ps=`text-sm text-foreground/75 transition-colors hover:text-product-accent`,ms=`grid h-[34px] w-[34px] place-items-center border border-border text-foreground/65 transition-colors hover:border-product-accent hover:text-product-accent`,hs=`text-[12.5px] font-medium tracking-[-0.005em] text-foreground/60 transition-colors hover:text-product-accent`;function gs({signInHref:e,legal:t,className:n}){let{t:i,locale:a}=r(),{openPreferences:o}=Lo(),{openPolicy:s}=Bo(),c=is(e),l=as(Nn(a)),u=t??i(`footer.legal`,{year:String(new Date().getFullYear())}),d=i(`footer.column.social`);return(0,I.jsx)(`footer`,{className:Z(`border-t border-border bg-secondary/30 font-sans`,n),children:(0,I.jsxs)(`div`,{className:`mx-auto w-full max-w-[80rem] px-6 pb-8 pt-[22px] sm:px-8`,children:[(0,I.jsxs)(`div`,{className:`flex flex-col items-start gap-4 pb-[14px] md:flex-row md:items-center md:justify-between md:gap-4 md:pb-[18px]`,children:[(0,I.jsxs)(`div`,{className:`flex flex-col items-start gap-1.5`,children:[(0,I.jsx)(ds,{light:Yo.url,dark:Xo.url,alt:`infinity6`,className:`h-[26px] w-auto shrink-0 md:h-7`}),(0,I.jsxs)(`p`,{className:`font-display text-[15px] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground`,children:[(0,I.jsx)(`span`,{className:`text-product-accent`,children:i(`footer.slogan.lead`)}),` `,i(`footer.slogan.rest`)]})]}),(0,I.jsxs)(`nav`,{"aria-label":i(`footer.ecosystem.title`),className:`flex w-full flex-wrap items-center gap-3.5 md:w-auto md:flex-nowrap md:gap-[22px]`,children:[(0,I.jsx)(`span`,{className:`w-full border-l-2 border-product-accent pl-2.5 font-display text-[13px] font-semibold leading-[1.15] tracking-[-0.015em] text-foreground md:w-auto md:border-l-0 md:border-r-2 md:py-2 md:pl-0 md:pr-[22px]`,children:i(`footer.ecosystem.title`)}),(0,I.jsx)(`div`,{className:`grid w-full grid-cols-3 gap-2.5 md:flex md:w-auto md:gap-[30px]`,children:l.map(e=>(0,I.jsxs)(`div`,{className:`flex flex-col items-start gap-1.5`,children:[(0,I.jsx)(ds,{light:cs[e.id].light,dark:cs[e.id].dark,alt:e.brand,className:`h-3 w-auto md:h-4 xl:h-[17px]`}),e.href?(0,I.jsxs)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,className:`group inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-[-0.005em] text-muted-foreground transition-colors duration-[250ms] ease-out hover:text-product-accent md:text-[11.5px]`,children:[(0,I.jsx)(`span`,{"aria-hidden":`true`,className:`h-[5px] w-[5px] rounded-full bg-product-accent transition-transform duration-[250ms] ease-out group-hover:scale-[1.3]`}),i(e.labelKey),(0,I.jsxs)(`span`,{className:`sr-only`,children:[` `,e.brand,`, `,i(`footer.ecosystem.newTab`)]}),(0,I.jsx)(_t,{size:12,"aria-hidden":`true`})]}):(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-[-0.005em] text-muted-foreground md:text-[11.5px]`,children:[(0,I.jsx)(`span`,{"aria-hidden":`true`,className:`h-[5px] w-[5px] rounded-full bg-product-accent`}),i(e.labelKey)]})]},e.id))})]})]}),(0,I.jsxs)(`div`,{className:`grid grid-cols-2 gap-x-5 gap-y-10 pb-10 pt-[18px] md:grid-cols-4 md:gap-x-9 md:pb-9`,children:[c.map(e=>(0,I.jsxs)(`nav`,{"aria-label":i(e.titleKey),className:`min-w-0`,children:[(0,I.jsx)(fs,{label:i(e.titleKey)}),(0,I.jsx)(`ul`,{className:`flex flex-col gap-4`,children:e.links.map(e=>{let t=e.label??i(e.labelKey??``);return(0,I.jsx)(`li`,{children:(0,I.jsx)(U,{target:e.target,...ss(e.target),className:ps,children:t})},e.labelKey??e.label)})})]},e.titleKey)),(0,I.jsxs)(`div`,{className:`col-span-2 md:col-span-1`,children:[(0,I.jsx)(fs,{label:d}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:os.map(e=>e.href?(0,I.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,"aria-label":e.label,className:ms,children:us[e.id]},e.id):(0,I.jsx)(`span`,{className:ms,"aria-hidden":`true`,children:us[e.id]},e.id))})]})]}),(0,I.jsxs)(`div`,{className:`flex flex-col-reverse gap-5 border-t border-border pt-7 md:flex-row md:items-center md:justify-between`,children:[(0,I.jsx)(`p`,{className:`text-xs text-foreground/60`,children:u}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-x-6 gap-y-3`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>s(`privacy`),className:hs,children:i(`footer.privacy`)}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>s(`ethics`),className:hs,children:i(`footer.ethics`)}),(0,I.jsx)(`button`,{type:`button`,onClick:o,className:hs,children:i(`cookies.footerLink`)})]})]})]})})}var _s={wordmark:{url:`/media/assets-v1/7f92259e-9269-4f64-8902-8fd45649e444/i6-decision-suite-logo-v7.png`}.url,suite:{url:`/media/assets-v1/37ad194f-2c02-4fdd-bf2e-be240a9959c0/i6-decision-suite-logo-v8.png`}.url},vs={wordmark:{md:`h-7 sm:h-8`,lg:`h-[3.04rem] sm:h-[3.312rem] xl:h-[3.6rem]`},suite:{md:`h-[1.725rem] sm:h-[2.0125rem]`,lg:`h-[2.35rem] sm:h-[2.558rem] xl:h-[2.766rem]`}};function ys({alt:e,size:t=`md`,variant:n=`wordmark`,className:r}){return(0,I.jsx)(`img`,{src:_s[n],alt:e,className:Z(`w-auto flex-shrink-0 select-none`,vs[n][t],r),draggable:!1})}var bs=[{code:`pt`,label:`Português`},{code:`en`,label:`English`},{code:`es`,label:`Español`}];function xs({variant:e=`inline`,className:t}){let n=lt({select:e=>e.location.pathname}),r=Nn(Mn(n)),i=ze();function a(e){e!==r&&i({to:Pn(n,e)})}let o=e===`pills`;return(0,I.jsxs)(`div`,{className:Z(`items-center`,o?`flex`:`gap-2.5`,t),children:[o?null:(0,I.jsx)(`span`,{"aria-hidden":!0,className:`block h-7 w-px bg-border`}),(0,I.jsx)(`div`,{role:`group`,"aria-label":`Idioma / Language`,className:Z(`flex items-center`,o?`gap-2`:`gap-1`),children:bs.map(({code:e,label:t})=>{let n=e===r;return(0,I.jsx)(`button`,{type:`button`,lang:e,"aria-label":t,"aria-pressed":n,onClick:()=>a(e),className:Z(`text-xs uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`,o?Z(`rounded-full border px-4 py-1.5 font-semibold`,n?`border-primary bg-primary text-primary-foreground`:`border-border text-foreground/60 hover:text-foreground`):Z(`rounded-full px-1.5 py-1`,n?`font-bold text-primary`:`font-semibold text-foreground/45 hover:text-foreground`)),children:e},e)})})]})}var Ss={url:`/media/assets-v1/935e0b1e-3608-468e-aff8-15cf4e427082/infinity6-horizontal-transparent.png`};function Cs({className:e,variant:t=`pill`}){let{t:n}=r();return t===`under-logo`?(0,I.jsxs)(`a`,{href:`https://www.infinity6.ai`,target:`_blank`,rel:`noopener noreferrer`,className:Z(`inline-flex items-center gap-1 rounded-full text-[0.5625rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`,e),children:[(0,I.jsx)(`span`,{children:n(`nav.poweredBy`)}),(0,I.jsx)(`img`,{src:Ss.url,alt:`infinity6`,className:`h-2.5 w-auto max-w-[3.6rem] object-contain opacity-70`,draggable:!1})]}):(0,I.jsxs)(`a`,{href:`https://www.infinity6.ai`,target:`_blank`,rel:`noopener noreferrer`,className:Z(`inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 backdrop-blur-sm transition-all hover:border-border hover:shadow-ds-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,e),children:[(0,I.jsx)(`span`,{className:`text-[11px] font-medium uppercase tracking-wide text-muted-foreground`,children:n(`nav.poweredBy`)}),(0,I.jsx)(`img`,{src:Ss.url,alt:`infinity6`,className:`h-[0.85rem] w-auto max-w-[5.1rem] object-contain`,draggable:!1})]})}function ws(){let{t:e,locale:t}=r();return{lang:Nn(t),entries:[{key:`blog`,to:`/$lang/i6-blog`,label:e(`blog.nav.blog`),tagline:e(`blog.nav.blogTagline`)},{key:`media`,to:`/$lang/i6-midia`,label:e(`blog.nav.media`),tagline:e(`blog.nav.mediaTagline`)}]}}function Ts({label:e}){let[t,n]=F.useState(!1),{lang:r,entries:i}=ws(),a=F.useRef(null),o=()=>{a.current&&clearTimeout(a.current),a.current=null};return F.useEffect(()=>o,[]),(0,I.jsxs)(`div`,{className:`relative`,onMouseEnter:()=>{o(),n(!0)},onMouseLeave:()=>{o(),a.current=setTimeout(()=>n(!1),120)},onFocus:()=>n(!0),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||n(!1)},children:[(0,I.jsxs)(`button`,{type:`button`,"aria-expanded":t,onClick:()=>n(e=>!e),className:`inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`,children:[e,(0,I.jsx)(vt,{"aria-hidden":!0,className:Z(`size-3.5 transition-transform duration-200`,t&&`rotate-180`)})]}),t?(0,I.jsx)(`div`,{className:`absolute left-0 top-full z-50 pt-2`,children:(0,I.jsx)(`ul`,{className:`w-80 rounded-2xl border border-border/60 bg-popover p-2 shadow-ds-lg`,children:i.map(e=>(0,I.jsx)(`li`,{children:(0,I.jsxs)(L,{to:e.to,params:{lang:r},onClick:()=>n(!1),className:`block rounded-xl px-3 py-3 transition-colors hover:bg-muted/60`,children:[(0,I.jsx)(`span`,{className:`block text-sm font-medium text-foreground`,children:e.label}),(0,I.jsx)(`span`,{className:`mt-1 block text-xs leading-relaxed text-muted-foreground`,children:e.tagline})]})},e.key))})}):null]})}function Es({onNavigate:e}){let{lang:t,entries:n}=ws();return(0,I.jsx)(`ul`,{className:`flex flex-col gap-1 pl-3`,children:n.map(n=>(0,I.jsx)(`li`,{children:(0,I.jsx)(L,{to:n.to,params:{lang:t},onClick:e,className:`flex h-11 items-center rounded-xl px-3 text-sm text-foreground transition-colors hover:bg-muted/60`,children:n.label})},n.key))})}var Ds=[{id:`assortment`,labelKey:`products.assortment`,taglineKey:`products.assortment.tagline`,imageUrl:{url:`/media/assets-v1/6fc68dd2-3d55-4670-af43-f6a9f3b8d5ad/mega-menu-assortment-1x.webp`}.url,imageUrl2x:{url:`/media/assets-v1/0c271cca-ac5d-4d90-888b-0217992a245e/mega-menu-assortment-2x.webp`}.url,href:`/$lang/products/assortment`},{id:`forecasting`,labelKey:`products.forecasting`,taglineKey:`products.forecasting.tagline`,imageUrl:{url:`/media/assets-v1/ac5dd156-1788-41d0-8449-8e00ca4076a1/mega-menu-forecasting-1x.webp`}.url,imageUrl2x:{url:`/media/assets-v1/2414b104-142b-4a14-b593-2f9b8b4fec7f/mega-menu-forecasting-2x.webp`}.url,href:`/$lang/products/forecasting`},{id:`pricing`,labelKey:`products.pricing`,taglineKey:`products.pricing.tagline`,imageUrl:{url:`/media/assets-v1/f4f17a06-c1d2-4196-a197-8397cb9351ae/mega-menu-pricing-1x.webp`}.url,imageUrl2x:{url:`/media/assets-v1/1e176a62-c972-4297-9665-8fe4098286c7/mega-menu-pricing-2x.webp`}.url,href:`/$lang/products/pricing`},{id:`relevance`,labelKey:`products.relevance.name`,taglineKey:`products.relevance.tagline`,imageUrl:{url:`/media/assets-v1/b1079620-651a-4ec1-ac37-51e9347f683c/mega-menu-relevance-1x.webp`}.url,imageUrl2x:{url:`/media/assets-v1/9ada659b-dda8-4304-b173-0ab15fe4245a/mega-menu-relevance-2x.webp`}.url,href:`/$lang/products/relevance`},{id:`targeting`,labelKey:`products.targeting`,taglineKey:`products.targeting.tagline`,imageUrl:{url:`/media/assets-v1/27d0405d-f2f7-46e4-b18b-e345d2afd21a/mega-menu-targeting-1x.webp`}.url,imageUrl2x:{url:`/media/assets-v1/ce4ec1b5-abf5-4143-8a0a-cbd058d1c3cc/mega-menu-targeting-2x.webp`}.url,href:`/$lang/products/targeting`}],Os=Ds.filter(e=>Vn(e.id)),ks=428.7,As=131.9,js=Os.length===Ds.length,Ms=120,Ns=160;function Ps(){return lt({select:e=>Nn(Mn(e.location.pathname))})}function Fs({label:e,className:t}){let{t:n}=r(),[i,a]=F.useState(!1),[o,s]=F.useState(0),c=F.useRef(null),l=F.useRef(null),u=F.useRef(void 0),d=F.useRef(void 0),f=F.useRef(null),p=F.useRef(null),[m,h]=F.useState(0);F.useEffect(()=>()=>{clearTimeout(u.current),clearTimeout(d.current)},[]),F.useLayoutEffect(()=>{if(js||!i)return;function e(){let e=f.current,t=p.current,n=l.current;if(!e||!t||!n)return;let r=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.getComputedStyle(e),o=parseFloat(a.paddingLeft)||0,s=parseFloat(a.paddingRight)||0,c=r.width-o-s,u=t.offsetWidth,d=i.left+i.width/2-(r.left+o)-u/2,m=Math.max(0,c-u);h(Math.min(Math.max(d,0),m))}return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[i]);function g(){clearTimeout(u.current),clearTimeout(d.current),a(!0)}function _(){clearTimeout(d.current),clearTimeout(u.current),u.current=setTimeout(()=>a(!0),Ms)}function v(){clearTimeout(u.current),clearTimeout(d.current),d.current=setTimeout(()=>{a(!1),s(0)},Ns)}function y(e){e.key===`Escape`&&i&&(e.preventDefault(),clearTimeout(u.current),clearTimeout(d.current),a(!1),s(0),l.current?.focus()),(e.key===`ArrowDown`||e.key===`Enter`)&&!i&&(e.preventDefault(),g())}return(0,I.jsxs)(`div`,{ref:c,className:Z(`contents`,t),onMouseEnter:_,onMouseLeave:v,onFocus:g,onBlur:e=>{c.current?.contains(e.relatedTarget)||v()},onKeyDown:y,children:[(0,I.jsxs)(`button`,{ref:l,type:`button`,"aria-expanded":i,"aria-haspopup":`true`,className:Z(`inline-flex h-9 items-center gap-1 rounded-full px-3.5 text-sm transition-colors duration-200`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`,i?`bg-muted/60 text-foreground`:`text-muted-foreground hover:bg-muted/60 hover:text-foreground`),children:[e,(0,I.jsx)(vt,{"aria-hidden":!0,className:Z(`size-3.5 transition-transform duration-200`,i&&`rotate-180`)})]}),i?(0,I.jsx)(`div`,{ref:f,className:`absolute inset-x-0 top-full z-50 px-5 pt-2 sm:px-8`,children:(0,I.jsx)(`div`,{ref:p,role:`menu`,"aria-label":e,"data-products-mega-menu-panel":!0,style:js?void 0:{marginLeft:m},className:Z(`flex min-h-80 w-fit gap-2 rounded-2xl border border-border/60 bg-background p-3 shadow-ds-lg animate-in fade-in-0 slide-in-from-top-1 duration-200 motion-reduce:animate-none`,js?`mx-auto max-w-[72rem]`:`max-w-[min(72rem,calc(100vw-2.5rem))]`),children:Os.map((e,t)=>(0,I.jsx)(Ls,{entry:e,index:t,expanded:t===o,onHover:()=>s(t),label:n(e.labelKey),tagline:n(e.taglineKey),unavailableLabel:n(`products.megamenu.comingSoon`)},e.labelKey))})}):null]})}function Is(e){e&&li({contentType:`mega_menu`,itemId:_i({kind:`route`,to:e})})}function Ls({entry:e,index:t,expanded:n,onHover:r,label:i,tagline:a,unavailableLabel:o}){let s=Ps(),c=String(t+1).padStart(2,`0`),l=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{"aria-hidden":!n,className:Z(`flex h-full flex-col transition-opacity duration-300 motion-reduce:transition-none`,n?`opacity-100 delay-100`:`pointer-events-none absolute inset-0 opacity-0`),children:[(0,I.jsx)(`div`,{className:`relative h-32 shrink-0 overflow-hidden rounded-xl bg-muted`,children:(0,I.jsx)(`img`,{src:e.imageUrl,srcSet:`${e.imageUrl} 1x, ${e.imageUrl2x} 2x`,alt:``,"data-mega-menu-image":e.labelKey,className:`h-full w-full object-cover`})}),(0,I.jsx)(`p`,{className:`mt-3 text-sm font-semibold tracking-tightish text-foreground`,children:i}),(0,I.jsx)(`p`,{"data-mega-menu-tagline":!0,className:`mt-1 text-xs leading-relaxed text-muted-foreground`,children:a})]}),(0,I.jsxs)(`div`,{"aria-hidden":n,className:Z(`flex h-full flex-col justify-between transition-opacity duration-200 motion-reduce:transition-none`,n?`pointer-events-none absolute inset-0 opacity-0`:`opacity-100`),children:[(0,I.jsx)(`span`,{className:`text-xs font-medium tabular-nums text-muted-foreground`,children:c}),(0,I.jsx)(`span`,{className:`text-sm font-medium leading-snug tracking-tightish text-foreground`,children:i})]})]}),u=Z(`relative h-80 min-w-0 shrink overflow-hidden rounded-2xl border p-4 text-left`,`transition-[width,background-color,border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none`,n?`border-border/60 bg-card shadow-ds-sm`:`border-border/60 bg-card/60`,e.href?`hover:border-border/60`:`cursor-default`),d={width:n?ks:As};return(0,I.jsx)(`div`,{onMouseEnter:r,className:`contents`,children:e.href?(0,I.jsx)(L,{to:e.href,params:{lang:s},role:`menuitem`,onFocus:r,onClick:()=>Is(e.href),className:Z(u,`block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`),"data-mega-menu-item":c,"data-product-key":e.labelKey,"data-expanded":n?`true`:`false`,style:d,children:l}):(0,I.jsx)(`span`,{role:`menuitem`,"aria-disabled":`true`,title:o,className:Z(u,`block opacity-60`,!n&&`hover:bg-card`),"data-mega-menu-item":c,"data-product-key":e.labelKey,"data-expanded":n?`true`:`false`,style:d,children:l})})}function Rs({onNavigate:e}){let{t}=r(),n=Ps();return(0,I.jsx)(`ul`,{className:`flex flex-col gap-1 pl-3`,children:Os.map(r=>{let i=t(r.labelKey);return r.href?(0,I.jsx)(`li`,{children:(0,I.jsx)(L,{to:r.href,params:{lang:n},onClick:()=>{Is(r.href),e?.()},className:`flex h-11 items-center rounded-xl px-3 text-sm text-foreground transition-colors hover:bg-muted/60`,children:i})},r.labelKey):(0,I.jsx)(`li`,{children:(0,I.jsxs)(`span`,{"aria-disabled":`true`,className:`flex h-11 cursor-default items-center justify-between rounded-xl px-3 text-sm text-muted-foreground`,children:[i,(0,I.jsx)(`span`,{className:`text-xs`,children:t(`products.megamenu.comingSoon`)})]})},r.labelKey)})})}function zs({navItems:e,signInHref:t,signInLabel:n,className:i}){let[a,o]=F.useState(!1),{t:s}=r(),c=n??s(`nav.signIn`);return(0,I.jsxs)(`header`,{className:Z(`sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md`,i),children:[(0,I.jsxs)(`div`,{className:`mx-auto flex h-18 w-full max-w-[80rem] items-center gap-6 px-5 sm:px-8`,children:[(0,I.jsxs)(`div`,{className:`flex shrink-0 flex-col items-end`,children:[(0,I.jsxs)(U,{target:{kind:`route`,to:`/$lang`},className:`flex shrink-0 items-center rounded-full`,children:[(0,I.jsx)(`span`,{className:`sr-only`,children:s(`nav.home`)}),(0,I.jsx)(ys,{alt:``,variant:`suite`,size:`lg`})]}),(0,I.jsx)(Cs,{variant:`under-logo`,className:`-mt-px -translate-x-[9.5px] xl:-translate-x-[10.5px]`})]}),(0,I.jsx)(`nav`,{"aria-label":s(`nav.main`),className:`hidden min-w-0 flex-1 lg:block`,children:(0,I.jsx)(`ul`,{className:`flex items-center gap-1`,children:e.map(e=>(0,I.jsx)(`li`,{children:e.target.kind===`products-menu`?(0,I.jsx)(Fs,{label:s(e.labelKey)}):e.target.kind===`intelligence-menu`?(0,I.jsx)(Ts,{label:s(e.labelKey)}):e.target.kind===`static`?(0,I.jsx)(`span`,{"aria-disabled":`true`,className:`inline-flex h-9 cursor-default items-center rounded-full px-3.5 text-sm text-muted-foreground`,children:s(e.labelKey)}):(0,I.jsx)(U,{target:e.target,className:`inline-flex h-9 items-center rounded-full px-3.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`,children:s(e.labelKey)})},e.labelKey))})}),(0,I.jsxs)(`div`,{className:`ml-auto flex shrink-0 items-center gap-2`,children:[(0,I.jsx)($,{asChild:!0,size:`sm`,className:`hidden sm:inline-flex`,children:(0,I.jsx)(U,{target:{kind:`route`,to:`/$lang/pricing`},cta:{name:`start_now`,location:`header`},children:s(`nav.startNow`)})}),(0,I.jsx)($,{asChild:!0,variant:`outline`,size:`sm`,className:`hidden sm:inline-flex`,children:(0,I.jsx)(U,{target:{kind:`route`,to:`/$lang/demo`},cta:{name:`book_demo`,location:`header`},children:s(`nav.demo`)})}),(0,I.jsx)($,{asChild:!0,variant:`outline`,size:`sm`,className:`hidden sm:inline-flex`,children:(0,I.jsx)(`a`,{href:t,children:c})}),(0,I.jsx)(xs,{className:`ml-1.5 hidden sm:flex`}),(0,I.jsx)($,{variant:`ghost`,size:`icon`,className:`lg:hidden`,"aria-label":s(a?`nav.closeMenu`:`nav.openMenu`),"aria-expanded":a,"aria-controls":`public-mobile-nav`,onClick:()=>o(e=>!e),children:a?(0,I.jsx)(Ct,{"aria-hidden":!0}):(0,I.jsx)(St,{"aria-hidden":!0})})]})]}),a?(0,I.jsx)(`nav`,{id:`public-mobile-nav`,"aria-label":s(`nav.mainMobile`),className:`border-t border-border/60 bg-background lg:hidden`,children:(0,I.jsxs)(`ul`,{className:`mx-auto flex w-full max-w-[80rem] flex-col gap-1 px-5 py-4 sm:px-8`,children:[e.map(e=>(0,I.jsx)(`li`,{children:e.target.kind===`products-menu`?(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{className:`flex h-11 items-center px-3 text-sm font-medium text-foreground`,children:s(e.labelKey)}),(0,I.jsx)(Rs,{onNavigate:()=>o(!1)})]}):e.target.kind===`intelligence-menu`?(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{className:`flex h-11 items-center px-3 text-sm font-medium text-foreground`,children:s(e.labelKey)}),(0,I.jsx)(Es,{onNavigate:()=>o(!1)})]}):e.target.kind===`static`?(0,I.jsx)(`span`,{"aria-disabled":`true`,className:`flex h-11 cursor-default items-center rounded-xl px-3 text-sm text-muted-foreground`,children:s(e.labelKey)}):(0,I.jsx)(U,{target:e.target,onClick:()=>o(!1),className:`flex h-11 items-center rounded-xl px-3 text-sm text-foreground transition-colors hover:bg-muted/60`,children:s(e.labelKey)})},e.labelKey)),(0,I.jsx)(`li`,{className:`pt-2 sm:hidden`,children:(0,I.jsx)($,{asChild:!0,fullWidth:!0,children:(0,I.jsx)(U,{target:{kind:`route`,to:`/$lang/pricing`},cta:{name:`start_now`,location:`header_mobile`},onClick:()=>o(!1),children:s(`nav.startNow`)})})}),(0,I.jsx)(`li`,{className:`pt-2 sm:hidden`,children:(0,I.jsx)($,{asChild:!0,variant:`outline`,fullWidth:!0,children:(0,I.jsx)(U,{target:{kind:`route`,to:`/$lang/demo`},cta:{name:`book_demo`,location:`header_mobile`},onClick:()=>o(!1),children:s(`nav.demo`)})})}),(0,I.jsx)(`li`,{className:`pt-2 sm:hidden`,children:(0,I.jsx)($,{asChild:!0,variant:`outline`,fullWidth:!0,children:(0,I.jsx)(`a`,{href:t,children:c})})}),(0,I.jsx)(`li`,{className:`pt-2 sm:hidden`,children:(0,I.jsx)(xs,{variant:`pills`,className:`mt-2`})})]})}):null]})}var Bs={url:`/media/assets-v1/2519a64e-5043-4ae3-97bf-094e58f00df7/share-assortment.jpg`},Vs={url:`/media/assets-v1/e1709870-4d5c-4c0a-85a0-0f02dd34b7c8/share-brand.jpg`},Hs={url:`/media/assets-v1/8ced257b-fdcf-424f-8f02-354f01ed677e/share-forecasting.jpg`},Us={url:`/media/assets-v1/9536d54a-d64f-4368-bbb3-da60542fc156/share-pricing.jpg`},Ws={url:`/media/assets-v1/d78e1160-67e9-4808-960b-02b5f027e251/share-relevance.jpg`},Gs={url:`/media/assets-v1/17789eb1-cfb5-4a1b-97aa-245ddef05191/share-targeting.jpg`},Ks=`https://decision.infinity6.ai`;function qs(e){try{return new URL(e??``).host.toLowerCase()}catch{return``}}function Js(e){return(e??``).trim().toLowerCase()}var Ys=1200,Xs={assortment:Bs,brand:Vs,forecasting:Hs,pricing:Us,relevance:Ws,targeting:Gs};function Zs(e){return(e||`https://decision.infinity6.ai`).replace(/\/$/,``)}function Qs(e,t=`brand`){return`${Zs(e)}${Xs[t].url}`}function $s(e){return e===`brand`?`i6 Decision Suite`:`i6 ${po[e]} — i6 Decision Suite`}function ec(e,t=`brand`){let n=Qs(e,t);return[{name:`twitter:card`,content:`summary_large_image`},{property:`og:image`,content:n},{property:`og:image:width`,content:String(Ys)},{property:`og:image:height`,content:`630`},{property:`og:image:alt`,content:$s(t)},{name:`twitter:image`,content:n}]}export{un as $,Ce as $t,di as A,d as An,Mt as At,Dr as B,bt as Bt,Ka as C,m as Cn,zt as Ct,vi as D,ie as Dn,Ft as Dt,U as E,_ as En,It as Et,mi as F,Dt as Ft,Kn as G,ct as Gt,nr as H,_t as Ht,jr as I,Et as It,Vn as J,L as Jt,zn as K,st as Kt,Cr as L,Tt as Lt,ci as M,At as Mt,ri as N,kt as Nt,Gr as O,v as On,Pt as Ot,li as P,Ot as Pt,Nn as Q,we as Qt,Mr as R,Ct as Rt,Ja as S,h as Sn,Bt as St,hi as T,f as Tn,Lt as Tt,Wn as U,R as Ut,Pr as V,vt as Vt,Un as W,lt as Wt,In as X,Re as Xt,Ln as Y,ze as Yt,Mn as Z,je as Zt,wo as _,b as _n,Gt as _t,qs as a,de as an,vn as at,$ as b,p as bn,Ht as bt,Ss as c,M as cn,jn as ct,Yo as d,ce as dn,Zt as dt,Se as en,dn as et,Jo as f,k as fn,Xt as ft,Bo as g,T as gn,Kt as gt,Vo as h,g as hn,qt as ht,Ks as i,ge as in,_n as it,ai as j,l as jn,jt,Wr as k,u as kn,Nt as kt,gs as l,ue as ln,mn as lt,Uo as m,se as mn,Jt as mt,ec as n,be as nn,On as nt,Js as o,P as on,An as ot,qo as p,S as pn,Yt as pt,Rn as q,ot as qt,Qs as r,he as rn,gn as rt,zs as s,D as sn,pn as st,Zs as t,ye as tn,kn as tt,Xo as u,j as un,Qt as ut,Lo as v,E as vn,Wt as vt,Z as w,ae as wn,Rt as wt,uo as x,re as xn,Vt as xt,po as y,w as yn,Ut as yt,Nr as z,xt as zt};