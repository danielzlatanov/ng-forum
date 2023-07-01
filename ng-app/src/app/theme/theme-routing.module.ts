import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { MainComponent } from './main/main.component';
import { authGuard } from '../shared/guards/auth.activate';

const routes: Routes = [
  {
    path: 'theme',
    children: [
      {
        path: 'list',
        component: MainComponent,
        data: {
          title: 'Theme List',
        },
      },
      {
        path: 'new',
        component: NewThemeComponent,
        canActivate: [authGuard],
        data: {
          title: 'Add New Theme',
          loginRequired: true,
        },
      },
      {
        path: 'content/:id',
        component: ThemeContentComponent,
        data: {
          title: 'Theme Content',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
