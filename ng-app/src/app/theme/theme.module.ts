import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [ThemeListComponent],
    exports: [ThemeListComponent],
    imports: [CommonModule, ThemeRoutingModule, SharedModule]
})
export class ThemeModule {}
