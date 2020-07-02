<template>
    <div class="vr-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"VrButtonGroup",
        data(){
            return{
            }
        }
    }
</script>
<style lang="scss" scoped>
  /*@import "../../style/mixin/mixin.scss";*/
 .vr-button-group{
     display: inline-block;
     border-radius: 4px;
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
