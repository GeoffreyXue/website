(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(31),n=c.n(s),i=c(69),r=c(17),l=c(11),o=c(74),j=c(52),d=c(48),b=c(72),u=c(105),m=c(106),h=c(107),x=c.p+"static/media/terminal.74d370c4.svg",p=(c(53),c(2));var O=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){c&&setTimeout((function(){s(!1)}),2e3)}),[c]),Object(p.jsx)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",style:{flex:"0 0 auto"},children:Object(p.jsxs)(o.a,{children:[Object(p.jsxs)(j.a.Brand,{children:[Object(p.jsx)("img",{src:x,width:"50",height:"30",className:"d-inline-block align-top",alt:"terminal logo"}),"Geoffrey Xue"]}),Object(p.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(p.jsxs)(d.a,{className:"me-auto",children:[Object(p.jsx)(d.a.Link,{href:"/~gxue/#home",children:"Home"}),Object(p.jsx)(d.a.Link,{href:"/~gxue/#projects",children:"Projects"}),Object(p.jsx)(d.a.Link,{href:"/~gxue/#resume",children:"Resume"})]}),Object(p.jsxs)(d.a,{className:"ml-auto Contacts",children:[Object(p.jsxs)("a",{onClick:function(){navigator.clipboard.writeText("xuegeoff@gmail.com"),s(!0)},children:[Object(p.jsx)(u.a,{className:"ContactIcon"}),Object(p.jsx)("div",{className:"ToastContainer",children:Object(p.jsx)(b.a,{show:c,onClose:s,className:"Toast",children:Object(p.jsx)(b.a.Header,{children:Object(p.jsx)("div",{className:"me-auto",children:"\u2714\ufe0f Copied xuegeoff@gmail.com!"})})})})]}),Object(p.jsx)("a",{href:"https://github.com/GeoffreyXue",children:Object(p.jsx)(m.a,{className:"ContactIcon"})}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/geoffreyxue/",children:Object(p.jsx)(h.a,{className:"ContactIcon"})})]})]})]})})},f=c(75),g=c.p+"static/media/senior_photo.eb920ace.jpg";c(91);var v=function(){return Object(p.jsx)("div",{className:"Home",children:Object(p.jsxs)("div",{className:"Content",children:[Object(p.jsxs)("div",{className:"Panel",children:[Object(p.jsx)("div",{className:"Strip"}),Object(p.jsx)("div",{className:"PictureBackground",children:Object(p.jsx)(f.a,{src:g,className:"Picture",roundedCircle:!0})}),Object(p.jsx)("div",{className:"Name",children:"Geoffrey Xue"}),Object(p.jsxs)("div",{className:"Information",children:[Object(p.jsx)("div",{children:"PHS '17 - '21 \ud83c\udf93 UW Madison '21 - '24"}),Object(p.jsx)("div",{children:"Computer Science, Data Science"})]})]}),Object(p.jsx)("div",{className:"Waves",children:Object(p.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(p.jsx)("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",className:"shape-fill"}),Object(p.jsx)("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",className:"shape-fill"}),Object(p.jsx)("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",className:"shape-fill"})]})})]})})},N=c(3),C=c(35),w=c(76),y=c(77),k=c(70),S=c(51);c(93);var I=function(){var e=Object(a.useContext)(D),t=Object(S.d)(Object(S.c)(e)),c=Object(a.useState)([]),s=Object(l.a)(c,2),n=s[0],i=s[1],r=Object(a.useState)([]),o=Object(l.a)(r,2),j=o[0],d=o[1];function b(e){return 0===e.length?[]:e.split(",").map((function(e){return{label:e.match(/\[.*\]/g)[0].slice(1,-1),url:e.match(/\(.*\)/g)[0].slice(1,-1)}}))}function u(e,t){return e=e.map((function(e,c){return{id:c,label:e,type:t[e]?t[e].Type:"primary",text:t[e]?t[e].Text:null}})).map((function(e){var t;return Object(N.a)(Object(N.a)({},e),{},{text:null!==(t=e.text)&&void 0!==t?t:"warning"===e.type||"light"===e.type?"dark":"light"})}))}return Object(a.useEffect)((function(){Object(S.b)(Object(S.a)(t,"1tZvZzhRKlrNdr5GNieDeQ2-7dnDAnATqF_zqnmmODdA")).then((function(e){if(e.exists()){var t=e.val();i(t.Projects.map((function(e){return{id:e.id,url:e.Image,title:e.Name,subtitle:e.Time,description:e.Description,links:b(e.Links),badges:u(e.Badges.split(","),t.Badges)}}))),d(u(t.Upcoming.map((function(e){return e.Upcoming})),t.Badges))}else console.log("No data available")})).catch((function(e){console.error(e)}))}),[t]),Object(p.jsx)("div",{className:"Projects",children:Object(p.jsxs)("div",{className:"Scroll",children:[Object(p.jsx)("div",{className:"Introduction",children:"A list of projects/experiments/hacks."}),Object(p.jsxs)("div",{className:"Upcoming",children:["Upcoming projects underway are using: \xa0",j.map((function(e){return Object(p.jsxs)("span",{children:[Object(p.jsx)(k.a,{bg:e.type,text:e.text,children:e.label}),"\xa0"]},e.id)}))]}),Object(p.jsx)(w.a,{xs:1,md:2,className:"g-4",children:n.map((function(e){return Object(p.jsx)(y.a,{children:Object(p.jsxs)(C.a,{children:[Object(p.jsx)(C.a.Img,{className:"CardImage",variant:"top",src:e.url}),Object(p.jsxs)(C.a.Body,{children:[Object(p.jsx)(C.a.Title,{children:e.title}),Object(p.jsx)(C.a.Subtitle,{children:e.subtitle}),e.badges.map((function(e){return Object(p.jsxs)("span",{children:[Object(p.jsx)(k.a,{bg:e.type,text:e.text,children:e.label}),"\xa0"]},e.id)})),Object(p.jsx)("hr",{}),Object(p.jsx)(C.a.Text,{children:e.description}),e.links.map((function(e){return Object(p.jsx)(C.a.Link,{href:e.url,children:e.label},e.url)}))]})]})},e.id)}))})]})})};c(94);function T(){return Object(p.jsx)("div",{className:"Resume",children:Object(p.jsx)("iframe",{title:"Resume",src:"https://drive.google.com/file/d/1f6tbueydUiYeupfHdiil2-1mEbw2eSh4/preview",height:"100%",width:"100%"})})}c(95);var B=c(78);console.log("initializing...");var P=Object(B.a)({apiKey:"AIzaSyAnFWFGRVnSTKm7vqg4NR3AYSUkMkzZM6o",authDomain:"portfolio-1599c.firebaseapp.com",databaseURL:"https://portfolio-1599c-default-rtdb.firebaseio.com",projectId:"portfolio-1599c",storageBucket:"portfolio-1599c.appspot.com",messagingSenderId:"307158814152",appId:"1:307158814152:web:d7fa06f466f370bb7cc4fd",measurementId:"G-ZF11D80RDH"}),D=Object(a.createContext)(P);var L=function(){return Object(p.jsxs)(D.Provider,{value:P,children:[Object(p.jsx)(O,{}),Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{exact:!0,path:"/",component:v}),Object(p.jsx)(r.a,{exact:!0,path:"/home",component:v}),Object(p.jsx)(r.a,{exact:!0,path:"/projects",component:I}),Object(p.jsx)(r.a,{exact:!0,path:"/resume",component:T})]})]})},R=(c(101),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))});n.a.render(Object(p.jsx)(i.a,{basename:"/~gxue",children:Object(p.jsx)(L,{})}),document.getElementById("root")),R()},91:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.bf1521b4.chunk.js.map