(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6481)}])},6481:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return F},default:function(){return K}});var n=t(5893),s=t(7294),r=t(6886),l=t(4853),a=t(3321);function c(e){let{handleSubmit:i,initialTitle:t,initialDescription:c}=e,[d,o]=(0,s.useState)(t),[x,u]=(0,s.useState)(c);return(0,n.jsx)("form",{onSubmit:e=>{e.preventDefault(),d&&x&&(i({title:d,description:x}),o(void 0),u(void 0))},children:(0,n.jsxs)(r.ZP,{container:!0,spacing:3,mt:1,children:[(0,n.jsx)(r.ZP,{item:!0,xs:!0,children:(0,n.jsx)(l.Z,{variant:"outlined",label:"Title",fullWidth:!0,id:"task-title",value:null!=d?d:"",onChange:e=>o(e.target.value),required:!0})}),(0,n.jsx)(r.ZP,{item:!0,xs:7,children:(0,n.jsx)(l.Z,{variant:"outlined",label:"Description",multiline:!0,fullWidth:!0,id:"task-desription",value:null!=x?x:"",onChange:e=>u(e.target.value),required:!0})}),(0,n.jsx)(r.ZP,{item:!0,xs:"auto",children:(0,n.jsx)(a.Z,{variant:"contained",type:"submit",disabled:!d||!x,children:"Save"})})]})})}var d=t(4452),o=t(629),x=t(5861);function u(){let{dispatch:e}=(0,d.Yl)();return(0,n.jsxs)(o.Z,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[(0,n.jsx)(x.Z,{variant:"h4",align:"center",children:"Add New Task"}),(0,n.jsx)(c,{handleSubmit:function(i){e({type:"ADD_TASK",payload:i})}})]})}var h=t(8462),j=t(7922),Z=t(1797),m=t(6761),p=t(7212),v=t(3946),f=t(8619),k=t(796),y=t(5071),_=t(9953);function g(e){let{task:i}=e,[t,r]=(0,s.useState)(!1),[l,a]=(0,s.useState)(!1),{dispatch:o}=(0,d.Yl)(),x=(0,s.useCallback)(()=>{o({type:d.aI.DELETE_TASK,payload:i.id})},[i,o]);return l?(0,n.jsx)(c,{handleSubmit:function(e){o({type:d.aI.EDIT_TASK,payload:{...e,id:i.id}}),a(!1)},initialTitle:i.title,initialDescription:i.description}):(0,n.jsx)(p.ZP,{disableGutters:!0,secondaryAction:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.Z,{onClick:()=>a(!0),children:(0,n.jsx)(Z.Z,{})}),(0,n.jsx)(v.Z,{onClick:x,children:(0,n.jsx)(m.Z,{})})]}),children:(0,n.jsxs)(f.Z,{role:void 0,onClick:()=>r(e=>!e),children:[(0,n.jsx)(k.Z,{children:(0,n.jsx)(y.Z,{checked:t})}),(0,n.jsx)(_.Z,{primary:i.title,secondary:(0,n.jsx)(n.Fragment,{children:i.description})})]})})}var S=t(9747),b=t(2734),T=t(7357);function C(e){let{text:i,Icon:t}=e,s=(0,b.Z)();return(0,n.jsxs)(T.Z,{p:1,justifyContent:"center",textAlign:"center",children:[t,(0,n.jsx)(x.Z,{mt:1,color:s.palette.text.secondary,children:i})]})}var N=t(6506),w=t(9104);function E(){let[e,i]=(0,s.useState)(),{state:{tasks:t}}=(0,d.Yl)(),c=(0,s.useMemo)(()=>t.filter(i=>!e||i.description.includes(e)||i.title.includes(e)),[t,e]);return(0,n.jsxs)(o.Z,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[(0,n.jsx)(x.Z,{variant:"h4",align:"center",children:"Tasks"}),(0,n.jsxs)(r.ZP,{container:!0,spacing:3,my:1,children:[(0,n.jsx)(r.ZP,{item:!0,xs:!0,children:(0,n.jsx)(l.Z,{fullWidth:!0,label:"Search",id:"filter-tasks",value:e||"",onChange:e=>{i(e.target.value)}})}),(0,n.jsx)(r.ZP,{item:!0,xs:"auto",children:(0,n.jsx)(a.Z,{disabled:!e,onClick:()=>i(void 0),children:"Clear"})})]}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(S.Z,{children:0===c.length?(0,n.jsx)(j.Z,{children:e?(0,n.jsx)(C,{text:"No Results!",Icon:(0,n.jsx)(N.Z,{color:"primary"})}):(0,n.jsx)(C,{text:"No tasks! Enjoy your day!",Icon:(0,n.jsx)(w.Z,{color:"primary"})})}):c.map(e=>(0,n.jsx)(j.Z,{children:(0,n.jsx)(g,{task:e})},e.id))})})]})}var P=t(2293),A=t(155),D=t(3156),I=t(9008),W=t.n(I),F=!0;function K(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(W(),{children:[(0,n.jsx)("title",{children:"Next Task List"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{color:"default",elevation:0,sx:{position:"relative",borderBottom:e=>"1px solid ".concat(e.palette.divider)},children:(0,n.jsx)(A.Z,{children:(0,n.jsx)(x.Z,{variant:"h6",color:"inherit",noWrap:!0,children:"Next Task List"})})}),(0,n.jsxs)(D.Z,{component:"main",maxWidth:"md",children:[(0,n.jsx)(u,{}),(0,n.jsx)(E,{})]})]})]})}}},function(e){e.O(0,[825,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);