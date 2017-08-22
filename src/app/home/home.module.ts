import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';       // 引入home组件（包括逻辑/页面）
import { homeRoutes } from './home.routes';             // 引入路由配置

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    providers: [],
    bootstrap: []
})
// 将路由配置暴露出去
export class HomeModule { }
