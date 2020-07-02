<template>
    <div>
        <vr-link>文字连接</vr-link>
        <vr-link type="primary">文字连接</vr-link>
        <vr-link type="warning">文字连接</vr-link>
        <vr-link type="danger">文字连接</vr-link>
        <vr-link type="info">文字连接</vr-link>
    </div>
</template>
<script>
    import Link from '../../../../packages/link/src/link'
    export default {
        name:"link-demo-base",
        components:{
            [Link.name]:Link,
        },
    }
</script>
<style lang="scss" scoped>
</style>
