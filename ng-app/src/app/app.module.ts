import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RecentPostListComponent } from './recent-post-list/recent-post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [AppComponent, RecentPostListComponent, MainComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    AuthRoutingModule,
    ThemeModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class AppModule {}
