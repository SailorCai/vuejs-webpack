import Router from 'vue-router';

let routes = [
    {
        path: '/',
        redirect: '/index' 
    },
    {
        path: '/index',
        name: 'indexPage',
        component: resolve => require(['@/views/index.vue'], resolve),
    },
    {
        path: '/detail',
        name: 'indexPage',
        component: resolve => require(['@/views/detail.vue'], resolve),
    },
    {
        path: '/list',
        name: 'list',
        component: resolve => require(['@/views/list.vue'], resolve),
    }
];

export default new Router({
    mode: 'hash',
    routes,
});