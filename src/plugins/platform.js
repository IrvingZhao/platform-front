import Vue from 'vue';
import MockScroll from './directives/MockScrollDirective';
import GeminiScroll from './directives/GeminiScrollbar';
import ResizeDirective from './directives/ResizeHandleDirective';
import Util from './utils/Utils';
import StoreConfig from '../config/store';

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

    Vue.directive("mock-scroll", MockScroll);
    Vue.directive("gemini-scroll", GeminiScroll);
    Vue.directive("resize", ResizeDirective);
}

Vue.use({
    install
});
