<template>
    <div>
        <vr-link>文字连接</vr-link>
        <vr-link type="primary" disabled>文字连接</vr-link>
        <vr-link type="warning" disabled>文字连接</vr-link>
        <vr-link type="danger" disabled>文字连接</vr-link>
        <vr-link type="info" disabled>文字连接</vr-link>
    </div>
</template>
<script>
    import Link from '../../../../packages/link/src/link'
    export default {
        name:"link-demo-underline",
        components:{
            [Link.name]:Link,
        },
    }
</script>
<style lang="scss" scoped>
</style>
