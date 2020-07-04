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
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default" class="vr-link--inner">
      <slot></slot>
    </span>

    <template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>
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
        underline: {
        type: Boolean,
        default: true
        },
        disabled:{
            type:Boolean,
            default:false
        },
        href: String,
        icon: String
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
};
</script>

<style lang="scss" scoped>
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
</style>
