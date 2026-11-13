import{d as e,f as t,l as n,n as r,r as i,s as a,t as o,u as s}from"./policy-content-DA7nojkn.js";function c(e){e.statusCode=e.statusCode||e.code||307;let t=new Headers(e.headers);e.href&&t.get(`Location`)===null&&t.set(`Location`,e.href);let n=new Response(null,{status:e.statusCode,headers:t});if(n.options=e,e.throw)throw n;return n}function l(e){return e instanceof Response&&!!e.options}function u(e){if(typeof e==`object`&&e&&e.isSerializedRedirect)return c(e)}function d(e){return e[e.length-1]}function f(e,t){return typeof e==`function`?e(t):e}var p=Object.prototype.hasOwnProperty;function m(e){for(let t in e)if(p.call(e,t))return!0;return!1}var h=()=>Object.create(null),g=(e,t)=>_(e,t,!0);function _(e,t,n,r=0){if(e===t)return e;if(r++>500)return t;let i=Array.isArray(e)&&Array.isArray(t);if(!i&&!(v(e)&&v(t)))return t;let a=Object.keys(e),o=a.length,s=Object.keys(t),c=s.length;if(i?o!==e.length||c!==t.length||o&&d(a)!==`${o-1}`||c&&d(s)!==`${c-1}`:o!==Object.getOwnPropertyNames(e).length||c!==Object.getOwnPropertyNames(t).length||Object.getOwnPropertySymbols(t).length)return t;let l=0,u,f,m;if(i){for(;l<c&&(m=l,f=e[m],u=t[m],u=f===u?f:typeof f==`object`?_(f,u,n,r):u,u===f);l++);if(l===c&&o===c)return e}else{let i=o===c,d=!0;for(;l<c;l++){m=s[l],f=e[m];let o=t[m];u=f===o?f:typeof f==`object`?_(f,o,n,r):o,i&&=u===f&&(a[l]===m||p.call(e,m)),d&&=Object.is(u,o),a[l]=u}if(i)return Object.getOwnPropertySymbols(e).length?t:e;if(d)return t}let g=i?s.fill(0):n?h():{};for(let o=0;o<c;o++)m=i?o:s[o],i?(f=e[m],o>l&&(u=t[m],u=f===u?f:typeof f==`object`?_(f,u,n,r):u),g[m]=o<l?f:u):g[m]=a[o];return g}function v(e){return!e||typeof e!=`object`?!1:(Object.getPrototypeOf(e)?.constructor??Object)===Object}function y(e,t,n,r){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=t[i];if(a!==o&&!y(a,o,n,r))return!1}return!0}if(v(e)&&v(t)){if(n){for(let i in t)if((r||t[i]!==void 0)&&!y(e[i],t[i],n,r))return!1;return!0}let i=0;if(r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;for(let a in t)if((r||t[a]!==void 0)&&(i--===0||!y(e[a],t[a],n,r)))return!1;return i===0}return!1}function ee(e){return typeof e?.message==`string`?e.message.startsWith(`Failed to fetch dynamically imported module`)||e.message.startsWith(`error loading dynamically imported module`)||e.message.startsWith(`Importing a module script failed`):!1}var te=/[\x00-\x1f\x7f"<>`{}]/g;function ne(e){return e.replace(te,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function re(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return ne(t)}var b=[`http:`,`https:`,`mailto:`,`tel:`];function x(e){if(e[0]!==`/`&&e.includes(`:`))return/^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i.exec(e)?.[1]?.replace(/[\t\n\r]/g,``).toLowerCase()}var ie=/^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;function ae(e,t){if(!e)return!1;if(ie.test(e))return!0;let n=x(e);return n?!t.has(n):!1}var S={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},C=/[&><\u2028\u2029]/g;function w(e){return e.replace(C,e=>S[e])}function T(e){if(!e)return e;let t=e;if(/[%\\\x00-\x1f\x7f]/.test(e)){let n=/%25|%5C/gi,r=0,i;for(t=``;(i=n.exec(e))!==null;)t+=re(e.slice(r,i.index))+i[0],r=n.lastIndex;t+=re(r?e.slice(r):e)}return t}function E(e){return/[\s\u0080-\uFFFF]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function D(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function O(e){return e.replace(/\/{2,}/g,`/`)}function k(e){return e===`/`?e:e.replace(/^\/+/,``)}function A(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/+$/,``):e}function j(e){return A(k(e))}function M(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function N(e,t,n=`never`,r){if(t.includes(`//`)&&(t=O(t)),t.startsWith(`/`))return t.length===1||n===`preserve`?t:n===`always`?t.endsWith(`/`)?t:`${t}/`:t.endsWith(`/`)?t.slice(0,-1):t;let i=t===`.`,a;if(r){a=i?e:e+`\0`+t;let n=r.get(a);if(n)return n}let o;if(i)o=e.split(`/`);else{for(e.includes(`//`)&&(e=O(e)),o=e.split(`/`);o.length>1&&d(o)===``;)o.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&o.push(r):o=[r]:r===`..`?o.length>1?o.pop():o=[``]:r===`.`||o.push(r)}}o.length>1&&(d(o)===``?n===`never`&&o.pop():n===`always`&&o.push(``));let s=o.join(`/`),c=(i?O(s):s)||`/`;return a&&r&&r.set(a,c),c}function P(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g,`\\$&`),`g`);return e=>e.replace(n,e=>t.get(e)??e)}function F(e){return e==null||e===``}function I(e,t,n){if(typeof t!=`string`)return``+(t??void 0);let r=e===`_splat`;if(r&&(!t||/^[a-zA-Z0-9\-._~!/]*$/.test(t)))return t;let i=encodeURIComponent(t);return r&&(i=i.replaceAll(`%2F`,`/`)),n?n(i):i}function L(e,t,n,r,i){let a=e.endsWith(`/`)?`/`:``,o=``;for(let e of t){if(typeof e==`string`){o+=e;continue}let[t,s,c,l]=e,u=t===2,d=u&&l!==void 0?l+a:l,f=n[s];if(t!==3||f!=null){if(i&&(i[s]=f,u&&(i[`*`]=f)),u&&F(f)){if(c===`/`&&!d)continue;f=``}o+=c+I(s,f,r)+(d||``)}}return o+a||`/`}function oe(){throw Error(`Invariant failed`)}var R=`__root__`,se=`Error preloading route! ☝️`,ce=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(e){if(this.init=e=>{this.originalIndex=e,this._branch=void 0;let t=this.options,n=!t?.path&&!t?.id;this.parentRoute=this.options.getParentRoute?.(),n?this._path=R:this.parentRoute||oe();let r=n?R:t?.path;r&&r!==`/`&&(r=k(r));let i=t?.id||r,a=n?R:O((this.parentRoute.id===`__root__`?``:this.parentRoute.id)+`/`+(i??``));r===`__root__`&&(r=`/`);let o=a===`__root__`?`/`:r===void 0?this.parentRoute.fullPath:O(this.parentRoute.fullPath+`/`+r);this._path=r,this._id=a,this._fullPath=o,this._to=A(o)},this.addChildren=e=>this._addFileChildren(e),this._addFileChildren=e=>(Array.isArray(e)&&(this.children=e),typeof e==`object`&&e&&(this.children=Object.values(e)),this),this._addFileTypes=()=>this,this.updateLoader=e=>(Object.assign(this.options,e),this),this.update=e=>(Object.assign(this.options,e),this),this.lazy=e=>(this.lazyFn=e,this),this.redirect=e=>c({from:this.fullPath,...e}),this.options=e||{},this.isRoot=!e?.getParentRoute,e?.id&&e?.path)throw Error(`Route cannot have both an 'id' and a 'path' option.`)}},le=class extends ce{constructor(e){super(e)}},z=t(s(),1),B=z.use,ue=z.useLayoutEffect,V=n(),de=()=>!0,fe=()=>!1;function pe({children:e,fallback:t=null}){return(0,V.jsx)(z.Fragment,{children:me()?e:t})}function me(e=!0){return z.useSyncExternalStore(he,de,e?fe:de)}function he(){return()=>{}}var ge=z.createContext(null);function _e(e){return z.useContext(ge)}var ve=z.createContext(void 0),ye=z.createContext(void 0),be=e((e=>{var t=s();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,c=t.useDebugValue;function l(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),s=r[0].inst,l=r[1];return o(function(){s.value=n,s.getSnapshot=t,u(s)&&l({inst:s})},[e,n,t]),a(function(){return u(s)&&l({inst:s}),e(function(){u(s)&&l({inst:s})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),xe=e(((e,t)=>{t.exports=be()})),Se=e((e=>{var t=s(),n=xe();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useSyncExternalStore,o=t.useRef,c=t.useEffect,l=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var d=o(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),s!==void 0&&f.hasValue){var t=f.value;if(s(t,e))return c=t}return c=e}if(t=c,i(o,e))return t;var n=r(e);return s!==void 0&&s(t,n)?(o=e,t):(o=e,c=n)}var a=!1,o,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,s]);var p=a(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),Ce=e(((e,t)=>{t.exports=Se()}))();function we(e,t){return e===t}function Te(e,t=e=>e,n){let r=n?.compare??we,i=(0,z.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,z.useCallback)(()=>e.get(),[e]);return(0,Ce.useSyncExternalStoreWithSelector)(i,a,a,t,r)}var Ee={};function De(e,t){let n=z.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=_(n.current,i):i}}function H(e){let t=_e(),n=z.useContext(e.from?ye:ve),r=e.from??n,i=t.stores.getMatchStore(r),a=De(e,t),o=Te(i,e=>e?a(e):Ee);if(o!==Ee)return o;(e.shouldThrow??!0)&&oe()}function Oe(e){return H({from:e.from,strict:e.strict,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.loaderData):t.loaderData})}function ke(e){let{select:t,...n}=e;return H({...n,select:e=>t?t(e.loaderDeps):e.loaderDeps})}function Ae(e){return H({from:e.from,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,strict:e.strict,select:t=>{let n=e.strict===!1?t.params:t._strictParams;return e.select?e.select(n):n}})}function je(e){return H({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.search):t.search})}function Me(e){let t=_e();return z.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}function Ne(e){return H({...e,select:t=>e.select?e.select(t.context):t.context})}function Pe(...e){let t=z.useRef(e),n=t.current;return e.forEach((e,t)=>{y(n[t],e,!1,!0)||(n[t]=e)}),t.current}function Fe(e,t){e.preloadRoute(t).catch(e=>{console.warn(e),console.warn(se)})}var Ie={compare:(e,t)=>e[0]===t[0]&&e[1]===t[1]};function Le(e,t){let n=typeof e==`string`&&x(e);if(n)return t.has(n)?e:null}function Re(e,t,n,r,i){let a=M(e.pathname,r),o=M(t.pathname,r);return(n?.exact?a!==o:!(a.startsWith(o)&&(a.length===o.length||a[o.length]===`/`)))||(n?.includeSearch??!0)&&!y(e.search,t.search,!n?.exact,n?.explicitUndefined)?!1:!n?.includeHash||i&&e.hash===t.hash}function ze(e,t,n){let r=_e(),i=z.useRef(null),a=z.useCallback(e=>{if(i.current=e,typeof t==`function`)return t(e);t&&(t.current=e)},[t]),{activeOptions:o,to:s,preload:c,preloadDelay:l,hashScrollIntoView:u,replace:d,startTransition:f,resetScroll:p,viewTransition:m,ignoreBlocker:h,disabled:g,target:_,onClick:v,onBlur:y,onFocus:ee,onMouseEnter:te,onMouseLeave:ne,onTouchStart:re}=e,b=me(!!o?.includeHash),[ie,ae,S]=Pe(e.search,e.params,o),[C,w]=z.useMemo(()=>[e,{...e}],[r,e.from,e._fromLocation,e.hash,e.to,ie,ae,e.state,e.mask,e.unsafeRelative]),T=z.useMemo(()=>{let e=Le(s,r.protocolAllowlist);if(e!==void 0){let t=[e??void 0];return()=>t}let t,n;return e=>{C._fromLocation||(w._fromLocation=e);let i=r.buildLocation(w),a=Je(i,r,g);return(!t||t[0]!==a)&&(t=[a,!(g||a&&!x(a))&&void 0],n=[a,!0]),t[1]!==void 0&&Re(e,i,S,r.basepath,b)?n:t}},[S,g,b,C,w,r,s]),[E,D]=Te(r.stores.location,T,Ie),O=D===void 0&&E,k=g||E===void 0,A=z.useRef(!1),j=e.reloadDocument||O||k?!1:c??r.options.defaultPreload,M=l??r.options.defaultPreloadDelay??0,N=z.useCallback(e=>{let t=e?.isIntersecting;if(!(t??j===`intent`)){t===!1&&Ke(i);return}if(!M){Fe(r,C);return}Ge.has(i)||Ge.set(i,setTimeout(()=>{Ge.delete(i),Fe(r,C)},M))},[r,C,i,j,M]);z.useEffect(()=>{if(!j)return;j===`render`&&!A.current&&(A.current=!0,Fe(r,C));let e=!0,t;return j===`viewport`&&i.current&&typeof IntersectionObserver==`function`&&(t=new IntersectionObserver(t=>{e&&N(t.pop())},{rootMargin:`100px`}),t.observe(i.current)),()=>{e=!1,t?.disconnect(),Ke(i)}},[r,C,j,N,i]);let P=Ue(e,n);if(P.ref=t?a:i,O)return P.href=O,P;let F=e=>{let t=_??e.currentTarget.getAttribute(`target`);!k&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(!t||t===`_self`)&&e.button===0&&(e.preventDefault(),r.navigate({...C,replace:d,resetScroll:p,hashScrollIntoView:u,startTransition:f,viewTransition:m,ignoreBlocker:h}))},I=()=>{j===`intent`&&Fe(r,C)},L=()=>{j===`intent`&&Ke(i)};return P.onClick=qe(v,F),P.onBlur=qe(y,L),P.onFocus=qe(ee,N),P.onMouseEnter=qe(te,N),P.onMouseLeave=qe(ne,L),P.onTouchStart=qe(re,I),We(P,e,D,E,k,n)}var Be={},Ve={className:`active`},He=new Set([`to`,`params`,`search`,`hash`,`state`,`mask`,`from`,`unsafeRelative`,`_fromLocation`,`reloadDocument`,`preload`,`preloadDelay`,`preloadIntentProximity`,`hashScrollIntoView`,`replace`,`startTransition`,`resetScroll`,`viewTransition`,`ignoreBlocker`,`activeProps`,`inactiveProps`,`activeOptions`,`_asChild`]);function Ue(e,t){let n={};for(let r in e)He.has(r)||r===`type`&&t!==void 0||r===`disabled`&&t===`a`||(n[r]=e[r]);return n}function We(e,t,n,r,i,a){let{activeProps:o,inactiveProps:s,className:c,style:l,target:u}=t,d=f(n?o:s,{})??(n?Ve:Be);Object.assign(e,d),e.href=r,a!==`a`&&(e.disabled=i),e.target=u;let p=d.style;(l||p)&&(e.style=l&&p?{...l,...p}:l||p);let m=d.className;return(c||m)&&(e.className=c?m?`${c} ${m}`:c:m),i&&(e.role=`link`,e[`aria-disabled`]=!0),n&&(e[`data-status`]=`active`,e[`aria-current`]=`page`),e}var Ge=new WeakMap,Ke=e=>{clearTimeout(Ge.get(e)),Ge.delete(e)},qe=(e,t)=>e?n=>n.defaultPrevented||(e(n),n.defaultPrevented||t(n)):t;function Je(e,t,n){if(n)return;let r=e.maskedLocation??e,i=r.external?r.publicHref:t.history.createHref(r.publicHref)||`/`;if(!((r.external||i!==r.publicHref)&&ae(i,t.protocolAllowlist)))return i}var Ye=z.memo(z.forwardRef((e,t)=>{let n=e._asChild||`a`,r=ze(e,t,n),i=typeof e.children==`function`?e.children({isActive:r[`data-status`]===`active`}):e.children;return z.createElement(n,r,i)}),Xe);function Xe(e,t){let n=0;for(let r in t)if(n++,e[r]!==t[r]&&(!He.has(r)||!y(e[r],t[r],!1,!0)))return!1;for(let t in e)n--;return n===0}var Ze=class extends ce{constructor(e){super(e),this.useMatch=e=>H({...e,from:this.id}),this.useRouteContext=e=>Ne({...e,from:this.id}),this.useSearch=e=>je({...e,from:this.id}),this.useParams=e=>Ae({...e,from:this.id}),this.useLoaderDeps=e=>ke({...e,from:this.id}),this.useLoaderData=e=>Oe({...e,from:this.id}),this.useNavigate=()=>Me({from:this.fullPath}),this.Link=z.forwardRef((e,t)=>(0,V.jsx)(Ye,{ref:t,from:this.fullPath,...e}))}};function Qe(e){return new Ze(e)}var $e=class extends le{constructor(e){super(e),this.useMatch=e=>H({...e,from:this.id}),this.useRouteContext=e=>Ne({...e,from:this.id}),this.useSearch=e=>je({...e,from:this.id}),this.useParams=e=>Ae({...e,from:this.id}),this.useLoaderDeps=e=>ke({...e,from:this.id}),this.useLoaderData=e=>Oe({...e,from:this.id}),this.useNavigate=()=>Me({from:this.fullPath}),this.Link=z.forwardRef((e,t)=>(0,V.jsx)(Ye,{ref:t,from:this.fullPath,...e}))}};function et(e){return new $e(e)}function tt(e){return e=>{let t=Qe(e);return t.isRoot=!1,t}}function nt(e,t){let n,r,i,a=()=>(n||=(i=void 0,e().then(e=>{n=void 0,o.preload=void 0,r=e[t??`default`]}).catch(e=>{n=void 0,i=e})),n),o=function(e){if(i){if(ee(i)&&typeof sessionStorage<`u`){let e=`tanstack_router_reload:${i.message}`;if(!sessionStorage.getItem(e))throw sessionStorage.setItem(e,`1`),window.location.reload(),new Promise(()=>{})}throw i}if(!r)if(B)B(a());else throw a();return z.createElement(r,e)};return o.preload=a,o}function rt(e){let t=_e({warn:e?.router===void 0}),n=e?.router||t;return Te(n.stores.__store,De(e,n))}var it=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),at=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ot=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),st=e=>{let t=ot(e);return t.charAt(0).toUpperCase()+t.slice(1)},ct={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},lt=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ut=(0,z.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,z.createElement)(`svg`,{ref:c,...ct,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:it(`lucide`,i),...!a&&!lt(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,z.createElement)(e,t)),...Array.isArray(a)?a:[a]])),dt=(e,t)=>{let n=(0,z.forwardRef)(({className:n,...r},i)=>(0,z.createElement)(ut,{ref:i,iconNode:t,className:it(`lucide-${at(st(e))}`,`lucide-${e}`,n),...r}));return n.displayName=st(e),n},ft=dt(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),pt=dt(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),mt=dt(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),ht=`---
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
`,gt=`---
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
`,_t=`---
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
`,vt=`---
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
`,yt=`---
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
`,bt=`---
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
`,xt=`---
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
`,St=`---
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
`,Ct=`---
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
`,wt=`---
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
`,Tt=`---
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
`,Et=`---
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
`,Dt=`---
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
`,Ot=`---
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
`,kt=`---
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
`,At=`---
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
`,jt=`---
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
`,Mt=`---
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
`,Nt=`---
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
`,Pt=`---
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
`,Ft=`---
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
`,It=`---
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
`,Lt=`---
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
`,Rt=`---
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
`,zt=`---
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
`,Bt=`---
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
`,Vt=`---
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
`,Ht=`---
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
`,Ut={url:`/media/assets-v1/357f3b8a-a6cd-4189-b5f6-8a1f406ca158/blog-cover-assortment.jpg`},Wt={url:`/media/assets-v1/f5c29ec1-8900-47ef-b84b-6069192808fa/blog-cover-forecast.jpg`},Gt={url:`/media/assets-v1/7865821b-6f11-4cef-a86e-b47d40b13dd2/blog-cover-pricing.jpg`},Kt={url:`/media/assets-v1/cb4825bc-633a-4b91-9870-f52c6fb38a60/blog-cover-recommendation.jpg`},qt={url:`/media/assets-v1/b204822e-9584-42f5-87f6-3d8e53135c9c/media-logo-cadencia.png`},Jt={url:`/media/assets-v1/2e1be98c-f99d-422b-b93f-51dc8d2a723b/media-logo-canal-vitrine.png`},Yt={url:`/media/assets-v1/23cc01c2-ade4-4564-96ae-ac09e80e2fce/media-logo-mercado-vivo.png`},Xt={url:`/media/assets-v1/6bbf6a40-956f-4e47-aaa6-b79edd2d276d/media-logo-pauta-varejo.png`},Zt={url:`/media/assets-v1/dd9996e7-3b8a-47f9-ad28-5a0c63ad1ef4/media-logo-rede-giro.png`},Qt=[`i6 Article`,`i6 Blog`,`i6 on Media`,`i6 eBook`,`i6 Social`],$t=[`i6 Article`,`i6 Blog`],en=[`i6 on Media`,`i6 Social`],tn={"blog-cover-forecast":Wt.url,"blog-cover-assortment":Ut.url,"blog-cover-pricing":Gt.url,"blog-cover-recommendation":Kt.url,"media-logo-mercado-vivo":Yt.url,"media-logo-pauta-varejo":Xt.url,"media-logo-cadencia":qt.url,"media-logo-rede-giro":Zt.url,"media-logo-canal-vitrine":Jt.url};function nn(e){if(e)return/^https?:\/\//.test(e)||e.startsWith(`/`)?e:tn[e]}function rn(e){return e.startsWith(`en`)?`en`:e.startsWith(`es`)?`es`:`pt`}var an=[`pt`,`en`,`es`];function on(e){return typeof e==`string`&&an.includes(e)}function sn(e){return e===`en`?`en-US`:e===`es`?`es-ES`:`pt-BR`}function cn(e){let t=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(e.trim());if(!t)return{data:{},body:e};let[,n,r=``]=t,i={};for(let e of(n??``).split(/\r?\n/)){let t=e.trim();if(!t||t.startsWith(`#`))continue;let n=t.indexOf(`:`);if(n===-1)continue;let r=t.slice(0,n).trim(),a=t.slice(n+1).trim();r&&(i[r]=ln(a))}return{data:i,body:r}}function ln(e){if(e===``||e===`null`||e===`~`)return null;if(e===`true`)return!0;if(e===`false`)return!1;if(e.startsWith(`[`)&&e.endsWith(`]`))return e.slice(1,-1).split(`,`).map(e=>un(e.trim())).filter(e=>e.length>0);let t=un(e);return t===e?/^-?\d+(\.\d+)?$/.test(e)?Number(e):e:t}function un(e){if(e.length>=2&&e.startsWith(`"`)&&e.endsWith(`"`))try{return JSON.parse(e)}catch{return e.slice(1,-1)}return e.length>=2&&e.startsWith(`'`)&&e.endsWith(`'`)?e.slice(1,-1):e}function dn(e){if(!e)return;let t=e.replace(/`{1,3}[^`]*`{1,3}/g,` `).replace(/!\[[^\]]*\]\([^)]*\)/g,` `).replace(/\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/^#{1,6}\s+/gm,``).replace(/[*_~>]/g,``).replace(/\s+/g,` `).trim();return t.length>0?t:void 0}var fn=Object.assign({"/src/content/insights/a-promocao-que-se-paga-pt.md":ht,"/src/content/insights/cadencia-precificacao-dinamica-pt.md":gt,"/src/content/insights/catalogo-que-alimenta-modelo-pt.md":_t,"/src/content/insights/da-metrica-ao-experimento-pt.md":vt,"/src/content/insights/demand-forecasting-teams-actually-use-en.md":yt,"/src/content/insights/elasticidade-preco-sem-canibalizar-margem-pt.md":bt,"/src/content/insights/i6-in-the-media-predictive-decisions-en.md":xt,"/src/content/insights/i6-na-midia-decisao-preditiva-pt.md":St,"/src/content/insights/i6-na-midia-ia-aplicada-pt.md":Ct,"/src/content/insights/local-assortment.en.md":wt,"/src/content/insights/local-assortment.es.md":Tt,"/src/content/insights/local-assortment.pt.md":Et,"/src/content/insights/mercado-vivo-conselho-preditivo-en.md":Dt,"/src/content/insights/mercado-vivo-conselho-preditivo-pt.md":Ot,"/src/content/insights/previsao-demanda-time-comercial-pt.md":kt,"/src/content/insights/price-elasticity-without-eating-margin-en.md":At,"/src/content/insights/recomendar-para-quem-voce-ainda-nao-conhece-pt.md":jt,"/src/content/insights/recommending-to-people-you-dont-know-en.md":Mt,"/src/content/insights/rede-giro-governanca-de-dados-pt.md":Nt,"/src/content/insights/relevance-discovery.en.md":Pt,"/src/content/insights/relevance-discovery.es.md":Ft,"/src/content/insights/relevance-discovery.pt.md":It,"/src/content/insights/ruptura-de-gondola-e-decisao-pt.md":Lt,"/src/content/insights/social-bastidores-motor-previsao-pt.md":Rt,"/src/content/insights/social-encontro-comunidade-pt.md":zt,"/src/content/insights/social-numero-da-semana-en.md":Bt,"/src/content/insights/social-numero-da-semana-pt.md":Vt,"/src/content/insights/sortimento-por-cluster-de-loja-pt.md":Ht});function pn(e){return typeof e==`string`&&Qt.includes(e)}function mn(e){return(e.split(`/`).pop()??``).replace(/\.md$/,``).replace(/[.-](pt|en|es)$/,``)}function U(e,t){return t?{[e]:t}:{}}function W(e,t){let n=e[t];return typeof n==`string`&&n.length>0?n:void 0}function hn(e,t){let{data:n,body:r}=cn(t),i=W(n,`title`),a=W(n,`language`),o=a===`en`||a===`pt`||a===`es`?a:null,s=W(n,`date`),c=n.type,l=pn(c)?c:null;if(!i||!o||!s||!l)return null;let u=n.tags,d=Array.isArray(u)?u:[],f=dn(W(n,`excerpt`)),p=W(n,`cover_image`),m=n.read_time,h=W(n,`theme`),g=W(n,`theme_label`),_=W(n,`external_url`),v=W(n,`format`)===`html`?`html`:`markdown`;return{...U(`id`,W(n,`id`)),slug:W(n,`slug`)??mn(e),title:i,language:o,type:l,date:s,...f?{excerpt:f}:{},...p?{coverImage:p}:{},...typeof m==`number`?{readTime:m}:{},isDefault:n.is_default===!0,featured:n.featured===!0,gated:n.gated===!0,...h?{theme:h}:{},...g?{themeLabel:g}:{},tags:d,..._?{externalUrl:_}:{},format:v,body:r.trim(),...U(`writerName`,W(n,`writer_name`)),...U(`writerRole`,W(n,`writer_role`)),...U(`writerImage`,W(n,`writer_image_key`)),ctaForm:n.cta_form===!0,...U(`ctaFormTitle`,W(n,`cta_form_title`)),...U(`ctaFormSubtitle`,W(n,`cta_form_subtitle`)),...U(`ctaFormText`,W(n,`cta_form_text`)),...U(`relatedProduct`,W(n,`related_product`)),...U(`assetUrl`,W(n,`asset_url`))}}var gn=Object.entries(fn).map(([e,t])=>hn(e,t)).filter(e=>e!==null).sort((e,t)=>e.date<t.date?1:e.date>t.date?-1:0);function _n(e,t){return gn.filter(n=>t.includes(n.type)&&n.language===e)}function vn(e,t,n=Qt){return gn.find(r=>r.slug===t&&n.includes(r.type)&&r.language===e)}function yn(e){return e.find(e=>e.isDefault)??e[0]}function bn(e){return e.themeLabel??e.theme}function xn(e){let t=e.split(`/`).filter(Boolean)[0];return on(t)?sn(t):a}function Sn(e){return e.startsWith(`en`)?`en`:e.startsWith(`es`)?`es`:`pt`}function Cn(e,t){let n=e.split(`/`).filter(Boolean),r=n.length>0&&on(n[0])?n.slice(1).join(`/`):n.join(`/`);return`/${t}${r?`/${r}`:``}`}function wn(e,t){return e===`pt`&&t===``?`/`:`/${e}${t}`}function Tn(e,t){return[...[`pt`,`en`,`es`].map(n=>({rel:`alternate`,hrefLang:n,href:`${e}${wn(n,t)}`})),{rel:`alternate`,hrefLang:`x-default`,href:`${e}${wn(`pt`,t)}`}]}var En=[{labelKey:`nav.products`,target:{kind:`products-menu`}},{labelKey:`nav.intelligence`,target:{kind:`intelligence-menu`}},{labelKey:`nav.cases`,target:{kind:`route`,to:`/$lang/success-stories`}},{labelKey:`nav.pricing`,target:{kind:`route`,to:`/$lang/pricing`}}];function Dn(){return rt({select:e=>Sn(xn(e.location.pathname))})}function On({target:e,className:t,children:n,onClick:r}){let i=Dn();return e.kind===`anchor`?(0,V.jsx)(`a`,{href:e.href,className:t,onClick:r,children:n}):e.kind===`route`?(0,V.jsx)(Ye,{to:e.to,params:{lang:i},...e.hash===void 0?{}:{hash:e.hash},...e.search===void 0?{}:{search:e.search},className:t,onClick:r,children:n}):(0,V.jsx)(`span`,{className:t,"aria-disabled":`true`,children:n})}function kn(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=kn(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function An(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=kn(e))&&(r&&(r+=` `),r+=t);return r}var jn=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Mn=(e,t)=>({classGroupId:e,validator:t}),Nn=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Pn=`-`,Fn=[],In=`arbitrary..`,Ln=e=>{let t=Bn(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return zn(e);let n=e.split(Pn);return Rn(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?jn(i,t):t:i||Fn}return n[e]||Fn}}},Rn=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Rn(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Pn):e.slice(t).join(Pn),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},zn=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?In+r:void 0})(),Bn=e=>{let{theme:t,classGroups:n}=e;return Vn(n,t)},Vn=(e,t)=>{let n=Nn();for(let r in e){let i=e[r];Hn(i,n,r,t)}return n},Hn=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Un(i,t,n,r)}},Un=(e,t,n,r)=>{if(typeof e==`string`){Wn(e,t,n);return}if(typeof e==`function`){Gn(e,t,n,r);return}Kn(e,t,n,r)},Wn=(e,t,n)=>{let r=e===``?t:qn(t,e);r.classGroupId=n},Gn=(e,t,n,r)=>{if(Jn(e)){Hn(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Mn(n,e))},Kn=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Hn(o,qn(t,a),n,r)}},qn=(e,t)=>{let n=e,r=t.split(Pn),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Nn(),n.nextPart.set(t,i)),n=i}return n},Jn=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Yn=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Xn=`!`,Zn=`:`,Qn=[],$n=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),er=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Zn){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Xn)?(c=s.slice(0,-1),l=!0):s.startsWith(Xn)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return $n(t,l,c,u)};if(t){let e=t+Zn,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):$n(Qn,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},tr=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},nr=e=>({cache:Yn(e.cacheSize),parseClassName:er(e),sortModifiers:tr(e),postfixLookupClassGroupIds:rr(e),...Ln(e)}),rr=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},ir=/\s+/,ar=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(ir),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+Xn:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let ee=i(g,h);for(let e=0;e<ee.length;++e){let t=ee[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},or=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=sr(n))&&(i&&(i+=` `),i+=r);return i},sr=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=sr(e[r]))&&(n&&(n+=` `),n+=t);return n},cr=(e,...t)=>{let n,r,i,a,o=o=>(n=nr(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=ar(e,n);return i(e,a),a};return a=o,(...e)=>a(or(...e))},lr=[],G=e=>{let t=t=>t[e]||lr;return t.isThemeGetter=!0,t},ur=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,dr=/^\((?:(\w[\w-]*):)?(.+)\)$/i,fr=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,pr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,mr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,gr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,_r=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,K=e=>fr.test(e),q=e=>!!e&&!Number.isNaN(Number(e)),J=e=>!!e&&Number.isInteger(Number(e)),vr=e=>e.endsWith(`%`)&&q(e.slice(0,-1)),Y=e=>pr.test(e),yr=()=>!0,br=e=>mr.test(e)&&!hr.test(e),xr=()=>!1,Sr=e=>gr.test(e),Cr=e=>_r.test(e),wr=e=>!X(e)&&!Z(e),Tr=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),Er=e=>Q(e,Wr,xr),X=e=>ur.test(e),Dr=e=>Q(e,Gr,br),Or=e=>Q(e,Kr,q),kr=e=>Q(e,Jr,yr),Ar=e=>Q(e,qr,xr),jr=e=>Q(e,Hr,xr),Mr=e=>Q(e,Ur,Cr),Nr=e=>Q(e,Yr,Sr),Z=e=>dr.test(e),Pr=e=>Vr(e,Gr),Fr=e=>Vr(e,qr),Ir=e=>Vr(e,Hr),Lr=e=>Vr(e,Wr),Rr=e=>Vr(e,Ur),zr=e=>Vr(e,Yr,!0),Br=e=>Vr(e,Jr,!0),Q=(e,t,n)=>{let r=ur.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Vr=(e,t,n=!1)=>{let r=dr.exec(e);return r?r[1]?t(r[1]):n:!1},Hr=e=>e===`position`||e===`percentage`,Ur=e=>e===`image`||e===`url`,Wr=e=>e===`length`||e===`size`||e===`bg-size`,Gr=e=>e===`length`,Kr=e=>e===`number`,qr=e=>e===`family-name`,Jr=e=>e===`number`||e===`weight`,Yr=e=>e===`shadow`,Xr=cr(()=>{let e=G(`color`),t=G(`font`),n=G(`text`),r=G(`font-weight`),i=G(`tracking`),a=G(`leading`),o=G(`breakpoint`),s=G(`container`),c=G(`spacing`),l=G(`radius`),u=G(`shadow`),d=G(`inset-shadow`),f=G(`text-shadow`),p=G(`drop-shadow`),m=G(`blur`),h=G(`perspective`),g=G(`aspect`),_=G(`ease`),v=G(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],ee=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],te=()=>[...ee(),Z,X],ne=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],re=()=>[`auto`,`contain`,`none`],b=()=>[Z,X,c],x=()=>[K,`full`,`auto`,...b()],ie=()=>[J,`none`,`subgrid`,Z,X],ae=()=>[`auto`,{span:[`full`,J,Z,X]},J,Z,X],S=()=>[J,`auto`,Z,X],C=()=>[`auto`,`min`,`max`,`fr`,Z,X],w=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],T=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],E=()=>[`auto`,...b()],D=()=>[K,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...b()],O=()=>[K,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...b()],k=()=>[K,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...b()],A=()=>[e,Z,X],j=()=>[...ee(),Ir,jr,{position:[Z,X]}],M=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],N=()=>[`auto`,`cover`,`contain`,Lr,Er,{size:[Z,X]}],P=()=>[vr,Pr,Dr],F=()=>[``,`none`,`full`,l,Z,X],I=()=>[``,q,Pr,Dr],L=()=>[`solid`,`dashed`,`dotted`,`double`],oe=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],R=()=>[q,vr,Ir,jr],se=()=>[``,`none`,m,Z,X],ce=()=>[`none`,q,Z,X],le=()=>[`none`,q,Z,X],z=()=>[q,Z,X],B=()=>[K,`full`,...b()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Y],breakpoint:[Y],color:[yr],container:[Y],"drop-shadow":[Y],ease:[`in`,`out`,`in-out`],font:[wr],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Y],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Y],shadow:[Y],spacing:[`px`,q],text:[Y],"text-shadow":[Y],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,K,X,Z,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,Z,X]}],"container-named":[Tr],columns:[{columns:[q,X,Z,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:te()}],overflow:[{overflow:ne()}],"overflow-x":[{"overflow-x":ne()}],"overflow-y":[{"overflow-y":ne()}],overscroll:[{overscroll:re()}],"overscroll-x":[{"overscroll-x":re()}],"overscroll-y":[{"overscroll-y":re()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:x()}],"inset-x":[{"inset-x":x()}],"inset-y":[{"inset-y":x()}],start:[{"inset-s":x(),start:x()}],end:[{"inset-e":x(),end:x()}],"inset-bs":[{"inset-bs":x()}],"inset-be":[{"inset-be":x()}],top:[{top:x()}],right:[{right:x()}],bottom:[{bottom:x()}],left:[{left:x()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[J,`auto`,Z,X]}],basis:[{basis:[K,`full`,`auto`,s,...b()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[q,K,`auto`,`initial`,`none`,X]}],grow:[{grow:[``,q,Z,X]}],shrink:[{shrink:[``,q,Z,X]}],order:[{order:[J,`first`,`last`,`none`,Z,X]}],"grid-cols":[{"grid-cols":ie()}],"col-start-end":[{col:ae()}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":ie()}],"row-start-end":[{row:ae()}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":C()}],"auto-rows":[{"auto-rows":C()}],gap:[{gap:b()}],"gap-x":[{"gap-x":b()}],"gap-y":[{"gap-y":b()}],"justify-content":[{justify:[...w(),`normal`]}],"justify-items":[{"justify-items":[...T(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...T()]}],"align-content":[{content:[`normal`,...w()]}],"align-items":[{items:[...T(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...T(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":w()}],"place-items":[{"place-items":[...T(),`baseline`]}],"place-self":[{"place-self":[`auto`,...T()]}],p:[{p:b()}],px:[{px:b()}],py:[{py:b()}],ps:[{ps:b()}],pe:[{pe:b()}],pbs:[{pbs:b()}],pbe:[{pbe:b()}],pt:[{pt:b()}],pr:[{pr:b()}],pb:[{pb:b()}],pl:[{pl:b()}],m:[{m:E()}],mx:[{mx:E()}],my:[{my:E()}],ms:[{ms:E()}],me:[{me:E()}],mbs:[{mbs:E()}],mbe:[{mbe:E()}],mt:[{mt:E()}],mr:[{mr:E()}],mb:[{mb:E()}],ml:[{ml:E()}],"space-x":[{"space-x":b()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":b()}],"space-y-reverse":[`space-y-reverse`],size:[{size:D()}],"inline-size":[{inline:[`auto`,...O()]}],"min-inline-size":[{"min-inline":[`auto`,...O()]}],"max-inline-size":[{"max-inline":[`none`,...O()]}],"block-size":[{block:[`auto`,...k()]}],"min-block-size":[{"min-block":[`auto`,...k()]}],"max-block-size":[{"max-block":[`none`,...k()]}],w:[{w:[s,`screen`,...D()]}],"min-w":[{"min-w":[s,`screen`,`none`,...D()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...D()]}],h:[{h:[`screen`,`lh`,...D()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...D()]}],"max-h":[{"max-h":[`screen`,`lh`,...D()]}],"font-size":[{text:[`base`,n,Pr,Dr]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Br,kr]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,vr,X]}],"font-family":[{font:[Fr,Ar,t]}],"font-features":[{"font-features":[X]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,Z,X]}],"line-clamp":[{"line-clamp":[q,`none`,Z,Or]}],leading:[{leading:[a,...b()]}],"list-image":[{"list-image":[`none`,Z,X]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,Z,X]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...L(),`wavy`]}],"text-decoration-thickness":[{decoration:[q,`from-font`,`auto`,Z,Dr]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[q,`auto`,Z,X]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:b()}],"tab-size":[{tab:[J,Z,X]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,Z,X]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,Z,X]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:j()}],"bg-repeat":[{bg:M()}],"bg-size":[{bg:N()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},J,Z,X],radial:[``,Z,X],conic:[J,Z,X]},Rr,Mr]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:P()}],"gradient-via-pos":[{via:P()}],"gradient-to-pos":[{to:P()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:F()}],"rounded-s":[{"rounded-s":F()}],"rounded-e":[{"rounded-e":F()}],"rounded-t":[{"rounded-t":F()}],"rounded-r":[{"rounded-r":F()}],"rounded-b":[{"rounded-b":F()}],"rounded-l":[{"rounded-l":F()}],"rounded-ss":[{"rounded-ss":F()}],"rounded-se":[{"rounded-se":F()}],"rounded-ee":[{"rounded-ee":F()}],"rounded-es":[{"rounded-es":F()}],"rounded-tl":[{"rounded-tl":F()}],"rounded-tr":[{"rounded-tr":F()}],"rounded-br":[{"rounded-br":F()}],"rounded-bl":[{"rounded-bl":F()}],"border-w":[{border:I()}],"border-w-x":[{"border-x":I()}],"border-w-y":[{"border-y":I()}],"border-w-s":[{"border-s":I()}],"border-w-e":[{"border-e":I()}],"border-w-bs":[{"border-bs":I()}],"border-w-be":[{"border-be":I()}],"border-w-t":[{"border-t":I()}],"border-w-r":[{"border-r":I()}],"border-w-b":[{"border-b":I()}],"border-w-l":[{"border-l":I()}],"divide-x":[{"divide-x":I()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":I()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...L(),`hidden`,`none`]}],"divide-style":[{divide:[...L(),`hidden`,`none`]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-bs":[{"border-bs":A()}],"border-color-be":[{"border-be":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...L(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[q,Z,X]}],"outline-w":[{outline:[``,q,Pr,Dr]}],"outline-color":[{outline:A()}],shadow:[{shadow:[``,`none`,u,zr,Nr]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":[`none`,d,zr,Nr]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:I()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[q,Dr]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":I()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":[`none`,f,zr,Nr]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[q,Z,X]}],"mix-blend":[{"mix-blend":[...oe(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":oe()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[q]}],"mask-image-linear-from-pos":[{"mask-linear-from":R()}],"mask-image-linear-to-pos":[{"mask-linear-to":R()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":R()}],"mask-image-t-to-pos":[{"mask-t-to":R()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":R()}],"mask-image-r-to-pos":[{"mask-r-to":R()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":R()}],"mask-image-b-to-pos":[{"mask-b-to":R()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":R()}],"mask-image-l-to-pos":[{"mask-l-to":R()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":R()}],"mask-image-x-to-pos":[{"mask-x-to":R()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":R()}],"mask-image-y-to-pos":[{"mask-y-to":R()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[Z,X]}],"mask-image-radial-from-pos":[{"mask-radial-from":R()}],"mask-image-radial-to-pos":[{"mask-radial-to":R()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":ee()}],"mask-image-conic-pos":[{"mask-conic":[q]}],"mask-image-conic-from-pos":[{"mask-conic-from":R()}],"mask-image-conic-to-pos":[{"mask-conic-to":R()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:j()}],"mask-repeat":[{mask:M()}],"mask-size":[{mask:N()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,Z,X]}],filter:[{filter:[``,`none`,Z,X]}],blur:[{blur:se()}],brightness:[{brightness:[q,Z,X]}],contrast:[{contrast:[q,Z,X]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,zr,Nr]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:[``,q,Z,X]}],"hue-rotate":[{"hue-rotate":[q,Z,X]}],invert:[{invert:[``,q,Z,X]}],saturate:[{saturate:[q,Z,X]}],sepia:[{sepia:[``,q,Z,X]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,Z,X]}],"backdrop-blur":[{"backdrop-blur":se()}],"backdrop-brightness":[{"backdrop-brightness":[q,Z,X]}],"backdrop-contrast":[{"backdrop-contrast":[q,Z,X]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,q,Z,X]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[q,Z,X]}],"backdrop-invert":[{"backdrop-invert":[``,q,Z,X]}],"backdrop-opacity":[{"backdrop-opacity":[q,Z,X]}],"backdrop-saturate":[{"backdrop-saturate":[q,Z,X]}],"backdrop-sepia":[{"backdrop-sepia":[``,q,Z,X]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":b()}],"border-spacing-x":[{"border-spacing-x":b()}],"border-spacing-y":[{"border-spacing-y":b()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,Z,X]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[q,`initial`,Z,X]}],ease:[{ease:[`linear`,`initial`,_,Z,X]}],delay:[{delay:[q,Z,X]}],animate:[{animate:[`none`,v,Z,X]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,Z,X]}],"perspective-origin":[{"perspective-origin":te()}],rotate:[{rotate:ce()}],"rotate-x":[{"rotate-x":ce()}],"rotate-y":[{"rotate-y":ce()}],"rotate-z":[{"rotate-z":ce()}],scale:[{scale:le()}],"scale-x":[{"scale-x":le()}],"scale-y":[{"scale-y":le()}],"scale-z":[{"scale-z":le()}],"scale-3d":[`scale-3d`],skew:[{skew:z()}],"skew-x":[{"skew-x":z()}],"skew-y":[{"skew-y":z()}],transform:[{transform:[Z,X,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:te()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:B()}],"translate-x":[{"translate-x":B()}],"translate-y":[{"translate-y":B()}],"translate-z":[{"translate-z":B()}],"translate-none":[`translate-none`],zoom:[{zoom:[J,Z,X]}],accent:[{accent:A()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,Z,X]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":A()}],"scrollbar-track-color":[{"scrollbar-track":A()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mbs":[{"scroll-mbs":b()}],"scroll-mbe":[{"scroll-mbe":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pbs":[{"scroll-pbs":b()}],"scroll-pbe":[{"scroll-pbe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,Z,X]}],fill:[{fill:[`none`,...A()]}],"stroke-w":[{stroke:[q,Pr,Dr,Or]}],stroke:[{stroke:[`none`,...A()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function Zr(...e){return Xr(An(e))}var Qr=Object.defineProperty,$r=(e,t)=>Qr(e,`name`,{value:t,configurable:!0});function ei(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}$r(ei,`setRef`);function ti(...e){return t=>{let n=!1,r=e.map(e=>{let r=ei(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():ei(e[t],null)}}}}$r(ti,`composeRefs`);function ni(...e){return z.useCallback(ti(...e),e)}$r(ni,`useComposedRefs`);var ri=Object.defineProperty,$=(e,t)=>ri(e,`name`,{value:t,configurable:!0});function ii(e){let t=z.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];pi(r)&&typeof _i==`function`&&(r=_i(r._payload)),z.Children.forEach(r,e=>{if(di(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;pi(n)&&typeof _i==`function`&&(n=_i(n._payload)),a=ci(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=z.cloneElement(a,void 0,s):!o&&z.Children.count(r)===1&&z.isValidElement(r)&&(a=r);let c=a?ui(a):void 0,l=ni(n,c);if(!a){if(r||r===0)throw Error(o?gi(e):hi(e));return r}let u=li(i,a.props??{});return a.type!==z.Fragment&&(u.ref=n?l:c),z.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}$(ii,`createSlot`);var ai=ii(`Slot`),oi=Symbol.for(`radix.slottable`);function si(e){let t=$(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=oi,t}$(si,`createSlottable`);var ci=$((e,t)=>{if(`child`in e.props){let t=e.props.child;return z.isValidElement(t)?z.cloneElement(t,void 0,e.props.children(t.props.children)):null}return z.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function li(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}$(li,`mergeProps`);function ui(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}$(ui,`getElementRef`);function di(e){return z.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===oi}$(di,`isSlottable`);var fi=Symbol.for(`react.lazy`);function pi(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===fi&&`_payload`in e&&mi(e._payload)}$(pi,`isLazyComponent`);function mi(e){return typeof e==`object`&&!!e&&`then`in e}$(mi,`isPromiseLike`);var hi=$(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),gi=$(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),_i=z.use,vi=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,yi=An,bi=(e,t)=>n=>{if(t?.variants==null)return yi(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=vi(t)||vi(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return yi(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},xi=bi(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-normal tracking-tightish cursor-pointer transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,{variants:{variant:{default:`bg-primary text-primary-foreground shadow-ds-sm hover:bg-primary/90 hover:shadow-ds-md`,destructive:`bg-destructive text-destructive-foreground shadow-ds-sm hover:bg-destructive/90 hover:shadow-ds-md`,success:`bg-success text-success-foreground shadow-ds-sm hover:bg-success/90 hover:shadow-ds-md`,outline:`border border-border/60 bg-background shadow-ds-sm hover:bg-muted/60 hover:shadow-ds-md`,secondary:`bg-secondary/70 text-secondary-foreground hover:bg-secondary hover:shadow-ds-sm`,ghost:`hover:bg-muted/60 hover:text-accent-foreground`,link:`text-primary underline-offset-4 hover:underline active:scale-100`},size:{sm:`h-9 rounded-full px-3.5 text-xs sm:h-8`,default:`h-10 px-4.5 py-2 sm:h-9`,lg:`h-11 rounded-full px-7 sm:h-10 sm:px-8`,icon:`h-10 w-10 rounded-full sm:h-9 sm:w-9`,"icon-touch":`size-11 rounded-full`},fullWidth:{true:`w-full`,false:``}},defaultVariants:{variant:`default`,size:`default`,fullWidth:!1}}),Si=z.forwardRef(({className:e,variant:t,size:n,fullWidth:r,asChild:i=!1,loading:a=!1,disabled:o,children:s,...c},l)=>i?(0,V.jsx)(ai,{className:Zr(xi({variant:t,size:n,fullWidth:r,className:e})),ref:l,"aria-busy":a||void 0,"aria-disabled":o||a||void 0,...c,children:s}):(0,V.jsxs)(`button`,{className:Zr(xi({variant:t,size:n,fullWidth:r,className:e})),ref:l,disabled:o||a,"aria-busy":a||void 0,...c,children:[a?(0,V.jsx)(pt,{className:`animate-spin`,"aria-hidden":`true`}):null,s]}));Si.displayName=`Button`;var Ci=[`assortment`,`forecasting`,`pricing`,`relevance`,`targeting`],wi=[`assortment`,`forecasting`,`pricing`,`relevance`,`targeting`],Ti=new Set(Ci);function Ei(e){return Ti.has(e)}var Di=`modulepreload`,Oi=function(e){return`/`+e},ki={},Ai=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Oi(t,n),t=s(t),t in ki)return;ki[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Di,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ji={essential:!0,analytics:!1,marketing:!1,preferences:!1},Mi={essential:!0,analytics:!0,marketing:!0,preferences:!0},Ni=`i6ds_cookie_consent`,Pi=`2.0`,Fi=31536e6,Ii={status:`unknown`,consent:ji,bannerOpen:!1,preferencesOpen:!1},Li=Ii,Ri=new Set;function zi(e){Li=e;for(let e of Ri)e()}function Bi(e){return Ri.add(e),()=>Ri.delete(e)}function Vi(){return Li}function Hi(){return Ii}function Ui(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.essential===!0&&typeof t.analytics==`boolean`&&typeof t.marketing==`boolean`&&typeof t.preferences==`boolean`}function Wi(){if(typeof window>`u`||typeof localStorage>`u`)return null;try{let e=localStorage.getItem(Ni);if(!e)return null;let t=JSON.parse(e),n=typeof t.savedAt==`number`&&t.savedAt<=Date.now()&&Date.now()-t.savedAt<=Fi;return t.version!==Pi||!n||!Ui(t.consent)?(localStorage.removeItem(Ni),null):t.consent}catch{return null}}function Gi(e){if(!(typeof window>`u`||typeof localStorage>`u`))try{let t={version:Pi,savedAt:Date.now(),consent:e};localStorage.setItem(Ni,JSON.stringify(t))}catch{}}function Ki(){if(typeof window>`u`||Li.status===`resolved`)return;let e=Wi();zi({status:`resolved`,consent:e??ji,bannerOpen:e===null,preferencesOpen:!1})}function qi(e){Gi(e),zi({status:`resolved`,consent:e,bannerOpen:!1,preferencesOpen:!1})}function Ji(){qi(Mi)}function Yi(){qi(ji)}function Xi(e){qi({...e,essential:!0})}function Zi(){zi({status:`resolved`,consent:Li.status===`resolved`?Li.consent:Wi()??ji,bannerOpen:!0,preferencesOpen:!0})}function Qi(e){zi({...Li,preferencesOpen:e})}function $i(){if(typeof window<`u`&&typeof localStorage<`u`)try{localStorage.removeItem(Ni)}catch{}zi({status:`resolved`,consent:ji,bannerOpen:!0,preferencesOpen:!1})}function ea(){let e=(0,z.useSyncExternalStore)(Bi,Vi,Hi);return(0,z.useEffect)(()=>Ki(),[]),{...e,acceptAll:Ji,acceptEssential:Yi,updateConsent:Xi,openPreferences:Zi,setPreferencesOpen:Qi,resetConsent:$i}}var ta=(0,z.createContext)(null);function na(){let e=(0,z.useContext)(ta);if(!e)throw Error(`usePolicyDrawer must be used within PolicyDrawerProvider`);return e}function ra(){return(0,z.useContext)(ta)}function ia({kind:e,closePolicy:t}){let{t:n}=i(),a=(0,z.useRef)(null),s=e===`contract`?`checkout.contract`:e;return(0,z.useEffect)(()=>{let e=a.current;if(e)return e.showModal(),()=>{e.open&&e.close()}},[]),(0,V.jsx)(`dialog`,{ref:a,"aria-labelledby":`policy-drawer-title`,onCancel:e=>{e.preventDefault(),t()},className:`fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[92%] max-w-xl overflow-hidden border-l border-border/60 bg-background p-0 text-foreground shadow-ds-lg backdrop:bg-foreground/35 sm:w-[min(40rem,80%)]`,children:(0,V.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,V.jsxs)(`header`,{className:`flex shrink-0 items-center justify-between gap-4 border-b border-border/60 bg-background/95 p-5 backdrop-blur-sm sm:p-6`,children:[(0,V.jsx)(`h2`,{id:`policy-drawer-title`,className:`font-display text-xl font-semibold`,children:n(`${s}.title`)}),(0,V.jsx)(Si,{type:`button`,size:`icon`,variant:`ghost`,"aria-label":n(`${s}.close`),onClick:t,children:(0,V.jsx)(mt,{"aria-hidden":`true`})})]}),(0,V.jsx)(`div`,{className:`flex-1 overflow-y-auto p-5 sm:p-8`,children:e===`contract`?(0,V.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:n(`checkout.contract.soon`)}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`p`,{className:`mb-8 text-sm leading-relaxed text-muted-foreground`,children:n(`${s}.subtitle`)}),e===`privacy`?(0,V.jsx)(r,{}):(0,V.jsx)(o,{})]})}),e===`contract`?null:(0,V.jsx)(`footer`,{className:`shrink-0 border-t border-border/60 bg-muted/30 p-4 text-center`,children:(0,V.jsx)(`p`,{className:`text-2xs uppercase text-muted-foreground`,children:n(`${s}.lastUpdated`)})})]})})}function aa({children:e}){let[t,n]=(0,z.useState)(null),r=(0,z.useCallback)(e=>n(e),[]),i=(0,z.useCallback)(()=>n(null),[]),a=(0,z.useMemo)(()=>({openPolicy:r,closePolicy:i}),[r,i]);return(0,V.jsxs)(ta.Provider,{value:a,children:[e,t?(0,V.jsx)(ia,{kind:t,closePolicy:i}):null]})}export{Ct as $,c as $t,yn as A,P as At,It as B,E as Bt,$t as C,pe as Ct,on as D,R as Dt,_n as E,ue as Et,Vt as F,b as Ft,jt as G,p as Gt,Pt as H,f as Ht,Bt as I,D as It,Ot as J,g as Jt,At as K,ae as Kt,zt as L,h as Lt,bn as M,N as Mt,rn as N,j as Nt,sn as O,oe as Ot,Ht as P,A as Pt,wt as Q,u as Qt,Rt as R,T as Rt,Sn as S,ge as St,vn as T,B as Tt,Nt as U,x as Ut,Ft as V,w as Vt,Mt as W,m as Wt,Et as X,_ as Xt,Dt as Y,ie as Yt,Tt as Z,l as Zt,Dn as _,Me as _t,ea as a,_t as at,xn as b,ve as bt,Ci as c,mt as ct,bi as d,dt,St as et,ii as f,rt as ft,On as g,Ye as gt,En as h,et as ht,Vi as i,vt as it,nn as j,L as jt,cn as k,O as kt,Ei as l,pt as lt,Zr as m,tt as mt,ra as n,bt as nt,Ai as o,gt as ot,ni as p,nt as pt,kt as q,d as qt,na as r,yt as rt,wi as s,ht as st,aa as t,xt as tt,Si as u,ft as ut,Tn as v,je as vt,en as w,me as wt,Cn as x,_e as xt,wn as y,Te as yt,Lt as z,y as zt};