import{d as u,M as d,j as n,c as _,q as t,l as m,x as l,N as i,O as r,P as h,o as v,Q as C,_ as f}from"./index-91cc6527.js";const S=u({__name:"TopSearch",props:{searchHandle:{type:Function},vModel:{},searchTopClassName:{},searchInputClassName:{}},setup(N){const a=d("v-modelSearchStr");return(e,s)=>{const c=n("el-button"),p=n("el-input");return v(),_("div",{class:r(e.searchTopClassName||"serch-top")},[t(p,{modelValue:l(a),"onUpdate:modelValue":s[1]||(s[1]=o=>i(a)?a.value=o:null),placeholder:"请输入查询内容",class:r(e.searchInputClassName||"serch-input"),autocomplete:"on",size:"large"},{append:m(()=>[t(c,{icon:l(C),onClick:s[0]||(s[0]=o=>e.$emit("searchHandle"))},null,8,["icon"])]),_:1},8,["modelValue","class"]),h(e.$slots,"default",{},void 0,!0)],2)}}});const y=f(S,[["__scopeId","data-v-9d90374c"]]);export{y as T};
