<template>
    <div>
        <div>
            <vr-icon v-for="(icon,index) in list" :key="index"  :class="icon"></vr-icon>
            <vr-button icon="vr-cog" type="primary">123</vr-button>
        </div>
    </div>
</template>
<script>
    import Icon from '../../.././../packages/icon/src/icon';
    import Button from '../../../../packages/button/src/button'
    export default {
        name:"icon-demo-example",
        components:{
            [Icon.name]:Icon,
            [Button.name]:Button
        },
        data(){
            return{
                list:["vr-minus-circle-fill","vr-wind-smile","vr-paper-plane","vr-align-center",]
            }
        }
    }
</script>
<style lang="scss" scoped>
 .vr-icon{
     margin: 20px;
     font-size: 18px;
 }
</style>
