<template>
    <div>
        <div class="list">
            <vr-button icon="vr-indeterminate-circle-line">按钮</vr-button>
            <vr-button icon="vr-indeterminate-circle-line" type="primary">按钮</vr-button>
            <vr-button icon="vr-indeterminate-circle-line" type="success">按钮</vr-button>
            <vr-button icon="vr-indeterminate-circle-line" type="info">按钮</vr-button>
            <vr-button icon="vr-indeterminate-circle-line" type="warning">按钮</vr-button>
            <vr-button icon="vr-indeterminate-circle-line" type="danger">按钮</vr-button>
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
