(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{500:function(t,e,r){var content=r(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("0f319ca3",content,!0,{sourceMap:!1})},506:function(t,e,r){"use strict";r.r(e);var n=r(495),o=r(208),c=r(178),l=r(209),d={name:"image-preview",props:{src:String,alt:String,thumbUrl:{type:String,default:"/career/video-placeholder.png"},isVideo:{type:Boolean,default:!1}}},f=r(46),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(n.a,{staticStyle:{cursor:"pointer"},attrs:{elevation:"1","min-height":t.$breakpoint.smAndDown?"50":"100","min-width":t.$breakpoint.smAndDown?"50":"100"}},[t.isVideo?[e(c.a,{attrs:{"aspect-ratio":1,src:t.thumbUrl,cover:"",eager:"",alt:t.alt,title:t.alt}},[e(l.a,{attrs:{value:!0,opacity:"0",absolute:""}},[e(o.a,{attrs:{"x-large":""}},[t._v("mdi-play-circle-outline")])],1)],1)]:e(c.a,{attrs:{"aspect-ratio":1,src:t.src,cover:"",eager:"",alt:t.alt,title:t.alt}})],2)}),[],!1,null,null,null);e.default=component.exports},515:function(t,e,r){"use strict";r(500)},516:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".video[data-v-9b6f273a]{height:100%;max-height:100%;max-width:100%;width:100%}",""]),n.locals={},t.exports=n},520:function(t,e,r){"use strict";r.r(e);var n=r(240),o=r(495),c=r(489),l=r(587),d=r(589),f=r(584),h=r(588),m=r(208),v=r(178),y=r(583),w=r(54),O=r(481),_=(r(7),r(56),r(2)),j=(r(3),r(8),r(120),r(58),r(11),r(10),r(13),r(14),r(514));function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $={name:"image-preview-group",props:["medias","title","description"],data:function(){return{dialog:!1,selectedMedia:{type:void 0,src:void 0,alt:void 0},carousel:0}},components:{ImagePreview:r(506).default},methods:{onImagePreviewClick:function(t){this.selectedMedia=t,this.carousel=t.id,this.dialog=!0},stop:function(t){this.$refs.mediaRef&&Object(j.isArray)(this.$refs.mediaRef)&&!Object(j.isEmpty)(this.$refs.mediaRef)&&Object(j.isNumber)(t)&&this.$refs.mediaRef[t]&&Object(j.isFunction)(this.$refs.mediaRef[t].pause)&&this.$refs.mediaRef[t].pause()},stopAllVideo:function(){this.$refs.mediaRef&&Object(j.isArray)(this.$refs.mediaRef)&&!Object(j.isEmpty)(this.$refs.mediaRef)&&this.$refs.mediaRef.forEach((function(t){Object(j.isFunction)(t.pause)&&t.pause()}))},handleCloseDialog:function(){this.dialog=!1}},watch:{dialog:function(t){t||this.stopAllVideo()},carousel:function(t,e){this.selectedMedia=this.mediaWithIds.find((function(e){return e.id===t})),this.stop(e)}},computed:{mediaWithIds:function(){return this.medias&&!Object(j.isEmpty)(this.medias)?this.medias.map((function(t,e){return x(x({},t),{},{id:e})})):[]}}},P=(r(515),r(46)),component=Object(P.a)($,(function(){var t=this,e=t._self._c;return e("div",[t.mediaWithIds&&t.mediaWithIds.length>0?e(y.a,{staticClass:"d-flex",attrs:{dense:""}},t._l(t.mediaWithIds,(function(r,i){return e(f.a,{key:"media_".concat(i),attrs:{cols:"6",md:"4"}},[e("client-only",[e("ImagePreview",{attrs:{src:r.src,alt:r.alt,"thumb-url":r.thumbUrl,"is-video":"video"===r.type},nativeOn:{click:function(e){return function(){return t.onImagePreviewClick(r)}.apply(null,arguments)}}})],1)],1)})),1):t._e(),t._v(" "),e(h.a,{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,[e(y.a,{attrs:{"no-gutters":""}},[e(f.a,{attrs:{cols:"12",md:"8"}},[e(l.a,{attrs:{"hide-delimiters":"",height:t.$breakpoint.smAndDown?"350":"750",continuous:!1},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},t._l(t.mediaWithIds,(function(t,i){return e(d.a,{key:"bigMedia_".concat(i)},[e(w.a,{attrs:{height:"100%",width:"100%",color:"grey darken-4"}},["video"!==t.type?e(v.a,{ref:"mediaRef",refInFor:!0,attrs:{src:t.src,alt:t.alt,title:t.alt,eager:"",contain:"",position:"center center",height:"100%"}}):e("video",{ref:"mediaRef",refInFor:!0,staticClass:"video",attrs:{src:t.src,controls:""}})],1)],1)})),1)],1),t._v(" "),e(f.a,{attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"d-flex pt-1 pr-1"},[e(O.a),t._v(" "),e(n.a,{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.handleCloseDialog.apply(null,arguments)}}},[e(m.a,[t._v("mdi-close")])],1)],1),t._v(" "),e(c.c,[e("h6",{class:"".concat(t.$breakpoint.smAndDown?"text-subtitle-1 font-weight-bold":"text-h6"),staticStyle:{"word-break":"break-word"},attrs:{title:t.title}},[t._v("\n              "+t._s(t.title)+"\n            ")])]),t._v(" "),t.selectedMedia&&t.selectedMedia.alt?e(c.a,[e("span",{staticClass:"text-subtitle-1"},[t._v(t._s(t.selectedMedia.alt))])]):t._e(),t._v(" "),e(c.b,[e("p",{staticClass:"text-body-2"},[t._v(t._s(t.description))])])],1)],1)],1)],1)],1)}),[],!1,null,"9b6f273a",null);e.default=component.exports}}]);