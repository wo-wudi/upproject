(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"159b":function(t,s,i){var e=i("da84"),a=i("fdbc"),r=i("17c2"),n=i("9112");for(var c in a){var o=e[c],l=o&&o.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,s,i){"use strict";var e=i("b727").forEach,a=i("a640"),r=i("ae40"),n=a("forEach"),c=r("forEach");t.exports=n&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,s,i){var e=i("d039"),a=i("b622"),r=i("2d00"),n=a("species");t.exports=function(t){return r>=51||!e((function(){var s=[],i=s.constructor={};return i[n]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},"1e4b":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"index"},[i("my-header"),i("div",{staticClass:"position-relative"},[i("el-carousel",{attrs:{height:"500px",interval:4e3}},t._l(t.carouselimages,(function(s){return i("el-carousel-item",{key:s.carouselid},[i("img",{staticClass:"w-100",attrs:{src:s.carouselpath,alt:""}}),i("div",{staticClass:"position-absolute carouseltext"},[i("div",{staticClass:"h1 text-muted"},[t._v(t._s(s.carouselinto))]),i("div",{staticClass:"h3 mt-5 text-dark"},[t._v(t._s(s.carouselsinto))])])])})),1)],1),t._m(0),t._m(1),i("div",{staticClass:"row no-gutters my-5 pl-4"},t._l(t.categorydata,(function(s){return i("div",{key:s.cateid,staticClass:"col-4"},[i("div",{staticClass:"mr-4 mb-5"},[i("div",{staticClass:"d-flex flex-column position-relative thumb_img"},[i("img",{staticClass:"w-100 bg-transparent",attrs:{src:s.cateimagepath,alt:""}}),i("div",{staticClass:"position-absolute thumb"},[i("div",{staticClass:"h5 font-weight-bold text-muted"},[t._v(t._s(s.catearticle))]),i("div",{staticClass:"text-muted small mb-3"},[t._v(t._s(s.catedetail))]),i("div",{staticClass:"a_move"},[i("span",{staticClass:"text-dark small d-block mt-4",attrs:{href:"list.html"},on:{click:function(i){return t.tolist(s.cateid)}}},[t._v(" 现在去购物 "),i("div",{staticClass:"icon bg-success text-white ml-1"},[t._v("△")])])])])])])])})),0),t._m(2),i("div",{staticClass:"my-5"},[i("el-carousel",{attrs:{interval:4e3,type:"card",height:"600px"}},t._l(t.cardimages,(function(t){return i("el-carousel-item",{key:t.imageid},[i("img",{staticClass:"w-100",attrs:{src:t.imagepath,alt:""}})])})),1)],1),t._m(3),i("div",{staticClass:"m border border-1 d-flex"},[i("div",{staticClass:"my-5 w-100 move d-flex"},t._l(t.lunboimages,(function(t){return i("div",{key:t.lunboid,staticClass:"col-3"},[i("img",{staticClass:"w-100",attrs:{src:t.lunbopath,alt:""}})])})),0)]),t._m(4),t._m(5),i("div",{staticClass:"row no-gutters mx-4"},t._l(t.discussres,(function(s){return i("div",{key:s.did,staticClass:"col-4 mt-4"},[i("div",{staticClass:"p-4 bg-light position-relative mr-3"},[i("img",{staticClass:"position-absolute w-100",staticStyle:{"z-index":"-1"},attrs:{src:"img/index/discuss/blog-1.jpg",alt:""}}),i("span",{staticClass:"mb-3 btn btn-dark btn-sm border border-0"},[i("span",[t._v(t._s(s.dscore)+"星")])]),i("div",{staticClass:"my-2 font-weight-bold"},[t._v("这是用户："+t._s(s.uname)+"的评价")]),i("div",{staticClass:"inner"},[t._v(t._s(s.dinner))]),i("div",[t._v("评论时间："+t._s(s.dtime))]),i("div",{staticClass:"a_move1 mt-3"},[i("span",{staticClass:"small w-25 d-block",on:{click:t.dis}},[t._v(" 阅读原文 ")])])])])})),0),i("my-footer")],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row no-gutters my-5 pl-4"},[i("div",{staticClass:"col-3 pr-4"},[i("div",{staticClass:"img_hover"},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"w-100",attrs:{src:"img/index/1.jpg",alt:""}})])])]),i("div",{staticClass:"col-6 pr-4"},[i("div",{staticClass:"img_hover"},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"w-100",attrs:{src:"img/index/2.jpg",alt:""}})])])]),i("div",{staticClass:"col-3 pr-4"},[i("div",{staticClass:"img_hover"},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"w-100",attrs:{src:"img/index/3.jpg",alt:""}})])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mx-4"},[i("span",{staticClass:"h4 font-weight-bold"},[t._v("人气类​​别"),i("p",{staticClass:"h6 font-weight-light text-muted mt-3"},[t._v("将热门类别添加到每周排队")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mx-4 mb-5"},[i("span",{staticClass:"h4 font-weight-bold"},[t._v("商品展示"),i("p",{staticClass:"h6 font-weight-light text-muted mt-3"},[t._v("各个类别的商品展示")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mx-4 mb-5"},[i("span",{staticClass:"h4 font-weight-bold"},[t._v("食品类"),i("p",{staticClass:"h6 font-weight-light text-muted mt-3"},[t._v("食品类产品的轮播展示")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"m-4 d"},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"w-100",attrs:{src:"img/index/4.jpg",alt:""}})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mx-4 my-5"},[i("span",{staticClass:"h4 font-weight-bold"},[t._v("最新评价"),i("p",{staticClass:"h6 font-weight-light text-muted mt-3"},[t._v("以最佳方式呈现帖子，以突出显示用户对网站使用的感受。")])])])}],r=(i("4160"),i("fb6a"),i("159b"),{mounted:function(){this.getCarouselImage(),this.getDisDate(),this.getLunboImage(),this.getCardImage(),this.getCategoryData()},data:function(){return{cardimages:[],lunboimages:[],discussres:[],carouselimages:[],categorydata:[]}},methods:{getCarouselImage:function(){var t=this;this.axios.get(this.host+"/index/i1/getcarousel").then((function(s){t.carouselimages=s.data,console.log(t.carouselimages)}))},getCategoryData:function(){var t=this;this.axios.get(this.host+"/index/i1/getcategory").then((function(s){t.categorydata=s.data}))},getCardImage:function(){var t=this;this.axios.get(this.host+"/index/i1/getcard").then((function(s){t.cardimages=s.data}))},getLunboImage:function(){var t=this;this.axios.get(this.host+"/index/i1/getlunbo").then((function(s){t.lunboimages=s.data}))},getDisDate:function(){var t=this;this.axios.get(this.host+"/discuss/d1/getdiscuss").then((function(s){var i=s.data;i.forEach((function(s){s.dtime=t.moment.unix(s.dtime/1e3).format("Y年MM月DD日HH:mm")})),t.discussres=i.slice(6,12)}))},dis:function(){this.$router.push("/discuss")},tolist:function(t){switch(t){case 1:this.$router.push("/list");break;case 2:this.$router.push("/listtwo");break;case 3:this.$router.push("/listthree");break;case 4:this.$router.push("/listfour");break;case 5:this.$router.push("/listfive");break;case 6:this.$router.push("/listsix");break}}}}),n=r,c=(i("d09b"),i("2877")),o=Object(c["a"])(n,e,a,!1,null,"a4446ca6",null);s["default"]=o.exports},"2eb5":function(t,s,i){},4160:function(t,s,i){"use strict";var e=i("23e7"),a=i("17c2");e({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,s,i){var e=i("861d"),a=i("e8b5"),r=i("b622"),n=r("species");t.exports=function(t,s){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?e(i)&&(i=i[n],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===s?0:s)}},8418:function(t,s,i){"use strict";var e=i("c04e"),a=i("9bf2"),r=i("5c6c");t.exports=function(t,s,i){var n=e(s);n in t?a.f(t,n,r(0,i)):t[n]=i}},a640:function(t,s,i){"use strict";var e=i("d039");t.exports=function(t,s){var i=[][t];return!!i&&e((function(){i.call(null,s||function(){throw 1},1)}))}},ae40:function(t,s,i){var e=i("83ab"),a=i("d039"),r=i("5135"),n=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,s){if(r(c,t))return c[t];s||(s={});var i=[][t],l=!!r(s,"ACCESSORS")&&s.ACCESSORS,u=r(s,0)?s[0]:o,d=r(s,1)?s[1]:void 0;return c[t]=!!i&&!a((function(){if(l&&!e)return!0;var t={length:-1};l?n(t,1,{enumerable:!0,get:o}):t[1]=1,i.call(t,u,d)}))}},b727:function(t,s,i){var e=i("0366"),a=i("44ad"),r=i("7b0b"),n=i("50c4"),c=i("65f0"),o=[].push,l=function(t){var s=1==t,i=2==t,l=3==t,u=4==t,d=6==t,f=7==t,h=5==t||d;return function(m,v,g,p){for(var C,b,_=r(m),x=a(_),y=e(v,g,3),w=n(x.length),S=0,L=p||c,k=s?L(m,w):i||f?L(m,0):void 0;w>S;S++)if((h||S in x)&&(C=x[S],b=y(C,S,_),t))if(s)k[S]=b;else if(b)switch(t){case 3:return!0;case 5:return C;case 6:return S;case 2:o.call(k,C)}else switch(t){case 4:return!1;case 7:o.call(k,C)}return d?-1:l||u?u:k}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d09b:function(t,s,i){"use strict";i("2eb5")},e8b5:function(t,s,i){var e=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},fb6a:function(t,s,i){"use strict";var e=i("23e7"),a=i("861d"),r=i("e8b5"),n=i("23cb"),c=i("50c4"),o=i("fc6a"),l=i("8418"),u=i("b622"),d=i("1dde"),f=i("ae40"),h=d("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,p=Math.max;e({target:"Array",proto:!0,forced:!h||!m},{slice:function(t,s){var i,e,u,d=o(this),f=c(d.length),h=n(t,f),m=n(void 0===s?f:s,f);if(r(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?a(i)&&(i=i[v],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return g.call(d,h,m);for(e=new(void 0===i?Array:i)(p(m-h,0)),u=0;h<m;h++,u++)h in d&&l(e,u,d[h]);return e.length=u,e}})},fdbc:function(t,s){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=index.f120cfed.js.map