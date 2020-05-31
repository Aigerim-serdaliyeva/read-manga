import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export const router = new VueRouter({
    linkActiveClass: "active",
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        
    ]
})