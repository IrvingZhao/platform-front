<template>
    <div>
        <div class="scroll1" style="width: 364px;height: 100px;">
            <scroll-area :perSize="3" scroll-type="item">
                <scroll-item class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </scroll-item>
            </scroll-area>
        </div>
        <div class="scroll1" style="width: 364px;height: 100px;">
            <scroll-area :item-width="150" scroll-type="page">
                <scroll-item class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </scroll-item>
            </scroll-area>
        </div>
        <div class="scroll1" style="width: 364px;height: 100px;">
            <scroll-area :item-width="150" scroll-type="item">
                <scroll-item class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </scroll-item>
            </scroll-area>
        </div>
        <div class="scroll1" style="width: 364px;height: 100px;">
            <scroll-area :perSize="3" :scroll-type="150">
                <scroll-item class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </scroll-item>
            </scroll-area>
        </div>

        <div class="scroll1" style="width: 364px;height: 100px;">
            <scroll-area :scroll-type="150">
                <scroll-item class="demo" :style="'width:'+(index*100)+'px'" v-for="(item,index) in scrollContent"
                             :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </scroll-item>
            </scroll-area>
        </div>

    </div>
</template>

<script>
    import ScrollArea from '../../../component/scrollArea';
    import ScrollItem from '../../../component/scrollArea/scrollItem';

    export default {
        name: "scroll-area-test",
        components: {ScrollArea, ScrollItem},
        data() {
            return {
                scrollContent: [
                    "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff"
                ]
            };
        },
    }
</script>

<style scoped>
    .scroll {
        margin-bottom: 50px;
    }
</style>