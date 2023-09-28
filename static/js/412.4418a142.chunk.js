"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[412],{3412:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(9439),a=r(2791),c=r(1087),s=r(6121),i=r(184),o=function(e){var t=e.data;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsx)("p",{className:"school",children:t.school}),(0,i.jsxs)("p",{className:"school",children:["Marks:",t.Marks,",  Year:",t.year]})]})})},l=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,i.jsx)(o,{data:e},e.school)}))]})};l.defaultProps={data:[]};var u=l,d=r(5745),m=function(e){var t=e.data,r=t.name,n=t.position,a=t.url,c=(t.startDate,t.endDate,t.summary),s=t.highlights;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:a,children:r})," - ",n]})}),c?(0,i.jsx)(d.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,s?(0,i.jsx)("ul",{className:"points",children:s.map((function(e){return(0,i.jsx)("li",{children:e},e)}))}):null]})},h=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"ExtraCurricular"})}),t.map((function(e){return(0,i.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};h.defaultProps={data:[]};var p=h,y=r(9142);function g(e,t,r){return(t=(0,y.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){var t=e.handleClick,r=e.active,n=e.label;return(0,i.jsx)("button",{className:"skillbutton ".concat(r[n]?"skillbutton-active":""),type:"button",onClick:function(){return t(n)},children:n})},b=function(e){var t=e.data,r=e.categories,n=t.category,a=t.competency,c=t.title,s={background:r.filter((function(e){return n.includes(e.name)})).map((function(e){return e.color}))[0]},o=v(v({},s),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:s,children:(0,i.jsx)("span",{children:c})}),(0,i.jsx)("div",{className:"skillbar-bar",style:o}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};b.defaultProps={categories:[]};var x=b,k=function(e){var t=e.skills,r=e.categories,c=Object.fromEntries([["All",!1]].concat(r.map((function(e){return[e.name,!1]})))),s=(0,a.useState)(c),o=(0,n.Z)(s,2),l=o[0],u=o[1],d=function(e){var t=Object.keys(l).reduce((function(t,r){return v(v({},t),{},g({},r,e===r&&!l[r]))}),{});t.All=!Object.keys(l).some((function(e){return t[e]})),u(t)};return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h3",{children:"Skills"}),(0,i.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,i.jsx)("div",{className:"skill-button-container",children:Object.keys(l).map((function(e){return(0,i.jsx)(j,{label:e,active:l,handleClick:d},e)}))}),(0,i.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(l).reduce((function(e,t){return l[t]?t:e}),"All");return t.sort((function(e,t){var r=0;return e.competency>t.competency?r=-1:e.competency<t.competency?r=1:e.category[0]>t.category[0]?r=-1:e.category[0]<t.category[0]||e.title>t.title?r=1:e.title<t.title&&(r=-1),r})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,i.jsx)(x,{categories:r,data:e},e.title)}))}()})]})};k.defaultProps={skills:[],categories:[]};var S=k,N=function(e){var t=e.data;e.last;return(0,i.jsx)("li",{className:"course-container",children:(0,i.jsxs)("h5",{className:"course-name",children:[t.title,"."]})})};N.defaultProps={last:!1};var O=N,w=function(e){return e.sort((function(e,t){var r=0;return e.university>t.university?r=-1:e.university<t.university||e.number>t.number?r=1:e.number<t.number&&(r=-1),r})).map((function(t,r){return(0,i.jsx)(O,{data:t,last:r===e.length-1},t.title)}))},D=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"courses",children:[(0,i.jsx)("div",{className:"link-to",id:"courses"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Selected Courses"})}),(0,i.jsx)("ul",{className:"course-list",children:w(t)})]})};D.defaultProps={data:[]};var P=D,C=[{title:"Operating Systems"},{title:"Database Management"},{title:"OOPS"},{title:"Network Security"},{title:"Internet and Web Programming"}],M=[{school:"Vellore Institute of Technology,Vellore",degree:"BTech In Computer Science and Engineering",Marks:"8.32 GPA",year:2024},{school:"Career Point Senior Secondary School, SawaiMadhopur",degree:"Senior Secondary",Marks:"92.2%",year:2019}],W=[{name:"IEEE TEMS",position:"Co-Secretary",highlights:["Web dev mentor Leading a team of 70+ people of web dev domain and guide them","Managing the 500+ Students with the other board members","Conducted 10+ technical sessions"]},{name:"Codechef : 1601 (highest rating)",url:"https://www.codechef.com/users/priyanshj"},{name:"Leetcode : 500+ Problems",url:"https://leetcode.com/priyansh_23_6/"},{name:"Hackerrank : 5 star in C and C++",url:"https://www.hackerrank.com/priyanshjain_mu1"}],E=r(3433),L=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:4,category:["Web Development","Javascript"]},{title:"Next.JS",competency:1,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools"]},{title:"Heroku",competency:3,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"Postman",competency:3,category:["Web Development","Tools"]},{title:"Express.JS",competency:4,category:["Web Development","Javascript"]},{title:"Git/Mercurial",competency:4,category:["Tools"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"HTML + SASS/SCSS/CSS",competency:5,category:["Web Development","Languages"]},{title:"Python",competency:2,category:["Languages","Python","ML Engineering"]},{title:"C++",competency:4,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"Data Structures and algo",competency:4,category:["Languages"]}].map((function(e){return v(v({},e),{},{category:e.category.sort()})})),A=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],T=(0,E.Z)(new Set(L.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:A[t]}})),J={margin:"1rem",textDecoration:"none",color:"#e0b486",fontWeight:"bold",backgroundColor:"black",fontSize:"20px"},I={Education:function(){return(0,i.jsx)(u,{data:M})},ExtraCurricular:function(){return(0,i.jsx)(p,{data:W})},Skills:function(){return(0,i.jsx)(S,{skills:L,categories:T})},Courses:function(){return(0,i.jsx)(P,{data:C})}},Z=function(){return(0,i.jsx)(s.Z,{title:"Resume",description:"Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook.",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{children:(0,i.jsx)(c.rU,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:Object.keys(I).map((function(e){return(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(I).map((function(e){var t=(0,n.Z)(e,2),r=t[0],a=t[1];return(0,i.jsx)(a,{},r)})),(0,i.jsx)(c.rU,{to:"https://drive.google.com/drive/folders/1zM6o-LzSVxiBA0XU6Gn88PCDm9Uzk-1l?usp=drive_link",style:J,children:"Download Resume"})]})})}}}]);
//# sourceMappingURL=412.4418a142.chunk.js.map