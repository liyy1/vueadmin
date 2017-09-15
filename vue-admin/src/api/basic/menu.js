import fetch from 'src/utils/fetch';

export function getMenus(role) {
	return fetch({
		url: '/menu/query',
		method: 'post',
		role
	});
}
