import fetch from 'src/utils/fetch';

export function getUserList(para) {
	return fetch({
		url: '/role/query',
		method: 'post',
		para
	});
}

export function getRoleOptions(){
	return fetch({
		url: '/role/getRoleOptions',
		method: 'post'
	});
}

