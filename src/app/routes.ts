import { Routes } from '@angular/router';

import { BookExistsGuard } from './guards/book-exists';
import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { CollectionPageComponent } from './containers/collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';
import { LeadControlComponent } from './lead-control/lead-control.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: CollectionPageComponent
  // },
  {
    path: 'lead',
    component: LeadControlComponent
   }
  // {
  //   path: 'book/find',
  //   component: FindBookPageComponent
  // },
  // {
  //   path: 'book/:id',
  //   canActivate: [ BookExistsGuard ],
  //   component: ViewBookPageComponent
  // },
  
  // {
  //   path: '**',
  //   component: NotFoundPageComponent
  // }
];
