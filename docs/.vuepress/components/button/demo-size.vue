<template>
    <div>
        <div class="list">
            <vr-button icon="vr-home" type="primary" size="large">按钮</vr-button>
            <vr-button icon="vr-home"  type="primary" size="middle">按钮</vr-button>
            <vr-button icon="vr-home" type="primary" size="small">按钮</vr-button>
            <vr-button icon="vr-home" type="primary" size="mini">按钮</vr-button>
        </div>
    </div>
</template>

<script>
    import Button from '../../../../packages/button/src/button'
    export default {
        name: 'button-demo-size',
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
