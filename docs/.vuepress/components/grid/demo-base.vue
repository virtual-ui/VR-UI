<template>
    <div>
       <vr-row>
           <vr-col :span="6">
               <div class="content">col</div>
           </vr-col>
           <vr-col :span="6">
               <div class="content">col</div>
           </vr-col>
           <vr-col :span="6">
               <div class="content">col</div>
           </vr-col>
           <vr-col :span="6">
               <div class="content">col</div>
           </vr-col>
       </vr-row>
       <vr-row>
           <vr-col :span="8">
               <div class="content">col</div>
           </vr-col>
           <vr-col :span="8">
               <div class="content">col</div>
           </vr-col>
           <vr-col :span="8">
               <div class="content">col</div>
           </vr-col>
       </vr-row>
       <vr-row>
           <vr-col :span="12">
               <div class="content">col</div>
           </vr-col>
           <vr-col :span="12">
               <div class="content">col</div>
           </vr-col>
       </vr-row>
       <vr-row>
           <vr-col :span="24">
               <div class="content">col</div>
           </vr-col>
       </vr-row>
    </div>
</template>
<script>
    import Row from '../../../../packages/gird/src/row';
    import Col from '../../../../packages/gird/src/col';
    export default {
        name:"grid-demo-base",
        components:{
            [Row.name]:Row,
            [Col.name]:Col,
        }
    }
</script>
<style lang="scss" scoped>
  .vr-row{
      margin-bottom: 10px;
      .vr-col{
          color: white;
          .content{
              padding: 10px;
          }
          &:nth-child(odd){
              background:rgba(153,51,102,.7);
          }
          &:nth-child(even){
              background:rgba(204,102,153,.7);
          }
      }
  }
</style>
