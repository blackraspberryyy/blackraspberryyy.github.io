(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{389:function(e,t,r){var content=r(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("129da9ac",content,!0,{sourceMap:!1})},395:function(e,t,r){"use strict";r.r(t);var o={name:"image-preview",props:{src:String,alt:String,thumbUrl:{type:String,default:"/career/video-placeholder.png"},isVideo:{type:Boolean,default:!1}}},n=r(33),c=r(39),l=r.n(c),d=r(385),f=r(153),v=r(136),m=r(157),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticStyle:{cursor:"pointer"},attrs:{elevation:"1","min-height":e.$breakpoint.smAndDown?"50":"100","min-width":e.$breakpoint.smAndDown?"50":"100"}},[e.isVideo?[r("v-img",{attrs:{"aspect-ratio":1,src:e.thumbUrl,cover:"",eager:"",alt:e.alt,title:e.alt}},[r("v-overlay",{attrs:{value:!0,opacity:"0",absolute:""}},[r("v-icon",{attrs:{"x-large":""}},[e._v("mdi-play-circle-outline")])],1)],1)]:r("v-img",{attrs:{"aspect-ratio":1,src:e.src,cover:"",eager:"",alt:e.alt,title:e.alt}})],2)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:d.a,VIcon:f.a,VImg:v.a,VOverlay:m.a})},404:function(e,t,r){"use strict";r(389)},405:function(e,t,r){var o=r(11)(!1);o.push([e.i,".video[data-v-9b6f273a]{width:100%;height:100%;max-width:100%;max-height:100%}",""]),e.exports=o},409:function(e,t,r){"use strict";r.r(t);var o=r(2),n=(r(91),r(45),r(8),r(5),r(7),r(9),r(10),r(403));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"image-preview-group",props:["medias","title","description"],data:function(){return{dialog:!1,selectedMedia:{type:void 0,src:void 0,alt:void 0},carousel:0}},components:{ImagePreview:r(395).default},methods:{onImagePreviewClick:function(e){this.selectedMedia=e,this.carousel=e.id,this.dialog=!0},stop:function(e){this.$refs.mediaRef&&Object(n.isArray)(this.$refs.mediaRef)&&!Object(n.isEmpty)(this.$refs.mediaRef)&&Object(n.isNumber)(e)&&this.$refs.mediaRef[e]&&Object(n.isFunction)(this.$refs.mediaRef[e].pause)&&this.$refs.mediaRef[e].pause()},stopAllVideo:function(){this.$refs.mediaRef&&Object(n.isArray)(this.$refs.mediaRef)&&!Object(n.isEmpty)(this.$refs.mediaRef)&&this.$refs.mediaRef.forEach((function(e){Object(n.isFunction)(e.pause)&&e.pause()}))},handleCloseDialog:function(){this.dialog=!1}},watch:{dialog:function(e){e||this.stopAllVideo()},carousel:function(e,t){this.selectedMedia=this.mediaWithIds.find((function(t){return t.id===e})),this.stop(t)}},computed:{mediaWithIds:function(){return this.medias&&!Object(n.isEmpty)(this.medias)?this.medias.map((function(e,t){return l(l({},e),{},{id:t})})):[]}}},f=(r(404),r(33)),v=r(39),m=r.n(v),h=r(183),y=r(385),w=r(381),O=r(459),_=r(461),j=r(454),V=r(460),k=r(153),x=r(136),C=r(455),I=r(42),$=r(372),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.mediaWithIds&&e.mediaWithIds.length>0?r("v-row",{staticClass:"d-flex",attrs:{dense:""}},e._l(e.mediaWithIds,(function(t,i){return r("v-col",{key:"media_"+i,attrs:{cols:"6",md:"4"}},[r("client-only",[r("ImagePreview",{attrs:{src:t.src,alt:t.alt,"thumb-url":t.thumbUrl,"is-video":"video"===t.type},nativeOn:{click:function(r){return function(){return e.onImagePreviewClick(t)}.apply(null,arguments)}}})],1)],1)})),1):e._e(),e._v(" "),r("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-carousel",{attrs:{"hide-delimiters":"",height:e.$breakpoint.smAndDown?"350":"750",continuous:!1},model:{value:e.carousel,callback:function(t){e.carousel=t},expression:"carousel"}},e._l(e.mediaWithIds,(function(e,i){return r("v-carousel-item",{key:"bigMedia_"+i},[r("v-sheet",{attrs:{height:"100%",width:"100%",color:"grey darken-4"}},["video"!==e.type?r("v-img",{ref:"mediaRef",refInFor:!0,attrs:{src:e.src,alt:e.alt,title:e.alt,eager:"",contain:"",position:"center center",height:"100%"}}):r("video",{ref:"mediaRef",refInFor:!0,staticClass:"video",attrs:{src:e.src,controls:""}})],1)],1)})),1)],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"d-flex pt-1 pr-1"},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.handleCloseDialog.apply(null,arguments)}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-title",[r("h6",{class:e.$breakpoint.smAndDown?"text-subtitle-1 font-weight-bold":"text-h6",staticStyle:{"word-break":"break-word"},attrs:{title:e.title}},[e._v("\n              "+e._s(e.title)+"\n            ")])]),e._v(" "),e.selectedMedia&&e.selectedMedia.alt?r("v-card-subtitle",[r("span",{staticClass:"text-subtitle-1"},[e._v(e._s(e.selectedMedia.alt))])]):e._e(),e._v(" "),r("v-card-text",[r("p",{staticClass:"text-body-2"},[e._v(e._s(e.description))])])],1)],1)],1)],1)],1)}),[],!1,null,"9b6f273a",null);t.default=component.exports;m()(component,{VBtn:h.a,VCard:y.a,VCardSubtitle:w.a,VCardText:w.b,VCardTitle:w.c,VCarousel:O.a,VCarouselItem:_.a,VCol:j.a,VDialog:V.a,VIcon:k.a,VImg:x.a,VRow:C.a,VSheet:I.a,VSpacer:$.a})}}]);