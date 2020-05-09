---
title: 折腾主题
date: 2020-05-04 21:58:41
categories: 网站
tags: 博客
---

## 建站

站是建完了，主题就想着先整一个 [云游君](https://www.yunyoujun.cn)的 [Yun](https://github.com/YunYouJun/hexo-theme-yun) 的，结果搞了两天还没配好，我以为一天就差不多了，当然也是我要求比较高。
弄的时候又逛了一堆博客，以前不太逛这些个人博客的，除了 Matrix67、王垠、阮一峰等大佬可能看的比较多一点。
然后又找到好多好东西，比如 [Dism++](https://www.chuyu.me/zh-Hans)，Win10 一堆小毛病都给整舒服了；[Geek Uninstaller](https://geekuninstaller.com)，小东西；还有个不让宣传就不说了。

## 前端相关

前端每一项东西都有讲究，我又是完美主义，又看了好多资料折腾好久，以前也没了解过这方面。
[Slant](https://www.slant.co)：可以稍微缓解选择困难，不过也只能说仅供参考，但至少把选项列出来了是吧。
[Can I use](https://caniuse.com)：前端各种东西的兼容性情况。
[PageSpeed Insight](https://developers.google.com/speed/pagespeed/insights/?hl=zh-cn)：谷歌的网站性能分析。
[Lighthouse](https://developers.google.com/web/tools/lighthouse)：审查网站各项性能。
[多地测速](https://ping.chinaz.com)：国内外多点测速。

### 字体

[如何优雅地定义 font-family?](https://www.zhihu.com/question/37593717)
[跨平台中文字体解决方案](http://zenozeng.github.io/fonts.css)
[字体识别](http://www.qiuziti.com)

### 配色

[And Design](https://ant.design/docs/spec/colors-cn)：配好的色板和一个色板生成算法。
[Adobe Color](https://color.adobe.com/zh/create)：可以自选主色和色彩调和方式。
[ColorPK](https://react.colorpk.com)：配好的色板。
[Color Hunt](https://colorhunt.co/palettes/trendy)：配好的色板。

### 排版

[中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-CN.md)
[mdlint](https://marketplace.visualstudio.com/items?itemName=ZhixiangZhang.mdlint)：基于上面指北的 VSCode MarkDown 插件。
[Angular Commit 规范](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)：顺便了解了下。
[gitmoji](https://gitmoji.carloscuesta.me)：轻松一点的话可以用这个 commit。

### 图片

基本的图片处理我倒是没问题，不过听说 WebP 格式很小很快，又去折腾 WebP 格式，一开始找到个 PS 的 WebP 插件，看上去还行，但是用下来 100 有损都有肉眼可见失真，然后又找到智图，用下来感觉还行，图片品质直接用它默认给的基本没问题，还有个 picdiet。我的主背景用 picdiet 压的，其他的都是用智图的 WebP 压缩，Safari 不支持 WebP 就去死好了。
图床暂时用的阿里云 OSS，SM.MS 也可以用（免费但速度慢点），再配合 PicGo，目前 PicGo 传 SM.MS 还要装个 SMMS 插件（好像下个版本会直接支持），说实话有点离谱，一个单纯上传图片到图床的工具居然还有插件。
CDN 啥的还没折腾。

[智图](https://zhitu.isux.us)：在线压缩，支持各种格式，可以原格式压缩或 WebP 格式压缩，压缩效果良好。
[picdiet](https://www.picdiet.com/zh-cn)：纯 JS 在线压缩算法，只支持 JPG 和 JPEG 格式，压缩率接近 WebP，速度也很快，感觉对大图效果比较好，小图的失真比较明显。
[squoosh](https://squoosh.app)：在线压缩，光速，预览效果也最舒服，但压缩率好像比 picdiet 差一点。

Gravatar 头像接口，目前正常的几个 Gravatar 头像接口，后缀接邮箱的 MD5 小写。
https://sdn.geekzu.org/avatar/ 快
http://fdn.geekzu.org/avatar/ 快
https://dn-qiniu-avatar.qbox.me/avatar/ 快
https://gravatar.loli.net/avatar/ 中
https://cdn.v2ex.com/gravatar/ 慢
http://cn.gravatar.com/avatar/ 慢
http://gravatar.com/avatar/ 慢 官方接口

QQ 头像接口。
http://q1.qlogo.cn/g?b=qq&nk=[QQ号]&s=640

Gravatar + QQ 头像接口，快，[这里](https://www.alapi.net) 还有很多其他接口。
https://v1.alapi.cn/api/avatar?email=[邮箱或QQ号]&size=250

### 短链接

微博的 t.cn 基本是不能用了好像。

[Bitly](https://bit.ly)
[新浪短网址](https://www.sina.lt)

## 主题

Yun 这个主题还是有点稚嫩，对暗色背景支持不太好，我 Fork 下来改了好些地方，就当学习了，还从来没搞过 CSS 什么的。
当然总体还是个挺舒服的主题，小巧精致，也没有太花里胡哨。
