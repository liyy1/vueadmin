import fetch from 'src/utils/fetch';

export function getDeptTree(para) {
	return fetch({
		url: '/dept/getDeptTree',
		method: 'post',
		para
	});
}

export function getDeptInfo(para) {
	return fetch({
		url: '/user/getDeptInfo',
		method: 'post',
		para
	});
}

export function getDeptOptions(){
	return fetch({
		url: '/dept/getDeptOptions',
		method: 'post'
	});
}
