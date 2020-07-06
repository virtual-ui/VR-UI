<template>
<!-- <a
    :class="[
        'vr-link',
        type ? `vr-link--${type}` : '',
        disabled && 'is-disabled',
        underline && !disabled && 'is-underline'
        ]"
        :href="disabled ? null : href"
        v-bind="$attrs"
        @click="handleClick"
  > -->
    <a
        class="vr-link"
        :class="[`vr-link--${type}`]"
        @click="handleClick()"
        :disabled="disabled"
    >
     <i v-if="isIcon" :class="['vr-icon',isIcon]"></i>
    <span v-if="$slots.default">
        <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
    name: 'VrLink',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        disabled:{
            type:Boolean,
            default:false
        },
        underline:{
            type:Boolean,
            default:false
        },
        icon: {
            type: String,
            default: ""
        },
        href:{
            type:String,
            default:""
        },
        computed:{
           isIcon(){
               return this.disabled ? "vr-edit" : this.icon;
               return this.disabled ? "vr-eye" : this.icon;
           }
       },
       methods: {
           handleClick(e) {
               this.$emit("click", e);
           }
       }
        // methods: {
        //     handleClick(event) {
        //         if (!this.disabled) {
        //             if (!this.href) {
        //             this.$emit('click', event);
        //             }
        //         }
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/common/common.scss";
    .vr-icon {
        display: inline-block;
        font-family: "vr-icon" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .vr-link{
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        position: relative;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        font-size: 16px;
        /* 禁止元素的文字被选中； */
        &:hover,
        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
    .vr-link--primary{
        color: #409eff;
    }
    .vr-link--success{
        color: #67c23a;
    }
    .vr-link--info{
        color: #909399;
    }
    .vr-link--warning{
        color: #e6a23c;
    }
    .vr-link--danger{
        color: #f56c6c;
    }
    // button中icon和文字同时存在，设置margin值
    .vr-link [class*="fyy-icon-"] + span {
        margin-left: 5px;
    }
    .icon:after {
        content: "";
        display: block;
        position: absolute;
        width: 5rem;
        height: 5rem;
        top: 0;
        left: 0;
    }
</style>
