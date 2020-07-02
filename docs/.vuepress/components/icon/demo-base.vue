<template>
    <div>
        <ul class="icon-list">
            <li v-for="(icon,index) in list" :key="index">
            <span>
                <vr-icon :class="icon"></vr-icon>
            </span>
                <span>{{icon}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    import Icon from '../../.././../packages/icon/src/icon';
    export default {
        name:"icon-demo-base",
        components:{
          [Icon.name]:Icon,
        },
        data(){
            return{
                list:[
                    "vr-indeterminate-circle-line",
                    "vr-information-fill",
                    "vr-indeterminate-circle-fill",
                    "vr-information-line",
                    "vr-list-settings-fill",
                    "vr-loader-2-fill",
                    "vr-loader-4-line",
                    "vr-loader-5-fill",
                    "vr-loader-5-line",
                    "vr-loader-fill",
                    "vr-login-circle-fill",
                    "vr-login-circle-line",
                    "vr-menu-4-fill",
                    "vr-menu-3-line",
                    "vr-menu-3-fill",
                    "vr-menu-2-line"
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .icon-list{
        overflow: hidden;
        list-style: none;
        padding: 0!important;
        & li{
            float: left;
            width: calc(100% / 5);
            text-align: center;
            height: 100px;
            color: #666;
            font-size: 13px;
            vertical-align: center;
            margin-right: -1px;
            margin-bottom: -1px;
            border-radius: 4px;
            transition: color .3s ease-in-out,background-color .3s ease-in-out;
            .vr-icon{
                line-height: 50px;
                font-size: 32px;
                font-weight: 600;
                transition: transform .3s linear,-webkit-transform .3s linear;
                will-change: transform;
            }
            &:hover{
                background: #FF99CC;
                color: #fff;
               & .vr-icon{
                    color: white;
                    font-size: 40px;
                }
            }
            span{
                display: inline-block;
            }
        }
    }
</style>
