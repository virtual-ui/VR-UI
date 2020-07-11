<template>
    <div>
        <vr-row class="row-bg">
            <vr-col :span="6" :pull="12">
                <div style="background:rgba(153,51,102,.7); padding:10px;">col-6 | pull-12</div>
            </vr-col>
            <vr-col :span="12" :push="6">
               <div style="background:rgba(153,51,102,.7); padding:10px;">col-12 | push-6</div>
            </vr-col>
        </vr-row>
    </div>
</template>

<script>
    import Row from '../../../../packages/grid/src/row';
    import Col from '../../../../packages/grid/src/col';
    export default {
        name:"grid-demo-pull-push",
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