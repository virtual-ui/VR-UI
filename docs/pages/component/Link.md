# Link 文字链接
文字超链接

## 基础用法
基础的文字链接用法

<ClientOnly>
<link-demo-base></link-demo-base>
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-link href="\" target="_blank">默认链接</vr-link>
        <vr-link type="primary">主要链接</vr-link>
        <vr-link type="success">成功链接</evr-link>
        <vr-link type="warning">警告链接</vr-link>
        <vr-link type="danger">危险链接</vr-link>
        <vr-link type="info">信息链接</vr-link>
    </div>
</template>

```
:::

## 禁用状态
文字链接不可用状态

<ClientOnly>
<link-demo-disabled></link-demo-disabled>
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-link disabled>默认链接</vr-link>
        <vr-link type="primary" disabled>主要链接</vr-link>
        <vr-link type="success" disabled>成功链接</vr-link>
        <vr-link type="warning" disabled>警告链接</vr-link>
        <vr-link type="danger" disabled>危险链接</vr-link>
        <vr-link type="info" disabled>信息链接</vr-link>
    </div>
</template>


```
:::

## 下划线
文字链接下划线

<ClientOnly>
<link-demo-underline></link-demo-underline>
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-link :underline="false">无下划线</vr-link>
        <vr-link :underline="true">有下划线</vr-link>
    </div>
</template>


```
:::

## 图标
带图标的文字链接可增强辨识度

<ClientOnly>
<link-demo-icon></link-demo-icon>
</ClientOnly>

::: details 查看代码
```html
<template>
    <div>
        <vr-link icon="vr-edit">编辑</vr-link>
        <vr-link icon="vr-eye">查看</vr-link>
    </div>
</template>

<script>

</script>
