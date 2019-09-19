var ready_code = `
/*
 * 嗨，我是单思欣。
 * 我想用代码给你展示一下我的个人简历～
 * 灵感来自：http://strml.net
 * 
 * 那么，我要开始啦...
 */
/* 添加一个过渡，使变化看起来更柔和 */
*{
    transition: all .3s;
}
/* 加个背景色*/
.wrapper{
   background-color: #455A64;
   padding: 16px;
    box-sizing: border-box;
    display: flex;
}
/* 给代码加个边框 */
#resume_code{
    width: 100%;
    height: 100%;
    background-color: #455A64;
 }
 .code_con{
    border: 1px solid #CFD8DC;
    background-color: #CFD8DC;
    box-sizing: border-box;
    padding: 16px;
 }
 /* 现在开始写简历了 */
 /* 让代码腾出一些位置给我的简历 */
 #resume_code{
    width: 32%;
}
/* 准备一个白板 */
#resume{
    margin-left: 30px;
    flex: 1;
    background-color: #fdfdfd;
    overflow: auto;
    white-space: pre-wrap;
}
/* 接下来，请看右边*/
`

var resume = `# 单思欣
156xxxxxxxx | dorisssx@163.com | 广州
Profile: https://caijialinxx.github.io/resume/
Github: https://github.com/Caijialinxx
14届毕业生 | 前端开发工程师

## 专业技能
- 熟悉html和Html5，理解语义化,灵活使用常见标签；
- 熟悉css和css3新增属性，能够使用 less，sass，熟悉float、position、flex 布局，掌握选择器权重问题；
- 掌握 JavaScript 基础， ES6 语法，掌握js运行机制；
- 熟悉使用vue+vue-router+vuex进行开发，了解模块化、组件化；
- 了解TCP协议及HTTP协议、状态码；
- 掌握各种跨域方法，如：jsonP,postMessage,cors等；
- 能够使用jQuery, 可以用jQuery封装插件；
- 能够使用webpack、gulp自动化工具进行项目构建、文件打包；
- 能够使用git进行代码管理;
- 熟悉小程序开发;
- 了解并能够使用bootstrap、Element-UI。

## 项目经验
### 学生管理系统前端开发
- 使用技术：\`vue + vuex\` + \`vue-router\` + \`axios\` + \`ECharts\` + \`sass\`
- 项目描述：实现学生列表展示页（搜索组件、信息展示组件、翻页组件、信息编辑组件）、添加学生 页、登录页面、注册页面，封装消息提示功能、翻页功能。
- 项目分析：项目分为2大主页面（作为依赖组件）：登录前（包含2个页面级组件：登录页面、注册页 面），登录后（包含3个页面级组件：学生列表展示页、添加学生页、学生数据比例图页）。 5大页面级组件通过vue-router进行页面跳转。通过vuex进行组件间数据传输，信息展示组 件根据搜索功能搜索关键字及翻页组件选定页码展示该页信息，编辑弹框组件根据信息展 示组件展示的信息中被选中的该项信息进行回填。通过axios向后台发送请求获取相关数据 渲染页面（按页展示学生信息，添加学生信息，删除学生信息，修改学生信息，按关键字 搜索学生信息等）。对学生列表信息编辑框及添加学生编辑框等结构相同模块进行组件复 用，并通过父组件向子组件传递数据，从而渲染页面。

### 仿美团外卖前端开发
- 使用技术：\`vue + vuex\` + \`vue-router\` + \`axios\` + \`sass\` + \`webpack\` + \`element-ui\`
- 项目描述：模仿美团外卖，实现美团外卖首页、切换城市页、商品详情页，运用组件化开发方式，将项目拆分为多个组件，从而实现复用。利用vuex，实现不同组件的数据传输，利用vue-router进行页面跳转。
- 收    获：掌握了vue开发流程，充分体会了数据渲染页面的思想，以及组件化开发方式。掌握vuex实现数据共享，掌握由vue-router来控制页面的跳转

### 音乐播放器
- 使用技术：\`zepto.js\` + \`gulp\` + \`audio\`
- 项目描述：实现音频播放暂停，切换歌曲（前后按钮切歌，列表切歌），专辑图片旋转，进度条运动及拖动控制播放进度。
- 收    获：通过本地的模拟数据，运用ajax获取数据，通过数据渲染页面的结构和播放的曲目、时间等，运用了模块化思想将每个功能单独抽离成一个模块。

### 简历生成器
- 使用技术：\`jQuery\` + \`Promise\`
- 项目描述：实现简历动态制作过程，利用Promise处理异步操作。
`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#resume {
  white-space: unset;
  padding: 0 30px;
  font-size: 14px;
}
a{
    color: #455A64;
}
ul{
    margin-left: 20px;
}

/* 让每个模块上下间隔明显一点 */
#resume > div{
    margin: 28px 0;
}

/* 接下来是精细的调整 */
/* 首先，调整我的“基础信息”板块 */
#information{
    text-align: center;
}
#information > h1{
    font-size: 22px;
    margin-bottom: 10px;
}
#information > p{
    white-space: pre-wrap;
    line-height: 24px;
}

/* 然后是详细介绍模块 */
#resume h2{
    font-size: 16px;
    margin-bottom: 6px;
    padding-bottom: 6px;
    border-bottom: 1px solid #000;
}
#resume h3{
    display: inline-block;
    font-size: 14px;
    margin: 10px 0 6px;
}
.experience,
#education{
    position: relative;
}
#jobs p,
#education > p{
    position: absolute;
    right: 0;
    top: 10px;
}
#education > p{
    top: 42px;
}
#resume li,
#resume p{
    line-height: 24px;
}

/* 接下来添加个头像吧！ */
`
let code_photo = `
/* 把我的头像放在个人信息里 */
#information{
    position: relative;
}
.avatar{
    display: inline-block;
    width: 90px;
    top: 0;
    right: 0;
}

/* 
 * 好啦，我的头像出来啦~
 * 期待这张面孔出现在您的面试中
 * 
 *   —— 蔡嘉琳 2019/01 *^_^*
 */
`










