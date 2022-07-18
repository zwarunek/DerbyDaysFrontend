import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers.component';
import {MenubarModule} from "primeng/menubar";
import {SharedModule} from "primeng/api";
import {ButtonModule} from "primeng/button";



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
    SharedModule,
    ButtonModule
  ]
})
export class HeadersModule { }
