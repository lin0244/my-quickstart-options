import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { contentRoutes } from './content.routes';
import { ContentComponent } from './content.component';
import { LampStatusComponent } from './lamp-status/lamp-status.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes)
  ],
  declarations: [ContentComponent, LampStatusComponent]
})
export class ContentModule { }
