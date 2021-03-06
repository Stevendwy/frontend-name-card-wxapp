import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Link} from 'react-router';
import {PurchaseLimit} from 'filters/index'
import {LoadingRound, EmptyPage, ShareAndTotop} from 'component/common';
import {tip} from 'component/modules/popup/tip/tip';
import {browserHistory} from 'react-router';
import {Modal, Fix} from 'component/modal';
import {NewModal} from 'component/modules/modal/modal';
import {PureComponent} from 'component/modules/HOC/PureComponent';
import axios from 'js/util/axios';
import {BarrageStripConnnect} from "./detail"
import {timeCtrl, judgeIphoneX, addImageSuffix, hideFlag} from "src/js/util/index"
import {getCookie} from 'js/common/cookie';

import './item.scss';

import {
	ItemNav,
	ScrollImageState, // 滚动图片
	SeverArea, // 配送区域
	EvaluateArea, //评价区域
	CouponWrap, //领券区域
	RecommendArea, //推荐区域
	ShopArea, //店铺区域
	GoodsDetail,
	rangePrice,
	chooseSpec,
	LinkChange,
	Tag,
	Collect,
	TotopAndCart,
	Specs,
	PromotionInfo,
	pageApi,
	createBuyAction,
	ExpectTax,
	scaleImg,
	flyToCart,
	SharingMakes,
    VipArea
} from "./detail.jsx"
import {setExtraInfoGwc} from 'js/util/dcpExtraInfo';

class Notice extends PureComponent {
	render() {
		return (
			<div className="notice-group-price">
				<Price item={this.props.data} proStatus={this.props.proStatus} promotion={this.props.promotion}/>
				{this.props.proStatus &&
				<DeadLine {...this.props.promotion.promotion[0]} intervalT={this.props.intervalT}/>}
			</div>
		)
	}
}

class Price extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sellPrice: parseFloat((+this.props.item.sell_price).toFixed(2)),
			marketPrice: parseFloat((+this.props.item.market_price).toFixed(2)),
			groupPerson: ""
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps.proStatus) {
			this.setState({
				sellPrice: newProps.promotion.promotion[0].rules.group_price,
				// marketPrice: rangePrice(newProps.promotion, false),
				groupPerson: newProps.promotion.promotion[0].rules.group_person
			});
		}
	}

	componentDidMount() {
		if (this.props.proStatus) {
			this.setState({
				sellPrice: this.props.promotion.promotion[0].rules.group_price,
				// marketPrice: rangePrice(this.props.promotion, false),
				groupPerson: this.props.promotion.promotion[0].rules.group_person
			});
		}
	}

	render() {
		let {is_free, trade_type, tax_rate} = this.props.item;
		let {sellPrice, marketPrice, groupPerson} = this.state;
		return (
			<div className="c-cfff">
				<span className="c-fs10 c-dpib c-fl group-person">{groupPerson}人团</span>
				<span className="c-fs20 c-dpib c-fl"> ¥{sellPrice}</span>
				{marketPrice && marketPrice !== sellPrice ?
					<span className="c-dpib c-fl market-price"> ¥{marketPrice}</span> : null }
			</div>
		)

	}
}

class DeadLine extends Component {
	constructor(props) {
		super(props);
		this.state = {time: 0, startFlag: false, intervalT: this.props.intervalT}
	}

	componentDidMount() {
		this.changeTime();
		this.intervalTime()
	}

	changeTime = () => {
		//start_time 起始时间（仅判断是否开始） now_time当前时间（服务器取得） end_time 结束时间 intervalT 第一次进入页面的时间和再返回时间的差值
		let {start_time, now_time, end_time} = this.props;
		let {intervalT} = this.state;
		now_time = new Date(now_time.replace(/-/g, '/')).getTime() + parseInt(intervalT);
		start_time = new Date(start_time.replace(/-/g, '/')).getTime();
		end_time = new Date(end_time.replace(/-/g, '/')).getTime();
		if (now_time < start_time) {
			this.setState({time: parseInt((start_time - now_time) / 1000), startFlag: true});
		} else {
			this.setState({time: parseInt((end_time - now_time) / 1000), startFlag: false});
		}
	};

	componentWillReceiveProps(newProps) {
		if (newProps.intervalT !== this.state.intervalT) {
			this.setState({intervalT: newProps.intervalT}, function () {
				this.changeTime();
				window.clearInterval(this.timer);
				this.timer = null;
				this.intervalTime()
			});
		}
	}

	intervalTime() {
		this.timer = setInterval(() => {
			let t = --this.state.time;
			if (t < 0) {
				location.reload()
			} else {
				this.state.time = t;
				this.setState(this.state);
			}
		}, 1000)
	}

	componentWillUnmount() {
		window.clearInterval(this.timer);
		this.timer = null
	}

	render() {
		return (
			<div className="c-cfff c-fs12 c-fr group-purchase-deadLine" id="group-purchase-deadLine">
				<div>{this.state.startFlag ? "距开始仅剩" : "距结束仅剩"}</div>
				<div>{timeCtrl.formatTextTime(this.state.time)}</div>
			</div>
		)
	}
}

class PriceArea extends Component {
	render() {
    const {vip_info} = this.props.data
    return (
      <div className="price-area">
        <VipArea vipInfo={vip_info}/>
        <GoodsTit {...this.props}/>
        <Tag item={this.props.data}/>
      </div>
    )
	}
}

class GoodsTit extends Component {
	render() {
		let {title, sub_title, shop} = this.props.data;
		return (
			<div >
				<p className="goods-tit">{title}</p>
				{this.props.proStatus && this.props.promotion.promotion[0].rules.group_type === "Rookie" ?
					<p className="c-c666 sub-title">该商品所有用户均可开团，仅限泰然城购物的新用户参团哦！开团后邀请泰然城新朋友参团吧</p> : sub_title &&
					<p className="c-c666 sub-title">{sub_title}</p>}
			</div>
		)
	}
}


class FightGroupActive extends Component {
	render() {
		let {promotion, location} = this.props;
		return (
			<div className="fight-group-active">
				<div className="c-fs12 fight-group-top">支付开团并邀请
					<span>{promotion.promotion[0].rules.group_person - 1}</span>
					人参团，人数不足退款
				</div>
				<Link to="/pintuan-rules" className="fight-group-rules">
					<p className="c-fs15 c-cf55 c-mb5">拼团玩法</p>
					<img src="src/img/pintuan/group-rules.png"/>
					<img className="direction-right-icon" src="src/img/pintuan/black-direction-right.png"/>
				</Link>
				<FightGroupDetail promotion={promotion} location={location}/>
			</div>)
	}
}

class FightGroupDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMoreGroup:false,
			moreGroupData:[]
		}
	}

	closeMoreGroup(){
		this.setState({
			showMoreGroup: false
		})
	}

	onClickGetMoreGroupData = () => {
		let {salesmanId,item_id} = this.props.location.query;
		let _salesmanId = salesmanId ? salesmanId : window.localStorage.getItem("salesmanId");
		axios.request({
			...pageApi.MoreGroupBuyList,
			params: {
				salesman_id: _salesmanId,
				item_id: item_id
			}
		}).then((res) => {
			this.setState({
				showMoreGroup: true,
				moreGroupData:res.data.data || []
			});
		}).catch(error => {
			console.log(error);
			tip.show({msg: error.response && error.response.data.message || '服务器繁忙'});
		});
	};

	getDetailList() {
		let {group_info, group_data} = this.props.promotion.groupBuy;
		let {location} = this.props;
		let ret = [];
		group_info && group_info.forEach((val, key) => {
			ret.push(<FightGroupDetailList key={key} data={val} groupData={group_data} location={location}/>)
		});
		return ret
	}

	componentWillUnmount(){
        //重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
          return;
        };
    }

	render() {
		let {promotion, location} = this.props;
		let {group_info,has_more} = promotion.groupBuy
		let {showMoreGroup,moreGroupData} = this.state;
		let closeMoreGroup = this.closeMoreGroup.bind(this);
		return (
			group_info ?
				<div className="fight-group-detail">
					{
						group_info.length ? <div className="moregroup">
							<i className="current-icon"><img src="src/img/pintuan/red-current-icon.png" alt=""/></i>以下小伙伴正在发起团购，您可以直接参与
							{has_more ?<span className="current-icon-more"
								onClick={() => {
									this.onClickGetMoreGroupData();
								}}>更多<img className="direction-right-icon" src="src/img/pintuan/black-direction-right.png"/>
							</span> : null}
						</div> : null
					}
					<ul className="participants">
						{this.getDetailList()}
					</ul>
					{
						showMoreGroup ? <AlertMoreGroupList promotion={promotion} location={location} moreGroupData={moreGroupData} closeMoreGroup={closeMoreGroup}/> : null
					}
				</div> : null
		)
	}
}

class AlertMoreGroupList extends Component {
	constructor(props) {
		super(props);
	}

	getDetailList() {
		let {group_data} = this.props.promotion.groupBuy;
		let {location , moreGroupData} = this.props;
		let ret = [];
		moreGroupData && moreGroupData.forEach((val, key) => {
			ret.push(<FightGroupDetailList key={key} data={val} groupData={group_data} location={location}/>)
		});
		return ret
	}

	render(){
		let {closeMoreGroup} = this.props;
		return(
			<div className="alert-moregrouplist">
				<div className="center-popup">
					<div className="title" onClick={
						()=>{
							closeMoreGroup()
						}
					}>
						<span className="title-world">正在开团</span>
						<img src="src/img/pintuan/close.png" alt=""/>
					</div>
					<ul className="participants">
						{this.getDetailList()}
					</ul>
					<div className="bottom">
						最多显示10个团
					</div>
				</div>
			</div>
		)
	}
}

class FightGroupDetailList extends Component {
	constructor(props) {
		super(props);
		let {user_id} = this.props.location.query;
		this.state = {
			user_id: user_id
		}
	}

	componentWillMount() {
		let {expire_time, now_time} = this.props.data;
		expire_time = new Date(expire_time.replace(/-/g, '/')).getTime();
		now_time = new Date(now_time.replace(/-/g, '/')).getTime();
		if (now_time > expire_time) {
			this.state.unUpdate = true
		}
	}

	componentDidMount() {
		let {expire_time, now_time} = this.props.data;
		expire_time = new Date(expire_time.replace(/-/g, '/')).getTime();
		now_time = new Date(now_time.replace(/-/g, '/')).getTime();
		if (!this.unUpdate) {
			this.state.time = (expire_time - now_time) / 1000;
			this.intervalTime()
		}
	}

	intervalTime() {
		this.timer = setTimeout(() => {
			let t = --this.state.time;
			if (t < 0) {
				this.state.unUpdate = true
			} else {
				this.state.time = t;
				this.intervalTime()
			}
			this.setState(this.state);
		}, 1000)
	}

	componentWillUnmount() {
		window.clearTimeout(this.timer)
		this.timer = null
	}

	getTime() {
		if (this.state.unUpdate) {
			return "团已过期"
		} else {
			let _time = this.state.time ? this.state.time : 0
			return timeCtrl.formatTime(_time)
		}
	}

	getName(name, phone) {
		if (name) {
			return name.length > 2 ? name.substring(0, 1) + "**" + name.substring(name.length - 1) : name
		}
		return phone && phone.replace(/(\d{3})\d{5}(\d{3})/, '$1*****$2')
	}

	render() {
		let {data} = this.props;
		let {user_id} = this.state;
		return (
			<li>
				<div className="list-detail">
					<div className="list-left">
						<div className="participants-name">{this.getName(data.nickname, data.name)}</div>
						<div className="group-info">
							<div className="group-info-residue">
								还差{data.required_person - data.current_person}人成团
							</div>
							<div className="group-info-time">{this.getTime()}</div>
						</div>
					</div>
					<LinkChange className="list-right"
								to={user_id ? `/groupDetail?object_id=${data.id}&user_id=${user_id}&itemFlag=true` : `/groupDetail?object_id=${data.id}&itemFlag=true`}>
						去参团<i className="group-direction-right"></i>
					</LinkChange>
				</div>
				<img className="participants-avatar" src={data.avatar || "/src/img/icon/avatar/default-avatar.png"}
					 alt="头像"/>
			</li>
		)
	}
}


export class BuyModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toCartClick: true,
		}
	}

	componentWillMount() {
		let flag = this.judgeSingleSku();
		if (flag) {
			this.changeBusinessPrice();
		}
	}

	//判断是否是单规格(无规格)
	judgeSingleSku = () => {
		let {skus} = this.props.promotion.info, skusArr = [];
		let keys = Object.keys(skus);
		keys.map((item) => {
			if (skus[`${item}`].store !== 0) {
				skusArr.push(skus[`${item}`])
			}
		});
		if (keys.length === 1 || skusArr.length === 1) {
			return true;
		} else {
			return false
		}
	};

	//单规格或者无规格初始化价格和skuId
	changeBusinessPrice = () => {
		let {num, nowPrice, nowSkuId, storeNum, selectArr, specKey, originalPrice} = this.props.retState;
		let skus = this.props.promotion.info.skus;
		let specs = this.props.promotion.info.specs;
		let keys = Object.keys(skus), newSpecKey;
		keys.map((item) => {
			if (skus[`${item}`].store !== 0) {
				newSpecKey = item;
			}
		});
		newSpecKey = newSpecKey ? newSpecKey : keys[0];
		nowPrice = skus[newSpecKey].price;
        originalPrice = skus[newSpecKey].price;
		nowSkuId = skus[newSpecKey].sku_id;
		storeNum = skus[newSpecKey].store;
		selectArr = newSpecKey.split("_");
		specKey = Object.keys(specs);
		let newRetState = {...this.props.retState, nowPrice, nowSkuId, storeNum, selectArr, specKey, originalPrice};
		this.props.InitState(newRetState);
	};

	addMinNum = (data) => {
		let {num, nowPrice, nowSkuId, selectArr} = this.props.retState;
		let cnum = num + data;
		num = cnum;
		let newRetState = {...this.props.retState, num, nowPrice};
		this.props.InitState(newRetState);
	};

	purchaseLimit = () => {
		let {trade_type} = this.props.data;
		if (this.props.retState.num > 1 && this.props.retState.nowSkuId && PurchaseLimit(trade_type)) {
			return this.props.retState.num * this.props.retState.nowPrice > 2000
		}
	};

	getActionData = (flag) => {
		let {retState, promotion, areaData, data: {shop_id, shop: {attr}}, itemId} = this.props,
			extraProArr = [], {user_id} = this.props.location.query;
		let addrList = this.props.mix && this.props.mix.addrList;
		let addr_id = addrList ? (addrList.recent_addr.length > 0 && addrList.recent_addr[0].addr_id || addrList.default_addr && addrList.default_addr.addr_id || 0) : 0;
		promotion.promotion && promotion.promotion.map((item, i) => {
			extraProArr.push({"promotion_id": item.id, "role": "main_good", type: item.type})
		});
		let commissionUcenterId=window.localStorage.getItem("commissionUcenterId");
		let salesmanId=window.localStorage.getItem("salesmanId");
		let ret = {
			subscribe: [{
				"quantity": 1,  //拼团只能购买1件
				"cart_id": 0,
				"sku_id": retState.nowSkuId,
				"item_id": itemId,
				"created_at": new Date().getTime(),
				"extra": {
					"group_buy_params": {
						"type": promotion.promotion[0].rules.group_type,  //普通拼团  新人团
						"object_id": this.props.data.object_id || 0,  //团id 开团默认传0
						"mode": this.props.data.object_id ? "join" : "open" //开团 open  参团 join
					},
					"promotion": extraProArr,
					"commission_user_id": user_id,
					"name_card_salesman_id": salesmanId,  //名片业务员id
					"commission_ucenter_id": commissionUcenterId
				}
			}
			],
		};

		ret = flag ? {
			...ret,
			buyMode: "fast_buy",
			bizMode: "online",
			bizAttr: "trmall",
			address: areaData.addressData,
		} : {
			"item_id": itemId,
			"sku_id": retState.nowSkuId,
			"quantity": retState.num || 1,
			"shop_id": shop_id,
			"extra": {
				"price": retState.originalPrice,
				"commission_user_id": user_id,
				"name_card_salesman_id": salesmanId,  //名片业务员id
				"commission_ucenter_id": commissionUcenterId
			}
		};
		return ret
	};

	checkSpec() {
		let {specKey, nowSkuId} = this.props.retState;
		let {specs} = this.props.promotion.info;
		let unSelectKey;
		if (!nowSkuId) {
			unSelectKey = Object.keys(specs).filter((val, index) => {
				return +val !== specKey[index]
			});
			return /*specs[unSelectKey[0]].name;*/ true
		} else {
			return false
		}
	}

	//判断库存
	isHasStore = (sku, data, select) => {
		return data && data.some((list, i) => {
				if (list.ids[sku.index] == sku.spec) {
					let newSelect = select.slice();
					if (newSelect[sku.index]) {
						delete newSelect[sku.index];
					}
					if (newSelect.every((item, j) => {
							return select[j] == list.ids[j]
						})) {
						return list.skus.store > 0
					} else {
						return false;
					}
				} else {
					return false;
				}
			});
	};

	//选择规格属性
    specSelect = (spec, index, key) => {
        let {retState} = this.props;
        let {skus} = this.props.promotion.info;
        let {realStore, activity_type} = this.props.promotion;
        let {selectArr, specKey, nowSku, storeNum, newData, nowSkuId, nowPrice, num, deductPrice, originalPrice} = retState,
            newSpecKey;
        selectArr = selectArr.slice();
        if (selectArr[index] === spec) {
            delete selectArr[index];
            delete specKey[index]
        } else {
            selectArr[index] = spec;
            specKey[index] = key;
        }

        // 选中一个商品规格，更新数据
        newSpecKey = selectArr.join("_");
        if (selectArr.length == newData[0].ids.length && skus[newSpecKey]) {
            //更新对应skuId及其价格  sku 库存
            nowSku = skus[newSpecKey];
            nowSkuId = skus[newSpecKey].sku_id;
            nowPrice = skus[newSpecKey].price;
            storeNum = skus[newSpecKey].store;
            originalPrice = skus[newSpecKey].price;
            //更新num
            num = num < storeNum ? num : storeNum;
            deductPrice = skus[newSpecKey].deduct_price;
        } else {
            //未选中一个商品规格，价格设为标准价
            nowPrice = rangePrice(this.props.promotion, true);
            storeNum = realStore;
            nowSkuId = "";
            nowSku = "";
            deductPrice = "";
            originalPrice = "";
        }
        let RetState = {
            ...this.props.retState,
            nowSku,
            selectArr,
            specKey,
            nowSkuId,
            nowPrice,
            num,
            storeNum,
            deductPrice,
            originalPrice
        };
        this.props.InitState(RetState);
    };

	//失去焦点保存num
	importNum = (e) => {
		let val = e.target.value;
		let {num, storeNum} = this.props.retState;
		if (!val) {
			num = this.preNum || storeNum;
			let RetState = {...this.props.retState, num};
			this.props.InitState(RetState);
		}
	};
	//更改num
	changeNum = (e) => {
		let {num, nowSku, storeNum} = this.props.retState;
		let val = e.target.value;
		this.preNum = num;
		val = val.replace(/[^\d]/g, '');
		if (+val) {
			num = +val > storeNum ? num : +val;
		} else {
			num = ""
		}
		let RetState = {...this.props.retState, num};
		this.props.InitState(RetState);
	};
	onClickBuy = (type) => {
		let {itemId, data: {object_id}, promotion} = this.props;
		let flag = this.checkSpec();
		if (flag) {
			tip.show({msg: "请选择规格"});
			return
		}
		let groupBuy = type === "groupBuy" || this.props.active ? true : false;
		if (groupBuy) {
			axios.request({
				...pageApi.CheckGroupBuy,
				params: {
					promotion_id: promotion.promotion[0].id,
					object_id: object_id || 0,
					group_type: promotion.promotion[0].rules.group_type
				}
			}).then(() => {
				let orderInitParams = this.getActionData(groupBuy);
				// this.props.OrderInitParams(orderInitParams);  //保存于redux  刷新页面会被重置
				sessionStorage.setItem("fast_buy", JSON.stringify(orderInitParams));
				this.props.UpdateBuyModal({
					buyModal: this.props.active ? false : true,
					buyActive: this.props.active ? "" : type
				});
				browserHistory.push('/orderConfirm?item_id=' + itemId);
			}).catch(error => {
				console.log(error);
				tip.show({msg: error.response && error.response.data.message || '服务器繁忙'});
			});
		} else {  //加入购物车
			/*let orderInitParams = this.getActionData(groupBuy);
			 // this.props.OrderInitParams(orderInitParams);  //保存于redux  刷新页面会被重置
			 sessionStorage.setItem("fast_buy", JSON.stringify(orderInitParams));
			 this.props.UpdateBuyModal({
			 buyModal: this.props.active ? false : true,
			 buyActive: this.props.active ? "" : type
			 });
			 browserHistory.push('/orderConfirm?item_id=' + itemId);*/
			let self = this;
			self.setState({toCartClick: false});
			axios.request({
				...pageApi.toCart,
				params: this.getActionData()
			}).then(result => {
					self.setState({toCartClick: true});
					//更新购物车信息
					self.props.UpdateCartInfo(result.data.data);
					flyToCart();
					self.props.closeModal();
					//埋点操作
					let {item_id, quantity, sku_id} = this.getActionData();
                    let extraInfo = setExtraInfoGwc(title, item_id, sku_id, quantity, result.status, result.data.code, '加入购物车成功');
					sdk.dispatch('click', document.getElementById('add-package'), extraInfo);
				}
			).catch(error => {
                let {status, data} = error.response;
                tip.show({msg: data.message || '服务器繁忙'});
                self.setState({toCartClick: true});
				//埋点操作
				let {item_id, quantity, sku_id} = this.getActionData();
                let extraInfo = setExtraInfoGwc(title, item_id, sku_id, quantity, status, data.code, data.message);
				sdk.dispatch('click', document.getElementById('add-package'), extraInfo);
			})


		}
	};

	render() {
		let props = {
			addMinNum: this.addMinNum,
			changeNum: this.changeNum,
			importNum: this.importNum,
			isHasStore: this.isHasStore,
			specSelect: this.specSelect,
			judgeSingleSku: this.judgeSingleSku,
			onClickBuy: this.onClickBuy,
			purchaseLimit: this.purchaseLimit,
			...this.state,
			...this.props
		};
		return (
			<NewModal isOpen={this.props.buyModal} onClose={this.props.closeModal}>
				<div className="action-buy-modal" style={judgeIphoneX() ? {paddingBottom: "34px"} : {}}>
					<BuyModalTitle {...props} />
					<BuyModalInfo {...props} />
					<BuyModalButton {...props} />
				</div>
			</NewModal>
		)
	}
}

export class BuyModalTitle extends Component {
	constructor() {
		super();
		this.state = {
			isLarge: false
		}
	}

	componentDidUpdate() {
		if (this.state.isLarge) {
			let params = {
				newTime: 0,
				oldTime: 0,
				enlarge: false,
				relativeX: 0,
				relativeY: 0,
				x1: 0,
				x2: 0,
				y1: 0,
				startX: 0,
				endX: 0,
				wid: 0,
				hei: 0,
				lef: 0,
				to: 0,
				timerScale: null,
				self: this,
				isLarge: this.state.isLarge
			};
			scaleImg(".ui-table-view-large-wrapper", null, params);
		}
	}

	getImg() {
		let {data} = this.props;
		let {specKey, selectArr} = this.props.retState;
		let {info} = this.props.promotion;
		let ret, spec;
		specKey && specKey.some((val, key) => {
			spec = info.specs[val].values.filter((item, i) => {
				return item.spec_value_id == selectArr[key];
			});
			// spec = info.specs[val].values[selectArr[key]];
			ret = spec[0].image;
			return ret
		});
		if (!ret) {
			return data.primary_image;
		} else {
			return ret
		}
	}

	render() {
		let {data, retState, promotion, buyActive} = this.props;
		let {specs} = promotion.info;
		let choosedSpec = chooseSpec(retState, specs);
		let groupPrice = parseFloat(parseFloat(retState.groupPrice).toFixed(2));
		return (
			<div>
				{this.state.isLarge && <div className="ui-table-view-large-img"
											style={{height: $(window).height(), top: $(".action-buy-modal").height()}}>
					<div className="buy-shady" onClick={() => {
						this.setState({isLarge: false});
					}}></div>
					<div className="ui-table-view-large-wrapper" style={{height: $(window).height()}}>
						<img src={addImageSuffix(this.getImg(), "_l")}/>
					</div>
				</div>}
				<ul className="ui-table-view">
					<li className="ui-table-view-cell">
					<span className="posit-img"><img className="ui-media-object ui-pull-left"
													 src={this.getImg() ? addImageSuffix(this.getImg(), "_s") : '/src/img/item/no-img.png'}
													 width="80" height="80" onClick={() => {
						this.setState({isLarge: true});
					}}/></span>
						<div className="ui-media-body window-head">
							<div className="price-tag">
								<p className="ui-ellipsis text-price action-update-price">
									¥{buyActive === "buy" ? retState.nowPrice : groupPrice}</p>
							</div>
							{!(specs instanceof Array) && choosedSpec.length > 0 &&
							<p className="text-price-sel" style={{display: "block"}}> 已选 {choosedSpec} </p>}
						</div>
					</li>
				</ul>
			</div>
		)
	}
}
class BuyModalInfo extends Component {

	initList = () => {
		let {specs} = this.props.promotion.info;
		return Object.keys(specs).map((val, i) => {
			return <Specs specs={specs[val]} index={i} {...this.props} key={i}/>
		});
	}

	getLimit = () => {
		let {activity_type} = this.props.data;
		let {itemRules} = this.props.promotion;
		if (activity_type == "groupBuy") {
			return (
				<span className="limit_buy">限购{itemRules.user_buy_limit}件 (已购{itemRules.purchased_quantity}件)</span>
			)
		}
		return null
	};


	render() {
		let {addMinNum, changeNum, importNum, buyActive} = this.props;
		let {itemRules} = this.props.promotion;
		let {num, storeNum} = this.props.retState;
		// let limitNum = itemRules ? itemRules.user_buy_limit - itemRules.purchased_quantity : "";  //普通商品根本用不到这个逻辑
		return (
			<div className="attr-wrap">
				<div className="standard-area stable-standard cur">
					<div className="standard-info">
						{this.initList()}
					</div>
				</div>
				<div className="buy-amount">
					<span className="amount-tit">数量：</span>
					{buyActive === "buy" ? <span className="number-increase-decrease">
					<span className={`btn btn-action action-decrease ${num === 1 || num === "" ? "dis-click" : ""}`}
						  onTouchTap={num === 1 || num === "" ? "" : () => addMinNum(-1)}>－</span>
					<input type="number" className="action-quantity-input"
						   value={num} onBlur={importNum} onChange={changeNum}/>
						<span
							className={`btn btn-action action-increase ${num === storeNum || num === "" || storeNum === 0 ? "dis-click" : ""}`}
							onTouchTap={num === storeNum || num === "" || storeNum === 0 ? "" : () => addMinNum(1)}>＋</span>
					</span> : <span className="number-increase-decrease">
					<span className="btn btn-action action-decrease dis-click">－</span>
					<input type="text" className="action-quantity-input" readOnly
						   value="1"/>
						<span className="btn btn-action action-increase dis-click">＋</span>
					</span>}
					<span className="store_buy">库存{storeNum}件</span>
					{this.getLimit()}
					<div className="clearfix"></div>
				</div>
				<ExpectTax {...this.props} />
			</div>
		)
	}
}
export class BuyModalButton extends Component {
	render() {
		let {onClickBuy, purchaseLimit, toCartClick, buyActive, singleBuy, active, intervalT, promotion} = this.props;
		let start_time = 0, now_time = 0;
		if (promotion.promotion[0]) {
			now_time = promotion.promotion[0].now_time;
			start_time = promotion.promotion[0].start_time;
			now_time = new Date(now_time.replace(/-/g, '/')).getTime() + parseInt(intervalT);
			start_time = new Date(start_time.replace(/-/g, '/')).getTime();
		}
		// let isPurchaseLimit = purchaseLimit();
		let isPurchaseLimit = false;    //本期不做
		return (
			<div className="buy-option-btn" style={judgeIphoneX() ? {height: "85px"} : {}}>
				{now_time < start_time && buyActive === "groupBuy" ? <div className="c-bgfc15" onClick={() => {
					tip.show({msg: "拼团还未开始，请耐心等待哦~"})
				}}>即将开始</div> : <div>
					{ isPurchaseLimit ?
						<span className="purchase-limit">抱歉，海外直邮类商品和跨境保税类商品总价超过限额￥2000，请分次购买。</span> : null}
					<div className={`btn-tobuy ${isPurchaseLimit ? 'c-bgc9' : 'btn-group'}`} style={{width: "100%"}}
						 onTouchTap={isPurchaseLimit ? "" : () => {
							 buyActive === "groupBuy" ? onClickBuy(buyActive) : (toCartClick ? onClickBuy() : "")
						 }}>{active ? "确定" : (buyActive === "groupBuy" ? "立即开团" : "确定")}
					</div>
				</div>}
			</div>
		)
	}
}

export class Buy extends Component {
	active = (tab, flag) => {
		let num;
		if (flag) {
			this.setState({singleBuy: true})
		}
		this.props.UpdateBuyModal({buyModal: true, buyActive: tab});
	};

	render() {
		let {rules, now_time, start_time} = this.props.proStatus && this.props.promotion.promotion[0];
		now_time = now_time && new Date(now_time.replace(/-/g, '/')).getTime() + parseInt(this.props.intervalT);
		start_time = start_time && new Date(start_time.replace(/-/g, '/')).getTime();
		let {promotion, data} = this.props;
		let price = this.props.proStatus && rangePrice(this.props.promotion, true);
		return (
			this.props.mixStatus && this.props.proStatus ?
				<div>
					{(this.props.choose ?
						<LinkChange className="choose-btn" onClick={() => {
							this.active("groupBuy")
						}}> </LinkChange>
						:
						data.status === "SHELVING" ?
							promotion.realStore ?
								<div className="pintuan-btn-group">
									{now_time < start_time ?
										<LinkChange className="fight-group-start">
											<div id="person-price">￥{parseFloat((+rules.group_price).toFixed(2))}</div>
											<div onClick={() => {
												tip.show({msg: "拼团还未开始，请耐心等待哦~"})
											}}>即将开始
											</div>
										</LinkChange> :
										<LinkChange className="fight-group-purchase"
													onClick={() => this.active("groupBuy")}>
											<div id="group-price">￥{parseFloat((+rules.group_price).toFixed(2))}</div>
											<div>{rules.group_person}人团</div>
										</LinkChange>}
									<LinkChange className="buy-separately-btn" onClick={() => this.active("buy", true)}>
										<div id="person-price">￥{price}</div>
										<div>加入购物袋</div>
									</LinkChange></div>
								:
								<div className="pintuan-btn-group action-btn-group">
									<LinkChange type="button" className="ui-btn action-disable">已售罄</LinkChange>
								</div>
							:
							<div className="pintuan-btn-group action-btn-group">
								<LinkChange type="button" className="ui-btn action-disable">
									已下架
								</LinkChange>
							</div>)
					}
				</div> : <div className="action-btn-group c-fr">
				<span className="ui-btn  action-addtocart c-fl incomplete-addtocart">加入购物袋</span>
				<span className="ui-btn  action-buy-now c-fl incomplete-buy-now">立即购买</span>
			</div>
		)
	}
}

let BuyAction = createBuyAction({Buy});

// 活动
export class ActiveArea extends Component {
	render() {
		return ( <div className="active-area">
			<CouponWrap {...this.props} />
		</div>)
	}
}

//选择规格
export let createChooseSpec = function ({Buy}) {
	return class ChooseSpec extends PureComponent {
		render() {
			let {data, promotion, retState} = this.props;
			let {specs} = promotion.info;
			let chooseSpecs = chooseSpec(retState, specs);
			return (
				!(specs instanceof Array) ? <div className="choose-col">
					<div className="choose-spec c-fs13">
						<span
							className="c-mr15">{chooseSpecs.length > 0 ? "已选择 " : "选择 "}</span>{/*&& retState.nowSkuId*/}
						{chooseSpecs.length > 0 && chooseSpec(retState, specs)}{/* && retState.nowSkuId*/}
						<i className="icon icon-forward vertical-middle"><img
							src="/src/img/icon/arrow/arrow-right-icon.png"/></i>
					</div>
					{data.status === "SHELVING" ? promotion.realStore ?
						<Buy {...this.props} choose={true}/> : null : null}
					<div className="gap bgf4"></div>
				</div> : null
			)
		}
	}
};
let ChooseSpec = createChooseSpec({Buy});

export default class groupBuy extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			singleBuy: false
		};
	}

	closeModal = () => {
		this.props.UpdateBuyModal({buyModal: false});
	};

	render() {
		let {location, data, mix, rate, recommend, promotion, cartNum, isLogin, pending, mixStatus, rateStatus, recommendStatus, proStatus, cartInfoStatus, retState, areaData, UpdateBuyModal, InitState, UpdateCartInfo, buyModal, buyActive, intervalT} = this.props;
		let {item_id} = data;
		let props = {
			itemId: item_id,
			location: location,
			retState: retState,
			data: data,
			mix: mix,
			promotion: promotion,
			mixStatus: mixStatus,
			proStatus: proStatus,
			buyModal: buyModal,
			buyActive: buyActive,
			UpdateBuyModal: UpdateBuyModal,
			InitState: InitState,
			UpdateCartInfo: UpdateCartInfo,
			singleBuy: this.state.singleBuy,
			closeModal: this.closeModal,
			areaData: areaData,
			intervalT: intervalT
		};

		let group_data = proStatus && promotion.groupBuy.group_data;
		let commissionUcenterLoginType=window.localStorage.getItem("commissionUcenterLoginType");
		return (
			<div data-page="item-detail" id="item-details" ref="details">
				<BarrageStripConnnect />
				<ItemNav />
				{mixStatus && proStatus && <BuyModal {...props}/>}
				<div>
					<ScrollImageState data={data} group_data={group_data} ref="scrollImage"/>
					<Notice data={data} proStatus={proStatus} promotion={promotion} intervalT={intervalT}/>
					<PriceArea data={data} proStatus={proStatus} promotion={promotion}/>
					<div className="gap bgf4"></div>
					{proStatus && <FightGroupActive promotion={promotion} location={location}/>}
					{proStatus && <ActiveArea promotion={promotion} shop={data.shop}/>}
					<div className="gap bgf4"></div>
					{mixStatus && proStatus && <ChooseSpec {...props}/>}
					{mixStatus &&
					<SeverArea mix={mix} data={data} retState={retState} areaData={areaData} isLogin={isLogin}
							   pending={pending}/>}
					<div className="gap bgf4"></div>
				</div>
				<div className="screen-rate">
					{rateStatus && <EvaluateArea rate={rate} itemId={item_id}/>}
					<div className="gap bgf4"></div>
					{recommendStatus && hideFlag && <RecommendArea recommend={recommend.data}/>}
					{hideFlag && <div className="gap bgf4"></div>}
					{hideFlag && <ShopArea shop={data.shop}/>}
				</div>
				<div className="screen-detail">
					<GoodsDetail data={data}/>
				</div>
				<BuyAction cartNum={cartNum} cartInfoStatus={cartInfoStatus} {...props}/>
				{commissionUcenterLoginType === "true" && !!promotion.commission_income &&
				<SharingMakes item_id={item_id} commission_income={promotion.commission_income} commission_min_price={promotion.commission_min_price}/>}
			</div>
		)
	}
}
