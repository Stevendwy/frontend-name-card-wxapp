(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"JO/b":function(e,t,a){"use strict";(function(e){var o=d(a("mvHQ")),n=d(a("Zx67")),l=d(a("kiBT")),s=d(a("OvRC")),i=d(a("pFYg")),r=d(a("C4MV")),c=d(a("woOf"));function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CoverDel=t.EachShop=t.ShopList=t.ShopCollection=t.TotopAndCart=t.default=void 0;var u=c.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},h=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),f=a("U7vG"),p=_(f),m=a("Zfgq"),g=a("d2xe"),v=_(a("4GUf")),y=_(a("qAHI")),C=a("Hl9d"),E=a("5qLU");a("TLE5");a("OMJi");function _(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,s.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(l.default?(0,l.default)(e,t):e.__proto__=t)}var N={shopCollectionRemove:{url:E.WXAPI+"/user/removeShopCollection"}},b=function(t){function a(){var t,o,l;k(this,a);for(var s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];return o=l=S(this,(t=a.__proto__||(0,n.default)(a)).call.apply(t,[this].concat(i))),l.getData=function(t){var a=l;l.setState({update:!1,page:2}),e.ajax({url:"/wxapi/collection.api",type:"GET",data:{pages:1,is_used:t},success:function(e){401!==e.biz_code?200===e.code&&!0===e.status?a.setState({dataList:e.data.item_list,update:!0,hasMore:e.data.item_list.length>=18}):v.default.MsgTip({msg:e.msg}):m.browserHistory.replace("/login?redirect_uri=%2FmyCollectlion")},error:function(e){v.default.MsgTip({msg:"服务器繁忙"})}})},l.addData=function(t){var a=l;l.setState({sending:!0}),e.ajax({url:"/wxapi/collection.api",type:"GET",data:{pages:l.state.page,is_used:t},success:function(e){200===e.code&&!0===e.status?e.data?a.setState({dataList:a.state.dataList.concat(e.data.item_list),page:a.state.page+1,hasMore:e.data.item_list.length>=18,sending:!1}):a.setState({hasMore:!1,sending:!1}):(v.default.MsgTip({msg:e.msg}),a.setState({sending:!1}))},error:function(e){v.default.MsgTip({msg:"服务器繁忙"}),a.setState({sending:!1})}})},l.changeCover1=function(){l.setState({cover1:!l.state.cover1})},l.changeCover2=function(){l.setState({cover2:!1})},l.changeType=function(e){l.setState({isUsed:e}),l.getData(e)},l.changeEdit=function(){l.setState({edit:!l.state.edit,cover1:!1,isChooseAll:!1})},l.del=function(){var t=e(".del-choose");t.length?l.setState({cover2:!0,delCount:t.length}):v.default.MsgTip({msg:"请选择要移除的商品"})},l.changeChooseAll=function(){l.setState({isChooseAll:!l.state.isChooseAll}),l.state.isChooseAll?e(".del").removeClass("del-choose"):e(".del").addClass("del-choose")},l.chooseAllFalse=function(){l.setState({isChooseAll:!1})},l.changeChooseAll2=function(e){l.setState({isChooseAll:e})},l.commodityHandle=function(){l.setState({selectGoods:!0})},l.shopHandle=function(){l.setState({selectGoods:!1})},S(l,o)}return w(a,f.Component),h(a,[{key:"componentWillMount",value:function(){this.setState({cover1:!1,cover2:!1,edit:!1,dataList:[],update:!1,page:2,hasMore:!0,sending:!1,delCount:1,isUsed:"all",isChooseAll:!1,selectGoods:!0}),document.title="我的收藏"}},{key:"componentDidMount",value:function(){e(this.refs.collection).css({minHeight:e(window).height(),background:"#f4f4f4"}),this.getData("all")}},{key:"render",value:function(){var e=this.state,t=e.isUsed,a=e.edit,o=e.dataList,n=e.hasMore,l=e.sending,s=e.delCount,i=e.isChooseAll,r=e.cover1,c=e.cover2,d=e.update,u=e.selectGoods;return p.default.createElement("div",{"data-page":"my-collection"},p.default.createElement("section",{id:"my-collection",ref:"collection"},p.default.createElement("div",{className:"nav"},p.default.createElement("div",{className:"collect-type",onClick:this.commodityHandle},p.default.createElement("span",{className:u?"selected":""},"商品收藏")),p.default.createElement("div",{className:"split-line"}),p.default.createElement("div",{className:"collect-type",onClick:this.shopHandle},p.default.createElement("span",{className:u?"":"selected"},"店铺关注"))),u?d?p.default.createElement("div",null,p.default.createElement("div",{className:"edit c-fs14"},p.default.createElement("div",{className:"choose c-pr",onClick:a?"":this.changeCover1},a?p.default.createElement("img",{onClick:this.changeChooseAll,className:"chooseAll",src:"src/img/addressAndIdentityInfo/"+(i?"trChoose":"trUnChoose")+".png"}):"",a?"批量删除宝贝":"all"===t?"全部宝贝":"失效宝贝",a?"":p.default.createElement("span",{className:"open"})),p.default.createElement("div",{className:"edit-btn "+(a||o.length?"":"c-cc9"),onClick:a||o.length?this.changeEdit:""},a?"完成":"编辑")),o.length?p.default.createElement(L,{changeChooseAll2:this.changeChooseAll2,edit:a,isUsed:t,hasMore:n,sending:l,data:o,addData:this.addData}):p.default.createElement(D,{isUsed:t}),a&&o.length?p.default.createElement("div",{onClick:this.del,className:"del-btn c-fs16"},"移除收藏夹"):"",r?p.default.createElement(A,{isUsed:t,fn1:this.changeCover1,fnT:this.changeType}):"",c?p.default.createElement(M,{chooseAllFalse:this.chooseAllFalse,fn2:this.changeCover2,getData:this.getData,delCount:s}):"",p.default.createElement(U,null)):p.default.createElement(g.LoadingRound,null):p.default.createElement(F,null)))}}]),a}();t.default=b;var D=function(t){function a(){return k(this,a),S(this,(a.__proto__||(0,n.default)(a)).apply(this,arguments))}return w(a,f.Component),h(a,[{key:"componentDidMount",value:function(){e(this.refs.empty).css({minHeight:e(window).height()})}},{key:"render",value:function(){var e=this.props.isUsed;return p.default.createElement("div",{className:"empty",ref:"empty"},p.default.createElement("img",{src:"all"===e?"src/img/logistics/empty.png":"src/img/logistics/empty2.png"}),p.default.createElement("a",{onClick:function(e){e.preventDefault(),(0,C.miniProgramLogin)()}},"去逛逛"))}}]),a}(),A=function(t){function a(){var t,o,l;k(this,a);for(var s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];return o=l=S(this,(t=a.__proto__||(0,n.default)(a)).call.apply(t,[this].concat(i))),l.changeList=function(t){var a=l.props,o=a.fn1,n=a.fnT,s=t.target;e(s).children().length||n(e(s).attr("id"));o()},S(l,o)}return w(a,f.Component),h(a,[{key:"render",value:function(){var e=this.props.isUsed;return p.default.createElement("div",{className:"cover1",onClick:this.changeList},p.default.createElement("ul",{className:"choose-type c-fs14"},p.default.createElement("li",{id:"all",className:"all"===e?"chose":""},"全部宝贝"),p.default.createElement("li",{id:"invalid",className:"all"===e?"":"chose"},"失效宝贝")))}}]),a}(),M=function(t){function a(){var t,o,l;k(this,a);for(var s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];return o=l=S(this,(t=a.__proto__||(0,n.default)(a)).call.apply(t,[this].concat(i))),l.changeList=function(t){var a=l.props,o=a.fn2,n=a.getData,s=a.chooseAllFalse,i=t.target;if(!e(i).children().length&&"del"===e(i).attr("id")){for(var r=[],c=e(".del-choose"),d=c.length,u=0;u<d;u++)r.push(c.eq(u).attr("id"));e.ajax({url:"/wxapi/collection-remove.api",data:{item_id:r},type:"GET",success:function(t){v.default.MsgTip({msg:t.msg}),e(".del-choose").removeClass("del-choose");var a=e(".list").attr("id");s(),n(a)},error:function(e){v.default.MsgTip({msg:"服务器繁忙"})}})}o()},S(l,o)}return w(a,f.Component),h(a,[{key:"render",value:function(){return p.default.createElement("div",{className:"cover2",onClick:this.changeList},p.default.createElement("ul",{className:"choose-todo c-fs16"},p.default.createElement("li",{id:"del",className:"chose"},"确定移除",this.props.delCount,"个宝贝"),p.default.createElement("li",{id:"cancel"},"取消")))}}]),a}(),L=function(t){function a(){return k(this,a),S(this,(a.__proto__||(0,n.default)(a)).apply(this,arguments))}return w(a,f.Component),h(a,[{key:"componentWillUnmount",value:function(){e(window).unbind("scroll.get")}},{key:"componentDidMount",value:function(){var t=this.props.addData;e(window).bind("scroll.get",function(){if(e(this).scrollTop()>=e(".list").height()-e(window).height()&&"下拉加载更多"===e(".more").html()){var a=e(".list").attr("id");t(a)}})}},{key:"render",value:function(){var e=this.props,t=e.edit,a=e.data,o=e.hasMore,n=e.sending,l=e.changeChooseAll2,s=a.map(function(e,a){return p.default.createElement(T,{key:a,data:e,edit:t,changeChooseAll2:l})});return p.default.createElement("div",{className:"list",id:this.props.isUsed},s,p.default.createElement("div",{className:"more"},o?n?"加载中...":"下拉加载更多":"别拉了，我是有底线的~"))}}]),a}(),T=function(t){function a(){var t,o,l;k(this,a);for(var s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];return o=l=S(this,(t=a.__proto__||(0,n.default)(a)).call.apply(t,[this].concat(i))),l.changeChoose=function(t){var a=l.props.changeChooseAll2,o=e(t.target);o.hasClass("del-choose")?o.removeClass("del-choose"):o.addClass("del-choose"),a(e(".del").length===e(".del-choose").length)},S(l,o)}return w(a,f.Component),h(a,[{key:"render",value:function(){var e=this.props,t=e.edit,a=e.data,o={Bonded:"跨境保税",Direct:"海外直邮"};return p.default.createElement("div",{className:"goods"},t?p.default.createElement("div",{id:a.item_id,onClick:this.changeChoose,className:"del c-fl"}):"",p.default.createElement(m.Link,{to:"/item?item_id="+a.item_id},p.default.createElement("div",{className:"goods-img c-pr"},p.default.createElement("img",{src:a.image_default_id?a.image_default_id:"src/img/evaluate/goodsbg.png"}),a.is_used?"":p.default.createElement("div",{className:"Invalid c-fs12 c-lh20 c-cfff c-tc"},"失效"))),p.default.createElement("div",{className:"goods-msg c-fl "+(t?"goods-msg2":"")},p.default.createElement("div",{className:"title"},p.default.createElement("ul",{className:"label c-clrfix"},a.is_company?p.default.createElement("li",null,"企业购"):"",o[a.trade_type]?p.default.createElement("li",{style:{background:{Bonded:"#27a1e5",Direct:"#fbb80f"}[a.trade_type]}},o[a.trade_type]):""),p.default.createElement(m.Link,{to:"/item?item_id="+a.item_id},p.default.createElement("div",{className:"goods-title c-fs14"},a.goods_name))),p.default.createElement("p",{className:"price c-cdred c-fs12"},"¥",p.default.createElement("span",{className:"c-fs15 c-fb"},a.goods_price))))}}]),a}(),U=t.TotopAndCart=function(t){function a(){return k(this,a),S(this,(a.__proto__||(0,n.default)(a)).apply(this,arguments))}return w(a,f.Component),h(a,[{key:"componentWillUnmount",value:function(){e(window).unbind("scroll.top")}},{key:"componentWillMount",value:function(){this.setState({count:0})}},{key:"componentDidMount",value:function(){var t=e(window),a=(t.height(),e(".toTop")),o=void 0;a.on("click",function(){clearInterval(o);var e=t.scrollTop();o=setInterval(function(){e-=20,t.scrollTop(e),e<=0&&clearInterval(o)},1)}),e(window).bind("scroll.top",function(){e(this).scrollTop()>35?a.show():a.hide()});var n=this;e.ajax({url:"/wxapi/getCartCount.api",type:"GET",success:function(e){200===e.code&&!0===e.status?n.setState({count:e.data.cart_num}):v.default.MsgTip({msg:e.msg})}})}},{key:"render",value:function(){var e=this.state.count;return p.default.createElement("div",{className:"cart-toTop"},p.default.createElement("ul",null,p.default.createElement("a",{onClick:function(e){e.preventDefault(),(0,C.miniProgramShopCart)()}},p.default.createElement("li",{className:"cart"},e?p.default.createElement("span",{className:"cart-count"},e):"")),p.default.createElement("li",{className:"toTop"})))}}]),a}(),F=t.ShopCollection=function(t){function a(t){k(this,a);var o=S(this,(a.__proto__||(0,n.default)(a)).call(this,t));return o.getShopData=function(){var e=o;y.default.request("/ncxcx/user/getShopCollectionList?page=1").then(function(t){var a=t.data;0===a.code&&e.setState({update:!0,count:a.data.count,shopList:a.data.data})}).catch(function(e){console.log(e)})},o.addShopData=function(){o.setState({sending:!0});var e=o.state,t=e.page,a=e.shopList,n=o;y.default.request("/ncxcx/user/getShopCollectionList?page="+t++).then(function(e){var o=e.data;0===o.code?o.data.data.length?n.setState({shopList:a.concat(o.data.data),page:t,hasMore:o.data.page.current_page<o.data.page.total_page,sending:!1}):n.setState({hasMore:!1,sending:!1}):(v.default.MsgTip({msg:o.msg}),n.setState({sending:!1}))}).catch(function(e){console.log(e),v.default.MsgTip({msg:"服务器繁忙"}),n.setState({sending:!1})})},o.changeChooseAll=function(){o.setState({isChooseAll:!o.state.isChooseAll}),o.state.isChooseAll?e(".del").removeClass("del-choose"):e(".del").addClass("del-choose")},o.chooseAllFalse=function(){o.setState({isChooseAll:!1})},o.changeChooseAll2=function(e){o.setState({isChooseAll:e})},o.changeShopEdit=function(){o.setState({shopEdit:!o.state.shopEdit,isChooseAll:!1})},o.changeCover2=function(){o.setState({coverDel:!1})},o.del=function(){e(".del-choose").length?o.setState({coverDel:!0}):v.default.MsgTip({msg:"请选择要取消的店铺"})},o.state={update:!1,count:0,shopEdit:!1,isChooseAll:!1,shopList:[],coverDel:!1,page:2,hasMore:!0,sending:!1},o}return w(a,f.Component),h(a,[{key:"componentWillMount",value:function(){this.getShopData()}},{key:"componentWillUnmount",value:function(){e(window).unbind("scroll.get")}},{key:"componentDidMount",value:function(){var t=this;e(window).bind("scroll.get",function(){e(this).scrollTop()>=e(".list").height()-e(window).height()&&"下拉加载更多"===e(".no-more-shop").html()&&t.addShopData()})}},{key:"render",value:function(){var e=this.state,t=e.update,a=e.count,o=e.shopList,n=e.shopEdit,l=e.coverDel,s=e.isChooseAll,i=e.hasMore,r=e.sending;return t?p.default.createElement("div",null,p.default.createElement("div",{className:"edit c-fs14 "+(a?"":"c-dpno")},p.default.createElement("div",{className:"choose c-pr",onClick:n?"":this.changeCover1},n?p.default.createElement("img",{onClick:this.changeChooseAll,className:"chooseAll",src:"src/img/addressAndIdentityInfo/"+(s?"trChoose":"trUnChoose")+".png"}):"",n?"批量取消关注":"全部店铺("+a+")"),p.default.createElement("div",{className:"edit-btn",onClick:this.changeShopEdit},n?"完成":"编辑")),o.length>0?p.default.createElement(O,{shopList:o,shopEdit:n,changeChooseAll2:this.changeChooseAll2}):p.default.createElement(g.EmptyPage,{config:{msg:"您还没有关注任何店铺~",btnText:"去商城逛逛",link:"/homeIndex",bgImgUrl:"/src/img/collect/no-shop.png"}}),o.length<7?"":p.default.createElement("div",{className:"no-more-shop"},i?r?"加载中...":"下拉加载更多":"别拉了，我是有底线的~"),n&&a?p.default.createElement("div",{className:"del-btn c-fs16",onClick:this.del},"取消关注"):"",l?p.default.createElement(H,{chooseAllFalse:this.chooseAllFalse,fn2:this.changeCover2,getShopData:this.getShopData}):""):p.default.createElement(g.LoadingRound,null)}}]),a}(),O=t.ShopList=function(e){function t(){return k(this,t),S(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return w(t,f.Component),h(t,[{key:"render",value:function(){var e=this.props,t=e.shopList,a=e.shopEdit,o=e.changeChooseAll2;return p.default.createElement("div",{className:"shop-list"},t.map(function(e,t){return p.default.createElement(x,{key:t,item:e,shopEdit:a,changeChooseAll2:o})}))}}]),t}(),x=t.EachShop=function(t){function a(){var t,o,l;k(this,a);for(var s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];return o=l=S(this,(t=a.__proto__||(0,n.default)(a)).call.apply(t,[this].concat(i))),l.changeChoose=function(t){var a=l.props.changeChooseAll2,o=e(t.target);o.hasClass("del-choose")?o.removeClass("del-choose"):o.addClass("del-choose"),a(e(".del").length===e(".del-choose").length)},l.linkTo=function(){var e=l.props.item;if(1!==e.open_state)return!1;m.browserHistory.push("/store/home?shop="+e.shop_id)},S(l,o)}return w(a,f.Component),h(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.shopEdit;return p.default.createElement("div",{className:"shop-info"},a&&p.default.createElement("div",{id:t.shop_id,onClick:this.changeChoose,className:"del c-fl"}),p.default.createElement(m.Link,{onClick:this.linkTo},p.default.createElement("div",{className:"shop-detail "+(a?"shop-detail2":"")},p.default.createElement("div",{className:"shop-logo"},p.default.createElement("img",{src:t.shop_logo?t.shop_logo:"src/img/evaluate/goodsbg.png"})),p.default.createElement("div",{className:"text-wrap"},p.default.createElement("p",{className:"title"},t.shop_alias?t.shop_alias:t.shop_name),p.default.createElement("p",{className:"sub-title"},"泰然城精选商家 服务保障"))),p.default.createElement("img",{className:"arrow-right",src:"src/img/collect/arrow-right.png"})))}}]),a}(),H=t.CoverDel=function(t){function a(){var t,l,s;k(this,a);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return l=s=S(this,(t=a.__proto__||(0,n.default)(a)).call.apply(t,[this].concat(r))),s.changeList=function(t){var a=s.props,n=a.fn2,l=a.getShopData,i=a.chooseAllFalse,r=t.target;if(!e(r).children().length&&"del"===e(r).attr("id")){for(var c=[],d=e(".del-choose"),h=d.length,f=0;f<h;f++)c.push(d.eq(f).attr("id"));y.default.request(u({},N.shopCollectionRemove,{params:{shop_id:(0,o.default)(c)}})).then(function(t){t.data;v.default.MsgTip({msg:"取消成功"}),e(".del-choose").removeClass("del-choose");e(".list").attr("id");i(),l()}).catch(function(e){v.default.MsgTip({msg:"服务器繁忙"})})}n()},S(s,l)}return w(a,f.Component),h(a,[{key:"render",value:function(){return p.default.createElement("div",{className:"cover2",onClick:this.changeList},p.default.createElement("ul",{className:"choose-todo c-fs16"},p.default.createElement("li",{id:"del",className:"chose"},"取消关注"),p.default.createElement("li",{id:"cancel"},"取消")))}}]),a}()}).call(this,a("OOjC"))},TLE5:function(e,t,a){},tnFR:function(e,t,a){"use strict";(function(e){var o=u(a("Zx67")),n=u(a("kiBT")),l=u(a("OvRC")),s=u(a("C4MV")),i=u(a("Zzip")),r=u(a("pFYg")),c=u(a("5QVw")),d=u(a("woOf"));function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ManageGoods=void 0;var h,f=d.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},p="function"==typeof c.default&&"symbol"===(0,r.default)(i.default)?function(e){return void 0===e?"undefined":(0,r.default)(e)}:function(e){return e&&"function"==typeof c.default&&e.constructor===c.default&&e!==c.default.prototype?"symbol":void 0===e?"undefined":(0,r.default)(e)},m=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s.default)(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();t.goodCollectionState=z,t.goodCollectionDispatch=V;var g=a("U7vG"),v=U(g),y=(U(a("O27J")),a("4n+p")),C=a("Zfgq"),E=T(a("P9l9")),_=(T(a("8obM")),a("d2xe")),k=a("f2Hk"),S=a("zpSi"),w=a("fw66"),N=U(a("BYKG"));a("HRAo");var b=U(a("6YRh")),D=a("f2t5"),A=a("qeJi"),M=U(a("4GUf")),L=(a("5qLU"),a("JO/b"));function T(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function U(e){return e&&e.__esModule?e:{default:e}}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,r.default)(t))&&"function"!=typeof t?e:t}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,r.default)(t)));e.prototype=(0,l.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(n.default?(0,n.default)(e,t):e.__proto__=t)}var H=(0,k.concatPageAndType)("goodCollection"),j=E,P={searchKey:"key",category_id:"category_id",page:"page",condition:"condition"},G=function(t){function a(e,t){F(this,a);var n=O(this,(a.__proto__||(0,o.default)(a)).call(this,e));return document.title="我的收藏",n.state={topButtonState:!1},n}return x(a,g.Component),m(a,[{key:"componentWillMount",value:function(){if(this.props.setFilterUpdate(!1),"item"!=this.props.from){var e=this.props.location.query,t=e.key,a=e.category_id,o={searchKey:t=void 0!==t?decodeURIComponent(t):"",category_id:void 0!==a?Number(a):"",condition:"",page:1};this.props.dispatch(H("setSearch",{searchData:o}))}else this.props.setFrom("")}},{key:"componentWillReceiveProps",value:function(e){if(e.goodListUpdate||this.props.searchData!==e.searchData){var t=(0,d.default)({},e.searchData,{searchKey:e.searchData.searchKey}),a=e.init;this.props.filterUpdate;this.changeUrl(e.searchData),this.props.setData(t,a,!0),this.props.setGoodListUpdate(!1),this.props.dispatch(H("noSave",{noSave:!1})),this.props.dispatch(H("defaultNoSave",{defaultNoSave:!1}))}}},{key:"componentDidMount",value:function(){var t=this,a=Math.max(this.props.windowHeight,e(window).height());e(window).scroll(function(){var o=e(window).scrollTop();t.state.topButtonState!==o>a&&t.setState({topButtonState:o>a})}),this.props.windowHeight<e(window).height()&&this.props.setWindowHeight(e(window).height())}},{key:"componentDidUpdate",value:function(){b.default.init({offset:e(window).height(),throttle:1e3})}},{key:"componentWillUnmount",value:function(){this.props.setFilterUpdate(!0),e("body").css({overflowY:"",position:"static"}),e(window).unbind("scroll")}},{key:"changeUrl",value:function(e){var t="",a=location.href.split("?")[0];for(var o in e)e.hasOwnProperty(o)&&e[o]&&(t+="&"+P[o]+"="+("service"==o?this.formatSearchData(e[o]):e[o]));history.replaceState({},null,a+"?"+t.substr(1))}},{key:"formatSearchData",value:function(e){var t="",a={};if("object"==(void 0===e?"undefined":p(e))){for(var o in e)e.hasOwnProperty(o)&&(t+=e[o]?o+",":"");return t.substr(0,t.length-1)}if("string"==typeof e){for(var n=e.split(","),l=0;l<n.length;l++)a[n[l]]=1;return a}}},{key:"dropDown",value:function(e){var t=this.props,a=t.searchData,o=t.dispatch,n=t.currentPage,l=t.totalPage,s=t.load,i=t.goodsList;if(!s||!i||n>=l)return e.lock(),e.noData(),void e.resetload();(a=N.default.fromJS(a).toJS()).page=n+1,j.collection(a).then(function(t){if(0!=t.data.code)return e.lock(),e.noData(),void e.resetload();o(H("concatData",{result:t.data})),o(H("setCurrentPage",{current:n+1})),e.resetload();var a=t.data.data.page;a.current_page>=a.total_page&&(e.lock(),e.noData(),e.resetload())}).catch(function(t){console.error(t),e.resetload()})}},{key:"render",value:function(){var e=this.props,t=e.errorState,a=e.load,o=e.init,n=e.defaultNoSave,l=e.noSave,s=(e.categoriesList,e.goodsList),i=e.setFrom,r=e.setNav,c=e.nav,d=e.manage,u=e.DisGoods,h=e.toggleManage,f=e.changeChooseAll,p=e.ifChooseAll,m=e.delCount,g=e.toggleshady,y=e.shady,C=e.toggledelCount,E=(e.searchData,e.setGoodListUpdate);return o?"collection"==c?v.default.createElement("div",{id:"goodCollection","data-page":"good-collection-page",style:{minHeight:this.props.windowHeight}},D.hideFlag&&v.default.createElement(I,{setNav:r,nav:c}),v.default.createElement(B,this.props),t?v.default.createElement(_.NetError,null):a?l?v.default.createElement("div",null,n?v.default.createElement(_.EmptyPage,{config:{msg:"暂无收藏任何商品~",btnText:"去商城逛逛",link:"",bgImgUrl:"/src/img/collect/trcNOcollection.png"}}):v.default.createElement(_.FilterNone,null)):v.default.createElement("div",{className:"goodWrap"},v.default.createElement(W,{goodsList:s,setFrom:i,scrollArea:window,dropDown:this.dropDown.bind(this),manage:d,changeChooseAll:f,ifChooseAll:p}),v.default.createElement(K,{manage:d,toggleManage:h,DisGoods:u,ifChooseAll:p,changeChooseAll:f,delCount:m,shady:y,toggleshady:g,toggledelCount:C,setGoodListUpdate:E})):v.default.createElement(_.LoadingRound,null),v.default.createElement(J,{topButtonState:this.state.topButtonState})):v.default.createElement("div",null,v.default.createElement("div",{id:"goodCollection","data-page":"good-collection-page",style:{minHeight:this.props.windowHeight}},v.default.createElement(I,{setNav:r,nav:c}),v.default.createElement(L.ShopCollection,null))):v.default.createElement(_.LoadingRound,null)}}]),a}(),I=function(e){function t(){return F(this,t),O(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return x(t,g.Component),m(t,[{key:"render",value:function(){var e=this.props,t=e.setNav,a=e.nav;return v.default.createElement("div",{className:"leaderNav"},v.default.createElement("ul",null,v.default.createElement("li",{className:"collection"==a?"activeNav":"",onClick:t.bind(this,"collection")},v.default.createElement("span",null,"商品收藏")),v.default.createElement("li",{className:"store"==a?"activeNav":"",onClick:t.bind(this,"store")},v.default.createElement("span",null,"店铺关注"))))}}]),t}(),B=function(e){function t(){return F(this,t),O(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return x(t,g.Component),m(t,[{key:"render",value:function(){var e=this.props,t=e.setSearch,a=e.setData,o=e.toggleQuickSelect,n=e.searchData,l=e.categoriesList,s=e.errorState,i=e.isQuickSelect,r=e.toggleManage,c=e.changeChooseAll,d=e.defaultNoSave,u=!s&&l&&l.length&&!d;return v.default.createElement("div",{className:"filter-condition",ref:"filterCondition"},u?v.default.createElement(Q,{setSearch:t,setData:a,toggleQuickSelect:o,searchData:n,categoriesList:l,isQuickSelect:i,toggleManage:r,changeChooseAll:c}):"")}}]),t}(),Q=function(t){function a(e){F(this,a);var t=O(this,(a.__proto__||(0,o.default)(a)).call(this,e));return t.state={},t.quickFilter=[{name:"默认",type:"",style:"click"},{name:"促销",type:"promotion",style:"click"},{name:"有货",type:"available",style:"click"},{name:"分类",type:"category_id",style:"select"}],t}return x(a,g.Component),m(a,[{key:"stopSelect",value:function(){this.props.toggleQuickSelect(!1)}},{key:"filterClick",value:function(e,t){if("click"==t)this.props.toggleQuickSelect(!1),this.props.setSearch({condition:e});else if("select"==t){var a=this.props.isQuickSelect;this.state.type==e?this.props.toggleQuickSelect(!a):(this.setState({type:e}),this.props.toggleQuickSelect(!0))}}},{key:"isActive",value:function(e,t){var a=!1;return"click"==t?a=this.props.searchData.condition==e:"select"==t&&(a=this.props.searchData[e]),!!a}},{key:"isSelect",value:function(e,t){var a=!1;return"select"==t&&e==this.state.type&&this.props.isQuickSelect&&(a=!0),a}},{key:"showChooseItem",value:function(e){var t=this.props,a=t.searchData,o=t.categoriesList,n=a[e].toString().split(","),l=[];if("category_id"!=e)return console.log("error"),0;for(var s=0;s<o.length;s++){var i=this.getNameById(o[s],n,e);i&&l.push(i)}return l.join(",")}},{key:"getNameById",value:function(e,t,a){for(var o=0;o<t.length;o++){if("category_id"!=a)return console.log("error"),"";if(t[o]==e.category_id)return e.category_name}}},{key:"getQuickFilter",value:function(){var e=this;return this.quickFilter.map(function(t,a){var o=e.isActive(t.type,t.style),n=e.isSelect(t.type,t.style);return v.default.createElement("li",{key:a,className:n?"select":o?"click"==t.style?"active":"select-active":"",onClick:function(a){e.filterClick(t.type,t.style),e.props.changeChooseAll(!1),e.props.toggleManage(!1)}},v.default.createElement("div",null,v.default.createElement("span",null,"select"==t.style&&!n&&o?e.showChooseItem(t.type):t.name),"select"!=t.style||!n&&(n||o)?"":v.default.createElement("i",{className:n?"arrow-top-black-icon":"arrow-btm-black-icon"})))})}},{key:"preventScroll",value:function(t){t?e("body").css({overflowY:"hidden",position:"fixed"}):e("body").css({overflowY:"",position:"static"})}},{key:"render",value:function(){var e=this.props.isQuickSelect,t=this.props,a=t.categoriesList,o=t.searchData,n=t.setSearch,l=t.toggleQuickSelect;return this.preventScroll(e),v.default.createElement("div",{className:"quick-filter"},v.default.createElement("ul",{className:"filter-list"},this.getQuickFilter()),e?v.default.createElement(q,{setSearch:n,categoriesList:a,type:this.state.type,searchData:o,stopSelect:this.stopSelect.bind(this)}):"",e?v.default.createElement(_.Shady,{options:{zIndex:-1},clickHandle:function(){l(!1)}}):"")}}]),a}(),q=function(e){function t(e){F(this,t);var a=O(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.state={list:{}},a}return x(t,g.Component),m(t,[{key:"componentWillMount",value:function(){this.initSelect(this.props.type)}},{key:"componentWillReceiveProps",value:function(e){this.props.type!=e.type&&this.initSelect(e.type)}},{key:"componentWillUnmount",value:function(){this.props.stopSelect()}},{key:"selectFilter",value:function(e){var t=this.state.list;(t=t[e]?t:{})[e]=!t[e],this.setState({list:t},function(){this.ensureSelect()})}},{key:"initSelect",value:function(e){var t={},a=[];for(var o in"category_id"==e&&this.props.searchData.category_id&&(a=this.props.searchData.category_id.toString().split(",")),a)a.hasOwnProperty(o)&&(t[a[o]]=!0);this.setState({list:t})}},{key:"resetSelect",value:function(){this.setState({list:{}})}},{key:"ensureSelect",value:function(){var e,t,a,o,n=this.state.list,l=this.props,i=l.setSearch,r=l.type,c=[];for(var d in n)n.hasOwnProperty(d)&&n[d]&&c.push(d);e=c.join(","),i((o=e,(a=r)in(t={})?(0,s.default)(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t)),this.props.stopSelect()}},{key:"getFilterList",value:function(){var e=this.props,t=e.categoriesList,a=this,o="";return"category_id"==e.type&&(o=t.map(function(e,t){return v.default.createElement("li",{key:t,onClick:a.selectFilter.bind(a,e.category_id,e.category_name)},v.default.createElement("div",{className:a.state.list[e.category_id]?"choose":""},e.category_name))})),o}},{key:"render",value:function(){return v.default.createElement("div",{className:"quick-filter-select"},v.default.createElement("ul",{className:"select-list"},this.getFilterList()))}}]),t}(),W=(0,S.DropDownLoad)(h=function(t){function a(){return F(this,a),O(this,(a.__proto__||(0,o.default)(a)).apply(this,arguments))}return x(a,g.Component),m(a,[{key:"setMinListHeight",value:function(){document.getElementsByClassName("goods-list")[0].style.minHeight=e(window).height()-85+"px",document.getElementsByClassName("goods-list")[0].minHeight=e(window).height()-85+"px"}},{key:"componentDidMount",value:function(){this.setMinListHeight()}},{key:"render",value:function(){var e=this.props,t=e.goodsList,a=e.setFrom,o=e.manage,n=e.changeChooseAll,l=e.ifChooseAll;return v.default.createElement("div",{className:"goods-list style2"},t.map(function(e,t){return v.default.createElement(R,{key:t,data:e,index:t,setFrom:a,manage:o,changeChooseAll:n,ifChooseAll:l})}))}}]),a}())||h,R=function(t){function a(t){F(this,a);var n=O(this,(a.__proto__||(0,o.default)(a)).call(this,t));return n.changeChoose=function(t){var a=n.props.changeChooseAll,o=e(t.target),l=o.siblings(".shadyUnselect");l.hasClass("del-choose")?(l.removeClass("del-choose"),o.removeClass("del-shady")):(l.addClass("del-choose"),o.addClass("del-shady")),a(e(".good-item").length===e(".del-choose").length)},n.tradeTypeObj={Domestic:{name:"国内贸易",style:"hide-tag"},Overseas:{name:"海外直邮",style:"yellow-tag"},Bonded:{name:"跨境保税",style:"blue-tag"},Direct:{name:"海外直邮",style:"yellow-tag"}},n}return x(a,g.Component),m(a,[{key:"componentDidMount",value:function(){var t=this.props,a=t.manage,o=t.ifChooseAll;a&&o?(e(".shadyUnselect").addClass("del-choose"),e(".manageShady").addClass("del-shady")):(e(".shadyUnselect").removeClass("del-choose"),e(".manageShady").removeClass("del-shady"))}},{key:"showPromotionDetail",value:function(e){return e.map(function(e,t){return v.default.createElement("span",{className:"promotion-tag",key:t},e)})}},{key:"showCountDetail",value:function(e){return v.default.createElement("span",{className:"tips"},"仅剩",e,"件")}},{key:"showPriceDetail",value:function(e){return v.default.createElement("span",{className:"tips"},"比收藏时降价￥",(0,A.trimZero)(e))}},{key:"showTopTagsByLevel",value:function(e){var t="";return(t=e?e.is_new_group?"新人团":e.is_hot?"热销":e.is_new?"新品":"":"")?v.default.createElement("span",{className:"new-hot-tag"},t):""}},{key:"render",value:function(){var e=this.props.data,t=e.item_id,a=e.primary_image,o=e.title,n=e.sell_price,l=(e.old_price,e.item_tag),s=e.trade_type,i=e.promotion_detail,r=e.status,c=e.store,d=e.price_diff,u=e.deleted_at,h=30===r&&c.real>0,f=c.real,p=10==s?"Domestic":20==s?"Overseas":30==s?"Bonded":40==s?"Direct":"",m=i.promotion_tags?i.promotion_tags:"",g=i.promotion_price?i.promotion_price:n,y=this.props.manage;return v.default.createElement("div",{className:"good-item",onClick:this.props.setFrom.bind(this,"item"),id:t},v.default.createElement(C.Link,{to:"/item?item_id="+t},v.default.createElement("div",{className:"good-image"},v.default.createElement("img",{className:"primary-image","data-echo":a?a+"_m.jpg":"/src/img/search/no-goods-image.png",src:"/src/img/icon/loading/default-watermark.png"}),h&&!u?"":v.default.createElement("img",{className:"no-goods-count-image",src:"/src/img/search/no-goods-count.png"}),h&&!u&&d>0?d>0?this.showPriceDetail(d):"":h&&!u&&f<=5?this.showCountDetail(f):""),v.default.createElement("div",{className:"good-content"},v.default.createElement("div",{className:"good-title"},o),v.default.createElement("div",{className:"good-price"},v.default.createElement("span",{className:"sell-price"},v.default.createElement("span",{className:"money-icon"},"￥"),(0,A.trimZero)(g))),v.default.createElement("div",{className:"good-bottom-tag"},p?v.default.createElement("span",{className:"trade-tag "+this.tradeTypeObj[p].style},this.tradeTypeObj[p].name):"",h&&!u&&m&&m.length?this.showPromotionDetail(m):"")),l&&v.default.createElement("div",{className:"good-top-tag"},v.default.createElement("img",{src:l.images.mb_square_img}))),y&&v.default.createElement("div",{className:"shadyUnselect"}),y&&v.default.createElement("div",{className:"manageShady",onClick:this.changeChoose}))}}]),a}(),J=function(e){function t(){return F(this,t),O(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return x(t,g.Component),m(t,[{key:"render",value:function(){return v.default.createElement("div",{className:"control-button"},D.hideFlag&&v.default.createElement(Y,null),this.props.topButtonState?v.default.createElement(Z,null):"")}}]),t}(),Y=function(e){function t(){return F(this,t),O(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return x(t,g.Component),m(t,[{key:"render",value:function(){return v.default.createElement("div",{className:"jump-search-button"},v.default.createElement("a",{href:"/goodCollectionSearch"},v.default.createElement("i",{className:"jump-search-icon"})))}}]),t}(),Z=function(e){function t(){return F(this,t),O(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return x(t,g.Component),m(t,[{key:"jumpToTop",value:function(){(0,D.scrollTo)(0,50)}},{key:"render",value:function(){return v.default.createElement("div",{className:"jump-top-button",onClick:this.jumpToTop.bind(this)},v.default.createElement("i",{className:"jump-top-icon"}))}}]),t}(),K=t.ManageGoods=function(t){function a(){var t,n,l;F(this,a);for(var s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];return n=l=O(this,(t=a.__proto__||(0,o.default)(a)).call.apply(t,[this].concat(i))),l.selectAll=function(){var t=l.props,a=t.manage,o=t.changeChooseAll,n=!t.ifChooseAll;o(n),e(".shadyUnselect").addClass("del-choose"),a&&n?(e(".shadyUnselect").addClass("del-choose"),e(".manageShady").addClass("del-shady")):(e(".shadyUnselect").removeClass("del-choose"),e(".manageShady").removeClass("del-shady"))},l.del=function(){var t=l.props,a=(t.delCount,t.toggleManage,t.toggleshady),o=t.toggledelCount,n=e(".del-choose");n.length?(a(!0),o(n.length)):M.default.MsgTip({msg:"请先选择商品"})},l.changeList=function(){var t=l.props,a=t.toggleshady,o=t.toggleManage,n=t.setGoodListUpdate,s=e(".good-item");if(e(s).length){for(var i=[],r=e(".del-choose").parents(".good-item"),c=r.length,d=0;d<c;d++)i.push(r.eq(d).attr("id"));var u={};u.item_id=i.join(","),j.del(u).then(function(t){t.data;e(".del-choose").removeClass("del-choose"),a(!1),o(!1),n(!0)})}},O(l,n)}return x(a,g.Component),m(a,[{key:"render",value:function(){var t=this.props,a=t.manage,o=t.DisGoods,n=t.toggleManage,l=t.changeChooseAll,s=t.ifChooseAll,i=t.delCount,r=t.shady,c=t.toggleshady,d=this;return v.default.createElement("div",{className:"manageGoods"},a?v.default.createElement("div",{className:"endManage"},s?v.default.createElement("img",{src:"src/img/collect/trcChoose.png",className:"unselect"}):v.default.createElement("img",{src:"src/img/collect/trcNOchoose.png",className:"unselect"}),v.default.createElement("span",{className:"selectAll",onClick:this.selectAll},"全选"),o&&v.default.createElement(C.Link,{className:"checkDisabled",to:"/goodOverdue"},"查看失效商品"),v.default.createElement("span",{className:"cancel",onClick:this.del},"取消收藏"),v.default.createElement("span",{className:"done",onClick:function(e){n(!1),l(!1)}},"完成")):v.default.createElement("div",{className:"startManage",onClick:n.bind(this,!0)},"管理"),v.default.createElement(w.ModalBComp,{active:r,title:"",msg:"确定取消 "+i+" 个收藏商品吗？",btns:[{text:"取消",cb:function(){c(!1),e(".goodWrap").css({overflow:"",position:"static"})}},{text:"确定",cb:function(){d.changeList(),e(".goodWrap").css({overflow:"",position:"static"})}}]}))}}]),a}();function z(e){return f({},e.goodCollection)}function V(e){return{dispatch:e,setFrom:function(t){e(H("setFrom",{from:t}))},setNav:function(t){e(H("setNav",{nav:t}))},setFilterUpdate:function(t){e(H("setFilterUpdate",{filterUpdate:t}))},setGoodListUpdate:function(t){e(H("setGoodListUpdate",{goodListUpdate:t}))},setWindowHeight:function(t){e(H("windowHeight",{windowHeight:t}))},setSearch:function(t){e(H("setSearch",{searchData:t}))},setData:function(t,a,o){e(H("isLoad",{load:!1})),j.collection(t).then(function(n){if(0!==n.data.code)return e(H("setInit",{init:!0})),void e(H("isError",{errorState:!0}));e(H("isError",{errorState:!1})),a||(e(H("setInitItem",{result:n.data})),e(H("setInit",{init:!0}))),""==t.condition&&""==t.category_id&&0==n.data.data.item_list.length&&e(H("defaultNoSave",{defaultNoSave:!0})),""!=t.category_id&&0==n.data.data.item_list.length&&(e(H("noSave",{noSave:!0})),e(H("setData",{result:n.data,filterUpdate:!1}))),0!=n.data.data.item_list.length?(e(H("setCurrentPage",{current:n.data.data.page?n.data.data.page.current_page:1})),e(H("setTotalPage",{total:n.data.data.page?n.data.data.page.total_page:1})),e(H("setData",{result:n.data,filterUpdate:o}))):e(H("noSave",{noSave:!0})),e(H("isLoad",{load:!0}))}).catch(function(t){e(H("setInit",{init:!0})),e(H("isError",{errorState:!0})),M.default.MsgTip({msg:t.message||t.response.data.message||"服务器繁忙"})})},toggleQuickSelect:function(t){e(H("toggleQuickSelect",{isQuickSelect:t}))},toggleManage:function(t){e(H("toggleManage",{manage:t}))},changeChooseAll:function(t){e(H("changeChooseAll",{ifchooseAll:t}))},toggledelCount:function(t){e(H("delCount",{delCount:t}))},toggleshady:function(t){e(H("shady",{shady:t}))}}}t.default=(0,y.connect)(z,V)(G)}).call(this,a("OOjC"))}}]);