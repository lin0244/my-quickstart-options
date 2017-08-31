import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { TestSubComponent } from './test-sub/test-sub.component';
import { TestHttpComponent } from './test-http/test-http.component';

import { HttpService } from './service/http.service';
import { TestSubjectComponent } from './test-subject/test-subject.component';
@NgModule({
  declarations: [
    AppComponent,
    TestSubComponent,
    TestHttpComponent,
    TestSubjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
