(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{387:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("92ba2f72",content,!0,{sourceMap:!1})},398:function(t,e,n){"use strict";n(387)},399:function(t,e,n){var o=n(11)(!1);o.push([t.i,".clickable[data-v-42eb3c3e]{cursor:pointer}.clickable[data-v-42eb3c3e]:hover{box-shadow:0 3px 3px #888}",""]),t.exports=o},400:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("63c9496b",content,!0,{sourceMap:!1})},401:function(t,e,n){var o=n(11)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},408:function(t,e,n){"use strict";n.r(e);n(8),n(5),n(7),n(9),n(10);var o=n(2),r=n(56);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"MemeProfile",data:function(){return{numberOfClicks:0,remainingClickSnackbar:!1,remainingClickSnackbarText:"",welcomeSnackbar:!1,welcomeSnackbarText:""}},methods:l(l({},Object(r.c)({setMemeMode:"app/setMemeMode"})),{},{profilePicClick:function(){this.numberOfClicks+=1}}),watch:{numberOfClicks:function(t){var e=0;t>1&&t<10?(e=10-t,this.remainingClickSnackbarText="You are now <b>".concat(e,"</b> steps away from the meme zone."),this.remainingClickSnackbar=!0):10===t&&(this.remainingClickSnackbar=!1,this.welcomeSnackbarText="Welcome to the meme zone.",this.welcomeSnackbar=!0,this.setMemeMode(!0))}},computed:l(l({},Object(r.b)({memeMode:"app/memeMode"})),{},{getProfilePic:function(){return this.memeMode?"/meme_logo.png":"/logo.png"}})},h=(n(398),n(33)),m=n(39),k=n.n(m),d=n(156),f=n(183),_=n(420),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-avatar",{staticClass:"profile-pic",class:{clickable:!t.memeMode},attrs:{size:"140"},on:{click:t.profilePicClick}},[n("img",{attrs:{src:t.getProfilePic,alt:"JC Valencia's Logo"}})]),t._v(" "),n("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.remainingClickSnackbar=!1}}},"v-btn",o,!1),[t._v("\n        Close\n      ")])]}}]),model:{value:t.remainingClickSnackbar,callback:function(e){t.remainingClickSnackbar=e},expression:"remainingClickSnackbar"}},[n("span",{domProps:{innerHTML:t._s(t.remainingClickSnackbarText)}})]),t._v(" "),n("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.welcomeSnackbar=!1}}},"v-btn",o,!1),[t._v("\n        Close\n      ")])]}}]),model:{value:t.welcomeSnackbar,callback:function(e){t.welcomeSnackbar=e},expression:"welcomeSnackbar"}},[n("span",{domProps:{innerHTML:t._s(t.welcomeSnackbarText)}})])],1)}),[],!1,null,"42eb3c3e",null);e.default=component.exports;k()(component,{VAvatar:d.a,VBtn:f.a,VSnackbar:_.a})},420:function(t,e,n){"use strict";var o=n(2),r=(n(17),n(28),n(400),n(42)),c=n(15),l=n(16),v=n(37),h=n(81),m=n(3),k=n(0),d=n(6);e.a=Object(m.a)(r.a,c.a,v.a,Object(h.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(k.g)(n+footer+o),paddingLeft:Object(k.g)(r),paddingRight:Object(k.g)(c),paddingTop:Object(k.g)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(d.e)("auto-height",this),0==this.timeout&&Object(d.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(k.m)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(k.m)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})}}]);