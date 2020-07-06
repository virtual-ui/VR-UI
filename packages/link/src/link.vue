<template>
<!-- <a-->
<!--    :class="[-->
<!--        'vr-link',-->
<!--        type ? `vr-link&#45;&#45;${type}` : '',-->
<!--        disabled && 'is-disabled',-->
<!--        underline && !disabled && 'is-underline'-->
<!--        ]"-->
<!--        :href="disabled ? null : href"-->
<!--        v-bind="$attrs"-->
<!--        @click="handleClick"-->
<!--  > -->
    <a
        class="vr-link"
        :class="[`vr-link--${type}`,{'is-disabled':disabled,'no-underline':!underline}]"
        @click="disabled ? ()=>{} : handleClick"
        :href="disabled ? null: href"
    >
     <i v-if="icon" :class="['vr-icon',icon]"></i>
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
        methods: {
            handleClick(event) {
                this.$emit('click', event);
            }
        }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/common/common.scss";
    .vr-icon{
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
        outline: none;
        cursor: pointer;
        padding-bottom:1px;
        font-size: 16px;
        color:#606266;
        &:hover{
            text-decoration: none !important;
        }
    }
    .vr-link.is-disabled{
        opacity: 0.5;
        &:hover{
            border-bottom: 0;
            cursor: not-allowed;
        }
    }
    .vr-link--default.is-disabled{
        &:hover{
            color:#606266;
        }
    }
    .vr-link.no-underline{
        &:hover{
            border-bottom: 0;
            padding-bottom: 1px;
            color: #66b1ff;
        }
    }
    .vr-link--default{
        color: #606266;
        &:hover{
            color: #66b1ff;
            padding-bottom:0;
            border-bottom: 1px solid #66b1ff;
        }
    }
    .vr-link--primary{
        color: #409eff;
        &:hover{
            padding-bottom:0;
            border-bottom: 1px solid #409eff;
        }
    }
    .vr-link--success{
        color: #67c23a;
        &:hover{
            padding-bottom:0;
            border-bottom: 1px solid #67c23a;
        }
    }
    .vr-link--info{
        color: #909399;
        &:hover{
            padding-bottom:0;
            border-bottom: 1px solid #909399;
        }
    }
    .vr-link--warning{
        color: #e6a23c;
        &:hover{
            padding-bottom:0;
            border-bottom: 1px solid #e6a23c;
        }
    }
    .vr-link--danger{
        color: #f56c6c;
        &:hover{
            padding-bottom:0;
            border-bottom: 1px solid #f56c6c;
        }
    }
    // button中icon和文字同时存在，设置margin值
    .vr-link [class*="vr-icon"] + span {
        margin-left: 5px;
    }
</style>
