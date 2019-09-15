import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'
import router from '@/router/router';

Vue.use(VueRouter);

new Vue({
    el: '#App',
    router,
    components: {App},
    template: '<App/>'
});