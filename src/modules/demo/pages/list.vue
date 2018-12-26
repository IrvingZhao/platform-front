<template>
    <div class="page-content">
        <search-form :search-labels="smallData" @search="search" @reset="reset" @clearItem="clearItem">
            <div class="search-form-item" v-for="i in 10" :key="i">
                <div class="form-label">测试label{{i}}：</div>
                <el-input v-model="searchForm['param'+i]"></el-input>
            </div>
        </search-form>
        <div class="tool-bar">
            <div class="left-toolbar">
                <span class="page-title">订单流水</span>
            </div>
            <div class="right-toolbar">
                <el-button size="small">按钮3</el-button>
                <el-button size="small">按钮4</el-button>
                <el-button size="small" icon="el-icon-my-user-define" @click="diaVisible.columnDefine=true">自定义列
                </el-button>
            </div>
        </div>
        <grid-js>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column slot="date" fixed prop="date" label="日期" min-width="250"></el-table-column>
            <el-table-column slot="name" prop="name" label="姓名" min-width="200">
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column slot="province" prop="province" label="省份" min-width="200"></el-table-column>
            <el-table-column slot="city" prop="city" label="市区" min-width="200"></el-table-column>
            <el-table-column slot="address" prop="address" label="地址" min-width="350">
            </el-table-column>
            <el-table-column slot="zip" prop="zip" label="邮编" min-width="200"></el-table-column>
            <el-table-column slot="name1" prop="name" label="姓名" min-width="200"></el-table-column>
            <el-table-column slot="province1" prop="province" label="省份" min-width="200"></el-table-column>
            <el-table-column slot="city1" prop="city" label="市区" min-width="200"></el-table-column>
            <el-table-column slot="address1" prop="address" label="地址" min-width="350"
                             :show-overflow-tooltip="true"></el-table-column>
            <el-table-column slot="zip1" prop="zip" label="邮编" min-width="200"></el-table-column>
            <el-table-column slot="operator" fixed="right" label="操作" min-width="150">
                <template slot-scope="scope">
                    <el-button>测试</el-button>
                </template>
            </el-table-column>
        </grid-js>
        <!--<div class="grid" ref="gridArea">-->
        <!--<el-table ref="table" :data="tableData3" :height="tableHeight" size="small">-->
        <!--<el-table-column fixed prop="date" label="日期" min-width="250"></el-table-column>-->
        <!--<el-table-column prop="name" label="姓名" min-width="200">-->
        <!--<template slot-scope="scope">-->
        <!--{{scope.row.name}}-->
        <!--</template>-->
        <!--</el-table-column>-->
        <!--<el-table-column prop="province" label="省份" min-width="200"></el-table-column>-->
        <!--<el-table-column prop="city" label="市区" min-width="200"></el-table-column>-->
        <!--<el-table-column prop="address" label="地址" min-width="350">-->
        <!--</el-table-column>-->
        <!--<el-table-column prop="zip" label="邮编" min-width="200"></el-table-column>-->
        <!--&lt;!&ndash;<el-table-column prop="name" label="姓名" min-width="200"></el-table-column>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-table-column prop="province" label="省份" min-width="200"></el-table-column>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-table-column prop="city" label="市区" min-width="200"></el-table-column>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-table-column prop="address" label="地址" min-width="350" :show-overflow-tooltip="true"></el-table-column>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-table-column prop="zip" label="邮编" min-width="200"></el-table-column>&ndash;&gt;-->
        <!--<el-table-column fixed="right" label="操作" min-width="150">-->
        <!--<template slot-scope="scope">-->
        <!--<el-button>测试</el-button>-->
        <!--</template>-->
        <!--</el-table-column>-->
        <!--</el-table>-->
        <!--</div>-->
        <div class="pagination">
            <el-pagination
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>

        <column-define :visible.sync="diaVisible.columnDefine"></column-define>

    </div>
</template>

<script>

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

    function getSearchFormData() {
        let result = {};
        for (let i = 0; i < 10; i++) {
            result["param" + i] = "";
        }
        return result;
    }

    function generateSmallData() {
        let result = [];
        for (let i = 0; i < 10; i++) {
            result.push({
                label: "测试label" + i + "：",
                key: "param" + i,
            });
        }
        return result;
    }

    // import GeminiScroll from 'gemini-scrollbar';
    import GeminiScroll from '@/plugins/geminiScrollbar';

    import ColumnDefine from './columnDefine';

    import SearchForm from '../../../component/page/searchForm';

    import GridJs from '../../../component/page/grid/grid';

    export default {
        name: "index",
        components: {ColumnDefine, SearchForm, GridJs},
        data() {
            return {
                searchForm: getSearchFormData(),
                searchFormSmallLabels: generateSmallData(),
                smallData: [],
                tooltip: "",
                diaVisible: {
                    columnDefine: false,
                },
                tableData3: generateTableData(),
                tableHeight: "auto",
                holdObj: {
                    scroll: null
                }
            }
        },
        created() {
        },
        mounted() {
            this.$bread.set([
                {name: "测试"},
                {name: "首页", path: "/page"}
            ]);
            // setTimeout(() => {
            //     this.tableHeight = this.$refs.gridArea.offsetHeight;
            //
            //     let div = document.createElement("div");
            //     div.innerHTML = '<div class="gm-scrollbar -vertical"><div class="thumb"></div></div><div class="gm-scrollbar -horizontal"><div class="thumb"></div></div>';
            //
            //     this.$refs.table.$refs.bodyWrapper.classList.add("gm-scroll-view");
            //     for (let i = div.children.length - 1; i >= 0; i--) {
            //         this.$refs.table.$el.appendChild(div.children.item(i));
            //     }
            //
            //     let scroll = this.holdObj.scroll = new GeminiScroll({
            //         element: this.$refs.table.$el,
            //         createElements: false,
            //         offsetY: 48
            //     });
            //     setTimeout(() => {
            //         scroll.create();
            //         let leftWrapper = this.$refs.table.$refs.fixedWrapper;
            //         if (leftWrapper) {
            //             leftWrapper.style.height = (leftWrapper.offsetHeight + scroll.SCROLLBAR_WIDTH - 6) + "px";
            //             let leftBodyWrapper = leftWrapper.querySelector(".el-table__fixed-body-wrapper");
            //             if (leftBodyWrapper) {
            //                 leftBodyWrapper.style.height = (leftBodyWrapper.offsetHeight + scroll.SCROLLBAR_WIDTH - 6) + "px";
            //             }
            //         }
            //         let rightWrapper = this.$refs.table.$refs.rightFixedWrapper;
            //         if (rightWrapper) {
            //             rightWrapper.style.height = (rightWrapper.offsetHeight + scroll.SCROLLBAR_WIDTH - 6) + "px";
            //             rightWrapper.style.right = "6px";
            //             let rightBodyWrapper = rightWrapper.querySelector(".el-table__fixed-body-wrapper");
            //             if (rightBodyWrapper) {
            //                 rightBodyWrapper.style.height = (rightBodyWrapper.offsetHeight + scroll.SCROLLBAR_WIDTH - 6) + "px";
            //             }
            //         }
            //     }, 0);
            //
            // }, 0);
        },
        methods: {
            clearItem(key) {
                this.searchForm[key] = "";
                this.smallData = this.smallData.filter((item) => {
                    return item.key !== key;
                });
            },
            search() {
                let smallData = [];
                this.searchFormSmallLabels.forEach(item => {
                    if (this.searchForm[item.key]) {
                        smallData.push({...item, value: this.searchForm[item.key]});
                    }
                });
                this.smallData = smallData;
            },
            reset() {
                this.searchForm = getSearchFormData();
                this.smallData = [];
            },
            arraySpanMethod({row, column, rowIndex, columnIndex}) {
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return [1, 2];
                    } else if (columnIndex === 1) {
                        return [0, 0];
                    }
                }
            },
            toolTipShow(e) {
                let current = e.target;
                // if (current.scrollWidth > current.offsetWidth) {
                let prefix = current.getAttribute("prefix");
                let target = current.getAttribute("target");
                this.tooltip = prefix + target;
                // }
            },
            toolTipHide() {
                this.tooltip = "";
            },
            format(a) {
                return a;
            }
        }
    }
</script>

<style scoped lang="less">
    .page-content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .expend-button {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .search-form-item {
        flex: 0 0 500px;
        display: flex;
        align-items: center;
        margin: 0 10px 10px 0;
    }

    .tool-bar {
        flex: 0 0 32px;
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        .left-toolbar {
            flex: 0 0 auto;
            .page-title {
                color: #303133;
                font-size: 24px;
                font-weight: bold;
            }
        }
        .right-toolbar {
            flex: 0 0 auto;
        }
    }

    .grid {
        flex: 1 1 auto;
        overflow: auto;
    }

    .pagination {
        flex: 0 0 32px;
    }
</style>