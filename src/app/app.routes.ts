import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ApiIntegration } from './api-integration/api-integration';
import { UserDetails } from './user-details/user-details';
import { authGuard } from './services/auth-guard/auth-guard';
import { Registration } from './registration/registration';
import { UserDashboard } from './user-dashboard/user-dashboard';
import { EditUser } from './edit-user/edit-user';
import { TaskManager } from './task-manager/task-manager';
import { Library } from './library/library';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: ApiIntegration, canActivate: [authGuard] },
  { path: 'user-details/:id', component: UserDetails, canActivate: [authGuard] },
  { path: 'registration', component: Registration },
  { path: 'dashboard', component: UserDashboard },
  { path: 'edit/:id', component: EditUser },
  { path: 'task', component: TaskManager },
  { path: 'library', component: Library },
];
