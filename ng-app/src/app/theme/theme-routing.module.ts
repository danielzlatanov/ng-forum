import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ThemeListComponent } from './theme-list/theme-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';

const routes: Routes = [
  {
    path: 'theme',
    children: [
      // {
      //   path: 'list',
      //   component: ThemeListComponent
      // },
      {
        path: 'new',
        component: NewThemeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
