import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ComparePassDirective } from './directives/compare-pass.directive';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeComponent,
    ComparePassDirective,
    ShortenTitlePipe,
    ElapsedTimePipe,
    DateFormatPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoaderComponent,
    WelcomeComponent,
    ComparePassDirective,
    ShortenTitlePipe,
    ElapsedTimePipe,
    DateFormatPipe
  ],
})
export class SharedModule {}
