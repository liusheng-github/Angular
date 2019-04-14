import { Routes } from '@angular/router';

import { WidgetsComponent } from './widgets.component';

export const WidgetsRoutes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
    data: {
      heading: 'Widgets'
    }
  }
];
