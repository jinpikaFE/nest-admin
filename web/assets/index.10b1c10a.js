import{r as n,az as o,aA as e,aB as r,f as t,R as a,d as i,k as c,l,w as s,aC as d}from"./vendor.6b110da5.js";var u=n.exports.createContext({});function f(n){return n.attachTo?n.attachTo:document.querySelector("head")||document.body}function m(n){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!o())return null;var t,a=document.createElement("style");(null===(e=r.csp)||void 0===e?void 0:e.nonce)&&(a.nonce=null===(t=r.csp)||void 0===t?void 0:t.nonce);a.innerHTML=n;var i=f(r),c=i.firstChild;return r.prepend&&i.prepend?i.prepend(a):r.prepend&&c?i.insertBefore(a,c):i.appendChild(a),a}var p=new Map;function y(n,o){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=f(e);if(!p.has(r)){var t=m("",e),a=t.parentNode;p.set(r,a),a.removeChild(t)}var i=Array.from(p.get(r).children).find((function(n){return"STYLE"===n.tagName&&n["rc-util-key"]===o}));if(i){var c,l,s;if((null===(c=e.csp)||void 0===c?void 0:c.nonce)&&i.nonce!==(null===(l=e.csp)||void 0===l?void 0:l.nonce))i.nonce=null===(s=e.csp)||void 0===s?void 0:s.nonce;return i.innerHTML!==n&&(i.innerHTML=n),i}var d=m(n,e);return d["rc-util-key"]=o,d}function C(n,o){e(n,"[@ant-design/icons] ".concat(o))}function v(n){return"object"===t(n)&&"string"==typeof n.name&&"string"==typeof n.theme&&("object"===t(n.icon)||"function"==typeof n.icon)}function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(o,e){var r=n[e];switch(e){case"class":o.className=r,delete o.class;break;default:o[e]=r}return o}),{})}function h(n,o,e){return e?a.createElement(n.tag,i(i({key:o},g(n.attrs)),e),(n.children||[]).map((function(e,r){return h(e,"".concat(o,"-").concat(n.tag,"-").concat(r))}))):a.createElement(n.tag,i({key:o},g(n.attrs)),(n.children||[]).map((function(e,r){return h(e,"".concat(o,"-").concat(n.tag,"-").concat(r))})))}function b(n){return r(n)[0]}function k(n){return n?Array.isArray(n)?n:[n]:[]}var T={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},w="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",x=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=n.exports.useContext(u),r=e.csp;n.exports.useEffect((function(){y(o,"@ant-design-icons",{prepend:!0,csp:r})}),[])},N=["icon","className","onClick","style","primaryColor","secondaryColor"],E={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var A=function(n){var o=n.icon,e=n.className,r=n.onClick,t=n.style,a=n.primaryColor,l=n.secondaryColor,s=c(n,N),d=E;if(a&&(d={primaryColor:a,secondaryColor:l||b(a)}),x(),C(v(o),"icon should be icon definiton, but got ".concat(o)),!v(o))return null;var u=o;return u&&"function"==typeof u.icon&&(u=i(i({},u),{},{icon:u.icon(d.primaryColor,d.secondaryColor)})),h(u.icon,"svg-".concat(u.name),i({className:e,onClick:r,style:t,"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s))};A.displayName="IconReact",A.getTwoToneColors=function(){return i({},E)},A.setTwoToneColors=function(n){var o=n.primaryColor,e=n.secondaryColor;E.primaryColor=o,E.secondaryColor=e||b(o),E.calculated=!!e};var j=A;function I(n){var o=k(n),e=l(o,2),r=e[0],t=e[1];return j.setTwoToneColors({primaryColor:r,secondaryColor:t})}var L=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];I("#1890ff");var M=n.exports.forwardRef((function(o,e){var r,t=o.className,a=o.icon,f=o.spin,m=o.rotate,p=o.tabIndex,y=o.onClick,C=o.twoToneColor,v=c(o,L),g=n.exports.useContext(u).prefixCls,h=void 0===g?"anticon":g,b=s(h,(d(r={},"".concat(h,"-").concat(a.name),!!a.name),d(r,"".concat(h,"-spin"),!!f||"loading"===a.name),r),t),T=p;void 0===T&&y&&(T=-1);var w=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,x=k(C),N=l(x,2),E=N[0],A=N[1];return n.exports.createElement("span",i(i({role:"img","aria-label":a.name},v),{},{ref:e,tabIndex:T,onClick:y,className:b}),n.exports.createElement(j,{icon:a,primaryColor:E,secondaryColor:A,style:w}))}));M.displayName="AntdIcon",M.getTwoToneColor=function(){var n=j.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor},M.setTwoToneColor=I;var z=M;function H(n,o){for(var e=Object.assign({},n),r=0;r<o.length;r+=1){delete e[o[r]]}return e}export{z as A,u as C,y as a,H as o,T as s,x as u,C as w};
