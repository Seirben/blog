(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{332:function(e,s,t){"use strict";t.r(s);var a=t(33),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vuepress搭建个人博客并部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建个人博客并部署"}},[e._v("#")]),e._v(" vuepress搭建个人博客并部署")]),e._v(" "),t("blockquote",[t("p",[e._v("想要快速搭建自己的个人博客,记录自己的工作学习心得,争取当一条有梦想的咸鱼")])]),e._v(" "),t("p",[e._v("相信大家都了解过vue这个框架.而今天,我们的主角"),t("code",[e._v("vuepress")]),e._v(" 就是vue的作者"),t("code",[e._v("尤大大")]),e._v("的一个作品.开源于大概2年前,其本意是用来为vue及其子项目写文档,现在被大部分人用来搭建个人博客.之前一直有所耳闻,vuepress可以搭建博客,但也只是有所耳闻罢了,这回趁着五一在家休息的时间,简单的学了下vuepress的用法.\n今天在这里,我会从头一步步的将我的代码展示给大家看,如何从0开始搭建一个个人博客,并且部署到线上.传统的部署需要我们去购买服务器,域名,还需要做域名解析,备案之类的事情,往往需要一段时间才能完成.因此今天我们将我们的博客项目部署到github上.对的,你没有看错,github不仅仅只是一个保存我们代码的网站,它还可以帮助我们展示一些静态页面.今天我们就用"),t("code",[e._v("github pages")]),e._v(" 来发布自己的静态博客.")]),e._v(" "),t("h2",{attrs:{id:"搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建"}},[e._v("#")]),e._v(" 搭建")]),e._v(" "),t("h3",{attrs:{id:"初始化创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化创建"}},[e._v("#")]),e._v(" 初始化创建")]),e._v(" "),t("p",[e._v("首先,我们在终端输入以下命令,来创建一个空文件夹并且进入到这个文件夹")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mkdir myblog && cd $_\n")])])]),t("p",[e._v("初始化我们的项目")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yarn init -y\n")])])]),t("p",[e._v("接着是安装我们的依赖vuepress")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yarn add -D vuepress\n")])])]),t("p",[e._v("安装好依赖以后,我们可以在终端键入")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mkdir docs\necho '# This is my blog' > docs/README.md\n")])])]),t("p",[e._v("那么就可以看到在项目中有个docs的文件夹了,并且里面有个README.md的文件.\n接下来我们来启动我们的项目,vuepress 提供了如下命令来启动和打包我们的项目")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vuepress dev docs\nvuepress build docs\n")])])]),t("p",[e._v("我们在 package.json 中来创建两个简单的命令来代替上面的指令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "scripts": {\n    "dev": "vuepress dev docs", //启动项目\n    "build": "vuepress build docs" // 编译项目\n  }\n}\n')])])]),t("p",[e._v("至此,我们就可以通过"),t("code",[e._v("yarn dev")]),e._v(" 来启动项目了,这时打开网址可以看到我们的项目已经运行成功了,页面如下:\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020050311021242.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70",alt:"初始化页面"}})]),e._v(" "),t("h3",{attrs:{id:"配置项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置项目"}},[e._v("#")]),e._v(" 配置项目")]),e._v(" "),t("p",[e._v("接下来就是来配置我们的项目结构了,如标题,导航之类的.vuepress有个"),t("code",[e._v('"约定大于配置"')]),e._v("的思想在里面,就是说很多东西,作者已经给我们都设置好了,我们只要按照作者提供的文档一步步将我们的东西填入其中,就可以完成我们想要的东西.\n我们在docs文件夹中新创建一个 "),t("code",[e._v(".vuepress")]),e._v(" 文件夹 ,并在其中新建一个"),t("code",[e._v("config.js")]),e._v(" 配置文件:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n    title: 'lhs的个人博客',  //标题\n    keywords: '前端开发',\n    description: '前端开发 lhs的个人博客',\n    repo: 'https://github.com/zeroonbush/blog.git',  //仓库地址\n    base: '/blog/',  // 配合部署项目\n    head: [\n        ['link', { rel: 'icon', href: '/favicon.ico' }]\n    ],\n    lastUpdated: 'Last Updated',\n    themeConfig: {  //主题配置\n        logo: '/img/logo.png',\n        nav: [  //导航栏\n            { text: '首页', link: '/' },\n            { text: 'JS', link: '/js_docs/' },\n            { text: 'CSS', link: '/css_docs/' },\n            { text: 'Vue', link: '/vue_docs/' },\n            { text: 'React', link: '/react_docs/' },\n            {\n                text: '2020',\n                ariLabel: '2020',\n                items: [  //多级导航栏\n                    { text: 'May', link: '/2020/5/' },\n                    { text: 'June', link: '/2020/6/' }\n                ]\n            },\n            { text: 'github', link: 'https://github.com/zeroonbush/blog.git' }\n        ],\n        sidebar: {  //侧边拦\n            '/2020/': [\n                ['/2020/5/', '5月份'],\n                ['/2020/6/', '6月份']\n            ]\n        }\n    }\n}\n")])])]),t("p",[e._v("在写了上面的配置之后,要记得在.vuepress文件夹中新建一个"),t("code",[e._v("public")]),e._v("文件夹,将我们的图片资源放入其中.我们在引用图片资源的时候,都是以其为根目录的.此时可以看到我们的项目已经变成下面的样子,已经有了顶部的导航栏.点击2020,可以看到还有下拉框,点击下拉框中的选项还能看到连侧边栏都已经有了.\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200503111454223.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),e._v(" "),t("h3",{attrs:{id:"配置首页结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置首页结构"}},[e._v("#")]),e._v(" 配置首页结构")]),e._v(" "),t("p",[e._v("不知道大家到这里有没有发现,这个界面和vue,vuepress的官网有点像.没错,他们就是用vuepress来写的,前面也提到了,vuepress设计之初就是为了写文档,QAQ.\n现在看主页的内容是不是太空白了点呢,我们来给他添加点东西吧.\n我们将刚开始创建的README.md文件内容改成如下:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("---\nhome: true\nheroImage: /img/banner.png\nheroText: lhs的日常记录\ntagline: 喜欢打王者,只会射手\nfeatures:\n- title: 是个160斤的胖子\n  details: 是个160多斤的胖子,想要减肥,哪天你看不到这段话了,那说明我已经瘦下来了\n---\n")])])]),t("p",[e._v("至此,基本的页面布局已经差不多了,\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200503121805215.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),e._v(" "),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[e._v("#")]),e._v(" 部署")]),e._v(" "),t("p",[e._v("在完成我们的个人博客后,我们下一步需要做的就是将我们的个人博客部署到线上去,让其他人能够访问到.")]),e._v(" "),t("h3",{attrs:{id:"github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[e._v("#")]),e._v(" Github Pages")]),e._v(" "),t("p",[e._v("今天,我们不用传统的购买服务器域名那一套,我们使用Github Pages 来部署.在github上展示静态网站有两个方法.")]),e._v(" "),t("h4",{attrs:{id:"创建-username-github-io-仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-username-github-io-仓库"}},[e._v("#")]),e._v(" 创建 username.github.io 仓库")]),e._v(" "),t("p",[e._v("第一个是创建一个 github用户名.github.io 的仓库,别人通过 yourUserName.github.io 就能访问到我们的项目.点击查看:"),t("a",{attrs:{href:"https://zeroonbush.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zeroonbush.github.io/"),t("OutboundLink")],1),e._v("\n.")]),e._v(" "),t("h4",{attrs:{id:"创建gh-pages-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建gh-pages-分支"}},[e._v("#")]),e._v(" 创建gh-pages 分支")]),e._v(" "),t("p",[e._v("第二个是创建一个项目,并且创建一个"),t("code",[e._v("gh-pages")]),e._v(" 的分支,我们将打包后的代码放到这个分支,别人就能通过  https://yourUserName.github.io/yourProjectName 来访问到我们的项目,点击查看:"),t("a",{attrs:{href:"https://zeroonbush.github.io/blog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zeroonbush.github.io/blog/"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"如何方便快速部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何方便快速部署"}},[e._v("#")]),e._v(" 如何方便快速部署?")]),e._v(" "),t("p",[e._v("为了方便部署,我们可以安装一个插件叫做 "),t("code",[e._v("gh-pages")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yarn add -D gh-pages\n")])])]),t("p",[e._v("然后修改package.json中的脚本命令,添加如下的两条,")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"deploy": "gh-pages -d docs/.vuepress/dist",\n"commit": "yarn build && yarn deploy"\n')])])]),t("p",[e._v("然后运行"),t("code",[e._v("yarn commit")]),e._v("命令,如果出现下面的报错,则是因为你的项目还没有关联仓库地址,只要关联下问题就解决了.至于如何关联,其实我们在github创建空项目的时候,github会告诉我们该如何做.这个比较简单,这里就不做过多阐述了.\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020050312364494.png",alt:"在这里插入图片描述"}}),e._v("\n关联成功以后,我们再次执行下命令,如果出现如下的提示,那就证明我们已经成功了.\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200503124658542.png",alt:"在这里插入图片描述"}}),e._v("\n然后我们访问我们的项目,可以看到我们的个人博客已经展示出来了,如果出现"),t("code",[e._v("css")]),e._v("或"),t("code",[e._v("js")]),e._v("加载不到的情况,则注意配置中的"),t("code",[e._v("base")]),e._v(" 属性,这里面需要填写我们的项目名.")]),e._v(" "),t("p",[e._v("至此,我们已经使用了"),t("code",[e._v("vuepress")]),e._v("搭建了一个个人博客,并且使用了"),t("code",[e._v("Github Pages")]),e._v("来部署我们的博客,今天的任务基本算是大功告成了.好了.到了该放松的时刻,选出我们的"),t("code",[e._v("小鲁班")]),e._v(",去找凯爹突突突吧!")]),e._v(" "),t("blockquote",[t("p",[e._v("项目地址: "),t("a",{attrs:{href:"https://github.com/zeroonbush/blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/zeroonbush/blog"),t("OutboundLink")],1),e._v("\n可直接下载源代码运行以查看效果")])])])}),[],!1,null,null,null);s.default=r.exports}}]);