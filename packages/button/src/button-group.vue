<template>
    <div class="vr-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"VrButtonGroup",
        mounted() {
                //遍历该组件的子元素
                for(let node of this.$el.children){
                    debugger;
                    let name = node.nodeNmae.toLowerCase();
                    if(name!=='button'){
                        console.warn(`vr-button-group的子元素应该是vr-button，而你却写了${name}`)
                    }
                }
        }
    }
</script>
<style lang="scss" scoped>
  /*@import "../../style/mixin/mixin.scss";*/
 .vr-button-group{
     display: inline-block;
     border-radius: 5px;
     text-align: center;
     font-size: 0px;
     overflow: hidden;
     .vr-button{
         margin: 0;
         box-shadow: none;
         border-radius: unset;
         &:nth-child(n+1){
             position: relative;
             border-right: 1px solid #eee;
         }
     }
 }
</style>
