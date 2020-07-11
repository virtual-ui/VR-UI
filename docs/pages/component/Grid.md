# Grid 栅格
通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局
使用单一分栏创建基础的栅格布局。

<ClientOnly>
<grid-demo-base></grid-demo-base>  
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
       <vr-row>
           <vr-col :span="6">col-6</vr-col>
           <vr-col :span="6">col-6</vr-col>
           <vr-col :span="6">col-6</vr-col>
           <vr-col :span="6">col-6</vr-col>
       </vr-row>
       <vr-row>
           <vr-col :span="8">col-8</vr-col>
           <vr-col :span="8">col-8</vr-col>
           <vr-col :span="8">col-8</vr-col>
       </vr-row>
       <vr-row>
           <vr-col :span="12">col-12</vr-col>
           <vr-col :span="12">col-12</vr-col>
       </vr-row>
       <vr-row>
           <vr-col :span="24">col-24</vr-col>
       </vr-row>
    </div>
</template>
```
:::

## 分栏间隔
分栏之间存在间隔。

<ClientOnly>
<grid-demo-gutter></grid-demo-gutter>  
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-row :gutter="[16]">
            <vr-col :span="6">col</vr-col>
            <vr-col :span="6">col</vr-col>
            <vr-col :span="6">col</vr-col>
            <vr-col :span="6">col</vr-col>
        </vr-row>
        <vr-row :gutter="16">
            <vr-col :span="6">col</vr-col>
            <vr-col :span="6">col</vr-col>
            <vr-col :span="6">col</vr-col>
            <vr-col :span="6">col</vr-col>
        </vr-row>
    </div>
</template>
```
:::

## Flex 对齐方式
分栏之间存在间隔。

<ClientOnly>
<grid-demo-flex-align></grid-demo-flex-align>  
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-row type="flex" class="row-bg">
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
        </vr-row>
        <vr-row type="flex" class="row-bg" justify="center">
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
        </vr-row>
        <vr-row type="flex" class="row-bg" justify="end">
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
        </vr-row>
        <vr-row type="flex" class="row-bg" justify="space-between">
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
        </vr-row>
        <vr-row type="flex" class="row-bg" justify="space-around">
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
            <vr-col :span="6"><div class="grid-content">col</div></vr-col>
        </vr-row>
    </div>
</template>
```
:::

## 左右偏移
分栏之间存在间隔。

<ClientOnly>
<grid-demo-offset></grid-demo-offset>  
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-row :gutter="20" class="row-bg">
            <vr-col :span="6"><div class="content bg-purple">col</div></vr-col>
            <vr-col :span="6" :offset="6"><div class="content bg-purple">col</div></vr-col>
        </vr-row>
        <vr-row :gutter="20" class="row-bg">
            <vr-col :span="6" :offset="6"><div class="content bg-purple">col</div></vr-col>
            <vr-col :span="6" :offset="6"><div class="content bg-purple">col</div></vr-col>
        </vr-row>
        <vr-row :gutter="20" class="row-bg">
            <vr-col :span="12" :offset="6"><div class="content bg-purple">col</div></vr-col>
        </vr-row>
    </div>
</template>
```
:::

## 响应式布局
分栏之间存在间隔。

<ClientOnly>
<grid-demo-bootstrap></grid-demo-bootstrap>  
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-row class="row-bg">
            <vr-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div class="content">col</div>
            </vr-col>
            <vr-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div class="content">col</div>
            </vr-col>
            <vr-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div class="content">col</div>
            </vr-col>
        </vr-row>
    </div>
</template>
```
:::

## 栅格排序
分栏之间存在间隔。

<ClientOnly>
<grid-demo-pull-push></grid-demo-pull-push>  
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-row class="row-bg">
            <vr-col :span="6" :pull="12">
                <div style="background:rgba(153,51,102,.7); padding:10px;">col-6 | pull-12</div>
            </vr-col>
            <vr-col :span="12" :push="6">
               <div style="background:rgba(153,51,102,.7); padding:10px;">col-12 | push-6</div>
            </vr-col>
        </vr-row>
    </div>
</template>
```
:::