# MyQuickstartOptions

#### 和官方`ng new my-repo`创建的不一样的地方:
* 去掉了`ng g c myComponent`时组件选择器的前缀app
* 内置一个top-nav组件可以用来放置整体结构
* 内置两个路由，其中一个属于异步路由。
#### 使用:
1. clone到本地

      $ git clone https://github.com/865077695/my-quickstart-options.git

2. 安装依赖(可以先改成你自己想要的名字在cd)

      cd my-quickstart-options
      $ npm install

3. 开始开发:

      ng serve -o
...........................................................
下面记录一些坑吧
1. 为什么ng-zorro在组件中使用不起作用？

在每个使用ng-zorro的组件里都需要`import { NgZorroAntdModule } from 'ng-zorro-antd';`并且在@NgModule>imports里加上NgZorroAntdModule