
<template>
    <div>
        <vr-link icon="vr-edit">编辑</vr-link>
        <vr-link icon="vr-eye">查看</vr-link>
    </div>
</template>

<script>
   import Link from '../../../../packages/link/src/link'
    export default {
        name: 'link-demo-icon',
        link:[],
        components: {
            [Link.name]: Link
        }
    }
</script>

<style lang="scss" scoped>
    
</style>