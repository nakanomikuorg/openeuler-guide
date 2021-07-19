---
title: 桌面环境与常用应用
---

# 桌面环境与常用应用安装

> ### 🏔 两岸猿声啼不住，轻舟已过万重山
>
> 这一节将讨论在 openEuler 上安装图形界面和常用应用。

> ### 🔖 这一节将会讨论：
>
> ::: details 目录
>
> [[toc]]
>
> :::

## 1. 连接网络

首先需要连接网络。

### 1-1. 无线连接

使用 `nmtui` 命令即可。

1. 在终端执行 `nmtui` 运行网络配置工具：

   ```sh
   nmtui
   ```

   ![nmtui-1](../static/rookie/desktop-env-and-app/nmtui-1.png)

   ::: tip ℹ️ 提示

   截图来自其它发行版，不过不用担心！除语言和配色之外都是一样的。

   :::

2. 选择 `Activate a connection`（启用连接）并回车 `Enter`：

### 1-2. 有线连接

## 2. 测试网络连通性

通过 `ping` 命令测试网络连通性：

```sh
ping www.huawei.com
```

稍等片刻，若能看到数据返回，即说明已经联网。与 Windows 不同的是，需要按下 `Ctrl` + `C` 手动退出 `ping` 命令。

## 3. 更新系统

使用以下命令更新系统：

```sh
dnf update
```
