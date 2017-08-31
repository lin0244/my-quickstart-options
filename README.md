### 介绍
 quickstart项目目的是快速生成一个用于后台开发的基础模板。包含登录注册路由和content内容路由。在content路由内又加入了二级路由，用来显示不同的内容。这些二级路由拥有相同的顶部和左侧菜单。所以这些部分抽出来写在content.component组件内。
### 使用
1. clone到本地

        git clone git@github.com:865077695/my-quickstart-options.git
2. 安装依赖(有点bug，向下见tips2)

        npm install

3. 此时`ng serve -o`报错的话，是因为angular-cli最新版本使用NgZorroAnt有点bug(详见tips2)。执行以下命令消除这个bug:

        npm install @angular/cdk@2.0.0-beta.8
4. ok. `ng serve -o`运行
5. 
localhost:4200/user/login---------登录页
localhost:4200/user/logup---------注册页
localhost:4200/lamp-status--------内容部分的其中一个路由

### 与`ng new project`不同的地方。
**以下修改均是基于`ng new project`**
1. 引入[ng-zorro](https://ng-zorro.github.io/#/docs/angular/introduce)依赖、按照需要修改了app.module.ts（在app.module.ts中引入了ng-Zorro）
2. 修改`.angular-cli.json`内创建模块时的`prefix`(模块名前缀)为`my`。创建模块时会自动加前缀`my`来表示是使用者创建的，而不是从其他第三方引入的。




### tips:

1. 使用ng-zorro需要注意：在根 module 中需要import `NgZorroAntdModule.forRoot()`，在子 module 需要import `NgZorroAntdModule`.
2. 在`ng serve`报错是因为ng最新版本暂不支持。将`@angular/cdk`切换回beta8.如下：[issues in NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd/issues/191)

        npm install @angular/cdk@2.0.0-beta.8
3. ngd有bug。暂未使用
