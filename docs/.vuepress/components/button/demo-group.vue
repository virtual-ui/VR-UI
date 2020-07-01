<template>
    <div>
        <div class="list">
           <vr-button-group>
               <vr-button type="primary">按钮1</vr-button>
               <vr-button type="primary">按钮2</vr-button>
           </vr-button-group>
        </div>
    </div>
</template>

<script>
    import Button from '../../../../packages/button/src/button'
    import ButtonGroup from '../../../../packages/button/src/button-group'
    export default {
        name: 'button-demo-group',
        components: {
            [Button.name]: Button,
            [ButtonGroup.name]:ButtonGroup
        }
    }
</script>
<style lang="scss" scoped>
    .list{
        margin: 10px 0;
    }
</style>
