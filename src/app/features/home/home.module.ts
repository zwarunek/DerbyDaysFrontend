import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsComponent } from './donations/donations.component';
import {ProgressBarModule} from "primeng/progressbar";



@NgModule({
  declarations: [
    DonationsComponent
  ],
  exports: [
    DonationsComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule
  ]
})
export class HomeModule { }
