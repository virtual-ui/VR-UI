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

## Flex排序
分栏之间存在间隔。

## 左右偏移
分栏之间存在间隔。

## 响应式布局
分栏之间存在间隔。

## 栅格排序
分栏之间存在间隔。
