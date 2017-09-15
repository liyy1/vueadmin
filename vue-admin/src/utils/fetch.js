import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
import router from '../routes'
import localCache from './localCache'

// 创建axios实例
const service = axios.create({
	baseURL: 'http://127.0.0.1/mms', // api的base_url
	//headers: {'content-Type':'appliction/x-www-form-urlencoded'},
	timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
	if(localCache.getToken()) {
		config.headers['X-Token'] = localCache.getToken(); 
	}
	return config;
}, error => {
	console.log(error); // for debug
	Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(response => {
	const code = response.data;
	if(code == 5001 || code == 5002){
		Message({
			message: '您已超时，请重新登录！',
			type: 'error'
		});
		router.push({ path: '/login' });
	} else {
		return response
	}
},error => {
	console.log('err' + error); // for debug
	Message({
		message: error.message,
		type: 'error'
	});
	return Promise.reject(error);
})

export default service;