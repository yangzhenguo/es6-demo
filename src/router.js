/**
 * Created by Sam on 2019/5/23.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/index.vue'
import List from './components/list/index.vue'

Vue.use(Router);

export default new Router({
    routes: [{
        component: Home,
        path: ''
    }, {
        component: List,
        path: '/list'
    }, {
        path: '*',
        redirect: {
            path: '/'
        }
    }]
})