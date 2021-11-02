import{r as n,aE as e,aF as o,aG as r,j as t,R as a,h as i,q as c,s as l,F as s,aH as d}from"./vendor.b3ee8ec2.js";var u=n.exports.createContext({});function f(n){return n.attachTo?n.attachTo:document.querySelector("head")||document.body}function m(n){var o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e())return null;var t,a=document.createElement("style");(null===(o=r.csp)||void 0===o?void 0:o.nonce)&&(a.nonce=null===(t=r.csp)||void 0===t?void 0:t.nonce);a.innerHTML=n;var i=f(r),c=i.firstChild;return r.prepend&&i.prepend?i.prepend(a):r.prepend&&c?i.insertBefore(a,c):i.appendChild(a),a}var p=new Map;function y(n,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=f(o);if(!p.has(r)){var t=m("",o),a=t.parentNode;p.set(r,a),a.removeChild(t)}var i=Array.from(p.get(r).children).find((function(n){return"STYLE"===n.tagName&&n["rc-util-key"]===e}));if(i){var c,l,s;if((null===(c=o.csp)||void 0===c?void 0:c.nonce)&&i.nonce!==(null===(l=o.csp)||void 0===l?void 0:l.nonce))i.nonce=null===(s=o.csp)||void 0===s?void 0:s.nonce;return i.innerHTML!==n&&(i.innerHTML=n),i}var d=m(n,o);return d["rc-util-key"]=e,d}function v(n,e){o(n,"[@ant-design/icons] ".concat(e))}function C(n){return"object"===t(n)&&"string"==typeof n.name&&"string"==typeof n.theme&&("object"===t(n.icon)||"function"==typeof n.icon)}function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,o){var r=n[o];switch(o){case"class":e.className=r,delete e.class;break;default:e[o]=r}return e}),{})}function h(n,e,o){return o?a.createElement(n.tag,i(i({key:e},g(n.attrs)),o),(n.children||[]).map((function(o,r){return h(o,"".concat(e,"-").concat(n.tag,"-").concat(r))}))):a.createElement(n.tag,i({key:e},g(n.attrs)),(n.children||[]).map((function(o,r){return h(o,"".concat(e,"-").concat(n.tag,"-").concat(r))})))}function b(n){return r(n)[0]}function k(n){return n?Array.isArray(n)?n:[n]:[]}var T={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},x="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,o=n.exports.useContext(u),r=o.csp;n.exports.useEffect((function(){y(e,"@ant-design-icons",{prepend:!0,csp:r})}),[])},E=["icon","className","onClick","style","primaryColor","secondaryColor"],N={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var j=function(n){var e=n.icon,o=n.className,r=n.onClick,t=n.style,a=n.primaryColor,l=n.secondaryColor,s=c(n,E),d=N;if(a&&(d={primaryColor:a,secondaryColor:l||b(a)}),w(),v(C(e),"icon should be icon definiton, but got ".concat(e)),!C(e))return null;var u=e;return u&&"function"==typeof u.icon&&(u=i(i({},u),{},{icon:u.icon(d.primaryColor,d.secondaryColor)})),h(u.icon,"svg-".concat(u.name),i({className:o,onClick:r,style:t,"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s))};j.displayName="IconReact",j.getTwoToneColors=function(){return i({},N)},j.setTwoToneColors=function(n){var e=n.primaryColor,o=n.secondaryColor;N.primaryColor=e,N.secondaryColor=o||b(e),N.calculated=!!o};var A=j;function I(n){var e=k(n),o=l(e,2),r=o[0],t=o[1];return A.setTwoToneColors({primaryColor:r,secondaryColor:t})}var L=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];I("#1890ff");var H=n.exports.forwardRef((function(e,o){var r,t=e.className,a=e.icon,f=e.spin,m=e.rotate,p=e.tabIndex,y=e.onClick,v=e.twoToneColor,C=c(e,L),g=n.exports.useContext(u).prefixCls,h=void 0===g?"anticon":g,b=s(h,(d(r={},"".concat(h,"-").concat(a.name),!!a.name),d(r,"".concat(h,"-spin"),!!f||"loading"===a.name),r),t),T=p;void 0===T&&y&&(T=-1);var x=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,w=k(v),E=l(w,2),N=E[0],j=E[1];return n.exports.createElement("span",i(i({role:"img","aria-label":a.name},C),{},{ref:o,tabIndex:T,onClick:y,className:b}),n.exports.createElement(A,{icon:a,primaryColor:N,secondaryColor:j,style:x}))}));H.displayName="AntdIcon",H.getTwoToneColor=function(){var n=A.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor},H.setTwoToneColor=I;var M=H;function R(n,e){for(var o=Object.assign({},n),r=0;r<e.length;r+=1){delete o[e[r]]}return o}export{M as A,u as C,y as a,R as o,T as s,w as u,v as w};
