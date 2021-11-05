var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&n(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&n(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));"undefined"!=typeof require&&require;import{r as d,R as c,C as u,b8 as m,$ as p,z as f,b9 as b}from"./vendor.b3ee8ec2.js";import{u as v,c as y,d as w}from"./FromTreeMenu.970eb442.js";import{q as x,t as E}from"./index.52a055f3.js";import{a as h}from"./constants.e8f8120a.js";import{D as g,P as j,a as T}from"./Table.48a8ea9c.js";import{b as k,a as C,S}from"./index.78fc2206.js";import"./index.d0d4d799.js";import"./index.944e7fb0.js";/* empty css              */import"./index.0e18a496.js";import"./index.da884ff9.js";var I="_drawerForm_1dsm9_1";const R=e=>{const{onCloseDrawer:t,visibleDrawer:a,refTable:l,cItem:r}=e,[o,n]=d.exports.useState([]),[f,b]=d.exports.useState("#fff"),w=d.exports.useRef();return d.exports.useEffect((()=>{if(a){(async()=>{const e=await x();if(e){let t=E(e.data,"_id","lastMenu",(e=>(e.title=e.name,e.value=e._id,(null==e?void 0:e.isLink)?(e.disabled=!0,e):e)));if(r){const e=(t,a)=>(t.forEach(((l,r)=>{(null==l?void 0:l.children)&&e(null==l?void 0:l.children,a),(null==l?void 0:l._id)===a&&t.splice(r,1)})),t);t=e(t,null==r?void 0:r._id)}n(t)}})()}}),[a,r]),d.exports.useEffect((()=>{var e,t;b("#fff"),a&&r&&(b(null==r?void 0:r.color),null==(e=null==w?void 0:w.current)||e.resetFields(),null==(t=null==w?void 0:w.current)||t.setFieldsValue(r))}),[a,r]),c.createElement(g,i(s({className:I},{labelCol:{span:4},wrapperCol:{span:14}}),{title:"新建菜单",layout:"horizontal",visible:a,drawerProps:{forceRender:!0,destroyOnClose:!0,onClose:t},onFinish:async e=>{var a,o;if(r){const o=await v(null==r?void 0:r._id,i(s({},e),{color:(null==(a=null==e?void 0:e.color)?void 0:a.hex)||(null==e?void 0:e.color)}));o&&(null==l||l.reload(),window.location.reload(),u.success(o.message||"更新成功"),t())}else{const a=await y(i(s({},e),{color:null==(o=null==e?void 0:e.color)?void 0:o.hex}));a&&(null==l||l.reload(),window.location.reload(),u.success(a.message||"创建成功"),t())}},initialValues:{status:1,isLink:0},formRef:w}),c.createElement(k,{width:"md",name:"name",label:"菜单名称",tooltip:"最长为 16 位",placeholder:"请输入菜单名称",rules:[{required:!0,message:"请输入菜单名称!"},{validator:(e,t,a)=>{t.length>16?a("菜单名过长，最长为 16 位"):a()}}]}),c.createElement(k,{width:"md",name:"path",label:"路由路径",placeholder:"路由路径，例‘/path/paths’,‘https://www.baidu.com/’",rules:[{required:!0,message:"请输入路由路径!"},{validator:(e,t,a)=>{const l=new RegExp("^(/[a-zA-Z]+)+$","g"),r=new RegExp("^https?://(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+.)+(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+)","g");l.test(t)||r.test(t)?a():a("请输入正确的路由")}}]}),c.createElement(C.Item,{label:"上级菜单",name:"lastMenu"},c.createElement(m,{allowClear:!0,className:"input-fix-md",dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:o,placeholder:"请选择"})),c.createElement(k,{width:"md",name:"icon",label:"图标",placeholder:"请输入图标名",rules:[{required:!0,message:"请输入图标名!"},{validator:(e,t,a)=>{new RegExp("^[^一-龥]+$","g").test(t)?a():a("请输入正确的图标名")}}]}),c.createElement(C.Item,{name:"color",label:"菜单标签颜色",rules:[{required:!0,message:"请选择菜单标签颜色!"}]},c.createElement(S,{color:f,onChangeComplete:e=>{b(e.hex)}})),c.createElement(C.Item,{name:"status",label:"状态"},c.createElement(p.Group,{optionType:"button",buttonStyle:"solid",options:[{label:"启用",value:1},{label:"禁用",value:0}]})),c.createElement(C.Item,{name:"isLink",label:"是否外链"},c.createElement(p.Group,{optionType:"button",buttonStyle:"solid",options:[{label:"否",value:0},{label:"是",value:1}]})))},_=()=>{const[e,t]=d.exports.useState(!1),[a,l]=d.exports.useState(),r=d.exports.useRef(),o=()=>{t(!0)},n=[{title:"菜单名称",dataIndex:"name",copyable:!0},{title:"图标",width:60,align:"center",dataIndex:"icon",render:e=>c.createElement(h,{type:e})},{title:"状态",dataIndex:"status",valueType:"select",valueEnum:{all:{text:"全部",status:"Default"},0:{text:"停用",status:"Error"},1:{text:"启用",status:"Success"}}},{title:"创建时间",dataIndex:"registerTime",valueType:"dateTime"},{title:"操作",valueType:"option",width:50,render:(e,t)=>[c.createElement(f,{type:"link",key:"editable",onClick:()=>{(e=>{l(e),o()})(t)}},"编辑"),c.createElement("span",{key:"del"},!(null==t?void 0:t.children)&&c.createElement(b,{placement:"topRight",title:"确定要删除吗?",onConfirm:()=>(async e=>{var t;const a=await w(e);a&&(null==(t=null==r?void 0:r.current)||t.reload(),window.location.reload(),u.success(a.message||"删除成功"))})(null==t?void 0:t._id),okText:"确定",okType:"danger",cancelText:"取消"},c.createElement(f,{type:"link",danger:!0,key:"delete"},"删除")))]}];return c.createElement(c.Fragment,null,c.createElement(j,{scroll:{x:700},bordered:!0,actionRef:r,request:async()=>{const e=await x();if(e){return{data:E(e.data,"_id","lastMenu",(e=>e)),success:!0}}return{data:void 0,success:!1,total:0}},columns:n,editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"_id",search:!1,pagination:!1,dateFormatter:"string",headerTitle:"菜单列表",toolBarRender:()=>[c.createElement(f,{key:"button",icon:c.createElement(T,null),type:"primary",onClick:()=>{o(),l(void 0)}},"新建")]}),c.createElement(R,{onCloseDrawer:()=>{t(!1)},visibleDrawer:e,refTable:null==r?void 0:r.current,cItem:a}))},O=()=>c.createElement(_,null);export{O as default};
