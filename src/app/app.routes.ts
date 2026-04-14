import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserListManager } from './user-list-manager/user-list-manager';
import { ApiIntegration } from './api-integration/api-integration';
import { UserDetails } from './user-details/user-details';
import { authGuard } from './services/auth-guard/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: ApiIntegration, canActivate: [authGuard] },
  { path: 'user-details/:id', component: UserDetails, canActivate: [authGuard] },
];
