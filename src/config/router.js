import Vue from 'vue';
import VueRouter from 'vue-router';

//空白页面
import BlankPage from '../component/page/BlankPage';
//子模块routers
import DemoPageRoute from '../modules/demo/config/router';
import SystemRouter from '../modules/system/router';

Vue.use(VueRouter);

const Page404 = () => import(/* webpackChunkName: "error/404" */ '../component/page/404');
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
                name: "system",
                path: "system",
                component: BlankPage,
                children: SystemRouter
            },
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