import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist.component';       // 引入home组件（包括逻辑/页面）
import { userlistRoutes } from './userlist.routes';             // 引入路由配置

@NgModule({
    declarations: [
      UserlistComponent
    ],
    imports: [
        RouterModule.forChild(userlistRoutes)
    ],
    providers: [],
    bootstrap: []
})
// 将路由配置暴露出去
export class UserlistModule { }
