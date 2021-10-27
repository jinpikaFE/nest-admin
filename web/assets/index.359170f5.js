var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&n(e,a,t[a]);return e},s=(e,r)=>t(e,a(r));"undefined"!=typeof require&&require;import{a as d,e as u,R as m,b as c,d as p,u as y,c as f}from"./services.123994d9.js";import{a as v}from"./FromTreeMenu.a9395888.js";import{q as h}from"./global.b544051f.js";import{t as b}from"./untils.fef0d0c5.js";import{b as g,a as w}from"./index.de14bc76.js";import{P as x,a as E}from"./Table.f76b0e48.js";import{r as T,aY as k,b1 as S,R as j,q as O,L as I,bd as _,b2 as C,t as q}from"./vendor.6b110da5.js";import"./index.10b1c10a.js";import"./index.ade18ff5.js";import"./index.2986d513.js";/* empty css              */const F=()=>{const[e,t]=T.exports.useState(!1),[a,r]=T.exports.useState(),l=T.exports.useRef(),[i,n]=T.exports.useState([]),[F,D]=T.exports.useState([]),[P,R]=T.exports.useState([]),L=k(),$=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"角色名",dataIndex:"name",copyable:!0,ellipsis:!0,tip:"标题过长会自动收缩",formItemProps:{rules:[{required:!0,message:"此项为必填项"}]}},{title:"权限",dataIndex:"authority",renderFormItem:()=>j.createElement(I,{allowClear:!0},null==F?void 0:F.map((e=>j.createElement(I.Option,{value:e._id,key:e._id},L({id:`menu.${null==e?void 0:e.name}`}))))),render:e=>j.createElement(j.Fragment,null,null==e?void 0:e.map((e=>j.createElement(_,{key:null==e?void 0:e._id,color:null==e?void 0:e.color,style:{marginBottom:"5px"}},L({id:`menu.${null==e?void 0:e.name}`})))))},{title:"创建时间",dataIndex:"registerTime",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"创建时间",dataIndex:"created_at",valueType:"dateTimeRange",hideInTable:!0,search:{transform:e=>({startTime:e[0],endTime:e[1]})}},{title:"操作",valueType:"option",width:180,render:(e,t,a,r)=>[j.createElement(O,{type:"link",key:"editable",onClick:()=>{A(null==t?void 0:t._id)}},"编辑"),j.createElement(C,{key:"del",placement:"topRight",title:"确定要删除吗?",onConfirm:()=>H(null==t?void 0:t._id,null==t?void 0:t.name),okText:"确定",okType:"danger",cancelText:"取消"},j.createElement(O,{type:"link",danger:!0,key:"delete"},"删除"))]}];T.exports.useEffect((()=>{(async()=>{const e=await h();D(null==e?void 0:e.data)})()}),[]),T.exports.useEffect((()=>{if(e){(async()=>{if(F){let e=b(F,"_id","lastMenu",(e=>(e.title=L({id:`menu.${e.name}`}),e.value=e._id,(null==e?void 0:e.isLink)?(e.disabled=!0,e):e)));n(e)}})()}}),[e,a]);const B=()=>{t(!0)},z=()=>{t(!1)},A=async e=>{const t=await c(e);r(null==t?void 0:t.data),B()},H=async(e,t)=>{var a;const r=await p(e,t);if(r){await v({name:t})&&(null==(a=null==l?void 0:l.current)||a.reload(),q.success(r.message||"删除成功"))}},J={treeData:i,treeDefaultExpandAll:!0,treeCheckable:!0,treeCheckStrictly:!0,showCheckedStrategy:S.SHOW_ALL,placeholder:"请选择",allowClear:!0,style:{width:"328px"},dropdownStyle:{maxHeight:400,overflow:"auto"}};return j.createElement(j.Fragment,null,j.createElement(x,{bordered:!0,request:async(e,t,a)=>{var r;const l=await h(),i=await d(o(o(o({},e),t),a)),n=null==(r=i.data)?void 0:r.map((e=>{var t;return e.authority=[],null==(t=null==l?void 0:l.data)||t.forEach((t=>{t.authority.includes(e.name)&&e.authority.push(t)})),e})),s=JSON.parse(JSON.stringify(n));if(i){const e=s.map((e=>{var t;const a=[];null==(t=null==e?void 0:e.authority)||t.map((e=>{a.push(L({id:`menu.${e.name}`}))})),e.authority=a;const{name:r,authority:l,registerTime:i}=e;return{name:r,authority:l,registerTime:new Date(i).toLocaleString()}}));return R(e),{data:n,success:!0,total:i.total}}return{data:void 0,success:!1,total:0}},columns:$,actionRef:l,editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"_id",search:{labelWidth:"auto"},form:{syncToUrl:(e,t)=>"get"===t?s(o({},e),{created_at:[e.startTime,e.endTime]}):e},pagination:{pageSize:5,pageSizeOptions:["5","10","20","30","50","100"]},dateFormatter:"string",headerTitle:"角色列表",toolBarRender:()=>[j.createElement(O,{key:"out",onClick:()=>{u(P,"角色管理")}},"导出数据"),j.createElement(O,{key:"button",icon:j.createElement(E,null),type:"primary",onClick:()=>{B(),r(void 0)}},"新建")]}),j.createElement(m,{onCloseDrawer:z,visibleDrawer:e,cItem:a,title:"新增角色",renderFormItemDom:()=>j.createElement(j.Fragment,null,j.createElement(g,{width:"md",name:"name",label:"角色名",tooltip:"最长为 16 位",placeholder:"请输入角色名",rules:[{required:!0,message:"请输入角色名!"},{validator:(e,t,a)=>{t.length>16?a("角色名过长，最长为 16 位"):a()}}]}),j.createElement(w.Item,{label:"权限",name:"authority",rules:[{required:!0,message:"请选择权限!"}]},j.createElement(S,o({},J)))),onFinish:async e=>{var t,r,i;const n=null==(t=null==e?void 0:e.authority)?void 0:t.map((e=>e.value));if(a){const t=await y(null==a?void 0:a._id,s(o({},e),{authority:n}));if(t){await v(s(o({},e),{authority:n}))&&(null==(r=null==l?void 0:l.current)||r.reload(),q.success(t.message||"更新成功"),z())}}else{const t=await f(s(o({},e),{authority:n}));if(t){await v(s(o({},e),{authority:n}))&&(null==(i=null==l?void 0:l.current)||i.reload(),q.success(t.message||"创建成功"),z())}}}}))};export{F as default};
