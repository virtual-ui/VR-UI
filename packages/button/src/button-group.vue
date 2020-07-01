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
  @import "../../style/mixin/mixin.scss";
 .vr-button-group{
     display: inline-block;
     border-radius: 2px;
     text-align: center;
     font-size: 0px;
     overflow: hidden;
     .vr-button{
         margin: 0;
         box-shadow: none;
         border-radius: unset;
         &:nth-child(n+2){
             position: relative;
             &::before{
                 @include fiber--verti(left,#e6e6e6);
             }
         }
     }
 }
</style>
