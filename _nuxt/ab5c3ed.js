(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,6,7,15,19],{437:function(t,e){},438:function(t,e){},439:function(t,e,n){"use strict";n.r(e);n(21);var r=n(41),l={name:"autoColorBadge",props:{name:{default:function(){return r.default.randomString(4)}},value:{default:function(){return r.default.randomString(4)}},url:{default:function(){}}},data:function(){return{variants:["secondary","primary","info","dark"]}},computed:{variant:function(){var t=r.default.hashString(this.name)+r.default.hashString(this.value);return this.variants[t%this.variants.length]}}},o=n(79),c=n(443),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-badge",{attrs:{variant:t.variant}},[t._v(t._s(t.name+": ")),n("a",{staticClass:"white",attrs:{href:t.url},domProps:{textContent:t._s(t.value)}})])}),[],!1,null,"3845f08c",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},440:function(t,e,n){"use strict";n.r(e);var r={name:"autoColorBadges",props:{attributes:{default:function(){return[void 0,void 0,void 0]}}},components:{autoColorBadge:n(439).default}},l=n(79),o=n(444),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.attributes,(function(t,i){return n("auto-color-badge",{key:i,staticStyle:{"margin-left":"0.1em","margin-right":"0.1em"},attrs:{name:t.name,value:t.value,url:t.url}})})),1)}),[],!1,null,"5388da3e",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadge:n(439).default})},441:function(t,e){},442:function(t,e){},443:function(t,e,n){"use strict";var r=n(437),l=n.n(r);e.default=l.a},444:function(t,e,n){"use strict";var r=n(438),l=n.n(r);e.default=l.a},445:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("4cba49aa",content,!0,{sourceMap:!1})},447:function(t,e,n){"use strict";n.r(e);var r=n(440),l=n(159),o={name:"articleView",props:{file:{default:function(){return{title:"title_t",url:"#",toc:[{id:"h2_t",depth:2,text:"h2_t"},{id:"h3_t",depth:3,text:"h3_t"}],body:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"description_t"}]},{type:"element",tag:"h2",props:{id:"h2_t"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#h2_t",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"h2_t"}]},{type:"element",tag:"h3",props:{id:"h3_t"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#h3_t",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"h3_t"}]}]},excerpt:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"description_t"}]}]},attributes:[{name:"createAt",value:"YYYY-MM-DD"},{name:"updateAt",value:"YYYY-MM-DD"},{name:"sort",value:"sort",url:"#"}]}}},isSummary:{default:function(){return!1}}},computed:{article:function(){return l.default.file2Article(this.file,this.isSummary)}},components:{autoColorBadges:r.default}},c=n(79),d=n(452),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",{staticClass:"nuxt-content",staticStyle:{"margin-bottom":"1em"}},[n("b-list-group-item",{staticClass:"white-background-8"},[n("h1",[n("b-link",{attrs:{href:t.article.url,target:t.isSummary?"_blank":""},domProps:{textContent:t._s(t.article.title)}})],1),t._v(" "),n("auto-color-badges",{attrs:{attributes:t.article.attributes}})],1),t._v(" "),n("b-list-group-item",{staticClass:"white-background-8"},[n("nuxt-content",{attrs:{document:t.article}})],1)],1)}),[],!1,null,"3e472622",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadges:n(440).default})},448:function(t,e){},451:function(t,e,n){"use strict";n.r(e);var r={name:"fullImage",props:{url:{default:function(){return"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"}}}},l=(n(453),n(79)),o=n(455),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"full-image",style:{backgroundImage:"url("+t.url+")"}})}),[],!1,null,"01e101de",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},452:function(t,e,n){"use strict";var r=n(441),l=n.n(r);e.default=l.a},453:function(t,e,n){"use strict";n(445)},454:function(t,e,n){var r=n(80)(!1);r.push([t.i,".full-image[data-v-01e101de]{background-repeat:no-repeat;background-position:50%;background-attachment:fixed;background-size:cover;height:100vh}",""]),t.exports=r},455:function(t,e,n){"use strict";var r=n(442),l=n.n(r);e.default=l.a},468:function(t,e,n){"use strict";n.r(e);var r={name:"pageHead",props:{config:{default:function(){return{brands:[{imageUrl:"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png",title:"这是大招牌-1",texts:["这是一段招牌的演示文字-1-1","这是一段招牌的演示文字-1-2"]},{imageUrl:"https://i.loli.net/2018/04/10/5accdcbcb1738.jpg",title:"这是大招牌-2",texts:["这是一段招牌的演示文字-2-1","这是一段招牌的演示文字-2-2"]},{imageUrl:"https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg",title:"这是大招牌-3",texts:["这是一段招牌的演示文字-3-1","这是一段招牌的演示文字-3-2"]}]}}},slide:{default:function(){return Math.floor(Math.random()*this.config.brands.length)}}},components:{fullImage:n(451).default}},l=n(79),o=n(469),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-carousel",{attrs:{interval:0,controls:"",fade:"",indicators:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.config.brands,(function(e,i){return n("b-carousel-slide",{key:i,attrs:{background:"rgba(255, 255, 255, 0)"},scopedSlots:t._u([{key:"img",fn:function(){return[n("full-image",{staticStyle:{"max-height":"50vh"},attrs:{url:e.imageUrl}})]},proxy:!0}],null,!0)},[t._v(" "),e.title?n("b-card",{staticClass:"black-background-5",staticStyle:{border:"none"},attrs:{title:e.title,"title-tag":"h1"}},t._l(e.texts,(function(text,e){return n("b-card-text",{key:e,staticClass:"white"},[t._v(t._s(text))])})),1):t._e()],1)})),1)}),[],!1,null,"1a4d6c16",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{FullImage:n(451).default})},469:function(t,e,n){"use strict";var r=n(448),l=n.n(r);e.default=l.a},518:function(t,e,n){"use strict";n.r(e);var r=n(447),l=n(468),o={name:"test",data:function(){return{}},components:{aomponent:r.default,pageHead:l.default}},c=n(79),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("aomponent")],1)}),[],!1,null,"42cbd9c8",null);e.default=component.exports}}]);