const getters = {
  token: state => state.user.token,
  uid: state => state.user.uid,
  username: state => state.user.username,
  realname: state => state.user.realname,
  avatar: state => state.user.avatar,
  phone: state => state.user.phone,
  role: state => state.user.role,
  dept: state => state.user.dept,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
};
export default getters
