# 第三方支持

所有配置默认在 `source/_data/yun.yml` 文件下进行。

与额外依赖库支持的区别，此处主要为使用第三方服务商提供的服务实现。

## 评论

- `enable`: 默认开启
- `tips`: 评论上方的提示，您可以使用数组的形式修改为任意的话

```yml
comment:
  enable: true
  tips:
    - 若您无 GitHub 账号，可直接在下方匿名评论。
    - 若您想及时得到回复提醒，建议跳转 GitHub Issues 评论。
    - 若没有本文 Issue，您可以使用 Comment 模版新建。
```

### GitHub Issue 与 Gitalk

最终我还是决定移除 [Gitalk](https://github.com/gitalk/gitalk)。

首先肯定与感谢作者的开源精神与贡献，此前我一直开启 `Gitalk` 作为默认评论。（从弃坑的 Gitment 转来。）
只是后来因为 GitHub API 的安全策略改变，每次进入文章都会调用 Gitalk 而收到了一大堆的安全警告邮件。
于是我临时将其关闭，当然现在已经修复。但也因此觉得，Gitalk 对于我的小站点来说未必有开启的必要。（~~没什么人是一个要素~~）

首先，Gitalk 提供的功能其实只要多个链接跳转到 GitHub Issue 页面即可，而且相对来说直接在 GitHub Issue 页面使用。拥有更好的显示和编辑体验。
其次。我希望我的主题能够成为一个轻量迅速的主题，Gitalk 需要加载额外的 JS 与 CSS，一定程度会影响网页加载速度，并且本身也会有 API 请求数量限制。
至于直接在文章末尾显示评论，我打算使用 Valine 进行补充，期望便捷的朋友，自身也可能更希望使用 Valine 无需登陆的评论。
而想要收到回复提醒、及不介意使用自己 GitHub 账号参与讨论，自然也不会过于介意多跳转一个页面。

- 因为 Gitalk 自身定位问题，本身就可能存在些许安全隐患，以及开发不是十分活跃，也堆积了不少 ISSUE。
- Gitalk 通过 label 来搜索，Issues 里自动创建来一堆 label，本强迫症有点难受。
- 当自己访问不存在的链接时，也会自动初始化一些无用的 Issue。
- 用户需要先授权第三方 OAuth。

综上，本主题移除 Gitalk 评论。
并内置实现跳转相关 Issue 的链接按钮与如何使用 GitHub Issue 进行评论的说明。
可自行配置开启或关闭。

- `filters`: 为 GitHub Issue 搜索规则，可参见 [searching-issues-and-pull-requests](https://help.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests)。

```yml
github_issues:
  enable: true
  username: YunYouJun
  repository: yunyoujun.github.io
  filters: is:issue
```

在项目 `Settings -> Options -> Features -> Issues -> Set up templates` 中为 GitHub Issues 设置 Comment 模版，第一个创建评论的人可以根据这个模版创建 Issue。

也可以参考我的 [comment.md](https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/ISSUE_TEMPLATE/comment.md)。

> 如果您实在觉得 Gitalk 有必要使用，可以在 Issue 里提出有力的理由来说服我或自行添加。

### Valine

参见 [Valine](https://valine.js.org) 官方文档进行配置。语言默认跟随 Hexo 的语言设置。

即 Hexo 根目录下的 `_config.yml`。（注意与主题的 `_config.yml` 相区分）

```yml
language: zh-CN
```

实际上，你只需要参考下方页面获取配置所需的 appId 和 appKey 即可。（不需要安装，主题默认使用 CDN。模版也已经内置。）

> [快速开始 - 获取 APP ID 和 APP Key](https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key)

- `visitor`: 文章阅读量统计（请最好不要与 [不蒜子](#busuanzi) 同时启用）
- `visitor_index`: 是否开启站点主页访问量统计（主题额外添加的配置项，默认关闭）

> [更多配置项](https://valine.js.org/configuration.html)

```yml
valine:
  enable: false
  appId: # your leancloud application appid
  appKey: # your leancloud application appkey
  placeholder: Just go go # comment box placeholder
  avatar: # gravatar style
  meta:
    - nick
    - mail
    - link
  pageSize: 10 # pagination size
  # lang: zh-CN
  # visitor: false
  visitor_index: false
  # highlight: true
  # recordIP: false
  # serverURLs:
  # Emoji See: https://valine.js.org/emoji.html
  # emojiCDN: //i0.hdslb.com/bfs/emote/
  # emojiMaps:
  #   tv_doge: 6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png
  #   more...
  # enableQQ: false
  # requiredFields:
  #   - nick
  #   - mail
```

Valine 的扩展和增强功能可以参考 [Valine-Admin](https://github.com/DesertsP/Valine-Admin)，可以对具体的评论进行邮件提醒。

> pjax: [请问如何在带有 pjax 的页面下使用 - Issue #138](https://github.com/xCss/Valine/issues/138)

### MiniValine

A simple and minimalist comment system based on Leancloud.

- GitHub: [MiniValine](https://github.com/MiniValine/MiniValine)
- Demo: <https://minivaline.github.io/>

```yml
minivaline:
  enable: false
  appId: # Your leancloud application appid
  appKey: # Your leancloud application appkey
  placeholder: Write a Comment # Comment box placeholder
  adminEmailMd5: # The MD5 of Admin Email to show Admin Flag.
  math: true # Support MathJax.
  md: true # Support Markdown.
  # MiniValine's display language depends on user's browser or system environment
  # If you want everyone visiting your site to see a uniform language, you can set a force language value
  # Available values: en  | zh-CN | (and many more)
  # More i18n info: https://github.com/MiniValine/minivaline-i18n
  lang:
```

<!-- ## 分享

### AddThis

AddThis 提供多种社交分享挂件，请先前往 [AddThis](https://www.addthis.com/) 获取您的 ID。

```yml
add_this_id:
``` -->

## 搜索

### 引擎搜索

跳转搜索引擎搜索你的网站内容

可通过 `site:yunyoujun.cn 想要搜索的内容` 进行搜索

🌰：<https://www.google.com/search?q=site:yunyoujun.cn%20云游君>

- `enable`: 开启搜索引擎（因为另外两种搜索都需要额外配置，所以默认开启引擎搜索）科学上网，谷歌最佳
- `href`: 搜索引擎前缀
- `domain`: 你网站的域名

```yml
engine_search:
  enable: true
  href: "https://www.google.com/search?q=site:"
  # href: "https://www.baidu.com/s?wd=site:"
  # href: "https://www.bing.com/search?q=site:"
  domain: yunyoujun.cn
```

### 本地搜索

您需要先安装 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)，并参考配置文档。

本主题使用原生 JavaScript 实现，无 jQuery 依赖。

> 格式只支持 XML

::: tip
启用它之前，记得先关闭默认的引擎搜索。

```yml
engine_search:
  enable: false
```

:::

```yml
# search
# https://github.com/wzpan/hexo-generator-search
local_search:
  enable: true
  src: /js/search/local-search.js
```

> 如果你发现本地正常，部署后点击搜索按钮却会跳转至页面底部，可能单纯只是缓存问题。

### Algolia

[Algolia](https://www.algolia.com/) 是一家第三方搜索服务商。（更多信息请自行查看官网，或拜托搜索引擎。）

您需要先安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)，并根据它们的说明文档进行相应的配置。

再开启它。

```yml
algolia_search:
  enable: true
  src: /js/search/algolia-search.js
  hits:
    per_page: 10 # the number of search results per page
```

## 分析统计

### 谷歌分析

前往[谷歌分析](https://analytics.google.com/) 获取您的 ID。（科学上网）

- `enable`: 是否开启

```yml
google_analytics:
  enable: true
  id: UA-XXXXXXXXX-X
```

### busuanzi

不蒜子是一款轻量极简的网站计数器。

前往[不蒜子](https://busuanzi.ibruce.info/) 查看相关信息。

使用说明：<https://ibruce.info/2015/04/04/busuanzi>

> 请最后不要与 [Valine](#valine) 的 `visitor` 同时启用。

- `site_uv`: 是否显示站点用户访问量 Unique Visitor（\_icon 为对应图标，以下同理）
- `site_pv`: 是否显示站点页面访问量 Page View
- `page_pv`: 是否显示文章页面访问量 Page View

```yml
busuanzi:
  enable: false
  site_uv: true
  site_uv_icon: icon-user-line
  site_pv: true
  site_pv_icon: icon-eye-line
  page_pv: true
  page_pv_icon: icon-eye-line
```

## 广告

### 谷歌广告

前往[Google Adsense](https://www.google.com/adsense) 获取您的 client id。

```yml
google_adsense:
  enable: false
  client: ca-pub-2245427233262012
```

## SEO

### [Google Search Console](https://search.google.com/search-console/)

本主题并没有像 next 等其他主题为验证站点添加了配置选项。

原因如下：

谷歌为用户提供了五种验证方法。

- **域名提供商**：添加 DNS 的 TXT 解析。（这个可能算是最麻烦（其实也不麻烦），但也是对站点本身影响最小的一个。）也是我此前使用的方式。
- **文件验证**：将 HTML 文件上传至您的网站。（您只需下载并将其拷贝至 Hexo 工作目录的 `source` 文件夹下。并设置 `skip_render`，见下文。）也是推荐的方式之一。
- **HTML 标记**：向您网站的首页添加元标记。这也是大部分主题通过配置实现站点验证的方法，但我并不推荐这种做法，所以并没有将其内置。
  - 我之所以没有添加这种方式，是因为这个 meta 部分信息，只对验证 google 站点有用，对于用户来说完全是多余的。
  - 而 Hexo 是静态站点生成器，通过这一方法来验证，就意味着整个站点所有静态文件头部都会带上这一信息。
  - 譬如一百多篇文章加分页加标签页等等，就相当于凭空增加了上百行代码，尽管它的影响微乎其微，但这不管对用户还是站长来说都完全没有必要。
- **Google Analytics（分析）**：如果你已申请并使用了谷歌分析，你只需点击一个验证按钮即可。（**最佳方式**）
- **Google Tag Manager**：使用您的 Google 跟踪代码管理器帐号

如果您未使用谷歌分析，相比之下，直接使用 `域名提供商` 或者 `文件验证` 的方式或许更好，它不需要对主题进行侵入式修改，也不会过于增加生成后的静态文件大小。

::: tip

注意，Google 现在提供的文件为 `html` 文件，直接放在 `source` 文件夹下，会被 Hexo 编译。
因此你还需要找到站点配置文件 `_config.yml` 中的 `skip_render` 选型，并为其添加跳过渲染的文件。

示例：

```yml
skip_render:
  - README.md
  - googlexxxxxxxxxxxxxxx.html
```

:::

### [百度搜索资源平台](https://ziyuan.baidu.com/)

理由如上，更推荐使用 DNS 或文件验证方式。

#### 自动推送

将其设置为 `true`，以开启百度自动推送。

> 即每次页面被访问时，将自动向百度提交该页面链接。（有利于百度的 SEO）

```yml
baidu_push: true
```

> 注意：当国外用户访问时，百度推送可能无法正常工作会导致 `http` 与 `https` 混合，从而致使 `https` 在浏览器中的小锁消失。
