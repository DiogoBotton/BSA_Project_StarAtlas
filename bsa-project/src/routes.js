import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Pages
import Home from './views/Home/Home.vue';


const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
    ]
});

export default router;