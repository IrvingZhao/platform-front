import BasePage from './basePage';
import ConfigColumnGrid from './configColumnGrid';
import ConfigSlot from "./configSlot";
import ScrollArea from './scrollArea';
import SearchForm from './searchForm';
import Toolbar from './toolbar';

let components = [
    BasePage, ConfigColumnGrid, ConfigSlot, ScrollArea, SearchForm, Toolbar
];

export default {
    install(Vue) {
        components.forEach((item) => {
            Vue.component(item.name, item);
        })
    }
}