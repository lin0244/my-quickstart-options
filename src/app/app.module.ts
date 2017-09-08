import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { HttpService } from './service/http.service';
import { TestHttpHeaderComponent } from './test-http-header/test-http-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestHttpHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
