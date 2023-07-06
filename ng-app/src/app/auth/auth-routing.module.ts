import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from '../shared/guards/auth.activate';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
    data: {
      title: 'Login Form',
      loginRequired: false,
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authGuard],
    data: {
      title: 'Register Form',
      loginRequired: false,
    },
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authGuard],
    data: {
      title: 'Logging Out',
      loginRequired: true,
    },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
    data: {
      title: 'Your Profile',
      loginRequired: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
