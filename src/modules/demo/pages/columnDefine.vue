<template>
    <el-dialog :visible.sync="diaVisible" width="300px" title="排序">
        <div class="operator">
            <el-button type="text" @click="checkAll">全选</el-button>
            <el-button type="text" @click="unCheckAll">取消全选</el-button>
        </div>
        <el-tree :data="columnNodes" node-key="id" default-expand-all draggable :allow-drop="checkDrop"
                 ref="columnTree">
            <span slot-scope="{node,data}">
                <el-checkbox v-model="data.checked"></el-checkbox>
                <span style="margin-left: 15px;">{{node.label}}</span>
            </span>
        </el-tree>
    </el-dialog>
</template>

<script>

    function generateColumnNode() {
        let result = [];
        for (let i = 0; i < 10; i++) {
            result.push({id: i, label: "label" + i, checked: false});
        }
        return result;
    }

    export default {
        name: "column-define",
        props: ["visible"],
        computed: {
            diaVisible: {
                get() {
                    return this.visible
                },
                set(val) {
                    this.$emit("update:visible", val)
                }
            }
        },
        created() {
        },
        data() {
            return {
                columnNodes: generateColumnNode()
            }
        },
        methods: {
            checkDrop(draggingNode, dropNode, type) {
                return type !== 'inner';
            },
            checkAll() {
                this.columnNodes.forEach((item) => {
                    item.checked = true;
                })
            },
            unCheckAll() {
                this.columnNodes.forEach((item) => {
                    item.checked = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>