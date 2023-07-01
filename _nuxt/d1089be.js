(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{490:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(74),n(35),n(9),n(3),n(10),n(79),n(91);var r=n(1);function l(e){return r.a.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,data=n.data,l=n.children;data.staticClass="".concat(e," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var m=Object.keys(o).filter((function(e){if("slot"===e)return!1;var t=o[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));m.length&&(data.staticClass+=" ".concat(m.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,l)}})}},496:function(e,t,n){"use strict";n(318);var r=n(490);t.a=Object(r.a)("layout")},500:function(e,t,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("0f319ca3",content,!0,{sourceMap:!1})},506:function(e,t,n){"use strict";n.r(t);var r=n(495),l=n(208),o=n(178),m=n(209),v={name:"image-preview",props:{src:String,alt:String,thumbUrl:{type:String,default:"/career/video-placeholder.png"},isVideo:{type:Boolean,default:!1}}},c=n(46),component=Object(c.a)(v,(function(){var e=this,t=e._self._c;return t(r.a,{staticStyle:{cursor:"pointer"},attrs:{elevation:"1","min-height":e.$breakpoint.smAndDown?"50":"100","min-width":e.$breakpoint.smAndDown?"50":"100"}},[e.isVideo?[t(o.a,{attrs:{"aspect-ratio":1,src:e.thumbUrl,cover:"",eager:"",alt:e.alt,title:e.alt}},[t(m.a,{attrs:{value:!0,opacity:"0",absolute:""}},[t(l.a,{attrs:{"x-large":""}},[e._v("mdi-play-circle-outline")])],1)],1)]:t(o.a,{attrs:{"aspect-ratio":1,src:e.src,cover:"",eager:"",alt:e.alt,title:e.alt}})],2)}),[],!1,null,null,null);t.default=component.exports},515:function(e,t,n){"use strict";n(500)},516:function(e,t,n){var r=n(17)((function(i){return i[1]}));r.push([e.i,".video[data-v-9b6f273a]{height:100%;max-height:100%;max-width:100%;width:100%}",""]),r.locals={},e.exports=r},520:function(e,t,n){"use strict";n.r(t);var r=n(240),l=n(495),o=n(489),m=n(587),v=n(589),c=n(584),d=n(588),f=n(208),h=n(178),_=n(583),y=n(54),x=n(481),w=(n(7),n(56),n(2)),O=(n(3),n(8),n(121),n(58),n(10),n(9),n(13),n(14),n(514));function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(w.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={name:"image-preview-group",props:["medias","title","description"],data:function(){return{dialog:!1,selectedMedia:{type:void 0,src:void 0,alt:void 0},carousel:0}},components:{ImagePreview:n(506).default},methods:{onImagePreviewClick:function(e){this.selectedMedia=e,this.carousel=e.id,this.dialog=!0},stop:function(e){this.$refs.mediaRef&&Object(O.isArray)(this.$refs.mediaRef)&&!Object(O.isEmpty)(this.$refs.mediaRef)&&Object(O.isNumber)(e)&&this.$refs.mediaRef[e]&&Object(O.isFunction)(this.$refs.mediaRef[e].pause)&&this.$refs.mediaRef[e].pause()},stopAllVideo:function(){this.$refs.mediaRef&&Object(O.isArray)(this.$refs.mediaRef)&&!Object(O.isEmpty)(this.$refs.mediaRef)&&this.$refs.mediaRef.forEach((function(e){Object(O.isFunction)(e.pause)&&e.pause()}))},handleCloseDialog:function(){this.dialog=!1}},watch:{dialog:function(e){e||this.stopAllVideo()},carousel:function(e,t){this.selectedMedia=this.mediaWithIds.find((function(t){return t.id===e})),this.stop(t)}},computed:{mediaWithIds:function(){return this.medias&&!Object(O.isEmpty)(this.medias)?this.medias.map((function(e,t){return j(j({},e),{},{id:t})})):[]}}},D=(n(515),n(46)),component=Object(D.a)(C,(function(){var e=this,t=e._self._c;return t("div",[e.mediaWithIds&&e.mediaWithIds.length>0?t(_.a,{staticClass:"d-flex",attrs:{dense:""}},e._l(e.mediaWithIds,(function(n,i){return t(c.a,{key:"media_".concat(i),attrs:{cols:"6",md:"4"}},[t("client-only",[t("ImagePreview",{attrs:{src:n.src,alt:n.alt,"thumb-url":n.thumbUrl,"is-video":"video"===n.type},nativeOn:{click:function(t){return function(){return e.onImagePreviewClick(n)}.apply(null,arguments)}}})],1)],1)})),1):e._e(),e._v(" "),t(d.a,{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.a,[t(_.a,{attrs:{"no-gutters":""}},[t(c.a,{attrs:{cols:"12",md:"8"}},[t(m.a,{attrs:{"hide-delimiters":"",height:e.$breakpoint.smAndDown?"350":"750",continuous:!1},model:{value:e.carousel,callback:function(t){e.carousel=t},expression:"carousel"}},e._l(e.mediaWithIds,(function(e,i){return t(v.a,{key:"bigMedia_".concat(i)},[t(y.a,{attrs:{height:"100%",width:"100%",color:"grey darken-4"}},["video"!==e.type?t(h.a,{ref:"mediaRef",refInFor:!0,attrs:{src:e.src,alt:e.alt,title:e.alt,eager:"",contain:"",position:"center center",height:"100%"}}):t("video",{ref:"mediaRef",refInFor:!0,staticClass:"video",attrs:{src:e.src,controls:""}})],1)],1)})),1)],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"4"}},[t("div",{staticClass:"d-flex pt-1 pr-1"},[t(x.a),e._v(" "),t(r.a,{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.handleCloseDialog.apply(null,arguments)}}},[t(f.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(o.c,[t("h6",{class:"".concat(e.$breakpoint.smAndDown?"text-subtitle-1 font-weight-bold":"text-h6"),staticStyle:{"word-break":"break-word"},attrs:{title:e.title}},[e._v("\n              "+e._s(e.title)+"\n            ")])]),e._v(" "),e.selectedMedia&&e.selectedMedia.alt?t(o.a,[t("span",{staticClass:"text-subtitle-1"},[e._v(e._s(e.selectedMedia.alt))])]):e._e(),e._v(" "),t(o.b,[t("p",{staticClass:"text-body-2"},[e._v(e._s(e.description))])])],1)],1)],1)],1)],1)}),[],!1,null,"9b6f273a",null);t.default=component.exports},525:function(e,t,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("befc3cc2",content,!0,{sourceMap:!1})},526:function(e,t,n){var r=n(17)((function(i){return i[1]}));r.push([e.i,'.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:not(.v-card--link):before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#1e1e1e}.theme--dark.v-timeline .v-timeline-item .v-card:not(.v-card--link):before{border-right-color:rgba(0,0,0,.12)}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:"";height:100%;position:absolute;top:0;width:2px}.v-timeline-item{display:flex;padding-bottom:24px}.v-timeline-item__body{flex:1 1 auto;height:100%;position:relative}.v-timeline-item__divider{align-items:center;display:flex;justify-content:center;min-width:96px;position:relative}.v-timeline-item__dot{border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);height:38px;left:calc(50% - 19px);width:38px;z-index:2}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{align-items:center;border-radius:50%;display:flex;justify-content:center}.v-timeline-item__opposite{align-self:center;flex:1 1 auto;max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after,.v-timeline-item__body>.v-card:not(.v-card--flat):not(.v-card--link):before{border-bottom:10px solid transparent;border-right:10px solid #000;border-top:10px solid transparent;content:"";position:absolute;top:calc(50% - 10px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after{border-right-color:inherit}.v-timeline-item__body>.v-card:not(.v-card--flat):not(.v-card--link):before{top:calc(50% - 8px)}.v-timeline--align-top .v-timeline-item__dot{align-self:start}.v-timeline--align-top .v-timeline-item__body>.v-card:after{top:10px}.v-timeline--align-top .v-timeline-item__body>.v-card:not(.v-card--link):before{top:12px}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:calc(50% - 1px);right:auto}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:auto;right:calc(50% - 1px)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense):before{left:calc(50% - 1px);right:auto}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense:before{left:auto;right:47px}.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense:before{left:47px;right:auto}.v-application--is-rtl .v-timeline--dense:not(.v-timeline--reverse):before{left:auto;right:47px}.v-timeline--dense .v-timeline-item{flex-direction:row-reverse!important}.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 96px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.v-timeline--reverse.v-timeline--dense .v-timeline-item{flex-direction:row!important}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}',""]),r.locals={},e.exports=r},551:function(e,t,n){"use strict";n.r(t);var r=n(584),l=n(496),o=n(583),m=n(481),v=n(485),c=n(567),d=n(568),f=n(488),h=(n(35),n(7),n(56),n(58),n(319),n(9),n(3),n(514)),_=n(520),y=n(113),x={name:"career",data:function(){return{title:"Achievements & Career",isTruncated:!0}},computed:{sortedCareers:function(){var e=Object(h.cloneDeep)(y.a).sort((function(a,b){return b.year-a.year})).map((function(e){if(e.year=e.year.toLocaleDateString("en-US",{year:"numeric",month:"long"}),e.endYear){var t=new Date;e.year=e.year+" - "+(e.endYear.getMonth()===t.getMonth()&&e.endYear.getFullYear()===t.getFullYear()?"Present":e.endYear.toLocaleDateString("en-US",{year:"numeric",month:"long"}))}return e}));return e},truncatedCareers:function(){return Object(h.cloneDeep)(y.a).sort((function(a,b){return b.year-a.year})).map((function(e){if(e.year=e.year.toLocaleDateString("en-US",{year:"numeric",month:"long"}),e.endYear){var t=new Date;e.year=e.year+" - "+(e.endYear.getMonth()===t.getMonth()&&e.endYear.getFullYear()===t.getFullYear()?"Present":e.endYear.toLocaleDateString("en-US",{year:"numeric",month:"long"}))}return e})).filter((function(e){return e.isHighlight}))}},components:{ImagePreviewGroup:_.default}},w=n(46),component=Object(w.a)(x,(function(){var e=this,t=e._self._c;return t(l.a,{attrs:{column:""}},[t(o.a,{staticClass:"mb-4",attrs:{align:"center",justify:"center","no-gutters":""}},[t(r.a,{attrs:{cols:"12",md:"8"}},[t("h4",{staticClass:"text-h4",class:{"text-h5":e.$breakpoint.smAndDown},staticStyle:{"font-family":"'PT Serif', serif !important"},domProps:{textContent:e._s(e.title)}})]),e._v(" "),t(m.a),e._v(" "),t(r.a,{attrs:{cols:"12",md:"auto"}},[t(f.a,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t("div",e._g(e._b({},"div",l,!1),r),[t(v.a,{attrs:{inset:"",label:"Truncated View"},model:{value:e.isTruncated,callback:function(t){e.isTruncated=t},expression:"isTruncated"}})],1)]}}])},[e._v(" "),t("span",[e._v("This list is truncated by default for optimal viewing.")])])],1)],1),e._v(" "),t(c.a,{staticClass:"mb-6 mt-2 mx-auto pa-0",staticStyle:{"max-width":"780px"},attrs:{dense:e.$breakpoint.smAndDown||!0,"align-top":e.$breakpoint.smAndDown}},e._l(e.isTruncated?e.truncatedCareers:e.sortedCareers,(function(n,l){return t(d.a,{key:l,staticClass:"pb-8",attrs:{color:n.color,icon:n.icon,"fill-dot":""}},[t(o.a,[e.$breakpoint.smAndDown?e._e():t(r.a,{staticClass:"d-flex justify-start align-center",attrs:{cols:"12",md:"3"}},[t("div",{staticClass:"mb-0 d-flex flex-column"},[t("span",{staticClass:"text-subtitle-2",class:"".concat(n.color,"--text text--darken-2")},[e._v("\n              "+e._s(n.type)+"\n            ")]),e._v(" "),t("span",{staticClass:"text-caption"},[e._v(e._s(n.year))])])]),e._v(" "),t(r.a,{attrs:{cols:"12",md:"9"}},[t("h6",{class:"".concat(e.$breakpoint.smAndDown?"text-subtitle-1":"text-h6"," ").concat(n.color,"--text"),domProps:{textContent:e._s(n.title)}}),e._v(" "),e.$breakpoint.smAndDown?t("div",{staticClass:"mb-0 d-flex text-subtitle-2"},[t("span",[e._v(e._s(n.year))]),e._v(" "),t("span",{staticClass:"mx-1"},[e._v("•")]),e._v(" "),t("span",{class:"".concat(n.color,"--text text--darken-2")},[e._v("\n              "+e._s(n.type)+"\n            ")])]):e._e(),e._v(" "),t("p",{staticClass:"body-1 mt-2 text-caption mb-2",domProps:{textContent:e._s(n.description)}}),e._v(" "),t("ImagePreviewGroup",{attrs:{medias:n.medias,title:n.title,description:n.description}})],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports},567:function(e,t,n){"use strict";n(10),n(7),n(9),n(3),n(13),n(8),n(14);var r=n(2),l=(n(525),n(4)),o=n(25);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(l.a)(o.a).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})},568:function(e,t,n){"use strict";n(10),n(7),n(9),n(3),n(13),n(8),n(14);var r=n(2),l=(n(232),n(4)),o=n(57),m=n(25),v=n(23);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=Object(l.a)(v.a,m.a);t.a=f.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(o.a,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var data=this.setBackgroundColor(this.color);return this.$createElement("div",d({staticClass:"v-timeline-item__inner-dot"},data),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:d({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}})}}]);