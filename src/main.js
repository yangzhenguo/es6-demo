/**
 * Created by Sam on 2019/5/21.
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import Notify from './plugins/notify'
import './css/style.scss'

Vue.use(Notify, {debug: true});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})