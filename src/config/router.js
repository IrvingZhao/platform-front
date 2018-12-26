import Vue from 'vue';
import VueRouter from 'vue-router';

import DemoPageRoute from '../modules/demo/config/router';
//
// import SystemRoute from '../modules/system/config/router';

Vue.use(VueRouter);

const Page404 = () => import(/* webpackChunkName: "error/404" */ '../component/public/404');
const MainPage = () => import(/* webpackChunkName: "index" */ "../modules/main/pages/Main");


let routeConfig = [
    {
        name: "404",
        path: "/404",
        component: Page404
    },
    {
        name: "root",
        path: "/",
        component: MainPage,
        children: [
            DemoPageRoute,
            {
                name: "*",
                path: "*",
                component: Page404
            }
        ],
    }
];

let router;

const getRouter = () => {
    if (!router) {
        router = new VueRouter({
            routes: routeConfig
        });
        router.beforeEach((to, from, next) => {
            //TODO 401  子页跳转
            console.info(to);
            console.info(from);
            next();
        });
    }
    return router;
};

const push = (path, onComplete, onAbort) => {
    const router = getRouter();
    router.push(path, onComplete, onAbort);
};

export default {
    getRouter,
    push
}