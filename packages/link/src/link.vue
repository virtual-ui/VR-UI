<template>
    <a
          class="vr-link"
          :class="[`vr-link--${type}`]"
          :disabled = 'is-disabled',
          :underline && !disabled = 'is-underline'
        :href="disabled ? null : href"
        v-bind="$attrs"
        @click="handleClick()"
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
      name: "VrLink",
      props: {
        type: {
          type: String,
          default: 'default'
        },
        underline: {
          type: Boolean,
          default: true
        },
        disabled: Boolean,
        href: String,
        icon: String
      },
      methods: {
        // 注解4
        handleClick(event) {
          if (!this.disabled) {
            if (!this.href) {
              this.$emit('click', event);
            }
          }
        }
      }
    }
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
        color: #409eff;
    }
    .vr-link--info{
        color: #409eff;
    }
    .vr-link--warning{
        color: #409eff;
    }
    .vr-link--danger{
        color: #409eff;
    }
    $typeMap: (
            primary: $--link-primary-font-color,
            danger: $--link-danger-font-color,
            success: $--link-success-font-color,
            warning: $--link-warning-font-color,
            info: $--link-info-font-color);

    @each $type, $primaryColor in $typeMap {
        &.el-link--#{$type} {
            color: $primaryColor;
            &:hover {
                color: mix($primaryColor, $--color-white, 80%)
            }
            &:after {
                border-color: $primaryColor
            }
            @include when(disabled) {
                color: mix($primaryColor, $--color-white, 50%)
            }
            @include when(underline) {
                &:hover:after {
                    border-color: $primaryColor
                }
            }
        }
    }
    @include when(disabled) {
        cursor: not-allowed;
    }
    @include when(underline) {
        &:hover:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 0;
            bottom: 0;
            border-bottom: 1px solid $--link-default-active-color
        }
    }
</style>
