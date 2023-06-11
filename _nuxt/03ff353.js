(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{382:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(7),n(8),n(60);var r=n(1);function o(e){return r.a.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,data=n.data,o=n.children;data.staticClass="".concat(e," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})}},388:function(e,t,n){"use strict";n(236);var r=n(382);t.a=Object(r.a)("layout")},430:function(e,t,n){"use strict";n.r(t);n(8),n(5),n(7),n(9),n(10);var r=n(2),o=n(53);n(45),n(29);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"work-experience",data:function(){return{title:"Work Experience",workExperiences:[{startYear:new Date("October 25, 2021"),endYear:new Date,position:"Senior Software Engineer",src:"/hcl-sw.png",company:{name:"HCL Software Technologies",location:"Ortigas Business Center, Pasig City, PH"},experiences:["Incrementally added features on an existing web application product based in React.","Contributed to Redux re-architecture tasks where React ToolKit (RTK) was implemented resulting in a clean and concise code base.","Experienced working with Large Scale Scrum (LeSS) as our development framework and followed its scrum ceremonies religiously."]},{startYear:new Date("September 5, 2019"),endYear:new Date("October 15, 2021"),position:"Full Stack Developer",src:"/isbx.svg",company:{name:"ISBX Philippines Inc.",location:"Ortigas Business Center, Pasig City, PH"},experiences:["Developed and maintained web and mobile applications using Angular 6+, React, React Native, NestJS,  and PostgreSQL for clients abroad.","Worked closely with fellow developers and with the Quality Assurance team to deliver quality features and enhancements with less bugs.","Communicated with project managers based in Los Angeles, California during daily scrum meetings to effectively execute tasks on hand and deliver them on time."]},{startYear:new Date("August 23, 2018"),endYear:new Date("March 13, 2019"),position:"Intern",src:"/feu.png",company:{name:"FEU Institute of Technology",location:"Sampaloc, Manila, PH"},experiences:["Developed a web application using VueJS, Laravel, and MySQL for faculty members of FEU Institute of Technology that helps them to create, organize, and collaboratively develop syllabi across multiple FEU campuses.","Worked with fellow developers and FEU faculty members to accurately develop features that are necessary for the creation of syllabi.","Deployed web application that is production-ready to a dedicated web server."]}]}},computed:{cleanedWorkExperiences:function(){var e=this;return Object(o.a)(this.workExperiences).map((function(t){return l(l({},t),{},{yearLabel:e.getYearLabel(t.startYear,t.endYear)})})).sort((function(a,b){return b.startYear-a.startYear}))},yearsOfExpriences:function(){var e=Object(o.a)(this.workExperiences).sort((function(a,b){return a.startYear-b.startYear}))[0].startYear,t=this.getYearsDifference(e),n=this.getMonthsDifference(e),r="".concat(t," ").concat(t>1?"years":"year"),c="".concat(n," ").concat(n>1?"months":"month");return"".concat(r," ").concat(c)}},methods:{getYearLabel:function(e,t){var n=new Date,r=t.toLocaleDateString("en-US",{year:"numeric",month:"long"}),o=e.toLocaleDateString("en-US",{year:"numeric",month:"long"});return n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()&&(r="Present"),o+" — "+r},getYearsDifference:function(e,t){return t||(t=new Date),new Date(t-e).toISOString().slice(0,4)-1970},getMonthsDifference:function(e,t){return t||(t=new Date),new Date(t-e).getMonth()},getWorkingExprienceLabel:function(e,t){var label="";return e>0&&(label+="".concat(e," ").concat(e>1?"years":"year")),t>0&&(label+=" "+"".concat(t," ").concat(t>1?"months":"month")),label}}},f=n(33),m=n(39),h=n.n(m),y=n(454),v=n(136),w=n(388),x=n(455),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("h4",{staticClass:"text-h4",class:{"text-h5":e.$breakpoint.smAndDown},staticStyle:{"font-family":"'PT Serif', serif !important"},domProps:{textContent:e._s(e.title)}}),e._v(" "),e._l(e.cleanedWorkExperiences,(function(t,i){return n("v-row",{key:"work-experience-"+i,staticClass:"px-5 my-3",class:{"px-0":e.$breakpoint.smAndDown},attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-row",{staticClass:"d-flex align-center",attrs:{"no-gutters":""}},[e.$breakpoint.smAndDown?e._e():n("v-col",{staticClass:"px-2",attrs:{cols:"12",md:"2"}},[n("v-img",{attrs:{src:t.src,contain:"","max-height":"60"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"auto"}},[n("h3",{staticClass:"title primary--text text--darken-2",class:{"text-h6":e.$breakpoint.smAndDown},domProps:{textContent:e._s(t.position)}}),e._v(" "),n("h4",{staticClass:"subtitle-1 d-flex",class:{"grey--text text--lighten-2":e.$vuetify.theme.dark,"grey--text text--darken-2":e.$vuetify.theme.light,"flex-column":e.$breakpoint.smAndDown}},[n("span",{staticClass:"font-weight-bold"},[e._v("\n              "+e._s(t.company.name)+"\n            ")]),e._v(" "),e.$breakpoint.smAndDown?e._e():n("span",[e._v("  /  ")]),e._v(" "),n("span",[e._v(e._s(t.company.location))])])])],1)],1),e._v(" "),e.$breakpoint.smAndDown?e._e():n("v-col",{staticClass:"text-sm-right",attrs:{cols:"4"}},[n("span",{staticClass:"subtitle-1 font-weight-black",domProps:{textContent:e._s(t.yearLabel)}}),e._v(" "),n("h6",{staticClass:"body-1",class:{"grey--text text--lighten-2":e.$vuetify.theme.dark,"grey--text text--darken-1":e.$vuetify.theme.light}},[e._v("\n        "+e._s(e.getWorkingExprienceLabel(e.getYearsDifference(t.startYear,t.endYear),e.getMonthsDifference(t.startYear,t.endYear)))+"\n      ")])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("ul",{staticClass:"pt-2"},e._l(t.experiences,(function(t,r){return n("li",{key:"experience-"+r,staticClass:"body-1 py-1",class:{"grey--text text--lighten-2":e.$vuetify.theme.dark,"grey--text text--darken-1":e.$vuetify.theme.light},domProps:{textContent:e._s(t)}})})),0)])],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:y.a,VImg:v.a,VLayout:w.a,VRow:x.a})}}]);