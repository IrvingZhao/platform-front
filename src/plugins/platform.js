import Vue from 'vue';
import Util from './utils/Utils';
import StoreConfig from '../config/store';
import Directives from './directives';

Vue.use(Directives);

function install(Vue, options) {
    Vue.$util = Util;
    Vue.prototype.$util = Util;

    Vue.prototype.$bread = StoreConfig.breadOperator;
    Vue.$bread = StoreConfig.breadOperator;

    Vue.filter("simpleDate", function (val) {
        return Util.getSimpleDate(val);
    });

    Vue.filter("fullDate", function (val) {
        return Util.getFullDate(val);
    });

    Vue.filter("dateFormat", function (val, pattern) {
        return Util.dateFormat(val, pattern);
    });
}

Vue.use({
    install
});
