<template>
    <div>
        <vr-row :gutter="20">
            <vr-col :span="8"><div class="content">col-8</div></vr-col>
            <vr-col :span="8" :offset="8"><div class="content">col-8 | offset-8</div></vr-col>
        </vr-row>
        <br>
        <vr-row :gutter="20">
            <vr-col :span="6" :offset="8"><div class="content">col-6 | offset-8</div></vr-col>
            <vr-col :span="6" :offset="4"><div class="content">col-6 | offset-4</div></vr-col>
        </vr-row>
        <br>
        <vr-row :gutter="20">
            <vr-col :span="12" :offset="8"><div class="content">col-12 | offset-8</div></vr-col>
        </vr-row>
    </div>
</template>

<script>
    import Row from '../../../../packages/grid/src/row';
    import Col from '../../../../packages/grid/src/col';
    export default {
        name:"grid-demo-offset",
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
            .content{
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