import {Table} from "element-ui";
import ColumnDefine from './columnDefine';
import GeminiScroll from '@/plugins/geminiScrollbar';

function generateTableData() {
    let result = [];
    for (let i = 1; i < 20; i++) {
        result.push({
            date: '2016-05-03',
            name: '王小虎' + i,
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
            zip: 200333
        })
    }
    return result;
}

export default {
    created() {
        console.info(this);
    },
    mounted() {
        setTimeout(() => {
            let table = this.$refs.table;

            let div = document.createElement("div");
            div.innerHTML = '<div class="gm-scrollbar -vertical"><div class="thumb"></div></div><div class="gm-scrollbar -horizontal"><div class="thumb"></div></div>';

            table.$refs.bodyWrapper.classList.add("gm-scroll-view");
            for (let i = div.children.length - 1; i >= 0; i--) {
                table.$el.appendChild(div.children.item(i));
            }

            let scroll = this.holdObj.scroll = new GeminiScroll({
                element: table.$el,
                createElements: false,
                offsetY: 48
            });
            scroll.create();

            setTimeout(() => {
                this.updateGridHeight();
            }, 0);


        }, 0);
    },
    data() {
        return {
            holdObj: {
                scroll: null
            },
            tableParams: {
                data: generateTableData(),
                size: "small",
                height: "400"
            },
            tableHeight: "auto",
            slotList: [
                "date", "name", "province", "city", "address", "zip", "operator",
                "date1", "name1", "province1", "city1", "address1", "zip1",
            ],
            columnDefineParams: {
                visible: false,
            }
        }
    },
    methods: {
        updateGridHeight() {
            this.tableParams.height = this.$refs.gridArea.offsetHeight;
            this.holdObj.scroll.update();
            setTimeout(() => {
                let table = this.$refs.table;
                let offsetHeight = 0;
                if (table.$refs.bodyWrapper.offsetWidth < table.$refs.bodyWrapper.scrollWidth) {
                    offsetHeight = this.holdObj.scroll.SCROLLBAR_WIDTH - 6;
                } else {
                    offsetHeight = -this.holdObj.scroll.SCROLLBAR_WIDTH + 6;
                }
                let leftWrapper = table.$refs.fixedWrapper;
                if (leftWrapper) {
                    leftWrapper.style.height = (leftWrapper.offsetHeight + Math.abs(offsetHeight)) + "px";
                    let leftBodyWrapper = leftWrapper.querySelector(".el-table__fixed-body-wrapper");
                    if (leftBodyWrapper) {
                        leftBodyWrapper.style.height = (leftBodyWrapper.offsetHeight + offsetHeight) + "px";
                    }
                }
                let rightWrapper = table.$refs.rightFixedWrapper;
                if (rightWrapper) {
                    rightWrapper.style.height = (rightWrapper.offsetHeight + Math.abs(offsetHeight)) + "px";
                    rightWrapper.style.right = "6px";
                    let rightBodyWrapper = rightWrapper.querySelector(".el-table__fixed-body-wrapper");
                    if (rightBodyWrapper) {
                        rightBodyWrapper.style.height = (rightBodyWrapper.offsetHeight + offsetHeight) + "px";
                    }
                }
            }, 20);
        }
    },
    render(_c) {
        let parent = this;
        let slotEls = [];
        if (parent.$slots.default) {
            slotEls = [...parent.$slots.default];
        }
        parent.slotList.forEach((item) => {
            let slotItem = parent.$slots[item];
            if (slotItem && slotItem instanceof Array) {
                slotItem.forEach((vNodeItem) => {
                    slotEls.push(vNodeItem);
                });
            }
        });

        return _c("div", {
            class: "grid",
            ref: "gridArea",
            directives: [
                {
                    name: "resize",
                    value() {
                        parent.updateGridHeight();
                    }
                }
            ],
        }, [
            _c(Table, {ref: "table", props: parent.tableParams}, slotEls),
            _c(ColumnDefine, {
                props: parent.columnDefineParams, on: {
                    "update:visible"(val) {
                        parent.columnDefineParams.visible = false;
                    }
                }
            })
        ]);
    }
}