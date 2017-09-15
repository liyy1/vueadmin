import fetch from 'src/utils/fetch';

export function getUsers(para) {
	return fetch({
		url: '/user/query',
		method: 'post',
		data:para
	});
}

export function saveUser(para) {
	return fetch({
		url: '/user/save',
		method: 'post',
		data:para
	});
}

export function getRoleOptions() {
	return fetch({
		url: '/user/query',
		method: 'post'
	});
}