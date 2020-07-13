<template>
    <div>
        <vr-row :gutter="10" class="row-bg">
            <vr-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3"><div class="content">col</div></vr-col>
            <vr-col :xs="4" :sm="6" :md="8" :lg="6" :xl="9"><div class="content">col</div></vr-col>
            <vr-col :xs="4" :sm="6" :md="8" :lg="6" :xl="9"><div class="content">col</div></vr-col>
            <vr-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3"><div class="content">col</div></vr-col>
        </vr-row>
    </div>
</template>

<script>
    import Row from '../../../../packages/grid/src/row';
    import Col from '../../../../packages/grid/src/col';
    export default {
        name:"grid-demo-bootstrap",
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
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>