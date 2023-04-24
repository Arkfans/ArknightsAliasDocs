---
title: 枚举类
---

# 枚举类

:::tip
此页的参数通常使用 `移位` 进行计算
:::

## TYPE

类型过滤器

### 说明

类型包含的名称可以在此[repo](https://github.com/Arkfans/ArknightsName/tree/main/table)查看

```python
OPERATOR = 1 << 0
TOKEN = 1 << 1
TRAP = 1 << 2
SKIN = 1 << 3
BRAND = 1 << 4
ENEMY = 1 << 5
ACTIVITY = 1 << 6
TEAM = 1 << 7
ITEM = 1 << 8
TAG = 1 << 9
POOL = 1 << 10
SKILL = 1 << 11
STAGE = 1 << 12
ZONE = 1 << 13
MEMORY = 1 << 14
ALL = (1 << 15) - 1  # default
```

## LANG

语言过滤器

```python
zh_CN = 1 << 0
en_US = 1 << 1
ja_JP = 1 << 2
ALL = (1 << 3) - 1  # default
```

## OUTPUT

输出格式

### 说明

当需求参数超过两个，输出为二维数组 [[alias,name],[alias,name],...]  
仅有一个需求时，输出为一维数组 [alias,alias,...]

```python
ALIAS = 1 << 0
NAME = 1 << 1
ID = 1 << 2
TYPE = 1 << 3
LANG = 1 << 4
BASIC = ALIAS | NAME | ID #  default
```

## MODE

搜索模式

### 说明

使用 INCLUDE 搜索时，输出会按照匹配名称从长到短排序  
使用 IN 搜索时，从短到长排序  
同时使用 INCLUDE IN，从长到短排序

```python
# input:超级斯卡蒂 -> 斯卡蒂
INCLUDE = 1 << 0  # default
# input:蒂 -> 斯卡蒂
IN = 1 << 1
# 相等
EQ = 1 << 2
# 拼音
PINYIN = 1 << 3
# 忽略大小写
IGNORE_CASE = 1 << 4
```