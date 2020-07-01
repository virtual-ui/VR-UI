<template>
    <div>
        <div class="list">
            <vr-button disabled>默认按钮</vr-button>
            <vr-button type="primary" disabled>主要按钮</vr-button>
            <vr-button type="success" disabled>成功按钮</vr-button>
            <vr-button type="info" disabled>信息按钮</vr-button>
            <vr-button type="warning" disabled>警告按钮</vr-button>
            <vr-button type="danger" disabled>危险按钮</vr-button>
        </div>
        <div class="list">
            <vr-button disabled>朴素按钮</vr-button>
            <vr-button type="primary" disabled>主要按钮</vr-button>
            <vr-button type="success" disabled>成功按钮</vr-button>
            <vr-button type="info" disabled>信息按钮</vr-button>
            <vr-button type="warning" disabled>警告按钮</vr-button>
            <vr-button type="danger" disabled>危险按钮</vr-button>
        </div>
    </div>
</template>

<script>
    import Button from '../../../../packages/button/src/button'
    export default {
        name: 'button-demo-disabled',
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
