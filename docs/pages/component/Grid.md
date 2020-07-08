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
        <vr-row type="flex" justify="center" align="top">
            <vr-col :span="4"><div class="grid-content" style="height: 80px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 30px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 100px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 60px">col-4</div></vr-col>
        </vr-row>
        <vr-row type="flex" justify="center" align="bottom">
            <vr-col :span="4"><div class="grid-content" style="height: 80px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 30px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 100px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 60px">col-4</div></vr-col>
        </vr-row>
        <vr-row  type="flex" justify="center" align="midddle">
            <vr-col :span="4"><div class="grid-content" style="height: 80px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 30px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 100px">col-4</div></vr-col>
            <vr-col :span="4"><div class="grid-content" style="height: 60px">col-4</div></vr-col>
        </vr-row>
    </div>
</template>
```
:::


## Flex排序
分栏之间存在间隔。

<ClientOnly>
<grid-demo-flex-order></grid-demo-flex-order>  
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-row>
            <vr-col span=6 order={4}>
                <div class="content">1 vr-col-order-4</div>
            </vr-col>
            <vr-col span=6 order={3}}>
                <div class="content">2 vr-col-order-3</div>
            </vr-col>
            <vr-col span=6 order={2}>
                <div class="content">3 vr-col-order-2</div>
                </vr-col>
            <vr-col span=6 order={1}>
                <div class="content">4 vr-col-order-1</div>
            </vr-col>
        </vr-row>
    </div>
</template>
```
:::

## 左右偏移
分栏之间存在间隔。

## 响应式布局
分栏之间存在间隔。

## 栅格排序
分栏之间存在间隔。
