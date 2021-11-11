import{r as e,p as t,F as o,a9 as n,h as r}from"./vendor.d60c66d5.js";import{w as a,a as s,b as i,s as c}from"./index.54cf575a.js";var l=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],d=e.exports.forwardRef((function(d,p){var m=d.className,f=d.component,u=d.viewBox,v=d.spin,x=d.rotate,h=d.tabIndex,y=d.onClick,w=d.children,g=t(d,l);a(Boolean(f||w),"Should have `component` prop or `children`."),s();var B=e.exports.useContext(i).prefixCls,C=void 0===B?"anticon":B,E=o(C,m),b=o(n({},"".concat(C,"-spin"),!!v)),I=x?{msTransform:"rotate(".concat(x,"deg)"),transform:"rotate(".concat(x,"deg)")}:void 0,N=r(r({},c),{},{className:b,style:I,viewBox:u});u||delete N.viewBox;var k=h;return void 0===k&&y&&(k=-1),e.exports.createElement("span",r(r({role:"img"},g),{},{ref:p,tabIndex:k,onClick:y,className:E}),f?e.exports.createElement(f,r({},N),w):w?(a(Boolean(u)||1===e.exports.Children.count(w)&&e.exports.isValidElement(w)&&"use"===e.exports.Children.only(w).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),e.exports.createElement("svg",r(r({},N),{},{viewBox:u}),w)):null)}));d.displayName="AntdIcon";var p=d,m=["type","children"],f=new Set;function u(e){return Boolean("string"==typeof e&&e.length&&!f.has(e))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=e[t];if(u(o)){var n=document.createElement("script");n.setAttribute("src",o),n.setAttribute("data-namespace",o),e.length>t+1&&(n.onload=function(){v(e,t+1)},n.onerror=function(){v(e,t+1)}),f.add(o),document.body.appendChild(n)}}function x(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o.scriptUrl,a=o.extraCommonProps,s=void 0===a?{}:a;n&&"undefined"!=typeof document&&"undefined"!=typeof window&&"function"==typeof document.createElement&&(Array.isArray(n)?v(n.reverse()):v([n]));var i=e.exports.forwardRef((function(o,n){var a=o.type,i=o.children,c=t(o,m),l=null;return o.type&&(l=e.exports.createElement("use",{xlinkHref:"#".concat(a)})),i&&(l=i),e.exports.createElement(p,r(r(r({},s),c),{},{ref:n}),l)}));return i.displayName="Iconfont",i}const h="//at.alicdn.com/t/font_2827128_s7lesd9eiy.js",y={zh:"🇨🇳 简体中文",tw:"🇭🇰 繁體中文",en:"🇺🇸 English",jp:"🇯🇵 日本語"},w=x({scriptUrl:h});export{p as I,y as L,w as a,h as b,x as c};