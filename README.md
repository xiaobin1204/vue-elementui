## vue + elementUI 构建项目小例子

1. node 环境安装

  ```shell
  # 安装nvm 成功后如果没有nvm命令重启终端就可以了
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash

  # 替换nvm默认源地址
  export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
  source ~/.nvm/nvm.sh

  # 查看可以使用的版本
  nvm ls-remote

  # 安装node
  nvm install v8.5.0

  # 配置npm淘宝源
  # linux
  vim ~/.npmrc   //打开配置文件
  registry =https://registry.npm.taobao.org
  # windows
  # 在当前用户的家目录下创建一个.npmrc文件 里面的内容一样

  # 至此node环境配置ok
  ```

2. 安装 [vue-cli](https://vuefe.cn/v2/guide/installation.html)

  ```shell
  npm install --global vue-cli
  ```

3. 使用 "webpack" 模板创建一个新项目

  ```shell
  vue init webpack my-project
  # 根据需求安装需要 此例初始化如下
  # ? Project name my-project
  # ? Project description A Vue.js project
  # ? Author wangbin <wblucky@126.com>
  # ? Vue build standalone
  # ? Install vue-router? Yes
  # ? Use ESLint to lint your code? Yes
  # ? Pick an ESLint preset Standard
  # ? Setup unit tests with Karma + Mocha? No
  # ? Setup e2e tests with Nightwatch? No
  cd my-project
  npm install
  npm run dev
  ```

  [点击查看代码](https://github.com/xiaobin1204/vue-elementui/tree/v1.0)

4. 安装[elementui](https://github.com/ElemeFE/element)

  ```bash
  npm i element-ui -S
  ```

  在入口文件 `main.js` 里引入elementUI 添加如下代码
  ```javascript
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(ElementUI)
  ```

  在 `src/App.vue` 添加elementUI的按钮组件
  ```javascript
  <el-button type="primary">主要按钮</el-button>
  ```

  此时页面上面就应该多一个按钮

  [点击查看代码](https://github.com/xiaobin1204/vue-elementui/tree/v1.1)

5. 路由[vue-router](https://router.vuejs.org/zh-cn/) 和 组件

  在 `src` 目录下创建 `pages` 目录用来存放所有的页面(组件) `HomePage.vue`  `List1Page.vue`  `List2Page.vue`  `LoginPage.vue`  `NotFound.vue`

  ```javascript
  <template lang="html">
  <div>
    <h1>
      this is home.
      // this is list1.
      // this is list2.
      // this is login.
      // 404.
    </h1>
  </div>
  </template>
  <script>
  </script>
  <style lang="css" scoped>
  </style>
  ```

  在 `components` 目录下新建几个组件 `Pagination.vue`  `Table.vue`  `Top.vue`

  `Pagination` 和 `Table` 组件暂时不用, `Top` 组件代码如下

  ```javascript
    <template lang="html">
    <div class="header">
      <el-menu :router="true" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="list1">List1</el-menu-item>
        <el-menu-item index="list2">List2</el-menu-item>
      </el-menu>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        activeIndex: '/'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        if (key === 'home') {
        } else if (key === 'list1') {
        } else if (key === 'list2') {
        }
      }
    }
  }
  </script>
  <style lang="css" scoped>
  </style>
  ```

  `App.vue` 修改如下

  ```javascript
    <template>
    <div id="app">
      <top></top>
      <router-view></router-view>
    </div>
  </template>

  <script>
  import Top from './components/Top'
  export default {
    name: 'app',
    components: {
      Top
    }
  }
  </script>

  <style>
  </style>
  ```

  `router/index.js` 修改如下

  ```javascript
  import Vue from 'vue'
  import Router from 'vue-router'
  import Home from '@/pages/HomePage'
  import Login from '@/pages/LoginPage'
  import List1 from '@/pages/List1Page'
  import List2 from '@/pages/List2Page'
  import NotFound from '@/pages/NotFound'

  Vue.use(Router)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list1',
      name: 'list1',
      component: List1
    },
    {
      path: '/list2',
      name: 'list2',
      component: List2
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]

  export default new Router({
    mode: 'history', // 路由模式
    linkActiveClass: 'active',  //active classname
    routes
  })
  ```

  [点击查看代码](https://github.com/xiaobin1204/vue-elementui/tree/v1.2)

6. 用 [vuex](https://vuex.vuejs.org/zh-cn/) 管理数据

  安装vuex

  ```shell
  npm install vuex --save
  # axios用于请求远程数据
  npm install axios --save
  ```

  创建 `store.js` 和 用来存放store文件的目录 `store` , store.js代码如下 创建一个 userStore

  ```javascript
   import Vue from 'vue'
   import Vuex from 'vuex'

   import userStore from './store/userStore'

   Vue.use(Vuex)
   const debug = process.env.NODE_ENV === 'production'

   export default new Vuex.Store({
     modules: {
       userStore
     },
     strict: debug
   })
  ```

  在 `main.js` 引入 `store.js` 并注入到vue

  ```javascript
  import store from './store'

  new Vue({
    ...
    store
    ...
  })
  ...
  ```

  另外还修改了Top组件和LoginPage, 还增加了一个配置文件 `config.js` 来存放全局的一些配置文件.

  给main添加一个全局路由中间件用来验证用户是否登录, 如果没有登录路由到登录界面

  在LoginPage里我们用到了两个接口 [这里](https://github.com/xiaobin1204/api-test) 是API服务的代码, 这是一个简单的API,真实项目的API要比这复杂的多.

  通过用户名和密码获取token 再通过token 再获取其他需要的信息, 当然这里并没有真正分发token.

  当获取到用户的信息后, 这里用浏览器存储了用户信息并更新了userstore状态

  Top组件用了elementUI的 [NavMenu 导航菜单](http://element.eleme.io/#/zh-CN/component/menu) 当切换导航时可以做一些事情.

  LoginPage用了elementUI的 [Form 表单](http://element.eleme.io/#/zh-CN/component/form)

  接口请求用了[axios](https://github.com/mzabriskie/axios)

  [查看项目代码](https://github.com/xiaobin1204/vue-elementui/tree/v1.3.1)

7. 根据状态不同获取不同的数据

  [查看这一部分的代码](https://github.com/xiaobin1204/vue-elementui/tree/v1.3.2)

  创建`listStore` 并创建一些 actions

  `Pagination` 组件用了elementUI的 [Pagination 分页](http://element.eleme.io/#/zh-CN/component/pagination)

  分页组件主要作用是点击分页获取新的数据, 这里也就是 `handleCurrentChange` 方法.

  `Table` 组件 主要是一个 elementUI的 [Table 表格](http://element.eleme.io/#/zh-CN/component/table) 组件 来展示列表. 这里还用了 [MessageBox 弹框](http://element.eleme.io/#/zh-CN/component/message-box) 组件 另外表单会根据listStore的状态来显式或隐藏年龄列

  修改 `Top` 组件 在点击导航时修改 listStore 的状态

  在 `List1Page` 和 `List2Page` 根据状态获取不同的列表

  `listStore` 里的 setdatas actions 是全局获取列表数据的方法

  还有其他修改 [查看这一部分的代码](https://github.com/xiaobin1204/vue-elementui/tree/v1.3.2)

8. 夸组件事件调用

  真实项目中很可能会夸组件调用一些数据这里给了一种解决办法.

  在src目录下创建一个bus.js来实例化一个单独的vue通过它来监控事件

  这里在List1Page调用了Table组件里的 `clearSelection` 方法

  在Table组件里注入bus, 在mounted组件的时候监听 `clearSelection` 方法用来删除选中项目

  **注意‼️** 一定要及时销毁事件监听否则会造成事件重复执行

  [查看代码](https://github.com/xiaobin1204/vue-elementui/tree/v1.4.1)

9. 打包项目

  ```shell
  npm run build
  ```
  上面这个命令会生成一个dist目录里面的代码就是打包后的代码

  另外 下面这个命令可以告诉你你的项目那些地方可以再优化一下

  ```shell
  npm run build --report
  ```

10. Vue 除了 elementUI 还有很多其他的组件库

  比如

  [Mint UI](http://mint-ui.github.io/#!/zh-cn) 基于 Vue.js 的移动端组件库

  [YDUI Touch](http://vue.ydui.org/) 一只基于Vue2.x的移动端&微信UI

  [iView](https://www.iviewui.com/) 一套基于 Vue.js 的高质量 UI 组件库

  等等都可以帮你快速创建应用





> A Vue.js project

[项目介绍](https://note.bbcoding.com/node/vue-elementui.html)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).






> A Vue.js project

[项目介绍](https://note.bbcoding.com/node/vue-elementui.html)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
