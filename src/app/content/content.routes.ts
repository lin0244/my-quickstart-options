import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { LampStatusComponent } from './lamp-status/lamp-status.component';

export const contentRoutes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', redirectTo: 'lamp-status' },
      { path: 'lamp-status', component: LampStatusComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'content/lamp-status'
  }
];
