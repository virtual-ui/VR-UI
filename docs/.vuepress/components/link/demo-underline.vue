
<template>
    <a>
        <vr-link :underline="false">无下划线</vr-link>
        <vr-link>有下划线</vr-link>
    </a>
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
    
</style>