---
title: 谈谈 IB 游戏设计
link: game-design-of-IB
start: 2021-03-22
date: 
updated: 
categories: 游戏
tags: 游戏设计
---

## 前言

距离接触[《不可能的 Boss》(Impossible Bosses，简称 IB)](https://baike.baidu.com/item/%E4%B8%8D%E5%8F%AF%E8%83%BD%E7%9A%84BOSS)已有 12 个年头，游戏时间大概有 3000 小时左右，IB 已成了我的本命游戏。
对 IB 的了解程度，我不在开发者 Psyris 之下，可谓神交已久。本文将全方位解析我对 IB 的游戏设计和哲学的理解。

<!-- more -->

## 简介

IB 是多人合作 Boss Rush 的一张魔兽地图，8 位玩家、10 个职业、10 个 Boss、5 个难度、42 件装备构成了游戏的主要玩法。由 Psyris 独立开发。

正如其名，IB 的卖点就是其难度，「不可能」之名直接挑衅着所有玩家。最终版本 V3V 在 12 年 2 月发布，最高的噩梦难度一直到 13 年年底才由一支韩国队伍首通，国内的首通时间则是在 15 年 8 月，也是天时地利人和皆得，第二次通关已是三年之后的 18 年 8 月。据说 Psyris 听闻有人通关也相当惊讶，因为他在调整 V3V 的数值时是真的没想着让玩家通关的。不可能的 Boss，名副其实。

当然 IB 也没有那么那么的难，一方面我们没有用最功利的玩法，很多时候甚至没有 YY 指挥，另一方面，游戏极其小众，导致玩家们对最优解的推演极慢。
有意思的是，虽然游戏长时间没有更新，但各种利用 bug 的奇技淫巧倒是层出不穷，这些 bug 没有强到直接杀死游戏，反而需要一些使用技巧，带来了全新的乐趣。

## 设计哲学

在经历了大量的优秀游戏洗礼之后，我开始对设计师精心设计的完美难度曲线厌倦，因为对普通人来说的完美心流体验对我而言显得有点过于轻松了。甚至是任天堂那样润物细无声的新手引导关卡我都嫌啰嗦。

我希望游戏像一座高山一样傲视着我等着我去挑战，或是摆出架势跟我面对面地公平对抗，而不是卑躬屈膝的讨好玩家，用各种技巧假装玩家好厉害的样子。IB 做到了。

一方面 IB 的游戏设计完全无视经典设计理论，另一方面 IB 则为硬核玩家提供了相当深的游戏内容。在 IB 之前，我从未想过我玩 PVE 游戏的时间会超过 PVP 游戏的时间。

另外，名为不可能的 Boss，设计重心也确实放在了 Boss 上。作为首个带有英雄元素的 RTS 游戏的编辑器，大部分地图都将设计重点放在了英雄身上

## 游戏类型

### 副本

多人合作 + Boss Rush，可以说是相当偏门的游戏类型了，Boss Rush 一般只是一些单机游戏提供给硬核玩家的游戏模式，再加上多人合作的话，能想到的最接近的同类游戏可能是 MMORPG 中的副本战了，其中最经典最有代表性的自然是《魔兽世界》的副本。
相比而言，IB 的 Boss Rush 去掉了副本中平淡的小怪和逛街流程，直奔主题打 Boss。另一方面，IB 不是网游而是单机，每一局玩家的初始属性是固定的，同时过关之后可以购买道具装备和升级属性，每关出现的装备是随机刷新的，所以也算是带有一点 Rouge 元素。

### 战法牧

发扬于《魔兽世界》的战法牧（或者叫坦输奶）体系已成为多角色战斗游戏的经典且泛滥的组合。暴雪更是可以把这个体系带到 AoS 和 FPS 中。当然，战法牧很经典、很简洁、很有效，只不过在玩了那么多年的战法牧之后，我实在是厌倦了这一套体系了。

看上去很接近 WOW 副本的 IB 虽然没有摆脱战法牧体系，但在这上面做了很多改进：

- 在坦克上，更多时候战士的职责不是强行承担伤害，而是吸引仇恨、控制 Boss 的站位和面向角度，特别是远程 Boss，因为 Boss 几乎所有的攻击都可以走位规避，而战士本身也没有任何减伤加成，所以专门由战士来吸收伤害并不会产生特别大的收益。
- 在输出上，也分为了普通伤害、能量削减、爆发道具三部分，虽然在前九关能量削减的作用不是那么大，但在最后一关，能量削减相当重要。而爆发道具由于无法同时释放，考验了团队的配合和战术。
- 在治疗上，由于 IB 大部分伤害都是直接秒杀的，所以复活占了牧师的一半作用，再加上圣骑的群体复活和各类复活道具形成的复活循环，组成了 IB 高难度玩法的一大核心，而在低端局里治疗更是作用甚小。

外加上反制循环、AOE 清怪的体系，总体上极大地丰富了战法牧体系。

### 多人联机

《糖豆人》、《Among Us》再到《动物派对》、《恐鬼症》，各种类型的多人联机的单机游戏现在越来越火了。这也是魔兽 RPG 一直长盛不衰的一大原因。

不过国内的魔兽 RPG 圈一直以 PVP 为主导，自 DotA 之后更是天差地别，不太注重 PVE 的关卡设计，开发者不晓得关卡设计为何物。大多数防守图、塔防图的关卡设计简直是惨不忍睹，基本全是数值怪，闯关图的关卡也只能说是勉强能玩的程度。

就在这时，IB 横空出世，闯入了我的世界，我的字典里这才出现了「关卡设计」四个字。

## 开局

### 难度

IB 有五大难度：新手、简单、普通、困难、噩梦。每个难度都各有不同，而且不是简单的数值调整。
新手难度只有前 8 个 Boss（文案是玩家没有资格挑战最后两个 Boss，也是够挑衅的），并且 Boss 没有抗性，血量削弱 20%，杀伤性技能被封印，每关奖励的金币与评价几乎无关，实践中 2 人即可通关。（IB 的难度不会根据玩家数量调整）
简单难度解锁 Boss 上古之神，金币开始与评价挂钩（评价只和死亡次数挂钩），3 人可通关。
普通难度解锁上古之神第二形态，
困难难度解锁最终 Boss 恶魔之神，自动复活道具变为两关补一个。
噩梦难度玩家不再拥有自动复活道具，容错率大大降低，不过没有了复活，玩家反而省了一个格子，可谓是无心插柳的优秀设计：游戏难度确实提高了，但玩家也得到了某一维度的强化。

当然，最基本的，随着难度提高，Boss 的各种数值和技能伤害也会逐渐上升。

IB 的难度设计与一般游戏不同的是，它的五个难度更像是游戏的五大章节，即使是游戏高手也只能从最低难度玩起然后往上打，因为即使是最低难度也难得离谱，不看攻略在通关前死个上百次也很正常。在设计上，Psyris 的原意应该也是打通了低难度才能打下一个难度，就像 IB2 一样，只不过 IB1 由于技术原因实现不了。

很可惜的是许多人通关了新手难度就当做通关了，不再深入玩更高难度了。

### 职业选择

## 休息

### 经济系统

### 装备

### 加点

### 消耗品

#### 药水

#### 卷轴

#### 稀有卷轴

### 房间

### BUFF

## 战斗

### 职业

### Boss

## 结语
