import{d as p,$ as u,y as h,b as n,e,x as a,F as f,Z as g,o as i,a0 as v,l as x,g as b}from"../modules/vue-Cn1i8syw.js";import{u as N,j as y,c as d,b as k}from"../index-CW_hjiYJ.js";import{N as w}from"./NoteDisplay-DY_Fedwx.js";import"../modules/shiki-CicuatVv.js";const S=p({__name:"print",setup(m,{expose:c}){c();const{slides:r,total:o}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${d.title}`});const _=h(()=>r.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),l={slides:r,total:o,slidesWithNote:_,get configs(){return d},NoteDisplay:w};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),D={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},W={class:"opacity-50"},C=e("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"};function M(m,c,r,o,_,l){return i(),n("div",D,[e("div",L,[e("div",T,[e("h1",V,a(o.configs.title),1),e("div",j,a(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(o.slidesWithNote,(t,s)=>(i(),n("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",W,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),C])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),n("hr",F)):b("v-if",!0)]))),128))])])}const P=k(S,[["render",M],["__file","/home/runner/work/slidev_template/slidev_template/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{P as default};
