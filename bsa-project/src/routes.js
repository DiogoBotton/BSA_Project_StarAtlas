import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Pages
import Home from './views/Home/Home.vue';
import Score from './views/Utilities/Score.vue';


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/score',
            name: 'Score',
            component: Score
        },
    ]
});

export default router;