import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { MainComponent } from './main/main.component';
import { RecentPostListComponent } from './recent-post-list/recent-post-list.component';

@NgModule({
  declarations: [
    ThemeListComponent,
    NewThemeComponent,
    ThemeContentComponent,
    MainComponent,
    RecentPostListComponent,
  ],
  exports: [ThemeListComponent],
  imports: [CommonModule, ThemeRoutingModule, SharedModule],
})
export class ThemeModule {}
