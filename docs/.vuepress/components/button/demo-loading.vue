<template>
    <div>
        <div class="list">
            <vr-button icon="vr-gonggao-miaobian" loading>默认按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="primary" loading>主要按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="success" loading>成功按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="info" loading>信息按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="warning" loading>警告按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="danger">危险按钮</vr-button>
        </div>
    </div>
</template>

<script>
    import Button from '../../../../packages/button/src/button'
    export default {
        name: 'button-demo-loading',
        components: {
            [Button.name]: Button,
        }
    }
</script>
<style lang="scss" scoped>
    .list{
        margin: 10px 0;
    }
</style>
