(window.webpackJsonp=window.webpackJsonp||[]).push([[25,5,6,7,8,9,10,13,15,17,18,19],{437:function(t,e){},438:function(t,e){},439:function(t,e,n){"use strict";n.r(e);n(21);var r=n(44),l={name:"autoColorBadge",props:{name:{default:function(){return r.default.randomString(4)}},value:{default:function(){return r.default.randomString(4)}},url:{default:function(){}}},data:function(){return{variants:["secondary","primary","info","dark"]}},computed:{variant:function(){var t=r.default.hashString(this.name)+r.default.hashString(this.value);return this.variants[t%this.variants.length]}}},o=n(78),c=n(443),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-badge",{attrs:{variant:t.variant}},[t._v(t._s(t.name+": ")),n("a",{staticClass:"white",attrs:{href:t.url},domProps:{textContent:t._s(t.value)}})])}),[],!1,null,"3845f08c",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},440:function(t,e,n){"use strict";n.r(e);var r={name:"autoColorBadges",props:{attributes:{default:function(){return[void 0,void 0,void 0]}}},components:{autoColorBadge:n(439).default}},l=n(78),o=n(445),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.attributes,(function(t,i){return n("auto-color-badge",{key:i,staticStyle:{"margin-left":"0.1em","margin-right":"0.1em"},attrs:{name:t.name,value:t.value,url:t.url}})})),1)}),[],!1,null,"5388da3e",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadge:n(439).default})},441:function(t,e){},442:function(t,e){},443:function(t,e,n){"use strict";var r=n(437),l=n.n(r);e.default=l.a},444:function(t,e){},445:function(t,e,n){"use strict";var r=n(438),l=n.n(r);e.default=l.a},446:function(t,e,n){var content=n(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("4cba49aa",content,!0,{sourceMap:!1})},447:function(t,e,n){"use strict";n.r(e);var r=n(440),l=n(157),o={name:"articleView",props:{file:{default:function(){return{title:"a_title",url:"#",toc:[{id:"a_context",depth:2,text:"a_context"},{id:"b_context",depth:3,text:"b_context"}],body:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"a_description"}]},{type:"element",tag:"h2",props:{id:"a_context"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#a_context",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"a_context"}]},{type:"element",tag:"h3",props:{id:"b_context"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#b_context",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"b_context"}]}]},excerpt:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"a_description"}]}]},attributes:[{name:"createAt",value:"YYYY-MM-DD"},{name:"updateAt",value:"YYYY-MM-DD"},{name:"sort",value:"sort",url:"#"}]}}},isSummary:{default:function(){return!1}}},computed:{article:function(){var article=l.default.file2Article(this.file,this.isSummary);return void 0===article?(console.log("this.file",JSON.stringify(this.file)),{}):article}},components:{autoColorBadges:r.default}},c=n(78),f=n(453),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",{staticClass:"nuxt-content",staticStyle:{"margin-bottom":"1em"}},[n("b-list-group-item",{staticClass:"white-background-8"},[n("h1",[n("b-link",{attrs:{href:t.article.url,target:t.isSummary?"_blank":""},domProps:{textContent:t._s(t.article.title)}})],1),t._v(" "),n("auto-color-badges",{attrs:{attributes:t.article.attributes}})],1),t._v(" "),n("b-list-group-item",{staticClass:"white-background-8"},[n("nuxt-content",{attrs:{document:t.article}})],1)],1)}),[],!1,null,"46a4aa19",null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadges:n(440).default})},448:function(t,e){},449:function(t,e){},451:function(t,e,n){"use strict";n.r(e);var r={name:"fullImage",props:{url:{default:function(){return"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"}}}},l=(n(455),n(78)),o=n(457),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"full-image",style:{backgroundImage:"url("+t.url+")"}})}),[],!1,null,"01e101de",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},452:function(t,e,n){"use strict";n.r(e);var r={name:"fileView",props:{file:{default:function(){}},isSummary:{default:function(){}}},components:{articleView:n(447).default}},l=n(78),o=n(462),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article-view",{attrs:{file:t.file,isSummary:t.isSummary}})}),[],!1,null,"22ac7f6b",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{ArticleView:n(447).default})},453:function(t,e,n){"use strict";var r=n(441),l=n.n(r);e.default=l.a},455:function(t,e,n){"use strict";n(446)},456:function(t,e,n){var r=n(79)(!1);r.push([t.i,".full-image[data-v-01e101de]{background-repeat:no-repeat;background-position:50%;background-attachment:fixed;background-size:cover;height:100vh}",""]),t.exports=r},457:function(t,e,n){"use strict";var r=n(442),l=n.n(r);e.default=l.a},458:function(t,e){},459:function(t,e){},461:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("566a3107",content,!0,{sourceMap:!1})},462:function(t,e,n){"use strict";var r=n(444),l=n.n(r);e.default=l.a},464:function(t,e,n){"use strict";n.r(e);var r={name:"navbar",props:{config:{default:function(){return{brandText:"主页の名",brandUrl:"#",navs:[{text:"导航-1",url:"#"},{text:"导航-2",url:"#"},{text:"导航-3",url:"#"},{text:"导航-4",url:"#"},{text:"导航-5",url:"#"},{text:"导航-6",url:"#"},{text:"导航-7",url:"#"},{text:"导航-8",url:"#"},{text:"导航-9",url:"#"},{text:"导航-0",url:"#"}]}}}},data:function(){return{show:!1}}},l=(n(470),n(78)),o=n(472),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{class:t.show?"white-background-8":"transparent",staticStyle:{transition:"background-color 1000ms"},attrs:{fixed:"top",toggleable:"md"},nativeOn:{mouseenter:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},[n("b-navbar-brand",{class:t.show?"transparent":"white-background-6",staticStyle:{"border-radius":"0.5em",padding:"0.2em",transition:"background-color 1000ms"},attrs:{href:t.config.brandUrl,tag:"h1"}},[n("b",{staticStyle:{color:"rgba(51, 51, 51, 0.7)"}},[t._v(t._s(t.config.brandText))])]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),t.show?n("b-collapse",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{attrs:{align:"center"}},t._l(t.config.navs?t.config.navs:[],(function(nav,i){return n("b-nav-item",{key:i,attrs:{href:nav.url}},[n("b",[t._v(t._s(nav.text))])])})),1)],1):t._e()],1)}),[],!1,null,"913356fc",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},466:function(t,e){},468:function(t,e,n){"use strict";n.r(e);var r={name:"pageHead",props:{config:{default:function(){return{brands:[{imageUrl:"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png",title:"这是大招牌-1",texts:["这是一段招牌的演示文字-1-1","这是一段招牌的演示文字-1-2"]},{imageUrl:"https://i.loli.net/2018/04/10/5accdcbcb1738.jpg",title:"这是大招牌-2",texts:["这是一段招牌的演示文字-2-1","这是一段招牌的演示文字-2-2"]},{imageUrl:"https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg",title:"这是大招牌-3",texts:["这是一段招牌的演示文字-3-1","这是一段招牌的演示文字-3-2"]}]}}},slide:{default:function(){return Math.floor(Math.random()*this.config.brands.length)}}},components:{fullImage:n(451).default}},l=n(78),o=n(469),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-carousel",{attrs:{interval:0,controls:"",fade:"",indicators:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.config.brands,(function(e,i){return n("b-carousel-slide",{key:i,attrs:{background:"rgba(255, 255, 255, 0)"},scopedSlots:t._u([{key:"img",fn:function(){return[n("full-image",{staticStyle:{"max-height":"50vh"},attrs:{url:e.imageUrl}})]},proxy:!0}],null,!0)},[t._v(" "),e.title?n("b-card",{staticClass:"black-background-5",staticStyle:{border:"none"},attrs:{title:e.title,"title-tag":"h1"}},t._l(e.texts,(function(text,e){return n("b-card-text",{key:e,staticClass:"white"},[t._v(t._s(text))])})),1):t._e()],1)})),1)}),[],!1,null,"1a4d6c16",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{FullImage:n(451).default})},469:function(t,e,n){"use strict";var r=n(448),l=n.n(r);e.default=l.a},470:function(t,e,n){"use strict";n(461)},471:function(t,e,n){var r=n(79)(!1);r.push([t.i,".navbar-nav[data-v-913356fc]{width:100%;text-align:center}.navbar-nav li[data-v-913356fc]{float:none;display:inline-block;text-align:center}",""]),t.exports=r},472:function(t,e,n){"use strict";var r=n(449),l=n.n(r);e.default=l.a},475:function(t,e,n){"use strict";n.r(e);var r={name:"backtop"},l=n(78),o=n(481),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("el-backtop",{staticClass:"white-background-6"})}),[],!1,null,"0f5cfe76",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},476:function(t,e,n){"use strict";n.r(e);var r={name:"pageFoot",props:{config:{default:function(){return{lines:[[{text:"Copyright © 2017-? ."},{text:"备案？不存在的"},{text:"Powered by Nuxt.js & Github"}],[{text:"友链："},{text:"Github",url:"https://github.com/"},{text:"Nuxt.js",url:"https://nuxtjs.org/"}]]}}}}},l=n(78),o=n(480),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"text-center blue-background-8",staticStyle:{border:"none"}},t._l(t.config.lines,(function(line,i){return n("b-card-text",{key:i,staticClass:"white"},t._l(line,(function(content,e){return n("b-badge",{key:e,staticClass:"transparent",staticStyle:{"margin-left":"0.5em","margin-right":"0.5em"}},[n("a",{staticClass:"white",attrs:{href:content.url,target:"_blank"},domProps:{textContent:t._s(content.text)}})])})),1)})),1)}),[],!1,null,"caa314d6",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},480:function(t,e,n){"use strict";var r=n(458),l=n.n(r);e.default=l.a},481:function(t,e,n){"use strict";var r=n(459),l=n.n(r);e.default=l.a},485:function(t,e){},487:function(t,e,n){"use strict";n.r(e);var r={name:"comment"},l=n(78),o=n(490),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"white-background-8",staticStyle:{"border-radius":"0.25em"},attrs:{id:"comment"}})}),[],!1,null,"19695afc",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},490:function(t,e,n){"use strict";var r=n(466),l=n.n(r);e.default=l.a},498:function(t,e,n){"use strict";var r=n(485),l=n.n(r);e.default=l.a},500:function(t,e,n){"use strict";n.r(e);var r=n(452),l=n(487),o={name:"fileComment",props:{file:{default:function(){}}},components:{fileView:r.default,comment:l.default}},c=n(78),f=n(498),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("file-view",{attrs:{file:t.file,isSummary:!1}}),t._v(" "),n("comment")],1)}),[],!1,null,"7dc82067",null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{FileView:n(452).default,Comment:n(487).default})},514:function(t,e,n){"use strict";n.r(e);var r=n(23),l=(n(65),n(464)),o=n(468),c=n(500),f=n(476),d=n(475),m=n(158),v=n(305),h={name:"fileView",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,o,c,f,d,path,h,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$content,l=t.error,o=m.default.getNavbarConfig(),c=m.default.getHomeConfig(),f=m.default.getPageFootConfig(),d=m.default.getSiteConfig(),path=v.default.initPath(n.pathMatch),e.next=8,r(path,{deep:!1}).fetch();case 8:if(h=e.sent,0!==(x=v.default.content2Files(h)).length){e.next=13;break}return l(),e.abrupt("return");case 13:return e.abrupt("return",{navbarConfig:o,homeConfig:c,pageFootConfig:f,siteName:d.siteName,file:x[0]});case 14:case"end":return e.stop()}}),e)})))()},head:function(){return this.file.title?{title:this.file.title+" | "+this.siteName}:{title:this.siteName}},components:{navbar:l.default,pageHead:o.default,fileComment:c.default,pageFoot:f.default,backtop:d.default}},x=n(78),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar",{attrs:{config:t.navbarConfig}}),t._v(" "),n("b-container",[n("br"),t._v(" "),n("page-head",{attrs:{config:t.homeConfig}}),t._v(" "),n("br"),t._v(" "),n("file-comment",{attrs:{file:t.file}}),t._v(" "),n("br")],1),t._v(" "),n("page-foot",{attrs:{config:t.pageFootConfig}}),t._v(" "),n("backtop")],1)}),[],!1,null,"15b88c05",null);e.default=component.exports;installComponents(component,{Navbar:n(464).default,PageHead:n(468).default,FileComment:n(500).default,PageFoot:n(476).default,Backtop:n(475).default})}}]);