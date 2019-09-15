import Router from 'vue-router';
import Index from '@/views/index.vue';

let routes = [
    {
        path: '/',
        redirect: '/index' 
    },
    {
        path: '/index',
        name: 'indexPage',
        component: Index,
    },
    /* {
        path: '/list',
        name: 'list',
        component: () => import('@/views/list.vue'),
    } */
];

export default new Router({
    mode: 'hash',
    routes,
});