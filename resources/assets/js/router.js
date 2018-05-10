import Vue from "vue";
import VueRouter from "vue-router";
import Main from './components/Main.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Main,
            meta:{
                forVisitors: true
            }
        },
    ]
});



export default router