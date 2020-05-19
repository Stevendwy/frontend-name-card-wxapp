import React, { Component } from 'react';
import { Link,browserHistory } from 'react-router';
import Popup from 'component/modal2';
import { LoadingRound } from 'component/common';
import { browser } from 'js/common/utils';
import { dateFormat } from 'js/util/index';
import { compress } from 'js/common/compressImage';
import { UCENTER,WXAPI } from 'config/index';
import { getCookie,setCookie,clearCookie } from 'js/common/cookie';
import axios from 'axios';
import './userInfo.scss';

const pageApi = {
    /*uc前缀为用户中心接口*/
    uc_getUserInfo: { url: `${UCENTER}/user` }, //获取用户信息
    uc_setUserInfo: { url: `${UCENTER}/user`, method: 'put' }, //修改用户信息
    uc_unBindWx: { url: `${UCENTER}/user/unbind`,method: 'put' }, //解绑微信
    uc_logout: { url: `${UCENTER}/user/logout`, method: 'post', },  //退出登录
    unbind: { url: `${WXAPI}/unBindUser` },  //解绑用户信息
    //compressImg: { url: '/wxapi/uploadImagesCompress.api', method:'post' }  //压缩上传图片
    compressImg: { url: `${WXAPI}/uploadImage`, method:'post' }  //压缩上传图片
};

export default class  UserInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            update : false,
            isEnterprise: false,

            data: {},
            shadySlide: false,
            avatar: "",
            showAvatar: false,
            showStart: false,

            birth: "",
            birthStart: false,
            birthSlideIn: false,

            sex: "",
            sexStart: false,
            sexSlideIn: false
        }
    };

    componentWillMount() {
        document.title= "个人信息";
        this.context.isApp && (window.location.href="jsbridge://set_title?title=个人信息");
        this.token = getCookie('token');
        //获取用户信息
        let self = this;
        axios.request({
            ...pageApi.uc_getUserInfo,
            headers: { 'Authorization': "Bearer " + self.token },
            params:{needPhone:true}
        }).then(({data})=>{
            const { body, code } = data;
            if(code==="200"){
                self.setState ({
                    data: body,
                    avatar: body.avatar,
                    sex: body.gender,
                    birth: dateFormat(body.birthDate, 'yyyy-MM-dd'),
                    isCompanyUser: body.type==="COMPANY", //是否为企业购用户type:INDIVIDUAL  or  COMPANY
                    update: true
                });
            }else{
                Popup.MsgTip({ msg: "服务器繁忙" });
            }
        }).catch(error=>{
            Popup.MsgTip({ msg: "服务器繁忙" });
        });
    }

    //离开页面时清楚弹框
    componentWillUnmount(){
        const msgTip = document.querySelector("#msgTip");
        msgTip && msgTip.parentNode && msgTip.parentNode.removeChild(msgTip);
    }

    changeState = (stateName)=> {
        this.setState(stateName);
    }

    //显示头像大图
    showAvatar = ()=> {
        this.setState({ showStart: true,showAvatar: true});
    };

    //选择性别
    chooseSex = () => {
        this.setState({sexStart:true, shadySlide:true, sexSlideIn:true});
    };

    //选择生日
    chooseBirth = () => {
        this.setState({birthStart:true, shadySlide: true, birthSlideIn: true});
    };

    //上传头像
    upLoadImg = async (e) => {
        let file = $(".avatar-form")[0].firstChild.files["0"];
        if(!file){
            return;
        }else if (!/^image\/(jpg|png|jpeg|bmp)$/.test(file.type)) {
            Popup.MsgTip({msg: "亲，请上传jpg/png/jpeg/bmp格式的图片哦~"});
            return;
        }
        let fileStream = await compress(file);
        this.upLoadAjax(fileStream);
    };

    upLoadAjax = (basestr) => {
        //压缩图片
        axios.request({
            ...pageApi.compressImg,
            data: { img: basestr }
        }).then(({data})=>{
            this.setState({
                avatar: data.data.file.complete_url
            });
            //修改用户信息
            axios.request({
                ...pageApi.uc_setUserInfo,
                data: { avatar: data.data.file.complete_url },
                headers: { 'Authorization': "Bearer " + this.token }
            }).then(({data})=>{
                Popup.MsgTip({msg: `头像修改${data.code==="200"?'成功':'失败'}`});
            })
        }).catch(error=>{
            console.log(error);
            Popup.MsgTip({msg: error.response.data.message||"上传图片出错"});
        });
        
       /* $.ajax({
            url: '/wxapi/uploadImagesCompress.api',
            type: 'POST',
            data: {
                img: basestr
            },
            cache: false,
            dataType: "json",
            success(data) {
                if (data.status === true && data.code === 200) {
                    self.setState({
                        avatar: data.data.file.url
                    });
                    $.ajax({
                        ...pageApi.setUserInfo,
                        data: JSON.stringify({
                            avatar: data.data.file.url
                        }),
                        contentType: "application/json",
                        success(){
                            Popup.MsgTip({msg: "头像修改成功"});
                        },
                        error(){
                            Popup.MsgTip({msg: "头像修改失败"});
                        }
                    });
                }else {
                    Popup.MsgTip({msg: data.msg || "上传图片出错"});
                }
            },
            error() {
                Popup.MsgTip({msg:"上传图片出错"});
            }
        });*/
    };

/*    //上传头像
    upLoadImg = (e)=> {
        let formData = new FormData($(".avatar-form")[0]),
            file = $(".avatar-form")[0].firstChild.files["0"];
        if (file.size >= 1024 * 1024 * 5) {
            Popup.MsgTip({msg: "亲，请上传小于5M的图片哦~"});
            return;
        } else if (!/^image\/(jpg|png|jpeg|bmp)$/.test(file.type)) {
            Popup.MsgTip({msg: "亲，请上传jpg/png/jpeg/bmp格式的图片哦~"});
            return;
        }
        let self = this;
        $.ajax({
            url: '/wxapi/uploadImage.api?from=user&type=complaints',
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success(data) {
            },
            error(err) {
            }
        });
    };*/

    //解绑步骤一：解绑用户信息
    unBindUser = ()=> {
        axios.request({
            ...pageApi.unbind,
            params:{ openid: getCookie('openId') }
        }).then(()=>{
            Popup.MsgTip({msg: '解绑成功'});
            this.unBindWx();
        }).catch(error=>{
            console.log(error);
            Popup.MsgTip({msg: error.response.data.message||"解绑用户信息失败"});
        });
    };

    //解绑步骤二：解绑微信
    unBindWx = ()=> {
        let self = this;
        axios.request({
            ...pageApi.uc_unBindWx,
            headers: { 'Authorization': "Bearer " + self.token },
            params:{ type: 'WECHAT' }
        }).then(({data})=>{
            if(data.code==="200"){
                self.exitLogin();
            }else{
                Popup.MsgTip({msg: "解绑失败"});
            }
        }).catch(({error})=>{
            console.log(error);
            Popup.MsgTip({msg: "服务器繁忙"});
        });
    };

    //解绑步骤三：退出登录
    exitLogin = ()=> {
        let self = this;
        axios.request({
            ...pageApi.uc_logout,
            headers: {'Authorization': "Bearer " + self.token}
        }).then(({data})=>{
            if(data.code==="200"){
                /*setCookie('openId', '', -1);//清除openId
                setCookie('token', '', -1);//清除token*/
                clearCookie('openId');
                clearCookie('token');
                window.location.replace("/userCenter");
            }else{
                Popup.MsgTip({msg: "解绑失败"});
            }
        }).catch(({error})=>{
            console.log(error);
        });
        
        /*$.ajax({
            url: "/account/user/logout",
            type: "POST",
            success(data){
                window.location.replace("/userCenter");
            }
        });*/
    };

    //解绑微信
    unBindClick = ()=> {
        Popup.Modal({
            isOpen: true,
            msg: "确定要解除绑定吗？"
        },this.unBindUser);
    };

    //退出登录
    exitClick = ()=> {
        Popup.Modal({
            isOpen: true,
            msg: "确定要退出登录吗？"
        },this.exitLogin);
    };
    
    shadyClick = ()=>{
        this.setState({
            shadySlide: false,
            avatarSlideIn: false,
            sexSlideIn: false,
            birthSlideIn: false
        })
    };
    
    render() {
    let unSet = "未设置";
    let { shadySlide,showStart,showAvatar,avatar,sex,sexStart,sexSlideIn,birth,birthStart,birthSlideIn,update,isCompanyUser,data } = this.state;

    return (
        update ?
            <div data-page="user-info" style={{ minHeight: $(window).height() }}>
                <div className={`shady ${shadySlide? '':'c-dpno'}`} style={{height: $(window).height()}} onClick={this.shadyClick}></div>

                <ShowAvatar showStart={showStart} showAvatar={showAvatar} avatar={avatar} changeState={this.changeState}/>
                <ChooseSex sexStart={sexStart} shadySlide={shadySlide} sexSlideIn={sexSlideIn} changeState={this.changeState}/>
                <ChooseBirth birthStart={birthStart} shadySlide={shadySlide} birthSlideIn={birthSlideIn} changeState={this.changeState} birth={birth}/>

                <ul className="info-list">
                    <li className="info-avatar-li">
                        <div className="avatar-div li-padding">
                            头像
                            <form className="avatar-form">
                                <input type="file" name="file" onChange={this.upLoadImg} accept="image/*" className="upLoadFromCamera"/>
                            </form>
                            
                            <div className="avatar-prompt prompt-msg" onClick={this.showAvatar}>{/* style={{height:'66px'}}*/}
                                <div className="avatar-container">
                                    <img className="avatar" src={avatar ? avatar : "/src/img/icon/avatar/default-avatar.png"}/>
                                </div>
                                <img className="arrow-right avatar-arrow" src="/src/img/userCenter/arrow_right.png"/>
                            </div>
                        </div>
                        <div className="split-line"></div>
                    </li>

                    <li>
                        <div className="li-padding">
                            手机号
                            <span className="prompt-msg">{data.phone.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}</span>
                        </div>
                        <div className="split-line"></div>
                    </li>

                    <li>
                        <Link to={`/userNickname?nickname=${data.nickname ? data.nickname : data.phone}`}>
                            <div className="li-padding">
                                昵称
                                <div className="prompt-msg">
                                    <span>{data.nickname ? data.nickname : data.phone}</span>
                                    <img className="arrow-right" src="/src/img/userCenter/arrow_right.png"/>
                                </div>
                            </div>
                            <div className="split-line"></div>
                        </Link>
                    </li>

                    <li onClick={this.chooseSex}>
                        <div className="li-padding">
                            性别
                            <div className="prompt-msg">
                                <span>{sex!=="UNKNOWN" ? (sex==="MALE"?"男":"女") : unSet}</span>
                                <img className="arrow-right" src="/src/img/userCenter/arrow_right.png"/>
                            </div>
                        </div>
                        <div className="split-line"></div>
                    </li>

                    <li className="li-padding"onClick={this.chooseBirth}>
                        生日
                        <div className="prompt-msg">
                            <span>{birth ? birth : unSet}</span>
                            <img className="arrow-right" src="/src/img/userCenter/arrow_right.png"/>
                        </div>
                    </li>

                    {/*<li className="info-area">
                        <Link to={`/enterprise/update?company=${isCompanyUser?1:0}`}>
                            <div className="li-padding">
                                企业会员
                                <div className="prompt-msg">
                                    <span>{ isCompanyUser?'编辑':'立即升级企业会员' }</span>
                                    <img className="arrow-right" src="/src/img/userCenter/arrow_right.png"/>
                                </div>
                            </div>
                            <div className="split-line"></div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/enterprise/invite">
                            <div className="li-padding">
                                邀请企业好友
                                <div className="prompt-msg">
                                    <span style={{color:'#bdab81'}}>领取企业分红</span>
                                    <img className="arrow-right" src="/src/img/userCenter/arrow_right.png"/>
                                </div>
                            </div>
                        </Link>
                    </li>*/}

                    <li className="info-area">
                        <Link to="/goodsReceiveInfo/identityManage">
                            <div className="li-padding">
                                身份证管理
                                <div className="prompt-msg">
                                    <img className="arrow-right" src="/src/img/userCenter/arrow_right.png"/>
                                </div>
                            </div>
                            <div className="split-line"></div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/goodsReceiveInfo/addressManage">
                            <div className="li-padding">
                                收货地址
                                <div className="prompt-msg">
                                    <img className="arrow-right" src="/src/img/userCenter/arrow_right.png"/>
                                </div>
                            </div>
                        </Link>
                    </li>

                    {/*<li className={`li-padding info-area ${browser.versions.weixin?'':'c-dpno'}`} onClick={this.unBindClick}>
                        绑定微信
                        <span className="prompt-msg">解除绑定</span>
                    </li>*/}
                </ul>
                {/*<button onClick={this.exitClick}>退出登录</button>*/}
            </div>
            :
            <LoadingRound />
        );
    }
}

//显示头像大图
class ShowAvatar extends Component {
    componentDidMount() {
        $(".show-avatar").css({minHeight: $(window).height()});
    }

    cancelShowAvatar = ()=> {
        this.props.changeState({ showAvatar: false});
    }

    render(){
        let { showStart,showAvatar,avatar } = this.props;
        return(
            <div className={`show-avatar ${showStart?(showAvatar ? "animationBg1" : "animationBg2"):"c-dpno"}`} onClick={this.cancelShowAvatar}>
                <img className={`${showStart?(showAvatar ? "animationAvatar1" : "animationAvatar2"):"c-dpno"}`}
                     src={avatar ? avatar : "/src/img/icon/avatar/default-avatar.png"}/>
            </div>
        );
    }
}

//选择性别
class ChooseSex extends Component {
    componentDidMount() {
        let mySwiper = new Swiper(".sex-container", {
            preventClicks: true,
            direction : 'vertical',
            slideToClickedSlide: true,
            slidesPerView : 2
        });
    }

    cancelSex = ()=> {
        this.props.changeState({shadySlide: false, sexSlideIn: false});
    }

    confirmSex = ()=> {
        let sexVal = $(".sex-container .swiper-slide-active").text();
        if(sexVal==="女"){
            sexVal="FEMALE";
        }else if(sexVal==="男"){
            sexVal="MALE";
        }else{
            sexVal="UNKNOWN";
        }
        let token = getCookie('token');
        let self = this;
        //修改性别
        axios.request({
            ...pageApi.uc_setUserInfo,
            headers: { 'Authorization': "Bearer " + token },
            data:{ gender: sexVal }
        }).then(({data})=>{
            if(data.code==="200"){
                self.props.changeState({ sex: sexVal });
                Popup.MsgTip({msg: "性别修改成功"});
            }else{
                Popup.MsgTip({msg: "性别修改失败"});
            }
        });
        /*$.ajax({
            url: "/account/user/profile",
            data: JSON.stringify({
                sex: sexVal
            }),
            type: "PUT",
            contentType: "application/json",
            success(data){
                self.props.changeState({ sex: sexVal });
                Popup.MsgTip({msg: "性别修改成功"});
            },
            error(err){
                Popup.MsgTip({msg: "性别修改失败"});
            }
        });*/

        //关闭弹窗
        this.props.changeState({shadySlide: false, sexSlideIn: false});
    }

    render(){
        let { sexStart,sexSlideIn } = this.props;
        return(
            <div className="animation-sex">
                <div className={`choose-sex ${sexStart?(sexSlideIn ? "animation1" : "animation2"):""}`}>
                    <div className="fixed-line c-pa" style={{top:"122px"}}></div>
                    <div className="fixed-line c-pa" style={{top:"165px"}}></div>
                    <ul className="nav">
                        <li className="cancel" onClick={this.cancelSex}>取消</li>
                        <li className="confirm" onClick={this.confirmSex}>完成</li>
                    </ul>
                    <div className="sex-content" data-plugin="swiper">
                        <div className="swiper-container sex-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">女</div>
                                <div className="swiper-slide">男</div>
                                <div className="swiper-slide"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//选择生日
class ChooseBirth extends Component {
    constructor(props){
        super(props);
        let date = new Date();
        let { birth } = this.props,
            birthArr = birth?birth.split("-").map((val)=>{return parseInt(val);}):[],
            len = birthArr.length;

        this.state={
            nowYear: date.getFullYear(),
            nowMonth: date.getMonth(),
            nowDay: date.getDate(),

            yearInit: len?70-(date.getFullYear()-birthArr[0]):70,
            monthInit: len?birthArr[1]-1:date.getMonth(),
            dayInit: len?birthArr[2]:date.getDate(),

            yearCnt: 0,
            monthCnt: 0,
            dayCnt: 0,

            dayArr: this.dayGenerator(len?date.getFullYear():birthArr[0],(len?birthArr[1]-1:date.getMonth())+1)
        }
    }

    componentDidMount() {
        let { nowYear,nowMonth,nowDay,yearInit,monthInit,dayInit,yearCnt,monthCnt,dayCnt } = this.state;

        let self = this;
        let daySwiper = new Swiper(".day-container", {
            preventClicks: true,
            direction : 'vertical',
            slideToClickedSlide: true,
            slidesPerView : 5,
            centeredSlides: true,
            initialSlide: dayInit-1,
            onSlideChangeEnd: function (swiper) {
                if(dayCnt>0){
                    let { year,month,day } = self.getSelTime(); //获取当前swiper选择的年月日

                    if( year===nowYear && month-1===nowMonth && day > nowDay){
                        swiper.slideTo(nowDay-1, 200, true); //选择大于当前日期的日子，自动回滚到当前日
                    }
                }
                dayCnt++;
            }
        });

        let monthSwiper = new Swiper(".month-container", {
            preventClicks: true,
            direction: 'vertical',
            slideToClickedSlide: true,
            slidesPerView: 5,
            centeredSlides: true,
            initialSlide: monthInit,
            onSlideChangeEnd: function (swiper) {
                if(monthCnt>0){
                    let { year,month,day } = self.getSelTime(); //获取当前swiper选择的年月日

                    if( year===nowYear && month>nowMonth ){
                        swiper.slideTo(nowMonth, 200, true); //选择大于当前月份的月，回滚到当前月
                    }
                    if( year===nowYear && month-1===nowMonth && day > nowDay){
                        daySwiper.slideTo(nowDay-1, 200, true); //选择大于当前日期的日子，回滚到当前日
                    }

                    let dayArr = self.dayGenerator(year,month),
                        dayNum = self.getDayNum(year,month);
                    self.setState({ dayArr: dayArr });
                    daySwiper.updateSlidesSize();

                    if(!day || day>dayNum){
                        daySwiper.slideTo(dayNum-1, 200, true); //不存在的日期，回滚到当前月最后一天
                    }
                }
                monthCnt++;
            }
        });

        let yearSwiper = new Swiper(".year-container", {
            preventClicks: true,
            direction : 'vertical',
            slideToClickedSlide: true,
            slidesPerView: 5,
            centeredSlides: true,
            initialSlide: yearInit,
            onSlideChangeEnd: function (swiper) {
                if(yearCnt>0){
                    let { year,month,day } = self.getSelTime(); //获取当前swiper选择的年月日

                    if( year===nowYear && month>nowMonth ){
                        monthSwiper.slideTo(nowMonth, 200, true); //选择大于当前月份的月，回滚到当前月
                    }
                    if( year===nowYear && month-1===nowMonth && day > nowDay){
                        daySwiper.slideTo(nowDay-1, 200, true); //选择大于当前日期的日，回滚到当前日
                    }

                    let dayArr = self.dayGenerator(year,month),
                        dayNum = self.getDayNum(year,month);
                    self.setState({ dayArr: dayArr });
                    daySwiper.updateSlidesSize();

                    if(!day || day>dayNum){
                        daySwiper.slideTo(dayNum-1, 200, true); //不存在的日期，回滚到当前月最后一天
                    }
                }
                yearCnt++;
            }
        });
    }

    //获取当前选择swiper选择的年月日值
    getSelTime = ()=> {
        return {
            year: parseInt($(".year-container .swiper-slide-active").text().split("年")[0]),
            month: parseInt($(".month-container .swiper-slide-active").text().split("月")[0]),
            day: parseInt($(".day-container .swiper-slide-active").text().split("日")[0])
        }
    }

    //判断当前年月下的天数
    getDayNum = (year,month)=> {
        let dayNum;
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: dayNum = 31;break;
            case 4:
            case 6:
            case 9:
            case 11: dayNum = 30;break;
            case 2: dayNum = (( year%4==0 && year%100!=0)|| year%400 == 0)?29:28;break;
        }
        return dayNum;
    }

    //生成包含当前年月下的天数数组
    dayGenerator = (year,month)=>{
        let dayArr = [],
            dayNum = this.getDayNum(year,month);
        for(let i=1;i<=dayNum;i++){
            dayArr.push(i);
        }
        return dayArr;
    }

    //取消
    cancelBirth = ()=> {
        this.props.changeState({shadySlide: false, birthSlideIn: false});
    }
    //确定
    confirmBirth = ()=> {
        let year = $(".year-container .swiper-slide-active").text().split("年")[0],
            month = $(".month-container .swiper-slide-active").text().split("月")[0],
            day = $(".day-container .swiper-slide-active").text().split("日")[0],
            birthVal = year+"-"+month+"-"+day;
        
        let self = this;
        let token = getCookie('token');
        
        //修改性别
        axios.request({
            ...pageApi.uc_setUserInfo,
            headers: { 'Authorization': "Bearer " + token },
            data:{ birthDate : birthVal }
        }).then(({data})=>{
            if(data.code==="200"){
                self.props.changeState({ birth: birthVal });
                Popup.MsgTip({msg: "生日修改成功"});
            }else{
                Popup.MsgTip({msg: "生日修改失败"});
            }
        });
        
        /*$.ajax({
            url: "/account/user/profile",
            data: JSON.stringify({
                birthDay: birthVal
            }),
            type: "PUT",
            contentType: "application/json",
            success(data){
                self.props.changeState({ birth: birthVal });
                Popup.MsgTip({msg: "生日修改成功"});
            },
            error(err){
                Popup.MsgTip({msg: "生日修改失败"});
            }
        });*/
        //关闭弹窗
        this.props.changeState({shadySlide: false, birthSlideIn: false});
    }

    getYear = ()=> {
        let yearArr = [];
        let nowYear = new Date().getFullYear();
        for(let i=nowYear-70; i<= nowYear; i++){
            yearArr.push(i+"年");
        }
        return yearArr;
    }

    getMonth = ()=> {
        let monthArr = [];
        for(let i=1; i<=12; i++){
            monthArr.push((i<10 ? '0'+i : i)+"月");
        }
        return monthArr;
    }

    render(){
        let { birthSlideIn,birthStart } = this.props;
        let { dayArr } = this.state;
        let yearList = this.getYear().map(function (item, i) {
            return <div key={i} className="swiper-slide"><p className="each-year">{item}</p></div>
        });
        let monthList = this.getMonth().map(function (item, i) {
            return <div key={i}  className="swiper-slide"><p className="each-month">{item}</p></div>
        });
        let dayList = dayArr.map(function (item, i) {
            return <div key={i} className="swiper-slide"><p className="each-day">{(item<10?"0"+item:item)+"日"}</p></div>
        });

        return(
            <div className="animation-birth">
                <div className={`choose-birth ${birthStart?(birthSlideIn ? "animation1" : "animation2"):""}`}>
                    <div className="fixed-line c-pa" style={{top:"126px"}}></div>
                    <div className="fixed-line c-pa" style={{top:"169px"}}></div>
                    <ul className="nav">
                        <li className="cancel" onClick={this.cancelBirth}>取消</li>
                        <li className="confirm" onClick={this.confirmBirth}>完成</li>
                    </ul>
                    <div className="birth-content" data-plugin="swiper">
                        <div className="swiper-container year-container">
                            <div className="swiper-wrapper">
                               {yearList}
                            </div>
                        </div>

                        <div className="swiper-container month-container">
                            <div className="swiper-wrapper">
                                {monthList}
                            </div>
                        </div>

                        <div className="swiper-container day-container">
                            <div className="swiper-wrapper">
                                {dayList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}