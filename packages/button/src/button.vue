<template>
    <button
            class="vr-button"
            :class="[`vr-button--${type}`,
            {'is-plain':plain,'is-round':round,'is-circle':circle,'ripple':isRipper,'is-flat':flat,'is-loading':loading},
            `vr-button--${size}`]"
            @click="handleClick()"
            :disabled="disabled">
        <i v-if="isIcon" :class="['vr-icon',isIcon,{'is-spin':loading}]"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>
<script>
   export default {
       name:"VrButton",
       props:{
          type:{
              type:String,
              default:"default"
          },
           plain: {
               type: Boolean,
               default: false
           },
           round: {
               type: Boolean,
               default: false
           },
           circle: {
               type: Boolean,
               default: false
           },
           size:{
             type:String,
             default:"middle",
           },
           disabled:{
              type:Boolean,
               default:false
           },
           ripple:{
               type:Boolean,
               default:true
           },
           flat:{
               type:Boolean,
               default:false
           },
           icon: {
               type: String,
               default: ""
           },
           loading:{
              type:Boolean,
               default:false
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
    @import "../../assets/style/common/common.scss";
    .vr-icon {
        display: inline-block;
        font-family: "vr-icon" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .vr-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        margin:6px 8px;
        border-radius: 2px;
        -webkit-apperance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        transition: 500;
        font-weight: 500;
        /* 禁止元素的文字被选中； */
        -moz-user-select: none;
        -webkit-user-select: none;
        -webkit-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        transition: all 0.3s linear;
        box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        &:hover,
        &:focus {
            color: #409eff;
            background-color: #ecf5ff;
        }
        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
    //按钮loading时的样式
    .vr-button.is-loading{
        opacity: 0.5;
    }
    // 按钮类型
    .vr-button--primary {
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
    .vr-button--success {
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
    .vr-button--info {
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
    .vr-button--warning {
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
    .vr-button--danger {
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
    // 朴素按钮
    .vr-button--.is-plain{
            &:hover,
            &:focus {
                background: #fff;
                border-color: #409eff;
                color: #409eff;
            }
    }
    .vr-button--.is-flat,.vr-button.is-flat{
        background: unset;
        border:none;
        box-shadow: none;
        color: #4c4c4c;
        &:active{
            background: #fff;
            border-color: #409eff;
            color: #4c4c4c;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }
    }
    .vr-button--primary.is-plain {
        color: #409eff;
        background-color: #ecf5ff;
        border-color: #b3d8ff;
        &:hover,
        &:focus {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
    }
    .vr-button--primary.is-flat {
        background: unset;
        border-color: #fff;
        box-shadow: none;
        color: #409eff;
        &:active {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }
    }
    .vr-button--success.is-plain {
        color: #67c23a;
        background-color: #f0f9eb;
        border-color: #c2e7b0;
        &:hover,
        &:focus {
            background: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
    }
    .vr-button--success.is-flat {
        background-color: unset;
        border-color: #fff;
        color: #67c23a;
        box-shadow:none;
        &:active {
            background: #67c23a;
            border-color: #67c23a;
            color: #fff;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }
    }
    .vr-button--info.is-plain {
        color: #909399;
        background-color: #f4f4f5;
        border-color: #d3d4d6;
        &:hover,
        &:focus {
            background: #909399;
            border-color: #909399;
            color: #fff;
        }
    }
    .vr-button--info.is-flat {
        color: #909399;
        background-color: unset;
        border:none;
        box-shadow: none;
        &:active {
            background: #909399;
            border-color: #909399;
            color: #fff;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }
    }
    .vr-button--warning.is-plain {
        color: #e6a23c;
        background-color: #fdf6ec;
        border-color: #f5dab1;
        &:hover,
        &:focus {
            background: #e6a23c;
            border-color: #e6a23c;
            color: #fff;
        }
    }.vr-button--warning.is-flat {
        color: #e6a23c;
        background-color: unset;
        border:none;
        box-shadow: none;
        &:active {
            background: #e6a23c;
            border-color: #e6a23c;
            color: #fff;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }
    }
    .vr-button--danger.is-plain {
        color: #f56c6c;
        background-color: #fef0f0;
        border-color: #fbc4c4;
        &:hover,
        &:focus {
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff;
        }
    }
    .vr-button--danger.is-flat {
        color: #f56c6c;
        background-color: unset;
        border:none;
        box-shadow: none;
        &:active {
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }
    }
    //按钮大小
    .vr-button--mini{
        padding: 6px 10px;
        font-size: 12px;
    }
    .vr-button--small{
        padding: 8px 12px;
        font-size:14px
    }
    .vr-button--middle{
        padding: 10px 16px;
        font-size: 16px;
    }
    .vr-button--large{
        padding: 12px 20px;
       font-size: 18px;
    }
    // 圆角
    .vr-button.is-round {
        border-radius: 20px;
    }
    // 圆形
    .vr-button.is-circle {
        border-radius: 50%;
        padding: 12px;
    }
    // button中icon和文字同时存在，设置margin值
    .vr-button [class*="fyy-icon-"] + span {
        margin-left: 5px;
    }
    //波紋效果
    .ripple {
        position: relative;
        //隐藏溢出的径向渐变背景
        overflow: hidden;
    }
    .ripple:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        //设置径向渐变
        background-image: radial-gradient(circle, #333 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform .3s, opacity .5s;
    }

    .ripple:active:after {
        transform: scale(0, 0);
        opacity: .3;
        //设置初始状态
        transition: 0s;
    }
</style>
