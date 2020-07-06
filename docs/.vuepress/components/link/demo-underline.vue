
<template>
    <div>
        <vr-link :underline="false">无下划线</vr-link>
        <vr-link>有下划线</vr-link>
    </div>
</template>

<script>
   import Link from '../../../../packages/link/src/link'
    export default {
        name: 'link-demo-underline',
        components: {   
            [Link.name]: Link,
        }
    }
</script>

<style lang="scss" scoped>
    .vr-link{
        margin: 0 10px;
    }
</style>
