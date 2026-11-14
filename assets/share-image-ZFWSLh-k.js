import{d as e,f as t,l as n,n as r,r as i,s as a,t as o,u as s}from"./policy-content-BLs2uT_-.js";function c(e){e.statusCode=e.statusCode||e.code||307;let t=new Headers(e.headers);e.href&&t.get(`Location`)===null&&t.set(`Location`,e.href);let n=new Response(null,{status:e.statusCode,headers:t});if(n.options=e,e.throw)throw n;return n}function l(e){return e instanceof Response&&!!e.options}function u(e){if(typeof e==`object`&&e&&e.isSerializedRedirect)return c(e)}function d(e){return e[e.length-1]}function f(e,t){return typeof e==`function`?e(t):e}var p=Object.prototype.hasOwnProperty;function m(e){for(let t in e)if(p.call(e,t))return!0;return!1}var h=()=>Object.create(null),g=(e,t)=>_(e,t,!0);function _(e,t,n,r=0){if(e===t)return e;if(r++>500)return t;let i=Array.isArray(e)&&Array.isArray(t);if(!i&&!(v(e)&&v(t)))return t;let a=Object.keys(e),o=a.length,s=Object.keys(t),c=s.length;if(i?o!==e.length||c!==t.length||o&&d(a)!==`${o-1}`||c&&d(s)!==`${c-1}`:o!==Object.getOwnPropertyNames(e).length||c!==Object.getOwnPropertyNames(t).length||Object.getOwnPropertySymbols(t).length)return t;let l=0,u,f,m;if(i){for(;l<c&&(m=l,f=e[m],u=t[m],u=f===u?f:typeof f==`object`?_(f,u,n,r):u,u===f);l++);if(l===c&&o===c)return e}else{let i=o===c,d=!0;for(;l<c;l++){m=s[l],f=e[m];let o=t[m];u=f===o?f:typeof f==`object`?_(f,o,n,r):o,i&&=u===f&&(a[l]===m||p.call(e,m)),d&&=Object.is(u,o),a[l]=u}if(i)return Object.getOwnPropertySymbols(e).length?t:e;if(d)return t}let g=i?s.fill(0):n?h():{};for(let o=0;o<c;o++)m=i?o:s[o],i?(f=e[m],o>l&&(u=t[m],u=f===u?f:typeof f==`object`?_(f,u,n,r):u),g[m]=o<l?f:u):g[m]=a[o];return g}function v(e){return!e||typeof e!=`object`?!1:(Object.getPrototypeOf(e)?.constructor??Object)===Object}function y(e,t,n,r){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=t[i];if(a!==o&&!y(a,o,n,r))return!1}return!0}if(v(e)&&v(t)){if(n){for(let i in t)if((r||t[i]!==void 0)&&!y(e[i],t[i],n,r))return!1;return!0}let i=0;if(r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;for(let a in t)if((r||t[a]!==void 0)&&(i--===0||!y(e[a],t[a],n,r)))return!1;return i===0}return!1}function ee(e){return typeof e?.message==`string`?e.message.startsWith(`Failed to fetch dynamically imported module`)||e.message.startsWith(`error loading dynamically imported module`)||e.message.startsWith(`Importing a module script failed`):!1}var te=/[\x00-\x1f\x7f"<>`{}]/g;function ne(e){return e.replace(te,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function re(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return ne(t)}var b=[`http:`,`https:`,`mailto:`,`tel:`];function x(e){if(e[0]!==`/`&&e.includes(`:`))return/^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i.exec(e)?.[1]?.replace(/[\t\n\r]/g,``).toLowerCase()}var ie=/^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;function ae(e,t){if(!e)return!1;if(ie.test(e))return!0;let n=x(e);return n?!t.has(n):!1}var S={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},C=/[&><\u2028\u2029]/g;function w(e){return e.replace(C,e=>S[e])}function T(e){if(!e)return e;let t=e;if(/[%\\\x00-\x1f\x7f]/.test(e)){let n=/%25|%5C/gi,r=0,i;for(t=``;(i=n.exec(e))!==null;)t+=re(e.slice(r,i.index))+i[0],r=n.lastIndex;t+=re(r?e.slice(r):e)}return t}function E(e){return/[\s\u0080-\uFFFF]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function D(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function O(e){return e.replace(/\/{2,}/g,`/`)}function k(e){return e===`/`?e:e.replace(/^\/+/,``)}function A(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/+$/,``):e}function j(e){return A(k(e))}function M(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function N(e,t,n=`never`,r){if(t.includes(`//`)&&(t=O(t)),t.startsWith(`/`))return t.length===1||n===`preserve`?t:n===`always`?t.endsWith(`/`)?t:`${t}/`:t.endsWith(`/`)?t.slice(0,-1):t;let i=t===`.`,a;if(r){a=i?e:e+`\0`+t;let n=r.get(a);if(n)return n}let o;if(i)o=e.split(`/`);else{for(e.includes(`//`)&&(e=O(e)),o=e.split(`/`);o.length>1&&d(o)===``;)o.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&o.push(r):o=[r]:r===`..`?o.length>1?o.pop():o=[``]:r===`.`||o.push(r)}}o.length>1&&(d(o)===``?n===`never`&&o.pop():n===`always`&&o.push(``));let s=o.join(`/`),c=(i?O(s):s)||`/`;return a&&r&&r.set(a,c),c}function P(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g,`\\$&`),`g`);return e=>e.replace(n,e=>t.get(e)??e)}function F(e){return e==null||e===``}function I(e,t,n){if(typeof t!=`string`)return``+(t??void 0);let r=e===`_splat`;if(r&&(!t||/^[a-zA-Z0-9\-._~!/]*$/.test(t)))return t;let i=encodeURIComponent(t);return r&&(i=i.replaceAll(`%2F`,`/`)),n?n(i):i}function oe(e,t,n,r,i){let a=e.endsWith(`/`)?`/`:``,o=``;for(let e of t){if(typeof e==`string`){o+=e;continue}let[t,s,c,l]=e,u=t===2,d=u&&l!==void 0?l+a:l,f=n[s];if(t!==3||f!=null){if(i&&(i[s]=f,u&&(i[`*`]=f)),u&&F(f)){if(c===`/`&&!d)continue;f=``}o+=c+I(s,f,r)+(d||``)}}return o+a||`/`}function se(){throw Error(`Invariant failed`)}var L=`__root__`,ce=`Error preloading route! ☝️`,le=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(e){if(this.init=e=>{this.originalIndex=e,this._branch=void 0;let t=this.options,n=!t?.path&&!t?.id;this.parentRoute=this.options.getParentRoute?.(),n?this._path=L:this.parentRoute||se();let r=n?L:t?.path;r&&r!==`/`&&(r=k(r));let i=t?.id||r,a=n?L:O((this.parentRoute.id===`__root__`?``:this.parentRoute.id)+`/`+(i??``));r===`__root__`&&(r=`/`);let o=a===`__root__`?`/`:r===void 0?this.parentRoute.fullPath:O(this.parentRoute.fullPath+`/`+r);this._path=r,this._id=a,this._fullPath=o,this._to=A(o)},this.addChildren=e=>this._addFileChildren(e),this._addFileChildren=e=>(Array.isArray(e)&&(this.children=e),typeof e==`object`&&e&&(this.children=Object.values(e)),this),this._addFileTypes=()=>this,this.updateLoader=e=>(Object.assign(this.options,e),this),this.update=e=>(Object.assign(this.options,e),this),this.lazy=e=>(this.lazyFn=e,this),this.redirect=e=>c({from:this.fullPath,...e}),this.options=e||{},this.isRoot=!e?.getParentRoute,e?.id&&e?.path)throw Error(`Route cannot have both an 'id' and a 'path' option.`)}},ue=class extends le{constructor(e){super(e)}},R=t(s(),1),de=R.use,fe=R.useLayoutEffect,z=n(),pe=()=>!0,me=()=>!1;function he({children:e,fallback:t=null}){return(0,z.jsx)(R.Fragment,{children:ge()?e:t})}function ge(e=!0){return R.useSyncExternalStore(_e,pe,e?me:pe)}function _e(){return()=>{}}var ve=R.createContext(null);function ye(e){return R.useContext(ve)}var be=R.createContext(void 0),xe=R.createContext(void 0),Se=e((e=>{var t=s();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,c=t.useDebugValue;function l(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),s=r[0].inst,l=r[1];return o(function(){s.value=n,s.getSnapshot=t,u(s)&&l({inst:s})},[e,n,t]),a(function(){return u(s)&&l({inst:s}),e(function(){u(s)&&l({inst:s})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),Ce=e(((e,t)=>{t.exports=Se()})),we=e((e=>{var t=s(),n=Ce();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useSyncExternalStore,o=t.useRef,c=t.useEffect,l=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var d=o(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),s!==void 0&&f.hasValue){var t=f.value;if(s(t,e))return c=t}return c=e}if(t=c,i(o,e))return t;var n=r(e);return s!==void 0&&s(t,n)?(o=e,t):(o=e,c=n)}var a=!1,o,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,s]);var p=a(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),Te=e(((e,t)=>{t.exports=we()}))();function Ee(e,t){return e===t}function De(e,t=e=>e,n){let r=n?.compare??Ee,i=(0,R.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,R.useCallback)(()=>e.get(),[e]);return(0,Te.useSyncExternalStoreWithSelector)(i,a,a,t,r)}var Oe={};function ke(e,t){let n=R.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=_(n.current,i):i}}function B(e){let t=ye(),n=R.useContext(e.from?xe:be),r=e.from??n,i=t.stores.getMatchStore(r),a=ke(e,t),o=De(i,e=>e?a(e):Oe);if(o!==Oe)return o;(e.shouldThrow??!0)&&se()}function Ae(e){return B({from:e.from,strict:e.strict,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.loaderData):t.loaderData})}function je(e){let{select:t,...n}=e;return B({...n,select:e=>t?t(e.loaderDeps):e.loaderDeps})}function Me(e){return B({from:e.from,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,strict:e.strict,select:t=>{let n=e.strict===!1?t.params:t._strictParams;return e.select?e.select(n):n}})}function Ne(e){return B({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.search):t.search})}function Pe(e){let t=ye();return R.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}function Fe(e){return B({...e,select:t=>e.select?e.select(t.context):t.context})}function Ie(...e){let t=R.useRef(e),n=t.current;return e.forEach((e,t)=>{y(n[t],e,!1,!0)||(n[t]=e)}),t.current}function Le(e,t){e.preloadRoute(t).catch(e=>{console.warn(e),console.warn(ce)})}var Re={compare:(e,t)=>e[0]===t[0]&&e[1]===t[1]};function ze(e,t){let n=typeof e==`string`&&x(e);if(n)return t.has(n)?e:null}function Be(e,t,n,r,i){let a=M(e.pathname,r),o=M(t.pathname,r);return(n?.exact?a!==o:!(a.startsWith(o)&&(a.length===o.length||a[o.length]===`/`)))||(n?.includeSearch??!0)&&!y(e.search,t.search,!n?.exact,n?.explicitUndefined)?!1:!n?.includeHash||i&&e.hash===t.hash}function Ve(e,t,n){let r=ye(),i=R.useRef(null),a=R.useCallback(e=>{if(i.current=e,typeof t==`function`)return t(e);t&&(t.current=e)},[t]),{activeOptions:o,to:s,preload:c,preloadDelay:l,hashScrollIntoView:u,replace:d,startTransition:f,resetScroll:p,viewTransition:m,ignoreBlocker:h,disabled:g,target:_,onClick:v,onBlur:y,onFocus:ee,onMouseEnter:te,onMouseLeave:ne,onTouchStart:re}=e,b=ge(!!o?.includeHash),[ie,ae,S]=Ie(e.search,e.params,o),[C,w]=R.useMemo(()=>[e,{...e}],[r,e.from,e._fromLocation,e.hash,e.to,ie,ae,e.state,e.mask,e.unsafeRelative]),T=R.useMemo(()=>{let e=ze(s,r.protocolAllowlist);if(e!==void 0){let t=[e??void 0];return()=>t}let t,n;return e=>{C._fromLocation||(w._fromLocation=e);let i=r.buildLocation(w),a=Xe(i,r,g);return(!t||t[0]!==a)&&(t=[a,!(g||a&&!x(a))&&void 0],n=[a,!0]),t[1]!==void 0&&Be(e,i,S,r.basepath,b)?n:t}},[S,g,b,C,w,r,s]),[E,D]=De(r.stores.location,T,Re),O=D===void 0&&E,k=g||E===void 0,A=R.useRef(!1),j=e.reloadDocument||O||k?!1:c??r.options.defaultPreload,M=l??r.options.defaultPreloadDelay??0,N=R.useCallback(e=>{let t=e?.isIntersecting;if(!(t??j===`intent`)){t===!1&&Je(i);return}if(!M){Le(r,C);return}qe.has(i)||qe.set(i,setTimeout(()=>{qe.delete(i),Le(r,C)},M))},[r,C,i,j,M]);R.useEffect(()=>{if(!j)return;j===`render`&&!A.current&&(A.current=!0,Le(r,C));let e=!0,t;return j===`viewport`&&i.current&&typeof IntersectionObserver==`function`&&(t=new IntersectionObserver(t=>{e&&N(t.pop())},{rootMargin:`100px`}),t.observe(i.current)),()=>{e=!1,t?.disconnect(),Je(i)}},[r,C,j,N,i]);let P=Ge(e,n);if(P.ref=t?a:i,O)return P.href=O,P;let F=e=>{let t=_??e.currentTarget.getAttribute(`target`);!k&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(!t||t===`_self`)&&e.button===0&&(e.preventDefault(),r.navigate({...C,replace:d,resetScroll:p,hashScrollIntoView:u,startTransition:f,viewTransition:m,ignoreBlocker:h}))},I=()=>{j===`intent`&&Le(r,C)},oe=()=>{j===`intent`&&Je(i)};return P.onClick=Ye(v,F),P.onBlur=Ye(y,oe),P.onFocus=Ye(ee,N),P.onMouseEnter=Ye(te,N),P.onMouseLeave=Ye(ne,oe),P.onTouchStart=Ye(re,I),Ke(P,e,D,E,k,n)}var He={},Ue={className:`active`},We=new Set([`to`,`params`,`search`,`hash`,`state`,`mask`,`from`,`unsafeRelative`,`_fromLocation`,`reloadDocument`,`preload`,`preloadDelay`,`preloadIntentProximity`,`hashScrollIntoView`,`replace`,`startTransition`,`resetScroll`,`viewTransition`,`ignoreBlocker`,`activeProps`,`inactiveProps`,`activeOptions`,`_asChild`]);function Ge(e,t){let n={};for(let r in e)We.has(r)||r===`type`&&t!==void 0||r===`disabled`&&t===`a`||(n[r]=e[r]);return n}function Ke(e,t,n,r,i,a){let{activeProps:o,inactiveProps:s,className:c,style:l,target:u}=t,d=f(n?o:s,{})??(n?Ue:He);Object.assign(e,d),e.href=r,a!==`a`&&(e.disabled=i),e.target=u;let p=d.style;(l||p)&&(e.style=l&&p?{...l,...p}:l||p);let m=d.className;return(c||m)&&(e.className=c?m?`${c} ${m}`:c:m),i&&(e.role=`link`,e[`aria-disabled`]=!0),n&&(e[`data-status`]=`active`,e[`aria-current`]=`page`),e}var qe=new WeakMap,Je=e=>{clearTimeout(qe.get(e)),qe.delete(e)},Ye=(e,t)=>e?n=>n.defaultPrevented||(e(n),n.defaultPrevented||t(n)):t;function Xe(e,t,n){if(n)return;let r=e.maskedLocation??e,i=r.external?r.publicHref:t.history.createHref(r.publicHref)||`/`;if(!((r.external||i!==r.publicHref)&&ae(i,t.protocolAllowlist)))return i}var Ze=R.memo(R.forwardRef((e,t)=>{let n=e._asChild||`a`,r=Ve(e,t,n),i=typeof e.children==`function`?e.children({isActive:r[`data-status`]===`active`}):e.children;return R.createElement(n,r,i)}),Qe);function Qe(e,t){let n=0;for(let r in t)if(n++,e[r]!==t[r]&&(!We.has(r)||!y(e[r],t[r],!1,!0)))return!1;for(let t in e)n--;return n===0}var $e=class extends le{constructor(e){super(e),this.useMatch=e=>B({...e,from:this.id}),this.useRouteContext=e=>Fe({...e,from:this.id}),this.useSearch=e=>Ne({...e,from:this.id}),this.useParams=e=>Me({...e,from:this.id}),this.useLoaderDeps=e=>je({...e,from:this.id}),this.useLoaderData=e=>Ae({...e,from:this.id}),this.useNavigate=()=>Pe({from:this.fullPath}),this.Link=R.forwardRef((e,t)=>(0,z.jsx)(Ze,{ref:t,from:this.fullPath,...e}))}};function et(e){return new $e(e)}var tt=class extends ue{constructor(e){super(e),this.useMatch=e=>B({...e,from:this.id}),this.useRouteContext=e=>Fe({...e,from:this.id}),this.useSearch=e=>Ne({...e,from:this.id}),this.useParams=e=>Me({...e,from:this.id}),this.useLoaderDeps=e=>je({...e,from:this.id}),this.useLoaderData=e=>Ae({...e,from:this.id}),this.useNavigate=()=>Pe({from:this.fullPath}),this.Link=R.forwardRef((e,t)=>(0,z.jsx)(Ze,{ref:t,from:this.fullPath,...e}))}};function nt(e){return new tt(e)}function rt(e){return e=>{let t=et(e);return t.isRoot=!1,t}}function it(e,t){let n,r,i,a=()=>(n||=(i=void 0,e().then(e=>{n=void 0,o.preload=void 0,r=e[t??`default`]}).catch(e=>{n=void 0,i=e})),n),o=function(e){if(i){if(ee(i)&&typeof sessionStorage<`u`){let e=`tanstack_router_reload:${i.message}`;if(!sessionStorage.getItem(e))throw sessionStorage.setItem(e,`1`),window.location.reload(),new Promise(()=>{})}throw i}if(!r)if(de)de(a());else throw a();return R.createElement(r,e)};return o.preload=a,o}function at(e){let t=ye({warn:e?.router===void 0}),n=e?.router||t;return De(n.stores.__store,ke(e,n))}var ot=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),st=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ct=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),lt=e=>{let t=ct(e);return t.charAt(0).toUpperCase()+t.slice(1)},ut={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},dt=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ft=(0,R.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,R.createElement)(`svg`,{ref:c,...ut,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ot(`lucide`,i),...!a&&!dt(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,R.createElement)(e,t)),...Array.isArray(a)?a:[a]])),pt=(e,t)=>{let n=(0,R.forwardRef)(({className:n,...r},i)=>(0,R.createElement)(ft,{ref:i,iconNode:t,className:ot(`lucide-${st(lt(e))}`,`lucide-${e}`,n),...r}));return n.displayName=lt(e),n},mt=pt(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ht=pt(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),gt=pt(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),_t=`---
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
`,vt=`---
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
`,yt=`---
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
`,bt=`---
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
`,xt=`---
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
`,St=`---
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
`,Ct=`---
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
`,wt=`---
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
`,Tt=`---
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
`,Et=`---
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
`,Dt=`---
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
`,Ot=`---
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
`,kt=`---
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
`,At=`---
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
`,jt=`---
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
`,Mt=`---
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
`,Nt=`---
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
`,Pt=`---
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
`,Ft=`---
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
`,It=`---
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
`,Lt=`---
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
`,Rt=`---
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
`,zt=`---
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
`,Bt=`---
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
`,Vt=`---
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
`,Ht=`---
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
`,Ut=`---
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
`,Wt=`---
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
`,Gt={url:`/media/assets-v1/357f3b8a-a6cd-4189-b5f6-8a1f406ca158/blog-cover-assortment.jpg`},Kt={url:`/media/assets-v1/f5c29ec1-8900-47ef-b84b-6069192808fa/blog-cover-forecast.jpg`},qt={url:`/media/assets-v1/7865821b-6f11-4cef-a86e-b47d40b13dd2/blog-cover-pricing.jpg`},Jt={url:`/media/assets-v1/cb4825bc-633a-4b91-9870-f52c6fb38a60/blog-cover-recommendation.jpg`},Yt={url:`/media/assets-v1/b204822e-9584-42f5-87f6-3d8e53135c9c/media-logo-cadencia.png`},Xt={url:`/media/assets-v1/2e1be98c-f99d-422b-b93f-51dc8d2a723b/media-logo-canal-vitrine.png`},Zt={url:`/media/assets-v1/23cc01c2-ade4-4564-96ae-ac09e80e2fce/media-logo-mercado-vivo.png`},Qt={url:`/media/assets-v1/6bbf6a40-956f-4e47-aaa6-b79edd2d276d/media-logo-pauta-varejo.png`},$t={url:`/media/assets-v1/dd9996e7-3b8a-47f9-ad28-5a0c63ad1ef4/media-logo-rede-giro.png`},en=[`i6 Article`,`i6 Blog`,`i6 on Media`,`i6 eBook`,`i6 Social`],tn=[`i6 Article`,`i6 Blog`],nn=[`i6 on Media`,`i6 Social`],rn={"blog-cover-forecast":Kt.url,"blog-cover-assortment":Gt.url,"blog-cover-pricing":qt.url,"blog-cover-recommendation":Jt.url,"media-logo-mercado-vivo":Zt.url,"media-logo-pauta-varejo":Qt.url,"media-logo-cadencia":Yt.url,"media-logo-rede-giro":$t.url,"media-logo-canal-vitrine":Xt.url};function an(e){if(e)return/^https?:\/\//.test(e)||e.startsWith(`/`)?e:rn[e]}function on(e){return e.startsWith(`en`)?`en`:e.startsWith(`es`)?`es`:`pt`}var sn=[`pt`,`en`,`es`];function cn(e){return typeof e==`string`&&sn.includes(e)}function ln(e){return e===`en`?`en-US`:e===`es`?`es-ES`:`pt-BR`}function un(e){let t=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(e.trim());if(!t)return{data:{},body:e};let[,n,r=``]=t,i={};for(let e of(n??``).split(/\r?\n/)){let t=e.trim();if(!t||t.startsWith(`#`))continue;let n=t.indexOf(`:`);if(n===-1)continue;let r=t.slice(0,n).trim(),a=t.slice(n+1).trim();r&&(i[r]=dn(a))}return{data:i,body:r}}function dn(e){if(e===``||e===`null`||e===`~`)return null;if(e===`true`)return!0;if(e===`false`)return!1;if(e.startsWith(`[`)&&e.endsWith(`]`))return e.slice(1,-1).split(`,`).map(e=>fn(e.trim())).filter(e=>e.length>0);let t=fn(e);return t===e?/^-?\d+(\.\d+)?$/.test(e)?Number(e):e:t}function fn(e){if(e.length>=2&&e.startsWith(`"`)&&e.endsWith(`"`))try{return JSON.parse(e)}catch{return e.slice(1,-1)}return e.length>=2&&e.startsWith(`'`)&&e.endsWith(`'`)?e.slice(1,-1):e}function pn(e){if(!e)return;let t=e.replace(/`{1,3}[^`]*`{1,3}/g,` `).replace(/!\[[^\]]*\]\([^)]*\)/g,` `).replace(/\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/^#{1,6}\s+/gm,``).replace(/[*_~>]/g,``).replace(/\s+/g,` `).trim();return t.length>0?t:void 0}var mn=Object.assign({"/src/content/insights/a-promocao-que-se-paga-pt.md":_t,"/src/content/insights/cadencia-precificacao-dinamica-pt.md":vt,"/src/content/insights/catalogo-que-alimenta-modelo-pt.md":yt,"/src/content/insights/da-metrica-ao-experimento-pt.md":bt,"/src/content/insights/demand-forecasting-teams-actually-use-en.md":xt,"/src/content/insights/elasticidade-preco-sem-canibalizar-margem-pt.md":St,"/src/content/insights/i6-in-the-media-predictive-decisions-en.md":Ct,"/src/content/insights/i6-na-midia-decisao-preditiva-pt.md":wt,"/src/content/insights/i6-na-midia-ia-aplicada-pt.md":Tt,"/src/content/insights/local-assortment.en.md":Et,"/src/content/insights/local-assortment.es.md":Dt,"/src/content/insights/local-assortment.pt.md":Ot,"/src/content/insights/mercado-vivo-conselho-preditivo-en.md":kt,"/src/content/insights/mercado-vivo-conselho-preditivo-pt.md":At,"/src/content/insights/previsao-demanda-time-comercial-pt.md":jt,"/src/content/insights/price-elasticity-without-eating-margin-en.md":Mt,"/src/content/insights/recomendar-para-quem-voce-ainda-nao-conhece-pt.md":Nt,"/src/content/insights/recommending-to-people-you-dont-know-en.md":Pt,"/src/content/insights/rede-giro-governanca-de-dados-pt.md":Ft,"/src/content/insights/relevance-discovery.en.md":It,"/src/content/insights/relevance-discovery.es.md":Lt,"/src/content/insights/relevance-discovery.pt.md":Rt,"/src/content/insights/ruptura-de-gondola-e-decisao-pt.md":zt,"/src/content/insights/social-bastidores-motor-previsao-pt.md":Bt,"/src/content/insights/social-encontro-comunidade-pt.md":Vt,"/src/content/insights/social-numero-da-semana-en.md":Ht,"/src/content/insights/social-numero-da-semana-pt.md":Ut,"/src/content/insights/sortimento-por-cluster-de-loja-pt.md":Wt});function hn(e){return typeof e==`string`&&en.includes(e)}function gn(e){return(e.split(`/`).pop()??``).replace(/\.md$/,``).replace(/[.-](pt|en|es)$/,``)}function V(e,t){return t?{[e]:t}:{}}function H(e,t){let n=e[t];return typeof n==`string`&&n.length>0?n:void 0}function _n(e,t){let{data:n,body:r}=un(t),i=H(n,`title`),a=H(n,`language`),o=a===`en`||a===`pt`||a===`es`?a:null,s=H(n,`date`),c=n.type,l=hn(c)?c:null;if(!i||!o||!s||!l)return null;let u=n.tags,d=Array.isArray(u)?u:[],f=pn(H(n,`excerpt`)),p=H(n,`cover_image`),m=n.read_time,h=H(n,`theme`),g=H(n,`theme_label`),_=H(n,`external_url`),v=H(n,`format`)===`html`?`html`:`markdown`;return{...V(`id`,H(n,`id`)),slug:H(n,`slug`)??gn(e),title:i,language:o,type:l,date:s,...f?{excerpt:f}:{},...p?{coverImage:p}:{},...typeof m==`number`?{readTime:m}:{},isDefault:n.is_default===!0,featured:n.featured===!0,gated:n.gated===!0,...h?{theme:h}:{},...g?{themeLabel:g}:{},tags:d,..._?{externalUrl:_}:{},format:v,body:r.trim(),...V(`writerName`,H(n,`writer_name`)),...V(`writerRole`,H(n,`writer_role`)),...V(`writerImage`,H(n,`writer_image_key`)),ctaForm:n.cta_form===!0,...V(`ctaFormTitle`,H(n,`cta_form_title`)),...V(`ctaFormSubtitle`,H(n,`cta_form_subtitle`)),...V(`ctaFormText`,H(n,`cta_form_text`)),...V(`relatedProduct`,H(n,`related_product`)),...V(`assetUrl`,H(n,`asset_url`))}}var vn=Object.entries(mn).map(([e,t])=>_n(e,t)).filter(e=>e!==null).sort((e,t)=>e.date<t.date?1:e.date>t.date?-1:0);function yn(e,t){return vn.filter(n=>t.includes(n.type)&&n.language===e)}function bn(e,t,n=en){return vn.find(r=>r.slug===t&&n.includes(r.type)&&r.language===e)}function xn(e){return e.find(e=>e.isDefault)??e[0]}function Sn(e){return e.themeLabel??e.theme}function Cn(e){let t=e.split(`/`).filter(Boolean)[0];return cn(t)?ln(t):a}function wn(e){return e.startsWith(`en`)?`en`:e.startsWith(`es`)?`es`:`pt`}function Tn(e,t){let n=e.split(`/`).filter(Boolean),r=n.length>0&&cn(n[0])?n.slice(1).join(`/`):n.join(`/`);return`/${t}${r?`/${r}`:``}`}function En(e,t){return e===`pt`&&t===``?`/`:`/${e}${t}`}function Dn(e,t){return[...[`pt`,`en`,`es`].map(n=>({rel:`alternate`,hrefLang:n,href:`${e}${En(n,t)}`})),{rel:`alternate`,hrefLang:`x-default`,href:`${e}${En(`pt`,t)}`}]}var On=[`assortment`,`forecasting`,`pricing`,`relevance`,`targeting`],kn=[`assortment`,`forecasting`,`pricing`,`relevance`,`targeting`],An=new Set(On);function jn(e){return An.has(e)}function Mn(e){return e===`production`?`production`:`test`}var Nn=Mn({BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,TSS_DEV_SERVER:`false`,TSS_DEV_SSR_STYLES_BASEPATH:`/`,TSS_DEV_SSR_STYLES_ENABLED:`true`,TSS_DISABLE_CSRF_MIDDLEWARE_WARNING:`false`,TSS_INLINE_CSS_ENABLED:`false`,TSS_ROUTER_BASEPATH:``,TSS_SERVER_FN_BASE:`/_serverFn/`,VITE_APP_ORIGIN:`https://app.infinity6.ai`,VITE_I6_ENV:`test`,VITE_PUBLISH_TARGET:`pages`}.VITE_I6_ENV),Pn={test:`https://decsuite.sandbox.rs.infinity6.ai`,production:`https://decsuite.app.rs.infinity6.ai`}[Nn],Fn={test:`https://dev.app.infinity6.ai/#home`,production:`https://app.infinity6.ai/#home`};function In(e=Nn){return`${Fn[e]}?origem=checkout`}var Ln=`campaign_state`,Rn=`i6ds_campaign_state`,zn={test:`CAESAXMaAXMilwFnSgX21qEGM3PdMlLd9b-HwTuALPte-Lz4ArlkLvVgQDColc1mz59VvNvYXKnfoGkwX7OzN5zb8oSrdNs124bLpD0CRA7tI0bukbmPvycJyS6He_JF6fv3Ykpnz8TVzoSeTJVkgnyGXRhyk9u-rofIZJJEtK8jiiJ9der0tILro8uu6l0SkivaDV9R1hW_MMdLj8OBe1e1`,production:``},Bn=/^[A-Za-z0-9+/_-]+={0,2}$/;function Vn(e){return typeof e==`string`&&e.length>0&&e.length<=2048&&Bn.test(e)&&!/\s/.test(e)}function Hn(e){if(typeof window>`u`)return;let t=new URLSearchParams(e).get(`campaign_state`)?.replace(/ /g,`+`)??null;if(Vn(t))try{window.sessionStorage.setItem(Rn,t)}catch{}}function Un(e){let t=e.startsWith(`?`)?e.slice(1):e;if(!t)return null;let n=t.split(`&`),r=n.filter(e=>{let t=e.split(`=`,1)[0]??``;try{return decodeURIComponent(t.replace(/\+/g,` `))!==Ln}catch{return!0}});if(r.length===n.length)return null;let i=r.filter(e=>e!==``).join(`&`);return i?`?${i}`:``}function Wn(){if(typeof window>`u`)return;let{pathname:e,search:t,hash:n}=window.location;Hn(t);let r=Un(t);if(r!==null)try{window.history.replaceState(window.history.state,``,`${e}${r}${n}`)}catch{}}function Gn(e=Nn){let t=zn[e];return Vn(t)?t:null}function Kn(e=Nn){if(typeof window>`u`)return Gn(e);try{let t=window.sessionStorage.getItem(Rn);return Vn(t)?t:Gn(e)}catch{return Gn(e)}}var qn=`https://www.googletagmanager.com/gtag/js`,Jn=/^G-[A-Z0-9]{6,12}$/,Yn=null,Xn=!1,Zn=()=>typeof window>`u`?``:window.location.hostname;function Qn(e,t){if(t.toLowerCase()!==`decision.infinity6.ai`)return null;let n=e.querySelector(`meta[name="i6-ga4-id"]`)?.getAttribute(`content`)??``;return Jn.test(n)?n:null}function U(...e){(window.dataLayer??=[]).push(arguments)}function $n(e,t){window[`ga-disable-${e}`]=t}function er(){if(typeof window>`u`||typeof document>`u`)return;let e=Yn??Qn(document,Zn());if(!e)return;if(Wn(),$n(e,!1),Yn){U(`consent`,`update`,{analytics_storage:`granted`}),Xn=!0;return}U(`consent`,`default`,{ad_storage:`denied`,ad_user_data:`denied`,ad_personalization:`denied`,analytics_storage:`denied`,functionality_storage:`denied`,personalization_storage:`denied`,security_storage:`denied`}),U(`consent`,`update`,{analytics_storage:`granted`}),U(`js`,new Date),U(`config`,e,{cookie_domain:`auto`,allow_google_signals:!1,allow_ad_personalization_signals:!1});let t=document.createElement(`script`);t.async=!0,t.src=`${qn}?id=${encodeURIComponent(e)}`,document.head.appendChild(t),Yn=e,Xn=!0}function tr(){Xn=!1,!(!Yn||typeof window>`u`)&&(U(`consent`,`update`,{analytics_storage:`denied`}),$n(Yn,!0))}var nr=new Set([`utm_source`,`utm_medium`,`utm_campaign`,`utm_term`,`utm_content`,`produto`,`tipo`,`motivo`,`plan`]),rr=100;function ir(e){let t=new URLSearchParams;for(let[n,r]of new URLSearchParams(e.search))nr.has(n)&&t.append(n,r.slice(0,rr));let n=t.toString();return`${e.origin}${e.pathname}${n?`?${n}`:``}`}function ar(e,t){!Xn||!Yn||typeof window>`u`||U(`event`,e,{...t,page_location:ir(window.location)})}var or=kn,W=(e,t)=>typeof t==`string`&&e.includes(t),sr=[`demo`,`contato`,`produto`,`precos`,`suporte`,`chat`,`blog`],cr=[`pt`,`en`,`es`];function lr(e){return typeof e==`string`&&or.includes(e)}function ur(e){if(!W(sr,e.leadType)||!W(cr,e.language))return;let t=e.productInterest;(lr(t)||t===`suite`||t===`nenhum`)&&ar(`generate_lead`,{lead_type:e.leadType,product_interest:t,language:e.language})}var dr=[`starter`,`growth`,`scale`];function fr(e){!W(dr,e.planId)||!lr(e.product)||ar(`begin_checkout`,{plan_id:e.planId,product:e.product})}var pr=[`start_now`,`book_demo`,`talk_to_team`,`see_plans`,`free_trial`,`explore_products`,`contact`],mr=[`header`,`header_mobile`,`home_hero`,`home_products`,`home_plans`,`product_hero`,`product_cta`,`success_stories`,`pricing_table`,`plan_calculator`,`checkout`,`footer`];function hr(e){!W(pr,e.name)||!W(mr,e.location)||(lr(e.product)||e.product===`suite`)&&ar(`cta_click`,{cta_name:e.name,cta_location:e.location,product_context:e.product})}function gr(e){!W([`home_product`,`mega_menu`],e.contentType)||!lr(e.itemId)||ar(`select_content`,{content_type:e.contentType,item_id:e.itemId})}var _r=[`chatgpt`,`gemini`,`perplexity`,`claude`,`none`];function vr(e){!W([`copy_prompt`,`open_provider`],e.action)||!W(_r,e.provider)||ar(`ai_prompt_interaction`,{action:e.action,provider:e.provider})}var yr=/^\/(?:pt|en|es)\/(i6-blog|i6-midia)\/([a-z0-9][a-z0-9-]{0,119})\/?$/;function br(e){let t=``;try{t=new URL(e).pathname}catch{return null}let n=yr.exec(t);return n?{contentType:n[1]===`i6-blog`?`blog`:`midia`,articleSlug:n[2]}:null}function xr(e){let t=br(e);t&&ar(`share_content`,{content_type:t.contentType,article_slug:t.articleSlug})}var Sr=[{labelKey:`nav.products`,target:{kind:`products-menu`}},{labelKey:`nav.intelligence`,target:{kind:`intelligence-menu`}},{labelKey:`nav.cases`,target:{kind:`route`,to:`/$lang/success-stories`}},{labelKey:`nav.pricing`,target:{kind:`route`,to:`/$lang/pricing`}}],Cr=/^\/\$lang\/products\/([a-z]+)$/;function wr(e){if(e.kind!==`route`)return`suite`;let t=Cr.exec(e.to)?.[1];if(lr(t))return t;if(lr(e.hash))return e.hash;let n=e.search?.produto;return lr(n)?n:`suite`}function Tr(){return at({select:e=>wn(Cn(e.location.pathname))})}function Er({target:e,className:t,children:n,onClick:r,cta:i}){let a=Tr(),o=i?t=>{hr({...i,product:wr(e)}),r?.(t)}:r;return e.kind===`anchor`?(0,z.jsx)(`a`,{href:e.href,className:t,onClick:o,children:n}):e.kind===`route`?(0,z.jsx)(Ze,{to:e.to,params:{lang:a},...e.hash===void 0?{}:{hash:e.hash},...e.search===void 0?{}:{search:e.search},className:t,onClick:o,children:n}):(0,z.jsx)(`span`,{className:t,"aria-disabled":`true`,children:n})}function Dr(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Dr(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Or(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Dr(e))&&(r&&(r+=` `),r+=t);return r}var kr=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Ar=(e,t)=>({classGroupId:e,validator:t}),jr=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Mr=`-`,Nr=[],Pr=`arbitrary..`,Fr=e=>{let t=Rr(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Lr(e);let n=e.split(Mr);return Ir(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?kr(i,t):t:i||Nr}return n[e]||Nr}}},Ir=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Ir(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Mr):e.slice(t).join(Mr),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Lr=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Pr+r:void 0})(),Rr=e=>{let{theme:t,classGroups:n}=e;return zr(n,t)},zr=(e,t)=>{let n=jr();for(let r in e){let i=e[r];Br(i,n,r,t)}return n},Br=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Vr(i,t,n,r)}},Vr=(e,t,n,r)=>{if(typeof e==`string`){Hr(e,t,n);return}if(typeof e==`function`){Ur(e,t,n,r);return}Wr(e,t,n,r)},Hr=(e,t,n)=>{let r=e===``?t:Gr(t,e);r.classGroupId=n},Ur=(e,t,n,r)=>{if(Kr(e)){Br(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Ar(n,e))},Wr=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Br(o,Gr(t,a),n,r)}},Gr=(e,t)=>{let n=e,r=t.split(Mr),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=jr(),n.nextPart.set(t,i)),n=i}return n},Kr=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,qr=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Jr=`!`,Yr=`:`,Xr=[],Zr=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Qr=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Yr){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Jr)?(c=s.slice(0,-1),l=!0):s.startsWith(Jr)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Zr(t,l,c,u)};if(t){let e=t+Yr,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Zr(Xr,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},$r=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},ei=e=>({cache:qr(e.cacheSize),parseClassName:Qr(e),sortModifiers:$r(e),postfixLookupClassGroupIds:ti(e),...Fr(e)}),ti=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},ni=/\s+/,ri=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(ni),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+Jr:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let ee=i(g,h);for(let e=0;e<ee.length;++e){let t=ee[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},ii=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=ai(n))&&(i&&(i+=` `),i+=r);return i},ai=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=ai(e[r]))&&(n&&(n+=` `),n+=t);return n},oi=(e,...t)=>{let n,r,i,a,o=o=>(n=ei(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=ri(e,n);return i(e,a),a};return a=o,(...e)=>a(ii(...e))},si=[],G=e=>{let t=t=>t[e]||si;return t.isThemeGetter=!0,t},ci=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,li=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ui=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,di=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,fi=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,pi=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,mi=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,hi=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,K=e=>ui.test(e),q=e=>!!e&&!Number.isNaN(Number(e)),J=e=>!!e&&Number.isInteger(Number(e)),gi=e=>e.endsWith(`%`)&&q(e.slice(0,-1)),Y=e=>di.test(e),_i=()=>!0,vi=e=>fi.test(e)&&!pi.test(e),yi=()=>!1,bi=e=>mi.test(e),xi=e=>hi.test(e),Si=e=>!X(e)&&!Z(e),Ci=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),wi=e=>Q(e,Hi,yi),X=e=>ci.test(e),Ti=e=>Q(e,Ui,vi),Ei=e=>Q(e,Wi,q),Di=e=>Q(e,Ki,_i),Oi=e=>Q(e,Gi,yi),ki=e=>Q(e,Bi,yi),Ai=e=>Q(e,Vi,xi),ji=e=>Q(e,qi,bi),Z=e=>li.test(e),Mi=e=>zi(e,Ui),Ni=e=>zi(e,Gi),Pi=e=>zi(e,Bi),Fi=e=>zi(e,Hi),Ii=e=>zi(e,Vi),Li=e=>zi(e,qi,!0),Ri=e=>zi(e,Ki,!0),Q=(e,t,n)=>{let r=ci.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},zi=(e,t,n=!1)=>{let r=li.exec(e);return r?r[1]?t(r[1]):n:!1},Bi=e=>e===`position`||e===`percentage`,Vi=e=>e===`image`||e===`url`,Hi=e=>e===`length`||e===`size`||e===`bg-size`,Ui=e=>e===`length`,Wi=e=>e===`number`,Gi=e=>e===`family-name`,Ki=e=>e===`number`||e===`weight`,qi=e=>e===`shadow`,Ji=oi(()=>{let e=G(`color`),t=G(`font`),n=G(`text`),r=G(`font-weight`),i=G(`tracking`),a=G(`leading`),o=G(`breakpoint`),s=G(`container`),c=G(`spacing`),l=G(`radius`),u=G(`shadow`),d=G(`inset-shadow`),f=G(`text-shadow`),p=G(`drop-shadow`),m=G(`blur`),h=G(`perspective`),g=G(`aspect`),_=G(`ease`),v=G(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],ee=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],te=()=>[...ee(),Z,X],ne=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],re=()=>[`auto`,`contain`,`none`],b=()=>[Z,X,c],x=()=>[K,`full`,`auto`,...b()],ie=()=>[J,`none`,`subgrid`,Z,X],ae=()=>[`auto`,{span:[`full`,J,Z,X]},J,Z,X],S=()=>[J,`auto`,Z,X],C=()=>[`auto`,`min`,`max`,`fr`,Z,X],w=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],T=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],E=()=>[`auto`,...b()],D=()=>[K,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...b()],O=()=>[K,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...b()],k=()=>[K,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...b()],A=()=>[e,Z,X],j=()=>[...ee(),Pi,ki,{position:[Z,X]}],M=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],N=()=>[`auto`,`cover`,`contain`,Fi,wi,{size:[Z,X]}],P=()=>[gi,Mi,Ti],F=()=>[``,`none`,`full`,l,Z,X],I=()=>[``,q,Mi,Ti],oe=()=>[`solid`,`dashed`,`dotted`,`double`],se=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],L=()=>[q,gi,Pi,ki],ce=()=>[``,`none`,m,Z,X],le=()=>[`none`,q,Z,X],ue=()=>[`none`,q,Z,X],R=()=>[q,Z,X],de=()=>[K,`full`,...b()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Y],breakpoint:[Y],color:[_i],container:[Y],"drop-shadow":[Y],ease:[`in`,`out`,`in-out`],font:[Si],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Y],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Y],shadow:[Y],spacing:[`px`,q],text:[Y],"text-shadow":[Y],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,K,X,Z,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,Z,X]}],"container-named":[Ci],columns:[{columns:[q,X,Z,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:te()}],overflow:[{overflow:ne()}],"overflow-x":[{"overflow-x":ne()}],"overflow-y":[{"overflow-y":ne()}],overscroll:[{overscroll:re()}],"overscroll-x":[{"overscroll-x":re()}],"overscroll-y":[{"overscroll-y":re()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:x()}],"inset-x":[{"inset-x":x()}],"inset-y":[{"inset-y":x()}],start:[{"inset-s":x(),start:x()}],end:[{"inset-e":x(),end:x()}],"inset-bs":[{"inset-bs":x()}],"inset-be":[{"inset-be":x()}],top:[{top:x()}],right:[{right:x()}],bottom:[{bottom:x()}],left:[{left:x()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[J,`auto`,Z,X]}],basis:[{basis:[K,`full`,`auto`,s,...b()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[q,K,`auto`,`initial`,`none`,X]}],grow:[{grow:[``,q,Z,X]}],shrink:[{shrink:[``,q,Z,X]}],order:[{order:[J,`first`,`last`,`none`,Z,X]}],"grid-cols":[{"grid-cols":ie()}],"col-start-end":[{col:ae()}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":ie()}],"row-start-end":[{row:ae()}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":C()}],"auto-rows":[{"auto-rows":C()}],gap:[{gap:b()}],"gap-x":[{"gap-x":b()}],"gap-y":[{"gap-y":b()}],"justify-content":[{justify:[...w(),`normal`]}],"justify-items":[{"justify-items":[...T(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...T()]}],"align-content":[{content:[`normal`,...w()]}],"align-items":[{items:[...T(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...T(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":w()}],"place-items":[{"place-items":[...T(),`baseline`]}],"place-self":[{"place-self":[`auto`,...T()]}],p:[{p:b()}],px:[{px:b()}],py:[{py:b()}],ps:[{ps:b()}],pe:[{pe:b()}],pbs:[{pbs:b()}],pbe:[{pbe:b()}],pt:[{pt:b()}],pr:[{pr:b()}],pb:[{pb:b()}],pl:[{pl:b()}],m:[{m:E()}],mx:[{mx:E()}],my:[{my:E()}],ms:[{ms:E()}],me:[{me:E()}],mbs:[{mbs:E()}],mbe:[{mbe:E()}],mt:[{mt:E()}],mr:[{mr:E()}],mb:[{mb:E()}],ml:[{ml:E()}],"space-x":[{"space-x":b()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":b()}],"space-y-reverse":[`space-y-reverse`],size:[{size:D()}],"inline-size":[{inline:[`auto`,...O()]}],"min-inline-size":[{"min-inline":[`auto`,...O()]}],"max-inline-size":[{"max-inline":[`none`,...O()]}],"block-size":[{block:[`auto`,...k()]}],"min-block-size":[{"min-block":[`auto`,...k()]}],"max-block-size":[{"max-block":[`none`,...k()]}],w:[{w:[s,`screen`,...D()]}],"min-w":[{"min-w":[s,`screen`,`none`,...D()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...D()]}],h:[{h:[`screen`,`lh`,...D()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...D()]}],"max-h":[{"max-h":[`screen`,`lh`,...D()]}],"font-size":[{text:[`base`,n,Mi,Ti]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Ri,Di]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,gi,X]}],"font-family":[{font:[Ni,Oi,t]}],"font-features":[{"font-features":[X]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,Z,X]}],"line-clamp":[{"line-clamp":[q,`none`,Z,Ei]}],leading:[{leading:[a,...b()]}],"list-image":[{"list-image":[`none`,Z,X]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,Z,X]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...oe(),`wavy`]}],"text-decoration-thickness":[{decoration:[q,`from-font`,`auto`,Z,Ti]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[q,`auto`,Z,X]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:b()}],"tab-size":[{tab:[J,Z,X]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,Z,X]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,Z,X]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:j()}],"bg-repeat":[{bg:M()}],"bg-size":[{bg:N()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},J,Z,X],radial:[``,Z,X],conic:[J,Z,X]},Ii,Ai]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:P()}],"gradient-via-pos":[{via:P()}],"gradient-to-pos":[{to:P()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:F()}],"rounded-s":[{"rounded-s":F()}],"rounded-e":[{"rounded-e":F()}],"rounded-t":[{"rounded-t":F()}],"rounded-r":[{"rounded-r":F()}],"rounded-b":[{"rounded-b":F()}],"rounded-l":[{"rounded-l":F()}],"rounded-ss":[{"rounded-ss":F()}],"rounded-se":[{"rounded-se":F()}],"rounded-ee":[{"rounded-ee":F()}],"rounded-es":[{"rounded-es":F()}],"rounded-tl":[{"rounded-tl":F()}],"rounded-tr":[{"rounded-tr":F()}],"rounded-br":[{"rounded-br":F()}],"rounded-bl":[{"rounded-bl":F()}],"border-w":[{border:I()}],"border-w-x":[{"border-x":I()}],"border-w-y":[{"border-y":I()}],"border-w-s":[{"border-s":I()}],"border-w-e":[{"border-e":I()}],"border-w-bs":[{"border-bs":I()}],"border-w-be":[{"border-be":I()}],"border-w-t":[{"border-t":I()}],"border-w-r":[{"border-r":I()}],"border-w-b":[{"border-b":I()}],"border-w-l":[{"border-l":I()}],"divide-x":[{"divide-x":I()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":I()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...oe(),`hidden`,`none`]}],"divide-style":[{divide:[...oe(),`hidden`,`none`]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-bs":[{"border-bs":A()}],"border-color-be":[{"border-be":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...oe(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[q,Z,X]}],"outline-w":[{outline:[``,q,Mi,Ti]}],"outline-color":[{outline:A()}],shadow:[{shadow:[``,`none`,u,Li,ji]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":[`none`,d,Li,ji]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:I()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[q,Ti]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":I()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":[`none`,f,Li,ji]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[q,Z,X]}],"mix-blend":[{"mix-blend":[...se(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[q]}],"mask-image-linear-from-pos":[{"mask-linear-from":L()}],"mask-image-linear-to-pos":[{"mask-linear-to":L()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":L()}],"mask-image-t-to-pos":[{"mask-t-to":L()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":L()}],"mask-image-r-to-pos":[{"mask-r-to":L()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":L()}],"mask-image-b-to-pos":[{"mask-b-to":L()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":L()}],"mask-image-l-to-pos":[{"mask-l-to":L()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":L()}],"mask-image-x-to-pos":[{"mask-x-to":L()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":L()}],"mask-image-y-to-pos":[{"mask-y-to":L()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[Z,X]}],"mask-image-radial-from-pos":[{"mask-radial-from":L()}],"mask-image-radial-to-pos":[{"mask-radial-to":L()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":ee()}],"mask-image-conic-pos":[{"mask-conic":[q]}],"mask-image-conic-from-pos":[{"mask-conic-from":L()}],"mask-image-conic-to-pos":[{"mask-conic-to":L()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:j()}],"mask-repeat":[{mask:M()}],"mask-size":[{mask:N()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,Z,X]}],filter:[{filter:[``,`none`,Z,X]}],blur:[{blur:ce()}],brightness:[{brightness:[q,Z,X]}],contrast:[{contrast:[q,Z,X]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Li,ji]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:[``,q,Z,X]}],"hue-rotate":[{"hue-rotate":[q,Z,X]}],invert:[{invert:[``,q,Z,X]}],saturate:[{saturate:[q,Z,X]}],sepia:[{sepia:[``,q,Z,X]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,Z,X]}],"backdrop-blur":[{"backdrop-blur":ce()}],"backdrop-brightness":[{"backdrop-brightness":[q,Z,X]}],"backdrop-contrast":[{"backdrop-contrast":[q,Z,X]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,q,Z,X]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[q,Z,X]}],"backdrop-invert":[{"backdrop-invert":[``,q,Z,X]}],"backdrop-opacity":[{"backdrop-opacity":[q,Z,X]}],"backdrop-saturate":[{"backdrop-saturate":[q,Z,X]}],"backdrop-sepia":[{"backdrop-sepia":[``,q,Z,X]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":b()}],"border-spacing-x":[{"border-spacing-x":b()}],"border-spacing-y":[{"border-spacing-y":b()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,Z,X]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[q,`initial`,Z,X]}],ease:[{ease:[`linear`,`initial`,_,Z,X]}],delay:[{delay:[q,Z,X]}],animate:[{animate:[`none`,v,Z,X]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,Z,X]}],"perspective-origin":[{"perspective-origin":te()}],rotate:[{rotate:le()}],"rotate-x":[{"rotate-x":le()}],"rotate-y":[{"rotate-y":le()}],"rotate-z":[{"rotate-z":le()}],scale:[{scale:ue()}],"scale-x":[{"scale-x":ue()}],"scale-y":[{"scale-y":ue()}],"scale-z":[{"scale-z":ue()}],"scale-3d":[`scale-3d`],skew:[{skew:R()}],"skew-x":[{"skew-x":R()}],"skew-y":[{"skew-y":R()}],transform:[{transform:[Z,X,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:te()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:de()}],"translate-x":[{"translate-x":de()}],"translate-y":[{"translate-y":de()}],"translate-z":[{"translate-z":de()}],"translate-none":[`translate-none`],zoom:[{zoom:[J,Z,X]}],accent:[{accent:A()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,Z,X]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":A()}],"scrollbar-track-color":[{"scrollbar-track":A()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mbs":[{"scroll-mbs":b()}],"scroll-mbe":[{"scroll-mbe":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pbs":[{"scroll-pbs":b()}],"scroll-pbe":[{"scroll-pbe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,Z,X]}],fill:[{fill:[`none`,...A()]}],"stroke-w":[{stroke:[q,Mi,Ti,Ei]}],stroke:[{stroke:[`none`,...A()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function Yi(...e){return Ji(Or(e))}var Xi=Object.defineProperty,Zi=(e,t)=>Xi(e,`name`,{value:t,configurable:!0});function Qi(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}Zi(Qi,`setRef`);function $i(...e){return t=>{let n=!1,r=e.map(e=>{let r=Qi(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Qi(e[t],null)}}}}Zi($i,`composeRefs`);function ea(...e){return R.useCallback($i(...e),e)}Zi(ea,`useComposedRefs`);var ta=Object.defineProperty,$=(e,t)=>ta(e,`name`,{value:t,configurable:!0});function na(e){let t=R.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];da(r)&&typeof ha==`function`&&(r=ha(r._payload)),R.Children.forEach(r,e=>{if(la(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;da(n)&&typeof ha==`function`&&(n=ha(n._payload)),a=oa(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=R.cloneElement(a,void 0,s):!o&&R.Children.count(r)===1&&R.isValidElement(r)&&(a=r);let c=a?ca(a):void 0,l=ea(n,c);if(!a){if(r||r===0)throw Error(o?ma(e):pa(e));return r}let u=sa(i,a.props??{});return a.type!==R.Fragment&&(u.ref=n?l:c),R.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}$(na,`createSlot`);var ra=na(`Slot`),ia=Symbol.for(`radix.slottable`);function aa(e){let t=$(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=ia,t}$(aa,`createSlottable`);var oa=$((e,t)=>{if(`child`in e.props){let t=e.props.child;return R.isValidElement(t)?R.cloneElement(t,void 0,e.props.children(t.props.children)):null}return R.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function sa(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}$(sa,`mergeProps`);function ca(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}$(ca,`getElementRef`);function la(e){return R.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===ia}$(la,`isSlottable`);var ua=Symbol.for(`react.lazy`);function da(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===ua&&`_payload`in e&&fa(e._payload)}$(da,`isLazyComponent`);function fa(e){return typeof e==`object`&&!!e&&`then`in e}$(fa,`isPromiseLike`);var pa=$(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),ma=$(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),ha=R.use,ga=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,_a=Or,va=(e,t)=>n=>{if(t?.variants==null)return _a(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=ga(t)||ga(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return _a(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},ya=va(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-normal tracking-tightish cursor-pointer transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,{variants:{variant:{default:`bg-primary text-primary-foreground shadow-ds-sm hover:bg-primary/90 hover:shadow-ds-md`,destructive:`bg-destructive text-destructive-foreground shadow-ds-sm hover:bg-destructive/90 hover:shadow-ds-md`,success:`bg-success text-success-foreground shadow-ds-sm hover:bg-success/90 hover:shadow-ds-md`,outline:`border border-border/60 bg-background shadow-ds-sm hover:bg-muted/60 hover:shadow-ds-md`,secondary:`bg-secondary/70 text-secondary-foreground hover:bg-secondary hover:shadow-ds-sm`,ghost:`hover:bg-muted/60 hover:text-accent-foreground`,link:`text-primary underline-offset-4 hover:underline active:scale-100`},size:{sm:`h-9 rounded-full px-3.5 text-xs sm:h-8`,default:`h-10 px-4.5 py-2 sm:h-9`,lg:`h-11 rounded-full px-7 sm:h-10 sm:px-8`,icon:`h-10 w-10 rounded-full sm:h-9 sm:w-9`,"icon-touch":`size-11 rounded-full`},fullWidth:{true:`w-full`,false:``}},defaultVariants:{variant:`default`,size:`default`,fullWidth:!1}}),ba=R.forwardRef(({className:e,variant:t,size:n,fullWidth:r,asChild:i=!1,loading:a=!1,disabled:o,children:s,...c},l)=>i?(0,z.jsx)(ra,{className:Yi(ya({variant:t,size:n,fullWidth:r,className:e})),ref:l,"aria-busy":a||void 0,"aria-disabled":o||a||void 0,...c,children:s}):(0,z.jsxs)(`button`,{className:Yi(ya({variant:t,size:n,fullWidth:r,className:e})),ref:l,disabled:o||a,"aria-busy":a||void 0,...c,children:[a?(0,z.jsx)(ht,{className:`animate-spin`,"aria-hidden":`true`}):null,s]}));ba.displayName=`Button`;var xa=Object.freeze({assortment:`Assortment`,forecasting:`Forecasting`,pricing:`Pricing`,relevance:`Relevance`,targeting:`Targeting`}),Sa=`modulepreload`,Ca=function(e){return`/`+e},wa={},Ta=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ca(t,n),t=s(t),t in wa)return;wa[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Sa,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ea={essential:!0,analytics:!1,marketing:!1,preferences:!1},Da={essential:!0,analytics:!0,marketing:!0,preferences:!0},Oa=`i6ds_cookie_consent`,ka=`2.0`,Aa=31536e6,ja={status:`unknown`,consent:Ea,bannerOpen:!1,preferencesOpen:!1},Ma=ja,Na=new Set;function Pa(e){Ma=e;for(let e of Na)e()}function Fa(e){return Na.add(e),()=>Na.delete(e)}function Ia(){return Ma}function La(){return ja}function Ra(e){if(!e||typeof e!=`object`)return!1;let t=e;return t.essential===!0&&typeof t.analytics==`boolean`&&typeof t.marketing==`boolean`&&typeof t.preferences==`boolean`}function za(){if(typeof window>`u`||typeof localStorage>`u`)return null;try{let e=localStorage.getItem(Oa);if(!e)return null;let t=JSON.parse(e),n=typeof t.savedAt==`number`&&t.savedAt<=Date.now()&&Date.now()-t.savedAt<=Aa;return t.version!==ka||!n||!Ra(t.consent)?(localStorage.removeItem(Oa),null):t.consent}catch{return null}}function Ba(e){if(!(typeof window>`u`||typeof localStorage>`u`))try{let t={version:ka,savedAt:Date.now(),consent:e};localStorage.setItem(Oa,JSON.stringify(t))}catch{}}function Va(){if(typeof window>`u`||Ma.status===`resolved`)return;let e=za();Pa({status:`resolved`,consent:e??Ea,bannerOpen:e===null,preferencesOpen:!1})}function Ha(e){Ba(e),Pa({status:`resolved`,consent:e,bannerOpen:!1,preferencesOpen:!1})}function Ua(){Ha(Da)}function Wa(){Ha(Ea)}function Ga(e){Ha({...e,essential:!0})}function Ka(){Pa({status:`resolved`,consent:Ma.status===`resolved`?Ma.consent:za()??Ea,bannerOpen:!0,preferencesOpen:!0})}function qa(e){Pa({...Ma,preferencesOpen:e})}function Ja(){if(typeof window<`u`&&typeof localStorage<`u`)try{localStorage.removeItem(Oa)}catch{}Pa({status:`resolved`,consent:Ea,bannerOpen:!0,preferencesOpen:!1})}function Ya(){let e=(0,R.useSyncExternalStore)(Fa,Ia,La);return(0,R.useEffect)(()=>Va(),[]),{...e,acceptAll:Ua,acceptEssential:Wa,updateConsent:Ga,openPreferences:Ka,setPreferencesOpen:qa,resetConsent:Ja}}var Xa=(0,R.createContext)(null);function Za(){let e=(0,R.useContext)(Xa);if(!e)throw Error(`usePolicyDrawer must be used within PolicyDrawerProvider`);return e}function Qa(){return(0,R.useContext)(Xa)}function $a({kind:e,closePolicy:t}){let{t:n}=i(),a=(0,R.useRef)(null),s=e===`contract`?`checkout.contract`:e;return(0,R.useEffect)(()=>{let e=a.current;if(e)return e.showModal(),()=>{e.open&&e.close()}},[]),(0,z.jsx)(`dialog`,{ref:a,"aria-labelledby":`policy-drawer-title`,onCancel:e=>{e.preventDefault(),t()},className:`fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[92%] max-w-xl overflow-hidden border-l border-border/60 bg-background p-0 text-foreground shadow-ds-lg backdrop:bg-foreground/35 sm:w-[min(40rem,80%)]`,children:(0,z.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,z.jsxs)(`header`,{className:`flex shrink-0 items-center justify-between gap-4 border-b border-border/60 bg-background/95 p-5 backdrop-blur-sm sm:p-6`,children:[(0,z.jsx)(`h2`,{id:`policy-drawer-title`,className:`font-display text-xl font-semibold`,children:n(`${s}.title`)}),(0,z.jsx)(ba,{type:`button`,size:`icon`,variant:`ghost`,"aria-label":n(`${s}.close`),onClick:t,children:(0,z.jsx)(gt,{"aria-hidden":`true`})})]}),(0,z.jsx)(`div`,{className:`flex-1 overflow-y-auto p-5 sm:p-8`,children:e===`contract`?(0,z.jsx)(`p`,{className:`text-sm leading-relaxed text-muted-foreground`,children:n(`checkout.contract.soon`)}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`p`,{className:`mb-8 text-sm leading-relaxed text-muted-foreground`,children:n(`${s}.subtitle`)}),e===`privacy`?(0,z.jsx)(r,{}):(0,z.jsx)(o,{})]})}),e===`contract`?null:(0,z.jsx)(`footer`,{className:`shrink-0 border-t border-border/60 bg-muted/30 p-4 text-center`,children:(0,z.jsx)(`p`,{className:`text-2xs uppercase text-muted-foreground`,children:n(`${s}.lastUpdated`)})})]})})}function eo({children:e}){let[t,n]=(0,R.useState)(null),r=(0,R.useCallback)(e=>n(e),[]),i=(0,R.useCallback)(()=>n(null),[]),a=(0,R.useMemo)(()=>({openPolicy:r,closePolicy:i}),[r,i]);return(0,z.jsxs)(Xa.Provider,{value:a,children:[e,t?(0,z.jsx)($a,{kind:t,closePolicy:i}):null]})}var to={url:`/media/assets-v1/935e0b1e-3608-468e-aff8-15cf4e427082/infinity6-horizontal-transparent.png`},no={url:`/media/assets-v1/2519a64e-5043-4ae3-97bf-094e58f00df7/share-assortment.jpg`},ro={url:`/media/assets-v1/e1709870-4d5c-4c0a-85a0-0f02dd34b7c8/share-brand.jpg`},io={url:`/media/assets-v1/8ced257b-fdcf-424f-8f02-354f01ed677e/share-forecasting.jpg`},ao={url:`/media/assets-v1/9536d54a-d64f-4368-bbb3-da60542fc156/share-pricing.jpg`},oo={url:`/media/assets-v1/d78e1160-67e9-4808-960b-02b5f027e251/share-relevance.jpg`},so={url:`/media/assets-v1/17789eb1-cfb5-4a1b-97aa-245ddef05191/share-targeting.jpg`},co=`https://decision.infinity6.ai`;function lo(e){try{return new URL(e??``).host.toLowerCase()}catch{return``}}function uo(e){return(e??``).trim().toLowerCase()}var fo=1200,po={assortment:no,brand:ro,forecasting:io,pricing:ao,relevance:oo,targeting:so};function mo(e){return(e||`https://decision.infinity6.ai`).replace(/\/$/,``)}function ho(e,t=`brand`){return`${mo(e)}${po[t].url}`}function go(e){return e===`brand`?`i6 Decision Suite`:`i6 ${xa[e]} — i6 Decision Suite`}function _o(e,t=`brand`){let n=ho(e,t);return[{property:`og:image`,content:n},{property:`og:image:width`,content:String(fo)},{property:`og:image:height`,content:`630`},{property:`og:image:alt`,content:go(t)},{name:`twitter:image`,content:n}]}export{xn as $,P as $t,gr as A,_t as At,jn as B,Pe as Bt,Tr as C,wt as Ct,fr as D,bt as Dt,vr as E,xt as Et,Pn as F,at as Ft,wn as G,ve as Gt,En as H,De as Ht,Nn as I,it as It,bn as J,de as Jt,tn as K,he as Kt,In as L,rt as Lt,Ln as M,ht as Mt,Kn as N,mt as Nt,hr as O,yt as Ot,Wn as P,pt as Pt,un as Q,O as Qt,kn as R,nt as Rt,wr as S,c as Sn,Tt as St,er as T,St as Tt,Cn as U,be as Ut,Dn as V,Ne as Vt,Tn as W,ye as Wt,cn as X,L as Xt,yn as Y,fe as Yt,ln as Z,se as Zt,na as _,g as _n,At as _t,lo as a,D as an,Ht as at,Sr as b,l as bn,Dt as bt,eo as c,y as cn,zt as ct,Ia as d,f as dn,It as dt,oe as en,an as et,Ya as f,x as fn,Ft as ft,va as g,d as gn,jt as gt,ba as h,ae as hn,Mt as ht,co as i,b as in,Ut as it,xr as j,gt as jt,ur as k,vt as kt,Qa as l,E as ln,Rt as lt,xa as m,p as mn,Nt as mt,_o as n,j as nn,on as nt,uo as o,h as on,Vt as ot,Ta as p,m as pn,Pt as pt,nn as q,ge as qt,ho as r,A as rn,Wt as rt,to as s,T as sn,Bt as st,mo as t,N as tn,Sn as tt,Za as u,w as un,Lt as ut,ea as v,ie as vn,kt as vt,tr as w,Ct as wt,Er as x,u as xn,Et as xt,Yi as y,_ as yn,Ot as yt,On as z,Ze as zt};