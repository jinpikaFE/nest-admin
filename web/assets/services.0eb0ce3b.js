import{h as a}from"./index.620972d0.js";const s=async s=>a("/api/roles",{method:"GET",params:s}),o=async()=>a("/api/roles/all",{method:"GET"}),e=async s=>a(`/api/roles/${s}`,{method:"GET"}),d=async s=>a("/api/roles",{method:"POST",data:s}),t=async(s,o)=>a(`/api/roles/${s}/${o}`,{method:"DELETE"}),r=async(s,o)=>a(`/api/roles/${s}`,{method:"PATCH",data:o});export{s as a,e as b,d as c,t as d,o as q,r as u};