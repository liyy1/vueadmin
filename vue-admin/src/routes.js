import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/system/Login.vue'
import NotFound from './views/system/404.vue'
import Home from './views/system/Home.vue'
import Main from './views/system/Main.vue'
import Dept from './views/basic/dept/Dept.vue'
import Form from './views/basic/Form.vue'
import User from './views/basic/user/User.vue'
import Role from './views/basic/role/Role.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import Map from './component/BaiduMap.vue'

Vue.use(Router);

export const routes = [
    { path: '/login', component: Login },
    { path: '/',component: Home,
        children: [
            { path: '/main', component: Main },
            { path: '/dept', component: Dept },
            { path: '/form', component: Form },
            { path: '/user', component: User },
            { path: '/role', component: Role },
            { path: '/map', component: Map },
            { path: '/page4', component: Page4 },
            { path: '/page5', component: Page5 },
            { path: '/page6', component: Page6 },
            { path: '/charts', component: echarts },
            { path: '/404', component: NotFound }
        ]
    },
    { path: '*',redirect: { path: '/404' } }
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
});