<template>
    <div>
        <vr-row type="flex" justify="center" align="top">
            <vr-col :span="4"><div class="grid-content" style="height: 80px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 30px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 100px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 60px">col-4</div></vr-col>
        </vr-row>
        <vr-row type="flex" justify="center" align="bottom">
            <vr-col :span="4"><div class="grid-content" style="height: 80px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 30px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 100px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 60px">col-4</div></vr-col>
        </vr-row>
        <vr-row  type="flex" justify="center" align="midddle">
            <vr-col :span="4"><div class="grid-content" style="height: 80px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 30px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 100px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 60px">col-4</div></vr-col>
        </vr-row>
    </div>
</template>

<script>
    import Row from '../../../../packages/grid/src/row';
    import Col from '../../../../packages/grid/src/col';
    export default {
        name:"grid-demo-flex-align",
        components:{
            [Row.name]:Row,
            [Col.name]:Col,
        }
    }
</script>

<style lang="scss" scoped>
    .vr-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
        .vr-col {
            color: white;
            .grid-content{
                padding: 10px;
            }
            &:nth-child(odd){
                background:rgba(153,51,102,.7);
            }
            &:nth-child(even){
                background:rgba(204,102,153,.7);
            }
        }
    }
</style>