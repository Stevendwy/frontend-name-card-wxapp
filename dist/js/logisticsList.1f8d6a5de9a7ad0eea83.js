(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{hwAx:function(e,t,a){"use strict";(function(e){var n=c(a("mvHQ")),r=c(a("Zx67")),s=c(a("kiBT")),o=c(a("OvRC")),l=c(a("pFYg")),i=c(a("C4MV")),u=c(a("woOf"));function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=u.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i.default)(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=a("U7vG"),m=E(p),v=a("Zfgq"),h=E(a("qAHI")),g=E(a("4GUf")),_=a("5qLU"),y=E(a("TQvf")),w=E(a("rqUH"));function E(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,l.default)(t))&&"function"!=typeof t?e:t}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,l.default)(t)));e.prototype=(0,o.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s.default?(0,s.default)(e,t):e.__proto__=t)}a("qTVM");var N={tracking:{url:_.WXAPI+"/user/orderTracking/get",method:"get"},packageInfo:{url:_.WXAPI+"/user/deliveryList"}},M=function(t){function a(e){k(this,a);var t=b(this,(a.__proto__||(0,r.default)(a)).call(this,e)),n=e.location.query.tid;return t.state={tid:n,update:!1,total:"",logisticsData:[],is_express:!1},t}return x(a,p.Component),f(a,[{key:"componentWillMount",value:function(){this.state.tid||v.browserHistory.push(DIR+"/");var e=this;h.default.request(d({},N.packageInfo,{params:{order_shop_no:this.state.tid}})).then(function(t){var a=t.data;if(0===a.code){var n=a.data.list,r=a.data.is_express;e.setState({total:a.data.total_count,update:!0,logisticsData:n,is_express:r})}else g.default.MsgTip({msg:"订单号错误"})}).catch(function(e){console.log(e),g.default.MsgTip({msg:"订单号错误"})})}},{key:"render",value:function(){var t=this.state,a=t.logisticsData,r=t.update,s=t.total,o=t.is_express,l=a.map(function(e,t){return window.localStorage.setItem(e.deliveries.express_no,(0,n.default)(e.deliveries_params)),m.default.createElement(T,{data:e,key:t})});return r?m.default.createElement("div",{className:"LogisticsList","data-page":"LogisticsPageList",style:{minHeight:e(window).height()}},o?m.default.createElement("div",null,m.default.createElement("p",{className:"count"},s,"个包裹已发出"),l):m.default.createElement(q,null)):m.default.createElement(w.default,null)}}]),a}();t.default=M;var T=function(e){function t(e){k(this,t);var a=b(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.checkLogistic=function(e,t,n){h.default.request(d({},N.tracking,{params:{code:e,no:t,phone:n}})).then(function(e){var t=e.data;0===t.code?a.setState({update:!0,dataList:t.data}):a.setState({error:!0})}).catch(function(e){console.log(e),g.default.MsgTip({msg:"服务器繁忙"})})},a.state={update:!1,dataList:"",error:!1},a}return x(t,p.Component),f(t,[{key:"componentWillMount",value:function(){var e=this.props.data,t=e.deliveries.express_no,a=e.deliveries.corp_code,n=e.deliveries_params.phone;this.checkLogistic(a,t,n)}},{key:"componentDidMount",value:function(){var e=new y.default(".express_no_copy");e.on("success",function(e){g.default.MsgTip({msg:"物流单号复制成功"})}),e.on("error",function(e){g.default.MsgTip({msg:"当前手机端不支持复制，请手动复制~"})})}},{key:"render",value:function(){var e=this.props.data.deliveries,t=e.corp_code,a=e.corp_name,n=e.express_no,r=this.props.data,s=this.state,o=s.dataList,l=(s.error,s.update),i=0==o.state?"在途":1==o.state?"揽件":2==o.state?"疑难":3==o.state?"签收":4==o.state?"退签":5==o.state?"派件":6==o.state?"退回":"暂无物流状态";return l&&m.default.createElement("div",{className:"eachPackage"},m.default.createElement("p",{className:"packageTop clearfix"},m.default.createElement("span",{className:"packageStatus"},i),n&&m.default.createElement("button",{className:"express_no_copy","data-clipboard-text":n}),n?m.default.createElement("input",{id:"copy_text",className:"express_no",value:n,readOnly:!0}):m.default.createElement("span",{className:"express_no"},"等待上传"),a&&m.default.createElement("span",{className:"express_name"},a,": ")),m.default.createElement(v.Link,{to:"/logisticDetail?code="+t+"&no="+n},m.default.createElement("div",{className:"main"},0!=o.length?m.default.createElement("div",null,m.default.createElement("p",{className:"location"},o.data[0].context),m.default.createElement("p",{className:"time"},o.data[0].time)):m.default.createElement("p",{className:"location"},"暂无物流详细状态  ")),m.default.createElement(L,{data:r})))}}]),t}(),L=function(e){function t(){return k(this,t),b(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return x(t,p.Component),f(t,[{key:"getSlide",value:function(){return(this.props.data.goods_info||[]).map(function(e,t){return m.default.createElement("div",{className:"swiper-slide goods_img c-fl",key:t},m.default.createElement("img",{src:e.primary_image,className:"imgshow"}),m.default.createElement("span",{className:"goods_count"},"x",e.num))})}},{key:"componentDidMount",value:function(){new Swiper(this.refs.banner,{freeMode:!0,slidesPerView:"auto",observer:!0})}},{key:"render",value:function(){return m.default.createElement("section",{"data-plugin":"swiper"},m.default.createElement("div",{className:"swiper-container banner",ref:"banner",style:{width:"100%"}},m.default.createElement("div",{className:"swiper-wrapper clearfix"},this.getSlide())))}}]),t}(),q=function(e){function t(){return k(this,t),b(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return x(t,p.Component),f(t,[{key:"render",value:function(){return m.default.createElement("div",{className:"empty"},m.default.createElement("div",{className:"bg"}),m.default.createElement("p",{className:"info"},"您的包裹无需配送~"))}}]),t}()}).call(this,a("OOjC"))},qTVM:function(e,t,a){}}]);