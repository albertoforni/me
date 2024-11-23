const c={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return ge(this.context.count)},getNextContextId(){return ge(this.context.count++)}};function ge(e){const t=String(e),n=t.length-1;return c.context.id+(n?String.fromCharCode(96+n):"")+t}function T(e){c.context=e}function Me(){return{...c.context,id:c.getNextContextId(),count:0}}const De=(e,t)=>e===t,W=Symbol("solid-proxy"),Oe=typeof Proxy=="function",Q={equals:De};let B=null,Ne=ve;const N=1,R=2,Te={owned:null,cleanups:null,context:null,owner:null},se={};var h=null;let u=null,Fe=null,y=null,A=null,S=null,Z=0;function Pe(e,t){const n=y,s=h,i=e.length===0,r=t===void 0?s:t,l=i?Te:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>O(()=>j(l)));h=l,y=null;try{return E(o,!0)}finally{y=n,h=s}}function k(e,t){t=t?Object.assign({},Q,t):Q;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(u&&u.running&&u.sources.has(n)?i=i(n.tValue):i=i(n.value)),Le(n,i));return[je.bind(n),s]}function ye(e,t,n){const s=K(e,t,!0,N);U(s)}function H(e,t,n){const s=K(e,t,!1,N);U(s)}function Ot(e,t,n){Ne=We;const s=K(e,t,!1,N),i=_&&ce(_);i&&(s.suspense=i),s.user=!0,S?S.push(s):U(s)}function P(e,t,n){n=n?Object.assign({},Q,n):Q;const s=K(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,U(s),je.bind(s)}function Ue(e){return e&&typeof e=="object"&&"then"in e}function qe(e,t,n){let s,i,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,r={}):(s=e,i=t,r={});let l=null,o=se,f=null,a=!1,d=!1,g="initialValue"in r,w=typeof s=="function"&&P(s);const x=new Set,[C,$]=(r.storage||k)(r.initialValue),[v,I]=k(void 0),[q,ee]=k(void 0,{equals:!1}),[ae,de]=k(g?"ready":"unresolved");c.context&&(f=c.getNextContextId(),r.ssrLoadFrom==="initial"?o=r.initialValue:c.load&&c.has(f)&&(o=c.load(f)));function V(b,p,m,M){return l===b&&(l=null,M!==void 0&&(g=!0),(b===o||p===o)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(M,{value:p})),o=se,u&&b&&a?(u.promises.delete(b),a=!1,E(()=>{u.running=!0,he(p,m)},!1)):he(p,m)),p}function he(b,p){E(()=>{p===void 0&&$(()=>b),de(p!==void 0?"errored":g?"ready":"unresolved"),I(p);for(const m of x.keys())m.decrement();x.clear()},!1)}function te(){const b=_&&ce(_),p=C(),m=v();if(m!==void 0&&!l)throw m;return y&&!y.user&&b&&ye(()=>{q(),l&&(b.resolved&&u&&a?u.promises.add(l):x.has(b)||(b.increment(),x.add(b)))}),p}function ne(b=!0){if(b!==!1&&d)return;d=!1;const p=w?w():s;if(a=u&&u.running,p==null||p===!1){V(l,O(C));return}u&&l&&u.promises.delete(l);const m=o!==se?o:O(()=>i(p,{value:C(),refetching:b}));return Ue(m)?(l=m,"value"in m?(m.status==="success"?V(l,m.value,void 0,p):V(l,void 0,re(m.value),p),m):(d=!0,queueMicrotask(()=>d=!1),E(()=>{de(g?"refreshing":"pending"),ee()},!1),m.then(M=>V(m,M,void 0,p),M=>V(m,void 0,re(M),p)))):(V(l,m,void 0,p),m)}return Object.defineProperties(te,{state:{get:()=>ae()},error:{get:()=>v()},loading:{get(){const b=ae();return b==="pending"||b==="refreshing"}},latest:{get(){if(!g)return te();const b=v();if(b&&!l)throw b;return C()}}}),w?ye(()=>ne(!1)):ne(!1),[te,{refetch:ne,mutate:$}]}function Nt(e){return E(e,!1)}function O(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function Tt(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let a=0;a<e.length;a++)o[a]=e[a]()}else o=e();if(r)return r=!1,l;const f=O(()=>t(o,i,l));return i=o,f}}function $e(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Be(e,t){B||(B=Symbol("error")),h=K(void 0,void 0,!0),h.context={...h.context,[B]:[t]},u&&u.running&&u.sources.add(h);try{return e()}catch(n){X(n)}finally{h=h.owner}}function Re(){return h}function Pt(e,t){const n=h,s=y;h=e,y=null;try{return E(t,!0)}catch(i){X(i)}finally{h=n,y=s}}function $t(e){if(u&&u.running)return e(),u.done;const t=y,n=h;return Promise.resolve().then(()=>{y=t,h=n;let s;return _&&(s=u||(u={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(i=>s.resolve=i)),s.running=!0),E(e,!1),y=h=null,s?s.done:void 0})}const[kt,we]=k(!1);function Ye(e){S.push.apply(S,e),e.length=0}function ke(e,t){const n=Symbol("context");return{id:n,Provider:Qe(n),defaultValue:e}}function ce(e){let t;return h&&h.context&&(t=h.context[e.id])!==void 0?t:e.defaultValue}function Ke(e){const t=P(e),n=P(()=>oe(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let _;function Xe(){return _||(_=ke())}function je(){const e=u&&u.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===N)U(this);else{const t=A;A=null,E(()=>J(this),!1),A=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return e&&u.sources.has(this)?this.tValue:this.value}function Le(e,t,n){let s=u&&u.running&&u.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(u){const i=u.running;(i||!n&&u.sources.has(e))&&(u.sources.add(e),e.tValue=t),i||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=u&&u.running;l&&u.disposed.has(r)||((l?!r.tState:!r.state)&&(r.pure?A.push(r):S.push(r),r.observers&&Ie(r)),l?r.tState=N:r.state=N)}if(A.length>1e6)throw A=[],new Error},!1)}return t}function U(e){if(!e.fn)return;j(e);const t=Z;be(e,u&&u.running&&u.sources.has(e)?e.tValue:e.value,t),u&&!u.running&&u.sources.has(e)&&queueMicrotask(()=>{E(()=>{u&&(u.running=!0),y=h=e,be(e,e.tValue,t),y=h=null},!1)})}function be(e,t,n){let s;const i=h,r=y;y=h=e;try{s=e.fn(t)}catch(l){return e.pure&&(u&&u.running?(e.tState=N,e.tOwned&&e.tOwned.forEach(j),e.tOwned=void 0):(e.state=N,e.owned&&e.owned.forEach(j),e.owned=null)),e.updatedAt=n+1,X(l)}finally{y=r,h=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Le(e,s,!0):u&&u.running&&e.pure?(u.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function K(e,t,n,s=N,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return u&&u.running&&(r.state=0,r.tState=s),h===null||h!==Te&&(u&&u.running&&h.pure?h.tOwned?h.tOwned.push(r):h.tOwned=[r]:h.owned?h.owned.push(r):h.owned=[r]),r}function z(e){const t=u&&u.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===R)return J(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Z);){if(t&&u.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let i=e,r=n[s+1];for(;(i=i.owner)&&i!==r;)if(u.disposed.has(i))return}if((t?e.tState:e.state)===N)U(e);else if((t?e.tState:e.state)===R){const i=A;A=null,E(()=>J(e,n[0]),!1),A=i}}}function E(e,t){if(A)return e();let n=!1;t||(A=[]),S?n=!0:S=[],Z++;try{const s=e();return Ge(n),s}catch(s){n||(S=null),A=null,X(s)}}function Ge(e){if(A&&(ve(A),A=null),e)return;let t;if(u){if(!u.promises.size&&!u.queue.size){const s=u.sources,i=u.disposed;S.push.apply(S,u.effects),t=u.resolve;for(const r of S)"tState"in r&&(r.state=r.tState),delete r.tState;u=null,E(()=>{for(const r of i)j(r);for(const r of s){if(r.value=r.tValue,r.owned)for(let l=0,o=r.owned.length;l<o;l++)j(r.owned[l]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}we(!1)},!1)}else if(u.running){u.running=!1,u.effects.push.apply(u.effects,S),S=null,we(!0);return}}const n=S;S=null,n.length&&E(()=>Ne(n),!1),t&&t()}function ve(e){for(let t=0;t<e.length;t++)z(e[t])}function We(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:z(s)}if(c.context){if(c.count){c.effects||(c.effects=[]),c.effects.push(...e.slice(0,n));return}T()}for(c.effects&&(c.done||!c.count)&&(e=[...c.effects,...e],n+=c.effects.length,delete c.effects),t=0;t<n;t++)z(e[t])}function J(e,t){const n=u&&u.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const r=n?i.tState:i.state;r===N?i!==t&&(!i.updatedAt||i.updatedAt<Z)&&z(i):r===R&&J(i,t)}}}function Ie(e){const t=u&&u.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=R:s.state=R,s.pure?A.push(s):S.push(s),s.observers&&Ie(s))}}function j(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)j(e.tOwned[t]);delete e.tOwned}if(u&&u.running&&e.pure)He(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)j(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}u&&u.running?e.tState=0:e.state=0}function He(e,t){if(t||(e.tState=0,u.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)He(e.owned[n])}function re(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function xe(e,t,n){try{for(const s of t)s(e)}catch(s){X(s,n&&n.owner||null)}}function X(e,t=h){const n=B&&t&&t.context&&t.context[B],s=re(e);if(!n)throw s;S?S.push({fn(){xe(s,n,t)},state:N}):xe(s,n,t)}function oe(e){if(typeof e=="function"&&!e.length)return oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=oe(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Qe(e,t){return function(s){let i;return H(()=>i=O(()=>(h.context={...h.context,[e]:s.value},Ke(()=>s.children))),void 0),i}}let _e=!1;function ze(){_e=!0}function Je(e,t){if(_e&&c.context){const n=c.context;T(Me());const s=O(()=>e(t||{}));return T(n),s}return O(()=>e(t||{}))}function G(){return!0}const le={get(e,t,n){return t===W?n:e.get(t)},has(e,t){return t===W?!0:e.has(t)},set:G,deleteProperty:G,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:G,deleteProperty:G}},ownKeys(e){return e.keys()}};function ie(e){return(e=typeof e=="function"?e():e)?e:{}}function Ze(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function jt(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&W in o,e[l]=typeof o=="function"?(t=!0,P(o)):o}if(Oe&&t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=ie(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in ie(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(ie(e[o])));return[...new Set(l)]}},le);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let a=f.length-1;a>=0;a--){const d=f[a];if(d==="__proto__"||d==="constructor")continue;const g=Object.getOwnPropertyDescriptor(o,d);if(!s[d])s[d]=g.get?{enumerable:!0,configurable:!0,get:Ze.bind(n[d]=[g.get.bind(o)])}:g.value!==void 0?g:void 0;else{const w=n[d];w&&(g.get?w.push(g.get.bind(o)):g.value!==void 0&&w.push(()=>g.value))}}}const i={},r=Object.keys(s);for(let l=r.length-1;l>=0;l--){const o=r[l],f=s[o];f&&f.get?Object.defineProperty(i,o,f):i[o]=f?f.value:void 0}return i}function Lt(e,...t){if(Oe&&W in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},le));return r.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},le)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),l=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let o=!1,f=0;for(const a of t)a.includes(i)&&(o=!0,l?s[f][i]=r.value:Object.defineProperty(s[f],i,r)),++f;o||(l?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}function vt(e){let t,n;const s=i=>{const r=c.context;if(r){const[o,f]=k();c.count||(c.count=0),c.count++,(n||(n=e())).then(a=>{!c.done&&T(r),c.count--,f(()=>a.default),T()}),t=o}else if(!t){const[o]=qe(()=>(n||(n=e())).then(f=>f.default));t=o}let l;return P(()=>(l=t())?O(()=>{if(!r||c.done)return l(i);const o=c.context;T(r);const f=l(i);return T(o),f}):"")};return s.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),s}let et=0;function It(){return c.context?c.getNextContextId():`cl-${et++}`}const tt=e=>`Stale read from <${e}>.`;function Ht(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return P(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?O(()=>i(t?s:()=>{if(!O(n))throw tt("Show");return e.when})):i}return e.fallback},void 0,void 0)}let F;function _t(){F&&[...F].forEach(e=>e())}function Vt(e){let t;c.context&&c.load&&(t=c.load(c.getContextId()));const[n,s]=k(t,void 0);return F||(F=new Set),F.add(s),$e(()=>F.delete(s)),P(()=>{let i;if(i=n()){const r=e.fallback;return typeof r=="function"&&r.length?O(()=>r(i,()=>s())):r}return Be(()=>e.children,s)},void 0,void 0)}const nt=ke();function Mt(e){let t=0,n,s,i,r,l;const[o,f]=k(!1),a=Xe(),d={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:o,effects:[],resolved:!1},g=Re();if(c.context&&c.load){const C=c.getContextId();let $=c.load(C);if($&&(typeof $!="object"||$.status!=="success"?i=$:c.gather(C)),i&&i!=="$$f"){const[v,I]=k(void 0,{equals:!1});r=v,i.then(()=>{if(c.done)return I();c.gather(C),T(s),I(),T()},q=>{l=q,I()})}}const w=ce(nt);w&&(n=w.register(d.inFallback));let x;return $e(()=>x&&x()),Je(a.Provider,{value:d,get children(){return P(()=>{if(l)throw l;if(s=c.context,r)return r(),r=void 0;s&&i==="$$f"&&T();const C=P(()=>e.children);return P($=>{const v=d.inFallback(),{showContent:I=!0,showFallback:q=!0}=n?n():{};if((!v||i&&i!=="$$f")&&I)return d.resolved=!0,x&&x(),x=s=i=void 0,Ye(d.effects),C();if(q)return x?$:Pe(ee=>(x=ee,s&&(T({id:s.id+"F",count:0}),s=void 0),e.fallback),g)})})}})}const st=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],it=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...st]),rt=new Set(["innerHTML","textContent","innerText","children"]),ot=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),lt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ft(e,t){const n=lt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ut=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ct={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function at(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,f=t[i-1].nextSibling,a=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const d=r<s?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],d)}else if(r===o)for(;l<i;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const d=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],d),t[i]=n[r]}else{if(!a){a=new Map;let g=o;for(;g<r;)a.set(n[g],g++)}const d=a.get(t[l]);if(d!=null)if(o<d&&d<r){let g=l,w=1,x;for(;++g<i&&g<r&&!((x=a.get(t[g]))==null||x!==d+w);)w++;if(w>d-o){const C=t[l];for(;o<d;)e.insertBefore(n[o++],C)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const pe="_$DX_DELEGATE";function me(e,t,n,s={}){let i;return Pe(r=>{i=r,t===document?e():mt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Dt(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function dt(e,t=window.document){const n=t[pe]||(t[pe]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Ve))}}function fe(e,t,n){L(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function ht(e,t,n,s){L(e)||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function gt(e,t,n){L(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function yt(e,t){L(e)||(t==null?e.removeAttribute("class"):e.className=t)}function wt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n,typeof n!="function"&&n)}function bt(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,l;for(r=0,l=i.length;r<l;r++){const o=i[r];!o||o==="undefined"||t[o]||(Se(e,o,!1),delete n[o])}for(r=0,l=s.length;r<l;r++){const o=s[r],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(Se(e,o,!0),n[o]=f)}return n}function xt(e,t,n){if(!t)return n?fe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function Ft(e,t={},n,s){const i={};return s||H(()=>i.children=Y(e,t.children,i.children)),H(()=>typeof t.ref=="function"&&pt(t.ref,e)),H(()=>St(e,t,n,!0,i,!0)),i}function pt(e,t,n){return O(()=>e(t,n))}function mt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Y(e,t,s,n);H(i=>Y(e,t(),i,n),s)}function St(e,t,n,s,i={},r=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;i[l]=Ae(e,l,null,i[l],n,r,t)}for(const l in t){if(l==="children")continue;const o=t[l];i[l]=Ae(e,l,o,i[l],n,r,t)}}function At(e,t,n={}){if(globalThis._$HY.done)return me(e,t,[...t.childNodes],n);c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=s=>globalThis._$HY.r[s],c.has=s=>s in globalThis._$HY.r,c.gather=s=>Ee(t,s),c.registry=new Map,c.context={id:n.renderId||"",count:0};try{return Ee(t,n.renderId),me(e,t,[...t.childNodes],n)}finally{c.context=null}}function Ut(e){let t,n;return!L()||!(t=c.registry.get(n=Et()))?e():(c.completed&&c.completed.add(t),c.registry.delete(n),t)}function qt(e){let t=e,n=0,s=[];if(L(e))for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Bt(){c.events&&!c.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=c;if(t){for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;t.shift(),Ve(s)}c.done&&(c.events=_$HY.events=null,c.completed=_$HY.completed=null)}}),c.events.queued=!0)}function L(e){return!!c.context&&!c.done&&(!e||e.isConnected)}function Ct(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Se(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function Ae(e,t,n,s,i,r,l){let o,f,a,d,g;if(t==="style")return xt(e,n,s);if(t==="classList")return bt(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const w=t.slice(3);s&&e.removeEventListener(w,s,typeof s!="function"&&s),n&&e.addEventListener(w,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const w=t.slice(10);s&&e.removeEventListener(w,s,!0),n&&e.addEventListener(w,n,!0)}else if(t.slice(0,2)==="on"){const w=t.slice(2).toLowerCase(),x=ut.has(w);if(!x&&s){const C=Array.isArray(s)?s[0]:s;e.removeEventListener(w,C)}(x||n)&&(wt(e,w,n,x),x&&dt([w]))}else if(t.slice(0,5)==="attr:")fe(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")gt(e,t.slice(5),n);else if((g=t.slice(0,5)==="prop:")||(a=rt.has(t))||!i&&((d=ft(t,e.tagName))||(f=it.has(t)))||(o=e.nodeName.includes("-")||"is"in l)){if(g)t=t.slice(5),f=!0;else if(L(e))return n;t==="class"||t==="className"?yt(e,n):o&&!f&&!a?e[Ct(t)]=n:e[d||t]=n}else{const w=i&&t.indexOf(":")>-1&&ct[t.split(":")[0]];w?ht(e,w,t,n):fe(e,ot[t]||t,n)}return n}function Ve(e){if(c.registry&&c.events&&c.events.find(([f,a])=>a===e))return;let t=e.target;const n=`$$${e.type}`,s=e.target,i=e.currentTarget,r=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),l=()=>{const f=t[n];if(f&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?f.call(t,a,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&r(t.host),!0},o=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0),e.composedPath){const f=e.composedPath();r(f[0]);for(let a=0;a<f.length-2&&(t=f[a],!!l());a++){if(t._$host){t=t._$host,o();break}if(t.parentNode===i)break}}else o();r(s)}function Y(e,t,n,s,i){const r=L(e);if(r){!n&&(n=[...e.childNodes]);let f=[];for(let a=0;a<n.length;a++){const d=n[a];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():f.push(d)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(r||l==="number"&&(t=t.toString(),t===n))return n;if(o){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=D(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(r)return n;n=D(e,n,s)}else{if(l==="function")return H(()=>{let f=t();for(;typeof f=="function";)f=f();n=Y(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],a=n&&Array.isArray(n);if(ue(f,t,n,i))return H(()=>n=Y(e,f,n,s,!0)),()=>n;if(r){if(!f.length)return n;if(s===void 0)return n=[...e.childNodes];let d=f[0];if(d.parentNode!==e)return n;const g=[d];for(;(d=d.nextSibling)!==s;)g.push(d);return n=g}if(f.length===0){if(n=D(e,n,s),o)return n}else a?n.length===0?Ce(e,f,s):at(e,n,f):(n&&D(e),Ce(e,f));n=f}else if(t.nodeType){if(r&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=D(e,n,s,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ue(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],f=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=ue(e,o,f)||i;else if(a==="function")if(s){for(;typeof o=="function";)o=o();i=ue(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const d=String(o);f&&f.nodeType===3&&f.data===d?e.push(f):e.push(document.createTextNode(d))}}return i}function Ce(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function D(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function Ee(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!c.registry.has(r)&&c.registry.set(r,i)}}function Et(){return c.getNextContextId()}const Rt=()=>{},Yt=!1,Kt=(...e)=>(ze(),At(...e));export{Ot as A,Yt as B,Pt as C,$t as D,Vt as E,Nt as F,Rt as G,_t as H,Ht as S,P as a,Je as b,Ke as c,Pe as d,k as e,$e as f,Re as g,dt as h,Ut as i,Ft as j,mt as k,vt as l,jt as m,Mt as n,Tt as o,Kt as p,qt as q,Bt as r,c as s,Dt as t,O as u,It as v,ce as w,H as x,ke as y,Lt as z};