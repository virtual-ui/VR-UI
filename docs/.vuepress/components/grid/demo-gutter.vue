<template>
    <div>
        <vr-row :gutter="[16]">
            <vr-col :span="6">
                <div class="content">col</div>
            </vr-col>
            <vr-col :span="6">
                <div class="content">col</div>
            </vr-col>
            <vr-col :span="6">
                <div class="content">col</div>
            </vr-col>
            <vr-col :span="6">
                <div class="content">col</div>
            </vr-col>
        </vr-row>
        <vr-row :gutter="16">
            <vr-col :span="6">
                <div class="content">col</div>
            </vr-col>
            <vr-col :span="6">
                <div class="content">col</div>
            </vr-col>
            <vr-col :span="6">
                <div class="content">col</div>
            </vr-col>
            <vr-col :span="6">
                <div class="content">col</div>
            </vr-col>
        </vr-row>
    </div>
</template>
<script>
    import Row from '../../../../packages/grid/src/row';
    import Col from '../../../../packages/grid/src/col';
    export default {
        name:"grid-demo-gutter",
        components:{
            [Row.name]:Row,
            [Col.name]:Col,
        }
    }
</script>
<style lang="scss" scoped>
    .vr-row{
        margin-bottom: 10px;
        color: white;
        .content{
            padding: 10px;
            background:rgba(153,51,102,.7);
        }
    }
</style>
