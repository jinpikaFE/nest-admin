var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(e,a)=>{for(var i in a||(a={}))r.call(a,i)&&o(e,i,a[i]);if(t)for(var i of t(a))n.call(a,i)&&o(e,i,a[i]);return e},i=("undefined"!=typeof require&&require,(e,t,r)=>(o(e,"symbol"!=typeof t?t+"":t,r),r));import{r as s,d as c,p as l,w as u,R as f,av as p,M as m,q as d,aw as y,ax as h,ay as g,m as b}from"./vendor.f071a494.js";import{A as v}from"./request.74cb37a7.js";import{g as S}from"./untils.d0c4d4b1.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},w=function(e,t){return s.exports.createElement(v,c(c({},e),{},{ref:t,icon:O}))};w.displayName="UserOutlined";var x=s.exports.forwardRef(w);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(e){var t=e.children,r=e.style,n=e.className,o=e.markStyle,a=e.markClassName,i=e.zIndex,c=void 0===i?9:i,p=e.gapX,m=void 0===p?212:p,d=e.gapY,y=void 0===d?222:d,h=e.width,g=void 0===h?120:h,b=e.height,v=void 0===b?64:b,S=e.rotate,O=void 0===S?-22:S,w=e.image,x=e.content,E=e.offsetLeft,P=e.offsetTop,A=e.fontStyle,C=void 0===A?"normal":A,I=e.fontWeight,R=void 0===I?"normal":I,N=e.fontColor,U=void 0===N?"rgba(0,0,0,.15)":N,z=e.fontSize,D=void 0===z?16:z,L=e.fontFamily,M=void 0===L?"sans-serif":L,T=e.prefixCls,q=(0,s.exports.useContext(l.ConfigContext).getPrefixCls)("pro-layout-watermark",T),B=u("".concat(q,"-wrapper"),n),F=u(q,a),J=k(s.exports.useState(""),2),V=J[0],W=J[1];return s.exports.useEffect((function(){var e=document.createElement("canvas"),t=e.getContext("2d"),r=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}(t),n="".concat((m+g)*r,"px"),o="".concat((y+v)*r,"px"),a=E||m/2,i=P||y/2;if(e.setAttribute("width",n),e.setAttribute("height",o),t){t.translate(a*r,i*r),t.rotate(Math.PI/180*Number(O));var s=g*r,c=v*r;if(w){var l=new Image;l.crossOrigin="anonymous",l.referrerPolicy="no-referrer",l.src=w,l.onload=function(){t.drawImage(l,0,0,s,c),W(e.toDataURL())}}else if(x){var u=Number(D)*r;t.font="".concat(C," normal ").concat(R," ").concat(u,"px/").concat(c,"px ").concat(M),t.fillStyle=U,t.fillText(x,0,0),W(e.toDataURL())}}else console.error("当前环境不支持Canvas")}),[m,y,E,P,O,C,R,g,v,M,U,w,x,D]),f.createElement("div",{style:j({position:"relative"},r),className:B},t,f.createElement("div",{className:F,style:j({zIndex:c,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(m+g,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(V,"')")},o)}))};let I="NULL";const R=()=>403,N=e=>{if(!e)return!1;const t=Object.getPrototypeOf(e);return t===f.Component||t===Function.prototype||N(t)};class U extends f.Component{constructor(){super(...arguments),i(this,"state",{component:()=>null}),i(this,"shouldComponentUpdate",((e,t)=>{const{component:r}=this.state;return p(e,this.props)||this.setRenderComponent(e),t.component!==r})),i(this,"checkIsInstantiation",(e=>{if(N(e)){const t=e;return e=>f.createElement(t,a({},e))}return f.isValidElement(e)?t=>f.cloneElement(e,t):()=>e}))}componentDidMount(){this.setRenderComponent(this.props)}setRenderComponent(e){const t=this.checkIsInstantiation(e.ok),r=this.checkIsInstantiation(e.error);e.promise.then((()=>(this.setState({component:t}),!0))).catch((()=>{this.setState({component:r})}))}render(){const{component:e}=this.state,o=this.props,{ok:i,error:s,promise:c}=o,l=((e,o)=>{var a={};for(var i in e)r.call(e,i)&&o.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&t)for(var i of t(e))o.indexOf(i)<0&&n.call(e,i)&&(a[i]=e[i]);return a})(o,["ok","error","promise"]);return e?f.createElement(e,a({},l)):f.createElement("div",{style:{width:"100%",height:"100%",margin:"auto",paddingTop:50,textAlign:"center"}},f.createElement(m,{size:"large"}))}}function z(e,t,r){return((e,t,r,n)=>{if(!e)return r;if(Array.isArray(e)){if(Array.isArray(t)){if(t.some((t=>e.includes(t))))return r}else if(e.includes(t))return r;return n}if("string"==typeof e){if(Array.isArray(t)){if(t.some((t=>e===t)))return r}else if(e===t)return r;return n}if(e instanceof Promise)return f.createElement(U,{ok:r,error:n,promise:e});if("function"==typeof e){const o=e(t);return o instanceof Promise?f.createElement(U,{ok:r,error:n,promise:o}):o?r:n}throw new Error("unsupported parameters")})(e,I,t,r)}const D=({status:e="404",title:t="404",subTitle:r="对不起！您访问的页面不存在",extra:n=f.createElement(d,{type:"primary"},f.createElement(y,{to:"/home"},"返回首页"))})=>f.createElement(f.Fragment,null,f.createElement(h,{status:e,title:t,subTitle:r,extra:n})),L=({routes:e,children:t,authority:r,noMatch:n=f.createElement(h,{status:"403",title:"403",subTitle:"Sorry, you are not authorized to access this page."})})=>{const o=z(r,void 0===t?null:t,n),a=g(),i=S(e,a.pathname||"/")||null;return f.createElement(f.Fragment,null,i?o:f.createElement(D,null))};L.Secured=(e,t)=>{let r=!1;if(t&&(r=()=>t),!e)throw new Error("authority is required");return function(t){return(e=>{if(N(e)){const t=e;return e=>f.createElement(t,a({},e))}return f.isValidElement(e)?t=>f.cloneElement(e,t):()=>e})(z(e,t,r||R))}},L.check=z;const M=(e=>t=>(t?("function"==typeof t&&(I=t()),("[object String]"===Object.prototype.toString.call(t)||Array.isArray(t))&&(I=t)):I="NULL",e))(L);let T=M(F());const q=()=>{T=M(F())};window.reloadAuthorized=q;var B=T;function F(e){const t=void 0===e&&localStorage?localStorage.getItem("authority"):e;let r;try{t&&(r=JSON.parse(t))}catch(n){r=t}return"string"==typeof r?[r]:r||["admin"]}function J(e){const t="string"==typeof e?[e]:e;localStorage.setItem("authority",JSON.stringify(t)),q()}const V=new class{constructor(){i(this,"currentUser",localStorage.currentUser&&JSON.parse(localStorage.currentUser)||void 0),i(this,"saveCurrentUser",(e=>{localStorage.currentUser=JSON.stringify(e),this.currentUser=e})),i(this,"logout",(()=>{localStorage.clear(),J("")})),b(this)}};export{B as A,D as N,x as U,C as W,V as l,J as s};
