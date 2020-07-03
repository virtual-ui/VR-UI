<template>
    <div>
        <div class="list">

        </div>
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
                list:["vr-alignleft-fill","vr-borderbottom-fill","vr-bordertop-fill","vr-aligncenter-fill","vr-borderverticle-fill","vr-piccenter-fill","vr-picside-fill","vr-folderopen-fill","vr-folderplus-fill","vr-folder-fill","vr-file-SQL","vr-fileplus-fill","vr-file-fill","vr-copy-fill","vr-headset-fill","vr-phone-fill","vr-pausecircle-fill","vr-stopcircle-fill","vr-playcircle-fill","vr-delete-fill","vr-picture-fill","vr-mail-fill","vr-heart-fill","vr-collection-fill","vr-user-group-fill","vr-userplus-fill","vr-user-fill","vr-cog-fill","vr-clock-fill","vr-calendaralt-fill","vr-clouddownload-fill","vr-cloudupload-fill","vr-exchange-fill","vr-info-circle-fill","vr-question-circle-fill","vr-exclamationcircle-f","vr-minus-circle-fill","vr-plus-circle-fill","vr-times-circle-fill","vr-check-circle-fill","vr-compressalt-fill","vr-expandalt-fill","vr-filter","vr-all","vr-database-plus","vr-database","vr-comment-lines","vr-comment-dots","vr-paper-plane","vr-eye-slash","vr-eye","vr-lightbulb","vr-flag","vr-tag","vr-position","vr-location","vr-map","vr-inbox-in","vr-box","vr-database-set","vr-layer-group","vr-wind-cry","vr-wind-smile","vr-unlock","vr-lock","vr-align-right","vr-align-left","vr-border-bottom","vr-border-top","vr-align-center","vr-border-verticle","vr-pic-center","vr-pic-side","vr-folder-open","vr-folder-plus","vr-folder","vr-file-SQL1","vr-file-plus","vr-file","vr-copy","vr-headset","vr-phone","vr-pausecircle","vr-stopcircle","vr-playcircle","vr-delete","vr-picture","vr-mail","vr-like","vr-collection","vr-user-group","vr-account-plus","vr-account","vr-cog","vr-clock","vr-calendar-alt","vr-clouddownload","vr-cloudupload","vr-exchange","vr-info-circle","vr-question-circle","vr-exclamation-circle","vr-minus-circle","vr-plus-circle","vr-times-circle","vr-check-circle","vr-compress-alt","vr-expand-alt","vr-ban","vr-minus","vr-plus","vr-times","vr-check","vr-search-minus","vr-search-plus","vr-search","vr-reply","vr-undo","vr-redo","vr-external-link","vr-arrows-alt","vr-indent","vr-outdent","vr-sort-line","vr-switch","vr-wind-descending","vr-wind-ascending","vr-download","vr-upload","vr-arrow-to-bottom","vr-arrow-to-top","vr-long-arrow-down","vr-long-arrow-up","vr-arrow-right","vr-arrow-left","vr-sort","vr-sort-down","vr-sort-up","vr-caret-right","vr-caret-left","vr-arrows-v","vr-angle-double-down","vr-angle-double-up","vr-angle-double-right","vr-angle-double-left","vr-angle-down","vr-angle-up","vr-angle-right","vr-angle-left","vr-paperclip","vr-connection","vr-training","vr-process","vr-news","vr-save","vr-print","vr-new-releases","vr-release","vr-alert","vr-backspace","vr-gem","vr-integral","vr-star-circle","vr-user-circle","vr-cloud-machine-fill","vr-cloud-machine","vr-terminal-fill","vr-terminal","vr-shopping-cart-fill","vr-resource","vr-rank","vr-sync-alt","vr-compass","vr-arrow-alt-from-top","vr-arrow-alt-from-botto","vr-menu","vr-icon-drag","vr-early-warning","vr-share","vr-share1","vr-management-","vr-accesskeys","vr-arrow-sortdown-smal","vr-minus-square-fill","vr-plus-square-fill","vr-minus-square","vr-plus-square","vr-stepmode","vr-scrollingmode","vr-shoppingcart","vr-waiting-fill","vr-waiting","vr-right-arrow-rect","vr-left-arrow-rect","vr-bell","vr-structured-data","vr-vector","vr-NEW-copy","vr-HOT-copy","vr-home","vr-monitoring","vr-diagnose","vr-loading","vr-Directory-tree","vr-application","vr-applicationgroup","vr-chart-bar","vr-display-code","vr-display-arrow-right","vr-display-arrow-left","vr-laptop-error","vr-laptop-check","vr-laptop","vr-mobile-error","vr-mobile-check","vr-mobile-alt","vr-aliwangwang","vr-nail","vr-nail-fixed","vr-edit","vr-dollar","vr-transanction","vr-filter-fill","vr-all-fill","vr-databaseplus-fill","vr-database-fill","vr-commentlines-fill","vr-commentdots-fill","vr-drag","vr-ellipsis-vertical","vr-gallery-view","vr-WIFI","vr-bug-report","vr-qrcode","vr-scan","vr-cut","vr-gift","vr-link","vr-poweroff","vr-key","vr-safety-certificate","vr-supervise","vr-tag-subscipt","vr-chart-pie-alt","vr-chart-relation","vr-chart-scatter-plot","vr-chart-area","vr-chart-line"]
}           }
        }
</script>
<style lang="scss" scoped>
    .icon-list{
        overflow: hidden;
        list-style: none;
        padding: 0!important;
        & li{
            float: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
                transition: all 0.2s linear;
                will-change: transform;
            }
            &:hover{
                background: #FF99CC;
                color: #fff;
               & .vr-icon{
                    color: #fff;
                    font-size: 40px;
                }
            }
            span{
                display: inline-block;
            }
        }
    }
</style>
