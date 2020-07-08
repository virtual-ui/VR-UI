<template>
    <div>       
        <vr-row>
            <vr-col span="6" order="4">
                <div class="content">1 vr-col-order-4</div>
            </vr-col>
            <vr-col span="6" order="3">
                <div class="content">2 vr-col-order-3</div>
            </vr-col>
            <vr-col span="6" order="2">
                <div class="content">3 vr-col-order-2</div>
            </vr-col>
            <vr-col span="6" order="1">
                <div class="content">4 vr-col-order-1</div>
            </vr-col>
        </vr-row>
    </div>
</template>

<script>
    import Row from '../../../../packages/gird/src/row';
    import Col from '../../../../packages/gird/src/col';
    export default {
        name:"grid-demo-flex-order",
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
            &-order{
                display: flex;
            }
        }
    }
</style>