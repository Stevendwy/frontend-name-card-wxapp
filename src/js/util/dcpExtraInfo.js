//埋点加入购物车
export function setExtraInfoGwc(goodsName, itemId, skuId, quantity, httpcode, serviceCode, message) {
    return {
        type: "ds-gwc",
        goodsName:goodsName,
        goodsId: itemId,
        skuId: skuId,
        goodsCounts: quantity,
        httpcode: httpcode,
        serviceCode: serviceCode,
        message: message
    }
}
//埋点收藏夹
export function setExtraInfoScj(itemId, goodsName, shopId, httpcode, serviceCode, message) {
    let extraInfo;
    if(itemId)
        extraInfo = {
            type: "ds-scj",
            goodsId: itemId,
            goodsName:goodsName,
            httpcode: httpcode,
            serviceCode: serviceCode,
            message: message
        };
    if(shopId)
        extraInfo =  {
            type: "ds-scj",
            shopId: shopId,
            httpcode: httpcode,
            serviceCode: serviceCode,
            message: message
        };
    return extraInfo
}
//埋点关键字搜索
export function setExtraInfoGjzss(keyword, httpcode, serviceCode, message) {
    return {
        type: "ds-gjzss",
        keyword:keyword,
        httpcode: httpcode,
        serviceCode: serviceCode,
        message: message
    }
}

