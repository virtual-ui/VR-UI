<template>
    <div class="layout">
        <header >
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <span key="1">
                    <vr-icon type="vr-paper-plane"></vr-icon>
                    导航一
                </span>
                <span key="2">
                    <vr-icon type="vr-paper-plane"></vr-icon>
                    导航二
                </span>
                <span key="3">
                    <vr-icon type="vr-paper-plane"></vr-icon>
                    导航三
                </span>
                <span key="4">
                    <vr-icon type="vr-paper-plane"></vr-icon>
                    导航四
                </span>
            </div>
        </header>
        <header >
            <div class="layout-assistant">
                <span key="1">二级导航</span>
                <span key="2">二级导航</span>
                <span key="3">二级导航</span>
            </div>
        </header>
        <div class="layout-div">
            <div>
                <div href="#">首页</div>
                <div href="#">应用中心</div>
                <div>某应用</div>
            </div>
        </div>
        <div class="layout-content">
            内容区域
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    
    import Layout from '../../../../packages/layout/src/layout';
    import Header from '../../../../packages/layout/src/header';
    import Sider from '../../../../packages/layout/src/sider';
    import Content from '../../../../packages/layout/src/content';
    import Footer from '../../../../packages/layout/src/footer';
    export default {
        name:"layout-demo-header",
        components:{
            [Header.name]:Header,
            [Sider.name]:Sider,
            [Content.name]:Content,
            [Footer.name]:Footer,
        }
    }
</script>

<style lang="scss" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-div{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>