(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{382:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(7),e(8),e(60);var c=e(1);function o(t){return c.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var c=e.props,data=e.data,o=e.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var r=data.attrs;if(r){data.attrs={};var l=Object.keys(r).filter((function(t){if("slot"===t)return!1;var n=r[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return c.id&&(data.domProps=data.domProps||{},data.domProps.id=c.id),n(c.tag,data,o)}})}},388:function(t,n,e){"use strict";e(236);var c=e(382);n.a=Object(c.a)("layout")},427:function(t,n,e){"use strict";e.r(n);var c={name:"skills",data:function(){return{title:"Tools & Technologies",techStacks:[{title:"HTML5",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{title:"CSS3",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{title:"Javascript",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{title:"Typescript",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{title:"React",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{title:"React MUI",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"},{title:"Vue",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},{title:"Vuetify",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg"},{title:"React Native",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{title:"Angular",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},{title:"NuxtJS",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"},{title:"Redux Toolkit",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},{title:"NestJS",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"},{title:"MySQL",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{title:"PostgreSQL",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},{title:"Git",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{title:"Github",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{title:"Bitbucket",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg"},{title:"Webpack",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"},{title:"Jest",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"},{title:"Mocha",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"},{title:"Docker",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"},{title:"Jira",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"}]}}},o=e(33),r=e(39),l=e.n(r),d=e(454),v=e(136),h=e(388),j=e(455),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",{attrs:{column:""}},[e("h4",{staticClass:"text-h4 mb-4",class:{"text-h5":t.$breakpoint.smAndDown},staticStyle:{"font-family":"'PT Serif', serif !important"},domProps:{textContent:t._s(t.title)}}),t._v(" "),e("v-row",{attrs:{justify:"center","align-content":"center"}},t._l(t.techStacks,(function(n,c){return e("v-col",{key:c,staticClass:"d-flex flex-column align-center my-2",attrs:{cols:"4",sm:"3",lg:"2"}},[e("v-img",{attrs:{src:n.src,"max-height":t.$breakpoint.smAndDown?50:100,"max-width":t.$breakpoint.smAndDown?50:100}}),t._v(" "),e("h6",{staticClass:"text-center",class:t.$breakpoint.smAndDown?"text-body-1":"text-h6"},[t._v("\n        "+t._s(n.title)+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VCol:d.a,VImg:v.a,VLayout:h.a,VRow:j.a})}}]);