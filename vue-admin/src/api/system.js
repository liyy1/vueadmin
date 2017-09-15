import fetch from 'src/utils/fetch';

export function login(data) {
  return fetch({
    url: '/system/login',
    method: 'post',
    data
  });
}

export function logout() {
  return fetch({
    url: '/system/logout',
    method: 'post'
  });
}

export function getMenus(role) {
	return fetch({
		url: '/system/getMenusByRole',
		method: 'post',
		data: { role }
	});
}

export function updatePwd(data) {
	return fetch({
		url: '/system/updatePwd',
		method: 'post',
		data
	})
}


