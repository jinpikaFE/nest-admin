import"./index.980b5b03.js";import"./Google.9f9907d1.js";import{R as e,r as t,A as r,L as n,G as o,a8 as a}from"./vendor.932c1d31.js";import{F as l,u as i,R as c,b as u}from"./index.a86ebf54.js";import{L as s,R as p}from"./index.99c488c8.js";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=e.forwardRef((function(a,c){var u=b(b({},e.useContext(l).groupProps),a),m=u.children,d=u.collapsible,g=u.defaultCollapsed,h=u.style,O=u.labelLayout,j=u.title,w=void 0===j?a.label:j,P=u.tooltip,E=u.align,C=void 0===E?"start":E,x=u.direction,A=u.size,S=void 0===A?32:A,R=u.titleStyle,F=u.titleRender,G=u.spaceProps,I=u.extra,L=y(i((function(){return g||!1}),{value:a.collapsed,onChange:a.onCollapse}),2),D=L[0],N=L[1],k=(0,t.exports.useContext(r.ConfigContext).getPrefixCls)("pro-form-group"),z=d&&e.createElement(p,{style:{marginRight:8},rotate:D?void 0:90}),M=e.createElement(s,{label:z?e.createElement("div",null,z,w):w,tooltip:P}),T=F?F(M,a):M,U=[],V=e.Children.toArray(m).map((function(t){var r;return e.isValidElement(t)&&(null==t||null===(r=t.props)||void 0===r?void 0:r.hidden)?(U.push(t),null):t}));return e.createElement("div",{className:n(k,v({},"".concat(k,"-twoLine"),"twoLine"===O)),style:h,ref:c},U.length>0&&e.createElement("div",{style:{display:"none"}},U),(w||P||I)&&e.createElement("div",{className:"".concat(k,"-title"),style:R,onClick:function(){N(!D)}},I?e.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},T,e.createElement("span",{onClick:function(e){return e.stopPropagation()}},I)):T),d&&D?null:e.createElement(o,f({},G,{className:"".concat(k,"-container"),size:S,align:C,direction:x,style:b({rowGap:0},null==G?void 0:G.style)}),V))}));g.displayName="ProForm-Group";var h=g;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(t){return e.createElement(c,O({layout:"vertical",submitter:{render:function(e,t){return t.reverse()}},contentRender:function(t,r){return e.createElement(e.Fragment,null,t,r)}},t))}j.Group=h,j.useForm=a.useForm,j.Item=u;export{j as P};
