import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ComparePassDirective } from './directives/compare-pass.directive';
import { ShortenTitlePipe } from './shorten-title.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeComponent,
    ComparePassDirective,
    ShortenTitlePipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoaderComponent,
    WelcomeComponent,
    ComparePassDirective,
    ShortenTitlePipe,
  ],
})
export class SharedModule {}
