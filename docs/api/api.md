---
title: 接口
---

<ClientOnly>

# API接口

:::tip
API无需TOKEN即可调用，qps固定为10  
查看别名库 [Arkfans/ArknightsAlias](https://github.com/Arkfans/ArknightsAlias/blob/main/table.md)
:::

## 从文本中获取名称

```
[GET] /name/search
```

### 请求

| 名称 | 类型 | 默认值 | 说明 
| ---  | --- | ----- | ---- |
| text | String | / | 搜索的字符串 |
| type | Int | 16383 (ALL) | [TYPE](./enum#type) |
| lang | Int | 7 (ALL) | [LANG](./enum#lang) |
| output | Int | 7 (BASIC) | [OUTPUT](./enum#output) |
| mode | Int | 1 (INCLUDE) | [MODE](./enum#mode) |

### 响应

```json
//  /name/search?text=德克萨斯&type=1&output=6&mode=2
[
  [
    "德克萨斯",
    "char_102_texas"
  ],
  [
    "缄默德克萨斯",
    "char_1028_texas2"
  ]
]
```

## 从文本中获取别名

:::tip
别名数据可在 [Arkfans/ArknightsAlias](https://github.com/Arkfans/ArknightsAlias) 查看
:::

```
[GET] /alias/search
```

### 请求

| 名称 | 类型 | 默认值 | 说明 |
| ---  | --- | ----- | ---- |
| text | String | / | 搜索的字符串 |
| type | Int | 16383 (ALL) | [TYPE](./enum#type) |
| lang | Int | 7 (ALL) | [LANG](./enum#lang) |
| output | Int | 7 (BASIC) | [OUTPUT](./enum#output) |
| mode | Int | 1 (INCLUDE) | [MODE](./enum#mode) |
| include_origin | Boolen | false | 是否搜索原名 |

### 响应

```json
//  /alias/search?text=火神&include_origin=true
[
  [
    null,
    "火神",
    "char_163_hpsts"
  ],
  [
    "神",
    "异客",
    "char_472_pasngr"
  ]
]
```

## 查询别名对应的名称

```
[GET] /alias/get
```

### 请求

| 名称 | 类型 | 默认值 | 说明 |
| ---  | --- | ----- | ---- |
| alias | String | / | 要查询的别名 |

### 响应

```json
//  /alias/get?alias=光
"铃兰"
```

## 查询哪些别名指向该名称

```
[GET] /alias/inquire
```

### 请求

| 名称 | 类型 | 默认值 | 说明 |
| ---  | --- | ----- | ---- |
| name | String | / | 要查询的名称 |

### 响应

```json
//  /alias/inquire?name=菲亚梅塔
[
  "不叫微光守夜人的黎博利",
  "坟墓骑士",
  "天启宣告者",
  "密藏守望者",
  "微光守夜人",
  "死神代行人",
  "毁灭凤凰人",
  "燃烧使者",
  "独臂电锯侠",
  "神圣狩猎狂",
  "神选监工",
  "粘性超人",
  "苦难陈述者",
  "超能惩罚王",
  "铳与玫瑰",
  "黎明破坏者",
  "旷野飞行员",
  "虚空美食家"
]
```

## 获取名称数据

:::tip
该请求会重定向到 [Arkfans/ArknightsName/data/all.json](https://raw.githubusercontent.com/Arkfans/ArknightsName/main/data/all.json)
:::

```
[GET] /name/data.json
```
### 请求

该请求无参数

## 获取别名数据

:::tip
该请求会重定向到 [Arkfans/ArknightsAlias/data.json](https://raw.githubusercontent.com/Arkfans/ArknightsAlias/main/data.json)
:::

```
[GET] /alias/data.json
```

### 请求

该请求无参数

</ClientOnly>

