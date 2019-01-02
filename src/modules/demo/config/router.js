import PageIndex from '../../../component/page/BlankPage';

const PageList = () => import(/* webpackChunkName: "page" */ "../pages/list");
const PageEdit = () => import(/* webpackChunkName: "page-edit"*/ "../pages/edit");
const PageScroll = () => import(/* webpackChunkName: "page-scroll" */ "../pages/scrollAreaTest");
const PageTreeTable = () => import(/* webpackChunkName: "page-treeTable" */ "../pages/treeTable");


const route = {
    name: "页面",
    path: "/page",
    component: PageIndex,
    children: [
        {
            name: "列表",
            path: "",
            component: PageList
        },
        {
            name: "scroll-area",
            path: "scroll",
            component: PageScroll
        },
        {
            name: "编辑",
            path: "edit",
            component: PageEdit
        },
        {
            name: "treeTable",
            path: "treeTable",
            component: PageTreeTable
        }
    ]
};
export default route;