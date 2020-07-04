<template>
    <a>
        <vr-link icon="el-icon-edit">编辑</vr-link>
        <vr-link>查看<i class="el-icon-view el-icon--right"></i></vr-link>
    </a>
</template>

<script>
   import Link from '../../../../packages/link/src/link'
    export default {
        name: 'link-demo-icon',
        components: {
            [Link.name]: Link,
        }
    }
</script>

<style lang="scss" scoped>
    
</style>
