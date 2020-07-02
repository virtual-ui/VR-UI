# Button 按钮
常用的操作按钮

## 基础用法
基础的按钮用法

<ClientOnly>
 <button-demo-base></button-demo-base>
</ClientOnly>

::: tip
使用type、plain、round和circle属性来定义 Button 的样式。
:::

::: details 查看代码
```html
<template>
    <div>
        <div>
            <vr-button>默认按钮</vr-button>
            <vr-button type="primary">主要按钮</vr-button>
            <vr-button type="success">成功按钮</vr-button>
            <vr-button type="info">信息按钮</vr-button>
            <vr-button type="warning">警告按钮</vr-button>
            <vr-button type="danger">危险按钮</vr-button>
        </div>
        <div>
             <vr-button>朴素按钮</vr-button>
             <vr-button type="primary" plain>主要按钮</vr-button>
             <vr-button type="success" plain>成功按钮</vr-button>
             <vr-button type="info" plain>信息按钮</vr-button>
             <vr-button type="warning" plain>警告按钮</vr-button>
             <vr-button type="danger" plain>危险按钮</vr-button>
         </div>
        <div>
            <vr-button round>圆角按钮</vr-button>
            <vr-button type="primary" round>主要按钮</vr-button>
            <vr-button type="success" round>成功按钮</vr-button>
            <vr-button type="info" round>信息按钮</vr-button>
            <vr-button type="warning" round>警告按钮</vr-button>
            <vr-button type="danger" round>危险按钮</vr-button>
        </div>
        <div>
            <vr-button circle></vr-button>
            <vr-button type="primary" circle></vr-button>
            <vr-button type="success" circle></vr-button>
            <vr-button type="info" circle></vr-button>
            <vr-button type="warning" circle></vr-button>
            <vr-button type="danger" circle></vr-button>
        </div>
    </div>
</template>
 
```
:::

## 禁用状态
按钮不可用状态

<ClientOnly>
 <button-demo-disabled></button-demo-disabled>
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <div>
            <vr-button disabled>默认按钮</vr-button>
            <vr-button type="primary" disabled>主要按钮</vr-button>
            <vr-button type="success" disabled>成功按钮</vr-button>
            <vr-button type="info" disabled>信息按钮</vr-button>
            <vr-button type="warning" disabled>警告按钮</vr-button>
            <vr-button type="danger" disabled>危险按钮</vr-button>
        </div>
        <div>
            <vr-button disabled>朴素按钮</vr-button>
            <vr-button type="primary" disabled>主要按钮</vr-button>
            <vr-button type="success" disabled>成功按钮</vr-button>
            <vr-button type="info" disabled>信息按钮</vr-button>
            <vr-button type="warning" disabled>警告按钮</vr-button>
            <vr-button type="danger" disabled>危险按钮</vr-button>
        </div>
    </div>
</template>
```
:::

## 文字按钮
点击出现边框和背景色的按钮

<ClientOnly>
 <button-demo-flat></button-demo-flat>
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-button flat>默认按钮</vr-button>
        <vr-button type="primary" flat>主要按钮</vr-button>
        <vr-button type="success" flat>成功按钮</vr-button>
        <vr-button type="info" flat>信息按钮</vr-button>
        <vr-button type="warning" flat>警告按钮</vr-button>
        <vr-button type="danger" flat>危险按钮</vr-button>
    </div>
</template>
```
:::

# 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<ClientOnly>
 <button-demo-icon></button-demo-icon>
</ClientOnly>


## 按钮组
以按钮组的方式出现，常用于多项类似操作。

<ClientOnly>
 <button-demo-group></button-demo-group>
</ClientOnly>

## 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。

<ClientOnly>
 <button-demo-loading></button-demo-loading>
</ClientOnly>
