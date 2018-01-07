import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { SideBarComponent } from './shell/side-bar/side-bar.component';
import { ContentComponent } from './shell/content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShellComponent, FooterComponent, HeaderComponent, SideBarComponent, ContentComponent],
  exports: [ShellComponent]
})
export class CoreModule { }
