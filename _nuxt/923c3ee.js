(window.webpackJsonp=window.webpackJsonp||[]).push([[22,14,15,16,17],{442:function(t,e){},446:function(t,e,n){var content=n(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("4cba49aa",content,!0,{sourceMap:!1})},449:function(t,e){},451:function(t,e,n){"use strict";n.r(e);var r={name:"fullImage",props:{url:{default:function(){return"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"}}}},l=(n(455),n(78)),o=n(457),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"full-image",style:{backgroundImage:"url("+t.url+")"}})}),[],!1,null,"01e101de",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},455:function(t,e,n){"use strict";n(446)},456:function(t,e,n){var r=n(79)(!1);r.push([t.i,".full-image[data-v-01e101de]{background-repeat:no-repeat;background-position:50%;background-attachment:fixed;background-size:cover;height:100vh}",""]),t.exports=r},457:function(t,e,n){"use strict";var r=n(442),l=n.n(r);e.default=l.a},461:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("566a3107",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n.r(e);var r={name:"navbar",props:{config:{default:function(){return{brandText:"主页の名",brandUrl:"#",navs:[{text:"导航-1",url:"#"},{text:"导航-2",url:"#"},{text:"导航-3",url:"#"},{text:"导航-4",url:"#"},{text:"导航-5",url:"#"},{text:"导航-6",url:"#"},{text:"导航-7",url:"#"},{text:"导航-8",url:"#"},{text:"导航-9",url:"#"},{text:"导航-0",url:"#"}]}}}},data:function(){return{show:!1}}},l=(n(470),n(78)),o=n(472),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{class:t.show?"white-background-8":"transparent",staticStyle:{transition:"background-color 1000ms"},attrs:{fixed:"top",toggleable:"md"},nativeOn:{mouseenter:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},[n("b-navbar-brand",{class:t.show?"transparent":"white-background-6",staticStyle:{"border-radius":"0.5em",padding:"0.2em",transition:"background-color 1000ms"},attrs:{href:t.config.brandUrl,tag:"h1"}},[n("b",{staticStyle:{color:"rgba(51, 51, 51, 0.7)"}},[t._v(t._s(t.config.brandText))])]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),t.show?n("b-collapse",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{attrs:{align:"center"}},t._l(t.config.navs?t.config.navs:[],(function(nav,i){return n("b-nav-item",{key:i,attrs:{href:nav.url}},[n("b",[t._v(t._s(nav.text))])])})),1)],1):t._e()],1)}),[],!1,null,"913356fc",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},467:function(t,e){},470:function(t,e,n){"use strict";n(461)},471:function(t,e,n){var r=n(79)(!1);r.push([t.i,".navbar-nav[data-v-913356fc]{width:100%;text-align:center}.navbar-nav li[data-v-913356fc]{float:none;display:inline-block;text-align:center}",""]),t.exports=r},472:function(t,e,n){"use strict";var r=n(449),l=n.n(r);e.default=l.a},477:function(t,e,n){var content=n(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("6cc856d8",content,!0,{sourceMap:!1})},486:function(t,e){},491:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAMAAABFaP0WAAAABlBMVEVHcEwAAACfKoRRAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGQAAgAACwAC91XSmQAAAABJRU5ErkJggg=="},492:function(t,e,n){"use strict";n(477)},493:function(t,e,n){var r=n(79)(!1);r.push([t.i,".full-scrub-image[data-v-003ffee6]{background-repeat:repeat,no-repeat;background-position:0 0,50%;background-attachment:scroll,fixed;background-size:auto,cover;height:100vh}",""]),t.exports=r},494:function(t,e,n){"use strict";var r=n(467),l=n.n(r);e.default=l.a},495:function(t,e,n){"use strict";n.r(e);var r={name:"fullScrubImage",props:{scrub:{default:function(){return n(491)}},url:{default:function(){return"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"}}}},l=(n(492),n(78)),o=n(494),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"full-scrub-image",style:{backgroundImage:"url("+t.scrub+"), url("+t.url+")"}})}),[],!1,null,"003ffee6",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},499:function(t,e,n){"use strict";var r=n(486),l=n.n(r);e.default=l.a},503:function(t,e,n){"use strict";n.r(e);var r={name:"fullCarousel",props:{config:{default:function(){return{interval:5e3,brands:[{imageUrl:"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png",title:"这是大招牌-1",texts:["这是一段招牌的演示文字-1-1","这是一段招牌的演示文字-1-2"]},{imageUrl:"https://i.loli.net/2018/04/10/5accdcbcb1738.jpg",title:"这是大招牌-2",texts:["这是一段招牌的演示文字-2-1","这是一段招牌的演示文字-2-2"]},{imageUrl:"https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg",title:"这是大招牌-3",texts:["这是一段招牌的演示文字-3-1","这是一段招牌的演示文字-3-2"]}],navs:[{text:"twitter",url:"https://twitter.com/"},{text:"facebook",url:"https://facebook.com/"},{text:"微博",url:"https://weibo.com/"},{text:"知乎",url:"https://www.zhihu.com/"}]}}}},components:{fullImage:n(495).default}},l=n(78),o=n(499),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-carousel",{attrs:{interval:t.config.interval,fade:"",indicators:""}},t._l(t.config.brands,(function(e,i){return n("b-carousel-slide",{key:i,attrs:{background:"rgba(255, 255, 255, 1)"},scopedSlots:t._u([{key:"img",fn:function(){return[n("full-image",{attrs:{url:e.imageUrl}})]},proxy:!0}],null,!0)},[t._v(" "),n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"text-center",attrs:{"align-v":"center"}},[n("b-col",{attrs:{lg:"2",md:"1",sm:"0",xl:"2"}}),t._v(" "),n("b-col",{attrs:{lg:"8",md:"10",sm:"12",xl:"8"}},[e.title?n("b-card",{staticClass:"black-background-5",staticStyle:{border:"none"},attrs:{title:e.title,"title-tag":"h1"}},t._l(e.texts,(function(text,e){return n("b-card-text",{key:e,staticClass:"white"},[t._v(t._s(text))])})),1):t._e()],1),t._v(" "),n("b-col",{attrs:{lg:"2",md:"1",sm:"0",xl:"2"}})],1),t._v(" "),n("b-row",{staticClass:"text-center",attrs:{"align-v":"center"}},[n("b-col",{attrs:{lg:"2",md:"1",sm:"0",xl:"2"}}),t._v(" "),n("b-col",{attrs:{lg:"8",md:"10",sm:"12",xl:"8"}},t._l(t.config.navs,(function(nav,e){return n("b-badge",{key:e,staticClass:"black-background-5",attrs:{pill:""}},[n("a",{staticClass:"white",attrs:{href:nav.url,target:"_blank"},domProps:{textContent:t._s(nav.text)}})])})),1),t._v(" "),n("b-col",{attrs:{lg:"2",md:"1",sm:"0",xl:"2"}})],1)],1)],1)})),1)}),[],!1,null,"26b2b3f5",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{FullImage:n(451).default})},515:function(t,e,n){"use strict";n.r(e);var r=n(23),l=(n(65),n(464)),o=n(503),c=n(158),f={name:"index",asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.default.getNavbarConfig(),n=c.default.getHomeConfig(),t.abrupt("return",{navbarConfig:e,homeConfig:n});case 3:case"end":return t.stop()}}),t)})))()},components:{navbar:l.default,fullCarousel:o.default}},d=n(78),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar",{attrs:{config:t.navbarConfig}}),t._v(" "),n("full-carousel",{attrs:{config:t.homeConfig}})],1)}),[],!1,null,"23fac44b",null);e.default=component.exports;installComponents(component,{Navbar:n(464).default,FullCarousel:n(503).default})}}]);