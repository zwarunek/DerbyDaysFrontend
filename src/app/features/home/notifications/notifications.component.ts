import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  displayNotify = false;
  phone: any;
  format;
  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this.format = new FormGroup({
      phone: new FormControl(Validators.required),
    });
  }

  onClickSubmit() {
    this.homeService.optIn(this.phone.replace(/\D/g,'')).subscribe((value) => {
      console.log(value.body);
    });
  }

  showDialog() {
    this.displayNotify = true;
  }
}
