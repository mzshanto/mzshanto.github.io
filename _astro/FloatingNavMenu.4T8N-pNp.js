import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.WFquGv8Z.js";import{c as M}from"./utils.fNskMoFt.js";import{u as p,a as C}from"./use-transform.W0KcnoQB.js";import{M as A,m as g}from"./proxy.BS82x02Z.js";import{f as V,o as I,J as B}from"./single-value.BcYr5KBC.js";import{A as _}from"./index.CY8X6Sci.js";function F(e,n,o={}){const a=e.get();let s=null,r=a,h;const f=typeof a=="string"?a.replace(/[\d.-]/g,""):void 0,d=()=>{s&&(s.stop(),s=null)},x=()=>{d();const i=N(e.get()),l=N(r);i!==l&&(s=new B({keyframes:[i,l],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...o,onUpdate:h}))};if(e.attach((i,l)=>{r=i,h=m=>l(j(m,f)),V.postRender(()=>{x(),e.events.animationStart?.notify(),s?.then(()=>{e.events.animationComplete?.notify()})})},d),I(n)){const i=n.on("change",m=>e.set(j(m,f))),l=e.on("destroy",i);return()=>{i(),l()}}return d}function j(e,n){return n?e+n:e}function N(e){return typeof e=="number"?e:parseFloat(e)}function L(e,n={}){const{isStatic:o}=c.useContext(A),a=()=>I(e)?e.get():e;if(o)return p(a);const s=C(a());return c.useInsertionEffect(()=>F(s,e,n),[s,JSON.stringify(n)]),s}function v(e,n={}){return L(e,{type:"spring",...n})}/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,n,o,a)=>{const s=c.forwardRef(({color:r="currentColor",size:h=24,stroke:f=2,title:d,className:x,children:i,...l},m)=>c.createElement("svg",{ref:m,...$[e],width:h,height:h,className:["tabler-icon",`tabler-icon-${n}`,x].join(" "),strokeWidth:f,stroke:r,...l},[d&&c.createElement("title",{key:"svg-title"},d),...a.map(([y,b])=>c.createElement(y,b)),...Array.isArray(i)?i:[i]]));return s.displayName=`${o}`,s};/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]],D=u("outline","brand-github","BrandGithub",E);/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M8 11v5",key:"svg-0"}],["path",{d:"M8 8v.01",key:"svg-1"}],["path",{d:"M12 16v-5",key:"svg-2"}],["path",{d:"M16 16v-3a2 2 0 1 0 -4 0",key:"svg-3"}],["path",{d:"M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10",key:"svg-4"}]],H=u("outline","brand-linkedin","BrandLinkedin",R);/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9",key:"svg-0"}],["path",{d:"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2",key:"svg-1"}],["path",{d:"M12 12l0 .01",key:"svg-2"}],["path",{d:"M3 13a20 20 0 0 0 18 0",key:"svg-3"}]],O=u("outline","briefcase","Briefcase",T);/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]],G=u("outline","code","Code",z);/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M5 12l-2 0l9 -9l9 9l-2 0",key:"svg-0"}],["path",{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",key:"svg-1"}],["path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",key:"svg-2"}]],U=u("outline","home","Home",J);/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2",key:"svg-0"}],["path",{d:"M4 9h16",key:"svg-1"}],["path",{d:"M10 16l2 -2l2 2",key:"svg-2"}]],W=u("outline","layout-navbar-collapse","LayoutNavbarCollapse",P);/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12",key:"svg-2"}]],q=u("outline","message","Message",X);/**
 * @license @tabler/icons-react v3.39.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]],Q=u("outline","user","User",K),Y=({items:e,desktopClassName:n,mobileClassName:o})=>t.jsxs(t.Fragment,{children:[t.jsx(ee,{items:e,className:n}),t.jsx(Z,{items:e,className:o})]}),Z=({items:e,className:n})=>{const[o,a]=c.useState(!1);return t.jsxs("div",{className:M("relative block md:hidden",n),children:[t.jsx(_,{children:o&&t.jsx(g.div,{layoutId:"nav",className:"absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2",children:e.map((s,r)=>t.jsx(g.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10,transition:{delay:r*.05}},transition:{delay:(e.length-1-r)*.05},children:t.jsx("a",{href:s.href,className:"h-10 w-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center",children:t.jsx("div",{className:"h-4 w-4",children:s.icon})},s.title)},s.title))})}),t.jsx("button",{onClick:()=>a(!o),className:"h-10 w-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center",children:t.jsx(W,{className:"h-5 w-5 text-neutral-400"})})]})},ee=({items:e,className:n})=>{let o=C(1/0);return t.jsx(g.div,{onMouseMove:a=>o.set(a.pageX),onMouseLeave:()=>o.set(1/0),className:M("mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-neutral-900 border border-neutral-800 px-4 pb-3",n),children:e.map(a=>t.jsx(te,{mouseX:o,...a},a.title))})};function te({mouseX:e,title:n,icon:o,href:a}){let s=c.useRef(null),r=p(e,S=>{let w=s.current?.getBoundingClientRect()??{x:0,width:0};return S-w.x-w.width/2}),h=p(r,[-150,0,150],[40,80,40]),f=p(r,[-150,0,150],[40,80,40]),d=p(r,[-150,0,150],[20,40,20]),x=p(r,[-150,0,150],[20,40,20]),i=v(h,{mass:.1,stiffness:150,damping:12}),l=v(f,{mass:.1,stiffness:150,damping:12}),m=v(d,{mass:.1,stiffness:150,damping:12}),y=v(x,{mass:.1,stiffness:150,damping:12});const[b,k]=c.useState(!1);return t.jsx("a",{href:a,children:t.jsxs(g.div,{ref:s,style:{width:i,height:l},onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),className:"aspect-square rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center relative",children:[t.jsx(_,{children:b&&t.jsx(g.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:2,x:"-50%"},className:"px-2 py-0.5 whitespace-pre rounded-md bg-neutral-800 border-neutral-800 text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs",children:n})}),t.jsx(g.div,{style:{width:m,height:y},className:"flex items-center justify-center",children:o})]})})}function ce(){const e=[{title:"Home",icon:t.jsx(U,{className:"h-full w-full text-blue-500"}),href:"#"},{title:"About",icon:t.jsx(Q,{className:"h-full w-full text-indigo-500"}),href:"#about"},{title:"Experience",icon:t.jsx(O,{className:"h-full w-full text-purple-500"}),href:"#experience"},{title:"Projects",icon:t.jsx(G,{className:"h-full w-full text-teal-500"}),href:"#projects"},{title:"Contact",icon:t.jsx(q,{className:"h-full w-full text-emerald-500"}),href:"#contact"},{title:"GitHub",icon:t.jsx(D,{className:"h-full w-full text-neutral-800 dark:text-white"}),href:"https://github.com/mzshanto"},{title:"LinkedIn",icon:t.jsx(H,{className:"h-full w-full text-blue-600 dark:text-blue-400"}),href:"https://linkedin.com/in/mzshanto"}];return t.jsx("div",{className:"fixed bottom-4 md:bottom-8 inset-x-0 w-full flex items-center justify-center z-[100] px-4 pointer-events-none",children:t.jsx("div",{className:"pointer-events-auto",children:t.jsx(Y,{mobileClassName:"fixed bottom-4 right-4 z-[100]",desktopClassName:"mx-auto",items:e})})})}export{ce as FloatingNavMenu};
