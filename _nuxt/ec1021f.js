(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,6,7,8,11,12,13,15,17,18,19,20],{437:function(t,e){},438:function(t,e){},439:function(t,e,n){"use strict";n.r(e);n(21);var r=n(41),l={name:"autoColorBadge",props:{name:{default:function(){return r.default.randomString(4)}},value:{default:function(){return r.default.randomString(4)}},url:{default:function(){}}},data:function(){return{variants:["secondary","primary","info","dark"]}},computed:{variant:function(){var t=r.default.hashString(this.name)+r.default.hashString(this.value);return this.variants[t%this.variants.length]}}},o=n(79),c=n(443),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-badge",{attrs:{variant:t.variant}},[t._v(t._s(t.name+": ")),n("a",{staticClass:"white",attrs:{href:t.url},domProps:{textContent:t._s(t.value)}})])}),[],!1,null,"3845f08c",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},440:function(t,e,n){"use strict";n.r(e);var r={name:"autoColorBadges",props:{attributes:{default:function(){return[void 0,void 0,void 0]}}},components:{autoColorBadge:n(439).default}},l=n(79),o=n(444),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.attributes,(function(t,i){return n("auto-color-badge",{key:i,staticStyle:{"margin-left":"0.1em","margin-right":"0.1em"},attrs:{name:t.name,value:t.value,url:t.url}})})),1)}),[],!1,null,"5388da3e",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadge:n(439).default})},441:function(t,e){},442:function(t,e){},443:function(t,e,n){"use strict";var r=n(437),l=n.n(r);e.default=l.a},444:function(t,e,n){"use strict";var r=n(438),l=n.n(r);e.default=l.a},445:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("4cba49aa",content,!0,{sourceMap:!1})},446:function(t,e){},447:function(t,e,n){"use strict";n.r(e);var r=n(440),l=n(159),o={name:"articleView",props:{file:{default:function(){return{title:"title_t",url:"#",toc:[{id:"h2_t",depth:2,text:"h2_t"},{id:"h3_t",depth:3,text:"h3_t"}],body:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"description_t"}]},{type:"element",tag:"h2",props:{id:"h2_t"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#h2_t",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"h2_t"}]},{type:"element",tag:"h3",props:{id:"h3_t"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#h3_t",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"h3_t"}]}]},excerpt:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"description_t"}]}]},attributes:[{name:"createAt",value:"YYYY-MM-DD"},{name:"updateAt",value:"YYYY-MM-DD"},{name:"sort",value:"sort",url:"#"}]}}},isSummary:{default:function(){return!1}}},computed:{article:function(){return l.default.file2Article(this.file,this.isSummary)}},components:{autoColorBadges:r.default}},c=n(79),f=n(452),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",{staticClass:"nuxt-content",staticStyle:{"margin-bottom":"1em"}},[n("b-list-group-item",{staticClass:"white-background-8"},[n("h1",[n("b-link",{attrs:{href:t.article.url,target:t.isSummary?"_blank":""},domProps:{textContent:t._s(t.article.title)}})],1),t._v(" "),n("auto-color-badges",{attrs:{attributes:t.article.attributes}})],1),t._v(" "),n("b-list-group-item",{staticClass:"white-background-8"},[n("nuxt-content",{attrs:{document:t.article}})],1)],1)}),[],!1,null,"3e472622",null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadges:n(440).default})},448:function(t,e){},449:function(t,e){},450:function(t,e){},451:function(t,e,n){"use strict";n.r(e);var r={name:"fullImage",props:{url:{default:function(){return"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"}}}},l=(n(453),n(79)),o=n(455),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"full-image",style:{backgroundImage:"url("+t.url+")"}})}),[],!1,null,"01e101de",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},452:function(t,e,n){"use strict";var r=n(441),l=n.n(r);e.default=l.a},453:function(t,e,n){"use strict";n(445)},454:function(t,e,n){var r=n(80)(!1);r.push([t.i,".full-image[data-v-01e101de]{background-repeat:no-repeat;background-position:50%;background-attachment:fixed;background-size:cover;height:100vh}",""]),t.exports=r},455:function(t,e,n){"use strict";var r=n(442),l=n.n(r);e.default=l.a},456:function(t,e){},457:function(t,e){},459:function(t,e,n){"use strict";n.r(e);var r={name:"fileView",props:{file:{default:function(){}},isSummary:{default:function(){}}},components:{articleView:n(447).default}},l=n(79),o=n(464),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article-view",{attrs:{file:t.file,isSummary:t.isSummary}})}),[],!1,null,"22ac7f6b",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{ArticleView:n(447).default})},460:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("566a3107",content,!0,{sourceMap:!1})},461:function(t,e,n){"use strict";n.r(e);n(11),n(18);var r=n(305),l={name:"pagination",props:{total:{default:function(){return 1e3}},pageSize:{default:function(){return 10}},currentPage:{default:function(){return 15}}},methods:{change:function(t){var e=r.default.getBasePath(),path=window.location.pathname.replace(e,""),n=r.default.parsePath(path).folderPath;window.location.href=n+"/"+t+"/"}}},o=n(79),c=n(473),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-pagination",{staticClass:"white-background-8",attrs:{"hide-ellipsis":!0,limit:12,"per-page":t.pageSize,"total-rows":t.total,value:t.currentPage,align:"center",pills:""},on:{change:t.change}})}),[],!1,null,"cf8d758e",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},462:function(t,e,n){"use strict";n.r(e);var r={name:"navbar",props:{config:{default:function(){return{brandText:"主页の名",brandUrl:"#",navs:[{text:"导航-1",url:"#"},{text:"导航-2",url:"#"},{text:"导航-3",url:"#"},{text:"导航-4",url:"#"},{text:"导航-5",url:"#"},{text:"导航-6",url:"#"},{text:"导航-7",url:"#"},{text:"导航-8",url:"#"},{text:"导航-9",url:"#"},{text:"导航-0",url:"#"}]}}}},data:function(){return{show:!1}}},l=(n(470),n(79)),o=n(472),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{class:t.show?"white-background-8":"transparent",staticStyle:{transition:"background-color 1000ms"},attrs:{fixed:"top",toggleable:"md"},nativeOn:{mouseenter:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},[n("b-navbar-brand",{class:t.show?"transparent":"white-background-6",staticStyle:{"border-radius":"0.5em",padding:"0.2em",transition:"background-color 1000ms"},attrs:{href:t.config.brandUrl,tag:"h1"}},[n("b",{staticStyle:{color:"rgba(51, 51, 51, 0.7)"}},[t._v(t._s(t.config.brandText))])]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),t.show?n("b-collapse",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{attrs:{align:"center"}},t._l(t.config.navs?t.config.navs:[],(function(nav,i){return n("b-nav-item",{key:i,attrs:{href:nav.url}},[n("b",[t._v(t._s(nav.text))])])})),1)],1):t._e()],1)}),[],!1,null,"913356fc",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},464:function(t,e,n){"use strict";var r=n(446),l=n.n(r);e.default=l.a},465:function(t,e){},468:function(t,e,n){"use strict";n.r(e);var r={name:"pageHead",props:{config:{default:function(){return{brands:[{imageUrl:"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png",title:"这是大招牌-1",texts:["这是一段招牌的演示文字-1-1","这是一段招牌的演示文字-1-2"]},{imageUrl:"https://i.loli.net/2018/04/10/5accdcbcb1738.jpg",title:"这是大招牌-2",texts:["这是一段招牌的演示文字-2-1","这是一段招牌的演示文字-2-2"]},{imageUrl:"https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg",title:"这是大招牌-3",texts:["这是一段招牌的演示文字-3-1","这是一段招牌的演示文字-3-2"]}]}}},slide:{default:function(){return Math.floor(Math.random()*this.config.brands.length)}}},components:{fullImage:n(451).default}},l=n(79),o=n(469),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-carousel",{attrs:{interval:0,controls:"",fade:"",indicators:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.config.brands,(function(e,i){return n("b-carousel-slide",{key:i,attrs:{background:"rgba(255, 255, 255, 0)"},scopedSlots:t._u([{key:"img",fn:function(){return[n("full-image",{staticStyle:{"max-height":"50vh"},attrs:{url:e.imageUrl}})]},proxy:!0}],null,!0)},[t._v(" "),e.title?n("b-card",{staticClass:"black-background-5",staticStyle:{border:"none"},attrs:{title:e.title,"title-tag":"h1"}},t._l(e.texts,(function(text,e){return n("b-card-text",{key:e,staticClass:"white"},[t._v(t._s(text))])})),1):t._e()],1)})),1)}),[],!1,null,"1a4d6c16",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{FullImage:n(451).default})},469:function(t,e,n){"use strict";var r=n(448),l=n.n(r);e.default=l.a},470:function(t,e,n){"use strict";n(460)},471:function(t,e,n){var r=n(80)(!1);r.push([t.i,".navbar-nav[data-v-913356fc]{width:100%;text-align:center}.navbar-nav li[data-v-913356fc]{float:none;display:inline-block;text-align:center}",""]),t.exports=r},472:function(t,e,n){"use strict";var r=n(449),l=n.n(r);e.default=l.a},473:function(t,e,n){"use strict";var r=n(450),l=n.n(r);e.default=l.a},475:function(t,e,n){"use strict";n.r(e);var r={name:"backtop"},l=n(79),o=n(479),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("el-backtop",{staticClass:"white-background-6"})}),[],!1,null,"0f5cfe76",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},476:function(t,e,n){"use strict";n.r(e);var r={name:"pageFoot",props:{config:{default:function(){return{lines:[[{text:"Copyright © 2017-? ."},{text:"备案？不存在的"},{text:"Powered by Nuxt.js & Github"}],[{text:"友链："},{text:"Github",url:"https://github.com/"},{text:"Nuxt.js",url:"https://nuxtjs.org/"}]]}}}}},l=n(79),o=n(478),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"text-center blue-background-8",staticStyle:{border:"none"}},t._l(t.config.lines,(function(line,i){return n("b-card-text",{key:i,staticClass:"white"},t._l(line,(function(content,e){return n("b-badge",{key:e,staticClass:"transparent",staticStyle:{"margin-left":"0.5em","margin-right":"0.5em"}},[n("a",{staticClass:"white",attrs:{href:content.url,target:"_blank"},domProps:{textContent:t._s(content.text)}})])})),1)})),1)}),[],!1,null,"caa314d6",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},478:function(t,e,n){"use strict";var r=n(456),l=n.n(r);e.default=l.a},479:function(t,e,n){"use strict";var r=n(457),l=n.n(r);e.default=l.a},482:function(t,e){},486:function(t,e,n){"use strict";n.r(e);var r={name:"fileList",props:{files:{default:function(){return[void 0,void 0,void 0,void 0,void 0,void 0]}}},components:{fileView:n(459).default}},l=n(79),o=n(489),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.files,(function(t,i){return n("file-view",{key:i,attrs:{file:t,isSummary:!0}})})),1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{FileView:n(459).default})},489:function(t,e,n){"use strict";var r=n(465),l=n.n(r);e.default=l.a},497:function(t,e,n){"use strict";var r=n(482),l=n.n(r);e.default=l.a},503:function(t,e,n){"use strict";n.r(e);var r=n(486),l=n(461),o={name:"fileListAndPage",props:{files:{default:function(){}},total:{default:function(){}},pageSize:{default:function(){}},currentPage:{default:function(){}}},components:{fileList:r.default,pagination:l.default}},c=n(79),f=n(497),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("file-list",{attrs:{files:t.files}}),t._v(" "),n("pagination",{attrs:{currentPage:t.currentPage,pageSize:t.pageSize,total:t.total}})],1)}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{FileList:n(486).default,Pagination:n(461).default})},516:function(t,e,n){"use strict";n.r(e);var r=n(23),l=(n(65),n(462)),o=n(468),c=n(476),f=n(475),d=n(503),v=n(121),m=n(305),h=n(159),_={name:"page",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,o,c,f,d,_,x,y,w,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$content,l=v.default.getNavbarConfig(),o=v.default.getHomeConfig(),c=v.default.getPageFootConfig(),f=v.default.getSiteConfig(),d=m.default.parsePath(n.pathMatch),_=d.folderPath,x=d.currentPage,e.next=8,r(_,{deep:!0}).fetch();case 8:return y=e.sent,w=m.default.content2Files(y),(w=h.default.sortContent(w)).reverse(),k=m.default.page(w,x,f.pageSize),e.abrupt("return",{navbarConfig:l,homeConfig:o,pageFootConfig:c,pageSize:f.pageSize,total:w.length,currentPage:x,files:k});case 14:case"end":return e.stop()}}),e)})))()},components:{navbar:l.default,pageHead:o.default,fileListAndPage:d.default,pageFoot:c.default,backtop:f.default}},x=n(79),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar",{attrs:{config:t.navbarConfig}}),t._v(" "),n("b-container",[n("br"),t._v(" "),n("page-head",{attrs:{config:t.homeConfig}}),t._v(" "),n("br"),t._v(" "),n("file-list-and-page",{attrs:{files:t.files,currentPage:t.currentPage,pageSize:t.pageSize,total:t.total}})],1),t._v(" "),n("page-foot",{attrs:{config:t.pageFootConfig}}),t._v(" "),n("backtop")],1)}),[],!1,null,"2d695481",null);e.default=component.exports;installComponents(component,{Navbar:n(462).default,PageHead:n(468).default,FileListAndPage:n(503).default,PageFoot:n(476).default,Backtop:n(475).default})}}]);