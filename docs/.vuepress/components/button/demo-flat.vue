<template>
    <div>
        <div class="list">
            <vr-button flat>默认按钮</vr-button>
            <vr-button type="primary" flat>主要按钮</vr-button>
            <vr-button type="success" flat>成功按钮</vr-button>
            <vr-button type="info" flat>信息按钮</vr-button>
            <vr-button type="warning" flat>警告按钮</vr-button>
            <vr-button type="danger" flat>危险按钮</vr-button>
        </div>
    </div>
</template>

<script>
    import Button from '../../../../packages/button/src/button'
    export default {
        name: 'button-demo-flat',
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
