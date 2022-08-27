(window.webpackJsonp=window.webpackJsonp||[]).push([[15,8],{393:function(e,t,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("654c05a0",content,!0,{sourceMap:!1})},394:function(e,t,n){"use strict";n.r(t);var o={name:"role-carousel",data:function(){return{model:0,roles:["Software Engineer","Web Developer","Full Stack Developer","Level 4 Human Cleric 🧙"]}}},r=n(33),c=n(39),l=n.n(c),d=n(441),m=n(443),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-carousel",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:600},expression:"{ delay: 600 }"}],attrs:{cycle:"",continuous:"","hide-delimiters":"","show-arrows":!1,height:"auto"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.roles,(function(t,i){return n("v-carousel-item",{key:i},[n("h4",{staticClass:"text-h4 text-center",class:{"text-h6":e.$breakpoint.smAndDown},style:{"line-height":e.$breakpoint.smAndDown?"2rem":"3rem"},domProps:{textContent:e._s(t)}})])})),1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCarousel:d.a,VCarouselItem:m.a})},400:function(e,t,n){"use strict";n(393)},401:function(e,t,n){var o=n(11)(!1);o.push([e.i,".text-elevation[data-v-52af692c]{text-shadow:1px 2px #2b2b2b}",""]),e.exports=o},404:function(e,t,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("28f1127f",content,!0,{sourceMap:!1})},405:function(e,t,n){"use strict";n.r(t);var o={name:"landing",data:function(){return{greetings:'Hi! I\'m <span class="primary--text">JC.</span>',techs:["VueJS","React","Angular","Typescript","Javscript","Webpack","React Native","Git","Jest","Vuetify","NestJS","MySQL","PostgreSQL"],status:{icon:"mdi-briefcase",description:"Currently Employed",color:"grey lighten-1"}}},components:{RoleCarousel:n(394).default}},r=n(33),c=n(39),l=n.n(c),d=n(156),m=n(373),v=n(153),h=n(391),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-avatar",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:120},expression:"{ delay: 120 }"}],attrs:{size:"140"}},[n("img",{attrs:{src:"/logo.png",alt:"JC Valencia's Logo"}})]),e._v(" "),n("h1",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:360},expression:"{ delay: 360 }"}],staticClass:"text-h1 text-center",class:{"text-h3":e.$breakpoint.smAndDown},domProps:{innerHTML:e._s(e.greetings)}}),e._v(" "),n("RoleCarousel"),e._v(" "),n("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:700},expression:"{ delay: 700 }"}],staticClass:"my-4 d-flex flex-row flex-wrap justify-center",staticStyle:{"max-width":"460px"}},e._l(e.techs,(function(t,o){return n("v-chip",{key:o,staticClass:"ma-1",attrs:{color:"primary",small:"","x-small":e.$breakpoint.smAndDown}},[n("v-icon",{attrs:{left:"",small:"","x-small":e.$breakpoint.smAndDown}},[e._v("mdi-pound")]),e._v("\n      "+e._s(t)+"\n    ")],1)})),1),e._v(" "),n("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:840},expression:"{ delay: 840 }"}]},[n("v-chip",{class:e.$breakpoint.smAndDown?"mt-2":"mt-12",attrs:{color:e.status.color}},[n("v-icon",{staticStyle:{"margin-left":"0"},attrs:{left:""}},[e._v(e._s(e.status.icon))]),e._v("\n      "+e._s(e.status.description)+"\n    ")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAvatar:d.a,VChip:m.a,VIcon:v.a,VLayout:h.a})},406:function(e,t,n){"use strict";n.r(t);var o={name:"about-me",data:function(){return{title:"About Me",aboutMe:"",infos:{name:"Personal Information",items:[{title:"Full Name",description:"Juan Carlo De Regla Valencia"},{title:"Address",description:"Valenzuela City, Philippines"},{title:"Email Address",description:"carlo.valencia066+cv@gmail.com"}]},workOptions:{name:"Work Options",items:[{title:"Willing to work Remotely?",description:"Yes, most definitely. Saves time and resources for everyone."},{title:"Preferred Shift?",description:"Day Shift."},{title:"Willing to work Overseas?",description:"As long as it is remote, yes."}]},educations:{name:"Education",items:[{title:"Primary Education",school:"Sto. Rosario Montessori School",description:"Batch 2010-2011. Graduated as 4th honorable mention.",year:"2004 - 2011",img:"/srm.png"},{title:"Secondary Education",school:"Sto. Rosario Montessori School",description:"Batch 2014-2015. Graduated as Valedictorian.",year:"2011 - 2015",img:"/srm.png"},{title:"Tertiary Education",school:"FEU Institute of Technology",course:"BS Information Technology with specialization in Web and Mobile Application",description:"Batch 2018-2019. Graduated as Cum Laude.",year:"2015 - 2019",img:"/feu.png"}]}}}},r=n(33),c=n(39),l=n.n(c),d=n(437),m=n(136),v=n(391),h=n(154),f=n(103),y=n(155),w=n(80),x=n(438),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("h4",{staticClass:"text-h4",class:{"text-h5":e.$breakpoint.smAndDown},staticStyle:{"font-family":"'PT Serif', serif !important"},domProps:{textContent:e._s(e.title)}}),e._v(" "),n("p",{domProps:{textContent:e._s(e.aboutMe)}}),e._v(" "),n("v-row",{staticClass:"px-5",class:{"px-0":e.$breakpoint.smAndDown}},[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("h6",{staticClass:"text-h6",domProps:{textContent:e._s(e.infos.name)}}),e._v(" "),n("v-list",{staticClass:"bg-transparent"},e._l(e.infos.items,(function(t,o){return n("v-list-item",{key:o},[n("v-list-item-content",{staticClass:"py-2"},[n("v-list-item-title",{staticClass:"mb-2 no-wrap",domProps:{textContent:e._s(t.title)}}),e._v(" "),n("v-list-item-subtitle",{staticClass:"no-wrap",domProps:{textContent:e._s(t.description)}})],1)],1)})),1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("h6",{staticClass:"text-h6",domProps:{textContent:e._s(e.workOptions.name)}}),e._v(" "),n("v-list",{staticClass:"bg-transparent"},e._l(e.workOptions.items,(function(t,o){return n("v-list-item",{key:o},[n("v-list-item-content",{staticClass:"py-2"},[n("v-list-item-title",{staticClass:"mb-2 no-wrap",domProps:{textContent:e._s(t.title)}}),e._v(" "),n("v-list-item-subtitle",{staticClass:"no-wrap",domProps:{textContent:e._s(t.description)}})],1)],1)})),1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"5"}},[n("h6",{staticClass:"text-h6",domProps:{textContent:e._s(e.educations.name)}}),e._v(" "),n("v-list",{staticClass:"bg-transparent"},e._l(e.educations.items,(function(t,o){return n("v-list-item",{key:o},[n("v-list-item-avatar",{attrs:{size:"64"}},[n("v-img",{attrs:{src:t.img,alt:t.school,eager:""}})],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"no-wrap",domProps:{textContent:e._s(t.school)}}),e._v(" "),n("v-list-item-subtitle",{staticClass:"mb-3 no-wrap"},[n("span",{staticClass:"font-weight-medium grey--text text--darken-3"},[e._v(e._s(t.title))]),e._v("\n              ("+e._s(t.year)+")\n            ")]),e._v(" "),n("v-list-item-subtitle",{directives:[{name:"show",rawName:"v-show",value:t.course,expression:"education.course"}],staticClass:"no-wrap font-italic",domProps:{textContent:e._s(t.course)}}),e._v(" "),n("v-list-item-subtitle",{staticClass:"no-wrap",domProps:{textContent:e._s(t.description)}})],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCol:d.a,VImg:m.a,VLayout:v.a,VList:h.a,VListItem:f.a,VListItemAvatar:y.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VRow:x.a})},408:function(e,t,n){"use strict";n.r(t);var o={name:"skills",data:function(){return{title:"Skills & Technologies",techStacks:[{title:"HTML5",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{title:"CSS3",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{title:"Javascript",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{title:"Typescript",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{title:"React",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{title:"React Material UI",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"},{title:"Vue",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},{title:"Vuetify",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg"},{title:"React Native",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{title:"Angular",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},{title:"NuxtJS",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"},{title:"Redux Toolkit",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},{title:"NestJS",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"},{title:"MySQL",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{title:"PostgreSQL",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},{title:"Git",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{title:"Github",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{title:"Bitbucket",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg"},{title:"Webpack",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"},{title:"Jest",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"},{title:"Mocha",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"},{title:"Docker",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"},{title:"Jira",src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"}]}}},r=n(33),c=n(39),l=n.n(c),d=n(437),m=n(136),v=n(391),h=n(438),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("h4",{staticClass:"text-h4 mb-4",class:{"text-h5":e.$breakpoint.smAndDown},staticStyle:{"font-family":"'PT Serif', serif !important"},domProps:{textContent:e._s(e.title)}}),e._v(" "),n("v-row",{attrs:{justify:"center","align-content":"center"}},e._l(e.techStacks,(function(t,o){return n("v-col",{key:o,staticClass:"d-flex flex-column align-center my-2",attrs:{cols:"4",sm:"3",lg:"2"}},[n("v-img",{attrs:{src:t.src,"max-height":e.$breakpoint.smAndDown?50:100,"max-width":e.$breakpoint.smAndDown?50:100}}),e._v(" "),n("h6",{staticClass:"text-h6 text-center"},[e._v(e._s(t.title))])],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCol:d.a,VImg:m.a,VLayout:v.a,VRow:h.a})},409:function(e,t,n){"use strict";n.r(t);n(8),n(5),n(7),n(9),n(10);var o=n(2);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"projects",data:function(){var e={type:"School Project",icon:"mdi-school"},t={type:"Work Project",icon:"mdi-briefcase"};return{title:"Projects",description:"Some of the projects that I have worked on: ",projects:[c({name:"Enterprise-grade Digital Tooling for Creating Powerful Websites",description:"Maintained a digital tooling web app for enterprises that wants to create websites with dynamic contents.",src:"/imageNotAvailable.png",techs:["React","Redux Toolkit","Material UI"]},t),c({name:"E-Commerce Website for Dental Clinic in Texas, USA. ",description:"Created dynamic quiz maker for surveying customer's dental health, and scheduling user's appointment for a Dental Clinic in Texas, USA.",src:"/imageNotAvailable.png",techs:["NestJS","PostgreSQL","Shopify"]},t),c({name:"Medical E-Commerce website in Puerto Rico",description:"Maintained an E-Commerce website for medical related items in Puerto Rico.",src:"/imageNotAvailable.png",techs:["Angular","NestJS","PostgreSQL"]},t),c({name:"FEU Curriculum Mapping",description:"A Web Based Syllabus Generator for FEU Faculty members.",src:"/fcm.png",techs:["VueJS","Vuetify","Laravel","MySQL"]},t),c({name:"CrimeScoop",description:"A Mobile Based App for allowing users to record and send crimes caught on act to baranggay official/s.",src:"/crimescoop.png",techs:["React Native","Firebase"],link:"https://github.com/blackraspberryyy/CrimeScoop"},e),c({name:"PetEx: Web Based Pet Adoption System",description:"Web Based Pet Adoption System Thesis Capstone Project for Philippine Animal Welfare Society.",src:"/petex.jpg",techs:["Bootstrap","CodeIgniter","MySQL"],link:"https://github.com/blackraspberryyy/petex-v2.0"},e),c({name:"Pet Manager App",description:"Mobile Based Pet Locating app, in partial fulfillment of our Capstone Project, that uses NFC scanning to the pet's NFC tag on their collars.",src:"/petexApp.jpg",techs:["Android (Java)"],link:"https://github.com/blackraspberryyy/PetEx-Pet-Manager-App"},e),c({name:"Binary Game",description:"A simple Binary Game. Built using Construct 2.",src:"/binaryGame.gif",techs:["Construct2"],contain:!0},e)]}}},d=(n(400),n(33)),m=n(39),v=n.n(m),h=n(183),f=n(385),y=n(381),w=n(373),x=n(437),C=n(153),_=n(136),k=n(391),j=n(438),S=n(372),P=n(380),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("h4",{staticClass:"text-h4 mb-4",class:{"text-h5":e.$breakpoint.smAndDown},staticStyle:{"font-family":"'PT Serif', serif !important"},domProps:{textContent:e._s(e.title)}}),e._v(" "),n("v-row",e._l(e.projects,(function(t,o){return n("v-col",{directives:[{name:"responsive-col",rawName:"v-responsive-col",value:{sm:2},expression:"{\n        sm: 2,\n      }"}],key:o},[n("v-card",{staticClass:"fill-height"},[n("v-img",{staticClass:"project-image white--text grey lighten-3",attrs:{eager:"",src:t.src,alt:t.name,contain:t.contain,"aspect-ratio":e.$breakpoint.smAndDown?1.33333:1.77778}}),e._v(" "),n("v-card-title",[n("h6",{staticClass:"text-h6",domProps:{textContent:e._s(t.name)}}),e._v(" "),n("v-spacer"),e._v(" "),t.link?n("v-tooltip",{attrs:{top:"","nudge-top":"-4px"},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[n("v-btn",e._g(e._b({staticClass:"elevation-0",attrs:{icon:"",href:t.link,target:"_blank"}},"v-btn",c,!1),r),[n("v-icon",[e._v("mdi-github")])],1)]}}],null,!0)},[e._v(" "),n("span",{staticClass:"text-caption"},[e._v("Github Repository")])]):e._e()],1),e._v(" "),n("v-card-text",[n("v-chip",{staticClass:"mr-1 mb-1",attrs:{small:""}},[n("v-icon",{attrs:{left:"",small:""},domProps:{textContent:e._s(t.icon)}}),e._v(" "),n("span",{domProps:{textContent:e._s(t.type)}})],1),e._v(" "),e._l(t.techs,(function(t,o){return n("v-chip",{key:o,staticClass:"mr-1 mb-1",attrs:{small:""}},[e._v(e._s(t))])})),e._v(" "),n("p",{staticClass:"mt-6",domProps:{textContent:e._s(t.description)}})],2)],1)],1)})),1)],1)}),[],!1,null,"52af692c",null);t.default=component.exports;v()(component,{VBtn:h.a,VCard:f.a,VCardText:y.b,VCardTitle:y.c,VChip:w.a,VCol:x.a,VIcon:C.a,VImg:_.a,VLayout:k.a,VRow:j.a,VSpacer:S.a,VTooltip:P.a})},410:function(e,t,n){"use strict";n.r(t);var o={name:"hobbies",data:function(){return{title:"Hobbies / Recreational Activities",hobbies:[{title:"Dungeons & Dragons",description:"\n            <p>I just discovered this lately and I loved it! It's a board game where you can weave your own story with your friends, along with the Dungeon Master who narrates and weaves the story. If you watched Stranger Things, chances are you heard about this game.</p>\n            <p>You can be a Warrior who lusts battle and blood. You can be a Bard that uses music to defeat its foes. Or a Rogue that can stealthily assassinate some villain. </p>\n            <p>I am currently playing my character as an old Human Cleric 🧙‍♂️ whose healing powers came from the Goddess of Healing, Aesif. </p>\n            ",category:"🐲 Table-Top RPG"},{title:"Video Games",description:"\n            <p>Gaming is where I spend my time the most. I usually play on PC, but I also game on Nintendo Switch from time to time. Each game has its own thing and you can always learn from them.</p>\n            <p>For me, I like Single Role-Playing Games such as Witcher 3, Skyrim, Bioshock, Kingdom Come: Deliverance, and other similar games. I also became easily addicted to tycoon games such as Civilization VI, Cities: Skylines, Parkitect, and the likes.</p>\n          ",category:"🎮 Gaming"},{title:"Movies & TV Series",description:"\n            <p>I always loved Marvel movies and TV Series. As far as I know, I watched each one of them (and I intend to watch future films until it's over!). Everything about MCU is amazing and each film builds up storylines to future films. It's the most ambitious franchise I've ever seen, and I'm not complaining about it.</p>\n            <p>Besides superhero films, I also enjoy a variety of genre. I personally loved watching The Office, Game of Thrones, La La Land, Memento, Predestination, The Amazing World of Gumball, and a lot of films that I just forgot to put on this list.</p>\n          ",category:"🍿 Films"},{title:"Basketball",description:"\n            <p>I loved Basketball for as long as I can remember. I think I'm already shooting hoops since I was 8 years old. Fun fact: I actually became a varsity player during elementary and highschool. I was a benchwarmer though and never really did well.</p>\n            <p>Today, a sparingly play hoops because it's really tiring. Maybe I'm getting old? Or maybe I really need to exercise frequently? I honestly don't know. If I can play hoops while sitting, that would be a delight.</p>\n          ",category:"🏀 Sports"},{title:"Learning French",description:'\n            <p>I recently tried learning French during the pandemic using the Duolingo App because... uhmmm... I don\'t really know. Maybe my curiousity has been piqued by this language for some reason.</p>\n            <p>I\'m only a beginner so I only know some words and phrases like: <i>"Bonjour!"</i>, <i>"Je prend mon cafè"</i>, and <i>"Je mange des enfants pour les petit déjeuners"</i>. The last one is a joke, please don\'t Google Translate it.</p>\n          ',category:"🥖 Learning"},{title:"Board Games",description:"\n            <p>A newly found hobby of mine is Board Games. I usually play it with my girlfriend, cousins, friends, and siblings during the weekends. It's definitely a fun activity, and I recommend to play while drunk.</p>\n            <p>We usually play Catan, King of Tokyo, Ticket to Ride, Pandemic, Secret Hitler, Codenames, Betrayal at House on the Hill, Monopoly, Monopoly Deal, Uno, and Exploding Kittens</p>\n          ",category:"🎲 Board Games"}]}}},r=n(33),c=n(39),l=n.n(c),d=n(385),m=n(381),v=n(437),h=n(391),f=n(438),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("h4",{staticClass:"text-h4 mb-4",class:{"text-h5":e.$breakpoint.smAndDown},staticStyle:{"font-family":"'PT Serif', serif !important"},domProps:{textContent:e._s(e.title)}}),e._v(" "),n("v-row",e._l(e.hobbies,(function(t,o){return n("v-col",{directives:[{name:"responsive-col",rawName:"v-responsive-col",value:{md:3,sm:2},expression:"{\n        md: 3,\n        sm: 2,\n      }"}],key:o,staticClass:"ma-0"},[n("v-card",{staticClass:"fill-height",attrs:{outlined:"",shaped:"",width:"100%"}},[n("v-card-title",{staticClass:"d-flex flex-column justify-start align-start"},[n("div",{staticClass:"overline",domProps:{textContent:e._s(t.category)}}),e._v(" "),n("h5",{staticClass:"text-h5 mb-1",class:{"text-h6":e.$breakpoint.smAndDown},domProps:{textContent:e._s(t.title)}})]),e._v(" "),n("v-card-text",{staticStyle:{"line-height":"1.4em"},domProps:{innerHTML:e._s(t.description)}})],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:d.a,VCardText:m.b,VCardTitle:m.c,VCol:v.a,VLayout:h.a,VRow:f.a})},411:function(e,t,n){"use strict";n.r(t);n(8),n(5),n(7),n(9),n(10);var o=n(2),r=n(53);n(45),n(29);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"work-experience",data:function(){return{title:"Work Experience",workExperiences:[{startYear:new Date("October 25, 2021"),endYear:new Date,position:"Senior Software Engineer",src:"/hcl-sw.png",company:{name:"HCL Software Technologies",location:"Ortigas Business Center, Pasig City, PH"},experiences:["Incrementally added features on an existing web application product based in React.","Contributed to Redux re-architecture tasks where React ToolKit (RTK) was implemented resulting in a clean and concise code base.","Experienced working with Large Scale Scrum (LeSS) as our development framework and followed its scrum ceremonies religiously."]},{startYear:new Date("September 5, 2019"),endYear:new Date("October 15, 2021"),position:"Full Stack Developer",src:"/isbx.svg",company:{name:"ISBX Philippines Inc.",location:"Ortigas Business Center, Pasig City, PH"},experiences:["Developed and maintained web and mobile applications using Angular 6+, React, React Native, NestJS,  and PostgreSQL for clients abroad.","Worked closely with fellow developers and with the Quality Assurance team to deliver quality features and enhancements with less bugs.","Communicated with project managers based in Los Angeles, California during daily scrum meetings to effectively execute tasks on hand and deliver them on time."]},{startYear:new Date("August 23, 2018"),endYear:new Date("March 13, 2019"),position:"Intern",src:"/feu.png",company:{name:"FEU Institute of Technology",location:"Sampaloc, Manila, PH"},experiences:["Developed a web application using VueJS, Laravel, and MySQL for faculty members of FEU Institute of Technology that helps them to create, organize, and collaboratively develop syllabi across multiple FEU campuses.","Worked with fellow developers and FEU faculty members to accurately develop features that are necessary for the creation of syllabi.","Deployed web application that is production-ready to a dedicated web server."]}]}},computed:{cleanedWorkExperiences:function(){var e=this;return Object(r.a)(this.workExperiences).map((function(t){return l(l({},t),{},{yearLabel:e.getYearLabel(t.startYear,t.endYear)})})).sort((function(a,b){return b.startYear-a.startYear}))},yearsOfExpriences:function(){var e=Object(r.a)(this.workExperiences).sort((function(a,b){return a.startYear-b.startYear}))[0].startYear,t=this.getYearsDifference(e),n=this.getMonthsDifference(e),o="".concat(t," ").concat(t>1?"years":"year"),c="".concat(n," ").concat(n>1?"months":"month");return"".concat(o," ").concat(c)}},methods:{getYearLabel:function(e,t){var n=new Date,o=t.toLocaleDateString("en-US",{year:"numeric",month:"long"}),r=e.toLocaleDateString("en-US",{year:"numeric",month:"long"});return n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()&&(o="Present"),r+" — "+o},getYearsDifference:function(e,t){return t||(t=new Date),new Date(t-e).toISOString().slice(0,4)-1970},getMonthsDifference:function(e,t){return t||(t=new Date),new Date(t-e).getMonth()},getWorkingExprienceLabel:function(e,t){var label="";return e>0&&(label+="".concat(e," ").concat(e>1?"years":"year")),t>0&&(label+=" "+"".concat(t," ").concat(t>1?"months":"month")),label}}},m=n(33),v=n(39),h=n.n(v),f=n(437),y=n(136),w=n(391),x=n(438),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("h4",{staticClass:"text-h4",class:{"text-h5":e.$breakpoint.smAndDown},staticStyle:{"font-family":"'PT Serif', serif !important"},domProps:{textContent:e._s(e.title)}}),e._v(" "),e._l(e.cleanedWorkExperiences,(function(t,i){return n("v-row",{key:"work-experience-"+i,staticClass:"px-5 my-3",class:{"px-0":e.$breakpoint.smAndDown},attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-row",{staticClass:"d-flex align-center",attrs:{"no-gutters":""}},[e.$breakpoint.smAndDown?e._e():n("v-col",{staticClass:"px-2",attrs:{cols:"12",md:"2"}},[n("v-img",{attrs:{src:t.src,contain:"","max-height":"60"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"auto"}},[n("h3",{staticClass:"title primary--text text--darken-2",class:{"text-h6":e.$breakpoint.smAndDown},domProps:{textContent:e._s(t.position)}}),e._v(" "),n("h4",{staticClass:"subtitle-1 d-flex",class:{"grey--text text--lighten-2":e.$vuetify.theme.dark,"grey--text text--darken-2":e.$vuetify.theme.light,"flex-column":e.$breakpoint.smAndDown}},[n("span",{staticClass:"font-weight-bold"},[e._v("\n              "+e._s(t.company.name)+"\n            ")]),e._v(" "),e.$breakpoint.smAndDown?e._e():n("span",[e._v("  /  ")]),e._v(" "),n("span",[e._v(e._s(t.company.location))])])])],1)],1),e._v(" "),e.$breakpoint.smAndDown?e._e():n("v-col",{staticClass:"text-sm-right",attrs:{cols:"4"}},[n("span",{staticClass:"subtitle-1 font-weight-black",domProps:{textContent:e._s(t.yearLabel)}}),e._v(" "),n("h6",{staticClass:"body-1",class:{"grey--text text--lighten-2":e.$vuetify.theme.dark,"grey--text text--darken-1":e.$vuetify.theme.light}},[e._v("\n        "+e._s(e.getWorkingExprienceLabel(e.getYearsDifference(t.startYear,t.endYear),e.getMonthsDifference(t.startYear,t.endYear)))+"\n      ")])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("ul",{staticClass:"pt-2"},e._l(t.experiences,(function(t,o){return n("li",{key:"experience-"+o,staticClass:"body-1 py-1",class:{"grey--text text--lighten-2":e.$vuetify.theme.dark,"grey--text text--darken-1":e.$vuetify.theme.light},domProps:{textContent:e._s(t)}})})),0)])],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:f.a,VImg:y.a,VLayout:w.a,VRow:x.a})},426:function(e,t,n){"use strict";n(404)},427:function(e,t,n){var o=n(11)(!1);o.push([e.i,".bg-transparent{background:none!important}.no-wrap{text-overflow:unset!important;white-space:unset!important}",""]),e.exports=o},440:function(e,t,n){"use strict";n.r(t);n(8),n(5),n(7),n(9),n(10);var o=n(2),r=n(78),c=n(405),l=n(406),d=n(435),m=n(408),v=n(409),h=n(410),f=n(411),y=n(123);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var x={components:{Landing:c.default,AboutMe:l.default,Career:d.default,Skills:m.default,Projects:v.default,Hobbies:h.default},data:function(){return{section:0,sections:[{section:c.default},{section:f.default},{section:m.default},{section:v.default},{section:l.default},{section:d.default},{section:h.default}]}},watch:{section:function(e){this.setActiveSection(y.b[e].title)}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.c)({setActiveSection:"app/setActiveSection"}))},C=x,_=(n(426),n(33)),k=n(39),j=n.n(k),S=(n(59),n(235),n(396),n(382)),P=n(77),O=Object(S.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,o=t.props,data=t.data,r=t.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),e(o.tag,Object(P.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}}),component=Object(_.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy",value:{offset:e.$breakpoint.smAndDown?48:8,data:"section"},expression:"{ offset: $breakpoint.smAndDown ? 48 : 8, data: 'section' }"}],staticStyle:{"max-width":"1024px"}},[e._l(e.sections,(function(e,t){return[n(e.section,{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],key:t,tag:"component",staticClass:"my-8 py-4"})]}))],2)}),[],!1,null,null,null);t.default=component.exports;j()(component,{VContainer:O})}}]);