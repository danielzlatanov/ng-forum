import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ThemeListComponent } from './theme-list/theme-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';

const routes: Routes = [
  {
    path: 'theme',
    children: [
      // {
      //   path: 'list',
      //   component: ThemeListComponent,
      //   data: {
      //     title: 'Theme List',
      //   },
      // },
      {
        path: 'new',
        component: NewThemeComponent,
        data: {
          title: 'Add New Theme',
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
