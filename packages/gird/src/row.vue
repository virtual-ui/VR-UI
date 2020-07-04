<template>
    <div>123</div>
</template>
<script>
    export default {
        name:"VrRow",
        props:{
            type:{
                type:String,
                default:""
            },
            gutter:{
                type:[Number,String,Array],
                default: 0
            },
            justify:{
                type:String,
                default:"start"
            },
            align:{
                type:String,
                default:"top"
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
