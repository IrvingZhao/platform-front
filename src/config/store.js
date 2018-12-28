import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//TODO store 设置 action 进行初始化分发使用，并设置mutations 进行数据修改

let store;

const getStore = () => {
    if (!store) {
        store = new Vuex.Store({
            strict: process.env.NODE_ENV !== 'production',
            state: {},
            mutations: {},
            actions: {},
            modules: {
                bread: {
                    namespaced: true,
                    state: {
                        breadNav: []
                    },
                    mutations: {
                        addBreadNav(state, itemNav) {
                            state.breadNav.push(itemNav);
                        },
                        set(state, breads) {
                            state.breadNav = breads || [];
                        },
                        splice(state, index) {
                            state.breadNav.splice(index);
                        }
                    }
                }
            }
        });
    }
    return store;
};

let breadOperator = {
    set(breads) {
        store.commit("bread/set", breads);
        return this;
    },
    push(breadItem) {
        store.commit("bread/addBreadNav", breadItem);
        return this;
    },
    clear() {
        store.commit("bread/set", []);
        return this;
    },
    splice(index) {
        store.commit("bread/splice", index);
    }
};

export default {
    getStore,
    breadOperator
};
