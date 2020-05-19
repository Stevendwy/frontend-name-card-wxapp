//动态创建js加载
export function miniProgramLogin(url){
	if(url){
		wx.miniProgram.navigateTo({url: `/pages/others/login/login?redirect_uri=${encodeURIComponent(url)}`});
	}else {
		wx.miniProgram.switchTab({url: '/pages/mall/index'});
	}
}

export function miniProgramShopCart(url){
	wx.miniProgram.navigateTo({url: '/pages/product/shopCart/index'});
}

export function miniProgramGroup(objectId){
	wx.miniProgram.navigateTo({url: `/pages/product/pieceSaleShare/pieceSaleShare?object_id=${objectId}`});
}

export function miniProgramBags(url){
	wx.miniProgram.switchTab({url: '/pages/jumppage/index'});
}

export function miniProgramMine(url){
	wx.miniProgram.switchTab({url: '/pages/mine/mine/index'});
}

export function miniProgramMall(url){
	wx.miniProgram.switchTab({url: '/pages/mall/index'});
}

export function shareMiniProgramUrl(url){
	wx.miniProgram.postMessage({data: {url: url}})
}

export function shareMiddlePage(itemId , commissionMinPrice) {
	wx.miniProgram.navigateTo({url: `/pages/product/shareMiddlePage/shareMiddlePage?item_id=${itemId}&commission_min_price=${commissionMinPrice}`});
}
