
<template>
    <div>
        <vr-link href="\" target="_blank">默认链接</vr-link>
        <vr-link type="primary">主要链接</vr-link>
        <vr-link type="success">成功链接</vr-link>
        <vr-link type="warning">警告链接</vr-link>
        <vr-link type="danger">危险链接</vr-link>
        <vr-link type="info">信息链接</vr-link>
    </div>
</template>

<script>
   import Link from '../../../../packages/link/src/link'
    export default {
        name: 'link-demo-base',
        components: {
            [Link.name]: Link,
        }
    }
</script>

<style lang="scss" scoped>

</style>