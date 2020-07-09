# Layout 布局
布局和导航是产品的骨架，是页面的重要构成模式之一，是作为后续展开页面设计的基础，可以为产品奠定交互和视觉风格。

## 顶部导航
导航在顶部，有面包屑、正文的布局。

<ClientOnly>
<layout-demo-header></layout-demo-header>  
</ClientOnly>

::: details 查看代码
```html
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-key="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <span key="1">
                    <vr-icon type="ios-navigate"></vr-icon>
                    导航一
                </span>
                <span key="2">
                    <vr-icon type="ios-keypad"></vr-icon>
                    导航二
                </span>
                <span key="3">
                    <vr-icon type="ios-analytics"></vr-icon>
                    导航三
                </span>
                <span key="4">
                    <vr-icon type="ios-paper"></vr-icon>
                    导航四
                </span>
            </div>
        </Menu>
        <Menu mode="horizontal" active-key="1">
            <div class="layout-assistant">
                <span key="1">二级导航</span>
                <span key="2">二级导航</span>
                <span key="3">二级导航</span>
            </div>
        </Menu>
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
```
:::