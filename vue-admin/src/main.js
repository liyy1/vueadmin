import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import store from './store'
import Vuex from 'vuex'
import router from './routes'
import localCache from './utils/localCache'

import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'src/theme/menu.css';
import 'src/utils/mock'

Vue.use(ElementUI)
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
    let token = localCache.getToken();
    if (!token && to.path != '/login') {
        next({path: '/login'})
    } else {
        next()
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

