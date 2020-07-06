
<template>
    <div>
        <vr-link disabled>默认链接</vr-link>
        <vr-link type="primary" disabled>主要链接</vr-link>
        <vr-link type="success" disabled>成功链接</vr-link>
        <vr-link type="warning" disabled>警告链接</vr-link>
        <vr-link type="danger" disabled>危险链接</vr-link>
        <vr-link type="info" disabled>信息链接</vr-link>
    </div>
</template>

<script>
   import Link from '../../../../packages/link/src/link'
    export default {
        name: 'link-demo-disabled',
        components: {
            [Link.name]: Link,
        }
    }
</script>

<style lang="scss" scoped>
  
</style>