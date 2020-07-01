<template>
    <div>
        <div class="list">
            <vr-button>默认按钮</vr-button>
            <vr-button type="primary">主要按钮</vr-button>
            <vr-button type="success">成功按钮</vr-button>
            <vr-button type="info">信息按钮</vr-button>
            <vr-button type="warning">警告按钮</vr-button>
            <vr-button type="danger">危险按钮</vr-button>
        </div>
        <div class="list">
             <vr-button>朴素按钮</vr-button>
             <vr-button type="primary" plain>主要按钮</vr-button>
             <vr-button type="success" plain>成功按钮</vr-button>
             <vr-button type="info" plain>信息按钮</vr-button>
             <vr-button type="warning" plain>警告按钮</vr-button>
             <vr-button type="danger" plain>危险按钮</vr-button>
         </div>
        <div class="list">
            <vr-button round>圆角按钮</vr-button>
            <vr-button type="primary" round>主要按钮</vr-button>
            <vr-button type="success" round>成功按钮</vr-button>
            <vr-button type="info" round>信息按钮</vr-button>
            <vr-button type="warning" round>警告按钮</vr-button>
            <vr-button type="danger" round>危险按钮</vr-button>
        </div>
        <div class="list">
            <vr-button circle></vr-button>
            <vr-button type="primary" circle></vr-button>
            <vr-button type="success" circle></vr-button>
            <vr-button type="info" circle></vr-button>
            <vr-button type="warning" circle></vr-button>
            <vr-button type="danger" circle></vr-button>
        </div>
    </div>
</template>

<script>
    import Button from '../../../../packages/button/src/button'
    export default {
        name: 'button-demo-base',
        components: {
            [Button.name]: Button,
        }
    }
</script>
<style>
    .list{
        margin: 10px 0;
    }
</style>
