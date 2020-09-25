---
title: QQ 机器人
date: 2020-09-24 23:39:00
categories: 极客
tags: QQ 机器人
---

## [el-bot](https://www.yunyoujun.cn/note/make-el-bot/)

云游君整了个 QQ 机器人，挺有兴趣的就也整了一个，部署的时候折腾了好一会儿，甚至远程求助，总算是接上了，最后还是部署在 Mac 上了，Win 上问题挺多的，现在大概好一点，我用的还是 0.1 的版本，现在已经到 0.5 了，懒得更新了，反正也不需要啥新功能。

<!-- more -->

记录下启动命令，一个 `mirai`，一个 `el-bot`，分两个窗口运行，新版本好像是合并了。

```bash
npm run start:mirai
npm run start
```

- [文档](https://docs.bot.elpsy.cn/)
- [插件](https://github.com/ElpsyCN/el-bot-plugins)
- [Mirai-API-http](https://github.com/project-mirai/mirai-api-http)

## Project Oekakisoli

> 等一切结束，我们就狂欢。

QQ 机器人，不禁让我想起曾经的萌娘回路、[猫谜绘音](https://zh.moegirl.org/%E7%8C%AB%E8%B0%9C%E7%BB%98%E9%9F%B3) 和猫谜绘板，已经不记得当初是从哪看到的了，只记得入坑的时候一堆的名词术语差点给我整懵了。
简单说，整个企划叫做「Project Oekakisoli」，主要致力于同人美术创作，由此衍生出的一系列产品：

- 猫谜绘板：主要是个在线你画我猜游戏，但也可以单纯用来画画，在社区里可以像 Pixiv 一样浏览作品，而且还带绘画过程，甚至还有评论弹幕
- 萌娘回路：智能聊天 AI（似乎是深受「夏娃的时间」影响），其中猫谜绘音（之前叫ネコナゾ娘）是最主要的看板娘 AI，在绘板中也可以邀请其进行游戏，画的时候会复制绘画题目的前人的绘画过程
- 猫茶绘：后期升级版的猫谜绘板，最重要的功能大概是多图层了
- [猫聊](https://github.com/qyx525127/NekoIM)：IM

整个用爱发电的独立制作的同人企划始于 2010 年，于 2017 年停止运营，只过了三年，我却感觉隔了一个世纪。
即使到今天（感觉不知道从何时起，国内互联网开始全面走下坡路），猫谜绘板依然是国内做的最好的你画我猜（极大的各类型题库、画板功能丰富、支持数位板、模糊匹配答案等等（就是二次元味有点浓）），萌娘回路也依然是国内民间做的最好的聊天 AI（不是傻乎乎的关键词响应，而是可以理解上下文，有性格，有好感度系统，可以调教却绝对不会像其他 AI 一样学坏，努力接近图灵测试的 AI，虽然其智能是靠人力硬堆而非 NLP、机器学习之类的），即使知名度极低（活着的时候也没几个人，也就散人宣传之后稍微火了一会）。
企划的关闭不禁让人怀疑「用爱发电」是否只是乌托邦。
顺便「Oekakisoli」的意思大概是绘图机（不懂日语）。

相关信息：

- [猫谜绘板（当然已经挂了）](http://www.nekonazo.com/partyex/)
- [散人绘板实况](https://b23.tv/av874564)
- [曾经的论坛](https://web.archive.org/web/20160414152842/http://bbs.nekonazo.com/forum.php)
- [猫谜绘音](https://zh.moegirl.org/%E7%8C%AB%E8%B0%9C%E7%BB%98%E9%9F%B3)
- [如何评价「猫谜绘音」被作者从萌娘回路中删除？](https://www.zhihu.com/question/47063057)
- [萌娘回路](https://sstm.moe/topic/128957-%E8%90%8C%E5%A8%98%E5%9B%9E%E8%B7%AF-%EF%BD%9E-moec-core%EF%BC%88%E5%BC%80%E6%BA%90%E8%BD%AC%E8%BD%BD%EF%BC%89/)
- [萌娘回路聊天指令](https://tieba.baidu.com/p/4136856025)

说起来我也在绘板画过几幅作品，主要是临摹吧，之前也从来没画过画。

![RWBY](https://i.loli.net/2020/09/23/HJSGj3FaUORhKd8.png)

纯粹 [临摹](https://i.loli.net/2020/09/23/I2PEhMHXdVf7q69.jpg)（简直就是照着描）的图，月亮还是用按键精灵画的，因为画笔放不到那么大，很难画那么圆。

慕斯：你直接用按键精灵一像素一像素复制下来就完了。

![赫卡特](https://i.loli.net/2020/09/23/igulN72SbqtpFDj.png)

赫卡特，想试着自己画一下背景结果画成了这鸟样，想画的是站在悬崖上看日出的样子，结果看着像是把人物跟小学生画作拼在一起似的。

![马上有灵梦](https://i.loli.net/2020/09/23/TAYLG8w3EiXnNlO.jpg)

14 年马年春节前画的，主要也是临的（PID：18920920），这个是用 SAI 画的了，总算有多图层了，整整用鼠标勾了一个星期，累死了，结果还凑合吧，勉强能看。

之后也再没画过画了，真要画也得弄个板子，鼠标和钢笔拉出来的线条根本没有灵魂。

## 功能

随便整了点功能，主要还是框架本身有的功能，别的功能都是在写在自定义插件里。

- 天气：xxx天气
- 翻译：翻译xxx（其他语言→中）
- 壁纸：来点壁纸
- 涩图：来点涩图
- 笑话：来点xxx笑话
- 一言：say
- 今日人品：jrrp
- 今日塔罗牌：tlp（只弄了大阿卡那牌）
- 影之诗卡牌查询：svp xxx（还强行弄了个短链）
- 关键词应答
- 撤回/禁言/加群 响应
- RSS 订阅

### API

接 API 的功能代码差不多都是这种结构：

```js
  mirai.on("message", async (msg) => {
    if (!re(msg.plain, "^foo")) {
      return
    }
    let content = msg.plain.split("foo")[1].trim()
    var url = "https://foo.bar?foo="
    if (content.length > 0) {
      url += encodeURI(content)
    } else {
      return
    }
    const { data } = await axios.get(url)
      .catch(function (error) {
        console.log(error.response.data)
        msg.reply(error.response.data.msg)
        return
      })
    msg.reply(`${data.foo.bar}`)
  })
```

天气、翻译、短链：

- [ALAPI](https://www.alapi.net/)

壁纸：

只是发个网络图片的话用应答就可以了。

```yml
  - re: 来点壁纸
    reply:
      - type: Plain
        text: 让我找找~
      - type: Image
        url: https://api.addesp.com/image/wallpaper/acg
```

- [ADD-SP](https://www.addesp.com/archives/329)：<https://api.addesp.com/image/wallpaper/acg>

涩图：

- [云游君](https://github.com/ElpsyCN/el-bot-plugins/tree/master/packages/setu)：<https://el-bot-api.vercel.app/api/setu>
- [Lolicon（神代綺凜）](https://api.lolicon.app/#/setu)：<https://api.lolicon.app/setu/?r18=0>
- [Yukari（脆饼干）](https://www.yukari.one/2020/08/10/setuAPI/)：<https://api.yukari.one/setu/?r18=0>（~~不够色~~）

甚至有个 [App](https://github.com/CBGan/hso)。

慕斯：这就是程序员吗（=_=）

### 今日人品

之前看到过这种功能所以想着也整一个玩玩，最开始的想法当然是直接用随机数，但是立刻意识到这样岂不是每次都会变，应该每个人每天的值是不变的，把值保存下来当然可以解决，但是显然不够优雅，然后就想到了根据种子生成随机数，谷歌了一下好像 js 原生没有这种函数，找到个算法模拟的伪随机种子函数：

```js
function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}
```

一堆 magic number，懒得研究了，能用就行，然后种子用 QQ 号 + 日期就行，最后取 101 的模就完成了。

### RSS

RSS 是个好东西，远离国内局域网的好工具，虽然我以前也不用，用机器人订阅倒是挺不错的。
说到 RSS 当然不得不提 [DIYgod](https://diygod.me/) 的 [RSShub](https://rsshub.app/) 了（万物皆可 RSS），如今已被墙了，我试图 [配置 Mac 终端的代理](https://www.yfmingo.cn/2018/06/29/mac-terminal-shadowsocks/)：

npm 代理：

```bash
npm config set proxy=http://127.0.0.1:1087
npm config set https-proxy=http://127.0.0.1:1087
```

删除代理：

```bash
npm config delete proxy
npm config delete https-proxy
```

结果好像都没用，最后用了别人搭的 `rsshub.ioiox.com`，也不知道啥时候就没了，用一天是一天吧。

## 后记

>全剧·终
>很喜欢你，但是到此为止，谢谢你的出现。

[第三方 QQ 机器人的风与雨](https://card.weibo.com/article/m/show/id/2309404533401464996007)

腾讯开始封杀 QQ 机器人了，一众开发者纷纷跑路（mirai 他又回来了，当然 mirai 跑路了也不暂时影响使用），虽然 QQ 机器人法律上确实是不占理，但是腾讯的垄断也是真的恶心。

> 当无产阶级不再思考资产阶级本身的合理性，而将反对的目标局限于某几个资本家的时候，说明资本主义已经成功了。
