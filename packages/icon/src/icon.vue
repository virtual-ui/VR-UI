<template>
        <i class="vr-icon" :class="{'is-spin':spin}" :style="{'transform':`rotate(${rotate}deg)`}">
            <span v-if="$slots.default">
                <slot></slot>
            </span>
        </i>
</template>

<script>
    import "../../assets/iconfont/iconfont.css";
    export default {
        name: "VrIcon",
        props:{
            spin:{
                type:Boolean,
                default:false
            },
            rotate:{
                type:Number,
                default: null
            }
        },
    };
</script>

<style lang="scss" scoped>
    .vr-icon {
        display: inline-block;
        font-family: "vr-icon" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #4c4c4c;
    }
    .vr-icon.is-spin {
        -webkit-animation: is-spin 1.5s infinite linear;
        animation: is-spin 1.5s infinite linear;
    }
    @-webkit-keyframes is-spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }
    @keyframes is-spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }
</style>
