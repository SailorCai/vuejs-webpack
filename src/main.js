import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import router from '@/router/router';
Vue.use(VueRouter)
    .use(ElementUI);

new Vue({
    el: '#App',
    router,
    components: {App},
    template: '<App/>'
});