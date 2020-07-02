<template>
    <h5 class="vr-link"
            :class="[`vr-link--${type}`]"
            @click="handleClick()"
            :disabled="disabled">
        <i v-if="isIcon" :class="['vr-icon',icon]"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </h5>
</template>

<script>
    export default {
      name: "VrLink",
      props:{
        type:{
          type:String,
          default:"default"
        },
        disabled:{
          type:Boolean,
          default:false
        },
        underline:{
          type:Boolean,
          default:true
        },
        icon: {
          type: String,
          default: ""
        },
        href:{
          type:String,
          default:""
        }
      },
      computed:{
        isRipper(){
          return this.disabled ? false : this.ripple;
        },
        isIcon(){
          return this.loading ? "vr-loading" :this.icon;
        }
      },
      methods:{
        handleClick(e) {
          this.$emit("click", e);
        }
      }
    }
</script>

<style lang="scss" scoped>
    .vr-link{
        display: inline-block;
        font-size: 16px;
    }
    .vr-link--primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,
        &:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
    }
    .vr-link--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,
        &:focus {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
    }
    .vr-link--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover,
        &:focus {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }
    .vr-link--warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover,
        &:focus {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }
    }
    .vr-link--danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover,
        &:focus {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
    }
</style>
