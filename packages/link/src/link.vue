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
        :class="[`vr-link--${type}`,
        {'is-underline':underline,'is-icon':icon,'is-href':href}
        ]"
        @click="handleClick()"
        :disabled="disabled"
    >
     <i v-if="isIcon" :class="['vr-icon',isIcon,{'is-spin':loading}]"></i>
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
           isRipper(){
               return this.disabled ? false : this.ripple;
           }
       },
        methods: {
            handleClick(event) {
                if (!this.disabled) {
                    if (!this.href) {
                    this.$emit('click', event);
                    }
                }
            }
        }
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
        &:focus {
            color: #409eff;
            background-color: #ecf5ff;
        }
        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
    .vr-link--primary{
        color: #409eff;
    }
    .vr-link--primary.is-underline{
        text-decoration: underline;
    }
    .vr-link--success{
        color: #67c23a;
    }
    .vr-link--success.is-underline{
        text-decoration: underline;
    }
    .vr-link--info{
        color: #909399;
    }
    .vr-link--info.is-underline{
        text-decoration: underline;
    }
    .vr-link--warning{
        color: #e6a23c;
    }
    .vr-link--warning.is-underline{
        text-decoration: underline;
    }
    .vr-link--danger{
        color: #f56c6c;
    }
    .vr-link--danger.is-underline{
        text-decoration: underline;
    }
</style>
