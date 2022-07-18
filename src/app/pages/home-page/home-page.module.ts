import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import {HeadersModule} from "../../features/headers/headers.module";
import {HomeModule} from "../../features/home/home.module";
import {NotificationsModule} from "../../features/home/notifications/notifications.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeadersModule,
    HomeModule,
    NotificationsModule
  ]
})
export class HomePageModule { }
