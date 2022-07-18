import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsComponent } from './donations/donations.component';
import {ProgressBarModule} from "primeng/progressbar";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {DonateComponent} from "./donate/donate.component";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";



@NgModule({
  declarations: [
    DonationsComponent,
    DonateComponent
  ],
  exports: [
    DonationsComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule,
    VirtualScrollerModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule
  ]
})
export class HomeModule { }
