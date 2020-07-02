<template>
    <div>
        <div class="list">
            <vr-button icon="vr-gonggao-miaobian">默认按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="primary">主要按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="success">成功按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="info">信息按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="warning">警告按钮</vr-button>
            <vr-button icon="vr-gonggao-miaobian" type="danger">危险按钮</vr-button>
        </div>
    </div>
</template>

<script>
    import Button from '../../../../packages/button/src/button'
    export default {
        name: 'button-demo-icon',
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
