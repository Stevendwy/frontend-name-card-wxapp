(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1usX":function(t,e,r){"use strict";(function(t){var n=h(r("mvHQ")),o=h(r("Zx67")),i=h(r("kiBT")),u=h(r("OvRC")),a=h(r("pFYg")),s=h(r("C4MV"));function h(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),f=r("U7vG"),c=m(f),g=r("d2xe"),d=r("fw66");m(r("4GUf"));function m(t){return t&&t.__esModule?t:{default:t}}r("Tcna");var p=function(e){function r(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,a.default)(e))&&"function"!=typeof e?t:e}(this,(r.__proto__||(0,o.default)(r)).call(this,e));return i.getJSApi=function(e){var r=i;t.ajax({url:"/wxapi/getJSApi?url="+encodeURIComponent(e),type:"GET",dataType:"json",contentType:"application/json;chartset=utf-8",success:function(t){wx.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),r.setState({config:!0}),wx.error(function(t){console.log((0,n.default)(t))})},error:function(t){r.showMsg="绑定域名不正确！",r.setState({showStatus:!0})}})},i.hideModal=function(){i.setState({showStatus:!1})},i.state={update:!0,showStatus:!1},i.showMsg="",i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,a.default)(e)));t.prototype=(0,u.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}(r,f.Component),l(r,[{key:"componentWillMount",value:function(){document.title="邀请好友"}},{key:"componentDidMount",value:function(){var t=location.href.split("#")[0];this.getJSApi(t);var e={title:"邀请您关注二维码",desc:"你的好友"+name+"，喊你来逛泰然城!",link:location.protocol+"//"+location.host+"/userQrCode",imgUrl:location.protocol+"//"+location.host+"/src/img/qrCode/logo.png",type:"",dataUrl:"",success:function(){},cancel:function(){}};wx.ready(function(){wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareQZone(e)})}},{key:"render",value:function(){var e={minHeight:t(window).height()},r=this.state,n=r.update,o=r.showStatus;return n?c.default.createElement("div",{"data-page":"user-code"},c.default.createElement("section",{className:"wrapper",style:e},c.default.createElement("p",{className:"user-title"},"欢迎加入泰然城~"),c.default.createElement("div",{className:"c-tc c-c35 code"},c.default.createElement("img",{src:"/src/img/qrCode/qrcode_for.png",className:"imgbg",style:{width:"160px",marginBottom:"20px"}}),c.default.createElement("p",{className:"c-fs13 c-c666 tip"},"扫一扫我的二维码，立马加入"))),c.default.createElement(d.PopupTip,{active:o,onClose:this.hideModal,msg:this.showMsg})):c.default.createElement(g.LoadingRound,null)}}]),r}();e.default=p}).call(this,r("OOjC"))},CT9y:function(t,e){let r=t=>{var e,r,n,o;for(e="",n=t.length,r=0;r<n;r++)(o=t.charCodeAt(r))>=1&&o<=127?e+=t.charAt(r):o>2047?(e+=String.fromCharCode(224|o>>12&15),e+=String.fromCharCode(128|o>>6&63),e+=String.fromCharCode(128|o>>0&63)):(e+=String.fromCharCode(192|o>>6&31),e+=String.fromCharCode(128|o>>0&63));return e};function n(t){this.mode=s.MODE_8BIT_BYTE,this.data=t}function o(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}function i(t,e){var r,n;if(void 0==t.length)throw new Error(t.length+"/"+e);for(r=0;r<t.length&&0==t[r];)r++;for(this.num=new Array(t.length-r+e),n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function u(t,e){this.totalCount=t,this.dataCount=e}function a(){this.buffer=new Array,this.length=0}var s,h,l,f,c,g;for(function(t){t.fn.qrcode=function(e){var n,i;return"string"==typeof e&&(e={text:e}),e=t.extend({},{render:"canvas",width:256,height:256,imgWidth:e.width/4.7,imgHeight:e.height/4,typeNumber:-1,correctLevel:h.H,background:"#ffffff",foreground:"#000000"},e),n=function(){var t,n,i,u,a,s,h,l,f,c=new o(e.typeNumber,e.correctLevel);for(c.addData(r(e.text)),c.make(),(t=document.createElement("canvas")).width=e.width,t.height=e.height,n=t.getContext("2d"),e.src&&((i=new Image).src=e.src,alert(e.src),i.onload=function(){n.drawImage(i,(e.width-e.imgWidth)/2,(e.height-e.imgHeight)/2,e.imgWidth,e.imgHeight)}),u=e.width/c.getModuleCount(),a=e.height/c.getModuleCount(),s=0;s<c.getModuleCount();s++)for(h=0;h<c.getModuleCount();h++)n.fillStyle=c.isDark(s,h)?e.foreground:e.background,l=Math.ceil((h+1)*u)-Math.floor(h*u),f=Math.ceil((s+1)*u)-Math.floor(s*u),n.fillRect(Math.round(h*u),Math.round(s*a),l,f);return t},i=function(){var n,i,u,a,s,h,l=new o(e.typeNumber,e.correctLevel);for(l.addData(r(e.text)),l.make(),n=t("<table></table>").css("width",e.width+"px").css("height",e.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",e.background),i=e.width/l.getModuleCount(),u=e.height/l.getModuleCount(),a=0;a<l.getModuleCount();a++)for(s=t("<tr></tr>").css("height",u+"px").appendTo(n),h=0;h<l.getModuleCount();h++)t("<td></td>").css("width",i+"px").css("background-color",l.isDark(a,h)?e.foreground:e.background).appendTo(s);return n},this.each(function(){var r="canvas"==e.render?n():i();t(r).appendTo(this)})}}(Zepto),n.prototype={getLength:function(){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},o.prototype={addData:function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){var t,e,r,n,o,i;if(this.typeNumber<1){for(t=1,t=1;40>t;t++){for(e=u.getRSBlocks(t,this.errorCorrectLevel),r=new a,n=0,o=0;o<e.length;o++)n+=e[o].dataCount;for(o=0;o<this.dataList.length;o++)i=this.dataList[o],r.put(i.mode,4),r.put(i.getLength(),f.getLengthInBits(i.mode,t)),i.write(r);if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){var r,n;for(this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount),r=0;r<this.moduleCount;r++)for(this.modules[r]=new Array(this.moduleCount),n=0;n<this.moduleCount;n++)this.modules[r][n]=null;this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){var r,n;for(r=-1;7>=r;r++)if(!(-1>=t+r||this.moduleCount<=t+r))for(n=-1;7>=n;n++)-1>=e+n||this.moduleCount<=e+n||(this.modules[t+r][e+n]=r>=0&&6>=r&&(0==n||6==n)||n>=0&&6>=n&&(0==r||6==r)||r>=2&&4>=r&&n>=2&&4>=n)},getBestMaskPattern:function(){var t,e,r=0,n=0;for(t=0;8>t;t++)this.makeImpl(!0,t),e=f.getLostPoint(this),(0==t||r>e)&&(r=e,n=t);return n},createMovieClip:function(t,e,r){var n,o,i,u,a=t.createEmptyMovieClip(e,r);for(this.make(),n=0;n<this.modules.length;n++)for(o=1*n,i=0;i<this.modules[n].length;i++)u=1*i,this.modules[n][i]&&(a.beginFill(0,100),a.moveTo(u,o),a.lineTo(u+1,o),a.lineTo(u+1,o+1),a.lineTo(u,o+1),a.endFill());return a},setupTimingPattern:function(){var t,e;for(t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=0==t%2);for(e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=0==e%2)},setupPositionAdjustPattern:function(){var t,e,r,n,o,i,u=f.getPatternPosition(this.typeNumber);for(t=0;t<u.length;t++)for(e=0;e<u.length;e++)if(r=u[t],n=u[e],null==this.modules[r][n])for(o=-2;2>=o;o++)for(i=-2;2>=i;i++)this.modules[r+o][n+i]=-2==o||2==o||-2==i||2==i||0==o&&0==i},setupTypeNumber:function(t){var e,r,n=f.getBCHTypeNumber(this.typeNumber);for(e=0;18>e;e++)r=!t&&1==(1&n>>e),this.modules[Math.floor(e/3)][e%3+this.moduleCount-8-3]=r;for(e=0;18>e;e++)r=!t&&1==(1&n>>e),this.modules[e%3+this.moduleCount-8-3][Math.floor(e/3)]=r},setupTypeInfo:function(t,e){var r,n,o=this.errorCorrectLevel<<3|e,i=f.getBCHTypeInfo(o);for(r=0;15>r;r++)n=!t&&1==(1&i>>r),6>r?this.modules[r][8]=n:8>r?this.modules[r+1][8]=n:this.modules[this.moduleCount-15+r][8]=n;for(r=0;15>r;r++)n=!t&&1==(1&i>>r),8>r?this.modules[8][this.moduleCount-r-1]=n:9>r?this.modules[8][15-r-1+1]=n:this.modules[8][15-r-1]=n;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){var r,n,o,i=-1,u=this.moduleCount-1,a=7,s=0;for(r=this.moduleCount-1;r>0;r-=2)for(6==r&&r--;;){for(n=0;2>n;n++)null==this.modules[u][r-n]&&(o=!1,s<t.length&&(o=1==(1&t[s]>>>a)),f.getMask(e,u,r-n)&&(o=!o),this.modules[u][r-n]=o,-1==--a&&(s++,a=7));if(0>(u+=i)||this.moduleCount<=u){u-=i,i=-i;break}}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,e,r){var n,i,s,h=u.getRSBlocks(t,e),l=new a;for(n=0;n<r.length;n++)i=r[n],l.put(i.mode,4),l.put(i.getLength(),f.getLengthInBits(i.mode,t)),i.write(l);for(s=0,n=0;n<h.length;n++)s+=h[n].dataCount;if(l.getLengthInBits()>8*s)throw new Error("code length overflow. ("+l.getLengthInBits()+">"+8*s+")");for(l.getLengthInBits()+4<=8*s&&l.put(0,4);0!=l.getLengthInBits()%8;)l.putBit(!1);for(;!(l.getLengthInBits()>=8*s)&&(l.put(o.PAD0,8),!(l.getLengthInBits()>=8*s));)l.put(o.PAD1,8);return o.createBytes(l,h)},o.createBytes=function(t,e){var r,n,o,u,a,s,h,l,c,g,d=0,m=0,p=0,w=new Array(e.length),E=new Array(e.length);for(r=0;r<e.length;r++){for(n=e[r].dataCount,o=e[r].totalCount-n,m=Math.max(m,n),p=Math.max(p,o),w[r]=new Array(n),u=0;u<w[r].length;u++)w[r][u]=255&t.buffer[u+d];for(d+=n,a=f.getErrorCorrectPolynomial(o),s=new i(w[r],a.getLength()-1).mod(a),E[r]=new Array(a.getLength()-1),u=0;u<E[r].length;u++)h=u+s.getLength()-E[r].length,E[r][u]=h>=0?s.get(h):0}for(l=0,u=0;u<e.length;u++)l+=e[u].totalCount;for(c=new Array(l),g=0,u=0;m>u;u++)for(r=0;r<e.length;r++)u<w[r].length&&(c[g++]=w[r][u]);for(u=0;p>u;u++)for(r=0;r<e.length;r++)u<E[r].length&&(c[g++]=E[r][u]);return c},s={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},h={L:1,M:0,Q:3,H:2},l={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case l.PATTERN000:return 0==(e+r)%2;case l.PATTERN001:return 0==e%2;case l.PATTERN010:return 0==r%3;case l.PATTERN011:return 0==(e+r)%3;case l.PATTERN100:return 0==(Math.floor(e/2)+Math.floor(r/3))%2;case l.PATTERN101:return 0==e*r%2+e*r%3;case l.PATTERN110:return 0==(e*r%2+e*r%3)%2;case l.PATTERN111:return 0==(e*r%3+(e+r)%2)%2;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){var e,r=new i([1],0);for(e=0;t>e;e++)r=r.multiply(new i([1,c.gexp(e)],0));return r},getLengthInBits:function(t,e){if(e>=1&&10>e)switch(t){case s.MODE_NUMBER:return 10;case s.MODE_ALPHA_NUM:return 9;case s.MODE_8BIT_BYTE:case s.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case s.MODE_NUMBER:return 12;case s.MODE_ALPHA_NUM:return 11;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case s.MODE_NUMBER:return 14;case s.MODE_ALPHA_NUM:return 13;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){var e,r,n,o,i,u,a,s,h=t.getModuleCount(),l=0;for(e=0;h>e;e++)for(r=0;h>r;r++){for(n=0,o=t.isDark(e,r),i=-1;1>=i;i++)if(!(0>e+i||e+i>=h))for(u=-1;1>=u;u++)0>r+u||r+u>=h||(0!=i||0!=u)&&o==t.isDark(e+i,r+u)&&n++;n>5&&(l+=3+n-5)}for(e=0;h-1>e;e++)for(r=0;h-1>r;r++)a=0,t.isDark(e,r)&&a++,t.isDark(e+1,r)&&a++,t.isDark(e,r+1)&&a++,t.isDark(e+1,r+1)&&a++,(0==a||4==a)&&(l+=3);for(e=0;h>e;e++)for(r=0;h-6>r;r++)t.isDark(e,r)&&!t.isDark(e,r+1)&&t.isDark(e,r+2)&&t.isDark(e,r+3)&&t.isDark(e,r+4)&&!t.isDark(e,r+5)&&t.isDark(e,r+6)&&(l+=40);for(r=0;h>r;r++)for(e=0;h-6>e;e++)t.isDark(e,r)&&!t.isDark(e+1,r)&&t.isDark(e+2,r)&&t.isDark(e+3,r)&&t.isDark(e+4,r)&&!t.isDark(e+5,r)&&t.isDark(e+6,r)&&(l+=40);for(s=0,r=0;h>r;r++)for(e=0;h>e;e++)t.isDark(e,r)&&s++;return l+10*(Math.abs(100*s/h/h-50)/5)}},c={glog:function(t){if(1>t)throw new Error("glog("+t+")");return c.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return c.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;8>g;g++)c.EXP_TABLE[g]=1<<g;for(g=8;256>g;g++)c.EXP_TABLE[g]=c.EXP_TABLE[g-4]^c.EXP_TABLE[g-5]^c.EXP_TABLE[g-6]^c.EXP_TABLE[g-8];for(g=0;255>g;g++)c.LOG_TABLE[c.EXP_TABLE[g]]=g;i.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){var e,r,n=new Array(this.getLength()+t.getLength()-1);for(e=0;e<this.getLength();e++)for(r=0;r<t.getLength();r++)n[e+r]^=c.gexp(c.glog(this.get(e))+c.glog(t.get(r)));return new i(n,0)},mod:function(t){var e,r,n;if(this.getLength()-t.getLength()<0)return this;for(e=c.glog(this.get(0))-c.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=c.gexp(c.glog(t.get(n))+e);return new i(r,0).mod(t)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(t,e){var r,n,o,i,a,s,h,l=u.getRsBlockTable(t,e);if(void 0==l)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(r=l.length/3,n=new Array,o=0;r>o;o++)for(i=l[3*o+0],a=l[3*o+1],s=l[3*o+2],h=0;i>h;h++)n.push(new u(a,s));return n},u.getRsBlockTable=function(t,e){switch(e){case h.L:return u.RS_BLOCK_TABLE[4*(t-1)+0];case h.M:return u.RS_BLOCK_TABLE[4*(t-1)+1];case h.Q:return u.RS_BLOCK_TABLE[4*(t-1)+2];case h.H:return u.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},a.prototype={get:function(t){var e=Math.floor(t/8);return 1==(1&this.buffer[e]>>>7-t%8)},put:function(t,e){for(var r=0;e>r;r++)this.putBit(1==(1&t>>>e-r-1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}}},Tcna:function(t,e,r){}}]);