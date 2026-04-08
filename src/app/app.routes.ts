import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserListManager } from './user-list-manager/user-list-manager';
import { ApiIntegration } from './api-integration/api-integration';
import { UserDetails } from './user-details/user-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: ApiIntegration },
  {path:'user-details/:id', component:UserDetails}
];
