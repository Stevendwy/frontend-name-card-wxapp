import axios from 'axios';
import {browserHistory} from 'react-router';
import {miniProgramLogin} from 'js/util/miniProgramLogin';

//request拦截器全局加channel_type
axios.interceptors.request.use(config => {
	let {headers,url} = config;
    let _t = new Date().getTime();
    url = `${url}?_t=${_t}`;
	headers = Object.assign(headers, {"X-Channel": "TrMall", "X-Platform-Type": "XCX", "X-Platform-From": "TrMall"});
	// headers = {...headers,"X-Channel":"TrMall", "X-Platform-Type":"WX", "X-Platform-From":"TrMall"};
	config = {...config, headers, url};
	return config;
}, error => {
	return Promise.reject(error);
});

//对返回的状态进行判断
axios.interceptors.response.use(response => {
	if (response.data.code === 401) {
		miniProgramLogin(location.href);
		return
	}
	return response
}, error => {
	if (error.response && error.response.data.code === 401) {
		miniProgramLogin(location.href);
		return
	}
	return Promise.reject(error);
});

export default axios