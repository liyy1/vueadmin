import { login, logout, getInfo } from 'src/api/system.js'

const user = {
	state: {
		token: '',
		uid: undefined,
		username: '',
		realname: '',
		phone: '',
		avatar: '',
		sex: '',
		role: '',
		dept: ''
	},

	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
		SET_UID: (state, uid) => {
			state.uid = uid;
		},
		SET_USERNAME: (state, username) => {
			state.username = username;
		},
		SET_REALNAME: (state, realname) => {
			state.realname = realname;
		},
		SET_PHONE: (state, phone) => {
			state.phone = phone;
		},
		SET_AVATAR: (state, avatar) => {
			state.avatar = avatar;
		},
		SET_SEX: (state, sex) => {
			state.sex = sex;
		},
		SET_ROLE: (state, role) => {
			state.role = role;
		},
		SET_DEPT: (state, dept) => {
			state.dept = dept;
		},
		LOGOUT_USER: state => {
			state.user = '';
		}
	},

	actions: {
		// 登录
		Login({ commit }, user) {
			return new Promise((resolve, reject) => {
				login(user.username, user.password).then(response => {
					const data = response.data.data;
					commit('SET_TOKEN', data.token);
					commit('SET_UID', data.id);
					commit('SET_USERNAME', data.username);
					commit('SET_REALNAME', data.realname);
					commit('SET_AVATAR', data.avatar);
					commit('SET_SEX', data.sex);
					commit('SET_ROLE', data.role);
					commit('SET_DEPT', data.dept);
					resolve();
				}).catch(error => {
					reject(error);
				});
			});
		},

		// 登出
		LogOut({ commit, state }) {
			return new Promise((resolve, reject) => {
				logout(state.token).then(() => {
					commit('SET_TOKEN', '');
					commit('SET_ROLE', '');
					resolve();
				}).catch(error => {
					reject(error);
				});
			});
		}
	}
};

export default user;