import Vue from "vue";
import VueRouter from "vue-router";
import ExampleComponent from './components/ExampleComponent.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: ExampleComponent,
            meta:{
                forVisitors: true
            }
        },
    ]
});



export default router