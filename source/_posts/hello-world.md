---
title: 建站小结
date: 2020-04-28 18:30:51
tags:
---

## 前言

简单记录下建站的过程吧。
一直念叨着建自己的博客，总算是建起来了，域名也是看了好久。
建站主要参考了 [云游君](https://www.yunyoujun.cn/) 的 [教你如何从零开始搭建一个属于自己的网站](https://www.yunyoujun.cn/share/how-to-build-your-site/)，还是挺新的教程，相当清晰明了，没有太啰嗦也没有太简略，有些教程只讲步骤不讲是什么就有点云里雾里，不过结果我还是走了一些弯路 orz。
建站前一直感觉建站应该还是蛮复杂的一件事（虽然教程都说很简单），看各种建站教程感觉都好长好长的，建完了发现还真挺简单的（当然也是 Hexo 比较简单）。

<!-- more -->

## 为什么建站

>起来！不愿做奴隶的人们！

### 大环境

这个事情可能要从 2019 年 5 月 13 日说起，这天百度贴吧公告 2017 年之前的帖子全部隐藏，说是会恢复，时隔一年确实恢复了一小部分，但大部分还是没有恢复，估计要等到猴年马月了。再之前还有百度空间的事。
很多人喷百度，当然百度确实傻逼，但更根本的可能还是言论自由的问题，可能很多人没意识到，事实上国内网络根本没有地方可以自由谈论政治。我也不喜欢谈论政治，你以为我乐意吗，快快乐乐的玩游戏做游戏它不好吗，但是有些事情真的越来越离谱，不能再忍受。
国内大部分 UGC 平台也是越来越拉胯，贴吧，不谈了，天胡开局血崩收场；知乎，看个答案都要付钱了；简书，开始感觉还可以，界面也很舒服，后来就全是毒鸡汤流量号了，只剩这 [煎蛋](http://jandan.net/) 还有些温度，虽然也在逐渐腐化。总之哪哪都不舒服，不如自己建站反抗一下。

### 个人

个人来说也是想写点东西，分享点东西吧，而且作为程序员不弄个个人网站感觉没什么人权。自己的博客也能随心所欲，为所欲为。
博客技术也是日新月异了，然后也是这两年才看到大佬们各种花里胡哨拉满的博客，什么 live2D 都有了，感觉也是时代变了，不是以前那种个人博客都是平平无奇清汤白水的时代了，也想自己整一个。

## 选择框架

一番谷歌之后发现主流博客框架有 WordPress、Typecho、Hexo，还有些大佬自己整的博客框架，[Aurora](https://github.com/chanshiyucx/aurora)，[Sakura](https://2heng.xin/theme-sakura/) 等等，还有用 [GitHub issues](https://github.com/lifesinger/blog/issues) 的骚操作的。简单介绍下主流框架吧。

WordPress，03 年的老古董了，PHP + MySQL，动态，简单地说你得搞个服务器来运行 WordPress，比如 VPS，比较臃肿，但是社区也丰富。
Typecho，08 年？出现，国人写的，相当于是轻量的 WordPress，后台也比较简洁。
Hexo，12 年出现，基于 Node，静态，静态的好处就是不用搞服务器了，整个托管平台就行，最常用的就是 GitHub page 了，坏处就是没有网页后台，写博客得自己本地写 MD 文件然后部署，然后换电脑的话还得装一套 Node + Git 环境。

光建站来说 Hexo 应该是最简单的，也是最便宜的，如果不弄域名等于是零成本，但是建完了开始运营会比动态的麻烦一点。
WordPress 我是直接 pass 了，个人还是倾向新的技术，然后就选了简单的 Hexo 试试水了。

## 选择主题

框架选完了还要选主题，当然大佬也可以自己搞主题了，像我这种懒比就选个顺眼的主题用用就行了，比如直接去看看大佬们的博客用的主题，或者可以看 [这里](https://easyhexo.com/2-Theme-use-and-config/)。本来也是想着自己的博客总得有点自己的东西吧，但想想博客本身只是手段，不是目的，就不多花精力了，前端我也基本不懂。

## 域名

域名的学问就太多了，要注册的话，可以参考 [知乎](https://www.zhihu.com/question/19551906)，国内的话主要是阿里云和腾讯云的，国外就多了，[namecheap](https://www.namecheap.com/)，[namesilo](https://www.namesilo.com/) 等等，最好是用国外的注册商，不会把你域名封了，而且国内的顶级域名少很多。我的话用的是 [dynadot](https://www.dynadot.com/)，网站很快，中文界面，域名也很多，想用的话注册账号的时候可以填我的推荐码：T6G6O8K6Z818O7v，说是消费 10 美元可以拿 5 美元。

如果你想了解域名是如何跟你的网站联系在一起的，可以参考 [DNS 原理入门](https://www.ruanyifeng.com/blog/2016/06/dns.html)。
如果你想了解为什么买一个没人用的域名要花钱，花的钱到谁手里了，可以参考 [根域名的知识](https://www.ruanyifeng.com/blog/2018/05/root-domain.html)。
如果你想了解有哪些顶级域名的话，可以参考 [全部顶级域名列表](http://www.iana.org/domains/root/db)，当然很多域名是不开放注册的。
通常心仪的域名 99%已经被抢了，也没办法，都 2020 年了，域名要是实在选不出来，暂时不买也不影响建站，静态的用 xxx.github.io 就好，不是静态的就直接用 IP。

反正我最后是搞了个 `cf1.me`，比较短也很便宜，没什么特别的意思，就是云狐的英文 cloudfox 的首字母加个 1，当然有数字确实不是很好看，不说了，我 GithubID 更难看（早知道早点注册 Github 了）。
写本文的时候才发现 dynadot 最近搞 [活动](https://www.dynadot.com/resumeboost?utm_source=Search%20Domain%20Text&utm_medium=Resume%20Boost%20Even%20Flow&utm_campaign=Resume%20Boost%202020&drefid=148)，8 个顶级域名免费 1 年，又去白嫖了一个。  
国内基本没有 dynadot 的资料（当然官方文档也挺全的，又有中文，应该没什么障碍），所以放下我的 DNS 配置，可以参考下，我配了一个 www 子域名跳转主域名的，好像还可以弄个邮箱跳转的，没研究出来。
![DNS配置](https://cf0.oss-cn-shanghai.aliyuncs.com/img/20200502003941.png)
免费 SSL 也可以开下，开了就能用 HTTPS 了，GitHub 那边也要设置下。

## 建站

具体过程我就不多写了，我是参考 [教你如何从零开始搭建一个属于自己的网站](https://www.yunyoujun.cn/share/how-to-build-your-site/) 的反正，老老实实按着步骤来就好了，我不老实的所有操作都被证明是傻叉操作。  
本人搭建平台是 Win10，当然 Mac 也没什么太大区别。  
装 Node 的时候有一个选项让你装 Chocolatey（默认没有勾选），我以为可能有什么用就装了，其实并没有什么卵用。  
然后后面 git 让我建一个 hexo 分支，我心说为什么要两个分支，直接 master 不就好了，就没有建 hexo 分支，然后建完了我才意识到 master 分支相当于是网站内容，hexo 分支就是你编辑用的，相当于你的后台，我全混在 master 分支就很不合适，搞得我又删了本地和远程仓库重新搞了一遍，当然也没花多久就是了。  

写新文章的话就 `hexo new "标题"`（其实就是新建个 MD 模板文件），然后在 `source/_post` 里写 MD 文件，文件名用中文也可以，只不过网址复制出来不太好看，而且好像不利 SEO。
文章写完之后就是部署跟推送源码。

### 部署

部署就是更新你的网站，`hexo g -d` 就好了，有什么问题就先 `hexo clean`，部署也会更新你的 master 分支。  
然后最好配置一下 GitHub 的 SSH Key，否则每次部署都要输入账号密码，具体可以参考 [GitHub 帮助](https://help.github.com/cn/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)，配完了可以测试下。

```a
ssh -T git@github.com
```

如果出现

```a
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

输入 yes 就好了。
配置好之后还要修改 `_config.yml` 里的 repo 地址。

```a
deploy:
type: git
repo: https://github.com/xxx/xxx.github.io
```

改为

```a
deploy:
type: git
repo: git@github.com:xxx/xxx.github.io.git
```

### 推送源码

推送源码可以方便异地协作，也可以当做备份，也并不是必要步骤，如果你只用一台电脑，你不推送也不影响你的网站和后续运营。git 我很熟了所以也很轻松，如果对 git 不熟的话最好是装个 git 图形界面客户端，我是用的 [Fork](https://git-fork.com/)，Win 和 Mac 都有，图形界面也能直观地帮你理解 git，当然你得清楚有些不常用的 git 操作在图形界面是没有的。

## 结语

就这篇玩意就拖了我好几天，很怀疑自己的博客更新进度，而且连主题都还没配，想着写完这篇再配，要不然主题都看不到啥东西。
顺便还复习了下 MD 语法，从来没正式写过 MD，然后还配了下阿里云图床什么的。
