import Vue from 'vue';
import './plugins/element-ui';
import './plugins/platform';
import RouterConfig from './config/router';
import StoreConfig from './config/store';
import App from './App';

console.info(process.env.NODE_ENV);
Vue.config.silent = process.env.NODE_ENV !== 'development';
Vue.config.performance = process.env.NODE_ENV === 'development';
Vue.config.productionTip = process.env.NODE_ENV === 'development';

import './assets/style/index.scss';
import './assets/style/iconfont.scss';

const router = RouterConfig.getRouter();
const store = StoreConfig.getStore();

let vue = new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app');