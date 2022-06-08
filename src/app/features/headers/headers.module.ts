import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers.component';
import {MenubarModule} from "primeng/menubar";
import {SharedModule} from "primeng/api";



@NgModule({
  declarations: [
    HeadersComponent
  ],
  exports: [
    HeadersComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    SharedModule
  ]
})
export class HeadersModule { }
