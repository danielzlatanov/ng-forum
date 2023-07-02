import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ComparePassDirective } from './directives/compare-pass.directive';

@NgModule({
  declarations: [LoaderComponent, WelcomeComponent, ComparePassDirective],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, WelcomeComponent,ComparePassDirective],
})
export class SharedModule {}
